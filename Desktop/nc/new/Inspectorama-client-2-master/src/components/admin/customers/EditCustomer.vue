<template>
  <div>
    <div class="body">
      <div class="container">
        <div class="container-header">Edit Customer</div>
        <div v-if="error" class="error">{{error}}</div>
        <div class="okMessage" v-if="okMessage">{{okMessage}}</div>
        <div class="customer-id">
          Customer ID:&nbsp;
          <strong>{{customerId}}</strong>
        </div>
        <form @submit.prevent="onSubmit()">
          <table>
            <tr :class="{invalid: $v.customerInfo.firstName.$error}">
              <td>
                <label>First Name</label>
              </td>
              <td class="input-text">
                <input
                  type="text"
                  placeholder="First Name"
                  v-model="customerInfo.firstName"
                  required
                />
                <span
                  v-if="!$v.customerInfo.firstName.required && $v.customerInfo.firstName.$error"
                >First Name is required.</span>
              </td>
            </tr>
            <tr :class="{invalid: $v.customerInfo.lastName.$error}">
              <td>
                <label>Last Name</label>
              </td>
              <td class="input-text">
                <input type="text" placeholder="Last Name" v-model="customerInfo.lastName" required />
                <span
                  v-if="!$v.customerInfo.lastName.required && $v.customerInfo.lastName.$error"
                >Last Name is required.</span>
              </td>
            </tr>
            <tr :class="{invalid: $v.customerInfo.email.$error}">
              <td>
                <label>Email</label>
              </td>
              <td class="input-text">
                <input type="email" placeholder="Email" v-model="customerInfo.email" required />
                <span v-if="!$v.customerInfo.email.email">Email is invalid.</span>
                <span
                  v-if="!$v.customerInfo.email.required && $v.customerInfo.email.$error"
                >Email is required.</span>
              </td>
            </tr>
            <tr :class="{invalid: $v.customerInfo.password.$error}">
              <td>
                <label>Password</label>
              </td>
              <td class="input-text">
                <input
                  type="password"
                  placeholder="Password"
                  v-model="customerInfo.password"
                  required
                />
                <span
                  v-if="!$v.customerInfo.password.minLen"
                >Password must be at least {{ $v.customerInfo.password.$params.minLen.min }}.</span>
                <span
                  v-if="!$v.customerInfo.password.required && $v.customerInfo.password.$error"
                >Password is required.</span>
              </td>
            </tr>
            <tr :class="{invalid: $v.customerInfo.passwordRepeat.$error}">
              <td>
                <label>Password Confirmation</label>
              </td>
              <td class="input-text">
                <input
                  type="password"
                  placeholder="Password Confirmation"
                  v-model="customerInfo.passwordRepeat"
                  required
                />
                <span
                  v-if="!$v.customerInfo.passwordRepeat.required && $v.customerInfo.passwordRepeat.$error"
                >Password Confirmationis required.</span>
                <span v-else-if="!$v.customerInfo.passwordRepeat.sameAs">Passwords must match.</span>
              </td>
            </tr>
            <tr :class="{invalid: $v.customerInfo.contactInfo.addressLine1.$error}">
              <td>
                <label>Addressline 1</label>
              </td>
              <td class="input-text">
                <input
                  type="text"
                  placeholder="Addressline 1"
                  v-model="customerInfo.contactInfo.addressLine1"
                />
                <span
                  v-if="!$v.customerInfo.contactInfo.addressLine1.required && $v.customerInfo.contactInfo.addressLine1.$error"
                >Addressline 1 is required.</span>
              </td>
            </tr>
            <tr :class="{invalid: $v.customerInfo.contactInfo.addressLine2.$error}">
              <td>
                <label>Addressline 2</label>
              </td>
              <td class="input-text">
                <input
                  type="text"
                  placeholder="Addressline 2"
                  v-model="customerInfo.contactInfo.addressLine2"
                />
                <span
                  v-if="!$v.customerInfo.contactInfo.addressLine2.required && $v.customerInfo.contactInfo.addressLine2.$error"
                >Addressline 2 is required.</span>
              </td>
            </tr>
            <tr :class="{invalid: $v.customerInfo.contactInfo.country.$error}">
              <td>
                <label>Country</label>
              </td>
              <td class="input-text">
                <select
                  @change="getDialingCode(customerInfo.contactInfo.country)"
                  v-model="customerInfo.contactInfo.country"
                  required
                >
                  <option value selected disabled hidden>Select Country</option>
                  <option v-for="country in countries" :key="country">{{country}}</option>
                </select>
                <span
                  v-if="!$v.customerInfo.contactInfo.country.required && $v.customerInfo.contactInfo.country.$error"
                >Country is required.</span>
              </td>
            </tr>
            <tr :class="{invalid: $v.customerInfo.contactInfo.state.$error}">
              <td>
                <label>City</label>
              </td>
              <td class="input-text">
                <select v-model="customerInfo.contactInfo.state" required>
                  <option value selected disabled hidden>Select City</option>
                  <option>City</option>
                </select>
                <span
                  v-if="!$v.customerInfo.contactInfo.state.required && $v.customerInfo.contactInfo.state.$error"
                >City is required.</span>
              </td>
            </tr>
            <tr :class="{invalid: $v.customerInfo.lastName.$error}">
              <td>
                <label>Zip Code</label>
              </td>
              <td class="input-text">
                <input
                  type="text"
                  placeholder="Zip Code"
                  v-model="customerInfo.contactInfo.zipCode"
                />
                <span
                  v-if="!$v.customerInfo.contactInfo.zipCode.required && $v.customerInfo.contactInfo.zipCode.$error"
                >Zip Code is required.</span>
              </td>
            </tr>
            <tr :class="{invalid: $v.customerInfo.contactInfo.mobileNum.$error}">
              <td>
                <label>Mobile Number</label>
              </td>
              <td class="input-text">
                <div class="flex">
                  <div class="dialing-code">
                    <input
                      type="text"
                      placeholder="- - - - -"
                      disabled
                      v-model="customerInfo.contactInfo.countryCode"
                    />
                  </div>
                  <div class="phone-number">
                    <input
                      type="tel"
                      v-model="customerInfo.contactInfo.mobileNum"
                      placeholder="Enter Phone Number"
                    />
                  </div>
                </div>
                <span
                  v-if="!$v.customerInfo.contactInfo.mobileNum.required && $v.customerInfo.contactInfo.mobileNum.$error"
                >Mobile Number is required.</span>
              </td>
            </tr>
            <tr>
              <td>
                <label>Is Customer an Inspector?</label>
              </td>
              <td class="small-input-text">
                <input
                  type="checkbox"
                  placeholder="Mobile Number"
                  v-model="customerInfo.pro.isInspector"
                />
              </td>
            </tr>
            <tr
              :class="{invalid: $v.customerInfo.pro.typeOfInspector.$error}"
              v-if="customerInfo.pro.isInspector"
            >
              <td>
                <label>Type of Inspector</label>
              </td>
              <td class="input-text">
                <select v-model="customerInfo.pro.typeOfInspector" required>
                  <option value selected disabled hidden>Select Type of Inspector</option>
                  <option value="Vehicle">Vehicle</option>
                  <option value="Home">Home</option>
                  <option value="Textile">Textile</option>
                  <option value="Drone">Drone</option>
                </select>
                <span
                  v-if="!$v.customerInfo.pro.typeOfInspector.required && $v.customerInfo.pro.typeOfInspector.$error"
                >Type of Inspector is required.</span>
              </td>
            </tr>
            <tr :class="{invalid: $v.customerInfo.lastName.$error}">
              <td></td>
              <td class="input-text">
                <button type="submit" @click.prevent="onSubmit()" class="submit-btn">Submit</button>
              </td>
            </tr>
          </table>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import {
  required,
  requiredIf,
  email,
  minLength,
  sameAs
} from "vuelidate/lib/validators";
import { mapState, mapActions, mapMutations, mapGetters } from "vuex";
import countriesLists from "../../../mockData/countriesList";
import dialingCodesList from "../../../mockData/dialingCodesList";
export default {
  data() {
    return {
      customerId: "",
      customerInfo: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        passwordRepeat: "",
        contactInfo: {
          addressLine1: "",
          addressLine2: "",
          country: "",
          state: "",
          zipCode: "",
          countryCode: "",
          mobileNum1: ""
        },
        pro: {
          isInspector: false,
          typeOfInspector: ""
        }
      },
      createdAt: "",
      updatedAt: "",
      countries: [],
      dialingCodes: dialingCodesList
    };
  },
  validations: {
    customerInfo: {
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
      password: {
        required,
        minLen: minLength(8)
      },
      passwordRepeat: {
        required,
        sameAs: sameAs(vm => {
          return vm.password;
        })
      },
      contactInfo: {
        addressLine1: {
          required
        },
        addressLine2: {
          required
        },
        country: {
          required
        },
        state: {
          required
        },
        zipCode: {
          required
        },
        mobileNum: {
          required
        }
      },
      pro: {
        typeOfInspector: {
          required: requiredIf(vm => {
            return vm.isInspector == true;
          })
        }
      }
    }
  },
  watch: {
    "customerInfo.pro.isInspector"(val) {
      if (val == false) {
        this.customerInfo.pro.typeOfInspector = null;
      }
    }
  },
  methods: {
    onSubmit() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }

      const customerInfoData = this.customerInfo;
      console.log(customerInfoData);
      this.$store.dispatch("adminStore/updateCustomerUser", customerInfoData);
    },
    getDialingCode(selectedCountry) {
      let dialingCode;
      this.dialingCodes.forEach(item => {
        if (item.country == selectedCountry) {
          dialingCode = item.code;
        }
      });
      this.customerInfo.contactInfo.countryCode = dialingCode;
    },
    // ...mapMutations("adminStore", ["clearErrorMessage"]),
    // ...mapMutations("adminStore", ["clearOkMessage"]),
    ...mapMutations("adminStore", ["storeErrorMessage"]),
    ...mapMutations("adminStore", ["storeOkMessage"])
  },
  computed: {
    ...mapGetters("adminStore", ["error"])
  },

  created() {
    this.countries = countriesLists;
    const id = localStorage.getItem("openedCustomerId");
    axios
      .get(`/customer_users/${id}`)
      .then(res => {
        console.log(res);
        this.customerId = res.data._id;
        this.customerInfo.firstName = res.data.firstName;
        this.customerInfo.lastName = res.data.lastName;
        this.customerInfo.email = res.data.email;
        //Always populate the password to ensure that it sends back 'undefined' when saved without a new password input
        //instead of sending an empty string that will throw an 'invalid updates!' error
        this.customerInfo.password = res.data.password;
        this.customerInfo.contactInfo.addressLine1 =
          res.data.contactInfo.addressLine1;
        this.customerInfo.contactInfo.addressLine2 =
          res.data.contactInfo.addressLine2;
        this.customerInfo.contactInfo.country = res.data.contactInfo.country;
        this.customerInfo.contactInfo.state = res.data.contactInfo.state;
        this.customerInfo.contactInfo.zipCode = res.data.contactInfo.zipCode;
        this.customerInfo.contactInfo.mobileNum1 =
          res.data.contactInfo.mobileNum1;
        this.customerInfo.pro.isInspector = res.data.pro.isInspector;
        this.customerInfo.pro.typeOfInspector = res.data.pro.typeOfInspector;
        this.createdAt = res.data.createdAt;
        this.updatedAt = res.data.updatedAt;
      })
      .catch(error => {
        console.log(error);
        this.storeErrorMessage(error.response.data);
      });
  },
  //Always user ES5 and not ES6 arrow function
  beforeRouteLeave: function(to, from, next) {
    this.storeErrorMessage(null);
    next();
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.body {
  font-family: sans-serif, Arial, Helvetica;
  background-color: lightcyan;
  width: 100%;
  padding: 50px;
  justify-content: center;
  display: flex;
}

.container {
  padding: 20px 30px;
  border-radius: 8px;
  border: 1px solid #ddd;
  background-color: white;
  display: inline-table;
}

.container-header {
  font-size: 22px;
  padding-top: 5px;
  padding-bottom: 10px;
  font-weight: bold;
  color: darkblue;
}

.error,
.okMessage {
  padding-top: 5px;
  padding-bottom: 10px;
  font-size: 14px;
}

.error {
  color: red;
}

.okMessage {
  color: green;
}

label,
.customer-id {
  font-size: 16px;
  color: darkblue;
}

td,
.customer-id {
  text-align: left;
  padding-top: 10px;
  padding-bottom: 10px;
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

.input-text {
  padding-left: 20px;
  padding-right: 20px;
  width: 380px;
}

.small-input-text {
  padding-left: 20px;
  width: 220px;
  display: block;
}

.checkbox-input {
  padding-left: 20px;
  width: 40px;
  display: block;
}

input[type="tel"],
input[type="text"],
input[type="email"],
input[type="password"],
select {
  width: 100%;
  padding: 9px;
  border: 1px solid #ccc;
  border-radius: 3px;
  outline: none;
  background-color: rgb(232, 240, 254);
}

select {
  padding: 8px 6px;
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

.invalid label,
.invalid td {
  color: red;
}

.input-text span,
.small-input-text span {
  color: red;
  font-size: 12px;
}

.submit-btn {
  color: white;
  width: 170px;
  padding: 10px 0px;
  outline: none;
  border: none;
  cursor: pointer;
  font-size: 20px;
  text-align: center;
  border-radius: 5px;
  background-color: #2bc4e2;
}

.submit-btn:hover {
  background-color: #07b9dd;
}
</style>