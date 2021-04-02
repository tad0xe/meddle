<template>
  <div>
    <div class="modal-backdrop" @click="close">
      <div class="modal" @click.stop>
        <div class="modal__header">
          <div class="modal__header__content">Edit Area of Specialization</div>
          <div class="btn-close-upper" @click="close()">x</div>
        </div>
        <div class="modal-body">
          <form @submit.prevent="onSubmit()">
            <div class="text-spaced">
              <h3>Area of specialization</h3>
            </div>
            <br />
            <div class="flex" :class="{invalid: $v.areaOfSpecialization.totalYearsOfExp.$error}">
              <div>
                <label for="totalYearsOfExp">Total years of experience</label>
              </div>
              <div class="max">
                <input
                  v-model.trim="areaOfSpecialization.totalYearsOfExp"
                  required
                  placeholder="Enter years of experience"
                />
                <span
                  v-if="!$v.areaOfSpecialization.totalYearsOfExp.required && $v.areaOfSpecialization.totalYearsOfExp.$error"
                >Total years of experience is required.</span>
              </div>
            </div>
            <br />
            <div class="modal-content">
              <div>
                <div>
                  <label for="homeSpecialization">Inspection specialization</label>
                </div>
                <div
                  class="column"
                  v-for="(homeSpecialization, index) in areaOfSpecialization.homeInspectionSpecializations"
                  :key="index"
                >
                  <div>
                    <label :for="homeSpecialization">
                      <strong>#{{ index + 1 }}</strong>
                    </label>
                  </div>
                  <div
                    class="max-left"
                    :class="{invalid:  $v.areaOfSpecialization.homeInspectionSpecializations.$each[index].specializationType.$error}"
                  >
                    <select
                      @click="specializationTypeOnClick()"
                      v-model="homeSpecialization.specializationType"
                      required
                    >
                      <option value selected disabled hidden>Specialization type</option>
                      <option
                        :disabled="isSpecializationType(specializationType)"
                        v-for="(specializationType, index) in specializationTypes"
                        :key="index"
                      >{{specializationType}}</option>
                    </select>
                    <span
                      v-if="!$v.areaOfSpecialization.homeInspectionSpecializations.$each[index].specializationType.required && 
                                                            $v.areaOfSpecialization.homeInspectionSpecializations.$each[index].specializationType.$error"
                    >Specialization type is required.</span>
                  </div>
                  <div
                    class="max-right"
                    :class="{invalid: $v.areaOfSpecialization.homeInspectionSpecializations.$each[index].yearsOfSpecializationExp.$error}"
                  >
                    <input
                      v-model.trim="homeSpecialization.yearsOfSpecializationExp"
                      required
                      placeholder="Years of experience"
                    />
                    <span
                      v-if="!$v.areaOfSpecialization.homeInspectionSpecializations.$each[index].yearsOfSpecializationExp.required && 
                                                            $v.areaOfSpecialization.homeInspectionSpecializations.$each[index].yearsOfSpecializationExp.$error"
                    >Years of experience is required.</span>
                  </div>
                  <div v-if="index + 1 > 1">
                    <button
                      class="delete-btn"
                      @click="deletehomeInspectionSpecialization(index), specializationTypeOnClick()"
                      type="button"
                    >X</button>
                  </div>
                </div>
              </div>
              <div>
                <button
                  @click="addHomeInspectionSpecialization"
                  type="button"
                  class="add-btn"
                >Add New</button>
              </div>
            </div>
            <br />
            <div class="row">
              <p style="color: red">
                <small>* You will have to upload documentation to prove your claimed area(s) of specialization at the end of this application.</small>
              </p>
            </div>
            <br />
            <hr />
            <br />
            <div>
              <button type="submit" @click.prevent="onSubmit()" class="signupbtn">Confirm</button>
            </div>
          </form>
        </div>
        <footer class="modal-footer"></footer>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { required, email, minLength, sameAs } from "vuelidate/lib/validators";
