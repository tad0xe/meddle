<template>
  <div>
    <div class="body">
      <div class="container">
        <div class="container-header">Add New Country</div>
        <form @submit.prevent="onSubmit()">
          <table>
            <tr :class="{invalid: $v.country.$error}">
              <td>
                <label>Country *</label>
              </td>
              <td class="input-text">
                <select type="index" v-model="country" required>
                  <option value selected disabled hidden>Select Country</option>
                  <option value="Country">Country</option>
                </select>
                <span v-if="!$v.country.required && $v.country.$error">Country is required.</span>
              </td>
            </tr>
          </table>
          <div>
            <button type="button" class="addnewstate-btn" @click.prevent="onAddNewState()">
              <i class="fa fa-plus"></i>
              <span>&nbsp;Add New State</span>
            </button>
          </div>
          <table>
            <div v-for="(obj, index) in states" :key="index">
              <div v-if="index > 0">
                <button type="button" class="deletestate-btn">
                  <i class="fa fa-close"></i>
                  <span>&nbsp;Delete State</span>
                </button>
              </div>
              <tr :class="{invalid:  $v.states.$each[index].state.$error}">
                <td>
                  <label>State *</label>
                </td>
                <td>
                  <div class="flex">
                    <div class="input-text">
                      <select type="index" v-on:input="onInput()" v-model="obj.state" required>
                        <option value selected disabled hidden>Select State</option>
                        <option value="City">State</option>
                      </select>
                      <span
                        v-if="!$v.states.$each[index].state.required &&
                        $v.states.$each[index].state.$error"
                      >State is required.</span>
                    </div>
                    <div>
                      <button
                        type="button"
                        class="addnewcity-btn"
                        @click.prevent="onAddNewCity(index)"
                      >
                        <i class="fa fa-plus"></i>
                        <span>&nbsp;Add New City</span>
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <label :class="{red:  $v.states.$each[index].cities.$error}">Cities</label>
                </td>
                <td
                  class="flex"
                  v-for="(city, childIndex) in obj.cities"
                  :key="childIndex"
                  :class="{invalid:  $v.states.$each[index].cities.$each[childIndex].$error}"
                >
                  <div class="input-text">
                    <select type="childIndex" v-model="obj.cities[childIndex]" required>
                      <option value selected disabled hidden>Select City</option>
                      <option value="City">City</option>
                    </select>
                    <span
                      v-if="!$v.states.$each[index].cities.$each[childIndex].required &&
                        $v.states.$each[index].cities.$each[childIndex].$error"
                    >City is required.</span>
                  </div>
                  <div>
                    <div class="delete-btn">
                      <i class="fa fa-close"></i>
                    </div>
                  </div>
                </td>
              </tr>
              <br />
              <hr />
              <br />
            </div>
          </table>
          <div>
            <button type="submit" class="submit-btn" @click.prevent="onSubmit()">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { required } from "vuelidate/lib/validators";
