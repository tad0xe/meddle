<template>
  <div>
    <div class="body">
      <div class="container">
        <div class="header-container flex">
          <h1 class="flex-grow">{{$t("editSellerInviteCustomer.title")}}</h1>
          <div>
            <button
              style="margin-right: 10px;"
              class="primary-btn"
              type="button"
              @click="onClickWithdraw()"
            >{{$t("buttons.withdrawInvite")}}</button>
            <button
              class="primary-btn"
              type="button"
              @click="backToDashboard()"
            >{{$t('buttons.backToDashboard')}}</button>
          </div>
        </div>
        <div class="personal-info-container">
          <h3>{{$t("createSellerInviteCustomer.yourPersonalInformation.title")}}</h3>
          <div class="row">
            <div class="column1" :class="{invalid: $v.invitationInfo.sellerInfo.firstName.$error}">
              <label>{{$t("createSellerInviteCustomer.yourPersonalInformation.firstName")}} *</label>
              <input
                type="text"
                :placeholder="$t('createSellerInviteCustomer.yourPersonalInformation.firstName')"
                v-model.trim="invitationInfo.sellerInfo.firstName"
              />
              <transition name="shake">
                <span
                  v-if="!$v.invitationInfo.sellerInfo.firstName.required && $v.invitationInfo.sellerInfo.firstName.$error"
                >{{$t("generic.validationError.firstNameRequired")}}</span>
              </transition>
            </div>
            <div class="column2" :class="{invalid: $v.invitationInfo.sellerInfo.lastName.$error}">
              <label>{{$t("createSellerInviteCustomer.yourPersonalInformation.lastName")}} *</label>
              <input
                type="text"
                :placeholder="$t('createSellerInviteCustomer.yourPersonalInformation.lastName')"
                v-model.trim="invitationInfo.sellerInfo.lastName"
              />
              <transition name="shake">
                <span
                  v-if="!$v.invitationInfo.sellerInfo.lastName.required && $v.invitationInfo.sellerInfo.lastName.$error"
                >{{$t("generic.validationError.lastNameRequired")}}</span>
              </transition>
            </div>
          </div>
          <div class="row">
            <div class="column1">
              <label>{{$t("createSellerInviteCustomer.yourPersonalInformation.email")}} *</label>
              <input
                type="email"
                :placeholder="$t('createSellerInviteCustomer.yourPersonalInformation.email')"
                v-model.trim="invitationInfo.sellerInfo.email"
                disabled
              />
            </div>
            <div class="column2">
              <div
                :class="{invalid: $v.invitationInfo.sellerInfo.mobile.countryCode.$error || $v.invitationInfo.sellerInfo.mobile.phoneNumber.$error}"
              >
                <label>{{$t("createSellerInviteCustomer.yourPersonalInformation.mobileNumber")}} *</label>
              </div>
              <div>
                <div class="flex">
                  <div
                    class="dialing-code"
                    :class="{invalid: $v.invitationInfo.sellerInfo.mobile.countryCode.$error}"
                  >
                    <select v-model.trim="invitationInfo.sellerInfo.mobile.countryCode">
                      <option :value="null" selected disabled hidden>- - - - -</option>
                      <option
                        v-for="(code, index) in getAbridgedDialingCodeList()"
                        :key="index"
                        :value="code"
                      >{{code}}</option>
                    </select>
                  </div>
                  <div
                    class="phone-number"
                    :class="{invalid: $v.invitationInfo.sellerInfo.mobile.phoneNumber.$error}"
                  >
                    <input
                      type="text"
                      :placeholder="$t('createSellerInviteCustomer.yourPersonalInformation.mobileNumber')"
                      v-model.trim="invitationInfo.sellerInfo.mobile.phoneNumber"
                    />
                  </div>
                </div>
                <transition name="shake">
                  <span
                    v-if="!$v.invitationInfo.sellerInfo.mobile.countryCode.required && $v.invitationInfo.sellerInfo.mobile.countryCode.$error || !$v.invitationInfo.sellerInfo.mobile.phoneNumber.required && $v.invitationInfo.sellerInfo.mobile.phoneNumber.$error"
                  >{{$t("generic.validationError.telephoneNumRequired")}}</span>
                </transition>
              </div>
            </div>
          </div>
        </div>
        <div class="buyer-info-container">
          <h3>{{$t('createSellerInviteCustomer.theBuyerInformation.title')}}</h3>
          <div class="row">
            <div class="column1" :class="{invalid: $v.invitationInfo.buyerInfo.firstName.$error}">
              <label>{{$t('createSellerInviteCustomer.theBuyerInformation.buyerFirstName')}} *</label>
              <input
                type="text"
                :placeholder="$t('createSellerInviteCustomer.theBuyerInformation.buyerFirstName')"
                v-model.trim="invitationInfo.buyerInfo.firstName"
              />
              <transition name="shake">
                <span
                  v-if="!$v.invitationInfo.buyerInfo.firstName.required && $v.invitationInfo.buyerInfo.firstName.$error"
                >{{$t("createSellerInviteCustomer.theBuyerInformation.validationError.firstNameRequired")}}</span>
              </transition>
            </div>
            <div class="column2" :class="{invalid: $v.invitationInfo.buyerInfo.lastName.$error}">
              <label>{{$t('createSellerInviteCustomer.theBuyerInformation.buyerLastName')}} *</label>
              <input
                type="text"
                :placeholder="$t('createSellerInviteCustomer.theBuyerInformation.buyerLastName')"
                v-model.trim="invitationInfo.buyerInfo.lastName"
              />
              <transition name="shake">
                <span
                  v-if="!$v.invitationInfo.buyerInfo.lastName.required && $v.invitationInfo.buyerInfo.lastName.$error"
                >{{$t("createSellerInviteCustomer.theBuyerInformation.validationError.lastNameRequired")}}</span>
              </transition>
            </div>
            <div class="column1" :class="{invalid: $v.invitationInfo.buyerInfo.email.$error}">
              <label>{{$t('createSellerInviteCustomer.theBuyerInformation.buyerEmail')}} *</label>
              <input
                type="email"
                :placeholder="$t('createSellerInviteCustomer.theBuyerInformation.buyerEmail')"
                v-model.trim="invitationInfo.buyerInfo.email"
              />
            </div>
            <transition name="shake">
              <span
                v-if="!$v.invitationInfo.buyerInfo.email.email && $v.invitationInfo.buyerInfo.email.$error"
              >{{$t('createSellerInviteCustomer.theBuyerInformation.validationError.emailInvalid')}}</span>
              <span
                v-if="!$v.invitationInfo.buyerInfo.email.required && $v.invitationInfo.buyerInfo.email.$error"
              >{{$t('createSellerInviteCustomer.theBuyerInformation.validationError.emailRequired')}}</span>
            </transition>
          </div>
        </div>
        <div class="property-Location-container">
          <h3>{{$t("createSellerInviteCustomer.propertyLocation.title")}}</h3>
          <div class="row">
            <div class="column1" :class="{invalid: $v.invitationInfo.location.country.$error}">
              <label>{{$t("createSellerInviteCustomer.propertyLocation.country")}} *</label>
              <select v-model.trim="invitationInfo.location.country">
                <option
                  :value="null"
                  selected
                  disabled
                >{{$t("createSellerInviteCustomer.propertyLocation.country")}}</option>
                <option
                  v-for="(countryObj, index) in countriesPresentIn"
                  :key="index"
                  :value="countryObj.country"
                >{{translateValue(countryObj.country, $t('dbDictionary.countriesPresentIn'))}}</option>
              </select>
              <transition name="shake">
                <span
                  v-if="!$v.invitationInfo.location.country.required && $v.invitationInfo.location.country.$error"
                >{{$t("createSellerInviteCustomer.propertyLocation.validationError.country")}}</span>
              </transition>
            </div>
            <div class="column2" :class="{invalid: $v.invitationInfo.location.zipCode.$error}">
              <label>{{$t("createSellerInviteCustomer.propertyLocation.zipCode")}} *</label>
              <input
                type="text"
                :placeholder="$t('createSellerInviteCustomer.propertyLocation.zipCode')"
                v-model.trim="invitationInfo.location.zipCode"
                @blur="getLocationDetails()"
              />
              <transition name="shake">
                <span v-if="locationError" style="color: red; font-size: 13px">{{locationError}}</span>
                <span
                  v-if="!$v.invitationInfo.location.zipCode.required && $v.invitationInfo.location.zipCode.$error"
                >{{$t("createSellerInviteCustomer.propertyLocation.validationError.zipCodeRequired")}}</span>
              </transition>
            </div>
          </div>
          <div class="row">
            <div class="column1" :class="{invalid: $v.invitationInfo.location.state.$error}">
              <label>{{$t("createSellerInviteCustomer.propertyLocation.state")}} *</label>
              <input
                type="text"
                :placeholder="$t('createSellerInviteCustomer.propertyLocation.state')"
                v-model.trim="invitationInfo.location.state"
              />
              <transition name="shake">
                <span
                  v-if="!$v.invitationInfo.location.state.required && $v.invitationInfo.location.state.$error"
                >{{$t("createSellerInviteCustomer.propertyLocation.validationError.stateRequired")}}</span>
              </transition>
            </div>
            <div class="column2" :class="{invalid: $v.invitationInfo.location.city.$error}">
              <label>{{$t("createSellerInviteCustomer.propertyLocation.city")}} *</label>
              <input
                type="text"
                :placeholder="$t('createSellerInviteCustomer.propertyLocation.city')"
                v-model.trim="invitationInfo.location.city"
              />
              <transition name="shake">
                <span
                  v-if="!$v.invitationInfo.location.city.required && $v.invitationInfo.location.city.$error"
                >{{$t("createSellerInviteCustomer.propertyLocation.validationError.cityRequired")}}</span>
              </transition>
            </div>
            <div class="column1" :class="{invalid: $v.invitationInfo.location.street.$error}">
              <label>{{$t("createSellerInviteCustomer.propertyLocation.street")}} *</label>
              <input
                :placeholder="$t('createSellerInviteCustomer.propertyLocation.street')"
                v-model.trim="invitationInfo.location.street"
              />
              <transition name="shake">
                <span
                  v-if="!$v.invitationInfo.location.street.required && $v.invitationInfo.location.street.$error"
                >{{$t("createSellerInviteCustomer.propertyLocation.validationError.streetRequired")}}</span>
              </transition>
            </div>
          </div>
        </div>
        <div class="vehicle-home-description-container">
          <div class="row">
            <div v-if="invitationInfo.inspectionType == 'vehicle'">
              <h4>{{$t("generic.vehicleDescription")}}</h4>
              <div class="row">
                <div class="column1" :class="{invalid: $v.vehicleDetails.VIN.$error}">
                  <label>{{$t("createSellerInviteCustomer.vehicleDescription.vin")}} *</label>
                  <input
                    type="text"
                    :placeholder="$t('createSellerInviteCustomer.vehicleDescription.enterVIN')"
                    v-model.trim="vehicleDetails.VIN"
                  />
                  <transition name="shake">
                    <span
                      v-if="!$v.vehicleDetails.VIN.required && $v.vehicleDetails.VIN.$error"
                    >{{$t("createSellerInviteCustomer.vehicleDescription.vinRequired")}}</span>
                  </transition>
                </div>
                <div class="column2" :class="{invalid: $v.vehicleDetails.typeOfVehicle.$error}">
                  <label>{{$t("vehicleInspection.form.typeOfVehicle")}} *</label>
                  <select v-model.trim="vehicleDetails.typeOfVehicle" required>
                    <option
                      :value="null"
                      disabled
                      selected
                      hidden
                    >{{$t("vehicleInspection.form.placeholder.typeOfVehicle")}}</option>
                    <option
                      v-for="(typeOfVehicle, index) in vehicleTypes"
                      :key="index"
                      :value="typeOfVehicle.value"
                    >{{typeOfVehicle.type}}</option>
                  </select>
                  <transition name="shake">
                    <span
                      v-if="!$v.vehicleDetails.typeOfVehicle.required && $v.vehicleDetails.typeOfVehicle.$error"
                    >{{$t("vehicleInspection.form.validationError.vehicleTypeRequired")}}</span>
                  </transition>
                </div>
              </div>
              <div class="row">
                <div class="column1" :class="{invalid: $v.vehicleDetails.vehicleBrand.$error}">
                  <label>{{$t("vehicleInspection.form.vehicleBrand")}} *</label>
                  <select v-model.trim="vehicleDetails.vehicleBrand" required>
                    <option
                      :value="null"
                      disabled
                      selected
                      hidden
                    >{{$t("vehicleInspection.form.placeholder.vehicleBrand")}}</option>
                    <option v-for="(brand, index) in vehicleBrands" :key="index">{{brand.make}}</option>
                  </select>
                  <transition name="shake">
                    <span
                      v-if="!$v.vehicleDetails.vehicleBrand.required && $v.vehicleDetails.vehicleBrand.$error"
                    >{{$t("vehicleInspection.form.validationError.vehicleBrandRequired")}}</span>
                  </transition>
                </div>
                <div class="column2" :class="{invalid: $v.vehicleDetails.vehicleModel.$error}">
                  <label>{{$t("vehicleInspection.form.vehicleModel")}} *</label>
                  <input
                    type="text"
                    :placeholder="$t('vehicleInspection.form.vehicleModel')"
                    v-model.trim="vehicleDetails.vehicleModel"
                  />
                  <transition name="shake">
                    <span
                      v-if="!$v.vehicleDetails.vehicleModel.required && $v.vehicleDetails.vehicleModel.$error"
                    >{{$t("vehicleInspection.form.validationError.vehicleModelRequired")}}</span>
                  </transition>
                </div>
              </div>
              <div class="column1" :class="{invalid: $v.vehicleDetails.vehicleYear.$error}">
                <label>{{$t("vehicleInspection.form.vehicleYear")}} *</label>
                <Datepicker
                  class="date-picker"
                  v-model.trim="vehicleDetails.vehicleYear"
                  :lang="setDatepickerLang"
                  type="year"
                  format="YYYY"
                  :placeholder="$t('vehicleInspection.form.placeholder.vehicleYear')"
                  :disabled-date="(date)=>date > Date.now()"
                >
                  <i slot="icon-calendar"></i>
                </Datepicker>
                <transition name="shake">
                  <span
                    v-if="!$v.vehicleDetails.vehicleYear.required && $v.vehicleDetails.vehicleYear.$error"
                  >{{$t("vehicleInspection.form.validationError.vehicleYearRequired")}}</span>
                </transition>
              </div>
            </div>
            <div v-if="invitationInfo.inspectionType == 'home'">
              <h4>{{$t("createSellerInviteCustomer.homeDescription.title")}}</h4>
              <div class="row">
                <div class="column1" :class="{invalid: $v.homeDetails.typeOfHome.$error}">
                  <label>{{$t("homeInspection.form.typeOfHome")}} *</label>
                  <select v-model.trim="homeDetails.typeOfHome" required>
                    <option
                      :value="null"
                      disabled
                      selected
                      hidden
                    >{{$t("homeInspection.form.placeholder.typeOfHome")}}</option>
                    <option
                      v-for="(typeOfHomeObj, index) in typeOfHomeOptions"
                      :value="typeOfHomeObj.value"
                      :key="index"
                    >{{typeOfHomeObj.type}}</option>
                  </select>
                  <transition name="shake">
                    <span
                      v-if="!$v.homeDetails.typeOfHome.required && $v.homeDetails.typeOfHome.$error"
                    >{{$t("homeInspection.form.validationError.typeOfHomeRequired")}}.</span>
                  </transition>
                </div>
                <div class="column2" :class="{invalid: $v.homeDetails.noOfBedrooms.$error}">
                  <label>{{$t("homeInspection.form.noOfBedrooms")}} *</label>
                  <select v-model.trim="homeDetails.noOfBedrooms" required>
                    <option
                      :value="null"
                      disabled
                      selected
                      hidden
                    >{{$t("homeInspection.placeholder.noOfBedrooms")}}</option>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                  <transition name="shake">
                    <span
                      v-if="!$v.homeDetails.noOfBedrooms.required && $v.homeDetails.noOfBedrooms.$error"
                    >{{$t("homeInspection.form.validationError.noOfBedroomsRequired")}}</span>
                  </transition>
                </div>
              </div>
            </div>
            <div
              :class="{
                column1: invitationInfo.inspectionType == 'home' , 
                column2: invitationInfo.inspectionType == 'vehicle',
                invalid: $v.invitationInfo.inspectionDateTime.$error || invitationInfo.inspectionDateTime < new Date()
                }"
            >
              <label>{{$t("generic.inspectionDate")}}</label>
              <Datepicker
                class="date-picker"
                v-model.trim="invitationInfo.inspectionDateTime"
                :lang="setDatepickerLang"
                type="datetime"
                :format="setInspectionDateTimeFormat"
                :placeholder="$t('createSellerInviteCustomer.suggestTime')"
                :minute-step="30"
                :time-picker-options="{ start: '06:00', step: '00:30', end: '17:00'}"
                :disabled-date="(date)=>date < new Date().setHours(0,0,0,0)"
                :disabled-time="(time)=>time < new Date()"
              ></Datepicker>
              <transition name="shake">
                <span
                  v-if="!$v.invitationInfo.inspectionDateTime.required && $v.invitationInfo.inspectionDateTime.$error"
                >{{$t("homeInspection.form.validationError.dateTimeRequired")}}</span>
                <span
                  v-if="invitationInfo.inspectionDateTime < new Date()"
                >{{$t("createSellerInviteCustomer.propertyLocation.validationError.inspectionTimePassed")}}</span>
              </transition>
            </div>
          </div>
          <div>
            <div class="spaced" v-if="invitationInfo.inspectionPrice">
              {{$t("createSellerInviteCustomer.inspectionPrice")}}:
              <b>{{invitationInfo.inspectionPrice.value}} {{invitationInfo.inspectionPrice.currency}}</b>
            </div>
            <div class="spaced">
              <label>{{$t("createSellerInviteCustomer.willYouRefund")}}</label>
              <div style="width:150px">
                <select v-model="invitationInfo.hasSellerAgreedToRefund">
                  <option :value="false">{{$t("generic.no")}}</option>
                  <option :value="true">{{$t("generic.yes")}}</option>
                </select>
              </div>
            </div>
            <div
              class="row spaced"
              v-if="invitationInfo.hasSellerAgreedToRefund"
              :class="{invalid: $v.agreedOrListedPrice.value.$error}"
            >
              <label>{{$t("createSellerInviteCustomer.enterAgreedPrice")}}</label>
              <div class="flex" style="align-items:center">
                <div style="width:150px; margin-right:10px">
                  <input
                    type="text"
                    :placeholder="$t('createSellerInviteCustomer.enterPrice')"
                    v-model.trim="agreedOrListedPrice.value"
                  />
                </div>
                <div style="margin-top:5px">
                  <b>{{getCurrency(invitationInfo.location.country)}}</b>
                </div>
              </div>
              <transition name="shake">
                <span
                  v-if="!$v.agreedOrListedPrice.value.required && $v.agreedOrListedPrice.value.$error"
                >{{$t("generic.thisFieldRequired")}}</span>
              </transition>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="btn-container">
            <button
              class="secondary-btn"
              type="submit"
              @click.prevent="onSubmitEdit()"
            >{{$t("buttons.saveChanges")}}</button>
          </div>
        </div>
      </div>
    </div>
    <GenericWarningModal
      v-if="isGenericWarningModalVisible"
      :documentDescription="$t('generic.invite')"
      :typeOfAction="$t('generic.withdraw')"
      @close="isGenericWarningModalVisible = false"
      @sureGoAhead="onWithdrawInvite()"
    />
    <GenericAlertModal
      v-if="isGenericAlertModalVisible"
      :currentAlertMessage="currentAlertMessage"
      @close="isGenericAlertModalVisible = false"
    />
  </div>
