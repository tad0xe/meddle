<template>
  <div>
    <div style="position: relative">
      <div v-if="isPageLoading">
        <LoadingPage
          style="left:0; right:0; top:0; bottom:0; position:absolute;"
          :style="{height: containerLeftHeight + 'px'}"
        ></LoadingPage>
      </div>
      <div v-if="!isPageLoading" class="body">
        <div>
          <h1>{{$t('inspectorProfile.title')}}</h1>
        </div>
        <div class="container1">
          <div class="containertop-right">
            <div class="photo-container">
              <div>
                <picture-input
                  ref="avatar"
                  @change="onChange"
                  @remove="onRemoveAvatar"
                  width="220"
                  height="220"
                  margin="0"
                  accept="image/jpeg, image/png"
                  size="1"
                  :removable="true"
                  buttonClass="upload-btn"
                  removeButtonClass="remove-btn"
                  :zIndex="1"
                  :prefill="avatar"
                  :prefillOptions="{mediaType: 'image/png' }"
                  :customStrings="setProfilePicCustomStrings()"
                  :key="profilePictureKey"
                ></picture-input>
              </div>
              <span>{{$t("generic.profilePicture.maxPicSize")}}</span>
            </div>
          </div>
          <div class="containertop-left">
            <div class="containertop-left-header">{{$t("inspectorProfile.verifiedInfo.title")}}</div>
            <div class="inline-text">
              <label>{{$t("inspectorProfile.verifiedInfo.govtId")}}</label>
              <div v-if="inspectorInfo.isIdVerified">
                <i class="fa fa-check-circle"></i>
              </div>
              <div
                v-if="!inspectorInfo.isBackgroundChecked"
                class="not-verified"
              >{{$t("inspectorProfile.verifiedInfo.notVerified")}}</div>
            </div>
            <div class="inline-text">
              <label>{{$t("inspectorProfile.verifiedInfo.professionalBackground")}}</label>
              <div v-if="inspectorInfo.isBackgroundChecked">
                <i class="fa fa-check-circle"></i>
              </div>
              <div
                v-if="!inspectorInfo.isBackgroundChecked"
                class="not-verified"
              >{{$t("inspectorProfile.verifiedInfo.notVerified")}}</div>
            </div>
            <div class="inline-text">
              <label>{{$t("inspectorProfile.verifiedInfo.personalBackground")}}</label>
              <div v-if="inspectorInfo.isBackgroundChecked">
                <i class="fa fa-check-circle"></i>
              </div>
              <div
                v-if="!inspectorInfo.isBackgroundChecked"
                class="not-verified"
              >{{$t("inspectorProfile.verifiedInfo.notVerified")}}</div>
            </div>
            <!-- <div class="inline-text">
              <span>References</span>
              <span v-if="inspectorInfo.isIdVerified"><i class="fa fa-check-circle"></i></span>
            </div>-->
          </div>
        </div>
        <div class="container2">
          <div class="section1">
            <div>
              <h2>{{$t('inspectorProfile.generalInfo.title')}}</h2>
            </div>
            <br />
            <big>
              <div class="row">
                <div class="column">
                  <div class="flex-grow">
                    <strong>{{inspectorInfo.personalInfo.firstName}} {{inspectorInfo.personalInfo.lastName}}</strong>
                  </div>
                  <button
                    type="button"
                    class="edit-btn"
                    @click="onClickEditSensitive('names')"
                  >{{$t('buttons.edit')}}</button>
                </div>
              </div>
              <div class="row">
                <div class="column">
                  <div class="flex-grow">
                    <strong>
                      {{$t('inspectorProfile.generalInfo.company')}}:{{inspectorInfo.personalInfo.nameOfCompany}}
                      <span
                        v-if="inspectorInfo.personalInfo.companyRegNum"
                      >{{`#${inspectorInfo.personalInfo.companyRegNum}`}}</span>
                    </strong>
                  </div>
                  <button
                    type="button"
                    class="edit-btn"
                    @click="onClickEditSensitive('companyInfo')"
                  >{{$t('buttons.edit')}}</button>
                </div>
              </div>
            </big>
            <div class="row">
              <div class="column">
                <div class="star_rating">
                  <div>
                    <star-rating
                      :show-rating="false"
                      :increment="0.1"
                      :star-size="19"
                      :read-only="true"
                      :padding="5"
                      v-model="inspectorInfo.averageCustomerRating.overallRating"
                      :max-rating="5"
                    ></star-rating>
                  </div>
                  <div>&nbsp;{{inspectorInfo.averageCustomerRating.overallRating}}</div>
                </div>
              </div>
            </div>
            <small>
              <div class="row">
                <div class="column">
                  <strong>{{$tc('inspectorProfile.generalInfo.customerReviews', inspectorReviews.length, {count: inspectorReviews.length})}}</strong>
                </div>
              </div>
              <div class="row">
                <div class="column">
                  <span class="flex-grow">
                    <strong>{{$tc('inspectorProfile.generalInfo.jobsCompleted', numberOfJobsDone, {count: numberOfJobsDone})}}</strong>
                  </span>
                </div>
              </div>
              <div class="column">
                <span class="spaced">{{$tc('inspectorProfile.generalInfo.languages')}}:</span>
                <span class="flex-grow" v-if="inspectorInfo.languageProficiency != null">
                  <ul
                    v-for="(languageObj, index) in inspectorInfo.languageProficiency"
                    :key="index"
                  >
                    <li>
                      <strong>{{translateValue(languageObj.language, $t("languageProficiency.languageTypes") )}} ({{translateValue(languageObj.proficiency, $t('languageProficiency.proficiencyTypes')) }})</strong>
                    </li>
                  </ul>
                </span>
                <button
                  type="button"
                  class="edit-btn"
                  @click="showLanguageProficiencyModal()"
                >{{$t('buttons.edit')}}</button>
              </div>
              <div class="row">
                <div class="column">
                  <span class="spaced">{{$tc('inspectorProfile.generalInfo.typeOfInspection')}}:</span>
                  <span class="flex-grow">
                    <strong>{{inspectorInfo.typeOfInspector}} {{$tc('generic.inspection')}}</strong>
                  </span>
                </div>
              </div>
              <div class="row">
                <div class="column">
                  <span class="spaced">{{$tc('inspectorProfile.generalInfo.totalYearsOfExp')}}:</span>
                  <span class="flex-grow">
                    <strong>{{inspectorInfo.areaOfSpecialization.totalYearsOfExp}}</strong>
                  </span>
                  <button
                    type="button"
                    class="edit-btn"
                    @click="onClickEditSensitive('vehicleSpecialization')"
                  >{{$t('buttons.edit')}}</button>
                </div>
              </div>
              <div class="row" v-if="inspectorInfo.typeOfInspector == 'Vehicle'">
                <div class="column">
                  <span class="spaced">{{$tc('inspectorProfile.generalInfo.areaOfSpecialization')}}:</span>
                  <span
                    class="flex-grow"
                    v-if="inspectorInfo.areaOfSpecialization.vehicleSpecializations"
                  >
                    <ul
                      v-for="(vehicleObj, index) in inspectorInfo.areaOfSpecialization.vehicleSpecializations"
                      :key="index"
                    >
                      <li>
                        <strong>
                          {{vehicleObj.vehicleType}} - {{vehicleObj.yearsOfVehicleExp}}
                          {{$tc('inspectorProfile.generalInfo.yearsOfExp')}}
                        </strong>
                      </li>
                    </ul>
                  </span>
                  <button
                    type="button"
                    class="edit-btn"
                    @click="onClickEditSensitive('vehicleSpecialization')"
                  >{{$t('buttons.edit')}}</button>
                </div>
              </div>
              <div class="row">
                <div class="column" v-if="inspectorInfo.typeOfInspector == 'Vehicle'">
                  <span class="spaced">{{$tc('inspectorProfile.generalInfo.brandSpecialization')}} :</span>
                  <span
                    class="flex-grow"
                    v-if="inspectorInfo.areaOfSpecialization.brandSpecializations"
                  >
                    <ul
                      v-for="(vehicleObj, index) in inspectorInfo.areaOfSpecialization.brandSpecializations"
                      :key="index"
                    >
                      <li>
                        <strong>
                          {{vehicleObj.brandType}} - {{vehicleObj.yearsOfBrandExp}}
                          {{$tc('inspectorProfile.generalInfo.yearsOfExp')}}
                        </strong>
                      </li>
                    </ul>
                  </span>
                  <button
                    type="button"
                    class="edit-btn"
                    @click="onClickEditSensitive('vehicleSpecialization')"
                  >{{$t('buttons.edit')}}</button>
                </div>
              </div>
              <div class="row" v-if="inspectorInfo.typeOfInspector == 'Home'">
                <div class="column">
                  <span class="spaced">{{$tc('inspectorProfile.generalInfo.areaOfSpecialization')}}:</span>
                  <span
                    class="flex-grow"
                    v-if="inspectorInfo.areaOfSpecialization.homeInspectionSpecializations"
                  >
                    <ul
                      v-for="(homeObj, index) in inspectorInfo.areaOfSpecialization.homeInspectionSpecializations"
                      :key="index"
                    >
                      <li>
                        <strong>
                          {{homeObj.specializationType + " " }} - {{homeObj.yearsOfSpecializationExp}}
                          {{$tc('inspectorProfile.generalInfo.yearsOfExp')}}
                        </strong>
                      </li>
                    </ul>
                  </span>
                  <button
                    type="button"
                    class="edit-btn"
                    @click="onClickEditSensitive('homeSpecialization')"
                  >{{$t('buttons.edit')}}</button>
                </div>
              </div>
              <div class="row">
                <div class="column">
                  <span class="spaced">{{$tc('inspectorProfile.generalInfo.noOfJobsDone')}}:</span>
                  <span class="flex-grow">
                    <strong>{{numberOfJobsDone}}</strong>
                  </span>
                </div>
              </div>
              <div class="row">
                <div class="column">
                  <span class="spaced">{{$tc('inspectorProfile.generalInfo.repeatClients')}}:</span>
                  <span class="flex-grow">
                    <strong>{{numberOfRepeatCustomers}}</strong>
                  </span>
                </div>
              </div>
              <div class="row">
                <div class="column">
                  <span class="spaced">{{$tc('generic.country')}}:</span>
                  <span class="flex-grow">
                    <strong>{{inspectorInfo.personalInfo.country}}</strong>
                  </span>
                </div>
              </div>
              <div class="row">
                <div class="column">
                  <span class="spaced">{{$tc('generic.state')}}:</span>
                  <span class="flex-grow">
                    <strong>{{inspectorInfo.personalInfo.state}}</strong>
                  </span>
                  <button
                    type="button"
                    class="edit-btn"
                    @click="onClickEditSensitive('addressInfo')"
                  >{{$t('buttons.edit')}}</button>
                </div>
              </div>
              <div class="row">
                <div class="column">
                  <span class="spaced">{{$tc('generic.city')}}:</span>
                  <span class="flex-grow">
                    <strong>{{inspectorInfo.personalInfo.city}}</strong>
                  </span>
                </div>
              </div>
              <div class="row">
                <div class="column">
                  <span class="spaced">{{$tc('generic.address')}}:</span>
                  <span class="flex-grow">
                    <strong>
                      {{inspectorInfo.personalInfo.addressLine1}},
                      {{inspectorInfo.personalInfo.addressLine2}},
                      {{inspectorInfo.personalInfo.city}},
                      {{inspectorInfo.personalInfo.state}}
                      {{inspectorInfo.personalInfo.zipCode}}
                    </strong>
                  </span>
                  <button
                    type="button"
                    class="edit-btn max"
                    @click="onClickEditSensitive('addressInfo')"
                  >{{$t('buttons.edit')}}</button>
                </div>
              </div>
            </small>
            <br />
            <div class="row">
              <div class="workarea-left">
                {{$t('inspectorProfile.generalInfo.workAreaRadius')}}
                <br />
                <small>{{inspectorInfo.personalInfo.city}}</small>
              </div>
              <div class="workarea-right">
                <button type="button" class="minus-btn" @click="decWorkArea">-</button>
                <strong>{{inspectorInfo.personalInfo.workArea.value}}</strong>
                {{$t('generic.of')}}
                <span
                  v-if="inspectorInfo.personalInfo.workArea.unit == 'km'"
                >80</span>
                <span v-if="inspectorInfo.personalInfo.workArea.unit == 'miles'">50</span>
                <span>
                  <select v-model="inspectorInfo.personalInfo.workArea.unit">
                    <option value="km">km</option>
                    <option value="miles">miles</option>
                  </select>
                </span>
                <button type="button" class="plus-btn" @click="incWorkArea">+</button>
                <button type="button" class="save-btn" @click="onSubmit">{{$t('buttons.save')}}</button>
              </div>
            </div>
            <br />
            <div class="row">
              <center>
                <gmap-map
                  :center="inspectorInfo.personalInfo.geoCoordinates"
                  :zoom="7"
                  :options="{ gestureHandling: 'none', wheelCOntrol: false}"
                  style="width:100%;  height: 400px;"
                >
                  <gmap-marker :position="inspectorInfo.personalInfo.geoCoordinates"></gmap-marker>
                  <gmap-circle
                    :center="inspectorInfo.personalInfo.geoCoordinates"
                    :radius="calcAreaRadiusInMeters"
                    :visible="true"
                    :options="{fillColor:'blue',fillOpacity:0.5,strokeOpacity: 0.5, strokeWeight: 2}"
                  ></gmap-circle>
                </gmap-map>
              </center>
            </div>
            <br />
          </div>
          <div class="section2">
            <div>
              <h2>{{$t('generic.professionalInfo')}}</h2>
            </div>
            <br />
            <div class="row">
              <div class="column">
                <div class="spaced">
                  <h3>{{$t('generic.languages')}}</h3>
                </div>
                <span class="flex-grow" v-if="inspectorInfo.languageProficiency != null">
                  <ul
                    v-for="(languageObj, index) in inspectorInfo.languageProficiency"
                    :key="index"
                  >
                    <li>
                      <strong>{{translateValue(languageObj.language, $t("languageProficiency.languageTypes"))}} ({{translateValue(languageObj.proficiency, $t('languageProficiency.proficiencyTypes')) }})</strong>
                    </li>
                  </ul>
                </span>
                <button
                  type="button"
                  class="edit-btn"
                  @click="showLanguageProficiencyModal()"
                >{{$t('buttons.edit')}}</button>
              </div>
            </div>
            <div class="row">
              <div class="column" v-if="inspectorInfo.proCerts != null">
                <div class="spaced">
                  <h3>{{$t('generic.certification')}}</h3>
                </div>
                <div class="flex-grow">
                  <ul v-for="(procertObj, index) in inspectorInfo.proCerts" :key="index">
                    <li>
                      <strong>{{procertObj.certName}}, {{procertObj.certAuthority}}</strong>
                      <small>
                        <a class="link">
                          <u>{{$t('generic.certUrl')}}</u>
                        </a>
                        <br />
                        {{procertObj.certNum}}&nbsp;&nbsp;&#8226;&nbsp;&nbsp;
                        {{procertObj.validFrom | showOnlyMonthAndYear}}&nbsp;-&nbsp;{{procertObj.validFrom | showOnlyMonthAndYear}}
                      </small>
                    </li>
                  </ul>
                </div>
                <button
                  type="button"
                  class="edit-btn"
                  @click="onClickEditSensitive('certifications')"
                >{{$t('buttons.edit')}}</button>
              </div>
            </div>
            <div class="row">
              <div class="column">
                <div class="spaced">
                  <h3>Education</h3>
                </div>
                <div class="flex-grow" v-if="inspectorInfo.educations != null">
                  <ul v-for="(educationObj, index) in inspectorInfo.educations" :key="index">
                    <li>
                      <strong>{{educationObj.nameOfInstitution}}</strong>,
                      <small>
                        <strong>{{educationObj.educationType | toCapitalizeFirstLetter}}</strong>
                        <br />
                        &#8226;&nbsp;&nbsp;{{educationObj.gradYear | showOnlyMonthAndYear}}
                      </small>
                    </li>
                  </ul>
                </div>
                <button
                  type="button"
                  class="edit-btn"
                  @click="onClickEditSensitive('education')"
                >{{$t('buttons.edit')}}</button>
              </div>
            </div>
          </div>
        </div>
        <div class="container3">
          <div>
            <h2>{{$t('inspectorProfile.customerReviews.title')}}</h2>
          </div>
          <div
            class="review-content"
            v-if="!inspectorReviews.length"
          >{{$t('inspectorProfile.customerReviews.noReviewsYet')}}</div>
          <div class="container3-content" v-else>
            <div
              class="review-content"
              v-for="(ratingObj, index) in inspectorReviews"
              :key="index"
              :ref="hideSeeMoreAndShowLessBtn(index)"
            >
              <div class="customer-rating">
                <h3>{{ratingObj.customerFullName}}</h3>
                <div class="star_rating">
                  <div>
                    <star-rating
                      :show-rating="false"
                      :increment="0.1"
                      :star-size="19"
                      :read-only="true"
                      :padding="5"
                      v-model="ratingObj.customerFeedback.overallRating"
                    ></star-rating>
                  </div>
                  <div>&nbsp;{{ratingObj.customerFeedback.overallRating}}</div>
                </div>
              </div>
              <!-- <p>{{ratingObj.customerFeedback.comment}}</p> -->
              <div class="flex-column">
                <div class="flex-grow">
                  <div
                    class="outer-text-width"
                    :style="{width: maxCustomerFeedbackCommentLength + 'px'}"
                    ref="outerTextWidth"
                  >
                    <span ref="getInnerTextWidth">{{ratingObj.customerFeedback.comment}}</span>
                  </div>
                  <!-- check: {{ratingObj.customerFeedback.showLongComment}}
                  <button
                    @click="ratingObj.customerFeedback.showLongComment=!ratingObj.customerFeedback.showLongComment"
                    type="button"
                  >Click</button>-->
                  <div v-if="ratingObj.customerFeedback.hideSeeMoreAndShowLess">
                    <span
                      v-if="ratingObj.customerFeedback.showLongComment == true"
                      class="see-less"
                      @click="showLess(index), ratingObj.customerFeedback.showLongComment=!ratingObj.customerFeedback.showLongComment"
                    >Show less</span>
                    <span
                      v-if="ratingObj.customerFeedback.showLongComment == false"
                      class="see-more"
                      @click="seeMore(index), ratingObj.customerFeedback.showLongComment=!ratingObj.customerFeedback.showLongComment"
                    >See more</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="see-more-reviews" style="position: relative">
              <span
                v-if="!isSeeMoreReviewsLoaded && hideSeeMoreReviews"
                @click="seeMoreReviews()"
              >{{$t('inspectorProfile.customerReviews.seeMore')}}</span>
              <div v-if="isSeeMoreReviewsLoaded">
                <LoadingPage
                  style="left:0; right:0; top:0; bottom:0; position:absolute;"
                  :width="16"
                  :height="16"
                  :borderWidth="2"
                  :background="'none'"
                ></LoadingPage>
              </div>
            </div>
          </div>
        </div>
        <EditWarningToInspector
          v-if="isEditWarningToInspectorVisible"
          @close="hideEditWarningToInspectorModal()"
          :editType="editType"
          @clickYes="showSpecificEditModal"
        ></EditWarningToInspector>
        <EditNames v-if="isEditNamesVisible" @confirm="onSubmitChanges" @close="hideEditNamesModal"></EditNames>
        <EditCompanyInfo
          v-if="isEditCompanyInfoVisible"
          @confirm="onSubmitChanges"
          :editType="editType"
          @close="hideEditCompanyInfoModal"
        ></EditCompanyInfo>
        <EditVehicleSpecialization
          v-if="isEditVehicleSpecializationVisible"
          @confirm="onSubmitChanges"
          @close="hideEditVehicleSpecializationModal"
        ></EditVehicleSpecialization>
        <EditHomeSpecialization
          v-if="isEditHomeSpecializationVisible"
          @confirm="onSubmitChanges"
          @close="hideEditHomeSpecializationModal"
        ></EditHomeSpecialization>
        <EditAddressInfo
          v-if="isEditAddressInfoVisible"
          @confirm="onSubmitChanges"
          @close="hideEditAddressInfoModal"
        ></EditAddressInfo>
        <EditLanguageProficiency
          v-if="isEditLanguageProficiencyVisible"
          @confirm="onSubmitChanges"
          @close="hideLanguageProficiencyModal"
        ></EditLanguageProficiency>
        <EditCertifications
          v-if="isEditCertificationsVisible"
          @confirm="onSubmitChanges"
          @close="hideEditCertificationsModal"
        ></EditCertifications>
        <EditEducation
          v-if="isEditEducationVisible"
          @confirm="onSubmitChanges"
          @close="hideEditEducationModal"
        ></EditEducation>
      </div>
    </div>
  </div>
