<template>
  <div>
    <div class="container">
      <div class="container-left">
        <InspRegProgress :currentPage="currentPage"></InspRegProgress>
      </div>
      <div class="container-right">
        <div class="text-spaced">
          <h2>
            {{$t('generic.weHaveToKnowYou')}}
            <br />
            <span>{{$t('generic.pleaseTakeOutTime')}}</span>
          </h2>
          <br />
          <h3>
            {{$t('personalInformation.title')}}
            <br />
          </h3>
        </div>
        <br />
        <div class="row">
          <center>
            <div class="photo-container">
              <div class="imagetext-spaced">
                <picture-input
                  :key="profilePictureKey"
                  ref="avatar"
                  @change="onChange"
                  width="250"
                  height="250"
                  margin="16"
                  accept="image/jpeg, image/png"
                  size="1"
                  buttonClass="btn"
                  :z-index="1"
                  :prefill="avatar"
                  :prefillOptions="{mediaType: 'image/png' }"
                  :customStrings="{
            upload: '<h1>Bummer!</h1>',
            drag: $t('generic.profilePicture.dragAndDrop'),
            change: $t('buttons.changePhoto'),
          }"
                ></picture-input>
                <br />
                {{$t('generic.profilePicture.maxPicSize')}}
              </div>
            </div>
          </center>
        </div>
        <br />
        <form @submit.prevent="onSubmit" class="container-content">
          <div class="row">
            <div class="column1" :class="{invalid: $v.personalInfo.firstName.$error}">
              <label for="firstNameLine1">{{$t('personalInformation.firstName')}} *</label>
              <input
                type="text"
                v-model="personalInfo.firstName"
                name="firstName"
                :placeholder="$t('personalInformation.lastName')"
              />
              <span
                v-if="!$v.personalInfo.firstName.required && $v.personalInfo.firstName.$error"
              >{{$t('personalInformation.validationError.firstNameRequired')}}</span>
            </div>
            <div class="column2" :class="{invalid: $v.personalInfo.lastName.$error}">
              <label for="lastNameLine2">{{$t('personalInformation.lastName')}} *</label>
              <input
                type="text"
                v-model="personalInfo.lastName"
                name="lastName"
                :placeholder="$t('personalInformation.lastName')"
              />
              <span
                v-if="!$v.personalInfo.lastName.required && $v.personalInfo.lastName.$error"
              >{{$t('personalInformation.validationError.lastNameRequired')}}</span>
            </div>
          </div>
          <div class="row">
            <div class="column1" :class="{invalid: $v.personalInfo.iAm.$error}">
              <label for="vehicleType">{{$t('personalInformation.iAm')}} *</label>
              <select v-model="personalInfo.iAm" required>
                <option value selected disabled hidden>{{$t('generic.selectOne')}}</option>
                <option value="individual">{{$t('personalInformation.registerAsIndividual')}}</option>
                <option value="company">{{$t('personalInformation.registerAsCompany')}}</option>
              </select>
              <span
                v-if="!$v.personalInfo.iAm.required && $v.personalInfo.iAm.$error"
              >{{$t('personalInformation.validationError.pleaseSelectOne')}}</span>
            </div>
          </div>
          <div class="row">
            <div
              class="column1"
              v-if="personalInfo.iAm == 'company'"
              :class="{invalid: $v.personalInfo.nameOfCompany.$error}"
            >
              <label for="nameOfCompany">{{$t('personalInformation.nameOfCompany')}} *</label>
              <input
                type="text"
                name="nameOfCompany"
                v-model="personalInfo.nameOfCompany"
                :placeholder="$t('personalInformation.nameOfCompany')"
              />
              <span
                v-if="!$v.personalInfo.nameOfCompany.required && $v.personalInfo.nameOfCompany.$error"
              >{{$t('personalInformation.validationError.pleaseSelectOne')}}</span>
            </div>
            <div
              class="column2"
              v-if="personalInfo.iAm == 'company'"
              :class="{invalid: $v.personalInfo.companyRegNum.$error}"
            >
              <label for="companyRegNumber">{{$t('personalInformation.companyRegNumber')}} *</label>
              <input
                type="text"
                v-model="personalInfo.companyRegNum"
                :placeholder="$t('personalInformation.companyRegNumber')"
              />
              <span
                v-if="!$v.personalInfo.companyRegNum.required && $v.personalInfo.companyRegNum.$error"
              >{{$t('personalInformation.validationError.enterCompanyRegNo')}}</span>
            </div>
          </div>
          <div class="row">
            <div class="column1" :class="{invalid: $v.personalInfo.country.$error}">
              <label for="countryType">{{$t('personalInformation.country')}} *</label>
              <select
                @change="getDialingCode(personalInfo.country), getStates(personalInfo.country)"
                v-model="personalInfo.country"
                required
              >
                <option value selected disabled hidden>{{$t('personalInformation.selectCountry')}}</option>
                <option
                  v-for="(countryObj, index) in countriesPresentIn"
                  :key="index"
                  :value="countryObj.country"
                >{{translateValue(countryObj.country, $t('dbDictionary.countriesPresentIn'))}}</option>
              </select>
              <span
                v-if="!$v.personalInfo.country.required && $v.personalInfo.country.$error"
              >{{$t('personalInformation.validationError.countryRequired')}}</span>
            </div>
            <div class="column2" :class="{invalid: $v.personalInfo.state.$error}">
              <label for="stateLine">{{$t('personalInformation.state')}} *</label>
              <select v-model="personalInfo.state" @change="getCities(personalInfo.state)" required>
                <option value selected disabled hidden>Select State or County or Pronvince</option>
                <option v-for="(obj, index) in statesPresentIn" :key="index">{{obj.state}}</option>
              </select>
              <span
                v-if="!$v.personalInfo.state.required && $v.personalInfo.state.$error"
              >{{$t('personalInformation.validationError.stateRequired')}}</span>
            </div>
          </div>
          <div class="row">
            <div class="column1" :class="{invalid: $v.personalInfo.city.$error}">
              <label for="cityLine">{{$t('personalInformation.city')}} *</label>
              <input
                type="text"
                :placeholder="$t('personalInformation.city')"
                @change="onBlurAddress()"
                v-model="personalInfo.city"
                required
              />
              <!-- <select @change="onBlurAddress()" v-model="personalInfo.city" required>
                <option value selected disabled hidden>Select City</option>
                <option v-for="(cityObj, index) in citiesPresentIn" :key="index">{{cityObj.city}}</option>
              </select>-->
              <span
                v-if="!$v.personalInfo.city.required && $v.personalInfo.city.$error"
              >{{$t('personalInformation.validationError.cityRequired')}}</span>
            </div>
            <div class="column2" :class="{invalid: $v.personalInfo.zipCode.$error}">
              <label for="zipCode">{{$t('personalInformation.zip')}} *</label>
              <input
                type="text"
                v-model="personalInfo.zipCode"
                :placeholder="$t('personalInformation.zip')"
              />
              <span
                v-if="!$v.personalInfo.zipCode.required && $v.personalInfo.zipCode.$error"
              >{{$t('personalInformation.validationError.zipRequired')}}</span>
            </div>
          </div>
          <div class="row">
            <div class="column1" :class="{invalid: $v.personalInfo.addressLine1.$error}">
              <label for="addressLine1">{{$t('personalInformation.streetAddress1')}} *</label>
              <input
                type="text"
                @blur="onBlurAddress()"
                v-model="personalInfo.addressLine1"
                :placeholder="$t('personalInformation.streetAddress1')"
              />
              <span
                v-if="!$v.personalInfo.addressLine1.required && $v.personalInfo.addressLine1.$error"
              >{{$t('personalInformation.validationError.addressLine1Required')}}</span>
            </div>
            <div class="column2">
              <label for="addressLine1">{{$t('personalInformation.streetAddress2')}}</label>
              <input
                type="text"
                @blur="onBlurAddress()"
                v-model="personalInfo.addressLine2"
                :placeholder="$t('personalInformation.streetAddress2')"
              />
            </div>
          </div>
          <br />
          <div class="row">
            <div class="workgoogle-text">
              <p>
                {{$t('personalInformation.workAreaRadius')}}
                <br />
                <span>{{$t('personalInformation.areaMap')}}</span>
              </p>
            </div>
            <div class="workgoogle-area">
              <button type="button" class="minus-btn" @click="decWorkArea">-</button> &nbsp;&nbsp;
              <strong>{{personalInfo.workArea.value}}</strong>
              {{$t('generic.of')}} {{setMaxAreaRadius}}
              <button
                type="button"
                class="plus-btn"
                @click="incWorkArea"
              >+</button>
              <select class="workAreaSelectUnit" v-model="personalInfo.workArea.unit">
                <option
                  :value="null"
                  selected
                  disabled
                  hidden
                >{{$t('vehicleDescriptionReport.unit')}}</option>
                <option>{{$t('vehicleDescriptionReport.miles')}}</option>
                <option>{{$t('vehicleDescriptionReport.km')}}</option>
              </select> &nbsp;&nbsp;
            </div>
          </div>
          <div class="row">
            <center>
              <gmap-map
                :center="personalInfo.geoCoordinates"
                :zoom="7"
                :options="{ gestureHandling: 'none', wheelCOntrol: false}"
                style="width:100%;  height: 400px;"
              >
                <gmap-marker :position="personalInfo.geoCoordinates"></gmap-marker>
                <gmap-circle
                  :center="personalInfo.geoCoordinates"
                  :radius="calcAreaRadiusInMeters"
                  :visible="true"
                  :options="{fillColor:'blue',fillOpacity:0.5,strokeOpacity: 0.5, strokeWeight: 2}"
                ></gmap-circle>
              </gmap-map>
            </center>
          </div>
          <br />
          <br />
          <div class="row">
            <div class="column1" :class="{invalid: $v.personalInfo.mobileNum1.phoneNumber.$error}">
              <label for="phone1">{{$t('personalInformation.mobileNum1')}} *</label>
              <div class="flex">
                <div class="dialing-code">
                  <input
                    type="text"
                    placeholder="- - - - -"
                    disabled
                    v-model="personalInfo.mobileNum1.countryCode"
                  />
                </div>
                <div class="phone-number">
                  <input
                    type="tel"
                    v-model="personalInfo.mobileNum1.phoneNumber"
                    :placeholder="$t('personalInformation.mobileNum1')"
                  />
                </div>
              </div>
              <span
                v-if="!$v.personalInfo.mobileNum1.phoneNumber.required && $v.personalInfo.mobileNum1.phoneNumber.$error"
              >{{$t('personalInformation.validationError.phoneNumRequired')}}</span>
            </div>
            <div class="column2">
              <label for="phone2">{{$t('personalInformation.mobileNum2')}}</label>
              <div class="flex">
                <div class="dialing-code">
                  <input
                    type="text"
                    placeholder="- - - - -"
                    disabled
                    v-model="personalInfo.mobileNum2.countryCode"
                  />
                </div>
                <div class="phone-number">
                  <input
                    type="tel"
                    v-model="personalInfo.mobileNum2.phoneNumber"
                    :placeholder="$t('personalInformation.mobileNum2')"
                  />
                </div>
              </div>
            </div>
          </div>
          <br />
          <div class="row">
            <div>
              <h2>
                <strong>{{$t('personalInformation.areYouEligible')}} *</strong>
              </h2>
            </div>
            <div class="column1" :class="{invalid: $v.personalInfo.isEligibleToWork.$error}">
              <select v-model="personalInfo.isEligibleToWork" required>
                <option value selected disabled hidden>{{$t('generic.selectOne')}}</option>
                <option :value="true">{{$t('generic.yes')}}</option>
                <option :value="false">{{$t('generic.no')}}</option>
              </select>
              <span
                v-if="!$v.personalInfo.isEligibleToWork.required && $v.personalInfo.isEligibleToWork.$error"
              >{{$t('personalInformation.validationError.thisFieldRequired')}}</span>
            </div>
          </div>
          <br />
          <div
            class="error"
            v-if="personalInfo.isEligibleToWork == false && $v.personalInfo.isEligibleToWork.$error"
          >
            <p>{{$t('personalInformation.validationError.youHaveToBeEligible')}}</p>
          </div>
          <br />
          <br />
          <br />
          <hr />
          <br />
          <br />
          <br />
          <div>
            <center>
              <button
                type="submit"
                @click.prevent="onSubmit()"
                class="nextstep-btn"
              >{{$t('buttons.nextStep')}}</button>
            </center>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { required, sameAs, requiredIf } from "vuelidate/lib/validators";
