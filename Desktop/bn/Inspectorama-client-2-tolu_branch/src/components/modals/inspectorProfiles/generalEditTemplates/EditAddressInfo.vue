<template>
  <div>
    <div class="modal-backdrop" @click="close">
      <div class="modal" @click.stop>
        <div class="modal__header">
          <div class="modal__header__content">Edit Address Information</div>
          <div class="btn-close-upper" @click="close()">x</div>
        </div>
        <div class="modal-body">
          <form class="modal-content" @submit.prevent="onSubmit()">
            <p>NB: You will have to complete the ID verification process and a manual review before your account can be reactivated</p>
            <div class="column" :class="{invalid: $v.country.$error}">
              <label>Country</label>
              <select v-model="country" @blur="onBlurAddress" required>
                <option value="United States">United States</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="Norway">Norway</option>
              </select>
              <span v-if="!$v.country.required && $v.country.$error">Country is required.</span>
            </div>
            <div class="column" :class="{invalid: $v.state.$error}">
              <label>State</label>
              <select v-model="state" @blur="onBlurAddress">
                <option value="Florida">Florida</option>
                <option value="New York">New York</option>
                <option value="California">California</option>
              </select>
              <span v-if="!$v.state.required && $v.city.$error">State is required.</span>
            </div>
            <div class="column" :class="{invalid: $v.city.$error}">
              <label>City</label>
              <select v-model="city" @blur="onBlurAddress">
                <option value="Miami">Miami</option>
                <option value="New York">New York</option>
                <option value="Los Angeles">Los Angeles</option>
              </select>
              <span v-if="!$v.city.required && $v.city.$error">City is required.</span>
            </div>
            <div class="column" :class="{invalid: $v.zipCode.$error}">
              <label>Zip/Post Code</label>
              <input v-model="zipCode" />
              <span v-if="!$v.zipCode.required && $v.zipCode.$error">Zip/Post Code is required.</span>
            </div>
            <div class="column" :class="{invalid: $v.addressLine1.$error}">
              <label>Street Address 1</label>
              <input v-model="addressLine1" />
              <span
                v-if="!$v.addressLine1.required && $v.addressLine1.$error"
              >AddressLine 1 is required.</span>
            </div>
            <div class="column" :class="{invalid: $v.addressLine2.$error}">
              <label>Street Address 2</label>
              <input v-model="addressLine2" />
              <span
                v-if="!$v.addressLine2.required && $v.addressLine2.$error"
              >AddressLine 2 is required.</span>
            </div>
            <div>
              <button type="submit" @click.prevent="onSubmit()" class="signupbtn">Confirm</button>
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
      country: "",
      state: "",
      city: "",
      zipCode: "",
      addressLine1: "",
      addressLine2: "",
      geoCoordinates: {}
    };
  },
  validations: {
    country: {
      required
    },
    state: {
      required
    },
    city: {
      required
    },
    zipCode: {
      required
    },
    addressLine1: {
      required
    },
    addressLine2: {
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
        country: this.country,
        state: this.state,
        city: this.city,
        zipCode: this.zipCode,
        addressLine1: this.addressLine1,
        addressLine2: this.addressLine2,
        geoCoordinates: this.geoCoordinates
      };
      this.$emit("confirm", formData);
    },
    onBlurAddress() {
      console.log(event.target.value);
      axios
        .get(
          `/inspector_infos/getGeoCoordinates/${this.addressLine1} ${this.addressLine2} ${this.city} ${this.country}`
        )
        .then(res => {
          console.log(res.data[0].geometry.location);
          this.geoCoordinates = res.data[0].geometry.location;
        })
        .catch(error => {
          console.log(error.response.data);
        });
    }
  },

  created() {
    this.$store.dispatch("fetchInspectorInfo").then(res => {
      this.country = res.personalInfo.country;
      this.state = res.personalInfo.state;
      this.city = res.personalInfo.city;
      this.zipCode = res.personalInfo.zipCode;
      this.addressLine1 = res.personalInfo.addressLine1;
      this.addressLine2 = res.personalInfo.addressLine2;
      this.geoCoordinates = res.personalInfo.geoCoordinates;
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

input,
select {
  width: 100%;
  font-size: 13px;
  padding: 7px;
  margin-top: 4px;
  border: 1px solid #ccc;
  border-radius: 3px;
  outline: none;
  background-color: rgb(232, 240, 254);
}

select {
  padding: 6px 2px;
}

input:focus {
  border: 1px solid #a842a7;
  background-color: #eee;
}

.column {
  margin-top: 6px;
  margin-bottom: 6px;
  width: 100%;
  display: inline-block;
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

select:focus {
  border: 1px solid #a842a7;
  background-color: #eee;
}

.invalid select {
  border: 1px solid red;
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

