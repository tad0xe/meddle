<template>
  <div>
    <div>
      <div class="container">
        <div class="error" v-if="error">{{error}}</div>
        <div class="container-header">References</div>
        <form @submit.prevent="onSubmit">
          <div v-for="(reference, index) in references" :key="index">
            <span :for="reference">
              <strong>#{{ index + 1 }}</strong>
            </span>
            <br />
            <div class="row">
              <div
                class="input-left"
                :class="{invalid:  $v.references.$each[index].firstName.$error}"
              >
                <label for="firstName">First Name *</label>
                <input type="text" placeholder="Enter First Name" v-model="reference.firstName" />
                <span
                  v-if="!$v.references.$each[index].firstName.required && 
                        $v.references.$each[index].firstName.$error"
                >First Name is required.</span>
              </div>
              <div
                class="input-right"
                :class="{invalid:  $v.references.$each[index].lastName.$error}"
              >
                <label for="lastName">Last Name *</label>
                <input type="text" placeholder="Enter Last Name" v-model="reference.lastName" />
                <span
                  v-if="!$v.references.$each[index].lastName.required && 
                        $v.references.$each[index].lastName.$error"
                >Last Name is required.</span>
              </div>
            </div>
            <div class="row">
              <div
                class="column"
                :class="{invalid:  $v.references.$each[index].companyName.$error}"
              >
                <label for="companyName">Company Name</label>
                <input type="text" placeholder="Enter Company Name" v-model="reference.companyName" />
                <span
                  v-if="!$v.references.$each[index].companyName.required && 
                        $v.references.$each[index].companyName.$error"
                >Company Name is required.</span>
              </div>
            </div>
            <div class="row">
              <div
                class="input-left"
                :class="{invalid:  $v.references.$each[index].telephone.$error}"
              >
                <label for="telephone">Telephone (add country code)*</label>
                <div class="flex">
                  <div class="dialing-code">
                    <input
                      type="text"
                      placeholder="- - - - -"
                      disabled
                      v-model="reference.countryCode"
                    />
                  </div>
                  <div class="phone-number">
                    <input
                      type="tel"
                      v-model="reference.telephone"
                      placeholder="Enter Telephone Number"
                    />
                  </div>
                </div>
                <span
                  v-if="!$v.references.$each[index].telephone.required && 
                        $v.references.$each[index].telephone.$error"
                >Telephone Name is required.</span>
              </div>
              <div class="input-right" :class="{invalid:  $v.references.$each[index].email.$error}">
                <label for="email">Email Address *</label>
                <input type="text" placeholder="Enter Email Address" v-model="reference.email" />
                <span v-if="!$v.references.$each[index].email.email">Email is invalid.</span>
                <span
                  v-if="!$v.references.$each[index].email.required && 
                        $v.references.$each[index].email.$error"
                >Email is required.</span>
              </div>
            </div>
            <div class="row">
              <div
                class="input-left"
                :class="{invalid:  $v.references.$each[index].yourRelationship.$error}"
              >
                <label for="relationship">Your Relationship</label>
                <select
                  @click="relationshipTypeOnClick()"
                  name="selectRelationship"
                  v-model="reference.yourRelationship"
                  required
                >
                  <option value disabled hidden selected>Select Your Relationship</option>
                  <option
                    :disabled="isrelationshipType(relationshipType)"
                    v-for="(relationshipType, index) in relationshipTypes"
                    :key="index"
                  >{{relationshipType}}</option>
                </select>
                <span
                  v-if="!$v.references.$each[index].yourRelationship.required && 
                        $v.references.$each[index].yourRelationship.$error"
                >Your Relationship is required.</span>
              </div>
            </div>
            <div v-if="(index + 1)> 1">
              <button
                class="delete-btn"
                type="button"
                @click="deleteReference(index), relationshipTypeOnClick()"
              >
                <i class="fa fa-close"></i>
                <span>&nbsp;Delete</span>
              </button>
            </div>
            <br />
            <hr />
            <br />
          </div>
          <div v-if="references.length < 5">
            <button type="button" class="add-btn" @click="addReference">
              <i class="fa fa-plus"></i>
              <span>&nbsp;Add New</span>
            </button>
            <br />
            <br />
            <hr />
          </div>
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
  </div>