import PictureInput from "vue-picture-input";
import InspRegProgress from "./InspRegProgress.vue";
import dialingCodesList from "../../../mockData/dialingCodesList";
import countriesPresentIn from "../../../mockData/countriesPresentIn";
import { translateValue } from "../../../utility";
export default {
  components: {
    InspRegProgress,
    PictureInput
  },

  data() {
    return {
      translateValue,
      countriesPresentIn,
      statesPresentIn: [],
      citiesPresentIn: [],

      dialingCodes: dialingCodesList,
      currentPage: "",
      avatar: "",
      personalInfo: {
        firstName: "",
        lastName: "",
        profilePic: "",
        iAm: "",
        nameOfCompany: "",
        companyRegNum: "",
        country: "",
        state: "",
        city: "",
        addressLine1: "",
        addressLine2: "",
        zipCode: "",
        geoCoordinates: {
          lat: 0,
          lng: 0
        },
        mobileNum1: {
          countryCode: "",
          phoneNumber: ""
        },
        mobileNum2: {
          countryCode: "",
          phoneNumber: ""
        },
        workArea: {
          value: "",
          unit: ""
        },
        isEligibleToWork: ""
      },
      profilePictureKey: 0
    };
  },
  validations() {
    return {
      personalInfo: {
        firstName: {
          required
        },
        lastName: {
          required
        },
        iAm: {
          required
        },
        nameOfCompany: {
          required: requiredIf(() => {
            return this.personalInfo.iAm == "company";
          })
        },
        companyRegNum: {
          required: requiredIf(() => {
            return this.personalInfo.iAm == "company";
          })
        },
        country: {
          required
        },
        state: {
          required
        },
        city: {
          required
        },
        addressLine1: {
          required
        },
        zipCode: {
          required
        },
        mobileNum1: {
          countryCode: {
            required
          },
          phoneNumber: {
            required
          }
        },
        isEligibleToWork: {
          required,
          sameAs: sameAs(() => {
            if (this.personalInfo.isEligibleToWork == true) {
              return true;
            }
          })
        }
      }
    };
  },
  watch: {
    "personalInfo.iAm"(val) {
      if (val == "individual") {
        this.personalInfo.nameOfCompany = null;
        this.personalInfo.companyRegNum = null;
      }
    },
    "personalInfo.workArea.unit"(val) {
      if (val == "km") {
        //Check if the personalInfo.workArea.value is less than or more than the limit
        if (this.personalInfo.workArea.value < 48) {
          this.personalInfo.workArea.value = 48;
        }
      }
      if (val == "miles") {
        if (this.personalInfo.workArea.value > 50) {
          this.personalInfo.workArea.value = 50;
        }
      }
    },
    "$i18n.locale"(to, fro) {
      this.profilePictureKey++; //To force a re-render of the component
    }
  },

  computed: {
    typeOfInspector() {
      return this.$store.getters.typeOfInspector;
    },

    calcAreaRadiusInMeters() {
      if (this.personalInfo.workArea.unit == "miles") {
        return this.personalInfo.workArea.value * 1.60934 * 1000;
      } else {
        return this.personalInfo.workArea.value * 1000;
      }
    },

    setMaxAreaRadius() {
      if (this.personalInfo.workArea.unit == "miles") {
        return 50;
      } else {
        return 80;
      }
    }
  },

  methods: {
    onChange(avatar) {
      if (avatar) {
        let formData = new FormData();
        formData.append("avatar", avatar);
        axios
          .post("/users/myAvatar", formData)
          .then(res => {
            this.$store.dispatch("fetchUserAvatar");
          })
      } else {
        throw new Error();
      }
    },

    onSubmit() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }
      const personalInfoData = {
        personalInfo: this.personalInfo
      };
      axios
        .patch("/inspector_infos/me", personalInfoData)
        .then(res => {
          if (this.typeOfInspector == "vehicle") {
            this.$router.push(
              `/${this.$i18n.locale}/inspector/vehicle/area-of-specialization`
            );
          } else if (this.typeOfInspector == "home") {
            this.$router.push(
              `/${this.$i18n.locale}/inspector/home/area-of-specialization`
            );
          }
        })
    },
    incWorkArea() {
      this.personalInfo.workArea.value++;
      //For miles
      if (this.personalInfo.workArea.unit == "miles") {
        if (this.personalInfo.workArea.value > 50) {
          this.decWorkArea();
        }
      }

      //For km
      if (this.personalInfo.workArea.unit == "km") {
        if (this.personalInfo.workArea.value > 80) {
          this.decWorkArea();
        }
      }
    },
    decWorkArea() {
      this.personalInfo.workArea.value--;
      //For miles
      if (this.personalInfo.workArea.unit == "miles") {
        if (this.personalInfo.workArea.value < 30) {
          this.incWorkArea();
        }
      }
      //For km
      if (this.personalInfo.workArea.unit == "km") {
        if (this.personalInfo.workArea.value < 48) {
          this.incWorkArea();
        }
      }
    },

    getDialingCode(selectedCountry) {
      let dialingCode;
      this.dialingCodes.forEach(item => {
        if (item.country == selectedCountry) {
          dialingCode = item.code;
        }
      });
      this.personalInfo.mobileNum1.countryCode = dialingCode;
      this.personalInfo.mobileNum2.countryCode = dialingCode;
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
      this.citiesPresentIn = [];
    },

    getCities(state) {
      const cities = [];
      this.statesPresentIn.forEach(item => {
        if (item.state == state) {
          cities.push(item.cities);
          return;
        }
      });
      this.citiesPresentIn = cities[0];
    },

    onBlurAddress() {
      const fullAddress = `${this.personalInfo.addressLine1} ${this.personalInfo.addressLine2} ${this.personalInfo.city} ${this.personalInfo.country}`;

      axios
        .get(`/inspector_infos/getGeoCoordinates/${fullAddress}`)
        .then(res => {
          this.center = res.data.geometry.location;
          this.personalInfo.geoCoordinates = res.data.geometry.location;
        })
        .catch(error => {
          console.log(error);
        });
    }
  },

  beforeRouteLeave: function(to, from, next) {
    this.currentPage = null;
    next();
  },

  created() {
    this.$store.dispatch("fetchInspectorInfo");
    this.currentPage = "personalInfo";

    // this.$store.dispatch("vehicleInspector/fetchInspectorInfo");

    axios
      .get("/inspector_infos/me")
      .then(res => {
        this.personalInfo = res.data.personalInfo;
        this.getStates(res.data.personalInfo.country);
        this.getCities(res.data.personalInfo.state);
      })
      .catch(error => console.log(error));

    const id = localStorage.getItem("userId");
    axios
      .get("/users/" + id + "/avatar")
      .then(res => {
        this.avatar = res.data;
      })
      .catch(error => console.log(error));
  }
};
</script>


