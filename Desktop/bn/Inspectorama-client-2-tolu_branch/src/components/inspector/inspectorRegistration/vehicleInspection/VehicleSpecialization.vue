<template>
  <div>
    <div class="container">
      <div class="container-left">
        <InspRegProgress :currentPage="currentPage"></InspRegProgress>
      </div>
      <div class="container-right">
        <form>
          <div class="text-spaced">
            <h2>
              {{$t('generic.weHaveToKnowYou')}}
              <br />
              <span>{{$t('generic.pleaseTakeOutTime')}}</span>
            </h2>
            <br />
            <h3>{{$t('vehicleSpecialization.title')}}</h3>
          </div>
          <br />
          <div class="column1" :class="{invalid: $v.areaOfSpecialization.totalYearsOfExp.$error}">
            <div>
              <label for="totalYearsOfExp">{{$t('vehicleSpecialization.totalYearsOfExperience')}}</label>
            </div>
            <div class="max">
              <input
                v-model="areaOfSpecialization.totalYearsOfExp"
                required
                :placeholder="$t('vehicleSpecialization.totalYearsOfExperience')"
              />
              <span
                v-if="!$v.areaOfSpecialization.totalYearsOfExp.required && $v.areaOfSpecialization.totalYearsOfExp.$error"
              >{{$t('vehicleSpecialization.validationError.totalYearsOfExpRequired')}}</span>
              <span
                v-if="!$v.areaOfSpecialization.totalYearsOfExp.numeric && $v.areaOfSpecialization.totalYearsOfExp.$error"
              >{{$t('vehicleSpecialization.validationError.totalYearsOfExpMustBeNum')}}</span>
            </div>
          </div>
          <br />
          <div>
            <div>
              <label for="vehicleSpecialization">{{$t('vehicleSpecialization.vehicleSpecialization')}}</label>
            </div>
            <div
              class="column"
              v-for="(vehicleSpecialization, index) in areaOfSpecialization.vehicleSpecializations"
              :key="index"
            >
              <div>
                <label :for="vehicleSpecialization">
                  <strong>#{{ index + 1 }}</strong>
                </label>
              </div>
              <div
                class="max"
                :class="{invalid:  $v.areaOfSpecialization.vehicleSpecializations.$each[index].vehicleType.$error}"
              >
                <select
                  @click="vehicleTypeOnClick()"
                  v-model="vehicleSpecialization.vehicleType"
                  required
                >
                  <option value selected disabled hidden>{{$t('vehicleSpecialization.selectVehicleType')}}</option>
                  <option
                    :disabled="isVehicleType(vehicleType.value)"
                    v-for="(vehicleType, index) in vehicleTypes"
                    :key="index"
                    :value="vehicleType.value"
                  >{{vehicleType.type}}</option>
                </select>
                <span
                  v-if="!$v.areaOfSpecialization.vehicleSpecializations.$each[index].vehicleType.required && 
                        $v.areaOfSpecialization.vehicleSpecializations.$each[index].vehicleType.$error"
                >{{$t('vehicleSpecialization.validationError.vehicleTypeRequired')}}</span>
              </div>
              <div
                class="max"
                :class="{invalid: $v.areaOfSpecialization.vehicleSpecializations.$each[index].yearsOfVehicleExp.$error}"
              >
                <input
                  v-model="vehicleSpecialization.yearsOfVehicleExp"
                  required
                  :placeholder="$t('vehicleSpecialization.vehicleSpecialization')"
                />
                <span
                  v-if="!$v.areaOfSpecialization.vehicleSpecializations.$each[index].yearsOfVehicleExp.required && 
                        $v.areaOfSpecialization.vehicleSpecializations.$each[index].yearsOfVehicleExp.$error"
                >{{$t('vehicleSpecialization.validationError.yearsOfExpRequired')}}</span>
                <span
                  v-if="!$v.areaOfSpecialization.vehicleSpecializations.$each[index].yearsOfVehicleExp.numeric && 
                        $v.areaOfSpecialization.vehicleSpecializations.$each[index].yearsOfVehicleExp.$error"
                >{{$t('vehicleSpecialization.validationError.yearsOfExpMustBeNum')}}</span>
              </div>
              <div>
                <button
                  class="delete-btn"
                  @click="deleteVehicleSpecialization(index), vehicleTypeOnClick(), deleteFileIfUploaded(vehicleSpecialization.vehicleType)"
                  type="button"
                >X</button>
              </div>
            </div>
          </div>
          <div>
            <button @click="addVehicleSpecialization()" type="button" class="add-btn">{{$t('buttons.addNew')}}</button>
          </div>
          <br />
          <div>
            <div>
              <label for="brandSpecialization">{{$t('vehicleSpecialization.brandSpecialization')}}</label>
            </div>
            <div
              class="column"
              v-for="(brandSpecialization, index) in areaOfSpecialization.brandSpecializations"
              :key="index"
            >
              <div>
                <label :for="brandSpecialization">
                  <strong>#{{ index + 1 }}</strong>
                </label>
              </div>
              <div
                class="max"
                :class="{invalid: $v.areaOfSpecialization.brandSpecializations.$each[index].brandType.$error}"
              >
                <select
                  @click="vehicleBrandOnClick()"
                  v-model="brandSpecialization.brandType"
                  required
                >
                  <option value selected disabled hidden>{{$t('vehicleSpecialization.selectVehicleBrand')}}</option>
                  <option
                    :disabled="isVehicleBrand(vehicleBrand.make)"
                    v-for="(vehicleBrand, index) in vehicleBrands"
                    :key="index"
                  >{{vehicleBrand.make}}</option>
                </select>
                <span
                  v-if="!$v.areaOfSpecialization.brandSpecializations.$each[index].brandType.required && 
                        $v.areaOfSpecialization.brandSpecializations.$each[index].brandType.$error"
                >{{$t('vehicleSpecialization.validationError.vehicleBrandRequired')}}</span>
              </div>
              <div
                class="max"
                :class="{invalid: $v.areaOfSpecialization.brandSpecializations.$each[index].yearsOfBrandExp.$error}"
              >
                <input
                  v-model="brandSpecialization.yearsOfBrandExp"
                  required
                  :placeholder="$t('vehicleSpecialization.brandSpecialization')"
                />
                <span
                  v-if="!$v.areaOfSpecialization.brandSpecializations.$each[index].yearsOfBrandExp.required && 
                        $v.areaOfSpecialization.brandSpecializations.$each[index].yearsOfBrandExp.$error"
                >{{$t('vehicleSpecialization.validationError.yearsOfExpRequired')}}</span>
                <span
                  v-if="!$v.areaOfSpecialization.brandSpecializations.$each[index].yearsOfBrandExp.numeric && 
                        $v.areaOfSpecialization.brandSpecializations.$each[index].yearsOfBrandExp.$error"
                >{{$t('vehicleSpecialization.validationError.yearsOfExpMustBeNum')}}</span>
              </div>
              <div>
                <button
                  class="delete-btn"
                  @click="deleteBrandSpecialization(index), vehicleBrandOnClick(), deleteFileIfUploaded(brandSpecialization.brandType)"
                  type="button"
                >X</button>
              </div>
            </div>
          </div>
          <div>
            <button @click="addBrandSpecialization()" type="button" class="add-btn">{{$t('buttons.addNew')}}</button>
          </div>
          <br />
          <div>
            <p style="color: red">
              <small>* {{$t('vehicleSpecialization.youWillHaveToUpload')}}</small>
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
import vehicleTypes from "../../../../mockData/vehicleTypes";
import { required, numeric } from "vuelidate/lib/validators";
import {
  numOfYearsToPastDate,
  dateToNumberOfYearsPassed
} from "../../../../utility";

