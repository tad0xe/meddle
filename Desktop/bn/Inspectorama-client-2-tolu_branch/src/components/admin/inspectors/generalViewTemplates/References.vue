<template>
  <div>
    <div class="container">
      <div class="error" v-if="error">{{error}}</div>
      <div class="container-header">References</div>
      <table>
        <tr>
          <th>S/N</th>
          <th>Frist Name</th>
          <th>Last Name</th>
          <th>Company Name</th>
          <th>Telephone</th>
          <th>Email</th>
          <th>Relationship</th>
        </tr>
        <tr v-for="(reference, index) in references" :key="index">
          <td>{{index+1}}</td>
          <td>{{reference.firstName}}</td>
          <td>{{reference.lastName}}</td>
          <td>{{reference.companyName}}</td>
          <td>{{reference.telephone}}</td>
          <td>{{reference.email}}</td>
          <td>{{reference.yourRelationship}}</td>
        </tr>
      </table>
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
      references: [],
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
        this.references = res.data.references;
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

table {
  text-align: left;
  font-size: 14px;
  border: 1px solid #ddd;
  border-collapse: collapse;
  width: 100%;
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
