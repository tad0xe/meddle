<template>
  <div>
    <div class="body">
      <div class="container-header">{{$t('howItWorks.heading')}}</div>
      <div class="container">
        <div class="left-side">
          <div class="left-side-content left-top-spacing">
            <h2>{{$t('howItWorks.quote.title')}}</h2>
            <p>{{$t('howItWorks.quote.body')}}</p>
          </div>
          <div class="left-side-content">
            <h2>{{$t('howItWorks.book.title')}}</h2>
            <p>{{$t('howItWorks.book.body')}}</p>
          </div>
          <div class="left-side-content remove-padding">
            <h2>{{$t('howItWorks.approve.title')}}</h2>
            <p>{{$t('howItWorks.approve.body')}}</p>
          </div>
          <div class="left-side-content left-far-bottom">
            <h2>{{$t('howItWorks.receive.title')}}</h2>
            <p>{{$t('howItWorks.receive.body')}}</p>
          </div>
        </div>
        <div class="center-container">
          <div class="center-line"></div>
          <div>
            <p class="number reduce-lineheight">1</p>
            <div class="stage">
              <div class="circle">
                <i class="fa fa-circle"></i>
              </div>
              <div class="center-text">{{$t('howItWorks.quote.caps')}}</div>
            </div>
            <div class="stage">
              <div class="circle">
                <i class="fa fa-circle"></i>
              </div>
              <div class="center-text">{{$t('howItWorks.book.caps')}}</div>
            </div>
            <div class="stage">
              <div class="circle">
                <i class="fa fa-circle"></i>
              </div>
              <div class="center-text">{{$t('howItWorks.approve.caps')}}</div>
            </div>
          </div>
          <div>
            <p class="number">2</p>
            <div class="stage">
              <div class="circle">
                <i class="fa fa-circle"></i>
              </div>
              <div class="center-text">{{$t('howItWorks.locate.caps')}}</div>
            </div>
            <div class="stage">
              <div class="circle">
                <i class="fa fa-circle"></i>
              </div>
              <div class="center-text">{{$t('howItWorks.inspect.caps')}}</div>
            </div>
            <div class="stage">
              <div class="circle">
                <i class="fa fa-circle"></i>
              </div>
              <div class="center-text">{{$t('howItWorks.report.caps')}}</div>
            </div>
          </div>
          <div>
            <p class="number">3</p>
            <div class="stage">
              <div class="circle">
                <i class="fa fa-circle"></i>
              </div>
              <div class="center-text">{{$t('howItWorks.receive.caps')}}</div>
            </div>
          </div>
        </div>
        <div class="right-side right-left-top-spacing">
          <div class="right-side-content">
            <h2>{{$t('howItWorks.locate.title')}}</h2>
            <p>{{$t('howItWorks.locate.body')}}</p>
          </div>
          <div class="right-side-content remove-extra-margin1">
            <h2>{{$t('howItWorks.inspect.title')}}</h2>
            <p>{{$t('howItWorks.inspect.body')}}</p>
          </div>
          <div class="right-side-content remove-extra-margin2">
            <h2>{{$t('howItWorks.report.title')}}</h2>
            <p>{{$t('howItWorks.report.body')}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script> 

<style scoped>
* {
  box-sizing: border-box;
}

.body {
  font-family: sans-serif, Arial, Helvetica;
  padding-bottom: 20px;
  align-items: center;
  flex-direction: column;
  display: flex;
  background-color: white;
}

.container-header {
  font-size: 30px;
  margin-top: 40px;
  margin-bottom: 40px;
  font-weight: bold;
}

h2 {
  font-size: 25px;
  color: #212259;
}
p {
  font-size: 13px;
  padding-top: 6px;
}

.container {
  position: relative;
  display: flex;
}

.left-top-spacing {
  margin-top: 125px;
}

.left-far-bottom {
  margin-top: 735px;
}

.right-left-top-spacing {
  margin-top: 710px;
}

.left-side {
  order: 1;
  display: inline-block;
}

.center-container {
  width: 150px;
  text-align: center;
  position: relative;
  order: 2;
  z-index: 1;
}

.right-side {
  order: 3;
  display: inline-block;
}

.center-line {
  width: 2px;
  height: 1350px;
  background-color: black;
  left: 50%;
  transform: translate(-50%);
  z-index: -1;
  position: absolute;
}

.left-side-content,
.right-side-content {
  padding: 40px 10px;
  width: 360px;
}

.remove-extra-margin2 {
  padding-top: 10px;
}

.number {
  color: darkred;
  margin-bottom: 60px;
  font-size: 60px;
  font-weight: bold;
  z-index: 1;
}

.stage {
  margin-top: 75px;
  margin-bottom: 75px;
}

.circle {
  font-size: 20px;
  margin-bottom: 8px;
  color: grey;
}

.center-text {
  font-size: 17px;
  padding-bottom: 20px;
  color: #212259;
  font-weight: bold;
  display: inline-block;
  z-index: 1;
}

.reduce-lineheight {
  line-height: 40px;
  padding-right: 5px;
  margin-bottom: 40px;
  background-color: white;
  display: inline-block;
}

@media screen and (max-width: 890px) {
  .center-container {
    width: 120px;
  }

  .remove-extra-margin1 {
    padding-top: 5px;
  }

  .remove-extra-margin2 {
    padding-top: 0px;
  }

  .left-side-content,
  .right-side-content {
    width: 300px;
  }

  .left-far-bottom {
    margin-top: 690px;
  }
}

@media screen and (max-width: 740px) {
  .center-container {
    width: 150px;
    order: 1;
  }
  .left-side {
    order: 2;
  }

  .right-side {
    right: 0px;
    position: absolute;
    z-index: 1;
  }
}

@media screen and (max-width: 480px) {
  .container-header {
    font-size: 27px;
    margin-bottom: 15px;
  }

  h2 {
    font-size: 22px;
  }
  .center-container {
    width: 80px;
  }
  .number {
    font-size: 52px;
  }
  .circle {
    font-size: 19px;
  }
  .center-line {
    height: 1310px;
  }

  .center-text {
    font-size: 16px;
  }

  .left-side-content,
  .right-side-content {
    width: 300px;
  }

  .left-top-spacing {
    margin-top: 115px;
  }

  .right-left-top-spacing {
    margin-top: 685px;
  }

  .left-far-bottom {
    margin-top: 675px;
  }

  .remove-extra-margin1 {
    padding-top: 40px;
  }

  .remove-extra-margin2 {
    padding-top: 0px;
  }

  .reduce-lineheight {
    line-height: 35px;
  }

  @media screen and (max-width: 420px) {
    .left-side-content,
    .right-side-content {
      width: 240px;
    }

    .remove-padding {
      margin-top: -40px;
    }

    .remove-extra-margin1 {
      margin-top: -40px;
    }

    .remove-extra-margin2 {
      margin-top: -20px;
    }

    .left-far-bottom {
      margin-top: 660px;
    }

    .right-left-top-spacing {
      margin-top: 685px;
    }
  }
}
</style>
