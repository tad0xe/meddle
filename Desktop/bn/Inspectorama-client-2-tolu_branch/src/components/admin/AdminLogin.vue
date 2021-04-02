<template>
  <div>
    <div class="body">
      <div class="container">
        <div class="container-header">Log in to Admin Panel</div>
        <div class="container-body">
          <form @submit.prevent="onSubmit">
            <div class="input-text" :class="{invalid: $v.username.$error}">
              <input class="text-input" type="text" placeholder="Enter Username" v-model="username" />
              <span v-if="!$v.username.required && $v.username.$error">Username is required.</span>
            </div>
            <div class="input-text" :class="{invalid: $v.password.$error}">
              <input type="password" placeholder="Enter Password" minlength="8" v-model="password" />
              <span v-if="!$v.password.required && $v.password.$error">Password is required.</span>
            </div>
            <div>
              <p class="error" v-if="error">{{error}}</p>
              <a class="link" href="/resetpassword">Forgot password?</a>
            </div>
            <div>
              <button type="submit" class="signin-btn">Sign In</button>
            </div>
          </form>
        </div>
        <footer class="modal-footer"></footer>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations, mapGetters } from "vuex";
import { required } from "vuelidate/lib/validators";

export default {
  data: function() {
    return {
      username: "",
      password: ""
    };
  },
  validations: {
    username: {
      required
    },
    password: {
      required
    }
  },
  methods: {
    onSubmit() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }

      const formData = {
        username: this.username,
        password: this.password
      };
      this.$store.dispatch("adminStore/loginAdminUser", formData);
    }
  },
  computed: {
    ...mapGetters("adminStore", ["error"])
  },
  created() {
    // this.$store.dispatch("login");
    localStorage.clear();
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.body {
  background-color: white;
  font-family: sans-serif, Arial, Helvetica;
  padding-top: 100px;
  padding-bottom: 100px;
  height: 700px;
  justify-content: center;
  display: flex;
}

.container {
  border-radius: 10px;
  background: #ffffff;
  box-shadow: 2px 2px 20px 1px;
  padding: 15px;
  width: 400px;
  display: inline-table;
}

.container-header {
  font-size: 21px;
  font-weight: bold;
  color: #ed6502;
  padding-top: 5px;
  padding-bottom: 5px;
}

.modal-footer {
  border-top: 1.5px solid #eeeeee;
  width: 100%;
  display: inline-block;
}

.input-text {
  padding-top: 10px;
  padding-bottom: 10px;
  width: 100%;
}

input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
  outline: none;
  background-color: rgb(232, 240, 254);
}

input:focus {
  outline: none;
  border: 1px solid #a842a7;
  background-color: #eee;
}

.invalid input {
  border: 1px solid red;
}

.invalid span {
  font-size: 12px;
  color: red;
}

.signin-btn {
  color: white;
  padding: 10px 15px;
  margin-top: 10px;
  width: 100%;
  outline: none;
  border: none;
  cursor: pointer;
  font-size: 17px;
  font-weight: bold;
  text-align: center;
  border-radius: 20px;
  background-color: #2bc4e2;
}

.signin-btn:hover {
  background-color: #07b9dd;
}

.error {
  font-size: 13px;
  padding-top: 5px;
  padding-bottom: 10px;
  color: red;
}

.link {
  font-size: 13px;
  float: right;
  cursor: pointer;
  color: dodgerblue;
}

.link:hover {
  color: blue;
}
</style>

