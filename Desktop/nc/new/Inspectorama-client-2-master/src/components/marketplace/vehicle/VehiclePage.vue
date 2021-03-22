<template>
  <div class="veh-container-fluid generalFont main">
    <div class="veh-row backContainer">
      <i class="fas fa-long-arrow-alt-left"></i>
      <p class="veh-pl-2 back">Bact to Results</p>
      <div class="veh-row veh-d-flex veh-justify-content-center small-screen-icon ">
          <i class="fas fa-share-alt veh-pr-3 fa-2x"></i>
          <i class="far fa-heart fa-2x veh-pr-2"></i>
      </div>
    </div>
      <div class="veh-row veh-d-flex veh-justify-content-center small-screen-icon shareContainer">
          <span class="veh-pr-3 veh-pt-2">Share</span>
          <span class="veh-pr-2 veh-pt-2">Save</span>
        </div>
    <h3 class="veh-font-weight-bolder veh-text-capitalize veh-pl-2 headline-container">
      {{oneVehicle.headline ? oneVehicle.headline : 'Not Available'}}</h3>
    <!-- <div class="share-icon-container row d-flex justify-content-end">
      <i class="fas fa-share-alt pr-3 fa-2x"></i>
      <i class="far fa-heart fa-2x pr-2"></i>
    </div>
    <div class="share-icon-container row d-flex justify-content-end">
      <span class="pr-3 pt-2">Share</span>
      <span class="pr-2 pt-2">Save</span>
    </div> -->

    <!-- for small screen -->
    <div class="small-screen-icon firstContainer">
      <div
        class="veh-d-flex veh-justify-content-center veh-card veh-pt-2 veh-shadow  veh-mb-3 veh-bg-white veh-rounded"
        style="width: 5rem; height: 35px"
        :class="oneVehicle.isPropertyStillAvailable ?  'available-card' : 'available-card-sold'"
      >
        <p class="veh-pt-2 veh-font-weight-bolder price words">{{format(oneVehicle.price.value)}}{{oneVehicle.price.currency}}</p>
      </div>
      <div
          class="veh-d-flex veh-justify-content-center veh-card veh-pt-2 veh-shadow  veh-mb-3 veh-bg-white veh-rounded"
          style="width: 5rem; height: 35px"
        >
          <p class="veh-pt-2 veh-font-weight-bolder price words">{{format(oneVehicle.price.value)}}{{oneVehicle.price.currency}}</p>
      </div>
      <div
          class="veh-d-flex veh-justify-content-center veh-card veh-pt-2 veh-shadow  veh-mb-3 veh-bg-white veh-rounded send-messages"
          style="width: 5rem; height: 35px"
        >
          <p class="veh-pt-2 veh-font-weight-bolder price words">send message</p>
      </div>
    </div>
    <div class="small-screen-icon firstContainer">
      <div style="width: 45%; padding: 5px">
                <div
          class="d-flex justify-content-center card shadow pt-2 bg-white rounded order-card"
          
        >
          <p class="order d-flex justify-content-center order-insp">
            Order an independent Inspection
          </p>
        </div>
        <div
          class="d-flex justify-content-center pt-2 rounded"
          
        >
          <p class="d-flex justify-content-center pt-2 seller-card">
            This Seller will refund the inspection fee if vehicle is purchased
          </p>
        </div>
        <div
          class="veh-d-flex veh-justify-content-center veh-card veh-shadow veh-pt-2  veh-mb-4 veh-bg-white veh-rounded"
          
        >
          <p class="veh-pt-3 veh-font-weight-bolder details veh-text-capitalize user-name">
            {{oneVehicle.ownerDetails.firstName}} {{oneVehicle.ownerDetails.lastName}}
          </p>
          <p class="veh-pb-2 details veh-text-capitalize private">{{oneVehicle.ownerDetails.typeOfSeller}}</p>
        </div>
      </div>
      <div style="width: 55%; padding: 5px">
              <div
          class="veh-d-flex veh-justify-content-center veh-card veh-shadow veh-pt-2  veh-mb-4 veh-bg-white veh-rounded user-name"
          
        >
          <ul class="veh-list-group veh-py-2">
            <li
              class="veh-list-group-item veh-d-flex veh-justify-content-between veh-align-items-center"
            >
              <strong class="location-details">Country:</strong>
              <span class="location-details veh-text-capitalize">{{oneVehicle.location.country}}</span>
            </li>
            <li
              class="veh-list-group-item veh-d-flex veh-justify-content-between veh-align-items-center"
            >
              <strong class="location-details">State:</strong>
              <span class="location-details text-capitalize">{{oneVehicle.location.state}}</span>
            </li>
            <li
              class="veh-list-group-item veh-d-flex veh-justify-content-between veh-align-items-center"
            >
              <strong class="location-details">City:</strong>
              <span class="location-details text-capitalize">{{oneVehicle.location.city}}</span>
            </li>
            <li
              class="veh-list-group-item veh-d-flex veh-justify-content-between veh-align-items-center"
            >
              <strong class="location-details">Street:</strong>
              <span class="location-details text-capitalize">{{oneVehicle.location.street}}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="veh-row small-screen-row remove"> 
      <div class="veh-col-8">
        <div class="first veh-row veh-px-4">
          <div class="first-table veh-pr-3">
            <div class="">
              <table class="veh-table table-width table-desc">
                <tbody>
                  <tr>
                    <td class="veh-font-weight-bolder table-size td-style">
                      MILEAGE
                    </td>
                    <td class="td-style">{{oneVehicle.mileage.value}}{{oneVehicle.mileage.unit === 'miles' ? 'm' : 'km'}} </td>
                  </tr>
                  <tr>
                    <td class="veh-font-weight-bolder table-size td-style">
                      DRIVER TYPE
                    </td>
                    <td class="td-style">{{oneVehicle.vehicleSpecifications.vehicleType === null ? 'Not Availabe' : oneVehicle.vehicleSpecifications.vehicleType}}</td>
                  </tr>
                  <tr>
                    <td class="veh-font-weight-bolder table-size td-style">
                      ENGINE
                    </td>
                    <td class="td-style">{{oneVehicle.vehicleSpecifications.engine === null ? 'Not Availabe' : oneVehicle.vehicleSpecifications.engine}}</td>
                  </tr>
                  <tr>
                    <td class="veh-font-weight-bolder table-size td-style">
                      TRANSMISSION
                    </td>
                    <td class="td-style">{{oneVehicle.vehicleSpecifications.transmission === null ? 'Not Availabe' : oneVehicle.vehicleSpecifications.transmission}}</td>
                  </tr>
                  <tr>
                    <td class="veh-font-weight-bolder table-size td-style">
                      FORM OF SALE
                    </td>
                    <td class="td-style">{{oneVehicle.formOfSale === null ? 'Not Availabe' : oneVehicle.formOfSale}}</td>
                  </tr>
                  <tr>
                    <td class="veh-font-weight-bolder table-size td-style">
                      MATERIAL
                    </td>
                    <td class="td-style">{{oneVehicle.vehicleSpecifications.material === null ? 'Not Availabe' : oneVehicle.vehicleSpecifications.material}}</td>
                  </tr>
                  <tr>
                    <td class="veh-font-weight-bolder table-size td-style">
                      BRAND
                    </td>
                    <td class="td-style">{{oneVehicle.vehicleSpecifications.brand === null ? 'Not Availabe' : oneVehicle.vehicleSpecifications.brand}}</td>
                  </tr>
                  <tr>
                    <td class="veh-font-weight-bolder table-size td-style">
                      MODEL
                    </td>
                    <td class="td-style">{{oneVehicle.vehicleSpecifications.model === null ? 'Not Availabe' : oneVehicle.vehicleSpecifications.model}}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="second-table">
            <div class="">
              <table class="table table-width table-desc">
                <tbody>
                  <tr>
                    <td class="veh-font-weight-bolder table-size td-style">
                      EXTERIOR
                    </td>
                    <td class="td-style">{{oneVehicle.vehicleSpecifications.exteriorColor === null ? 'Not Availabe' : oneVehicle.vehicleSpecifications.exteriorColor}}</td>
                  </tr>
                  <tr>
                    <td class="veh-font-weight-bolder table-size td-style">
                      INTERIOR
                    </td>
                    <td class="td-style">{{oneVehicle.vehicleSpecifications.interiorColor === null ? 'Not Availabe' : oneVehicle.vehicleSpecifications.interiorColor}}</td>
                  </tr>
                  <tr>
                    <td class="veh-font-weight-bolder table-size td-style">VIN</td>
                    <td class="td-style">{{oneVehicle.vehicleSpecifications.vin === null ? 'Not Availabe' : oneVehicle.vehicleSpecifications.vin}}</td>
                  </tr>
                  <tr>
                    <td class="veh-font-weight-bolder table-size td-style">
                      FUEL TYPE
                    </td>
                    <td class="td-style">{{oneVehicle.vehicleSpecifications.fuelType === null ? 'Not Availabe' : oneVehicle.vehicleSpecifications.fuelType}}</td>
                  </tr>
                  <tr>
                    <td class="veh-font-weight-bolder table-size td-style">
                      NUMBER OF DOOR
                    </td>
                    <td class="veh-td-style">{{oneVehicle.vehicleSpecifications.noOfDoors === null ? 'Not Availabe' : oneVehicle.vehicleSpecifications.noOfDoors}}</td>
                  </tr>
                  <tr>
                    <td class="veh-font-weight-bolder table-size td-style">
                      BODY STYLE
                    </td>
                    <td class="td-style">{{oneVehicle.vehicleSpecifications.bodyStyle === null ? 'Not Availabe' : oneVehicle.vehicleSpecifications.bodyStyle}}</td>
                  </tr>
                  <tr>
                    <td class="veh-font-weight-bolder table-size td-style">YEAR</td>
                    <td class="td-style">{{oneVehicle.vehicleSpecifications.year === null ? 'Not Availabe' : oneVehicle.vehicleSpecifications.year}}</td>
                  </tr>
                  <tr>
                    <td class="veh-font-weight-bolder table-size td-style">
                      VEHICLE TYPE
                    </td>
                    <td class="td-style">{{oneVehicle.vehicleSpecifications.vehicleType === null ? 'Not Availabe' : oneVehicle.vehicleSpecifications.vehicleType}}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="veh-py-4">
          <p class="description">Seller Description</p>
          <p class="veh-text-black-50">
            {{oneVehicle.description ? oneVehicle.description : 'Not Available'}}
          </p>
        </div>
        <div class="veh-py-4">
          <p class="description">Vechile Features</p>
          <!-- <div class="veh-card card-feature">
            <table class="table table-borderless">
              <tbody>
                <tr>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
              </tbody>
            </table>
          </div> -->
        </div>
        <div class="veh-py-4">
          <p class="description">About</p>
          <p class="veh-text-black-50">
            {{oneVehicle.aboutTheVehicle ?  oneVehicle.aboutTheVehicle : 'Not Available'}}
          </p>
        </div>
        <div class="veh-card card-feature" style="width: 20rem">
          <p class="p-2">View Features and Specifications</p>
        </div>
      </div>
      <div class="veh-col-4 hide-small-screen">
        <div>
        <div class="share-icon-container veh-row veh-d-flex veh-justify-content-center ">
          <i class="fas fa-share-alt veh-pr-3 fa-2x"></i>
          <i class="far fa-heart fa-2x veh-pr-2"></i>
        </div>
        <div class="share-icon-container veh-row veh-d-flex veh-justify-content-center ">
          <span class="veh-pr-3 veh-pt-2">Share</span>
          <span class="veh-pr-2 veh-pt-2">Save</span>
        </div>
        <div class="veh-pt-4">
          <div
            class="veh-d-flex veh-justify-content-center veh-card veh-pt-2 veh-shadow  veh-mb-3 veh-bg-white veh-rounded"
            style="width: 15rem; height: 85px"
          >
            <p class="veh-pt-2 veh-font-weight-bolder price words">{{format(oneVehicle.price.value)}}{{oneVehicle.price.currency}}</p>
          </div>
        </div>
        <div
          class="veh-d-flex veh-justify-content-center veh-card veh-shadow veh-pt-2  veh-mb-4 veh-bg-white veh-rounded"
          :class="oneVehicle.isPropertyStillAvailable ?  'available-card' : 'available-card-sold'"
          style="width: 15rem; height: 65px"
        >
          <p class="veh-pt-2 veh-font-weight-bolder price">{{oneVehicle.isPropertyStillAvailable ? 'Available' : 'sold'}}</p>
        </div>
        <div
          class="veh-d-flex veh-justify-content-center veh-card veh-shadow veh-pt-2  veh-mb-4 veh-bg-white veh-rounded"
          style="width: 15rem;"
        >
          <ul class="veh-list-group veh-py-2">
            <li
              class="veh-list-group-item veh-d-flex veh-justify-content-between veh-align-items-center"
            >
              <strong class="location-details">Country:</strong>
              <span class="location-details veh-text-capitalize">{{oneVehicle.location.country}}</span>
            </li>
            <li
              class="veh-list-group-item veh-d-flex veh-justify-content-between veh-align-items-center"
            >
              <strong class="location-details">State:</strong>
              <span class="location-details text-capitalize">{{oneVehicle.location.state}}</span>
            </li>
            <li
              class="veh-list-group-item veh-d-flex veh-justify-content-between veh-align-items-center"
            >
              <strong class="location-details">City:</strong>
              <span class="location-details text-capitalize">{{oneVehicle.location.city}}</span>
            </li>
            <li
              class="veh-list-group-item veh-d-flex veh-justify-content-between veh-align-items-center"
            >
              <strong class="location-details">Street:</strong>
              <span class="location-details text-capitalize">{{oneVehicle.location.street}}</span>
            </li>
          </ul>
        </div>
        <div
          class="d-flex justify-content-center card shadow pt-2 bg-white rounded order-card"
          style="width: 15rem; height: 65px"
        >
          <p class="order d-flex justify-content-center order-insp">
            Order an independent Inspection
          </p>
        </div>
        <div
          class="d-flex justify-content-center pt-2 rounded"
          style="width: 15rem;"
        >
          <p class="d-flex justify-content-center pt-2 seller-card">
            This Seller will refund the inspection fee if vehicle is purchased
          </p>
        </div>
        <div
          class="veh-d-flex veh-justify-content-center veh-card veh-shadow veh-pt-2  veh-mb-4 veh-bg-white veh-rounded"
          style="width: 15rem; height: 75px"
        >
          <p class="veh-pt-3 veh-font-weight-bolder details veh-text-capitalize">
            {{oneVehicle.ownerDetails.firstName}} {{oneVehicle.ownerDetails.lastName}}
          </p>
          <p class="veh-pb-2 details veh-text-capitalize private">{{oneVehicle.ownerDetails.typeOfSeller}}</p>
        </div>
        <div
          class="veh-d-flex veh-justify-content-center veh-card veh-shadow veh-pt-2  veh-mb-4 backg veh-rounded"
          style="width: 15rem; height: 65px"
        >
          <p class="send-message veh-d-flex veh-justify-content-center veh-pt-2">
            Send message
          </p>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
