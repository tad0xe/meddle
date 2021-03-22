<template>
  <div class="brand-container">
    <div class="veh-row veh-d-flex veh-justify-content-between veh-pl-3 veh-pr-3">
      <p class="title-veh">{{ title }}</p>
      <p class="icon-brand">
        <i class="fas fa-chevron-up" ></i>
      </p>
    </div>
    <p class="subtitle">{{ dropdownSubtitle }}</p>
    <div class="veh-form-check" v-if="dropdown === false">
      <input class="veh-form-check-input" type="checkbox" id="autoSizingCheck" />
      <label class="veh-form-check-label" for="autoSizingCheck"> BMW (2344) </label>
    </div>
    <div class="veh-dropdown" v-if="dropdown === true">
      <select class="check-btn">
        <option>20miles</option>
        <option>30miles</option>
      </select>
    </div>
    <p class="veh-pt-3 see-more" v-if="dropdown === false">see more</p>
  </div>
</template>

<script>
export default {
  name: "CheckboxComponent",
  props: {
    title: {
      type: String,
    },
    dropdown: {
      type: Boolean,
    },
    dropdownSubtitle: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.see-more {
  color: #b699e0;
}
.icon-brand {
  padding-left: 46%;
}
.form-check-label {
  padding-top: 7px;
  padding-left: 10px;
}
.dropdown-toggle {
  background-color: transparent;
  color: black;
}
.subtitle {
  font-weight: 100;
  font-size: 12px;
}
.fa-chevron-up{
  font-size: 10px;
}
.veh-pl-3 {
  padding-left: 1rem;
}
.veh-form-check {
    position: relative;
    display: block;
    padding-left: 1.25rem;
}
input[type="checkbox"][data-v-ac14a4dc] {
    padding: 0px;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-right: 3px;
    border-radius: 0px;
    width: auto;
    outline: none;
    border: 1px solid #ccc;
    background-color: aliceblue;
}
.veh-form-check-input {
    position: absolute;
    margin-top: .3rem;
    margin-left: -1.25rem;
}
.veh-form-check-label[data-v-ac14a4dc] {
    padding-top: 7px;
    padding-left: 10px;
}
label[data-v-ac14a4dc] {
    font-size: 13px;
    font-weight: bold;
    width: 100%;
    display: block;
}
.veh-dropdown{
    position: relative;
}

.veh-btn-secondary {
    color: #fff;
    background-color: #6c757d;
    border-color: #6c757d;
}
.check-btn {
  width: 50%;
  border: 1px solid;
}
.veh-dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 1000;
    display: none;
    float: left;
    min-width: 10rem;
    padding: .5rem 0;
    margin: .125rem 0 0;
    font-size: 1rem;
    color: #212529;
    text-align: left;
    list-style: none;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid rgba(0,0,0,.15);
    border-radius: .25rem;
}
.veh-dropdown-item {
    display: block;
    width: 100%;
    padding: .25rem 1.5rem;
    clear: both;
    font-weight: 400;
    color: #212529;
    text-align: inherit;
    white-space: nowrap;
    background-color: transparent;
    border: 0;
}
.title-veh{
  padding: 16px 0px;
  font-weight: 600;
}
</style>