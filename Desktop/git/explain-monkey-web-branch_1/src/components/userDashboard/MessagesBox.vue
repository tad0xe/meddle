<template>
  <div class="padding-right-60">
     <div v-if="currentScreenWidth < '768'">
      <button type="button" @click="handleHideMessageBox">Close</button>
    </div>
    <div class="padding-top-10 margin-10 ">
    
      <div class="max-width-300 float-start bg-white padding-12 float-start d-flex border-radius-10">
        <div><div class="dashboard-top-icon margin-top-16"></div></div>
        <div class="padding-left-20">
          <b>
            Jennifer Loius
          </b>

          <p>
            surgeon
          </p>

          <div>
            <i class="fa fa-star font-size-26 green"></i> &nbsp;
            <i class="fa fa-star font-size-26 green"></i> &nbsp;
            <i class="fa fa-star font-size-26 green"></i> &nbsp;
            <i class="fa fa-star font-size-26 green"></i> &nbsp;
            <i class="fa fa-star font-size-26 light-grey "></i> &nbsp;
          </div>
        </div>
      </div>
    
      <div class="float-end width-100 padding-left-10 padding-top-18 ">
      
        <button class="btn bg-green padding-14 ">End Chat</button>
      </div>
    </div>

    <div class="max-with-360 padding-10 bg-white margin-top-120 margin-10 border-radius-12">
      <div class="row">
        <div
          class="col-sm-7 border-radius-12 bg-light-grey padding-20 margin-top-10 margin-bottom-10"
        >
          <p>
            orem ipsum dolor s10it amet, consectetur adipiscing elit, sed do eiusmod tempor?
          </p>
        </div>
        <div class="col-sm-5"></div>
      </div>
      <div class=" row">
        <div class="col-sm-5"></div>
        <div class="col-sm-7 border-radius-12 bg-green padding-20 margin-top-10 margin-bottom-10">
          <p>
            orem ipsum dolor s10it amet, consectetur adipiscing elit, sed do eiusmod tempor?
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-5"></div>
        <div class="col-sm-7 border-radius-12 bg-green padding-20 margin-top-10 margin-bottom-10">
          <p>
            orem ipsum dolor s10it amet, consectetur adipiscing elit, sed do eiusmod tempor?
          </p>
        </div>
      </div>
      <div class=" row ">
        <div class="col-sm-5"></div>
        <div class="col-sm-7 border-radius-12 bg-green padding-20 margin-top-10 margin-bottom-10">
          <p>
            orem ipsum dolor s10it amet, consectetur adipiscing elit, sed do eiusmod tempor?
          </p>
        </div>
      </div>
      <div class="row">
        <div
          class="col-sm-7 border-radius-12 bg-light-grey padding-20 margin-top-10 margin-bottom-10"
        >
          <p>
            orem ipsum dolor s10it amet, consectetur adipiscing elit, sed do eiusmod tempor?
          </p>
        </div>
        <div class="col-sm-5"></div>
      </div>
      <div class="row">
        <div
          class="col-sm-7 border-radius-12 bg-light-grey padding-20 margin-top-10 margin-bottom-10"
        >
          <p>
            orem ipsum dolor s10it amet, consectetur adipiscing elit, sed do eiusmod tempor?
          </p>
        </div>
        <div class="col-sm-5"></div>
      </div>
      <div class="d-flex padding-top-90 padding-bottom-30">
        <div class="max-width-1100">
          <div class="d-flex  bg-white border-color-green border-radius-14 padding-12">
            <input
              class="input font-size-16 border-0 focus-none"
              type="text"
              placeholder="Type your message here"
            />
            <div class="d-flex justify-content-around">
              <i class="fa fa-paperclip font-size-30"></i>
              <div class="dashboard-smile-icon margin-left-10"></div>  
            </div>
          </div>
        </div>
        <div
          class="margin-left-50 bg-green height-50 width-50 padding-2 margin-top-6 padding-top-8 padding-left-6 "
        >
          <div class="dashboard-send-icon "></div>
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
  },

  methods: {
    handleHideMessageBox() {
      this.$modal.hide("messages-box");
    }
  }
};
</script>

<style scoped></style>
