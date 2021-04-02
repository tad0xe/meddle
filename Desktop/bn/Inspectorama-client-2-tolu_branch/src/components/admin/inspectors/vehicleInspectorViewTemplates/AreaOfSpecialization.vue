<template>
  <div>
    <div class="container">
      <div class="error" v-if="error">{{error}}</div>
      <div class="container-header">Area of Vehicle Specialization</div>
      <div class="spacing">
        <strong>Total years of experience:</strong>
        {{areaOfSpecialization.totalYearsOfExp}}
      </div>
      <br />
      <div>
        <strong>Vehicle Specialization</strong>
        <table>
          <tr>
            <th>S/N</th>
            <th>Type</th>
            <th>Years of experience</th>
          </tr>
          <tr
            v-for="(specialization, index) in areaOfSpecialization.vehicleSpecializations"
            :key="index"
          >
            <td>{{index+1}}</td>
            <td>{{specialization.vehicleType}}</td>
            <td>{{specialization.yearsOfVehicleExp}}</td>
          </tr>
        </table>
      </div>
      <div>
        <br />
        <strong>Brand Specialization</strong>
        <table>
          <tr>
            <th>S/N</th>
            <th>Type</th>
            <th>Years of experience</th>
          </tr>
          <tr
            v-for="(specialization, index) in areaOfSpecialization.brandSpecializations"
            :key="index"
          >
            <td>{{index+1}}</td>
            <td>{{specialization.brandType}}</td>
            <td>{{specialization.yearsOfBrandExp}}</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import globalAxios from "axios";
import { mapState, mapActions, mapMutations, mapGetters } from "vuex";

export default {
  components: {},

  data() {
    return {
      areaOfSpecialization: "",
      error: ""
    };
  },
  methods: {},
  computed: {},
  created() {
    const inspectorId = localStorage.getItem("openedInspectorId");
    axios
      .get(`/inspector_users_admin/${inspectorId}`)
      .then(res => {
        console.log(res);
        this.areaOfSpecialization = res.data.areaOfSpecialization;
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.container {
  font-family: sans-serif, Arial, Helvetica;
  background-color: white;
  width: 100%;
  display: inline-block;
}

.container-header {
  padding-top: 5px;
  padding-bottom: 10px;
  font-size: 22px;
  font-weight: bold;
  color: darkblue;
}

.spacing {
  padding-top: 8px;
  padding-bottom: 5px;
}

table {
  text-align: left;
  border: 1px solid #ddd;
  border-collapse: collapse;
  width: 50%;
}

th {
  color: white;
  padding: 10px;
  background-color: grey;
  border-top: 1px solid grey;
  border-left: 1px solid grey;
  border-right: 1px solid grey;
  border-collapse: collapse;
}

td {
  padding: 10px;
  background-color: azure;
  border-bottom: 1px solid #ddd;
  border-collapse: collapse;
}

.error {
  padding-top: 5px;
  padding-bottom: 5px;
  font-size: 14px;
  color: red;
}
</style>
