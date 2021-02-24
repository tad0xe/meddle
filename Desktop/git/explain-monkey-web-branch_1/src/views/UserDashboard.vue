<template>
  <div>
    <div class="d-flex margin-top-40 bg-light-grey">
      <div>
        <UserDashboardVerticalNav :handleNavigation="handleNavigation" />
      </div>
      <div class="stretch-full" v-if="activeSlide == 'home'">
        <UserDashboardHome />
      </div>
      <div class="stretch-full" v-if="activeSlide == 'questions'">
        <UserQuestions />
      </div>
      <div class="stretch-full" v-if="activeSlide == 'messages'">
        <UserMessages />
      </div>
      <div class="stretch-full" v-if="activeSlide == 'wallet'">
        <UserWallet />
      </div>
    </div>
  </div>
</template>

<script>
import UserDashboardVerticalNav from "../components/userDashboard/UserDashboardVerticalNav";
import UserDashboardHome from "../components/userDashboard/UserDashboardHome";
import UserQuestions from "../components/userDashboard/UserQuestions";
import UserMessages from "../components/userDashboard/UserMessages";
import UserWallet from "../components/userDashboard/UserWallet";

export default {
  components: {
    UserDashboardVerticalNav,
    UserDashboardHome,
    UserQuestions,
    UserMessages,
    UserWallet
  },

  data() {
    return {
      activeSlide: "home"
    };
  },

  watch: {},

  methods: {
    handleNavigation(destSlide) {
      this.activeSlide = destSlide;
      this.$router.push(`/dashboard/user/${destSlide}`);
    }
  }
};
</script>

<style scoped></style>
