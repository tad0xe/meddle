<template>
  <div>
    <div class="container">
      <div class="error" v-if="error">{{error}}</div>
      <div class="container-header">Language Proficiency</div>
      <table>
        <tr>
          <th>S/N</th>
          <th>Language</th>
          <th>Proficiency</th>
        </tr>
        <tr v-for="(language, index) in languageProficiency" :key="index">
          <td>{{index+1}}</td>
          <td>{{language.language}}</td>
          <td>{{language.proficiency | toCapitalizeFirstLetter}}</td>
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
      languageProficiency: [],
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
        this.languageProficiency = res.data.languageProficiency;
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
