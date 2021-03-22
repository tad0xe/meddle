<template>
  <div>
    <div class="container">
      <div class="container-left">
        <InspRegProgress :currentPage="currentPage"></InspRegProgress>
      </div>
      <div class="container-right">
        <form @submit.prevent="onSubmit">
          <div class="text-spaced">
            <h2>
              {{$t('generic.weHaveToKnowYou')}}
              <br />
              <span>{{$t('generic.pleaseTakeOutTime')}}</span>
            </h2>
            <br />
            <h3>{{$t('homeInspCertifications.title')}}</h3>
            <p>
              <span>{{$t('vehicleInspCertifications.pleaseAdd')}}</span>
            </p>
          </div>
          <br />
          <div
            class="cert-input-block"
            v-for="(proCert, index) in proCerts"
            :key="(index, proCert)"
          >
            <span :for="proCert">
              <strong>#{{ index + 1 }}</strong>
            </span>
            <br />
            <div class="inline-flex">
              <div
                class="input-long"
                :class="{invalid:  $v.proCerts.$each[index].certAuthority.$error}"
              >
                <label
                  for="proCert.certAuthority"
                >{{$t('vehicleInspCertifications.certAuthority')}}: *</label>
                <div>
                  <input
                    type="text"
                    :placeholder="$t('vehicleInspCertifications.certAuthority')"
                    v-model="proCert.certAuthority"
                  />
                  <span
                    v-if="!$v.proCerts.$each[index].certAuthority.required && 
                        $v.proCerts.$each[index].certAuthority.$error"
                  >{{$t('vehicleInspCertifications.validationError.certAuthorityRequired')}}</span>
                </div>
              </div>
              <div class="input-short" :class="{invalid:  $v.proCerts.$each[index].certNum.$error}">
                <label for="proCert.certNum">{{$t('vehicleInspCertifications.certNum')}}: *</label>
                <div>
                  <input
                    type="tel"
                    :placeholder="$t('vehicleInspCertifications.certNum')"
                    v-model="proCert.certNum"
                  />
                  <span
                    v-if="!$v.proCerts.$each[index].certNum.required && 
                        $v.proCerts.$each[index].certNum.$error"
                  >{{$t('vehicleInspCertifications.validationError.certNumRequired')}}</span>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="input-long" :class="{invalid:  $v.proCerts.$each[index].certName.$error}">
                <label for="proCert.certName">{{$t('vehicleInspCertifications.certName')}}: *</label>
                <div>
                  <input
                    type="text"
                    :placeholder="$t('vehicleInspCertifications.certName')"
                    v-model="proCert.certName"
                  />
                  <span
                    v-if="!$v.proCerts.$each[index].certName.required && 
                        $v.proCerts.$each[index].certName.$error"
                  >{{$t('vehicleInspCertifications.validationError.certNameRequired')}}</span>
                </div>
              </div>
            </div>
            <div class="inline-flex">
              <div class="date" :class="{invalid:  $v.proCerts.$each[index].validFrom.$error}">
                <label>{{$t('vehicleInspCertifications.validFrom')}} *</label>
                <div>
                  <Datepicker
                    class="month-year-input"
                    v-model="proCert.validFrom"
                    :lang="setDatepickerLang"
                    type="month"
                    format="YYYY-MMMM"
                    :disabled-date="(date)=>date > Date.now()"
                    :placeholder="$t('vehicleInspCertifications.validFrom')"
                  ></Datepicker>
                  <span
                    v-if="!$v.proCerts.$each[index].validFrom.required && 
                        $v.proCerts.$each[index].validFrom.$error"
                  >{{$t('vehicleInspCertifications.validationError.pleaseSelectDate')}}</span>
                </div>
              </div>
              <div class="flex">
                <div
                  class="date"
                  v-show="!proCert.doesNotExpire"
                  :class="{invalid:  $v.proCerts.$each[index].validTo.$error}"
                >
                  <label>{{$t('vehicleInspCertifications.validTo')}} *</label>
                  <div>
                    <Datepicker
                      class="month-year-input"
                      v-model="proCert.validTo"
                      :lang="setDatepickerLang"
                      type="month"
                      format="YYYY-MMMM"
                      :disabled-date="(date)=>date < Date.now()"
                      :placeholder="$t('vehicleInspCertifications.validTo')"
                    ></Datepicker>
                    <span
                      v-if="!$v.proCerts.$each[index].validTo.required && 
                        $v.proCerts.$each[index].validTo.$error"
                    >{{$t('vehicleInspCertifications.validationError.pleaseSelectDate')}}</span>
                  </div>
                </div>
                <div class="margin_top" :class="{height: proCert.doesNotExpire}">
                  <label class="flex">
                    <input type="checkbox" v-model="proCert.doesNotExpire" />
                    <span>{{$t('vehicleInspCertifications.certDoesNotExpire')}}</span>
                  </label>
                </div>
              </div>
            </div>
            <div class="spacing">
              <label class="flex">
                <input type="checkbox" v-model="proCert.isUrl" for="certificationUrl" />
                <span>{{$t('vehicleInspCertifications.certUrl')}}:</span>
              </label>
              <div>
                <input
                  v-if="proCert.isUrl"
                  type="url"
                  :placeholder="$t('vehicleInspCertifications.certUrl')"
                  v-model="proCert.certUrl"
                />
              </div>
            </div>
            <div v-if="(index + 1)> 1">
              <button
                type="button"
                class="delete-btn"
                @click="deleteProCert(index)"
              >{{$t('buttons.delete')}}</button>
            </div>
            <br />
            <hr />
          </div>
          <div v-if="proCerts.length < 5">
            <button type="button" class="add-btn" @click="addProCert">{{$t('buttons.addNew')}}</button>
          </div>
          <br />
          <div>
            <p style="color: red">
              <small>* {{$t('vehicleInspCertifications.youWillBeRequired')}}</small>
            </p>
          </div>
          <br />
          <hr />
          <br />
          <div class="flex">
            <div class="maximum">
              <button
                type="button"
                @click.prevent="onSave('back')"
                class="back-btn"
              >{{$t('buttons.back')}}</button>
            </div>
            <div>
              <button
                type="button"
                @click.prevent="onSave()"
                class="save-btn"
              >{{$t('buttons.save')}}</button>
            </div>
            <div>
              <button
                type="button"
                @click.prevent="onSave('next')"
                class="next-btn"
              >{{$t('buttons.next')}}</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import InspRegProgress from "../InspRegProgress.vue";
