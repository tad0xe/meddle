<template>
  <div>
    <div class="container">
      <div class="error" v-if="error">{{error}}</div>
      <div class="container-header">Personal Information</div>
      <div class="row">
        <center>
          <div class="photo-body">
            <div class="imagetext-spaced">
              <picture-input
                ref="avatar"
                @change="onChange"
                width="250"
                height="250"
                margin="0"
                accept="image/jpeg, image/png"
                size="10"
                buttonClass="btn"
                :z-index="1"
                :prefill="avatar"
                :prefillOptions="{mediaType: 'image/png' }"
                :customStrings="{
            upload: '<h1>Bummer!</h1>',
            drag: 'Drag and drop your profile picture or click to upload'
          }"
              ></picture-input>
              <br />Maximum size - 1MB. Available formats: JPG, JPEG or PNG
            </div>
          </div>
        </center>
      </div>
      <br />
      <form @submit.prevent="onSubmit">
        <div class="row">
          <div class="column1" :class="{invalid: $v.personalInfo.firstName.$error}">
            <label for="firstNameLine1">First Name *</label>
            <input
              type="text"
              v-model="personalInfo.firstName"
              name="firstName"
              placeholder="Enter First Name"
            />
            <span
              v-if="!$v.personalInfo.firstName.required && $v.personalInfo.firstName.$error"
            >First Name is required.</span>
          </div>
          <div class="column2" :class="{invalid: $v.personalInfo.lastName.$error}">
            <label for="lastNameLine2">Last Name *</label>
            <input
              type="text"
              v-model="personalInfo.lastName"
              name="lastName"
              placeholder="Enter Last Name"
            />
            <span
              v-if="!$v.personalInfo.lastName.required && $v.personalInfo.lastName.$error"
            >Last Name is required.</span>
          </div>
        </div>
        <div class="row">
          <div class="column1" :class="{invalid: $v.personalInfo.iAm.$error}">
            <label for="vehicleType">I am *</label>
            <select v-model="personalInfo.iAm" required>
              <option value selected disabled hidden>Select one</option>
              <option value="individual">Registering as an individual</option>
              <option value="company">Registering as a company</option>
            </select>
            <span
              v-if="!$v.personalInfo.iAm.required && $v.personalInfo.iAm.$error"
            >Please select one.</span>
          </div>
        </div>
        <div class="row">
          <div
            class="column1"
            v-if="personalInfo.iAm == 'company'"
            :class="{invalid: $v.personalInfo.nameOfCompany.$error}"
          >
            <label for="nameOfCompany">Name of Company *</label>
            <input
              type="text"
              name="nameOfCompany"
              v-model="personalInfo.nameOfCompany"
              placeholder="Enter Name of Company"
            />
            <span
              v-if="!$v.personalInfo.nameOfCompany.required && $v.personalInfo.nameOfCompany.$error"
            >Name of Company is required.</span>
          </div>
          <div
            class="column2"
            v-if="personalInfo.iAm == 'company'"
            :class="{invalid: $v.personalInfo.companyRegNum.$error}"
          >
            <label for="companyRegNumber">Company Registration Number *</label>
            <input
              type="text"
              v-model="personalInfo.companyRegNum"
              placeholder="Enter Company Registration Number"
            />
            <span
              v-if="!$v.personalInfo.companyRegNum.required && $v.personalInfo.companyRegNum.$error"
            >Enter Company Registration Number.</span>
          </div>
        </div>
        <div class="row">
          <div class="column1" :class="{invalid: $v.personalInfo.country.$error}">
            <label for="countryType">Country *</label>
            <select
              @change="getDialingCode(personalInfo.country), getStates(personalInfo.country)"
              v-model="personalInfo.country"
              required
            >
              <option value selected disabled hidden>Select Country</option>
              <option
                v-for="(countryObj, index) in countriesPresentIn"
                :key="index"
              >{{countryObj.country}}</option>
            </select>
            <span
              v-if="!$v.personalInfo.country.required && $v.personalInfo.country.$error"
            >Country is required.</span>
          </div>
          <div class="column2" :class="{invalid: $v.personalInfo.state.$error}">
            <label for="stateLine">State or Pronvince *</label>
            <select v-model="personalInfo.state" @change="getCities(personalInfo.state)" required>
              <option value selected disabled hidden>Select State or Pronvince</option>
              <option v-for="(obj, index) in statesPresentIn" :key="index">{{obj.state}}</option>
            </select>
            <span
              v-if="!$v.personalInfo.state.required && $v.personalInfo.state.$error"
            >State or Pronvince is required.</span>
          </div>
        </div>
        <div class="row">
          <div class="column1" :class="{invalid: $v.personalInfo.city.$error}">
            <label for="cityLine">City *</label>
            <select @change="onBlurAddress()" v-model="personalInfo.city" required>
              <option value selected disabled hidden>Select City</option>
              <option v-for="(city, index) in citiesPresentIn" :key="index">{{city}}</option>
            </select>
            <span
              v-if="!$v.personalInfo.city.required && $v.personalInfo.city.$error"
            >City is required.</span>
          </div>
          <div class="column2" :class="{invalid: $v.personalInfo.zipCode.$error}">
            <label for="zipCode">Zip or Post Code *</label>
            <input type="text" v-model="personalInfo.zipCode" placeholder="Enter Zip or Post Code" />
            <span
              v-if="!$v.personalInfo.zipCode.required && $v.personalInfo.zipCode.$error"
            >Zip or Post Code is required.</span>
          </div>
        </div>
        <div class="row">
          <div class="column1" :class="{invalid: $v.personalInfo.addressLine1.$error}">
            <label for="addressLine1">Street Address 1*</label>
            <input
              type="text"
              @blur="onBlurAddress()"
              v-model="personalInfo.addressLine1"
              placeholder="Enter Street Address 1"
            />
            <span
              v-if="!$v.personalInfo.addressLine1.required && $v.personalInfo.addressLine1.$error"
            >Street Address 1 is required.</span>
          </div>
          <div class="column2">
            <label for="addressLine1">Street Address 2 (optional)</label>
            <input
              type="text"
              @blur="onBlurAddress()"
              v-model="personalInfo.addressLine2"
              placeholder="Enter Street Address 2"
            />
          </div>
        </div>
        <br />
        <div class="row">
          <div class="workgoogle-text">
            <p>
              Work Area Radius
              <br />
              <span>Description text</span>
            </p>
          </div>
          <div class="workgoogle-area">
            <button type="button" class="minus-btn" @click="decWorkArea">-</button> &nbsp;&nbsp;
            <strong>{{personalInfo.workArea.value}}</strong>
            of {{setMaxAreaRadius}}
            <button
              type="button"
              class="plus-btn"
              @click="incWorkArea"
            >+</button>
            <select class="workAreaSelectUnit" v-model="personalInfo.workArea.unit">
              <option :value="null" selected disabled hidden>unit</option>
              <option>miles</option>
              <option>km</option>
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
            <label for="phone1">Mobile Phone Number #1 *</label>
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
                  placeholder="Enter Phone Number"
                />
              </div>
            </div>
            <span
              v-if="!$v.personalInfo.mobileNum1.phoneNumber.required && $v.personalInfo.mobileNum1.phoneNumber.$error"
            >Phone Number is required.</span>
          </div>
          <div class="column2">
            <label for="phone2">Mobile Phone Number #2 (optional)</label>
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
                  placeholder="Enter Phone Number"
                />
              </div>
            </div>
          </div>
        </div>
        <br />
        <div>
          <h2>
            <strong>Are you legally eligible to work in your country of residence? *</strong>
          </h2>
        </div>
        <div class="row">
          <div class="column1" :class="{invalid: $v.personalInfo.isEligibleToWork.$error}">
            <select v-model="personalInfo.isEligibleToWork" required>
              <option value selected disabled hidden>Select one</option>
              <option :value="true">Yes</option>
              <option :value="false">No</option>
            </select>
            <span
              v-if="!$v.personalInfo.isEligibleToWork.required && $v.personalInfo.isEligibleToWork.$error"
            >This field is required.</span>
          </div>
        </div>
        <br />
        <div
          class="eligibletoWork-error"
          v-if="personalInfo.isEligibleToWork == false && $v.personalInfo.isEligibleToWork.$error"
        >You have to be eligible to work in your country of residence before you can register with us.</div>
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
import axios from "axios";
import { required, sameAs, requiredIf } from "vuelidate/lib/validators";
import PictureInput from "vue-picture-input";
import { mapActions, mapState, mapGetters, mapMutations } from "vuex";
import dialingCodesList from "../../../../mockData/dialingCodesList";
export default {
  components: {
    PictureInput
  },
  data() {
    return {
      countriesPresentIn: [
        {
          country: "Canada",
          states: [
            {
              state: "Ontario",
              cities: ["Toronto", "Ottawa", "Mississauga", "Brampton"]
            },
            {
              state: "Quebec",
              cities: ["Montreal", "Québec", "Laval", "Gatineau", "Longueuil"]
            },
            {
              state: "Alberta",
              cities: ["Calgary", "Edmonton", "Red Deer"]
            },
            {
              state: "Manitoba",
              cities: ["Winnipeg", "Brandon"]
            }
          ]
        },

        {
          country: "Germany",
          states: [
            {
              state: "Bavaria",
              cities: ["Munich", "Nuremberg", "Regensburg", "Ingolstadt"]
            },
            {
              state: "Berlin",
              cities: ["Berlin"]
            },
            {
              state: "Baden-Württemberg",
              cities: [
                "Stuttgart",
                "Karlsruhe",
                "Mannheim",
                "Freiburg im Breisgau"
              ]
            },
            {
              state: "Rhineland-Palatinate",
              cities: ["Mainz", "Ludwigshafen am Rhein", "Koblenz", "Trier"]
            }
          ]
        },
        {
          country: "United States",
          states: [
            {
              state: "New York",
              cities: ["New York", "Buffalo", "Rochester", "Yonkers"]
            },
            {
              state: "California",
              cities: [
                "Los Angeles",
                "San Diego",
                "San Jose",
                "San Francisco",
                "Fresno",
                "Sacramento"
              ]
            },
            {
              state: "Texas",
              cities: [
                "Houston",
                "San Antonio",
                "Dallas",
                "Austin",
                "Fort Worth",
                "El Paso"
              ]
            },
            {
              state: "Colorado",
              cities: [
                "Denver",
                "Colorado Springs",
                "Aurora",
                "Fort Collins",
                "Lakewood"
              ]
            }
          ]
        },
        {
          country: "Norway",
          states: [
            {
              state: "Oslo",
              cities: ["Oslo"]
            },
            {
              state: "Rogaland",
              cities: ["Stavanger", "Sandnes"]
            },
            {
              state: "Buskerud",
              cities: ["Drammen", "Kongsberg"]
            }
          ]
        }
      ],
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
          lat: "",
          lng: ""
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
      }
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
  methods: {
    onChange(avatar) {
      if (avatar) {
        let formData = new FormData();
        formData.append("avatar", avatar);
        axios
          .post("/users/myAvatar", formData)
          .then(res => {})
          .catch(error => console.log(error.response));
      } else {
        throw new Error();
      }
    },

    onSubmit(action) {
      if (action == "next" || action == null) {
        this.$v.$touch();
        if (this.$v.$invalid) {
          return;
        }
      }

      const personalInfoData = {
        personalInfo: this.personalInfo
      };
      const inspectorId = localStorage.getItem("openedInspectorId");
      axios
        .patch(`/inspector_users_admin/update/${inspectorId}`, personalInfoData)
        .then(res => {
          if (action == "next") {
            this.$emit("afterSaving");
          }
          if (action == "exit") {
            this.storeOkMessage(
              "The inspector's personal information has been updated"
            );
            this.$router.push("/inspectors");
          }
        })
        .catch(error => {
          console.log(error);
          this.error = error.response.data;
        });
    },
    incWorkArea() {
      this.personalInfo.workArea++;
      if (this.personalInfo.workArea > 50) {
        this.decWorkArea();
      }
    },
    decWorkArea() {
      this.personalInfo.workArea--;
      if (this.personalInfo.workArea < 30) {
        this.incWorkArea();
      }
    },

    ...mapMutations("adminStore", ["storeOkMessage"])
  },
  computed: {
    ...mapGetters("vehicleInspector", ["inspectorInfo"])
  },

  created() {
    const inspectorId = localStorage.getItem("openedInspectorId");
    console.log(inspectorId);
    axios
      .get(`/inspector_users_admin/${inspectorId}`)
      .then(res => {
        this.personalInfo = res.data.personalInfo;
        console.log(res);
      })
      .catch(error => {
        console.log(error);
      });

    // axios
    //   .get("/users/" + id + "/avatar")
    //   .then(res => {
    //     this.avatar = res.data;
    //   })
    //   .catch(error => console.log(error));
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
  padding-bottom: 20px;
  font-size: 22px;
  color: darkblue;
  font-weight: bold;
}

hr {
  margin-left: -10px;
  margin-right: -10px;
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
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 14px;
}

.eligibletoWork-error {
  color: red;
}

.workAreaSelectUnit {
  padding: 6px;
  padding-left: 4px;
  width: 36%;
}

.photo-body {
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

.plus-btn,
.minus-btn {
  outline: none;
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

