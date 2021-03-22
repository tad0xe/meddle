<template>
  <div>
    <div class="container">
      <div class="container-left">
        <div class="container-left-header">
          <h2>Vehicle Inspection Order</h2>
        </div>
        <br />
        <form @submit.prevent="onSubmit">
          <div class="personal-info">
            <div class="personal-info-header">
              <h3>Your personal information</h3>
            </div>
            <div class="row">
              <div
                class="column1"
                :class="{invalid: $v.vehicleInspectionOrderData.firstName.$error}"
              >
                <label for="firstName">First Name *</label>
                <input
                  type="text"
                  placeholder="First Name"
                  v-model="vehicleInspectionOrderData.firstName"
                  required
                />
                <span
                  v-if="!$v.vehicleInspectionOrderData.firstName.required && $v.vehicleInspectionOrderData.firstName.$error"
                >First Name is required.</span>
              </div>
              <div
                class="column2"
                :class="{invalid: $v.vehicleInspectionOrderData.lastName.$error}"
              >
                <label for="lastName">Last Name *</label>
                <input
                  type="text"
                  placeholder="Last Name"
                  v-model="vehicleInspectionOrderData.lastName"
                  required
                />
                <span
                  v-if="!$v.vehicleInspectionOrderData.lastName.required && $v.vehicleInspectionOrderData.lastName.$error"
                >Last Name is required.</span>
              </div>
            </div>
            <div class="row">
              <div class="column1" :class="{invalid: $v.vehicleInspectionOrderData.country.$error}">
                <label for="country">Country *</label>
                <select
                  @change="getDialingCode()"
                  v-model="vehicleInspectionOrderData.country"
                  required
                >
                  <option value selected disabled hidden>Select Country</option>
                  <option v-for="(country, index) in countries" :key="index">{{country}}</option>
                </select>
                <span
                  v-if="!$v.vehicleInspectionOrderData.country.required && $v.vehicleInspectionOrderData.country.$error"
                >Country is required.</span>
              </div>
              <div class="column2" :class="{invalid: $v.vehicleInspectionOrderData.state.$error}">
                <label for="state">State *</label>
                <input
                  type="text"
                  placeholder="Select State"
                  v-model="vehicleInspectionOrderData.state"
                  required
                />
                <span
                  v-if="!$v.vehicleInspectionOrderData.state.required && $v.vehicleInspectionOrderData.state.$error"
                >State is required.</span>
              </div>
            </div>
            <div class="row">
              <div class="column1" :class="{invalid: $v.vehicleInspectionOrderData.city.$error}">
                <label for="city">City *</label>
                <input
                  type="text"
                  placeholder="Select City"
                  v-model="vehicleInspectionOrderData.city"
                  required
                />
                <span
                  v-if="!$v.vehicleInspectionOrderData.city.required && $v.vehicleInspectionOrderData.city.$error"
                >City is required</span>
              </div>
              <div
                class="column2"
                :class="{invalid: $v.vehicleInspectionOrderData.addressLine1.$error}"
              >
                <label for="addressLine1">Address line 1 *</label>
                <input
                  type="text"
                  placeholder="Enter Address 1"
                  v-model="vehicleInspectionOrderData.addressLine1"
                  required
                />
                <span
                  v-if="!$v.vehicleInspectionOrderData.addressLine1.required && $v.vehicleInspectionOrderData.addressLine1.$error"
                >Address line 1 is required.</span>
              </div>
            </div>
            <div class="row">
              <div class="column1">
                <label for="addressLine2">Address line 2</label>
                <input
                  type="text"
                  placeholder="Enter Address 2"
                  v-model="vehicleInspectionOrderData.addressLine2"
                />
              </div>
              <div class="column2">
                <label for="zipCode">Zip/Post Code</label>
                <input
                  type="text"
                  placeholder="Enter zip/Post Code"
                  v-model="vehicleInspectionOrderData.zipCode"
                />
              </div>
            </div>
            <div class="row">
              <div
                class="column1"
                :class="{invalid: $v.vehicleInspectionOrderData.mobileNum1.phoneNumber.$error}"
              >
                <label for="mobileNum1">Mobile Phone Number #1 *</label>
                <div class="flex">
                  <div class="dialing-code">
                    <input
                      type="text"
                      placeholder="- - - - -"
                      disabled
                      v-model="vehicleInspectionOrderData.mobileNum1.countryCode"
                    />
                  </div>
                  <div class="phone-number">
                    <input
                      type="number"
                      v-model="vehicleInspectionOrderData.mobileNum1.phoneNumber"
                      placeholder="Enter Phone Number"
                    />
                  </div>
                </div>
                <span
                  v-if="!$v.vehicleInspectionOrderData.mobileNum1.required && $v.vehicleInspectionOrderData.mobileNum1.$error"
                >Phone Number is required.</span>
              </div>
              <div class="column2">
                <label for="mobileNum2">Mobile Phone Number #2 (optional)</label>
                <div class="flex">
                  <div class="dialing-code">
                    <input
                      type="text"
                      placeholder="- - - - -"
                      disabled
                      v-model="vehicleInspectionOrderData.mobileNum2.countryCode"
                    />
                  </div>
                  <div class="phone-number">
                    <input
                      type="number"
                      v-model="vehicleInspectionOrderData.mobileNum2.phoneNumber"
                      placeholder="Enter Phone Number"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div
                class="column1"
                v-if="!auth"
                :class="{invalid: $v.vehicleInspectionOrderData.password.$error}"
              >
                <label for="password">Password *</label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  v-model="vehicleInspectionOrderData.password"
                  required
                />
                <span
                  v-if="!$v.vehicleInspectionOrderData.password.minLen"
                >Password must be at least {{ $v.vehicleInspectionOrderData.password.$params.minLen.min }}.</span>
                <span
                  v-if="!$v.vehicleInspectionOrderData.password.required && $v.vehicleInspectionOrderData.password.$error"
                >Password is required.</span>
              </div>
              <div
                class="column2"
                v-if="!auth"
                :class="{invalid: $v.vehicleInspectionOrderData.repeatPassword.$error}"
              >
                <label for="repeatPassword">Repeat Password</label>
                <input
                  type="password"
                  placeholder="Repeat Password"
                  v-model="vehicleInspectionOrderData.repeatPassword"
                />
                <span
                  v-if="!$v.vehicleInspectionOrderData.repeatPassword.required && $v.vehicleInspectionOrderData.repeatPassword.$error"
                >Repeat Password is required.</span>
                <span
                  v-else-if="!$v.vehicleInspectionOrderData.repeatPassword.sameAs"
                >Passwords must match.</span>
              </div>
            </div>
          </div>
          <div class="vehicle-information">
            <div class="texts">
              <h3>Information about the vehicle</h3>
              <div class="column1">
                <label for="vehicleInfo.VIN">VIN - Vehicle Identification Number (optional)</label>
                <input
                  type="text"
                  placeholder="Enter VIN"
                  v-model="vehicleInspectionOrderData.inspectedItemInfo.vehicleInfo.VIN"
                />
              </div>
            </div>
            <div class="vehicle-location">
              <span>
                <strong>Location of the vehicle</strong>
              </span>
              <br />
              <div>
                <div
                  class="column1"
                  :class="{invalid: $v.vehicleInspectionOrderData.inspectedItemInfo.vehicleLocation.$error}"
                >
                  <label for="vehicleLocation">Street *</label>
                  <input
                    type="text"
                    placeholder="Enter street"
                    v-model="vehicleInspectionOrderData.inspectedItemInfo.vehicleLocation"
                    required
                  />
                  <span
                    v-if="!$v.vehicleInspectionOrderData.inspectedItemInfo.vehicleLocation.required && $v.vehicleInspectionOrderData.inspectedItemInfo.vehicleLocation.$error"
                  >Street is required.</span>
                </div>
                <div class="country-city-zipcode">
                  <!-- {{orderQuote.country}}, {{orderQuote.state}}, {{orderQuote.city}}, {{orderQuote.zipCode}} &nbsp; -->
                  <button type="button">Edit</button>
                </div>
              </div>
            </div>
            <div class="label-textarea">
              <label for="moreInfo">You have more information for the inspector?</label>
              <textarea rows="5" v-model="vehicleInspectionOrderData.moreInfo"></textarea>
            </div>
          </div>
          <br />
          <div class="seller-info">
            <div class="texts">
              <h3>Information about the seller</h3>
              <label>
                <input
                  type="checkbox"
                  @change="isOptional=!isOptional"
                  v-model="vehicleInspectionOrderData.sellerInfo.isSellerInfo"
                  for="sellerInfo.isSellerInfo"
                /> Enter Seller Information
              </label>
              <br v-show="!vehicleInspectionOrderData.sellerInfo.isSellerInfo" />
              <div v-show="vehicleInspectionOrderData.sellerInfo.isSellerInfo">
                <div class="row">
                  <div
                    class="column1"
                    :class="{invalid: $v.vehicleInspectionOrderData.sellerInfo.sellerFirstName.$error}"
                  >
                    <label for="sellerInfo.sellerFirstName">Seller's First Name *</label>
                    <input
                      type="text"
                      placeholder="Seller's First Name"
                      v-model="vehicleInspectionOrderData.sellerInfo.sellerFirstName"
                    />
                    <span
                      v-if="!$v.vehicleInspectionOrderData.sellerInfo.sellerFirstName.required && $v.vehicleInspectionOrderData.sellerInfo.sellerFirstName.$error"
                    >Seller's First Name is required.</span>
                  </div>
                  <div
                    class="column2"
                    :class="{invalid: $v.vehicleInspectionOrderData.sellerInfo.sellerLastName.$error}"
                  >
                    <label for="sellerInfo.sellerLastName">Seller's Last Name *</label>
                    <input
                      type="text"
                      placeholder="Seller's Last Name"
                      v-model="vehicleInspectionOrderData.sellerInfo.sellerLastName"
                    />
                    <span
                      v-if="!$v.vehicleInspectionOrderData.sellerInfo.sellerLastName.required && $v.vehicleInspectionOrderData.sellerInfo.sellerLastName.$error"
                    >Seller's Last Name is required.</span>
                  </div>
                </div>
                <div class="row">
                  <div
                    class="column1"
                    :class="{invalid: $v.vehicleInspectionOrderData.sellerInfo.sellerEmailId.$error}"
                  >
                    <label for="sellerInfo.sellerEmailId">Seller's Email *</label>
                    <input
                      type="email"
                      placeholder="Seller's Email"
                      v-model="vehicleInspectionOrderData.sellerInfo.sellerEmailId"
                    />
                    <span
                      v-if="!$v.vehicleInspectionOrderData.sellerInfo.sellerEmailId.email"
                    >Email is invalid.</span>
                    <span
                      v-if="!$v.vehicleInspectionOrderData.sellerInfo.sellerEmailId.required && $v.vehicleInspectionOrderData.sellerInfo.sellerEmailId.$error"
                    >Seller's email is required.</span>
                  </div>
                  <div
                    class="column2"
                    :class="{invalid: $v.vehicleInspectionOrderData.sellerInfo.sellerMobileNum.phoneNumber.$error}"
                  >
                    <label for="sellerInfo.sellerMobileNum.phoneNumber">Seller's Mobile Number *</label>
                    <div class="flex">
                      <div class="dialing-code">
                        <input
                          type="text"
                          placeholder="- - - - -"
                          disabled
                          v-model="vehicleInspectionOrderData.sellerInfo.sellerMobileNum.countryCode"
                        />
                      </div>
                      <div class="phone-number">
                        <input
                          type="tel"
                          v-model="vehicleInspectionOrderData.sellerInfo.sellerMobileNum.phoneNumber"
                          placeholder="Enter Phone Number"
                        />
                      </div>
                    </div>
                    <span
                      v-if="!$v.vehicleInspectionOrderData.sellerInfo.sellerMobileNum.phoneNumber.required && $v.vehicleInspectionOrderData.sellerInfo.sellerMobileNum.phoneNumber.$error"
                    >Seller's Mobile Number is required.</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="column1">
                <label for="hearAboutUs">How did you hear about us (optional)</label>
                <select v-model="vehicleInspectionOrderData.hearAboutUs">
                  <option value selected disabled hidden>Select one</option>
                  <option value="google">Google</option>
                  <option value="friendOrFamily">A friend or family</option>
                  <option value="Facebbok">Facebook</option>
                  <option value="twitter">Twitter</option>
                </select>
              </div>
              <div class="column2">
                <label for="promoCode">Promo code (optional)</label>
                <input
                  type="text"
                  placeholder="Enter Code"
                  v-model="vehicleInspectionOrderData.promoCode"
                />
              </div>
            </div>
          </div>
          <br />
          <div class="payment-info">
            <div class="texts">
              <h3>Payment</h3>
            </div>
            <div class="row">
              <div class="row">
                <div
                  class="column1"
                  :class="{invalid: $v.vehicleInspectionOrderData.cardNumber.$error}"
                >
                  <label for="cardNumber">Card Number *</label>
                  <input
                    type="number"
                    placeholder="Enter your card number"
                    v-model="vehicleInspectionOrderData.cardNumber"
                    required
                  />
                  <span
                    v-if="!$v.vehicleInspectionOrderData.cardNumber.required && $v.vehicleInspectionOrderData.cardNumber.$error"
                  >This field is required.</span>
                </div>
                <div
                  class="column2"
                  :class="{invalid: $v.vehicleInspectionOrderData.expDate.$error}"
                >
                  <label for="expDate">Expiration Date *</label>
                  <input
                    type="text"
                    placeholder="MM/YY"
                    v-model="vehicleInspectionOrderData.expDate"
                    required
                  />
                  <span
                    v-if="!$v.vehicleInspectionOrderData.expDate.required && $v.vehicleInspectionOrderData.expDate.$error"
                  >This field is required.</span>
                </div>
              </div>
              <div class="row">
                <div
                  class="column1"
                  :class="{invalid: $v.vehicleInspectionOrderData.CVCCVC.$error}"
                >
                  <label for="CVCCVC">CVC/CVV *</label>
                  <input
                    type="text"
                    placeholder="Code"
                    v-model="vehicleInspectionOrderData.CVCCVC"
                    required
                  />
                  <span
                    v-if="!$v.vehicleInspectionOrderData.CVCCVC.required && $v.vehicleInspectionOrderData.CVCCVC.$error"
                  >This field is required.</span>
                </div>
              </div>
            </div>
            <div class="ssl">
              <small>This is a secure 128-SSL encrypted connection. We don’t store any sensitive data on our servers.</small>
            </div>
            <br />
            <hr />
            <br />
            <div
              class="consent"
              :class="{invalid: $v.vehicleInspectionOrderData.isConsent.$invalid}"
            >
              <input
                type="checkbox"
                @change="$v.vehicleInspectionOrderData.isConsent.$touch()"
                v-model="vehicleInspectionOrderData.isConsent"
                required
              />
              <small>
                By clicking the button below, I understand that I am purchasing an inspection service subject to Inspectomania's
                <u
                  class="mouse-click"
                >Terms of Use</u>, and
                <u class="mouse-click">Cancellation and Refund policy</u>, and my payment method will be charged before the inspection service.
              </small>
            </div>
          </div>
          <center>
            <button type="submit" @click.prevent="onSubmit()" class="btn">Order an Inspection</button>
          </center>
        </form>
      </div>
      <div class="container-right">
        <table>
          <tr>
            <td>
              <i class="fas fa-car-alt"></i>
            </td>
            <td>
              <span>
                Type:
                <br />
              </span>
              <!-- <strong>{{orderQuote.typeOfInspection}} Inspection</strong> -->
            </td>
            <td></td>
          </tr>
          <tr>
            <td>
              <i class="far fa-calendar-alt"></i>
            </td>
            <td>
              <span>Date of Inspection:</span>
              <br />
              <!-- <strong>{{orderQuote.inspectionDateTime | showOnlyDate}}</strong> -->
            </td>
            <td @click="showEditInspDateTimeModal">Edit</td>
          </tr>
          <tr>
            <td>
              <i class="far fa-clock"></i>
            </td>
            <td>
              <span>Inspection Time:</span>
              <br />
              <!-- <strong>{{orderQuote.inspectionDateTime | showOnlyTime}}</strong> -->
            </td>
            <td @click="showEditInspDateTimeModal">Edit</td>
          </tr>
          <tr>
            <td></td>
            <td>
              <span>Vehicle Description:</span>
              <br />
              <!-- <strong>{{orderQuote.vehicleBrand}} {{orderQuote.vehicleModel}} {{orderQuote.vehicleYear | showOnlyYear}}</strong> -->
            </td>
            <td @click="showEditVehicleDescModal()">Edit</td>
          </tr>
          <tr>
            <td>
              <i class="fas fa-map-marker-alt"></i>
            </td>
            <td>
              <span>Location of Vehicle:</span>
              <br />
              <!-- <strong>{{orderQuote.country}}, {{orderQuote.city}}, {{orderQuote.zipCode}}</strong> -->
            </td>
            <td>Edit</td>
          </tr>
        </table>
        <hr />
        <table>
          <tr>
            <td>Subtotal</td>
            <td>-</td>
            <td>
              <!-- <strong>${{orderQuote.price}}</strong> -->
            </td>
          </tr>
          <tr>
            <td>Trust and support fee</td>
            <td>-</td>
            <td>
              <strong>$5</strong>
            </td>
          </tr>
          <tr class="total-price">
            <td>Total Price</td>
            <td>-</td>
            <td>
              <!-- <strong>${{parseInt(orderQuote.price)+5}}</strong> -->
            </td>
          </tr>
        </table>
      </div>
    </div>
    <EditQuoteVehicleDescription
      v-show="isEditVehicleDescriptionVisible"
      @close="hideEditVehicleDescModal"
    ></EditQuoteVehicleDescription>

    <EditQuoteInspDateTime v-show="isEditInspDateTimeVisible" @close="hideEditInspDateTimeModal"></EditQuoteInspDateTime>
  </div>
