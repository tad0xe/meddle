<template>
  <div class=" bg-xlighter-blue padding-md-50 padding-20">
    <div class="margin-md-30  ">
      <div class="font-size-22 padding-bottom-10">
        <b> Property Information</b>
      </div>
      <hr />
    </div>

    <div class="row padding-top-20 padding-md-top-0 padding-right-md-50 ">
      <div class="col-md-8">
        <div class="margin-md-40">
          <p>Headline</p>
          <div class="padding-top-10 ">
            <input
              type="text"
              class="form-control max-width-1000 padding-18 stretch-full-md "
            />
          </div>
        </div>
      </div>
      <div class="col-md-4 ">
        <div
          class=" margin-md-40 max-width-450 stretch-full padding-top-md-0 padding-top-10   "
        >
          <p>Price</p>
          <div
            class="margin-top-10  d-flex border-top-right-radius-10 border-bottom-right-radius-10"
          >
            <div
              class="bg-blue text-center max-width-60  padding-14 border-top-left-radius-10 border-bottom-left-radius-10 font-size-16 white"
            >
              $
            </div>
            <input
              type="text"
              :class="{
                'max-width-700 ': currentScreenWidth < '767',
              }"
              class="stretch-full-sm max-width-350  padding-10  border-top-right-radius-10 border-bottom-right-radius-10 border-color-grey border-1 "
            />
          </div>
        </div>
      </div>
    </div>
    <div class="row padding-top-20 padding-md-top-0 padding-right-md-40 ">
      <div class="col-md-8">
        <div class="margin-md-40">
          <p>Selllers Description</p>
          <div class="padding-top-10 ">
            <textarea
              rows="20"
              type="text"
              class="form-control max-width-1000 padding-18 stretch-full-md "
            />
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class=" margin-md-40 max-width-450 stretch-full   ">
          <div class="padding-top-md-0 padding-top-10 ">
            <p class="">SELLING CATEGORY</p>
            <select
              name=""
              class="padding-14 margin-top-10 max-width-300 border-color-light-grey border-1 border-radius-8"
              id=""
            >
              <option value="Select"></option>
              <option value=""></option>
              <option value=""></option>
            </select>
          </div>
          <div>
            <p class="padding-top-10"><b>Is the Price Negotiable?</b></p>
            <select
              name=""
              class="padding-14 margin-top-10 max-width-300 border-color-light-grey border-1 border-radius-8"
              id=""
            >
              <option value="">Yes</option>
            </select>
          </div>
          <div>
            <p class="padding-top-14">
              <b>Will you refund the inspection fee to the eventual buyer?</b>
            </p>
            <select
              name=""
              class="padding-14 margin-top-10 max-width-300 border-color-light-grey border-1 border-radius-8"
              id=""
            >
              <option value="">No</option>
            </select>
          </div>
          <div>
            <p class="padding-top-14"><b>Seller Type</b></p>
            <select
              name=""
              class="padding-14  max-width-300 border-color-light-grey border-1 border-radius-8"
              id=""
            >
              <option value="">Private seller</option>
            </select>
          </div>
        </div>
      </div>
    </div>
    <div class="margin-left-md-30">
      <ImageUpload @clicked="onUploadImage" />
    </div>

    <div class="row " >
      <div class="col-md-8 ">
        <div class=" margin-left-md-40 overflow-scroll max-width-1200">
          <div class="d-flex justify-content-between ">
            <img
            
              width="15%"
              height=""
              src="../../../../assets/images/row4-absolute-image.jpg"
            />
            <img
              width="15%"
              class="margin-left-10"
              height=""
              src="../../../../assets/images/row4-absolute-image.jpg"
            />
            <img
              width="15%"
              class="margin-left-10"
              height=""
              src="../../../../assets/images/row4-absolute-image.jpg"
            />
            <img
              width="15%"
              class="margin-left-10"
              height=""
              src="../../../../assets/images/row4-absolute-image.jpg"
            />
            <img
              width="15%"
              class="margin-left-10"
              height=""
              src="../../../../assets/images/row4-absolute-image.jpg"
            />
             <img
              width="15%"
              class="margin-left-10"
              height=""
              src="../../../../assets/images/row4-absolute-image.jpg"
            />
             <img
              width="15%"
              class="margin-left-10"
              height=""
              src="../../../../assets/images/row4-absolute-image.jpg"
            />
             <img
              width="15%"
              class="margin-left-10"
              height=""
              src="../../../../assets/images/row4-absolute-image.jpg"
            />
             <img
              width="15%"
              class="margin-left-10"
              height=""
              src="../../../../assets/images/row4-absolute-image.jpg"
            />
             <img
              width="15%"
              class="margin-left-10"
              height=""
              src="../../../../assets/images/row4-absolute-image.jpg"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="padding-md-10 padding-right-md-20 margin-md-30 ">
      <div class="font-size-22 padding-bottom-10">
        <b> Property Features</b>
      </div>
      <hr />
      <br />
      <div class="bg-white padding-bottom-30 padding-10">
        <div class="row">
          <div class="col-sm-5">
            <div class="row margin-top-10 margin-top-md-10">
              <div class="col-md-6">
                <p class="margin-top-14">CONDTION</p>
              </div>

              <div class="col-md-6 padding-top-10 padding-top-md-0">
                <select
                  class="border-color-light-grey border-1 max-width-200 padding-14 stretch-full border-radius-8"
                >
                  <option :value="null" selected disabled hidden>
                    Select
                  </option>
                  <option> </option>
                </select>
              </div>
            </div>
          </div>

          <div class="col-sm-2"></div>
          <div class="col-sm-5">
            <div class="row margin-top-10 margin-top-md-10">
              <div class="  col-md-6">
                <p class="margin-top-14">
                  OWNERSHIP TYPE
                </p>
              </div>
              <div class="col-md-6 padding-top-10 padding-top-md-0">
                <select
                  class="border-color-light-grey border-1 max-width-200 stretch-full padding-14 border-radius-8"
                >
                  <option :value="null" selected disabled hidden>
                    Select
                  </option>
                  <option> </option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div class="row margin-top-md-10 ">
          <div class="col-sm-5">
            <div class="row margin-top-10 margin-top-md-10">
              <div class="  col-md-6">
                <p class="margin-top-14">
                  PROPERTY TYPE
                </p>
              </div>
              <div class="col-md-6 padding-top-10 padding-top-md-0">
                <select
                  class="border-color-light-grey border-1 max-width-200 padding-14 stretch-full border-radius-8"
                >
                  <option :value="null" selected disabled hidden>
                    Select
                  </option>
                  <option> </option>
                </select>
              </div>
            </div>
          </div>

          <div class="col-sm-2"></div>
          <div class="col-sm-5">
            <div class="row margin-top-10 margin-top-md-10">
              <div class="  col-md-6">
                <p class="margin-top-14">
                  BEDROOMS
                </p>
              </div>

              <div class="col-md-6 padding-top-10 padding-top-md-0">
                <select
                  class="border-color-light-grey border-1 max-width-200 padding-14 border-radius-8 stretch-full"
                >
                  <option :value="null" selected disabled hidden>
                    5
                  </option>
                  <option> </option>
                </select>
              </div>
            </div>
          </div>
        </div>
        
        <div class="row margin-top-md-10 ">
          <div class="col-sm-5">
            <div class="row margin-top-10 margin-top-md-10">
              <div class="  col-md-6">
                <p class="margin-top-14">
                  HOUSING TYPE
                </p>
              </div>
              <div class="col-md-6 padding-top-10 padding-top-md-0">
                <select
                  class="border-color-light-grey border-1 max-width-200 padding-14 border-radius-8 stretch-full"
                >
                  <option :value="null" selected disabled hidden>
                    Apartment
                  </option>
                  <option> </option>
                </select>
              </div>
            </div>
          </div>

          <div class="col-sm-2"></div>
          <div class="col-sm-5">
            <div class="row margin-top-10 margin-top-md-10">
              <div class="  col-md-6">
                <p class="margin-top-14">
                  STORY BUILDING
                </p>
              </div>

              <div class="col-md-6 padding-top-10 padding-top-md-0">
                <select
                  class="border-color-light-grey border-1 max-width-200 padding-14 border-radius-8 stretch-full"
                >
                  <option :value="null" selected disabled hidden>
                    3-Story
                  </option>
                  <option> </option>
                </select>
              </div>
            </div>
          </div>
        </div>
        
        <div class="row margin-top-md-10 ">
          <div class="col-sm-5">
            <div class="row margin-top-10 margin-top-md-10">
              <div class="  col-md-6">
                <p class="margin-top-14">
                  FLOOR LOCATION
                </p>
              </div>
              <div class="col-md-6 padding-top-10 padding-top-md-0">
                <select
                  class="border-color-light-grey border-1 max-width-200 padding-14 border-radius-8 stretch-full"
                >
                  <option :value="null" selected disabled hidden>
                    2nd Floor
                  </option>
                  <option> </option>
                </select>
              </div>
            </div>
          </div>

          <div class="col-sm-2"></div>
          <div class="col-sm-5">
            <div class="row margin-top-10 margin-top-md-10">
              <div class="  col-md-6">
                <p class="margin-top-14">
                  SIZE RANGE(M2)
                </p>
              </div>

              <div class="col-md-6 padding-top-10 padding-top-md-0">
                <input placeholder="Enter Text"
                  class="border-color-light-grey border-1 max-width-350 padding-14 border-radius-8 stretch-full-sm"
                >
                
              </div>
            </div>
          </div>
        </div>
        
        <div class="row margin-top-md-10 ">
          <div class="col-sm-5">
            <div class="row margin-top-10 margin-top-md-10">
              <div class="  col-md-6">
                <p class="margin-top-14">
                  PLOT SIZE (M2)
                </p>
              </div>
              <div class="col-md-6 padding-top-10 padding-top-md-0">
                <input placeholder="Enter Text"
                  class="border-color-light-grey border-1 max-width-350 padding-14 border-radius-8 stretch-full-sm"
                >
                  
              </div>
            </div>
          </div>

          <div class="col-sm-2"></div>
          <div class="col-sm-5">
            <div class="row margin-top-10 margin-top-md-10">
              <div class="  col-md-6">
                <p class="margin-top-14">
                 YEAR OF CONTRUCTION
                </p>
              </div>

              <div class="col-md-6 padding-top-10 padding-top-md-0">
                <select
                  class="border-color-light-grey border-1 max-width-200 padding-14 border-radius-8 stretch-full"
                >
                  <option :value="null" selected disabled hidden>
                    Select
                  </option>
                  <option> </option>
                </select>
              </div>
            </div>
          </div>
        </div>
         
        <div class="row margin-top-md-10 ">
          <div class="col-sm-5">
            <div class="row margin-top-10 margin-top-md-10">
              <div class="  col-md-6">
                <p class="margin-top-14">
                  ENERGY CHARACTER
                </p>
              </div>
             <div class="col-md-6 padding-top-10 padding-top-md-0 ">
                <select
                  class="border-color-light-grey border-1 max-width-200 stretch-full padding-14 border-radius-8"
                >
                  <option :value="null" selected disabled hidden>
                    Select
                  </option>
                  <option> </option>
                </select>
              </div>
            </div>
          </div>

          <div class="col-sm-2"></div>
          <div class="col-sm-5">
            
          </div>
        </div>

       
        
        
      </div>
    </div>
    <div class="padding-top-20" v-if="currentScreenWidth > '768'">
      <div class="font-size-22 padding-bottom-10">
        <b> Property Facilities</b>
      </div>
      <hr />
      <br />
    </div>
    <div
      class="d-flex justify-content-between"
      v-if="currentScreenWidth > '768'"
    >
      <div>
        <p><b>Inside</b></p>
        <label class="d-flex margin-bottom-4 margin-top-10 align-items-center">
          <input class="margin-right-8" type="checkbox" value="" />
          <span class="font-size-13">Dishwasher</span>
        </label>
        <label class="d-flex margin-bottom-4 align-items-center">
          <input class="margin-right-8" type="checkbox" value="" />
          <span class="font-size-13">Refrigerator</span>
        </label>
        <label class="d-flex margin-bottom-4 align-items-center">
          <input class="margin-right-8" type="checkbox" value="" />
          <span class="font-size-13">Microwave</span>
        </label>
      </div>
      <div>
        <p><b>HVCA</b></p>
        <label class="d-flex margin-bottom-4 margin-top-10 align-items-center">
          <input class="margin-right-8" type="checkbox" value="" />
          <span class="font-size-13">Gas</span>
        </label>
        <label class="d-flex margin-bottom-4 align-items-center">
          <input class="margin-right-8" type="checkbox" value="" />
          <span class="font-size-13">Airconditioning</span>
        </label>
        <label class="d-flex margin-bottom-4 align-items-center">
          <input class="margin-right-8" type="checkbox" value="" />
          <span class="font-size-13">Heater</span>
        </label>
      </div>
      <div>
        <p><b>Outside</b></p>
        <label class="d-flex margin-bottom-4 margin-top-10 align-items-center">
          <input class="margin-right-8" type="checkbox" value="" />
          <span class="font-size-13">Spa Area</span>
        </label>
        <label class="d-flex margin-bottom-4 align-items-center">
          <input class="margin-right-8" type="checkbox" value="" />
          <span class="font-size-13">BBQ Area</span>
        </label>
        <label class="d-flex margin-bottom-4 align-items-center">
          <input class="margin-right-8" type="checkbox" value="" />
          <span class="font-size-13">Tennis</span>
        </label>
      </div>
      <div>
        <p><b>Others</b></p>
        <label class="d-flex margin-bottom-4 margin-top-10 align-items-center">
          <input class="margin-right-8" type="checkbox" value="" />
          <span class="font-size-13">Balcony</span>
        </label>
        <label class="d-flex margin-bottom-4 align-items-center">
          <input class="margin-right-8" type="checkbox" value="" />
          <span class="font-size-13">Garage lift</span>
        </label>
        <label class="d-flex margin-bottom-4 align-items-center">
          <input class="margin-right-8" type="checkbox" value="" />
          <span class="font-size-13">Charging OPtion</span>
        </label>
      </div>
    </div>
    <div class="padding-top-20">
      <div><b>Contact Information</b></div>
      <hr />
      <br />
    </div>
    <div class="row">
      <div class="col-sm-5">
        <p><b>First Name</b></p>
        <input
          type="text"
          class="form-control max-width-430 stretch-full-sm margin-top-6 padding-14"
        />
      </div>
      <div class="col-sm-2"></div>
      <div class="col-sm-5 ">
        <p
          :class="{
            'padding-top-10': currentScreenWidth < '567',
          }"
        >
          <b>Last Name</b>
        </p>
        <input
          type="text"
          class="form-control max-width-430 stretch-full-sm margin-top-6 padding-14"
        />
      </div>
    </div>
    <div class="row padding-top-20">
      <div class="col-sm-5">
        <p class="padding-top-0 padding-top-md-0"><b>Country</b></p>
        <select
          class="border-color-light-grey margin-top-6 border-1 max-width-300 stretch-full-sm padding-14 border-radius-8"
        >
          <option :value="null" selected disabled hidden>
            Select Country
          </option>
          <option> </option>
        </select>
      </div>
      <div class="col-sm-2"></div>
      <div class="col-sm-5">
        <p
          :class="{
            'padding-top-10': currentScreenWidth < '567',
          }"
        >
          <b>State</b>
        </p>
        <select
          class="border-color-light-grey margin-top-6 border-1 max-width-300 stretch-full-sm padding-14 border-radius-8"
        >
          <option :value="null" selected disabled hidden>
            Select State
          </option>
          <option> </option>
        </select>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-5">
        <p class="padding-top-14 "><b>City</b></p>
        <input
          type="text"
          class="form-control margin-top-6 max-width-430 stretch-full-sm padding-14"
        />
      </div>
      <div class="col-sm-2"></div>
      <div class="col-sm-5">
        <p class="padding-top-14"><b>Street</b></p>
        <input type="text" class="form-control margin-top-6 padding-14" />
      </div>
    </div>
    <div class="row">
      <div class="col-sm-5 padding-top-14">
        <p><b>Zip Code</b></p>
        <input
          type="number"
          class="form-control max-width-430 stretch-full-sm margin-top-6 padding-14"
        />
      </div>
      <div class="col-sm-2"></div>
      <div class="col-sm-5 padding-top-14">
        <p><b>Phone Number</b></p>
        <input
          type="number"
          class="form-control  max-width-430 stretch-full-sm margin-top-6 padding-14"
        />
      </div>
      <div class=" padding-top-60 d-flex justify-content-end">
        <div class="margin-right-40">
          <button
            class="btn border-1 blue border-color-normal-blue normal-blue padding-20 "
          >
            Preview
          </button>
        </div>
        <div class="">
          <button class="bg-normal-blue btn white border-radius-8 padding-20 ">
            submit
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import ImageUpload from "./ImageUpload.vue";
import { required } from "vuelidate/lib/validators";
import axios from "axios";
export default {
  components: {
    ImageUpload,
  },
  computed: {
    ...mapState({
      currentScreenWidth: (state) => state.utilities.currentScreenWidth,
    }),
  },
  onUploadImage(data) {
    console.log(data);
    this.images = data;
  },
};
</script>

<style lang="scss" scoped></style>
