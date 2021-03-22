<template>
  <div>
    <div class="container">
      <div>
        <div v-if="error" class="error">{{error}}</div>
        <div v-if="okMessage" class="okMessage">{{okMessage}}</div>
      </div>
      <table>
        <tr>
          <th>Customer&nbsp;ID</th>
          <th>First&nbsp;Name</th>
          <th>Last&nbsp;Name</th>
          <th>Email</th>
          <th>Is&nbsp;Inspector?</th>
          <th>Telephone</th>
          <th>Zip</th>
          <th>Country</th>
          <th>State/Province</th>
          <th>Created</th>
        </tr>
        <tr
          v-for="customer in customers"
          :key="customer._id"
          @click.prevent="onClickCustomer(customer)"
        >
          <td>
            <strong>{{customer._id}}</strong>
          </td>
          <td>{{customer.firstName}}</td>
          <td>{{customer.lastName}}</td>
          <td>{{customer.email}}</td>
          <td>{{customer.pro.isInspector}}</td>
          <td>{{customer.contactInfo.mobileNum1}}</td>
          <td>{{customer.contactInfo.zipCode}}</td>
          <td>{{customer.contactInfo.country}}</td>
          <td>{{customer.contactInfo.state}}</td>
          <td>{{customer.createdAt | formatDate}}</td>
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
      customers: "",
      id: ""
    };
  },
  methods: {
    onClickCustomer(customer) {
      localStorage.setItem("openedCustomerId", customer._id);
      this.id = customer._id;
      this.$router.push(`/view-customer/${customer._id}`);
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
      .get("/customer_users")
      .then(res => {
        console.log(res);
        this.customers = res.data;
      })
      .catch(error => {
        console.log(error);
        this.storeErrorMessage(error.response.data);
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
  padding: 50px 10px;
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

label {
  font-size: 16px;
  color: darkblue;
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