</template>

<script>
import countriesList from "../../../../mockData/countriesList";
import dialingCodesList from "../../../../mockData/dialingCodesList";
import { mapState, mapActions, mapMutations, mapGetters } from "vuex";
import EditQuoteVehicleDescription from "../../../modals/editQuote/EditQuoteVehicleDescription.vue";
import EditQuoteInspDateTime from "../../../modals/editQuote/EditQuoteInspDateTime.vue";
import {
  required,
  email,
  numeric,
  minLength,
  sameAs,
  requiredUnless
} from "vuelidate/lib/validators";
export default {
  components: {
    EditQuoteVehicleDescription,
    EditQuoteInspDateTime
  },
  data() {
    return {
      isOptional: true,
      isEditVehicleDescriptionVisible: false,
      isEditInspDateTimeVisible: false,
      vehicleInspectionOrderData: {
        orderStatus: "Pending",
        inspectionType: "Vehicle",
        firstName: "",
        lastName: "",
        country: "",
        city: "",
        state: "",
        email: "",
        password: "",
        repeatPassword: "",
        addressLine1: "",
        addressLine2: "",
        zipCode: "",
        mobileNum1: {
          countryCode: "",
          phoneNumber: ""
        },
        mobileNum2: {
          countryCode: "",
          phoneNumber: ""
        },
        moreInfo: "",
        inspectedItemInfo: {
          vehicleLocation: "",
          vehicleInfo: {
            VIN: ""
          }
        },
        sellerInfo: {
          isSellerInfo: false,
          sellerFirstName: "",
          sellerLastName: "",
          sellerEmailId: "",
          sellerMobileNum: {
            countryCode: "",
            phoneNumber: ""
          }
        },
        hearAboutUs: "",
        cardNumber: "",
        expDate: "",
        CVCCVC: "",
        isConsent: false
      },
      countries: countriesList,
      dialingCodes: dialingCodesList
    };
  },
  validations() {
    return {
      vehicleInspectionOrderData: {
        firstName: {
          required
        },
        lastName: {
          required
        },
        country: {
          required
        },
        city: {
          required
        },
        state: {
          required
        },
        addressLine1: {
          required
        },
        mobileNum1: {
          phoneNumber: {
            required,
            numeric
          }
        },
        inspectedItemInfo: {
          vehicleLocation: {
            required
          }
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
        },
        sellerInfo: {
          sellerFirstName: {
            required: requiredUnless(() => {
              if (this.isOptional) {
                this.vehicleInspectionOrderData.sellerInfo.sellerFirstName = "";
              }
              return this.isOptional;
            })
          },
          sellerLastName: {
            required: requiredUnless(() => {
              if (this.isOptional) {
                this.vehicleInspectionOrderData.sellerInfo.sellerLastName = "";
              }
              return this.isOptional;
            })
          },
          sellerEmailId: {
            required: requiredUnless(() => {
              if (this.isOptional) {
                this.vehicleInspectionOrderData.sellerInfo.sellerEmailId = "";
              }
              return this.isOptional;
            }),
            email
          },
          sellerMobileNum: {
            phoneNumber: {
              required: requiredUnless(() => {
                if (this.isOptional) {
                  this.vehicleInspectionOrderData.sellerInfo.sellerMobileNum.phoneNumber =
                    "";
                }
                return this.isOptional;
              }),
              numeric
            },
            countryCode: {
              required: requiredUnless(() => {
                if (this.isOptional) {
                  this.vehicleInspectionOrderData.sellerInfo.sellerMobileNum.countryCode =
                    "";
                }
                return this.isOptional;
              }),
              numeric
            }
          }
        },
        cardNumber: {
          required
        },
        expDate: {
          required
        },
        CVCCVC: {
          required
        },
        isConsent: {
          sameAs: sameAs(() => true)
        }
      }
    };
  },
  methods: {
    getDialingCode() {
      let dialingCode;
      let selectedCountry = this.vehicleInspectionOrderData.country;
      this.dialingCodes.forEach(item => {
        if (item.country == selectedCountry) {
          dialingCode = item.code;
        }
      });
      this.vehicleInspectionOrderData.mobileNum1.countryCode = dialingCode;
      this.vehicleInspectionOrderData.mobileNum2.countryCode = dialingCode;
    },

    getSellerDialingCode() {
      let dialingCode;
      let selectedCountry = this.orderQuote.country;
      this.dialingCodes.forEach(item => {
        if (item.country == selectedCountry) {
          dialingCode = item.code;
        }
      });
      this.vehicleInspectionOrderData.sellerInfo.sellerMobileNum.countryCode = dialingCode;
    },
    showEditVehicleDescModal() {
      this.isEditVehicleDescriptionVisible = true;
    },
    hideEditVehicleDescModal() {
      this.isEditVehicleDescriptionVisible = false;
    },
    showEditInspDateTimeModal() {
      this.isEditInspDateTimeVisible = true;
    },
    hideEditInspDateTimeModal() {
      this.isEditInspDateTimeVisible = false;
    },
    showSellerInfo() {
      //displays the seller info input fields
      if (this.sellerInfo.isSellerInfo == false) {
        sellerInfo.isSellerInfo = true;
      } else {
        sellerInfo.isSellerInfo = false;
      }
    },
    onSubmit() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }

      const vehicleInspectionOrderData = this.vehicleInspectionOrderData;
      console.log(vehicleInspectionOrderData);

      if (this.auth == true) {
        this.$store.dispatch(
          "orders/storeVehicleInspectionOrder",
          vehicleInspectionOrderData
        );
        console.log(vehicleInspectionOrderData.inspectionType);
      }
      if (this.auth == false) {
        this.$store.dispatch("signup", vehicleInspectionOrderData);
        console.log("Anon");
      }
    }
  },
  computed: {
    // ...mapState({
    //   orderQuote: state => state.orders.orderQuote,
    //   userAuthenticationState: state => state.userId,
    //   anonUserAuthenticationState: state => state.anonUser.userId
    // }),

    auth() {
      //Not for anonymous users
      return this.$store.getters.isAuthenticated;
    }
  },

  created() {
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
  min-width: 940px;
  display: flex;
}