import { mapState, mapActions, mapMutations, mapGetters } from "vuex";
export default {
  data() {
    return {
      country: "",
      states: [
        {
          state: "",
          cities: [""]
        }
      ]
    };
  },
  validations: {
    country: {
      required
    },
    states: {
      $each: {
        state: {
          required
        },
        cities: {
          $each: {
            required
          }
        }
      }
    }
  },
  methods: {
    ...mapMutations("adminStore", ["clearErrorMessage"]),
    ...mapMutations("adminStore", ["clearOkMessage"]),
    ...mapMutations("adminStore", ["storeErrorMessage"]),
    ...mapMutations("adminStore", ["storeOkMessage"]),

    onAddNewState() {
      const newStateObj = {
        state: "",
        cities: [""]
      };
      this.states.push(newStateObj);
    },

    onAddNewCity(index) {
      this.states[index].cities.push("");
    },
    onInput() {
      console.log(event.target.value);
    },
    onSubmit() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }

      //Check if there is a duplicate state
      const countryData = {
        country: this.country,
        states: this.states
      };
      let firstState = countryData.states[0].state;
      let testArray = [];
      countryData.states.forEach(item => {
        if (item.state == firstState) {
          testArray.push(item.state);
        }
      });
      console.log(testArray.length);
      if (testArray.length > 1) {
        throw new Error("Duplicate state found");
      }
      axios
        .post("/Countries_present_info", countryData)
        .then(res => {
          console.log(res.data);
        })
        .catch(error => {
          console.log(error.response.data);
        });
    }
  },

  computed: {
    ...mapGetters("adminStore", ["error"]),
    ...mapGetters("adminStore", ["okMessage"])
  },
  created() {},
  //Always user ES5 and not ES6 arrow function
  beforeRouteLeave: function(to, from, next) {
    console.log(this);
    this.clearErrorMessage();
    this.clearOkMessage();
    next();
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.body {
  background-color: lightcyan;
  font-family: sans-serif, Arial, Helvetica;
  padding: 50px;
  min-height: 650px;
  height: 100%;
  justify-content: center;
  display: flex;
}

.container {
  padding: 20px 30px;
  min-width: 700px;
  border-radius: 8px;
  border: 1px solid #b6b1b1;
  background-color: white;
  display: inline-table;
}

.container-header {
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 22px;
  font-weight: bolder;
  color: darkblue;
}

hr {
  margin-left: -5px;
  margin-right: -5px;
}

label {
  font-size: 15px;
  color: darkblue;
}

.flex {
  display: flex;
}

table {
  text-align: left;
}

td {
  padding-top: 10px;
  padding-bottom: 10px;
}

td label {
  width: 70px;
  display: block;
}

.input-text {
  padding-left: 20px;
  padding-right: 20px;
  width: 380px;
}

select {
  width: 100%;
  padding: 9px 6px;
  margin-top: 6px;
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

.red,
.invalid label {
  color: red;
}

.input-text span {
  color: red;
  font-size: 12px;
}

.delete-btn {
  font-size: 22px;
  font-weight: bold;
  margin-top: 12px;
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

.deletestate-btn,
.addnewstate-btn,
.addnewcity-btn {
  width: 125px;
  font-size: 13px;
  font-weight: bold;
  padding-top: 4px;
  margin-top: 5px;
  padding-bottom: 4px;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
  border: solid;
  color: white;
}

.addnewstate-btn {
  margin-left: 458px;
  background-color: #ea7601;
  border-color: #ed6502 #a04300 #a04300 #ed6502;
  opacity: 0.9;
}

.deletestate-btn {
  margin-left: 458px;
  background-color: red;
  border-color: orangered darkred darkred orangered;
  opacity: 0.8;
}

.addnewcity-btn {
  margin-top: 10px;
  background-color: darkblue;
  border-color: blue darkblue darkblue blue;
  opacity: 0.8;
}

.addnewstate-btn:active {
  opacity: 0.95;
  border-color: #a04300 #ed6502 #ed6502 #a04300;
}

.deletestate-btn:active {
  border-color: darkred orangered orangered darkred;
  opacity: 0.8;
}

.addnewcity-btn:active {
  opacity: 0.85;
  border-color: darkblue blue blue darkblue;
}

.submit-btn {
  font-size: 20px;
  font-weight: bold;
  width: 180px;
  color: white;
  padding-top: 8px;
  padding-bottom: 8px;
  margin-left: 100px;
  margin-top: 15px;
  margin-bottom: 20px;
  outline: none;
  background-color: #07b9dd;
  cursor: pointer;
  text-align: center;
  border-radius: 5px;
  border: solid;
  border-color: #2bc4e2 #208ba0 #208ba0 #2bc4e2;
  opacity: 0.9;
}

.submit-btn:active {
  opacity: 0.95;
  border-color: #208ba0 #2bc4e2 #2bc4e2 #208ba0;
}

.submit-btn:hover,
.deletestate-btn:hover,
.addnewcity-btn:hover,
.addnewstate-btn:hover {
  opacity: 1;
}
</style>
