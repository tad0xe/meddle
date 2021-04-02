<template>
  <div>
    <div class="container">
      <table>
        <tr>
          <th>Country</th>
          <th>States</th>
        </tr>
        <tr v-for="(countryObj, index) in countries" :key="index">
          <td>{{countryObj.country}}</td>
          <td v-for="(stateObj, index) in countryObj.states" :key="index">{{stateObj.cities}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapState, mapActions, mapMutations, mapGetters } from "vuex";
export default {
  data() {
    return {
      countries: []
    };
  },
  methods: {
    ...mapMutations("adminStore", ["clearErrorMessage"]),
    ...mapMutations("adminStore", ["clearOkMessage"]),
    ...mapMutations("adminStore", ["storeErrorMessage"]),
    ...mapMutations("adminStore", ["storeOkMessage"])
  },

  computed: {
    ...mapGetters("adminStore", ["error"]),
    ...mapGetters("adminStore", ["okMessage"])
  },
  created() {
    axios
      .get("/Countries_present_info/all")
      .then(res => {
        console.log(res.data);
        this.countries = res.data;
      })
      .catch(error => {
        console.log(error.response);
      });
  },
  //Always user ES5 and not ES6 arrow function
  beforeRouteLeave: function(to, from, next) {
    console.log(this);
    this.clearErrorMessage();
    this.clearOkMessage();
    next();
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.container {
  font-family: sans-serif, Arial, Helvetica;
  font-size: 15px;
  padding: 40px 10px;
  width: 100%;
  display: inline-table;
}

table {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  border: 2px solid #ddd;
}

th {
  color: white;
  background-color: #343a40;
  border-collapse: collapse;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 20px;
  padding-top: 20px;
  border: 2px solid #343a40;
}

td {
  background-color: azure;
  border-bottom: 1px solid #ddd;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 20px;
  padding-top: 20px;
}
</style>