</template>

<script>
import LoadingPage from "../../loadingComponents/LoadingPage";
import StarRating from "vue-star-rating";
import PictureInput from "vue-picture-input";
import { mapActions, mapState, mapGetters, mapMutations } from "vuex";
import axios from "axios";
import EditWarningToInspector from "../../modals/inspectorProfiles/EditWarningToInspector.vue";
import EditNames from "../../modals/inspectorProfiles/generalEditTemplates/EditNames.vue";
import EditCompanyInfo from "../../modals/inspectorProfiles/generalEditTemplates/EditCompanyInfo.vue";
import EditVehicleSpecialization from "../../modals/inspectorProfiles/vehicleInspectorEditTemplates/EditVehicleSpecialization.vue";
import EditAddressInfo from "../../modals/inspectorProfiles/generalEditTemplates/EditAddressInfo.vue";
import EditLanguageProficiency from "../../modals/inspectorProfiles/generalEditTemplates/EditLanguageProficiency.vue";
import EditCertifications from "../../modals/inspectorProfiles/vehicleInspectorEditTemplates/EditCertifications.vue";
import EditEducation from "../../modals/inspectorProfiles/generalEditTemplates/EditEducation.vue";
import EditHomeSpecialization from "../../modals/inspectorProfiles/homeInspectorEditTemplates/EditHomeSpecialization.vue";
import { translateValue } from "../../../utility";

