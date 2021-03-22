<template>
  <div>
    <div class="container">
      <p
        class="text"
      >Should there be an admin account associated with the email then a password reset link will be sent to you.</p>
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
  max-width: 600px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 100px;
  margin-bottom: 180px;
}

.text {
  color: green;
  font-size: 17px;
}
</style>

