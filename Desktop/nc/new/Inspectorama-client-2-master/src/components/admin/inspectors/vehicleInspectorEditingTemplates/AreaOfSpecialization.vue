<template>
  <div>
    <div class="container">
      <div class="error" v-if="error">{{error}}</div>
      <div class="container-header">Vehicle Area of Specialization</div>
      <form @submit.prevent="onSubmit">
        <div class="column1" :class="{invalid: $v.areaOfSpecialization.totalYearsOfExp.$error}">
          <div>
            <label for="totalYearsOfExp">Total Years of Experience</label>
          </div>
          <div class="flex-grow">
            <select v-model="areaOfSpecialization.totalYearsOfExp" required>
              <option value selected disabled hidden>Select Total Years of Experience</option>
              <option value="1 to 2 years">1 to 2 years</option>
              <option value="3 to 5 years">3 to 5 years</option>
              <option value="Above 5 years">Above 5 years</option>
            </select>
            <span
              v-if="!$v.areaOfSpecialization.totalYearsOfExp.required && $v.areaOfSpecialization.totalYearsOfExp.$error"
            >Total Years of Experience is required.</span>
          </div>
        </div>
        <br />
        <div>
          <div>
            <label for="vehicleSpecialization">Vehicle Specialization</label>
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
              class="flex-grow"
              :class="{invalid:  $v.areaOfSpecialization.vehicleSpecializations.$each[index].vehicleType.$error}"
            >
              <select
                @click="vehicleTypeOnClick()"
                v-model="vehicleSpecialization.vehicleType"
                required
              >
                <option value selected disabled hidden>Select Vehicle Type</option>
                <option
                  :disabled="isVehicleType(vehicleType)"
                  v-for="(vehicleType, index) in vehicleTypes"
                  :key="index"
                >{{vehicleType}}</option>
              </select>
              <span
                v-if="!$v.areaOfSpecialization.vehicleSpecializations.$each[index].vehicleType.required && 
                        $v.areaOfSpecialization.vehicleSpecializations.$each[index].vehicleType.$error"
              >Vehicle Type is required.</span>
            </div>
            <div
              class="flex-grow"
              :class="{invalid: $v.areaOfSpecialization.vehicleSpecializations.$each[index].yearsOfVehicleExp.$error}"
            >
              <select v-model="vehicleSpecialization.yearsOfVehicleExp" required>
                <option value selected disabled hidden>Select Years of Vehicle Experience</option>
                <option value="1 to 2 years">1 to 2 years</option>
                <option value="3 to 5 years">3 to 5 years</option>
                <option value="Above 5 years">Above 5 years</option>
              </select>
              <span
                v-if="!$v.areaOfSpecialization.vehicleSpecializations.$each[index].yearsOfVehicleExp.required && 
                        $v.areaOfSpecialization.vehicleSpecializations.$each[index].yearsOfVehicleExp.$error"
              >Years of Experience is required.</span>
            </div>
            <div v-if="index + 1 > 1">
              <div
                class="delete-btn"
                @click="deleteVehicleSpecialization(index), vehicleTypeOnClick()"
              >
                <i class="fa fa-close"></i>
              </div>
            </div>
          </div>
        </div>
        <div>
          <button @click="addVehicleSpecialization()" type="button" class="add-btn">
            <i class="fa fa-plus"></i>
            <span>&nbsp;Add New</span>
          </button>
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
              class="flex-grow"
              :class="{invalid: $v.areaOfSpecialization.brandSpecializations.$each[index].brandType.$error}"
            >
              <select
                @click="vehicleBrandOnClick()"
                v-model="brandSpecialization.brandType"
                required
              >
                <option value selected disabled hidden>Select Vehicle Brand Type</option>
                <option
                  :disabled="isVehicleBrand(vehicleBrand.make)"
                  v-for="(vehicleBrand, index) in vehicleBrands"
                  :key="index"
                >{{vehicleBrand.make}}</option>
              </select>
              <span
                v-if="!$v.areaOfSpecialization.brandSpecializations.$each[index].brandType.required && 
                        $v.areaOfSpecialization.brandSpecializations.$each[index].brandType.$error"
              >Vehicle Brand is required.</span>
            </div>
            <div
              class="flex-grow"
              :class="{invalid: $v.areaOfSpecialization.brandSpecializations.$each[index].yearsOfBrandExp.$error}"
            >
              <select v-model="brandSpecialization.yearsOfBrandExp" required>
                <option value selected disabled hidden>Select Years of Brand Experience</option>
                <option value="1 to 2 years">1 to 2 years</option>
                <option value="3 to 5 years">3 to 5 years</option>
                <option value="Above 5 years">Above 5 years</option>
              </select>
              <span
                v-if="!$v.areaOfSpecialization.brandSpecializations.$each[index].yearsOfBrandExp.required && 
                        $v.areaOfSpecialization.brandSpecializations.$each[index].yearsOfBrandExp.$error"
              >Years of Experience is required.</span>
            </div>
            <div v-if="index + 1 > 1">
              <div
                class="delete-btn"
                @click="deleteBrandSpecialization(index), vehicleBrandOnClick()"
              >
                <i class="fa fa-close"></i>
              </div>
            </div>
          </div>
        </div>
        <div>
          <button @click="addBrandSpecialization()" type="button" class="add-btn">
            <i class="fa fa-plus"></i>
            <span>&nbsp;Add New</span>
          </button>
        </div>
        <br />
        <div>
          <p style="color: red">
            <small>* You will have to upload documentation to prove your claimed brand(s) and area(s) of specialization at the end of this application.</small>
          </p>
        </div>
        <br />
        <hr />
        <br />
        <div class="float-right">
          <button class="save-next-btn" @click.prevent="onSubmit('next')">
            <i class="fa fa-check-circle"></i>
            <span>&nbsp;Save and Next</span>
          </button>
          <button class="save-exit-btn" @click.prevent="onSubmit('exit')">
            <i class="fa fa-check-circle"></i>
            <span>&nbsp;Save and Exit</span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import globalAxios from "axios";
