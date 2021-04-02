<template>
  <div>
    <div class="body">
      <div class="container">
        <div class="container-content">
          <div class="container-left" ref="getLeftContainer">
            <form @submit.prevent="onClickPlaceOrder">
              <div class="container-left-header">
                <h1>{{$t("homeInspectionQuote.form.mainTitle")}}</h1>
                <small>{{$t("homeInspectionQuote.form.subtitle")}}</small>
                <br />
              </div>
              <div class="personal-info">
                <div class="personal-info-header">
                  <h3>{{$t("homeInspectionQuote.form.personalInformation.title")}}</h3>
                  <!-- <span v-if="!auth">
                  <br />
                  <small>
                    Already registered?
                    <u class="link">signed in</u>.
                  </small>
                  </span>-->
                </div>
                <div class="row">
                  <div
                    class="column1"
                    :class="{invalid: $v.homeInspectionOrderData.firstName.$error}"
                  >
                    <label
                      for="firstName"
                    >{{$t("homeInspectionQuote.form.personalInformation.firstName")}} *</label>
                    <input
                      type="text"
                      :placeholder="$t('homeInspectionQuote.form.placeholder.firstName')"
                      v-model.trim="homeInspectionOrderData.firstName"
                      required
                    />
                    <transition name="shake">
                      <span
                        v-if="!$v.homeInspectionOrderData.firstName.required && $v.homeInspectionOrderData.firstName.$error"
                      >{{$t('homeInspectionQuote.form.validationError.firstNameRequired')}}</span>
                    </transition>
                  </div>
                  <div
                    class="column2"
                    :class="{invalid: $v.homeInspectionOrderData.lastName.$error}"
                  >
                    <label
                      for="lastName"
                    >{{$t("homeInspectionQuote.form.personalInformation.lastName")}} *</label>
                    <input
                      type="text"
                      :placeholder="$t('homeInspectionQuote.form.placeholder.lastName')"
                      v-model.trim="homeInspectionOrderData.lastName"
                      required
                    />
                    <transition name="shake">
                      <span
                        v-if="!$v.homeInspectionOrderData.lastName.required && $v.homeInspectionOrderData.lastName.$error"
                      >{{$t('homeInspectionQuote.form.validationError.lastNameRequired')}}</span>
                    </transition>
                  </div>
                </div>
                <div class="row">
                  <div
                    class="column1"
                    :class="{invalid: $v.homeInspectionOrderData.country.$error}"
                  >
                    <label
                      for="country"
                    >{{$t("homeInspectionQuote.form.personalInformation.country")}} *</label>
                    <select
                      @change="getDialingCode()"
                      v-model="homeInspectionOrderData.country"
                      required
                    >
                      <option
                        value
                        selected
                        disabled
                        hidden
                      >{{$t('homeInspectionQuote.form.placeholder.country')}}</option>
                      <option v-for="(country, index) in countries" :key="index">{{country}}</option>
                    </select>
                    <transition name="shake">
                      <span
                        v-if="!$v.homeInspectionOrderData.country.required && $v.homeInspectionOrderData.country.$error"
                      >{{$t('homeInspectionQuote.form.validationError.countryRequired')}}</span>
                    </transition>
                  </div>
                  <div class="column2" :class="{invalid: $v.homeInspectionOrderData.state.$error}">
                    <label
                      for="state"
                    >{{$t("homeInspectionQuote.form.personalInformation.state")}} *</label>
                    <input
                      type="text"
                      :placeholder="$t('homeInspectionQuote.form.placeholder.state')"
                      v-model="homeInspectionOrderData.state"
                      required
                    />
                    <transition name="shake">
                      <span
                        v-if="!$v.homeInspectionOrderData.state.required && $v.homeInspectionOrderData.state.$error"
                      >{{$t('homeInspectionQuote.form.validationError.stateRequired')}}</span>
                    </transition>
                  </div>
                </div>
                <div class="row">
                  <div class="column1" :class="{invalid: $v.homeInspectionOrderData.city.$error}">
                    <label for="city">{{$t("homeInspectionQuote.form.personalInformation.city")}} *</label>
                    <input
                      type="text"
                      :placeholder="$t('homeInspectionQuote.form.placeholder.city')"
                      v-model.trim="homeInspectionOrderData.city"
                      required
                    />
                    <transition name="shake">
                      <span
                        v-if="!$v.homeInspectionOrderData.city.required && $v.homeInspectionOrderData.city.$error"
                      >{{$t('homeInspectionQuote.form.validationError.cityRequired')}}</span>
                    </transition>
                  </div>
                  <div
                    class="column2"
                    :class="{invalid: $v.homeInspectionOrderData.addressLine1.$error}"
                  >
                    <label
                      for="addressLine1"
                    >{{$t("homeInspectionQuote.form.personalInformation.addressLine1")}} *</label>
                    <input
                      type="text"
                      :placeholder="$t('homeInspectionQuote.form.placeholder.addressLine1')"
                      v-model.trim="homeInspectionOrderData.addressLine1"
                      required
                    />
                    <transition name="shake">
                      <span
                        v-if="!$v.homeInspectionOrderData.addressLine1.required && $v.homeInspectionOrderData.addressLine1.$error"
                      >{{$t('homeInspectionQuote.form.validationError.addressRequired')}}</span>
                    </transition>
                  </div>
                </div>
                <div class="row">
                  <div class="column1">
                    <label
                      for="addressLine2"
                    >{{$t("homeInspectionQuote.form.personalInformation.addressLine2")}}</label>
                    <input
                      type="text"
                      :placeholder="$t('homeInspectionQuote.form.placeholder.addressLine2')"
                      v-model.trim="homeInspectionOrderData.addressLine2"
                    />
                  </div>
                  <div class="column2">
                    <label
                      for="zipCode"
                    >{{$t("homeInspectionQuote.form.personalInformation.zipOrPostCode")}}</label>
                    <input
                      type="text"
                      :placeholder="$t('homeInspectionQuote.form.placeholder.zipOrPostCode')"
                      v-model.trim="homeInspectionOrderData.zipCode"
                    />
                  </div>
                </div>
                <div class="row">
                  <div
                    class="column1"
                    :class="{invalid: $v.homeInspectionOrderData.mobileNum1.phoneNumber.$error}"
                  >
                    <label
                      for="mobileNum1"
                    >{{$t("homeInspectionQuote.form.personalInformation.mobileNum1")}} *</label>
                    <div class="flex">
                      <div class="dialing-code">
                        <input
                          type="text"
                          placeholder="- - - - -"
                          disabled
                          v-model.trim="homeInspectionOrderData.mobileNum1.countryCode"
                        />
                      </div>
                      <div class="phone-number">
                        <input
                          type="tel"
                          v-model.trim="homeInspectionOrderData.mobileNum1.phoneNumber"
                          :placeholder="$t('homeInspectionQuote.form.placeholder.mobileNum1')"
                        />
                      </div>
                    </div>
                    <transition name="shake">
                      <span
                        v-if="!$v.homeInspectionOrderData.mobileNum1.required && $v.homeInspectionOrderData.mobileNum1.$error"
                      >{{$t('homeInspectionQuote.form.validationError.phoneNumRequired')}}</span>
                    </transition>
                  </div>
                  <div class="column2">
                    <label
                      for="mobileNum2"
                    >{{$t("homeInspectionQuote.form.personalInformation.mobileNum2")}}</label>
                    <div class="flex">
                      <div class="dialing-code">
                        <input
                          type="text"
                          placeholder="- - - - -"
                          disabled
                          v-model.trim="homeInspectionOrderData.mobileNum2.countryCode"
                        />
                      </div>
                      <div class="phone-number">
                        <input
                          type="tel"
                          v-model.trim="homeInspectionOrderData.mobileNum2.phoneNumber"
                          :placeholder="$t('homeInspectionQuote.form.placeholder.mobileNum2')"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <!-- <div class="row">
                <div
                  class="column1"
                  v-if="!auth"
                  :class="{invalid: $v.homeInspectionOrderData.password.$error}"
                >
                  <label for="password">Password *</label>
                  <input
                    type="password"
                    placeholder="Enter password"
                    v-model.trim="homeInspectionOrderData.password"
                    required
                  />
                  <transition name="shake">
                    <span
                      v-if="!$v.homeInspectionOrderData.password.minLen"
                    >Password must be at least {{ $v.homeInspectionOrderData.password.$params.minLen.min }}.</span>
                    <span
                      v-if="!$v.homeInspectionOrderData.password.required && $v.homeInspectionOrderData.password.$error"
                    >Password is required.</span>
                  </transition>
                </div>
                <div
                  class="column2"
                  v-if="!auth"
                  :class="{invalid: $v.homeInspectionOrderData.repeatPassword.$error}"
                >
                  <label for="repeatPassword">Repeat password</label>
                  <input
                    type="password"
                    placeholder="Repeat password"
                    v-model.trim="homeInspectionOrderData.repeatPassword"
                  />
                  <transition name="shake">
                    <span
                      v-if="!$v.homeInspectionOrderData.repeatPassword.required && $v.homeInspectionOrderData.repeatPassword.$error"
                    >Repeat password is required.</span>
                    <span
                      v-else-if="!$v.homeInspectionOrderData.repeatPassword.sameAs"
                    >Passwords must match.</span>
                  </transition>
                </div>
                </div>-->
              </div>
              <div class="home-location">
                <div class="row">
                  <div
                    class="column1"
                    :class="{invalid: $v.homeInspectionOrderData.inspectedItemInfo.homeLocation.$error}"
                  >
                    <h3>{{$t("homeInspectionQuote.form.infoAboutHome.title")}}</h3>
                    <br />
                    <p>
                      <strong>{{$t("homeInspectionQuote.form.infoAboutHome.locationOfHome")}}</strong>
                    </p>
                    <div class="spaced-height">
                      <div>
                        <label
                          for="homeLocation"
                        >{{$t("homeInspectionQuote.form.infoAboutHome.street")}} *</label>
                        <input
                          type="text"
                          :placeholder="$t('homeInspectionQuote.form.placeholder.homeLocationStreet')"
                          v-model.trim="homeInspectionOrderData.inspectedItemInfo.homeLocation"
                          @blur="onBlurHomeLocationStreet"
                          required
                        />
                        <transition name="shake">
                          <span
                            v-if="!$v.homeInspectionOrderData.inspectedItemInfo.homeLocation.required && $v.homeInspectionOrderData.inspectedItemInfo.homeLocation.$error"
                          >{{$t('homeInspectionQuote.form.validationError.streetRequired')}}</span>
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
                    <label for="moreInfo">{{$t("homeInspectionQuote.form.moreInfoForInspector")}}</label>
                    <div class="text-area">
                      <resizable-textarea>
                        <textarea rows="5" v-model.trim="homeInspectionOrderData.moreInfo"></textarea>
                      </resizable-textarea>
                    </div>
                  </div>
                </div>
              </div>
              <div class="seller-info">
                <div class="texts">
                  <h3>{{$t("homeInspectionQuote.form.sellerInfo.title")}}</h3>
                  <label>
                    <div class="inline">
                      <input
                        type="checkbox"
                        @change="isOptional=!isOptional"
                        v-model.trim="homeInspectionOrderData.sellerInfo.isSellerInfo"
                        for="sellerInfo.isSellerInfo"
                      />
                      <span>{{$t("homeInspectionQuote.form.sellerInfo.subtitle")}}</span>
                    </div>
                  </label>
                  <div v-show="homeInspectionOrderData.sellerInfo.isSellerInfo">
                    <br />
                    <div class="row">
                      <label>Has the seller agreed to refund you the cost of this inspection should you eventually purchase this property?</label>

                      <div class="column1">
                        <select
                          v-model="homeInspectionOrderData.sellerInfo.customerSaySellerIsRefunding"
                        >
                          <option :value="false">No</option>
                          <option :value="true">Yes</option>
                        </select>
                      </div>
                    </div>
                    <div
                      class="row"
                      v-if="homeInspectionOrderData.sellerInfo.customerSaySellerIsRefunding"
                    >
                      <div class="column1">
                        <label>Seller's Unique ID *</label>
                        <input
                          placeholder="Enter Seller's Unique ID"
                          v-model="sellerSequenceId"
                          @blur="checkIfSellerSequenceIdExists(sellerSequenceId),
                      checkIfSellerIdMatchEmail(sellerSequenceId, homeInspectionOrderData.sellerInfo.sellerEmailId), resetSellerIdMatchError()"
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
                        :class="{invalid: $v.homeInspectionOrderData.sellerInfo.sellerFirstName.$error}"
                      >
                        <label
                          for="sellerInfo.sellerFirstName"
                        >{{$t("homeInspectionQuote.form.sellerInfo.firstName")}} *</label>
                        <input
                          type="text"
                          :placeholder="$t('homeInspectionQuote.form.placeholder.sellerFirstName')"
                          v-model.trim="homeInspectionOrderData.sellerInfo.sellerFirstName"
                        />
                        <transition name="shake">
                          <span
                            v-if="!$v.homeInspectionOrderData.sellerInfo.sellerFirstName.required && $v.homeInspectionOrderData.sellerInfo.sellerFirstName.$error"
                          >{{$t('homeInspectionQuote.form.validationError.sellerFirstNameRequired')}}</span>
                        </transition>
                      </div>
                      <div
                        class="column2"
                        :class="{invalid: $v.homeInspectionOrderData.sellerInfo.sellerLastName.$error}"
                      >
                        <label
                          for="sellerInfo.sellerLastName"
                        >{{$t("homeInspectionQuote.form.sellerInfo.lastName")}} *</label>
                        <input
                          type="text"
                          :placeholder="$t('homeInspectionQuote.form.placeholder.sellerLastName')"
                          v-model.trim="homeInspectionOrderData.sellerInfo.sellerLastName"
                        />
                        <transition name="shake">
                          <span
                            v-if="!$v.homeInspectionOrderData.sellerInfo.sellerLastName.required && $v.homeInspectionOrderData.sellerInfo.sellerLastName.$error"
                          >{{$t('homeInspectionQuote.form.validationError.sellerLastNameRequired')}}</span>
                        </transition>
                      </div>
                    </div>
                    <div class="row">
                      <div
                        class="column1"
                        :class="{invalid: $v.homeInspectionOrderData.sellerInfo.sellerEmailId.$error}"
                      >
                        <label
                          for="sellerInfo.sellerEmailId"
                        >{{$t("homeInspectionQuote.form.sellerInfo.email")}} *</label>
                        <input
                          type="email"
                          :placeholder="$t('homeInspectionQuote.form.placeholder.sellerEmail')"
                          v-model.trim="homeInspectionOrderData.sellerInfo.sellerEmailId"
                          @blur="checkIfSellerIdMatchEmail(sellerSequenceId, homeInspectionOrderData.sellerInfo.sellerEmailId), 
                        resetSellerIdMatchError()"
                        />
                        <transition name="shake">
                          <span
                            v-if="!$v.homeInspectionOrderData.sellerInfo.sellerEmailId.email"
                          >{{$t('homeInspectionQuote.form.validationError.invalidEmail')}}</span>
                          <span
                            v-if="!$v.homeInspectionOrderData.sellerInfo.sellerEmailId.required && $v.homeInspectionOrderData.sellerInfo.sellerEmailId.$error"
                          >{{$t('homeInspectionQuote.form.validationError.sellerEmailRequired')}}</span>
                          <span
                            v-if="sellerIdEmailDoNotMatchError"
                          >The entered Seller ID and Seller's Email don't match</span>
                        </transition>
                      </div>
                      <div
                        class="column2"
                        :class="{invalid: $v.homeInspectionOrderData.sellerInfo.sellerMobileNum.phoneNumber.$error}"
                      >
                        <label
                          for="sellerInfo.sellerMobileNum.phoneNumber"
                        >{{$t("homeInspectionQuote.form.sellerInfo.mobileNum")}} *</label>
                        <div class="flex">
                          <div class="dialing-code">
                            <select
                              v-model.trim="homeInspectionOrderData.sellerInfo.sellerMobileNum.countryCode"
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
                              v-model.trim="homeInspectionOrderData.sellerInfo.sellerMobileNum.phoneNumber"
                              :placeholder="$t('homeInspectionQuote.form.placeholder.sellerMobileNum')"
                            />
                          </div>
                        </div>
                        <transition name="shake">
                          <span
                            v-if="!$v.homeInspectionOrderData.sellerInfo.sellerMobileNum.phoneNumber.required && $v.homeInspectionOrderData.sellerInfo.sellerMobileNum.phoneNumber.$error"
                          >{{$t('homeInspectionQuote.form.validationError.sellerMobilenumRequired')}}</span>
                          <span
                            v-if="!$v.homeInspectionOrderData.sellerInfo.sellerMobileNum.phoneNumber.numeric && $v.homeInspectionOrderData.sellerInfo.sellerMobileNum.phoneNumber.$error"
                          >{{$t('homeInspectionQuote.form.validationError.sellerMobilenumMustBeNumeric')}}</span>
                        </transition>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="column1">
                    <label for="promoCode">{{$t("homeInspectionQuote.form.promoCode")}}</label>
                    <input
                      type="text"
                      :placeholder="$t('homeInspectionQuote.form.placeholder.enterPromoCode')"
                      v-model.trim="homeInspectionOrderData.promoCode"
                    />
                  </div>
                  <div class="column2" v-if="hearAboutUs">
                    <label for="hearAboutUs">{{$t("generic.hearAboutUsQuestion")}}</label>
                    <select v-model.trim="hearAboutUs" @blur="onSelectWhereHeardAboutUs">
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
                :class="{invalid: $v.homeInspectionOrderData.isConsent.$invalid}"
              >
                <input type="checkbox" v-model.trim="homeInspectionOrderData.isConsent" required />
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
                          {{$t("homeInspectionQuote.orderSummary.type")}}:
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
                        <label>{{$t("homeInspectionQuote.orderSummary.dateOfInspection")}}:</label>
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
                        <label>{{$t("homeInspectionQuote.orderSummary.inspectionTime")}}:</label>
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
                        <label>{{$t("homeInspectionQuote.orderSummary.homeDescription")}}:</label>
                        <br />
                        <strong>{{translateValue(orderQuote.inspectedItemInfo.typeOfHome, $t('homeInspection.form.typeOfHomeOptions'))}} {{$tc("homeInspectionQuote.orderSummary.withNoOfRooms", orderQuote.inspectedItemInfo.numberOfRooms, {count: orderQuote.inspectedItemInfo.numberOfRooms})}}</strong>
                      </td>
                      <td @click="showEditHomeDescModal()">
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
                        <label>{{$t("homeInspectionQuote.orderSummary.locationOfHome")}}:</label>
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
                        {{$t("homeInspectionQuote.orderSummary.price")}} -
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
    <EditQuoteHomeDescription
      v-if="isEditQuoteHomeDescriptionVisible"
      @close="hideEditHomeDescModal"
      :orderQuote="orderQuote"
      @submitted="initializeData"
    ></EditQuoteHomeDescription>

    <EditQuoteInspDateTime
      v-if="isEditInspDateTimeVisible"
      @close="hideEditInspDateTimeModal"
      :orderQuote="orderQuote"
      @submitted="initializeData"
    ></EditQuoteInspDateTime>

    <EditQuoteCityAndState
      v-if="isEditQuoteCityAndStateVisible"
      @close="hideEditCityAndStateModal"
      :orderQuote="orderQuote"
      @submitted="initializeData"
    ></EditQuoteCityAndState>
  </div>
