<template>
  <div>
    <div class="body">
      <div class="container">
        <div class="container-content">
          <div class="container-left" ref="getLeftContainer">
            <form @submit.prevent="onClickPlaceOrder">
              <div class="container-left-header">
                <h1>{{$t("vehicleInspectionQuote.form.mainTitle")}}</h1>
                <small>{{$t("vehicleInspectionQuote.form.subtitle")}}</small>
              </div>
              <div class="personal-info">
                <div class="personal-info-header">
                  <h3>{{$t("vehicleInspectionQuote.form.personalInformation.title")}}</h3>
                </div>
                <div class="row">
                  <div
                    class="column1"
                    :class="{invalid: $v.vehicleInspectionOrderData.firstName.$error}"
                  >
                    <label
                      for="firstName"
                    >{{$t("vehicleInspectionQuote.form.personalInformation.firstName")}} *</label>
                    <input
                      type="text"
                      :placeholder="$t('vehicleInspectionQuote.form.placeholder.firstName')"
                      v-model.trim="vehicleInspectionOrderData.firstName"
                      required
                    />
                    <transition name="shake">
                      <span
                        v-if="!$v.vehicleInspectionOrderData.firstName.required && $v.vehicleInspectionOrderData.firstName.$error"
                      >{{$t('vehicleInspectionQuote.form.validationError.firstNameRequired')}}</span>
                    </transition>
                  </div>
                  <div
                    class="column2"
                    :class="{invalid: $v.vehicleInspectionOrderData.lastName.$error}"
                  >
                    <label
                      for="lastName"
                    >{{$t("vehicleInspectionQuote.form.personalInformation.lastName")}} *</label>
                    <input
                      type="text"
                      :placeholder="$t('vehicleInspectionQuote.form.placeholder.lastName')"
                      v-model.trim="vehicleInspectionOrderData.lastName"
                      required
                    />
                    <transition name="shake">
                      <span
                        v-if="!$v.vehicleInspectionOrderData.lastName.required && $v.vehicleInspectionOrderData.lastName.$error"
                      >{{$t('vehicleInspectionQuote.form.validationError.lastNameRequired')}}</span>
                    </transition>
                  </div>
                </div>
                <div class="row">
                  <div
                    class="column1"
                    :class="{invalid: $v.vehicleInspectionOrderData.country.$error}"
                  >
                    <label
                      for="country"
                    >{{$t("vehicleInspectionQuote.form.personalInformation.country")}} *</label>
                    <select
                      @change="getDialingCode()"
                      v-model="vehicleInspectionOrderData.country"
                      required
                    >
                      <option
                        value
                        selected
                        disabled
                        hidden
                      >{{$t('vehicleInspectionQuote.form.placeholder.country')}}</option>
                      <option v-for="(country, index) in countries" :key="index">{{country}}</option>
                    </select>
                    <transition name="shake">
                      <span
                        v-if="!$v.vehicleInspectionOrderData.country.required && $v.vehicleInspectionOrderData.country.$error"
                      >{{$t('vehicleInspectionQuote.form.validationError.countryRequired')}}</span>
                    </transition>
                  </div>
                  <div
                    class="column2"
                    :class="{invalid: $v.vehicleInspectionOrderData.state.$error}"
                  >
                    <label
                      for="state"
                    >{{$t("vehicleInspectionQuote.form.personalInformation.state")}} *</label>
                    <input
                      type="text"
                      :placeholder="$t('vehicleInspectionQuote.form.placeholder.state')"
                      v-model="vehicleInspectionOrderData.state"
                      required
                    />
                    <transition name="shake">
                      <span
                        v-if="!$v.vehicleInspectionOrderData.state.required && $v.vehicleInspectionOrderData.state.$error"
                      >{{$t('vehicleInspectionQuote.form.validationError.stateRequired')}}</span>
                    </transition>
                  </div>
                </div>
                <div class="row">
                  <div
                    class="column1"
                    :class="{invalid: $v.vehicleInspectionOrderData.city.$error}"
                  >
                    <label
                      for="city"
                    >{{$t("vehicleInspectionQuote.form.personalInformation.city")}} *</label>
                    <input
                      type="text"
                      :placeholder="$t('vehicleInspectionQuote.form.placeholder.city')"
                      v-model.trim="vehicleInspectionOrderData.city"
                      required
                    />
                    <transition name="shake">
                      <span
                        v-if="!$v.vehicleInspectionOrderData.city.required && $v.vehicleInspectionOrderData.city.$error"
                      >{{$t('vehicleInspectionQuote.form.validationError.cityRequired')}}</span>
                    </transition>
                  </div>
                  <div
                    class="column2"
                    :class="{invalid: $v.vehicleInspectionOrderData.addressLine1.$error}"
                  >
                    <label
                      for="addressLine1"
                    >{{$t("vehicleInspectionQuote.form.personalInformation.addressLine1")}} *</label>
                    <input
                      type="text"
                      :placeholder="$t('vehicleInspectionQuote.form.placeholder.addressLine1')"
                      v-model.trim="vehicleInspectionOrderData.addressLine1"
                      required
                    />
                    <transition name="shake">
                      <span
                        v-if="!$v.vehicleInspectionOrderData.addressLine1.required && $v.vehicleInspectionOrderData.addressLine1.$error"
                      >{{$t('vehicleInspectionQuote.form.validationError.addressRequired')}}</span>
                    </transition>
                  </div>
                </div>
                <div class="row">
                  <div class="column1">
                    <label
                      for="addressLine2"
                    >{{$t("vehicleInspectionQuote.form.personalInformation.addressLine2")}}</label>
                    <input
                      type="text"
                      :placeholder="$t('vehicleInspectionQuote.form.placeholder.addressLine2')"
                      v-model.trim="vehicleInspectionOrderData.addressLine2"
                    />
                  </div>
                  <div class="column2">
                    <label
                      for="zipCode"
                    >{{$t("vehicleInspectionQuote.form.personalInformation.zipOrPostCode")}}</label>
                    <input
                      type="text"
                      :placeholder="$t('vehicleInspectionQuote.form.placeholder.zipOrPostCode')"
                      v-model.trim="vehicleInspectionOrderData.zipCode"
                    />
                  </div>
                </div>
                <div class="row">
                  <div
                    class="column1"
                    :class="{invalid: $v.vehicleInspectionOrderData.mobileNum1.phoneNumber.$error}"
                  >
                    <label
                      for="mobileNum1"
                    >{{$t("vehicleInspectionQuote.form.personalInformation.mobileNum1")}} *</label>
                    <div class="flex">
                      <div class="dialing-code">
                        <input
                          type="text"
                          placeholder="- - - - -"
                          disabled
                          v-model.trim="vehicleInspectionOrderData.mobileNum1.countryCode"
                        />
                      </div>
                      <div class="phone-number">
                        <input
                          type="tel"
                          v-model.trim="vehicleInspectionOrderData.mobileNum1.phoneNumber"
                          :placeholder="$t('vehicleInspectionQuote.form.placeholder.mobileNum1')"
                        />
                      </div>
                    </div>
                    <transition name="shake">
                      <span
                        v-if="!$v.vehicleInspectionOrderData.mobileNum1.required && $v.vehicleInspectionOrderData.mobileNum1.$error"
                      >{{$t('vehicleInspectionQuote.form.validationError.phoneNumRequired')}}</span>
                    </transition>
                  </div>
                  <div class="column2">
                    <label
                      for="mobileNum2"
                    >{{$t("vehicleInspectionQuote.form.personalInformation.mobileNum1")}}</label>
                    <div class="flex">
                      <div class="dialing-code">
                        <input
                          type="text"
                          placeholder="- - - - -"
                          disabled
                          v-model.trim="vehicleInspectionOrderData.mobileNum2.countryCode"
                        />
                      </div>
                      <div class="phone-number">
                        <input
                          type="tel"
                          v-model.trim="vehicleInspectionOrderData.mobileNum2.phoneNumber"
                          :placeholder="$t('vehicleInspectionQuote.form.placeholder.mobileNum2')"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="vehicle-location">
                <div class="row">
                  <div class="column1">
                    <h3>{{$t("vehicleInspectionQuote.form.vehicleInfo.title")}}</h3>
                    <div class="spaced-height">
                      <label
                        for="vehicleInfo.VIN"
                      >{{$t("vehicleInspectionQuote.form.vehicleInfo.vin")}}</label>
                      <input
                        type="text"
                        :placeholder="$t('vehicleInspectionQuote.form.placeholder.vin')"
                        v-model.trim="vehicleInspectionOrderData.inspectedItemInfo.vehicleInfo.VIN"
                      />
                    </div>
                  </div>
                  <div
                    class="column2"
                    :class="{invalid: $v.vehicleInspectionOrderData.inspectedItemInfo.vehicleLocation.$error}"
                  >
                    <h3>{{$t("vehicleInspectionQuote.form.vehicleLocation.title")}}</h3>
                    <div class="spaced-height">
                      <div>
                        <label
                          for="vehicleLocation"
                        >{{$t("vehicleInspectionQuote.form.vehicleLocation.street")}} *</label>
                        <input
                          type="text"
                          :placeholder="$t('vehicleInspectionQuote.form.placeholder.street')"
                          v-model.trim="vehicleInspectionOrderData.inspectedItemInfo.vehicleLocation"
                          @blur="onBlurVehicleStreet"
                          required
                        />
                        <transition name="shake">
                          <span
                            v-if="!$v.vehicleInspectionOrderData.inspectedItemInfo.vehicleLocation.required && $v.vehicleInspectionOrderData.inspectedItemInfo.vehicleLocation.$error"
                          >{{$t('vehicleInspectionQuote.form.validationError.streetRequired')}}</span>
                        </transition>
                        <br />
                      </div>
                      <div class="country-city-zipcode">
                        {{orderQuote.country}}, {{orderQuote.state}}, {{orderQuote.city}}, {{orderQuote.zipCode}}
                        <button
                          class="small-primary-btn"
                          type="button"
                          @click="showEditCityAndStateModal()"
                        >Edit</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="label-textarea">
                    <label for="moreInfo">{{$t("vehicleInspectionQuote.form.moreInfoForInspector")}}</label>
                    <div class="text-area">
                      <resizable-textarea>
                        <textarea rows="5" v-model.trim="vehicleInspectionOrderData.moreInfo"></textarea>
                      </resizable-textarea>
                    </div>
                  </div>
                </div>
              </div>
              <div class="seller-info">
                <div class="texts">
                  <h3>{{$t("vehicleInspectionQuote.form.sellerInfo.title")}}</h3>
                  <label>
                    <div class="flex">
                      <input
                        type="checkbox"
                        @change="isOptional=!isOptional"
                        v-model.trim="vehicleInspectionOrderData.sellerInfo.isSellerInfo"
                        for="sellerInfo.isSellerInfo"
                      />
                      <span>{{$t("vehicleInspectionQuote.form.sellerInfo.subtitle")}}</span>
                    </div>
                  </label>
                  <div v-show="vehicleInspectionOrderData.sellerInfo.isSellerInfo">
                    <br />
                    <div class="row">
                      <label>Has the seller agreed to refund you the cost of this inspection should you eventually purchase this property?</label>

                      <div class="column1">
                        <select
                          v-model="vehicleInspectionOrderData.sellerInfo.customerSaySellerIsRefunding"
                        >
                          <option :value="false">No</option>
                          <option :value="true">Yes</option>
                        </select>
                      </div>
                    </div>
                    <div
                      class="row"
                      v-if="vehicleInspectionOrderData.sellerInfo.customerSaySellerIsRefunding"
                    >
                      <div class="column1">
                        <label>Seller's Unique ID *</label>
                        <input
                          placeholder="Enter Seller's Unique ID"
                          v-model="sellerSequenceId"
                          @blur="checkIfSellerSequenceIdExists(sellerSequenceId),
                      checkIfSellerIdMatchEmail(sellerSequenceId, vehicleInspectionOrderData.sellerInfo.sellerEmailId), resetSellerIdMatchError()"
                        />
                        <transition name="shake">
                          <span
                            v-if="sellerIdDoesNotExistError"
                          >The entered Seller ID does not exist</span>
                        </transition>
                      </div>
                    </div>
                    <div class="row">
                      <div
                        class="column1"
                        :class="{invalid: $v.vehicleInspectionOrderData.sellerInfo.sellerFirstName.$error}"
                      >
                        <label
                          for="sellerInfo.sellerFirstName"
                        >{{$t("vehicleInspectionQuote.form.sellerInfo.firstName")}} *</label>
                        <input
                          type="text"
                          :placeholder="$t('vehicleInspectionQuote.form.placeholder.sellerFirstName')"
                          v-model.trim="vehicleInspectionOrderData.sellerInfo.sellerFirstName"
                        />
                        <transition name="shake">
                          <span
                            v-if="!$v.vehicleInspectionOrderData.sellerInfo.sellerFirstName.required && $v.vehicleInspectionOrderData.sellerInfo.sellerFirstName.$error"
                          >{{$t('vehicleInspectionQuote.form.validationError.sellerFirstNameRequired')}}</span>
                        </transition>
                      </div>
                      <div
                        class="column2"
                        :class="{invalid: $v.vehicleInspectionOrderData.sellerInfo.sellerLastName.$error}"
                      >
                        <label
                          for="sellerInfo.sellerLastName"
                        >{{$t("vehicleInspectionQuote.form.sellerInfo.lastName")}} *</label>
                        <input
                          type="text"
                          :placeholder="$t('vehicleInspectionQuote.form.placeholder.sellerLastName')"
                          v-model.trim="vehicleInspectionOrderData.sellerInfo.sellerLastName"
                        />
                        <transition name="shake">
                          <span
                            v-if="!$v.vehicleInspectionOrderData.sellerInfo.sellerLastName.required && $v.vehicleInspectionOrderData.sellerInfo.sellerLastName.$error"
                          >{{$t('vehicleInspectionQuote.form.validationError.sellerLastNameRequired')}}</span>
                        </transition>
                      </div>
                    </div>
                    <div class="row">
                      <div
                        class="column1"
                        :class="{invalid: $v.vehicleInspectionOrderData.sellerInfo.sellerEmailId.$error}"
                      >
                        <label
                          for="sellerInfo.sellerEmailId"
                        >{{$t("vehicleInspectionQuote.form.sellerInfo.email")}} *</label>
                        <input
                          type="email"
                          :placeholder="$t('vehicleInspectionQuote.form.placeholder.sellerEmail')"
                          v-model.trim="vehicleInspectionOrderData.sellerInfo.sellerEmailId"
                          @blur="checkIfSellerIdMatchEmail(sellerSequenceId, vehicleInspectionOrderData.sellerInfo.sellerEmailId), 
                            resetSellerIdMatchError()"
                        />
                        <transition name="shake">
                          <span
                            v-if="!$v.vehicleInspectionOrderData.sellerInfo.sellerEmailId.email"
                          >{{$t('vehicleInspectionQuote.form.validationError.invalidEmail')}}</span>
                          <span
                            v-if="!$v.vehicleInspectionOrderData.sellerInfo.sellerEmailId.required && $v.vehicleInspectionOrderData.sellerInfo.sellerEmailId.$error"
                          >{{$t('vehicleInspectionQuote.form.validationError.sellerEmailRequired')}}</span>
                          <span
                            v-if="sellerIdEmailDoNotMatchError"
                          >The entered Seller ID and Seller's Email don't match</span>
                        </transition>
                      </div>
                      <div
                        class="column2"
                        :class="{invalid: $v.vehicleInspectionOrderData.sellerInfo.sellerMobileNum.phoneNumber.$error}"
                      >
                        <label
                          for="sellerInfo.sellerMobileNum.phoneNumber"
                        >{{$t("vehicleInspectionQuote.form.sellerInfo.mobileNum")}} *</label>
                        <div class="flex">
                          <div class="dialing-code">
                            <select
                              v-model.trim="vehicleInspectionOrderData.sellerInfo.sellerMobileNum.countryCode"
                            >
                              <option value selected disabled hidden>- - - - -</option>
                              <option
                                v-for="(code, index) in getAbridgedDialingCodeList()"
                                :key="index"
                                :value="code"
                              >{{code}}</option>
                            </select>
                          </div>
                          <div class="phone-number">
                            <input
                              type="tel"
                              v-model.trim="vehicleInspectionOrderData.sellerInfo.sellerMobileNum.phoneNumber"
                              :placeholder="$t('vehicleInspectionQuote.form.placeholder.sellerMobileNum')"
                            />
                          </div>
                        </div>
                        <transition name="shake">
                          <span
                            v-if="!$v.vehicleInspectionOrderData.sellerInfo.sellerMobileNum.phoneNumber.required && $v.vehicleInspectionOrderData.sellerInfo.sellerMobileNum.phoneNumber.$error"
                          >{{$t('vehicleInspectionQuote.form.validationError.sellerMobilenumRequired')}}</span>
                          <span
                            v-if="!$v.vehicleInspectionOrderData.sellerInfo.sellerMobileNum.phoneNumber.numeric && $v.vehicleInspectionOrderData.sellerInfo.sellerMobileNum.phoneNumber.$error"
                          >{{$t('vehicleInspectionQuote.form.validationError.sellerMobilenumMustBeNumeric')}}</span>
                        </transition>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="column1">
                    <label for="promoCode">{{$t("vehicleInspectionQuote.form.promoCode")}}</label>
                    <input
                      type="text"
                      :placeholder="$t('vehicleInspectionQuote.form.placeholder.enterPromoCode')"
                      v-model.trim="vehicleInspectionOrderData.promoCode"
                    />
                  </div>
                  <div class="column2" v-if="!hearAboutUs">
                    <label for="hearAboutUs">{{$t("generic.hearAboutUsQuestion")}}</label>
                    <select v-model="hearAboutUs" @blur="onSelectWhereHeardAboutUs">
                      <option :value="null" selected disabled hidden>{{$t('generic.selectOne')}}</option>
                      <option
                        v-for="(option, index) in hearAboutUsOptions"
                        :value="option.value"
                        :key="index"
                      >{{option.type}}</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="payment-options">
                <div class="payment-options-content">
                  <PaymentOptions @onSelectPayOption="onSelectPayOption" />
                </div>
              </div>
              <div
                class="payment-info"
                :class="{invalid: $v.vehicleInspectionOrderData.isConsent.$invalid}"
              >
                <input type="checkbox" v-model.trim="vehicleInspectionOrderData.isConsent" required />
                <PolicyStatement />
                <small>
                  {{$t("generic.policyStatement.1stFragment")}}
                  <u
                    class="mouse-click"
                  >{{$t("generic.policyStatement.2ndFragment")}}</u>
                  , {{$t("generic.policyStatement.3rdFragment")}}
                  <u
                    class="mouse-click"
                  >{{$t("generic.policyStatement.4thFragment")}}</u>
                  , {{$t("generic.policyStatement.5thFragment")}}
                </small>
              </div>
              <center class="order-btn-container" v-if="cardError">{{cardError}}</center>
              <center class="order-btn-container">
                <button
                  type="submit"
                  @click.prevent="onClickPlaceOrder()"
                  class="secondary-btn"
                >{{$t("buttons.orderAnInspection")}}</button>
              </center>
            </form>
          </div>
          <div class="container-right-shadow" ref="containerRightShadow"></div>
          <div class="container-right" ref="getRightContainer" :class="{backdrop: activeState}">
            <div v-if="!activeState" class="angle right-angle" @click="activeState=!activeState">
              <i class="fa fa-angle-left"></i>
            </div>
            <transition name="slide">
              <div class="container-content-right" v-if="activeState">
                <div class="angle" @click="activeState=!activeState">
                  <i v-if="activeState" class="fa fa-angle-right"></i>
                </div>
                <div class="container-inner-content-right">
                  <table>
                    <tr>
                      <td>
                        <div class="car">
                          <i class="fas fa-car-alt"></i>
                        </div>
                      </td>
                      <td>
                        <label>
                          {{$t("vehicleInspectionQuote.orderSummary.type")}}:
                          <br />
                        </label>
                        <strong>{{translateValue(orderQuote.typeOfInspection, $t("dbDictionary.typeOfInspection"))}}</strong>
                      </td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>
                        <div class="calendar">
                          <i class="far fa-calendar-alt"></i>
                        </div>
                      </td>
                      <td>
                        <label>{{$t("vehicleInspectionQuote.orderSummary.dateOfInspection")}}:</label>
                        <br />
                        <strong>{{orderQuote.inspectionDateTime | showOnlyDate}}</strong>
                      </td>
                      <td @click="showEditInspDateTimeModal">
                        <span>{{$t("buttons.edit")}}</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="clock">
                          <i class="far fa-clock"></i>
                        </div>
                      </td>
                      <td>
                        <label>{{$t("vehicleInspectionQuote.orderSummary.inspectionTime")}}:</label>
                        <br />
                        <strong>{{orderQuote.inspectionDateTime | showOnlyTime}}</strong>
                      </td>
                      <td @click="showEditInspDateTimeModal">
                        <span>{{$t("buttons.edit")}}</span>
                      </td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>
                        <label>{{$t("vehicleInspectionQuote.orderSummary.vehicleDescription")}}:</label>
                        <br />
                        <strong>
                          {{orderQuote.inspectedItemInfo.vehicleBrand}} {{orderQuote.inspectedItemInfo.vehicleModel}}
                          {{orderQuote.inspectedItemInfo.vehicleYear | showOnlyYear}}
                        </strong>
                      </td>
                      <td @click="showEditVehicleDescModal()">
                        <span>{{$t("buttons.edit")}}</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="map-marker">
                          <i class="fas fa-map-marker-alt"></i>
                        </div>
                      </td>
                      <td>
                        <label>{{$t("vehicleInspectionQuote.orderSummary.locationOfVehicle")}}:</label>
                        <br />
                        <strong>{{orderQuote.country}}, {{orderQuote.state}}, {{orderQuote.city}}, {{orderQuote.zipCode}}</strong>
                      </td>
                      <td @click="showEditCityAndStateModal()">
                        <span>{{$t("buttons.edit")}}</span>
                      </td>
                    </tr>
                    <tr>
                      <td></td>
                      <td class="total-price">
                        {{$t("vehicleInspectionQuote.orderSummary.price")}} -
                        <strong>{{orderQuote.price.value}} {{orderQuote.price.currency}}</strong>
                      </td>
                      <td></td>
                    </tr>
                  </table>
                </div>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>
    <EditQuoteVehicleDescription
      v-if="isEditVehicleDescriptionVisible"
      :orderQuote="orderQuote"
      @close="hideEditVehicleDescModal"
      @submitted="initializeData"
    ></EditQuoteVehicleDescription>

    <EditQuoteInspDateTime
      v-if="isEditInspDateTimeVisible"
      @close="hideEditInspDateTimeModal"
      @submitted="initializeData"
      :orderQuote="orderQuote"
    ></EditQuoteInspDateTime>

    <EditQuoteCityAndState
      v-if="isEditQuoteCityAndStateVisible"
      @close="hideEditCityAndStateModal"
      @submitted="initializeData"
      :orderQuote="orderQuote"
    ></EditQuoteCityAndState>
  </div>
