<template>
  <div class="veh-container-fluid">
        <div v-if="smallScreen === true">
          small screen
        </div>
    <div class="veh-row">
      <div class="veh-col-3">
        <div v-if="smallScreen === false">
          <FilterComponent />
        </div>
      </div>
      <div class="veh-col-9">
        <div class="veh-row">
          <div v-for="vehicle in vehicleData" :key="vehicle.id">
            <div class="card-container" @click="getOneVehicle(vehicle._id)">
              <div
                class="veh-card veh-shadow veh-p-3 veh-mb-5 veh-bg-white veh-rounded"
                style="width: 25rem"
                @click="getOneVehicle(vehicle._id)"
              >
                <img
                  src="https://picsum.photos/600/300/?image=20"
                  class="veh-card-img-top"
                  alt="..."
                  @click="getOneVehicle(vehicle._id)"
                />
                <div class="veh-card-body" @click="getOneVehicle(vehicle._id)">
                  <div class="veh-row veh-d-flex veh-justify-content-between">
                    <div class="">
                      <p class="card-text">{{ vehicle.location.city }}</p>
                      <p class="veh-font-weight-bolder card-text">
                        {{
                          vehicle.headline ? vehicle.headline : "Not Avaliable"
                        }}
                      </p>
                    </div>
                    <div>
                      <i class="far fa-heart fa-2x veh-pr-2"></i>
                    </div>
                  </div>
                  <div class="veh-d-flex veh-justify-content-between veh-row">
                    <p>
                      {{ vehicle.vehicleSpecifications.brand }}
                      {{ vehicle.vehicleSpecifications.model }}
                    </p>
                    <p>{{ vehicle.vehicleSpecifications.year }}</p>
                    <p>
                      {{ vehicle.mileage.value
                      }}{{ vehicle.mileage.unit === "miles" ? "m" : "km" }}
                    </p>
                    <p>
                      {{ format(vehicle.price.value)
                      }}{{ vehicle.price.currency }}
                    </p>
                  </div>
                  <div class="veh-d-flex veh-justify-content-between veh-row">
                    <p>{{ vehicle.sellerType }}</p>
                    <button
                      type="button"
                      class="order-btn veh-btn"
                      v-if="vehicle.isPropertyStillAvailable"
                    >
                      Order Inspection
                    </button>
                    <button
                      type="button"
                      class="order-btn veh-btn btn-danger"
                      v-if="vehicle.isPropertyStillAvailable === false"
                    >
                      Not Available
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Pagination
            :key="allItemCount"
            :allItemCount="allItemCount"
            :firstVisiblePaginations="firstVisiblePaginations"
            :limit="limit"
            @increaseSkip="handleIncreaseSkip"
            @decreaseSkip="handleDecreaseSkip"
            @setSkip="handleSetSkip"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Pagination from "../../Pagination.vue";
import FilterComponent from "./useableComponents/Fitler.vue";
import { formatToCurrency } from "../../../utility/currencyFormat";
export default {
  components: {
    FilterComponent,
    Pagination,
  },

  data() {
    return {
      vehicleData: [],
      allVehicleData: [],
      firstVisiblePaginations: 6,
      skip: 0,
      limit: 10,
      allItemCount: 0,
      country: "",
      radius: 500,
      geoCoordinates: {"lng":0, "lat":0},
      priceRange: {"start": null, "end": null},
      sellerTypes: [],
      city: "",
      yearRange: {"start": null, "end": null},
      transmissions: [],
      fuelTypes: [],
      driveTypes: [],
      exteriorColors: [],
      interiorColors: [],
      mileageRange: {"start": null, "end": null},
      brands: [],
      bodyStyles: [],
      formsOfSale: [],
      sortBy: "",
      vehicleTypes: [],
      smallScreen: false
    };
  },

  methods: {
    getAllVehicleListings() {
      const initiaUrl = `/vehicle_listing/get-all-listings?skip=${this.skip}&limit=${this.limit}`
      axios
        .get(initiaUrl)
        .then((res) => {
          this.vehicleData = res.data.listings;
          // allVehicleData(res.data);

          this.allItemCount = res.data.allVehicleCount;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    handleIncreaseSkip() {
      const newSkip = this.skip + this.limit;
      if (newSkip < this.allItemCount) {
        this.skip = newSkip;
        this.getAllVehicleListings();
      }
    },

    handleDecreaseSkip() {
      const newSkip = this.skip - this.limit;
      if (newSkip >= 0) {
        this.skip = newSkip;
        this.getAllVehicleListings();
      }
    },

    handleSetSkip(newSkip) {
      this.skip = newSkip;
      this.getAllVehicleListings();
    },

    format(price) {
      return formatToCurrency(price);
    },
    getOneVehicle(id) {
      this.$router.push({
        path: `/${this.$i18n.locale}/market-place/vehicle/${id}`,
      });
    },

    appendUrlQueryParams(newParam){

    },
    checkScreenSize() {
      if(window.screen.width < 600) {
        this.smallScreen = true
      } else {
        this.smallScreen = false
      }
    }
  },
  created() {
    // this.$store.dispatch("GET_ALL_PUBLIC_VEHICLES").then((data) => {
    //   this.vehicleData = data.listings;
    //   console.log(data, "componet");
    // });

    // this.getAllVehicleListings();

    this.getAllVehicleListings();
    this.checkScreenSize();
  },
};
</script>

<style scoped>
.card-container {
  padding: 0px 10px;
}
.card-body {
  padding: 10px;
}
.card {
  padding: 0px;
}
.order-btn {
  background-color: #8b8dc3;
  border: none;
  color: white;
  padding: 0px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 10px;
  margin: 4px 2px;
  cursor: pointer;
}
p {
  margin-bottom: 5px;
}
.container-fluid {
  font-family: var(--mainFontFamily);
}
@media (min-width: 620px) {
  
}
</style>
