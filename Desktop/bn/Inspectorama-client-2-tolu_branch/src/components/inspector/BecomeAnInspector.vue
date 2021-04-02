<template>
  <div>
    <div class="container">
      <div style="background-color:white;">
        <div style="justify-content:center; display:flex;">
          <div class="top-container">
            <div class="top-container-left">
              <form @submit.prevent="onSubmit">
                <div class="top-container-left-tittle">
                  <h1>{{$t('inspector.topRow.title')}}</h1>
                  <p>{{$t('inspector.topRow.subTitle')}}</p>
                </div>
                <div class="row">
                  <div class="column1" :class="{invalid: $v.firstName.$error}">
                    <transition name="inputslide">
                      <div
                        class="absolute-text"
                        v-if="firstName"
                      >{{$t('inspector.topRow.regForm.firstName')}}</div>
                    </transition>
                    <input
                      type="text"
                      required
                      :placeholder="$t('inspector.topRow.regForm.firstName')"
                      v-model="firstName"
                    />
                    <transition name="shake">
                      <span
                        v-if="!$v.firstName.required && $v.firstName.$error"
                      >{{$t('inspector.topRow.regForm.errorMessages.firstName')}}</span>
                    </transition>
                  </div>
                  <div class="column2" :class="{invalid: $v.lastName.$error}">
                    <transition name="inputslide">
                      <label
                        class="absolute-text"
                        v-if="lastName"
                      >{{$t('inspector.topRow.regForm.lastName')}}</label>
                    </transition>
                    <input
                      type="text"
                      required
                      :placeholder="$t('inspector.topRow.regForm.lastName')"
                      v-model="lastName"
                    />
                    <transition name="shake">
                      <span
                        v-if="!$v.lastName.required && $v.lastName.$error"
                      >{{$t('inspector.topRow.regForm.errorMessages.lastName')}}</span>
                    </transition>
                  </div>
                </div>
                <div class="row">
                  <div class="column1" :class="{invalid: $v.typeOfInspector.$error}">
                    <!-- <transition name="inputslide">
                      <label class="absolute-text" v-if="typeOfInspector">Your inspection service</label>
                    </transition>-->
                    <select name="typeOfInspector" required v-model="typeOfInspector">
                      <option
                        value
                        disabled
                        selected
                        hidden
                      >{{$t('inspector.topRow.regForm.inspectionService')}}</option>
                      <option value="vehicle">{{$t("dbDictionary.typeOfInspection.vehicle")}}</option>
                      <option value="nome">{{$t("dbDictionary.typeOfInspection.home")}}</option>
                    </select>
                    <transition name="shake">
                      <span
                        v-if="!$v.typeOfInspector.required && $v.typeOfInspector.$error"
                      >{{$t('inspector.topRow.regForm.errorMessages.inspectionService')}}</span>
                    </transition>
                  </div>
                  <div class="column2" :class="{invalid: $v.countryOfInspector.$error}">
                    <!-- <transition name="inputslide">
                      <label class="absolute-text" v-if="countryOfInspector">Country</label>
                    </transition>-->
                    <select
                      required
                      @change="getDialingCode(), getStates(countryOfInspector)"
                      v-model="countryOfInspector"
                    >
                      <option
                        value
                        disabled
                        selected
                        hidden
                      >{{$t('inspector.topRow.regForm.country')}}</option>
                      <option
                        v-for="(countryObj, index) in countriesPresentIn"
                        :key="index"
                        :value="countryObj.country"
                      >{{translateValue(countryObj.country, $t('dbDictionary.countriesPresentIn'))}}</option>
                    </select>
                    <transition name="shake">
                      <span
                        v-if="!$v.countryOfInspector.required && $v.countryOfInspector.$error"
                      >{{$t('inspector.topRow.regForm.errorMessages.country')}}</span>
                    </transition>
                  </div>
                </div>
                <div class="row">
                  <div class="column1" :class="{invalid: $v.stateOfInspector.$error}">
                    <!-- <transition name="inputslide">
                      <label
                        class="absolute-text"
                        v-if="stateOfInspector"
                      >{{$t('inspector.topRow.regForm.state')}}</label>
                    </transition>-->
                    <select name="stateOfInspector" required v-model="stateOfInspector">
                      <option
                        value
                        disabled
                        selected
                        hidden
                      >{{$t('inspector.topRow.regForm.state')}}</option>
                      <option v-for="(obj, index) in statesPresentIn" :key="index">{{obj.state}}</option>
                    </select>
                    <transition name="shake">
                      <span
                        v-if="!$v.stateOfInspector.required && $v.stateOfInspector.$error"
                      >{{$t('inspector.topRow.regForm.errorMessages.state')}}</span>
                    </transition>
                  </div>
                  <div class="column2" :class="{invalid: $v.cityOfInspector.$error}">
                    <transition name="inputslide">
                      <label
                        class="absolute-text"
                        v-if="cityOfInspector"
                      >{{$t('inspector.topRow.regForm.city')}}</label>
                    </transition>
                    <input
                      type="text"
                      :placeholder="$t('inspector.topRow.regForm.city')"
                      v-model="cityOfInspector"
                      required
                    />
                    <transition name="shake">
                      <span
                        v-if="!$v.cityOfInspector.required && $v.cityOfInspector.$error"
                      >{{$t('inspector.topRow.regForm.errorMessages.city')}}</span>
                    </transition>
                  </div>
                </div>
                <div class="row">
                  <div class="column1" :class="{invalid: $v.email.$error}" v-if="!auth">
                    <transition name="inputslide">
                      <label
                        class="absolute-text"
                        v-if="email"
                      >{{$t('inspector.topRow.regForm.email')}}</label>
                    </transition>
                    <input
                      type="email"
                      required
                      :placeholder="$t('inspector.topRow.regForm.email')"
                      v-model="email"
                    />
                    <transition name="shake">
                      <span
                        v-if="!$v.email.email"
                      >{{$t('inspector.topRow.regForm.errorMessages.emailIsInvalid')}}</span>
                      <span
                        v-if="!$v.email.required && $v.email.$error"
                      >{{$t('inspector.topRow.regForm.errorMessages.emailIsInRequired')}}.</span>
                    </transition>
                  </div>
                </div>
                <div class="row" v-if="!auth">
                  <div class="column1" :class="{invalid: $v.password.$error}">
                    <transition name="inputslide">
                      <label
                        class="absolute-text"
                        v-if="password"
                      >{{$t('inspector.topRow.regForm.password')}}</label>
                    </transition>
                    <input
                      type="password"
                      required
                      :placeholder="$t('inspector.topRow.regForm.password')"
                      v-model="password"
                    />
                    <transition name="shake">
                      <span
                        v-if="!$v.password.minLen"
                      >{{$t('inspector.topRow.regForm.errorMessages.passwordMinLength')}} {{ $v.password.$params.minLen.min }}.</span>
                      <span
                        v-if="!$v.password.required && $v.password.$error"
                      >{{$t('inspector.topRow.regForm.errorMessages.passwordIsRequired')}}</span>
                    </transition>
                  </div>
                  <div class="column2" :class="{invalid: $v.repeatPassword.$error}">
                    <transition name="inputslide">
                      <label
                        class="absolute-text"
                        v-if="repeatPassword"
                      >{{$t('inspector.topRow.regForm.repeatPassword')}}</label>
                    </transition>
                    <input
                      type="password"
                      required
                      :placeholder="$t('inspector.topRow.regForm.repeatPassword')"
                      v-model="repeatPassword"
                    />
                    <transition name="shake">
                      <span
                        v-if="!$v.repeatPassword.required && $v.repeatPassword.$error"
                      >{{$t('inspector.topRow.regForm.errorMessages.repeatPasswordRequired')}}</span>
                      <span
                        v-else-if="!$v.repeatPassword.sameAs"
                      >{{$t('inspector.topRow.regForm.errorMessages.repeatPasswordMustMatch')}}</span>
                    </transition>
                  </div>
                </div>
                <div class="text-wrapper">
                  <p>
                    {{$t('inspector.topRow.agreement')}}
                    <span class="link">
                      <router-link
                        tag="span"
                        :to="`/${$i18n.locale}/terms`"
                      >{{$t('inspector.topRow.terms')}}</router-link>
                    </span> &
                    <span class="link">
                      <router-link
                        tag="span"
                        :to="`/${$i18n.locale}/privacy`"
                      >{{$t('inspector.topRow.privacy')}}</router-link>
                    </span>
                  </p>
                  <p class="error" v-if="error">{{error}}</p>
                </div>
                <div>
                  <button
                    type="submit"
                    class="primary-btn"
                    @click.prevent="onSubmit()"
                  >{{$t('buttons.getStarted')}}</button>
                </div>
                <div class="text-wrapper">
                  <p>
                    {{$t('inspector.topRow.isAlreadyApplied')}}
                    <span
                      class="link"
                      @click="onClickLink()"
                    >{{$t('inspector.topRow.here')}}</span>
                  </p>
                </div>
              </form>
            </div>
            <div class="top-container-right">
              <table>
                <transition name="slideleft1" appear>
                  <tr>
                    <td class="dollar">
                      <i class="fa fa-dollar"></i>
                    </td>
                    <td>
                      <h1>{{$t('inspector.topRow.greatPay.title')}}</h1>
                      <p>{{$t('inspector.topRow.greatPay.body')}}</p>
                    </td>
                  </tr>
                </transition>
                <transition name="slideleft2" appear>
                  <tr>
                    <td class="calendar">
                      <i class="fa fa-calendar"></i>
                    </td>
                    <td>
                      <h1>{{$t('inspector.topRow.flexibleSchedule.title')}}</h1>
                      <p>{{$t('inspector.topRow.flexibleSchedule.body')}}</p>
                    </td>
                  </tr>
                </transition>
                <transition name="slideleft3" appear>
                  <tr>
                    <td class="credit-card">
                      <i class="fa fa-credit-card"></i>
                    </td>
                    <td>
                      <h1>{{$t('inspector.topRow.smoothPayments.title')}}</h1>
                      <p>{{$t('inspector.topRow.smoothPayments.body')}}</p>
                    </td>
                  </tr>
                </transition>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div style="background-color: whitesmoke;">
        <div style="justify-content:center; display:flex;">
          <div class="container-bottom" ref="bottomRowPosition">
            <transition name="slideright">
              <div v-if="animateBottomRow" class="container-bottom-left">
                <div class="container-bottom-left-image">
                  <img src="../../assets/images/become-an-inspector-image.jpg" />
                </div>
              </div>
            </transition>
            <transition name="fade">
              <div v-if="animateBottomRow" class="container-bottom-right">
                <div>
                  <h1>{{$t('inspector.requirements.title')}}</h1>
                </div>
                <table>
                  <tr>
                    <td>
                      <i class="fa fa-minus"></i>
                    </td>
                    <td>
                      <h2>{{$t('inspector.requirements.general.title')}}</h2>
                      <p>{{$t('inspector.requirements.general.body.line1')}}</p>
                      <p>{{$t('inspector.requirements.general.body.line2')}}</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <i class="fa fa-minus"></i>
                    </td>
                    <td>
                      <h2>{{$t('inspector.requirements.vehicle.title')}}</h2>
                      <p>{{$t('inspector.requirements.vehicle.body.line1')}}</p>
                      <p>{{$t('inspector.requirements.vehicle.body.line2')}}</p>
                      <p>{{$t('inspector.requirements.vehicle.body.line3')}}</p>
                      <p>{{$t('inspector.requirements.vehicle.body.line4')}}</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <i class="fa fa-minus"></i>
                    </td>
                    <td>
                      <h2>{{$t('inspector.requirements.home.title')}}</h2>
                      <p>{{$t('inspector.requirements.home.body.line1')}}</p>
                      <p>{{$t('inspector.requirements.home.body.line2')}}</p>
                      <p>{{$t('inspector.requirements.home.body.line3')}}</p>
                    </td>
                  </tr>
                </table>
              </div>
            </transition>
          </div>
        </div>
      </div>
      <CheckInspectorApplicationStatus
        v-show="isCheckInspectorApplicationStatusVisible"
        @close="hideInspectorApplicationStatusModal()"
      ></CheckInspectorApplicationStatus>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import CheckInspectorApplicationStatus from "../modals/CheckInspectorApplicationStatus.vue";
