<template>
  <div>
    <div class="container">
      <div class="container-left">
        <InspRegProgress :currentPage="currentPage"></InspRegProgress>
      </div>
      <div class="container-right">
        <form>
          <div class="text-spaced">
            <h2>Background Check</h2>
            <br />
            <p>
              Please be sure to use your name as it appears on your official identification. You are responsible for the
              <span style="font-size: 14px"><b>{{backgroundCheckPrice}}</b></span> application processing fee, but we will simply subtract it in instalments of not more than 50% at a time from your first payments earned through this platform.
            </p>
          </div>
          <br />
          <div class="inline-flex">
            <div class="input-left" :class="{invalid:  $v.backgroundCheck.firstName.$error}">
              <label for="firstName">First Name *</label>
              <input type="text" placeholder="Enter first name" v-model="backgroundCheck.firstName" />
              <span
                v-if="!$v.backgroundCheck.firstName.required && 
                        $v.backgroundCheck.firstName.$error"
              >First name is required.</span>
            </div>
            <div class="input-left">
              <label for="middleName">Middle Name</label>
              <input
                type="text"
                placeholder="Enter middle name"
                v-model="backgroundCheck.middleName"
              />
            </div>
            <div class="input-right" :class="{invalid:  $v.backgroundCheck.lastName.$error}">
              <label for="lastName">Last Name *</label>
              <input type="text" placeholder="Enter last name" v-model="backgroundCheck.lastName" />
              <span
                v-if="!$v.backgroundCheck.lastName.required && 
                        $v.backgroundCheck.lastName.$error"
              >Last name is required.</span>
            </div>
          </div>
          <div class="row">
            <div
              class="input-left1"
              :class="{invalid:  $v.backgroundCheck.phoneNum.phoneNumber.$error}"
            >
              <label for="phoneNumber">Phone Number *</label>
              <div class="flex">
                <div class="dialing-code">
                  <input
                    type="text"
                    placeholder="- - - - -"
                    disabled
                    v-model="backgroundCheck.phoneNum.countryCode"
                  />
                </div>
                <div class="phone-number">
                  <input
                    type="tel"
                    v-model="backgroundCheck.phoneNum.phoneNumber"
                    placeholder="Enter Phone number"
                  />
                </div>
              </div>
              <span
                v-if="!$v.backgroundCheck.phoneNum.phoneNumber.required && 
                        $v.backgroundCheck.phoneNum.phoneNumber.$error"
              >Phone number is required.</span>
            </div>
            <div class="input-right1" :class="{invalid:  $v.backgroundCheck.zipCode.$error}">
              <label for="zipCode">ZIP or Post Code *</label>
              <input
                type="text"
                placeholder="Enter zip code"
                name="zipcode"
                v-model="backgroundCheck.zipCode"
              />
              <span
                v-if="!$v.backgroundCheck.zipCode.required && 
                        $v.backgroundCheck.zipCode.$error"
              >ZIP or Post Code is required.</span>
            </div>
          </div>
          <div class="row">
            <div class="input-left1" :class="{invalid:  $v.backgroundCheck.dateOfBirth.$error}">
              <label for="dateOfBirth">Date of Birth * (18 years or older)</label>
              <Datepicker
                class="date-picker"
                v-model="backgroundCheck.dateOfBirth"
                lang="en"
                type="date"
                format="YYYY-MMMM-DD"
                :disabled-date="(date)=>new Date(Date.parse(new Date())- 18 * 31539999999.9988899)"
                required
              ></Datepicker>
              <span
                v-if="!$v.backgroundCheck.dateOfBirth.required && 
                        $v.backgroundCheck.dateOfBirth.$error"
              >Date of birth is required.</span>
            </div>
            <div class="input-right1" :class="{invalid:  $v.backgroundCheck.SSN.$error}">
              <label for="securityNumber">Social Security Number *</label>
              <input
                type="text"
                placeholder="Enter security number"
                v-model="backgroundCheck.SSN"
              />
              <span
                v-if="!$v.backgroundCheck.SSN.required && 
                        $v.backgroundCheck.SSN.$error"
              >Social security number is required.</span>
            </div>
          </div>
          <br />
          <hr />
          <br />
          <br />
          <div class="checkbox-container">
            <label class="row">
              <label class="flex" :class="{invalid:  $v.backgroundCheck.hasRequestedReport.$error}">
                <input type="checkbox" v-model="backgroundCheck.hasRequestedReport" />
                <span>By clicking this box, I request a free copy of my background check report from the consumer reporting agency used.</span>
              </label>
            </label>
            <br />
            <div class="row">
              <label class="flex" :class="{invalid:  $v.backgroundCheck.hasAgreedFee.$error}">
                <input type="checkbox" v-model="backgroundCheck.hasAgreedFee" />
                <span>I realize that I am responsible for the {{backgroundCheckPrice}} application processing fee, which will be subtracted in instalments of not more than 50% at a time from my first few payments from inspectorama.</span>
              </label>
            </div>
            <br />
            <div class="row">
              <label
                class="flex"
                :class="{invalid:  $v.backgroundCheck.hasAgreedDisclosure.$error}"
              >
                <input type="checkbox" v-model="backgroundCheck.hasAgreedDisclosure" />
                <span>If I consent to a background check and go on to upload/scan an ID image in the ID verification step, if needed, inspectorama may disclose the ID image to our background check provider to assist in completing my background check. Inspectorama will not obtain a background check until after a conditional invitation has been extended to me.</span>
              </label>
            </div>
            <br />
            <div class="row">
              <label class="flex" :class="{invalid:  $v.backgroundCheck.gaveConsent.$error}">
                <input type="checkbox" v-model="backgroundCheck.gaveConsent" />
                <span>
                  I understand that by clicking this box, I am confirming that (a) I have read, and I consent to, the legal notices
                  <a
                    class="link"
                    href="#"
                  >
                    <u>here</u>
                  </a>, and (b) agree to use an electronic signature to demonstrate my consent. I understand my electronic signature is as legally binding as an ink signature.
                </span>
              </label>
            </div>
          </div>
          <br />
          <label>
            <p>* Inspectorama conducts background checks in accordance with applicable law.</p>
            <p>* Inspectorama will not obtain a background check until after a conditional invitation has been extended to the Service Professional.</p>
            <p>* All information is submitted securely to our background check provider.</p>
          </label>
          <br />
          <hr />
          <br />
          <div class="flex">
            <div class="maximum">
              <button type="button" @click.prevent="onSave('back')" class="back-btn">Back</button>
            </div>
            <div>
              <button type="button" @click.prevent="onSave()" class="save-btn">Save</button>
            </div>
            <div>
              <button type="button" @click.prevent="onSave('next')" class="next-btn">Next</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import globalAxios from "axios";
