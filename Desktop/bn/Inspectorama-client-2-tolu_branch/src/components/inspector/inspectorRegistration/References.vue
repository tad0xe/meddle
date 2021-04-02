<template>
  <div>
    <div class="container">
      <div class="container-left">
        <InspRegProgress :currentPage="currentPage"></InspRegProgress>
      </div>
      <div class="container-right">
        <form @submit.prevent="onSubmit">
          <div class="text-spaced">
            <h2>{{$t('references.title')}}</h2>
            <br />
            <h3>{{$t('references.forUsToVerify')}}</h3>
            <p>
              <span>{{$t('references.theReferenceCouldBe')}}</span>
            </p>
          </div>
          <br />
          <div v-for="(reference, index) in references" :key="index">
            <span :for="reference">
              <strong>#{{ index + 1 }}</strong>
            </span>
            <br />
            <div class="row">
              <div
                class="input-left"
                :class="{invalid:  $v.references.$each[index].firstName.$error}"
              >
                <label for="firstName">{{$t('generic.firstName')}} *</label>
                <input type="text" :placeholder="$t('generic.firstName')" v-model="reference.firstName" />
                <span
                  v-if="!$v.references.$each[index].firstName.required && 
                        $v.references.$each[index].firstName.$error"
                >{{$t('generic.validationError.firstNameRequired')}}</span>
              </div>
              <div
                class="input-right"
                :class="{invalid:  $v.references.$each[index].lastName.$error}"
              >
                <label for="lastName">{{$t('generic.lastName')}} *</label>
                <input type="text" :placeholder="$t('generic.lastName')" v-model="reference.lastName" />
                <span
                  v-if="!$v.references.$each[index].lastName.required && 
                        $v.references.$each[index].lastName.$error"
                >{{$t('generic.validationError.lastNameRequired')}}</span>
              </div>
            </div>
            <div class="row">
              <div
                class="column"
                :class="{invalid:  $v.references.$each[index].companyName.$error}"
              >
                <label for="companyName">{{$t('generic.companyName')}}</label>
                <input type="text" :placeholder="$t('generic.companyName')" v-model="reference.companyName" />
                <span
                  v-if="!$v.references.$each[index].companyName.required && 
                        $v.references.$each[index].companyName.$error"
                >{{$t('generic.validationError.companyNameRequired')}}</span>
              </div>
            </div>
            <div class="row">
              <div
                class="input-left"
                :class="{invalid:  $v.references.$each[index].telephone.countryCode.$error ||
                 $v.references.$each[index].telephone.phoneNumber.$error}"
              >
                <label for="telephone">{{$t('references.telephone')}} *</label>
                <div class="flex">
                  <div class="dialing-code">
                    <input type="text" v-model="reference.telephone.countryCode" />
                  </div>
                  <div class="phone-number">
                    <input
                      type="tel"
                      v-model="reference.telephone.phoneNumber"
                      :placeholder="$t('references.enterPhoneNumber')"
                    />
                  </div>
                </div>
                <span
                  v-if="!$v.references.$each[index].telephone.countryCode.required && 
                        $v.references.$each[index].telephone.countryCode.$error"
                >{{$t('generic.validationError.countryCodeRequired')}}</span>
                <span
                  v-if="!$v.references.$each[index].telephone.phoneNumber.required && 
                        $v.references.$each[index].telephone.phoneNumber.$error"
                >{{$t('generic.validationError.telephoneNumRequired')}}</span>
              </div>
              <div class="input-right" :class="{invalid:  $v.references.$each[index].email.$error}">
                <label for="email">{{$t('generic.emailAddress')}} *</label>
                <input type="text" :placeholder="$t('generic.emailAddress')" v-model="reference.email" />
                <span v-if="!$v.references.$each[index].email.email">{{$t('generic.validationError.emailIsInvalid')}}</span>
                <span
                  v-if="!$v.references.$each[index].email.required && 
                        $v.references.$each[index].email.$error"
                >{{$t('generic.validationError.emailIsRequired')}}</span>
              </div>
            </div>
            <div class="row">
              <div
                class="input-left"
                :class="{invalid:  $v.references.$each[index].yourRelationship.$error}"
              >
                <label for="relationship">{{$t('references.yourRelationShip')}}</label>
                <select name="selectRelationship" v-model="reference.yourRelationship" required>
                  <option value disabled hidden selected>{{$t('references.selectRelationship')}}</option>
                  <option
                    v-for="(relationshipType, index) in relationshipTypes"
                    :key="index"
                  >{{relationshipType}}</option>
                </select>
                <span
                  v-if="!$v.references.$each[index].yourRelationship.required && 
                        $v.references.$each[index].yourRelationship.$error"
                >{{$t('references.validationError.relationshipRequired')}}</span>
              </div>
            </div>
            <div v-if="(index + 1)> 1">
              <button class="delete-btn" type="button" @click="deleteReference(index)">{{$t('buttons.delete')}}</button>
            </div>
            <br />
            <hr />
            <br />
          </div>
          <div v-if="references.length < 5">
            <button type="button" class="add-btn" @click="addReference">{{$t('buttons.addNew')}}</button>
            <br />
            <br />
            <hr />
          </div>
          <br />
          <div class="flex">
            <div class="maximum">
              <button type="button" @click.prevent="onSave('back')" class="back-btn">{{$t('buttons.back')}}</button>
            </div>
            <div>
              <button type="button" @click.prevent="onSave()" class="save-btn">{{$t('buttons.save')}}</button>
            </div>
            <div>
              <button type="button" @click.prevent="onSave('next')" class="next-btn">{{$t('buttons.next')}}</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import dialingCodesList from "../../../mockData/dialingCodesList";
