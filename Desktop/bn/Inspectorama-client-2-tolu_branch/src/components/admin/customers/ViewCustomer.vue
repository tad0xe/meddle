<template>
  <div>
    <div class="body">
      <div class="container">
        <div class="error" v-if="error">{{error}}</div>
        <div class="container-body">
          <div class="container-body-left">
            <div class="category-tab" :class="{active: false}">Customer View</div>
            <div class="category-tab" :class="{active: false}">Orders</div>
            <div class="category-tab" :class="{active: false}">Store Credit</div>
            <div class="category-tab" :class="{active: true}">Account Information</div>
          </div>
          <div class="container-body-right">
            <div class="container-body-header">Personal Information</div>
            <hr />
            <div class="container-body-content">
              <div class="column">
                <strong>First Name:</strong>
                <!-- {{customerInfo.firstName}} -->
              </div>
              <div class="column">
                <strong>Last Name:</strong>
                <!-- {{customerInfo.lastName}} -->
              </div>
              <div class="column">
                <strong>Address:</strong>
                <!-- {{customerInfo.contactInfo.addressLine1}}
          {{customerInfo.contactInfo.addressLine2}}
          {{customerInfo.contactInfo.state}}
          {{customerInfo.contactInfo.zipCode}}
                {{customerInfo.contactInfo.country}}-->
              </div>
              <div class="column">
                <strong>Mobile Number:</strong>
                <!-- {{customerInfo.contactInfo.mobileNum1}} -->
              </div>
              <div class="column">
                <strong>Email:</strong>
                <!-- {{customerInfo.email}} -->
              </div>
              <div class="column">
                <strong>Inspector?:</strong>
                <!-- {{customerInfo.pro.isInspector}} -->
              </div>
              <div class="column">
                <strong>Account Created on:</strong>
                {{customerInfo.createdAt| formatDate}}
              </div>
              <div class="column">
                <strong>Last Updated:</strong>
                {{customerInfo.updatedAt| formatDate}}
              </div>
            </div>
            <hr />
            <div class="float-right">
              <button class="editcustomer-btn" @click.prevent="navigateToEditCustomer()">
                <i class="fa fa-check-circle"></i>
                <span>&nbsp;Edit Customer</span>
              </button>
              <button class="deletecustomer-btn" @click.prevent="toDeleteCustomer()">
                <i class="fa fa-close"></i>
                <span>&nbsp;Delete Customer</span>
              </button>
            </div>
          </div>
        </div>
        <DeleteCustomerModal
          v-show="deleteCustomerIsVisible"
          :customerId="customerId"
          @close="deleteCustomerIsVisible = false"
        ></DeleteCustomerModal>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import DeleteCustomerModal from "../adminModals/DeleteCustomerModal.vue";
import { mapState, mapActions, mapMutations, mapGetters } from "vuex";
export default {
  components: {
    DeleteCustomerModal
  },
  data() {
    return {
      customerId: "",
      customerInfo: "",
      deleteCustomerIsVisible: false
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
    const id = localStorage.getItem("openedCustomerId");
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

<style scoped>
* {
  box-sizing: border-box;
}

.body {
  font-family: sans-serif, Arial, Helvetica;
  background-color: lightcyan;
  width: 100%;
  padding: 50px;
  display: inline-table;
}

.container {
  padding: 30px;
  border-radius: 8px;
  border: 1px solid #b6b1b1;
  background-color: white;
  display: inline-block;
}

.container-body {
  display: flex;
}

.container-body-left {
  border: 1px solid #ddd;
  min-width: 300px;
}
.container-body-right {
  padding-left: 30px;
  padding-right: 30px;
  border: 1px solid #ddd;
  border-left: none;
  min-width: 780px;
}

.container-body-header {
  padding-top: 20px;
  padding-bottom: 20px;
  font-size: 24px;
  font-weight: bold;
  color: darkblue;
}

.container-body-content {
  padding-top: 10px;
  padding-bottom: 10px;
}

hr {
  margin-left: -10px;
  margin-right: -10px;
}

.category-tab {
  padding: 15px 20px;
  font-size: 17px;
  border-bottom: 1px solid #b6b1b1;
}

.category-tab:hover {
  background-color: #dddd;
}

.active,
.active:hover {
  font-weight: bold;
  background-color: lightblue;
}

.column {
  padding-top: 12px;
  padding-bottom: 12px;
}

.error {
  padding-top: 10px;
  padding-bottom: 20px;
  font-size: 14px;
  color: red;
}

.float-right {
  float: right;
}

.deletecustomer-btn,
.editcustomer-btn {
  font-size: 17px;
  font-weight: bold;
  padding: 7px 13px;
  margin-top: 30px;
  margin-bottom: 30px;
  background-color: #ea7601;
  color: white;
  cursor: pointer;
  outline: none;
  border-radius: 5px;
  border: solid;
  border-color: #ed6502 #a04300 #a04300 #ed6502;
  opacity: 0.9;
}

.editcustomer-btn {
  margin-right: 20px;
}

.deletecustomer-btn:hover,
.editcustomer-btn:hover {
  opacity: 1;
}

.deletecustomer-btn:active,
.editcustomer-btn:active {
  opacity: 0.95;
  border-color: #a04300 #ed6502 #ed6502 #a04300;
}
</style>