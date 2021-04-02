<template>
  <div>
    <div class="container">
      <div style="overflow: hidden">
        <div class="row1">
          <div class="row1-background-image">
            <div class="row1-image-container_left">
              <img src="../assets/images/row1-image.jpg" />
            </div>
            <div class="row1-transparent-container_right"></div>
          </div>
          <div class="row1-trapezium-background">
            <transition name="slide" appear>
              <div class="row1-trapezium-background-content">
                <h1>{{$t('home.mainRow.title')}}</h1>
                <p>{{$t('home.mainRow.body')}}</p>
                <router-link :to="`/${$i18n.locale}/how-it-works`">
                  <button class="primary-btn">{{$t('buttons.howItWorks')}}</button>
                </router-link>
              </div>
            </transition>
          </div>
        </div>
      </div>
      <div class="row2-background">
        <div style="justify-content:center; display:flex;">
          <div class="row2">
            <h1>{{$t('home.ourServices.title')}}</h1>
            <div class="row2-content">
              <div class="container-spacing">
                <div class="container-box">
                  <router-link :to="`/${$i18n.locale}/services/vehicle-inspection`" tag="div">
                    <img src="../assets/images/vehicle_insp_top.jpeg" />
                    <div class="cat-title">{{$t('home.ourServices.vehicleInspectionTitle')}}</div>
                    <button class="primary-btn row2-btn">{{$t('buttons.getAQuote')}}</button>
                  </router-link>
                </div>
              </div>
              <div class="container-spacing">
                <div class="container-box">
                  <router-link :to="`/${$i18n.locale}/services/home-inspection`" tag="div">
                    <img src="../assets/images/home_insp_top.jpg" />
                    <div class="cat-title">{{$t('home.ourServices.homeInspectionTitle')}}</div>
                    <button class="primary-btn row2-btn">{{$t('buttons.getAQuote')}}</button>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row3-background">
        <div style="justify-content:center; display:flex;">
          <div class="row3">
            <div class="row3-image-left">
              <div class="row3-image">
                <img src="../assets/images/row3-image.jpg" />
              </div>
            </div>
            <div class="row3-content-right" ref="row3RightHeight">
              <transition name="slideup">
                <div v-if="animateRow3">
                  <h1>{{$t('home.howWeCheck.title')}}</h1>
                  <p>{{$t('home.howWeCheck.body')}}</p>
                  <router-link :to="`/${$i18n.locale}/how-it-works`">
                    <button class="primary-btn">{{$t('buttons.howItWorks')}}</button>
                  </router-link>
                </div>
              </transition>
            </div>
            <div class="phone">
              <div class="row3-tablet-phone">
                <img src="../assets/images/ipad-image.png" />
                <div class="row3-tablet-phone-content">
                  <h1>{{$t('buttons.howItWorks')}}</h1>
                  <div class="slide-content">
                    <transition name="slide">
                      <div v-if="currentSlideState == 1" class="tablet-slide" key="1">
                        <img v-if="$i18n.locale == 'en'" src="../assets/images/how-it-works1-(EN)-image.png" />
                        <img v-if="$i18n.locale == 'no'" src="../assets/images/how-it-works1-(NO)-image.png" />
                      </div>
                      <div v-if="currentSlideState == 2" class="tablet-slide" key="2">
                        <img v-if="$i18n.locale == 'en'" src="../assets/images/how-it-works2-(EN)-image.png" />
                        <img v-if="$i18n.locale == 'no'"  src="../assets/images/how-it-works2-(NO)-image.png" />
                      </div>
                      <div v-if="currentSlideState == 3" class="tablet-slide" key="3">
                        <img v-if="$i18n.locale == 'en'"  src="../assets/images/how-it-works3-(EN)-image.png" />
                        <img v-if="$i18n.locale == 'no'"  src="../assets/images/how-it-works3-(NO)-image.png" />
                      </div>
                    </transition>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row4-background">
        <div style="justify-content:center; display:flex;">
          <div class="row4">
            <div class="row4-content-left" ref="row4LeftHeight">
              <transition name="slideup">
                <div v-if="animateRow4">
                  <h1>{{$t('home.whatWeCheck.title')}}</h1>
                  <p>{{$t('home.whatWeCheck.body')}}</p>
                  <router-link :to="`/${$i18n.locale}/signup`">
                    <button class="primary-btn">{{$t('buttons.getStarted')}}</button>
                  </router-link>
                </div>
              </transition>
            </div>
            <div class="row4-image-right">
              <div class="row4-image">
                <img src="../assets/images/row4-image.jpg" />
              </div>
            </div>
            <div class="row4-absolute-image">
              <img src="../assets/images/row4-absolute-image.jpg" />
            </div>
          </div>
        </div>
      </div>
      <div class="row5-background">
        <div style="justify-content:center; display:flex;">
          <div class="row5">
            <div class="row5-image-left">
              <div class="row5-image">
                <img src="../assets/images/row5-image.jpg" />
              </div>
            </div>
            <div class="row5-content-right" ref="row5RightHeight">
              <transition name="slideup">
                <div v-if="animateRow5">
                  <h1>{{$t('home.forWhomWeCheck.title')}}</h1>
                  <p>{{$t('home.forWhomWeCheck.body')}}</p>
                  <router-link :to="`/${$i18n.locale}/signup`">
                    <button class="primary-btn">{{$t('buttons.getStarted')}}</button>
                  </router-link>
                </div>
              </transition>
            </div>
          </div>
        </div>
      </div>
      <div class="row6-background">
        <div style="justify-content:center; display:flex;">
          <div class="row6">
            <div class="row6-content-left" ref="row6LeftHeight">
              <transition name="slideup">
                <div v-if="animateRow6">
                  <h1>{{$t('home.inspectionPro.title')}}</h1>
                  <p>{{$t('home.inspectionPro.body')}}</p>
                  <router-link :to="`/${$i18n.locale}/inspector`">
                    <button class="primary-btn">{{$t('buttons.becomeAnInspector')}}</button>
                  </router-link>
                </div>
              </transition>
            </div>
            <div class="row6-image-right">
              <div class="row6-image">
                <img src="../assets/images/row6-image.jpeg" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row7-background">
        <div style="justify-content:center; display:flex;">
          <div class="row7">
            <div class="row7-image-left">
              <div class="row7-image">
                <img src="../assets/images/row7-image.jpg" />
              </div>
            </div>
            <div class="row7-content-right" ref="row7Height">
              <transition name="slideup">
                <div v-if="animateRow7">
                  <h1>{{$t('home.whyUseInspectorama.title')}}</h1>
                  <div>
                    <div class="text-spaced">
                      <i class="fa fa-circle"></i>
                      <span>{{$t('home.whyUseInspectorama.body.line1')}}</span>
                    </div>
                    <div class="text-spaced">
                      <i class="fa fa-circle"></i>
                      <span>{{$t('home.whyUseInspectorama.body.line2')}}</span>
                    </div>
                    <div class="text-spaced">
                      <i class="fa fa-circle"></i>
                      <span>{{$t('home.whyUseInspectorama.body.line3')}}</span>
                    </div>
                    <div class="text-spaced">
                      <i class="fa fa-circle"></i>
                      <span>{{$t('home.whyUseInspectorama.body.line4')}}</span>
                    </div>
                  </div>
                  <router-link :to="`/${$i18n.locale}/how-it-works`">
                    <button class="primary-btn">{{$t('buttons.howItWorks')}}</button>
                  </router-link>
                </div>
              </transition>
            </div>
            <div class="row7-absolute-image">
              <img src="../assets/images/row7-absolute-image.jpg" />
            </div>
          </div>
        </div>
      </div>
      <div class="row8-background">
        <div style="justify-content:center; display:flex;">
          <div class="row8">
            <h1>{{$t('home.ourPartners.title')}}</h1>
            <div class="row8-content">
              <div class="row8-image-left">
                <img src="../assets/images/row8-left-image.png" />
              </div>
              <transition name="slideup">
                <div class="row8-image-right">
                  <img src="../assets/images/row8-right-image.png" />
                </div>
              </transition>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentSlideState: 1,
      animateRow3: false,
      animateRow4: false,
      animateRow5: false,
      animateRow6: false,
      animateRow7: false
    };
  },
  methods: {
    slider() {
      setInterval(() => {
        this.currentSlideState++;
        if (this.currentSlideState > 3) {
          this.currentSlideState = 1;
        }
      }, 5000);
    },
    onScroll() {
      // checking for visibility
      if (
        this.$refs.row3RightHeight.getBoundingClientRect().top <
        window.innerHeight
      ) {
        this.animateRow3 = true;
      }

      if (
        this.$refs.row4LeftHeight.getBoundingClientRect().top <
        window.innerHeight
      ) {
        this.animateRow4 = true;
      }

      if (
        this.$refs.row5RightHeight.getBoundingClientRect().top <
        window.innerHeight
      ) {
        this.animateRow5 = true;
      }

      if (
        this.$refs.row6LeftHeight.getBoundingClientRect().top <
        window.innerHeight
      ) {
        this.animateRow6 = true;
      }

      if (
        this.$refs.row7Height.getBoundingClientRect().top < window.innerHeight
      ) {
        this.animateRow7 = true;
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.slider();
      this.onScroll();
      window.addEventListener("scroll", this.onScroll);
    });
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  }
};
</script>

