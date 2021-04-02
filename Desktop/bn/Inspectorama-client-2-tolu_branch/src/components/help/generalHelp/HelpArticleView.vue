<template>
  <div>
    <div class="container">
      <div class="sequence-tittle">
        <span>
          <router-link to="/help" tag="div">{{$t('generic.help')}}</router-link>
        </span>
        <i class="fa fa-angle-right"></i>
        <span>
          <router-link :to="linkToLandingPage" tag="div">{{userType | toCapitalizeFirstLetter}}</router-link>
        </span>
        <i class="fa fa-angle-right"></i>
        <span>
          <router-link :to="linkToCategoryArticles" tag="div">{{selectedCategory}}</router-link>
        </span>
        <i class="fa fa-angle-right"></i>
        <span>
          <router-link :to="linkToTopic" tag="div">{{selectedTopic}}</router-link>
        </span>
        <i class="fa fa-angle-right"></i>
        <span>{{selectedTitle}}</span>
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
                  :selectedTopic="selectedTopic"
                  @emitSelectedTopic="onSelectTopic"
                ></HelpTopicsTemplate>
              </div>
            </div>
          </transition>
        </div>
        <div class="container-content-right">
          <h1>{{selectedTitle}}</h1>
          <div>
            <htmlBodyTemplate style='line-height: 30px' :is="renderBodyHtml"></htmlBodyTemplate>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import HelpTopicsTemplate from "./HelpTopicsTemplate.vue";

export default {
  components: {
    HelpTopicsTemplate,
    htmlBodyTemplate: `<html-component></html-component>`
  },
  data() {
    return {
      helpArticles: "",
      activeState: true,
      userType: this.$route.params.userType,
      selectedCategory: this.$route.params.category,
      selectedTopic: this.$route.params.helpTopic,
      selectedTitle: this.$route.params.title,
      bodyOfArticle: ""
    };
  },
  
  watch: {
    $route() {
      this.$router.go();
    }
  },

  computed: {
    linkToLandingPage() {
     return `/${this.$i18n.locale}/help/${this.userType}-help`

    },
    linkToTopic() {
      return `/${this.$i18n.locale}/help/${this.userType}/${this.selectedCategory}/topic/${this.selectedTopic}`;
    },
    linkToCategoryArticles() {
      return `/${this.$i18n.locale}/help/${this.userType}/${this.selectedCategory}`;
    },
    renderBodyHtml() {
      return {
        template: this.bodyOfArticle
      };
    }
  },
  methods: {
    windowResize() {
      if (window.innerWidth <= 620) {
        this.activeState = false;
      } else {
        this.activeState = true;
      }
    },

    onSelectTopic(event) {
      if (window.innerWidth <= 620) {
        this.activeState = event.state;
      }
      this.selectedTopic = event.topic;
      this.selectedCategory = event.category;
      this.$router.push(
        `/${this.$i18n.locale}/help/${this.userType}/${event.category}/topic/${event.topic}`
      );
    },

    setArticle() {
      this.helpArticles.forEach(item => {
        item.topics.forEach(element => {
          if (element.topic == this.selectedTopic) {
            element.articles.forEach(article => {
              if (article.title == this.selectedTitle) {
                this.bodyOfArticle = article.body;
              }
            });
          }
        });
      })
      console.log(this.bodyOfArticle)
    }
  },

  created() {
    this.windowResize();
    window.addEventListener("resize", this.windowResize);

    if (this.userType == "general") {
      this.helpArticles = this.$t("generalHelpArticles");
    } else if (this.userType == "inspector") {
      this.helpArticles = this.$t("inspectorHelpArticles");
    }

    this.setArticle();
  },

  beforeDestroy() {
    window.removeEventListener("resize", this.windowResize);
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

.sequence-tittle {
  padding-bottom: 40px;
  width: 100%;
  line-height: 30px;
  align-items: center;
  display: flex;
}

.sequence-tittle span {
  font-size: 14px;
}

.sequence-tittle span:hover {
  color: darkblue;
  cursor: pointer;
}

.sequence-tittle i {
  font-size: 18px;
  padding-left: 10px;
  padding-right: 10px;
}

.container-content {
  width: 100%;
  display: flex;
}

h1 {
  font-size: 22px;
  padding-bottom: 15px;
}

p {
  padding-bottom: 20px;
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

  .sequence-tittle {
    display: none;
  }

  .sequence-tittle span {
    font-size: 15px;
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