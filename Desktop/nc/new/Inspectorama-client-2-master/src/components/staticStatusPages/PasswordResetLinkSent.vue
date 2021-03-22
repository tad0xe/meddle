<template>
  <div class="container">
    <p class="text">A password reset link has been sent. Please check your email.</p>
  </div>
</template>

<script>
export default {
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

.text{
  color: red;
  font-size: 15px
}

</style>