.container-left {
  background-color: white;
  border-radius: 10px;
  margin-right: 50px;
  padding: 30px;
  width: 800px;
  border: 1px solid #b6b1b1;
  display: inline-table;
}

.container-right {
  background-color: white;
  font-size: 14px;
  width: 380px;
  padding: 20px 10px;
  border-radius: 10px;
  border: 1px solid #b6b1b1;
  display: inline-table;
}

.row::after {
  content: "";
  clear: both;
  display: table;
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

.column1 {
  margin: 10px 0px;
  padding-right: 10px;
  float: left;
  width: 50%;
  display: inline-block;
}

.column2 {
  margin: 10px 0px;
  padding-left: 10px;
  float: left;
  width: 50%;
  display: inline-block;
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

input[type="checkbox"] {
  width: auto;
}

.mouse-click {
  cursor: pointer;
  color: dodgerblue;
}

.invalid .mouse-click {
  color: red;
}

.mouse-click:hover {
  color: blue;
}

.column1 span,
.column2 span {
  color: red;
  font-size: 11px;
}

.vehicle-information {
  clear: left;
  padding-top: 10px;
}

.vehicle-location {
  padding-top: 20px;
  clear: left;
}

.label-textarea {
  clear: left;
}

textarea {
  width: 50%;
}

.payment-info {
  clear: left;
}

.ssl {
  clear: left;
}

.consent {
  clear: left;
}

.personal-info-header {
  font-size: 18px;
  padding-bottom: 10px;
  color: darkblue;
}

.btn {
  background-color: #2bc4e2;
  color: white;
  width: 60%;
  margin-top: 30px;
  margin-bottom: 10px;
  padding: 10px 20px;
  outline: none;
  border: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 18px;
  text-align: center;
  box-sizing: border-box;
  border-radius: 20px;
}

.btn:hover {
  background-color: #07b9dd;
}

.btn[disabled],
.btn[disabled]:hover {
  border: 1px solid #2bc4e2;
  border-radius: 20px;
  font-weight: lighter;
  background-color: #f8fbfb;
  color: #2bc4e2;
  cursor: not-allowed;
}

td {
  padding: 10px;
}

.total-price {
  font-size: 17px;
  font-weight: bold;
}

.fas,
.fa-car-alt,
.fa-calendar-alt,
.far,
.fa-clock,
.fa-map-marker-alt {
  font-size: 23px;
}

.country-city-zipcode {
  clear: left;
  padding-bottom: 30px;
}
</style>