// import vehicle from '../../../store/modules/vehicle';
import {formatToCurrency2} from '../../../utility/currencyFormat'
export default {
  mounted () {
    this.inti();
    this.filterVehicle();
  //   if (this.vehicle === null || this.vehicle === undefined) {
    this.getVehcile();
  // }
  },
  data() {
    return {
      oneVehicle: [],
      route: ''
    }
  },
  methods: {
    inti() {
      this.route = this.$route.params.id;
      console.log(this.$route.params.id, 'params'); //should return id of URL param 
      console.log(this.vehicle);
    },
    filterVehicle() {
      let filteredData = this.vehicle.filter(vec => vec._id === this.$route.params.id);
      console.log(filteredData[0], 'filter')
      this.oneVehicle = filteredData[0]
      return filteredData;
    },
    format(price) {
      return formatToCurrency2(price)
    },
    getVehcile() {
      this.$store.dispatch('GET_ONE_PUBLIC_VEHICLE', this.$route.params.id).then((data) => {
      console.log(data, 'fetched data')
      this.oneVehicle = data;
    })
    }
  },
  computed: {
    ...mapState({
      vehicle: state => state.Vehicle.vehicleData.listings,
    })
  },
  created () {
    this.$store.dispatch('GET_ONE_PUBLIC_VEHICLE', this.$route.params.id).then((data) => {
      console.log(data, 'fetched data')
      this.oneVehicle = data;
    })
    this.inti();
    // console.log(this.vehicle, 'heree')
  // if (this.vehicle === null || this.vehicle === undefined) {
  //   this.getVehcile();
  // }
  },
 watch: {
   route(newValue, oldValue) {
     console.log(this.route);
     console.log(newValue);
     console.log(oldValue);
     console.log('watching')
   }
 },
  updated () {
    console.log('updated');
  },
};
</script>

