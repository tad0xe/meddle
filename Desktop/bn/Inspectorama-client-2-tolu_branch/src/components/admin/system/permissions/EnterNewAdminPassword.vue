<template>
  <div>
    <div class="modal">
      <div class="modal-header">Enter a New Admin Password</div>
      <div class="modal-body">
        <form @submit.prevent="onSubmit()">
          <div>
            <div class="error" v-if="errorInit">{{errorInit}}</div>
            <div class="error" v-if="error">{{error}}</div>
          </div>

          <input type="hidden" v-model="token" />
          <input type="hidden" v-model="id" />
          <input type="hidden" v-model="email" />
          <input type="hidden" v-model="firstName" />
          <input type="hidden" v-model="lastName" />
          <input type="hidden" v-model="username" />

          <div class="column" :class="{invalid: $v.password.$error}">
            <input
              type="password"
              placeholder="Enter New Password"
              required
              minlength="8"
              v-model="password"
            />
            <span
              v-if="!$v.password.minLen"
            >Password must be at least {{ $v.password.$params.minLen.min }}.</span>
            <span v-if="!$v.password.required && $v.password.$error">Password is required.</span>
          </div>
          <div class="column" :class="{invalid: $v.passwordRepeat.$error}">
            <input
              type="password"
              placeholder="Repeat New Password"
              required
              v-model="passwordRepeat"
            />
            <span
              v-if="!$v.passwordRepeat.required && $v.passwordRepeat.$error"
            >Repeat Password is required.</span>
            <span v-else-if="!$v.passwordRepeat.sameAs">Passwords must match.</span>
          </div>
          <div class="column" :class="{invalid: $v.verificationCode.$error}">
            <input
              type="text"
              placeholder="Enter Verification Code"
              required
              v-model="verificationCode"
            />
            <span
              v-if="!$v.verificationCode.required && $v.verificationCode.$error"
            >Verification Code is required.</span>
          </div>
          <div>
            <button type="submit" @click.prevent="onSubmit()" class="submit-btn">Submit</button>
          </div>
        </form>
      </div>
      <footer class="modal-footer"></footer>
    </div>
  </div>
</template>

<script>
import { required, email, minLength, sameAs } from "vuelidate/lib/validators";
import globalAxios from "axios";
import { mapState, mapActions, mapMutations, mapGetters } from "vuex";
export default {
  data: function() {
    return {
      errorInit: "",
      token: this.$route.params.token,
      id: this.$route.params.id,
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
      passwordRepeat: "",
      verificationCode: "",
      data: ""
    };
  },
  components: {},
  validations: {
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
    verificationCode: {
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
        token: this.token,
        id: this.id,
        firstName: this.firstName,
        lastName: this.lastName,
        username: this.username,
        email: this.email,
        password: this.password,
        verificationCode: this.verificationCode
      };
      this.$store.dispatch("adminStore/saveNewAdminPassword", formData);
    }
  },
  computed: {
    ...mapGetters("adminStore", ["error"])
  },
  created() {
    globalAxios
      .get("/admin_users/passwordReset/" + this.id + "/" + this.token)
      .then(res => {
        this.data = res.data;
        this.firstName = res.data.firstName;
        this.lastName = res.data.lastName;
        this.email = res.data.email;
        this.username = res.data.username;
      })
      .catch(error => {
        this.errorInit = error.response.data.message;
      });
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.modal {
  background: #ffffff;
  box-shadow: 2px 2px 20px 1px;
  font-family: sans-serif, Arial, Helvetica;
  padding: 15px;
  max-width: 400px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 50px;
  margin-bottom: 50px;
  border-radius: 10px;
}

.modal-header {
  font-size: 21px;
  font-weight: bold;
}

.error {
  color: red;
  padding-top: 5px;
  padding-bottom: 5px;
}

.modal-footer {
  border-top: 1.5px solid #eeeeee;
  justify-content: flex-end;
  font-size: 13px;
}

.modal-body {
  position: relative;
  font-size: 13px;
  padding-top: 5px;
  padding-bottom: 10px;
}

.submit-btn {
  background-color: #2bc4e2;
  color: white;
  padding: 10px 20px;
  margin: 8px 0;
  margin-top: 18px;
  outline: none;
  border: none;
  cursor: pointer;
  width: 100%;
  border-radius: 40px;
  font-size: 16px;
}

.submit-btn:hover {
  background-color: #07b9dd;
}

.column {
  margin-top: 5px;
  margin-bottom: 5px;
  width: 100%;
  display: inline-block;
}

input {
  width: 100%;
  font-size: 13px;
  padding: 10px;
  margin-top: 5px;
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

.column span {
  color: red;
  font-size: 12px;
}
</style>

