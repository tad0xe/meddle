<template>
  <div>
    <ul class="navbar-nav">
      <li class="nav-item flex-grow-1" @click.prevent="handleCategories()">
        Categories
      </li>
      <li class="nav-item flex-grow-1">Contact</li>

      <li class="nav-item flex-grow-1">
        <router-link class="router-link" to="/experts"
          >Become&nbsp;an&nbsp;Expert</router-link
        >
      </li>
      <li class="nav-item flex-grow-1" @click.prevent="handleClickLogin()">
        Login
      </li>
      <li class="nav-item flex-grow-1">
        <div
          class="btn btn-primary padding-top-4 padding-bottom-4 padding-left-14 padding-right-14 padding-md-16 bg-transparent border-color-green font-size-14"
          @click.prevent="handleClickCreateAccount"
        >
          Create an Account
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  methods: {
    handleCategories() {
      this.$emit("handleCategories");
    },

    handleClickLogin() {
      this.$emit("showLogin");
    },

    handleClickCreateAccount() {
      this.$emit("showUserSignUp");
    },
  },
};
</script>
