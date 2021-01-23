<template>
  <div>
    <RegHeader />
    <PersonalInformation />
    <ProfessionalDetails />
    <References />
    <Activation />
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

  methods: {},
};
</script>

<style scoped></style>