</template>

<script>
import countriesList from "../../mockData/countriesList";
import dialingCodesList from "../../mockData/dialingCodesList";
import axios from "axios";
import resizableTextarea from "../../utility/resizableTextarea";
import {
  required,
  email,
  numeric,
  sameAs,
  requiredUnless
} from "vuelidate/lib/validators";
import EditQuoteVehicleDescription from "../modals/editQuote/EditQuoteVehicleDescription.vue";
import EditQuoteInspDateTime from "../modals/editQuote/EditQuoteInspDateTime.vue";
import EditQuoteCityAndState from "../modals/editQuote/EditQuoteCityAndState.vue";
import {
  getFinetunedLocationDetails,
  transformObjectToValueTypeArray,
  setStripeLocale,
  doesUserSequenceIdMatchEmail,
  doesUserSequenceIdExist,
  translateValue,
  getAbridgedDialingCodeList
} from "../../utility";
import PaymentOptions from "../services/PaymentOptions";

export default {
  components: {
    resizableTextarea,
    EditQuoteVehicleDescription,
    EditQuoteInspDateTime,
    EditQuoteCityAndState,
    PaymentOptions
  },
  data() {
    return {
      translateValue,
      getAbridgedDialingCodeList,
      sellerIdDoesNotExistError: false,
      sellerIdEmailDoNotMatchError: false,
      sellerSequenceId: null,
      hearAboutUsOptions: transformObjectToValueTypeArray(
        this.$t("generic.hearAboutUs")
      ),
      hearAboutUs: "",
      showFixedRightContainer: false,
      activeState: false,
      quoteId: this.$route.params.quoteId,
      orderQuote: {},
      isOptional: true,
      isEditVehicleDescriptionVisible: false,
      isEditInspDateTimeVisible: false,
      isEditQuoteCityAndStateVisible: false,
      vehicleInspectionOrderData: {
        orderStatus: "Pending",
        inspectionType: "Vehicle",
        firstName: "",
        lastName: "",
        country: "",
        city: "",
        state: "",
        email: "",
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
          customerSaySellerIsRefunding: false,
          hasSellerAgreedToRefund: false,
          sellerFirstName: "",
          sellerLastName: "",
          sellerEmailId: "",
          sellerMobileNum: {
            countryCode: "",
            phoneNumber: ""
          }
        },
        isConsent: false
      },
      countries: countriesList,
      dialingCodes: dialingCodesList,
      paymentOption: "",
      cardError: ""
    };
  },
  watch: {
    "vehicleInspectionOrderData.sellerInfo.isSellerInfo"(val) {
      if (val) {
        this.getInvitationInfo();
      }
    }
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
              })
            }
          }
        },
        isConsent: {
          sameAs: sameAs(() => {
            return true;
          })
        }
      }
    };
  },

  computed: {
    auth() {
      return this.$store.getters.isAuthenticated;
    }
  },

  methods: {
    onScroll() {
      // Get the current scroll position
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;
      if (window.innerWidth > 860) {
        if (currentScrollPosition >= this.$refs.getLeftContainer.offsetTop) {
          this.$refs.getRightContainer.style.position = "fixed";

          if (window.innerWidth <= 1100) {
            this.$refs.getRightContainer.style.top = "72px";
          } else {
            this.$refs.getRightContainer.style.top = "90px";
          }
        } else {
          this.$refs.getRightContainer.style.position = "absolute";
          this.$refs.getRightContainer.style.top = "auto";
        }
        this.$refs.getRightContainer.style.left =
          this.$refs.containerRightShadow.getBoundingClientRect().left + "px";
      } else {
        this.$refs.getRightContainer.style.position = "absolute";
        this.$refs.getRightContainer.style.top = "0px";
        this.$refs.getRightContainer.style.left = "0px";
      }
    },

    windowResize() {
      this.onScroll();
      if (window.innerWidth <= 860) {
        this.activeState = false;
      } else {
        this.activeState = true;
      }
    },

    onSelectWhereHeardAboutUs() {
      axios.patch("users/me", { hearAboutUs: this.hearAboutUs });
    },

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
    showEditCityAndStateModal() {
      this.isEditQuoteCityAndStateVisible = true;
    },
    hideEditCityAndStateModal() {
      this.isEditQuoteCityAndStateVisible = false;
    },

    async onClickPlaceOrder() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }

      this.vehicleInspectionOrderData.currency = this.orderQuote.price.currency;
      this.vehicleInspectionOrderData.amount = this.orderQuote.price.value;
      this.vehicleInspectionOrderData.quoteId = this.quoteId;

      //Update the quote with vehicle VIN and location
      this.orderQuote.inspectedItemInfo.VIN = this.vehicleInspectionOrderData.inspectedItemInfo.vehicleInfo.VIN;
      this.orderQuote.inspectedItemInfo.vehicleLocation = this.vehicleInspectionOrderData.inspectedItemInfo.vehicleLocation;
      axios.patch(`/quotes/myQuote/${this.quoteId}`, this.orderQuote);

      //Details for stripe
      const paymentDetails = {
        quoteId: this.orderQuote._id,
        customerEmail: this.orderQuote.email,
        successUrl: `${process.env.VUE_APP_FRONTEND_BASE_URL}/${this.$i18n.locale}/status/booking-successful`,
        cancelUrl: `${process.env.VUE_APP_FRONTEND_BASE_URL}/${this.$i18n.locale}/quotes/vehicle-inspection-quote/${this.orderQuote._id}?paymentCanceled=true`,
        locale: setStripeLocale(this.$i18n.locale),
        orderDetails: [
          {
            name: this.$t("vehicleInspectionQuote.stripe.serviceName"),
            description: this.$t(
              "vehicleInspectionQuote.stripe.serviceDescription",
              { city: this.orderQuote.city }
            ),
            amount: this.orderQuote.price.value * 100,
            currency: this.orderQuote.price.currency,
            quantity: 1
          }
        ]
      };

      //Save the order details in the quote before getting the stripe session
      const updatedQuote = this.orderQuote;
      updatedQuote.preOrderDetails = this.vehicleInspectionOrderData;
      await axios.patch(
        `/quotes/save_order_details/${this.quoteId}`,
        updatedQuote
      );

      //Get the stripe payment session from the backend
      axios.post("/orders/getStripeSession", paymentDetails).then(res => {
        const session = res.data;
        const stripe = Stripe(process.env.VUE_APP_STRIPE_PUBLISHABLE_KEY);

        stripe.redirectToCheckout({ sessionId: session.id }).then(result => {
          this.cardError = result.error.message;
          // If `redirectToCheckout` fails due to a browser or network
          // error, display the localized error message to your customer
          // using `result.error.message`.
        });
      });
    },

    async onBlurVehicleStreet() {
      const address = `${this.vehicleInspectionOrderData.inspectedItemInfo.vehicleLocation} ${this.orderQuote.city} 
                       ${this.orderQuote.state} ${this.orderQuote.country} ${this.orderQuote.zipCode}`;
      const location = await getFinetunedLocationDetails(address);
      this.orderQuote.geoCoordinates = location.geoCoordinates;
      this.orderQuote.city = location.city;
      this.orderQuote.state = location.state;
      this.orderQuote.inspectedItemInfo.vehicleLocation = this.vehicleInspectionOrderData.inspectedItemInfo.vehicleLocation;
      this.orderQuote.cityTimeZoneId = location.timeZoneId;
      axios
        .patch(`/quotes/myQuote/${this.quoteId}`, this.orderQuote)
        .then(res => {
          this.orderQuote = res.data;
        });
    },

    async initializeData() {
      this.hearAboutUs = localStorage.getItem("howYouHeardAbout");
      const quoteId = this.quoteId;
      const res = await axios.get(`/quotes/get_quote/${quoteId}`);
      this.orderQuote = res.data;
      //If invitation was initiated
      if (this.orderQuote.invitationId) {
        this.getInvitationInfo();
      }

      //Get the user info
      axios.get("/users/me").then(res => {
        this.vehicleInspectionOrderData.firstName = res.data.firstName;
        this.vehicleInspectionOrderData.lastName = res.data.lastName;
        this.vehicleInspectionOrderData.email = res.data.email;
        this.vehicleInspectionOrderData.country = res.data.contactInfo.country;
        this.vehicleInspectionOrderData.city = res.data.contactInfo.city;
        this.vehicleInspectionOrderData.state = res.data.contactInfo.state;
        this.vehicleInspectionOrderData.addressLine1 =
          res.data.contactInfo.addressLine1;
        this.vehicleInspectionOrderData.addressLine2 =
          res.data.contactInfo.addressLine2;
        this.vehicleInspectionOrderData.zipCode = res.data.contactInfo.zipCode;
        this.vehicleInspectionOrderData.mobileNum1.countryCode =
          res.data.contactInfo.mobileNum1.countryCode;
        this.vehicleInspectionOrderData.mobileNum1.phoneNumber =
          res.data.contactInfo.mobileNum1.phoneNumber;
        this.vehicleInspectionOrderData.mobileNum2.countryCode =
          res.data.contactInfo.mobileNum2.countryCode;
        this.vehicleInspectionOrderData.mobileNum2.phoneNumber =
          res.data.contactInfo.mobileNum2.phoneNumber;
        this.getDialingCode();
        //When redirected from a canceled checkout
        if (this.$route.query.paymentCanceled == "true") {
          //Retrieve the order details from the quote
          this.vehicleInspectionOrderData = this.orderQuote.preOrderDetails;
          if (this.vehicleInspectionOrderData.sellerInfo.isSellerInfo == true) {
            this.isOptional = false;
          } else {
            this.isOptional = true;
          }
        }
      });

      setTimeout(() => {
        this.$router.replace("/");
      }, 1.8e6);

      this.windowResize();
      window.addEventListener("resize", this.windowResize);
    },

    getInvitationInfo() {
      if (this.orderQuote.invitationId) {
        //When the order was initiated by an invitation
        this.vehicleInspectionOrderData.inspectedItemInfo.vehicleLocation = this.orderQuote.inspectedItemInfo.vehicleLocation;
        this.vehicleInspectionOrderData.inspectedItemInfo.vehicleInfo.VIN = this.orderQuote.inspectedItemInfo.VIN;
        this.vehicleInspectionOrderData.invitationId = this.orderQuote.invitationId;

        //Use the invitationId to get the seller's info
        const invitationId = this.orderQuote.invitationId;
        axios
          .get(`/order_invitation/get_invitation/${invitationId}`)
          .then(res => {
            const invitation = res.data;
            this.vehicleInspectionOrderData.sellerInfo.isSellerInfo = true;
            this.isOptional = false;
            this.vehicleInspectionOrderData.sellerInfo.customerSaySellerIsRefunding =
              invitation.hasSellerAgreedToRefund; //true or false
            this.vehicleInspectionOrderData.sellerInfo.hasSellerAgreedToRefund =
              invitation.hasSellerAgreedToRefund; //true or false
            if (invitation.hasSellerAgreedToRefund) {
              this.sellerSequenceId = invitation.sellerInfo.userSequenceId;
            }
            this.vehicleInspectionOrderData.sellerInfo.sellerFirstName =
              invitation.sellerInfo.firstName;
            this.vehicleInspectionOrderData.sellerInfo.sellerLastName =
              invitation.sellerInfo.lastName;
            this.vehicleInspectionOrderData.sellerInfo.sellerEmailId =
              invitation.sellerInfo.email;
            this.vehicleInspectionOrderData.sellerInfo.sellerMobileNum.countryCode =
              invitation.sellerInfo.mobile.countryCode;
            this.vehicleInspectionOrderData.sellerInfo.sellerMobileNum.phoneNumber =
              invitation.sellerInfo.mobile.phoneNumber;
          });
      }
    },

    onSelectPayOption(event) {
      this.paymentOption = event;
    },

    async checkIfSellerSequenceIdExists(sellerSequenceId) {
      const response = await doesUserSequenceIdExist(sellerSequenceId);
      if (response == false) {
        this.sellerIdDoesNotExistError = true;
      } else {
        this.sellerIdDoesNotExistError = false;
      }
    },

    async checkIfSellerIdMatchEmail(sellerSequenceId, sellerEmail) {
      if (sellerSequenceId && sellerEmail) {
        const response = await doesUserSequenceIdMatchEmail(
          sellerSequenceId,
          sellerEmail
        );
        if (response) {
          this.sellerIdEmailDoNotMatchError = false;
        } else {
          this.sellerIdEmailDoNotMatchError = true;
        }
      }
    },

    resetSellerIdMatchError() {
      if (
        !this.sellerSequenceId ||
        !this.vehicleInspectionOrderData.sellerInfo.sellerEmailId
      ) {
        this.sellerIdEmailDoNotMatchError = false;
      }
    }
  },

  mounted() {
    this.initializeData();
    this.$nextTick(() => {
      window.addEventListener("scroll", this.onScroll);
    });
  },

  beforeDestroy() {
    window.removeEventListener("resize", this.windowResize);
    window.removeEventListener("scroll", this.onScroll);
  }
};
</script>

<style lang="scss" scoped>
@import "../../scss/_quotes.scss";
</style>
