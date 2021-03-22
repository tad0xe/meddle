<template>
  <div>
    <div class="container">
      <div class="sequence-title">
        <span>
          <router-link to="/help" tag="div">{{$t('generic.help')}}</router-link>
        </span>
        <i class="fa fa-angle-right"></i>
        <span>
          <router-link :to="linkToLandingPage" tag="div">{{userType | toCapitalizeFirstLetter}}</router-link>
        </span>
        <i class="fa fa-angle-right"></i>
        <span>{{selectedCategory}}</span>
      </div>

      <div class="container-content">
        <div :class="{backdrop: activeState}">
          <div v-if="!activeState" class="angle left-angle" @click="activeState=!activeState">
            <i class="fa fa-angle-right"></i>
          </div>
          <transition name="slide" appear>
            <div class="container-content-left" v-if="activeState">
              <div class="angle" @click="activeState=!activeState">
                <i v-if="activeState" class="fa fa-angle-left"></i>
              </div>
              <div class="container-inner-content-left">
                <HelpTopicsTemplate
                  :helpArticles="helpArticles"
                  :selectedCategory="selectedCategory"
                  @emitSelectedTopic="onSelectTopic"
                ></HelpTopicsTemplate>
              </div>
            </div>
          </transition>
        </div>
        <div class="container-content-right">
          <div v-for="(articleObj, index) in articleList" :key="index">
            <p
              @click="onSelectArticle(articleObj.category, articleObj.topic, articleObj.title)"
            >{{articleObj.title}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HelpTopicsTemplate from "./HelpTopicsTemplate.vue";
// import generalHelpArticles from "../../../mockData/generalHelpArticles";
// import inspectorHelpArticles from "../../../mockData/inspectorHelpArticles";
let generalHelpArticles
let inspectorHelpArticles

export default {
  components: {
    HelpTopicsTemplate
  },

  data() {
    return {
      helpArticles: "",
      userType: this.$route.params.userType,
      activeState: true,
      selectedCategory: this.$route.params.category,
      articleList: []
    };
  },

  watch: {
    $route(to, from) {
      this.$router.go();
    }
  },

  computed: {
    linkToLandingPage() {
      return `/${this.$i18n.locale}/help/${this.userType}-help`;
    }
  },

  methods: {
    onSelectArticle(category, topic, title) {
      this.$router.push(
        `/${this.$i18n.locale}/help/${
          this.userType
        }/${category}/topic/${topic}/article/${encodeURIComponent(title)}`
      );
    },

    onSelectTopic(event) {
      this.selectedCategory = event.category;
      this.$router.push(
        `/${this.$i18n.locale}/help/${this.userType}/${event.category}/topic/${event.topic}`
      );
    }
  },

  created() {
    if (this.userType == "general") {
      this.helpArticles = this.t("generalHelpArticles");;
    } else if (this.userType == "inspector") {
      this.helpArticles = this.t("inspectorHelpArticles");;
    }

    const articleArray = [];
    this.helpArticles.forEach(item => {
      if (item.category == this.selectedCategory) {
        item.topics.forEach(element => {
          element.articles.forEach(article => {
            const articleObj = {};
            articleObj.title = article.title;
            articleObj.category = item.category;
            articleObj.topic = element.topic;
            articleArray.push(articleObj);
          });
        });
      }
    });
    this.articleList = articleArray;
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
  padding-bottom: 50px;
  background-color: white;
  width: 100%;
  display: inline-block;
}

.container,
.container-content-right {
  height: 100%;
  min-height: 350px;
}

.container-content-right {
  width: auto;
}

.container-content-left {
  min-width: 300px;
}

.sequence-title {
  padding-bottom: 40px;
  width: 100%;
  line-height: 30px;
  align-items: center;
  display: flex;
}

.sequence-title span {
  font-size: 16px;
}

.sequence-title span:hover {
  color: darkblue;
  cursor: pointer;
}

.sequence-title i {
  font-size: 18px;
  padding-left: 10px;
  padding-right: 10px;
}

.container-content {
  width: 100%;
  display: flex;
}

p {
  padding-bottom: 20px;
}

p:hover {
  cursor: pointer;
  color: #212259;
  text-decoration: underline;
}

.angle,
.left-angle {
  display: none;
}

@media screen and (max-width: 980px) {
  .container {
    padding: 30px 40px;
  }

  .container-content-left {
    min-width: 260px;
  }
}

@media screen and (max-width: 620px) {
  .container {
    padding: 0px;
    display: block;
  }

  .sequence-title {
    display: none;
  }

  .sequence-title span {
    font-size: 14px;
  }

  .container-content {
    flex-direction: column;
    position: relative;
  }

  .backdrop {
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    position: absolute;
    z-index: 2;
  }

  .container-content-left {
    top: 20px;
    border-radius: 5px;
    background-color: white;
    border: 1px solid #b6b1b1;
    min-width: auto;
    position: absolute;
  }

  .container-inner-content-left {
    padding: 5px 15px;
    padding-bottom: 30px;
  }

  .container-content-right {
    margin-top: 50px;
    padding: 10px 25px;
    padding-bottom: 50px;
    width: 100%;
    position: relative;
    z-index: 1;
  }

  .angle {
    display: block;
  }

  .angle i {
    padding: 2px 5px;
    margin: 2px 5px;
    float: right;
    font-size: 22px;
    color: orangered;
    cursor: pointer;
  }

  .left-angle {
    float: none;
    top: 20px;
    position: absolute;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    background-color: white;
    border: 1px solid #b6b1b1;
    display: block;
  }

  .angle i:hover {
    color: darkred;
  }

  .slide-enter {
    opacity: 0;
  }

  .slide-enter-active {
    animation: slide-in 0.3s ease-out forwards;
  }

  .slide-leave-active {
    animation: slide-out 0.3s ease-out forwards;
  }

  @keyframes slide-in {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0);
    }
  }

  @keyframes slide-out {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-100%);
    }
  }
}
</style>