export default {
  components: {
    LoadingPage,
    StarRating,
    PictureInput,
    EditWarningToInspector,
    EditNames,
    EditCompanyInfo,
    EditVehicleSpecialization,
    EditAddressInfo,
    EditLanguageProficiency,
    EditCertifications,
    EditEducation,
    EditHomeSpecialization
  },
  props: ["containerLeftHeight"],
  data() {
    return {
      isPageLoading: true,
      avatar: "",
      inspectorInfo: {},
      numberOfRepeatCustomers: "",
      numberOfJobsDone: "",
      inspectorReviews: [],
      translateValue,
      editType: "",
      isEditWarningToInspectorVisible: false,
      isEditNamesVisible: false,
      isEditCompanyInfoVisible: false,
      isEditVehicleSpecializationVisible: false,
      isEditHomeSpecializationVisible: false,
      isEditAddressInfoVisible: false,
      isEditLanguageProficiencyVisible: false,
      isEditCertificationsVisible: false,
      isEditEducationVisible: false,
      numberOfDisplayedReviews: 5,
      hideSeeMoreReviews: true,
      isSeeMoreReviewsLoaded: false,
      maxCustomerFeedbackCommentLength: 260,
      profilePictureKey: 0
    };
  },
  watch: {
    "inspectorInfo.personalInfo.workArea.unit"(val) {
      if (val == "km") {
        //Check if the personalInfo.workArea.value is less than or more than the limit
        if (this.inspectorInfo.personalInfo.workArea.value < 48) {
          this.inspectorInfo.personalInfo.workArea.value = 48;
        }
      }
      if (val == "miles") {
        if (this.inspectorInfo.personalInfo.workArea.value > 50) {
          this.inspectorInfo.personalInfo.workArea.value = 50;
        }
      }
    },
    "$i18n.locale"(to, fro) {
      this.profilePictureKey++; //To force a re-render of the component
    }
  },
  computed: {
    getInspectorInfo: {
      get: function() {
        if (this.$store.getters.inspectorInfo) {
          return this.$store.getters.inspectorInfo;
        }
      }
    },
    getInspectorReviews: {
      get: function() {
        if (this.$store.getters.inspectorReviews) {
          return this.$store.getters.inspectorReviews;
        }
      },
      set: function(newValue) {
        this.inspectorReviews = newValue;
      }
    },
    getAvatar() {
      return this.$store.getters.getAvatar;
    },
    calcAreaRadiusInMeters() {
      if (this.inspectorInfo.personalInfo.workArea.unit == "miles") {
        return this.inspectorInfo.personalInfo.workArea.value * 1.60934 * 1000;
      } else {
        return this.inspectorInfo.personalInfo.workArea.value * 1000;
      }
    }
  },
  methods: {
    setProfilePicCustomStrings() {
      const profilePicCustomString = {
        drag: `${this.$t("generic.profilePicture.dragAndDrop")}`,
        change: `${this.$t("buttons.changePhoto")}`,
        remove: `${this.$t("buttons.removePhoto")}`
      };
      return profilePicCustomString;
    },
    hideSeeMoreAndShowLessBtn(index) {
      this.$nextTick(() => {
        if (
          this.$refs.getInnerTextWidth[index].offsetWidth >
          this.maxCustomerFeedbackCommentLength
        ) {
          this.inspectorReviews[
            index
          ].customerFeedback.hideSeeMoreAndShowLess = true;
        }
      });
    },

    showLess(index) {
      this.$refs.outerTextWidth[index].style.whiteSpace = "nowrap";
      this.$refs.outerTextWidth[index].style.width =
        this.maxCustomerFeedbackCommentLength + "px";
    },

    seeMore(index) {
      this.$refs.outerTextWidth[index].style.whiteSpace = "normal";
      this.$refs.outerTextWidth[index].style.width = "100%";
    },

    onChange(avatar) {
      if (avatar) {
        let formData = new FormData();
        formData.append("avatar", avatar);
        axios
          .post("/users/myAvatar", formData)
          .then(res => {
            this.$store.dispatch("fetchUserAvatar");
          })
          .catch(error => console.log(error.response));
      } else {
        throw new Error();
      }
    },

    onRemoveAvatar() {
      this.$store.dispatch("removeUserAvatar");
    },

    onSubmit() {
      return axios
        .patch("/inspector_infos/me", this.inspectorInfo)
        .then(res => {
          console.log(res);
        })
        .catch(error => {
          console.log(error.response);
        });
    },

    onClickEditSensitive(editType) {
      this.isEditWarningToInspectorVisible = true;
      this.editType = editType;
    },

    showSpecificEditModal(value) {
      this.hideEditWarningToInspectorModal();
      if (this.editType == "names") {
        this.isEditNamesVisible = true;
      } else if (this.editType == "companyInfo") {
        this.isEditCompanyInfoVisible = true;
      } else if (this.editType == "vehicleSpecialization") {
        this.isEditVehicleSpecializationVisible = true;
      } else if (this.editType == "homeSpecialization") {
        this.isEditHomeSpecializationVisible = true;
      } else if (this.editType == "addressInfo") {
        this.isEditAddressInfoVisible = true;
      } else if (this.editType == "certifications") {
        this.isEditCertificationsVisible = true;
      } else if (this.editType == "education") {
        this.isEditEducationVisible = true;
      }
    },

    showLanguageProficiencyModal() {
      this.isEditLanguageProficiencyVisible = true;
      this.editType = "language";
    },

    onSubmitChanges(value) {
      if (this.editType == "names") {
        this.inspectorInfo.personalInfo.firstName = value.firstName;
        this.inspectorInfo.personalInfo.lastName = value.lastName;
        this.onSubmit().then(res => {
          this.isEditNamesVisible = false;
        });
      } else if (this.editType == "companyInfo") {
        this.inspectorInfo.personalInfo.nameOfCompany = value.nameOfCompany;
        this.inspectorInfo.personalInfo.companyRegNum = value.companyRegNum;
        this.onSubmit().then(res => {
          this.isEditCompanyInfoVisible = false;
        });
      } else if (this.editType == "vehicleSpecialization") {
        this.inspectorInfo.areaOfSpecialization = value.areaOfSpecialization;
        this.onSubmit().then(res => {
          this.isEditVehicleSpecializationVisible = false;
        });
      } else if (this.editType == "homeSpecialization") {
        this.inspectorInfo.areaOfSpecialization = value.areaOfSpecialization;
        this.onSubmit().then(res => {
          this.isEditHomeSpecializationVisible = false;
        });
      } else if (this.editType == "addressInfo") {
        this.inspectorInfo.personalInfo.country = value.country;
        this.inspectorInfo.personalInfo.state = value.state;
        this.inspectorInfo.personalInfo.city = value.city;
        this.inspectorInfo.personalInfo.zipCode = value.zipCode;
        this.inspectorInfo.personalInfo.country = value.country;
        this.inspectorInfo.personalInfo.addressLine1 = value.addressLine1;
        this.inspectorInfo.personalInfo.addressLine2 = value.addressLine2;
        this.inspectorInfo.personalInfo.geoCoordinates = value.geoCoordinates;
        this.onSubmit().then(res => {
          this.hideEditAddressInfoModal();
        });
      } else if (this.editType == "language") {
        this.inspectorInfo.languageProficiency = value.languageProficiency;
        this.onSubmit().then(res => {
          this.hideLanguageProficiencyModal();
        });
      } else if (this.editType == "certifications") {
        this.inspectorInfo.proCerts = value.proCerts;
        this.onSubmit().then(res => {
          this.hideEditCertificationsModal();
        });
      } else if (this.editType == "education") {
        this.inspectorInfo.educations = value.educations;
        this.onSubmit().then(res => {
          this.hideEditEducationModal();
        });
      }
    },

    hideEditWarningToInspectorModal() {
      this.isEditWarningToInspectorVisible = false;
    },

    hideEditNamesModal() {
      this.isEditNamesVisible = false;
    },
    hideEditCompanyInfoModal() {
      this.isEditCompanyInfoVisible = false;
    },
    hideEditVehicleSpecializationModal() {
      this.isEditVehicleSpecializationVisible = false;
    },
    hideEditHomeSpecializationModal() {
      this.isEditHomeSpecializationVisible = false;
    },
    hideEditAddressInfoModal() {
      this.isEditAddressInfoVisible = false;
    },
    hideLanguageProficiencyModal() {
      this.isEditLanguageProficiencyVisible = false;
    },
    hideEditCertificationsModal() {
      this.isEditCertificationsVisible = false;
    },
    hideEditEducationModal() {
      this.isEditEducationVisible = false;
    },
    incWorkArea() {
      this.inspectorInfo.personalInfo.workArea.value++;
      //For miles
      if (this.inspectorInfo.personalInfo.workArea.unit == "miles") {
        if (this.inspectorInfo.personalInfo.workArea.value > 50) {
          this.decWorkArea();
        }
      }

      //For km
      if (this.inspectorInfo.personalInfo.workArea.unit == "km") {
        if (this.inspectorInfo.personalInfo.workArea.value > 80) {
          this.decWorkArea();
        }
      }
    },
    decWorkArea() {
      this.inspectorInfo.personalInfo.workArea.value--;
      //For miles
      if (this.inspectorInfo.personalInfo.workArea.unit == "miles") {
        if (this.inspectorInfo.personalInfo.workArea.value < 30) {
          this.incWorkArea();
        }
      }
      //For km
      if (this.inspectorInfo.personalInfo.workArea.unit == "km") {
        if (this.inspectorInfo.personalInfo.workArea.value < 48) {
          this.incWorkArea();
        }
      }
    },

    fetchMyReviews() {
      this.$store
        .dispatch("fetchInspectorReviews", this.numberOfDisplayedReviews)
        .then(res => {
          this.inspectorReviews = this.getInspectorReviews;
          this.isSeeMoreReviewsLoaded = false;
        });
    },

    seeMoreReviews() {
      this.isSeeMoreReviewsLoaded = true;
      this.numberOfDisplayedReviews = this.numberOfDisplayedReviews + 5;
      this.fetchMyReviews();
      if (this.numberOfDisplayedReviews > this.inspectorReviews.length) {
        this.hideSeeMoreReviews = false;
      }
    }
  },

  created() {
    // this.$store.dispatch("fetchInspectorInfo");
    this.fetchMyReviews();
    this.$store.dispatch("fetchUserAvatar").then(() => {
      this.avatar = this.getAvatar;
    });

    axios
      .get("/inspector_infos/me")
      .then(res => {
        this.inspectorInfo = res.data;
        this.numberOfRepeatCustomers = res.data.numberOfRepeatCustomers;
        this.numberOfJobsDone = res.data.numberOfJobsDone;
        this.isPageLoading = false;
      })
      .catch(error => console.log(error));
  }
};
</script>

