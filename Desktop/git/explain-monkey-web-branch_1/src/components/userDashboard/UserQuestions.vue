<template>
  <div>
    <div
      class="padding-top-80 padding-left-md-50 padding-right-md-50"
    >
      <div class="row">
        <div
          class="dashboard-image-icon"
          v-if="currentScreenWidth < '768'"
        ></div>
        <div
          class="d-flex justify-content-between"
          v-if="currentScreenWidth < '768'"
        >
          <div class=""></div>
          <div class=""></div>
          <div class="padding-right-20 max-width-160">
            <select class="form-control border-0 border-radius-green">
              <option>Select</option>
              <option></option>
            </select>
          </div>
        </div>
        <h2 class="padding-left-44 font-size-26" v-if="currentScreenWidth > '768'">My Questions</h2>
        <div class="col-md-8  ">
         <div class="row border-radius-14 padding-10 padding-md-30">
            <div class="col-sm-6">
              <div class="margin-10 padding-10 bg-white border-radius-10">
                <p class="font-size-13">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor?
                </p>
                <div class="padding-top-10 justify-content-between">
                  <span class="font-size-12 green">View reply</span>
                  <span class="float-end">
                       
                    <span class="font-size-12">3 days ago</span> &nbsp;
                    <i class="fa fa-circle font-size-12 red"></i> &nbsp;
                    <span class="font-size-12">Opened</span>
                  </span>
                </div>
              </div>
            </div>

            <div class="col-sm-6">
              <div class="margin-10 padding-10 bg-white border-radius-10">
                <p class="font-size-13">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor?
                </p>
                <div class="padding-top-10 justify-content-between">
                  <span class="font-size-12 green">View reply</span>
                  <span class="float-end">
                        
                    <span class="font-size-12">3 days ago</span>
                   
                    <i class="fa fa-circle font-size-12 red"></i>
                    <span class="font-size-12">Opened</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="row border-radius-14 padding-10 padding-md-30">
            <div class="col-sm-6">
              <div class="margin-10 padding-10 bg-white border-radius-10">
                <p class="font-size-13">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor?
                </p>
                <div class="padding-top-10 justify-content-between">
                  <span class="font-size-12 green">View reply</span>
                  <span class="float-end">
                          <button class="bg-green margin-right-6 btn white border-radius-4 border-0">
                        TOP UP</button
                    
                 
                  >
                    <span class="font-size-12">3 days ago</span> 
                    <i class="fa fa-circle font-size-12 red"></i>
                    <span class="font-size-12">Opened</span>
                  </span>
                </div>
              </div>
            </div>

           <div class="col-sm-6">
              <div class="margin-10 padding-10 bg-white border-radius-10">
                <p class="font-size-13">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor?
                </p>
                <div class="padding-top-10 justify-content-between">
                  <span class="font-size-12 green">View reply</span>
                  <span class="float-end">
                          <button class="bg-green margin-right-6 btn white border-radius-4 border-0">
                        TOP UP</button
                    
                 
                  >
                    <span class="font-size-12">3 days ago</span> 
                    <i class="fa fa-circle font-size-12 red"></i>
                    <span class="font-size-12">Opened</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="row border-radius-14 padding-10 padding-md-30">
            <div class="col-sm-6">
              <div class="margin-10 padding-10 bg-white border-radius-10">
                <p class="font-size-13">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor?
                </p>
                <div class="padding-top-10 justify-content-between">
                  <span class="font-size-12 green">View reply</span>
                  <span class="float-end">
                       
                    <span class="font-size-12">3 days ago</span> &nbsp;
                    <i class="fa fa-circle font-size-12 red"></i> &nbsp;
                    <span class="font-size-12">Opened</span>
                  </span>
                </div>
              </div>
            </div>

            <div class="col-sm-6">
              <div class="margin-10 padding-10 bg-white border-radius-10">
                <p class="font-size-13">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor?
                </p>
                <div class="padding-top-10 justify-content-between">
                  <span class="font-size-12 green">View reply</span>
                  <span class="float-end">
                        
                    <span class="font-size-12">3 days ago</span>
                   
                    <i class="fa fa-circle font-size-12 red"></i>
                    <span class="font-size-12">Opened</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
           <div class="row border-radius-14 padding-10 padding-md-30">
            <div class="col-sm-6">
              <div class="margin-10 padding-10 bg-white border-radius-10">
                <p class="font-size-13">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor?
                </p>
                <div class="padding-top-10 justify-content-between">
                  <span class="font-size-12 green">View reply</span>
                  <span class="float-end">
                       
                    <span class="font-size-12">3 days ago</span> &nbsp;
                    <i class="fa fa-circle font-size-12 red"></i> &nbsp;
                    <span class="font-size-12">Opened</span>
                  </span>
                </div>
              </div>
            </div>

            <div class="col-sm-6">
              <div class="margin-10 padding-10 bg-white border-radius-10">
                <p class="font-size-13">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor?
                </p>
                <div class="padding-top-10 justify-content-between">
                  <span class="font-size-12 green">View reply</span>
                  <span class="float-end">
                        
                    <span class="font-size-12">3 days ago</span>
                   
                    <i class="fa fa-circle font-size-12 red"></i>
                    <span class="font-size-12">Opened</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div
            class="d-flex justify-content-around border-radius-14 padding-10 padding-md-30"
          >
            <div
              class="max-width-1030 stretch-full-md padding-14 bg-white border-radius-10"
            >
              <div
                class="border-radius-14 d-flex align-items-center justify-content-between"
              >
                <div class="d-flex">
                  <span class="round-border border-color-green padding-10">
                    <i class="fa fa-long-arrow-left green font-size-16"></i
                  ></span>
                  <h4 class="padding-top-10 padding-left-20">PREVIOUS</h4>
                </div>
                <div>
                  <span>2</span>
                  <span>3</span>
                  <span>4</span>
                  <span>...</span>
                </div>
                <div class="d-flex">
                  <h4 class="padding-top-10 padding-right-20">NEXT</h4>
                  <span
                    class="round-border border-color-green padding-10 green"
                  >
                    <i class="fa fa-long-arrow-right font-size-16"></i
                  ></span>
                </div>
              </div>
            </div>
          </div>

          <div class="d-flex margin-top-20 margin-bottom-20"></div>
        </div>

        <div class="col-md-4" v-if="currentScreenWidth > '768'">
          <div class="max-width-380 margin-top-30">
            <div class="bg-white border-radius-16 padding-18">
              <div class="d-flex justify-content-between padding-10">
                <div class="d-flex">
                  <i class="fa fa-circle orange font-size-20"></i>
                  <p class="padding-left-26">Pending</p>
                </div>
                <p>(19)</p>
              </div>
              <div class="d-flex justify-content-between padding-10">
                <div class="d-flex">
                  <i class="fa fa-circle green font-size-20"></i>
                  <p class="padding-left-26">Closed</p>
                </div>
                <p>(15)</p>
              </div>
              <div class="d-flex justify-content-between padding-10">
                <div class="d-flex">
                  <i class="fa fa-circle red font-size-20"></i>
                  <p class="padding-left-26">Opened</p>
                </div>
                <p>(10)</p>
              </div>
              <div class="d-flex justify-content-between padding-10">
                <div class="d-flex">
                  <i class="fa fa-circle darkgreen font-size-20"></i>
                  <p class="padding-left-26">Reffered</p>
                </div>
                <p>(5)</p>
              </div>
              <div class="d-flex justify-content-between padding-10">
                <div class="d-flex"><p class="padding-left-48">All</p></div>
                <p>(49)</p>
              </div>
            </div>
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

<style scoped></style>
