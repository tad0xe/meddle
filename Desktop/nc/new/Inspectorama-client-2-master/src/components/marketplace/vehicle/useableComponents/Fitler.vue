<template>
  <div>
    <TagComponent />
    <div class="card-container">
      <div
        class="veh-card veh-shadow veh-p-3 veh-mb-5 veh-bg-white veh-rounded"
      >
        <p class="title">Search</p>
        <div class="veh-input-group">
          <input
            type="text"
            class="veh-form-control search-input"
            placeholder="Enter Keyword"
          />
          <div class="veh-input-group-append">
            <i class="fa fa-search"></i>
          </div>
        </div>
        <hr class="hr-veh" />
        <p class="title">Search by Country</p>
        <div class="veh-input-group">
          <input
            type="text"
            class="veh-form-control search-input"
            placeholder="Enter Keyword"
          />
          <div class="input-group-append">
            <i class="fa fa-search"></i>
          </div>
        </div>
        <hr class="hr-veh" />
        <CheckboxComponent title="Vehicle Type" :dropdown="false" />
        <hr class="hr-veh" />
        <CheckboxComponent title="Brand" :dropdown="false" />
        <hr class="hr-veh" />
        <CheckboxComponent title="Seller Type" :dropdown="false" />
        <hr class="hr-veh" />
        <CheckboxComponent
          title="Location"
          :dropdown="true"
          dropdownSubtitle="Search Radius"
          :isSubtitle="true"
        />
        <hr class="hr-veh" />
        <CheckboxComponent title="Body Style" :dropdown="false" />
        <hr class="hr-veh" />
        <CheckboxComponent title="Fuel Type" :dropdown="false" />
        <hr class="hr-veh" />
        <CheckboxComponent title="Transmission" :dropdown="false" />
        <hr class="hr-veh" />
        <p class="title">Price</p>
        <div
          class="priceContanier veh-row veh-d-flex veh-justify-content-between veh-pl-3 veh-pr-3"
        >
          <div class="veh-col">
            <input
              type="text"
              class="veh-form-control price-input"
              placeholder="$299"
            />
          </div>
          <p class="veh-pt-2">to</p>
          <div class="veh-col">
            <input
              type="text"
              class="veh-form-control price-input"
              placeholder="$299"
            />
          </div>
        </div>
        <hr class="hr-veh" />
        <p class="title">Year</p>
        <div
          class="priceContanier veh-row veh-d-flex veh-justify-content-between veh-pl-3 veh-pr-3"
        >
          <div class="veh-col">
            <input
              type="text"
              class="veh-form-control price-input"
              placeholder="1999"
            />
          </div>
          <p class="veh-pt-2">to</p>
          <div class="veh-col">
            <input
              type="text"
              class="veh-form-control price-input"
              placeholder="2010"
            />
          </div>
        </div>
        <hr class="hr-veh" />
        <CheckboxComponent title="Driver Type" :dropdown="false" />
        <hr class="hr-veh" />
        <CheckboxComponent title="Exterior Color" :dropdown="false" />
        <hr class="hr-veh" />
        <CheckboxComponent title="Interior Color" :dropdown="false" />
        <hr class="hr-veh" />
        <CheckboxComponent title="Cylinder" :dropdown="false" />
      </div>
    </div>
    <!-- <md-icon>search</md-icon> -->
  </div> 
</template>

<script>
import TagComponent from "./TagFilter.vue";
import CheckboxComponent from "./checkbox";

export default {
  name: "FilterComponent",
  components: {
    TagComponent,
    CheckboxComponent,
  },
};
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
.fa-search {
  position: absolute;
  top: 35%;
  right: 6%;
  font-size: 23px;
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
