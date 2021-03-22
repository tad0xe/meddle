<template>
  <div>
    <div class="body">
      <div class="container">
        <div class="container-header">{{$t('myOrders.title')}}</div>
        <div class="container-sub-header">
          <span>{{$t('generic.page')}}</span>
          <i class="fas fa-angle-left" :class="{disable:pageNumber < 2}" @click="pageNumber--"></i>
          <span>{{pageNumber}}</span>
          <i
            class="fas fa-angle-right"
            :class="{disable:pageNumber >= numberOfPages}"
            @click="pageNumber++"
          ></i>&nbsp;
          <span>{{$t('generic.of')}}</span>&nbsp;
          <span>{{numberOfPages}}&nbsp;{{$t('generic.pages')}}</span>
          &nbsp;|&nbsp;{{$t('generic.view')}}
          &nbsp;
          <select
            class="default-input"
            @change="setLimit()"
          >
            <option>10</option>
            <option>20</option>
          </select>&nbsp;
          <span>{{$t('generic.perPage')}}</span>
          | {{$tc('myOrders.totalOrdersFound', matchCount, {count: matchCount})}}
        </div>
        <div class="container-content">
          <table>
            <tr>
              <th class="job-id">
                {{$t('generic.orderId')}}
                <div>
                  <input class="default-input" @keyup.enter="onFilterByOrderId()" />
                </div>
              </th>
              <th class="status">
                {{$t('generic.status')}}
                <div>
                  <select class="default-input" @change="onGetOrders()" v-model="orderStatus">
                    <option></option>
                    <option value="Pending">{{$t('generic.pending')}}</option>
                    <option value="Processing">{{$t('generic.processing')}}</option>
                    <option value="Canceled">{{$t('generic.canceled')}}</option>
                    <option value="Completed">{{$t('generic.completed')}}</option>
                  </select>
                </div>
              </th>
              <th class="inspection">
                {{$t('generic.inspection')}}
                <div>
                  <select class="default-input" @change="onGetOrders()" v-model="inspectionType">
                    <option></option>
                    <option value="vehicle">{{$t('generic.vehicle')}}</option>
                    <option value="home">{{$t('generic.home')}}</option>
                  </select>
                </div>
              </th>
              <th @click="onSortByCreatedDate()">
                {{$t('generic.dateCreated')}}
                <i
                  class="fas fa-angle-down"
                  v-if="sortByCreatedAt == 1"
                ></i>
                <i class="fas fa-angle-up" v-if="sortByCreatedAt == -1"></i>
              </th>
              <th>{{$t('generic.description')}}</th>
              <th>{{$t('generic.location')}}</th>
              <th>{{$t('generic.inspectionDate')}}</th>
              <th></th>
            </tr>
            <tr @click="navigateToOrderDetails(order)" v-for="order in allOrders" :key="order._id">
              <td>{{order.sequenceId}}</td>
              <td>{{translateValue(order.orderStatus, $t('dbDictionary.orderStatus')) | toCapitalizeFirstLetter}}</td>
              <td>{{translateValue(order.quotation.typeOfInspection, $t("dbDictionary.typeOfInspection")) }}</td>
              <td>{{order.createdAt | formatDate}}</td>
              <td>
                <div v-if="order.inspectionType == 'vehicle'">
                  {{order.quotation.inspectedItemInfo.vehicleBrand}} {{order.quotation.inspectedItemInfo.vehicleModel}}
                  {{order.quotation.inspectedItemInfo.vehicleYear | showOnlyYear}} {{order.inspectedItemInfo.vehicleInfo.VIN}}
                </div>
                <div v-if="order.inspectionType == 'home'">
                  {{translateValue(order.quotation.inspectedItemInfo.typeOfHome, $t('homeInspection.form.typeOfHomeOptions'))}}
                  {{$tc(
                  'generic.withNoOfRooms',
                  order.quotation.inspectedItemInfo.numberOfRooms,
                  {count: order.quotation.inspectedItemInfo.numberOfRooms}
                  )}}
                </div>
              </td>
              <td>
                <div
                  v-if="order.inspectionType == 'vehicle'"
                >{{order.inspectedItemInfo.vehicleLocation}}, {{order.quotation.city}}</div>
                <div
                  v-if="order.inspectionType == 'home'"
                >{{order.inspectedItemInfo.homeLocation}}, {{order.quotation.city}}</div>
              </td>
              <td>{{order.quotation.inspectionDateTime | formatDate}}</td>
              <td class="seecandidates">
                <div class="see-candidates">
                  <span>{{$t('buttons.details')}}</span>
                </div>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Datepicker from "vue2-datepicker";
