<template>
  <div>
    <VehicleDetails :isEditing="true" />
  </div>
</template>

<script>
import VehicleDetails from "./useableComponents/VehicleDetails";
export default {
  name: "EditVehicleListing",
  components: {
    VehicleDetails,
  },
  data() {
    return {};
  },

  methods: {},
};
</script>

<style scoped>
</style>
