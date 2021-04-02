<template>
  <div>
    <div class="container">
      <p class="text">A new admin user has been added.</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
  methods: {}
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.container {
  background: #ffffff;
  box-shadow: 2px 2px 20px 1px;
  font-family: sans-serif, Arial, Helvetica;
  padding: 35px;
  border-radius: 5px;
  max-width: 400px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 100px;
  margin-bottom: 180px;
}

.text {
  color: green;
  font-size: 15px;
}
</style>