<style>
.upload-btn,
.remove-btn {
  color: white;
  padding: 6px 8px;
  outline: none;
  border: none;
  cursor: pointer;
  font-size: 12px;
  text-align: center;
  border-radius: 3px;
  opacity: 0.9;
}

.upload-btn {
  background-color: #007bff;
}

.remove-btn {
  background-color: #6c757d;
}

.upload-btn:hover,
.remove-btn:hover {
  opacity: 1;
}
</style>

<style scoped>
* {
  box-sizing: border-box;
}

.body {
  font-family: Arial, Helvetica, sans-serif;
  padding-bottom: 20px;
  border-radius: 5px;
  border: 1px solid #b6b1b1;
  width: 100%;
  background-color: white;
  display: inline-block;
}

.outer-text-width {
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

h1 {
  color: #212259;
  padding: 25px 30px;
  font-size: 26px;
  border-bottom: 1px solid #b6b1b1;
}

h2 {
  color: #212259;
  padding-top: 25px;
  padding-bottom: 25px;
  font-size: 21px;
  border-bottom: 1px solid #b6b1b1;
}

h3 {
  font-size: 17px;
}

.review-content h3 {
  color: #212259;
}

ul {
  padding-left: 16px;
  padding-bottom: 10px;
}

.spaced {
  min-width: 230px;
  max-width: 230px;
}

.containertop-left-header {
  color: #212259;
  font-weight: bold;
  font-size: 21px;
  padding: 20px 15px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border: 1px solid #b6b1b1;
  width: 100%;
  display: block;
}

.container3-header {
  color: darkorange;
  border-bottom: 1px solid #b6b1b1;
}

.container1 {
  display: flex;
  flex-direction: row-reverse;
  margin-top: 40px;
  margin-bottom: 20px;
  width: 100%;
}

.containertop-left {
  width: 100%;
  padding-left: 30px;
  display: inline-block;
}

.inline-text {
  padding: 16px 15px;
  color: #212259;
  font-weight: bold;
  font-size: 15px;
  width: 100%;
  border-left: 1px solid #b6b1b1;
  border-right: 1px solid #b6b1b1;
  border-bottom: 1px solid #b6b1b1;
  align-items: center;
  display: flex;
}

.inline-text:last-child {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}

.inline-text label {
  flex: 1;
  display: block;
  line-height: 22px;
}

.inline-text i {
  font-size: 22px;
  margin-left: 5px;
}

.not-verified {
  font-size: 12px;
  margin-left: 5px;
  color: red;
}

.containertop-right {
  display: inline-block;
  width: 100%;
}

.container3 {
  display: inline-block;
  width: 100%;
  border-top: 1px solid #b6b1b1;
}

.photo-container {
  padding: 20px;
  padding-top: 0px;
  color: #212259;
  width: 100%;
}

.photo-container span {
  margin-top: 10px;
  text-align: center;
  font-size: 11px;
  color: black;
  display: block;
}

.section1,
.section2,
.container3 {
  padding-left: 30px;
  padding-right: 30px;
}

.containertop-left,
.container3-content {
  display: inline-block;
  width: 100%;
}

.container2 {
  display: inline-block;
  width: 100%;
  border-top: 1px solid #b6b1b1;
}

.section1 {
  border-bottom: 1px solid #b6b1b1;
}

.section2 {
  padding-bottom: 20px;
}

.section1 small {
  font-size: 15px;
}

.section1 big {
  font-size: 18px;
}

.section2-header {
  border-bottom: 1px solid #b6b1b1;
}

select {
  margin-left: 6px;
  margin-right: 8px;
  padding: 2px 5px;
  border-radius: 2px;
  outline: none;
  border: 1px solid #ccc;
  background-color: aliceblue;
}

select:hover {
  border: 1px solid #212259;
  background-color: rgb(232, 240, 254);
}

.plus-btn,
.minus-btn {
  font-size: 13px;
  font-weight: bold;
  padding: 1px 5px;
  background-color: #ea7601;
  color: white;
  cursor: pointer;
  outline: none;
  border-radius: 3px;
  border: solid;
  border-color: #ed6502 #a04300 #a04300 #ed6502;
  opacity: 0.9;
}

.minus-btn {
  margin-right: 5px;
  padding: 1px 6.4px;
}

.plus-btn:hover,
.minus-btn:hover {
  opacity: 1;
}

.plus-btn:active,
.minus-btn:active {
  opacity: 0.95;
  border-color: #a04300 #ed6502 #ed6502 #a04300;
}

.edit-btn,
.save-btn {
  color: white;
  cursor: pointer;
  min-width: 44px;
  height: 22px;
  text-align: center;
  border-radius: 4px;
  outline: none;
  border: none;
  font-size: 12px;
}

.edit-btn {
  background-color: rgb(2, 167, 240);
  border: 1.6px solid rgb(2, 167, 240);
}

.edit-btn:hover {
  color: rgb(2, 167, 240);
  background-color: white;
}

.save-btn {
  margin-left: 15px;
  background-color: #07b9dd;
  border: 1.6px solid #07b9dd;
}

.save-btn:hover {
  color: #07b9dd;
  background-color: white;
}

.workarea-left {
  float: left;
}

.workarea-left small {
  font-size: 12px;
}

.workarea-right {
  float: right;
}

.review-content {
  padding-top: 20px;
  padding-bottom: 20px;
  width: 100%;
  border-bottom: 1px solid #b6b1b1;
  display: inline-block;
}

.customer-rating {
  width: 100%;
  display: inline-block;
}

.star_rating {
  font-weight: bold;
  align-items: center;
  display: flex;
}

.customer-rating .star_rating {
  padding-top: 10px;
  padding-bottom: 7px;
}

.see-less,
.see-more {
  font-size: 13px;
  color: darkred;
  float: right;
  font-weight: bold;
  cursor: pointer;
}

.see-more-reviews {
  font-weight: bold;
  height: 60px;
  cursor: pointer;
  width: 138px;
  align-items: center;
  display: flex;
}

.see-more-reviews span {
  text-decoration: underline;
}

.see-less:hover,
.see-more:hover,
.see-more-reviews:hover {
  color: darkblue;
}

.column {
  padding: 10px 0px;
  display: flex;
}

.flex {
  display: flex;
}

.flex-column {
  flex-direction: column;
  display: flex;
}

.flex-grow {
  flex-grow: 1;
  margin-left: 5px;
  margin-right: 5px;
  word-break: break-all;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

.link {
  cursor: pointer;
  color: dodgerblue;
}

.link:hover {
  color: blue;
}

@media only screen and (max-width: 1000px) {
  h1,
  .section1,
  .section2,
  .containertop-left,
  .container3 {
    padding-left: 20px;
    padding-right: 20px;
  }

  .spaced {
    min-width: 160px;
    max-width: 160px;
  }

  .containertop-left {
    padding-right: 0px;
  }

  @media only screen and (max-width: 860px) {
    .body {
      padding-bottom: 20px;
    }

    h1 {
      font-size: 23px;
    }

    h2,
    .containertop-left-header {
      font-size: 20px;
    }

    h3 {
      font-size: 16px;
    }

    .section1 big strong {
      font-size: 17.5px;
    }

    .spaced {
      min-width: 230px;
      max-width: 230px;
    }

    @media only screen and (max-width: 700px) {
      .spaced {
        min-width: 180px;
        max-width: 180px;
      }
    }
  }
}

@media only screen and (max-width: 550px) {
  .body {
    padding-bottom: 5px;
  }

  h1,
  .section1,
  .section2,
  .containertop-left,
  .container3 {
    padding-left: 5px;
    padding-right: 5px;
  }

  h1 {
    font-size: 20.5px;
  }

  h2,
  .containertop-left-header {
    font-size: 18.5px;
  }

  h3 {
    font-size: 15px;
  }

  .section1 big strong {
    font-size: 17px;
  }

  .spaced {
    min-width: 150px;
    max-width: 150px;
  }

  .container1 {
    flex-direction: column;
    margin: 0px;
    margin-top: 20px;
  }

  .containertop-left {
    padding: 15px;
  }

  .containertop-left {
    border-top: 1px solid #b6b1b1;
  }
  /* For small mobile phones: */
  @media only screen and (max-width: 460px) {
    .spaced {
      min-width: 100px;
      max-width: 100px;
    }

    h1,
    h2 {
      padding-top: 20px;
      padding-bottom: 20px;
    }

    .flex-grow strong {
      font-size: 13px;
    }

    .edit-btn,
    .save-btn {
      min-width: 40px;
      height: 20px;
    }

    .see-more-reviews {
      font-size: 14px;
      height: 50px;
    }
  }
}
</style>
