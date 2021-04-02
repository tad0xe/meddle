<template>
  <div>
    <PropertyDetailsForm :isEditing="true" />
  </div>
</template>

<script>
import PropertyDetailsForm from "./useableComponents/PropertyDetailsForm";
export default {
  // name: "EditPropertyListing",
  components: {
    PropertyDetailsForm
  },
  data() {
    return {};
  },

  methods: {},
};
</script>

<style scoped>
</style>
