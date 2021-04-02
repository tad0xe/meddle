<template>
  <div>
    <div class="body">
      <div class="container">
        <div class="container-header">Create Admin Role</div>
        <form @submit.prevent="onSubmit()">
          <div>
            <div class="error" v-if="error">{{error}}</div>
            <div class="okMessage" v-if="okMessage">{{okMessage}}</div>
          </div>
          <table>
            <tr :class="{invalid: $v.adminUser.password.$error}">
              <td>
                <label>Admin&nbsp;Password</label>
              </td>
              <td class="input-text">
                <input type="password" placeholder="Admin Password" v-model="adminUser.password" />
                <span
                  v-if="!$v.adminUser.password.required && $v.adminUser.password.$error"
                >Admin Password is required.</span>
              </td>
            </tr>
            <tr :class="{invalid: $v.adminUser.roleName.$error}">
              <td>
                <label>Role&nbsp;Name</label>
              </td>
              <td class="input-text">
                <input type="text" placeholder="Role Name" v-model="adminUser.roleName" />
                <span
                  v-if="!$v.adminUser.roleName.required && $v.adminUser.roleName.$error"
                >Role Name is required.</span>
              </td>
            </tr>
            <tr :class="{invalid: $v.adminUser.resourcesAccess.$error}">
              <td>
                <label>Resources&nbsp;Access</label>
              </td>
              <td class="input-text">
                <select v-model="adminUser.resourcesAccess" required>
                  <option value selected disabled hidden>Select Resources Access</option>
                  <option>All</option>
                  <option>Custom</option>
                  <option>marketer</option>
                </select>
                <span
                  v-if="!$v.adminUser.resourcesAccess.required && $v.adminUser.resourcesAccess.$error"
                >Resources Access is required.</span>
              </td>
            </tr>
            <tr>
              <td>
                <label>Resources</label>
              </td>
              <td class="input-text">All resources will go in here</td>
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
import axios from "axios";
// import { mapState, mapActions, mapMutations, mapGetters } from "vuex";
export default {
  data() {
    return {
      adminUser: {
        password: "",
        roleName: "",
        resourcesAccess: ""
      }
    };
  },
  validations: {
    adminUser: {
      password: {
        required
      },
      roleName: {
        required
      },
      resourcesAccess: {
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
    }
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.body {
  font-family: sans-serif, Arial, Helvetica;
  background-color: white;
  padding: 50px;
  width: 100%;
  justify-content: center;
  display: flex;
}

.container {
  padding: 20px 30px;
  border-radius: 10px;
  box-shadow: 2px 2px 20px 1px;
  width: 480px;
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
  width: 140px;
  padding: 8px 0px;
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