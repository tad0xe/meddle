<template>
  <div>
    <div class="container">
      <div class="error" v-if="error">{{error}}</div>
      <div class="container-header">Education Background</div>
      <form @submit.prevent="onSubmit">
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
                <label for="education.educationType">Education:</label>
                <select v-model="education.educationType" required>
                  <option value selected hidden disabled>Select Education</option>
                  <option value="highSchool">High school or secondary education</option>
                  <option value="diploma">Diploma</option>
                  <option value="college">College or university degree</option>
                  <option value="masters">Masters degree</option>
                  <option value="phD">PhD degree</option>
                </select>
                <span
                  v-if="!$v.educations.$each[index].educationType.required &&
                        $v.educations.$each[index].educationType.$error"
                >Education is required.</span>
              </div>
              <div
                class="input-short"
                :class="{invalid:  $v.educations.$each[index].gradYear.$error}"
              >
                <label for="education.gradYear">Graduation Year (or expected):</label>
                <div>
                  <Datepicker
                    class="date-picker"
                    v-model="education.gradYear"
                    lang="en"
                    type="year"
                    format="YYYY"
                    placeholder="Select graduation Year"
                    :disabled-date="(date)=>date > Date.now()"
                  ></Datepicker>
                  <span
                    v-if="!$v.educations.$each[index].gradYear.required &&
                        $v.educations.$each[index].gradYear.$error"
                  >Graduation Year is required.</span>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div
              class="column"
              :class="{invalid:  $v.educations.$each[index].nameOfInstitution.$error}"
            >
              <label for="education.nameOfInstitution">Name of Institution:</label>
              <input
                type="text"
                placeholder="Enter Name of Institution"
                v-model="education.nameOfInstitution"
              />
              <span
                v-if="!$v.educations.$each[index].nameOfInstitution.required &&
                        $v.educations.$each[index].nameOfInstitution.$error"
              >Name of Institution is required.</span>
            </div>
          </div>
          <div v-if="(index + 1)> 1">
            <button
              type="button"
              class="delete-btn"
              @click="deleteEducation(index)"
            >
              <i class="fa fa-close"></i>
              <span>&nbsp;Delete</span>
            </button>
          </div>
          <br />
          <hr />
          <br />
        </div>
        <div v-if="educations.length < 5">
          <button type="button" class="add-btn" @click="addEducation">
            <i class="fa fa-plus"></i>
            <span>&nbsp;Add New</span>
          </button>
        </div>
        <br />
        <div class="row">
          <p style="color: red">
            <small>* You will be required to submit proof of education at the end of registration</small>
          </p>
        </div>
        <br />
        <hr />
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
import { mapState, mapActions, mapMutations, mapGetters } from "vuex";
import Datepicker from "vue2-datepicker";
import { required } from "vuelidate/lib/validators";
export default {
  components: {
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
      ],
      error: ""
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
    onSubmit(action) {
      if (action == "next" || action == null) {
        this.$v.$touch();
        if (this.$v.$invalid) {
          return;
        }
      }

      const educationsData = {
        educations: this.educations
      };
      const inspectorId = localStorage.getItem("openedInspectorId");
      axios
        .patch(`/inspector_users_admin/update/${inspectorId}`, educationsData)
        .then(res => {
          if (action == "next") {
            this.$emit("afterSaving");
          }

          if (action == "exit") {
            this.storeOkMessage("The inspector's education has been updated");
            this.$router.push("/inspectors");
          }
        })
        .catch(error => {
          console.log(error);
          this.error = error.response.data;
        });
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
    },
    ...mapMutations("adminStore", ["storeOkMessage"])
  },

  created() {
    const inspectorId = localStorage.getItem("openedInspectorId");
    axios
      .get(`/inspector_users_admin/${inspectorId}`)
      .then(res => {
        this.educations = res.data.educations;
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

label {
  display: block;
  width: 100%;
  font-size: 14px;
}

.inline-flex {
  display: flex;
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

.date-picker {
  height: 40px;
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

.row::after {
  content: "";
  clear: both;
  display: table;
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

.add-btn,
.delete-btn {
  font-size: 14px;
  font-weight: bold;
  padding: 4px 8px;
  color: white;
  cursor: pointer;
  outline: none;
  border: solid;
  border-radius: 5px;
}

.delete-btn {
  width: 95px;
  margin-top: 5px;
  background-color: red;
  border-color: orangered darkred darkred orangered;
  opacity: 0.8;
}

.delete-btn:active {
  border-color: darkred orangered orangered darkred;
  opacity: 0.8;
}

.add-btn {
  background-color: darkblue;
  border-color: blue darkblue darkblue blue;
  opacity: 0.85;
}

.add-btn:active {
  opacity: 0.85;
  border-color: darkblue blue blue darkblue;
}

.add-btn:hover,
.delete-btn:hover {
  opacity: 1;
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
