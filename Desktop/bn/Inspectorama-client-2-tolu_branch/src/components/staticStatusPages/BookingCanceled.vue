<template>
  <div class="container">
    <p class="text">
      You have canceled your booking.
    </p>
    <!-- <router-link to="/account/orders"> -->
      <button type="button">Back to quote</button>
    <!-- </router-link> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      orderId: this.$route.params.orderId
    };
  },
  components: {},
  methods: {
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
  color: black;
}

.container {
  background: #ffffff;
  box-shadow: 2px 2px 20px 1px;
  font-family: sans-serif, Arial, Helvetica;
  padding: 35px;
  max-width: 400px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 100px;
  margin-bottom: 180px;
}

.text {
  font-size: 15px;
}
</style>

