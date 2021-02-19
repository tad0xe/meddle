<template>
  <div class="padding-top-50">
    <div
      class="row justify-content-around border-radius-14 border-radius-14 padding-10 padding-md-30"
    >
      <div class="col-sm-6 stretch-full-md">
        <div class="margin-10 padding-10 bg-white border-radius-10 border-1 border-color-grey">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit nemo perspiciatis
            tenetur ab at. Aut ipsum
          </p>
          <div class="d-flex padding-top-10 justify-content-between">
            <p>view reply</p>
            <span class="d-flex"
              ><p>3 days ago</p>
              <i class="fa fa-circle font-size-20 red padding-left-22 padding-top-2"></i>
              <p class="padding-left-40">Opened</p></span
            >
          </div>
        </div>
      </div>

      <div class="col-sm-6 stretch-full-md">
        <div class="margin-10 padding-10 bg-white border-radius-10 border-1 border-color-grey">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit nemo perspiciatis
            tenetur ab at. Aut ipsum
          </p>
          <div class="d-flex padding-top-10 justify-content-between">
            <p>view reply</p>
            <span class="justify-content-between d-flex"
              ><p>days ago</p>
              <i class="fa fa-circle font-size-20 red padding-left-22 padding-top-2"></i>
              <p class="padding-left-40">Opened</p></span
            >
          </div>
        </div>
      </div>
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

<style scoped>
</style>
