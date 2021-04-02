<template>
  <div>
    <div class="container">
      <div class="tabcontent">
        <div class="inline-input">
          <Datepicker
            class="datepicker"
            lang="en"
            type="date"
            format="YYYY MM DD"
            placeholder="Select Start Date"
            :disabled-date="(date)=>date > Date.now()"
          ></Datepicker>
          <Datepicker
            class="datepicker"
            lang="en"
            type="date"
            format="YYYY MM DD"
            placeholder="Select End Date"
            :disabled-date="(date)=>date > Date.now()"
          ></Datepicker>

          <div class="float-right">
            <label class="select-status">
              Select Status
              <br />
            </label>
            <select>
              <option value="pending">Pending</option>
              <option value="processing">Processing</option>
              <option value="canceled">Canceled</option>
              <option value="completed">Completed</option>
            </select>
          </div>
        </div>
        <table>
          <tr>
            <th>Order ID</th>
            <th>Status</th>
            <th>Category</th>
            <th>Date Created</th>
            <th>Description</th>
            <th>Vehicle Location</th>
            <th>Inspection Date</th>
            <th>Candidates</th>
          </tr>
          <tr>
            <!-- <tr v-for="order in allMyOrders" :key="order._id"> -->
            <td>
              <!-- {{order._id}} -->
            </td>
            <td>
              <!-- {{order.orderStatus | toCapitalizeFirstLetter}} -->
            </td>
            <td>
              <!-- {{order.quotation.typeOfInspection | toCapitalizeFirstLetter}} -->
            </td>
            <td>
              <!-- {{order.createdAt | formatDate}} -->
            </td>
            <td>
              <!-- {{order.quotation.vehicleBrand}} {{order.quotation.vehicleModel}}
              {{order.quotation.vehicleYear | showOnlyYear}}, {{order.vehicleInfo.VIN}}-->
            </td>
            <td> 
              <!-- {{order.vehicleLocation}}, {{order.quotation.city}} -->
            </td>
            <td>
              <!-- {{order.quotation.inspectionDateTime | formatDate}} -->
            </td>
            <td class="td">
              <div class="see-candidates" @click="navigateToOrderDetails(order)">
                <span>see&nbsp;candidates</span>
              </div>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations, mapGetters } from "vuex";
import Datepicker from "vue2-datepicker";
export default {
  components: {
    Datepicker
  },
  data() {
    return {
      allOrders: [],
      activeOrder: "",
      id: ""
    };
  },
  methods: {
    navigateToOrderDetails(order) {
      this.allOrders = this.orders;
      console.log(this.allOrders);
      this.activeOrder = order;
      console.log(order);
      this.id = order._id;
      console.log(order._id);
      this.$store.commit("orders/storeOpenedOrder", order);
      this.$store.commit("orders/storeOpenedOrderId", this.id);
      localStorage.setItem("openedOrderId", this.id);
      this.$router.push("/account/orders/:id/order-details");

      //   this.$router.push("/account/orders/:id/order-details")
      //     props: this.$route.params.id
    },

    ...mapMutations(["orders/storeOpenedOrder"])
  },
  watch: {
    $route(to, from) {
      this.id = to.params.id;
    }
  },
  computed: {
    ...mapGetters("orders", ["allMyOrders"])
  },
  created() {
    this.$store.dispatch("orders/fetchAllVehicleInspectionOrders");
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.container {
  background-color: white;
  font-family: sans-serif, Arial, Helvetica;
  padding: 50px 10px;
  display: block;
}

.tabcontent {
  display: block;
}

.inline-input {
  margin-bottom: 5px;
}

table {
  font-size: 12px;
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  border: 2px solid #ddd;
}

td {
  border-bottom: 1px solid #ddd;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 20px;
  padding-top: 20px;
}

.td {
  padding: 0px 10px;
}

th {
  background-color: azure;
  border-collapse: collapse;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 20px;
  padding-top: 20px;
  border-bottom: 1px solid #ddd;
}

.see-candidates {
  font-size: 11px;
  width: 98px;
  height: 32px;
  color: white;
  cursor: pointer;
  border: 2px solid black;
  background-color: black;
  border-radius: 20px;
  position: relative;
}

.see-candidates span {
  top: 50%;
  left: 50%;
  text-align: center;
  transform: translate(-50%, -50%);
  position: absolute;
}

.see-candidates:hover {
  font-weight: bold;
  color: black;
  background-color: white;
}

.datepicker {
  margin-top: 17px;
  width: 280px;
  padding-right: 10px;
}
.float-right {
  margin-top: 5px;
  float: right;
}
.select-status {
  font-size: 13px;
}

.datepicker /deep/ input {
  width: 100%;
  font-size: 13px;
  padding: 8px;
  color: black;
  height: 34px;
  border: 1px solid #ccc;
  border-radius: 3px;
  background-clip: padding-box;
  outline: none;
  box-shadow: none;
  background-color: rgb(232, 240, 254);
  display: block;
}

select {
  width: 100%;
  font-size: 13px;
  padding: 5px 4px;
  margin-bottom: 0px;
  border: 1px solid #ccc;
  border-radius: 3px;
  outline: none;
  background-color: rgb(232, 240, 254);
}

select:focus,
.datepicker /deep/ input:focus {
  outline: none;
  border: 1px solid #a842a7;
  background-color: #eee;
}
</style>