export default {
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
      specializationTypes: [
        "Electrical System",
        "HVAC",
        "Chimney",
        "Wood Destroying Pests",
        "Home Foundation",
        "Soil Stability",
        "Asbestos",
        "Garage",
        "Mold",
        "Sewer",
        "Tree",
        "Well",
        "Crawlspace",
        "Exterior",
        "Roof",
        "Wind Mitigation",
        "Stucco",
        "Commercial Property",
        "Residential Property",
        "Deck",
        "Expert Witness Sevices",
        "Pool and Spa",
        "Radon",
        "Kitchen",
        "Mobile Home",
        "Water Quality",
        "Infrared",
        "Home Energy",
        "Energy Savings"
      ]
    };
  },
  validations: {
    areaOfSpecialization: {
      totalYearsOfExp: {
        required,
        // numeric
      },
      homeInspectionSpecializations: {
        $each: {
          specializationType: {
            required
          },
          yearsOfSpecializationExp: {
            required,
            // numeric
          }
        }
      }
    }
  },
  methods: {
    close() {
      this.$emit("close");
    },

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
            this.$router.push("/inspector/home/certifications");
          }

          if (direction == "back") {
            this.$router.push("/inspector/personal-information");
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

.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal {
  background: #ffffff;
  box-shadow: 2px 2px 20px 1px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  font-family: sans-serif, Arial, Helvetica;
  padding: 15px;
  width: 360px;
}

.modal__header {
  display: flex;
  align-items: center;
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

p {
  margin-top: 5px;
  margin-bottom: 5px;
  color: darkblue;
}

.modal-content {
  width: 100%;
  max-height: 270px;
  overflow-y: auto;
  display: inline-block;
}

.modal-body {
  font-size: 13px;
  padding-top: 10px;
  padding-bottom: 10px;
}

.modal-footer {
  border-top: 1.5px solid #eeeeee;
  justify-content: flex-end;
  font-size: 13px;
}

.text-spaced {
  font-size: 15px;
  color: brown;
}

.delete-btn {
  font-size: 10px;
  margin-top: 4px;
  padding: 2px;
  color: black;
  outline: none;
  font-weight: bold;
  background-color: white;
  text-align: center;
  cursor: pointer;
}

.add-btn {
  padding-top: 2px;
  padding-bottom: 2px;
  border-radius: 5px;
  font-size: 12px;
  width: 70px;
  color: black;
  outline: none;
  font-weight: bold;
  background-color: white;
  text-align: center;
  cursor: pointer;
}

.add-btn:hover {
  color: green;
}

.delete-btn:hover {
  color: red;
}

.text-input {
  padding: 7px;
  margin-top: 7px;
  margin-bottom: 7px;
  width: 100%;
}

.signupbtn {
  background-color: #2bc4e2;
  color: white;
  padding: 10px 20px;
  margin: 8px 0;
  margin-top: 20px;
  outline: none;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
  border-radius: 40px;
  box-sizing: border-box;
  font-size: 16px;
}

.signupbtn:hover {
  background-color: #07b9dd;
}

select {
  width: 100%;
  font-size: 12px;
  padding: 5px 2px;
  border: 1px solid #ccc;
  border-radius: 3px;
  outline: none;
  background-color: rgb(232, 240, 254);
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

select:focus {
  border: 1px solid #a842a7;
  background-color: #eee;
}

.invalid select {
  border: 1px solid red;
}

label {
  margin-top: 5px;
  font-size: 14px;
  display: block;
  width: 100%;
}

.invalid label {
  color: red;
}

.invalid span {
  color: red;
  font-size: 11px;
}

.flex {
  display: flex;
}

.column {
  margin-top: 5px;
  margin-bottom: 10px;
  width: 100%;
  display: flex;
}

.max {
  margin-left: 5px;
  margin-right: 5px;
  flex: 1;
}

.max-left {
  margin-left: 5px;
  margin-right: 5px;
  flex: 1;
}

.max-right {
  margin-right: 5px;
  flex: 1;
}

/* For mobile: */
@media only screen and (max-width: 380px) {
  .modal-backdrop {
    padding: 5px;
  }
  .modal {
    padding: 5px;
    border-radius: 5px;
    width: 100%;
  }
}
</style>

