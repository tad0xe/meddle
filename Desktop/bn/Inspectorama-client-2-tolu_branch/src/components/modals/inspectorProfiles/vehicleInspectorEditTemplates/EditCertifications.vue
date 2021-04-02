<template>
  <div>
    <div class="modal-backdrop" @click="close">
      <div class="modal" @click.stop>
        <div class="modal__header">
          <div class="modal__header__content">Edit Professional Certifications</div>
          <div class="btn-close-upper" @click="close()">x</div>
        </div>
        <div class="modal-body">
          <form @submit.prevent="onSubmit()">
            <p>NB: You will have to complete the ID verification process and a manual review before your account can be reactivated</p>
            <div class="modal-content">
              <div v-for="(proCert, index) in proCerts" :key="(index, proCert)">
                <div :for="proCert">
                  <strong>#{{ index + 1 }}</strong>
                </div>
                <div
                  class="column"
                  :class="{invalid:  $v.proCerts.$each[index].certAuthority.$error}"
                >
                  <label for="proCert.certAuthority">Certification authority: *</label>
                  <input
                    type="text"
                    placeholder="Enter certification authority name"
                    v-model="proCert.certAuthority"
                  />
                  <span
                    v-if="!$v.proCerts.$each[index].certAuthority.required && 
                        $v.proCerts.$each[index].certAuthority.$error"
                  >Certification authority is required.</span>
                </div>
                <div class="column" :class="{invalid:  $v.proCerts.$each[index].certNum.$error}">
                  <label for="proCert.certNum">Certification number : *</label>
                  <input
                    type="tel"
                    placeholder="Enter certification number"
                    v-model="proCert.certNum"
                  />
                  <span
                    v-if="!$v.proCerts.$each[index].certNum.required && 
                        $v.proCerts.$each[index].certNum.$error"
                  >Certification number is required.</span>
                </div>
                <div class="column" :class="{invalid:  $v.proCerts.$each[index].certName.$error}">
                  <label for="proCert.certName">Certification name: *</label>
                  <input
                    type="text"
                    placeholder="Enter certification name"
                    v-model="proCert.certName"
                  />
                  <span
                    v-if="!$v.proCerts.$each[index].certName.required && 
                        $v.proCerts.$each[index].certName.$error"
                  >Certification name is required.</span>
                </div>
                <div class="flex">
                  <div
                    class="date-column"
                    :class="{invalid:  $v.proCerts.$each[index].validFrom.$error}"
                  >
                    <label>Valid From *</label>
                    <Datepicker
                      class="month-year-input"
                      v-model="proCert.validFrom"
                      lang="en"
                      type="month"
                      format="YYYY-MMMM"
                      :disabled-date="(date)=>date > Date.now()"
                    ></Datepicker>
                    <span
                      v-if="!$v.proCerts.$each[index].validFrom.required && 
                        $v.proCerts.$each[index].validFrom.$error"
                    >Please select date.</span>
                  </div>
                  <div
                    class="date-column"
                    v-show="!proCert.doesNotExpire"
                    :class="{invalid:  $v.proCerts.$each[index].validTo.$error}"
                  >
                    <label>Valid To *</label>
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
                <div>
                  <label class="flex">
                    <input type="checkbox" v-model="proCert.doesNotExpire" />
                    <span>This certification does not expire</span>
                  </label>
                </div>
                <br />
                <div>
                  <label>
                    <input type="checkbox" v-model="proCert.isUrl" for="certificationUrl" /> Certification URL (optional):
                  </label>
                  <input
                    v-if="proCert.isUrl"
                    type="url"
                    placeholder="Enter certicate url"
                    v-model="proCert.certUrl"
                  />
                </div>
                <br v-if="(index + 1)> 1" />
                <div v-if="(index + 1)> 1">
                  <button type="button" class="delete-btn" @click="deleteProCert(index)">Delete</button>
                </div>
                <br />
                <hr />
                <br />
              </div>
              <div v-if="proCerts.length < 5">
                <button type="button" class="add-btn" @click="addProCert">Add New</button>
              </div>
            </div>
            <div>
              <p style="color: red">
                <small>* You will be required to submit proof of certification(s) at the end of the registration if you had not provided a url</small>
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
          isUrl: false,
          uploadedDoc: {
            fileName: "",
            fileData: null
          }
        }
      ]
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
    close() {
      this.$emit("close");
    },
    onSubmit() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }

      const formData = {
        proCerts: this.proCerts
      };
      this.$emit("confirm", formData);
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
    }
  },

  created() {
    this.$store.dispatch("fetchInspectorInfo").then(res => {
      this.proCerts = res.proCerts;
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
  display: inline-block;
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

input[type="text"],
input[type="tel"],
input[type="url"] {
  width: 100%;
  font-size: 12px;
  padding: 6px;
  margin-top: 3px;
  border: 1px solid #ccc;
  border-radius: 3px;
  outline: none;
  background-color: rgb(232, 240, 254);
}

.month-year-input /deep/ input {
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

.month-year-input {
  width: 150px;
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

  .month-year-input {
    width: 125px;
  }
}
</style>

