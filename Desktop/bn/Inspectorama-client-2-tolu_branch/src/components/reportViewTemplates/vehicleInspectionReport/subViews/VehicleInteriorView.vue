<template>
  <div>
    <div class="container">
      <div class="sub-container">
        <div class="sub-container__title">
          <h2>{{$t('interiorReport.interiorItems.title').toUpperCase()}}</h2>
        </div>
        <div class="sub-container-body">
          <div class="sub-container-body__title">
            <h2>{{$t('interiorReport.interiorItems.interiorLook').toUpperCase()}}</h2>
          </div>
          <div class="sub-container-body__content">
            <div class="left-box">
              <div class="sub-container-body__sub-content-rating">
                <label>{{$t('generic.condition')}}</label>
                <div class="flex">
                  <div
                    class="rating-color"
                    :style="{'background': effectActiveColor(vehicleInterior.interiorItems.interiorLook.rating)}"
                  ></div>
                  <span>
                    <strong>{{vehicleInterior.interiorItems.interiorLook.rating}}</strong>
                  </span>
                </div>
              </div>
              <div class="sub-container-body__sub-content-comment">
                <label>{{$t('generic.comment')}}</label>
                <span>
                  <strong>{{vehicleInterior.interiorItems.interiorLook.comment}}</strong>
                </span>
              </div>
            </div>
            <div class="right-box">
              <label>{{$t('generic.picture')}}</label>
              <span>
                <img style="width: 100%" :src="dataUrlObj.interiorItems.interiorLook" />
              </span>
            </div>
          </div>
        </div>
        <div class="sub-container-body">
          <div class="sub-container-body__title">
            <h2>{{$t('interiorReport.interiorItems.coolingPerformance').toUpperCase()}}</h2>
          </div>
          <div class="sub-container-body__content">
            <div class="left-box">
              <div class="sub-container-body__sub-content-rating">
                <label>{{$t('generic.condition')}}</label>
                <div class="flex">
                  <div
                    class="rating-color"
                    :style="{'background': effectActiveColor(vehicleInterior.interiorItems.airConditionerCoolingPerformance.rating)}"
                  ></div>
                  <span>
                    <strong>{{vehicleInterior.interiorItems.airConditionerCoolingPerformance.rating}}</strong>
                  </span>
                </div>
              </div>
              <div class="sub-container-body__sub-content-comment">
                <label>{{$t('generic.comment')}}</label>
                <span>
                  <strong>{{vehicleInterior.interiorItems.airConditionerCoolingPerformance.comment}}</strong>
                </span>
              </div>
            </div>
            <div class="right-box">
              <label>{{$t('generic.picture')}}</label>
              <span>
                <img
                  style="width: 100%"
                  :src="dataUrlObj.interiorItems.airConditionerCoolingPerformance"
                />
              </span>
            </div>
          </div>
        </div>
        <div class="sub-container-body">
          <div class="sub-container-body__title">
            <h2>{{$t('interiorReport.interiorItems.heaterOperation').toUpperCase()}}</h2>
          </div>
          <div class="sub-container-body__content">
            <div class="left-box">
              <div class="sub-container-body__sub-content-rating">
                <label>{{$t('generic.condition')}}</label>
                <div class="flex">
                  <div
                    class="rating-color"
                    :style="{'background': effectActiveColor(vehicleInterior.interiorItems.heaterOperation.rating)}"
                  ></div>
                  <span>
                    <strong>{{vehicleInterior.interiorItems.heaterOperation.rating}}</strong>
                  </span>
                </div>
              </div>
              <div class="sub-container-body__sub-content-comment">
                <label>{{$t('generic.comment')}}</label>
                <span>
                  <strong>{{vehicleInterior.interiorItems.heaterOperation.comment}}</strong>
                </span>
              </div>
            </div>
            <div class="right-box">
              <label>{{$t('generic.picture')}}</label>
              <span>
                <img style="width: 100%" :src="dataUrlObj.interiorItems.heaterOperation" />
              </span>
            </div>
          </div>
        </div>
        <div class="sub-container-body">
          <div class="sub-container-body__title">
            <h2>{{$t('interiorReport.interiorItems.hoodRelease').toUpperCase()}}</h2>
          </div>
          <div class="sub-container-body__content">
            <div class="left-box">
              <div class="sub-container-body__sub-content-rating">
                <label>{{$t('generic.condition')}}</label>
                <div class="flex">
                  <div
                    class="rating-color"
                    :style="{'background': effectActiveColor(vehicleInterior.interiorItems.hoodRelease.rating)}"
                  ></div>
                  <span>
                    <strong>{{vehicleInterior.interiorItems.hoodRelease.rating}}</strong>
                  </span>
                </div>
              </div>
              <div class="sub-container-body__sub-content-comment">
                <label>{{$t('generic.comment')}}</label>
                <span>
                  <strong>{{vehicleInterior.interiorItems.hoodRelease.comment}}</strong>
                </span>
              </div>
            </div>
            <div class="right-box">
              <label>{{$t('generic.picture')}}</label>
              <span>
                <img style="width: 100%" :src="dataUrlObj.interiorItems.hoodRelease" />
              </span>
            </div>
          </div>
        </div>
        <div class="sub-container-body">
          <div class="sub-container-body__title">
            <h2>{{$t('interiorReport.interiorItems.cigaretteLighter').toUpperCase()}}</h2>
          </div>
          <div class="sub-container-body__content">
            <div class="left-box">
              <div class="sub-container-body__sub-content-rating">
                <label>{{$t('generic.condition')}}</label>
                <div class="flex">
                  <div
                    class="rating-color"
                    :style="{'background': effectActiveColor(vehicleInterior.interiorItems.cigaretteLighter.rating)}"
                  ></div>
                  <span>
                    <strong>{{vehicleInterior.interiorItems.cigaretteLighter.rating}}</strong>
                  </span>
                </div>
              </div>
              <div class="sub-container-body__sub-content-comment">
                <label>{{$t('generic.comment')}}</label>
                <span>
                  <strong>{{vehicleInterior.interiorItems.cigaretteLighter.comment}}</strong>
                </span>
              </div>
            </div>
            <div class="right-box">
              <label>{{$t('generic.picture')}}</label>
              <span>
                <img style="width: 100%" :src="dataUrlObj.interiorItems.cigaretteLighter" />
              </span>
            </div>
          </div>
        </div>
        <div class="sub-container-body">
          <div class="sub-container-body__title">
            <h2>{{$t('interiorReport.interiorItems.headRests').toUpperCase()}}</h2>
          </div>
          <div class="sub-container-body__content">
            <div class="left-box">
              <div class="sub-container-body__sub-content-rating">
                <label>{{$t('generic.condition')}}</label>
                <div class="flex">
                  <div
                    class="rating-color"
                    :style="{'background': effectActiveColor(vehicleInterior.interiorItems.headRests.rating)}"
                  ></div>
                  <span>
                    <strong>{{vehicleInterior.interiorItems.headRests.rating}}</strong>
                  </span>
                </div>
              </div>
              <div class="sub-container-body__sub-content-comment">
                <label>{{$t('generic.comment')}}</label>
                <span>
                  <strong>{{vehicleInterior.interiorItems.headRests.comment}}</strong>
                </span>
              </div>
            </div>
            <div class="right-box">
              <label>{{$t('generic.picture')}}</label>
              <span>
                <img style="width: 100%" :src="dataUrlObj.interiorItems.headRests" />
              </span>
            </div>
          </div>
        </div>
        <div class="sub-container-body">
          <div class="sub-container-body__title">
            <h2>{{$t('interiorReport.interiorItems.doorPanels').toUpperCase()}}</h2>
          </div>
          <div class="sub-container-body__content">
            <div class="left-box">
              <div class="sub-container-body__sub-content-rating">
                <label>{{$t('generic.condition')}}</label>
                <div class="flex">
                  <div
                    class="rating-color"
                    :style="{'background': effectActiveColor(vehicleInterior.interiorItems.doorPanels.rating)}"
                  ></div>
                  <span>
                    <strong>{{vehicleInterior.interiorItems.doorPanels.rating}}</strong>
                  </span>
                </div>
              </div>
              <div class="sub-container-body__sub-content-comment">
                <label>{{$t('generic.comment')}}</label>
                <span>
                  <strong>{{vehicleInterior.interiorItems.doorPanels.comment}}</strong>
                </span>
              </div>
            </div>
            <div class="right-box">
              <label>{{$t('generic.picture')}}</label>
              <span>
                <img style="width: 100%" :src="dataUrlObj.interiorItems.doorPanels" />
              </span>
            </div>
          </div>
        </div>
        <div class="sub-container-body">
          <div class="sub-container-body__title">
            <h2>{{$t('interiorReport.interiorItems.dashPad').toUpperCase()}}</h2>
          </div>
          <div class="sub-container-body__content">
            <div class="left-box">
              <div class="sub-container-body__sub-content-rating">
                <label>{{$t('generic.condition')}}</label>
                <div class="flex">
                  <div
                    class="rating-color"
                    :style="{'background': effectActiveColor(vehicleInterior.interiorItems.dashPad.rating)}"
                  ></div>
                  <span>
                    <strong>{{vehicleInterior.interiorItems.dashPad.rating}}</strong>
                  </span>
                </div>
              </div>
              <div class="sub-container-body__sub-content-comment">
                <label>{{$t('generic.comment')}}</label>
                <span>
                  <strong>{{vehicleInterior.interiorItems.dashPad.comment}}</strong>
                </span>
              </div>
            </div>
            <div class="right-box">
              <label>{{$t('generic.picture')}}</label>
              <span>
                <img style="width: 100%" :src="dataUrlObj.interiorItems.dashPad" />
              </span>
            </div>
          </div>
        </div>
        <div class="sub-container-body">
          <div class="sub-container-body__title">
            <h2>{{$t('interiorReport.interiorItems.vanityMirrors').toUpperCase()}}</h2>
          </div>
          <div class="sub-container-body__content">
            <div class="left-box">
              <div class="sub-container-body__sub-content-rating">
                <label>{{$t('generic.condition')}}</label>
                <div class="flex">
                  <div
                    class="rating-color"
                    :style="{'background': effectActiveColor(vehicleInterior.interiorItems.vanityMirrors.rating)}"
                  ></div>
                  <span>
                    <strong>{{vehicleInterior.interiorItems.vanityMirrors.rating}}</strong>
                  </span>
                </div>
              </div>
              <div class="sub-container-body__sub-content-comment">
                <label>{{$t('generic.comment')}}</label>
                <span>
                  <strong>{{vehicleInterior.interiorItems.vanityMirrors.comment}}</strong>
                </span>
              </div>
            </div>
            <div class="right-box">
              <label>{{$t('generic.picture')}}</label>
              <span>
                <img style="width: 100%" :src="dataUrlObj.interiorItems.vanityMirrors" />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="sub-container">
        <div class="sub-container__title">
          <h2>{{$t('interiorReport.gauges.title').toUpperCase()}}</h2>
        </div>
        <div class="sub-container-body">
          <div class="sub-container-body__title">
            <h2>{{$t('interiorReport.gauges.speedometer').toUpperCase()}}</h2>
          </div>
          <div class="sub-container-body__content">
            <div class="left-box">
              <div class="sub-container-body__sub-content-rating">
                <label>{{$t('generic.condition')}}</label>
                <div class="flex">
                  <div
                    class="rating-color"
                    :style="{'background': effectActiveColor(vehicleInterior.gauges.speedometer.rating)}"
                  ></div>
                  <span>
                    <strong>{{vehicleInterior.gauges.speedometer.rating}}</strong>
                  </span>
                </div>
              </div>
              <div class="sub-container-body__sub-content-comment">
                <label>{{$t('generic.comment')}}</label>
                <span>
                  <strong>{{vehicleInterior.gauges.speedometer.comment}}</strong>
                </span>
              </div>
            </div>
            <div class="right-box">
              <label>{{$t('generic.picture')}}</label>
              <span>
                <img style="width: 100%" :src="dataUrlObj.gauges.speedometer" />
              </span>
            </div>
          </div>
        </div>
        <div class="sub-container-body">
          <div class="sub-container-body__title">
            <h2>{{$t('interiorReport.gauges.tachometer').toUpperCase()}}</h2>
          </div>
          <div class="sub-container-body__content">
            <div class="left-box">
              <div class="sub-container-body__sub-content-rating">
                <label>{{$t('generic.condition')}}</label>
                <div class="flex">
                  <div
                    class="rating-color"
                    :style="{'background': effectActiveColor(vehicleInterior.gauges.tachometer.rating)}"
                  ></div>
                  <span>
                    <strong>{{vehicleInterior.gauges.tachometer.rating}}</strong>
                  </span>
                </div>
              </div>
              <div class="sub-container-body__sub-content-comment">
                <label>{{$t('generic.comment')}}</label>
                <span>
                  <strong>{{vehicleInterior.gauges.tachometer.comment}}</strong>
                </span>
              </div>
            </div>
            <div class="right-box">
              <label>{{$t('generic.picture')}}</label>
              <span>
                <img style="width: 100%" :src="dataUrlObj.gauges.tachometer" />
              </span>
            </div>
          </div>
        </div>
        <div class="sub-container-body">
          <div class="sub-container-body__title">
            <h2>{{$t('interiorReport.gauges.temperature').toUpperCase()}}</h2>
          </div>
          <div class="sub-container-body__content">
            <div class="left-box">
              <div class="sub-container-body__sub-content-rating">
                <label>{{$t('generic.condition')}}</label>
                <div class="flex">
                  <div
                    class="rating-color"
                    :style="{'background': effectActiveColor(vehicleInterior.gauges.temperature.rating)}"
                  ></div>
                  <span>
                    <strong>{{vehicleInterior.gauges.temperature.rating}}</strong>
                  </span>
                </div>
              </div>
              <div class="sub-container-body__sub-content-comment">
                <label>{{$t('generic.comment')}}</label>
                <span>
                  <strong>{{vehicleInterior.gauges.temperature.comment}}</strong>
                </span>
              </div>
            </div>
            <div class="right-box">
              <label>{{$t('generic.picture')}}</label>
              <span>
                <img style="width: 100%" :src="dataUrlObj.gauges.temperature" />
              </span>
            </div>
          </div>
        </div>
        <div class="sub-container-body">
          <div class="sub-container-body__title">
            <h2>{{$t('interiorReport.guages.oilPressure').toUpperCase()}}</h2>
          </div>
          <div class="sub-container-body__content">
            <div class="left-box">
              <div class="sub-container-body__sub-content-rating">
                <label>{{$t('generic.condition')}}</label>
                <div class="flex">
                  <div
                    class="rating-color"
                    :style="{'background': effectActiveColor(vehicleInterior.gauges.oilPressure.rating)}"
                  ></div>
                  <span>
                    <strong>{{vehicleInterior.gauges.oilPressure.rating}}</strong>
                  </span>
                </div>
              </div>
              <div class="sub-container-body__sub-content-comment">
                <label>{{$t('generic.comment')}}</label>
                <span>
                  <strong>{{vehicleInterior.gauges.oilPressure.comment}}</strong>
                </span>
              </div>
            </div>
            <div class="right-box">
              <label>{{$t('generic.picture')}}</label>
              <span>
                <img style="width: 100%" :src="dataUrlObj.gauges.oilPressure" />
              </span>
            </div>
          </div>
        </div>
        <div class="sub-container-body">
          <div class="sub-container-body__title">
            <h2>{{$t('interiorReport.gauges.ammeter').toUpperCase()}}</h2>
          </div>
          <div class="sub-container-body__content">
            <div class="left-box">
              <div class="sub-container-body__sub-content-rating">
                <label>{{$t('generic.condition')}}</label>
                <div class="flex">
                  <div
                    class="rating-color"
                    :style="{'background': effectActiveColor(vehicleInterior.gauges.ammeter.rating)}"
                  ></div>
                  <span>
                    <strong>{{vehicleInterior.gauges.ammeter.rating}}</strong>
                  </span>
                </div>
              </div>
              <div class="sub-container-body__sub-content-comment">
                <label>{{$t('generic.comment')}}</label>
                <span>
                  <strong>{{vehicleInterior.gauges.ammeter.comment}}</strong>
                </span>
              </div>
            </div>
            <div class="right-box">
              <label>{{$t('generic.picture')}}</label>
              <span>
                <img style="width: 100%" :src="dataUrlObj.gauges.ammeter" />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="sub-container">
        <div class="sub-container__title">
          <h2>{{$t('interiorReport.audioSystem.title').toUpperCase()}}</h2>
        </div>
        <div class="sub-container-body">
          <div class="sub-container-body__title">
            <h2>{{$t('interiorReport.audioSystem.radio').toUpperCase()}}</h2>
          </div>
          <div class="sub-container-body__content">
            <div class="left-box">
              <div class="sub-container-body__sub-content-rating">
                <label>{{$t('generic.condition')}}</label>
                <div class="flex">
                  <div
                    class="rating-color"
                    :style="{'background': effectActiveColor(vehicleInterior.audioSystem.radio.rating)}"
                  ></div>
                  <span>
                    <strong>{{vehicleInterior.gauges.ammeter.rating}}</strong>
                  </span>
                </div>
              </div>
              <div class="sub-container-body__sub-content-comment">
                <label>{{$t('generic.comment')}}</label>
                <span>
                  <strong>{{vehicleInterior.audioSystem.radio.comment}}</strong>
                </span>
              </div>
            </div>
            <div class="right-box">
              <label>{{$t('generic.picture')}}</label>
              <span>
                <img style="width: 100%" :src="dataUrlObj.audioSystem.radio" />
              </span>
            </div>
          </div>
        </div>
        <div class="sub-container-body">
          <div class="sub-container-body__title">
            <h2>{{$t('interiorReport.audioSystem.tapePlayer').toUpperCase()}}</h2>
          </div>
          <div class="sub-container-body__content">
            <div class="left-box">
              <div class="sub-container-body__sub-content-rating">
                <label>{{$t('generic.condition')}}</label>
                <div class="flex">
                  <div
                    class="rating-color"
                    :style="{'background': effectActiveColor(vehicleInterior.audioSystem.tapePlayer.rating)}"
                  ></div>
                  <span>
                    <strong>{{vehicleInterior.audioSystem.tapePlayer.rating}}</strong>
                  </span>
                </div>
              </div>
              <div class="sub-container-body__sub-content-comment">
                <label>{{$t('generic.comment')}}</label>
                <span>
                  <strong>{{vehicleInterior.audioSystem.tapePlayer.comment}}</strong>
                </span>
              </div>
            </div>
            <div class="right-box">
              <label>{{$t('generic.picture')}}</label>
              <span>
                <img style="width: 100%" :src="dataUrlObj.audioSystem.tapePlayer" />
              </span>
            </div>
          </div>
        </div>
        <div class="sub-container-body">
          <div class="sub-container-body__title">
            <h2>{{$t('interiorReport.audioSystem.cdPlayer').toUpperCase()}}</h2>
          </div>
          <div class="sub-container-body__content">
            <div class="left-box">
              <div class="sub-container-body__sub-content-rating">
                <label>{{$t('generic.condition')}}</label>
                <div class="flex">
                  <div
                    class="rating-color"
                    :style="{'background': effectActiveColor(vehicleInterior.audioSystem.cdPlayer.rating)}"
                  ></div>
                  <span>
                    <strong>{{vehicleInterior.audioSystem.cdPlayer.rating}}</strong>
                  </span>
                </div>
              </div>
              <div class="sub-container-body__sub-content-comment">
                <label>{{$t('generic.comment')}}</label>
                <span>
                  <strong>{{vehicleInterior.audioSystem.cdPlayer.comment}}</strong>
                </span>
              </div>
            </div>
            <div class="right-box">
              <label>{{$t('generic.picture')}}</label>
              <span>
                <img style="width: 100%" :src="dataUrlObj.audioSystem.cdPlayer" />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="sub-container">
        <div class="sub-container__title">
          <h2>{{$t('interiorReport.carpetAndUpholstery.title').toUpperCase()}}</h2>
        </div>
        <div class="sub-container-body">
          <div class="sub-container-body__title">
            <h2>{{$t('interiorReport.carpetAndUpholstery.frontSeats').toUpperCase()}}</h2>
          </div>
          <div class="sub-container-body__content">
            <div class="left-box">
              <div class="sub-container-body__sub-content-rating">
                <label>{{$t('generic.condition')}}</label>
                <div class="flex">
                  <div
                    class="rating-color"
                    :style="{'background': effectActiveColor(vehicleInterior.carpetAndUpholstery.frontSeats.rating)}"
                  ></div>
                  <span>
                    <strong>{{vehicleInterior.carpetAndUpholstery.frontSeats.rating}}</strong>
                  </span>
                </div>
              </div>
              <div class="sub-container-body__sub-content-comment">
                <label>{{$t('generic.comment')}}</label>
                <span>
                  <strong>{{vehicleInterior.carpetAndUpholstery.frontSeats.comment}}</strong>
                </span>
              </div>
            </div>
            <div class="right-box">
              <label>{{$t('generic.picture')}}</label>
              <span>
                <img style="width: 100%" :src="dataUrlObj.carpetAndUpholstery.frontSeats" />
              </span>
            </div>
          </div>
        </div>
        <div class="sub-container-body">
          <div class="sub-container-body__title">
            <h2>{{$t('interiorReport.carpetAndUpholstery.rearSeats').toUpperCase()}}</h2>
          </div>
          <div class="sub-container-body__content">
            <div class="left-box">
              <div class="sub-container-body__sub-content-rating">
                <label>{{$t('generic.condition')}}</label>
                <div class="flex">
                  <div
                    class="rating-color"
                    :style="{'background': effectActiveColor(vehicleInterior.carpetAndUpholstery.rearSeats.rating)}"
                  ></div>
                  <span>
                    <strong>{{vehicleInterior.carpetAndUpholstery.rearSeats.rating}}</strong>
                  </span>
                </div>
              </div>
              <div class="sub-container-body__sub-content-comment">
                <label>{{$t('generic.comment')}}</label>
                <span>
                  <strong>{{vehicleInterior.carpetAndUpholstery.rearSeats.comment}}</strong>
                </span>
              </div>
            </div>
            <div class="right-box">
              <label>{{$t('generic.picture')}}</label>
              <span>
                <img style="width: 100%" :src="dataUrlObj.carpetAndUpholstery.rearSeats" />
              </span>
            </div>
          </div>
        </div>
        <div class="sub-container-body">
          <div class="sub-container-body__title">
            <h2>{{$t('interiorReport.carpetAndUpholstery.frontCarpeting').toUpperCase()}}</h2>
          </div>
          <div class="sub-container-body__content">
            <div class="left-box">
              <div class="sub-container-body__sub-content-rating">
                <label>{{$t('generic.condition')}}</label>
                <div class="flex">
                  <div
                    class="rating-color"
                    :style="{'background': effectActiveColor(vehicleInterior.carpetAndUpholstery.frontCarpeting.rating)}"
                  ></div>
                  <span>
                    <strong>{{vehicleInterior.carpetAndUpholstery.frontCarpeting.rating}}</strong>
                  </span>
                </div>
              </div>
              <div class="sub-container-body__sub-content-comment">
                <label>{{$t('generic.comment')}}</label>
                <span>
                  <strong>{{vehicleInterior.carpetAndUpholstery.frontCarpeting.comment}}</strong>
                </span>
              </div>
            </div>
            <div class="right-box">
              <label>{{$t('generic.picture')}}</label>
              <span>
                <img style="width: 100%" :src="dataUrlObj.carpetAndUpholstery.frontCarpeting" />
              </span>
            </div>
          </div>
        </div>
        <div class="sub-container-body">
          <div class="sub-container-body__title">
            <h2>{{$t('interiorReport.carpetAndUpholstery.rearCarpeting').toUpperCase()}}</h2>
          </div>
          <div class="sub-container-body__content">
            <div class="left-box">
              <div class="sub-container-body__sub-content-rating">
                <label>{{$t('generic.condition')}}</label>
                <div class="flex">
                  <div
                    class="rating-color"
                    :style="{'background': effectActiveColor(vehicleInterior.carpetAndUpholstery.rearCarpeting.rating)}"
                  ></div>
                  <span>
                    <strong>{{vehicleInterior.carpetAndUpholstery.rearCarpeting.rating}}</strong>
                  </span>
                </div>
              </div>
              <div class="sub-container-body__sub-content-comment">
                <label>{{$t('generic.comment')}}</label>
                <span>
                  <strong>{{vehicleInterior.carpetAndUpholstery.rearCarpeting.comment}}</strong>
                </span>
              </div>
            </div>
            <div class="right-box">
              <label>{{$t('generic.picture')}}</label>
              <span>
                <img style="width: 100%" :src="dataUrlObj.carpetAndUpholstery.rearCarpeting" />
              </span>
            </div>
          </div>
        </div>
        <div class="sub-container-body">
          <div class="sub-container-body__title">
            <h2>{{$t('interiorReport.carpetAndUpholstery.headliner').toUpperCase()}}</h2>
          </div>
          <div class="sub-container-body__content">
            <div class="left-box">
              <div class="sub-container-body__sub-content-rating">
                <label>{{$t('generic.condition')}}</label>
                <div class="flex">
                  <div
                    class="rating-color"
                    :style="{'background': effectActiveColor(vehicleInterior.carpetAndUpholstery.headliner.rating)}"
                  ></div>
                  <span>
                    <strong>{{vehicleInterior.carpetAndUpholstery.headliner.rating}}</strong>
                  </span>
                </div>
              </div>
              <div class="sub-container-body__sub-content-comment">
                <label>{{$t('generic.comment')}}</label>
                <span>
                  <strong>{{vehicleInterior.carpetAndUpholstery.headliner.comment}}</strong>
                </span>
              </div>
            </div>
            <div class="right-box">
              <label>{{$t('generic.picture')}}</label>
              <span>
                <img style="width: 100%" :src="dataUrlObj.carpetAndUpholstery.headliner" />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="sub-container">
        <div class="sub-container__title">
          <h2>{{$t('interiorReport.trunk.title').toUpperCase()}}</h2>
        </div>
        <div class="sub-container-body">
          <div class="sub-container-body__title">
            <h2>{{$t('interiorReport.trunk.carpeting').toUpperCase()}}</h2>
          </div>
          <div class="sub-container-body__content">
            <div class="left-box">
              <div class="sub-container-body__sub-content-rating">
                <label>{{$t('generic.condition')}}</label>
                <div class="flex">
                  <div
                    class="rating-color"
                    :style="{'background': effectActiveColor(vehicleInterior.trunk.carpeting.rating)}"
                  ></div>
                  <span>
                    <strong>{{vehicleInterior.trunk.carpeting.rating}}</strong>
                  </span>
                </div>
              </div>
              <div class="sub-container-body__sub-content-comment">
                <label>{{$t('generic.comment')}}</label>
                <span>
                  <strong>{{vehicleInterior.trunk.carpeting.comment}}</strong>
                </span>
              </div>
            </div>
            <div class="right-box">
              <label>{{$t('generic.picture')}}</label>
              <span>
                <img style="width: 100%" :src="dataUrlObj.trunk.carpeting" />
              </span>
            </div>
          </div>
        </div>
        <div class="sub-container-body">
          <div class="sub-container-body__title">
            <h2>{{$t('interiorReport.trunk.spareTire').toUpperCase()}}</h2>
          </div>
          <div class="sub-container-body__content">
            <div class="left-box">
              <div class="sub-container-body__sub-content-rating">
                <label>{{$t('generic.condition')}}</label>
                <div class="flex">
                  <div
                    class="rating-color"
                    :style="{'background': effectActiveColor(vehicleInterior.trunk.spareTire.rating)}"
                  ></div>
                  <span>
                    <strong>{{vehicleInterior.trunk.spareTire.rating}}</strong>
                  </span>
                </div>
              </div>
              <div class="sub-container-body__sub-content-comment">
                <label>{{$t('generic.comment')}}</label>
                <span>
                  <strong>{{vehicleInterior.trunk.spareTire.comment}}</strong>
                </span>
              </div>
            </div>
            <div class="right-box">
              <label>{{$t('generic.picture')}}</label>
              <span>
                <img style="width: 100%" :src="dataUrlObj.trunk.spareTire" />
              </span>
            </div>
          </div>
        </div>
        <div class="sub-container-body">
          <div class="sub-container-body__title">
            <h2>{{$t('interiorReport.trunk.tools').toUpperCase()}}</h2>
          </div>
          <div class="sub-container-body__content">
            <div class="left-box">
              <div class="sub-container-body__sub-content-rating">
                <label>{{$t('generic.condition')}}</label>
                <div class="flex">
                  <div
                    class="rating-color"
                    :style="{'background': effectActiveColor(vehicleInterior.trunk.tools.rating)}"
                  ></div>
                  <span>
                    <strong>{{vehicleInterior.trunk.tools.rating}}</strong>
                  </span>
                </div>
              </div>
              <div class="sub-container-body__sub-content-comment">
                <label>{{$t('generic.comment')}}</label>
                <span>
                  <strong>{{vehicleInterior.trunk.tools.comment}}</strong>
                </span>
              </div>
            </div>
            <div class="right-box">
              <label>{{$t('generic.picture')}}</label>
              <span>
                <img style="width: 100%" :src="dataUrlObj.trunk.tools" />
              </span>
            </div>
          </div>
        </div>
        <div class="sub-container-body">
          <div class="sub-container-body__title">
            <h2>{{$t('interiorReport.trunk.jack').toUpperCase()}}</h2>
          </div>
          <div class="sub-container-body__content">
            <div class="left-box">
              <div class="sub-container-body__sub-content-rating">
                <label>{{$t('generic.condition')}}</label>
                <div class="flex">
                  <div
                    class="rating-color"
                    :style="{'background': effectActiveColor(vehicleInterior.trunk.jack.rating)}"
                  ></div>
                  <span>
                    <strong>{{vehicleInterior.trunk.jack.rating}}</strong>
                  </span>
                </div>
              </div>
              <div class="sub-container-body__sub-content-comment">
                <label>{{$t('generic.comment')}}</label>
                <span>
                  <strong>{{vehicleInterior.trunk.jack.comment}}</strong>
                </span>
              </div>
            </div>
            <div class="right-box">
              <label>{{$t('generic.picture')}}</label>
              <span>
                <img style="width: 100%" :src="dataUrlObj.trunk.jack" />
              </span>
            </div>
          </div>
        </div>
        <div class="sub-container-body">
          <div class="sub-container-body__title">
            <h2>{{$t('interiorReport.trunk.floorPan').toUpperCase()}}</h2>
          </div>
          <div class="sub-container-body__content">
            <div class="left-box">
              <div class="sub-container-body__sub-content-rating">
                <label>{{$t('generic.condition')}}</label>
                <div class="flex">
                  <div
                    class="rating-color"
                    :style="{'background': effectActiveColor(vehicleInterior.trunk.floorPan.rating)}"
                  ></div>
                  <span>
                    <strong>{{vehicleInterior.trunk.floorPan.rating}}</strong>
                  </span>
                </div>
              </div>
              <div class="sub-container-body__sub-content-comment">
                <label>{{$t('generic.comment')}}</label>
                <span>
                  <strong>{{vehicleInterior.trunk.floorPan.comment}}</strong>
                </span>
              </div>
            </div>
            <div class="right-box">
              <label>{{$t('generic.picture')}}</label>
              <span>
                <img style="width: 100%" :src="dataUrlObj.trunk.floorPan" />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="sub-container">
        <div class="sub-container__title">
          <h2>{{$t('interiorReport.electricalSystem.title').toUpperCase()}}</h2>
        </div>
        <div class="sub-container-body">
          <div class="sub-container-body__title">
            <h2>{{$t('interiorReport.electricalSystem.headLights').toUpperCase()}}</h2>
          </div>
          <div class="sub-container-body__content">
            <div class="left-box">
              <div class="sub-container-body__sub-content-rating">
                <label>{{$t('generic.condition')}}</label>
                <div class="flex">
                  <div
                    class="rating-color"
                    :style="{'background': effectActiveColor(vehicleInterior.electricalSystem.headLights.rating)}"
                  ></div>
                  <span>
                    <strong>{{vehicleInterior.electricalSystem.headLights.rating}}</strong>
                  </span>
                </div>
              </div>
              <div class="sub-container-body__sub-content-comment">
                <label>{{$t('generic.comment')}}</label>
                <span>
                  <strong>{{vehicleInterior.electricalSystem.headLights.comment}}</strong>
                </span>
              </div>
            </div>
            <div class="right-box">
              <label>{{$t('generic.picture')}}</label>
              <span>
                <img style="width: 100%" :src="dataUrlObj.electricalSystem.headLights" />
              </span>
            </div>
          </div>
        </div>
        <div class="sub-container-body">
          <div class="sub-container-body__title">
            <h2>{{$t('interiorReport.electricalSystem.turnSignal').toUpperCase()}}</h2>
          </div>
          <div class="sub-container-body__content">
            <div class="left-box">
              <div class="sub-container-body__sub-content-rating">
                <label>{{$t('generic.condition')}}</label>
                <div class="flex">
                  <div
                    class="rating-color"
                    :style="{'background': effectActiveColor(vehicleInterior.electricalSystem.turnSignals.rating)}"
                  ></div>
                  <span>
                    <strong>{{vehicleInterior.electricalSystem.turnSignals.rating}}</strong>
                  </span>
                </div>
              </div>
              <div class="sub-container-body__sub-content-comment">
                <label>{{$t('generic.comment')}}</label>
                <span>
                  <strong>{{vehicleInterior.electricalSystem.turnSignals.comment}}</strong>
                </span>
              </div>
            </div>
            <div class="right-box">
              <label>{{$t('generic.picture')}}</label>
              <span>
                <img style="width: 100%" :src="dataUrlObj.electricalSystem.turnSignals" />
              </span>
            </div>
          </div>
        </div>
        <div class="sub-container-body">
          <div class="sub-container-body__title">
            <h2>{{$t('interiorReport.electricalSystem.tailLights').toUpperCase()}}</h2>
          </div>
          <div class="sub-container-body__content">
            <div class="left-box">
              <div class="sub-container-body__sub-content-rating">
                <label>{{$t('generic.condition')}}</label>
                <div class="flex">
                  <div
                    class="rating-color"
                    :style="{'background': effectActiveColor(vehicleInterior.electricalSystem.tailLights.rating)}"
                  ></div>
                  <span>
                    <strong>{{vehicleInterior.electricalSystem.tailLights.rating}}</strong>
                  </span>
                </div>
              </div>
              <div class="sub-container-body__sub-content-comment">
                <label>{{$t('generic.comment')}}</label>
                <span>
                  <strong>{{vehicleInterior.electricalSystem.tailLights.comment}}</strong>
                </span>
              </div>
            </div>
            <div class="right-box">
              <label>{{$t('generic.picture')}}</label>
              <span>
                <img style="width: 100%" :src="dataUrlObj.electricalSystem.tailLights" />
              </span>
            </div>
          </div>
        </div>
        <div class="sub-container-body">
          <div class="sub-container-body__title">
            <h2>{{$t('interiorReport.electricalSystem.electricWindows').toUpperCase()}}</h2>
          </div>
          <div class="sub-container-body__content">
            <div class="left-box">
              <div class="sub-container-body__sub-content-rating">
                <label>{{$t('generic.condition')}}</label>
                <div class="flex">
                  <div
                    class="rating-color"
                    :style="{'background': effectActiveColor(vehicleInterior.electricalSystem.electricWindows.rating)}"
                  ></div>
                  <span>
                    <strong>{{vehicleInterior.electricalSystem.electricWindows.rating}}</strong>
                  </span>
                </div>
              </div>
              <div class="sub-container-body__sub-content-comment">
                <label>{{$t('generic.comment')}}</label>
                <span>
                  <strong>{{vehicleInterior.electricalSystem.electricWindows.comment}}</strong>
                </span>
              </div>
            </div>
            <div class="right-box">
              <label>{{$t('generic.picture')}}</label>
              <span>
                <img style="width: 100%" :src="dataUrlObj.electricalSystem.electricWindows" />
              </span>
            </div>
          </div>
        </div>
        <div class="sub-container-body">
          <div class="sub-container-body__title">
            <h2>{{$t('interiorReport.electricalSystem.brakeLights').toUpperCase()}}</h2>
          </div>
          <div class="sub-container-body__content">
            <div class="left-box">
              <div class="sub-container-body__sub-content-rating">
                <label>{{$t('generic.condition')}}</label>
                <div class="flex">
                  <div
                    class="rating-color"
                    :style="{'background': effectActiveColor(vehicleInterior.electricalSystem.brakeLights.rating)}"
                  ></div>
                  <span>
                    <strong>{{vehicleInterior.electricalSystem.brakeLights.rating}}</strong>
                  </span>
                </div>
              </div>
              <div class="sub-container-body__sub-content-comment">
                <label>{{$t('generic.comment')}}</label>
                <span>
                  <strong>{{vehicleInterior.electricalSystem.brakeLights.comment}}</strong>
                </span>
              </div>
            </div>
            <div class="right-box">
              <label>{{$t('generic.picture')}}</label>
              <span>
                <img style="width: 100%" :src="dataUrlObj.electricalSystem.brakeLights" />
              </span>
            </div>
          </div>
        </div>
        <div class="sub-container-body">
          <div class="sub-container-body__title">
            <h2>{{$t('interiorReport.electricalSystem.electricSeats').toUpperCase()}}</h2>
          </div>
          <div class="sub-container-body__content">
            <div class="left-box">
              <div class="sub-container-body__sub-content-rating">
                <label>{{$t('generic.condition')}}</label>
                <div class="flex">
                  <div
                    class="rating-color"
                    :style="{'background': effectActiveColor(vehicleInterior.electricalSystem.electricSeats.rating)}"
                  ></div>
                  <span>
                    <strong>{{vehicleInterior.electricalSystem.electricSeats.rating}}</strong>
                  </span>
                </div>
              </div>
              <div class="sub-container-body__sub-content-comment">
                <label>{{$t('generic.comment')}}</label>
                <span>
                  <strong>{{vehicleInterior.electricalSystem.electricSeats.comment}}</strong>
                </span>
              </div>
            </div>
            <div class="right-box">
              <label>{{$t('generic.picture')}}</label>
              <span>
                <img style="width: 100%" :src="dataUrlObj.electricalSystem.electricSeats" />
              </span>
            </div>
          </div>
        </div>
        <div class="sub-container-body">
          <div class="sub-container-body__title">
            <h2>{{$t('interiorReport.electricalSystem.parkingLights').toUpperCase()}}</h2>
          </div>
          <div class="sub-container-body__content">
            <div class="left-box">
              <div class="sub-container-body__sub-content-rating">
                <label>{{$t('generic.condition')}}</label>
                <div class="flex">
                  <div
                    class="rating-color"
                    :style="{'background': effectActiveColor(vehicleInterior.electricalSystem.parkingLights.rating)}"
                  ></div>
                  <span>
                    <strong>{{vehicleInterior.electricalSystem.parkingLights.rating}}</strong>
                  </span>
                </div>
              </div>
              <div class="sub-container-body__sub-content-comment">
                <label>{{$t('generic.comment')}}</label>
                <span>
                  <strong>{{vehicleInterior.electricalSystem.parkingLights.comment}}</strong>
                </span>
              </div>
            </div>
            <div class="right-box">
              <label>{{$t('generic.picture')}}</label>
              <span>
                <img style="width: 100%" :src="dataUrlObj.electricalSystem.parkingLights" />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="sub-container">
        <div class="sub-container__title">
          <h2>{{$t('interiorReport.underTheHood.title').toUpperCase()}}</h2>
        </div>
        <div class="sub-container-body">
          <div class="sub-container-body__title">
            <h2>{{$t('interiorReport.underTheHood.oilLeaks').toUpperCase()}}</h2>
          </div>
          <div class="sub-container-body__content">
            <div class="left-box">
              <div class="sub-container-body__sub-content-rating">
                <label>{{$t('generic.condition')}}</label>
                <div class="flex">
                  <div
                    class="rating-color"
                    :style="{'background': effectActiveColor(vehicleInterior.underThehood.oilLeaks.rating)}"
                  ></div>
                  <span>
                    <strong>{{vehicleInterior.underThehood.oilLeaks.rating}}</strong>
                  </span>
                </div>
              </div>
              <div class="sub-container-body__sub-content-comment">
                <label>{{$t('generic.comment')}}</label>
                <span>
                  <strong>{{vehicleInterior.underThehood.oilLeaks.comment}}</strong>
                </span>
              </div>
            </div>
            <div class="right-box">
              <label>{{$t('generic.picture')}}</label>
              <span>
                <img style="width: 100%" :src="dataUrlObj.underThehood.oilLeaks" />
              </span>
            </div>
          </div>
        </div>
        <div class="sub-container-body">
          <div class="sub-container-body__title">
            <h2>{{$t('interiorReport.underTheHood.exhaustLeaks').toUpperCase()}}</h2>
          </div>
          <div class="sub-container-body__content">
            <div class="left-box">
              <div class="sub-container-body__sub-content-rating">
                <label>{{$t('generic.condition')}}</label>
                <div class="flex">
                  <div
                    class="rating-color"
                    :style="{'background': effectActiveColor(vehicleInterior.underThehood.exhaustLeaks.rating)}"
                  ></div>
                  <span>
                    <strong>{{vehicleInterior.underThehood.exhaustLeaks.rating}}</strong>
                  </span>
                </div>
              </div>
              <div class="sub-container-body__sub-content-comment">
                <label>{{$t('generic.comment')}}</label>
                <span>
                  <strong>{{vehicleInterior.underThehood.exhaustLeaks.comment}}</strong>
                </span>
              </div>
            </div>
            <div class="right-box">
              <label>{{$t('generic.picture')}}</label>
              <span>
                <img style="width: 100%" :src="dataUrlObj.underThehood.exhaustLeaks" />
              </span>
            </div>
          </div>
        </div>
        <div class="sub-container-body">
          <div class="sub-container-body__title">
            <h2>{{$t('interiorReport.underTheHood.exhaustSmoke').toUpperCase()}}</h2>
          </div>
          <div class="sub-container-body__content">
            <div class="left-box">
              <div class="sub-container-body__sub-content-rating">
                <label>{{$t('generic.condition')}}</label>
                <div class="flex">
                  <div
                    class="rating-color"
                    :style="{'background': effectActiveColor(vehicleInterior.underThehood.exhaustSmoke.rating)}"
                  ></div>
                  <span>
                    <strong>{{vehicleInterior.underThehood.exhaustSmoke.rating}}</strong>
                  </span>
                </div>
              </div>
              <div class="sub-container-body__sub-content-comment">
                <label>{{$t('generic.comment')}}</label>
                <span>
                  <strong>{{vehicleInterior.underThehood.exhaustSmoke.comment}}</strong>
                </span>
              </div>
            </div>
            <div class="right-box">
              <label>{{$t('generic.picture')}}</label>
              <span>
                <img style="width: 100%" :src="dataUrlObj.underThehood.exhaustSmoke" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ratings from "../../../../mockData/ratings";
