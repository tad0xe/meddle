<template>
  <div>
    <div class="body">
      <div class="container">
        <p>You have successfully created your order.</p>
        <router-link to="/account/orders">
          <button class="myorders-btn" type="button">My orders</button>
        </router-link>
        <footer></footer>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      orderId: this.$route.params.orderId
    };
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.body {
  padding: 10px;
  font-family: sans-serif, Arial, Helvetica;
}

.container {
  background: #ffffff;
  box-shadow: 2px 2px 20px 1px;
  padding: 35px;
  padding-bottom: 20px;
  max-width: 400px; 
  border-radius: 5px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 100px;
  margin-bottom: 180px;
}

footer {
  border-bottom: 1.6px solid #eeeeee;
}

p {
  color: darkgreen;
  font-size: 15px;
}

.myorders-btn {
  color: white;
  font-size: 13px;
  padding: 5px 10px;
  margin-top: 20px;
  margin-bottom: 20px;
  border: none;
  outline: none;
  cursor: pointer;
  text-align: center;
  border-radius: 5px;
  font-weight: bold;
  background-color: rgb(2, 167, 240);
  border: 1.6px solid rgb(2, 167, 240);
  opacity: 0.95;
}

.myorders-btn:hover {
  opacity: 1;
}
</style>

