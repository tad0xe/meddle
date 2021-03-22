<template>
  <div>
    <div class="container">
      <div class="error" v-if="error">{{error}}</div>
      <div class="okMessage" v-if="okMessage">{{okMessage}}</div>
      <table>
        <tr>
          <th>Inspector ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Is Inspector?</th>
          <th>Telephone</th>
          <th>Zip</th>
          <th>Country</th>
          <th>State/Province</th>
          <th>Created</th>
        </tr>
        <tr
          v-for="inspector in inspectors"
          :key="inspector._id"
          @click.prevent="onClickInspector(inspector)"
        >
          <td>
            <strong>{{inspector._id}}</strong>
          </td>
          <td>{{inspector.firstName}}</td>
          <td>{{inspector.lastName}}</td>
          <td>{{inspector.email}}</td>
          <td>{{inspector.pro.isInspector}}</td>
          <td>{{inspector.contactInfo.mobileNum1}}</td>
          <td>{{inspector.contactInfo.zipCode}}</td>
          <td>{{inspector.contactInfo.country}}</td>
          <td>{{inspector.contactInfo.state}}</td>
          <td>{{inspector.createdAt | formatDate}}</td>
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
      inspectors: ""
    };
  },
  methods: {
    onClickInspector(inspector) {
      localStorage.setItem("openedInspectorId", inspector._id);
      this.$router.push(`/view-inspector/${inspector._id}`);
    },
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
      .get("/inspector_users_admin/all")
      .then(res => {
        this.inspectors = res.data;
      })
      .catch(error => {
        console.log(error);
        this.storeErrorMessage(error.response.data);
      });
  },
  //Always user ES5 and not ES6 arrow function
  beforeRouteLeave: function(to, from, next) {
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

.error,
.okMessage {
  padding-bottom: 20px;
  font-size: 14px;
}

.error {
  color: red;
}

.okMessage {
  color: green;
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
  border-collapse: collapse;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 20px;
  padding-top: 20px;
}
</style>