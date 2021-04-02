<template>
  <div>
    <div class="container">
      <div class="message-error" v-if="navMessageOnError">
        Go to
        <u class="link" @click="goToInspectors()">inspectors</u> to search the inspector
      </div>
      <div class="container-header">Account Information</div>
      <form @submit.prevent="onSubmit">
        <div class="row">
          <div class="column1" :class="{invalid: $v.inspectorInfo.contactInfo.city.$error}">
            <label>First Name</label>
            <input
              type="text"
              placeholder="Enter First Name"
              required
              v-model="inspectorInfo.contactInfo.city"
            />
            <span
              v-if="!$v.inspectorInfo.contactInfo.city.required && $v.inspectorInfo.contactInfo.city.$error"
            >First Name is required.</span>
          </div>
          <div class="column2" :class="{invalid: $v.inspectorInfo.lastName.$error}">
            <label>Last Name</label>
            <input
              type="text"
              placeholder="Enter Last Name"
              required
              v-model="inspectorInfo.lastName"
            />
            <span
              v-if="!$v.inspectorInfo.lastName.required && $v.inspectorInfo.lastName.$error"
            >Last Name is required.</span>
          </div>
        </div>
        <div class="row">
          <div class="column1" :class="{invalid: $v.inspectorInfo.email.$error}">
            <label>Email</label>
            <input type="email" placeholder="Enter Email" required v-model="inspectorInfo.email" />
            <span v-if="!$v.inspectorInfo.email.email">Email is invalid.</span>
            <span
              v-if="!$v.inspectorInfo.email.required && $v.inspectorInfo.email.$error"
            >Email is required.</span>
          </div>
        </div>
        <div class="row">
          <div class="column1" :class="{invalid: $v.inspectorInfo.password.$error}">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              required
              v-model="inspectorInfo.password"
            />
            <span
              v-if="!$v.inspectorInfo.password.minLen"
            >Password must be at least {{ $v.inspectorInfo.password.$params.minLen.min }}.</span>
            <span
              v-if="!$v.inspectorInfo.password.required && $v.inspectorInfo.password.$error"
            >Password is required.</span>
          </div>
          <div class="column2" :class="{invalid: $v.inspectorInfo.passwordRepeat.$error}">
            <label>Repeat Password</label>
            <input
              type="password"
              placeholder="Enter Repeat Password"
              required
              v-model="inspectorInfo.passwordRepeat"
            />
            <span
              v-if="!$v.inspectorInfo.passwordRepeat.required && $v.inspectorInfo.passwordRepeat.$error"
            >Repeat Password is required.</span>
            <span v-else-if="!$v.inspectorInfo.passwordRepeat.sameAs">Passwords must match.</span>
          </div>
        </div>
        <div class="row">
          <div class="column1" :class="{invalid: $v.inspectorInfo.pro.typeOfInspector.$error}">
            <label>Inspection Service</label>
            <select name="type" required v-model="inspectorInfo.pro.typeOfInspector">
              <option value disabled selected hidden>Select Inspection Service</option>
              <option value="Vehicle">Vehicle Inspection</option>
              <option value="Home">Home Inspection</option>
              <option value="Drone">Drone Inspection</option>
              <option value="Textile">Textile Inspection</option>
              <option value="OilAndGas">Oil & gas Inspection</option>
            </select>
            <span
              v-if="!$v.inspectorInfo.pro.typeOfInspector.required && $v.inspectorInfo.pro.typeOfInspector.$error"
            >Inspection Service is required.</span>
          </div>
          <div class="column2" :class="{invalid: $v.inspectorInfo.contactInfo.country.$error}">
            <label>Country</label>
            <select name="country" required v-model="inspectorInfo.contactInfo.country">
              <option value disabled selected hidden>Select Country</option>
              <option value="Norway">Norway</option>
              <option value="USA">United States</option>
              <option value="UK">United Kingdom</option>
              <option value="Canada">Canada</option>
            </select>
            <span
              v-if="!$v.inspectorInfo.contactInfo.country.required && $v.inspectorInfo.contactInfo.country.$error"
            >Country is required.</span>
          </div>
        </div>
        <div class="row">
          <div class="column1" :class="{invalid: $v.inspectorInfo.contactInfo.state.$error}">
            <label>Select State or Province</label>
            <select required v-model="inspectorInfo.contactInfo.state">
              <option value disabled selected hidden>Select State or Province</option>
              <option value="New York">New York</option>
              <option value="California">California</option>
            </select>
            <span
              v-if="!$v.inspectorInfo.contactInfo.state.required && $v.inspectorInfo.contactInfo.state.$error"
            >State or Province is required.</span>
          </div>
          <div class="column2" :class="{invalid: $v.inspectorInfo.contactInfo.city.$error}">
            <label>Select City</label>
            <select required v-model="inspectorInfo.contactInfo.city">
              <option value disabled selected hidden>Select City</option>
              <option value="New York">New York</option>
              <option value="Denver">Denver</option>
              <option value="New York">Miami</option>
              <option value="Denver">Los Angeles</option>
            </select>
            <span
              v-if="!$v.inspectorInfo.contactInfo.city.required && $v.inspectorInfo.contactInfo.city.$error"
            >City is required.</span>
          </div>
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
import { required, email, minLength, sameAs } from "vuelidate/lib/validators";
import { mapState, mapActions, mapMutations, mapGetters } from "vuex";
export default {
  data() {
    return {
      inspectorInfo: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        passwordRepeat: "",
        pro: {
          typeOfInspector: ""
        },
        contactInfo: {
          city: "",
          state: "",
          country: ""
        }
      },
      error: "",
      OK: "",
      navMessageOnError: false
    };
  },
  validations: {
    inspectorInfo: {
      firstName: {
        required
      },
      lastName: {
        required
      },
      email: {
        required,
        email
      },
      password: {
        required,
        minLen: minLength(8)
      },
      passwordRepeat: {
        required,
        sameAs: sameAs(vm => {
          return vm.password;
        })
      },
      pro: {
        typeOfInspector: {
          required
        }
      },
      contactInfo: {
        city: {
          required
        },
        state: {
          required
        },
        country: {
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

      const inspectorInfoData = this.inspectorInfo;
      localStorage.removeItem("openedInspectorId");
      axios
        .post("/inspector_users_admin/createNew", inspectorInfoData)
        .then(res => {
          this.OK = res.data.okMessage;
          if (action == "next") {
            localStorage.setItem("openedInspectorId", res.data.user._id);
            this.$emit("afterSaving");
          }
        })
        .catch(error => {
          console.log(error.response.data);
          this.error = error.response.data;
          if (error.response.data == "This inspector is already registered.") {
            this.navMessageOnError = true;
          }
        });
    },
    goToInspectors() {
      this.$router.push("/inspectors");
    }
  },
  computed: {
    // auth() {
    //   return this.$store.getters.isAuthenticated;
    // },
  },
  created() {
    const inspectorId = localStorage.getItem("openedInspectorId");
    axios
      .get(`/customer_users/${inspectorId}`)
      .then(res => {
        this.inspectorInfo = res.data;
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
  width: 100%;
  background-color: white;
  display: inline-block;
}

.container-header {
  padding-bottom: 10px;
  font-size: 22px;
  color: darkblue;
  font-weight: bold;
}

hr {
  margin-left: -10px;
  margin-right: -10px;
}

.error,
.message-error {
  padding-top: 10px;
  padding-bottom: 10px;
}

.error {
  color: red;
}

.message-error {
  color: orangered;
}

.link {
  color: red;
  font-weight: bold;
  cursor: pointer;
}

.link:hover {
  color: blue;
}

.row::after {
  content: "";
  clear: both;
  display: table;
}

.column1,
.column2 {
  margin-top: 10px;
  margin-bottom: 10px;
  float: left;
  width: 350px;
  display: inline-block;
}

.column1 {
  padding-right: 10px;
}

.column2 {
  padding-left: 10px;
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

label {
  font-size: 13px;
  display: block;
  width: 100%;
}

.invalid label {
  color: red;
}

.column1 span,
.column2 span {
  color: red;
  font-size: 12px;
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
