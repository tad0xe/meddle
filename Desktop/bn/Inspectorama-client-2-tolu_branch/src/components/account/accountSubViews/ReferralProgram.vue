<template>
  <div>
    <div style="position: relative">
      <div v-if="isPageLoading">
        <LoadingPage
          style="left:0; right:0; top:0; bottom:0; position:absolute;"
          :style="{height: containerLeftHeight + 'px'}"
        ></LoadingPage>
      </div>
      <div v-if="!isPageLoading" class="container">
        <div class="container-header">{{$t('referralProgram.title')}}</div>
        <div class="container-content">
          <center>
            <p v-if="error" style="color: red">{{error}}</p>
            <p v-if="statusMessage" style="color: green">{{statusMessage}}</p>
          </center>
          <h3>{{$t('referralProgram.referAnInspector.title')}}</h3>
          <p>
            {{$t('referralProgram.referAnInspector.intro',
            {
            prize: getReferralPrizeAndCurrency(user.contactInfo.country).referralPrize,
            currency: getReferralPrizeAndCurrency(user.contactInfo.country).currency
            })}}
          </p>
          <center>
            <button
              @click="showInspectorReferralLinkModal()"
              class="primary-btn"
            >{{$t('buttons.getReferralLink')}}</button>
          </center>
          <div class="row">
            <div class="column1" :class="{invalid: $v.firstName.$error}">
              <label>{{$t('referralProgram.referAnInspector.inspectorFirstName')}} *</label>
              <input
                type="text"
                :placeholder="$t('referralProgram.referAnInspector.inspectorFirstName')"
                v-model.trim="firstName"
              />
              <transition name="shake">
                <span
                  v-if="!$v.firstName.required && $v.firstName.$error"
                >{{$t('referralProgram.referAnInspector.validationError.inspFirstNameRequired')}}</span>
              </transition>
            </div>
            <div class="column2" :class="{invalid: $v.lastName.$error}">
              <label>{{$t('referralProgram.referAnInspector.inspectorLastName')}} *</label>
              <input
                type="text"
                :placeholder="$t('referralProgram.referAnInspector.inspectorLastName')"
                v-model.trim="lastName"
              />
              <transition name="shake">
                <span
                  v-if="!$v.lastName.required && $v.lastName.$error"
                >{{$t('referralProgram.referAnInspector.validationError.inspLastNameRequired')}}</span>
              </transition>
            </div>
          </div>
          <div class="row">
            <div class="column1" :class="{invalid: $v.email.$error}">
              <label>{{$t('referralProgram.referAnInspector.inspectorEmail')}} *</label>
              <input
                type="email"
                :placeholder="$t('referralProgram.referAnInspector.inspectorEmail')"
                name="email"
                v-model.trim="email"
              />
              <transition name="shake">
                <span
                  v-if="!$v.email.email"
                >{{$t('referralProgram.referAnInspector.validationError.inspEmailIsInvalid')}}</span>
                <span
                  v-if="!$v.email.required && $v.email.$error"
                >{{$t('referralProgram.referAnInspector.validationError.inspEmailIsRequired')}}</span>
              </transition>
            </div>
          </div>
          <div>
            <button
              type="submit"
              class="primary-btn"
              required
              @click="onClickSend()"
            >{{$t('buttons.SEND')}}</button>
          </div>
          <br />
          <div>
            <h3>{{$t('referralProgram.inspectorReferrals.title')}}</h3>
            <div style="overflow-x:auto;" v-if="referrals.length">
              <table>
                <tr>
                  <th>{{$t('referralProgram.inspectorReferrals.nameOfInspector')}}</th>
                  <th>{{$t('referralProgram.inspectorReferrals.inspectorEmail')}}</th>
                  <th>{{$t('referralProgram.inspectorReferrals.status')}}</th>
                  <th>{{$t('referralProgram.inspectorReferrals.maximumPayout')}}</th>
                  <th>{{$t('referralProgram.inspectorReferrals.amountAccrued')}}</th>
                </tr>
                <tr v-for="(referral, index) in referrals" :key="index">
                  <td>{{referral.firstName}} {{referral.lastName}}</td>
                  <td>{{referral.email}}</td>
                  <td>{{referral.status}}</td>
                  <td>{{referral.maximumPayout.value}} {{referral.maximumPayout.currency}}</td>
                  <td>---</td>
                </tr>
              </table>
            </div>
            <div v-if="!referrals.length">
              <p>{{$t('referralProgram.inspectorReferrals.noInspectorReferrals')}}</p>
            </div>
          </div>
        </div>
      </div>
      <GetInspectorReferralLink
        v-show="isGetInspectorReferralLinkVisible"
        @close="hideInspectorReferralLinkModal()"
      ></GetInspectorReferralLink>
    </div>
  </div>