export default {
  components: {
    InspRegProgress
  },
  data() {
    return {
      currentPage: "",
      vehicleSelectedItems: [],
      vehicleBrandSelectedItems: [],
      areaOfSpecialization: {
        totalYearsOfExp: "",
        totalExpStartYear: "",
        vehicleSpecializations: [
          {
            vehicleType: "",
            yearsOfVehicleExp: "",
            startYearOfVehicleSpecializationExp: ""
          }
        ],
        brandSpecializations: [
          {
            brandType: "",
            yearsOfBrandExp: "",
            startYearOfBrandSpecializationExp: ""
          }
        ]
      },
      initialSpecializationTypes: [],
      vehicleTypes: vehicleTypes(this.$i18n.locale),
      vehicleBrands: vehicleBrands
    };
  },
  validations: {
    areaOfSpecialization: {
      totalYearsOfExp: {
        required,
        numeric
      },
      vehicleSpecializations: {
        $each: {
          vehicleType: {
            required
          },
          yearsOfVehicleExp: {
            required,
            numeric
          }
        }
      },
      brandSpecializations: {
        $each: {
          brandType: {
            required
          },
          yearsOfBrandExp: {
            required,
            numeric
          }
        }
      }
    }
  },

  watch:{
    '$i18n.locale'(to, fro){
      this.vehicleTypes = vehicleTypes(this.$i18n.locale)
    }
  },

  methods: {
    ...mapActions(["specializationInfoData"]),

    vehicleTypeOnClick() {
      this.vehicleSelectedItems = [];
      this.areaOfSpecialization.vehicleSpecializations.forEach(item => {
        this.vehicleSelectedItems.push(item.vehicleType);
      });
    },

    isVehicleType(vehicleType) {
      let item1;
      this.vehicleSelectedItems.forEach(item => {
        if (item == vehicleType) {
          item1 = item;
        }
      });
      return item1 == vehicleType;
    },

    vehicleBrandOnClick() {
      this.vehicleBrandSelectedItems = [];
      this.areaOfSpecialization.brandSpecializations.forEach(item => {
        this.vehicleBrandSelectedItems.push(item.brandType);
      });
    },

    isVehicleBrand(brandType) {
      let item1;
      this.vehicleBrandSelectedItems.forEach(item => {
        if (item == brandType) {
          item1 = item;
        }
      });
      return item1 == brandType;
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
      this.areaOfSpecialization.vehicleSpecializations.forEach(item => {
        remainingSpecializationTypes.push(item.vehicleType);
      });
      this.areaOfSpecialization.brandSpecializations.forEach(item => {
        remainingSpecializationTypes.push(item.brandType);
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

      this.areaOfSpecialization.vehicleSpecializations.map(item => {
        item.startYearOfVehicleSpecializationExp = numOfYearsToPastDate(
          item.yearsOfVehicleExp
        );
        return item;
      });

      axios
        .patch("/inspector_infos/me", specializationInfoData)
        .then(res => {
          if (direction == "next") {
            this.$router.push(`/${this.$i18n.locale}/inspector/vehicle/certifications`);
          }

          if (direction == "back") {
            this.$router.push(`/${this.$i18n.locale}/inspector/personal-information`);
          }
        })
        .catch(error => console.log(error.response.data));
    },

    addVehicleSpecialization() {
      const newVehicleSpecialization = {
        vehicleType: "",
        yearsOfVehicleExp: ""
      };
      this.areaOfSpecialization.vehicleSpecializations.push(
        newVehicleSpecialization
      );
      if (this.areaOfSpecialization.vehicleSpecializations.length >= 6) {
        this.deleteVehicleSpecialization(5);
      }
    },
    deleteVehicleSpecialization(index) {
      this.areaOfSpecialization.vehicleSpecializations.splice(index, 1);
      if (
        index === 0 &&
        this.areaOfSpecialization.vehicleSpecializations.length === 0
      ) {
        this.addVehicleSpecialization();
      }
    },

    addBrandSpecialization() {
      const newBrandSpecialization = {
        brandType: "",
        yearsOfBrandExp: ""
      };
      this.areaOfSpecialization.brandSpecializations.push(
        newBrandSpecialization
      );
      if (this.areaOfSpecialization.brandSpecializations.length >= 6) {
        alert("You can only enter a maximum of 5 brands");
        this.deleteBrandSpecialization(5);
      }
    },

    deleteBrandSpecialization(index) {
      this.areaOfSpecialization.brandSpecializations.splice(index, 1);
      if (
        index === 0 &&
        this.areaOfSpecialization.brandSpecializations.length === 0
      ) {
        this.addBrandSpecialization();
      }
    },

    //To delete a file if alreaded uploaded
    deleteFileIfUploaded(docType) {
      axios
        .delete(
          `/inspector_infos/removeDocIfUploadeded/:${vehicleSpecialization.vehicleType}`
        )
        .then(res => console.log("deleted"));
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
        this.areaOfSpecialization.vehicleSpecializations.forEach(item => {
          this.initialSpecializationTypes.push(item.vehicleType);
        });
        this.areaOfSpecialization.brandSpecializations.forEach(item => {
          this.initialSpecializationTypes.push(item.brandType);
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
