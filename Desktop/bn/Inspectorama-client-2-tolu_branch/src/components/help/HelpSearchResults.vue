<template>
  <div>
    <div class="container">
      <div class="search-container">
        <div class="search-container-content">
          <div class="search-icon" @click="getSearchResults">
            <i class="fas fa-search"></i>
          </div>
          <input
            type="text"
            name="search"
            :placeholder="$t('helpSearchResults.searchBarPlaceholder')"
            v-model="q"
            @keyup.enter="getSearchResults"
          />
        </div>
      </div>
      <div class="container-content">
        <h1>
          <span>{{articleSearchResults.length}}</span>
          <span>{{$t('helpSearchResults.searchBarPlaceholder')}} "{{query}}"</span>
        </h1>
        <div v-for="(articleObj, index) in articleSearchResults" :key="index">
          <p @click="onSelectArticle(articleObj)">{{articleObj.title}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import generalHelpArticles from "../../mockData/generalHelpArticles";
// import inspectorHelpArticles from "../../mockData/inspectorHelpArticles";

import { getArticleSearchResults } from "../../utility";
export default {
  data() {
    return {
      articleSearchResults: [],
      query: this.$route.query.q,
      q: ""
    };
  },

  watch: {
    $route(to, from) {
      this.$router.go();
    }
  },

  methods: {
    getArticleSearchResults(query, generalHelpArticles, inspectorHelpArticles) {
      const searchResultsArray = [];
      generalHelpArticles.map(item => {
        item.topics.forEach(element => {
          element.articles.forEach(article => {
            if (article.title.includes(query)) {
              const articleObj = {};
              articleObj.title = article.title;
              articleObj.topic = element.topic;
              articleObj.category = item.category;
              articleObj.userType = "general";
              searchResultsArray.push(articleObj);
            }
          });
        });
      });
      inspectorHelpArticles.map(item => {
        item.topics.forEach(element => {
          element.articles.forEach(article => {
            if (article.title.includes(query)) {
              const articleObj = {};
              articleObj.title = article.title;
              articleObj.topic = element.topic;
              articleObj.category = item.category;
              articleObj.userType = "inspector";
              searchResultsArray.push(articleObj);
            }
          });
        });
      });
      return searchResultsArray;
    },

    getSearchResults() {
      this.articleSearchResults = [];
      //Change the query parameter in the current url
      this.$router.push({
        query: { q: this.q }
      });

      if (this.q == "") {
        return;
      }

      this.articleSearchResults = this.getArticleSearchResults(
        this.q,
        this.$t("generalHelpArticles"),
        this.$t("inspectorHelpArticles")
      );
    },

    onSelectArticle(articleObj) {
      this.$router.push(
        `/${this.$i18n.locale}/help/${articleObj.userType}/${
          articleObj.category
        }/topic/${articleObj.topic}/article/${encodeURIComponent(
          articleObj.title
        )}`
      );
    }
  },

  created() {
    this.articleSearchResults = this.getArticleSearchResults(
      this.query,
      generalHelpArticles,
      inspectorHelpArticles
    );
  }
};
</script>
<style  lang="scss" scoped >
* {
  box-sizing: border-box;
}

.container {
  font-family: sans-serif, Arial, Helvetica;
  padding: 30px 80px;
  padding-bottom: 80px;
  background-color: white;
  width: 100%;
  align-items: center;
  flex-direction: column;
  display: flex;
}

.container-content {
  width: auto;
  display: block;
}

h1 {
  font-size: 21px;
  padding-bottom: 10px;
}

p {
  font-size: 15px;
  padding-top: 15px;
}

p:hover {
  cursor: pointer;
  color: $dark-blue;
  text-decoration: underline;
}

.search-container {
  margin-top: 30px;
  margin-bottom: 30px;
  width: 100%;
  justify-content: center;
  display: flex;
}

.search-container-content {
  padding: 6px 20px;
  width: 100%;
  max-width: 400px;
  border-radius: 30px;
  align-items: center;
  border: 1px solid black;
  background-color: white;
  display: flex;
}

.search-container-content:focus-within {
  border: 1px solid $dark-blue;
}

.search-icon {
  padding-right: 5px;
  font-size: 16px;
  color: green;
  cursor: pointer;
}

.search-icon:hover {
  color: darkgreen;
}

input {
  font-size: 15px;
  padding: 5px;
  border: none;
  outline: none;
  width: 100%;
}

@media screen and (max-width: 390px) {
  .container {
    padding: 20px 10px;
    padding-bottom: 40px;
  }

  .search-container {
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .search-container-content {
    padding: 4px 20px;
  }

  h1 {
    font-size: 20px;
    padding-bottom: 5px;
  }
}
</style>