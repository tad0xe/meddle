<template>
  <div>
    <div class="container">
      <div class="error" v-if="error">{{error}}</div>
      <div class="container-header">Personal Information</div>
      <table>
        <tr>
          <td>
            <strong>First Name:</strong> 
          </td>
          <td>{{personalInfo.firstName}}</td>
        </tr>
        <tr>
          <td>
            <strong>Last Name:</strong>
          </td>
          <td>{{personalInfo.lastName}}</td>
        </tr>
        <tr>
          <td>
            <strong>I am registered as:</strong>
          </td>
          <td>{{personalInfo.iAm}}</td>
        </tr>
        <tr>
          <td>
            <strong>Name of Company:</strong>
          </td>
          <td>{{personalInfo.nameOfCompany}}</td>
        </tr>
        <tr>
          <td>
            <strong>Company Registration Number:</strong>
          </td>
          <td>{{personalInfo.companyRegNum}}</td>
        </tr>
        <tr>
          <td>
            <strong>Address:</strong>
          </td>
          <td>{{personalInfo.addressLine1}} {{personalInfo.addressLine2}}</td>
        </tr>
        <tr>
          <td>
            <strong>Zip Code:</strong>
          </td>
          <td>{{personalInfo.zipCode}}</td>
        </tr>
        <tr>
          <td>
            <strong>City:</strong>
          </td>
          <td>{{personalInfo.city}}</td>
        </tr>
        <tr>
          <td>
            <strong>State:</strong>
          </td>
          <td>{{personalInfo.state}}</td>
        </tr>
        <tr>
          <td>
            <strong>Country:</strong>
          </td>
          <td>{{personalInfo.country}}</td>
        </tr>
        <tr>
          <td>
            <strong>Work Area:</strong>
          </td>
          <td>{{personalInfo.workArea}}</td>
        </tr>
        <tr>
          <td>
            <strong>Mobile Phone Number 1:</strong>
          </td>
          <td>{{personalInfo.mobileNum1}}</td>
        </tr>
        <tr>
          <td>
            <strong>Mobile Phone Number 2:</strong>
          </td>
          <td>{{personalInfo.mobileNum2}}</td>
        </tr>
        <tr>
          <td>
            <strong>Eligible to Work in Country of Residence:</strong>
          </td>
          <td>{{personalInfo.isEligibleToWork}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { mapState, mapActions, mapMutations, mapGetters } from "vuex";

export default {
  components: {},

  data() {
    return {
      personalInfo: "",
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
        this.personalInfo = res.data.personalInfo;
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
  display: inline-block;
}

.container-header {
  padding-top: 5px;
  padding-bottom: 10px;
  font-size: 22px;
  font-weight: bold;
  color: darkblue;
}

table {
  width: 100%;
  text-align: left;
}

td {
  padding-top: 10px;
  padding-bottom: 10px;
}

.error {
  padding-top: 5px;
  padding-bottom: 5px;
  font-size: 14px;
  color: red;
}
</style>
