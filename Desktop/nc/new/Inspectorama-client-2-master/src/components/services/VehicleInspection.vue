<template>
  <div>
    <div class="body">
      <div class="container-content">
        <transition name="slide" appear>
          <div class="container-content-text">
            <h1 class="desktop">{{$t("vehicleInspection.topRow.title")}}</h1>
            <table>
              <tr>
                <td>
                  <i class="fas fa-square-full"></i>
                </td>
                <td>{{$t("vehicleInspection.topRow.line1")}}</td>
              </tr>
              <tr>
                <td>
                  <i class="fas fa-square-full"></i>
                </td>
                <td>{{$t("vehicleInspection.topRow.line2")}}</td>
              </tr>
              <tr>
                <td>
                  <i class="fas fa-square-full"></i>
                </td>
                <td>{{$t("vehicleInspection.topRow.line3")}}</td>
              </tr>
              <tr>
                <td>
                  <i class="fas fa-square-full"></i>
                </td>
                <td>{{$t("vehicleInspection.topRow.line4")}}</td>
              </tr>
            </table>
          </div>
        </transition>
        <form @submit.prevent="onSubmit">
          <h1 class="mobile">{{$t('vehicleInspection.form.title')}}</h1>
          <div class="row">
            <transition name="inputshake">
              <div v-if="locationError" style="color: red; font-size: 13px">{{locationError}}</div>
            </transition>
            <div class="column-left" :class="{invalid: $v.country.$error}">
              <label>{{$t('vehicleInspection.form.country')}} *</label>
              <select v-model="country" required @blur="getLocationDetails">
                <option
                  :value="null"
                  disabled
                  selected
                  hidden
                >{{$t('vehicleInspection.form.placeholder.country')}}</option>
                <option
                  v-for="(countryObj, index) in countriesPresentIn"
                  :key="index"
                  :value="countryObj.country"
                >{{translateValue(countryObj.country, $t('dbDictionary.countriesPresentIn'))}} </option>
              </select>
              <transition name="inputshake">
                <span
                  v-if="!$v.country.required && $v.country.$error"
                >{{$t('vehicleInspection.form.validationError.countryRequired')}}</span>
              </transition>
            </div>
            <div class="column-right" :class="{invalid: $v.zipCode.$error}">
              <label>{{zipCodeOrPostCode}}</label>
              <input
                type="text"
                :placeholder="zipCodeOrPostCode"
                v-model.trim="zipCode"
                name="zipCode"
                @blur="getLocationDetails"
              />
              <transition name="inputshake">
                <span
                  v-if="!$v.zipCode.required && $v.zipCode.$error"
                >{{$t('vehicleInspection.form.validationError.zipCodeRequired')}}</span>
              </transition>
            </div>
          </div>
          <div class="row">
            <div class="column-left" :class="{invalid: $v.typeOfVehicle.$error}">
              <label>{{$t('vehicleInspection.form.typeOfVehicle')}} *</label>
              <select v-model="typeOfVehicle" required>
                <option
                  :value="null"
                  disabled
                  selected
                  hidden
                >{{$t('vehicleInspection.form.placeholder.typeOfVehicle')}}</option>
                <option
                  v-for="(vehicleType, index) in vehicleTypes"
                  :key="index"
                  :value="vehicleType.value"
                >{{vehicleType.type}}</option>
              </select>
              <transition name="inputshake">
                <span
                  v-if="!$v.typeOfVehicle.required && $v.typeOfVehicle.$error"
                >{{$t('vehicleInspection.form.validationError.vehicleTypeRequired')}}</span>
              </transition>
            </div>
            <div class="column-right" :class="{invalid: $v.vehicleBrand.$error}">
              <label>{{$t('vehicleInspection.form.vehicleBrand')}} *</label>
              <select v-model="vehicleBrand" required>
                <option
                  :value="null"
                  disabled
                  selected
                  hidden
                >{{$t('vehicleInspection.form.placeholder.vehicleBrand')}}</option>
                <option v-for="(brand, index) in vehicleBrands" :key="index">{{brand.make}}</option>
              </select>
              <transition name="inputshake">
                <span
                  v-if="!$v.vehicleBrand.required && $v.vehicleBrand.$error"
                >{{$t('vehicleInspection.form.validationError.vehicleBrandRequired')}}</span>
              </transition>
            </div>
          </div>
          <div class="row">
            <div class="column-left" :class="{invalid: $v.vehicleModel.$error}">
              <label>{{$t('vehicleInspection.form.vehicleModel')}} *</label>
              <input
                type="text"
                v-model.trim="vehicleModel"
                name="VehicleModel"
                :placeholder="$t('vehicleInspection.form.placeholder.vehicleModel')"
              />
              <transition name="inputshake">
                <span
                  v-if="!$v.vehicleModel.required && $v.vehicleModel.$error"
                >{{$t('vehicleInspection.form.validationError.vehicleModelRequired')}}</span>
              </transition>
            </div>
            <div class="column-right" :class="{invalid: $v.vehicleYear.$error}">
              <label>{{$t('vehicleInspection.form.vehicleYear')}} *</label>
              <Datepicker
                class="datepicker"
                v-model="vehicleYear"
                :lang="setDatepickerLang"
                type="year"
                format="YYYY"
                :placeholder="$t('vehicleInspection.form.placeholder.vehicleYear')"
                :disabled-date="(date)=>date > Date.now()"
              >
                <i slot="icon-calendar"></i>
              </Datepicker>
              <transition name="inputshake">
                <span
                  v-if="!$v.vehicleYear.required && $v.vehicleYear.$error"
                >{{$t('vehicleInspection.form.validationError.vehicleYearRequired')}}</span>
              </transition>
            </div>
          </div>
          <div class="row">
            <div class="date-time" :class="{invalid: $v.inspectionDateTime.$error}">
              <label>{{inspectionDateTimeLabel}}</label>
              <Datepicker
                v-model="inspectionDateTime"
                class="datepicker"
                :lang="setDatepickerLang"
                type="datetime"
                :format="setInspectionDateTimeFormat"
                :minute-step="30"
                :time-picker-options="{ start: '06:00', step: '00:30', end: '17:00'}"
                :placeholder="inspectionDateTimeLabel"
                :disabled-date="(date)=>date < new Date(currentTimeInSelectedCity).setHours(0, 0, 0, 0)"
                :disabled-time="(time)=>time < currentTimeInSelectedCity"
              ></Datepicker>
              <transition name="inputshake">
                <span
                  v-if="!$v.inspectionDateTime.required && $v.inspectionDateTime.$error"
                >{{$t('vehicleInspection.form.validationError.dateTimeRequired')}}</span>
              </transition>
            </div>
          </div>
          <center>
            <button
              type="submit"
              @click.prevent="onSubmit()"
              class="btn"
            >{{$t("buttons.getAPrice")}}</button>
          </center>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import vehicleBrands from "../../mockData/vehicleBrands";
