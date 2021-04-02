<template>
  <div
    class="padding-top-14 padding-bottom-14 padding-bottom-md-50 bg-white border-radius-12 box-shadow"
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
            New
          </span>
          <div
            class="d-flex align-items-center justify-content-center bg-normal-blue padding-6 fixed-height-10 fixed-width-10 rounded-circle"
          >
            <i class="fa fa-close font-size-9 white cursor-pointer"></i>
          </div>
        </div>

        <div
          class="d-flex justify-content-between align-items-center max-width-110 margin-4 padding-left-8 padding-right-8 bg-light-grey border-radius-4"
        >
          <span class="padding-right-4 font-size-12">
            3 bedrooms
          </span>
          <div
            class="d-flex align-items-center justify-content-center bg-normal-blue padding-6 fixed-height-10 fixed-width-10 rounded-circle"
          >
            <i class="fa fa-close font-size-9 white cursor-pointer"></i>
          </div>
        </div>

        <div
          class="d-flex justify-content-between align-items-center max-width-110 margin-4 padding-left-8 padding-right-8 bg-light-grey border-radius-4"
        >
          <span class="padding-right-4 font-size-12">
            Commercial
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
            1-story building
          </span>
          <div
            class="d-flex align-items-center justify-content-center bg-normal-blue padding-6 fixed-height-10 fixed-width-10 rounded-circle"
          >
            <i class="fa fa-close font-size-9 white cursor-pointer"></i>
          </div>
        </div>
      </div>

      <div class="padding-left-2 padfding-right-2 padding-bottom-4">
        <div class="padding-top-24 padding-bottom-4 font-size-16">
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
    </div>

    <div class="horizontal-line" />

    <div
      class="padding-top-2 padding-bottom-2 padding-left-14 padding-right-14"
    >
      <div
        class="d-flex margin-bottom-4 align-items-center justify-content-between"
      >
        <b class="font-size-15">Condition</b>
        <i class="fas fa-angle-up font-size-12 cursor-pointer"></i>
      </div>
      <label class="d-flex margin-bottom-4 align-items-center">
        <input class="margin-right-8" type="checkbox" value="" />
        <span class="font-size-13">New</span>
      </label>
      <label class="d-flex margin-bottom-4 align-items-center">
        <input class="margin-right-6" type="checkbox" value="" />
        <span class="font-size-13">Existing</span>
      </label>
    </div>

    <div class="horizontal-line" />

    <div
      class="padding-top-2 padding-bottom-2 padding-left-14 padding-right-14"
    >
      <div
        class="d-flex margin-bottom-4 align-items-center justify-content-between"
      >
        <b class="font-size-15">Commercial Category</b>
        <i class="fas fa-angle-up font-size-12 cursor-pointer"></i>
      </div>
      <label class="d-flex margin-bottom-4 align-items-center">
        <input class="margin-right-8" type="checkbox" value="" />
        <span class="font-size-13">For Sale</span>
      </label>
      <label class="d-flex margin-bottom-4 align-items-center">
        <input class="margin-right-6" type="checkbox" value="" />
        <span class="font-size-13">For Rent </span>
      </label>
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
        <span class="font-size-13">Seller</span>
      </label>
      <label class="d-flex margin-bottom-4 align-items-center">
        <input class="margin-right-6" type="checkbox" value="" />
        <span class="font-size-13">Agent</span>
      </label>
    </div>

    <div class="horizontal-line" />

    <div
      class="padding-top-2 padding-bottom-2 padding-left-14 padding-right-14"
    >
      <div
        class="d-flex margin-bottom-4 align-items-center justify-content-between"
      >
        <b class="font-size-15">Property Type</b>
        <i class="fas fa-angle-up font-size-12 cursor-pointer"></i>
      </div>
      <label class="d-flex margin-bottom-4 align-items-center">
        <input class="margin-right-8" type="checkbox" value="" />
        <span class="font-size-13">Commercial</span>
      </label>
      <label class="d-flex margin-bottom-4 align-items-center">
        <input class="margin-right-6" type="checkbox" value="" />
        <span class="font-size-13">Residential</span>
      </label>
    </div>

    <div class="horizontal-line" />

    <div
      class="padding-top-2 padding-bottom-2 padding-left-14 padding-right-14"
    >
      <div
        class="d-flex margin-bottom-4 align-items-center justify-content-between"
      >
        <b class="font-size-15">No of Bedrooms </b>
        <i class="fas fa-angle-up font-size-12 cursor-pointer"></i>
      </div>
      <label class="d-flex margin-bottom-2 align-items-center">
        <input class="margin-right-8" type="checkbox" value="" />
        <span class="font-size-13">1</span>
      </label>
      <label class="d-flex margin-bottom-2 align-items-center">
        <input class="margin-right-6" type="checkbox" value="" />
        <span class="font-size-13">2</span>
      </label>
      <label class="d-flex margin-bottom-2 align-items-center">
        <input class="margin-right-6" type="checkbox" value="" />
        <span class="font-size-13">3</span>
      </label>
      <label class="d-flex margin-bottom-2 align-items-center">
        <input class="margin-right-6" type="checkbox" value="" />
        <span class="font-size-13">4</span>
      </label>
    </div>

    <div class="horizontal-line" />

    <div
      class="padding-top-2 padding-bottom-2 padding-left-14 padding-right-14"
    >
      <div
        class="d-flex margin-bottom-4 align-items-center justify-content-between"
      >
        <b class="font-size-15">Housing Type</b>
        <i class="fas fa-angle-up font-size-12 cursor-pointer"></i>
      </div>
      <label class="d-flex margin-bottom-4 align-items-center">
        <input class="margin-right-8" type="checkbox" value="" />
        <span class="font-size-13">Apartment</span>
      </label>
      <label class="d-flex margin-bottom-4 align-items-center">
        <input class="margin-right-6" type="checkbox" value="" />
        <span class="font-size-13">Detached house </span>
      </label>
      <label class="d-flex margin-bottom-4 align-items-center">
        <input class="margin-right-6" type="checkbox" value="" />
        <span class="font-size-13">Townhouse</span>
      </label>
    </div>

    <div class="horizontal-line" />

    <div
      class="padding-top-2 padding-bottom-2 padding-left-14 padding-right-14"
    >
      <div
        class="d-flex margin-bottom-4 align-items-center justify-content-between"
      >
        <b class="font-size-15">Property Type</b>
        <i class="fas fa-angle-up font-size-12 cursor-pointer"></i>
      </div>
      <label class="d-flex margin-bottom-4 align-items-center">
        <input class="margin-right-8" type="checkbox" value="" />
        <span class="font-size-13">Commercial</span>
      </label>
      <label class="d-flex margin-bottom-4 align-items-center">
        <input class="margin-right-6" type="checkbox" value="" />
        <span class="font-size-13">Residential</span>
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
        class="d-flex max-width-240 align-items-center justify-content-between"
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
        <b class="font-size-15">Facilities</b>
        <i class="fas fa-angle-up font-size-12 cursor-pointer"></i>
      </div>
      <label class="d-flex margin-bottom-4 align-items-center">
        <input class="margin-right-8" type="checkbox" value="" />
        <span class="font-size-13">Garage lift </span>
      </label>
      <label class="d-flex margin-bottom-4 align-items-center">
        <input class="margin-right-6" type="checkbox" value="" />
        <span class="font-size-13">Charging Option </span>
      </label>
      <div class="font-size-10 padding-top-8 blue cursor-pointer">See More</div>
    </div>

    <div class="horizontal-line" />

    <div
      class="padding-top-2 padding-bottom-2 padding-left-14 padding-right-14"
    >
      <div
        class="d-flex margin-bottom-4 align-items-center justify-content-between"
      >
        <b class="font-size-15">Ownership Type</b>
        <i class="fas fa-angle-up font-size-12 cursor-pointer"></i>
      </div>
      <label class="d-flex margin-bottom-4 align-items-center">
        <input class="margin-right-8" type="checkbox" value="" />
        <span class="font-size-13">Owner</span>
      </label>
      <label class="d-flex margin-bottom-4 align-items-center">
        <input class="margin-right-6" type="checkbox" value="" />
        <span class="font-size-13">Bond</span>
      </label>
      <label class="d-flex margin-bottom-4 align-items-center">
        <input class="margin-right-6" type="checkbox" value="" />
        <span class="font-size-13">Share</span>
      </label>
      <div class="font-size-10 padding-top-8 blue cursor-pointer">See More</div>
    </div>

    <div class="horizontal-line" />

    <div
      class="padding-top-2 padding-bottom-2 padding-left-14 padding-right-14"
    >
      <div
        class="d-flex margin-bottom-4 align-items-center justify-content-between"
      >
        <b class="font-size-15">Story Building</b>
        <i class="fas fa-angle-up font-size-12 cursor-pointer"></i>
      </div>
      <label class="d-flex margin-bottom-4 align-items-center">
        <input class="margin-right-8" type="checkbox" value="" />
        <span class="font-size-13">No Story</span>
      </label>
      <label class="d-flex margin-bottom-4 align-items-center">
        <input class="margin-right-6" type="checkbox" value="" />
        <span class="font-size-13">1-Story</span>
      </label>
      <label class="d-flex margin-bottom-4 align-items-center">
        <input class="margin-right-6" type="checkbox" value="" />
        <span class="font-size-13">2-Story </span>
      </label>
      <div class="font-size-10 padding-top-8 blue cursor-pointer">See More</div>
    </div>

    <div class="horizontal-line" />

    <div
      class="padding-top-2 padding-bottom-2 padding-left-14 padding-right-14"
    >
      <div
        class="d-flex margin-bottom-4 align-items-center justify-content-between"
      >
        <b class="font-size-15">Floor Location</b>
        <i class="fas fa-angle-up font-size-12 cursor-pointer"></i>
      </div>
      <label class="d-flex margin-bottom-4 align-items-center">
        <input class="margin-right-8" type="checkbox" value="" />
        <span class="font-size-13">Ground Floor</span>
      </label>
      <label class="d-flex margin-bottom-4 align-items-center">
        <input class="margin-right-6" type="checkbox" value="" />
        <span class="font-size-13">1st Floor</span>
      </label>
      <label class="d-flex margin-bottom-4 align-items-center">
        <input class="margin-right-6" type="checkbox" value="" />
        <span class="font-size-13">2nd Floor</span>
      </label>
      <div class="font-size-10 padding-top-8 blue cursor-pointer">See More</div>
    </div>

    <div class="horizontal-line" />

    <div
      class="padding-top-2 padding-bottom-2 padding-left-14 padding-right-14"
    >
      <div
        class="d-flex margin-bottom-4 align-items-center justify-content-between"
      >
        <b class="font-size-15">Year of construction range</b>
        <i class="fas fa-angle-up font-size-12 cursor-pointer"></i>
      </div>
      <div
        class="d-flex max-width-240 align-items-center justify-content-between"
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
        <b class="font-size-15">Property Size Range</b>
        <i class="fas fa-angle-up font-size-12 cursor-pointer"></i>
      </div>
      <div
        class="d-flex margin-bottom-4 align-items-center justify-content-between"
      >
        <input
          class="form-control margin-right-8 padding-6 padding-left-10 padding-right-10 font-size-14"
          value=""
          placeholder="4200"
        />
        <span class="font-size-13">to</span>
        <input
          class="form-control margin-left-8 padding-6 padding-left-10 padding-right-10 font-size-14"
          value=""
          placeholder="30000"
        />
        <select
          class="form-control max-width-50 margin-left-8 padding-6 padding-left-10 padding-right-10 font-size-14"
        >
          <option value selected disabled hidden>m2</option>
          <option value="m2">m2</option>
          <option value="m2">m2</option>
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
        <b class="font-size-15">Plot Size Range</b>
        <i class="fas fa-angle-up font-size-12 cursor-pointer"></i>
      </div>
      <div
        class="d-flex margin-bottom-4 align-items-center justify-content-between"
      >
        <input
          class="form-control margin-right-8 padding-6 padding-left-10 padding-right-10 font-size-14"
          value=""
          placeholder="4200"
        />
        <span class="font-size-13">to</span>
        <input
          class="form-control margin-left-8 padding-6 padding-left-10 padding-right-10 font-size-14"
          value=""
          placeholder="30000"
        />
        <select
          class="form-control max-width-50 margin-left-8 padding-6 padding-left-10 padding-right-10 font-size-14"
        >
          <option value selected disabled hidden>m2</option>
          <option value="m2">m2</option>
          <option value="m2">m2</option>
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
        <b class="font-size-15">Date Posted</b>
        <i class="fas fa-angle-up font-size-12 cursor-pointer"></i>
      </div>
      <div
        class="d-flex margin-bottom-4 align-items-center justify-content-between"
      >
        <select
          class="form-control margin-right-8 padding-6 padding-left-10 padding-right-10 font-size-13"
        >
          <option value selected disabled hidden>DD/MM/YYYY</option>
        </select>
        <span class="font-size-13">to</span>
        <select
          class="form-control margin-left-8 padding-6 padding-left-10 padding-right-10 font-size-13"
        >
          <option value selected disabled hidden>DD/MM/YYYY</option>
        </select>
      </div>
    </div>

    <div class="horizontal-line" />
  </div>
</template>

<script></script>

<style></style>