<i18n>
{
  "en": {
    "hello": "Hello i18n in SFC 2222222!"
  }
}
</i18n>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
}

@media screen and (min-width: 721px) {
  .row1-image-container_left {
    width: 100%;
    min-width: 600px;
    height: 455px;
    display: block;
  }

  .row1-transparent-container_right {
    width: 100%;
    min-width: 630px;
    max-width: 630px;
    height: 455px;
    background-color: transparent;
    display: block;
  }

  .row1-background-image {
    top: 0px;
    left: 0px;
    width: 100%;
    margin-top: 25px;
    margin-bottom: 25px;
    position: absolute;
    display: flex;
  }

  .row1-background-image img {
    width: 100%;
    height: 100%;
    display: block;
  }

  .row4-absolute-image {
    top: 47%;
    left: 26%;
    right: 34%;
    position: absolute;
    display: block;
  }

  .row4-absolute-image img {
    width: 100%;
    max-width: 500px;
    min-width: 350px;
    height: auto;
    display: table;
  }

  .row5-image-left {
    width: 50%;
    height: 100%;
    height: auto;
    justify-content: center;
    display: flex;
  }

  .row5-image img {
    width: 100%;
    max-width: 620px;
    height: auto;
    display: table;
  }

  .row7-absolute-image {
    top: 370px;
    left: 35%;
    right: 20%;
    position: absolute;
    display: block;
  }

  .row7-absolute-image img {
    width: 100%;
    max-width: 600px;
    height: auto;
    display: table;
  }
}