import { mapState, mapActions, mapMutations, mapGetters } from "vuex";
import vehicleBrands from "../../../../mockData/vehicleBrands";
import { required } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      currentPage: "",
      vehicleSelectedItems: [],
      vehicleBrandSelectedItems: [],
      areaOfSpecialization: {
        totalYearsOfExp: "",
        vehicleSpecializations: [
          {
            vehicleType: "",
            yearsOfVehicleExp: ""
            // uploadedDoc: {
            //   fileName: "",
            //   fileData: null
            // }
          }
        ],
        brandSpecializations: [
          {
            brandType: "",
            yearsOfBrandExp: ""
            // uploadedDoc: {
            //   fileName: "",
            //   fileData: null
            // }
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
      vehicleBrands: vehicleBrands,
      error: ""
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

    onSubmit(action) {
      if (action == "next" || action == null) {
        this.$v.$touch();
        if (this.$v.$invalid) {
          return;
        }
      }

      const specializationInfoData = {
        areaOfSpecialization: this.areaOfSpecialization
      };
      const inspectorId = localStorage.getItem("openedInspectorId");
      axios
        .patch(
          `/inspector_users_admin/update/${inspectorId}`,
          specializationInfoData
        )
        .then(res => {
          if (action == "next") {
            this.$emit("afterSaving");
          }
          if (action == "exit") {
            this.storeOkMessage(
              "The inspector's area of specialization has been updated"
            );
            this.$router.push("/inspectors");
          }
        })
        .catch(error => {
          console.log(error);
          this.error = error.response.data;
        });
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
    },

    ...mapMutations("adminStore", ["storeOkMessage"])
  },
  computed: {
    ...mapState({
      inspectorInfo: state => state.vehicleInspector.inspectorInfo
    })
  },
  created() {
    const inspectorId = localStorage.getItem("openedInspectorId");
    axios
      .get(`/inspector_users_admin/${inspectorId}`)
      .then(res => {
        this.areaOfSpecialization = res.data.areaOfSpecialization;
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.container {
  font-family: sans-serif, Arial, Helvetica;
  background-color: white;
  width: 100%;
  display: inline-block;
}

.container-header {
  padding-bottom: 20px;
  font-size: 22px;
  color: darkblue;
  font-weight: bold;
}

hr {
  margin-left: -10px;
  margin-right: -10px;
}

.error {
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 14px;
  color: red;
}

select {
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
  font-size: 20px;
  font-weight: bold;
  margin-top: 6px;
  color: red;
  cursor: pointer;
  outline: none;
  opacity: 0.7;
}

.delete-btn:hover {
  opacity: 1;
  color: red;
}

.delete-btn:active {
  opacity: 0.7;
}

.add-btn {
  font-size: 14px;
  font-weight: bold;
  padding: 4px 8px;
  margin-top: 5px;
  color: white;
  background-color: darkblue;
  cursor: pointer;
  outline: none;
  border: solid;
  border-color: blue darkblue darkblue blue;
  border-radius: 5px;
  opacity: 0.85;
}
.add-btn:hover {
  opacity: 1;
}

.add-btn:active {
  opacity: 0.85;
  border-color: darkblue blue blue darkblue;
}

.flex {
  display: flex;
}

.column1 {
  width: 450px;
  display: flex;
}

.column {
  margin-top: 10px;
  margin-bottom: 10px;
  width: 500px;
  display: flex;
}

.flex-grow {
  margin-left: 10px;
  margin-right: 10px;
  flex: 1 0 250px;
}

.float-right {
  float: right;
}

.save-exit-btn,
.save-next-btn {
  font-size: 18px;
  font-weight: bold;
  padding: 8px 14px;
  margin-top: 45px;
  margin-bottom: 40px;
  background-color: #ea7601;
  color: white;
  cursor: pointer;
  outline: none;
  border-radius: 5px;
  border: solid;
  border-color: #ed6502 #a04300 #a04300 #ed6502;
  opacity: 0.9;
}

.save-next-btn {
  margin-right: 20px;
}

.save-exit-btn:hover,
.save-next-btn:hover {
  opacity: 1;
}

.save-exit-btn:active,
.save-next-btn:active {
  opacity: 0.95;
  border-color: #a04300 #ed6502 #ed6502 #a04300;
}
</style>
