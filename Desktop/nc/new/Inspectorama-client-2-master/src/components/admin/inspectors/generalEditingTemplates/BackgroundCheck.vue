<template>
  <div>
    <div class="container">
      <div class="error" v-if="error">{{error}}</div>
      <div class="container-header">References</div>
      <form @submit.prevent="onSubmit">
        <div class="inline-flex">
          <div class="input-left" :class="{invalid:  $v.backgroundCheck.firstName.$error}">
            <label for="firstName">First Name *</label>
            <input type="text" placeholder="Enter First Name" v-model="backgroundCheck.firstName" />
            <span
              v-if="!$v.backgroundCheck.firstName.required && 
                        $v.backgroundCheck.firstName.$error"
            >First Name is required.</span>
          </div>
          <div class="input-left">
            <label for="middleName">Middle Name</label>
            <input type="text" placeholder="Enter Middle Name" v-model="backgroundCheck.middleName" />
          </div>
          <div class="input-right" :class="{invalid:  $v.backgroundCheck.lastName.$error}">
            <label for="lastName">Last Name *</label>
            <input type="text" placeholder="Enter Last Name" v-model="backgroundCheck.lastName" />
            <span
              v-if="!$v.backgroundCheck.lastName.required && 
                        $v.backgroundCheck.lastName.$error"
            >Last Name is required.</span>
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
                  placeholder="Enter Phone Number"
                />
              </div>
            </div>
            <span
              v-if="!$v.backgroundCheck.phoneNum.phoneNumber.required && 
                        $v.backgroundCheck.phoneNum.phoneNumber.$error"
            >Phone Number is required.</span>
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
              :disabled-date="(date)=>(date)=>date > new Date(Date.parse(new Date())- 18 * 31539999999.9988899).setHours(0, 0, 0, 0)"
              required
            ></Datepicker>
            <span
              v-if="!$v.backgroundCheck.dateOfBirth.required && 
                        $v.backgroundCheck.dateOfBirth.$error"
            >Date of Birth is required.</span>
          </div>
          <div class="input-right1" :class="{invalid:  $v.backgroundCheck.SSN.$error}">
            <label for="securityNumber">Social Security Number *</label>
            <input type="number" placeholder="Enter security number" v-model="backgroundCheck.SSN" />
            <span
              v-if="!$v.backgroundCheck.SSN.required && 
                        $v.backgroundCheck.SSN.$error"
            >Social Security Number is required.</span>
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
              <span>I realize that I am responsible for the $100 application processing fee, which will be subtracted from my first few payments from inspectorama.</span>
            </label>
          </div>
          <br />
          <div class="row">
            <label class="flex" :class="{invalid:  $v.backgroundCheck.hasAgreedDisclosure.$error}">
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
        <div class="float-right">
          <button class="save-next-btn" @click.prevent="onSubmit('next')">
            <i class="fa fa-check-circle"></i>
            <span>&nbsp;Save and Next</span>
          </button>
          <button class="save-exit-btn" @click.prevent="onSubmit('exit')">
            <i class="fa fa-check-circle"></i>
            <span>&nbsp;Save and Exit</span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import globalAxios from "axios";
import { mapState, mapActions, mapMutations, mapGetters } from "vuex";
import Datepicker from "vue2-datepicker";
import { required, sameAs } from "vuelidate/lib/validators";
export default {
  components: {
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
  methods: {
    onSubmit(action) {
      if (action == "next" || action == null) {
        this.$v.$touch();
        if (this.$v.$invalid) {
          return;
        }
      }

      const backgroundCheckData = {
        backgroundCheck: this.backgroundCheck
      };
      const inspectorId = localStorage.getItem("openedInspectorId");
      axios
        .patch(
          `/inspector_users_admin/update/${inspectorId}`,
          backgroundCheckData
        )
        .then(res => {
          if (action == "next") {
            this.$emit("afterSaving");
          }
          if (action == "exit") {
            this.storeOkMessage(
              "The inspector's background information have been updated"
            );
            this.$router.push("/inspectors");
          }
        })
        .catch(error => {
          console.log(error);
          this.error = error.response.data;
        });
    },

    ...mapMutations("adminStore", ["storeOkMessage"])
  },

  created() {
    const inspectorId = localStorage.getItem("openedInspectorId");
    axios
      .get(`/inspector_users_admin/${inspectorId}`)
      .then(res => {
        this.backgroundCheck = res.data.backgroundCheck;
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>
<style scoped>
* {
  box-sizing: border-box;
}

.container {
  font-family: sans-serif, Arial, Helvetica;
  background-color: white;
  width: 100%;
  display: inline-block;
}

.container-header {
  padding-bottom: 22px;
  font-size: 22px;
  color: darkblue;
  font-weight: bold;
}

hr {
  margin-left: -10px;
  margin-right: -10px;
}

.error {
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 14px;
  color: red;
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

.date-picker {
  height: 40px;
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

.float-right {
  float: right;
}

.save-exit-btn,
.save-next-btn {
  font-size: 18px;
  font-weight: bold;
  padding: 8px 14px;
  margin-top: 45px;
  margin-bottom: 40px;
  background-color: #ea7601;
  color: white;
  cursor: pointer;
  outline: none;
  border-radius: 5px;
  border: solid;
  border-color: #ed6502 #a04300 #a04300 #ed6502;
  opacity: 0.9;
}

.save-next-btn {
  margin-right: 20px;
}

.save-exit-btn:hover,
.save-next-btn:hover {
  opacity: 1;
}

.save-exit-btn:active,
.save-next-btn:active {
  opacity: 0.95;
  border-color: #a04300 #ed6502 #ed6502 #a04300;
}
</style>
