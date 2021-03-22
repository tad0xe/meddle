<template>
  <div>
    <div class="containerRight-content">
      <div class="row">
        <div class="fas fa-car-alt"></div>
        <span>
          <small>{{$t('generic.dateCreated')}}: {{openedJob.createdAt | showOnlyDate}}</small>
          <br />
          <strong>
            <span v-if="openedJob.inspectionType == 'Vehicle'">{{$t('generic.vehicleInspection')}}</span>
            <span v-if="openedJob.inspectionType == 'Home'">{{$t('generic.homeInspection')}}</span>
          </strong>
          <br />
          <small>
            {{$t('generic.status')}}:
            <strong>{{translateValue(openedJob.orderStatus, $t("dbDictionary.orderStatus")) | toCapitalizeFirstLetter}}</strong>
          </small>
          <br />
        </span>
      </div>
      <br />
      <div class="row">
        <div class="fa fa-calendar"></div>
        <span>
          <small>{{$t('generic.inspectionDate')}}:</small>
          <br />
          <strong>{{openedJob.quotation.inspectionDateTime | showOnlyDate}}</strong>
        </span>
      </div>
      <br />
      <div class="row">
        <div class="far fa-clock"></div>
        <span>
          <small>{{$t('generic.inspectionTime')}}:</small>
          <br />
          <strong>{{openedJob.quotation.inspectionDateTime | showOnlyTime}}</strong>
        </span>
      </div>
      <br />
      <div class="row">
        <div class="fas fa-map-marker-alt"></div>
        <span v-if="typeOfInspector == 'Vehicle'">
          <small>{{$t('generic.locationOfVehicle')}}:</small>
          <br />
          <strong>
            {{openedJob.inspectedItemInfo.vehicleLocation}},
            {{openedJob.quotation.city}}, {{openedJob.quotation.country}} {{openedJob.quotation.zipCode}}
          </strong>
        </span>
        <span v-if="typeOfInspector == 'Home'">
          <small>{{$t('generic.locationOfHome')}}:</small>
          <br />
          <strong>
            {{openedJob.inspectedItemInfo.homeLocation}},
            {{openedJob.quotation.city}}, {{openedJob.quotation.country}} {{openedJob.quotation.zipCode}}
          </strong>
        </span>
      </div>
      <br />
      <div class="row">
        <div class="fa fa-user-circle"></div>
        <span>
          <small>{{$t('generic.seller')}}:</small>
          <br />
          <strong>{{openedJob.sellerInfo.sellerFirstName}} {{openedJob.sellerInfo.sellerLastName}}</strong>
          <br />
          <small>
            <strong>
              <u>{{openedJob.sellerInfo.sellerEmailId}}</u>
            </strong>
            <br />
            {{openedJob.sellerInfo.sellerMobileNum.countryCode}} {{openedJob.sellerInfo.sellerMobileNum.phoneNumber}}
          </small>
        </span>
      </div>
      <br />
      <hr />
      <br />
      <div class="row">
        <div class="fa fa-photo"></div>
        <span>
          <small>{{$t('generic.customer')}}:</small>
          <br />
          <strong>{{openedJob.customerName}}</strong>
          <br />
          <a href="#">
            <small>{{$t('generic.viewProfile')}}</small>
          </a>
        </span>
      </div>
    </div>
  </div>
</template>


<script>
import axios from "axios";
import { translateValue } from "../../../utility";

export default {
  props: {
    jobId: "",
    typeOfInspector: ""
  },
  data() {
    return {
      openedJob: [],
      translateValue
    };
  },
  watch: {
    jobId() {
      axios.get(`/orders/my_jobs/${this.jobId}`).then(res => {
        this.openedJob = res.data;
      });
    }
  },

  computed: {},

  created() {
    axios.get(`/orders/my_jobs/${this.jobId}`).then(res => {
      this.openedJob = res.data;
    });
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

/* Clear floats after the columns */
.row::after {
  content: "";
  clear: both;
  display: table;
}

.column {
  float: left;
  width: 100%;
  column-gap: 2em;
}

.containerRight-content .fas,
.fa-car-alt,
.fa,
.fa-calendar,
.far,
.fa-clock,
.fas,
.fa-map-marker-alt,
.fa,
.fa-user-circle,
.fa,
.fa-photo {
  font-size: 22px;
  padding: 2%;
  width: 20%;
  float: left;
}

.containerRight-content span {
  width: 80%;
  float: left;
}

.containerRight-content {
  font-size: 12px;
  display: inline-block;
  width: 30%;
  margin-top: 5%;
  margin-right: 4%;
  float: right;
  padding: 3%;
  background-color: white;
  border: 1px solid #b6b1b1;
}
</style>