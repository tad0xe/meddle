<template>
  <div>
    <div class="container">
      <form @submit.prevent="onSubmit">
        <div class="error" v-if="error">{{error}}</div>
        <div class="container-header">Certifications</div>
        <div class="cert-input-block" v-for="(proCert, index) in proCerts" :key="(index, proCert)">
          <span :for="proCert">
            <strong>#{{ index + 1 }}</strong>
          </span>
          <br />
          <div class="inline-flex">
            <div
              class="input-long"
              :class="{invalid:  $v.proCerts.$each[index].certAuthority.$error}"
            >
              <label for="proCert.certAuthority">Certification Authority: *</label>
              <div>
                <input
                  type="text"
                  placeholder="Enter Certification Authority Name"
                  v-model="proCert.certAuthority"
                />
                <span
                  v-if="!$v.proCerts.$each[index].certAuthority.required && 
                        $v.proCerts.$each[index].certAuthority.$error"
                >Certification Authority is required.</span>
              </div>
            </div>
            <div class="input-short" :class="{invalid:  $v.proCerts.$each[index].certNum.$error}">
              <label for="proCert.certNum">Certification Number: *</label>
              <div>
                <input
                  type="tel"
                  placeholder="Enter Certification Number"
                  v-model="proCert.certNum"
                />
                <span
                  v-if="!$v.proCerts.$each[index].certNum.required && 
                        $v.proCerts.$each[index].certNum.$error"
                >Certification Number is required.</span>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="input-long" :class="{invalid:  $v.proCerts.$each[index].certName.$error}">
              <label for="proCert.certName">Certification Name: *</label>
              <div>
                <input
                  type="text"
                  placeholder="Enter Certification Name"
                  v-model="proCert.certName"
                />
                <span
                  v-if="!$v.proCerts.$each[index].certName.required && 
                        $v.proCerts.$each[index].certName.$error"
                >Certification Name is required.</span>
              </div>
            </div>
          </div>
          <div class="inline-flex">
            <div class="date" :class="{invalid:  $v.proCerts.$each[index].validFrom.$error}">
              <label>Valid From *</label>
              <div>
                <Datepicker
                  class="month-year-input"
                  v-model="proCert.validFrom"
                  lang="en"
                  type="month"
                  format="YYYY-MMMM"
                  :disabled-date="(date)=>date > new Date().setHours(0, 0, 0, 0)"
                ></Datepicker>
                <span
                  v-if="!$v.proCerts.$each[index].validFrom.required && 
                        $v.proCerts.$each[index].validFrom.$error"
                >Please select date.</span>
              </div>
            </div>
            <div class="flex">
              <div
                class="date"
                v-show="!proCert.doesNotExpire"
                :class="{invalid:  $v.proCerts.$each[index].validTo.$error}"
              >
                <label>Valid To *</label>
                <div>
                  <Datepicker
                    class="month-year-input"
                    v-model="proCert.validTo"
                    lang="en"
                    type="month"
                    format="YYYY-MMMM"
                    :disabled-date="(date)=>date < Date.now()"
                  ></Datepicker>
                  <span
                    v-if="!$v.proCerts.$each[index].validTo.required && 
                        $v.proCerts.$each[index].validTo.$error"
                  >Please select date.</span>
                </div>
              </div>
              <div class="margin_top" :class="{height: proCert.doesNotExpire}">
                <label class="flex">
                  <input type="checkbox" v-model="proCert.doesNotExpire" />
                  <span>This certification does not expire</span>
                </label>
              </div>
            </div>
          </div>
          <div class="spacing">
            <label class="flex">
              <input type="checkbox" v-model="proCert.isUrl" for="certificationUrl" />
              <span>Certification URL (optional):</span>
            </label>
            <div>
              <input
                v-if="proCert.isUrl"
                type="url"
                placeholder="Enter Certicate url"
                v-model="proCert.certUrl"
              />
            </div>
          </div>
          <div v-if="(index + 1)> 1">
            <button type="button" class="delete-btn" @click="deleteProCert(index)">
              <i class="fa fa-close"></i>
              <span>&nbsp;Delete</span>
            </button>
          </div>
          <br />
          <hr />
        </div>
        <div v-if="proCerts.length < 5">
          <button type="button" class="add-btn" @click="addProCert">
            <i class="fa fa-plus"></i>
            <span>&nbsp;Add New</span>
          </button>
        </div>
        <br />
        <div>
          <p style="color: red">
            <small>* You will be required to submit proof of certification(s) at the end of the registration if you had not provided a url</small>
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
import { required, requiredIf } from "vuelidate/lib/validators";
export default {
  components: {
    Datepicker
  },

  data() {
    return {
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
          // uploadedDoc: {
          //   fileName: "",
          //   fileData: null
          // }
        }
      ],
      error: ""
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
          required: requiredIf(vm => {
            if (vm.doesNotExpire == true) {
              vm.validTo = null;
            }
            return vm.doesNotExpire == false;
          })
        }
      }
    }
  },
  methods: {
    onSubmit(action) {
      if (action == "next" || action == null) {
        this.$v.$touch();

        console.log("error");
        if (this.$v.$invalid) {
          return;
        }
      }
      console.log("Go");
      const proCertsData = {
        proCerts: this.proCerts
      };
      const inspectorId = localStorage.getItem("openedInspectorId");
      axios
        .patch(`/inspector_users_admin/update/${inspectorId}`, proCertsData)
        .then(res => {
          if (action == "next") {
            this.$emit("afterSaving");
          }
          if (action == "exit") {
            this.storeOkMessage(
              "The inspector's professional certifications have been updated"
            );
            this.$router.push("/inspectors");
          }
        })
        .catch(error => {
          console.log(error);
          this.error = error.response.data;
        });
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
        isUrl: false,
        uploadedDoc: {
          fileName: "",
          fileData: null
        }
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
    },

    ...mapMutations("adminStore", ["storeOkMessage"])
  },

  created() {
    const inspectorId = localStorage.getItem("openedInspectorId");
    axios
      .get(`/inspector_users_admin/${inspectorId}`)
      .then(res => {
        this.proCerts = res.data.proCerts;
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
  height: 40px;
  margin-right: 20px;
  display: inline-block;
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
  display: block;
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

.cert-input-block {
  margin-bottom: 20px;
}

.flex,
.inline-flex {
  display: flex;
}

.spacing {
  margin-top: 20px;
  margin-bottom: 20px;
}

.row::after {
  content: "";
  clear: both;
  display: table;
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