</template>

<script>
import LoadingPage from "../../loadingComponents/LoadingPage";
import { required, email } from "vuelidate/lib/validators";
import axios from "axios";
import GetInspectorReferralLink from "../../modals/referral/GetInspectorReferralLink.vue";
import countriesPresentIn from "../../../mockData/countriesPresentIn";
export default {
  components: {
    LoadingPage,
    GetInspectorReferralLink
  },
  props: ["containerLeftHeight"],
  data() {
    return {
      isPageLoading: true,
      statusMessage: "",
      error: "",
      firstName: "",
      lastName: "",
      email: "",
      referrals: [],
      isGetInspectorReferralLinkVisible: false
    };
  },
  validations: {
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
  computed: {
    user() {
      return this.$store.getters.generalUserProfile;
    }
  },
  methods: {
    onClickSend() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }

      const referredData = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        referrerId: localStorage.getItem("userId"),
        maximumPayout: {
          value: this.getReferralPrizeAndCurrency(this.user.contactInfo.country)
            .referralPrize,
          currency: this.getReferralPrizeAndCurrency(
            this.user.contactInfo.country
          ).currency
        }
      };
      console.log(referredData);
      axios
        .post("/inspector_referrals/byReferrer", referredData)
        .then(res => {
          this.error = null;
          this.statusMessage = res.data.message;
          this.referrals = res.data.referrals;
        })
        .catch(error => {
          this.statusMessage = null;
          this.error = error.response.data;
        });
    },
    showInspectorReferralLinkModal() {
      this.isGetInspectorReferralLinkVisible = true;
    },
    hideInspectorReferralLinkModal() {
      this.isGetInspectorReferralLinkVisible = false;
    },
    getReferralPrizeAndCurrency(country) {
      let prizeCurrency = {};
      countriesPresentIn.forEach(item => {
        if (item.country == country) {
          prizeCurrency.referralPrize = item.referralPrize;
          prizeCurrency.currency = item.currency;
        }
      });
      return prizeCurrency;
    }
  },

  created() {
    this.statusMessage = null;
    this.error = null;

    axios
      .get("/inspector_referrals/allMyReferrals")
      .then(res => {
        this.referrals = res.data;
        this.isPageLoading = false;
      })
      .catch(error => {
        console.log(error.response);
      });
  }
};
</script>

<style  lang="scss" scoped>
* {
  box-sizing: border-box;
}

.container {
  font-family: sans-serif, Arial, Helvetica;
  font-size: 14px;
  padding-bottom: 30px;
  border-radius: 5px;
  border: 1px solid #b6b1b1;
  background-color: white;
  width: 100%;
  display: inline-block;
}

.container-header {
  font-size: 26px;
  font-weight: bold;
  padding: 20px 30px;
  color: $dark-blue;
  border-bottom: 1px solid #ccc;
}

.container-header,
.container-content {
  padding: 20px 30px;
}

h3 {
  font-size: 18px;
  margin-bottom: 10px;
}

table {
  width: 100%;
  text-align: left;
  border-collapse: collapse;
  border: 1px solid #ddd;
}

th {
  padding: 10px;
  border-left: 1px solid #ddd;
  border-right: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  border-collapse: collapse;
  background-color: #f2f2f2;
}

td {
  padding: 10px;
  border-left: 1px solid #ddd;
  border-right: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  background-color: #f1ffff;
}

@media only screen and (max-width: 840px) {
  .container-header {
    font-size: 22px;
  }
  .container-header,
  .container-content {
    padding: 20px;
  }

  h3 {
    font-size: 17px;
  }
}

/* For mobile phones: */
@media only screen and (max-width: 540px) {
  .container {
    border-radius: 3px;
    padding-bottom: 20px;
  }
  .container-header {
    padding: 20px 5px;
    font-size: 18px;
  }
  .container-content {
    padding: 20px 5px;
  }

  @media only screen and (max-width: 480px) {
    .column1,
    .column2 {
      padding: 0px;
      width: 100%;
    }
  }
}
</style>