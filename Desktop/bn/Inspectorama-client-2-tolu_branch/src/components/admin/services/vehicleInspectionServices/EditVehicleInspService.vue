<template>
  <div>
    <div class="body">
      <div class="container">
        <div class="container-header">Edit Vehicle Inspection Service In {{city}}</div>
        <form @submit.prevent="onSubmit()">
          <tr :class="{invalid: $v.country.$error}">
            <td>
              <label>Country</label>
            </td>
            <td class="input-text">
              <div v-if="displayNoCoverage" style="color: red">{{noCoverageMessage}}</div>
              <select v-model="country" required>
                <option value selected disabled hidden>Select Country</option>
                <option v-for="country in countries" :key="country">{{country}}</option>
              </select>
              <span v-if="!$v.country.required && $v.country.$error">Country is required.</span>
            </td>
          </tr>
          <tr :class="{invalid: $v.city.$error}">
            <td>
              <label>City</label>
            </td>
            <td class="input-text">
              <select v-model="city" required>
                <option value selected disabled hidden>Select City</option>
                <option
                  v-for="city in availableCities"
                  :key="city"
                >{{city | toCapitalizeFirstLetter}}</option>
              </select>
              <span v-if="!$v.city.required && $v.city.$error">City is required.</span>
            </td>
          </tr>
          <tr :class="{invalid: $v.price.$error}">
            <td>
              <label>Price</label>
            </td>
            <td class="input-text">
              <input type="number" class="form-control" placeholder="Price" v-model="price" />
              <span v-if="!$v.price.required && $v.price.$error">Price is required.</span>
            </td>
          </tr>
          <tr :class="{invalid: $v.currency.$error}">
            <td>
              <label>Currency</label>
            </td>
            <td class="input-text">
              <select v-model="currency" required>
                <option value selected disabled hidden>Select Currency</option>
                <option>USD</option>
                <option>GBP</option>
              </select>
              <span v-if="!$v.currency.required && $v.currency.$error">Currency is required.</span>
            </td>
          </tr>
          <tr :class="{invalid: $v.status.$error}">
            <td>
              <label>Status</label>
            </td>
            <td class="small-input-text">
              <select v-model="status" required>
                <option value selected disabled hidden>Select Status</option>
                <option>active</option>
                <option>inactive</option>
              </select>
              <span v-if="!$v.status.required && $v.status.$error">Status is required.</span>
            </td>
          </tr>
          <tr>
            <td>
              <label></label>
            </td>
            <td class="input-text">
              <button type="submit" @click.prevent="onSubmit()" class="submit-btn">Submit</button>
            </td>
          </tr>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";
import countriesLists from "../../../../mockData/countriesList";
export default {
  data() {
    return {
      typeOfInspection: "vehicle",
      name: "Vehicle Inspection Service",
      country: "",
      city: "",
      price: "",
      currency: "",
      status: "",
      countries: [],
      cities: [],
      displayNoCoverage: false,
      noCoverageMessage: "No service yet!"
    };
  },
  validations: {
    country: {
      required
    },
    city: {
      required
    },
    price: {
      required
    },
    currency: {
      required
    },
    status: {
      required
    },
    countries: {
      required
    },
    cities: {
      required
    }
  },
  methods: {
    onSubmit() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }
    }
  },
  computed: {
    availableCities() {
      this.displayNoCoverage = false;
      if (this.country == "United States") {
        this.cities = ["new york", "denver", "los angeles", "miami"];
        return this.cities;
      } else if (this.country == "Canada") {
        this.cities = ["toronto", "vancouver", "quebec"];
        return this.cities;
      } else if (this.country == "United Kingdom") {
        this.cities = ["london", "manchester", "sheffield", "aberdeen"];
        return this.cities;
      } else if (this.country == "Germany") {
        this.cities = ["berlin", "munich", "frankfurt"];
        return this.cities;
      } else if (this.country == "France") {
        this.cities = ["paris", "bordeaux"];
        return this.cities;
      } else if (this.country == "Norway") {
        this.cities = ["oslo", "kongsberg", "stavanger", "trondheim"];
        return this.cities;
      }
      // else {
      //   this.displayNoCoverage = true
      // }
    }
  },
  created() {
    this.countries = countriesLists;
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
  width: 100%;
  padding: 50px;
  justify-content: center;
  display: flex;
}

.container {
  padding: 20px 30px;
  border-radius: 10px;
  box-shadow: 2px 2px 20px 1px;
  border: 1px solid #ddd;
  background-color: white;
  width: 480px;
  display: inline-table;
}

.container-header {
  font-size: 22px;
  padding-top: 5px;
  padding-bottom: 10px;
  font-weight: bold;
  color: darkblue;
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
  padding-right: 20px;
  width: 380px;
}

.small-input-text {
  padding-left: 20px;
  width: 150px;
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

.submit-btn {
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

.submit-btn:hover {
  background-color: #07b9dd;
}
</style>