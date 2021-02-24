<template>
  <div
    v-if="currentScreenWidth > '768'"
    class="dashboard-sidebar margin-top-70 padding-20 bg-white"
  >
    <div class="d-flex flex-column align-items-center" @click="handleNavigation('home')">
      <div class="dashboard-home-icon margin-left-10"></div>
      <p class="font-size-12 bg-blue">Home</p>
    </div>
    <br />
    <br />
    <div
      class="d-flex flex-column align-items-center hidden-sm"
      @click="handleNavigation('questions')"
    >
      <div class="dashboard-question-icon margin-left-8"></div>
      <p class="font-size-12">My Questions</p>
    </div>
    <br />
    <br />
    <div class="d-flex flex-column align-items-center" @click="handleNavigation('messages')">
      <div class="dashboard-message-icon margin-left-6"></div>
      <p class="font-size-12">Messages</p>
    </div>
    <br />
    <br />
    <div class="d-flex flex-column align-items-center" @click="handleNavigation('wallet')">
      <div class="dashboard-wallet-icon"></div>
      <p class="font-size-12">Wallet</p>
    </div>
    <br />
    <br />
    <div class="d-flex flex-column align-items-center">
      <div class="dashboard-settings-icon margin-left-6"></div>
      <p class="font-size-12">Settings</p>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: ["handleNavigation"],
  computed: {
    ...mapState({
      currentScreenWidth: state => state.utilities.currentScreenWidth
    })
  },

  data() {
    return {};
  },

  methods: {}
};
</script>

<style scoped></style>
