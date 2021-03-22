<template>
  <div class="container">
    <div>
      <h1>
        <strong>
          <center>{{$t("cookiePolicy.title")}}</center>
        </strong>
      </h1> <br>
      <div v-html="$t('cookiePolicy.intro')"></div> <br>
      <div v-html="$t('cookiePolicy.questionsAndAnswersTop')"></div> <br>
      <div v-html="$t('cookiePolicy.mainTable')"></div> <br>
      <div v-html="$t('cookiePolicy.questionsAndAnswersBottom')"></div> <br>
      <div v-html="$t('cookiePolicy.categoryOfUse')"></div>
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
  color: black;
}

.container {
  font-family: sans-serif, Arial, Helvetica;
  padding: 50px;
  padding-left: 300px;
  padding-right: 300px;
  width: 100%;
  display: table;
}
</style>

