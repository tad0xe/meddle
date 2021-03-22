<template>
  <div>
    <div class="body">
      <div class="container">
        <div class="container-header">
          <h2>{{$t('login.title')}}</h2>
        </div>
        <div class="container-body">
          <form @submit.prevent="onSubmit">
            <fb-signin-button
              :params="fbSignInParams"
              @success="onFacebookSignInSuccess"
              @error="onFacebookSignInError"
            >
              <i class="fa fa-facebook-square"></i>
              <span>{{$t('login.fbSignIn')}}</span>
            </fb-signin-button>
            <g-signin-button
              :params="googleSignInParams"
              @success="onGoogleSignInSuccess"
              @error="onGoogleSignInError"
            >
              <i class="fa fa-google"></i>
              <span>{{$t('login.googleSignIn')}}</span>
            </g-signin-button>
            <div class="line-center">
              <span>{{$t('login.or')}}</span>
            </div>
            <div class="text-input" :class="{invalid: $v.email.$error}">
              <input
                type="email"
                :placeholder="$t('login.emailPlaceholder')"
                required
                v-model.trim="email"
                name="email"
              />
              <transition name="inputshake">
                <span
                  v-if="!$v.email.email && $v.email.$error"
                >{{$t('login.validationError.emailIsInvalid')}}</span>
                <span
                  v-if="!$v.email.required && $v.email.$error"
                >{{$t('login.validationError.emailIsRequired')}}</span>
              </transition>
            </div>
            <div class="text-input" :class="{invalid: $v.password.$error}">
              <input
                type="password"
                :placeholder="$t('login.passwordPlaceholder')"
                required
                minlength="8"
                v-model.trim="password"
              />
              <transition name="inputshake">
                <span
                  v-if="!$v.password.required && $v.password.$error"
                >{{$t('login.validationError.passwordIsRequired')}}</span>
              </transition>
            </div>
            <div class="error" v-if="error">{{error}}</div>
            <span class="fpw">
              <router-link
                class="link"
                :to="`/${$i18n.locale}/resetpassword`"
              >{{$t('login.forgotPassword')}}</router-link>
            </span>
            <div>
              <button
                type="submit"
                @click.prevent="onSubmit()"
                class="signin-btn"
              >{{$t('buttons.signIn')}}</button>
            </div>
          </form>
        </div>
        <footer class="container-footer">
          <p>
            {{$t('login.dontHaveAccount')}}
            <router-link :to="linkToSignUp">
              <u class="link">{{$t('login.signUp')}}</u>
            </router-link>
          </p>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import { required, email } from "vuelidate/lib/validators";
