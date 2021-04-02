<template>
  <div
    class="padding-top-14 padding-bottom-14 padding-bottom-md-10 bg-white border-radius-12 box-shadow"
  >
    <div class="padding-left-10 padding-right-10">
      <div
        class="d-flex justify-content-between padding-left-2 padfding-right-2"
      >
        <span class="font-size-15"><b>Filters</b></span>
        <span class="font-size-15">Clear All(5)</span>
      </div>

      <div class="row align-items-center padding-top-5 padding-bottom-5">
        <div
          class="d-flex justify-content-between align-items-center max-width-70 margin-4 padding-left-8 padding-right-8 bg-light-grey border-radius-4"
        >
          <span class="padding-right-4 font-size-12">
            Dealer
          </span>
          <div
            class="d-flex align-items-center justify-content-center bg-normal-blue padding-6 fixed-height-10 fixed-width-10 rounded-circle"
          >
            <i class="fa fa-close font-size-9 white cursor-pointer"></i>
          </div>
        </div>

        <div
          class="d-flex justify-content-between align-items-center max-width-70 margin-4 padding-left-8 padding-right-8 bg-light-grey border-radius-4"
        >
          <span class="padding-right-4 font-size-12">
            2010
          </span>
          <div
            class="d-flex align-items-center justify-content-center bg-normal-blue padding-6 fixed-height-10 fixed-width-10 rounded-circle"
          >
            <i class="fa fa-close font-size-9 white cursor-pointer"></i>
          </div>
        </div>

        <div
          class="d-flex justify-content-between align-items-center max-width-70 margin-4 padding-left-8 padding-right-8 bg-light-grey border-radius-4"
        >
          <span class="padding-right-4 font-size-12">
            Black
          </span>
          <div
            class="d-flex align-items-center justify-content-center bg-normal-blue padding-6 fixed-height-10 fixed-width-10 rounded-circle"
          >
            <i class="fa fa-close font-size-9 white cursor-pointer"></i>
          </div>
        </div>

        <div
          class="d-flex justify-content-between align-items-center max-width-70 margin-4 padding-left-8 padding-right-8 bg-light-grey border-radius-4"
        >
          <span class="padding-right-4 font-size-12">
            Hybrid
          </span>
          <div
            class="d-flex align-items-center justify-content-center bg-normal-blue padding-6 fixed-height-10 fixed-width-10 rounded-circle"
          >
            <i class="fa fa-close font-size-9 white cursor-pointer"></i>
          </div>
        </div>
        <div
          class="d-flex justify-content-between align-items-center max-width-120 margin-4 padding-left-8 padding-right-8 bg-light-grey border-radius-4"
        >
          <span class="padding-right-4 font-size-12">
            4 wheel Drive
          </span>
          <div
            class="d-flex align-items-center justify-content-center bg-normal-blue padding-6 fixed-height-10 fixed-width-10 rounded-circle"
          >
            <i class="fa fa-close font-size-9 white cursor-pointer"></i>
          </div>
        </div>
      </div>
      <div class="padding-left-14 padding-right-2 padding-bottom-4">
        <div class="padding-top-24 padding-bottom-4 font-size-16">
          <b>
            Search
          </b>
            
        </div>

        <div
          class="d-flex justify-content-between align-items-center form-control"
        >
          <input
            class="form-control padding-0 focus-none bg-transparent"
            type="search"
            placeholder="Enter Keyword"
          />
            <i class="fas fa-search"></i>
        </div>
      </div>

      <div class="horizontal-line" />
      <div class="padding-left-14 padding-right-2 padding-bottom-4">
        <div class="padding-top-0 padding-bottom-4 font-size-16">
          <b>
            Search by country
          </b>
        </div>

        <div
          class="d-flex justify-content-between align-items-center form-control"
        >
          <input
            class="form-control padding-0 focus-none bg-transparent"
            type="search"
            placeholder="Enter Keyword"
          />
               <i class="fas fa-search"></i>
        </div>
      </div>
      <div class="horizontal-line" />
      <div
        class="padding-top-2 padding-bottom-2 padding-left-14 padding-right-14"
      >
        <div
          class="d-flex margin-bottom-4 align-items-center justify-content-between"
        >
          <b class="font-size-15">Drive type</b>
          <i class="fas fa-angle-up font-size-12 cursor-pointer"></i>
        </div>
        <label class="d-flex margin-bottom-4 align-items-center">
          <input class="margin-right-8" type="checkbox" value="" />
          <span class="font-size-13">Front Wheel Drive</span>
        </label>
        <label class="d-flex margin-bottom-4 align-items-center">
          <input class="margin-right-6" type="checkbox" value="" />
          <span class="font-size-13">Rear Wheel Drive</span>
        </label>
        <label class="d-flex margin-bottom-4 align-items-center">
          <input class="margin-right-6" type="checkbox" value="" />
          <span class="font-size-13">4WD/AWD</span>
        </label>
      </div>

      <div class="horizontal-line" />

      <div
        class="padding-top-2 padding-bottom-2 padding-left-14 padding-right-14"
      >
        <div
          class="d-flex margin-bottom-4 align-items-center justify-content-between"
        >
          <b class="font-size-15">Brand</b>
          <i class="fas fa-angle-up font-size-12 cursor-pointer"></i>
        </div>
        <label class="d-flex margin-bottom-4 align-items-center">
          <input class="margin-right-8" type="checkbox" value="" />
          <span class="font-size-13">BMW (35,899)</span>
        </label>
        <label class="d-flex margin-bottom-4 align-items-center">
          <input class="margin-right-6" type="checkbox" value="" />
          <span class="font-size-13">Chevrolet (5,899) </span>
        </label>
        <label class="d-flex margin-bottom-4 align-items-center">
          <input class="margin-right-6" type="checkbox" value="" />
          <span class="font-size-13">Toyota (3,799) </span>
        </label>
        <label class="d-flex margin-bottom-4 align-items-center">
          <input class="margin-right-6" type="checkbox" value="" />
          <span class="font-size-13">Honda (6,899) </span>
        </label>

        <label class="d-flex margin-bottom-4 align-items-center">
          <input class="margin-right-6" type="checkbox" value="" />
          <span class="font-size-13">Ford (1,989) </span>
        </label>

        <label class="d-flex margin-bottom-4 align-items-center">
          <input class="margin-right-6" type="checkbox" value="" />
          <span class="font-size-13">Mercedes Benz (7,839) </span>
        </label>
        <p class="normal-blue">See More</p>
      </div>

      <div class="horizontal-line" />
      <div
        class="padding-top-2 padding-bottom-2 padding-left-14 padding-right-14"
      >
        <div
          class="d-flex margin-bottom-4 align-items-center justify-content-between"
        >
          <b class="font-size-15">Seller Type</b>
          <i class="fas fa-angle-up font-size-12 cursor-pointer"></i>
        </div>
        <label class="d-flex margin-bottom-4 align-items-center">
          <input class="margin-right-8" type="checkbox" value="" />
          <span class="font-size-13">Dealer</span>
        </label>
        <label class="d-flex margin-bottom-4 align-items-center">
          <input class="margin-right-6" type="checkbox" value="" />
          <span class="font-size-13">Private</span>
        </label>
      </div>

      <div class="horizontal-line" />

      <div
        class="padding-top-2 padding-bottom-2 padding-left-14 padding-right-14"
      >
        <div
          class="d-flex margin-bottom-4 align-items-center justify-content-between"
        >
          <b class="font-size-15">Location</b>
          <i class="fas fa-angle-up font-size-12 cursor-pointer"></i>
        </div>
        <p>Search Radius</p>
        <div class="padding-top-10">
          <select
            class="font-size-14 border-color-light-grey border-1 max-width-130 padding-6 border-radius-8"
          >
            <option :value="null" selected disabled hidden>
              25 miles
            </option>
            <option> </option>
          </select>
        </div>
      </div>

      <div class="horizontal-line" />

      <div
        class="padding-top-2 padding-bottom-2 padding-left-14 padding-right-14"
      >
        <div
          class="d-flex margin-bottom-4 align-items-center justify-content-between"
        >
          <b class="font-size-15">Body Style </b>
          <i class="fas fa-angle-up font-size-12 cursor-pointer"></i>
        </div>
        <label class="d-flex margin-bottom-2 align-items-center">
          <input class="margin-right-8" type="checkbox" value="" />
          <span class="font-size-13">Convertible</span>
        </label>
        <label class="d-flex margin-bottom-2 align-items-center">
          <input class="margin-right-6" type="checkbox" value="" />
          <span class="font-size-13">Coupe</span>
        </label>
        <label class="d-flex margin-bottom-2 align-items-center">
          <input class="margin-right-6" type="checkbox" value="" />
          <span class="font-size-13">Hatchback</span>
        </label>
        <label class="d-flex margin-bottom-2 align-items-center">
          <input class="margin-right-6" type="checkbox" value="" />
          <span class="font-size-13">Sedan</span>
        </label>
        <label class="d-flex margin-bottom-2 align-items-center">
          <input class="margin-right-6" type="checkbox" value="" />
          <span class="font-size-13">Wagon</span>
        </label>
        <label class="d-flex margin-bottom-2 align-items-center">
          <input class="margin-right-6" type="checkbox" value="" />
          <span class="font-size-13">SUV</span>
        </label>
        <p class="normal-blue">See More</p>
      </div>

      <div class="horizontal-line" />

      <div
        class="padding-top-2 padding-bottom-2 padding-left-14 padding-right-14"
      >
        <div
          class="d-flex margin-bottom-4 align-items-center justify-content-between"
        >
          <b class="font-size-15">Fuel</b>
          <i class="fas fa-angle-up font-size-12 cursor-pointer"></i>
        </div>
        <label class="d-flex margin-bottom-4 align-items-center">
          <input class="margin-right-8" type="checkbox" value="" />
          <span class="font-size-13">Petrol</span>
        </label>
        <label class="d-flex margin-bottom-4 align-items-center">
          <input class="margin-right-6" type="checkbox" value="" />
          <span class="font-size-13">Diesel </span>
        </label>
        <label class="d-flex margin-bottom-4 align-items-center">
          <input class="margin-right-6" type="checkbox" value="" />
          <span class="font-size-13">Hybrid</span>
        </label>
        <label class="d-flex margin-bottom-4 align-items-center">
          <input class="margin-right-6" type="checkbox" value="" />
          <span class="font-size-13">Electric</span>
        </label>
      </div>

      <div class="horizontal-line" />

      <div
        class="padding-top-2 padding-bottom-2 padding-left-14 padding-right-14"
      >
        <div
          class="d-flex margin-bottom-4 align-items-center justify-content-between"
        >
          <b class="font-size-15">Transmission</b>
          <i class="fas fa-angle-up font-size-12 cursor-pointer"></i>
        </div>
        <label class="d-flex margin-bottom-4 align-items-center">
          <input class="margin-right-8" type="checkbox" value="" />
          <span class="font-size-13">Automatic</span>
        </label>
        <label class="d-flex margin-bottom-4 align-items-center">
          <input class="margin-right-6" type="checkbox" value="" />
          <span class="font-size-13">Manual</span>
        </label>
      </div>

      <div class="horizontal-line" />

      <div
        class="padding-top-2 padding-bottom-2 padding-left-14 padding-right-14"
      >
        <div
          class="d-flex margin-bottom-4 align-items-center justify-content-between"
        >
          <b class="font-size-15">Price range </b>
          <i class="fas fa-angle-up font-size-12 cursor-pointer"></i>
        </div>
        <div
          class="d-flex padding-top-10 max-width-240 align-items-center justify-content-between"
        >
          <input
            class="form-control margin-right-8 padding-6 padding-left-10 padding-right-10 font-size-14"
            value=""
            placeholder="$299"
          />
          <span class="font-size-13">to</span>
          <input
            class="form-control margin-left-8 padding-6 padding-left-10 padding-right-10 font-size-14"
            value=""
            placeholder="$299"
          />
        </div>
      </div>

      <div class="horizontal-line" />
      <div
        class="padding-top-2 padding-bottom-2 padding-left-14 padding-right-14"
      >
        <div
          class="d-flex margin-bottom-4 align-items-center justify-content-between"
        >
          <b class="font-size-15">Year </b>
          <i class="fas fa-angle-up font-size-12 cursor-pointer"></i>
        </div>
        <div
          class="d-flex padding-top-10 max-width-240 align-items-center justify-content-between"
        >
          <input
            class="form-control margin-right-8 padding-6 padding-left-10 padding-right-10 font-size-14"
            value=""
            placeholder="1999"
          />
          <span class="font-size-13">to</span>
          <input
            class="form-control margin-left-8 padding-6 padding-left-10 padding-right-10 font-size-14"
            value=""
            placeholder="2010"
          />
        </div>
      </div>

      <div class="horizontal-line" />
      <div
        class="padding-top-2 padding-bottom-2 padding-left-14 padding-right-14"
      >
        <div
          class="d-flex margin-bottom-4 align-items-center justify-content-between"
        >
          <b class="font-size-15">Exterior Color</b>
          <i class="fas fa-angle-up font-size-12 cursor-pointer"></i>
        </div>
        <label class="d-flex margin-bottom-4 align-items-center">
          <input class="margin-right-8" type="checkbox" value="" />
          <span class="font-size-13">Black </span>
        </label>
        <label class="d-flex margin-bottom-4 align-items-center">
          <input class="margin-right-6" type="checkbox" value="" />
          <span class="font-size-13">Brown </span>
        </label>
        <label class="d-flex margin-bottom-4 align-items-center">
          <input class="margin-right-6" type="checkbox" value="" />
          <span class="font-size-13">Red </span>
        </label>
        <p class="normal-blue">
          See More
        </p>
      </div>

      <div class="horizontal-line" />

      <div
        class="padding-top-2 padding-bottom-2 padding-left-14 padding-right-14"
      >
        <div
          class="d-flex margin-bottom-4 align-items-center justify-content-between"
        >
          <b class="font-size-15">Location</b>
          <i class="fas fa-angle-up font-size-12 cursor-pointer"></i>
        </div>
        <p>Mileage</p>
        <div class="padding-top-10">
          <select
            class="border-color-light-grey border-1 max-width-130 padding-6 border-radius-8 font-size-10"
          >
            <option :value="null" selected disabled hidden>
              Under 18,000 miles
            </option>
            <option> </option>
          </select>
        </div>
      </div>

      <div class="horizontal-line" />

      <div
        class="padding-top-2 padding-bottom-2 padding-left-14 padding-right-14"
      >
        <div
          class="d-flex margin-bottom-4 align-items-center justify-content-between"
        >
          <b class="font-size-15">Vehicle Type</b>
          <i class="fas fa-angle-up font-size-12 cursor-pointer"></i>
        </div>
        <label class="d-flex margin-bottom-4 align-items-center">
          <input class="margin-right-8" type="checkbox" value="" />
          <span class="font-size-13">Car</span>
        </label>
        <label class="d-flex margin-bottom-4 align-items-center">
          <input class="margin-right-6" type="checkbox" value="" />
          <span class="font-size-13">Van</span>
        </label>
        <label class="d-flex margin-bottom-4 align-items-center">
          <input class="margin-right-6" type="checkbox" value="" />
          <span class="font-size-13">Bus</span>
        </label>
        <div class="font-size-10 padding-top-8 normal-blue cursor-pointer">
          See More
        </div>
      </div>

      <div class="horizontal-line" />

      <div
        class="padding-top-2 padding-bottom-2 padding-left-14 padding-right-14"
      >
        <div
          class="d-flex margin-bottom-4 align-items-center justify-content-between"
        >
          <b class="font-size-15">Cylider</b>
          <i class="fas fa-angle-up font-size-12 cursor-pointer"></i>
        </div>
        <label class="d-flex margin-bottom-4 align-items-center">
          <input class="margin-right-8" type="checkbox" value="" />
          <span class="font-size-13">3 Cylinder</span>
        </label>
        <label class="d-flex margin-bottom-4 align-items-center">
          <input class="margin-right-6" type="checkbox" value="" />
          <span class="font-size-13">4 Cylinder</span>
        </label>
        <label class="d-flex margin-bottom-4 align-items-center">
          <input class="margin-right-6" type="checkbox" value="" />
          <span class="font-size-13">5 Cylinder</span>
        </label>
        <div class="font-size-10 padding-top-8 normal-blue cursor-pointer">
          See More
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.card-container {
  padding: 0px;
}
input {
  background-color: transparent;
  padding: 24px 8px;
}
.has-search .form-control {
  padding-left: 2.375rem;
}
.icon-brand {
  padding-left: 46%;
}
.has-search .form-control-feedback {
  position: absolute;
  z-index: 2;
  display: block;
  width: 2.375rem;
  height: 2.375rem;
  line-height: 2.375rem;
  text-align: center;
  pointer-events: none;
  color: #aaa;
}

.form-check-label {
  padding-top: 7px;
  padding-left: 10px;
}
.see-more {
  color: #b699e0;
}
.price-input {
  padding: 5px;
}
.veh-col {
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
  display: flex;
  justify-content: center;
}
.veh-pl-3 {
  padding-left: 1rem;
}
.veh-form-control {
  width: 65%;
}
.search-input {
  width: 100%;
}
.hr-veh {
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}
</style>