import { mapState, mapActions, mapMutations, mapGetters } from "vuex";
import {
  required,
  email,
  minLength,
  sameAs,
  requiredUnless
} from "vuelidate/lib/validators";
import dialingCodesList from "../../mockData/dialingCodesList";
import countriesPresentIn from "../../mockData/countriesPresentIn";
import { generatePassword, translateValue } from "../../utility";

export default {
  components: {
    CheckInspectorApplicationStatus
  },
  data() {
    return {
      translateValue,
      animateBottomRow: false,
      firstName: "",
      lastName: "",
      email: this.$route.query.referredEmail,
      password: "",
      repeatPassword: "",
      typeOfInspector: "",
      countryOfInspector: "",
      stateOfInspector: "",
      cityOfInspector: "",
      countryCode: "",
      referrer: this.$route.query.referrer,
      isCheckInspectorApplicationStatusVisible: false,
      countriesPresentIn: countriesPresentIn,
      statesPresentIn: [],
      dialingCodes: dialingCodesList
    };
  },
  validations: {
    firstName: {
      required
    },
    lastName: {
      required
    },
    email: {
      required: requiredUnless(vm => {
        return vm.auth;
      }),
      email
    },
    typeOfInspector: {
      required
    },
    countryOfInspector: {
      required
    },
    stateOfInspector: {
      required
    },
    cityOfInspector: {
      required
    },
    password: {
      required: requiredUnless(vm => {
        return vm.auth;
      }),
      minLen: minLength(8)
    },
    repeatPassword: {
      required: requiredUnless(vm => {
        return vm.auth;
      }),
      sameAs: sameAs(vm => {
        return vm.password;
      })
    }
  },
  methods: {
    onSubmit() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }

      const formData = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password,
        pro: {
          isInspector: true,
          typeOfInspector: this.typeOfInspector,
          isInspectorProfileApproved: false
        },
        contactInfo: {
          city: this.cityOfInspector,
          state: this.stateOfInspector,
          country: this.countryOfInspector,
          countryCode: this.countryCode
        },
        referrer: this.referrer,
        isRegisteringAsInspector: true
      };

      if (!this.auth) {
        this.$store.dispatch("signup", formData);
      }
      if (this.auth) {
        delete formData.password;
        this.$store.dispatch("storeInspector", formData);
      }
    },

    onClickLink() {
      if (!this.auth || (this.auth && !this.isInspector)) {
        this.isCheckInspectorApplicationStatusVisible = true;
      }
      if (this.auth && this.isInspector) {
        this.$store.dispatch("fetchInspectorInfo");
        this.$router.push(
          `/${
            this.$i18n.locale
          }/status/inspector-registration/${localStorage.getItem("userId")}`
        );
      }
    },

    hideInspectorApplicationStatusModal() {
      this.isCheckInspectorApplicationStatusVisible = false;
    },

    getDialingCode() {
      let dialingCode;
      let selectedCountry = this.countryOfInspector;
      this.dialingCodes.forEach(item => {
        if (item.country == selectedCountry) {
          dialingCode = item.code;
        }
      });
      this.countryCode = dialingCode;
    },

    getStates(country) {
      const selectedCountry = [];
      this.countriesPresentIn.forEach(item => {
        if (item.country == country) {
          selectedCountry.push(item);
          return;
        }
      });
      this.statesPresentIn = selectedCountry[0].states;
    },

    onScroll() {
      // checking for visibility
      if (
        this.$refs.bottomRowPosition.getBoundingClientRect().top + 100 <
        window.innerHeight
      ) {
        this.animateBottomRow = true;
      }
    }
  },

  computed: {
    auth() {
      return this.$store.getters.isAuthenticated;
    },
    isInspector() {
      return this.$store.getters.isInspector;
    },
    getTypeOfInspector() {
      return this.$store.getters.typeOfInspector;
    },
    error() {
      return this.$store.getters.error;
    }
  },
  created() {
    this.$store.commit("clearErrorMessage");
    if (this.auth) {
      axios
        .get("/users/me")
        .then(res => {
          this.firstName = res.data.firstName;
          this.lastName = res.data.lastName;
          this.email = res.data.email;
        })
        .catch(error => {
          if(process.env.NODE_ENV == "development"){
            console.log(error)
          }
        });
    }
    this.$nextTick(() => {
      this.onScroll();
      window.addEventListener("scroll", this.onScroll);
    });
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

@media screen and (min-width: 801px) {
  .container-bottom-left {
    width: 42%;
    padding-right: 30px;
    justify-content: flex-start;
    display: flex;
  }

  .container-bottom-left img {
    width: 100%;
    max-width: 400px;
    height: auto;
  }

  .slideright-enter {
    opacity: 0;
  }

  .slideright-enter-active {
    animation: slide-right 0.5s ease-out forwards;
    transition: opacity 0.5s;
  }

  @keyframes slide-right {
    from {
      transform: translateX(-60px);
    }
    to {
      transform: translateX(0);
    }
  }
}

.container {
  font-family: sans-serif, Arial, Helvetica;
  width: 100%;
  background-color: white;
  display: inline-block;
}

.fade-enter,
.slideleft1-enter,
.slideleft2-enter,
.slideleft3-enter {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 2s;
}

.slideleft1-enter-active {
  animation: slide-left1 1.2s ease-out forwards;
}

@keyframes slide-left1 {
  from {
    transform: translateX(130%);
  }
  to {
    transform: translateX(0);
  }
}

.slideleft2-enter-active {
  animation: slide-left2 2.2s ease-out forwards;
}

@keyframes slide-left2 {
  from {
    transform: translateX(390%);
  }
  to {
    transform: translateX(0);
  }
}

.slideleft3-enter-active {
  animation: slide-left3 3.2s ease-out forwards;
}

@keyframes slide-left3 {
  from {
    transform: translateX(750%);
  }
  to {
    transform: translateX(0);
  }
}

.inputslide-enter {
  opacity: 0;
}

.inputslide-enter-active {
  animation: inputslide-in 0.2s ease-out forwards;
  transition: opacity 0.2s;
}
.inputslide-leave-active {
  animation: inputslide-out 0.1s ease-out forwards;
  transition: opacity 0.1s;
  opacity: 0;
}

@keyframes inputslide-in {
  from {
    transform: translateY(12px);
    font-size: 15px;
  }
  to {
    transform: translateY(0px);
  }
}

@keyframes inputslide-out {
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(12px);
    font-size: 14px;
  }
}

