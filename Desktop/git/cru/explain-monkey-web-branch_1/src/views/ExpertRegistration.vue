<template>
  <div>
    <div class="container">
      <div class="bg-aqua-haze padding-bottom-50" >
        <h2 class="text-center padding-top-100">Complete Your Registration</h2>
        <div
          class="exp-reg-intermediate-container  "
        >
          <div class="content-container  exp-reg-inner-container">
            <div class="padding-top-20">
              <RegHeader />
            </div>
            <div class="relative">
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
      </div>
    </div>
  </div>
</template>

<script>
import RegHeader from '../components/expertRegistrationForm/RegHeader';
import PersonalInformation from '../components/expertRegistrationForm/PersonalInformation';
import ProfessionalDetails from '../components/expertRegistrationForm/ProfessionalDetails';
import References from '../components/expertRegistrationForm/References';
import Activation from '../components/expertRegistrationForm/Activation';

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
    '$route.params.displayedComponent': function (to, from) {
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
