<template>
  <div class="veh-card card veh-shadow veh-p-2 veh-bg-white veh-rounded">
      <div class="veh-row veh-d-flex veh-justify-content-between veh-pl-3 font-class">
          <p class="filter">Filter</p>
          <p class="clear-all">clear all(5)</p>
      </div>
      <div class="veh-row veh-d-flex veh-justify-content-between veh-pl-3 veh-pr-3">
    <button type="button" class="veh-btn veh-btn-light">
      Dealer <span class="veh-badge veh-badge-primary">x</span>
    </button>
      </div>
  </div>
</template>

<script>

export default {
  name: "Tag",
};
</script>

<style lang="scss" scoped>
.card {
    margin-bottom: 5px;
    padding: 0.5rem;
}
.clear-all {
    padding-right: 8%;
}
.font-class {
  font-family: var(--mainFontFamily);
  padding-bottom: 16px;
}
.filter {
  font-weight: 600;
}
.veh-btn-light {
    color: #212529;
    background-color: #f8f9fa;
    border-color: #f8f9fa;
}
.veh-btn .veh-badge {
    position: relative;
    top: -1px;
}
.veh-badge {
    display: inline-block;
    padding: .25em .4em;
    font-size: 75%;
    font-weight: 700;
    line-height: 1;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    border-radius: .25rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}
.veh-badge-primary {
    color: #fff;
    background-color: #007bff;
}
</style>