.top-container {
  padding: 30px 60px;
  padding-bottom: 40px;
  width: 100%;
  max-width: 1700px;
  justify-content: space-between;
  display: flex;
}

.top-container-left {
  padding-right: 30px;
  width: 750px;
}

.top-container-right {
  padding: 35px 40px;
  padding-right: 80px;
  border-radius: 3px;
  flex: 1;
  max-width: 550px;
  min-width: 400px;
  color: white;
  overflow: hidden;
  background-color: #212259;
  display: inline-table;
}

table {
  width: 100%;
}

.top-container-right td {
  padding-top: 30px;
  padding-bottom: 30px;
  vertical-align: top;
  text-align: center;
}

.top-container-left-tittle h1 {
  font-size: 30px;
}

.top-container-left-tittle p {
  font-size: 15px;
  padding-top: 20px;
  padding-bottom: 20px;
  font-weight: bold;
  color: darkred;
}

.top-container-right h1 {
  font-size: 18px;
  text-align: left;
}

.top-container-right p {
  padding-top: 15px;
  text-align: left;
  font-size: 14px;
}

.top-container-right i {
  padding-right: 20px;
  color: #f59a23;
}

.dollar i {
  font-size: 40px;
}

.calendar i {
  font-size: 35px;
}

.credit-card i {
  font-size: 34px;
}

