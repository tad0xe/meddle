<template>
  <div>
    <h3>
      <font color="#222256">
        <span v-for="(category, index) in article.categories" :key="index">
          {{category}}
          <span v-if="index < article.categories.length-1">|&nbsp;</span>
        </span>
      </font>
    </h3>
    <h3>
      <center>
        <h5>{{article.title}} By {{article.author}}, {{article.createdAt | formatDate}}</h5>
      </center>
    </h3>
    <div class="row">
      <div class="column" v-if="article.mainPhotoDataUrlObj">
        <center>
          <img :src="article.mainPhotoDataUrlObj.dataUrl" />
        </center>
      </div>
    </div>

    <div class="row">
      <div class="column" v-html="article.body">
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      id: this.$route.params.id,
      article: {}
    };
  },
  created() {
    axios
      .get(`/blog_posts/getArticle/${this.id}`)
      .then(res => {
        console.log(res.data);
        this.article = res.data;
      })
      .catch(error => {
        console.log(error.response);
      });
  }
};
</script>
<style scoped>
* {
  box-sizing: border-box;
}

/* Create three equal columns that floats next to each other */
.column {
  float: left;
  width: 100%;
  padding: 10px;
  margin: 5px;
}

small {
  color: #222256;
}
h5 {
  color: #222256;
}
img {
  max-width: 100%;
  height: auto;
}
/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

@media screen and (max-width: 800px) {
  .column {
    width: 100%;
  }
}
</style>
