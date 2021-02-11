<template>
  <div>
    <div class="container">
      <div class="home-top-background-image white">
        <div class="home-top-background-image-content padding-bottom-10">
          <div class="row content-container">
            <div
              class="col-sm-5 d-flex justify-content-end padding-right-0 padding-right-md-20 stretch-full-md"
            >
              <div class="container-360 stretch-full-md">
                <h1
                  class="font-size-25 line-height-25 font-size-md-50 line-height-md-50"
                >
                  <span>Save Money Asking Our Experts Questions</span
                  ><i class="fa fa-circle green font-size-8"></i>
                </h1>
                <br />
                <p class="font-size-md-13">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur hendrerit mattis arcu.
                </p>
                <div class="d-block-hidden-md">
                  <br />
                  <br />
                  <br />
                  <br />
                  <div class="row align-items-center cursor-pointer">
                    <div class="col-2">
                      <div
                        class="round-border font-size-20 border-color-green padding-top-md-12 padding-bottom-md-12 padding-left-md-24 padding-right-md-24"
                      >
                        <i class="fa fa-long-arrow-down"></i>
                      </div>
                    </div>
                    <div class="col-10 font-size-17">
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;View Categories
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="col-sm-7 d-flex d-flex-hidden-md justify-content-center"
            >
              <div class="container-450">
                <AskQuestionBox />
              </div>
            </div>
            <div
              class="d-flex bg-white border-radius-6 align-items-center padding-2 show-for-mobile margin-top-10 margin-bottom-4"
              @click="handleShowQuestionBox"
            >
              <input
                disabled
                class="input focus-none font-size-13 border-0 border-radius-0 padding-top-8 padding-bottom-8 padding-left-4 padding-right-4"
                placeholder="Type your question here"
              />
              <div>
                <button
                  class="btn bg-green padding-top-4 padding-bottom-4 padding-left-8 padding-right-8"
                >
                  Get&nbsp;an&nbsp;answer
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div
          class="col-md-4 d-flex d-flex-hidden-md align-items-center bg-black green justify-content-center"
        >
          <h1 class="font-size-40 line-height-50">
            &nbsp;&nbsp;&nbsp;&nbsp;Experts<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;With in<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;All<br />
            Industries
          </h1>
        </div>
        <div class="col-md-8">
          <div class="row">
            <div
              class="col d-block-hidden-md text-center bg-light-black padding-top-14 padding-bottom-14 padding-top-md-40 padding-bottom-md-40"
            >
              <img
                class="row-2-icon padding-bottom-5 padding-bottom-md-30"
                src="../assets/svg/eye-outline.svg"
              />
              <p class="white font-size-10 font-size-md-15">At a Glance</p>
            </div>
            <div
              class="col text-center bg-light-black padding-top-14 padding-bottom-14 padding-top-md-40 padding-bottom-md-40"
            >
              <img
                class="row-2-icon padding-bottom-5 padding-bottom-md-30"
                src="../assets/svg/trial.svg"
                width="50"
              />
              <p class="white font-size-10 font-size-md-15">Lawyers</p>
            </div>
            <div
              class="col text-center bg-light-black padding-top-14 padding-bottom-md-14 padding-top-md-40 padding-bottom-md-40"
            >
              <img
                class="row-2-icon padding-bottom-5 padding-bottom-md-30"
                src="../assets/svg/tools.svg"
                width="50"
              />
              <p class="white font-size-10 font-size-md-15">Mechanics</p>
            </div>
            <div
              class="col text-center bg-light-black padding-top-14 padding-bottom-md-14 padding-top-md-40 padding-bottom-md-40"
            >
              <img
                class="row-2-icon padding-bottom-5 padding-bottom-md-30"
                src="../assets/svg/stethoscope.svg"
                width="50"
              />
              <p class="white font-size-10 font-size-md-15">Doctors & Nurses</p>
            </div>
            <div
              class="col text-center bg-light-black padding-top-14 padding-bottom-md-14 padding-top-md-40 padding-bottom-md-40"
            >
              <img
                class="row-2-icon padding-bottom-5 padding-bottom-md-30"
                src="../assets/svg/paw.svg"
                width="50"
              />
              <p class="white font-size-10 font-size-md-15">Vets</p>
            </div>
          </div>
          <div class="row row-hidden-md">
            <div class="col text-center bg-black">
              <i></i>
              <p></p>
            </div>
            <div
              class="col text-center bg-light-black padding-top-14 padding-bottom-md-14 padding-top-md-40 padding-bottom-md-40"
            >
              <img
                class="row-2-icon padding-bottom-5 padding-bottom-md-30"
                src="../assets/svg/toolkit.svg"
                width="50"
              />
              <p class="white font-size-10 font-size-md-15">
                Plumbers & Electricians
              </p>
            </div>
            <div
              class="col text-center bg-light-black padding-top-14 padding-bottom-md-14 padding-top-md-40 padding-bottom-md-40"
            >
              <img
                class="row-2-icon padding-bottom-5 padding-bottom-md-30"
                src="../assets/svg/monitor.svg"
                width="50"
              />
              <p class="white font-size-10 font-size-md-15">
                Computers & Electronics
              </p>
            </div>
            <div
              class="col text-center bg-light-black padding-top-14 padding-bottom-md-14 padding-top-md-40 padding-bottom-md-40"
            >
              <img
                class="row-2-icon padding-bottom-5 padding-bottom-md-30"
                src="../assets/svg/money.svg"
                width="50"
              />
              <p class="white font-size-10 font-size-md-15">
                Financial Software
              </p>
            </div>
            <div
              class="col text-center bg-light-black padding-top-14 padding-bottom-md-14 padding-top-md-40 padding-bottom-md-40"
            >
              <img
                class="row-2-icon padding-bottom-5 padding-bottom-md-30"
                src="../assets/svg/right-arrow.svg"
                width="50"
              />
              <p class="white font-size-10 font-size-md-15">View All</p>
            </div>
          </div>
        </div>
      </div>

      <div
        class="d-flex content-container justify-content-center padding-top-10 padding-top-md-100"
      >
        <div class="container-550 text-center">
          <h2>How does it work?</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            hendrerit mattis arcu, quis scelerisque nulla faucibus mollis. Ut
            imperdiet, neque at ullamcorper
          </p>
        </div>
      </div>

      <div
        class="row content-container atext-center padding-top-10 padding-bottom-10 padding-top-md-100 padding-bottom-md-100"
      >
        <div
          class="col-lg-4 padding-top-20 padding-bottom-20 padding-left-0 padding-right-0 padding-left-md-10 padding-right-md-10"
        >
          <div class="d-flex invert-for-desktop">
            <img
              class="margin-bottom-0 margin-bottom-md-34"
              src="../assets/svg/help.svg"
            />
            <div class="padding-left-10 padding-left-md-0">
              <h2 class="font-size-17 font-size-md-25">1. Ask a Question</h2>
              <p class="font-size-11 font-size-md-15">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur hendrerit mattis arcu, quis scelerisque nulla faucibus
                mollis. Ut imperdiet, neque at ullamcorper
              </p>
            </div>
          </div>
        </div>
        <div
          class="col-lg-4 padding-top-20 padding-bottom-20 padding-left-0 padding-right-0 padding-left-md-10 padding-right-md-10"
        >
          <div class="d-flex invert-for-desktop">
            <img
              class="margin-bottom-0 margin-bottom-md-34"
              src="../assets/svg/telephone.svg"
            />
            <div class="padding-left-10 padding-left-md-0">
              <h2 class="font-size-17 font-size-md-25">2. Select Priority</h2>
              <p class="font-size-11 font-size-md-15">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur hendrerit mattis arcu, quis scelerisque nulla faucibus
                mollis. Ut imperdiet, neque at ullamcorper
              </p>
            </div>
          </div>
        </div>
        <div
          class="col-lg-4 padding-top-20 padding-bottom-20 padding-left-0 padding-right-0 padding-left-md-10 padding-right-md-10"
        >
          <div class="d-flex invert-for-desktop">
            <img
              class="margin-bottom-0 margin-bottom-md-34"
              src="../assets/svg/call-center-agent.svg"
            />
            <div class="padding-left-10 padding-left-md-0">
              <h2 class="font-size-17 font-size-md-25">3. Receive an Answer</h2>
              <p class="font-size-11 font-size-md-15">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur hendrerit mattis arcu, quis scelerisque nulla faucibus
                mollis. Ut imperdiet, neque at ullamcorper
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

      <div
        class="bg-green padding-left-0 padding-top-10 padding-bottom-20 padding-left-md-70 padding-top-md-70 padding-bottom-md-100"
      >
        <div class="content-container">
          <p
            class="font-size-24 font-size-md-38 padding-bottom-10 padding-bottom-md-100"
          >
            Our Top Experts
          </p>
          <div class="row">
            <div class="col-lg-1 d-block-hidden-lg">
              <br />
              <br />
              <br />
              <span class="flip font-size-16 font-size-md-25"> EXPERTS </span>
            </div>
            <div class="col-lg-5">
              <div>
                <div class="row align-items-center">
                  <div class="d-flex align-items-center col-md-8">
                    <img
                      class="round-img"
                      src="../assets/images/top-experts-1.png"
                      width="80"
                    />
                    &nbsp;&nbsp;&nbsp;
                    <div>
                      <p class="font-size-18 font-size-md-25">Michael Gates</p>
                      <span>350 Questions Answered</span>
                    </div>
                  </div>
                  <div class="d-flex col-md-4 font-size-25">
                    <img
                      src="../assets/svg/star-in-green.svg"
                      width="23"
                    />&nbsp;&nbsp;
                    <img
                      src="../assets/svg/star-in-green.svg"
                      width="23"
                    />&nbsp;&nbsp;
                    <img
                      src="../assets/svg/star-in-green.svg"
                      width="23"
                    />&nbsp;&nbsp;
                    <img
                      src="../assets/svg/star-in-white.svg"
                      width="23"
                    />&nbsp;&nbsp;
                    <img src="../assets/svg/star-in-white.svg" width="23" />
                  </div>
                </div>
                <div
                  class="horizontal-line border-top-4 border-color-lighter-green"
                />
              </div>
              <br />
              <div>
                <div class="row align-items-center">
                  <div class="d-flex align-items-center col-md-8">
                    <img
                      class="round-img"
                      src="../assets/images/top-experts-2.png"
                      width="80"
                    />
                    &nbsp;&nbsp;&nbsp;
                    <div>
                      <p class="font-size-18 font-size-md-25">Joe Sams</p>
                      <span>350 Questions Answered</span>
                    </div>
                  </div>
                  <div class="d-flex col-md-4 font-size-25">
                    <img
                      src="../assets/svg/star-in-green.svg"
                      width="23"
                    />&nbsp;&nbsp;
                    <img
                      src="../assets/svg/star-in-green.svg"
                      width="23"
                    />&nbsp;&nbsp;
                    <img
                      src="../assets/svg/star-in-green.svg"
                      width="23"
                    />&nbsp;&nbsp;
                    <img
                      src="../assets/svg/star-in-white.svg"
                      width="23"
                    />&nbsp;&nbsp;
                    <img src="../assets/svg/star-in-white.svg" width="23" />
                  </div>
                </div>
                <div
                  class="horizontal-line border-top-4 border-color-lighter-green"
                />
              </div>
              <br />
              <div>
                <div class="row align-items-center">
                  <div class="d-flex align-items-center col-md-8">
                    <img
                      class="round-img"
                      src="../assets/images/top-experts-1.png"
                      width="80"
                    />
                    &nbsp;&nbsp;&nbsp;
                    <div>
                      <p class="font-size-18 font-size-md-25">Will Smith</p>
                      <span>350 Questions Answered</span>
                    </div>
                  </div>
                  <div class="d-flex col-md-4 font-size-25">
                    <img
                      src="../assets/svg/star-in-green.svg"
                      width="23"
                    />&nbsp;&nbsp;
                    <img
                      src="../assets/svg/star-in-green.svg"
                      width="23"
                    />&nbsp;&nbsp;
                    <img
                      src="../assets/svg/star-in-green.svg"
                      width="23"
                    />&nbsp;&nbsp;
                    <img
                      src="../assets/svg/star-in-white.svg"
                      width="23"
                    />&nbsp;&nbsp;
                    <img src="../assets/svg/star-in-white.svg" width="23" />
                  </div>
                </div>
                <div
                  class="horizontal-line border-top-4 border-color-lighter-green"
                />
              </div>
              <br />
              <div>
                <div class="row align-items-center">
                  <div class="d-flex align-items-center col-md-8">
                    <img
                      class="round-img"
                      src="../assets/images/top-experts-2.png"
                      width="80"
                    />
                    &nbsp;&nbsp;&nbsp;
                    <div>
                      <p class="font-size-18 font-size-md-25">Craig Mills</p>
                      <span>150 Questions Answered</span>
                    </div>
                  </div>
                  <div class="d-flex col-md-4 font-size-25">
                    <img
                      src="../assets/svg/star-in-green.svg"
                      width="23"
                    />&nbsp;&nbsp;
                    <img
                      src="../assets/svg/star-in-green.svg"
                      width="23"
                    />&nbsp;&nbsp;
                    <img
                      src="../assets/svg/star-in-green.svg"
                      width="23"
                    />&nbsp;&nbsp;
                    <img
                      src="../assets/svg/star-in-white.svg"
                      width="23"
                    />&nbsp;&nbsp;
                    <img src="../assets/svg/star-in-white.svg" width="23" />
                  </div>
                </div>
                <div
                  class="horizontal-line border-top-4 border-color-lighter-green"
                />
              </div>
            </div>

            <div class="col-lg-2 d-block-hidden-lg text-center">
              <div class="bar"><i class="fa fa-circle"></i></div>
            </div>

            <div class="col-lg-4 d-block-hidden-lg">
              <div class="row align-items-center">
                <div class="col-6">
                  <p class="font-size-18 font-size-md-25">Victoria May</p>
                  <p>150 Questions Answered</p>
                  <div class="d-flex col-md-4 font-size-25">
                    <img
                      src="../assets/svg/star-in-green.svg"
                      width="23"
                    />&nbsp;&nbsp;
                    <img
                      src="../assets/svg/star-in-green.svg"
                      width="23"
                    />&nbsp;&nbsp;
                    <img
                      src="../assets/svg/star-in-green.svg"
                      width="23"
                    />&nbsp;&nbsp;
                    <img
                      src="../assets/svg/star-in-white.svg"
                      width="23"
                    />&nbsp;&nbsp;
                    <img src="../assets/svg/star-in-white.svg" width="23" />
                  </div>
                </div>
                <div class="col-6">
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <img
                    class="round-img"
                    src="../assets/images/top-experts-2.png"
                    width="150"
                  />
                </div>
              </div>
              <br />
              <br />
              <div class="row align-items-center">
                <div class="col-6">
                  <img
                    class="round-img"
                    src="../assets/images/top-experts-1.png"
                    width="150"
                  />
                </div>
                <div class="col-6">
                  <p class="font-size-18 font-size-md-25">Tom Tims</p>
                  <p>150 Questions Answered</p>
                  <div class="d-flex col-md-4 font-size-25">
                    <img
                      src="../assets/svg/star-in-green.svg"
                      width="23"
                    />&nbsp;&nbsp;
                    <img
                      src="../assets/svg/star-in-green.svg"
                      width="23"
                    />&nbsp;&nbsp;
                    <img
                      src="../assets/svg/star-in-green.svg"
                      width="23"
                    />&nbsp;&nbsp;
                    <img
                      src="../assets/svg/star-in-white.svg"
                      width="23"
                    />&nbsp;&nbsp;
                    <img src="../assets/svg/star-in-white.svg" width="23" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div
          class="col-md-6 content-container bg-light-grey padding-top-10 padding-bottom-10 padding-top-md-70 padding-bottom-md-100"
        >
          <div class="padding-bottom-10 padding-bottom-md-80">
            <h2 class="font-size-16 font-size-md-25">WHO WE ARE</h2>
            <br class="d-block-hidden-md" />
            <h1
              class="d-block-hidden-md font-size-32 line-height-32 padding-bottom-40"
            >
              About <br />
              Explain Monkey
            </h1>
          </div>
          <div>
            <h2
              class="font-size-18 font-size-md-25 padding-bottom-0 padding-bottom-md-30"
            >
              ABOUT US
            </h2>
            <p class="container-450">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              hendrerit mattis arcu, quis scelerisque nulla faucibus mollis. Ut
              imperdiet, neque at ullamcorper
            </p>
          </div>
        </div>
        <div
          class="col-md-6 content-container padding-top-16 padding-bottom-16 padding-top-md-90 padding-bottom-md-100"
        >
          <div>
            <h2 class="font-size-18 font-size-md-25">OUR LOCATION</h2>
            <div
              class="container-550 container-radius-20 bg-light-grey padding-10 padding-md-30"
            >
              <div class="d-flex align-items-center">
                <div
                  class="green font-size-35 font-size-md-50 padding-right-10 padding-right-md-30"
                >
                  <i class="fas fa-map-marker-alt"></i>
                </div>
                <div>
                  <h1 class="d-block-hidden-md font-size-md-17">
                    <span class="white">Explain</span
                    ><span class="green">Monkey</span>
                  </h1>
                  <div
                    class="d-block-hidden-md horizontal-line border-top-4 border-color-white"
                  />
                  <p class="font-size-md-13">
                    23, wese Close Western Avenue Lagos, Nigeria
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="padding-top-16 padding-top-md-90">
            <h2
              class="font-size-18 font-size-md-25 padding-bottom-0 padding-bottom-md-30"
            >
              WHAT WE DO
            </h2>
            <p class="container-450">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              hendrerit mattis arcu, quis scelerisque nulla faucibus mollis. Ut
              imperdiet, neque at ullamcorper
            </p>
          </div>
        </div>
      </div>
    </div>
    <div v-if="cuurentScreenWidth < '768'">
      <modal name="askQuestionBox" height="auto" :adaptive="true">
        <AskQuestionBox @close="handleHideQuestionBox" />
      </modal>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import AskQuestionBox from "../components/AskQuestionBox";
import Testimonials from "../components/Testimonials";
export default {
  components: {
    AskQuestionBox,
    Testimonials
  },
  data() {
    return {
      isAskQuestionBoxMobileVisible: false,
    };
  },

  computed: {
    ...mapState({
      cuurentScreenWidth: (state) => state.utilities.currentScreenWidth,
    }),
  },

  methods: {
    handleShowQuestionBox() {
      this.$modal.show("askQuestionBox");
    },
    handleHideQuestionBox() {
      this.$modal.hide("askQuestionBox");
    },
  },
};
</script>
