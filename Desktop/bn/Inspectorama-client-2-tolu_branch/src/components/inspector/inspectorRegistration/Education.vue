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
            <h3>{{$t('education.title')}}</h3>
            <p>
              <span>{{$t('education.highestEducation')}}</span>
            </p>
          </div>
          <br />
          <div class="edu-input-block" v-for="(education, index) in educations" :key="index">
            <span :for="education">
              <strong>#{{ index + 1 }}</strong>
            </span>
            <br />
            <div>
              <div class="inline-flex">
                <div
                  class="input-long"
                  :class="{invalid:  $v.educations.$each[index].educationType.$error}"
                >
                  <label for="education.educationType">{{$t('education.education')}}:</label>
                  <select @click="educationTypeClick()" v-model="education.educationType" required>
                    <option value selected hidden disabled>{{$t('education.selectEducation')}}</option>
                    <option value="High school or secondary education">{{$t('education.highSchool')}}</option>
                    <option value="Diploma">{{$t('education.diploma')}}</option>
                    <option value="College or university degree">{{$t('education.college')}}</option>
                    <option value="Masters degree">{{$t('education.masters')}}</option>
                    <option value="PhD degree">{{$t('education.phd')}}</option>
                    <!-- <option
                      :disabled="isEducationType(educationType)"
                      v-for="(educationType, index) in educationTypes"
                      :key="index"
                    >{{educationType}}</option>-->
                  </select>
                  <span
                    v-if="!$v.educations.$each[index].educationType.required &&
                        $v.educations.$each[index].educationType.$error"
                  >{{$t('education.validationError.educationRequired')}}</span>
                </div>
                <div
                  class="input-short"
                  :class="{invalid:  $v.educations.$each[index].gradYear.$error}"
                >
                  <label for="education.gradYear">{{$t('education.gradYear')}}:</label>
                  <div>
                    <Datepicker
                      class="date-picker"
                      v-model="education.gradYear"
                      lang="en"
                      type="year"
                      format="YYYY"
                      :placeholder="$t('education.gradYear')"
                      :disabled-date="(date)=>date > Date.now()"
                    ></Datepicker>
                    <span
                      v-if="!$v.educations.$each[index].gradYear.required &&
                        $v.educations.$each[index].gradYear.$error"
                    >{{$t('education.validationError.gradYearRequired')}}</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div
                class="column"
                :class="{invalid:  $v.educations.$each[index].nameOfInstitution.$error}"
              >
                <label for="education.nameOfInstitution">{{$t('education.nameOfInstitution')}}</label>
                <input
                  type="text"
                  placeholder="Enter name of Institution"
                  v-model="education.nameOfInstitution"
                />
                <span
                  v-if="!$v.educations.$each[index].nameOfInstitution.required &&
                        $v.educations.$each[index].nameOfInstitution.$error"
                >{{$t('education.validationError.nameOfInstitutionRequired')}}</span>
              </div>
            </div>
            <div v-if="(index + 1)> 1">
              <button
                type="button"
                class="delete-btn"
                @click="deleteEducation(index), educationTypeClick()"
              >{{$t('buttons.delete')}}</button>
            </div>
            <br />
            <hr />
            <br />
          </div>
          <div v-if="educations.length < 5">
            <button type="button" class="add-btn" @click="addEducation">{{$t('buttons.addNew')}}</button>
          </div>
          <br />
          <div class="row" style="color: red">
            <small>* {{$t('education.youWIllBeRequired')}} </small>
          </div>
          <br />
          <hr />
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
import InspRegProgress from "./InspRegProgress.vue";
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
      educationSelectedItems: [],
      educations: [
        {
          educationType: "",
          gradYear: "",
          nameOfInstitution: "",
          uploadedDoc: {
            fileName: "",
            fileData: null
          }
        }
      ]
      // educationTypes: [
      //   "High school or secondary education",
      //   "Diploma",
      //   "College or university degree",
      //   "Masters degree",
      //   "PhD degree"
      // ]
    };
  },
  validations: {
    educations: {
      $each: {
        educationType: {
          required
        },
        gradYear: {
          required
        },
        nameOfInstitution: {
          required
        },
        nameOfInstitution: {
          required
        }
      }
    }
  },
  computed: {
    getTypeOfInspector() {
      return this.$store.getters.typeOfInspector;
    }
  },
  methods: {
    educationTypeClick() {
      this.educationSelectedItems = [];

      this.educations.forEach(item => {
        this.educationSelectedItems.push(item.educationType);
      });
    },

    // isEducationType(educationType) {
    //   let item1;
    //   this.educationSelectedItems.forEach(item => {
    //     if (item == educationType) {
    //       item1 = item;
    //     }
    //   });
    //   return item1 == educationType;
    // },

    onSave(direction) {
      if (direction == "next" || direction == null) {
        this.$v.$touch();
        if (this.$v.$invalid) {
          return;
        }
      }

      const EducationData = {
        educations: this.educations
      };
      axios
        .patch("/inspector_infos/me", EducationData)
        .then(res => {
          if (direction == "next") {
            this.$router.push(`/${this.$i18n.locale}/inspector/language-proficiency`);
          }
          if (direction == "back") {
            if (this.getTypeOfInspector == "vehicle") {
              this.$router.push(`/${this.$i18n.locale}/inspector/vehicle/certifications`);
            } else if (this.getTypeOfInspector == "home") {
              this.$router.push(`/${this.$i18n.locale}/inspector/home/certifications`);
            }
          }
        })
    },
    addEducation() {
      const newEducation = {
        educationType: "",
        gradYear: "",
        nameOfInstitution: "",
        uploadedDoc: {
          fileName: "",
          fileData: null
        }
      };
      this.educations.push(newEducation);
      if (this.educations.length >= 6) {
        this.deleteEducation(5);
      }
    },
    deleteEducation(index) {
      this.educations.splice(index, 1);
      if (index === 0 && this.educations.length === 0) {
        this.addEducation();
      }
    }
  },

  beforeRouteLeave: function(to, from, next) {
    this.currentPage = null;
    next();
  },

  created() {
    this.currentPage = "educations";
    axios
      .get("/inspector_infos/me")
      .then(res => {
        if (
          res.data.educations[0] !== null &&
          res.data.educations[0] !== undefined
        ) {
          this.educations = res.data.educations;
        }
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
  padding-bottom: 40px;
  margin-left: 50px;
  max-width: 750px;
  border-radius: 10px;
  border: 1px solid #b6b1b1;
  display: inline-block;
}

label {
  display: block;
  width: 100%;
  font-size: 14px;
}

.add-btn,
.delete-btn {
  font-size: 13px;
  width: 80px;
  color: black;
  border-radius: 20px;
  font-weight: bold;
  background-color: white;
  outline: none;
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

.date-picker /deep/ input {
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

select,
input[type="text"] {
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

input:focus,
select:focus,
.date-picker /deep/ input:focus {
  outline: none;
  border: 1px solid #a842a7;
  background-color: #eee;
}

.invalid input,
.invalid select,
.invalid /deep/ input {
  border: 1px solid red;
}

.invalid label {
  color: red;
}

.invalid span {
  width: 100%;
  color: red;
  font-size: 12px;
  display: block;
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

.flex {
  display: flex;
}

.column {
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
  display: block;
}

.input-long,
.input-short {
  float: left;
  margin-top: 10px;
  margin-bottom: 10px;
}

.input-long {
  width: 75%;
  margin-right: 20px;
}

.input-short {
  width: 240px;
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
    padding-bottom: 20px;
  }

  @media only screen and (max-width: 520px) {
    .input-long,
    .input-short {
      width: 100%;
    }

    .inline-flex {
      display: inline-block;
    }
  }
}
</style>
