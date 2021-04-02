<template>
  <div>
    <div class="body">
      <div class="container">
        <div class="container-header">
          <h2>Sign Up</h2>or
          <router-link to="/inspector">
            <u class="as-inspector">sign up as an inspector</u>
          </router-link>
        </div>
        <div class="container-body">
          <form @submit.prevent="onSubmit()">
            <div class="fb-google">
              <fb-signin-button
                :params="fbSignInParams"
                @success="onFacebookSignInSuccess"
                @error="onFacebookSignInError"
              >
                <i class="fa fa-facebook-square"></i>
                <span>Sign up with Facebook</span>
              </fb-signin-button>
              <g-signin-button
                :params="googleSignInParams"
                @success="onGoogleSignInSuccess"
                @error="onGoogleSignInError"
              >
                <i class="fa fa-google"></i>
                <span>Sign up with Google</span>
              </g-signin-button>
            </div>
            <div class="line-center">
              <span>or</span>
            </div>
            <div class="text-input" :class="{invalid: $v.firstName.$error}">
              <input type="text" required placeholder="First Name" v-model.trim="firstName" />
              <transition name="inputshake">
                <span v-if="!$v.firstName.required && $v.firstName.$error">First name is required.</span>
              </transition>
            </div>
            <div class="text-input" :class="{invalid: $v.lastName.$error}">
              <input type="text" required placeholder="Last Name" v-model.trim="lastName" />
              <transition name="inputshake">
                <span v-if="!$v.lastName.required && $v.lastName.$error">Last name is required.</span>
              </transition>
            </div>
            <div class="text-input" :class="{invalid: $v.email.$error}" v-if="!auth">
              <input
                type="email"
                required
                placeholder="Enter Email"
                v-model.trim="email"
                name="email"
              />
              <transition name="inputshake">
                <span v-if="!$v.email.email">Email is invalid.</span>
                <span v-if="!$v.email.required && $v.email.$error">Email is required.</span>
                <div class="error" v-if="error">{{error}}</div>
              </transition>
            </div>
            <div class="checkbox-input">
              <label class="flex">
                <input type="checkbox" v-model="isBusiness" />
                <span>Are you a business?</span>
              </label>
            </div>
            <div class="text-input" v-if="isBusiness">
              <input type="text" required placeholder="Enter Business Name" v-model="company" />
              <transition name="inputshake">
                <span v-if="!$v.company.required && $v.company.$error">Business name is required.</span>
              </transition>
            </div>
            <div class="text-input" :class="{invalid: $v.password.$error}">
              <input type="password" required placeholder="Enter Password" v-model.trim="password" />
              <transition name="inputshake">
                <span
                  v-if="!$v.password.minLen"
                >Password must be at least {{ $v.password.$params.minLen.min }}.</span>
                <span v-if="!$v.password.required && $v.password.$error">Password is required.</span>
              </transition>
            </div>
            <div class="text-input" :class="{invalid: $v.passwordRepeat.$error}">
              <input
                type="password"
                required
                placeholder="Repeat Password"
                v-model.trim="passwordRepeat"
              />
              <transition name="inputshake">
                <span
                  v-if="!$v.passwordRepeat.required && $v.passwordRepeat.$error"
                >Repeat password is required.</span>
                <span v-else-if="!$v.passwordRepeat.sameAs">Passwords must match.</span>
              </transition>
            </div>
            <div class="text-spaced">
              <span>
                By creating an account, you agree to our
                <a class="link" href="#">Terms & Privacy</a>.
              </span>
            </div>
            <div class="clearfix">
              <button type="submit" @click.prevent="onSubmit()" class="signupbtn">Sign Up</button>
            </div>
          </form>
        </div>
        <footer class="container-footer">
          <p>
            Already have an account?
            <router-link :to="linkToSignIn">
              <u class="link">Sign In</u>
            </router-link>&nbsp; &nbsp; | &nbsp; &nbsp;
            <router-link to="/resetpassword">
              <u class="link">Forgot Password</u>
            </router-link>
          </p>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import FB from "../../facebookLogin.js";
