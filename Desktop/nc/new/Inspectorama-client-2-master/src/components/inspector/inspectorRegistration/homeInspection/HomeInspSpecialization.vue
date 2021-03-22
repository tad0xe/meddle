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
            <h3>{{$t('homeInspSpecialization.title')}}</h3>
          </div>
          <br />
          <div class="column1">
            <div>
              <label for="totalYearsOfExp">{{$t('homeInspSpecialization.totalYearsOfExp')}}</label>
            </div>
            <div class="max" :class="{invalid: $v.areaOfSpecialization.totalYearsOfExp.$error}">
              <input v-model="areaOfSpecialization.totalYearsOfExp" />
              <span
                v-if="!$v.areaOfSpecialization.totalYearsOfExp.required && 
                        $v.areaOfSpecialization.totalYearsOfExp.$error"
              >{{$t('homeInspSpecialization.validationError.totalYearsOfExpRequired')}}</span>
              <span
                v-if="!$v.areaOfSpecialization.totalYearsOfExp.numeric && 
                        $v.areaOfSpecialization.totalYearsOfExp.$error"
              >{{$t('homeInspSpecialization.validationError.totalYearsOfExpMustBeNum')}}</span>
            </div>
          </div>
          <br />
          <div>
            <div>
              <label>{{$t('homeInspSpecialization.homeSpecializations')}}</label>
            </div>
            <div
              class="column"
              v-for="(homeInspectionSpecialization, index) in areaOfSpecialization.homeInspectionSpecializations"
              :key="index"
            >
              <div>
                <label :for="homeInspectionSpecialization">
                  <strong>#{{ index + 1 }}</strong>
                </label>
              </div>
              <div
                class="max"
                :class="{invalid: $v.areaOfSpecialization.homeInspectionSpecializations.$each[index].specializationType.$error}"
              >
                <select
                  @click="onSelectSpecializationType()"
                  v-model="homeInspectionSpecialization.specializationType"
                  required
                >
                  <option value selected disabled hidden>{{$t('homeInspSpecialization.selectSpecializationType')}}</option>
                  <option
                    :disabled="isSpecializationType(specializationType.value)"
                    v-for="(specializationType, index) in specializationTypes"
                    :value="specializationType.value"
                    :key="index"
                  >{{specializationType.type}}</option>
                </select>
                <span
                  v-if="!$v.areaOfSpecialization.homeInspectionSpecializations.$each[index].specializationType.required && 
                        $v.areaOfSpecialization.homeInspectionSpecializations.$each[index].specializationType.$error"
                >{{$t('homeInspSpecialization.validationError.areaOfSpecializationRequired')}}</span>
              </div>
              <div
                class="max"
                :class="{invalid: $v.areaOfSpecialization.homeInspectionSpecializations.$each[index].yearsOfSpecializationExp.$error}"
              >
                <input
                  v-model="homeInspectionSpecialization.yearsOfSpecializationExp"
                  required
                  :placeholder="$t('homeInspSpecialization.enterYearsOfExp')"
                />
                <span
                  v-if="!$v.areaOfSpecialization.homeInspectionSpecializations.$each[index].yearsOfSpecializationExp.required && 
                        $v.areaOfSpecialization.homeInspectionSpecializations.$each[index].yearsOfSpecializationExp.$error"
                >{{$t('homeInspSpecialization.validationError.yearsOfExpRequired')}}</span>
                <span
                  v-if="!$v.areaOfSpecialization.homeInspectionSpecializations.$each[index].yearsOfSpecializationExp.numeric && 
                        $v.areaOfSpecialization.homeInspectionSpecializations.$each[index].yearsOfSpecializationExp.$error"
                >{{$t('homeInspSpecialization.validationError.yearsOfExpMustBeNum')}}</span>
              </div>
              <div>
                <button
                  class="delete-btn"
                  @click="deletehomeInspectionSpecialization(index), onSelectSpecializationType()"
                  type="button"
                >X</button>
              </div>
            </div>
          </div>
          <div>
            <button @click="addHomeInspectionSpecialization()" type="button" class="add-btn">{{$t('buttons.addNew')}}</button>
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
import { mapState, mapActions, mapMutations, mapGetters } from "vuex";
import InspRegProgress from "../InspRegProgress.vue";
import vehicleBrands from "../../../../mockData/vehicleBrands";
import { required, numeric } from "vuelidate/lib/validators";
import {
  numOfYearsToPastDate,
  dateToNumberOfYearsPassed,
  transformObjectToValueTypeArray
} from "../../../../utility";

