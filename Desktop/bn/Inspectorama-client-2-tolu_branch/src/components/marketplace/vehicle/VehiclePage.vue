<template>
  <div class="bg-xlighter-blue padding-left-md-40">
    <div
      class="padding-left-16 padding-top-20 d-flex"
      :class="{
        'normal-blue font-size-24 ': currentScreenWidth < '768',
      }"
    >
      <i
        class="fas fa-long-arrow-alt-left padding-top-4  padding-right-10"
        v-if="currentScreenWidth > '767'"
      ></i>
      <p>
        Back to result
      </p>
    </div>
    <div class="row margin-left-16 margin-top-8">
      <div
        class="col-md-8 padding-top-10"
        :class="{
          'col-6 font-size-10 ': currentScreenWidth < '768',
        }"
      >
        <h2>Used 2019 Mercedes-Benz C300 4matic</h2>
      </div>
      <div
        class="col-md-4"
        :class="{
          'col-6   ': currentScreenWidth < '768',
        }"
      >
        <div
          :class="{
            'margin-left-14 ': currentScreenWidth < '768',
          }"
          class="d-flex justify-content-end max-width-420 padding-right-32  "
        >
          <div class="padding-right-10">
            <i class="fas fa-share-alt fa-2x padding-left-4"></i>
            <p class="">share</p>
          </div>
          <div>
            <i class="far fa-heart fa-2x "></i>
            <p>save</p>
          </div>
        </div>
      </div>
    </div>

    <div class="row margin-16 ">
      <div class="col-md-8">
        <div class="relative">
          <div>
            <img
              :class="{
                'fixed-height-450': currentScreenWidth >= '767',
              }"
              class="stretch-full padding-top-0"
              src="../../../assets/images/2019-ford-edge-st-105-1542123371.jpg"
            />

            <img
              width="8%"
              src="../../../assets/svg/previous (2).svg"
              class="absolute top-50-pct left-0-pct margin-left-6 transformY-50 font-size-14 padding-4"
            />
            <img
              width="8%"
              src="../../../assets/svg/next.svg"
              class=" absolute top-50-pct right-0-pct margin-right-6  transformY-50 font-size-14 padding-4"
            />
          </div>
        </div>

        <div
          class="padding-top-20 d-flex justify-content-between"
          v-if="currentScreenWidth > '768'"
        >
          <div class="relative max-width-280 fixed-height-100 margin-right-10">
            <img
              width="100%"
              height="100%"
              src="../../../assets/images/2019-ford-edge-st-105-1542123371.jpg"
            />
          </div>
          <div class="relative max-width-280 fixed-height-100 margin-right-10">
            <img
              width="100%"
              height="100%"
              src="../../../assets/images/2019-ford-edge-st-105-1542123371.jpg"
            />
          </div>
          <div class="relative max-width-280 fixed-height-100 margin-right-10">
            <img
              width="100%"
              height="100%"
              src="../../../assets/images/2019-ford-edge-st-105-1542123371.jpg"
            />
          </div>
          <div class="relative max-width-280 fixed-height-100">
            <img
              width="100%"
              height="100%"
              src="../../../assets/images/2019-ford-edge-st-105-1542123371.jpg"
            />
          </div>
          <div class="relative max-width-280 fixed-height-100 margin-left-10">
            <img
              width="100%"
              height="100%"
              src="../../../assets/images/2019-ford-edge-st-105-1542123371.jpg"
            />
            <i
              class="fas fa-arrow-right absolute top-50-pct right-0-pct transformY-50 font-size-20 padding-6 margin-right-2 rounded-circle bg-white black"
            ></i>
          </div>
        </div>
      </div>

      <div class="col-md-4 padding-right-md-14">
        <div class="max-width-400 stretch-full-md padding-left-md-40">
          <div
            :class="{
              'd-flex justify-content-between': currentScreenWidth < '767',
            }"
          >
            <div
              :class="{
                'col-3': currentScreenWidth < '767',
              }"
              class="row margin-0 margin-md-0"
            >
              <span
                class="padding-md-8 text-center padding-top-6 padding-bottom-6 margin-top-14 margin-top-md-0 margin-bottom-14 margin-bottom-md-0 font-size-12 font-size-md-20 border-2 border-radius-8 border-color-light-purple"
              >
                <b> $135,000</b>
              </span>
            </div>
            <div
              :class="{
                'col-3': currentScreenWidth < '767',
              }"
              class="row padding-top-md-20 margin-4 margin-md-0"
            >
              <span
                class="btn bg-normal-green padding-top-6 padding-bottom-6 padding-md-8 font-size-12 font-size-md-20 margin-top-10 margin-bottom-10 margin-bottom-md-0 margin-top-md-0"
              >
                <b>Available</b>
              </span>
            </div>
            <div
              :class="{
                'col-6 padding-right-10': currentScreenWidth < '767',
              }"
              class="row padding-top-md-10 padding-top-16 text-center font-size-10 font-size-lg-14"
            >
              <p>Inspection fee is refundable if you purchase this property</p>
            </div>
          </div>
          <div class="row padding-top-10">
            <button
              class="bg-light-purple white padding-top-14 padding-bottom-14 border-0 border-radius-8 font-size-14"
            >
              Order an independent Inspection
            </button>
          </div>
          <div
            class="row bg-white border-2 margin-top-20 border-radius-8 padding-10 border-color-light-purple"
          >
            <div
              :class="{
                'd-flex': currentScreenWidth < '767',
              }"
            >
              <div
                :class="{
                  'col-6': currentScreenWidth < '767',
                }"
                class="row"
              >
                <span class="col-4 font-size-12 font-size-lg-14"
                  ><b>Country:</b></span
                >
                <p class="col-8 font-size-12 font-size-lg-14">
                  {{ oneVehicle.location.country }}
                </p>
              </div>
              <div
                :class="{
                  'col-6': currentScreenWidth < '767',
                }"
                class="row"
              >
                <span class="col-4 font-size-12 font-size-lg-14"
                  ><b>State:</b></span
                >
                <p class="col-8 font-size-12 font-size-lg-14">
                  {{ oneVehicle.location.state }}
                </p>
              </div>
            </div>

            <div
              :class="{
                'd-flex': currentScreenWidth < '767',
              }"
            >
              <div
                :class="{
                  'col-6': currentScreenWidth < '767',
                }"
                class="row"
              >
                <span class="col-4 font-size-12 font-size-lg-14"
                  ><b>City:</b></span
                >
                <p class="col-8 font-size-12 font-size-lg-14">
                  {{ oneVehicle.location.city }}
                </p>
              </div>
              <div
                :class="{
                  'col-6': currentScreenWidth < '767',
                }"
                class="row"
              >
                <span class="col-4 font-size-12 font-size-lg-14"
                  ><b>Street:</b></span
                >
                <p class="col-8 font-size-12 font-size-lg-14">
                  {{ oneVehicle.location.street }}
                </p>
              </div>
            </div>
          </div>
          <div
            :class="{
              'd-flex justify-content-between ': currentScreenWidth < '767',
            }"
          >
            <div
              :class="{
                'col-6 padding-right-14   ': currentScreenWidth < '767',
              }"
              class="row margin-top-md-20 padding-md-0  margin-0 margin-bottom-14 text-center font-size-md-12 font-size-10  border-radius-10 margin-top-26 margin-top-md-0"
            >
              <button
                class="bg-white border-color-light-purple border-2 border-0 btn  black border-0 border-radius-8 font-size-md-16 font-size-12 padding-12 padding-md-16"
              >
                <b>Mr. James Blunt</b>
                <p class="opacity-50">Private Seller</p>
              </button>
            </div>
            <div
              :class="{
                '   ': currentScreenWidth < '767',
              }"
            ></div>
            <div
              :class="{
                'col-6 padding-left-14   ': currentScreenWidth < '767',
              }"
              class="row margin-top-md-20 padding-md-0  margin-0 margin-bottom-14 text-center font-size-md-12 font-size-10  border-radius-10 margin-top-26 margin-top-md-0"
            >
              <button
                class="bg-dark-blue white margin-0 black border-0 border-radius-8 font-size-md-16 font-size-12 padding-10 padding-md-20"
              >
                <b>
                  Send a message
                </b>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="row margin-top-20">
        <div class="col-md-8">
          <div class="stretch-full">
            <div class="row">
              <div class="col-md-6">
                <div class="padding-top-30"><hr /></div>

                <div class="max-width-250">
                  <div class="d-flex justify-content-between padding-top-16">
                    <p>MILEAGE</p>
                    <p class="padding-right-2 ">
                      {{ oneVehicle.mileage.value
                      }}{{ oneVehicle.mileage.unit === "miles" ? "m" : "km" }}
                    </p>
                  </div>
                </div>
                <div class="padding-top-16 padding-top-md-26"><hr /></div>

                <div class="max-width-230">
                  <div class="d-flex justify-content-between padding-top-16">
                    <p>DRIVER TYPE</p>
                    <p class="padding-right-8">
                      {{
                        oneVehicle.vehicleSpecifications.vehicleType === null
                          ? "Not Availabe"
                          : oneVehicle.vehicleSpecifications.vehicleType
                      }}
                    </p>
                  </div>
                </div>
                <div class="padding-top-16 padding-top-md-26"><hr /></div>

                <div class="max-width-280">
                  <div class="d-flex justify-content-between padding-top-16">
                    <p>ENGINE</p>
                    <p class="padding-right-12">
                      {{
                        oneVehicle.vehicleSpecifications.engine === null
                          ? "Not Availabe"
                          : oneVehicle.vehicleSpecifications.engine
                      }}
                    </p>
                  </div>
                </div>
                <div class="padding-top-16 padding-top-md-26"><hr /></div>

                <div class="max-width-320">
                  <div class="d-flex justify-content-between padding-top-16">
                    <p>TRANSMISSION</p>
                    <p class="padding-right-4">
                      {{
                        oneVehicle.vehicleSpecifications.transmission === null
                          ? "Not Availabe"
                          : oneVehicle.vehicleSpecifications.transmission
                      }}
                    </p>
                  </div>
                </div>
                <div class="padding-top-16 padding-top-md-26"><hr /></div>

                <div class="max-width-230">
                  <div class="d-flex justify-content-between padding-top-16">
                    <p>FORM OF SALE</p>
                    <p>
                      {{
                        oneVehicle.formOfSale === null
                          ? "Not Availabe"
                          : oneVehicle.formOfSale
                      }}
                    </p>
                  </div>
                </div>
                <div class="padding-top-16 padding-top-md-26"><hr /></div>

                <div class="max-width-250">
                  <div class="d-flex justify-content-between padding-top-16">
                    <p>MATERIAL</p>
                    <p class="padding-right-6">
                      {{
                        oneVehicle.vehicleSpecifications.material === null
                          ? "Not Availabe"
                          : oneVehicle.vehicleSpecifications.material
                      }}
                    </p>
                  </div>
                </div>
                <div class="padding-top-16 padding-top-md-26"><hr /></div>

                <div class="max-width-240">
                  <div class="d-flex justify-content-between padding-top-16">
                    <p>BRAND</p>
                    <p class="padding-right-6">
                      {{
                        oneVehicle.vehicleSpecifications.brand === null
                          ? "Not Availabe"
                          : oneVehicle.vehicleSpecifications.brand
                      }}
                    </p>
                  </div>
                </div>
                <div class="padding-top-16 padding-top-md-26"><hr /></div>

                <div class="max-width-220">
                  <div class="d-flex justify-content-between padding-top-16">
                    <p>VEHICLE TYPE</p>
                    <p>
                      {{
                        oneVehicle.vehicleSpecifications.vehicleType === null
                          ? "Not Availabe"
                          : oneVehicle.vehicleSpecifications.vehicleType
                      }}
                    </p>
                  </div>
                </div>

                <div class="padding-top-16 padding-top-md-26"><hr /></div>
              </div>

              <div class="col-md-6 padding-left-md-10">
                <div class="padding-top-30" v-if="currentScreenWidth > '768'">
                  <hr />
                </div>

                <div class="max-width-250">
                  <div class="d-flex justify-content-between padding-top-16">
                    <p>MODEL</p>
                    <p class="padding-right-md-0 padding-right-4">
                      {{
                        oneVehicle.vehicleSpecifications.model === null
                          ? "Not Availabe"
                          : oneVehicle.vehicleSpecifications.model
                      }}
                    </p>
                  </div>
                </div>
                <div class="padding-top-16 padding-top-md-26"><hr /></div>
                <div class="max-width-230">
                  <div class="d-flex justify-content-between padding-top-16">
                    <p>EXTERIOR</p>
                    <p class="padding-right-md-4 padding-right-6">
                      {{
                        oneVehicle.vehicleSpecifications.exteriorColor === null
                          ? "Not Availabe"
                          : oneVehicle.vehicleSpecifications.exteriorColor
                      }}
                    </p>
                  </div>
                </div>
                <div class="padding-top-16 padding-top-md-26"><hr /></div>
                <div class="max-width-270">
                  <div class="d-flex justify-content-between padding-top-16">
                    <p>INTERIOR</p>
                    <p class="padding-right-md-4 padding-right-6">
                      {{
                        oneVehicle.vehicleSpecifications.interiorColor === null
                          ? "Not Availabe"
                          : oneVehicle.vehicleSpecifications.interiorColor
                      }}
                    </p>
                  </div>
                </div>
                <div class="padding-top-16 padding-top-md-26"><hr /></div>
                <div class="max-width-280">
                  <div class="d-flex justify-content-between padding-top-16">
                    <p>VIN</p>
                    <p class="padding-right-md-0 padding-right-4">
                      {{
                        oneVehicle.vehicleSpecifications.vin === null
                          ? "Not Availabe"
                          : oneVehicle.vehicleSpecifications.vin
                      }}
                    </p>
                  </div>
                </div>
                <div class="padding-top-16 padding-top-md-26"><hr /></div>

                <div class="max-width-360">
                  <div class="d-flex justify-content-between padding-top-16">
                    <p>FUEL TYPE</p>
                    <p class="padding-right-md-0 padding-right-4">
                      {{
                        oneVehicle.vehicleSpecifications.fuelType === null
                          ? "Not Availabe"
                          : oneVehicle.vehicleSpecifications.fuelType
                      }}
                    </p>
                  </div>
                </div>
                <div class="padding-top-16 padding-top-md-26"><hr /></div>
                <div class="max-width-210">
                  <div class="d-flex justify-content-between padding-top-16">
                    <p>NUMBER OF DOOR</p>
                    <p class="padding-right-2 padding-right-md-0">
                      {{
                        oneVehicle.vehicleSpecifications.noOfDoors === null
                          ? "Not Availabe"
                          : oneVehicle.vehicleSpecifications.noOfDoors
                      }}
                    </p>
                  </div>
                </div>
                <div class="padding-top-16 padding-top-md-26"><hr /></div>
                <div class="max-width-320">
                  <div class="d-flex justify-content-between padding-top-16">
                    <p>BODY STYLE</p>
                    <p class="padding-right-4 padding-right-md-2">
                      {{
                        oneVehicle.vehicleSpecifications.bodyStyle === null
                          ? "Not Availabe"
                          : oneVehicle.vehicleSpecifications.bodyStyle
                      }}
                    </p>
                  </div>
                </div>
                <div class="padding-top-16 padding-top-md-26"><hr /></div>
                <div class="max-width-240">
                  <div class="d-flex justify-content-between padding-top-16">
                    <p>YEAR</p>
                    <p class="padding-right-8 padding-right-md-6">
                      {{
                        oneVehicle.vehicleSpecifications.year === null
                          ? "Not Availabe"
                          : oneVehicle.vehicleSpecifications.year
                      }}
                    </p>
                  </div>
                </div>
                <div class="padding-top-16 padding-top-md-26"><hr /></div>
              </div>
            </div>
          </div>
          <div class=" padding-top-20">
            <b class="font-size-18">Seller Description</b>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div>
            <div class="padding-bottom-40 ">
              <div class="font-size-18 padding-top-20">
                <b>Vehicle features</b>
              </div>
              <div
                class="row strectch-full bg-white margin-top-20 border-radius-6 padding-20"
              >
                <div class="col-md-4">
                  <div class="font-size-16">
                    <div class="d-flex justify-content-between">
                      <b>Mechanical</b>
                    </div>
                  </div>
                  <div>
                    <li>Power Steering</li>
                    <li>Front wheel Suspension</li>
                    <li>Speed-sensing steering</li>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="d-flex justify-content-between">
                    <b>Interior</b>
                  </div>
                  <div>
                    <li>9.0 speed</li>
                    <li>AWD</li>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="d-flex justify-content-between">
                    <b>Exterior</b>
                  </div>
                  <div>
                    <li>Automatic</li>
                    <li>Turbo</li>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div v-if="currentScreenWidth > '767'">
              <b class="font-size-18">About the 2019 Mercedes Benz C300</b>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div
              v-if="currentScreenWidth > '767'"
              class=" margin-top-20 margin-bottom-30 "
            >
              <button class="border-0 bg-white padding-14  border-radius-8">
                <b>View Features and Specifications</b>
              </button>
            </div>
          </div>
          <div
            class=" max-width-500  stretch-full-sm padding-top-8 font-size-18"
          >
            <p><b>Locate on map</b></p>
            <br />
            <img width="100%" height="" src="../../../assets/images/map.jpg" />
          </div>
        </div>
      </div>
    </div>

    <div></div>
  </div>
