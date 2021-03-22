<template>
  <div>
    <div class="modal">
      <div class="modal-header">Reset Admin Password</div>
      <div class="modal-body">
        <form @submit.prevent="onSubmit">
          <div class="column" :class="{invalid: $v.email.$error}">
            <input type="email" placeholder="Enter Email" name="email" v-model="email" required />
            <span v-if="!$v.email.email">Email is invalid.</span>
            <span v-if="!$v.email.required && $v.email.$error">Email is required.</span>
          </div>
          <div>
            <button type="submit" @click.prevent="onSubmit()" class="submit-btn">Send Email</button>
          </div>
        </form>
      </div>
      <footer class="modal-footer"></footer>
    </div>
  </div>
</template>

<script>
import { required, email } from "vuelidate/lib/validators";
export default {
  data() {
    return {
      email: ""
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
    onSubmit() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }

      const formData = {
        email: this.email
      };
      console.log(formData);
      this.$store.dispatch("adminStore/getAdminResetPasswordLink", formData);
    }
  },

  computed: {
    error() {
      return this.$store.state.errorMessage;
    }
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
  margin-top: 100px;
  margin-bottom: 180px;
  border-radius: 10px;
}

.modal-header {
  font-size: 21px;
  font-weight: bold;
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

input[type="email"] {
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

