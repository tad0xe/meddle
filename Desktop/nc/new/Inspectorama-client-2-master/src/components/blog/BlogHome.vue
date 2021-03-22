<template>
  <div>
    <div>
      <h1 class="tag-heading">
        <router-link to="/blog/inspector">Inspectors</router-link>
      </h1>
      <div class="row">
        <div class="column">
          <img src="@/assets/images/blog/blog.png" />
          <h3>Vehicle Inspectors</h3>
        </div>
        <div class="column">
          <img src="@/assets/images/blog/blog.png" />
          <h3>Home Inspectors</h3>
        </div>
        <div class="column">
          <img src="@/assets/images/blog/blog.png" />
          <h3>Textile Inspectors</h3>
        </div>
        <div class="column">
          <img src="@/assets/images/blog/blog.png" />
          <h3>Oil & Gas Inspectors</h3>
        </div>
      </div>
    </div>
    <div>
      <h2 class="tag-heading">
        <a @click="onClickCategory('How To')">How -To</a>
      </h2>
      <div class="row">
        <div class="column" v-for="(summary, index) in howToCategory" :key="index">
          <img v-if="!summary.picture" src="@/assets/images/blog/blog.png" />
          <img v-if="summary.picture" :src="summary.picture.dataUrl" />
          <span
            v-for="(category, index) in summary.categories"
            :key="index"
            @click="onClickArticle(summary)"
          >
            <small @click="onClickCategory(category)">{{category}}</small>
            <span v-if="index < summary.categories.length-1">|&nbsp;</span>
          </span>
          <h3>{{summary.title}}</h3>
          <h5>{{summary.createdAt | formatDate}}</h5>
        </div>
      </div>
    </div>
    <div>
      <h2 class="tag-heading">
        <a @click="onClickCategory('Press')">Press</a>
      </h2>
      <div class="row">
        <div
          class="column"
          v-for="(summary, index) in pressCategory"
          :key="index"
          @click="onClickArticle(summary)"
        >
          <img v-if="!summary.picture" src="@/assets/images/blog/blog.png" />
          <img v-if="summary.picture" :src="summary.picture.dataUrl" />
          <span v-for="(category, index) in summary.categories" :key="index">
            <small @click="onClickCategory(category)">{{category}}</small>
            <span v-if="index < summary.categories.length-1">|&nbsp;</span>
          </span>
          <h3>{{summary.title}}</h3>
          <h5>{{summary.createdAt | formatDate}}</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      howToCategory: "",
      pressCategory: ""
    }
  },
  methods: {
    onClickArticle(summary) {
      this.$router.push(`/blog/article/${summary._id}`);
    },
    onClickCategory(category) {
      event.stopPropagation()

      this.$router.push(`/blog/articles-in-category/?category=${category}`);
    }
  },
  mounted() {
    axios
      .get("/blog_posts/allArticleSummaries")
      .then(res => {
        // console.log(res.data)
        this.howToCategory = res.data.howToCategory;
        this.pressCategory = res.data.pressCategory;
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
  width: 24%;
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

.tag-heading a {
  text-decoration: none;
  color: navy;
}

@media screen and (max-width: 800px) {
  .column {
    width: 100%;
  }
}
</style>
