<template>
  <div>
    <div class="body">
      <div class="container">
        <div class="container-header">Create Admin User</div>
        <form @submit.prevent="onSubmit()">
          <div>
            <div class="error" v-if="error">{{error}}</div>
            <div class="okMessage" v-if="okMessage">{{okMessage}}</div>
          </div>
          <table>
            <tr :class="{invalid: $v.adminUser.firstName.$error}">
              <td>
                <label>First Name</label>
              </td>
              <td class="input-text">
                <input type="text" placeholder="First Name" v-model="adminUser.firstName" />
                <span
                  v-if="!$v.adminUser.firstName.required && $v.adminUser.firstName.$error"
                >First Name is required.</span>
              </td>
            </tr>
            <tr :class="{invalid: $v.adminUser.lastName.$error}">
              <td>
                <label>Last Name</label>
              </td>
              <td class="input-text">
                <input type="text" placeholder="Last Name" v-model="adminUser.lastName" />
                <span
                  v-if="!$v.adminUser.lastName.required && $v.adminUser.lastName.$error"
                >Last Name is required.</span>
              </td>
            </tr>
            <tr :class="{invalid: $v.adminUser.email.$error}">
              <td>
                <label>Email</label>
              </td>
              <td class="input-text">
                <input type="email" placeholder="Email" v-model="adminUser.email" />
                <span v-if="!$v.adminUser.email.email">Email is invalid.</span>
                <span
                  v-if="!$v.adminUser.email.required && $v.adminUser.email.$error"
                >Email is required.</span>
              </td>
            </tr>
            <tr :class="{invalid: $v.adminUser.username.$error}">
              <td>
                <label>Username</label>
              </td>
              <td class="input-text">
                <input type="text" placeholder="Username" v-model="adminUser.username" />
                <span
                  v-if="!$v.adminUser.username.required && $v.adminUser.username.$error"
                >Username is required.</span>
              </td>
            </tr>
            <tr :class="{invalid: $v.adminUser.currentAdminPassword.$error}">
              <td>
                <label>Current Super-Admin Password</label>
              </td>
              <td class="input-text">
                <input
                  type="password"
                  placeholder="Current Admin Password"
                  v-model="adminUser.currentAdminPassword"
                />
                <span
                  v-if="!$v.adminUser.currentAdminPassword.required && $v.adminUser.currentAdminPassword.$error"
                >Current Super-Admin Password is required.</span>
              </td>
            </tr>
            <tr :class="{invalid: $v.adminUser.mobileNumber.$error}">
              <td>
                <label>Mobile Number</label>
              </td>
              <td class="input-text">
                <input type="number" placeholder="Mobile Number" v-model="adminUser.mobileNumber" />
                <span
                  v-if="!$v.adminUser.mobileNumber.required && $v.adminUser.mobileNumber.$error"
                >Mobile Number is required.</span>
              </td>
            </tr>
            <tr :class="{invalid: $v.adminUser.password.$error}">
              <td>
                <label>Password</label>
              </td>
              <td class="input-text">
                <input type="password" placeholder="Password" v-model="adminUser.password" />
                <span
                  v-if="!$v.adminUser.password.minLen"
                >Password must be at least {{ $v.adminUser.password.$params.minLen.min }}.</span>
                <span
                  v-if="!$v.adminUser.password.required && $v.adminUser.password.$error"
                >Password is required.</span>
              </td>
            </tr>
            <tr :class="{invalid: $v.adminUser.passwordRepeat.$error}">
              <td>
                <label>Password Confirmation</label>
              </td>
              <td class="input-text">
                <input
                  type="password"
                  placeholder="Password Confirmation"
                  v-model="adminUser.passwordRepeat"
                />
                <span
                  v-if="!$v.adminUser.passwordRepeat.required && $v.adminUser.passwordRepeat.$error"
                >Repeat Confirmation is required.</span>
                <span v-else-if="!$v.adminUser.passwordRepeat.sameAs">Passwords must match.</span>
              </td>
            </tr>
            <tr :class="{invalid: $v.adminUser.role.$error}">
              <td>
                <label>Role</label>
              </td>
              <td class="small-input-text">
                <select v-model="adminUser.role" required>
                  <option value selected disabled hidden>Select Role</option>
                  <option>admin</option>
                  <option>agent</option>
                  <option>marketer</option>
                </select>
                <span
                  v-if="!$v.adminUser.role.required && $v.adminUser.role.$error"
                >Role is required.</span>
              </td>
            </tr>
            <tr>
              <td>
                <label></label>
              </td>
              <td class="input-text">
                <button type="submit" @click.prevent="onSubmit()" class="submit">Submit</button>
              </td>
            </tr>
          </table>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { required, email, minLength, sameAs } from "vuelidate/lib/validators";
import { mapState, mapActions, mapMutations, mapGetters } from "vuex";
export default {
  data() {
    return {
      adminUser: {
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        mobileNumber: "",
        currentAdminPassword: "",
        password: "",
        passwordRepeat: "",
        role: ""
      }
    };
  },
  validations: {
    adminUser: {
      firstName: {
        required
      },
      lastName: {
        required
      },
      username: {
        required
      },
      email: {
        required,
        email
      },
      mobileNumber: {
        required
      },
      currentAdminPassword: {
        required
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
      role: {
        required
      }
    }
  },
  methods: {
    onSubmit() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }

      const adminUserData = this.adminUser;
      console.log(adminUserData);
      this.$store.dispatch("adminStore/signUpAdminUser", adminUserData);
    }
  },
  computed: {
    ...mapGetters("adminStore", ["error"]),
    ...mapGetters("adminStore", ["okMessage"])
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.body {
  font-family: sans-serif, Arial, Helvetica;
  background-color: lightcyan;
  width: 100%;
  padding: 50px;
  justify-content: center;
  display: flex;
}

.container {
  padding: 20px 30px;
  border-radius: 8px;
  border: 1px solid #ddd;
  background-color: white;
  display: inline-table;
}

.container-header {
  font-size: 22px;
  padding-top: 5px;
  padding-bottom: 10px;
  font-weight: bold;
  color: darkblue;
}

.error,
.okMessage {
  padding-top: 5px;
  padding-bottom: 10px;
  font-size: 14px;
}

.error {
  color: red;
}

.okMessage {
  color: green;
}

label {
  font-size: 16px;
  color: darkblue;
}

td {
  text-align: left;
  padding-top: 10px;
  padding-bottom: 10px;
}

.input-text {
  padding-left: 20px;
  padding-right: 10px;
  width: 380px;
}

.small-input-text {
  padding-left: 20px;
  width: 160px;
  display: block;
}

input,
select {
  width: 100%;
  padding: 9px;
  border: 1px solid #ccc;
  border-radius: 3px;
  outline: none;
  background-color: rgb(232, 240, 254);
}

select {
  padding: 8px 6px;
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

.invalid label {
  color: red;
}

.input-text span,
.small-input-text span {
  color: red;
  font-size: 12px;
}

.submit {
  color: white;
  width: 170px;
  padding: 10px 0px;
  outline: none;
  border: none;
  cursor: pointer;
  font-size: 20px;
  text-align: center;
  border-radius: 5px;
  background-color: #2bc4e2;
}

.submit:hover {
  background-color: #07b9dd;
}
</style>