export default {
  components: {
    InspRegProgress
  },
  data() {
    return {
      currentPage: "",
      selectedSpecializationItems: [],
      areaOfSpecialization: {
        totalYearsOfExp: "",
        totalExpStartYear: "",
        homeInspectionSpecializations: [
          {
            specializationType: "",
            yearsOfSpecializationExp: "",
            startYearOfSpecializationExp: ""
          }
        ]
      },
      initialSpecializationTypes: [],
      specializationTypes: transformObjectToValueTypeArray(this.$t('homeInspSpecialization.specializationTypes'))
    };
  },
  validations: {
    areaOfSpecialization: {
      totalYearsOfExp: {
        required,
        numeric
      },
      homeInspectionSpecializations: {
        $each: {
          specializationType: {
            required
          },
          yearsOfSpecializationExp: {
            required,
            numeric
          }
        }
      }
    }
  },
  watch:{
    '$i18n.locale'(to, fro){
       this.specializationTypes = transformObjectToValueTypeArray(this.$t('homeInspSpecialization.specializationTypes'))
    }
  },
  methods: {
    ...mapActions(["specializationInfoData"]),

    onSelectSpecializationType() {
      this.selectedSpecializationItems = [];
      this.areaOfSpecialization.homeInspectionSpecializations.forEach(item => {
        this.selectedSpecializationItems.push(item.specializationType);
      });
    },

    isSpecializationType(specializationType) {
      let item1;
      this.selectedSpecializationItems.forEach(item => {
        if (item == specializationType) {
          item1 = item;
        }
      });
      return item1 == specializationType;
    },

    onSave(direction) {
      if (direction == "next" || direction == null) {
        this.$v.$touch();
        if (this.$v.$invalid) {
          return;
        }
      }

      const specializationInfoData = {
        areaOfSpecialization: this.areaOfSpecialization
      };

      //Create array of remaining specialization types after making changes
      let remainingSpecializationTypes = [];
      this.areaOfSpecialization.homeInspectionSpecializations.forEach(item => {
        remainingSpecializationTypes.push(item.specializationType);
      });

      const removedSpecializationTypes = [];

      this.initialSpecializationTypes.forEach(element => {
        if (remainingSpecializationTypes.includes(element)) {
        } else {
          removedSpecializationTypes.push(element);
        }
      });

      //Send the array to the backend to remove any uploaded files
      axios.post(
        "/inspector_infos/removeDocsIfUploadeded",
        removedSpecializationTypes
      );

      //Set the start date of their work experiences
      this.areaOfSpecialization.totalExpStartYear = numOfYearsToPastDate(
        this.areaOfSpecialization.totalYearsOfExp
      );

      this.areaOfSpecialization.homeInspectionSpecializations.map(item => {
        item.startYearOfSpecializationExp = numOfYearsToPastDate(
          item.yearsOfSpecializationExp
        );
        return item;
      });
      axios
        .patch("/inspector_infos/me", specializationInfoData)
        .then(res => {
          if (direction == "next") {
            this.$router.push(`/${this.$i18n.locale}/inspector/home/certifications`);
          }

          if (direction == "back") {
            this.$router.push(`/${this.$i18n.locale}/inspector/personal-information`);
          }
        })
        .catch(error => console.log(error.response.data));
    },

    addHomeInspectionSpecialization() {
      const newHomeInspectionSpecialization = {
        specializationType: "",
        yearsOfSpecializationExp: "",
        startYearOfSpecializationExp: ""
      };

      this.areaOfSpecialization.homeInspectionSpecializations.push(
        newHomeInspectionSpecialization
      );
      if (this.areaOfSpecialization.homeInspectionSpecializations.length >= 6) {
        this.deletehomeInspectionSpecialization(5);
      }
    },
    deletehomeInspectionSpecialization(index) {
      this.areaOfSpecialization.homeInspectionSpecializations.splice(index, 1);
      if (
        index === 0 &&
        this.areaOfSpecialization.homeInspectionSpecializations.length === 0
      ) {
        this.addHomeInspectionSpecialization();
      }
    }
  },

  beforeRouteLeave: function(to, from, next) {
    this.currentPage = null;
    next();
  },

  computed: {
    ...mapState({
      inspectorInfo: state => state.vehicleInspector.inspectorInfo
    })
  },
  created() {
    this.currentPage = "areaOfSpecialization";

    axios
      .get("/inspector_infos/me")
      .then(res => {
        if (res.data.areaOfSpecialization !== null) {
          this.areaOfSpecialization = res.data.areaOfSpecialization;
        }
        this.areaOfSpecialization.homeInspectionSpecializations.forEach(
          item => {
            this.initialSpecializationTypes.push(item.specializationType);
          }
        );
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

.add-btn {
  font-size: 13px;
  width: 80px;
  margin-top: 5px;
  color: black;
  border-radius: 20px;
  font-weight: bold;
  background-color: white;
  height: 30px;
  outline: none;
  text-align: center;
  box-sizing: border-box;
  cursor: pointer;
  opacity: 0.9;
}
.add-btn:hover {
  opacity: 1;
  color: white;
  background-color: black;
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

select,
input {
  width: 100%;
  padding: 8px 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
  outline: none;
  background-color: rgb(232, 240, 254);
}

select:invalid {
  color: #777777;
}

input:invalid {
  color: #777777;
}

option {
  color: black;
}

option:disabled {
  color: #b6b1b1;
}

input:focus {
  outline: none;
  border: 1px solid #a842a7;
  background-color: #eee;
}

.invalid select {
  border: 1px solid red;
}

label {
  margin-top: 8px;
  font-size: 15px;
  display: block;
}

.invalid label {
  color: red;
}

.invalid span {
  color: red;
  font-size: 12px;
}

.delete-btn {
  float: left;
  padding: 0px;
  margin-top: 8px;
  font-size: 13px;
  color: black;
  font-weight: bold;
  text-align: center;
  box-sizing: border-box;
  cursor: pointer;
  opacity: 0.9;
  display: block;
}

.delete-btn:hover {
  opacity: 1;
  color: red;
}

.text-spaced {
  font-size: 18px;
}

.text-spaced span {
  font-weight: lighter;
  font-size: 14px;
}

.flex {
  display: flex;
}

.column1 {
  max-width: 450px;
  display: flex;
}

.column {
  margin-top: 10px;
  margin-bottom: 10px;
  max-width: 500px;
  display: flex;
}

.maximum {
  flex: 1;
}

.max {
  margin-left: 10px;
  margin-right: 10px;
  flex: 1;
}

@media screen and (max-width: 980px) {
  .container {
    padding: 20px;
  }

  .container-right {
    margin-left: 20px;
  }
}

/* For tablets: */
@media only screen and (max-width: 820px) {
  .container-right {
    margin: 0px;
    width: 100%;
  }

  .container-left {
    display: none;
  }
}

/* For mobile: */
@media only screen and (max-width: 560px) {
  .container {
    padding: 5px;
    background-color: white;
  }

  .container-right {
    padding: 10px;
    padding-bottom: 40px;
    border-radius: 0px;
  }

  .max {
    margin-left: 5px;
    margin-right: 5px;
  }

  .column1 .max {
    margin-right: 0px;
  }
}
</style>
