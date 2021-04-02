<template>
  <div>
    <div
      class="container"
      v-for="(obj, index) in helpArticles"
      :key="index"
    >
      <div style="cursor: pointer">
        <i v-if="activeCategory == obj.category" @click="onHideChildren()" class="fa fa-minus"></i>
        <i
          v-if="activeCategory != obj.category"
          @click="onClickCategory(obj.category)"
          class="fa fa-plus"
        ></i>
      </div>
      <div class="container-content">
        <h1 @click="onClickCategory(obj.category)">{{obj.category}}</h1>
        <div
          v-for="(topicObj, index) in obj.topics"
          :key="index"
          :class="{activeTopic: topicObj.topic == selectedTopic}"
          @click="onSelectTopic(obj.category, topicObj.topic, false)"
        >
          <div v-if="activeCategory == obj.category">
            <p>{{topicObj.topic}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import generalHelpArticles from "../../../mockData/generalHelpArticles";
export default {
  props: {
    selectedTopic: "",
    selectedCategory: "",
    helpArticles:""
  },

  data() {
    return {
      // generalHelpArticles,
      activeCategory: "",
      activeTopic: ""
    };
  },

  watch: {
    selectedCategory() {
      this.setActiveCategory();
    }
  },

  methods: {
    setActiveCategory() {
      this.activeCategory = this.selectedCategory;
    },
    onClickCategory(val) {
      if (val == this.activeCategory) {
        this.activeCategory = null;
      } else {
        this.activeCategory = val;
      }
    },

    onHideChildren() {
      this.activeCategory = null;
    },

    onSelectTopic(category, topic, state) {
      event.stopPropagation();
      this.$emit("emitSelectedTopic", { category, topic, state });
    }
  },

  created() {
    this.setActiveCategory();
  }
};
</script>

<style scoped>
.container {
  width: 100%;
  padding-top: 20px;
  display: flex;
}

.container:first-child {
  padding-top: 0px;
}

.activeTopic {
  font-weight: bold;
}

h1 {
  font-size: 18px;
  cursor: pointer;
}

i {
  font-size: 15px;
  padding-top: 2px;
  padding-right: 10px;
}

p {
  padding-top: 10px;
  padding-left: 25px;
}

p:hover {
  cursor: pointer;
  color: #212259;
  text-decoration: underline;
}
</style>