<template>
<div class="bg-light-green">
  <div class="margin-top-80 bg-white content-container border-radius-10">
    <div class="container-750">
    <h2 class="text-center">Complete Your Registration</h2>
    <div><RegHeader /></div>
    <div v-if="activeSlide == 'personal-information'">
      <PersonalInformation :handleNavigation="handleNavigation" />
    </div>
    <div v-if="activeSlide == 'professional-details'">
      <ProfessionalDetails :handleNavigation="handleNavigation" />
    </div>
    <div v-if="activeSlide == 'references'">
      <References :handleNavigation="handleNavigation" />
    </div>
    <div v-if="activeSlide == 'activation'">
      <Activation />
    </div>
    </div>
    </div>
  </div>
</template>

<script>
import RegHeader from "../components/expertRegistrationForm/RegHeader";
import PersonalInformation from "../components/expertRegistrationForm/PersonalInformation";
import ProfessionalDetails from "../components/expertRegistrationForm/ProfessionalDetails";
import References from "../components/expertRegistrationForm/References";
import Activation from "../components/expertRegistrationForm/Activation";

export default {
  components: {
    RegHeader,
    PersonalInformation,
    ProfessionalDetails,
    References,
    Activation,
  },

  data() {
    return {
      activeSlide: this.$route.params.displayedComponent,
    };
  },

  watch: {
    "$route.params.displayedComponent"(to, from) {
      this.activeSlide = to;
    },
  },

  methods: {
    handleNavigation(destSlide) {
      this.activeSlide = destSlide;
      this.$router.push(`/expert-registration/${destSlide}`);
    },
  },
};
</script>

<style scoped></style>