.container-bottom {
  padding: 60px;
  width: 100%;
  max-width: 1700px;
  display: flex;
}

.container-bottom-right {
  width: auto;
}

.container-bottom-right td {
  padding-top: 20px;
  padding-bottom: 0px;
  vertical-align: top;
  text-align: center;
}

.container-bottom-right h1 {
  font-size: 30px;
  color: #212259;
}

.container-bottom-right h2 {
  font-size: 19px;
  text-align: left;
  color: #f59a23;
}

.container-bottom-right p {
  padding-top: 10px;
  padding-bottom: 8px;
  text-align: left;
  font-size: 15px;
}

.container-bottom-right i {
  font-size: 26px;
  line-height: 20px;
  padding-right: 10px;
  color: #f59a23;
}

.text-wrapper p {
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 14px;
}

.row {
  width: 100%;
  display: flex;
}

.column1,
.column2 {
  margin: 12px 0px;
  width: 50%;
  max-width: 300px;
  position: relative;
}

.column1 {
  padding-right: 10px;
}

.column2 {
  padding-left: 10px;
}

.column1 .absolute-text,
.column2 .absolute-text {
  top: 0px;
  left: 8px;
  padding-left: 3px;
  padding-right: 3px;
  font-size: 10px;
  color: grey;
  transform: translateY(-50%);
  background-color: white;
  position: absolute;
}

