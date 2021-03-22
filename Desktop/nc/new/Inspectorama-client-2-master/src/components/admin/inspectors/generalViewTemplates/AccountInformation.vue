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
          <td>{{customerInfo.firstName}}</td>
        </tr>
        <tr>
          <td>
            <strong>Last Name:</strong>
          </td>
          <td>{{customerInfo.lastName}}</td>
        </tr>
        <tr>
          <td>
            <strong>Address:</strong>
          </td>
          <td>
            {{customerInfo.contactInfo.addressLine1}}
            {{customerInfo.contactInfo.addressLine2}}
            {{customerInfo.contactInfo.state}}
            {{customerInfo.contactInfo.zipCode}}
            {{customerInfo.contactInfo.country}}
          </td>
        </tr>
        <tr>
          <td>
            <strong>Mobile Number:</strong>
          </td>
          <td>{{customerInfo.contactInfo.mobileNum1}}</td>
        </tr>
        <tr>
          <td>
            <strong>Email:</strong>
          </td>
          <td>{{customerInfo.email}}</td>
        </tr>
        <tr>
          <td>
            <strong>Inspector?:</strong>
          </td>
          <td>{{customerInfo.pro.isInspector}}</td>
        </tr>
        <tr>
          <td>
            <strong>Account Created on:</strong>
          </td>
          <td>{{customerInfo.createdAt| formatDate}}</td>
        </tr>
        <tr>
          <td>
            <strong>Last Updated:</strong>
          </td>
          <td>{{customerInfo.updatedAt| formatDate}}</td>
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
      customerId: "",
      customerInfo: ""
    };
  },
  methods: {
    navigateToEditCustomer() {
      localStorage.setItem("openedCustomerId", this.customerId);
      this.$router.push(`/edit-customer/${this.customerId}`);
    },
    toDeleteCustomer() {
      this.deleteCustomerIsVisible = true;
    },
    ...mapMutations("adminStore", ["clearErrorMessage"]),
    ...mapMutations("adminStore", ["clearOkMessage"])
  },

  computed: {
    ...mapGetters("adminStore", ["error"])
  },

  created() {
    const id = localStorage.getItem("openedInspectorId");
    axios
      .get(`/customer_users/${id}`)
      .then(res => {
        console.log(res);
        this.customerInfo = res.data;
        this.customerId = res.data._id;
      })
      .catch(error => {
        console.log(error);
        this.storeErrorMessage(error.response.data);
      });
  }
};
</script>

<style scoped >
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