</template>

<script>
import { mapState } from "vuex";
// import vehicle from '../../../store/modules/vehicle';
import { formatToCurrency2 } from "../../../utility/currencyFormat";
export default {
  data() {
    return {
      oneVehicle: {
        mileage: {
          value: 5000,
          unit: "kilometer",
        },
        vehicleSpecifications: {
          vehicleType: "Bus",
          brand: "Acura",
          model: "Audi A3",
          year: 2002,
          vin: "gfg666667df",
          exteriorColor: "Red",
          interiorColor: "black-grey",
          material: "Leather",
          transmission: "9-Speed Automatic",
          driveType: "Four Wheel Drive",
          noOfDoors: 2,
          fuelType: "Lead Replacement Petrol",
          displacement: "3.0L",
          bodyStyle: "STATION WAGON",
          cylinders: 4,
          engine: "STRAIGHT",
        },
        location: {
          geoCoordinates: {
            coordinates: [12.7522, 63.9139],
            type: "Point",
          },
          country: "United States",
          zipCode: "4898987",
          state: "Colorado",
          city: "Denver",
          street: "Boulevard 123 Boulevard Avenue",
        },
        price: {
          value: 5000,
          currency: "USD",
        },
        video: {
          fileKey: null,
          fileUrl: null,
        },
        headline: "fggfgf",
        description: "Very beautiful car",
        aboutTheVehicle: null,
        sellerType: "private",
        formOfSale: "Used",
        hasSellerAgreedToRefund: false,
        isPropertyStillAvailable: true,
        isPriceNegotiable: true,
        pictures: [],
        _id: "5fb45967aff37685d0955c27",
        ownerUserId: "5d76b3a555a429643a53ccbe",
        createdAt: "2020-11-17T23:14:47.288Z",
        updatedAt: "2020-11-17T23:14:47.288Z",
        __v: 0,
      },
      route: "",
    };
  },
  computed: {
    ...mapState({
      currentScreenWidth: (state) => state.utilities.currentScreenWidth,
    }),
  },
  methods: {
    //   inti() {
    //     this.route = this.$route.params.id;
    //     console.log(this.$route.params.id, "params"); //should return id of URL param
    //     console.log(this.vehicle);
    //   },
    //   filterVehicle() {
    //     let filteredData = this.vehicle.filter(
    //       (vec) => vec._id === this.$route.params.id
    //     );
    //     console.log(filteredData[0], "filter");
    //     this.oneVehicle = filteredData[0];
    //     return filteredData;
    //   },
    format(price) {
      return formatToCurrency2(price);
    },
    //   getVehcile() {
    //     this.$store
    //       .dispatch("GET_ONE_PUBLIC_VEHICLE", this.$route.params.id)
    //       .then((data) => {
    //         console.log(data, "fetched data");
    //         this.oneVehicle = data;
    //       });
    //   },
    // },

    // computed: {
    //   ...mapState({
    //     vehicle: (state) => state.Vehicle.vehicleData.listings,
    //   }),
  },
  created() {
    // this.$store
    //   .dispatch("GET_ONE_PUBLIC_VEHICLE", this.$route.params.id)
    //   .then((data) => {
    //     console.log(data, "fetched data");
    //     this.oneVehicle = data;
    //   });
    // this.inti();
  },
  // mounted() {
  //   this.inti();
  //   // this.filterVehicle();
  //   //   if (this.vehicle === null || this.vehicle === undefined) {
  //   this.getVehcile();
  //   // }
  // },
};
</script>

<style scoped></style>
