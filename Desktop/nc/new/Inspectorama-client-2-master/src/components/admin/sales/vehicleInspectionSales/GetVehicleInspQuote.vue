<template>
  <div>
    <div class="body">
      <div class="container">
        <div class="container-header">Vehicle Inspection</div>
        <hr />
        <form @submit.prevent="onSubmit">
          <div class="row">
            <div class="input-text" :class="{invalid: $v.country.$error}">
              <label>Country</label>
              <select v-model="country" required>
                <option :value="null" disabled>Select Country</option>
                <option v-for="country in countries" :key="country">{{country}}</option>
              </select>
              <span v-if="!$v.country.required && $v.country.$error">First Name is required.</span>
            </div>
            <div class="input-text" :class="{invalid: $v.city.$error}">
              <label>City</label>
              <select v-model="city" required>
                <option :value="null" disabled>Select City</option>
                <option v-for="city in showCities" :key="city">{{city}}</option>
              </select>
              <span v-if="!$v.city.required && $v.city.$error">City Name is required.</span>
            </div>
          </div>
          <div class="row">
            <div class="input-text" :class="{invalid: $v.zipCode.$error}">
              <label>Zip Code</label>
              <input type="text" placeholder="Enter Zip Code" v-model="zipCode" />
              <span v-if="!$v.zipCode.required && $v.zipCode.$error">Zip Code is required.</span>
            </div>
          </div>
          <div class="row">
            <div class="input-text" :class="{invalid: $v.typeOfVehicle.$error}">
              <label>Type of Vehicle</label>
              <select v-model="typeOfVehicle" required>
                <option :value="null" disabled>Select Vehicle Type</option>
                <option v-for="vehicleType in vehicleTypes" :key="vehicleType">{{vehicleType}}</option>
              </select>
              <span
                v-if="!$v.typeOfVehicle.required && $v.typeOfVehicle.$error"
              >Vehicle Type is required.</span>
            </div>
            <div class="input-text" :class="{invalid: $v.vehicleBrand.$error}">
              <label>Vehicle Brand</label>
              <select v-model="vehicleBrand" required>
                <option :value="null" disabled>Select Vehicle Brand</option>
                <option v-for="brand in vehicleBrands" :key="brand">{{brand.make}}</option>
              </select>
              <span
                v-if="!$v.vehicleBrand.required && $v.vehicleBrand.$error"
              >Vehicle Brand is required.</span>
            </div>
          </div>
          <div class="row">
            <div class="input-text" :class="{invalid: $v.vehicleModel.$error}">
              <label>Vehicle Model</label>
              <select v-model="vehicleModel" required>
                <option :value="null" disabled>Select Vehicle Model</option>
                <option v-for="model in showModels" :key="model">{{model}}</option>
              </select>
              <span
                v-if="!$v.vehicleModel.required && $v.vehicleModel.$error"
              >Vehicle Model is required.</span>
            </div>
            <div class="input-text" :class="{invalid: $v.vehicleYear.$error}">
              <label>Vehicle Year</label>
              <Datepicker
                class="datepicker"
                v-model="vehicleYear"
                lang="en"
                type="year"
                format="YYYY"
                placeholder="Select Vehicle Year"
                :disabled-date="(date)=>date > Date.now()"
              >
                <i slot="icon-calendar"></i>
              </Datepicker>
              <span
                v-if="!$v.vehicleYear.required && $v.vehicleYear.$error"
              >Vehicle Year is required.</span>
            </div>
          </div>
          <div class="row" :class="{invalid: $v.inspectionDateTime.$error}">
            <div class="input-text">
              <label>Inspection Date and Time</label>
              <Datepicker
                class="datepicker"
                v-model="inspectionDateTime"
                lang="en"
                type="datetime"
                format="[on] YYYY-MMMM-dd [at] HH:mm a"
                :minute-step="30"
                :time-picker-options="{ start: '06:00', step: '00:30', end: '17:00'}"
                placeholder="Choose Inspection Date and Time (Local Time)"
                :disabled-date="(date)=>date < new Date().setHours(0, 0, 0, 0)"
                :disabled-time="(time)=>time < new Date()"
              ></Datepicker>
              <span
                v-if="!$v.inspectionDateTime.required && $v.inspectionDateTime.$error"
              >Inspection Date and Time is required.</span>
            </div>
          </div>
          <div class="row" :class="{invalid: $v.email.$error}">
            <div class="input-text" v-if="!auth">
              <label>Email</label>
              <input type="email" placeholder="Enter Email" v-model="email" required />
              <span v-if="!$v.email.email">Email is invalid.</span>
              <span v-if="!$v.email.required && $v.email.$error">Email is required.</span>
            </div>
          </div>
          <div>
            <p>
              By entering my email above, I agree to receive updates and exclusive offers from Inspectomania's. Consent can be withdrawn at any time.
              For more details see our
              <u
                class="link"
              >Privacy Policy</u> and
              <u class="link">Terms of Use</u>
            </p>
          </div>
          <div>
            <center>
              <button type="submit" @click.prevent="onSubmit()" class="submit-btn">Get a Price</button>
            </center>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import vehicleBrands from "../../../../mockData/vehicleBrands";