.column2 .absolute-text {
  left: 18px;
}

input,
select {
  font-size: 14px;
  padding: 11px 10px;
  width: 100%;
  border: 1px solid #b6b1b1;
  border-radius: 4px;
  outline: none;
  background-color: white;
}

select {
  padding: 11px 5px;
}

select:invalid {
  color: #777777;
}

option {
  color: black;
}

.invalid input,
.invalid select {
  border: 1px solid red;
}

input:focus,
select:focus {
  outline: none;
  border: 1px solid #212259;
}

.column1 span,
.column2 span {
  color: red;
  font-size: 12px;
  display: block;
}

/* .submit-btn {
  background-color: #13b6f7;
  color: white;
  margin: 10px 0px;
  padding: 12px 20px;
  outline: none;
  border: none;
  font-size: 18px;
  text-align: center;
  border-radius: 5px;
  cursor: pointer;
}

.submit-btn:hover {
  background-color: #13b6f7;
} */

.link {
  cursor: pointer;
  color: #13b6f7;
}

.link:hover {
  color: #212259;
}

.error {
  color: red;
}

@media only screen and (max-width: 1150px) {
  .top-container,
  .container-bottom {
    padding-left: 40px;
    padding-right: 40px;
  }

  @keyframes slide-right {
    from {
      transform: translateX(-30px);
    }
    to {
      transform: translateX(0);
    }
  }
}

