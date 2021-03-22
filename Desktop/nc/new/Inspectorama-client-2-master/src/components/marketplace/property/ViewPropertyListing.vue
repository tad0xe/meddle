<template>
  <div class="bg-xlighter-blue  padding-left-md-40">
    <div class="row margin-16">
      <div class="col-md-8">
        <div>
          <h2>New Residential Apartment For Sale</h2>

          <img
            class=" stretch-full fixed-height-600 padding-top-30"
            src="../../../assets/images/row4-absolute-image.jpg"
          />
        </div>
        <div
          class="d-flex justify-content-between"
          v-if="currentScreenWidth > '768'"
        >
          <img
            width="15%"
            height=""
            src="../../../assets/images/row4-absolute-image.jpg"
          />
          <img
            width="15%"
            src="../../../assets/images/row4-absolute-image.jpg"
          />
          <img
            width="15%"
            src="../../../assets/images/row4-absolute-image.jpg"
          />
          <img
            width="15%"
            src="../../../assets/images/row4-absolute-image.jpg"
          />
          <img
            width="15%"
            src="../../../assets/images/row4-absolute-image.jpg"
          />
          <img
            width="15%"
            src="../../../assets/images/row4-absolute-image.jpg"
          />
        </div>
      </div>

      <div class="col-md-4 padding-right-md-14 ">
        <div
          class="max-width-400 stretch-full-md padding-top-md-64 padding-left-md-40"
        >
          <div
            :class="{
              'd-flex justify-content-between': currentScreenWidth < '769',
            }"
          >
            <div class="row">
              <input
                type="text "
                class="form-control padding-md-30 text-center font-size-md-20 border-2 border-radius-8  border-color-light-purple"
                placeholder="$135,000"
              />
            </div>
            <div class="row padding-top-md-20">
              <button class="btn max-width-400 bg-green padding-20 font-size-16 ">
                Available
              </button>
            </div>
            <div class="row padding-top-md-20 padding-top-8 text-center">
              <p>
                This seller will refund the inspection <br />
                fee if ths property is purchased
              </p>
            </div>
          </div>
          <div class="row padding-top-20">
            <button
              class="bg-light-purple white padding-20 border-0  border-radius-8 font-size-16 "
            >
              Order an independent Inspection
            </button>
          </div>
          <div
            class="row bg-white border-2 margin-top-20 border-radius-8 padding-10 border-color-light-purple"
          >
            <div
              :class="{
                'd-flex justify-content-center': currentScreenWidth < '767',
              }"
            >
              <div
                class="d-flex  justify-content-around justify-content-center"
                :class="{
                  'max-width-400 d-flex justify-content-evenly':
                    currentScreenWidth < '767',
                }"
              >
                <div class="padding-left-md-38 "><b>Country:</b></div>
                <div class="padding-right-md-116">U.S.A</div>
              </div>
              <div
                :class="{
                  'max-width-400 d-flex justify-content-evenly':
                    currentScreenWidth < '767',
                }"
                class="d-flex padding-right-50 justify-content-evenly  justify-content-center"
              >
                <div class="padding-right-md-0 padding-left-10">
                  <b>State:</b>
                </div>
                <div class="padding-right-md-16 padding-left-10">New York</div>
              </div>
            </div>
            <div
              :class="{
                'd-flex justify-content-center': currentScreenWidth < '767',
              }"
            >
              <div
                :class="{
                  'max-width-300 padding-left-0': currentScreenWidth < '767',
                }"
                class="d-flex justify-content-around  padding-right-md-20 justify-content-center"
              >
                <div
                  class="padding-left-md-26 padding-left-14"
                >
                  <b>City:</b>
                </div>
                <div class="padding-right-md-32 ">
                  Charlottesville
                </div>
              </div>
              <div
                class="d-flex justify-content-evenly  justify-content-center"
                :class="{
                  'max-width-400': currentScreenWidth < '767',
                }"
              >
                <div class="padding-left-md-4"><b>Street:</b></div>
                <div>1621 Queens Lane</div>
              </div>
            </div>
          </div>
          <div
            :class="{
              'd-flex justify-content-between': currentScreenWidth < '767',
            }"
          >
            <div
              class="row padding-6 text-center border-color-light-purple border-2 border-radius-10 margin-top-10"
            >
              <p><b>Mr.James Blunt</b></p>
              <p class="opacity-50 ">Private Sector</p>
            </div>
            <div class="row padding-top-20">
              <button
                class="bg-dark-blue white padding-md-24 border-0  border-radius-8 font-size-md-20 font-size-14 "
              >
                Send a message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row margin-20 ">
      <div class="col-md-8">
        <div class="stretch-full">
          <div class="row ">
            <div class="col-md-6">
              <div class="padding-top-30"><hr /></div>

              <div class="max-width-250">
                <div class="d-flex justify-content-between padding-top-16">
                  <p><b>CONDITION</b></p>
                  <p>New</p>
                </div>
              </div>
              <div class="padding-top-30"><hr /></div>

              <div class="max-width-280">
                <div class="d-flex justify-content-between padding-top-16">
                  <p><b>COMMERCIAL CATEGORY</b></p>
                  <p class="padding-left-0 padding-right-6">For Sale</p>
                </div>
              </div>
              <div class="padding-top-30"><hr /></div>

              <div class="max-width-290">
                <div class="d-flex justify-content-between padding-top-16">
                  <p><b>PROPERTY TYPE</b></p>
                  <p>Residential</p>
                </div>
              </div>
              <div class="padding-top-30"><hr /></div>

              <div class="max-width-230">
                <div class="d-flex justify-content-between padding-top-16">
                  <p><b>BEDROOMS</b></p>
                  <p>3</p>
                </div>
              </div>
              <div class="padding-top-30"><hr /></div>

              <div class="max-width-300">
                <div class="d-flex justify-content-between padding-top-16">
                  <p><b>HOUSING TYPE</b></p>
                  <p class="padding-right-16">Apartment</p>
                </div>
              </div>
              <div class="padding-top-30"><hr /></div>

              <div class="max-width-270">
                <div class="d-flex justify-content-between padding-top-16">
                  <p><b>STORY BUILDING</b></p>
                  <p class="padding-right-6">3-Story</p>
                </div>
              </div>
              <div class="padding-top-30"><hr /></div>

              <div class="max-width-280">
                <div class="d-flex justify-content-between padding-top-16">
                  <p><b>FLOOR LOCATION</b></p>
                  <p>2nd Floor</p>
                </div>
              </div>
              <div class="padding-top-30"><hr /></div>
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
              <div class="padding-top-30"><hr /></div>
              <div class="max-width-290">
                <div class="d-flex justify-content-between padding-top-16">
                  <p><b>DATE POSTED</b></p>
                  <p>31/12/2020</p>
                </div>
              </div>
              <div class="padding-top-30"><hr /></div>
              <div class="max-width-280">
                <div class="d-flex justify-content-between padding-top-16">
                  <p><b>PRICE</b></p>
                  <p>$135,000</p>
                </div>
              </div>
              <div class="padding-top-30"><hr /></div>
              <div class="max-width-250">
                <div class="d-flex justify-content-between padding-top-16">
                  <p><b>PLOT SIZE (M)</b></p>
                  <p>1227</p>
                </div>
              </div>
              <div class="padding-top-30"><hr /></div>

              <div class="max-width-250">
                <div class="d-flex justify-content-between padding-top-16">
                  <p><b>YEAR OF CONSTRUCTION</b></p>
                  <p>2019</p>
                </div>
              </div>
              <div class="padding-top-30"><hr /></div>
              <div class="max-width-310">
                <div class="d-flex justify-content-between padding-top-16">
                  <p><b>ENERGY CHARACTER</b></p>
                  <p class="padding-right-4">Energy saving</p>
                </div>
              </div>
              <div class="padding-top-30"><hr /></div>
              <div class="max-width-260">
                <div class="d-flex justify-content-between padding-top-16">
                  <p><b>OWNERSHIP TYPE</b></p>
                  <p>Owned</p>
                </div>
              </div>
              <div class="padding-top-30"><hr /></div>
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
          <div class="font-size-20 padding-top-20 ">
            <b>Facilities</b>
          </div>
          <div class="row strectch-full bg-white margin-top-20 padding-10">
            <div class="col-md-3">
              <div class=" font-size-16"  >
                <b>Inside</b>
              </div>
              <div  >
                <li>Dishwasher</li>
                <li>Refrigerator</li>
                <li>Microwave</li>
              </div>
            </div>
            <div class="col-md-3">
              <div class="font-size-16"><b>HVAC</b></div>
              <li>Gas</li>
              <li>Airconditioning</li>
              <li>Heater</li>
            </div>
            <div class="col-md-3">
              <div class="font-size-16"><b>Outside</b></div>
              <li>Spa Area</li>
              <li>BBQ Area</li>
              <li>Tennis Court</li>
            </div>
            <div class="col-md-3">
              <div class="font-size-16"><b>Others</b></div>
              <li>Balcony</li>
              <li>Garage</li>
              <li>Lift</li>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-4" v-if="currentScreenWidth > '768'"></div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {

  
  computed: {
    ...mapState({
      currentScreenWidth: (state) => state.utilities.currentScreenWidth,
    }),
  },
 
};
</script>

<style scoped></style>