</template>

<script>
import countriesPresentIn from "../../../mockData/countriesPresentIn";
import vehicleBrands from "../../../mockData/vehicleBrands";
import vehicleTypes from "../../../mockData/vehicleTypes";
import countryCurrencies from "../../../mockData/countryCurrencies";
import GenericWarningModal from "../../modals/generic/GenericWarningModal";
import GenericAlertModal from "../../modals/generic/GenericAlertModal";

import {
  transformObjectToValueTypeArray,
  getAbridgedDialingCodeList,
  translateValue
} from "../../../utility";
import Datepicker from "vue2-datepicker";
import {
  required,
  email,
  numeric,
  sameAs,
  requiredUnless
} from "vuelidate/lib/validators";
import axios from "axios";
export default {
  components: {
    Datepicker,
    GenericWarningModal,
    GenericAlertModal
  },
  data() {
    return {
      currentAlertMessage: "",
      isGenericWarningModalVisible: false,
      isGenericAlertModalVisible: false,
      locationError: "",
      countriesPresentIn,
      translateValue,
      countryCurrencies,
      getAbridgedDialingCodeList,
      vehicleBrands,
      vehicleTypes: vehicleTypes(),
      typeOfHomeOptions: transformObjectToValueTypeArray(
        this.$t("homeInspection.form.typeOfHomeOptions")
      ),
      invitationInfo: {
        sellerInfo: {
          userId: null,
          userSequenceId: null,
          firstName: null,
          lastName: null,
          email: null,
          mobile: {
            countryCode: null,
            phoneNumber: null
          }
        },
        inspectionType: this.$route.params.inspectionType,
        buyerInfo: {
          firstName: null,
          lastName: null,
          email: null
        },
        location: {
          country: null,
          zipCode: null,
          state: null,
          city: null,
          street: null,
          cityTimeZoneId: null,
          geoCoordinates: null
        },
        inspectionDateTime: null,
        inspectionPrice: null,
        hasSellerAgreedToRefund: false,
        propertyDetails: {}
      },
      agreedOrListedPrice: {
        value: null,
        currency: null
      },
      vehicleDetails: {
        VIN: null,
        typeOfVehicle: null,
        vehicleBrand: null,
        vehicleModel: null,
        vehicleYear: null
      },
      homeDetails: {
        typeOfHome: null,
        noOfBedrooms: null
      }
    };
  },
  validations() {
    return {
      invitationInfo: {
        sellerInfo: {
          firstName: {
            required
          },
          lastName: {
            required
          },
          email: {
            required
          },
          mobile: {
            countryCode: {
              required
              // ,
              // numeric
            },
            phoneNumber: {
              required,
              numeric
            }
          }
        },
        buyerInfo: {
          firstName: {
            required
          },
          lastName: {
            required
          },
          email: {
            required,
            email
          }
        },
        location: {
          country: {
            required
          },
          zipCode: {
            required
          },
          state: {
            required
          },
          city: {
            required
          },
          street: {
            required
          }
        },
        inspectionDateTime: {
          required
        }
      },
      vehicleDetails: {
        VIN: {
          required: requiredUnless(() => {
            return this.invitationInfo.inspectionType == "home";
          })
        },
        typeOfVehicle: {
          required: requiredUnless(() => {
            return this.invitationInfo.inspectionType == "home";
          })
        },
        vehicleBrand: {
          required: requiredUnless(() => {
            return this.invitationInfo.inspectionType == "home";
          })
        },
        vehicleModel: {
          required: requiredUnless(() => {
            return this.invitationInfo.inspectionType == "home";
          })
        },
        vehicleYear: {
          required: requiredUnless(() => {
            return this.invitationInfo.inspectionType == "home";
          })
        }
      },
      homeDetails: {
        typeOfHome: {
          required: requiredUnless(() => {
            return this.invitationInfo.inspectionType == "vehicle";
          })
        },
        noOfBedrooms: {
          required: requiredUnless(() => {
            return this.invitationInfo.inspectionType == "vehicle";
          })
        }
      },
      agreedOrListedPrice: {
        value: {
          required: requiredUnless(() => {
            return !this.invitationInfo.hasSellerAgreedToRefund;
          })
        }
      }
    };
  },
  watch: {
    "invitationInfo.location.country"() {
      this.getPrice();
    },
    "homeDetails.noOfBedrooms"() {
      this.getPrice();
    }
  },
  computed: {
    user() {
      return this.$store.getters.generalUserProfile;
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
    onSubmitEdit() {
      //Check if invite has already been used to create order
      if (this.invitationInfo.invitationStatus == "orderCreated") {
        this.isGenericAlertModalVisible = true;
        this.currentAlertMessage =
          "You cannot edit because an order has already been created with this invite";
        return;
      }

      //Check if invite has already been withdrawn
      if (this.invitationInfo.invitationStatus == "withdrawn") {
        this.isGenericAlertModalVisible = true;
        this.currentAlertMessage = "This invite has already been withdrawn";
        return;
      }

      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }

      const typeOfInspection = this.invitationInfo.inspectionType;
      const invitationInfoData = this.invitationInfo;
      if (typeOfInspection == "vehicle" || typeOfInspection == "home") {
        invitationInfoData.sellerInfo.userId = this.user._id;
        invitationInfoData.sellerInfo.userSequenceId = this.user.sequenceId;
        if (typeOfInspection == "vehicle") {
          invitationInfoData.propertyDetails = this.vehicleDetails;
        } else if (typeOfInspection == "home") {
          invitationInfoData.propertyDetails = this.homeDetails;
        }
      }
      //If the seller is willing to refund the inspection fee
      if (this.invitationInfo.hasSellerAgreedToRefund) {
        invitationInfoData.propertyDetails.agreedOrListedPrice = this.agreedOrListedPrice;
      }

      //Check if the inspection time is before present time
      if (invitationInfoData.inspectionDateTime < new Date()) {
        alert(
          this.$t(
            "createSellerInviteCustomer.propertyLocation.validationError.inspectionTimePassed"
          )
        );
        return;
      }

      axios
        .patch(
          `/order_invitation/edit_order_invite/${this.$route.params.invitationId}`,
          invitationInfoData
        )
        .then(res => {
          this.$router.push(
            `/${this.$i18n.locale}/account/main-view?activeTab=invitationToBook`
          );
        });
    },
    onClickWithdraw() {
      this.isGenericWarningModalVisible = true;
    },
    backToDashboard() {
      this.$router.push(
        `/${this.$i18n.locale}/account/main-view?activeTab=invitationToBook`
      );
    },

    onWithdrawInvite() {
      axios
        .patch(
          `/order_invitation/withdraw_order_invite/${this.$route.params.invitationId}`
        )
        .then(res => {
          this.$router.push(
            `/${this.$i18n.locale}/account/main-view?activeTab=invitationToBook`
          );
        });
    },

    getPrice() {
      const typeOfInspection = this.invitationInfo.inspectionType;
      if (this.invitationInfo.location.country) {
        if (typeOfInspection == "vehicle") {
          axios
            .get(
              `/vehicle_inspection_services/get_price/${this.invitationInfo.location.country}`
            )
            .then(res => {
              this.invitationInfo.inspectionPrice = res.data;
              return res.data;
            });
        } else if (
          typeOfInspection == "home" &&
          this.homeDetails.noOfBedrooms
        ) {
          axios
            .get(
              `/home_inspection_services/get_price/${this.invitationInfo.location.country}/${this.homeDetails.noOfBedrooms}`
            )
            .then(res => {
              this.invitationInfo.inspectionPrice = res.data;
              return res.data;
            });
        }
      }
    },

    getCurrency(country) {
      let currency = "";
      if (country) {
        this.countryCurrencies.forEach(element => {
          if (element.country == this.invitationInfo.location.country) {
            currency = element.currency;
          }
        });
      }
      this.agreedOrListedPrice.currency = currency;
      return currency;
    },

    getLocationDetails() {
      const country = this.invitationInfo.location.country;
      const zipCode = this.invitationInfo.location.zipCode;
      if (country && zipCode) {
        axios
          .post("/quotes/get_location_details", {
            address: `${country} ${zipCode}`
          })
          .then(location => {
            this.locationError = null;
            this.invitationInfo.location.city = location.data.city;
            this.invitationInfo.location.state = location.data.state;
            this.invitationInfo.location.cityTimeZoneId =
              location.data.timeZoneId;
            this.invitationInfo.location.geoCoordinates =
              location.data.geoCoordinates;
          })
          .catch(error => {
            this.locationError = error.response.data;
          });
      }
    }
  },
  created() {
    axios.get("users/me").then(res => {
      const user = res.data;
      this.invitationInfo.sellerInfo.firstName = user.firstName;
      this.invitationInfo.sellerInfo.lastName = user.lastName;
      this.invitationInfo.sellerInfo.email = user.email;
      this.invitationInfo.location.country = user.contactInfo.country;
      this.invitationInfo.location.zipCode = user.contactInfo.zipCode;
    });

    axios
      .get(
        `/order_invitation/get_invitation/${this.$route.params.invitationId}`
      )
      .then(res => {
        this.invitationInfo = res.data;
        this.agreedOrListedPrice = res.data.propertyDetails.agreedOrListedPrice;
        this.invitationInfo.inspectionDateTime = new Date(
          res.data.inspectionDateTime
        );
        if (this.invitationInfo.inspectionType == "vehicle") {
          this.vehicleDetails = res.data.propertyDetails;
          this.vehicleDetails.vehicleYear = new Date(
            res.data.propertyDetails.vehicleYear
          );
        } else if (this.invitationInfo.inspectionType == "home") {
          this.homeDetails = res.data.propertyDetails;
        }
      });
  }
};
</script>

 <style lang="scss" scoped>
@import "../../../scss/_sellerInvite.scss";
</style>