</template>

<script>
import countriesList from "../../mockData/countriesList";
import dialingCodesList from "../../mockData/dialingCodesList";
import axios from "axios";
import {
  required,
  email,
  numeric,
  sameAs,
  requiredUnless
} from "vuelidate/lib/validators";
import EditQuoteHomeDescription from "../modals/editQuote/EditQuoteHomeDescription.vue";
import EditQuoteInspDateTime from "../modals/editQuote/EditQuoteInspDateTime.vue";
import EditQuoteCityAndState from "../modals/editQuote/EditQuoteCityAndState.vue";
import resizableTextarea from "../../utility/resizableTextarea";
import {
  getFinetunedLocationDetails,
  translateValue,
  setStripeLocale,
  transformObjectToValueTypeArray,
  doesUserSequenceIdMatchEmail,
  doesUserSequenceIdExist,
  getAbridgedDialingCodeList
} from "../../utility";
import PaymentOptions from "../services/PaymentOptions";

export default {
  components: {
    resizableTextarea,
    EditQuoteHomeDescription,
    EditQuoteInspDateTime,
    EditQuoteCityAndState,
    PaymentOptions
  },
  data() {
    return {
      sellerIdDoesNotExistError: false,
      sellerIdEmailDoNotMatchError: false,
      sellerSequenceId: null,
      translateValue,
      getAbridgedDialingCodeList,
      hearAboutUsOptions: transformObjectToValueTypeArray(
        this.$t("generic.hearAboutUs")
      ),
      hearAboutUs: null,
      showFixedRightContainer: false,
      activeState: false,
      quoteId: this.$route.params.quoteId,
      orderQuote: {},
      isOrderPlaced: false,
      isOptional: true,
      isEditQuoteHomeDescriptionVisible: false,
      isEditInspDateTimeVisible: false,
      isEditQuoteCityAndStateVisible: false,
      homeInspectionOrderData: {
        orderStatus: "Pending",
        inspectionType: "Home",
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
          homeLocation: ""
        },
        sellerInfo: {
          isSellerInfo: false,
          customerSaySellerIsRefunding: false,
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
      cardError: ""
    };
  },

  watch: {
    "homeInspectionOrderData.sellerInfo.isSellerInfo"(val) {
      if (val) {
        this.getInvitationInfo();
      }
    }
  },

  validations() {
    return {
      homeInspectionOrderData: {
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
          homeLocation: {
            required
          }
        },
        sellerInfo: {
          sellerFirstName: {
            required: requiredUnless(() => {
              if (this.isOptional) {
                this.homeInspectionOrderData.sellerInfo.sellerFirstName = "";
              }
              return this.isOptional;
            })
          },
          sellerLastName: {
            required: requiredUnless(() => {
              if (this.isOptional) {
                this.homeInspectionOrderData.sellerInfo.sellerLastName = "";
              }
              return this.isOptional;
            })
          },
          sellerEmailId: {
            required: requiredUnless(() => {
              if (this.isOptional) {
                this.homeInspectionOrderData.sellerInfo.sellerEmailId = "";
              }
              return this.isOptional;
            }),
            email
          },
          sellerMobileNum: {
            phoneNumber: {
              required: requiredUnless(() => {
                if (this.isOptional) {
                  this.homeInspectionOrderData.sellerInfo.sellerMobileNum.phoneNumber =
                    "";
                }
                return this.isOptional;
              }),
              numeric
            },
            countryCode: {
              required: requiredUnless(() => {
                if (this.isOptional) {
                  this.homeInspectionOrderData.sellerInfo.sellerMobileNum.countryCode =
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
      let selectedCountry = this.homeInspectionOrderData.country;
      this.dialingCodes.forEach(item => {
        if (item.country == selectedCountry) {
          dialingCode = item.code;
        }
      });
      this.homeInspectionOrderData.mobileNum1.countryCode = dialingCode;
      this.homeInspectionOrderData.mobileNum2.countryCode = dialingCode;
    },

    showEditHomeDescModal() {
      this.isEditQuoteHomeDescriptionVisible = true;
    },
    hideEditHomeDescModal() {
      this.isEditQuoteHomeDescriptionVisible = false;
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
      this.isOrderPlaced = true;

      this.homeInspectionOrderData.currency = this.orderQuote.price.currency;
      this.homeInspectionOrderData.amount = this.orderQuote.price.value;
      this.homeInspectionOrderData.quoteId = this.quoteId;
      // const homeInspectionOrderData = this.homeInspectionOrderData;

      //Update the quote with location info
      this.orderQuote.inspectedItemInfo.homeLocation = this.homeInspectionOrderData.inspectedItemInfo.homeLocation;
      axios.patch(`/quotes/myQuote/${this.quoteId}`, this.orderQuote);

      //Details for stripe
      const paymentDetails = {
        quoteId: this.orderQuote._id,
        customerEmail: this.orderQuote.email,
        successUrl: `${process.env.VUE_APP_FRONTEND_BASE_URL}/${this.$i18n.locale}/status/booking-successful`,
        cancelUrl: `${process.env.VUE_APP_FRONTEND_BASE_URL}/${this.$i18n.locale}/quotes/home-inspection-quote/${this.orderQuote._id}?paymentCanceled=true`,
        locale: setStripeLocale(this.$i18n.locale),
        orderDetails: [
          {
            name: this.$t("homeInspectionQuote.stripe.serviceName"),
            description: this.$t(
              "homeInspectionQuote.stripe.serviceDescription",
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
      updatedQuote.preOrderDetails = this.homeInspectionOrderData;
      await axios.patch(
        `/quotes/save_order_details/${this.quoteId}`,
        updatedQuote
      );

      //Get the stripe payment session from the backend
      axios
        .post("/orders/getStripeSession", paymentDetails)
        .then(res => {
          const session = res.data;
          const stripe = Stripe(process.env.VUE_APP_STRIPE_PUBLISHABLE_KEY);

          stripe.redirectToCheckout({ sessionId: session.id }).then(result => {
            this.cardError = result.error.message;
            // If `redirectToCheckout` fails due to a browser or network
            // error, display the localized error message to your customer
            // using `result.error.message`.
          });
        })
        .catch(error => {
          console.log(error.response);
        });
    },

    async onBlurHomeLocationStreet() {
      const address = `${this.homeInspectionOrderData.inspectedItemInfo.homeLocation} ${this.orderQuote.city} 
                       ${this.orderQuote.state} ${this.orderQuote.country} ${this.orderQuote.zipCode}`;
      const location = await getFinetunedLocationDetails(address);
      this.orderQuote.geoCoordinates = location.geoCoordinates;
      this.orderQuote.city = location.city;
      this.orderQuote.state = location.state;
      this.orderQuote.inspectedItemInfo.homeLocation = this.homeInspectionOrderData.inspectedItemInfo.homeLocation;
      this.orderQuote.cityTimeZoneId = location.timeZoneId;
      axios
        .patch(`/quotes/myQuote/${this.quoteId}`, this.orderQuote)
        .then(res => {
          this.orderQuote = res.data;
        });
    },

    getInvitationInfo() {
      if (this.orderQuote.invitationId) {
        //When the order was initiated by an invitation
        this.homeInspectionOrderData.inspectedItemInfo.homeLocation = this.orderQuote.inspectedItemInfo.homeLocation;
        this.homeInspectionOrderData.invitationId = this.orderQuote.invitationId;

        //Use the invitationId to get the seller's info
        const invitationId = this.orderQuote.invitationId;
        axios
          .get(`/order_invitation/get_invitation/${invitationId}`)
          .then(res => {
            const invitation = res.data;
            this.homeInspectionOrderData.sellerInfo.isSellerInfo = true;
            this.isOptional = false;
            this.homeInspectionOrderData.sellerInfo.customerSaySellerIsRefunding =
              invitation.hasSellerAgreedToRefund; //true or false
            this.homeInspectionOrderData.sellerInfo.hasSellerAgreedToRefund =
              invitation.hasSellerAgreedToRefund; //true or false
            if (invitation.hasSellerAgreedToRefund) {
              this.sellerSequenceId = invitation.sellerInfo.userSequenceId;
            }
            this.homeInspectionOrderData.sellerInfo.sellerFirstName =
              invitation.sellerInfo.firstName;
            this.homeInspectionOrderData.sellerInfo.sellerLastName =
              invitation.sellerInfo.lastName;
            this.homeInspectionOrderData.sellerInfo.sellerEmailId =
              invitation.sellerInfo.email;
            this.homeInspectionOrderData.sellerInfo.sellerMobileNum.countryCode =
              invitation.sellerInfo.mobile.countryCode;
            this.homeInspectionOrderData.sellerInfo.sellerMobileNum.phoneNumber =
              invitation.sellerInfo.mobile.phoneNumber;
          });
      }
    },

    async initializeData() {
      this.hearAboutUs = localStorage.getItem("howYouHeardAbout");
      const quoteId = this.quoteId;
      const res = await axios.get(`/quotes/get_quote/${quoteId}`);
      this.orderQuote = res.data;

      if (this.orderQuote.invitationId) {
        this.getInvitationInfo();
      }

      //Get the user info
      axios
        .get("/users/me")
        .then(res => {
          this.homeInspectionOrderData.firstName = res.data.firstName;
          this.homeInspectionOrderData.lastName = res.data.lastName;
          this.homeInspectionOrderData.email = res.data.email;
          this.homeInspectionOrderData.country = res.data.contactInfo.country;
          this.homeInspectionOrderData.city = res.data.contactInfo.city;
          this.homeInspectionOrderData.state = res.data.contactInfo.state;
          this.homeInspectionOrderData.addressLine1 =
            res.data.contactInfo.addressLine1;
          this.homeInspectionOrderData.addressLine2 =
            res.data.contactInfo.addressLine2;
          this.homeInspectionOrderData.zipCode = res.data.contactInfo.zipCode;
          this.homeInspectionOrderData.mobileNum1.countryCode =
            res.data.contactInfo.mobileNum1.countryCode;
          this.homeInspectionOrderData.mobileNum1.phoneNumber =
            res.data.contactInfo.mobileNum1.phoneNumber;
          this.homeInspectionOrderData.mobileNum2.countryCode =
            res.data.contactInfo.mobileNum2.countryCode;
          this.homeInspectionOrderData.mobileNum2.phoneNumber =
            res.data.contactInfo.mobileNum2.phoneNumber;
          this.getDialingCode();

          //When the redirected from a canceled checkout
          if (this.$route.query.paymentCanceled == "true") {
            this.homeInspectionOrderData = this.orderQuote.preOrderDetails;
            if (this.homeInspectionOrderData.sellerInfo.isSellerInfo == true) {
              this.isOptional = false;
            } else {
              this.isOptional = true;
            }
          }
        })
        .catch(error => {
          console.log(error.response);
        });

      setTimeout(() => {
        this.$router.replace("/");
      }, 1.8e6);

      this.windowResize();
      window.addEventListener("resize", this.windowResize);
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
        !this.homeInspectionOrderData.sellerInfo.sellerEmailId
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