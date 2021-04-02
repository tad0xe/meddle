<template>
  <div>
    <div class="container">
      <div class="sub-container">
        <div class="row">
          <table>
            <tr class="row-key-value">
              <td>{{$t('generic.orderId')}}:</td>
              <td>
                <strong>{{orderId}}</strong>
              </td>
            </tr>
            <tr class="row-key-value">
              <td>{{$t('generic.customerName')}}:</td>
              <td>
                <strong>{{customerName}}</strong>
              </td>
            </tr>
            <tr class="row-key-value">
              <td>{{$t('vehicleDescriptionReport.fullVIN')}}:</td>
              <td>
                <strong>{{vehicleDescription.fullVIN}}</strong>
              </td>
            </tr>
          </table>
        </div>
        <div class="row">
          <table>
            <tr class="row-key-value">
              <td>{{$t('vehicleDescriptionReport.mileage')}}:</td>
              <td>
                <strong>{{vehicleDescription.mileage.value}} {{vehicleDescription.mileage.unit}}</strong>
              </td>
            </tr>
            <tr class="row-key-value">
              <td>{{$t('vehicleDescriptionReport.transmissionType')}}:</td>
              <td>
                <strong>{{vehicleDescription.transmissionType }}</strong>
              </td>
            </tr>
            <tr class="row-key-value">
              <td>{{$t('vehicleDescriptionReport.vehicleBrand')}}:</td>
              <td>
                <strong>{{vehicleDescription.vehicleBrand}}</strong>
              </td>
            </tr>
          </table>
        </div>
        <div class="row">
          <table>
            <tr class="row-key-value">
              <td>{{$t('generic.model')}}:</td>
              <td>
                <strong>{{vehicleDescription.vehicleModel}}</strong>
              </td>
            </tr>
            <tr class="row-key-value">
              <td>{{$t('generic.year')}}:</td>
              <td>
                <strong>{{vehicleDescription.vehicleYear}}</strong>
              </td>
            </tr>
            <tr class="row-key-value">
              <td>{{$t('vehicleDescriptionReport.engineType')}}:</td>
              <td>
                <strong>{{vehicleDescription.engineType}}</strong>
              </td>
            </tr>
          </table>
        </div>
        <div class="row">
          <table>
            <tr class="row-key-value">
              <td>{{$t('vehicleDescriptionReport.engineCylinders')}}:</td>
              <td>
                <strong>{{vehicleDescription.engineCylinders}}</strong>
              </td>
            </tr>
            <tr class="row-key-value">
              <td>{{$t('vehicleDescriptionReport.engineLiters')}}:</td>
              <td>
                <strong>{{vehicleDescription.engineLiters}}</strong>
              </td>
            </tr>
          </table>
        </div>
        <div class="full-picture"></div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      orderId: "",
      vehicleDescription: "",
      customerName: ""
    };
  },

  created() {
    const orderId = this.$route.params.orderId;
    axios
      .get(`/vehicle_inspection_reports/${orderId}`)
      .then(res => {
        this.vehicleDescription = res.data.vehicleDescription;
      })
      .catch(error => {
        console.log(error.response);
      });
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.container {
  display: inline-block;
  font-family: sans-serif, Arial, Helvetica;
  width: 100%;
  display: inline-block;
}

table {
  width: 100%;
  padding-left: 12px;
  padding-right: 12px;
}

td {
  vertical-align: top;
}

.sub-container {
  font-size: 12px;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-top: 30px;
  margin-bottom: 30px;
  border-radius: 25px;
  border: 1px solid #b6b1b1;
  width: 100%;
  display: inline-table;
}
.row {
  width: 100%;
  clear: left;
}
.row-key-value {
  padding-top: 10px;
  padding-bottom: 10px;
  float: left;
  width: 33%;
}
.full-picture {
  max-width: 80%;
}

/* For mobile phones: */
@media only screen and (max-width: 580px) {
  table {
    padding-left: 14px;
    padding-right: 14px;
  }

  .sub-container {
    border-radius: 20px;
  }

  .row-key-value {
    width: 100%;
  }

  @media only screen and (max-width: 360px) {
    table {
      padding-left: 10px;
      padding-right: 10px;
    }

    .sub-container {
      border-radius: 16px;
    }
  }
}
</style>