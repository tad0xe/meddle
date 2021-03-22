<template>
  <div>
    <div class="modal-backdrop" @click="close">
      <div class="modal" @click.stop>
        <div class="modal__header">
          <div class="modal__header__content">Edit Education</div>
          <div class="btn-close-upper" @click="close()">x</div>
        </div>
        <div class="modal-body">
          <form @submit.prevent="onSubmit()">
            <p>NB: You will have to complete the ID verification process and a manual review before your account can be reactivated</p>
            <div class="modal-content">
              <div v-for="(education, index) in educations" :key="index">
                <div :for="education">
                  <strong>#{{ index + 1 }}</strong>
                </div>
                <div
                  class="column"
                  :class="{invalid:  $v.educations.$each[index].educationType.$error}"
                >
                  <label for="education.educationType">Education:</label>
                  <select
                    @click="educationTypeOnClick()"
                    v-model="education.educationType"
                    required
                  >
                    <option value selected disabled hidden>Select Education</option>
                    <option
                      :disabled="isEducationType(educationType)"
                      v-for="(educationType, index) in educationTypes"
                      :key="index"
                    >{{educationType}}</option>
                  </select>
                  <span
                    v-if="!$v.educations.$each[index].educationType.required && 
                        $v.educations.$each[index].educationType.$error"
                  >Education is required.</span>
                </div>
                <div
                  class="date-column"
                  :class="{invalid:  $v.educations.$each[index].gradYear.$error}"
                >
                  <label for="education.gradYear">Graduation year (or expected):</label>
                  <div>
                    <Datepicker
                      class="date-picker"
                      v-model="education.gradYear"
                      lang="en"
                      type="year"
                      format="YYYY"
                      placeholder="Select graduation year"
                      :disabled-date="(date)=>date > Date.now()"
                    ></Datepicker>
                    <span
                      v-if="!$v.educations.$each[index].gradYear.required && 
                        $v.educations.$each[index].gradYear.$error"
                    >Graduation year is required.</span>
                  </div>
                </div>
                <div
                  class="column"
                  :class="{invalid:  $v.educations.$each[index].nameOfInstitution.$error}"
                >
                  <label for="education.nameOfInstitution">Name of Institution</label>
                  <input
                    type="text"
                    placeholder="Enter name of Institution"
                    v-model="education.nameOfInstitution"
                  />
                  <span
                    v-if="!$v.educations.$each[index].nameOfInstitution.required && 
                        $v.educations.$each[index].nameOfInstitution.$error"
                  >Name of Institution is required.</span>
                </div>
                <br v-if="(index + 1)> 1" />
                <div v-if="(index + 1)> 1">
                  <button
                    type="button"
                    class="delete-btn"
                    @click="deleteEducation(index), educationTypeOnClick()"
                  >Delete</button>
                </div>
                <br />
                <hr />
                <br />
              </div>
              <div v-if="educations.length < 5">
                <button type="button" class="add-btn" @click="addEducation()">Add New</button>
              </div>
            </div>
            <br />
            <div>
              <p style="color: red">
                <small>* You will be required to submit proof of education at the end of registration</small>
              </p>
            </div>
            <div>
              <button type="submit" class="signupbtn">Confirm</button>
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
import Datepicker from "vue2-datepicker";
import { required } from "vuelidate/lib/validators";
export default {
  components: {
    Datepicker
  },
  data() {
    return {
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
      ],
      educationTypes: [
        "High school or secondary education",
        "Diploma",
        "College or university degree",
        "Masters degree",
        "PhD degree"
      ]
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
  methods: {
    close() {
      this.$emit("close");
    },
    educationTypeOnClick() {
      this.educationSelectedItems = [];

      this.educations.forEach(item => {
        this.educationSelectedItems.push(item.educationType);
      });
    },

    isEducationType(educationType) {
      let item1;
      this.educationSelectedItems.forEach(item => {
        if (item == educationType) {
          item1 = item;
        }
      });
      return item1 == educationType;
    },

    onSubmit() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }

      const formData = {
        educations: this.educations
      };
      this.$emit("confirm", formData);
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

  created() {
    this.$store.dispatch("fetchInspectorInfo").then(res => {
      this.educations = res.educations;
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
  max-height: 370px;
  overflow-y: auto;
  display: inline-block;
}

.modal-footer {
  border-top: 1.5px solid #eeeeee;
  justify-content: flex-end;
  font-size: 13px;
}

.modal-body {
  font-size: 13px;
  padding-bottom: 10px;
}

.modal-footer {
  border-top: 1.5px solid #eeeeee;
  justify-content: flex-end;
  font-size: 13px;
}

.add-btn,
.delete-btn {
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

.column {
  margin-top: 5px;
  margin-bottom: 5px;
  width: 100%;
  display: block;
}

.date-column {
  margin-top: 5px;
  margin-bottom: 5px;
  width: 100%;
  display: inline-block;
}

.flex {
  display: flex;
}

input {
  width: 100%;
  font-size: 12px;
  padding: 6px;
  margin-top: 3px;
  border: 1px solid #ccc;
  border-radius: 3px;
  outline: none;
  background-color: rgb(232, 240, 254);
}

.date-picker /deep/ input {
  width: 100%;
  height: 28px;
  margin-top: 3px;
  font-size: 12px;
  padding: 0px 6px;
  color: black;
  border: 1px solid #ccc;
  border-radius: 3px;
  background-clip: padding-box;
  outline: none;
  box-shadow: none;
  background-color: rgb(232, 240, 254);
  display: block;
}

.date-picker {
  width: 180px;
  display: block;
}

label {
  width: 100%;
  display: block;
  font-size: 13px;
}

label span {
  font-size: 13px;
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

input:focus,
.date-picker /deep/ input:focus {
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

.invalid input {
  border: 1px solid red;
}

/* For mobile: */
@media only screen and (max-width: 380px) {
  .modal-backdrop {
    padding: 5px;
  }

  .modal__header__content {
    font-size: 19px;
  }
  .modal {
    padding: 5px;
    border-radius: 5px;
    width: 100%;
  }

  .date-picker {
    width: 125px;
  }
}
</style>