import InspRegProgress from "./InspRegProgress.vue";
import Datepicker from "vue2-datepicker";
import { required, sameAs } from "vuelidate/lib/validators";
export default {
  components: {
    InspRegProgress,
    Datepicker
  },
  data() {
    return {
      currentPage: "",
      backgroundCheck: {
        firstName: "",
        middleName: "",
        lastName: "",
        phoneNum: {
          countryCode: "",
          phoneNumber: ""
        },
        zipCode: "",
        dateOfBirth: "",
        SSN: "",
        hasRequestedReport: false,
        hasAgreedFee: false,
        hasAgreedDisclosure: false,
        gaveConsent: false
      },
      inspectorCountry: "",
      next: "",
      goBack: ""
    };
  },
  validations: {
    backgroundCheck: {
      firstName: {
        required
      },
      lastName: {
        required
      },
      phoneNum: {
        phoneNumber: {
          required
        }
      },
      zipCode: {
        required
      },
      dateOfBirth: {
        required
      },
      SSN: {
        required
      },
      hasRequestedReport: {
        sameAs: sameAs(() => {
          return true;
        })
      },
      hasAgreedFee: {
        sameAs: sameAs(() => {
          return true;
        })
      },
      hasAgreedDisclosure: {
        sameAs: sameAs(() => {
          return true;
        })
      },
      gaveConsent: {
        sameAs: sameAs(() => {
          return true;
        })
      }
    }
  },
  computed: {
    backgroundCheckPrice() {
      if (this.inspectorCountry == "United States") {
        return "100 USD";
      } else if (this.inspectorCountry == "Canada") {
        return "100 CAD";
      } else if (this.inspectorCountry == "Norway") {
        return "3000 NOK";
      } else if (this.inspectorCountry == "United Kingdom") {
        return "100 GBP";
      }
    }
  },
  methods: {
    onSave(direction) {
      if (direction == "next" || direction == null) {
        this.$v.$touch();
        if (this.$v.$invalid) {
          return;
        }
      }

      const backgroundCheckData = {
        backgroundCheck: this.backgroundCheck
      };
      globalAxios
        .patch("/inspector_infos/me", backgroundCheckData)
        .then(res => {
          if (direction == "back") {
            this.$router.push("/inspector/references");
          }
          if (direction == "next") {
            this.$router.push("/inspector/upload-documentaion");
          }
        })
    }
  },

  beforeRouteLeave: function(to, from, next) {
    this.currentPage = null;
    next();
  },

  created() {
    this.currentPage = "backgroundCheck";
    globalAxios
      .get("/inspector_infos/me")
      .then(res => {
        if (
          res.data.backgroundCheck !== null &&
          res.data.backgroundCheck !== undefined
        ) {
          this.backgroundCheck = res.data.backgroundCheck;
          this.backgroundCheck.phoneNum.countryCode =
            res.data.personalInfo.mobileNum1.countryCode;
        }
        this.inspectorCountry = res.data.personalInfo.country;
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
  margin-left: 50px;
  max-width: 750px;
  border-radius: 10px;
  border: 1px solid #b6b1b1;
  display: inline-block;
}

input[type="checkbox"] {
  margin-right: 5px;
}

input[type="text"],
input[type="tel"],
input[type="number"] {
  width: 100%;
  padding: 9px;
  margin-top: 6px;
  border: 1px solid #ccc;
  border-radius: 3px;
  outline: none;
  background-color: rgb(232, 240, 254);
}

.date-picker /deep/ input {
  width: 100%;
  margin-top: 6px;
  color: black;
  border: 1px solid #ccc;
  border-radius: 3px;
  background-clip: padding-box;
  outline: none;
  box-shadow: none;
  background-color: rgb(232, 240, 254);
  display: block;
}

label {
  font-size: 14px;
  display: block;
  width: 100%;
}

input:focus,
.date-picker /deep/ input:focus {
  outline: none;
  border: 1px solid #a842a7;
  background-color: #eee;
}

.invalid input,
.invalid .date-picker /deep/ input {
  border: 1px solid red;
}

.invalid label {
  color: red;
}

.invalid span {
  color: red;
  font-size: 12px;
  display: block;
  width: 100%;
}

.checkbox-container .invalid span {
  font-size: 14px;
}

.flex,
.inline-flex {
  display: flex;
}

.maximum {
  flex: 1;
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

.back-btn,
.next-btn,
.save-btn {
  font-size: 13px;
  width: 70px;
  border-radius: 20px;
  font-weight: bold;
  height: 40px;
  outline: none;
  text-align: center;
  box-sizing: border-box;
  cursor: pointer;
  opacity: 0.9;
  display: block;
}

.back-btn {
  color: white;
  background-color: black;
}

.next-btn {
  margin-left: 20px;
  color: white;
  background-color: black;
}

.save-btn {
  float: right;
  color: black;
  background-color: white;
}

.save-btn:hover {
  opacity: 1;
  color: white;
  background-color: black;
}

.back-btn:hover {
  opacity: 1;
  color: black;
  background-color: white;
}

.next-btn:hover {
  opacity: 1;
  color: black;
  background-color: white;
}

.text-spaced {
  font-size: 17px;
}

/* Clear floats after the columns */
.row::after {
  content: "";
  clear: both;
  display: table;
}

.input-left1,
.input-right1,
.input-left,
.input-right {
  float: left;
  margin-top: 10px;
  margin-bottom: 10px;
}

.input-left1,
.input-right1 {
  width: 50%;
}

.input-left1 {
  padding-right: 10px;
}

.input-right1 {
  padding-left: 10px;
}

.input-left,
.input-right {
  width: 31%;
}

.input-left {
  margin-right: 20px;
}

.link {
  cursor: pointer;
  color: dodgerblue;
}

.link:hover {
  color: blue;
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
    padding-bottom: 20px;
  }

  @media only screen and (max-width: 520px) {
    .inline-flex {
      display: inline-block;
    }

    .input-left1,
    .input-right1,
    .input-left,
    .input-right {
      padding: 0px;
      width: 100%;
    }
  }
}
</style>
