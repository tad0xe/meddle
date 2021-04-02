<template>
  <div class="body">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <div class="header">
      <a href="#default" class="logo">
        <img src="../assets/images/logo.png">
      </a>
      <div class="header-right">
        <a class="active" href="#">How It Works</a>
        <a href="#">About Us</a>
        <a href="#">Help</a>
        <a href="#">Community</a>
        <a href="#">Contact Us</a>
        <a href="#">Refer An Inspector</a>
      </div>
    </div>
  </div>
</template>
<script>
</script>

<style scoped>

.body {
font-family: Arial, Helvetica, sans-serif
}

.container {
display: inline-block;
  width: 100%
}

.header {
  overflow: hidden;
  background-color: #f1f1f1;
  padding: 20px 10px;
  display: inline-block;
  width: 100% 
}

.header a {
  float: left;
  color: black;
  text-align: center;
  padding: 8px;
  text-decoration: none;
  font-size: 18px;
  line-height: 5px;
  border-radius: 4px;
}

.header a.logo {
  font-size: 25px;
  font-weight: bold;
}

.header a:hover {
  background-color: #ddd;
  color: black;
}

.header a.active {
  background-color: dodgerblue;
  color: white;
}

.header-right {
  float: right;
}

@media screen and (max-width: 500px) {
  .header a {
    float: none;
    display: block;
    text-align: left;
  }

  .header-right {
    float: none;
  }
}

</style>