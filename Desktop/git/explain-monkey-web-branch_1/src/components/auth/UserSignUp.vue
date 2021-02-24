<template>
  <div>
    <form class="modal">
      <div class="d-flex align-items-center">
        <h1 class="flex-grow-1 font-size-24">Sign Up</h1>
        <div class="modal-close-icon" @click="handleClose">
          <i class="fa fa-close"></i>
        </div>
      </div>
      <div class="grey" @click="handleShowExpertSignUp">
        Or <span>sign up as an expert</span>
      </div>
      <br />
      <div>
        <SocialLogin />
      </div>
      <br />
      <div class="horizontal-line">
        <span>Or</span>
      </div>
      <br />
      <div
        class="d-flex white align-items-center border-radius-10 border-1 border-color-grey"
      >
        <i
          class="fa fa-user border-right-1 grey border-top-left-radius-10 border-bottom-left-radius-10 font-size-22 padding-top-10 padding-bottom-10 padding-left-18 padding-right-16"
        ></i>
        <div class="flex-grow-1 text-center">
          <input
            class="input font-size-16 border-0 focus-none"
            type="text"
            placeholder="First Name"
          />
        </div>
      </div>
      <br />
      <div
        class="d-flex white align-items-center border-radius-10 border-1 border-color-grey"
      >
        <i
          class="fa fa-user border-right-1 grey border-top-left-radius-10 border-bottom-left-radius-10 font-size-22 padding-top-10 padding-bottom-10 padding-left-18 padding-right-16"
        ></i>
        <div class="flex-grow-1 text-center">
          <input
            class="input font-size-16 border-0 focus-none"
            type="text"
            placeholder="Last Name"
          />
        </div>
      </div>
      <br/>
      <div
        class="d-flex white align-items-center border-radius-10 border-1 border-color-grey"
      >
        <i
          class="fa fa-user border-right-1 grey border-top-left-radius-10 border-bottom-left-radius-10 font-size-22 padding-top-10 padding-bottom-10 padding-left-18 padding-right-16"
        ></i>
        <div class="flex-grow-1 text-center">
          <input
            class="input font-size-16 border-0 focus-none"
            type="text"
            placeholder="E-mail Address"
          />
        </div>
      </div>
      <br />
      <div
        class="d-flex white align-items-center border-radius-10 border-1 border-color-grey"
      >
        <i
          class="fas fa-key border-right-1 grey border-top-left-radius-10 border-bottom-left-radius-10 font-size-19 padding-top-10 padding-bottom-10 padding-left-18 padding-right-16"
        ></i>
        <div class="flex-grow-1 text-center">
          <input
            class="input font-size-16 border-0 focus-none"
            type="password"
            placeholder="Create Password"
          />
        </div>
        <i class="fas fa-eye-slash grey margin-right-14"></i>
      </div>
      <br />
      <div
        class="d-flex white align-items-center border-radius-10 border-1 border-color-grey"
      >
        <i
          class="fas fa-key border-right-1 grey border-top-left-radius-10 border-bottom-left-radius-10 font-size-19 padding-top-10 padding-bottom-10 padding-left-18 padding-right-16"
        ></i>
        <div class="flex-grow-1 text-center">
          <input
            class="input font-size-16 border-0 focus-none"
            type="password"
            placeholder="Confirm Password"
          />
        </div>
        <i class="fas fa-eye-slash grey margin-right-14"></i>
      </div>
      <br />
      <div
        class="d-flex justify-content-center padding-top-20 padding-bottom-20"
      >
        <button
          class="btn bg-black white font-size-16 padding-8 max-width-250 border-radius-10"
          type="submit"
        >
          Log In
        </button>
      </div>
      <div class="horizontal-line" />
      <div class="d-flex padding-top-10">
        <span class="grey">Already have an account?</span>&nbsp;
        <b @click="handleShowLogin">Sign In</b>
      </div>
    </form>
  </div>
</template>

<script>
import SocialLogin from './SocialLogin';

export default {
  components: {
    SocialLogin,
  },
  methods: {
    handleClose() {
      this.$emit('close');
    },
    handleShowExpertSignUp() {
      this.$emit('showExpertSignUp');
    },
    handleShowLogin() {
      this.$emit('showLogin');
    },
  },
};
</script>

<style scoped></style>
