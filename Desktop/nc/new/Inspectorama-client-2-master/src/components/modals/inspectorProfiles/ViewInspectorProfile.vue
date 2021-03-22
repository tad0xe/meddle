<template>
  <div>
    <div class="modal-backdrop" @click="close">
      <div class="modal" @click.stop>
        <div class="modal__header">
          <div class="modal__header__content">{{$t('modals.viewInspectorProfile.title')}}</div>
          <div class="btn-close-upper" @click="close()">x</div>
        </div>
        <div class="modal-content">
          <form @submit.prevent="onSubmit()">
            <div class="section inspector-container-top">
              <div class="flex">
                <div v-if="avatar">
                  <img class="avatar" :src="avatar" />
                </div>
                <div class="initials" v-if="!avatar" style="fontSize: 50px">{{initials}}</div>
                <div>
                  <p
                    style="fontSize: 20px"
                  >{{inspectorProfile.personalInfo.firstName}} {{inspectorProfile.personalInfo.lastName}}</p>
                  <div>
                    <StarRating
                      :show-rating="false"
                      :star-size="15"
                      :padding="2"
                      :increment="0.1"
                      :read-only="true"
                      v-model="inspectorProfile.averageCustomerRating.communication"
                    ></StarRating>
                  </div>
                  <div>
                    <strong
                      style="fontSize: 20px"
                    >{{inspectorProfile.averageCustomerRating.communication}}</strong>
                  </div>
                  <tr>
                    <td>
                      <i class="fa fa-check-circle"></i>
                    </td>
                    <td>{{$t('modals.viewInspectorProfile.fullyVetted')}}</td>
                  </tr>
                  <tr>
                    <td>
                      <i class="fa fa-check-circle"></i>
                    </td>
                    <td>{{$t('modals.viewInspectorProfile.backgroundChecked')}}</td>
                  </tr>
                  <tr>
                    <td>
                      <i class="fa fa-check-circle"></i>
                    </td>
                    <td>{{$t('modals.viewInspectorProfile.verifiedId')}}</td>
                  </tr>
                  <!-- <span>Completed jobs: {{inspectorProfile.completedJobs}}</span>
                  <span>No. of reviews: {{inspectorProfile.averageCustomerRating.numberOfReviews}}</span>-->
                </div>
              </div>
            </div>
            <div class="section">
              <table>
                <tr>
                  <td class="spaced">{{$t('modals.viewInspectorProfile.overallRating')}}:</td>
                  <td>
                    <div class="flex">
                      <StarRating
                        :show-rating="false"
                        :star-size="15"
                        :padding="2"
                        :increment="0.1"
                        :read-only="true"
                        v-model="inspectorProfile.averageCustomerRating.overallRating"
                      ></StarRating>
                      <span>
                        <strong>{{inspectorProfile.averageCustomerRating.overallRating}}</strong>
                      </span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="spaced">{{$t('modals.viewInspectorProfile.communicationRating')}}:</td>
                  <td>
                    <div class="flex">
                      <StarRating
                        :show-rating="false"
                        :star-size="15"
                        :padding="2"
                        :increment="0.1"
                        :read-only="true"
                        v-model="inspectorProfile.averageCustomerRating.communication"
                      ></StarRating>
                      <span>
                        <strong>{{inspectorProfile.averageCustomerRating.communication}}</strong>
                      </span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="spaced">{{$t('modals.viewInspectorProfile.expertiseRating')}}:</td>
                  <td>
                    <div class="flex">
                      <StarRating
                        :show-rating="false"
                        :star-size="15"
                        :padding="2"
                        :increment="0.1"
                        :read-only="true"
                        v-model="inspectorProfile.averageCustomerRating.expertise"
                      ></StarRating>
                      <span>
                        <strong>{{inspectorProfile.averageCustomerRating.expertise}}</strong>
                      </span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="spaced">{{$t('modals.viewInspectorProfile.professionalismRating')}}</td>
                  <td>
                    <div class="flex">
                      <StarRating
                        :show-rating="false"
                        :star-size="15"
                        :padding="2"
                        :increment="0.1"
                        :read-only="true"
                        v-model="inspectorProfile.averageCustomerRating.professionalism"
                      ></StarRating>
                      <span>
                        <strong>{{inspectorProfile.averageCustomerRating.professionalism}}</strong>
                      </span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="spaced">{{$t('modals.viewInspectorProfile.reportClarity')}}:</td>
                  <td>
                    <div class="flex">
                      <StarRating
                        :show-rating="false"
                        :star-size="15"
                        :padding="2"
                        :increment="0.1"
                        :read-only="true"
                        v-model="inspectorProfile.averageCustomerRating.reportClarity"
                      ></StarRating>
                      <span>
                        <strong>{{inspectorProfile.averageCustomerRating.reportClarity}}</strong>
                      </span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="spaced">{{$t('modals.viewInspectorProfile.customerReviews')}}:</td>
                  <td>
                    <strong>{{inspectorProfile.averageCustomerRating.numberOfReviews}}</strong>
                  </td>
                </tr>
                <tr>
                  <td class="spaced">{{$t('modals.viewInspectorProfile.jobsCompleted')}}:</td>
                  <td>
                    <strong>{{inspectorProfile.completedJobs}}</strong>
                  </td>
                </tr>
              </table>
            </div>
            <div class="section">
              <h2>{{$t('modals.viewInspectorProfile.generalInformation.title')}}</h2>
              <table>
                <tr>
                  <td
                    class="spaced"
                  >{{$t('modals.viewInspectorProfile.generalInformation.typeOfInspection')}}:</td>
                  <td>
                    <b>{{inspectorProfile.typeOfInspector}} {{$t('generic.inspection')}}</b>
                  </td>
                </tr>
                <tr>
                  <td
                    class="spaced"
                  >{{$t('modals.viewInspectorProfile.generalInformation.totalYearsOfExp')}}:</td>
                  <td>
                    <b>{{inspectorProfile.areaOfSpecialization.totalYearsOfExp}}</b>
                  </td>
                </tr>
              </table>
              <table v-if="inspectorProfile.typeOfInspector == 'Vehicle'">
                <tr>
                  <td
                    class="spaced"
                  >{{$t('modals.viewInspectorProfile.generalInformation.vehicleSpecializations')}}</td>
                  <td>
                    <div
                      v-for="(vehicleSpecialization, index) in inspectorProfile.areaOfSpecialization.vehicleSpecializations"
                      :key="index"
                    >
                      <li class="padding-bottom">
                        <b>
                          {{$t(
                          'modals.viewInspectorProfile.generalInformation.specificExperience',
                          {type: vehicleSpecialization.vehicleType, noOfYears: vehicleSpecialization.yearsOfVehicleExp }
                          )}}
                        </b>
                      </li>
                    </div>
                  </td>
                </tr>
                <tr style="padding-top: 0px; padding-bottom: 0px;">
                  <td
                    class="spaced"
                  >{{$t('modals.viewInspectorProfile.generalInformation.brandSpecializations')}}</td>
                  <td>
                    <div
                      v-for="(brandSpecialization, index) in inspectorProfile.areaOfSpecialization.brandSpecializations"
                      :key="index"
                    >
                      <li class="padding-bottom">
                        <b>
                          {{$t(
                          'modals.viewInspectorProfile.generalInformation.specificExperience',
                          {type: brandSpecialization.brandType, noOfYears: brandSpecialization.yearsOfBrandExp }
                          )}}
                        </b>
                      </li>
                    </div>
                  </td>
                </tr>
              </table>
              <table>
                <tr v-if="inspectorProfile.typeOfInspector == 'Home'">
                  <td
                    class="spaced"
                  >{{$t('modals.viewInspectorProfile.generalInformation.homeSpecializations')}}</td>
                  <td>
                    <div
                      v-for="(homeSpecialization, index) in inspectorProfile.areaOfSpecialization.homeInspectionSpecializations"
                      :key="index"
                    >
                      <li class="padding-bottom">
                        <b>
                          {{$t(
                          'modals.viewInspectorProfile.generalInformation.specificExperience',
                          {type: homeSpecialization.specializationType, noOfYears: homeSpecialization.yearsOfSpecializationExp }
                          )}}
                        </b>
                      </li>
                    </div>
                  </td>
                </tr>
                <tr style="padding-top: 0px;">
                  <td class="spaced">{{$t('modals.viewInspectorProfile.generalInformation.noOfJobsDone')}}</td>
                  <td>
                    <b>{{inspectorProfile.completedJobs}}</b>
                  </td>
                </tr>
                <tr>
                  <td class="spaced">{{$t('generic.country')}}</td>
                  <td>
                    <b>{{inspectorProfile.personalInfo.country}}</b>
                  </td>
                </tr>
                <tr>
                  <td class="spaced">{{$t('generic.city')}}</td>
                  <td>
                    <b>{{inspectorProfile.personalInfo.city}}</b>
                  </td>
                </tr>
                <tr>
                  <td class="spaced">{{$t('generic.address')}}</td>
                  <td>
                    <b>{{inspectorProfile.personalInfo.addressLine1}}, {{inspectorProfile.personalInfo.addressLine2}}</b>
                  </td>
                </tr>
              </table>
            </div>
            <div class="section">
              <h2>{{$t('modals.viewInspectorProfile.professionalCerts.title')}}</h2>
              <table>
                <tr v-for="(proCert, index) in inspectorProfile.proCerts" :key="index">
                  <td class="spaced"></td>
                  <td>
                    <li>
                      <b>
                        <span>{{proCert.certAuthority}}, {{proCert.certName}}</span>
                      </b>
                    </li>
                  </td>
                </tr>
              </table>
            </div>
            <div class="section">
              <h2>{{$t('modals.viewInspectorProfile.professionalCerts.highestEducation')}}</h2>
              <table>
                <tr v-for="(education, index) in inspectorProfile.educations" :key="index">
                  <td class="spaced"></td>
                  <td>
                    <li>
                      <b>
                        <span>{{education.nameOfInstitution}}, {{education.gradYear | showOnlyYear}}</span>
                      </b>
                    </li>
                  </td>
                </tr>
              </table>
            </div>
            <div class="section">
              <div class="customer-reviews">
                <h2>{{$t('modals.viewInspectorProfile.customerReviews')}}</h2>
                <div v-if="inspectorReviews.length">
                  <div
                    class="customer-reviews-content"
                    v-for="(review, index) in inspectorReviews"
                    :key="index"
                    :ref="hideSeeMoreAndShowLessBtn(index)"
                  >
                    <h3>{{review.customerFullName}}</h3>
                    <div class="flex">
                      <StarRating
                        :show-rating="false"
                        :star-size="15"
                        :padding="2"
                        :increment="0.1"
                        :read-only="true"
                        v-model="review.customerFeedback.overallRating"
                      ></StarRating>
                      <span>
                        <strong>{{review.customerFeedback.overallRating}}</strong>
                      </span>
                    </div>
                    <div class="flex-column">
                      <div class="flex-grow">
                        <div
                          class="outer-text-width"
                          :style="{width: maxCustomerFeedbackCommentLength + 'px'}"
                          ref="outerTextWidth"
                        >
                          <span ref="getInnerTextWidth">{{review.customerFeedback.comment}}</span>
                        </div>
                        <div v-if="review.customerFeedback.hideSeeMoreAndShowLess">
                          <span
                            v-if="review.customerFeedback.showLongComment == true"
                            class="see-less"
                            @click="showLess(index), review.customerFeedback.showLongComment=!review.customerFeedback.showLongComment"
                          >{{$t('buttons.showLess')}}</span>
                          <span
                            v-if="review.customerFeedback.showLongComment == false"
                            class="see-more"
                            @click="seeMore(index), review.customerFeedback.showLongComment=!review.customerFeedback.showLongComment"
                          >{{$t('buttons.seeMore')}}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="see-more-reviews" style="position: relative">
                    <span
                      v-if="!isSeeMoreReviewsLoaded && hideSeeMoreReviews"
                      @click="getMoreInspectorReviews()"
                    >{{$t('modals.viewInspectorProfile.seeMoreReviews')}}</span>
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
                <div v-if="!inspectorReviews.length">
                  <p>{{$t('modals.viewInspectorProfile.noCustomerReviews')}}</p>
                  <br />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import StarRating from "vue-star-rating";
