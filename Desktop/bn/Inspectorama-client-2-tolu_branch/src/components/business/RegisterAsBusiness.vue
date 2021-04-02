<template>
  <div class="body">
    <div class="top-container">
      <form @submit.prevent="onSubmit">
        <div class="title">
          <h2>We are with you every step of the way</h2>
          <p>Register with us and get access to our highly talented and qualified inspectors</p>
        </div>
        <div class="row">
          <div class="column1" :class="{invalid: $v.firstName.$error}">
            <input
              type="text"
              required
              placeholder="First Name"
              @blur="$v.firstName.$touch()"
              v-model="firstName"
            />
            <span v-if="!$v.firstName.required && $v.firstName.$error">First Name is required.</span>
          </div>
          <div class="column2" :class="{invalid: $v.lastName.$error}">
            <input
              type="text"
              required
              placeholder="Last Name"
              @blur="$v.lastName.$touch()"
              v-model="lastName"
            />
            <span v-if="!$v.lastName.required && $v.lastName.$error">Last Name is required.</span>
          </div>
        </div>
        <div class="row">
          <div class="column1" :class="{invalid: $v.email.$error}">
            <input
              type="email"
              required
              placeholder="Enter Work Email"
              @blur="$v.email.$touch()"
              v-model="email"
            />
            <span v-if="!$v.email.email">Email is invalid.</span>
            <span v-if="!$v.email.required && $v.email.$error">Email is required.</span>
          </div>
          <div class="column1" >
            <input
              type="email"
              required
              placeholder="Enter Work Title"
              v-model="workTitle"
            />
          </div>
        </div>
        <div class="row" v-if="!auth">
          <div class="column1" :class="{invalid: $v.password.$error}">
            <input
              type="password"
              required
              placeholder="Enter Password"
              @blur="$v.password.$touch()"
              v-model="password"
            />
            <span
              v-if="!$v.password.minLen"
            >Password must be at least {{ $v.password.$params.minLen.min }}.</span>
            <span v-if="!$v.password.required && $v.password.$error">Password is required.</span>
          </div>
          <div class="column2" :class="{invalid: $v.repeatPassword.$error}">
            <input
              type="password"
              required
              placeholder="Repeat password"
              @blur="$v.repeatPassword.$touch()"
              v-model="repeatPassword"
            />
            <span
              v-if="!$v.repeatPassword.required && $v.repeatPassword.$error"
            >Repeat password is required.</span>
            <span v-else-if="!$v.repeatPassword.sameAs">Passwords must match.</span>
          </div>
        </div>
        <div class="row">
          <div class="column1" :class="{invalid: $v.typeOfInspector.$error}">
            <select
              name="typeOfInspector"
              required
              @blur="$v.typeOfInspector.$touch()"
              v-model="typeOfInspector"
            >
              <option value disabled selected hidden>Select your inspection service</option>
              <option value="Vehicle">Vehicle Inspection</option>
              <option value="Home">Home Inspection</option>
              <option value="Drone">Drone Inspection</option>
              <option value="Textile">Textile Inspection</option>
              <option value="OilAndGas">Oil & gas Inspection</option>
            </select>
            <span
              v-if="!$v.typeOfInspector.required && $v.typeOfInspector.$error"
            >Please select your inspection service.</span>
          </div>
          <div class="column2" :class="{invalid: $v.countryOfInspector.$error}">
            <select
              required
              @blur="$v.countryOfInspector.$touch()"
              @change="getDialingCode(), getStates(countryOfInspector)"
              v-model="countryOfInspector"
            >
              <option value disabled selected hidden>Select country</option>
              <option
                v-for="(countryObj, index) in countriesPresentIn"
                :key="index"
              >{{countryObj.country}}</option>
            </select>
            <span
              v-if="!$v.countryOfInspector.required && $v.countryOfInspector.$error"
            >Please select country.</span>
          </div>
        </div>
        <div class="row">
          <div class="column1" :class="{invalid: $v.stateOfInspector.$error}">
            <select
              name="stateOfInspector"
              required
              @blur="$v.stateOfInspector.$touch()"
              @change="getCities(stateOfInspector)"
              v-model="stateOfInspector"
            >
              <option value disabled selected hidden>Select state or province</option>
              <option v-for="(obj, index) in statesPresentIn" :key="index">{{obj.state}}</option>
            </select>
            <span
              v-if="!$v.stateOfInspector.required && $v.stateOfInspector.$error"
            >Please select state or province.</span>
          </div>
          <div class="column2" :class="{invalid: $v.cityOfInspector.$error}">
            <select
              name="cistyOfInspector"
              required
              @blur="$v.cityOfInspector.$touch()"
              v-model="cityOfInspector"
            >
              <option value disabled selected hidden>Select city</option>
              <option v-for="(city, index) in citiesPresentIn" :key="index">{{city}}</option>
            </select>
            <span
              v-if="!$v.cityOfInspector.required && $v.cityOfInspector.$error"
            >Please select your city.</span>
          </div>
        </div>
        <div class="row">
          <p>
            By creating an account you agree to our
            <a class="link" href="#">Terms & Privacy</a>.
          </p>
          <p class="error" v-if="error">{{error}}</p>
        </div>
        <div class="row">
          <button type="submit" class="btn" :disabled="$v.$invalid && !auth">Get Started</button>
        </div>
        <div class="row">
          <p>
            Already applied? Check your application status
            <span
              class="link"
              @click="onClickLink()"
            >here</span>.
          </p>
        </div>
      </form>
    </div>
    <div class="container-two">
      <div class="column text-wrapper">
        <div>
          <i class="fas fa-dollar-sign"></i>
        </div>
        <span>
          <b>GREAT PAY</b>
        </span>
        <p>Start earning money this week! Gain access to hundreds of inspection jobs in your city and build your own schedule.</p>
      </div>
      <div class="column text-wrapper">
        <div>
          <i class="fa fa-calendar"></i>
        </div>
        <span>
          <b>FLEXIBLE SCHEDULE</b>
        </span>
        <p>You choose when you want to work and how much. Build a full schedule of your customers or simply add a few jobs on the side.</p>
      </div>
      <div class="column text-wrapper">
        <div>
          <i class="fa fa-credit-card-alt"></i>
        </div>
        <span>
          <b>EASY PAYMENTS</b>
        </span>
        <p>No more tracking down your customers for payments. Your payments are direct paid into your bank account soon after the job is complete.</p>
      </div>
    </div>
    <div class="container-three">
      <div class="title">
        <h2>Requirements to become an inspector</h2>
      </div>
      <div class="list-wrapper">
        <ul>
          <li>Vehicle inspector</li>
          <li>Home inspector</li>
          <li>Textile inspector</li>
          <li>Drone inspector</li>
        </ul>
      </div>
    </div>
    <CheckInspectorApplicationStatus
      v-show="isCheckInspectorApplicationStatusVisible"
      @close="hideInspectorApplicationStatusModal()"
    ></CheckInspectorApplicationStatus>
  </div>
