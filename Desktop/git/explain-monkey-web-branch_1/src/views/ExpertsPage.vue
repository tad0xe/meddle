<template>
  <div>
    <div class="container">
      <div class="experts-page-top-background-image">
        <div class="experts-page-top-background-image-content">
          <div class="row content-container">
            <div
              class="col-sm-5 d-flex justify-content-end padding-right-0 padding-right-md-20 stretch-full-md"
            >
              <div class="max-width-650 stretch-full-md margin-top-50">
                <h1
                  class="font-size-25 line-height-25 font-size-md-50 line-height-md-50"
                >
                  <b class="white">Become An</b>
                  <b class="light-green">Expert</b>
                  <i class="padding-left-5 fa fa-circle green font-size-8"></i>
                </h1>
                <br />
                <p class="font-size-md-20 white">
                  Lorem ipsum dolor sit amet, consectetur <br />
                  adipiscing elit. Curabitur hendrerit mattis arcu.
                </p>
                <br />
                <br />

                <button
                  class="border-0 border-radius-10 bg-green margin-bottom-20 padding-18 white font-size-15"
                  @click="handleShowExpertSignUp"
                >
                  Sign Up Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="d-flex content-container justify-content-center padding-top-10 padding-top-md-100"
    >
      <div class="max-width-550 text-center">
        <h2>How to become an expert?</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          hendrerit mattis arcu, quis scelerisque nulla faucibus mollis. Ut
          imperdiet, neque at ullamcorper
        </p>
      </div>
    </div>
    <div
      class="row content-container text-center padding-top-10 padding-bottom-10 padding-top-md-100 padding-bottom-md-100"
    >
      <div
        class="col-lg-4 padding-top-20 padding-bottom-20 padding-left-0 padding-right-0 padding-left-md-10 padding-right-md-10"
      >
        <div class="flex-column text-center invert-for-desktop">
          <img
            class="margin-bottom-0 margin-bottom-md-34"
            src="../assets/svg/form.svg"
          />
          <div class="padding-left-10 padding-left-md-0">
            <h2 class="font-size-17 font-size-md-25">1. Create an account</h2>
            <p class="font-size-11 font-size-md-15">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              hendrerit mattis arcu, quis scelerisque nulla faucibus mollis. Ut
              imperdiet, neque at ullamcorper
            </p>
          </div>
        </div>
      </div>
      <div
        class="col-lg-4 padding-top-18 margin-top-6 padding-bottom-20 padding-left-0 padding-right-0 padding-left-md-10 padding-right-md-10"
      >
        <div class="flex-column text-center invert-for-desktop">
          <img
            class="margin-bottom-0 margin-bottom-md-34"
            src="../assets/svg/answer.svg"
          />
          <div class="padding-left-10 padding-left-md-0">
            <h2 class="font-size-17 font-size-md-25">2. Fill information</h2>
            <p class="font-size-11 font-size-md-15">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              hendrerit mattis arcu, quis scelerisque nulla faucibus mollis. Ut
              imperdiet, neque at ullamcorper
            </p>
          </div>
        </div>
      </div>
      <div
        class="col-lg-4 padding-top-20 padding-bottom-20 padding-left-0 padding-right-0 padding-left-md-10 padding-right-md-10"
      >
        <div class="flex-column text-center invert-for-desktop">
          <img
            class="margin-bottom-0 margin-bottom-md-34"
            src="../assets/svg/create.svg"
          />
          <div
            class="padding-left-10 padding-left-md-0 padding-top-14 margin-top-2"
          >
            <h2 class="font-size-17 font-size-md-25">3. Send Answer</h2>
            <p class="font-size-11 font-size-md-15">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              hendrerit mattis arcu, quis scelerisque nulla faucibus mollis. Ut
              imperdiet, neque at ullamcorper
            </p>
          </div>
        </div>
      </div>
    </div>

    <div
      class="bg-light-grey padding-top-10 padding-bottom-20 padding-top-md-30 padding-bottom-md-80"
    >
      <Testimonials />
    </div>
  </div>
</template>

<script>
import Testimonials from '../components/Testimonials';
import ExpertSignUp from '../components/auth/ExpertSignUp';

export default {
  components: {
    Testimonials,
    ExpertSignUp,
  },

  methods: {
    handleShowExpertSignUp() {
      this.$modal.show('expertSignUp');
    },
    handleHideExpertSignUp() {
      this.$modal.hide('expertSignUp');
    },
  },
};
</script>

<style scoped></style>