import Datepicker from "vue2-datepicker";
import { required } from "vuelidate/lib/validators";
export default {
  components: {
    InspRegProgress,
    Datepicker
  },

  data() {
    return {
      currentPage: "",
      proCerts: [
        {
          certAuthority: "",
          certNum: "",
          certName: "",
          validFrom: "",
          validTo: "",
          doesNotExpire: false,
          certUrl: "",
          isUrl: false
        }
      ],
      initialCertNames: []
    };
  },
  validations: {
    proCerts: {
      $each: {
        certAuthority: {
          required
        },
        certNum: {
          required
        },
        certName: {
          required
        },
        validFrom: {
          required
        },
        validTo: {
          required
        }
      }
    }
  },
  computed: {
    setDatepickerLang() {
      return {
        formatLocale: {
          months: this.$t("datepicker.months"),
          monthsShort: this.$t("datepicker.monthsShort"),
          weekdaysMin: this.$t("datepicker.weekdaysMin")
        }
      };
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

      const proCertData = {
        proCerts: this.proCerts
      };

      //Create array of remaining procert names after making changes
      let remainingProcertNames = [];
      this.proCerts.forEach(item => {
        remainingProcertNames.push(item.certName);
      });

      const removedProcertNames = [];

      this.initialCertNames.forEach(element => {
        if (remainingProcertNames.includes(element)) {
        } else {
          removedProcertNames.push(element);
        }
      });
      //Send the array to the backend to remove any uploaded files
      axios.post(
        "/inspector_infos/removeDocsIfUploadeded",
        removedProcertNames
      );

      axios
        .patch("/inspector_infos/me", proCertData)
        .then(res => {
          if (direction == "next") {
            this.$router.push(`/${this.$i18n.locale}/inspector/education`);
          }

          if (direction == "back") {
            this.$router.push(
              `/${this.$i18n.locale}/inspector/home/area-of-specialization`
            );
          }
        })
        .catch(error => console.log(error.response.data));
    },

    addProCert() {
      const newProCert = {
        certAuthority: "",
        certNum: "",
        certName: "",
        validFrom: "",
        validTo: "",
        doesNotExpire: false,
        certUrl: "",
        isUrl: false
        // uploadedDoc: {
        //   fileName: "",
        //   fileData: null
        // }
      };
      this.proCerts.push(newProCert);
      if (this.proCerts.length >= 6) {
        this.deleteProCert(5);
      }
    },
    deleteProCert(index) {
      this.proCerts.splice(index, 1);
      if (index === 0 && this.proCerts.length === 0) {
        this.addProCert();
      }
    }
  },

  beforeRouteLeave: function(to, from, next) {
    this.currentPage = null;
    next();
  },

  created() {
    this.currentPage = "proCerts";
    axios
      .get("/inspector_infos/me")
      .then(res => {
        console.log(res.data.proCerts);
        if (
          res.data.proCerts[0] !== null &&
          res.data.proCerts[0] !== undefined
        ) {
          this.proCerts = res.data.proCerts;
        }
        this.proCerts.forEach(item => {
          this.initialCertNames.push(item.certName);
        });
      })
      .catch(error => console.log(error));
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
  margin-left: 50px;
  max-width: 750px;
  border-radius: 10px;
  border: 1px solid #b6b1b1;
  display: inline-block;
}

input[type="text"],
input[type="tel"],
input[type="url"] {
  width: 100%;
  padding: 9px;
  margin-top: 6px;
  border: 1px solid #ccc;
  border-radius: 3px;
  outline: none;
  background-color: rgb(232, 240, 254);
}

.month-year-input /deep/ input {
  width: 100%;
  margin-top: 6px;
  color: black;
  border: 1px solid #ccc;
  border-radius: 3px;
  background-clip: padding-box;
  outline: none;
  box-shadow: none;
  background-color: rgb(232, 240, 254);
  display: block;
}

.month-year-input {
  width: 160px;
  margin-right: 20px;
  display: block;
}

.margin_top {
  margin-top: 40px;
  display: block;
}

label {
  width: 100%;
  display: block;
  font-size: 14px;
}

label span {
  font-size: 13px;
}

input:focus,
.month-year-input /deep/ input:focus {
  outline: none;
  border: 1px solid #a842a7;
  background-color: #eee;
}

.invalid input,
.invalid /deep/ input {
  border: 1px solid red;
}

.invalid label {
  color: red;
}

.invalid span {
  color: red;
  font-size: 12px;
}

.date,
.input-long,
.input-short {
  margin-top: 10px;
  margin-bottom: 10px;
  display: inline-block;
}

.input-long {
  width: 50%;
  margin-right: 20px;
}

.input-short {
  width: 200px;
  margin-right: 0px;
}

.float-left {
  float: left;
}

.inline-block {
  display: flex;
}

.cert-input-block {
  margin-bottom: 20px;
}

.add-btn,
.delete-btn {
  font-size: 13px;
  width: 80px;
  color: black;
  border-radius: 20px;
  font-weight: bold;
  outline: none;
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

.flex,
.inline-flex {
  display: flex;
}

.maximum {
  flex: 1;
}

.spacing {
  margin-top: 20px;
  margin-bottom: 20px;
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

/* For tablets: */
@media screen and (max-width: 980px) {
  .container {
    padding: 20px;
  }

  .container-right {
    margin-left: 20px;
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
    padding-bottom: 30px;
  }

  @media only screen and (max-width: 480px) {
    .container-right {
      padding: 10px;
    }

    .inline-flex {
      width: 100%;
      display: inline-block;
    }

    .input-short,
    .input-long {
      margin-right: 0px;
      width: 100%;
    }

    .month-year-input {
      margin-right: 10px;
    }

    .height {
      margin-top: 5px;
    }
  }
}
</style>
