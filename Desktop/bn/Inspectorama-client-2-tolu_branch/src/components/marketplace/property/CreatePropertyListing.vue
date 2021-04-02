<template>
  <div>
    <PropertyDetailsForm :isEditing="false" />
  </div>
</template>

<script>
import PropertyDetailsForm from "./useableComponents/PropertyDetailsForm";
export default {
  name: "EditPropertyListing",
  components: {
    PropertyDetailsForm,
  },
  data() {
    return {};
  },

  methods: {},
};
</script>

<style scoped>
</style>
