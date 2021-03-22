<template>
  <div>
    <VehicleInspectionPrice v-if="inspectionType == 'vehicle'" @quoteSaved="toCompleteBooking"/>
    <HomeInspectionPrice v-if="inspectionType == 'home'" @quoteSaved="toCompleteBooking"/>
  </div>
</template>

<script>
import VehicleInspectionPrice from "./VehicleInspectionPrice.vue";
import HomeInspectionPrice from "./HomeInspectionPrice.vue";

export default {
  components: {
    VehicleInspectionPrice,
    HomeInspectionPrice
  },
  data() {
    return {
      inspectionType: this.$route.params.inspectionType
    };
  },
  methods: {
    toCompleteBooking(event) {
      if (this.inspectionType == event.typeOfInspection) {
        this.$router.push(
          `/${this.$i18n.locale}/quotes/${event.typeOfInspection}-inspection-quote/${event.quoteId}`
        );
      }
    }
  }
};
</script>

<style scoped>
</style>
