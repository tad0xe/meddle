<template>
  <div>
    <div class="modal-backdrop" @click="close">
      <div class="modal" @click.stop>
        <div class="modal__header">
          <div class="modal__header__content">Change names</div>
          <div class="btn-close-upper" @click="close()">x</div>
        </div>
        <div class="modal-body">
          <form class="modal-content" @submit.prevent="onSubmit()">
            <p>NB: You will have to complete the ID verification process and a manual review before your account can be reactivated</p>
            <div class="column" :class="{invalid: $v.firstName.$error}">
              <label>First Name</label>
              <input v-model="firstName" />
              <span v-if="!$v.firstName.required && $v.firstName.$error">First Name is required.</span>
            </div>
            <div class="column" :class="{invalid: $v.lastName.$error}">
              <label>Last Name</label>
              <input v-model="lastName" />
              <span v-if="!$v.lastName.required && $v.lastName.$error">Last Name is required.</span>
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
import { required } from "vuelidate/lib/validators";
export default {
  data() {
    return {
      firstName: "",
      lastName: ""
    };
  },
  validations: {
    firstName: {
      required
    },
    lastName: {
      required
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
        firstName: this.firstName,
        lastName: this.lastName
      };
      this.$emit("confirm", formData);
    }
  },

  created() {
    this.$store.dispatch("fetchInspectorInfo").then(res => {
      this.firstName = res.personalInfo.firstName;
      this.lastName = res.personalInfo.lastName;
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

.modal-body {
  font-size: 13px;
  padding-bottom: 10px;
}

.modal-footer {
  border-top: 1.5px solid #eeeeee;
  justify-content: flex-end;
  font-size: 13px;
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

input {
  width: 100%;
  padding: 8px;
  margin-top: 4px;
  border: 1px solid #ccc;
  border-radius: 3px;
  outline: none;
  background-color: rgb(232, 240, 254);
}

input:focus {
  border: 1px solid #a842a7;
  background-color: #eee;
}

.column {
  margin-top: 5px;
  margin-bottom: 5px;
  width: 100%;
  display: inline-block;
}

.invalid input {
  border: 1px solid red;
}

label {
  font-size: 13px;
}

.invalid label {
  color: red;
}

.invalid span {
  color: red;
  font-size: 11px;
}

/* For mobile: */
@media only screen and (max-width: 380px) {
  .modal-backdrop {
    padding: 5px;
  }
  .modal {
    padding: 5px;
    border-radius: 5px;
    width: 100%;
  }
}
</style>

