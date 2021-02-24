<template>
  <div class="padding-left-md-50 padding-top-50">
    <h2 class="padding-top-30 font-size-30 padding-left-16">Messages</h2>

    <div class="row">
      <div class="col-sm-4 ">
        <div class="max-width-570 stretch-full-md">
          <div class="margin-16">
          <div
            class=" d-flex justify-content-between border-radius-22 bg-white padding-14 margin-top-20 margin-bottom-20"
          ><input
              class="input font-size-16 border-0 focus-none"
              type="text"
              placeholder="Search"
            />
           <div class="margin-top-6">
            <i class="fa fa-search opacity-50 font-size-24 "></i>
           </div>
          </div>

          <div class=" border-radius-12 bg-white margin-top-10 margin-bottom-10">
            <div class="d-flex justify-content-around align-items-center padding-8 ">
              <div><div class="dashboard-top-icon"></div></div>
              <div class="">
                <b>Jennifer Louis</b>
                <p>Lorem ipsum dolor sit amet</p>
              </div>
              <div>
                <p>04 Mar</p>
                <span
                  class="d-flex align-items-center justify-content-center width-30 height-30 rounded-circle font-size-15 bg-red white margin-left-4"
                  >2</span
                >
              </div>
            </div>
          </div>
          <div
            @click="handleShowMessageBox"
            class="m border-radius-12 bg-white padding-8 margin-top-10 margin-bottom-10"
          >
            <div class="d-flex justify-content-around align-items-center ">
             <div><div class="dashboard-top-icon"></div></div>
              <div>
                <b>Jennifer Louis</b>
                <p>Lorem ipsum dolor sit amet</p>
              </div>
              <div>
                <p>04 Mar</p>
                <span
                  class="d-flex align-items-center justify-content-center width-30 height-30 rounded-circle font-size-15 bg-red white margin-left-4"
                  >2</span
                >
              </div>
            </div>
          </div>
          <div class=" border-radius-12 bg-white padding-8 margin-top-10 margin-bottom-10">
            <div class="d-flex justify-content-around align-items-center ">
              <div><div class="dashboard-top-icon"></div></div>
              <div >
                <b>Jennifer Louis</b>
                <p>Lorem ipsum dolor sit amet</p>
              </div>
              <div>
                <p>04 Mar</p>
                <span
                  class="d-flex align-items-center justify-content-center width-30 height-30 rounded-circle font-size-15 bg-red white margin-left-4"
                  >2</span
                >
              </div>
            </div>
          </div>
          <div class=" border-radius-12 bg-white padding-8 margin-top-10 margin-bottom-10">
            <div class="d-flex justify-content-around align-items-center ">
              <div><div class="dashboard-top-icon"></div></div>
              <div>
                <b>Jennifer Louis</b>
                <p>Lorem ipsum dolor sit amet</p>
              </div>
              <div>
                <p>04 Mar</p>
                <span
                  class="d-flex align-items-center justify-content-center width-30 height-30 rounded-circle font-size-15 bg-red white margin-left-4"
                  >2</span
                >
              </div>
            </div>
          </div>
          <div class="border-radius-12 bg-white padding-8 margin-top-10 margin-bottom-10">
            <div class="d-flex justify-content-around align-items-center ">
             <div><div class="dashboard-top-icon"></div></div>
              <div>
                <b>Jennifer Louis</b>
                <p>Lorem ipsum dolor sit amet</p>
              </div>
              <div>
                <p>04 Mar</p>
                <span
                  class="d-flex align-items-center justify-content-center width-30 height-30 rounded-circle font-size-15 bg-red white margin-left-4"
                  >2</span
                >
              </div>
            </div>
          </div>
          <div class=" border-radius-12 bg-white padding-8 margin-top-10 margin-bottom-10">
            <div class="d-flex justify-content-around align-items-center ">
                <div><div class="dashboard-top-icon"></div></div>
              <div>
                <b>Jennifer Louis</b>
                <p>Lorem ipsum dolor sit amet</p>
              </div>
              <div>
                <p>04 Mar</p>
                <span
                  class="d-flex align-items-center justify-content-center width-30 height-30 rounded-circle font-size-15 bg-red white margin-left-4"
                  >2</span
                >
              </div>
            </div>
          </div>
          <div class=" border-radius-12 bg-white padding-8 margin-top-10 margin-bottom-10">
            <div class="d-flex justify-content-around align-items-center ">
            <div><div class="dashboard-top-icon"></div></div>
              <div>
                <b>Jennifer Louis</b>
                <p>Lorem ipsum dolor sit amet</p>
              </div>
              <div>
                <p>04 Mar</p>
                <span
                  class="d-flex align-items-center justify-content-center width-30 height-30 rounded-circle font-size-15 bg-red white margin-left-4"
                  >2</span
                >
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
      <div v-if="currentScreenWidth > '566'" class="col-sm-8"><MessagesBox /></div>
    </div>

    <modal name="messages-box" height="auto" shiftY="0.1" :clickToClose="false" :adaptive="true">
      <MessagesBox />
    </modal>
  </div>
</template>

<script>
import { mapState } from "vuex";
import MessagesBox from "./MessagesBox";
export default {
  components: {
    MessagesBox
  },

  computed: {
    ...mapState({
      currentScreenWidth: state => state.utilities.currentScreenWidth
    })
  },

  methods: {
    handleShowMessageBox() {
      if (this.currentScreenWidth < 768) {
        this.$modal.show("messages-box");
      }
    }
  }
};
</script>

<style scoped></style>
