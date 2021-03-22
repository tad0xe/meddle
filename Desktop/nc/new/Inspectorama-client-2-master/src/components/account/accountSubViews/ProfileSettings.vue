<template>
  <div>
    <div style="position: relative">
      <div v-if="!isPageLoaded">
        <LoadingPage
          style="left:0; right:0; top:0; bottom:0; position:absolute;"
          :style="{height: containerLeftHeight + 'px'}"
        ></LoadingPage>
      </div>
      <div v-if="isPageLoaded" class="container">
        <div class="container-header">{{$t("profileSettings.title")}}</div>
        <div class="container-content">
          <div class="row">
            <center>
              <div class="photo-container">
                <div>
                  <picture-input
                    ref="avatar"
                    @change="onChangeAvatar"
                    @remove="onRemoveAvatar"
                    width="250"
                    height="250"
                    margin="16"
                    accept="image/jpeg, image/png"
                    size="1"
                    radius="50"
                    :removable="true"
                    buttonClass="upload-btn"
                    removeButtonClass="remove-btn"
                    :prefill="getAvatar"
                    :z-index="1"
                    :prefillOptions="{mediaType: 'image/png' }"
                    :customStrings="setProfilePicCustomStrings()"
                    :key="profilePictureKey"
                  ></picture-input>
                </div>
                <span>{{$t("generic.profilePicture.maxPicSize")}}</span>
              </div>
            </center>
          </div>
          <br />
          <br />
          <form @submit.prevent="onSubmit">
            <div class="row">
              <div class="column1" :class="{invalid: $v.firstName.$error}">
                <label for="firstName">{{$t("profileSettings.firstName")}} *</label>
                <input
                  type="text"
                  :placeholder="$t('profileSettings.firstName')"
                  v-model.trim="firstName"
                />
                <span
                  v-if="!$v.firstName.required && $v.firstName.$error"
                >{{$t('profileSettings.validationError.firstNameRequired')}}</span>
              </div>
              <div class="column2" :class="{invalid: $v.lastName.$error}">
                <label for="lastName">{{$t("profileSettings.lastName")}} *</label>
                <input
                  type="text"
                  :placeholder="$t('profileSettings.lastName')"
                  v-model.trim="lastName"
                />
                <span
                  v-if="!$v.lastName.required && $v.lastName.$error"
                >{{$t('profileSettings.validationError.lastNameRequired')}}</span>
              </div>
            </div>
            <div class="row">
              <div class="column1" :class="{invalid: $v.email.$error}">
                <label for="emailaddress">{{$t("profileSettings.email")}}: *</label>
                <input type="email" :placeholder="$t('profileSettings.email')" v-model.trim="email" />
                <span
                  v-if="!$v.email.email"
                >{{$t('profileSettings.validationError.emailIsInvalid')}}</span>
                <span
                  v-if="!$v.email.required && $v.email.$error"
                >{{$t('profileSettings.validationError.emailIsRequired')}}</span>
              </div>
              <div class="column2">
                <label for="company">{{$t("profileSettings.company")}}</label>
                <input
                  type="text"
                  :placeholder="$t('profileSettings.company')"
                  v-model.trim="contactInfo.company"
                />
              </div>
            </div>
            <div class="row">
              <div class="column1">
                <label for="countryType">{{$t("profileSettings.country")}}</label>
                <select @change="getDialingCode()" v-model.trim="contactInfo.country" required>
                  <option value selected disabled hidden>{{$t('profileSettings.selectCountry')}}</option>
                  <option v-for="(country, index) in countries" :key="index">{{country}}</option>
                </select>
              </div>
            </div>
            <div class="row">
              <div class="column1">
                <label for="state">{{$t("profileSettings.state")}}</label>
                <input
                  type="state"
                  :placeholder="$t('profileSettings.state')"
                  v-model.trim="contactInfo.state"
                />
              </div>
              <div class="column2">
                <label for="city">{{$t("profileSettings.city")}}</label>
                <input
                  type="text"
                  :placeholder="$t('profileSettings.city')"
                  v-model.trim="contactInfo.city"
                />
              </div>
            </div>
            <div class="row">
              <div class="column1">
                <label for="addressLine1">{{$t("profileSettings.addressLine1")}}</label>
                <input
                  type="text"
                  :placeholder="$t('profileSettings.addressLine1')"
                  v-model.trim="contactInfo.addressLine1"
                />
              </div>
              <div class="column2">
                <label for="addressLine2">{{$t("profileSettings.addressLine2")}}</label>
                <input
                  type="text"
                  :placeholder="$t('profileSettings.addressLine2')"
                  v-model.trim="contactInfo.addressLine2"
                />
              </div>
            </div>
            <div class="row">
              <div class="column1">
                <label for="zipCode">{{$t("profileSettings.zipCode")}}</label>
                <input
                  type="text"
                  :placeholder="$t('profileSettings.zipCode')"
                  v-model.trim="contactInfo.zipCode"
                />
              </div>
            </div>
            <div class="row">
              <div class="column1">
                <label for="phone1">{{$t("profileSettings.mobileNum1")}}</label>
                <div class="flex">
                  <div class="dialing-code">
                    <input
                      type="text"
                      placeholder="- - - - -"
                      disabled
                      v-model.trim="contactInfo.mobileNum1.countryCode"
                    />
                  </div>
                  <div class="phone-number">
                    <input
                      type="text"
                      v-model.trim="contactInfo.mobileNum1.phoneNumber"
                      :placeholder="$t('profileSettings.mobileNum1')"
                    />
                  </div>
                </div>
              </div>
              <div class="column2">
                <label for="phone2">{{$t("profileSettings.mobileNum2")}}</label>
                <div class="flex">
                  <div class="dialing-code">
                    <input
                      type="text"
                      placeholder="- - - - -"
                      disabled
                      v-model.trim="contactInfo.mobileNum2.countryCode"
                    />
                  </div>
                  <div class="phone-number">
                    <input
                      type="text"
                      v-model.trim="contactInfo.mobileNum2.phoneNumber"
                      :placeholder="$t('profileSettings.mobileNum2')"
                    />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div class="container-footer">
          <button
            type="button"
            @click.prevent="onSubmit()"
            class="primary-btn"
          >{{$t("buttons.saveSettings")}}</button>
          <span @click="onClickDeleteAccount">
            <u>{{$t("buttons.deleteAccount")}}t</u>
          </span>
        </div>
      </div>
    </div>
    <div>
      <DeleteUserAccountWarning
        v-if="isDeleteUserAccountWarningVisible"
        @close="hideDeleteUserModal"
      ></DeleteUserAccountWarning>
    </div>
  </div>
