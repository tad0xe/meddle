<template>
  <div class="container">
    <div class="container-content">
      <h1>Refer an Inspector</h1>
      <hr />
      <p>
        Refer an inspector and get paid up to $200. For every referred inspector, earn $50 when they
        make their first earning, plus 5% of their subsequent earnings up to a maximum of $150.
      </p>
      <center>
        <button @click="showInspectorReferralLinkModal()" class="referral-btn">Get a referral link</button>
      </center>
      <center>
        <form @submit.prevent="onClickSend()">
          <div class="input-group">
            <div class="text-input" :class="{invalid: $v.firstName.$error}">
              <label>Referred Inspector's First Name *</label>
              <input
                type="text"
                required
                placeholder="First Name"
                @blur="$v.firstName.$touch()"
                v-model="firstName"
              />
              <span v-if="!$v.firstName.required && $v.firstName.$error">First Name is required.</span>
            </div>
            <br />
            <div class="text-input" :class="{invalid: $v.lastName.$error}">
              <label>Referred Inspector's Last Name *</label>
              <input
                type="text"
                required
                placeholder="Last Name"
                @blur="$v.lastName.$touch()"
                v-model="lastName"
              />
              <span v-if="!$v.lastName.required && $v.lastName.$error">Last name is required.</span>
            </div>
            <br />
            <div class="text-input" :class="{invalid: $v.email.$error}">
              <label>Referred Inspector's email address *</label>
              <input
                type="email"
                required
                placeholder="Enter Email"
                @blur="$v.email.$touch()"
                v-model="email"
              />
              <span v-if="!$v.email.email">Email is invalid.</span>
              <span v-if="!$v.email.required && $v.email.$error">Email is required.</span>
            </div>
            <br />
            <center>
              <p v-if="error" style="color: red">{{error}}</p>
            </center>
            <center>
              <button type="submit" class="email-btn" required>Send Invite</button>
            </center>
          </div>
        </form>
      </center>
    </div>
    <GetInspectorReferralLink
      v-show="isGetInspectorReferralLinkVisible"
      @close="hideInspectorReferralLinkModal()"
    ></GetInspectorReferralLink>
  </div>
</template>

<script>
import GetInspectorReferralLink from "../modals/referral/GetInspectorReferralLink.vue";
import { required, email } from "vuelidate/lib/validators";
import axios from "axios";
export default {
  components: {
    GetInspectorReferralLink
  },
  data() {
    return {
      isGetInspectorReferralLinkVisible: false,
      firstName: "",
      lastName: "",
      email: "",
      error: ""
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
  methods: {
    showInspectorReferralLinkModal() {
      this.isGetInspectorReferralLinkVisible = true;
    },
    hideInspectorReferralLinkModal() {
      this.isGetInspectorReferralLinkVisible = false;
    },

    onClickSend() {
      const referredData = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        referrerId: localStorage.getItem("userId")
      };
      axios
        .post("/inspector_referrals/byReferrer", referredData)
        .then(res => {
        })
        .catch(error => {
          console.log(error.response.data);
          this.error = error.response.data;
        });
    }
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.container {
  font-family: sans-serif, Arial, Helvetica;
  background-color: #e3f5e5;
  padding: 50px;
  width: 100%;
  display: inline-block;
}

.container-content {
  background: white;
  padding-left: 100px;
  padding-right: 100px;
  border-radius: 5px;
  border: 1px solid #ccc;
  width: 100%;
  display: inline-block;
}

h1 {
  font-size: 30px;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
}

p {
  font-size: 20px;
  text-align: center;
  padding-top: 20px;
  padding-bottom: 20px;
}

label {
  float: left;
  font-size: 14px;
  font-weight: bold;
}

.text-input {
  margin-left: 0px;
  margin-right: 10px;
  width: 300px;
}

.inline-input {
  width: 100%;
  margin-top: 5px;
  display: inline-block;
}

input {
  width: 100%;
  padding: 7px;
  border-radius: 3px;
  outline: none;
  border: 1px solid #ccc;
  background-color: rgb(232, 240, 254);
}

.invalid input {
  border: 1px solid red;
}

input:focus {
  outline: none;
  border: 1px solid #a842a7;
  background-color: #eee;
}

.text-input span {
  float: left;
  color: red;
  font-size: 11px;
}

.referral-btn {
  background-color: #2bc4e2;
  color: white;
  width: 200px;
  padding: 13px 20px;
  outline: none;
  border: none;
  cursor: pointer;
  font-size: 20px;
  text-align: center;
  box-sizing: border-box;
  border-radius: 5px;
  margin: 10px 0px;
}

.referral-btn:hover {
  background-color: #07b9dd;
}

.email-btn {
  background-color: #e22bd3;
  color: white;
  padding: 7px;
  outline: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
  text-align: center;
  box-sizing: border-box;
  border-radius: 5px;
}

.email-btn:hover {
  background-color: #c716b8;
}

.input-group {
  padding-top: 50px;
}

/* For desktop: */
@media screen and (max-width: 980px) {
  .container {
    padding: 20px;
  }

  .container-content {
    padding-left: 20px;
    padding-right: 20px;
  }

  h1 {
    font-size: 26px;
  }

  p {
    font-size: 18px;
  }
}

/* For mobile phones: */
@media only screen and (max-width: 530px) {
  .container {
    padding: 0px;
  }

  .container-content {
    border-radius: 0px;
    padding-left: 10px;
    padding-right: 10px;
  }

  h1 {
    font-size: 23px;
    margin: 20px 0px;
    text-align: left;
  }

  p {
    font-size: 18px;
    margin: 10px 0px;
    text-align: left;
  }

  .text-input {
    margin-top: 10px;
    margin-bottom: 10px;
    width: 100%;
  }

  .input-container {
    width: 100%;
  }

  input {
    width: 100%;
  }

  .referral-btn {
    margin: 0px 0px;
    font-size: 18px;
  }

  .email-btn {
    margin-top: 10px;
  }
}
</style>
