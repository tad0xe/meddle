<template>
  <div>
    <div class="container">
      <div class="container-top">
        <div class="container-top-image">
          <img src="../../assets/images/help_main_image.jpg" />
        </div>
        <div class="Search-container">
          <div class="Search-container-content">
            <div class="search-icon" @click="getSearchResults">
              <i class="fas fa-search"></i>
            </div>
            <input
              type="text"
              name="Search"
              :placeholder="$t('help.mainRow.searchBarPlaceholder')"
              v-model="q"
              @keyup.enter="getSearchResults"
            />
          </div>
        </div>
      </div>
      <div class="container-bottom">
        <router-link
          :to="`/${$i18n.locale}/help/general-help`"
          tag="div"
          class="container-bottom-left"
        >
          <div>
            <h1>{{$t('help.generalUsers.title')}}</h1>
            <p>{{$t('help.generalUsers.body')}}</p>
          </div>
        </router-link>
        <router-link
          :to="`/${$i18n.locale}/help/inspector-help`"
          tag="div"
          class="container-bottom-right"
        >
          <div>
            <h1>{{$t('help.inspectors.title')}}</h1>
            <p>{{$t('help.inspectors.body')}}</p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      q: ""
    };
  },
  methods: {
    getSearchResults() {
      if (this.q == "") {
        return;
      }
      this.$router.push(
        `/${this.$i18n.locale}/help/search-results?q=${this.q}`
      );
    }
  }
};
</script>

<style  lang="scss" scoped>
* {
  box-sizing: border-box;
}

.container {
  font-family: sans-serif, Arial, Helvetica;
  background-color: white;
  width: 100%;
  display: inline-block;
}

.container-top {
  width: 100%;
  display: block;
  position: relative;
  height: 360px;
  background-color: grey;
}

.container-top img {
  width: 100%;
  /* max-width: 800px; */
  height: auto;
  height: 360px;
  display: block;
}

.Search-container {
  padding-left: 10px;
  padding-right: 10px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  justify-content: center;
  position: absolute;
  background-color: transparent;
  display: flex;
}

.Search-container-content {
  padding: 6px 20px;
  width: 100%;
  max-width: 450px;
  border-radius: 30px;
  align-items: center;
  border: 1px solid black;
  background-color: white;
  display: flex;
}

.Search-container-content:focus-within {
  border: 1px solid $dark-blue;
}

.search-icon {
  padding-right: 5px;
  font-size: 16px;
  color: $dark-blue;
  cursor: pointer;
}

.search-icon:hover {
  color: $dark-blue;
}

input {
  font-size: 15px;
  padding: 5px;
  border: none;
  outline: none;
  width: 100%;
  background-color: white;
}

input:focus {
  outline: none;
  border: none;
  background-color: white;
}

.container-bottom {
  width: 100%;
  padding-top: 50px;
  padding-bottom: 60px;
  justify-content: center;
  display: flex;
}

.container-bottom h1 {
  font-size: 23px;
  color: $dark-blue;
}

.container-bottom p {
  font-size: 15px;
  padding-top: 15px;
}

.container-bottom-left,
.container-bottom-right {
  background: #ffffff;
  box-shadow: 0.8px 0.8px 10px 1px;
  border-radius: 10px;
  padding: 45px;
  margin-left: 20px;
  margin-right: 20px;
  width: 100%;
  max-width: 400px;
}

.container-bottom-left {
  margin-left: 40px;
  margin-right: 30px;
}

.container-bottom-right {
  margin-left: 30px;
  margin-right: 40px;
}

.container-bottom-left:hover,
.container-bottom-right:hover {
  cursor: pointer;
  background-color: whitesmoke;
}

@media screen and (max-width: 960px) {
  .container-bottom-left,
  .container-bottom-right {
    padding: 30px;
  }
}

@media screen and (max-width: 620px) {
  .container-bottom {
    padding: 50px 30px;
    align-items: center;
    flex-direction: column;
  }

  .container-bottom-left {
    margin-left: 0px;
    margin-right: 0px;
    margin-bottom: 50px;
  }

  .container-bottom-right {
    margin-left: 0px;
    margin-right: 0px;
  }

  .container-bottom p {
    padding-top: 10px;
  }

  @media screen and (max-width: 380px) {
    .Search-container-content {
      padding: 4px 20px;
    }

    .container-bottom {
      padding: 25px 10px;
    }

    .container-bottom-left,
    .container-bottom-right {
      padding: 20px;
    }

    .container-bottom-left {
      margin-bottom: 20px;
    }

    .container-bottom h1 {
      font-size: 20px;
    }

    .container-bottom p {
      padding-top: 8px;
    }
  }
}
</style>