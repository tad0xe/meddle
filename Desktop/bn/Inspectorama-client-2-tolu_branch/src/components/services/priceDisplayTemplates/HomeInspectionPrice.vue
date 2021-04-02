<template>
  <div>
    <div class="body">
      <div class="container">
        <div class="container-header">{{$t("homeInspectionPrice.form.title")}}</div>
        <div class="container-content">
          <table>
            <tr>
              <td class="spaced">{{$t("homeInspectionPrice.form.price")}}</td>
              <td>
                <b>{{inspectionData.price.value}} {{inspectionData.price.currency}}</b>
              </td>
            </tr>
            <tr>
              <td class="spaced">{{$t("homeInspectionPrice.form.timeAndDate")}}</td>
              <td>
                <b>{{inspectionData.inspectionDateTime | formatDate}}</b>
              </td>
            </tr>
            <tr>
              <td class="spaced">{{$t("homeInspectionPrice.form.location")}}</td>
              <td>
                <b>{{inspectionData.street}} {{inspectionData.state}} {{inspectionData.zipCode}}</b>
              </td>
            </tr>
            <tr>
              <td class="spaced">{{$t("homeInspectionPrice.form.description")}}</td>
              <td>
                <b>
                  {{translateValue(inspectionData.inspectedItemInfo.typeOfHome, $t("homeInspection.form.typeOfHomeOptions"))}}
                  {{$tc(
                  'homeInspectionPrice.form.withNoOfRooms',
                  inspectionData.inspectedItemInfo.numberOfRooms,
                  {count: inspectionData.inspectedItemInfo.numberOfRooms}
                  )}}
                </b>
              </td>
            </tr>
            <tr v-if="!auth" :class="{invalid: $v.firstName.$error}">
              <td class="spaced">{{$t("homeInspectionPrice.form.firstName")}}</td>
              <td>
                <input
                  type="text"
                  :placeholder="$t('homeInspectionPrice.form.placeholder.firstName')"
                  v-model.trim="firstName"
                  name="firstName"
                />
                <transition name="shake">
                  <span v-if="!$v.firstName.required && $v.firstName.$error">First name is required.</span>
                </transition>
              </td>
            </tr>
            <tr v-if="!auth" :class="{invalid: $v.lastName.$error}">
              <td class="spaced">{{$t("homeInspectionPrice.form.lastName")}}</td>
              <td>
                <input
                  type="text"
                  :placeholder="$t('homeInspectionPrice.form.placeholder.lastName')"
                  v-model.trim="lastName"
                  name="lastName"
                />
                <transition name="shake">
                  <span v-if="!$v.lastName.required && $v.lastName.$error">Last name is required.</span>
                </transition>
              </td>
            </tr>
            <tr v-if="!auth" :class="{invalid: $v.inspectionData.email.$error}">
              <td class="spaced">{{$t("homeInspectionPrice.form.email")}}</td>
              <td>
                <input
                  type="email"
                  :placeholder="$t('homeInspectionPrice.form.placeholder.email')"
                  v-model.trim="inspectionData.email"
                  name="email"
                />
                <transition name="shake">
                  <span
                    v-if="!$v.inspectionData.email.email && $v.inspectionData.email.$error"
                  >Email is invalid.</span>
                  <span
                    v-if="!$v.inspectionData.email.required && $v.inspectionData.email.$error"
                  >Email is required.</span>
                </transition>
              </td>
            </tr>
          </table>
          <div class="btn-container">
            <button
              class="secondary-btn"
              type="button"
              @click="onSubmit"
            >{{$t("buttons.completeBooking")}}</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapState, mapActions, mapMutations, mapGetters } from "vuex";
import { generatePassword, translateValue } from "../../../utility";
import { required, email, requiredUnless } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      translateValue,
      inspectionData: {
        email: "",
        price: {},
        inspectedItemInfo: {}
      },
      firstName: "",
      lastName: ""
    };
  },
  validations() {
    return {
      inspectionData: {
        email: {
          required: requiredUnless(() => {
            return this.auth;
          }),
          email
        }
      },
      firstName: {
        required: requiredUnless(() => {
          return this.auth;
        })
      },
      lastName: {
        required: requiredUnless(() => {
          return this.auth;
        })
      }
    };
  },

  methods: {
    onSubmit() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }

      if (this.auth) {
        //user is signed in
        this.inspectionData.email = this.user.email;
        axios
          .post(
            `/quotes/create_quote/${this.inspectionData.typeOfInspection}`,
            this.inspectionData
          )
          .then(res => {
            this.$emit("quoteSaved", {
              typeOfInspection: "home",
              quoteId: res.data._id
            });
          })
          .catch(error => console.log(error.response));
      } else {
        //User is NOT signed in

        //Check if email is registered
        axios
          .post("/users/checkIfEmailIsRegistered", {
            email: this.inspectionData.email
          })
          .then(res => {
            if (res.data.isUserRegistered == true) {
              this.$router.push(
                `/${
                  this.$i18n.locale
                }/login?isGettingPrice=yes&inspectionData=${JSON.stringify(
                  this.inspectionData
                )}`
              );
            } else {
              const signUpFormData = {
                firstName: this.firstName,
                lastName: this.lastName,
                email: this.inspectionData.email,
                password: generatePassword()
              };
              axios.post("/users", signUpFormData).then(res => {
                this.$store.dispatch("afterAuthentication", {
                  resData: res.data
                });

                //Get a quote
                axios
                  .post(
                    `/quotes/create_quote/${this.inspectionData.typeOfInspection}`,
                    this.inspectionData
                  )
                  .then(res => {
                    this.$emit("quoteSaved", {
                      typeOfInspection: "home",
                      quoteId: res.data._id
                    });
                  });
              });
            }
          });
      }
    }
  },

  computed: {
    auth() {
      return this.$store.getters.isAuthenticated;
    },
    user() {
      return this.$store.getters.generalUserProfile;
    }
  },

  created() {
    if (this.$route.query.inspectionData) {
      this.inspectionData = JSON.parse(this.$route.query.inspectionData);
    }

    if (this.$route.query.invitationId) {
      //Check if the invitation is valid
      axios
        .get(
          `/order_invitation/get_invitation/${this.$route.query.invitationId}?uniquelyRandomCode=${this.$route.query.urc}`
        )
        .then(res => {
          const invitationData = res.data;
          this.inspectionData.typeOfInspection = invitationData.inspectionType;
          this.inspectionData.invitationId = invitationData._id;
          this.inspectionData.inspectedItemInfo =
            invitationData.propertyDetails;
          this.inspectionData.country = invitationData.location.country;
          this.inspectionData.city = invitationData.location.city;
          this.inspectionData.cityTimeZoneId =
            invitationData.location.cityTimeZoneId;
          this.inspectionData.state = invitationData.location.state;
          this.inspectionData.zipCode = invitationData.location.zipCode;
          this.inspectionData.inspectedItemInfo.typeOfHome =
            invitationData.propertyDetails.typeOfHome;
          this.inspectionData.inspectedItemInfo.numberOfRooms =
            invitationData.propertyDetails.noOfBedrooms;
          this.inspectionData.inspectedItemInfo.homeLocation =
            invitationData.location.street;
          this.inspectionData.price = invitationData.inspectionPrice;
          this.inspectionData.inspectionDateTime =
            invitationData.inspectionDateTime;
        });
    }
  }
};
</script>


<style lang="scss" scoped>
@import "../../../scss/_priceDisplayTemplates.scss";
</style>