import InspRegProgress from "./InspRegProgress.vue";
import { required, email } from "vuelidate/lib/validators";
export default {
  components: {
    InspRegProgress
  },
  data() {
    return {
      currentPage: "",
      references: [
        {
          firstName: "",
          lastName: "",
          companyName: "",
          telephone: {
            countryCode: "",
            phoneNumber: ""
          },
          email: "",
          yourRelationship: ""
        }
      ],
      relationshipTypes: [
        "Manager (former)",
        "Manager (current)",
        "Colleague (former)",
        "Colleague (present)",
        "Client",
        "Business partner"
      ]
    };
  },
  validations: {
    references: {
      $each: {
        firstName: {
          required
        },
        lastName: {
          required
        },
        telephone: {
          countryCode: {
            required
          },
          phoneNumber: {
            required
          }
        },
        email: {
          required,
          email
        },
        companyName: {
          required
        },
        yourRelationship: {
          required
        }
      }
    }
  },
  methods: {
    onSave(direction) {
      if (direction == "next" || direction == null) {
        this.$v.$touch();
        if (this.$v.$invalid) {
          return;
        }
      }
      const referencesData = {
        references: this.references
      };
      axios
        .patch("/inspector_infos/me", referencesData)
        .then(res => {
          if (direction == "next") {
            
            this.$router.push(`/${this.$i18n.locale}/inspector/upload-documentaion`);
          }
          if (direction == "back") {
            this.$router.push(`/${this.$i18n.locale}/inspector/language-proficiency`);
          }
        })
    },
    addReference() {
      const newReference = {
        firstName: "",
        lastName: "",
        companyName: "",
        telephone: {
          countryCode: "",
          phoneNumber: ""
        },
        email: "",
        yourRelationship: ""
      };
      this.references.push(newReference);
      if (this.references.length >= 6) {
        this.deleteReference(5);
      }
    },
    deleteReference(index) {
      this.references.splice(index, 1);
      if (index === 0 && this.references.length === 0) {
        this.addReference();
      }
    }
  },
  beforeRouteLeave: function(to, from, next) {
    this.currentPage = null;
    next();
  },
  created() {
    this.currentPage = "references";
    axios
      .get("/inspector_infos/me")
      .then(res => {
        if (
          res.data.references[0] !== null &&
          res.data.references[0] !== undefined
        ) {
          this.references = res.data.references;
        }
      })
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
  width: 100%;
  display: flex;
}
.container-left {
  width: auto;
  display: inline-block;
}
.container-right {
  background-color: white;
  padding: 30px;
  padding-bottom: 40px;
  margin-left: 50px;
  max-width: 750px;
  border-radius: 10px;
  border: 1px solid #b6b1b1;
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
option:disabled {
  color: #b6b1b1;
}
label {
  font-size: 14px;
  width: 100%;
  display: block;
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
.invalid label {
  color: red;
}
.invalid span {
  color: red;
  font-size: 12px;
}
.add-btn,
.delete-btn {
  font-size: 13px;
  width: 80px;
  color: black;
  outline: none;
  border-radius: 20px;
  font-weight: bold;
  background-color: white;
  height: 30px;
  text-align: center;
  box-sizing: border-box;
  cursor: pointer;
  opacity: 0.9;
}
.add-btn:hover {
  opacity: 1;
  color: blue;
}
.delete-btn:hover {
  opacity: 1;
  color: red;
}
.flex {
  display: flex;
}
.maximum {
  flex: 1;
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
.back-btn,
.next-btn,
.save-btn {
  font-size: 13px;
  width: 70px;
  border-radius: 20px;
  font-weight: bold;
  height: 40px;
  outline: none;
  text-align: center;
  box-sizing: border-box;
  cursor: pointer;
  opacity: 0.9;
  display: block;
}
.back-btn {
  color: white;
  background-color: black;
}
.next-btn {
  margin-left: 20px;
  color: white;
  background-color: black;
}
.save-btn {
  float: right;
  color: black;
  background-color: white;
}
.save-btn:hover {
  opacity: 1;
  color: white;
  background-color: black;
}
.back-btn:hover {
  opacity: 1;
  color: black;
  background-color: white;
}
.next-btn:hover {
  opacity: 1;
  color: black;
  background-color: white;
}
.text-spaced {
  font-size: 18px;
}
.text-spaced span {
  font-weight: lighter;
  font-size: 14px;
}
/* Clear floats after the columns */
.row::after {
  content: "";
  clear: both;
  display: table;
}
.column,
.input-left,
.input-right {
  margin-top: 10px;
  margin-bottom: 10px;
}
.input-left,
.input-right {
  float: left;
  width: 40%;
}
.input-left {
  margin-right: 20px;
}
.column {
  width: 83%;
}
/* For tablets: */
@media screen and (max-width: 980px) {
  .container {
    padding: 20px;
  }
  .container-right {
    margin-left: 20px;
  }
  .input-left,
  .input-right {
    width: 45%;
  }
  .column {
    width: 94%;
  }
  @media only screen and (max-width: 820px) {
    .container {
      padding: 5px;
      background-color: white;
    }
    .container-right {
      margin: 0px;
      width: 100%;
      border-radius: 0px;
    }
    .container-left {
      display: none;
    }
  }
}
/* For mobile: */
@media only screen and (max-width: 620px) {
  .container-right {
    padding: 10px;
    padding-bottom: 20px;
  }
  @media only screen and (max-width: 520px) {
    .input-left,
    .input-right,
    .column {
      width: 100%;
    }
  }
}
</style>