import vehicleTypes from "../../mockData/vehicleTypes";
import countriesPresentIn from "../../mockData/countriesPresentIn";
import Datepicker from "vue2-datepicker";
import axios from "axios";
import momentTimeZone from "moment-timezone";
import { currentTimeInCity, translateValue } from "../../utility";
import { required, email, requiredUnless } from "vuelidate/lib/validators";

let inspectionData;
export default {
  components: {
    Datepicker
  },
  data() {
    return {
      translateValue,
      typeOfInspection: "vehicle",
      typeOfVehicle: null,
      state: null,
      city: null,
      country: null,
      zipCode: null,
      vehicleBrand: null,
      vehicleModel: null,
      vehicleYear: null,
      VIN: null,
      inspectionDateTime: null,
      canSeeService: false,
      // email: null,
      cityTimeZoneId: "",
      geoCoordinates: null,
      countriesPresentIn,
      statesPresentIn: [],
      citiesPresentIn: [],
      vehicleTypes: vehicleTypes(),

      vehicleBrands: vehicleBrands,
      locationError: ""
    };
  },
  validations: {
    typeOfVehicle: {
      required
    },
    country: {
      required
    },
    zipCode: {
      required
    },
    vehicleBrand: {
      required
    },
    vehicleModel: {
      required
    },
    vehicleYear: {
      required
    },
    inspectionDateTime: {
      required
    }
  },

  watch: {
    "$i18n.locale"(to, from) {
      this.vehicleTypes = vehicleTypes(to);
    }
  },

  computed: {
    auth() {
      return this.$store.getters.isAuthenticated;
    },
    user() {
      return this.$store.getters.generalUserProfile;
    },

    currentTimeInSelectedCity() {
      return currentTimeInCity(this.cityTimeZoneId);
    },

    inspectionDateTimeLabel() {
      let city;
      if (!this.city) {
        city = `${this.$t("vehicleInspection.form.local")}`;
      } else {
        city = this.city;
      }
      return `${this.$t(
        "vehicleInspection.form.inspectionDateTime"
      )} (${city} ${this.$t("vehicleInspection.form.time")}) *`;
    },

    zipCodeOrPostCode() {
      if (this.country == "" || this.country == null) {
        return `${this.$t("vehicleInspection.form.zipOrPostCode")} *`;
      } else if (this.country == "United States") {
        return `${this.$t("vehicleInspection.form.zipCode")}`;
      } else {
        return `${this.$t("vehicleInspection.form.postCode")}`;
      }
    },

    setDatepickerLang() {
      return {
        formatLocale: {
          months: this.$t("datepicker.months"),
          monthsShort: this.$t("datepicker.monthsShort"),
          weekdaysMin: this.$t("datepicker.weekdaysMin")
        }
      };
    },

    setInspectionDateTimeFormat() {
      return this.$t("datepicker.inspectionDateTimeFormat");
    }
  },

  methods: {
    getLocationDetails() {
      if (this.country && this.zipCode) {
        axios
          .post("/quotes/get_location_details", {
            address: `${this.country} ${this.zipCode}`,
            country: this.country
          })
          .then(location => {
            this.locationError = "";
            this.city = location.data.city;
            this.state = location.data.state;
            this.cityTimeZoneId = location.data.timeZoneId;
            this.geoCoordinates = location.data.geoCoordinates;
          })
          .catch(error => {
            this.locationError = error.response.data;
          });
      }
    },

    onSubmit() {
      this.$v.$touch();
      if (this.$v.$invalid || this.locationError) {
        return;
      }

      inspectionData = {
        country: this.country,
        city: this.city,
        cityTimeZoneId: this.cityTimeZoneId,
        state: this.state,
        zipCode: this.zipCode,
        street: null,
        geoCoordinates: this.geoCoordinates,
        inspectedItemInfo: {
          typeOfVehicle: this.typeOfVehicle,
          vehicleBrand: this.vehicleBrand,
          vehicleModel: this.vehicleModel,
          vehicleYear: this.vehicleYear,
          VIN: this.VIN,
          vehicleLocation: null
        },
        inspectionDateTime: this.inspectionDateTime,
        // email: this.email,
        canSeeService: true,
        typeOfInspection: this.typeOfInspection,
        price: {}
      };
      //Get a price
      axios
        .get(`/vehicle_inspection_services/get_price/${inspectionData.country}`)
        .then(res => {
          inspectionData.price = res.data;
          this.$router.push(
            `/${
              this.$i18n.locale
            }/services/get-price/vehicle?inspectionData=${JSON.stringify(
              inspectionData
            )}`
          );
        })
        .catch(error => {
        });

      //Register attempt to get a quote
      axios.post("/quotes/register_attempt", inspectionData);
    }
  },
  created() {
    this.$store.dispatch("fetchUser");
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

@media screen and (min-width: 821px) {
  .container-content {
    background-image: url(../../assets/images/vehicle_inspection.jpeg);
    background-repeat: no-repeat;
    background-size: cover;
  }

  .desktop {
    font-size: 45px;
    padding-bottom: 10px;
    color: #212259;
    display: block;
  }

  footer {
    border-bottom: 1.6px solid #eeeeee;
  }
}

.body {
  font-family: sans-serif, Arial, Helvetica;
  padding: 4%;
  padding-top: 0px;
  width: 100%;
  background-color: white;
  display: inline-block;
}

.container-content {
  width: 100%;
  height: 100%;
  align-items: flex-start;
  justify-content: space-evenly;
  display: flex;
}

.container-content-text {
  margin-top: 15%;
  margin-bottom: 5%;
  margin-left: 20px;
  margin-right: 10px;
  padding: 20px 40px;
  width: 100%;
  max-width: 800px;
  font-size: 15px;
  color: #212259;
  background-color: white;
  display: inline-block;
  opacity: 0.8;
  align-self: center;
}

td i {
  margin-right: 5px;
  font-size: 13px;
  color: #ed8e00;
}

td {
  padding-top: 10px;
  padding-bottom: 10px;
  text-align: left;
  vertical-align: top;
  line-height: 1.4;
}

.mobile {
  display: none;
}

form {
  width: 400px;
  min-width: 380px;
  /* margin-top: 55px;
  margin-bottom: 55px; */
  margin-top: 80px;
  margin-bottom: 80px;
  margin-left: 10px;
  margin-right: 20px;
  border-radius: 3px;
  background-color: white;
  padding-top: 15px;
  padding-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;
  display: inline-block;
}

form p {
  font-size: 13px;
  padding-top: 10px;
  padding-bottom: 10px;
}

@media screen and (min-width: 1700px) {
  .container-content {
    height: 750px;
  }

  .container-content-text {
    margin-top: 280px;
    align-self: flex-start;
  }

  form {
    margin-top: 80px;
  }
}

@media screen and (min-width: 2000px) {
  .container-content {
    height: 1000px;
  }
}

.row::after {
  content: "";
  clear: both;
  display: table;
}

.datepicker {
  margin-top: 5px;
  width: 100%;
}

.date-time,
.email-input {
  padding-top: 10px;
  padding-bottom: 10px;
  width: 100%;
}

.column-left,
.column-right {
  padding-top: 10px;
  padding-bottom: 10px;
  width: 50%;
  float: left;
}

.column-left {
  padding-right: 8px;
}

.column-right {
  padding-left: 8px;
}

label {
  font-size: 13px;
  display: block;
  width: 100%;
}

.datepicker /deep/ input {
  font-size: 13px;
  color: black;
  padding: 9px;
  width: 100%;
  font-weight: bold;
  border-radius: 3px;
  border: none;
  outline: none;
  box-shadow: none;
  background-clip: padding-box;
  border: 1px solid #ccc;
  background-color: aliceblue;
}

input,
select {
  font-size: 13px;
  padding: 9px;
  margin-top: 5px;
  border-radius: 3px;
  font-weight: bold;
  outline: none;
  width: 100%;
  border: 1px solid #ccc;
  background-color: aliceblue;
}

select {
  padding: 8px 5px;
}

select:invalid {
  color: #777777;
  font-weight: normal;
}

option {
  color: black;
}

::placeholder {
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  font-weight: lighter;
}
:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  font-weight: lighter;
}
::-ms-input-placeholder {
  /* Microsoft Edge */
  font-weight: lighter;
}

.datepicker /deep/ input::placeholder {
  font-weight: lighter;
}
.datepicker /deep/ input:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  font-weight: lighter;
}
.datepicker /deep/ input::-ms-input-placeholder {
  /* Microsoft Edge */
  font-weight: lighter;
}

