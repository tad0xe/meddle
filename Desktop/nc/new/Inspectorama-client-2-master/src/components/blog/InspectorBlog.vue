<template>
  <div>
    <h1>Inspectors Community</h1>
    <div>
      <h2>Vehicle Inspectors</h2>
      <div class="row">
        <div class="column" v-for="(summary, index) in vehicleInspectorCategory" :key="index">
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
          <h5>{{summary.createdAt}}</h5>
        </div>
      </div>
    </div>
    <div>
      <h2>Home Inspectors</h2>
      <div class="row">
        <div class="column" v-for="(summary, index) in homeInspectorCategory" :key="index">
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
          <h5>{{summary.createdAt}}</h5>
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
      vehicleInspectorCategory: "",
      homeInspectorCategory: ""
    };
  },
  methods: {
    onClickArticle(summary) {
      this.$router.push(`/blog/article/${summary._id}`);
    },
    onClickCategory(category) {
      event.stopPropagation();
      this.$router.push(`/blog/articles-in-category/?category=${category}`);
    }
  },
  created() {
    axios
      .get("/blog_posts/allArticleSummaries")
      .then(res => {
        this.vehicleInspectorCategory = res.data.vehicleInspectorCategory;
        this.homeInspectorCategory = res.data.homeInspectorCategory;
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
small {
  color: #222256;
}
h5 {
  color: #222256;
}

@media screen and (max-width: 800px) {
  .column {
    width: 100%;
  }
}
</style>