<style scoped>
* {
  box-sizing: border-box;
}

.container {
  font-family: sans-serif, Arial, Helvetica;
  background-color: lightblue;
  padding: 50px;
  width: 100%;
  display: flex;
}

.container-left {
  width: auto;
  display: inline-block;
}

.container-right {
  background-color: white;
  padding: 30px;
  padding-bottom: 40px;
  margin-left: 50px;
  max-width: 750px;
  border-radius: 10px;
  border: 1px solid #b6b1b1;
  display: inline-block;
}

.container-content {
  font-size: 13px;
  margin-bottom: 50px;
}

.text-spaced {
  font-size: 18px;
}

.text-spaced span {
  font-weight: lighter;
  font-size: 14px;
}

.workgoogle-text {
  font-size: 18px;
  float: left;
}

.workgoogle-text span {
  font-size: 12px;
}

.workgoogle-area {
  font-size: 14px;
  float: right;
  padding-right: 10px;
}

input,
select {
  width: 100%;
  padding: 9px;
  margin-top: 6px;
  border: 1px solid #ccc;
  border-radius: 3px;
  outline: none;
  /* background-color: #f1f1f1; */
  background-color: rgb(232, 240, 254);
}

select {
  padding: 8px 5px;
}

select:invalid {
  color: #777777;
}