input:focus,
select:focus,
.datepicker /deep/ input:focus {
  border: 1px solid #212259;
  background-color: rgb(232, 240, 254);
}

.invalid input,
.invalid select,
.invalid .datepicker /deep/ input {
  border: 1px solid red;
}

.invalid label {
  color: red;
}

.row span {
  color: red;
  font-size: 12px;
  display: block;
}

.btn {
  color: white;
  max-width: 500px;
  padding: 13px 20px;
  margin-top: 15px;
  margin-bottom: 20px;
  outline: none;
  border: none;
  cursor: pointer;
  font-size: 17px;
  width: 100%;
  border-radius: 5px;
  background-color: #13b6f7;
  opacity: 0.9;
}

.btn:hover {
  background-color: #13b6f7;
}

.link {
  cursor: pointer;
  color: #13b6f7;
}

.link:hover {
  color: #212259;
}

.slide-enter-active {
  animation: slide-in 1s ease-out forwards;
}

@keyframes slide-in {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}

/* .inputshake-enter {
  opacity: 0;
} */

.inputshake-enter-active {
  animation: inputshake-in 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
  /* transition: opacity 0.5s; */
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

@media screen and (max-width: 1020px) {
  .body {
    padding: 0px;
  }

  .desktop {
    font-size: 35px;
  }

  .container-content-text {
    margin-top: 50px;
  }
}

@media screen and (max-width: 820px) {
  .body {
    padding: 20px;
    padding-top: 10px;
  }

  .btn {
    font-size: 18px;
  }

  footer {
    display: none;
  }

  .container-content {
    height: auto;
    border-radius: 5px;
    border: 1px solid #ccc;
    /* flex-direction: column-reverse; */
    flex-direction: column;
    background-image: none;
  }

  .container-content-text {
    margin: 0px;
    padding: 40px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    background-color: whitesmoke;
    opacity: 1;
  }

  .desktop {
    display: none;
  }

  .mobile {
    color: #212259;
    text-align: center;
    font-size: 28px;
    padding-top: 10px;
    padding-bottom: 15px;
    display: block;
  }

  form {
    margin: 0px;
    padding: 5px 40px;
    width: 100%;
    min-width: 100%;
    background-color: transparent;
  }

  .column-left {
    padding-right: 10px;
  }

  .column-right {
    padding-left: 10px;
  }
  @media screen and (max-width: 620px) {
    .body {
      padding: 10px;
    }

    form {
      padding: 5px 20px;
    }

    .container-content-text {
      padding: 40px 20px;
    }

    .mobile {
      font-size: 25px;
    }
  }
}

@media screen and (max-width: 460px) {
  form {
    padding: 5px 15px;
  }

  .btn {
    font-size: 17px;
  }

  .mobile {
    font-size: 22px;
    padding-bottom: 5px;
  }

  .container-content-text {
    padding: 40px 15px;
  }

  .column-left,
  .column-right {
    padding: 10px 0px;
    width: 100%;
  }

  .btn {
    padding: 12px;
  }

  .container-content-text {
    padding: 30px 10px;
  }

  @media screen and (max-width: 400px) {
    .body {
      padding: 5px;
    }

    form {
      padding: 5px 10px;
    }

    .container-content-text {
      padding: 40px 10px;
    }
  }
}
</style>
