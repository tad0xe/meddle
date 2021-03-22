<template>
  <div>
    <div class="modal-backdrop" @click="close()">
      <div class="modal" @click.stop>
        <div class="modal__header">
          <div class="modal__header__content">Check Your Application Status</div>
          <div class="btn-close-upper" @click="close()">x</div>
        </div>
        <p v-if="message" class="message">{{message}}</p>
        <div class="modal-body">
          <form @submit.prevent="onSubmit()">
            <div class="text-input" :class="{invalid: $v.email.$error}">
              <label>Email</label>
              <input type="email" placeholder="Enter Email" v-model="email" />
              <span v-if="!$v.email.email">Email is invalid.</span>
              <span v-if="!$v.email.required && $v.email.$error">Email is required.</span>
            </div>
            <p
              v-if="message"
            >Enter the email you started your application with to check your status.</p>
            <div>
              <button type="submit" class="signupbtn">Check Status</button>
            </div>
          </form>
        </div>
        <footer class="modal-footer">
          <p>
            Already started an application?
            <router-link to="/login" tag="span">
              <u class="cursor-pointer">Log In</u>
            </router-link>
            <span>or</span>
            <router-link to="/resetpassword" tag="span">
              <u class="cursor-pointer">Reset&nbsp;Password</u>.
            </router-link>
          </p>
          <p>
            Not yet started an application?
            <a @click="close()">
              <u class="cursor-pointer">Sign Up</u>
            </a>
          </p>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { required, email } from "vuelidate/lib/validators";
export default {
  data: function() {
    return {
      email: "",
      message: ""
    };
  },
  validations: {
    email: {
      required,
      email
    }
  },
  components: {},
  methods: {
    close() {
      this.message = null;
      this.$emit("close");
    },
    onSubmit() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }

      const formData = {
        email: this.email
      };
      axios
        .post("/inspector_infos/applicationStatus", formData)
        .then(res => {
          this.message = res.data;
        })
        .catch(error => {
          console.log(error.response.data);
        });
    }
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.modal-backdrop {
  padding: 5px;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
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
  width: 370px;
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
  margin-top: 10px;
  margin-bottom: 5px;
}

.modal-body {
  font-size: 13px;
  padding-bottom: 10px;
  width: 100%;
}

.modal-footer {
  font-size: 13px;
  padding-bottom: 5px;
  justify-content: flex-end;
  border-bottom: 1.5px solid #eeeeee;
}

.cursor-pointer {
  color: dodgerblue;
  cursor: pointer;
}

.cursor-pointer:hover {
  color: blue;
}

.signupbtn {
  font-size: 16px;
  color: white;
  padding: 10px 20px;
  margin-top: 20px;
  outline: none;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
  border-radius: 40px;
  background-color: #2bc4e2;
}

.signupbtn:hover {
  background-color: #07b9dd;
}

.text-input {
  margin-top: 10px;
  width: 100%;
  display: inline-block;
}

input {
  width: 100%;
  font-size: 12px;
  padding: 9px 8px;
  margin-top: 3px;
  border: 1px solid #ccc;
  border-radius: 3px;
  outline: none;
  background-color: rgb(232, 240, 254);
}

label {
  font-size: 14px;
  width: 100%;
  display: block;
}

input:focus {
  outline: none;
  border: 1px solid #a842a7;
  background-color: #eee;
}

.invalid input {
  border: 1px solid red;
}

.invalid label {
  color: red;
}

.text-input span {
  color: red;
  font-size: 12px;
}

.invalid input {
  border: 1px solid red;
}

.message {
  color: red;
}

/* For mobile: */
@media only screen and (max-width: 380px) {
  .modal__header__content {
    font-size: 19px;
  }
  .modal {
    padding: 10px 6px;
    border-radius: 6px;
    width: 100%;
  }
}
</style>