import { mapState, mapActions, mapMutations, mapGetters } from "vuex";
import LoadingPage from "../../loadingComponents/LoadingPage.vue";
export default {
  props: ["selectedInspector"],
  components: {
    StarRating,
    LoadingPage
  },
  data() {
    return {
      inspectorProfile: "",
      avatar: "",
      initials: "",
      inspectorId: "",
      inspectorReviews: "",
      numberOfReviews: 3,
      hideSeeMoreReviews: true,
      isSeeMoreReviewsLoaded: false,
      maxCustomerFeedbackCommentLength: 260
    };
  },
  watch: {
    selectedInspector(val) {
      this.inspectorProfile = val.inspectorInfo;
      this.avatar = val.avatar;
      this.initials = val.initials;
      this.inspectorId = val.inspectorId;
      this.getInspectorReviews();
    }
  },
  methods: {
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

    close() {
      this.$emit("close");
      // this.$store.commit("orders/storeInspectorProfile", {});
    },
    getInspectorReviews() {
      axios
        .get(
          `/customer_reviews/get_inspector_reviews/${this.inspectorId}?numberOfReviews=${this.numberOfReviews}`
        )
        .then(res => {
          //summarize the review body to just 50 string characters
          this.inspectorReviews = res.data.map(item => {
            item.customerFeedback.showLongComment = false;
            item.customerFeedback.hideSeeMoreAndShowLess = false;

            // if (item.customerFeedback.comment.length > 50) {
            //   item.customerFeedback.comment = item.customerFeedback.comment.slice(
            //     0,
            //     50
            //   );
            //   // item.customerFeedback.showLongComment = false;
            // }

            return item;
          });

          this.isSeeMoreReviewsLoaded = false;
          if (this.numberOfReviews > this.inspectorReviews.length) {
            this.hideSeeMoreReviews = false;
          }
        })
        .catch(error => {
          console.log(error.response);
        });
    },
    getMoreInspectorReviews() {
      this.isSeeMoreReviewsLoaded = true;
      this.numberOfReviews = this.numberOfReviews + 3;
      this.getInspectorReviews();
    }
    // showMoreComment(review, index) {
    //   this.review.customerFeedback.showLongComment = !review
    //     .customerFeedback.showLongComment;
    // }
  },

  created() {}
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding-left: 10px;
  padding-right: 10px;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.outer-text-width {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  /* border: 1px solid #000000; */
}

.modal {
  background: white;
  box-shadow: 2px 2px 20px 1px;
  border-radius: 10px;
  font-family: sans-serif, Arial, Helvetica;
  width: 100%;
  padding-bottom: 30px;
  max-width: 680px;
  flex-direction: column;
  display: flex;
}

.modal__header {
  padding: 25px 80px;
  padding-right: 20px;
  align-items: center;
  border-bottom: 1px solid #b6b1b1;
  display: flex;
}

.modal__header__content {
  flex: 1;
  font-size: 20px;
  font-weight: bold;
}

.btn-close-upper {
  font-weight: bold;
  border: 1.5px solid;
  cursor: pointer;
  height: 20px;
  width: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn-close-upper:hover {
  color: red;
}

.modal-content {
  font-size: 13px;
  padding-left: 80px;
  padding-right: 80px;
  width: 100%;
  max-height: 550px;
  overflow-y: auto;
  display: inline-block;
}

.padding-bottom {
  padding-bottom: 6px;
}

.flex {
  align-items: center;
  display: flex;
}

.flex-column {
  flex-direction: column;
  display: flex;
}

.flex-grow {
  flex: 1;
  word-break: break-all;
}

.flex span {
  padding-left: 5px;
}

table {
  width: 100%;
}

.section tr {
  padding-top: 3px;
  padding-bottom: 3px;
  display: block;
}

td {
  vertical-align: top;
  text-align: left;
}

h2 {
  color: #212259;
  margin-top: 10px;
  font-size: 16px;
  width: 100%;
}

.inspector-container-top p {
  padding-top: 2px;
  padding-bottom: 2px;
}

.inspector-container-top tr {
  padding-top: 2px;
  padding-bottom: 3px;
  display: block;
}

.inspector-container-top i {
  margin-right: 8px;
  font-size: 15px;
  color: green;
}

.section {
  padding-top: 3px;
  padding-bottom: 3px;
  width: 100%;
  border-bottom: 1px solid #b6b1b1;
  border-bottom: 1px solid #b6b1b1;
}

.section:last-child {
  padding-bottom: 0px;
}

.avatar,
.initials {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  display: block;
  margin-left: 10px;
  margin-right: 30px;
}

.initials {
  border: 1px solid #ccc;
  align-items: center;
  justify-content: center;
  display: flex;
  background-color: white;
}

.spaced {
  min-width: 155px;
  max-width: 155px;
}

.customer-reviews {
  width: 100%;
}

.customer-reviews h2 {
  padding-bottom: 5px;
}

.customer-reviews-content {
  padding-top: 8px;
  padding-bottom: 10px;
  border-bottom: 1px solid #b6b1b1;
}

.customer-reviews-content .flex {
  padding-top: 3px;
  padding-bottom: 3px;
}

.customer-reviews-content h3 {
  font-size: 14px;
}

.customer-reviews-content p {
  display: inline-block;
}

.see-less,
.see-more {
  font-size: 12px;
  color: darkred;
  float: right;
  font-weight: bold;
  cursor: pointer;
}

.see-more-reviews {
  font-weight: bold;
  height: 40px;
  cursor: pointer;
  width: 112px;
  align-items: center;
  display: flex;
}

.see-less:hover,
.see-more:hover,
.see-more-reviews:hover {
  color: darkblue;
}

.container {
  padding: 20px;
}

.container-right {
  margin-left: 20px;
}

/* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}

@media only screen and (max-width: 860px) {
  .modal {
    max-width: 480px;
  }

  .modal__header {
    padding: 20px 30px;
    padding-right: 20px;
  }

  .modal-content {
    padding-left: 30px;
    padding-right: 30px;
  }
}

/* For mobile: */
@media only screen and (max-width: 480px) {
  .modal__header {
    padding: 15px;
  }

  .modal-content {
    padding-left: 10px;
    padding-right: 10px;
  }

  .customer-reviews {
    width: 100%;
  }
}
</style>