</template>

<script>
import axios from "axios";
import CheckInspectorApplicationStatus from "../modals/CheckInspectorApplicationStatus.vue";
import { mapState, mapActions, mapMutations, mapGetters } from "vuex";
import { required, email, minLength, sameAs } from "vuelidate/lib/validators";
import dialingCodesList from "../../mockData/dialingCodesList";
import countriesPresentIn from "../../mockData/countriesPresentIn";

export default {
  components: {
    CheckInspectorApplicationStatus
  },
  data() {
    return {
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
      citiesPresentIn: [],
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
      required,
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
      required,
      minLen: minLength(8)
    },
    repeatPassword: {
      required,
      sameAs: sameAs(vm => {
        return vm.password;
      })
    }
  },
  methods: {
    onSubmit() {
      const formData = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password,
        pro: {
          isInspector: true,
          typeOfInspector: this.typeOfInspector
        },
        contactInfo: {
          city: this.cityOfInspector,
          state: this.stateOfInspector,
          country: this.countryOfInspector,
          countryCode: this.countryCode
        },
        referrer: this.referrer
      };

      if (!this.auth) {
        this.$store.dispatch("signup", formData);
      }
      if (this.auth) {
        // this.$store.dispatch("updateUser", {
        //   pro: {
        //     isInspector: true,
        //     typeOfInspector: this.typeOfInspector,
        //     referrer: this.referrer
        //   }
        // });
        delete formData.password
        this.$store.dispatch("storeInspector", formData);
      }
    },

    onClickLink() {
      if (!this.auth || (this.auth && !this.isInspector)) {
        this.isCheckInspectorApplicationStatusVisible = true;
      }
      if (this.auth && this.isInspector) {
        this.$store.dispatch("fetchInspectorInfo")
        this.$router.push(
          `/status/inspector-registration/${localStorage.getItem("userId")}`
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
        .catch(error => console.log(error));
    }
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

/* Clear floats after the columns */
.row::after {
  content: "";
  clear: both;
  display: table;
}

.column1 {
  padding-right: 10px;
  float: left;
  width: 300px;
  margin: 10px 0px;
}

.column2 {
  padding-left: 10px;
  float: left;
  width: 300px;
  margin: 10px 0px;
}

.column {
  width: 33%;
}

.body {
  font-family: sans-serif, Arial, Helvetica;
}

.top-container {
  background-color: lightcyan;
  padding: 50px;
  width: 100%;
  display: inline-block;
}

.top-container p {
  padding: 10px 0px;
  font-size: 15px;
}

h2 {
  font-size: 26px;
}

input,
select {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
  outline: none;
  background-color: white;
}

select {
  padding: 9px 5px;
}

select:invalid {
  color: #777777;
}

option {
  color: black;
}

input:focus {
  outline: none;
  border: 1px solid #a842a7;
  background-color: #eee;
}

.invalid input,
.invalid select {
  border: 1px solid red;
}

.invalid span {
  color: red;
  font-size: 12px;
}

.btn {
  background-color: #2bc4e2;
  color: white;
  max-width: 70%;
  padding: 13px 20px;
  outline: none;
  border: none;
  cursor: pointer;
  font-size: 20px;
  text-align: center;
  box-sizing: border-box;
  border-radius: 5px;
  margin: 10px 0px;
}

.btn:hover {
  background-color: #07b9dd;
}

.btn[disabled],
.btn[disabled]:hover {
  border: 1px solid #2bc4e2;
  border-radius: 5px;
  background-color: white;
  color: #2bc4e2;
  cursor: not-allowed;
}

.container-two {
  text-align: center;
  padding: 30px 50px;
  display: inline-table;
}

.text-wrapper {
  float: left;
  padding: 10px;
  line-height: 30px;
}

.fas,
.fa-dollar-sign,
.fa,
.fa-calendar,
.fa,
.fa-credit-card-alt {
  font-size: 48px;
  color: darkcyan;
  padding-bottom: 20px;
}

.link {
  cursor: pointer;
  color: dodgerblue;
}

.link:hover {
  color: blue;
}

.container-three {
  padding: 30px 50px;
  padding-top: 0px;
  text-align: center;
  width: 100%;
  display: inline-block;
}

.list-wrapper ul {
  display: inline-block;
  /* For IE, the outcast */
  zoom: 1;
  *display: inline;
}

.list-wrapper li {
  padding: 10px;
}

.error {
  color: red;
}

/* For tablet phones: */
@media only screen and (max-width: 780px) {
  .column1,
  .column2 {
    width: 50%;
  }

  .column {
    width: 100%;
  }

  h2 {
    font-size: 22px;
  }

  .top-container {
    padding: 30px;
  }

  .container-two {
    padding: 20px 30px;
  }

  .container-three {
    padding: 20px 50px;
    padding-top: 0px;
  }
}

/* For mobile phones: */
@media only screen and (max-width: 460px) {
  .column1,
  .column2 {
    padding: 0px;
    width: 100%;
  }

  .top-container {
    padding: 15px 10px;
  }

  .container-two {
    padding: 10px;
  }

  .container-three {
    padding: 10px;
    padding-top: 0px;
  }
}
</style>