import axios from "axios";
import { translateValue } from "../../../utility";

export default {
  components: {
    Datepicker
  },
  data() {
    return {
      allOrders: [],
      activeOrder: "",
      pageNumber: 1,
      limit: 10,
      skip: 0,
      orderStatus: "",
      inspectionType: "",
      sortByCreatedAt: -1,
      matchCount: "",
      filteredOrderId: "",
      translateValue
    };
  },

  watch: {
    pageNumber() {
      this.skip = (this.pageNumber - 1) * this.limit;
      this.onGetOrders();
    }
  },

  computed: {
    numberOfPages() {
      return Math.ceil(this.matchCount / this.limit);
    }
  },

  methods: {
    onFilterByOrderId() {
      this.pageNumber = 1;
      //  this.filteredOrderId = event.target.value;
      const sequenceId = event.target.value;
      const filteredOrderIdArray = [];
      this.allOrders.forEach(item => {
        if (item.sequenceId == sequenceId) {
          filteredOrderIdArray.push(item._id);
        }
      });
      if (filteredOrderIdArray.length) {
        this.filteredOrderId = filteredOrderIdArray[0];
        if (this.filteredOrderId) {
          this.onGetOrders();
        }
      } else {
        this.filteredOrderId = "";
        this.onGetOrders();
      }
    },
    setLimit() {
      this.limit = event.target.value;
      this.onGetOrders();
    },

    onSortByCreatedDate() {
      this.sortByCreatedAt = -this.sortByCreatedAt;
      this.onGetOrders();
    },

    onGetOrders() {
      axios
        .get(
          `/orders/my_orders/?sortByCreatedAt=${this.sortByCreatedAt}&skip=${this.skip}&limit=${this.limit}
          &orderStatus=${this.orderStatus}&inspectionType=${this.inspectionType}&orderId=${this.filteredOrderId}`
        )
        .then(res => {
          this.allOrders = res.data.orders;
          this.matchCount = res.data.matchCount;
        })
        .catch(error => console.log(error.response));
    },

    navigateToOrderDetails(order) {
      this.$router.push(
        `/${this.$i18n.locale}/account/display-order-details/${order._id}`
      );
    }
  },
  created() {
    this.onGetOrders();
  }
};
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
}

.body {
  font-family: sans-serif;
}

.container {
  padding: 50px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.02);
  display: inline-block;
}

.container-header {
  width: 100%;
  padding-left: 22px;
  height: 70px;
  font-size: 20px;
  font-weight: bold;
  color: $dark-blue;
  background-color: white;
  border: 1.6px solid #ddd;
  align-items: center;
  display: flex;
}

.container-sub-header {
  font-size: 12px;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 2px;
  padding-right: 2px;
  border-left: 1.6px solid #ddd;
  border-right: 1.6px solid #ddd;
}

.container-content {
  overflow-x: auto;
  width: 100%;
  font-size: 12px;
  display: inline-block;
}

table {
  font-size: 12px;
  width: 100%;
  text-align: left;
  border: 2px solid #ddd;
  border-collapse: collapse;
}

th {
  padding: 12px 10px;
  border: 1px solid #ddd;
  background-color: azure;
  border-collapse: collapse;
}

td {
  padding: 18px 10px;
  border: 1px solid #ddd;
  border-collapse: collapse;
}

.seecandidates {
  padding: 0px 10px;
}

input,
select {
  font-size: 12px;
  outline: none;
  border: 1px solid #ddd;
  width: 100%;
}

.container-sub-header select {
  width: 48px;
}

.job-id {
  width: 80px;
}

.status,
.inspection {
  width: 110px;
  min-width: 105px;
}

.inspection {
  min-width: 85px;
}

tr {
  cursor: pointer;
}

tr:nth-child(even) {
  /* background-color: #eee; */
  background-color: #f2f2f2;
}

tr:nth-child(odd) {
  background-color: #fff;
}

tr:hover {
  background-color: #fcf5dd;
}

.see-candidates {
  font-size: 11px;
  width: 98px;
  height: 32px;
  color: white;
  cursor: pointer;
  border: 2px solid #ed6502;
  background-color: #ed6502;
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
  color: #ed6502;
  background-color: white;
}

.disable {
  pointer-events: none;
}

@media only screen and (max-width: 940px) {
  .container {
    padding: 20px 5px;
  }

  .container-header {
    font-size: 19px;
  }

  .container-content {
    font-size: 11px;
  }

  @media only screen and (max-width: 600px) {
    .container {
      padding-top: 10px;
    }
  }
}
</style>