<style scoped>
.main {
  background-color: #f7fbff;
}
.backg {
  background-color: #23255C;
}
.back {
  font-size: 11px;
}
.words{
  padding-bottom: 12px;
    text-align: center;
    padding-left: 29px;
}
.price {
  display: flex;
  justify-content: center;
  font-size: 20px;
  padding-bottom: 22px;
}
.card {
  border-color: #63589b;
}
.available-card {
  background-color: #69e858 !important;
  border-color: transparent;
}
.available-card-sold {
  background-color: red !important;
  border-color: transparent;
}
li {
  border: none;
}
.location-details {
  font-size: 13px;
}
.list-group-item {
  padding: 0.4rem 1.25rem;
  text-align: center;
}
.order-card {
  background-color: #8b8dc3 !important;
}
.order {
  font-size: 12px;
  color: white;
  text-align: center;
}
.seller-card {
  /* border-color: transparent; */
  border: none;
  font-size: 12px;
  text-align: center;
  font-weight: 700;
  padding: 10px 0px;
}
.details {
  display: flex;
  justify-content: center;
}
.private {
  color: #ede6e1;
  padding-top: 20px;
}
.send-message {
  color: white;
  text-align: center;
  background-color: #23255C;
}
.send-card {
  background-color: #202259 !important;
}
.table-desc {
  width: 371px;
}
.th-style,
.td-style {
  border-bottom: 1px solid #a6a6a6;
  border-top: 1px solid #a6a6a6;
}
.table-size {
  font-size: 12px;
}
.description {
  font-weight: bolder;
  font-size: 20px;
  padding-bottom: 20px;
}
.card-feature {
  border-color: transparent;
  box-shadow: 5px 10px 30px #d6dbdf;
}
li[data-v-78d77bb4] {
    border: none;
}
.backContainer{
  padding: 10px 25px;
  margin-bottom: 15px;
}
.headline-container{
  padding-left: 30px !important;
  font-size: 25px;
}
.details-container {
  padding-left: 30px;
  padding-top: 20px;
}
.user-container {
  justify-content: end;
  display: grid;
  padding-right: 20px;
}
.share-icon-container {
  justify-content: flex-end;
  padding-right: 30px;
}
td{
  padding: 12px 0px;
}
.order-insp {
  padding-top: 24px;
}
.veh-col-4 {
  display: flex;
  justify-content: flex-end;
}
.small-screen-icon {
  display: none;
}

