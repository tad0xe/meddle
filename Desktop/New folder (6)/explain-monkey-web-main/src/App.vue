<template>
  <div id="app">
    <div class="fixed" :class="{ 'bg-dark-brown': showBackgroundColor }">
      <appHeader />
    </div>
    <router-view />
    <appFooter />
  </div>
</template>

<script>
import Header from "./components/header/Index";
import Footer from "./components/Footer";
export default {
  components: {
    appHeader: Header,
    appFooter: Footer,
  },
  data() {
    return {
      showBackgroundColor: false,
    };
  },
  methods: {
    onScroll() {
      // Get the current scroll position
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;
      // Because of momentum scrolling on mobiles, we shouldn't continue if it is less than zero
      if (currentScrollPosition < 0) {
        return;
      }
      if (currentScrollPosition < 70) {
        this.showBackgroundColor = false;
      } else {
        this.showBackgroundColor = true;
      }
    },

    setScreenWidth(event) {
      this.$store.commit("utilities/SET_CURRENT_SCREEN_WIDTH", event.currentTarget.innerWidth)
    },
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
    window.addEventListener("resize", this.setScreenWidth);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },

  destroyed() {
    window.removeEventListener("resize", this.setScreenWidth);
  },
};
</script>

<style lang="scss">
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }
// #nav {
//   padding: 30px;
//   a {
//     font-weight: bold;
//     color: #2c3e50;
//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
