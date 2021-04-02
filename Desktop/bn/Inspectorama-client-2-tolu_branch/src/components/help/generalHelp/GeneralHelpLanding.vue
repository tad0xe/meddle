<template>
  <div>
    <div class="container">
      <div>
        <h1>{{$t('generalHelpLanding.mainHeading')}}</h1>
      </div>
      <div class="container-top">
        <div class="Search-container">
          <div class="Search-container-content">
            <div class="search-icon" @click="getSearchResults">
              <i class="fas fa-search"></i>
            </div>
            <input
              type="text"
              name="Search"
              :placeholder="$t('generalHelpLanding.searchBarPlaceholder')"
              v-model="q"
              @keyup.enter="getSearchResults"
            />
          </div>
        </div>
      </div>
      <div>
        <h1>{{$t('generalHelpLanding.mainTopic')}}</h1>
      </div>
      <div class="container-bottom">
        <div
          class="container-bottom-content"
          v-for="(topicObj, index) in articleTopicsArray"
          :key="index"
        >
          <h2>{{topicObj.category}}</h2>
          <div v-for="(topic, index) in topicObj.topics" :key="index">
            <p @click="navigateToHelpTopic(topicObj.category, topic)">{{topic}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import generalHelpArticles from "../../../mockData/generalHelpArticles";
let generalHelpArticles;
export default {
  data() {
    return {
      articleTopicsArray: [],
      q: ""
    };
  },

  watch: {
    $route(to, from) {
      this.$router.go();
    }
  },

  methods: {
    navigateToHelpTopic(category, topic) {
      this.$router.push(
        `/${this.$i18n.locale}/help/general/${category}/topic/${topic}`
      );
    },
    getSearchResults() {
      if (this.q == "") {
        return;
      }
      this.$router.push(
        `/${this.$i18n.locale}/help/search-results?q=${this.q}`
      );
    }
  },
  created() {
    generalHelpArticles = this.$t("generalHelpArticles");
    this.articleTopicsArray = generalHelpArticles.map(item => {
      const newItem = {};
      newItem.category = item.category;
      const topics = item.topics.map(elem => {
        return elem.topic;
      });
      newItem.topics = topics;
      return newItem;
    });
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.container {
  font-family: sans-serif, Arial, Helvetica;
  padding: 30px 80px;
  padding-bottom: 60px;
  background-color: white;
  width: 100%;
  display: inline-block;
}

.container-top {
  width: 100%;
  display: block;
}

h1 {
  font-size: 28px;
}

h2 {
  font-size: 24px;
  color: #212259;
}

p {
  font-size: 15px;
  padding-top: 15px;
  display: inline-block;
}

p:hover {
  cursor: pointer;
  color: #212259;
  text-decoration: underline;
}

.Search-container {
  margin-top: 30px;
  margin-bottom: 40px;
  width: 100%;
  background-color: transparent;
  display: block;
}

.Search-container-content {
  padding: 6px 20px;
  width: 100%;
  max-width: 400px;
  border-radius: 30px;
  align-items: center;
  border: 1px solid black;
  background-color: white;
  display: flex;
}

.Search-container-content:focus-within {
  border: 1px solid #212259;
}

.search-icon {
  padding-right: 5px;
  font-size: 16px;
  color: #212259;
  cursor: pointer;
}

.search-icon:hover {
  color: #212259;
}

input {
  font-size: 15px;
  padding: 5px;
  border: none;
  outline: none;
  width: 100%;
}

.container-bottom {
  width: 100%;
  justify-content: space-between;
  flex-wrap: wrap;
  display: flex;
}

.container-bottom-content {
  padding-top: 20px;
  padding-bottom: 20px;
  flex: calc(100% / 3);
}

@media screen and (max-width: 1000px) {
  .container {
    padding: 30px;
  }
}

@media screen and (max-width: 680px) {
  h1 {
    font-size: 26px;
  }

  h2 {
    font-size: 22px;
  }

  .container-bottom {
    padding: 0px;
    flex-direction: column;
  }

  .container-bottom-content {
    padding-top: 20px;
    padding-bottom: 20px;
  }

  @media screen and (max-width: 390px) {
    .Search-container-content {
      padding: 4px 20px;
    }

    h1 {
      font-size: 24px;
    }

    h2 {
      font-size: 20px;
    }
    .container {
      padding: 20px 10px;
    }
  }
}
</style>