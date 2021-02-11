<template>
  <div v-if="cuurentScreenWidth > '768'" class="sidebar  text-center container-100 margin-top-50 padding-20 bg-green">
    <div @click="handleNavigation('home')">
    <div class=" home margin-left-10"></div>
      Home</div>
    <br>
    <br>
    <div class="hidden-sm" @click="handleNavigation('questions')">
       <div class=" question margin-left-4"></div>
      My Questions</div>
    <br>
    <br>
    <div @click="handleNavigation('messages')">
       <div class=" message margin-left-10"></div>
      Messages</div>
    <br>
    <br>
    <div @click="handleNavigation('wallet')">
      <div class="wallet margin-left-4"></div>
      Wallet</div>
    <br>
    <br>
    <div>
       <div class=" settings margin-left-10"></div>
      Settings</div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  props:["handleNavigation"],
   computed: {
    ...mapState({
      cuurentScreenWidth: (state) => state.utilities.currentScreenWidth,
    }),
  },


  data(){
    return{

    }
  },

  methods:{

  }
};
</script>

<style scoped></style>