@media only screen and (max-width: 980px) {
  .top-container {
    padding: 0px;
    flex-direction: column;
  }

  .top-container-left {
    padding: 30px;
    width: 100%;
  }

  .top-container-right {
    border-radius: 0px;
    padding: 30px;
    min-width: 100%;
    max-width: 100%;
  }

  .container-bottom {
    padding: 40px 30px;
  }

  .container-bottom-left {
    padding-right: 25px;
    width: 45%;
  }

  .container-bottom-right p {
    padding-bottom: 6px;
  }
}

@media only screen and (max-width: 800px) {
  .container-bottom-left {
    display: none;
  }

  .container-bottom-right {
    width: 100%;
  }

  @media only screen and (max-width: 560px) {
    .top-container-left,
    .top-container-right {
      padding: 20px;
    }

    .container-bottom {
      padding: 25px 20px;
    }
  }
}

/* For mobile phones: */
@media only screen and (max-width: 510px) {
  .row {
    flex-direction: column;
  }
  .column1,
  .column2 {
    padding: 0px;
    width: 100%;
    max-width: 100%;
  }

  .column2 .absolute-text {
    left: 8px;
  }

  @media only screen and (max-width: 380px) {
    .top-container-left {
      padding: 20px 10px;
    }

    .top-container-right {
      padding: 10px;
    }

    .container-bottom {
      padding: 25px 10px;
    }

    .top-container-left-tittle h1,
    .container-bottom-right h1 {
      font-size: 25px;
    }

    .top-container-right h1 {
      font-size: 17px;
    }

    .top-container-right td {
      padding-top: 20px;
      padding-bottom: 20px;
    }

    .top-container-right p {
      padding-top: 10px;
    }

    .dollar i {
      font-size: 36px;
    }

    .calendar i {
      font-size: 30px;
    }

    .credit-card i {
      font-size: 30px;
    }
  }
}
</style>
