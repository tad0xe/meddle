<template>
  <div class="bg-xlighter-blue padding-left-md-40">
    <div
      class="padding-left-16 padding-top-20 d-flex"
      :class="{
        'normal-blue font-size-24 ': currentScreenWidth < '768',
      }"
    >
      <img
        class="fixed-height-20 padding-right-10 "
        v-if="currentScreenWidth > '767'"
        src="../../../assets/svg/arrow.svg"
      />
      <p>Back to Result</p>
    </div>
    <div class="row margin-left-16 margin-top-8">
      <div
        class="col-md-8 padding-top-10"
        :class="{
          'col-6 font-size-10 ': currentScreenWidth < '768',
        }"
      >
        <h2 class="padding-top-0 padding-top-md-0">
          New Residential Apartment For Sale
        </h2>
      </div>

      <div
        :class="{
          'col-6  ': currentScreenWidth < '768',
        }"
        class="col-md-4"
      >
        <div
          :class="{
            'margin-left-14 ': currentScreenWidth < '768',
          }"
          class="d-flex justify-content-end max-width-420 padding-right-32  "
        >
          <div>
            <img
              class="fixed-height-30 padding-left-6"
              src="../../../assets/svg/share (1).svg"
            />

            <p>Share</p>
          </div>
          <div>
            <img
              class="fixed-height-30 padding-left-6"
              src="../../../assets/svg/iconmonstr-favorite-2.svg"
            />
            <p class="padding-left-4">Save</p>
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
              src="../../../assets/images/row4-absolute-image.jpg"
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
              src="../../../assets/images/row4-absolute-image.jpg"
            />
          </div>
          <div class="relative max-width-280 fixed-height-100 margin-right-10">
            <img
              width="100%"
              height="100%"
              src="../../../assets/images/row4-absolute-image.jpg"
            />
          </div>
          <div class="relative max-width-280 fixed-height-100 margin-right-10">
            <img
              width="100%"
              height="100%"
              src="../../../assets/images/row4-absolute-image.jpg"
            />
          </div>
          <div class="relative max-width-280 fixed-height-100">
            <img
              width="100%"     
              height="100%"
              src="../../../assets/images/row4-absolute-image.jpg"
            />
          </div>
          <div class="relative max-width-280 fixed-height-100 margin-left-10">
            <img
              width="100%"
              height="100%"
              src="../../../assets/images/row4-absolute-image.jpg"
            />
            <i
              class="fas fa-arrow-right absolute top-50-pct right-0-pct transformY-50 font-size-20 margin-right-2 padding-6 rounded-circle bg-white black"
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
                <b>$135,000</b>
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
                <span class="col-4 font-size-12 font-size-lg-14">Country:</span>
                <b class="col-8 font-size-12 font-size-lg-14">U.S.A.</b>
              </div>
              <div
                :class="{
                  'col-6': currentScreenWidth < '767',
                }"
                class="row"
              >
                <span class="col-4 font-size-12 font-size-lg-14">State:</span>
                <b class="col-8 font-size-12 font-size-lg-14">New York</b>
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
                <span class="col-4 font-size-12 font-size-lg-14">City:</span>
                <b class="col-8 font-size-12 font-size-lg-14"
                  >Charlottesville</b
                >
              </div>
              <div
                :class="{
                  'col-6': currentScreenWidth < '767',
                }"
                class="row"
              >
                <span class="col-4 font-size-12 font-size-lg-14">Street:</span>
                <b class="col-8 font-size-12 font-size-lg-14"
                  >162 Queens Lane</b
                >
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
    </div>

    <div class="row margin-20">
      <div class="col-md-8">
        <div class="stretch-full">
          <div class="row">
            <div class="col-md-6">
              <div class="padding-top-30"><hr /></div>

              <div class="max-width-250">
                <div class="d-flex justify-content-between padding-top-16">
                  <p><b>CONDITION</b></p>
                  <p>New</p>
                </div>
              </div>
              <div class="padding-top-16 padding-top-md-26"><hr /></div>

              <div class="max-width-280">
                <div class="d-flex justify-content-between padding-top-16">
                  <p><b>COMMERCIAL CATEGORY</b></p>
                  <p class="padding-left-0 padding-right-6">For Sale</p>
                </div>
              </div>
              <div class="padding-top-16 padding-top-md-26"><hr /></div>

              <div class="max-width-290">
                <div class="d-flex justify-content-between padding-top-16">
                  <p><b>PROPERTY TYPE</b></p>
                  <p>Residential</p>
                </div>
              </div>
              <div class="padding-top-16 padding-top-md-26"><hr /></div>

              <div class="max-width-230">
                <div class="d-flex justify-content-between padding-top-16">
                  <p><b>BEDROOMS</b></p>
                  <p>3</p>
                </div>
              </div>
              <div class="padding-top-16 padding-top-md-26"><hr /></div>

              <div class="max-width-300">
                <div class="d-flex justify-content-between padding-top-16">
                  <p><b>HOUSING TYPE</b></p>
                  <p class="padding-right-16">Apartment</p>
                </div>
              </div>
              <div class="padding-top-16 padding-top-md-26"><hr /></div>

              <div class="max-width-270">
                <div class="d-flex justify-content-between padding-top-16">
                  <p><b>STORY BUILDING</b></p>
                  <p class="padding-right-6">3-Story</p>
                </div>
              </div>
              <div class="padding-top-16 padding-top-md-26"><hr /></div>

              <div class="max-width-280">
                <div class="d-flex justify-content-between padding-top-16">
                  <p><b>FLOOR LOCATION</b></p>
                  <p>2nd Floor</p>
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
                  <p><b>SIZE RANGE (M)</b></p>
                  <p>1765</p>
                </div>
              </div>
              <div class="padding-top-16 padding-top-md-26"><hr /></div>
              <div class="max-width-290">
                <div class="d-flex justify-content-between padding-top-16">
                  <p><b>DATE POSTED</b></p>
                  <p>31/12/2020</p>
                </div>
              </div>
              <div class="padding-top-16 padding-top-md-26"><hr /></div>
              <div class="max-width-280">
                <div class="d-flex justify-content-between padding-top-16">
                  <p><b>PRICE</b></p>
                  <p>$135,000</p>
                </div>
              </div>
              <div class="padding-top-16 padding-top-md-26"><hr /></div>
              <div class="max-width-250">
                <div class="d-flex justify-content-between padding-top-16">
                  <p><b>PLOT SIZE (M)</b></p>
                  <p>1227</p>
                </div>
              </div>
              <div class="padding-top-16 padding-top-md-26"><hr /></div>

              <div class="max-width-250">
                <div class="d-flex justify-content-between padding-top-16">
                  <p><b>YEAR OF CONSTRUCTION</b></p>
                  <p>2019</p>
                </div>
              </div>
              <div class="padding-top-16 padding-top-md-26"><hr /></div>
              <div class="max-width-310">
                <div class="d-flex justify-content-between padding-top-16">
                  <p><b>ENERGY CHARACTER</b></p>
                  <p class="padding-right-4">Energy saving</p>
                </div>
              </div>
              <div class="padding-top-16 padding-top-md-26"><hr /></div>
              <div class="max-width-260">
                <div class="d-flex justify-content-between padding-top-16">
                  <p><b>OWNERSHIP TYPE</b></p>
                  <p>Owned</p>
                </div>
              </div>
              <div class="padding-top-16 padding-top-md-26"><hr /></div>
            </div>
          </div>
          <div class="">
            <div class="font-size-20 padding-top-20">
              <b>Seller Description</b>
            </div>
            <br />
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
        </div>
        <div class="padding-bottom-40">
          <div class="font-size-20 padding-top-20">
            <b>Facilities</b>
          </div>
          <div class="row strectch-full bg-white margin-top-20 padding-20">
            <div class="col-md-3">
              <div class="font-size-16">
                <div class="d-flex justify-content-between">
                  <b>Inside</b>
                </div>
              </div>
              <div>
                <li>Dishwasher</li>
                <li>Refrigerator</li>
                <li>Microwave</li>
              </div>
            </div>
            <div class="col-md-3">
              <div class="font-size-16">
                <div class="d-flex justify-content-between">
                  <b>HVAC</b>
                </div>
              </div>
              <div>
                <li>Gas</li>
                <li>Airconditioning</li>
                <li>Heater</li>
              </div>
            </div>
            <div class="col-md-3">
              <div class="font-size-16">
                <div class="d-flex justify-content-between">
                  <b>Outside</b>
                </div>
              </div>
              <div>
                <li>Spa Area</li>
                <li>BBQ Area</li>
                <li>Tennis Court</li>
              </div>
            </div>
            <div class="col-md-3">
              <div class="font-size-16">
                <div class="d-flex justify-content-between">
                  <b>Others</b>
                </div>
              </div>
              <div>
                <li>Balcony</li>
                <li>Garage</li>
                <li>Lift</li>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-4 padding-left-md-34">
        <div
          class="margin-md-10 max-width-370 padding-right-md-20 stretch-full-sm padding-top-16 font-size-16"
        >
          <p><b>Locate on map</b></p>
          <br />
          <img width="100%" height="" src="../../../assets/images/map.jpg" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      isInsideFacilitiesVisible: true,
      isHVACFacilitiesVisible: false,
      isOutsideFacilitiesVisible: false,
      isOtherFacilitiesVisible: false,
    };
  },
  computed: {
    ...mapState({
      currentScreenWidth: (state) => state.utilities.currentScreenWidth,
    }),
  },
  methods: {},
};
</script>

<style scoped></style>