// import facebookLogin  from "../../facebookLogin";
import axios from "axios";
import { generatePassword } from "../../utility";
export default {
  components: {},
  data() {
    return {
      email: "",
      password: "",
      socialMedia: {
        type: "",
        id: ""
      },
      isGettingPrice: this.$route.query.isGettingPrice,
      inspectionData: this.$route.query.inspectionData,
      fbSignInParams: {
        scope: "public_profile, email",
        return_scopes: true
      },
      googleSignInParams: {
        client_id: process.env.VUE_APP_GOOGLE_LOGIN_CLIENT_ID
      },
      redirectTo: this.$route.query.redirectTo
    };
  },
  validations: {
    email: {
      required,
      email
    },
    password: {
      required
    }
  },
  computed: {
    error() {
      return this.$store.state.errorMessage;
    },
    auth() {
      return this.$store.getters.isAuthenticated;
    },
    linkToSignUp() {
      if (this.isGettingPrice == "yes") {
        return `/${this.$i18n.locale}/signup?isGettingPrice=yes&inspectionData=${this.inspectionData}`;
      } else {
        return `/${this.$i18n.locale}/signup`;
      }
    }
  },
  methods: {
    onSubmit() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }

      const formData = {
        email: this.email,
        password: this.password,
        redirectTo: this.redirectTo
      };
      if (this.isGettingPrice == "yes") {
        //If the user is coming from trying to get a price
        formData.isGettingPrice = this.isGettingPrice;
        formData.inspectionData = JSON.parse(this.inspectionData);
      }
      this.$store.dispatch("login", formData);
    },

    onSocialMediaSignIn(socialProfile) {
      //Check if the user email is already registered
      axios
        .post("/users/checkIfEmailIsRegistered", {
          email: socialProfile.email
        })
        .then(resp => {
          if (resp.data.isUserRegistered == true) {
            //Meaning the user is registered
            const formData = {
              email: socialProfile.email,
              socialMedia: this.socialMedia,
              redirectTo: this.redirectTo,
              auth_response: socialProfile.auth_response
            };
            if (this.isGettingPrice == "yes") {
              //If the user is coming from trying to get a price
              formData.isGettingPrice = this.isGettingPrice;
              formData.inspectionData = JSON.parse(this.inspectionData);
            }
            this.$store.dispatch("socialMediaLogin", formData);
          } else if (resp.data.isUserRegistered == false) {
            //Register as a new user
            const formData = {
              firstName: socialProfile.first_name,
              lastName: socialProfile.last_name,
              email: socialProfile.email,
              password: generatePassword(),
              redirectTo: this.redirectTo
            };
            if (this.isGettingPrice == "yes") {
              //If the user is coming from trying to get a price
              formData.isGettingPrice = this.isGettingPrice;
              formData.inspectionData = JSON.parse(this.inspectionData);
            }
            this.$store.dispatch("signup", formData);
          }
        });
    },

    onFacebookSignInSuccess(response) {
      if (response.status == "connected") {
        FB.api(
          "/me",
          {
            locale: this.$i18n.locale,
            fields: "name, email, first_name, last_name"
          },
          socialProfile => {
            this.socialMedia.type = "Facebook";
            this.socialMedia.id = socialProfile.id;
            this.onSocialMediaSignIn(socialProfile);
          }
        );
      }
    },

    onGoogleSignInSuccess(googleUser) {
      const profile = googleUser.getBasicProfile();
      const auth_response = googleUser.getAuthResponse();
      this.socialMedia.type = "Google";
      this.socialMedia.id = profile.getId();
      const socialProfile = {
        email: profile.getEmail(),
        first_name: profile.getGivenName(),
        last_name: profile.getFamilyName(),
        auth_response
      };
      this.onSocialMediaSignIn(socialProfile);
    },

    onFacebookSignInError(error) {
      // console.log("OH NOES", error);
    },

    onGoogleSignInError(error) {
      // `error` contains any error occurred.
    }
  },

  created() {
    this.$store.commit("clearErrorMessage");
    const token = localStorage.getItem("token");
    if (this.auth && token) {
      this.$router.push(`/${this.$i18n.locale}/account/main-view`);
    }
    if (this.isGettingPrice == "yes") {
      this.email = JSON.parse(this.inspectionData).email;
    }
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.body {
  padding: 10px;
  background-color: white;
  font-family: sans-serif, Arial, Helvetica;
}

.container {
  background-color: white;
  box-shadow: 2px 2px 20px 1px;
  padding: 15px;
  max-width: 400px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 60px;
  margin-bottom: 180px;
  border-radius: 10px;
}

.container-header {
  font-size: 14px;
  float: left;
  display: block;
  margin-bottom: 10px;
}

.fb-signin-button,
.g-signin-button {
  border-radius: 3px;
  padding: 7px 8px;
  /* background-color: #4267b2; */
  width: 100%;
  align-items: center;
  display: flex;
  cursor: pointer;
}

.fb-signin-button {
  margin-bottom: 15px;
  background-image: linear-gradient(to bottom, #4b66a0, #3b5998);
  background-color: white;
  border: 1px solid #3b5998;
  opacity: 0.95;
}

.fb-signin-button:hover {
  opacity: 1;
}

.g-signin-button {
  background-image: linear-gradient(to bottom, #dd4e41, #c9453a);
  background-color: white;
  border: 1px solid #c9453a;
  opacity: 0.95;
}

.g-signin-button:hover {
  opacity: 1;
}

.fb-signin-button i,
.g-signin-button i {
  font-size: 22px;
  padding-left: 50px;
  padding-right: 20px;
  color: white;
}

.fb-signin-button span,
.g-signin-button span {
  line-height: 22px;
  font-size: 16px;
  color: white;
}

.line-center {
  margin-top: 20px;
  margin-bottom: 10px;
  text-align: center;
  position: relative;
  z-index: 2;
}
.line-center:after {
  content: "";
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  border-top: solid 1px #ccc;
  z-index: -1;
}

.line-center span {
  font-size: 14px;
  color: grey;
  margin: 0;
  padding: 2px 10px;
  background: white;
  display: inline-block;
}

.container-footer {
  padding-top: 10px;
  border-top: 1.5px solid #eeeeee;
  font-size: 13px;
}

.container-body {
  font-size: 13px;
  padding-top: 10px;
  padding-bottom: 10px;
}

.btn-close {
  border: none;
  font-size: 20px;
  cursor: pointer;
  font-weight: bold;
  color: #4aae9b;
  background: transparent;
}

.btn-close-upper {
  float: right;
  font-weight: bold;
  border: 1.5px solid;
  cursor: pointer;
  padding-left: 3px;
  padding-right: 3px;
}

.text-input {
  margin: 10px 0px;
  float: left;
  width: 100%;
  position: relative;
}

input {
  width: 100%;
  padding: 10px;
  border-radius: 3px;
  outline: none;
  border: 1px solid #ccc;
  background-color: aliceblue;
}

input:focus {
  border: 1px solid #212259;
  background-color: rgb(232, 240, 254);
}

.invalid input {
  border: 1px solid red;
}

.signin-btn {
  background-color: #13b6f7;
  color: white;
  padding: 10px 20px;
  margin: 8px 0;
  border: none;
  outline: none;
  cursor: pointer;
  text-align: center;
  width: 100%;
  border-radius: 5px;
  box-sizing: border-box;
  font-size: 16px;
}

.signin-btn:hover {
  background-color: #13b6f7;
}

.link {
  cursor: pointer;
  color: #13b6f7;
}

.link:hover {
  color: #212259;
}

.fpw {
  float: right;
}

.fpw:hover {
  text-decoration-line: underline;
  cursor: pointer;
}

.text-input span {
  color: red;
  font-size: 11px;
  display: block;
}

.error {
  color: red;
  font-size: 11px;
  float: left;
  margin-bottom: 5px;
  width: 100%;
}

.inputshake-enter {
  opacity: 0;
}

.inputshake-enter-active {
  animation: inputshake-in 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
  transition: opacity 0.5s;
}

.inputshake-leave-active {
  transition: opacity 0.5s;
  opacity: 0;
}

@keyframes inputshake-in {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}

/* For mobile phones: */
@media only screen and (max-width: 420px) {
  .container {
    box-shadow: none;
    padding: 20px 10px;
    width: 100%;
    position: static;
    left: 0px;
    margin: 0px;
    border-radius: 5px;
    transform: none;
    display: block;
    border: 1px solid #ddd;
  }
}
</style>
