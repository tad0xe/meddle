<template>
  <div>
    <div class="body">
      <div class="container">
        <div class="container-header">Create New Customer</div>
        <div v-if="error" class="error">{{error}}</div>
        <div class="okMessage" v-if="okMessage">{{okMessage}}</div>
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
                >Password Confirmation is required.</span>
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
              <td class="checkbox-input">
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
import countriesLists from "../../../mockData/countriesList";
import dialingCodesList from "../../../mockData/dialingCodesList";
import {
  required,
  requiredIf,
  email,
  minLength,
  sameAs
} from "vuelidate/lib/validators";
import { mapState, mapActions, mapMutations, mapGetters } from "vuex";
export default {
  data() {
    return {
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
      if (this.customerInfo.pro.isInspector == false) {
        this.$store.dispatch("adminStore/signUpCustomerUser", customerInfoData);
      }

      if (this.customerInfo.pro.isInspector == true) {
        axios
          .post("/inspector_users_admin/createNew", customerInfoData)
          .then(res => {
            localStorage.setItem("openedInspectorId", res.data.user._id);
            this.storeOkMessage(res.data.okMessage);
            this.$router.push("/inspectors");
          })
          .catch(error => {
            console.log(error.response.data);
            this.clearErrorMessage();
            this.storeErrorMessage(error.response.data);
          });
      }
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
    ...mapMutations("adminStore", ["clearErrorMessage"]),
    ...mapMutations("adminStore", ["clearOkMessage"]),
    ...mapMutations("adminStore", ["storeErrorMessage"]),
    ...mapMutations("adminStore", ["storeOkMessage"])
  },
  computed: {
    ...mapGetters("adminStore", ["error"]),
    ...mapGetters("adminStore", ["okMessage"])
  },
  created() {
    this.countries = countriesLists;
  },
  beforeRouteLeave: (to, from, next) => {
    this.clearOkMessage;
    this.clearErrorMessage;
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

label {
  font-size: 16px;
  color: darkblue;
}

td {
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

.input-text span {
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