@media screen and (max-width: 720px) {
  .row1-background-image {
    display: none;
  }

  .row4-absolute-image {
    display: none;
  }

  .row5-image-left {
    display: none;
  }

  .row7-absolute-image {
    display: none;
  }
}

.container {
  font-family: sans-serif, Arial, Helvetica;
  background-color: white;
  width: 100%;
  display: inline-block;
}

h1 {
  font-size: 40px;
  color: #212259;
  line-height: 1.6;
}

p {
  padding-top: 10px;
  padding-bottom: 12px;
  line-height: 1.6;
  font-size: 16px;
}

.slide-enter,
.slideup-enter {
  opacity: 0;
}

.slide-enter-active {
  animation: slide-in 1s ease-out forwards;
  transition: opacity 0.5s;
}
.slide-leave-active {
  animation: slide-out 1s ease-out forwards;
  transition: opacity 1s;
  opacity: 0;
}

@keyframes slide-in {
  from {
    transform: translateX(100%);
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

.slideup-enter-active {
  animation: slide-in-up 1s ease-out forwards;
  transition: opacity 0.5s;
}

@keyframes slide-in-up {
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
}

/* for row1 */
.row1 {
  width: 100%;
  height: 508px;
  position: relative;
  display: table;
}

.row1-trapezium-background {
  top: 0px;
  right: 0px;
  width: 780px;
  height: 100%;
  color: white;
  border-left: 150px solid transparent;
  border-bottom: 540px solid $dark-blue;
  position: absolute;
}

.row1-trapezium-background-content {
  padding-top: 65px;
  padding-left: 15px;
  width: 100%;
  display: inline-block;
}

.row1-trapezium-background-content h1 {
  color: white;
  font-size: 50px;
  width: 100%;
}

.row1-trapezium-background-content p {
  color: gold;
  margin-top: 30px;
  margin-bottom: 50px;
  font-size: 30px;
  font-weight: bold;
  width: 100%;
}

@media screen and (min-width: 1700px) {
  .row1 {
    height: 708px;
  }

  .row1-image-container_left {
    min-width: 600px;
    height: 655px;
  }

  .row1-transparent-container_right {
    min-width: 730px;
    max-width: 730px;
    height: 655px;
  }

  .row1-trapezium-background {
    width: 880px;
    border-bottom: 740px solid $dark-blue;
  }

  .row1-trapezium-background-content {
    padding-top: 90px;
    padding-left: 20px;
  }

  .row1-trapezium-background-content h1 {
    font-size: 60px;
  }

  .row1-trapezium-background-content p {
    font-size: 40px;
    margin-top: 90px;
    margin-bottom: 90px;
  }

  @media screen and (min-width: 2100px) {
    .row1 {
      height: 908px;
    }

    .row1-image-container_left {
      min-width: 600px;
      height: 855px;
    }

    .row1-transparent-container_right {
      min-width: 930px;
      max-width: 930px;
      height: 655px;
    }

    .row1-trapezium-background {
      width: 1080px;
      border-bottom: 940px solid $dark-blue;
    }

    .row1-trapezium-background-content {
      padding-top: 120px;
      padding-left: 30px;
    }

    .row1-trapezium-background-content h1 {
      font-size: 70px;
    }

    .row1-trapezium-background-content p {
      font-size: 45px;
      margin-top: 150px;
      margin-bottom: 150px;
    }
  }
}

/* for row2 */
.row2 {
  padding-top: 30px;
  /* height: 290px; */
  height: 370px;
  display: table;
  background-color: white;
}

.row2 h1 {
  font-size: 50px;
  text-align: center;
}

.row2-content {
  width: 100%;
  justify-content: space-evenly;
  display: flex;
}

.container-spacing {
  padding: 10px;
  width: 100%;
  height: 100%;
  max-width: 300px;
  display: block;
}

.container-box {
  width: 100%;
  height: 100%;
  border-radius: 5px;
  position: relative;
  cursor: pointer;
  display: table;
  border-top: 2px solid transparent;
  border-bottom: 2px solid transparent;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
}

.container-box:hover {
  border-top: 2px solid $dark-blue;
  border-bottom: 2px solid $dark-blue;
  border-left: 2px solid $dark-blue;
  border-right: 2px solid $dark-blue;
}

.cat-title {
  top: 50%;
  left: 50%;
  text-align: center;
  transform: translate(-50%, -100%);
  font-size: 24px;
  font-weight: bold;
  color: orangered;
  width: 100%;
  position: absolute;
}

.cat-title:hover {
  color: red;
}

.container-box img {
  width: 100%;
  border-radius: 5px;
  height: auto;
  display: table;
}

.row2-btn {
  top: 50%;
  left: 50%;
  text-align: center;
  transform: translate(-50%, 50%);
  position: absolute;
  min-width: 130px;
}

/* for row3 */
.row3-background {
  background-color: whitesmoke;
}

.row3 {
  padding-top: 70px;
  height: 850px;
  justify-content: flex-start;
  display: flex;
  position: relative;
}

.row3-image-left {
  width: 50%;
  justify-content: center;
  display: flex;
}

.row3-image img {
  width: 100%;
  max-width: 380px;
  height: auto;
  display: table;
}

.row3-content-right {
  padding-left: 8%;
  padding-right: 20px;
  padding-top: 80px;
  width: 540px;
  display: inline-block;
}

.phone img {
  width: 350px;
  height: auto;
  display: table;
}

.row3-tablet-phone {
  top: 34%;
  left: 30%;
  position: absolute;
  z-index: 1;
}

.row3-tablet-phone-content {
  top: 8.5%;
  left: 6%;
  right: 6%;
  bottom: 8.5%;
  width: auto;
  height: auto;
  border-radius: 3px;
  border: 1px solid $dark-blue;
  background-color: white;
  overflow: hidden;
  position: absolute;
  align-items: center;
  flex-direction: column;
  pointer-events: none;
  display: flex;
}

.row3-tablet-phone-content h1 {
  padding-top: 10px;
  padding-bottom: 5px;
  font-size: 25px;
  color: $dark-blue;
}

.tablet-slide img {
  width: 100%;
  height: auto;
}

.slide-content {
  top: 0;
  width: 220px;
  height: 100%;
  position: relative;
}

.tablet-slide {
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
}

/* for row4 */
.row4-background {
  background-color: white;
}

.row4 {
  padding-top: 70px;
  height: 850px;
  justify-content: space-around;
  display: flex;
  position: relative;
}

.row4-content-left {
  padding-left: 8%;
  padding-right: 20px;
  padding-top: 80px;
  width: 450px;
}
.row4-image-right {
  width: 55%;
  justify-content: center;
  display: flex;
}

.row4-image img {
  width: 100%;
  max-width: 780px;
  height: auto;
  display: table;
}

/* for row5 */
.row5-background {
  background-color: white;
}

.row5 {
  padding-top: 70px;
  padding-bottom: 70px;
  justify-content: center;
  display: flex;
}

.row5-content-right {
  padding-left: 20px;
  padding-right: 8%;
  width: 540px;
  display: inline-block;
}

/* for row6 */
.row6-background {
  background-color: #f2f2f2;
}

.row6 {
  padding-top: 70px;
  padding-bottom: 70px;
  justify-content: center;
  display: flex;
}

.row6-content-left {
  padding-left: 8%;
  padding-right: 20px;
  width: 800px;
  display: inline-block;
}

.row6-image-right {
  width: 40%;
  padding-left: 40px;
  justify-content: flex-start;
  display: flex;
}

.row6-image img {
  width: 100%;
  max-width: 420px;
  height: auto;
  display: table;
}

/* for row7 */
.row7-background {
  background-color: white;
}

.row7 {
  padding-top: 70px;
  height: 735px;
  display: flex;
  justify-content: space-evenly;
  position: relative;
}

.row7-image-left {
  width: 45%;
  justify-content: flex-end;
  display: flex;
}

.row7-image img {
  width: 100%;
  max-width: 550px;
  height: auto;
  display: table;
}

.row7-content-right {
  padding-left: 30px;
  padding-right: 20px;
  width: 700px;
  display: inline-block;
}

.text-spaced {
  font-size: 16px;
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
}

.text-spaced i {
  padding-right: 10px;
  font-size: 14px;
  line-height: 18px;
  color: #13b6f7;
}

.row7 h1 {
  margin-bottom: 10px;
}

/* for row8 */
.row8-background {
  background-color: white;
}

.row8 h1 {
  padding-bottom: 10px;
  font-size: 50px;
  text-align: center;
}

.row8 {
  padding-top: 50px;
  padding-bottom: 100px;
}

.row8-content {
  width: 100%;
  align-items: center;
  justify-content: space-evenly;
  display: flex;
}

.row8-image-left {
  width: 50%;
  padding-left: 8%;
  justify-content: center;
  display: flex;
}

.row8-image-left img {
  width: 100%;
  max-width: 350px;
  height: auto;
  display: block;
}

.row8-image-right {
  width: 50%;
  padding-right: 10%;
  justify-content: center;
  display: flex;
}

.row8-image-right img {
  width: 100%;
  max-width: 410px;
  height: auto;
  display: block;
}

// .primary-btn,
// .primary-btn,
// .primary-btn,
// .primary-btn,
// .primary-btn,
// .primary-btn,
// .primary-btn {
//   font-size: 15px;
//   margin-top: 10px;
//   padding: 10px 25px;
//   font-weight: bold;
//   text-align: center;
//   border: none;
//   outline: none;
//   color: white;
//   cursor: pointer;
//   border-radius: 5px;
//   background-color: #13b6f7;
// }

// .primary-btn:hover {
//   color: darkblue;
//   background-color: whitesmoke;
// }

.row2-btn {
  padding: 4px 0px;
  // background-color: #13b6f7;
  // border: 1px solid #13b6f7;
}

// .primary-btn:hover {
//   color: #13b6f7;
//   border: 1px solid #13b6f7;
//   background-color: white;
// }

// .primary-btn:hover,
// .primary-btn:hover,
// .primary-btn:hover,
// .primary-btn:hover,
// .primary-btn:hover {
//   background-color: #039bb9;
// }

.row2,
.row3,
.row4,
.row5,
.row6,
.row7,
.row8 {
  width: 100%;
  max-width: 1700px;
}

@media screen and (max-width: 1300px) {
  h1 {
    font-size: 35px;
  }

  .row3-content-right {
    padding-top: 0px;
    padding-left: 20px;
    padding-right: 20px;
  }

  .row3 {
    height: 890px;
  }

  .row3-tablet-phone {
    top: 37%;
  }

  .row4 {
    height: 755px;
  }

  .row4-absolute-image {
    top: 42%;
  }

  .row8 h1 {
    padding-bottom: 0px;
  }

  @media screen and (max-width: 1200px) {
    .row7 {
      height: 680px;
    }
  }

  @media screen and (max-width: 1040px) {
    .row4 {
      height: 680px;
    }

    .row4-absolute-image {
      top: 44%;
    }

    .row7-absolute-image {
      left: 30%;
      right: 25%;
    }

    .row8-image-right {
      padding-right: 2%;
    }

    .row7 {
      height: 660px;
    }
  }
}

@media screen and (max-width: 860px) {
  .row4 {
    height: 635px;
  }

  .row4-absolute-image {
    top: 47%;
  }

  .row6-image-right {
    padding-left: 0px;
  }

  .row7 {
    height: 630px;
  }

  .row8-image-left {
    padding-left: 6%;
  }

  .row8-image-right {
    padding-right: 0px;
  }

  @media screen and (max-width: 820px) {
    h1 {
      font-size: 30px;
    }

    .row1 {
      height: auto;
      position: static;
    }

    .row1-background-image {
      display: none;
    }

    .row1-trapezium-background {
      width: 100%;
      border: none;
      position: static;
      background-color: $dark-blue;
      display: inline-table;
    }

    .row1-trapezium-background-content {
      padding: 60px 50px;
    }

    .row4-content-left {
      padding-left: 20px;
    }

    .row4-absolute-image img {
      max-width: 400px;
    }

    .row7-absolute-image {
      top: 380px;
    }
  }
}

@media screen and (max-width: 720px) {
  p {
    padding-top: 10px;
    padding-bottom: 10px;
  }

  .row3,
  .row4,
  .row7 {
    height: auto;
  }

  .row2 {
    height: 350px;
  }

  .row2 h1,
  .row8 h1 {
    font-size: 45px;
  }

  .row3 {
    padding-top: 20px;
    padding-bottom: 35px;
    flex-direction: column-reverse;
    position: static;
    background-color: aliceblue;
  }

  .row3-image-left {
    padding: 0px 20px;
    padding-top: 20px;
    width: 100%;
  }

  .row3-image img {
    max-width: 250px;
  }

  .phone {
    padding: 20px 15px;
    padding-bottom: 5px;
    justify-content: center;
    width: 100%;
    display: flex;
  }

  .row3-tablet-phone {
    flex: 1;
    top: 0px;
    left: 0px;
    max-width: 285px;
    position: relative;
  }

  .phone img {
    width: 100%;
  }

  .tablet-slide img {
    width: 100%;
    height: auto;
  }

  .slide-content {
    width: 100%;
    max-width: 180px;
  }

  .row3-tablet-phone-content h1 {
    font-size: 20px;
    padding-top: 8px;
    padding-bottom: 4px;
  }

  .row4 {
    padding: 0px;
    flex-direction: column;
  }

  .row4-image-right {
    padding: 0px;
    width: 100%;
  }

  .row4-image img {
    width: 100%;
    max-width: 780px;
  }

  .row4-content-left {
    padding: 30px 20px;
    padding-bottom: 40px;
    width: 100%;
  }

  .row3-content-right {
    padding: 30px 20px;
    width: 100%;
  }

  .row5 {
    padding: 0px;
    background-color: whitesmoke;
  }

  .row5-content-right {
    padding: 30px 20px;
    width: 100%;
  }

  .row6 {
    padding: 0px;
    flex-direction: column-reverse;
  }

  .row6-image-right {
    padding: 0px 20px;
    padding-top: 30px;
    width: 100%;
    align-self: center;
    justify-content: center;
  }

  .row6-content-left {
    padding: 30px 20px;
    width: 100%;
  }

  .row7 {
    padding: 0px;
    flex-direction: column;
    justify-content: center;
    position: static;
    background-color: whitesmoke;
  }

  .row7-image-left {
    padding: 10px 20px;
    padding-top: 30px;
    width: 100%;
    justify-content: center;
  }

  .row7-content-right {
    padding: 30px 20px;
    width: 100%;
  }

  .row8 {
    padding-top: 50px;
    padding-bottom: 80px;
  }

  .row8-image-left {
    padding-left: 20px;
  }
}

@media screen and (max-width: 580px) {
  .row1-trapezium-background-content h1 {
    font-size: 40px;
  }

  .row1-trapezium-background-content p {
    margin-top: 40px;
    margin-bottom: 60px;
    font-size: 25px;
  }

  .row2 {
    height: 320px;
  }

  .row2 h1,
  .row8 h1 {
    font-size: 40px;
  }

  @media screen and (max-width: 520px) {
    .row2 {
      height: 300px;
    }

    .row2 h1,
    .row8 h1 {
      font-size: 38px;
    }

    .row8 h1 {
      padding-bottom: 10px;
    }

    .container-spacing {
      padding: 8px;
    }

    .cat-title {
      font-size: 19px;
    }

    .row2-btn {
      font-size: 14px;
      padding: 3px 0px;
      min-width: 110px;
    }

    @media screen and (max-width: 420px) {
      h1 {
        font-size: 26px;
      }

      .row1-trapezium-background-content h1 {
        font-size: 30px;
      }

      .row1-trapezium-background-content p {
        padding-top: 20px;
        padding-bottom: 10px;
        font-size: 20px;
      }

      .row1-trapezium-background-content {
        padding: 40px 20px;
      }

      .row2 h1,
      .row8 h1 {
        font-size: 32px;
      }

      .row8 h1 {
        padding-bottom: 0px;
      }

      .row3 .slide-content {
        max-width: 175px;
      }

      .row2 {
        height: auto;
        padding-bottom: 30px;
      }

      .row2-content {
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      .container-spacing {
        height: 200px;
        display: inline-block;
      }

      .cat-title {
        font-size: 24px;
      }

      .container-box img {
        min-width: 180px;
        min-height: 180px;
      }

      // .primary-btn {
      //   margin-top: 6px;
      //   margin-bottom: 4px;
      //   padding: 12px 22px;
      // }

      .row3-content-right,
      .row4-content-left,
      .row5-content-right,
      .row6-image-right,
      .row6-content-left,
      .row7-image-left,
      .row7-content-right {
        padding: 20px 10px;
      }

      .row4-content-left {
        padding-bottom: 30px;
      }

      .row6-content-left {
        padding-top: 8px;
      }

      .row7-content-right {
        padding-top: 8px;
        padding-bottom: 35px;
      }

      .row8 {
        padding-top: 30px;
        padding-bottom: 50px;
      }
    }
  }
}
</style>
