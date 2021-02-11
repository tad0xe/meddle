<template>
<div class="content-container ">

   <div class="d-flex justify-content-end justify-content-between  ">
     <div v-if="cuurentScreenWidth > '768'"></div>
   <div class="margin-bottom-8 padding-top-30 " v-if="cuurentScreenWidth < '768'" >
  <div class="nav-icon "></div>
  <div class="margin-top-2 nav-icon "></div>
  <div class="nav-icon margin-top-2"></div>
  </div> 
  <div class="d-flex">
    <div class="margin-top-36 notification"></div>
    <div>
    <h2 class="padding-left-20 padding-top-30 " v-if="cuurentScreenWidth > '768'" >Hello, Nicholas!</h2>
    </div>
  </div>
  
  </div>
<div class="row d-flex justify-content-between  padding-top-70 ">

  <div class="d-flex ">
      <div v-if="cuurentScreenWidth < '768'">
  
<button class="  bg-white  border-radius-8 border-color-green padding-10 green border-1 ">See Recent Activities</button>
  </div>
  </div>
  <div class="row">
  <div class="col-sm-8">
  <div class=" border-radius-10 bg-green padding-right-150  ">
  
      <div class=" padding-left-20 padding-right-50">
    <h3>Ask a Question</h3>
    <br>
    <br>
    <div class="d-flex ">
      <h4 class="padding-top-10 margin-right-4">Select Category</h4>
           <select class=" form-control">
            <option>Select</option>
            <option></option>
              </select>
         
    </div>
    <br>
    <div class="d-flex col-sm-12">
                <h4 class="padding-right-30">Select Field</h4>
           <select class="form-control">
            <option>Select</option>
            <option></option>
              </select>
    </div>
    <br>
    <br>
<textarea name="" id="" cols="40" rows="15"></textarea>
<br>
<div class="d-flex justify-content-end ">
<button class="margin-top-10 margin-bottom-10  border-0 border-radius-6  padding-10 bg-white">Submit</button>
</div>
  </div>
    </div>
  </div>
  <div class=" col-sm-4 padding-left-20 float-end">
    <div class="d-flex">
      <div class="box bg-green font-size-9 font-size-md-14 font-size-lg-16 padding-20">10 </div>
<div class="box margin-left-20 padding-20 bg-green">10</div>
<div class="box margin-left-20 padding-20 bg-green">10</div>
<div class="box margin-left-20 padding-20 bg-green">10</div>
<div class="box bg-green padding-20 margin-left-20">10</div>
    </div>

    <div class="col-sm-4"></div>
<div class="font-size-9 font-size-md-14 font-size-sm-16 font-size-lg-16 justify-content-center ">
  <h2>My Recent Questions</h2>
  <div class="col-sm-12 bg-black padding-right-14">
<h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor?</h4></div>
  <div>orem ipsum dolor sit ame10t, consectetur adipiscing elit, sed do eiusmod tempor?</div>
  <div>orem ipsum dolor s10it amet, consectetur adipiscing elit, sed do eiusmod tempor?</div>
  <div>orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor?</div>
  
  </div>
    </div>
  </div>
</div>
<div class="d-flex margin-top-20 margin-left-30 " v-if="cuurentScreenWidth > '768'">
<div>
  <h4>RECENT NOTIFICATIONS</h4>
  <div>
    <h4>james Replied</h4>
    <p>22 secs ago</p>
  </div>
  <div>
    <h4>james Replied</h4>
    <p>22 secs ago</p>
  </div>
  <div>
    <h4>james Replied</h4>
    <p>22 secs ago</p>
  </div>
  
</div>
<div class="padding-left-30">
  <h4>RECENT NOTIFICATIONS</h4>
  <div>
    <h4>james Replied</h4>
    <p>22 secs ago</p>
  </div>
  <div>
    <h4>james Replied</h4>
    <p>22 secs ago</p>
  </div>
  <div>
    <h4>james Replied</h4>
    <p>22 secs ago</p>
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
      cuurentScreenWidth: (state) => state.utilities.currentScreenWidth,
    }),
  },


 
}
</script>

<style scoped></style>
