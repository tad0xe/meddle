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
                <select v-model="areaOfSpecialization.totalYearsOfExp" required>
                  <option value selected disabled hidden>Total years of experience</option>
                  <option value="1 to 2 years">1 to 2 years</option>
                  <option value="3 to 5 years">3 to 5 years</option>
                  <option value="Above 5 years">Above 5 years</option>
                </select>
                <span
                  v-if="!$v.areaOfSpecialization.totalYearsOfExp.required && $v.areaOfSpecialization.totalYearsOfExp.$error"
                >Total years of experience is required.</span>
              </div>
            </div>
            <br />
            <div class="modal-content">
              <div>
                <div>
                  <label for="vehicleSpecialization">Vehicle specialization</label>
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
                    class="max-left"
                    :class="{invalid:  $v.areaOfSpecialization.vehicleSpecializations.$each[index].vehicleType.$error}"
                  >
                    <select
                      @click="vehicleTypeOnClick()"
                      v-model="vehicleSpecialization.vehicleType"
                      required
                    >
                      <option value selected disabled hidden>Vehicle type</option>
                      <option
                        :disabled="isVehicleType(vehicleType)"
                        v-for="(vehicleType, index) in vehicleTypes"
                        :key="index"
                      >{{vehicleType}}</option>
                    </select>
                    <span
                      v-if="!$v.areaOfSpecialization.vehicleSpecializations.$each[index].vehicleType.required && 
                                                            $v.areaOfSpecialization.vehicleSpecializations.$each[index].vehicleType.$error"
                    >Vehicle type is required.</span>
                  </div>
                  <div
                    class="max-right"
                    :class="{invalid: $v.areaOfSpecialization.vehicleSpecializations.$each[index].yearsOfVehicleExp.$error}"
                  >
                    <select v-model="vehicleSpecialization.yearsOfVehicleExp" required>
                      <option value selected disabled hidden>Years of vehicle experience</option>
                      <option value="1 to 2 years">1 to 2 years</option>
                      <option value="3 to 5 years">3 to 5 years</option>
                      <option value="Above 5 years">Above 5 years</option>
                    </select>
                    <span
                      v-if="!$v.areaOfSpecialization.vehicleSpecializations.$each[index].yearsOfVehicleExp.required && 
                                                            $v.areaOfSpecialization.vehicleSpecializations.$each[index].yearsOfVehicleExp.$error"
                    >Years of vehicle experience is required.</span>
                  </div>
                  <div v-if="index + 1 > 1">
                    <button
                      class="delete-btn"
                      @click="deleteVehicleSpecialization(index), vehicleTypeOnClick()"
                      type="button"
                    >X</button>
                  </div>
                </div>
              </div>
              <div>
                <button @click="addVehicleSpecialization" type="button" class="add-btn">Add New</button>
              </div>
              <br />
              <div>
                <div>
                  <label for="brandSpecialization">Brand specialization</label>
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
                    class="max-left"
                    :class="{invalid: $v.areaOfSpecialization.brandSpecializations.$each[index].brandType.$error}"
                  >
                    <select
                      @click="vehicleBrandOnClick()"
                      v-model="brandSpecialization.brandType"
                      required
                    >
                      <option value selected disabled hidden>Vehicle brand type</option>
                      <option
                        :disabled="isVehicleBrand(vehicleBrand.make)"
                        v-for="(vehicleBrand, index) in vehicleBrands"
                        :key="index"
                      >{{vehicleBrand.make}}</option>
                    </select>
                    <span
                      v-if="!$v.areaOfSpecialization.brandSpecializations.$each[index].brandType.required && 
                                                            $v.areaOfSpecialization.brandSpecializations.$each[index].brandType.$error"
                    >Vehicle brand is required.</span>
                  </div>
                  <div
                    class="max-right"
                    :class="{invalid: $v.areaOfSpecialization.brandSpecializations.$each[index].yearsOfBrandExp.$error}"
                  >
                    <select v-model="brandSpecialization.yearsOfBrandExp" required>
                      <option value selected disabled hidden>Years of brand experience</option>
                      <option value="1 to 2 years">1 to 2 years</option>
                      <option value="3 to 5 years">3 to 5 years</option>
                      <option value="Above 5 years">Above 5 years</option>
                    </select>
                    <span
                      v-if="!$v.areaOfSpecialization.brandSpecializations.$each[index].yearsOfBrandExp.required && 
                                                            $v.areaOfSpecialization.brandSpecializations.$each[index].yearsOfBrandExp.$error"
                    >Years of brand experience is required.</span>
                  </div>
                  <div v-if="index + 1 > 1">
                    <button
                      class="delete-btn"
                      @click="deleteBrandSpecialization(index), vehicleBrandOnClick()"
                      type="button"
                    >X</button>
                  </div>
                </div>
              </div>
              <div>
                <button @click="addBrandSpecialization" type="button" class="add-btn">Add New</button>
              </div>
            </div>
            <br />
            <div class="row">
              <p style="color: red">
                <small>* You will have to upload documentation to prove your claimed brand(s) and area(s) of specialization at the end of this application.</small>
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
import vehicleBrands from "../../../../mockData/vehicleBrands";
import { required, email, minLength, sameAs } from "vuelidate/lib/validators";
export default {
  props: {},
  data: function() {
    return {
      vehicleSelectedItems: [],
      vehicleBrandSelectedItems: [],
      areaOfSpecialization: {
        totalYearsOfExp: "",
        vehicleSpecializations: [
          {
            vehicleType: "",
            yearsOfVehicleExp: "",
            uploadedDoc: {
              fileName: "",
              fileData: null
            }
          }
        ],
        brandSpecializations: [
          {
            brandType: "",
            yearsOfBrandExp: "",
            uploadedDoc: {
              fileName: "",
              fileData: null
            }
          }
        ]
      },
      vehicleTypes: [
        "Motorcycle",
        "Car",
        "Van",
        "Bus",
        "Light Commercial",
        "Medium Truck",
        "Truck",
        "Trailer",
        "Heavy-Duty Tractor"
      ],
      vehicleBrands: vehicleBrands
    };
  },

  validations: {
    areaOfSpecialization: {
      totalYearsOfExp: {
        required
      },
      vehicleSpecializations: {
        $each: {
          vehicleType: {
            required
          },
          yearsOfVehicleExp: {
            required
          }
        }
      },
      brandSpecializations: {
        $each: {
          brandType: {
            required
          },
          yearsOfBrandExp: {
            required
          }
        }
      }
    }
  },

  methods: {
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
    close() {
      this.$emit("close");
    },
    onSubmit() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }

      const formData = {
        areaOfSpecialization: this.areaOfSpecialization
      };
      this.$emit("confirm", formData);
    },

    addVehicleSpecialization() {
      const newVehicleSpecialization = {
        vehicleType: "",
        yearsOfVehicleExp: "",
        uploadedDoc: {
          fileName: "",
          fileData: null
        }
      };
      this.areaOfSpecialization.vehicleSpecializations.push(
        newVehicleSpecialization
      );
      if (this.vehicleSpecializations.length >= 6) {
        this.deleteVehicleSpecialization(5);
      }
    },
    deleteVehicleSpecialization(index) {
      this.areaOfSpecialization.vehicleSpecializations.splice(index, 1);
      if (index === 0 && this.vehicleSpecializations.length === 0) {
        this.addVehicleSpecialization();
      }
    },

    addBrandSpecialization() {
      const newBrandSpecialization = {
        brandType: "",
        yearsOfBrandExp: "",
        uploadedDoc: {
          fileName: "",
          fileData: null
        }
      };
      this.areaOfSpecialization.brandSpecializations.push(
        newBrandSpecialization
      );
      if (this.brandSpecializations.length >= 6) {
        alert("You can only enter a maximum of 5 brands");
        this.deleteBrandSpecialization(5);
      }
    },
    deleteBrandSpecialization(index) {
      this.areaOfSpecialization.brandSpecializations.splice(index, 1);
      if (index === 0 && this.brandSpecializations.length === 0) {
        this.addBrandSpecialization();
      }
    }
  },

  created() {
    this.$store.dispatch("fetchInspectorInfo").then(res => {
      this.areaOfSpecialization = res.areaOfSpecialization;
    });
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

