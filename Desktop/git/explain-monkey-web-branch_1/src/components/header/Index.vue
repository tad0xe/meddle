<template>
  <div>
    <div class="content-container">
      <div class="header" ref="closeCategories">
        <nav class="navbar white">
          <router-link
            to="/"
            class="navbar-brand cursor-pointer font-size-17 font-size-md-12 router-link"
          >
            <b class="white">EXPLAIN</b><b class="light-green">MONKEY</b>
          </router-link>
          <div class="navbar-collapse white">
            <HeaderContents
              @handleCategories="handleCategories"
              @showLogin="handleShowLogin"
              @showUserSignUp="handleShowUserSignUp"
            />
            <CategoriesContents
              v-if="showCategories"
              class="bg-white black header-cat-content-fixed"
            />
          </div>
          <div
            @click.prevent="onClickShowDropDownList()"
            class="navbar-toggler-icon font-size-24 green"
          >
            <!-- Icon to click and reveal the header contents on mobile-->
            <i class="fa fa-bars"></i>
          </div>
        </nav>
        <div
          ref="closeCategories"
          v-if="showHeaderContentDropDown"
          class="d-flex justify-content-end"
        >
          <div
            class="max-width-250 bg-white black border-radius-10 padding-10 border-1 border-color-grey"
            v-if="currentScreenWidth < '768'"
          >
            <HeaderContents
              @handleCategories="handleCategories"
              @showLogin="handleShowLogin"
              @showUserSignUp="handleShowUserSignUp"
            />
            <CategoriesContents
              v-if="showCategories"
              class="bg-white black header-cat-content-fixed border-1 border-color-light-grey overflow-y"
            />
          </div>
        </div>
      </div>
    </div>
    <modal name="login" height="auto" :adaptive="true" classes="modal">
      <Login
        @close="handleHideLogin"
        @showUserSignUp="handleShowUserSignUp"
        @showForgotPassword="handleShowForgotPassword"
      />
    </modal>
    <modal name="userSignUp" height="auto" :adaptive="true">
      <UserSignUp
        @close="handleHideUserSignUp"
        @showExpertSignUp="handleShowExpertSignUp"
        @showLogin="handleShowLogin"
      />
    </modal>
    <modal name="expertSignUp" height="auto" :adaptive="true">
      <ExpertSignUp @close="handleHideExpertSignUp" />
    </modal>
    <modal name="forgotPassword" height="auto" :adaptive="true">
      <ForgotPassword @close="handleHideForgotPassword" />
    </modal>
  </div>
</template>

<script>
import { mapState } from "vuex";
import HeaderContents from "./HeaderContents";
import CategoriesContents from "./CategoriesContents";
import Login from "../auth/Login";
import UserSignUp from "../auth/UserSignUp";
import ExpertSignUp from "../auth/ExpertSignUp";
import ForgotPassword from "../auth/ForgotPassword";

export default {
  components: {
    HeaderContents,
    CategoriesContents,
    Login,
    UserSignUp,
    ExpertSignUp,
    ForgotPassword,
  },
  data() {
    return {
      showHeaderContentDropDown: false,
      showCategories: false,
    };
  },

  computed: {
    ...mapState({
      currentScreenWidth: (state) => state.utilities.currentScreenWidth,
    }),
  },

  methods: {
    onClickShowDropDownList() {
      this.showHeaderContentDropDown = !this.showHeaderContentDropDown;
    },
    handleCategories() {
      this.showCategories = !this.showCategories;
    },
    documentClick(e) {
      const categories_el = this.$refs.closeCategories;
      const { target } = e;
      if (categories_el !== target && !categories_el.contains(target)) {
        this.showCategories = false;
      }
    },

    handleHideAll() {
      this.showCategories = false;
      this.showHeaderContentDropDown = false;
      this.handleHideLogin();
      this.handleHideUserSignUp();
      this.handleHideExpertSignUp();
      this.handleHideForgotPassword();
    },

    handleShowLogin() {
      this.handleHideAll();
      this.$modal.show("login");
    },
    handleHideLogin() {
      this.$modal.hide("login");
    },

    handleShowUserSignUp() {
      this.handleHideAll();
      this.$modal.show("userSignUp");
    },

    handleHideUserSignUp() {
      this.$modal.hide("userSignUp");
    },

    handleShowExpertSignUp() {
      this.handleHideAll();
      this.$modal.show("expertSignUp");
    },
    handleHideExpertSignUp() {
      this.$modal.hide("expertSignUp");
    },

    handleShowForgotPassword() {
      this.handleHideAll();
      this.$modal.show("forgotPassword");
    },
    handleHideForgotPassword() {
      this.$modal.hide("forgotPassword");
    },
  },

  mounted() {
    document.addEventListener("click", this.documentClick);
  },

  destroyed() {
    // important to clean up!!
    document.removeEventListener("click", this.documentClick);
  },
};
</script>