export default {
  data() {
    return {
      vehicleInterior: "",
      dataUrlObj: {
        interiorItems: {
          interiorLook: "",
          airConditionerCoolingPerformance: "",
          heaterOperation: "",
          hoodRelease: "",
          cigaretteLighter: "",
          headRests: "",
          doorPanels: "",
          dashPad: "",
          vanityMirrors: ""
        },
        gauges: {
          speedometer: "",
          tachometer: "",
          temperature: "",
          oilPressure: "",
          ammeter: ""
        },
        audioSystem: {
          radio: "",
          tapePlayer: "",
          cdPlayer: ""
        },
        carpetAndUpholstery: {
          frontSeats: "",
          rearSeats: "",
          frontCarpeting: "",
          rearCarpeting: "",
          headliner: ""
        },
        trunk: {
          carpeting: "",
          spareTire: "",
          tools: "",
          jack: "",
          floorPan: ""
        },
        electricalSystem: {
          headLights: "",
          turnSignals: "",
          tailLights: "",
          electricWindows: "",
          brakeLights: "",
          electricSeats: "",
          parkingLights: ""
        },
        underThehood: {
          oilLeaks: "",
          exhaustLeaks: "",
          exhaustSmoke: ""
        }
      },
      ratings: ratings
    };
  },

  computed: {},

  methods: {
    effectActiveColor(event) {
      const color = [];
      this.ratings.forEach(item => {
        if (item.condition == event) {
          color.push(item.color);
        }
      });
      return color[0];
    }
  },

  created() {
    const orderId = this.$route.params.orderId;
    axios
      .get(`/vehicle_inspection_reports/${orderId}`)
      .then(res => {
        this.vehicleInterior = res.data.vehicleInterior;
      })
      .catch(error => {
        console.log(error.response);
      });

    //Gets the picture data
    axios
      .get("/vehicle_inspection_reports/interior-pictures/" + orderId)
      .then(res => {
        const resData = res.data;
        resData.forEach(item => {
          if (item.fileName == "interior-look") {
            this.dataUrlObj.interiorItems.interiorLook =
              "data:" + item.contentType + ";base64," + item.base64Data;
          } else if (item.fileName == "air-conditioner") {
            this.dataUrlObj.interiorItems.airConditionerCoolingPerformance =
              "data:" + item.contentType + ";base64," + item.base64Data;
          } else if (item.fileName == "heater-operation") {
            this.dataUrlObj.interiorItems.heaterOperation =
              "data:" + item.contentType + ";base64," + item.base64Data;
          } else if (item.fileName == "hood-release") {
            this.dataUrlObj.interiorItems.hoodRelease =
              "data:" + item.contentType + ";base64," + item.base64Data;
          } else if (item.fileName == "cigarette-lighter") {
            this.dataUrlObj.interiorItems.cigaretteLighter =
              "data:" + item.contentType + ";base64," + item.base64Data;
          } else if (item.fileName == "head-rests") {
            this.dataUrlObj.interiorItems.headRests =
              "data:" + item.contentType + ";base64," + item.base64Data;
          } else if (item.fileName == "door-panels") {
            this.dataUrlObj.interiorItems.doorPanels =
              "data:" + item.contentType + ";base64," + item.base64Data;
          } else if (item.fileName == "dash-pad") {
            this.dataUrlObj.interiorItems.dashPad =
              "data:" + item.contentType + ";base64," + item.base64Data;
          } else if (item.fileName == "vanity-mirrors") {
            this.dataUrlObj.interiorItems.vanityMirrors =
              "data:" + item.contentType + ";base64," + item.base64Data;
          }
          //
          else if (item.fileName == "speedometer") {
            this.dataUrlObj.gauges.speedometer =
              "data:" + item.contentType + ";base64," + item.base64Data;
          } else if (item.fileName == "tachometer") {
            this.dataUrlObj.gauges.tachometer =
              "data:" + item.contentType + ";base64," + item.base64Data;
          } else if (item.fileName == "temperature") {
            this.dataUrlObj.gauges.temperature =
              "data:" + item.contentType + ";base64," + item.base64Data;
          } else if (item.fileName == "oil-pressure") {
            this.dataUrlObj.gauges.oilPressure =
              "data:" + item.contentType + ";base64," + item.base64Data;
          } else if (item.fileName == "ammeter") {
            this.dataUrlObj.gauges.ammeter =
              "data:" + item.contentType + ";base64," + item.base64Data;
          }
          //
          else if (item.fileName == "radio") {
            this.dataUrlObj.audioSystem.radio =
              "data:" + item.contentType + ";base64," + item.base64Data;
          } else if (item.fileName == "radio") {
            this.dataUrlObj.audioSystem.radio =
              "data:" + item.contentType + ";base64," + item.base64Data;
          } else if (item.fileName == "tape-player") {
            this.dataUrlObj.audioSystem.tapePlayer =
              "data:" + item.contentType + ";base64," + item.base64Data;
          }
          //
          else if (item.fileName == "cd-player") {
            this.dataUrlObj.carpetAndUpholstery.cdPlayer =
              "data:" + item.contentType + ";base64," + item.base64Data;
          } else if (item.fileName == "front-seats") {
            this.dataUrlObj.carpetAndUpholstery.frontSeats =
              "data:" + item.contentType + ";base64," + item.base64Data;
          } else if (item.fileName == "rear-seats") {
            this.dataUrlObj.carpetAndUpholstery.rearSeats =
              "data:" + item.contentType + ";base64," + item.base64Data;
          } else if (item.fileName == "front-carpeting") {
            this.dataUrlObj.carpetAndUpholstery.frontCarpeting =
              "data:" + item.contentType + ";base64," + item.base64Data;
          } else if (item.fileName == "rear-carpeting") {
            this.dataUrlObj.carpetAndUpholstery.rearCarpeting =
              "data:" + item.contentType + ";base64," + item.base64Data;
          } else if (item.fileName == "headliner") {
            this.dataUrlObj.carpetAndUpholstery.headliner =
              "data:" + item.contentType + ";base64," + item.base64Data;
          }
          //
          else if (item.fileName == "trunk-carpeting") {
            this.dataUrlObj.trunk.carpeting =
              "data:" + item.contentType + ";base64," + item.base64Data;
          } else if (item.fileName == "tools") {
            this.dataUrlObj.trunk.tools =
              "data:" + item.contentType + ";base64," + item.base64Data;
          } else if (item.fileName == "spare-tire") {
            this.dataUrlObj.trunk.spareTire.data =
              "data:" + item.contentType + ";base64," + item.base64Data;
          } else if (item.fileName == "jack") {
            this.dataUrlObj.trunk.jack =
              "data:" + item.contentType + ";base64," + item.base64Data;
          } else if (item.fileName == "floor-pan") {
            this.dataUrlObj.trunk.floorPan =
              "data:" + item.contentType + ";base64," + item.base64Data;
          }
          //
          else if (item.fileName == "head-lights") {
            this.dataUrlObj.electricalSystem.headLights =
              "data:" + item.contentType + ";base64," + item.base64Data;
          } else if (item.fileName == "turn-signals") {
            this.dataUrlObj.electricalSystem.turnSignals =
              "data:" + item.contentType + ";base64," + item.base64Data;
          } else if (item.fileName == "tail-lights") {
            this.dataUrlObj.electricalSystem.tailLights =
              "data:" + item.contentType + ";base64," + item.base64Data;
          } else if (item.fileName == "electric-windows") {
            this.dataUrlObj.electricalSystem.electricWindows =
              "data:" + item.contentType + ";base64," + item.base64Data;
          } else if (item.fileName == "brake-lights") {
            this.dataUrlObj.electricalSystem.brakeLights =
              "data:" + item.contentType + ";base64," + item.base64Data;
          } else if (item.fileName == "electric-seats") {
            this.dataUrlObj.electricalSystem.electricSeats =
              "data:" + item.contentType + ";base64," + item.base64Data;
          } else if (item.fileName == "parking-lights") {
            this.dataUrlObj.electricalSystem.parkingLights =
              "data:" + item.contentType + ";base64," + item.base64Data;
          }
          //
          else if (item.fileName == "oil-leaks") {
            this.dataUrlObj.electricalSystem.oilLeaks =
              "data:" + item.contentType + ";base64," + item.base64Data;
          } else if (item.fileName == "exhaust-leaks") {
            this.dataUrlObj.electricalSystem.exhaustLeaks =
              "data:" + item.contentType + ";base64," + item.base64Data;
          } else if (item.fileName == "exhaust-smoke") {
            this.dataUrlObj.electricalSystem.exhaustSmoke =
              "data:" + item.contentType + ";base64," + item.base64Data;
          }
        });
      })
      .catch(error => console.log(error));
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.container {
  font-family: sans-serif, Arial, Helvetica;
  width: 100%;
  background-color: white;
  display: inline-block;
}

.sub-container {
  font-size: 12px;
  margin-top: 30px;
  border-radius: 25px;
  border: 1px solid #b6b1b1;
  width: 100%;
  display: inline-block;
}

.sub-container:last-child {
  margin-bottom: 30px;
}

.sub-container__title,
.sub-container-body__title {
  font-size: 17px;
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: center;
  width: 100%;
}

.sub-container-body__title {
  font-size: 11px;
  padding-top: 14px;
  padding-bottom: 14px;
  border-top: 1px solid #b6b1b1;
  border-bottom: 1px solid #b6b1b1;
}

.sub-container-body__content {
  padding: 25px 20px;
  font-size: 13px;
  width: 100%;
  display: flex;
}

.flex {
  display: flex;
  align-items: center;
}

.rating-color {
  margin-left: 23px;
  margin-right: 8px;
  width: 15px;
  height: 15px;
}

.sub-container-body__sub-content-rating {
  margin-bottom: 25px;
  align-items: center;
  display: flex;
}

.left-box {
  width: 50%;
}

.right-box {
  width: 50%;
  display: flex;
}

.right-box label {
  margin-right: 20px;
}

.right-box span {
  flex: 1;
}

.sub-container-body__sub-content-comment {
  display: flex;
}

.sub-container-body__sub-content-comment span {
  margin-left: 20px;
  margin-right: 40px;
  word-break: break-all;
  display: block;
}

/* For mobile phones: */
@media only screen and (max-width: 580px) {
  .sub-container {
    border-radius: 20px;
  }

  .sub-container__title {
    font-size: 16px;
  }

  .sub-container-body__content {
    padding: 25px 15px;
  }
  .sub-container-body__content {
    flex-direction: column;
  }

  .left-box,
  .right-box {
    width: 100%;
  }

  .right-box {
    flex-direction: column;
  }

  .right-box span {
    margin-top: 5px;
  }
  .sub-container-body__sub-content-comment span {
    margin-right: 0px;
    width: 100%;
  }

  .sub-container-body__sub-content-rating,
  .sub-container-body__sub-content-comment {
    margin-bottom: 20px;
  }

  @media only screen and (max-width: 360px) {
    .sub-container {
      border-radius: 16px;
    }

    .sub-container-body__content {
      padding-left: 10px;
      padding-right: 10px;
    }

    .rating-color {
      margin-left: 16px;
    }

    .sub-container-body__sub-content-comment span {
      margin-left: 14px;
    }
  }
}
</style>