@media (max-width: 600px) {
  .veh-container-fluid {
    padding: 10px;
  }
  .small-screen-icon {
    display: flex;
  }
  .share-icon-container {
    display: none;
  }
  .backContainer {
    display: flex;
    justify-content: space-between
  }
  .fa-long-arrow-alt-left {
    display: none;
  }
  .back {
    font-size: 20px;
    color: skyblue;
  }
  .small-screen-row{
    display: block;
  }
  .hide-small-screen {
    display: none;
  }
  .price {
    font-size: 8px;
  }
  .veh-rounded { 
    padding-top: 15px;
    border-radius: 12px !important;
  }
  .words {
    padding-left: 0px;
  }
  .firstContainer {
    display: flex;
    justify-content: space-around;
  }
  .send-messages{
    background-color: #23255C !important;
    color: white;
  }
  .order-insp {
    padding: 10px;
  }
  .order-card {
    border-radius: 20px;
  }
  .user-name {
    padding-top: 0px;
  }
  .private {
    padding-top: 10px;
  }
  .shareContainer {
    position: absolute;
    top: 45px;
    right: 20px;
  }
  .headline-container {
    padding-left: 25px !important;
    font-size: 18px;
    padding: 15px 0px;
  }
  .remove {
    flex-wrap: unset;
    margin-right: 0px;
    margin-left: 0px;
  }
}
</style>