</template>
<script>
import axios from "axios";
import { mapState, mapActions, mapMutations, mapGetters } from "vuex";
import { required, email } from "vuelidate/lib/validators";
export default {
  data() {
    return {
      currentPage: "",
      yourRelationshipSelectedItems: [],
      references: [
        {
          firstName: "",
          lastName: "",
          companyName: "",
          countryCode: "",
          telephone: "",
          email: "",
          yourRelationship: ""
        }
      ],
      relationshipTypes: [
        "Manager(former)",
        "Manager(current)",
        "Colleague(former)",
        "Colleague(present)",
        "Client",
        "Business partner"
      ],
      error: ""
    };
  },
  validations: {
    references: {
      $each: {
        firstName: {
          required
        },
        lastName: {
          required
        },
        telephone: {
          required
        },
        email: {
          required,
          email
        },
        companyName: {
          required
        },
        yourRelationship: {
          required
        }
      }
    }
  },
  methods: {
    relationshipTypeOnClick() {
      this.yourRelationshipSelectedItems = [];
      this.references.forEach(item => {
        this.yourRelationshipSelectedItems.push(item.yourRelationship);
      });
    },

    isrelationshipType(relationshipType) {
      let item1;
      this.yourRelationshipSelectedItems.forEach(item => {
        if (item == relationshipType) {
          item1 = item;
        }
      });
      return item1 == relationshipType;
    },

    onSubmit(action) {
      if (action == "next" || action == null) {
        this.$v.$touch();
        if (this.$v.$invalid) {
          return;
        }
      }

      const referencesData = {
        references: this.references
      };
      const inspectorId = localStorage.getItem("openedInspectorId");
      axios
        .patch(`/inspector_users_admin/update/${inspectorId}`, referencesData)
        .then(res => {
          if (action == "next") {
            this.$emit("afterSaving");
          }
          if (action == "exit") {
            this.storeOkMessage("The inspector's references have been updated");
            this.$router.push("/inspectors");
          }
        })
        .catch(error => {
          console.log(error);
          this.error = error.response.data;
        });
    },

    addReference() {
      const newReference = {
        firstName: "",
        lastName: "",
        companyName: "",
        telephone: "",
        email: "",
        yourRelationship: ""
      };
      this.references.push(newReference);
      if (this.references.length >= 6) {
        this.deleteReference(5);
      }
    },
    deleteReference(index) {
      this.references.splice(index, 1);
      if (index === 0 && this.references.length === 0) {
        this.addReference();
      }
    },

    ...mapMutations("adminStore", ["storeOkMessage"])
  },

  created() {
    const inspectorId = localStorage.getItem("openedInspectorId");
    axios
      .get(`/inspector_users_admin/${inspectorId}`)
      .then(res => {
        this.references = res.data.references;
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

input,
select {
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

label {
  font-size: 14px;
  width: 100%;
  display: block;
}

input:focus,
select:focus {
  outline: none;
  border: 1px solid #a842a7;
  background-color: #eee;
}

.invalid input,
.invalid select {
  border: 1px solid red;
}

.invalid label {
  color: red;
}

.invalid span {
  color: red;
  font-size: 12px;
}

.flex {
  display: flex;
}

.dialing-code {
  margin-right: 10px;
  width: 25%;
  display: inline-block;
}

.dialing-code input {
  text-align: center;
}

.phone-number {
  width: 75%;
  display: inline-block;
}

.row::after {
  content: "";
  clear: both;
  display: table;
}

.column,
.input-left,
.input-right {
  margin-top: 10px;
  margin-bottom: 10px;
}

.input-left,
.input-right {
  float: left;
  width: 40%;
}

.input-left {
  margin-right: 20px;
}

.column {
  width: 83%;
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
