<template>
  <div>
    <div class="container">
      <div class="sub-container">
        <div class="sub-container__title">
          <h2>{{$t('exteriorReport.body.title').toUpperCase()}}</h2>
        </div>
        <div class="sub-container-body">
          <div class="sub-container-body__title">
            <h2>{{$t('exteriorReport.body.front').toUpperCase()}}</h2>
          </div>
          <div class="sub-container-body__content">
            <div class="left-box">
              <div class="sub-container-body__sub-content-rating">
                <label>{{$t('generic.condition')}}</label>
                <div class="flex">
                  <div
                    class="rating-color"
                    :style="{'background': effectActiveColor(vehicleExteriorBody.front.rating)}"
                  ></div>
                  <span>
                    <strong>{{vehicleExteriorBody.front.rating}}</strong>
                  </span>
                </div>
              </div>
              <div class="sub-container-body__sub-content-comment">
                <label>{{$t('generic.comment')}}</label>
                <span>
                  <strong>{{vehicleExteriorBody.front.comment}}</strong>
                </span>
              </div>
            </div>
            <div class="right-box">
              <label>{{$t('generic.picture')}}</label>
              <span>
                <img style="width: 100%" :src="dataUrlObj.front" />
              </span>
            </div>
          </div>
        </div>
        <div class="sub-container-body">
          <div class="sub-container-body__title">
            <h2>{{$t('exteriorReport.body.rear').toUpperCase()}}</h2>
          </div>
          <div class="sub-container-body__content">
            <div class="left-box">
              <div class="sub-container-body__sub-content-rating">
                <label>{{$t('generic.condition')}}</label>
                <div class="flex">
                  <div
                    class="rating-color"
                    :style="{'background': effectActiveColor(vehicleExteriorBody.rear.rating)}"
                  ></div>
                  <span>
                    <strong>{{vehicleExteriorBody.rear.rating}}</strong>
                  </span>
                </div>
              </div>
              <div class="sub-container-body__sub-content-comment">
                <label>{{$t('generic.comment')}}</label>
                <span>
                  <strong>{{vehicleExteriorBody.rear.comment}}</strong>
                </span>
              </div>
            </div>
            <div class="right-box">
              <label>{{$t('generic.picture')}}</label>
              <span>
                <img style="width: 100%" :src="dataUrlObj.rear" />
              </span>
            </div>
          </div>
        </div>
        <div class="sub-container-body">
          <div class="sub-container-body__title">
            <h2>{{$t('exteriorReport.body.hood').toUpperCase()}}</h2>
          </div>
          <div class="sub-container-body__content">
            <div class="left-box">
              <div class="sub-container-body__sub-content-rating">
                <label>{{$t('generic.condition')}}</label>
                <div class="flex">
                  <div
                    class="rating-color"
                    :style="{'background': effectActiveColor(vehicleExteriorBody.hood.rating)}"
                  ></div>
                  <span>
                    <strong>{{vehicleExteriorBody.hood.rating}}</strong>
                  </span>
                </div>
              </div>
              <div class="sub-container-body__sub-content-comment">
                <label>{{$t('generic.comment')}}</label>
                <span>
                  <strong>{{vehicleExteriorBody.hood.comment}}</strong>
                </span>
              </div>
            </div>
            <div class="right-box">
              <label>{{$t('generic.picture')}}</label>
              <span>
                <img style="width: 100%" :src="dataUrlObj.hood" />
              </span>
            </div>
          </div>
        </div>
        <div class="sub-container-body">
          <div class="sub-container-body__title">
            <h2>{{$t('exteriorReport.body.roof').toUpperCase()}}</h2>
          </div>
          <div class="sub-container-body__content">
            <div class="left-box">
              <div class="sub-container-body__sub-content-rating">
                <label>{{$t('generic.condition')}}</label>
                <div class="flex">
                  <div
                    class="rating-color"
                    :style="{'background': effectActiveColor(vehicleExteriorBody.roof.rating)}"
                  ></div>
                  <span>
                    <strong>{{vehicleExteriorBody.roof.rating}}</strong>
                  </span>
                </div>
              </div>
              <div class="sub-container-body__sub-content-comment">
                <label>{{$t('generic.comment')}}</label>
                <span>
                  <strong>{{vehicleExteriorBody.roof.comment}}</strong>
                </span>
              </div>
            </div>
            <div class="right-box">
              <label>{{$t('generic.picture')}}</label>
              <span>
                <img style="width: 100%" :src="dataUrlObj.roof" />
              </span>
            </div>
          </div>
        </div>
        <div class="sub-container-body">
          <div class="sub-container-body__title">
            <h2>{{$t('exteriorReport.body.bumpers').toUpperCase()}}</h2>
          </div>
          <div class="sub-container-body__content">
            <div class="left-box">
              <div class="sub-container-body__sub-content-rating">
                <label>{{$t('generic.condition')}}</label>
                <div class="flex">
                  <div
                    class="rating-color"
                    :style="{'background': effectActiveColor(vehicleExteriorBody.bumpers.rating)}"
                  ></div>
                  <span>
                    <strong>{{vehicleExteriorBody.bumpers.rating}}</strong>
                  </span>
                </div>
              </div>
              <div class="sub-container-body__sub-content-comment">
                <label>{{$t('generic.comment')}}</label>
                <span>
                  <strong>{{vehicleExteriorBody.bumpers.comment}}</strong>
                </span>
              </div>
            </div>
            <div class="right-box">
              <label>{{$t('generic.picture')}}</label>
              <span>
                <img style="width: 100%" :src="dataUrlObj.bumpers" />
              </span>
            </div>
          </div>
        </div>
        <div class="sub-container-body">
          <div class="sub-container-body__title">
            <h2>{{$t('exteriorReport.body.trim').toUpperCase()}}</h2>
          </div>
          <div class="sub-container-body__content">
            <div class="left-box">
              <div class="sub-container-body__sub-content-rating">
                <label>{{$t('generic.condition')}}</label>
                <div class="flex">
                  <div
                    class="rating-color"
                    :style="{'background': effectActiveColor(vehicleExteriorBody.trim.rating)}"
                  ></div>
                  <span>
                    <strong>{{vehicleExteriorBody.trim.rating}}</strong>
                  </span>
                </div>
              </div>
              <div class="sub-container-body__sub-content-comment">
                <label>{{$t('generic.comment')}}</label>
                <span>
                  <strong>{{vehicleExteriorBody.trim.comment}}</strong>
                </span>
              </div>
            </div>
            <div class="right-box">
              <label>{{$t('generic.picture')}}</label>
              <span>
                <img style="width: 100%" :src="dataUrlObj.trim" />
              </span>
            </div>
          </div>
        </div>
        <div class="sub-container-body">
          <div class="sub-container-body__title">
            <h2>{{$t('exteriorReport.body.leftFront').toUpperCase()}}</h2>
          </div>
          <div class="sub-container-body__content">
            <div class="left-box">
              <div class="sub-container-body__sub-content-rating">
                <label>{{$t('generic.condition')}}</label>
                <div class="flex">
                  <div
                    class="rating-color"
                    :style="{'background': effectActiveColor(vehicleExteriorBody.leftFront.rating)}"
                  ></div>
                  <span>
                    <strong>{{vehicleExteriorBody.leftFront.rating}}</strong>
                  </span>
                </div>
              </div>
              <div class="sub-container-body__sub-content-comment">
                <label>{{$t('generic.comment')}}</label>
                <span>
                  <strong>{{vehicleExteriorBody.leftFront.comment}}</strong>
                </span>
              </div>
            </div>
            <div class="right-box">
              <label>{{$t('generic.picture')}}</label>
              <span>
                <img style="width: 100%" :src="dataUrlObj.leftFront" />
              </span>
            </div>
          </div>
        </div>
        <div class="sub-container-body">
          <div class="sub-container-body__title">
            <h2>{{$t('exteriorReport.body.rightFront').toUpperCase()}}</h2>
          </div>
          <div class="sub-container-body__content">
            <div class="left-box">
              <div class="sub-container-body__sub-content-rating">
                <label>{{$t('generic.condition')}}</label>
                <div class="flex">
                  <div
                    class="rating-color"
                    :style="{'background': effectActiveColor(vehicleExteriorBody.rightFront.rating)}"
                  ></div>
                  <span>
                    <strong>{{vehicleExteriorBody.rightFront.rating}}</strong>
                  </span>
                </div>
              </div>
              <div class="sub-container-body__sub-content-comment">
                <label>{{$t('generic.comment')}}</label>
                <span>
                  <strong>{{vehicleExteriorBody.rightFront.comment}}</strong>
                </span>
              </div>
            </div>
            <div class="right-box">
              <label>{{$t('generic.picture')}}</label>
              <span>
                <img style="width: 100%" :src="dataUrlObj.rightFront" />
              </span>
            </div>
          </div>
        </div>
        <div class="sub-container-body">
          <div class="sub-container-body__title">
            <h2>{{$t('exteriorReport.body.leftDoors').toUpperCase()}}</h2>
          </div>
          <div class="sub-container-body__content">
            <div class="left-box">
              <div class="sub-container-body__sub-content-rating">
                <label>{{$t('generic.condition')}}</label>
                <div class="flex">
                  <div
                    class="rating-color"
                    :style="{'background': effectActiveColor(vehicleExteriorBody.leftDoors.rating)}"
                  ></div>
                  <span>
                    <strong>{{vehicleExteriorBody.leftDoors.rating}}</strong>
                  </span>
                </div>
              </div>
              <div class="sub-container-body__sub-content-comment">
                <label>{{$t('generic.comment')}}</label>
                <span>
                  <strong>{{vehicleExteriorBody.leftDoors.comment}}</strong>
                </span>
              </div>
            </div>
            <div class="right-box">
              <label>{{$t('generic.picture')}}</label>
              <span>
                <img style="width: 100%" :src="dataUrlObj.leftDoors" />
              </span>
            </div>
          </div>
        </div>
        <div class="sub-container-body">
          <div class="sub-container-body__title">
            <h2>{{$t('exteriorReport.body.rightDoors').toUpperCase()}}</h2>
          </div>
          <div class="sub-container-body__content">
            <div class="left-box">
              <div class="sub-container-body__sub-content-rating">
                <label>{{$t('generic.condition')}}</label>
                <div class="flex">
                  <div
                    class="rating-color"
                    :style="{'background': effectActiveColor(vehicleExteriorBody.rightDoors.rating)}"
                  ></div>
                  <span>
                    <strong>{{vehicleExteriorBody.rightDoors.rating}}</strong>
                  </span>
                </div>
              </div>
              <div class="sub-container-body__sub-content-comment">
                <label>{{$t('generic.comment')}}</label>
                <span>
                  <strong>{{vehicleExteriorBody.rightDoors.comment}}</strong>
                </span>
              </div>
            </div>
            <div class="right-box">
              <label>{{$t('generic.picture')}}</label>
              <span>
                <img style="width: 100%" :src="dataUrlObj.rightDoors" />
              </span>
            </div>
          </div>
        </div>
        <div class="sub-container-body">
          <div class="sub-container-body__title">
            <h2>{{$t('exteriorReport.body.leftRear').toUpperCase()}}</h2>
          </div>
          <div class="sub-container-body__content">
            <div class="left-box">
              <div class="sub-container-body__sub-content-rating">
                <label>{{$t('generic.condition')}}</label>
                <div class="flex">
                  <div
                    class="rating-color"
                    :style="{'background': effectActiveColor(vehicleExteriorBody.leftRear.rating)}"
                  ></div>
                  <span>
                    <strong>{{vehicleExteriorBody.leftRear.rating}}</strong>
                  </span>
                </div>
              </div>
              <div class="sub-container-body__sub-content-comment">
                <label>{{$t('generic.comment')}}</label>
                <span>
                  <strong>{{vehicleExteriorBody.leftRear.comment}}</strong>
                </span>
              </div>
            </div>
            <div class="right-box">
              <label>{{$t('generic.picture')}}</label>
              <span>
                <img style="width: 100%" :src="dataUrlObj.leftRear" />
              </span>
            </div>
          </div>
        </div>
        <div class="sub-container-body">
          <div class="sub-container-body__title">
            <h2>{{$t('exteriorReport.body.rightRear').toUpperCase()}}</h2>
          </div>
          <div class="sub-container-body__content">
            <div class="left-box">
              <div class="sub-container-body__sub-content-rating">
                <label>{{$t('generic.condition')}}</label>
                <div class="flex">
                  <div
                    class="rating-color"
                    :style="{'background': effectActiveColor(vehicleExteriorBody.rightRear.rating)}"
                  ></div>
                  <span>
                    <strong>{{vehicleExteriorBody.rightRear.rating}}</strong>
                  </span>
                </div>
              </div>
              <div class="sub-container-body__sub-content-comment">
                <label>{{$t('generic.comment')}}</label>
                <span>
                  <strong>{{vehicleExteriorBody.rightRear.comment}}</strong>
                </span>
              </div>
            </div>
            <div class="right-box">
              <label>{{$t('generic.picture')}}</label>
              <span>
                <img style="width: 100%" :src="dataUrlObj.rightRear" />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="sub-container">
        <div class="sub-container__title">
          <h2>{{$t('exteriorReport.glass.title').toUpperCase()}}</h2>
        </div>
        <div class="sub-container-body">
          <div class="sub-container-body__title">
            <h2>{{$t('exteriorReport.glass.windshield').toUpperCase()}}</h2>
          </div>
          <div class="sub-container-body__content">
            <div class="left-box">
              <div class="sub-container-body__sub-content-rating">
                <label>{{$t('generic.condition')}}</label>
                <div class="flex">
                  <div
                    class="rating-color"
                    :style="{'background': effectActiveColor(vehicleExteriorGlass.windshield.rating)}"
                  ></div>
                  <span>
                    <strong>{{vehicleExteriorGlass.windshield.rating}}</strong>
                  </span>
                </div>
              </div>
              <div class="sub-container-body__sub-content-comment">
                <label>{{$t('generic.comment')}}</label>
                <span>
                  <strong>{{vehicleExteriorGlass.windshield.comment}}</strong>
                </span>
              </div>
            </div>
            <div class="right-box">
              <label>{{$t('generic.picture')}}</label>
              <span>
                <img style="width: 100%" :src="dataUrlObj.windshield" />
              </span>
            </div>
          </div>
        </div>
        <div class="sub-container-body">
          <div class="sub-container-body__title">
            <h2>{{$t('exteriorReport.glass.rearWindow').toUpperCase()}}</h2>
          </div>
          <div class="sub-container-body__content">
            <div class="left-box">
              <div class="sub-container-body__sub-content-rating">
                <label>{{$t('generic.condition')}}</label>
                <div class="flex">
                  <div
                    class="rating-color"
                    :style="{'background': effectActiveColor(vehicleExteriorGlass.rearWindow.rating)}"
                  ></div>
                  <span>
                    <strong>{{vehicleExteriorGlass.rearWindow.rating}}</strong>
                  </span>
                </div>
              </div>
              <div class="sub-container-body__sub-content-comment">
                <label>{{$t('generic.comment')}}</label>
                <span>
                  <strong>{{vehicleExteriorGlass.rearWindow.comment}}</strong>
                </span>
              </div>
            </div>
            <div class="right-box">
              <label>{{$t('generic.picture')}}</label>
              <span>
                <img style="width: 100%" :src="dataUrlObj.rearWindow" />
              </span>
            </div>
          </div>
        </div>
        <div class="sub-container-body">
          <div class="sub-container-body__title">
            <h2>{{$t('exteriorReport.glass.leftFrontWindow').toUpperCase()}}</h2>
          </div>
          <div class="sub-container-body__content">
            <div class="left-box">
              <div class="sub-container-body__sub-content-rating">
                <label>{{$t('generic.condition')}}</label>
                <div class="flex">
                  <div
                    class="rating-color"
                    :style="{'background': effectActiveColor(vehicleExteriorGlass.leftFrontWindow.rating)}"
                  ></div>
                  <span>
                    <strong>{{vehicleExteriorGlass.leftFrontWindow.rating}}</strong>
                  </span>
                </div>
              </div>
              <div class="sub-container-body__sub-content-comment">
                <label>{{$t('generic.comment')}}</label>
                <span>
                  <strong>{{vehicleExteriorGlass.leftFrontWindow.comment}}</strong>
                </span>
              </div>
            </div>
            <div class="right-box">
              <label>{{$t('generic.picture')}}</label>
              <span>
                <img style="width: 100%" :src="dataUrlObj.leftFrontWindow" />
              </span>
            </div>
          </div>
        </div>
        <div class="sub-container-body">
          <div class="sub-container-body__title">
            <h2>{{$t('exteriorReport.glass.rightFrontWindow').toUpperCase()}}</h2>
          </div>
          <div class="sub-container-body__content">
            <div class="left-box">
              <div class="sub-container-body__sub-content-rating">
                <label>{{$t('generic.condition')}}</label>
                <div class="flex">
                  <div
                    class="rating-color"
                    :style="{'background': effectActiveColor(vehicleExteriorGlass.rightFrontWindow.rating)}"
                  ></div>
                  <span>
                    <strong>{{vehicleExteriorGlass.rightFrontWindow.rating}}</strong>
                  </span>
                </div>
              </div>
              <div class="sub-container-body__sub-content-comment">
                <label>{{$t('generic.comment')}}</label>
                <span>
                  <strong>{{vehicleExteriorGlass.rightFrontWindow.comment}}</strong>
                </span>
              </div>
            </div>
            <div class="right-box">
              <label>{{$t('generic.picture')}}</label>
              <span>
                <img style="width: 100%" :src="dataUrlObj.rightFrontWindow" />
              </span>
            </div>
          </div>
        </div>
        <div class="sub-container-body">
          <div class="sub-container-body__title">
            <h2>{{$t('exteriorReport.glass.leftRearWindow').toUpperCase()}}</h2>
          </div>
          <div class="sub-container-body__content">
            <div class="left-box">
              <div class="sub-container-body__sub-content-rating">
                <label>{{$t('generic.condition')}}</label>
                <div class="flex">
                  <div
                    class="rating-color"
                    :style="{'background': effectActiveColor(vehicleExteriorGlass.leftRearWindow.rating)}"
                  ></div>
                  <span>
                    <strong>{{vehicleExteriorGlass.leftRearWindow.rating}}</strong>
                  </span>
                </div>
              </div>
              <div class="sub-container-body__sub-content-comment">
                <label>{{$t('generic.comment')}}</label>
                <span>
                  <strong>{{vehicleExteriorGlass.leftRearWindow.comment}}</strong>
                </span>
              </div>
            </div>
            <div class="right-box">
              <label>{{$t('generic.picture')}}</label>
              <span>
                <img style="width: 100%" :src="dataUrlObj.leftRearWindow" />
              </span>
            </div>
          </div>
        </div>
        <div class="sub-container-body">
          <div class="sub-container-body__title">
            <h2>{{$t('exteriorReport.glass.rightRearWindow').toUpperCase()}}</h2>
          </div>
          <div class="sub-container-body__content">
            <div class="left-box">
              <div class="sub-container-body__sub-content-rating">
                <label>{{$t('generic.condition')}}</label>
                <div class="flex">
                  <div
                    class="rating-color"
                    :style="{'background': effectActiveColor(vehicleExteriorGlass.rightRearWindow.rating)}"
                  ></div>
                  <span>
                    <strong>{{vehicleExteriorGlass.rightRearWindow.rating}}</strong>
                  </span>
                </div>
              </div>
              <div class="sub-container-body__sub-content-comment">
                <label>{{$t('generic.comment')}}</label>
                <span>
                  <strong>{{vehicleExteriorGlass.rightRearWindow.comment}}</strong>
                </span>
              </div>
            </div>
            <div class="right-box">
              <label>{{$t('generic.picture')}}</label>
              <span>
                <img style="width: 100%" :src="dataUrlObj.rightRearWindow" />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="sub-container">
        <div class="sub-container__title">
          <h2>{{$t('exteriorReport.tiresAndWheels.title').toUpperCase()}}</h2>
        </div>
        <div class="sub-container-body">
          <div class="sub-container-body__title">
            <h2>{{$t('exteriorReport.tiresAndWheels.conditionOfTires').toUpperCase()}}</h2>
          </div>
          <div class="sub-container-body__content">
            <div class="left-box">
              <div class="sub-container-body__sub-content-rating">
                <label>{{$t('generic.condition')}}</label>
                <div class="flex">
                  <div
                    class="rating-color"
                    :style="{'background': effectActiveColor(vehicleExteriorTiresAndWheels.conditionOfTires.rating)}"
                  ></div>
                  <span>
                    <strong>{{vehicleExteriorTiresAndWheels.conditionOfTires.rating}}</strong>
                  </span>
                </div>
              </div>
              <div class="sub-container-body__sub-content-comment">
                <label>{{$t('generic.comment')}}</label>
                <span>
                  <strong>{{vehicleExteriorTiresAndWheels.conditionOfTires.comment}}</strong>
                </span>
              </div>
            </div>
            <div class="right-box">
              <label>{{$t('generic.picture')}}</label>
              <span>
                <img style="width: 100%" :src="dataUrlObj.conditionOfTires" />
              </span>
            </div>
          </div>
        </div>
        <div class="sub-container-body">
          <div class="sub-container-body__title">
            <h2>{{$t('exteriorReport.tiresAndWheels.conditionOfWheels').toUpperCase()}}</h2>
          </div>
          <div class="sub-container-body__content">
            <div class="left-box">
              <div class="sub-container-body__sub-content-rating">
                <label>{{$t('generic.condition')}}</label>
                <div class="flex">
                  <div
                    class="rating-color"
                    :style="{'background': effectActiveColor(vehicleExteriorTiresAndWheels.conditionOfWheels.rating)}"
                  ></div>
                  <span>
                    <strong>{{vehicleExteriorTiresAndWheels.conditionOfWheels.rating}}</strong>
                  </span>
                </div>
              </div>
              <div class="sub-container-body__sub-content-comment">
                <label>{{$t('generic.comment')}}</label>
                <span>
                  <strong>{{vehicleExteriorTiresAndWheels.conditionOfWheels.comment}}</strong>
                </span>
              </div>
            </div>
            <div class="right-box">
              <label>{{$t('generic.picture')}}</label>
              <span>
                <img style="width: 100%" :src="dataUrlObj.conditionOfWheels" />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="sub-container">
        <div class="sub-container__title">
          <h2>{{$t('exteriorReport.wipers.title').toUpperCase()}}</h2>
        </div>
        <div class="sub-container-body">
          <div class="sub-container-body__title">
            <h2>{{$t('exteriorReport.wipers.frontWipers').toUpperCase()}}</h2>
          </div>
          <div class="sub-container-body__content">
            <div class="left-box">
              <div class="sub-container-body__sub-content-rating">
                <label>{{$t('generic.condition')}}</label>
                <div class="flex">
                  <div
                    class="rating-color"
                    :style="{'background': effectActiveColor(vehicleExteriorWipers.frontWipers.rating)}"
                  ></div>
                  <span>
                    <strong>{{vehicleExteriorWipers.frontWipers.rating}}</strong>
                  </span>
                </div>
              </div>
              <div class="sub-container-body__sub-content-comment">
                <label>{{$t('generic.comment')}}</label>
                <span>
                  <strong>{{vehicleExteriorWipers.frontWipers.comment}}</strong>
                </span>
              </div>
            </div>
            <div class="right-box">
              <label>{{$t('generic.picture')}}</label>
              <span>
                <img style="width: 100%" :src="dataUrlObj.frontWipers" />
              </span>
            </div>
          </div>
        </div>
        <div class="sub-container-body">
          <div class="sub-container-body__title">
            <h2>{{$t('exteriorReport.wipers.frontWiperBlade').toUpperCase()}}</h2>
          </div>
          <div class="sub-container-body__content">
            <div class="left-box">
              <div class="sub-container-body__sub-content-rating">
                <label>{{$t('generic.condition')}}</label>
                <div class="flex">
                  <div
                    class="rating-color"
                    :style="{'background': effectActiveColor(vehicleExteriorWipers.frontWiperBlades.rating)}"
                  ></div>
                  <span>
                    <strong>{{vehicleExteriorWipers.frontWiperBlades.rating}}</strong>
                  </span>
                </div>
              </div>
              <div class="sub-container-body__sub-content-comment">
                <label>{{$t('generic.comment')}}</label>
                <span>
                  <strong>{{vehicleExteriorWipers.frontWiperBlades.comment}}</strong>
                </span>
              </div>
            </div>
            <div class="right-box">
              <label>{{$t('generic.picture')}}</label>
              <span>
                <img style="width: 100%" :src="dataUrlObj.frontWiperBlades" />
              </span>
            </div>
          </div>
        </div>
        <div class="sub-container-body">
          <div class="sub-container-body__title">
            <h2>{{$t('exteriorReport.wipers.rearWipers').toUpperCase()}}</h2>
          </div>
          <div class="sub-container-body__content">
            <div class="left-box">
              <div class="sub-container-body__sub-content-rating">
                <label>{{$t('generic.condition')}}</label>
                <div class="flex">
                  <div
                    class="rating-color"
                    :style="{'background': effectActiveColor(vehicleExteriorWipers.rearWipers.rating)}"
                  ></div>
                  <span>
                    <strong>{{vehicleExteriorWipers.rearWipers.rating}}</strong>
                  </span>
                </div>
              </div>
              <div class="sub-container-body__sub-content-comment">
                <label>{{$t('generic.comment')}}</label>
                <span>
                  <strong>{{vehicleExteriorWipers.rearWipers.comment}}</strong>
                </span>
              </div>
            </div>
            <div class="right-box">
              <label>{{$t('generic.picture')}}</label>
              <span>
                <img style="width: 100%" :src="dataUrlObj.rearWipers" />
              </span>
            </div>
          </div>
        </div>
        <div class="sub-container-body">
          <div class="sub-container-body__title">
            <h2>{{$t('exteriorReport.wipers.rearWiperBlade').toUpperCase()}}</h2>
          </div>
          <div class="sub-container-body__content">
            <div class="left-box">
              <div class="sub-container-body__sub-content-rating">
                <label>{{$t('generic.condition')}}</label>
                <div class="flex">
                  <div
                    class="rating-color"
                    :style="{'background': effectActiveColor(vehicleExteriorWipers.rearWiperBlades.rating)}"
                  ></div>
                  <span>
                    <strong>{{vehicleExteriorWipers.rearWiperBlades.rating}}</strong>
                  </span>
                </div>
              </div>
              <div class="sub-container-body__sub-content-comment">
                <label>{{$t('generic.comment')}}</label>
                <span>
                  <strong>{{vehicleExteriorWipers.rearWiperBlades.comment}}</strong>
                </span>
              </div>
            </div>
            <div class="right-box">
              <label>{{$t('generic.picture')}}</label>
              <span>
                <img style="width: 100%" :src="dataUrlObj.rearWiperBlades" />
              </span>
            </div>
          </div>
        </div>
        <div class="sub-container-body">
          <div class="sub-container-body__title">
            <h2>{{$t('exteriorReport.wipers.frontWindshieldWasher').toUpperCase()}}</h2>
          </div>
          <div class="sub-container-body__content">
            <div class="left-box">
              <div class="sub-container-body__sub-content-rating">
                <label>{{$t('generic.condition')}}</label>
                <div class="flex">
                  <div
                    class="rating-color"
                    :style="{'background': effectActiveColor(vehicleExteriorWipers.frontWindshieldWasher.rating)}"
                  ></div>
                  <span>
                    <strong>{{vehicleExteriorWipers.frontWindshieldWasher.rating}}</strong>
                  </span>
                </div>
              </div>
              <div class="sub-container-body__sub-content-comment">
                <label>{{$t('generic.comment')}}</label>
                <span>
                  <strong>{{vehicleExteriorWipers.frontWindshieldWasher.comment}}</strong>
                </span>
              </div>
            </div>
            <div class="right-box">
              <label>{{$t('generic.picture')}}</label>
              <span>
                <img style="width: 100%" :src="dataUrlObj.frontWindshieldWasher" />
              </span>
            </div>
          </div>
        </div>
        <div class="sub-container-body">
          <div class="sub-container-body__title">
            <h2>{{$t('exteriorReport.wipers.rearWindshieldWasher').toUpperCase()}}</h2>
          </div>
          <div class="sub-container-body__content">
            <div class="left-box">
              <div class="sub-container-body__sub-content-rating">
                <label>{{$t('generic.condition')}}</label>
                <div class="flex">
                  <div
                    class="rating-color"
                    :style="{'background': effectActiveColor(vehicleExteriorWipers.rearWindshieldWasher.rating)}"
                  ></div>
                  <span>
                    <strong>{{vehicleExteriorWipers.rearWindshieldWasher.rating}}</strong>
                  </span>
                </div>
              </div>
              <div class="sub-container-body__sub-content-comment">
                <label>{{$t('generic.comment')}}</label>
                <span>
                  <strong>{{vehicleExteriorWipers.rearWindshieldWasher.comment}}</strong>
                </span>
              </div>
            </div>
            <div class="right-box">
              <label>{{$t('generic.picture')}}</label>
              <span>
                <img style="width: 100%" :src="dataUrlObj.rearWindshieldWasher" />
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
      vehicleExteriorBody: "",
      vehicleExteriorGlass: "",
      vehicleExteriorTiresAndWheels: "",
      vehicleExteriorWipers: "",
      dataUrlObj: {
        front: "",
        rear: "",
        hood: "",
        roof: "",
        bumpers: "",
        trim: "",
        leftFront: "",
        rightFront: "",
        leftDoors: "",
        rightDoors: "",
        leftRear: "",
        rightRear: "",
        windshield: "",
        rearWindow: "",
        leftFrontWindow: "",
        rightFrontWindow: "",
        leftRearWindow: "",
        rightRearWindow: "",
        conditionOfTires: "",
        conditionOfWheels: "",
        frontWipers: "",
        frontWiperBlades: "",
        rearWipers: "",
        rearWiperBlades: "",
        frontWindshieldWasher: "",
        rearWindshieldWasher: ""
      },
      ratings: ratings
    };
  },

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
        console.log(res);
        this.vehicleExteriorBody = res.data.vehicleExterior.body;
        this.vehicleExteriorGlass = res.data.vehicleExterior.glass;
        this.vehicleExteriorTiresAndWheels =
          res.data.vehicleExterior.tiresAndWheels;
        this.vehicleExteriorWipers = res.data.vehicleExterior.wipers;
      })
      .catch(error => {
        console.log(error.response);
      });

    axios
      .get("/vehicle_inspection_reports/exterior-pictures/" + orderId)
      .then(res => {
        const resData = res.data;
        resData.forEach(item => {
          if (item.fileName == "front") {
            this.dataUrlObj.front =
              "data:" + item.contentType + ";base64," + item.base64Data;
          }
          if (item.fileName == "rear") {
            this.dataUrlObj.rear =
              "data:" + item.contentType + ";base64," + item.base64Data;
          }
          if (item.fileName == "hood") {
            this.dataUrlObj.hood =
              "data:" + item.contentType + ";base64," + item.base64Data;
          }
          if (item.fileName == "roof") {
            this.dataUrlObj.roof =
              "data:" + item.contentType + ";base64," + item.base64Data;
          }
          if (item.fileName == "bumpers") {
            this.dataUrlObj.bumpers =
              "data:" + item.contentType + ";base64," + item.base64Data;
          }
          if (item.fileName == "trim") {
            this.dataUrlObj.trim =
              "data:" + item.contentType + ";base64," + item.base64Data;
          }
          if (item.fileName == "left-front") {
            this.dataUrlObj.leftFront =
              "data:" + item.contentType + ";base64," + item.base64Data;
          }
          if (item.fileName == "right-front") {
            this.dataUrlObj.rightFront =
              "data:" + item.contentType + ";base64," + item.base64Data;
          }
          if (item.fileName == "left-doors") {
            this.dataUrlObj.leftDoors =
              "data:" + item.contentType + ";base64," + item.base64Data;
          }
          if (item.fileName == "right-doors") {
            this.dataUrlObj.rightDoors =
              "data:" + item.contentType + ";base64," + item.base64Data;
          }
          if (item.fileName == "left-rear") {
            this.dataUrlObj.leftRear =
              "data:" + item.contentType + ";base64," + item.base64Data;
          }
          if (item.fileName == "right-rear") {
            this.dataUrlObj.rightRear =
              "data:" + item.contentType + ";base64," + item.base64Data;
          }
          if (item.fileName == "windshield") {
            this.dataUrlObj.windshield =
              "data:" + item.contentType + ";base64," + item.base64Data;
          }
          if (item.fileName == "rear-window") {
            this.dataUrlObj.rearWindow =
              "data:" + item.contentType + ";base64," + item.base64Data;
          }
          if (item.fileName == "left-front-window") {
            this.dataUrlObj.leftFrontWindow =
              "data:" + item.contentType + ";base64," + item.base64Data;
          }
          if (item.fileName == "right-front-window") {
            this.dataUrlObj.rightFrontWindow =
              "data:" + item.contentType + ";base64," + item.base64Data;
          }
          if (item.fileName == "left-rear-window") {
            this.dataUrlObj.leftRearWindow =
              "data:" + item.contentType + ";base64," + item.base64Data;
          }
          if (item.fileName == "right-rear-window") {
            this.dataUrlObj.rightRearWindow =
              "data:" + item.contentType + ";base64," + item.base64Data;
          }
          if (item.fileName == "tires") {
            this.dataUrlObj.conditionOfTires =
              "data:" + item.contentType + ";base64," + item.base64Data;
          }
          if (item.fileName == "wheels") {
            this.dataUrlObj.conditionOfWheels =
              "data:" + item.contentType + ";base64," + item.base64Data;
          }
          if (item.fileName == "front-wipers") {
            this.dataUrlObj.frontWipers =
              "data:" + item.contentType + ";base64," + item.base64Data;
          }
          if (item.fileName == "front-wiper-blades") {
            this.dataUrlObj.frontWiperBlades =
              "data:" + item.contentType + ";base64," + item.base64Data;
          }
          if (item.fileName == "rear-wipers") {
            this.dataUrlObj.rearWipers =
              "data:" + item.contentType + ";base64," + item.base64Data;
          }
          if (item.fileName == "rear-wiper-blades") {
            this.dataUrlObj.rearWiperBlades =
              "data:" + item.contentType + ";base64," + item.base64Data;
          }
          if (item.fileName == "front-windshield-washer") {
            this.dataUrlObj.frontWindshieldWasher =
              "data:" + item.contentType + ";base64," + item.base64Data;
          }
          if (item.fileName == "rear-windshield-washer") {
            this.dataUrlObj.rearWindshieldWasher =
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