// import googleLogin from "../../facebookLogin";
import {
  required,
  email,
  minLength,
  sameAs,
  requiredIf
} from "vuelidate/lib/validators";
import axios from "axios";
import { generatePassword } from "../../utility";
export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      isBusiness: false,
      password: "",
      passwordRepeat: "",
      company: "",
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
      }
    };
  },
  validations() {
    return {
      firstName: {
        required
      },
      lastName: {
        required
      },
      email: {
        required,
        email
      },
      company: {
        required: requiredIf(vm => {
          return vm.isBusiness;
        })
      },
      password: {
        required,
        minLen: minLength(8)
      },
      passwordRepeat: {
        required,
        sameAs: sameAs(vm => {
          return vm.password;
        })
      }
    };
  },
  methods: {
    onGoogleSignInSuccess(googleUser) {
      const profile = googleUser.getBasicProfile();
      this.socialMedia.type = "Google";
      // this.socialMedia.id = profile.getId();
      const socialProfile = {
        email: profile.getEmail(),
        first_name: profile.getGivenName(),
        last_name: profile.getFamilyName()
      };
      this.onSocialMediaSignIn(socialProfile);
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
            // this.socialMedia.id = socialProfile.id;
            this.onSocialMediaSignIn(socialProfile);
          }
        );
      } 
    },
    onSocialMediaSignIn(socialProfile) {
      //Check if the user email is already registered
      axios
        .post("/users/checkIfEmailIsRegistered", {
          email: socialProfile.email
        })
        .then(resp => {
          if (resp.data.isUserRegistered == true) {
            //Log the user in using social media
            this.$store.dispatch("socialMediaLogin", {
              email: socialProfile.email,
              socialMedia: this.socialMedia
            });
          } else if (resp.data.isUserRegistered == false) {
            //Register as a new user
            this.firstName = socialProfile.first_name;
            this.lastName = socialProfile.last_name;
            this.email = socialProfile.email;
            this.password = generatePassword();
            this.onSubmit();
          }
        });
    },

    // onFacebookSignInError(error) {},
    // onGoogleSignInError(error) {},

    onSubmit() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }

      const formData = {
        firstName: this.firstName,
        lastName: this.lastName,
        isBusiness: this.isBusiness,
        email: this.email,
        password: this.password,
        // passwordRepeat: this.passwordRepeat,
        contactInfo: {
          company: this.company
        }
      };
      if (this.isGettingPrice == "yes") {
        //If the user is coming from trying to get a price
        formData.isGettingPrice = this.isGettingPrice;
        formData.inspectionData = JSON.parse(this.inspectionData);
      }
      this.$store.dispatch("signup", formData);
    }
  },

  computed: {
    auth() {
      return this.$store.getters.isAuthenticated;
    },
    error() {
      return this.$store.state.errorMessage;
    },
    linkToSignIn() {
      if (this.isGettingPrice == "yes") {
        return `/login?isGettingPrice=yes&inspectionData=${this.inspectionData}`;
      } else {
        return "/login";
      }
    }
  },
  created() {
    this.$store.commit("clearErrorMessage");
    const token = localStorage.getItem("token");
    if (this.auth && token) {
      this.$router.push("/account/main-view");
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
  margin-top: 40px;
  margin-bottom: 180px;
  border-radius: 10px;
}

.container-header {
  font-size: 14px;
  float: left;
  display: block;
  margin-bottom: 10px;
}

.fb-google {
  padding-top: 5px;
  width: 100%;
  display: inline-block;
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
  /* flex: 1; */
  /* background-color: #4267b2; */
  background-image: linear-gradient(to bottom, #4b66a0, #3b5998);
  background-color: white;
  border: 1px solid #3b5998;
  opacity: 0.95;
}

.fb-signin-button:hover {
  opacity: 1;
}

.g-signin-button {
  margin-top: 15px;
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

.signupbtn {
  background-color: #13b6f7;
  color: white;
  padding: 10px 20px;
  margin-top: 20px;
  margin-bottom: 10px;
  border: 1px solid #07b9dd;
  outline: none;
  cursor: pointer;
  text-align: center;
  width: 100%;
  border-radius: 40px;
  box-sizing: border-box;
  font-size: 16px;
}

.signupbtn:hover {
  background-color: #13b6f7;
}

.link {
  cursor: pointer;
  color: #13b6f7;
}

.as-inspector {
  cursor: pointer;
  color: #13b6f7;
  font-size: 15px;
}

.link:hover,
.as-inspector:hover {
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
  margin-top: 10px;
  width: 100%;
}

.text-spaced {
  padding-top: 10px;
  display: inline-block;
}

.checkbox-input {
  padding-top: 10px;
  padding-bottom: 10px;
  display: inline-block;
}

.flex {
  display: flex;
  align-items: center;
}

.flex span {
  font-size: 13px;
}

input[type="checkbox"] {
  width: auto;
  margin-right: 5px;
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