</template>

<script>
import LoadingPage from "../../loadingComponents/LoadingPage";
import PictureInput from "vue-picture-input";
import DeleteUserAccountWarning from "../../modals/DeleteUserAccountWarning.vue";
import countriesList from "../../../mockData/countriesList";
import dialingCodesList from "../../../mockData/dialingCodesList";
import { required, email } from "vuelidate/lib/validators";
import axios from "axios";
export default {
  components: {
    LoadingPage,
    PictureInput,
    DeleteUserAccountWarning
  },
  props: ["containerLeftHeight"],
  data() {
    return {
      isPageLoaded: false,
      isDeleteUserAccountWarningVisible: false,
      avatar: "",
      dialingCodes: dialingCodesList,
      countries: countriesList,
      firstName: "",
      lastName: "",
      email: "",
      contactInfo: {
        company: "",
        addressLine1: "",
        addressLine2: "",
        city: "",
        state: "",
        country: "",
        zipCode: "",
        mobileNum1: {
          countryCode: "",
          phoneNumber: ""
        },
        mobileNum2: {
          countryCode: "",
          phoneNumber: ""
        }
      },
      profilePictureKey: 0
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
  watch: {
    "$i18n.locale"(to, fro) {
      this.profilePictureKey++; //To force a re-render of the component
    }
  },

  computed: {
    getAvatar() {
      this.avatar = this.$store.getters.getAvatar;
      return this.$store.getters.getAvatar;
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
    getDialingCode() {
      let dialingCode;
      let selectedCountry = this.contactInfo.country;
      this.dialingCodes.forEach(item => {
        if (item.country == selectedCountry) {
          dialingCode = item.code;
        }
      });
      this.contactInfo.mobileNum1.countryCode = dialingCode;
      this.contactInfo.mobileNum2.countryCode = dialingCode;
    },

    onChangeAvatar(avatar) {
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
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }

      const profileData = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        contactInfo: this.contactInfo
      };
      axios
        .patch("/users/me", profileData)
        .then(res => {
          this.$notify({
            group: "general",
            text: "Your info has been saved."
          });
        })
        .catch(error => {});
    },

    onClickDeleteAccount() {
      this.isDeleteUserAccountWarningVisible = true;
    },
    hideDeleteUserModal() {
      this.isDeleteUserAccountWarningVisible = false;
    }
  },

  created() {
    this.$store.dispatch("fetchUserAvatar");
    this.$store.dispatch("fetchUser");

    axios.get("/users/me").then(res => {
      const generalUserProfile = res.data;
      this.firstName = generalUserProfile.firstName;
      this.lastName = generalUserProfile.lastName;
      this.email = generalUserProfile.email;
      this.contactInfo.company = generalUserProfile.contactInfo.company;
      this.contactInfo.addressLine1 =
        generalUserProfile.contactInfo.addressLine1;
      this.contactInfo.addressLine2 =
        generalUserProfile.contactInfo.addressLine2;
      this.contactInfo.city = generalUserProfile.contactInfo.city;
      this.contactInfo.state = generalUserProfile.contactInfo.state;
      this.contactInfo.country = generalUserProfile.contactInfo.country;
      this.contactInfo.zipCode = generalUserProfile.contactInfo.zipCode;
      this.contactInfo.mobileNum1.countryCode =
        generalUserProfile.contactInfo.mobileNum1.countryCode;
      this.contactInfo.mobileNum1.phoneNumber =
        generalUserProfile.contactInfo.mobileNum1.phoneNumber;
      this.contactInfo.mobileNum2.countryCode =
        generalUserProfile.contactInfo.mobileNum2.countryCode;
      this.contactInfo.mobileNum2.phoneNumber =
        generalUserProfile.contactInfo.mobileNum2.phoneNumber;
      this.getDialingCode();
      this.isPageLoaded = true;
    });
  }
};
</script>

<style>
.upload-btn,
.remove-btn {
  color: white;
  padding: 8px 10px;
  outline: none;
  border: none;
  cursor: pointer;
  font-size: 14px;
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

.container {
  font-family: sans-serif, Arial, Helvetica;
  border-radius: 5px;
  border: 1px solid #b6b1b1;
  width: 100%;
  background-color: white;
  display: inline-block;
}

.container-header {
  padding: 25px 30px;
  font-weight: bold;
  color: #212259;
  border-bottom: 1px solid #ccc;
  font-size: 24px;
}

.container-footer {
  padding: 25px 30px;
  border-top: 1px solid #ccc;
}

.container-content {
  font-size: 13px;
  padding: 25px 30px;
}

h3 {
  font-size: 17px;
}

.row::after {
  content: "";
  clear: both;
  display: table;
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

label {
  font-size: 12px;
}

input,
select {
  width: 100%;
  padding: 9px;
  margin-top: 5px;
  border-radius: 3px;
  outline: none;
  border: 1px solid #ccc;
  background-color: aliceblue;
}

input[disabled] {
  color: black;
}

select {
  padding: 9px 5px;
}

select:invalid {
  color: #777777;
}

option {
  color: black;
}

input:focus {
  border: 1px solid #212259;
  background-color: rgb(232, 240, 254);
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

.invalid input,
.invalid select {
  border: 1px solid red;
}

.column1 span,
.column2 span {
  color: red;
  font-size: 11px;
}

.save-btn {
  background-color: #2bc4e2;
  color: white;
  max-width: 70%;
  padding: 12px 20px;
  outline: none;
  border: none;
  cursor: pointer;
  font-size: 18px;
  text-align: center;
  box-sizing: border-box;
  border-radius: 5px;
  margin: 10px 0px;
}

.save-btn:hover {
  background-color: #07b9dd;
}

.photo-container {
  color: #212259;
  display: table-cell;
}

.photo-container span {
  margin-top: 10px;
  text-align: center;
  font-size: 12px;
  color: black;
  display: block;
}

.black-list-name {
  float: left;
  font-size: 19px;
  font-weight: bold;
}

a {
  float: right;
  cursor: pointer;
  font-size: 15px;
}

a:hover {
  font-weight: bold;
}

i {
  float: right;
  cursor: pointer;
  font-size: 28px;
}

.container-footer span {
  float: right;
  cursor: pointer;
  line-height: 60px;
}

.container-footer span:hover {
  color: red;
}

/* For tablets: */
@media only screen and (max-width: 820px) {
  .container-header {
    padding: 20px;
    font-size: 22px;
  }

  .container-footer {
    padding: 20px;
  }

  .container-content {
    padding: 20px;
    padding-bottom: 40px;
    margin: 0px;
    width: 100%;
    border-radius: 0px;
  }
}

/* For mobile phones: */
@media only screen and (max-width: 540px) {
  .container {
    border-radius: 0px;
  }

  .container-header {
    padding: 20px 5px;
    font-size: 20px;
  }

  .container-footer {
    padding: 10px;
  }

  .container-content {
    padding: 10px;
    padding-bottom: 40px;
    margin: 0px;
    width: 100%;
    border-radius: 0px;
  }

  .container-content {
    padding: 20px 5px;
  }

  .column1,
  .column2 {
    padding: 0px;
    width: 100%;
  }
}
</style>