import { required, email } from "vuelidate/lib/validators";
import { mapState, mapActions, mapMutations, mapGetters } from "vuex";
import Datepicker from "vue2-datepicker";
export default {
  components: {
    Datepicker
  },
  data() {
    return {
      typeOfInspection: "vehicle",
      typeOfVehicle: null,
      city: null,
      country: null,
      zipCode: null,
      vehicleBrand: null,
      vehicleModel: null,
      vehicleYear: null,
      inspectionDateTime: null,
      canSeeService: false,
      email: null,

      countries: ["Norway", "USA", "United Kingdom", "Germany"],

      cities: {
        norwayCities: ["Oslo", "Trondheim", "Stavanger", "Kongsberg"],
        usaCities: ["New York", "California", "Florida", "Denver"],
        ukCities: ["London", "Manchester", "Aberdeen"],
        germanyCities: ["Munich", "Hamburg", "Berlin"]
      },

      vehicleTypes: ["Car", "Van", "Truck", "Motorcycle"],

      vehicleBrands: vehicleBrands,

      vehicleModels: {
        volkswagen: [
          "Amarok",
          "Arteon",
          "Ameo",
          "Atlas",
          "Caddy",
          "California",
          "Golf",
          "Jetta"
        ],
        mercedesBenz: ["A-Class", "B-Class", "C-Class", "E-Class"],
        volvo: ["PV51", "C202", "PV60", "850"],
        bmw: ["X5M", "Z3", "M6", "R32"]
      }
    };
  },
  validations: {
    typeOfVehicle: {
      required
    },
    city: {
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
    },
    email: {
      required,
      email
    }
  },
  computed: {
    showCities() {
      if (this.country == "Norway") {
        return this.cities.norwayCities;
      }
      if (this.country == "USA") {
        return this.cities.usaCities;
      }
      if (this.country == "United Kingdom") {
        return this.cities.ukCities;
      }
      if (this.country == "Germany") {
        return this.cities.germanyCities;
      }
    },
    showModels() {
      if (this.vehicleBrand == "Volkswagen") {
        return this.vehicleModels.volkswagen;
      }
      if (this.vehicleBrand == "Mercedes Benz") {
        return this.vehicleModels.mercedesBenz;
      }
      if (this.vehicleBrand == "Volvo") {
        return this.vehicleModels.volvo;
      }
      if (this.vehicleBrand == "BMW") {
        return this.vehicleModels.bmw;
      }
    },
    auth() {
      return this.$store.getters.isAuthenticated;
    },
    ...mapState({
      getVehicleInspectionPreOrder: state => state.orders.user.preOrder,
      userAuthenticationState: state => state.userId,
      anonUserAuthenticationState: state => state.anonUser.userId,
      getUser: state => state.user
    }),
    ...mapGetters("orders", ["allVehicleBrands"])
  },

  methods: {
    onSubmit() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }

      const inspectionData = {
        country: this.country,
        city: this.city,
        zipCode: this.zipCode,
        typeOfVehicle: this.typeOfVehicle,
        vehicleBrand: this.vehicleBrand,
        vehicleModel: this.vehicleModel,
        vehicleYear: this.vehicleYear,
        inspectionDateTime: this.inspectionDateTime,
        email: this.email,
        canSeeService: true,
        typeOfInspection: this.typeOfInspection
      };
      console.log(inspectionData);
      console.log(this.anonUserAuthenticationState);
      console.log(this.userAuthenticationState);
      //There are users and there are anonymous users. An authenticated user is signed in but NOT anonymously.
      if (this.userAuthenticationState == null) {
        //this means the user is either anonymously signed in or not signed in at all
        if (this.anonUserAuthenticationState == null) {
          //not signed in at all
          this.$store.dispatch("anonSignin", inspectionData);
        } else {
          //anonymously signed in
          this.$store.dispatch(
            "orders/storePreVehicleInspectionOrder",
            inspectionData
          );
        }
      }
      if (this.userAuthenticationState != null) {
        //this means the user is authenticated and not anonymous
        console.log("passed here");
        this.$store.dispatch(
          "orders/storeVehicleInspectionQuote",
          inspectionData
        );
      }
    }
  },
  created() {
    this.$store.dispatch("fetchUser");
    this.$store.dispatch("orders/fetchVehicleBrands");
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.body {
  background-color: lightcyan;
  font-family: sans-serif, Arial, Helvetica;
  padding: 50px;
  justify-content: center;
  display: flex;
}

.container {
  background-color: white;
  padding: 20px 15px;
  border-radius: 8px;
  width: 720px;
  border: 1px solid #b6b1b1;
}

form {
  padding-top: 10px;
}

.container-header {
  padding-top: 5px;
  padding-bottom: 20px;
  text-align: center;
  color: darkblue;
  font-size: 24px;
  font-weight: bold;
}

p {
  padding: 10px;
  font-size: 13px;
}

.row::after {
  content: "";
  clear: both;
  display: table;
}

label {
  font-size: 13px;
  display: block;
}

.datepicker {
  width: 100%;
}

.input-text {
  margin-top: 10px;
  margin-bottom: 10px;
  padding-left: 8px;
  padding-right: 8px;
  float: left;
  width: 50%;
}

.datepicker /deep/ input {
  width: 100%;
  font-size: 13px;
  margin-top: 6px;
  padding: 8px;
  color: black;
  height: 36px;
  border: 1px solid #ccc;
  border-radius: 3px;
  background-clip: padding-box;
  outline: none;
  box-shadow: none;
  background-color: rgb(232, 240, 254);
  display: block;
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
  padding: 9px 4px;
}

select:invalid {
  color: #777777;
}

option {
  color: black;
}

label span {
  font-size: 13px;
}

input:focus,
select:focus,
.datepicker /deep/ input:focus {
  outline: none;
  border: 1px solid #a842a7;
  background-color: #eee;
}

.invalid input,
.invalid select,
.invalid /deep/ input {
  border: 1px solid red;
}

.invalid label {
  color: red;
}

.input-text span,
.small-input-text span {
  color: red;
  font-size: 12px;
}

.submit-btn {
  background-color: #2bc4e2;
  color: white;
  min-width: 350px;
  padding: 13px 20px;
  margin-top: 15px;
  margin-bottom: 20px;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 18px;
  border-radius: 20px;
}

.submit-btn:hover {
  background-color: #07b9dd;
}

.link {
  cursor: pointer;
  color: dodgerblue;
}

.link:hover {
  color: blue;
}
</style>
