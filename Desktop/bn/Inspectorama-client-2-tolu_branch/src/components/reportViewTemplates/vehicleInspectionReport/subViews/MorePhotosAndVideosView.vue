<template>
  <div>
    <div class="container">
      <div class="sub-container">
        <div class="sub-container__title">Body</div>
        <div class="sub-container-body">
          <div class="sub-container-body__title">Front</div>
          <div class="sub-container-body__content">
            <div class="sub-container-body__sub-content-rating"></div>
            <div class="sub-container-body__sub-content-comments"></div>
            <div class="sub-container-body__sub-content-photo"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.container {
  display: inline-block;
  font-family: sans-serif, Arial, Helvetica;
  width: 100%;
}
.sub-container {
  font-size: 12px;
  background-color: white;
  width: 100%;
  display: inline-block;
}
.sub-container__title {
  font-size: 15px;
  width: 100%;
}
.sub-container-body__content {
  width: 100%;
}
.sub-container-body__sub-content-rating {
  width: 15%;
  float: left;
}
.sub-container-body__sub-content-comments {
  width: 40%;
  float: left;
}
.sub-container-body__sub-content-photo {
  width: 40%;
  float: left;
}
</style>