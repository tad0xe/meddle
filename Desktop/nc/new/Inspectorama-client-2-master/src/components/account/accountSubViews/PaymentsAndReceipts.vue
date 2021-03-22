<template>
  <div>
    <div style="position: relative">
      <div v-if="isPageLoading">
        <LoadingPage
          style="left:0; right:0; top:0; bottom:0; position:absolute;"
          :style="{height: containerLeftHeight + 'px'}"
        ></LoadingPage>
      </div>
      <div v-if="!isPageLoading" class="container">
        <div class="container-header">{{$t('paymentsAndReceipts.title')}}</div>
        <div class="container-content">
          <div>
            <h3>{{$t('paymentsAndReceipts.paymentHistory.title')}}</h3>
            <div style="overflow-x:auto;" v-if="paymentHistory.length">
              <table>
                <tr>
                  <th>{{$t('paymentsAndReceipts.paymentHistory.paymentDate')}}</th>
                  <th>{{$t('paymentsAndReceipts.paymentHistory.orderDate')}}</th>
                  <th>{{$t('paymentsAndReceipts.paymentHistory.amount')}}</th>
                  <th></th>
                </tr>
                <tr v-for="(history, index) in paymentHistory" :key="index">
                  <td>{{history.createdAt | showOnlyDate}}</td>
                  <td>
                    <div v-if="history.quotation.typeOfInspection == 'Home'">
                      {{history.quotation.typeOfInspection}} {{$t('generic.inspection')}} - {{history.quotation.inspectedItemInfo.typeOfHome}}
                      {{$tc(
                      'generic.withNoOfRooms',
                      history.quotation.inspectedItemInfo.numberOfRooms,
                      {count: history.quotation.inspectedItemInfo.numberOfRooms}
                      )}}
                      <br />
                      - {{$t('generic.orderId')}}: {{history.sequenceId}}
                    </div>
                    <div v-if="history.quotation.typeOfInspection == 'Vehicle'">
                      {{history.quotation.typeOfInspection}} {{$t('generic.inspection')}} - {{history.quotation.inspectedItemInfo.vehicleBrand}}
                      {{history.quotation.inspectedItemInfo.vehicleModel}} {{history.quotation.inspectedItemInfo.vehicleYear | showOnlyYear}}
                      {{history.quotation.inspectedItemInfo.typeOfVehicle}}
                      <br />
                      - {{$t('generic.orderId')}}: {{history.sequenceId}}
                    </div>
                  </td>
                  <td>{{history.quotation.price.value}} {{history.quotation.price.currency}}</td>
                  <td>
                    <u class="link1" @click="showInvoiceModal(history)">{{$t('paymentsAndReceipts.paymentHistory.viewInvoice')}}</u>
                  </td>
                </tr>
              </table>
              <div class="load-more" style="position: relative" v-if="hideShowMore">
                <span v-if="!isPaymentHistoryLoading" @click="onClickShowMore()">{{$t('buttons.showMore')}}</span>
                <div v-if="isPaymentHistoryLoading">
                  <LoadingPage
                    style="left:0; right:0; top:0; bottom:0; position:absolute;"
                    :width="20"
                    :height="20"
                    :borderWidth="2"
                    :background="'none'"
                  ></LoadingPage>
                </div>
              </div>
            </div>
            <div v-if="!paymentHistory.length">
              <p>{{$t('paymentsAndReceipts.paymentHistory.noPaymentHistory')}}</p>
            </div>
          </div>
          <br />
          <!-- <div>
            <h3>Billing</h3>
            <table>
              <tr>
                <td>Payment Method</td>
                <td>Visa ending in 9245 Expires 9/2020</td>
                <td>
                  <u class="link2">Edit</u>
                </td>
              </tr>
              <tr>
                <td>Billing Address</td>
                <td>James Mattis Boulevard Avenue, 35, PA, Pittsburg, 7466477, US</td>
                <td>
                  <u class="link2">Edit</u>
                </td>
              </tr>
            </table>
          </div>
          <br />-->
        </div>
        <div>
          <InvoiceModal
            v-if="isInvoiceModalVisible"
            @close="hideInvoiceModal()"
            :selectedHistory="selectedHistory"
          ></InvoiceModal>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LoadingPage from "../../loadingComponents/LoadingPage";
import axios from "axios";
import InvoiceModal from "./InvoiceModal.vue";
export default {
  components: {
    LoadingPage,
    InvoiceModal
  },
  props: ["containerLeftHeight"],
  data() {
    return {
      isPageLoading: true,
      isPaymentHistoryLoading: true,
      hideShowMore: true,
      paymentHistory: "",
      number: 10,
      billingInfo: "",
      isInvoiceModalVisible: false,
      selectedHistory: ""
    };
  },
  methods: {
    loadPaymentHistory() {
      axios
        .get(`/orders/me/paymentHistory/?num=${this.number}`)
        .then(res => {
          if (res.data) {
            this.paymentHistory = res.data;
            this.isPageLoading = false;
            this.isPaymentHistoryLoading = false;

            if (this.number > this.paymentHistory.length) {
              this.hideShowMore = false;
            }
          }
        })
        .catch(error => {
          console.log(error.response);
        });
    },
    showInvoiceModal(history) {
      this.isInvoiceModalVisible = true;
      this.selectedHistory = history;
    },
    hideInvoiceModal() {
      this.isInvoiceModalVisible = false;
    },

    onClickShowMore() {
      this.isPaymentHistoryLoading = true;
      this.number = this.number + 10;

      this.loadPaymentHistory();
    }
  },
  created() {
    this.loadPaymentHistory();
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.container {
  font-family: sans-serif, Arial, Helvetica;
  font-size: 14px;
  border-radius: 5px;
  width: 100%;
  border: 1px solid #b6b1b1;
  background-color: white;
  display: inline-block;
}

.container-header {
  font-size: 26px;
  font-weight: bold;
  padding: 20px 30px;
  color: #212259;
  border-bottom: 1px solid #ccc;
}

.container-header,
.container-content {
  padding: 20px 30px;
}

h3 {
  font-size: 18px;
  margin-top: 10px;
  margin-bottom: 10px;
}

table {
  width: 100%;
  text-align: left;
  border-collapse: collapse;
  border: 1px solid #ddd;
}

th {
  padding: 10px;
  border-left: 1px solid #ddd;
  border-right: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  border-collapse: collapse;
  background-color: #f2f2f2;
}

td {
  padding: 10px;
  border-left: 1px solid #ddd;
  border-right: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  background-color: #f1ffff;
}

.load-more {
  font-size: 13px;
  height: 30px;
  align-items: center;
  justify-content: center;
  display: flex;
}

.load-more span {
  color: #212259;
  font-weight: bold;
  cursor: pointer;
}

.load-more span:hover {
  color: #212259;
  text-decoration: underline;
}

.link1 {
  font-size: 13px;
  cursor: pointer;
  color: blue;
}

.link1:hover {
  color: #212259;
}

.link2 {
  font-size: 13px;
  cursor: pointer;
  color: darkgreen;
}

.link2:hover {
  color: darkred;
}

@media only screen and (max-width: 840px) {
  .container-header {
    font-size: 22px;
  }
  .container-header,
  .container-content {
    padding: 20px;
  }

  h3 {
    font-size: 17px;
  }

  @media only screen and (max-width: 540px) {
    .container {
      border-radius: 0px;
    }
    .container-header {
      padding: 20px 5px;
      font-size: 18px;
    }
    .container-content {
      padding: 20px 5px;
    }
  }
}
</style>