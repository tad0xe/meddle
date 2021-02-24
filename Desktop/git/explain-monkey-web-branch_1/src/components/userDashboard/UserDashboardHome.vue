<template>
  <div>
    <div class="padding-left-10 padding-left-md-50 padding-right-10 padding-right-md-50">
      <div class="d-flex justify-content-end justify-content-between">
        <div v-if="currentScreenWidth > '768'"></div>
        <div
          class="bg-white margin-bottom-8 padding-10 border-radius-6 margin-top-10 margin-top-md-36"
          v-if="currentScreenWidth < '768'"
        >
          <div class="dashboard-nav-icon"></div>
          <div class="margin-top-2 dashboard-nav-icon"></div>
          <div class="dashboard-nav-icon margin-top-2"></div>
        </div>
      </div>
      <div class="row justify-content-between padding-top-0 padding-top-md-70">
        <div class="d-flex">
          <div v-if="currentScreenWidth < '768'">
            <button
              class="btn border-radius-6 border-color-green padding-10 green border-1 margin-top-4 margin-bottom-10"
            >
              <b>See Recent Activities</b>
            </button>
            <h4
              class="font-size-18 padding-bottom-10 padding-left-2"
              v-if="currentScreenWidth < '768'"
            >
              Ask a Question
            </h4>
          </div>
        </div>
        <div class="row">
          <div class="col-md-8 padding-right-0 padding-right-md-40 margin-bottom-20">
            <div class="border-radius-14 bg-white padding-10 padding-md-30">
              <h1 class="font-size-24 font-size-lg-30" v-if="currentScreenWidth > '768'">
                Ask a Question
              </h1>
              <div class="max-width-550">
                <div class="d-flex align-items-center margin-top-10 margin-top-md-30">
                  <p class="font-size-15 font-size-md-17 font-size-lg-22 margin-right-4 max-width-200">
                    Select Category
                  </p>
                  <select class="form-control">
                    <option>Select</option>
                    <option></option>
                  </select>
                </div>
                <div class="d-flex align-items-center margin-top-20 margin-top-md-40">
                  <p class="font-size-15 font-size-md-17 font-size-lg-22 margin-right-4 max-width-200">
                    Select Field
                  </p>
                  <select class="form-control">
                    <option>Select</option>
                    <option></option>
                  </select>
                </div>
                <textarea
                  class="input-textarea border-color-grey margin-top-20 margin-top-md-34"
                  rows="8"
                  placeholder=" A property lawyer is online waiting to answer your questions..."
                />
              </div>
              <div
                class="d-flex justify-content-end margin-top-10 margin-top-md-30 margin-bottom-10 padding-right-0 padding-right-lg-30"
              >
                <button
                  class="btn max-width-180 font-size-18 border-0 border-radius-10 padding-12 bg-light-green white"
                >
                  <b>Submit</b>
                </button>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="d-flex flex-wrap white text-center justify-content-between">
              <div
                class="max-width-70 stretch-full-sm margin-4 bg-grad-pink-lightpink-bottom-right border-radius-14"
              >
                <h2 class="font-size-17 font-size-sm-20">10</h2>
                <h2 class="font-size-9 font-size-sm-11">OPENED</h2>
              </div>
              <div
                class="max-width-70 stretch-full-sm margin-4 padding-4 bg-grad-green-yellow-bottom-right border-radius-14"
              >
                <h2 class="font-size-17 font-size-sm-20">5</h2>
                <h2 class="font-size-9 font-size-sm-11">PENDING</h2>
              </div>
              <div
                class="max-width-70 stretch-full-sm margin-4 padding-4 bg-grad-lightblue-blue-bottom-right border-radius-14"
              >
                <h2 class="font-size-17 font-size-sm-20">3</h2>
                <h2 class="font-size-9 font-size-sm-11">CLOSED</h2>
              </div>
              <div
                class="max-width-70 stretch-full-sm margin-4 padding-4 bg-grad-greenblue-orange-bottom-right border-radius-14"
              >
                <h2 class="font-size-17 font-size-sm-20">3</h2>
                <h2 class="font-size-9 font-size-sm-11">REFERRED</h2>
              </div>
              <div class="max-width-70 stretch-full-sm margin-4 padding-4 bg-charcoal border-radius-14">
                <h2 class="font-size-17 font-size-sm-20">21</h2>
                <h2 class="font-size-9 font-size-sm-11">ALL</h2>
              </div>
            </div>
            <div class="max-width-360 stretch-full-md margin-bottom-40">
              <h1 class="font-size-18 font-size-md-14 margin-top-20">My Recent Questions</h1>
              <div class="border-radius-12 bg-white padding-10 margin-top-10 margin-bottom-10">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor?
                </p>
              </div>
              <div class="border-radius-12 bg-white padding-10 margin-top-10 margin-bottom-10">
                <p>
                  orem ipsum dolor sit ame10t, consectetur adipiscing elit, sed do eiusmod tempor?
                </p>
              </div>
              <div class="border-radius-12 bg-white padding-10 margin-top-10 margin-bottom-10">
                <p>
                  orem ipsum dolor s10it amet, consectetur adipiscing elit, sed do eiusmod tempor?
                </p>
              </div>
              <div class="border-radius-12 bg-white padding-10 margin-top-10 margin-bottom-10">
                <p>
                  orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex margin-bottom-80" v-if="currentScreenWidth > '768'">
        <div class="max-width-360">
          <h4>RECENT NOTIFICATIONS</h4>
          <div
            class="max-width-260 padding-left-20 padding-right-20 padding-top-4 padding-top-4 bg-white border-radius-8 margin-top-16 margin-bottom-16"
          >
            <p>james Replied</p>
            <p class="font-size-11 grey">22 secs ago</p>
          </div>
          <div
            class="max-width-260 padding-left-20 padding-right-20 padding-top-4 padding-top-4 bg-white border-radius-8 margin-top-16 margin-bottom-16"
          >
            <p>james Replied</p>
            <p class="font-size-11 grey">22 secs ago</p>
          </div>
          <div
            class="max-width-260 padding-left-20 padding-right-20 padding-top-4 padding-top-4 bg-white border-radius-8 margin-top-16 margin-bottom-16"
          >
            <p>james Replied</p>
            <p class="font-size-11 grey">22 secs ago</p>
          </div>
        </div>
        <div class="max-width-360">
          <h4>RECENT NOTIFICATIONS</h4>
          <div
            class="max-width-260 padding-left-20 padding-right-20 padding-top-4 padding-top-4 bg-white border-radius-8 margin-top-16 margin-bottom-16"
          >
            <p>You changed Profile picture</p>
            <p class="font-size-11 grey">22 secs ago</p>
          </div>
          <div
            class="max-width-260 padding-left-20 padding-right-20 padding-top-4 padding-top-4 bg-white border-radius-8 margin-top-16 margin-bottom-16"
          >
            <p>You got referred</p>
            <p class="font-size-11 grey">22 secs ago</p>
          </div>
          <div
            class="max-width-260 padding-left-20 padding-right-20 padding-top-4 padding-top-4 bg-white border-radius-8 margin-top-16 margin-bottom-16"
          >
            <p>You got referred</p>
            <p class="font-size-11 grey">22 secs ago</p>
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
      currentScreenWidth: state => state.utilities.currentScreenWidth
    })
  }
};
</script>

<style scoped></style>