option {
  color: black;
}

input:focus,
select:focus {
  outline: none;
  border: 1px solid #a842a7;
  background-color: #eee;
}

.invalid input,
.invalid select {
  border: 1px solid red;
}

label {
  font-size: 13px;
  display: block;
  width: 100%;
}

.invalid label {
  color: red;
}

.invalid span {
  color: red;
  font-size: 12px;
}

.error {
  color: red;
  font-size: 15px;
}

.nextstep-btn {
  font-size: 13px;
  width: 100%;
  color: white;
  outline: none;
  border-radius: 20px;
  font-weight: bold;
  background-color: black;
  height: 40px;
  text-align: center;
  cursor: pointer;
  opacity: 0.9;
}

.nextstep-btn:hover {
  opacity: 1;
  color: black;
  background-color: white;
}

.workAreaSelectUnit {
  padding: 6px;
  padding-left: 4px;
  width: 36%;
}

.photo-container {
  width: auto;
  height: 130px;
  display: table-cell;
  box-sizing: border-box;
}

.imagetext-spaced {
  font-size: 10px;
  width: auto;
}

.plus-btn,
.minus-btn {
  font-size: 16px;
  width: 25px;
  height: 25px;
  color: black;
  font-weight: bold;
  background-color: white;
  text-align: center;
  box-sizing: border-box;
}

/* Clear floats after the columns */

.row::after {
  content: "";
  clear: both;
  display: table;
}

.column1,
.column2 {
  margin-top: 10px;
  margin-bottom: 10px;
  float: left;
  width: 50%;
  display: inline-block;
}

.column1 {
  padding-right: 10px;
}

.column2 {
  padding-left: 10px;
}

.flex {
  display: flex;
}

.dialing-code {
  margin-right: 10px;
  width: 25%;
  display: inline-block;
}

.dialing-code input {
  text-align: center;
}

.phone-number {
  width: 75%;
  display: inline-block;
}

/* For tablets: */

@media screen and (max-width: 980px) {
  .container {
    padding: 20px;
  }
  .container-right {
    margin-left: 20px;
  }
  @media only screen and (max-width: 820px) {
    .container {
      padding: 5px;
      background-color: white;
    }
    .container-right {
      margin: 0px;
      width: 100%;
      border-radius: 0px;
    }
    .container-left {
      display: none;
    }
  }
}

/* For mobile: */

@media only screen and (max-width: 620px) {
  .container-right {
    padding: 10px;
  }
  @media only screen and (max-width: 480px) {
    .column1,
    .column2 {
      padding: 0px;
      width: 100%;
    }
  }
}
</style>
