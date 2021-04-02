<template>
<div>
  <p class="padding-left-md-80 padding-left-10 font-size-md-0 font-size-18 ">Cars for Sale</p>
    <div class="bg-xlighter-blue padding-top-20 padding-bottom-20">
  <div class="margin-left-lg-40 margin-right-lg-40">
    <div v-if="smallScreen === true">
      small screen
    </div>

    <div class="row ">
      <div class="col-3 d-flex-hidden-lg">
        <div v-if="smallScreen === false">
          <div class="max-width-350">
            <FilterComponent />
          </div>
        </div>
      </div>
      <div class="col-9 stretch-full-lg padding-left-0 padding-left-lg-28">
        <i
          class="fa fa-reorder font-size-30 d-block-display-lg margin-left-10 margin-bottom-10 cursor-pointer"
          @click="handleShowFIlter"
        ></i>
        <p class="padding-left-10 d-block-display-sm">Search Result</p>
        <div class="row">
          <div
            class="col-sm-6"
            v-for="(vehicle, index) in dummyVehicleData"
            :Key="index"
          >
            <SearchItem />
          </div>
        </div>
        <modal
          class="padding-top-40 padding-bottom-10 d-block-display-lg"
          name="vechicle-filters"
          width="300"
          height="auto"
          shiftX="0"
          :clickToClose="true"
          :adaptive="true"
          :scrollable="true"
        >
       <FilterComponent />
        </modal>
        <!-- <div>
          <div v-for="vehicle in vehicleData" :key="vehicle.id">
            
            <div @click="getOneVehicle(vehicle._id)">
              <div
                @click="getOneVehicle(vehicle._id)"
              >
                <img
                  src="https://picsum.photos/600/300/?image=20"
                  @click="getOneVehicle(vehicle._id)"
                />
                <div @click="getOneVehicle(vehicle._id)">
                  <div>
                    <div>
                      <p >{{ vehicle.location.city }}</p>
                      <p>
                        {{
                          vehicle.headline ? vehicle.headline : "Not Avaliable"
                        }}
                      </p>
                    </div>
                    <div>
                      <i class="far fa-heart fa-2x "></i>
                    </div>
                  </div>
                  <div>
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
                  <div >
                    <p>{{ vehicle.sellerType }}</p>
                    <button
                      type="button"
                      v-if="vehicle.isPropertyStillAvailable"
                    >
                      Order Inspection
                    </button>
                    <button
                      type="button"
                      v-if="vehicle.isPropertyStillAvailable === false"
                    >
                      Not Available
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> -->
        <div class="padding-top-80">
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
  </div>
</div>
</template>

<script>
import { mapState } from "vuex";
import axios from "axios";
import Pagination from "../../Pagination.vue";
import FilterComponent from "./useableComponents/Filters.vue";
import SearchItem from "./useableComponents/SearchItem.vue";
import { formatToCurrency } from "../../../utility/currencyFormat";
export default {
  components: {
    FilterComponent,
    Pagination,
    SearchItem,
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
      geoCoordinates: { lng: 0, lat: 0 },
      priceRange: { start: null, end: null },
      sellerTypes: [],
      city: "",
      yearRange: { start: null, end: null },
      transmissions: [],
      fuelTypes: [],
      driveTypes: [],
      exteriorColors: [],
      interiorColors: [],
      mileageRange: { start: null, end: null },
      brands: [],
      bodyStyles: [],
      formsOfSale: [],
      sortBy: "",
      vehicleTypes: [],
      smallScreen: false,
      dummyVehicleData: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    };
  },

  methods: {
    handleShowFIlter() {
      this.$modal.show("vechicle-filters");
    },
      computed: {
    ...mapState({
      currentScreenWidth: (state) => state.utilities.currentScreenWidth,
    }),
  },
    getAllVehicleListings() {
      const initiaUrl = `/vehicle_listing/get-all-listings?skip=${this.skip}&limit=${this.limit}`;
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

    appendUrlQueryParams(newParam) {},
    checkScreenSize() {
      if (window.screen.width < 600) {
        this.smallScreen = true;
      } else {
        this.smallScreen = false;
      }
    },
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
