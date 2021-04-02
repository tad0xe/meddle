<template>
  <div>
    <div class="container">
      <div class="container-content">
        <form @submit.prevent="onSubmit()">
          <div class="row">
            <div class="column">
              <h2>{{$t('interiorReport.interiorItems.title')}}</h2>
            </div>
          </div>
          <div class="row">
            <div class="column">
              {{$t('interiorReport.interiorItems.interiorLook')}} *
              <br />
              <select
                :style="{'background-color': effectActiveColor(vehicleInterior.interiorItems.interiorLook.rating)}"
                v-model="vehicleInterior.interiorItems.interiorLook.rating"
                @blur="onSubmit"
              >
                <option
                  v-for="item in ratings"
                  :key="item.condition"
                  :style="{'background-color':item.color}"
                >{{item.condition}}</option>
              </select>
            </div>
            <div class="column">
              {{$t('interiorReport.interiorItems.commentOnInteriorLook')}}:
              <br />
              <textarea
                rows="3"
                v-model="vehicleInterior.interiorItems.interiorLook.comment"
                @blur="onSubmit"
              ></textarea>&nbsp;
            </div>
            <div class="column">
              <picture-input
                @change="onChangePicture('interior-look','interior-items')"
                @remove="onRemovePicture('interior-look','interior-items')"
                :crop="pictureInput.crop"
                :width="pictureInput.width"
                :height="pictureInput.height"
                :margin="pictureInput.margin"
                :size="pictureInput.size"
                :accept="pictureInput.accept"
                :zIndex="pictureInput.zIndex"
                :buttonClass="pictureInput.buttonClass"
                :removable="pictureInput.removable"
                :hideChangeButton="pictureInput.hideChangeButton"
                :customStrings="pictureInput.customStrings"
                :prefill="this.pictures.interiorLook.data"
                :prefillOptions="{mediaType: this.pictures.interiorLook.type }"
              ></picture-input>
            </div>
          </div>
          <br />
          <div class="row">
            <div class="column">
              {{$t('interiorReport.interiorItems.coolingPerformance')}} *
              <br />
              <select
                :style="{'background-color': effectActiveColor(vehicleInterior.interiorItems.airConditionerCoolingPerformance.rating)}"
                v-model="vehicleInterior.interiorItems.airConditionerCoolingPerformance.rating"
                @blur="onSubmit"
              >
                <option
                  v-for="item in ratings"
                  :key="item.condition"
                  :style="{'background-color':item.color}"
                >{{item.condition}}</option>
              </select>
            </div>
            <div class="column">
              {{$t('interiorReport.interiorItems.commentOnCoolingPerformance')}}:
              <br />
              <textarea
                rows="3"
                v-model="vehicleInterior.interiorItems.airConditionerCoolingPerformance.comment"
                @blur="onSubmit"
              ></textarea>&nbsp;
            </div>
            <div class="column">
              <picture-input
                @change="onChangePicture('air-conditioner','interior-items')"
                @remove="onRemovePicture('air-conditioner','interior-items')"
                :crop="pictureInput.crop"
                :width="pictureInput.width"
                :height="pictureInput.height"
                :margin="pictureInput.margin"
                :size="pictureInput.size"
                :accept="pictureInput.accept"
                :zIndex="pictureInput.zIndex"
                :buttonClass="pictureInput.buttonClass"
                :removable="pictureInput.removable"
                :hideChangeButton="pictureInput.hideChangeButton"
                :customStrings="pictureInput.customStrings"
                :prefill="this.pictures.airConditionerCoolingPerformance.data"
                :prefillOptions="{mediaType: this.pictures.airConditionerCoolingPerformance.type }"
              ></picture-input>
            </div>
          </div>
          <br />
          <div class="row">
            <div class="column">
             {{$t('interiorReport.interiorItems.heaterOperation')}} *
              <br />
              <select
                :style="{'background-color': effectActiveColor(vehicleInterior.interiorItems.heaterOperation.rating)}"
                v-model="vehicleInterior.interiorItems.heaterOperation.rating"
                @blur="onSubmit"
              >
                <option
                  v-for="item in ratings"
                  :key="item.condition"
                  :style="{'background-color':item.color}"
                >{{item.condition}}</option>
              </select>
            </div>
            <div class="column">
              {{$t('interiorReport.interiorItems.commentOnHeaterOperation')}}:
              <br />
              <textarea
                rows="3"
                v-model="vehicleInterior.interiorItems.heaterOperation.comment"
                @blur="onSubmit"
              ></textarea>&nbsp;
            </div>
            <div class="column">
              <picture-input
                @change="onChangePicture('heater-operation','interior-items')"
                @remove="onRemovePicture('heater-operation','interior-items')"
                :crop="pictureInput.crop"
                :width="pictureInput.width"
                :height="pictureInput.height"
                :margin="pictureInput.margin"
                :size="pictureInput.size"
                :accept="pictureInput.accept"
                :zIndex="pictureInput.zIndex"
                :buttonClass="pictureInput.buttonClass"
                :removable="pictureInput.removable"
                :hideChangeButton="pictureInput.hideChangeButton"
                :customStrings="pictureInput.customStrings"
                :prefill="this.pictures.heaterOperation.data"
                :prefillOptions="{mediaType: this.pictures.heaterOperation.type }"
              ></picture-input>
            </div>
          </div>
          <br />
          <div class="row">
            <div class="column">
              {{$t('interiorReport.interiorItems.hoodRelease')}} *
              <br />
              <select
                :style="{'background-color': effectActiveColor(vehicleInterior.interiorItems.hoodRelease.rating)}"
                v-model="vehicleInterior.interiorItems.hoodRelease.rating"
                @blur="onSubmit"
              >
                <option
                  v-for="item in ratings"
                  :key="item.condition"
                  :style="{'background-color':item.color}"
                >{{item.condition}}</option>
              </select>
            </div>
            <div class="column">
              {{$t('interiorReport.interiorItems.commentOnHoodRelease')}}:
              <br />
              <textarea
                rows="3"
                v-model="vehicleInterior.interiorItems.hoodRelease.comment"
                @blur="onSubmit"
              ></textarea>&nbsp;
            </div>
            <div class="column">
              <picture-input
                @change="onChangePicture('hood-release','interior-items')"
                @remove="onRemovePicture('hood-release','interior-items')"
                :crop="pictureInput.crop"
                :width="pictureInput.width"
                :height="pictureInput.height"
                :margin="pictureInput.margin"
                :size="pictureInput.size"
                :accept="pictureInput.accept"
                :zIndex="pictureInput.zIndex"
                :buttonClass="pictureInput.buttonClass"
                :removable="pictureInput.removable"
                :hideChangeButton="pictureInput.hideChangeButton"
                :customStrings="pictureInput.customStrings"
                :prefill="this.pictures.hoodRelease.data"
                :prefillOptions="{mediaType: this.pictures.hoodRelease.type }"
              ></picture-input>
            </div>
          </div>
          <br />
          <div class="row">
            <div class="column">
              {{$t('interiorReport.interiorItems.cigaretteLighter')}} *
              <br />
              <select
                :style="{'background-color': effectActiveColor(vehicleInterior.interiorItems.cigaretteLighter.rating)}"
                v-model="vehicleInterior.interiorItems.cigaretteLighter.rating"
                @blur="onSubmit"
              >
                <option
                  v-for="item in ratings"
                  :key="item.condition"
                  :style="{'background-color':item.color}"
                >{{item.condition}}</option>
              </select>
            </div>
            <div class="column">
              {{$t('interiorReport.interiorItems.commentOnCigaretteLighter')}}:
              <br />
              <textarea
                rows="3"
                v-model="vehicleInterior.interiorItems.cigaretteLighter.comment"
                @blur="onSubmit"
              ></textarea>&nbsp;
            </div>
            <div class="column">
              <picture-input
                @change="onChangePicture('cigarette-lighter','interior-items')"
                @remove="onRemovePicture('cigarette-lighter','interior-items')"
                :crop="pictureInput.crop"
                :width="pictureInput.width"
                :height="pictureInput.height"
                :margin="pictureInput.margin"
                :size="pictureInput.size"
                :accept="pictureInput.accept"
                :zIndex="pictureInput.zIndex"
                :buttonClass="pictureInput.buttonClass"
                :removable="pictureInput.removable"
                :hideChangeButton="pictureInput.hideChangeButton"
                :customStrings="pictureInput.customStrings"
                :prefill="this.pictures.cigaretteLighter.data"
                :prefillOptions="{mediaType: this.pictures.cigaretteLighter.type }"
              ></picture-input>
            </div>
          </div>
          <br />
          <div class="row">
            <div class="column">
              {{$t('interiorReport.interiorItems.headRests')}} *
              <br />
              <select
                :style="{'background-color': effectActiveColor(vehicleInterior.interiorItems.headRests.rating)}"
                v-model="vehicleInterior.interiorItems.headRests.rating"
                @blur="onSubmit"
              >
                <option
                  v-for="item in ratings"
                  :key="item.condition"
                  :style="{'background-color':item.color}"
                >{{item.condition}}</option>
              </select>
            </div>
            <div class="column">
              {{$t('interiorReport.interiorItems.commentOnHeadRests')}}:
              <br />
              <textarea
                rows="3"
                v-model="vehicleInterior.interiorItems.headRests.comment"
                @blur="onSubmit"
              ></textarea>&nbsp;
            </div>
            <div class="column">
              <picture-input
                @change="onChangePicture('head-rests','interior-items')"
                @remove="onRemovePicture('head-rests','interior-items')"
                :crop="pictureInput.crop"
                :width="pictureInput.width"
                :height="pictureInput.height"
                :margin="pictureInput.margin"
                :size="pictureInput.size"
                :accept="pictureInput.accept"
                :zIndex="pictureInput.zIndex"
                :buttonClass="pictureInput.buttonClass"
                :removable="pictureInput.removable"
                :hideChangeButton="pictureInput.hideChangeButton"
                :customStrings="pictureInput.customStrings"
                :prefill="this.pictures.headRests.data"
                :prefillOptions="{mediaType: this.pictures.headRests.type }"
              ></picture-input>
            </div>
          </div>
          <br />
          <div class="row">
            <div class="column">
              {{$t('interiorReport.interiorItems.doorPanels')}} *
              <br />
              <select
                :style="{'background-color': effectActiveColor(vehicleInterior.interiorItems.doorPanels.rating)}"
                v-model="vehicleInterior.interiorItems.doorPanels.rating"
                @blur="onSubmit"
              >
                <option
                  v-for="item in ratings"
                  :key="item.condition"
                  :style="{'background-color':item.color}"
                >{{item.condition}}</option>
              </select>
            </div>
            <div class="column">
              {{$t('interiorReport.interiorItems.commentOnDoorPanels')}}:
              <br />
              <textarea
                rows="3"
                v-model="vehicleInterior.interiorItems.doorPanels.comment"
                @blur="onSubmit"
              ></textarea>&nbsp;
            </div>
            <div class="column">
              <picture-input
                @change="onChangePicture('door-panels','interior-items')"
                @remove="onRemovePicture('door-panels','interior-items')"
                :crop="pictureInput.crop"
                :width="pictureInput.width"
                :height="pictureInput.height"
                :margin="pictureInput.margin"
                :size="pictureInput.size"
                :accept="pictureInput.accept"
                :zIndex="pictureInput.zIndex"
                :buttonClass="pictureInput.buttonClass"
                :removable="pictureInput.removable"
                :hideChangeButton="pictureInput.hideChangeButton"
                :customStrings="pictureInput.customStrings"
                :prefill="this.pictures.doorPanels.data"
                :prefillOptions="{mediaType: this.pictures.doorPanels.type }"
              ></picture-input>
            </div>
          </div>
          <br />
          <div class="row">
            <div class="column">
              {{$t('interiorReport.interiorItems.dashPad')}} *
              <br />
              <select
                :style="{'background-color': effectActiveColor(vehicleInterior.interiorItems.dashPad.rating)}"
                v-model="vehicleInterior.interiorItems.dashPad.rating"
                @blur="onSubmit"
              >
                <option
                  v-for="item in ratings"
                  :key="item.condition"
                  :style="{'background-color':item.color}"
                >{{item.condition}}</option>
              </select>
            </div>
            <div class="column">
              {{$t('interiorReport.interiorItems.commentOnDashPad')}}:
              <br />
              <textarea
                rows="3"
                v-model="vehicleInterior.interiorItems.dashPad.comment"
                @blur="onSubmit"
              ></textarea>&nbsp;
            </div>
            <div class="column">
              <picture-input
                @change="onChangePicture('dash-pad','interior-items')"
                @remove="onRemovePicture('dash-pad','interior-items')"
                :crop="pictureInput.crop"
                :width="pictureInput.width"
                :height="pictureInput.height"
                :margin="pictureInput.margin"
                :size="pictureInput.size"
                :accept="pictureInput.accept"
                :zIndex="pictureInput.zIndex"
                :buttonClass="pictureInput.buttonClass"
                :removable="pictureInput.removable"
                :hideChangeButton="pictureInput.hideChangeButton"
                :customStrings="pictureInput.customStrings"
                :prefill="this.pictures.dashPad.data"
                :prefillOptions="{mediaType: this.pictures.dashPad.type }"
              ></picture-input>
            </div>
          </div>
          <br />
          <div class="row">
            <div class="column">
              {{$t('interiorReport.interiorItems.vanityMirrors')}} *
              <br />
              <select
                :style="{'background-color': effectActiveColor(vehicleInterior.interiorItems.vanityMirrors.rating)}"
                v-model="vehicleInterior.interiorItems.vanityMirrors.rating"
                @blur="onSubmit"
              >
                <option
                  v-for="item in ratings"
                  :key="item.condition"
                  :style="{'background-color':item.color}"
                >{{item.condition}}</option>
              </select>
            </div>
            <div class="row">
              <div class="column">
                {{$t('interiorReport.interiorItems.commentOnVanityMirrors')}}:
                <br />
                <textarea
                  rows="3"
                  v-model="vehicleInterior.interiorItems.vanityMirrors.comment"
                  @blur="onSubmit"
                ></textarea>&nbsp;
              </div>
              <div class="column">
                <picture-input
                  @change="onChangePicture('vanity-mirrors','interior-items')"
                  @remove="onRemovePicture('vanity-mirrors','interior-items')"
                  :crop="pictureInput.crop"
                  :width="pictureInput.width"
                  :height="pictureInput.height"
                  :margin="pictureInput.margin"
                  :size="pictureInput.size"
                  :accept="pictureInput.accept"
                  :zIndex="pictureInput.zIndex"
                  :buttonClass="pictureInput.buttonClass"
                  :removable="pictureInput.removable"
                  :hideChangeButton="pictureInput.hideChangeButton"
                  :customStrings="pictureInput.customStrings"
                  :prefill="this.pictures.vanityMirrors.data"
                  :prefillOptions="{mediaType: this.pictures.vanityMirrors.type }"
                ></picture-input>
              </div>
            </div>
          </div>
          <br />
          <div class="save-btn1">
            <button type="submit" class="save-btn" @click.prevent="onSubmit()">{{$t('buttons.save')}}</button>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <hr />
          <br />
          <br />
          <div class="row">
            <div class="column">
              <h2>{{$t('interiorReport.gauges.title')}}</h2>
            </div>
          </div>
          <div class="row">
            <div class="column">
             {{$t('interiorReport.gauges.speedometer')}} *
              <br />
              <select
                :style="{'background-color': effectActiveColor(vehicleInterior.gauges.speedometer.rating)}"
                v-model="vehicleInterior.gauges.speedometer.rating"
                @blur="onSubmit"
              >
                <option
                  v-for="item in ratings"
                  :key="item.condition"
                  :style="{'background-color':item.color}"
                >{{item.condition}}</option>
              </select>
            </div>
            <div class="column">
              {{$t('interiorReport.gauges.commentOnSpeedometer')}}:
              <br />
              <textarea
                rows="3"
                v-model="vehicleInterior.gauges.speedometer.comment"
                @blur="onSubmit"
              ></textarea>&nbsp;
            </div>
            <div class="column">
              <picture-input
                @change="onChangePicture('speedometer','gauges')"
                @remove="onRemovePicture('speedometer','gauges')"
                :crop="pictureInput.crop"
                :width="pictureInput.width"
                :height="pictureInput.height"
                :margin="pictureInput.margin"
                :size="pictureInput.size"
                :accept="pictureInput.accept"
                :zIndex="pictureInput.zIndex"
                :buttonClass="pictureInput.buttonClass"
                :removable="pictureInput.removable"
                :hideChangeButton="pictureInput.hideChangeButton"
                :customStrings="pictureInput.customStrings"
                :prefill="this.pictures.speedometer.data"
                :prefillOptions="{mediaType: this.pictures.speedometer.type }"
              ></picture-input>
            </div>
          </div>
          <br />
          <div class="row">
            <div class="column">
              {{$t('interiorReport.gauges.tachometer')}} *
              <br />
              <select
                :style="{'background-color': effectActiveColor(vehicleInterior.gauges.tachometer.rating)}"
                v-model="vehicleInterior.gauges.tachometer.rating"
                @blur="onSubmit"
              >
                <option
                  v-for="item in ratings"
                  :key="item.condition"
                  :style="{'background-color':item.color}"
                >{{item.condition}}</option>
              </select>
            </div>
            <div class="column">
             {{$t('interiorReport.gauges.commentOnTachometer')}}:
              <br />
              <textarea
                rows="3"
                v-model="vehicleInterior.gauges.tachometer.comment"
                @blur="onSubmit"
              ></textarea>&nbsp;
            </div>
            <div class="column">
              <picture-input
                @change="onChangePicture('tachometer','gauges')"
                @remove="onRemovePicture('tachometer','gauges')"
                :crop="pictureInput.crop"
                :width="pictureInput.width"
                :height="pictureInput.height"
                :margin="pictureInput.margin"
                :size="pictureInput.size"
                :accept="pictureInput.accept"
                :zIndex="pictureInput.zIndex"
                :buttonClass="pictureInput.buttonClass"
                :removable="pictureInput.removable"
                :hideChangeButton="pictureInput.hideChangeButton"
                :customStrings="pictureInput.customStrings"
                :prefill="this.pictures.tachometer.data"
                :prefillOptions="{mediaType: this.pictures.tachometer.type }"
              ></picture-input>
            </div>
          </div>
          <br />
          <div class="row">
            <div class="column">
              {{$t('interiorReport.gauges.temperature')}} *
              <br />
              <select
                :style="{'background-color': effectActiveColor(vehicleInterior.gauges.temperature.rating)}"
                v-model="vehicleInterior.gauges.temperature.rating"
                @blur="onSubmit"
              >
                <option
                  v-for="item in ratings"
                  :key="item.condition"
                  :style="{'background-color':item.color}"
                >{{item.condition}}</option>
              </select>
            </div>
            <div class="column">
              {{$t('interiorReport.gauges.commentOnTemperature')}}:
              <br />
              <textarea
                rows="3"
                v-model="vehicleInterior.gauges.temperature.comment"
                @blur="onSubmit"
              ></textarea>&nbsp;
            </div>
            <div class="column">
              <picture-input
                @change="onChangePicture('temperature','gauges')"
                @remove="onRemovePicture('temperature','gauges')"
                :crop="pictureInput.crop"
                :width="pictureInput.width"
                :height="pictureInput.height"
                :margin="pictureInput.margin"
                :size="pictureInput.size"
                :accept="pictureInput.accept"
                :zIndex="pictureInput.zIndex"
                :buttonClass="pictureInput.buttonClass"
                :removable="pictureInput.removable"
                :hideChangeButton="pictureInput.hideChangeButton"
                :customStrings="pictureInput.customStrings"
                :prefill="this.pictures.temperature.data"
                :prefillOptions="{mediaType: this.pictures.temperature.type }"
              ></picture-input>
            </div>
          </div>
          <br />
          <div class="row">
            <div class="column">
              {{$t('interiorReport.gauges.oilPressure')}} *
              <br />
              <select
                :style="{'background-color': effectActiveColor(vehicleInterior.gauges.oilPressure.rating)}"
                v-model="vehicleInterior.gauges.oilPressure.rating"
                @blur="onSubmit"
              >
                <option
                  v-for="item in ratings"
                  :key="item.condition"
                  :style="{'background-color':item.color}"
                >{{item.condition}}</option>
              </select>
            </div>
            <div class="column">
              {{$t('interiorReport.gauges.commentOnOilPressure')}}:
              <br />
              <textarea
                rows="3"
                v-model="vehicleInterior.gauges.oilPressure.comment"
                @blur="onSubmit"
              ></textarea>&nbsp;
            </div>
            <div class="column">
              <picture-input
                @change="onChangePicture('oil-pressure','gauges')"
                @remove="onRemovePicture('oil-pressure','gauges')"
                :crop="pictureInput.crop"
                :width="pictureInput.width"
                :height="pictureInput.height"
                :margin="pictureInput.margin"
                :size="pictureInput.size"
                :accept="pictureInput.accept"
                :zIndex="pictureInput.zIndex"
                :buttonClass="pictureInput.buttonClass"
                :removable="pictureInput.removable"
                :hideChangeButton="pictureInput.hideChangeButton"
                :customStrings="pictureInput.customStrings"
                :prefill="this.pictures.oilPressure.data"
                :prefillOptions="{mediaType: this.pictures.oilPressure.type }"
              ></picture-input>
            </div>
          </div>
          <br />
          <div class="row">
            <div class="column">
              {{$t('interiorReport.gauges.ammeter')}} *
              <br />
              <select
                :style="{'background-color': effectActiveColor(vehicleInterior.gauges.ammeter.rating)}"
                v-model="vehicleInterior.gauges.ammeter.rating"
                @blur="onSubmit"
              >
                <option
                  v-for="item in ratings"
                  :key="item.condition"
                  :style="{'background-color':item.color}"
                >{{item.condition}}</option>
              </select>
            </div>
            <div class="column">
              {{$t('interiorReport.gauges.commentOnAmmeter')}}:
              <br />
              <textarea rows="3" v-model="vehicleInterior.gauges.ammeter.comment" @blur="onSubmit"></textarea>&nbsp;
            </div>
            <div class="column">
              <picture-input
                @change="onChangePicture('ammeter','gauges')"
                @remove="onRemovePicture('ammeter','gauges')"
                :crop="pictureInput.crop"
                :width="pictureInput.width"
                :height="pictureInput.height"
                :margin="pictureInput.margin"
                :size="pictureInput.size"
                :accept="pictureInput.accept"
                :zIndex="pictureInput.zIndex"
                :buttonClass="pictureInput.buttonClass"
                :removable="pictureInput.removable"
                :hideChangeButton="pictureInput.hideChangeButton"
                :customStrings="pictureInput.customStrings"
                :prefill="this.pictures.ammeter.data"
                :prefillOptions="{mediaType: this.pictures.ammeter.type }"
              ></picture-input>
            </div>
          </div>
          <br />
          <div class="row"></div>
          <div class="save-btn1">
            <button type="submit" class="save-btn" @click.prevent="onSubmit()">{{$t('buttons.save')}}</button>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <hr />
          <br />
          <br />
          <div class="row">
            <div class="column">
              <h2>{{$t('interiorReport.audioSystem.title')}}</h2>
            </div>
          </div>
          <div class="row">
            <div class="column">
             {{$t('interiorReport.audioSystem.radio')}} *
              <br />
              <select
                :style="{'background-color': effectActiveColor(vehicleInterior.audioSystem.radio.rating)}"
                v-model="vehicleInterior.audioSystem.radio.rating"
                @blur="onSubmit"
              >
                <option
                  v-for="item in ratings"
                  :key="item.condition"
                  :style="{'background-color':item.color}"
                >{{item.condition}}</option>
              </select>
            </div>
            <div class="column">
              {{$t('interiorReport.audioSystem.commentOnRadio')}}:
              <br />
              <textarea
                rows="3"
                v-model="vehicleInterior.audioSystem.radio.comment"
                @blur="onSubmit"
              ></textarea>&nbsp;
            </div>
            <div class="column">
              <picture-input
                @change="onChangePicture('radio','audio-system')"
                @remove="onRemovePicture('radio','audio-system')"
                :crop="pictureInput.crop"
                :width="pictureInput.width"
                :height="pictureInput.height"
                :margin="pictureInput.margin"
                :size="pictureInput.size"
                :accept="pictureInput.accept"
                :zIndex="pictureInput.zIndex"
                :buttonClass="pictureInput.buttonClass"
                :removable="pictureInput.removable"
                :hideChangeButton="pictureInput.hideChangeButton"
                :customStrings="pictureInput.customStrings"
                :prefill="this.pictures.radio.data"
                :prefillOptions="{mediaType: this.pictures.radio.type }"
              ></picture-input>
            </div>
          </div>
          <br />
          <div class="row">
            <div class="column">
              {{$t('interiorReport.audioSystem.tapePlayer')}} *
              <br />
              <select
                :style="{'background-color': effectActiveColor(vehicleInterior.audioSystem.tapePlayer.rating)}"
                v-model="vehicleInterior.audioSystem.tapePlayer.rating"
                @blur="onSubmit"
              >
                <option
                  v-for="item in ratings"
                  :key="item.condition"
                  :style="{'background-color':item.color}"
                >{{item.condition}}</option>
              </select>
            </div>
            <div class="column">
              {{$t('interiorReport.audioSystem.commentOnTapePlayer')}}:
              <br />
              <textarea
                rows="3"
                v-model="vehicleInterior.audioSystem.tapePlayer.comment"
                @blur="onSubmit"
              ></textarea>&nbsp;
            </div>
            <div class="column">
              <picture-input
                @change="onChangePicture('tape-player','audio-system')"
                @remove="onRemovePicture('tape-player','audio-system')"
                :crop="pictureInput.crop"
                :width="pictureInput.width"
                :height="pictureInput.height"
                :margin="pictureInput.margin"
                :size="pictureInput.size"
                :accept="pictureInput.accept"
                :zIndex="pictureInput.zIndex"
                :buttonClass="pictureInput.buttonClass"
                :removable="pictureInput.removable"
                :hideChangeButton="pictureInput.hideChangeButton"
                :customStrings="pictureInput.customStrings"
                :prefill="this.pictures.tapePlayer.data"
                :prefillOptions="{mediaType: this.pictures.tapePlayer.type }"
              ></picture-input>
            </div>
          </div>
          <br />
          <div class="row">
            <div class="column">
              {{$t('interiorReport.audioSystem.cdPlayer')}} *
              <br />
              <select
                :style="{'background-color': effectActiveColor(vehicleInterior.audioSystem.cdPlayer.rating)}"
                v-model="vehicleInterior.audioSystem.cdPlayer.rating"
                @blur="onSubmit"
              >
                <option
                  v-for="item in ratings"
                  :key="item.condition"
                  :style="{'background-color':item.color}"
                >{{item.condition}}</option>
              </select>
            </div>
            <div class="row">
              <div class="column">
               {{$t('interiorReport.audioSystem.commentOnCdPlayer')}}:
                <br />
                <textarea
                  rows="3"
                  v-model="vehicleInterior.audioSystem.cdPlayer.comment"
                  @blur="onSubmit"
                ></textarea>&nbsp;
              </div>
              <div class="column">
                <picture-input
                  @change="onChangePicture('cd-player','audio-system')"
                  @remove="onRemovePicture('cd-player','audio-system')"
                  :crop="pictureInput.crop"
                  :width="pictureInput.width"
                  :height="pictureInput.height"
                  :margin="pictureInput.margin"
                  :size="pictureInput.size"
                  :accept="pictureInput.accept"
                  :zIndex="pictureInput.zIndex"
                  :buttonClass="pictureInput.buttonClass"
                  :removable="pictureInput.removable"
                  :hideChangeButton="pictureInput.hideChangeButton"
                  :customStrings="pictureInput.customStrings"
                  :prefill="this.pictures.cdPlayer.data"
                  :prefillOptions="{mediaType: this.pictures.cdPlayer.type }"
                ></picture-input>
              </div>
            </div>
          </div>
          <br />
          <div class="save-btn1">
            <button type="submit" class="save-btn" @click.prevent="onSubmit()">{{$t('buttons.save')}}</button>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <hr />
          <br />
          <br />
          <div class="row">
            <div class="column">
              <h2>{{$t('interiorReport.carpetAndUpholstery.title')}}</h2>
            </div>
          </div>
          <div class="row">
            <div class="column">
             {{$t('interiorReport.carpetAndUpholstery.frontSeats')}} *
              <br />
              <select
                :style="{'background-color': effectActiveColor(vehicleInterior.carpetAndUpholstery.frontSeats.rating)}"
                v-model="vehicleInterior.carpetAndUpholstery.frontSeats.rating"
                @blur="onSubmit"
              >
                <option
                  v-for="item in ratings"
                  :key="item.condition"
                  :style="{'background-color':item.color}"
                >{{item.condition}}</option>
              </select>
            </div>
            <div class="column">
              {{$t('interiorReport.carpetAndUpholstery.commentOnFrontSeats')}}:
              <br />
              <textarea
                rows="3"
                v-model="vehicleInterior.carpetAndUpholstery.frontSeats.comment"
                @blur="onSubmit"
              ></textarea>&nbsp;
            </div>
            <div class="column">
              <picture-input
                @change="onChangePicture('front-seats','carpet-upholstery')"
                @remove="onRemovePicture('front-seats','carpet-upholstery')"
                :crop="pictureInput.crop"
                :width="pictureInput.width"
                :height="pictureInput.height"
                :margin="pictureInput.margin"
                :size="pictureInput.size"
                :accept="pictureInput.accept"
                :zIndex="pictureInput.zIndex"
                :buttonClass="pictureInput.buttonClass"
                :removable="pictureInput.removable"
                :hideChangeButton="pictureInput.hideChangeButton"
                :customStrings="pictureInput.customStrings"
                :prefill="this.pictures.frontSeats.data"
                :prefillOptions="{mediaType: this.pictures.frontSeats.type }"
              ></picture-input>
            </div>
          </div>
          <br />
          <div class="row">
            <div class="column">
              {{$t('interiorReport.carpetAndUpholstery.rearSeats')}} *
              <br />
              <select
                :style="{'background-color': effectActiveColor(vehicleInterior.carpetAndUpholstery.rearSeats.rating)}"
                v-model="vehicleInterior.carpetAndUpholstery.rearSeats.rating"
                @blur="onSubmit"
              >
                <option
                  v-for="item in ratings"
                  :key="item.condition"
                  :style="{'background-color':item.color}"
                >{{item.condition}}</option>
              </select>
            </div>
            <div class="column">
              {{$t('interiorReport.carpetAndUpholstery.commentOnRearSeats')}}:
              <br />
              <textarea
                rows="3"
                v-model="vehicleInterior.carpetAndUpholstery.rearSeats.comment"
                @blur="onSubmit"
              ></textarea>&nbsp;
            </div>
            <div class="column">
              <picture-input
                @change="onChangePicture('rear-seats','carpet-upholstery')"
                @remove="onRemovePicture('rear-seats','carpet-upholstery')"
                :crop="pictureInput.crop"
                :width="pictureInput.width"
                :height="pictureInput.height"
                :margin="pictureInput.margin"
                :size="pictureInput.size"
                :accept="pictureInput.accept"
                :zIndex="pictureInput.zIndex"
                :buttonClass="pictureInput.buttonClass"
                :removable="pictureInput.removable"
                :hideChangeButton="pictureInput.hideChangeButton"
                :customStrings="pictureInput.customStrings"
                :prefill="this.pictures.rearSeats.data"
                :prefillOptions="{mediaType: this.pictures.rearSeats.type }"
              ></picture-input>
            </div>
          </div>
          <br />
          <div class="row">
            <div class="column">
              {{$t('interiorReport.carpetAndUpholstery.frontCarpeting')}} *
              <br />
              <select
                :style="{'background-color': effectActiveColor(vehicleInterior.carpetAndUpholstery.frontCarpeting.rating)}"
                v-model="vehicleInterior.carpetAndUpholstery.frontCarpeting.rating"
                @blur="onSubmit"
              >
                <option
                  v-for="item in ratings"
                  :key="item.condition"
                  :style="{'background-color':item.color}"
                >{{item.condition}}</option>
              </select>
            </div>
            <div class="column">
              {{$t('interiorReport.carpetAndUpholstery.commentOnFrontCarpeting')}}:
              <br />
              <textarea
                rows="3"
                v-model="vehicleInterior.carpetAndUpholstery.frontCarpeting.comment"
                @blur="onSubmit"
              ></textarea>&nbsp;
            </div>
            <div class="column">
              <picture-input
                @change="onChangePicture('front-carpeting','carpet-upholstery')"
                @remove="onRemovePicture('front-carpeting','carpet-upholstery')"
                :crop="pictureInput.crop"
                :width="pictureInput.width"
                :height="pictureInput.height"
                :margin="pictureInput.margin"
                :size="pictureInput.size"
                :accept="pictureInput.accept"
                :zIndex="pictureInput.zIndex"
                :buttonClass="pictureInput.buttonClass"
                :removable="pictureInput.removable"
                :hideChangeButton="pictureInput.hideChangeButton"
                :customStrings="pictureInput.customStrings"
                :prefill="this.pictures.frontCarpeting.data"
                :prefillOptions="{mediaType: this.pictures.frontCarpeting.type }"
              ></picture-input>
            </div>
          </div>
          <br />
          <div class="row">
            <div class="column">
             {{$t('interiorReport.carpetAndUpholstery.rearCarpeting')}} *
              <br />
              <select
                :style="{'background-color': effectActiveColor(vehicleInterior.carpetAndUpholstery.rearCarpeting.rating)}"
                v-model="vehicleInterior.carpetAndUpholstery.rearCarpeting.rating"
                @blur="onSubmit"
              >
                <option
                  v-for="item in ratings"
                  :key="item.condition"
                  :style="{'background-color':item.color}"
                >{{item.condition}}</option>
              </select>
            </div>
            <div class="column">
              {{$t('interiorReport.carpetAndUpholstery.commentOnRearCarpeting')}}:
              <br />
              <textarea
                rows="3"
                v-model="vehicleInterior.carpetAndUpholstery.rearCarpeting.comment"
                @blur="onSubmit"
              ></textarea>&nbsp;
            </div>
            <div class="column">
              <picture-input
                @change="onChangePicture('rear-carpeting','carpet-upholstery')"
                @remove="onRemovePicture('rear-carpeting','carpet-upholstery')"
                :crop="pictureInput.crop"
                :width="pictureInput.width"
                :height="pictureInput.height"
                :margin="pictureInput.margin"
                :size="pictureInput.size"
                :accept="pictureInput.accept"
                :zIndex="pictureInput.zIndex"
                :buttonClass="pictureInput.buttonClass"
                :removable="pictureInput.removable"
                :hideChangeButton="pictureInput.hideChangeButton"
                :customStrings="pictureInput.customStrings"
                :prefill="this.pictures.rearCarpeting.data"
                :prefillOptions="{mediaType: this.pictures.rearCarpeting.type }"
              ></picture-input>
            </div>
          </div>
          <br />
          <div class="row">
            <div class="column">
             {{$t('interiorReport.carpetAndUpholstery.headliner')}}*
              <br />
              <select
                :style="{'background-color': effectActiveColor(vehicleInterior.carpetAndUpholstery.headliner.rating)}"
                v-model="vehicleInterior.carpetAndUpholstery.headliner.rating"
                @blur="onSubmit"
              >
                <option
                  v-for="item in ratings"
                  :key="item.condition"
                  :style="{'background-color':item.color}"
                >{{item.condition}}</option>
              </select>
            </div>
            <div class="row">
              <div class="column">
               {{$t('interiorReport.carpetAndUpholstery.commentOnHeadliner')}}:
                <br />
                <textarea
                  rows="3"
                  v-model="vehicleInterior.carpetAndUpholstery.headliner.comment"
                  @blur="onSubmit"
                ></textarea>&nbsp;
              </div>
              <div class="column">
                <picture-input
                  @change="onChangePicture('headliner','carpet-upholstery')"
                  @remove="onRemovePicture('headliner','carpet-upholstery')"
                  :crop="pictureInput.crop"
                  :width="pictureInput.width"
                  :height="pictureInput.height"
                  :margin="pictureInput.margin"
                  :size="pictureInput.size"
                  :accept="pictureInput.accept"
                  :zIndex="pictureInput.zIndex"
                  :buttonClass="pictureInput.buttonClass"
                  :removable="pictureInput.removable"
                  :hideChangeButton="pictureInput.hideChangeButton"
                  :customStrings="pictureInput.customStrings"
                  :prefill="this.pictures.headliner.data"
                  :prefillOptions="{mediaType: this.pictures.headliner.type }"
                ></picture-input>
              </div>
            </div>
          </div>
          <br />
          <div class="save-btn1">
            <button type="submit" class="save-btn" @click.prevent="onSubmit()">{{$t('buttons.save')}}</button>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <hr />
          <br />
          <br />
          <div class="row">
            <div class="column">
              <h2>{{$t('interiorReport.trunk.title')}}</h2>
            </div>
          </div>
          <div class="row">
            <div class="column">
              {{$t('interiorReport.trunk.carpeting')}}*
              <br />
              <select
                :style="{'background-color': effectActiveColor(vehicleInterior.trunk.carpeting.rating)}"
                v-model="vehicleInterior.trunk.carpeting.rating"
                @blur="onSubmit"
              >
                <option
                  v-for="item in ratings"
                  :key="item.condition"
                  :style="{'background-color':item.color}"
                >{{item.condition}}</option>
              </select>
            </div>
            <div class="column">
              {{$t('interiorReport.trunk.commentOnCarpeting')}}:
              <br />
              <textarea rows="3" v-model="vehicleInterior.trunk.carpeting.comment" @blur="onSubmit"></textarea>&nbsp;
            </div>
            <div class="column">
              <picture-input
                @change="onChangePicture('trunk-carpeting','trunk')"
                @remove="onRemovePicture('trunk-carpeting','trunk')"
                :crop="pictureInput.crop"
                :width="pictureInput.width"
                :height="pictureInput.height"
                :margin="pictureInput.margin"
                :size="pictureInput.size"
                :accept="pictureInput.accept"
                :zIndex="pictureInput.zIndex"
                :buttonClass="pictureInput.buttonClass"
                :removable="pictureInput.removable"
                :hideChangeButton="pictureInput.hideChangeButton"
                :customStrings="pictureInput.customStrings"
                :prefill="this.pictures.trunkCarpeting.data"
                :prefillOptions="{mediaType: this.pictures.trunkCarpeting.type }"
              ></picture-input>
            </div>
          </div>
          <br />
          <div class="row">
            <div class="column">
             {{$t('interiorReport.trunk.spareTire')}} *
              <br />
              <select
                :style="{'background-color': effectActiveColor(vehicleInterior.trunk.spareTire.rating)}"
                v-model="vehicleInterior.trunk.spareTire.rating"
                @blur="onSubmit"
              >
                <option
                  v-for="item in ratings"
                  :key="item.condition"
                  :style="{'background-color':item.color}"
                >{{item.condition}}</option>
              </select>
            </div>
            <div class="column">
              {{$t('interiorReport.trunk.commentOnSpareTire')}}:
              <br />
              <textarea rows="3" v-model="vehicleInterior.trunk.spareTire.comment" @blur="onSubmit"></textarea>&nbsp;
            </div>
            <div class="column">
              <picture-input
                @change="onChangePicture('spare-tire','trunk')"
                @remove="onRemovePicture('spare-tire','trunk')"
                :crop="pictureInput.crop"
                :width="pictureInput.width"
                :height="pictureInput.height"
                :margin="pictureInput.margin"
                :size="pictureInput.size"
                :accept="pictureInput.accept"
                :zIndex="pictureInput.zIndex"
                :buttonClass="pictureInput.buttonClass"
                :removable="pictureInput.removable"
                :hideChangeButton="pictureInput.hideChangeButton"
                :customStrings="pictureInput.customStrings"
                :prefill="this.pictures.spareTire.data"
                :prefillOptions="{mediaType: this.pictures.spareTire.type }"
              ></picture-input>
            </div>
          </div>
          <br />
          <div class="row">
            <div class="column">
              {{$t('interiorReport.trunk.tools')}} *
              <br />
              <select
                :style="{'background-color': effectActiveColor(vehicleInterior.trunk.tools.rating)}"
                v-model="vehicleInterior.trunk.tools.rating"
                @blur="onSubmit"
              >
                <option
                  v-for="item in ratings"
                  :key="item.condition"
                  :style="{'background-color':item.color}"
                >{{item.condition}}</option>
              </select>
            </div>
            <div class="column">
              {{$t('interiorReport.trunk.commentOnTools')}}:
              <br />
              <textarea rows="3" v-model="vehicleInterior.trunk.tools.comment" @blur="onSubmit"></textarea>&nbsp;
            </div>
            <div class="column">
              <picture-input
                @change="onChangePicture('tools','trunk')"
                @remove="onRemovePicture('tools','trunk')"
                :crop="pictureInput.crop"
                :width="pictureInput.width"
                :height="pictureInput.height"
                :margin="pictureInput.margin"
                :size="pictureInput.size"
                :accept="pictureInput.accept"
                :zIndex="pictureInput.zIndex"
                :buttonClass="pictureInput.buttonClass"
                :removable="pictureInput.removable"
                :hideChangeButton="pictureInput.hideChangeButton"
                :customStrings="pictureInput.customStrings"
                :prefill="this.pictures.tools.data"
                :prefillOptions="{mediaType: this.pictures.tools.type }"
              ></picture-input>
            </div>
          </div>
          <br />
          <div class="row">
            <div class="column">
              {{$t('interiorReport.trunk.jack')}} *
              <br />
              <select
                :style="{'background-color': effectActiveColor(vehicleInterior.trunk.jack.rating)}"
                v-model="vehicleInterior.trunk.jack.rating"
                @blur="onSubmit"
              >
                <option
                  v-for="item in ratings"
                  :key="item.condition"
                  :style="{'background-color':item.color}"
                >{{item.condition}}</option>
              </select>
            </div>
            <div class="column">
              {{$t('interiorReport.trunk.commentOnJack')}}:
              <br />
              <textarea rows="3" v-model="vehicleInterior.trunk.jack.comment" @blur="onSubmit"></textarea>&nbsp;
            </div>
            <div class="column">
              <picture-input
                @change="onChangePicture('jack','trunk')"
                @remove="onRemovePicture('jack','trunk')"
                :crop="pictureInput.crop"
                :width="pictureInput.width"
                :height="pictureInput.height"
                :margin="pictureInput.margin"
                :size="pictureInput.size"
                :accept="pictureInput.accept"
                :zIndex="pictureInput.zIndex"
                :buttonClass="pictureInput.buttonClass"
                :removable="pictureInput.removable"
                :hideChangeButton="pictureInput.hideChangeButton"
                :customStrings="pictureInput.customStrings"
                :prefill="this.pictures.jack.data"
                :prefillOptions="{mediaType: this.pictures.jack.type }"
              ></picture-input>
            </div>
          </div>
          <br />
          <div class="row">
            <div class="column">
             {{$t('interiorReport.trunk.floorPan')}} *
              <br />
              <select
                :style="{'background-color': effectActiveColor(vehicleInterior.trunk.floorPan.rating)}"
                v-model="vehicleInterior.trunk.floorPan.rating"
                @blur="onSubmit"
              >
                <option
                  v-for="item in ratings"
                  :key="item.condition"
                  :style="{'background-color':item.color}"
                >{{item.condition}}</option>
              </select>
            </div>
            <div class="row">
              <div class="column">
               {{$t('interiorReport.trunk.commentOnFloorPan')}}:
                <br />
                <textarea
                  rows="3"
                  v-model="vehicleInterior.trunk.floorPan.comment"
                  @blur="onSubmit"
                ></textarea>&nbsp;
              </div>
              <div class="column">
                <picture-input
                  @change="onChangePicture('floor-pan','trunk')"
                  @remove="onRemovePicture('floor-pan','trunk')"
                  :crop="pictureInput.crop"
                  :width="pictureInput.width"
                  :height="pictureInput.height"
                  :margin="pictureInput.margin"
                  :size="pictureInput.size"
                  :accept="pictureInput.accept"
                  :zIndex="pictureInput.zIndex"
                  :buttonClass="pictureInput.buttonClass"
                  :removable="pictureInput.removable"
                  :hideChangeButton="pictureInput.hideChangeButton"
                  :customStrings="pictureInput.customStrings"
                  :prefill="this.pictures.floorPan.data"
                  :prefillOptions="{mediaType: this.pictures.floorPan.type }"
                ></picture-input>
              </div>
            </div>
          </div>
          <br />
          <div class="save-btn1">
            <button type="submit" class="save-btn" @click.prevent="onSubmit()">{{$t('buttons.save')}}</button>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <hr />
          <br />
          <br />
          <div class="row">
            <div class="column">
              <h2>{{$t('interiorReport.electricalSystem.title')}}</h2>
            </div>
          </div>
          <div class="row">
            <div class="column">
              {{$t('interiorReport.electricalSystem.headLights')}} *
              <br />
              <select
                :style="{'background-color': effectActiveColor(vehicleInterior.electricalSystem.headLights.rating)}"
                v-model="vehicleInterior.electricalSystem.headLights.rating"
                @blur="onSubmit"
              >
                <option
                  v-for="item in ratings"
                  :key="item.condition"
                  :style="{'background-color':item.color}"
                >{{item.condition}}</option>
              </select>
            </div>
            <div class="column">
              {{$t('interiorReport.electricalSystem.commentOnHeadLights')}}:
              <br />
              <textarea
                rows="3"
                v-model="vehicleInterior.electricalSystem.headLights.comment"
                @blur="onSubmit"
              ></textarea>&nbsp;
            </div>
            <div class="column">
              <picture-input
                @change="onChangePicture('head-lights','electrical-system')"
                @remove="onRemovePicture('head-lights','electrical-system')"
                :crop="pictureInput.crop"
                :width="pictureInput.width"
                :height="pictureInput.height"
                :margin="pictureInput.margin"
                :size="pictureInput.size"
                :accept="pictureInput.accept"
                :zIndex="pictureInput.zIndex"
                :buttonClass="pictureInput.buttonClass"
                :removable="pictureInput.removable"
                :hideChangeButton="pictureInput.hideChangeButton"
                :customStrings="pictureInput.customStrings"
                :prefill="this.pictures.headLights.data"
                :prefillOptions="{mediaType: this.pictures.headLights.type }"
              ></picture-input>
            </div>
          </div>
          <br />
          <div class="row">
            <div class="column">
             {{$t('interiorReport.electricalSystem.turnSignal')}}*
              <br />
              <select
                :style="{'background-color': effectActiveColor(vehicleInterior.electricalSystem.turnSignals.rating)}"
                v-model="vehicleInterior.electricalSystem.turnSignals.rating"
                @blur="onSubmit"
              >
                <option
                  v-for="item in ratings"
                  :key="item.condition"
                  :style="{'background-color':item.color}"
                >{{item.condition}}</option>
              </select>
            </div>
            <div class="column">
              {{$t('interiorReport.electricalSystem.commentOnTurnSignal')}}:
              <br />
              <textarea
                rows="3"
                v-model="vehicleInterior.electricalSystem.turnSignals.comment"
                @blur="onSubmit"
              ></textarea>&nbsp;
            </div>
            <div class="column">
              <picture-input
                @change="onChangePicture('turn-signals','electrical-system')"
                @remove="onRemovePicture('turn-signals','electrical-system')"
                :crop="pictureInput.crop"
                :width="pictureInput.width"
                :height="pictureInput.height"
                :margin="pictureInput.margin"
                :size="pictureInput.size"
                :accept="pictureInput.accept"
                :zIndex="pictureInput.zIndex"
                :buttonClass="pictureInput.buttonClass"
                :removable="pictureInput.removable"
                :hideChangeButton="pictureInput.hideChangeButton"
                :customStrings="pictureInput.customStrings"
                :prefill="this.pictures.turnSignals.data"
                :prefillOptions="{mediaType: this.pictures.turnSignals.type }"
              ></picture-input>
            </div>
          </div>
          <br />
          <div class="row">
            <div class="column">
              {{$t('interiorReport.electricalSystem.tailLights')}} *
              <br />
              <select
                :style="{'background-color': effectActiveColor(vehicleInterior.electricalSystem.tailLights.rating)}"
                v-model="vehicleInterior.electricalSystem.tailLights.rating"
                @blur="onSubmit"
              >
                <option
                  v-for="item in ratings"
                  :key="item.condition"
                  :style="{'background-color':item.color}"
                >{{item.condition}}</option>
              </select>
            </div>
            <div class="column">
              {{$t('interiorReport.electricalSystem.commentOnTailLights')}}:
              <br />
              <textarea
                rows="3"
                v-model="vehicleInterior.electricalSystem.tailLights.comment"
                @blur="onSubmit"
              ></textarea>&nbsp;
            </div>
            <div class="column">
              <picture-input
                @change="onChangePicture('tail-lights','electrical-system')"
                @remove="onRemovePicture('tail-lights','electrical-system')"
                :crop="pictureInput.crop"
                :width="pictureInput.width"
                :height="pictureInput.height"
                :margin="pictureInput.margin"
                :size="pictureInput.size"
                :accept="pictureInput.accept"
                :zIndex="pictureInput.zIndex"
                :buttonClass="pictureInput.buttonClass"
                :removable="pictureInput.removable"
                :hideChangeButton="pictureInput.hideChangeButton"
                :customStrings="pictureInput.customStrings"
                :prefill="this.pictures.tailLights.data"
                :prefillOptions="{mediaType: this.pictures.tailLights.type }"
              ></picture-input>
            </div>
          </div>
          <br />
          <div class="row">
            <div class="column">
              {{$t('interiorReport.electricalSystem.electricWindows')}} *
              <br />
              <select
                :style="{'background-color': effectActiveColor(vehicleInterior.electricalSystem.electricWindows.rating)}"
                v-model="vehicleInterior.electricalSystem.electricWindows.rating"
                @blur="onSubmit"
              >
                <option
                  v-for="item in ratings"
                  :key="item.condition"
                  :style="{'background-color':item.color}"
                >{{item.condition}}</option>
              </select>
            </div>
            <div class="column">
              {{$t('interiorReport.electricalSystem.commentOnElectricWindows')}}:
              <br />
              <textarea
                rows="3"
                v-model="vehicleInterior.electricalSystem.electricWindows.comment"
                @blur="onSubmit"
              ></textarea>&nbsp;
            </div>
            <div class="column">
              <picture-input
                @change="onChangePicture('electric-windows','electrical-system')"
                @remove="onRemovePicture('electric-windows','electrical-system')"
                :crop="pictureInput.crop"
                :width="pictureInput.width"
                :height="pictureInput.height"
                :margin="pictureInput.margin"
                :size="pictureInput.size"
                :accept="pictureInput.accept"
                :zIndex="pictureInput.zIndex"
                :buttonClass="pictureInput.buttonClass"
                :removable="pictureInput.removable"
                :hideChangeButton="pictureInput.hideChangeButton"
                :customStrings="pictureInput.customStrings"
                :prefill="this.pictures.electricWindows.data"
                :prefillOptions="{mediaType: this.pictures.electricWindows.type }"
              ></picture-input>
            </div>
          </div>
          <br />
          <div class="row">
            <div class="column">
              {{$t('interiorReport.electricalSystem.brakeLights')}} *
              <br />
              <select
                :style="{'background-color': effectActiveColor(vehicleInterior.electricalSystem.brakeLights.rating)}"
                v-model="vehicleInterior.electricalSystem.brakeLights.rating"
                @blur="onSubmit"
              >
                <option
                  v-for="item in ratings"
                  :key="item.condition"
                  :style="{'background-color':item.color}"
                >{{item.condition}}</option>
              </select>
            </div>
            <div class="column">
              {{$t('interiorReport.electricalSystem.brakeLights')}}:
              <br />
              <textarea
                rows="3"
                v-model="vehicleInterior.electricalSystem.brakeLights.comment"
                @blur="onSubmit"
              ></textarea>&nbsp;
            </div>
            <div class="column">
              <picture-input
                @change="onChangePicture('brake-lights','electrical-system')"
                @remove="onRemovePicture('brake-lights','electrical-system')"
                :crop="pictureInput.crop"
                :width="pictureInput.width"
                :height="pictureInput.height"
                :margin="pictureInput.margin"
                :size="pictureInput.size"
                :accept="pictureInput.accept"
                :zIndex="pictureInput.zIndex"
                :buttonClass="pictureInput.buttonClass"
                :removable="pictureInput.removable"
                :hideChangeButton="pictureInput.hideChangeButton"
                :customStrings="pictureInput.customStrings"
                :prefill="this.pictures.brakeLights.data"
                :prefillOptions="{mediaType: this.pictures.brakeLights.type }"
              ></picture-input>
            </div>
          </div>
          <br />
          <div class="row">
            <div class="column">
              {{$t('interiorReport.electricalSystem.electricSeats')}} *
              <br />
              <select
                :style="{'background-color': effectActiveColor(vehicleInterior.electricalSystem.electricSeats.rating)}"
                v-model="vehicleInterior.electricalSystem.electricSeats.rating"
                @blur="onSubmit"
              >
                <option
                  v-for="item in ratings"
                  :key="item.condition"
                  :style="{'background-color':item.color}"
                >{{item.condition}}</option>
              </select>
            </div>
            <div class="column">
              {{$t('interiorReport.electricalSystem.commentOnElectricSeats')}}:
              <br />
              <textarea
                rows="3"
                v-model="vehicleInterior.electricalSystem.electricSeats.comment"
                @blur="onSubmit"
              ></textarea>&nbsp;
            </div>
            <div class="column">
              <picture-input
                @change="onChangePicture('electric-seats','electrical-system')"
                @remove="onRemovePicture('electric-seats','electrical-system')"
                :crop="pictureInput.crop"
                :width="pictureInput.width"
                :height="pictureInput.height"
                :margin="pictureInput.margin"
                :size="pictureInput.size"
                :accept="pictureInput.accept"
                :zIndex="pictureInput.zIndex"
                :buttonClass="pictureInput.buttonClass"
                :removable="pictureInput.removable"
                :hideChangeButton="pictureInput.hideChangeButton"
                :customStrings="pictureInput.customStrings"
                :prefill="this.pictures.electricSeats.data"
                :prefillOptions="{mediaType: this.pictures.electricSeats.type }"
              ></picture-input>
            </div>
          </div>
          <br />
          <div class="row">
            <div class="column">
              {{$t('interiorReport.electricalSystem.parkingLights')}} *
              <br />
              <select
                :style="{'background-color': effectActiveColor(vehicleInterior.electricalSystem.parkingLights.rating)}"
                v-model="vehicleInterior.electricalSystem.parkingLights.rating"
                @blur="onSubmit"
              >
                <option
                  v-for="item in ratings"
                  :key="item.condition"
                  :style="{'background-color':item.color}"
                >{{item.condition}}</option>
              </select>
            </div>
            <div class="row">
              <div class="column">
               {{$t('interiorReport.electricalSystem.commentOnParkingLights')}}:
                <br />
                <textarea
                  rows="3"
                  v-model="vehicleInterior.electricalSystem.parkingLights.comments"
                  @blur="onSubmit"
                ></textarea>&nbsp;
              </div>
              <div class="column">
                <picture-input
                  @change="onChangePicture('parking-lights','electrical-system')"
                  @remove="onRemovePicture('parking-lights','electrical-system')"
                  :crop="pictureInput.crop"
                  :width="pictureInput.width"
                  :height="pictureInput.height"
                  :margin="pictureInput.margin"
                  :size="pictureInput.size"
                  :accept="pictureInput.accept"
                  :zIndex="pictureInput.zIndex"
                  :buttonClass="pictureInput.buttonClass"
                  :removable="pictureInput.removable"
                  :hideChangeButton="pictureInput.hideChangeButton"
                  :customStrings="pictureInput.customStrings"
                  :prefill="this.pictures.parkingLights.data"
                  :prefillOptions="{mediaType: this.pictures.parkingLights.type }"
                ></picture-input>
              </div>
            </div>
          </div>
          <br />
          <div class="save-btn1">
            <button type="submit" class="save-btn" @click.prevent="onSubmit()">{{$t('buttons.save')}}</button>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <hr />
          <br />
          <br />
          <div class="row">
            <div class="column">
              <h2>{{$t('interiorReport.underTheHood.title')}}</h2>
            </div>
          </div>
          <div class="row">
            <div class="column">
              {{$t('interiorReport.underTheHood.oilLeaks')}} *
              <br />
              <select
                :style="{'background-color': effectActiveColor(vehicleInterior.underThehood.oilLeaks.rating)}"
                v-model="vehicleInterior.underThehood.oilLeaks.rating"
                @blur="onSubmit"
              >
                <option
                  v-for="item in ratings"
                  :key="item.condition"
                  :style="{'background-color':item.color}"
                >{{item.condition}}</option>
              </select>
            </div>
            <div class="column">
             {{$t('interiorReport.underTheHood.commentOnOilLeaks')}}:
              <br />
              <textarea
                rows="3"
                v-model="vehicleInterior.underThehood.oilLeaks.comment"
                @blur="onSubmit"
              ></textarea>&nbsp;
            </div>
            <div class="column">
              <picture-input
                @change="onChangePicture('oil-leaks','under-hood')"
                @remove="onRemovePicture('oil-leaks','under-hood')"
                :crop="pictureInput.crop"
                :width="pictureInput.width"
                :height="pictureInput.height"
                :margin="pictureInput.margin"
                :size="pictureInput.size"
                :accept="pictureInput.accept"
                :zIndex="pictureInput.zIndex"
                :buttonClass="pictureInput.buttonClass"
                :removable="pictureInput.removable"
                :hideChangeButton="pictureInput.hideChangeButton"
                :customStrings="pictureInput.customStrings"
                :prefill="this.pictures.oilLeaks.data"
                :prefillOptions="{mediaType: this.pictures.oilLeaks.type }"
              ></picture-input>
            </div>
          </div>
          <br />
          <div class="row">
            <div class="column">
             {{$t('interiorReport.underTheHood.exhaustLeaks')}} *
              <br />
              <select
                :style="{'background-color': effectActiveColor(vehicleInterior.underThehood.exhaustLeaks.rating)}"
                v-model="vehicleInterior.underThehood.exhaustLeaks.rating"
                @blur="onSubmit"
              >
                <option
                  v-for="item in ratings"
                  :key="item.condition"
                  :style="{'background-color':item.color}"
                >{{item.condition}}</option>
              </select>
            </div>
            <div class="column">
              {{$t('interiorReport.underTheHood.commentOnExhaustLeaks')}}:
              <br />
              <textarea
                rows="3"
                v-model="vehicleInterior.underThehood.exhaustLeaks.comment"
                @blur="onSubmit"
              ></textarea>&nbsp;
            </div>
            <div class="column">
              <picture-input
                @change="onChangePicture('exhaust-leaks','under-hood')"
                @remove="onRemovePicture('exhaust-leaks','under-hood')"
                :crop="pictureInput.crop"
                :width="pictureInput.width"
                :height="pictureInput.height"
                :margin="pictureInput.margin"
                :size="pictureInput.size"
                :accept="pictureInput.accept"
                :zIndex="pictureInput.zIndex"
                :buttonClass="pictureInput.buttonClass"
                :removable="pictureInput.removable"
                :hideChangeButton="pictureInput.hideChangeButton"
                :customStrings="pictureInput.customStrings"
                :prefill="this.pictures.exhaustLeaks.data"
                :prefillOptions="{mediaType: this.pictures.exhaustLeaks.type }"
              ></picture-input>
            </div>
          </div>
          <br />
          <div class="row">
            <div class="column">
              {{$t('interiorReport.underTheHood.exhaustSmoke')}} *
              <br />
              <select
                :style="{'background-color': effectActiveColor(vehicleInterior.underThehood.exhaustSmoke.rating)}"
                v-model="vehicleInterior.underThehood.exhaustSmoke.rating"
                @blur="onSubmit"
              >
                <option
                  v-for="item in ratings"
                  :key="item.condition"
                  :style="{'background-color':item.color}"
                >{{item.condition}}</option>
              </select>
            </div>
            <div class="row">
              <div class="column">
                {{$t('interiorReport.underTheHood.commentOnExhaustSmoke')}}:
                <br />
                <textarea
                  rows="3"
                  v-model="vehicleInterior.underThehood.exhaustSmoke.comment"
                  @blur="onSubmit"
                ></textarea>&nbsp;
              </div>
              <div class="column">
                <picture-input
                  @change="onChangePicture('exhaust-smoke','under-hood')"
                  @remove="onRemovePicture('exhaust-smoke','under-hood')"
                  :crop="pictureInput.crop"
                  :width="pictureInput.width"
                  :height="pictureInput.height"
                  :margin="pictureInput.margin"
                  :size="pictureInput.size"
                  :accept="pictureInput.accept"
                  :zIndex="pictureInput.zIndex"
                  :buttonClass="pictureInput.buttonClass"
                  :removable="pictureInput.removable"
                  :hideChangeButton="pictureInput.hideChangeButton"
                  :customStrings="pictureInput.customStrings"
                  :prefill="this.pictures.exhaustSmoke.data"
                  :prefillOptions="{mediaType: this.pictures.exhaustSmoke.type }"
                ></picture-input>
              </div>
            </div>
          </div>
          <br />
           <hr />
           <br />
          <div class="btn-container">
            <div>
              <button type="submit" @click.prevent="onSubmit()" class="save-btn">{{$t('buttons.save')}}</button>
            </div>
            <div>
              <button type="submit" @click.prevent="submitAndToNext()" class="next-btn">{{$t('buttons.next')}}</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>


<script>
import { mapState, mapActions, mapMutations, mapGetters } from "vuex";
import PictureInput from "vue-picture-input";
import globalAxios from "axios";
import vue2Dropzone from "vue2-dropzone";
import "vue2-dropzone/dist/vue2Dropzone.min.css";
import ratings from "../../../../mockData/ratings";
export default {
  components: {
    PictureInput,
    vueDropzone: vue2Dropzone
  },
  data() {
    return {
      jobId: this.$route.params.jobId,
      pictureInput: {
        crop: false,
        width: "400",
        height: "400",
        margin: "0",
        size: "0.3",
        zIndex: 0,
        buttonClass: "btn",
        removable: true,
        hideChangeButton: true,
        customStrings: {
          upload: "<h1>Bummer!</h1>",
          drag:
            "Drag and drop photo or click to upload. <br><br> Max. 300KB. <br> PNG or JPG only.",
          remove: "Remove"
        }
      },
      vehicleInterior: {
        interiorItems: {
          interiorLook: {
            rating: "",
            comment: ""
          },
          airConditionerCoolingPerformance: {
            rating: "",
            comment: ""
          },
          heaterOperation: {
            rating: "",
            comment: ""
          },
          hoodRelease: {
            rating: "",
            comment: ""
          },
          cigaretteLighter: {
            rating: "",
            comment: ""
          },
          headRests: {
            rating: "",
            comment: ""
          },
          doorPanels: {
            rating: "",
            comment: ""
          },
          dashPad: {
            rating: "",
            comment: ""
          },
          vanityMirrors: {
            rating: "",
            comment: ""
          }
        },
        gauges: {
          speedometer: {
            rating: "",
            comment: ""
          },
          tachometer: {
            rating: "",
            comment: ""
          },
          temperature: {
            rating: "",
            comment: ""
          },
          oilPressure: {
            rating: "",
            comment: ""
          },
          ammeter: {
            rating: "",
            comment: ""
          }
        },
        audioSystem: {
          radio: {
            rating: "",
            comment: ""
          },
          tapePlayer: {
            rating: "",
            comment: ""
          },
          cdPlayer: {
            rating: "",
            comment: ""
          }
        },
        carpetAndUpholstery: {
          frontSeats: {
            rating: "",
            comment: ""
          },
          rearSeats: {
            rating: "",
            comment: ""
          },
          frontCarpeting: {
            rating: "",
            comment: ""
          },
          rearCarpeting: {
            rating: "",
            comment: ""
          },
          headliner: {
            rating: "",
            comment: ""
          }
        },
        trunk: {
          carpeting: {
            rating: "",
            comment: ""
          },
          spareTire: {
            rating: "",
            comment: ""
          },
          tools: {
            rating: "",
            comment: ""
          },
          jack: {
            rating: "",
            comment: ""
          },
          floorPan: {
            rating: "",
            comment: ""
          }
        },
        electricalSystem: {
          headLights: {
            rating: "",
            comment: ""
          },
          turnSignals: {
            rating: "",
            comment: ""
          },
          tailLights: {
            rating: "",
            comment: ""
          },
          electricWindows: {
            rating: "",
            comment: ""
          },
          brakeLights: {
            rating: "",
            comment: ""
          },
          electricSeats: {
            rating: "",
            comment: ""
          },
          parkingLights: {
            rating: "",
            comment: ""
          }
        },
        underThehood: {
          oilLeaks: {
            rating: "",
            comment: ""
          },
          exhaustLeaks: {
            rating: "",
            comment: ""
          },
          exhaustSmoke: {
            rating: "",
            comment: ""
          }
        }
      },
      pictures: {
        interiorLook: {
          data: "",
          type: ""
        },
        airConditionerCoolingPerformance: {
          data: "",
          type: ""
        },
        heaterOperation: {
          data: "",
          type: ""
        },
        hoodRelease: {
          data: "",
          type: ""
        },
        cigaretteLighter: {
          data: "",
          type: ""
        },
        headRests: {
          data: "",
          type: ""
        },
        doorPanels: {
          data: "",
          type: ""
        },
        dashPad: {
          data: "",
          type: ""
        },
        vanityMirrors: {
          data: "",
          type: ""
        },
        speedometer: {
          data: "",
          type: ""
        },
        tachometer: {
          data: "",
          type: ""
        },
        temperature: {
          data: "",
          type: ""
        },
        oilPressure: {
          data: "",
          type: ""
        },
        ammeter: {
          data: "",
          type: ""
        },
        radio: {
          data: "",
          type: ""
        },
        tapePlayer: {
          data: "",
          type: ""
        },
        cdPlayer: {
          data: "",
          type: ""
        },
        frontSeats: {
          data: "",
          type: ""
        },
        rearSeats: {
          data: "",
          type: ""
        },
        frontCarpeting: {
          data: "",
          type: ""
        },
        rearCarpeting: {
          data: "",
          type: ""
        },
        headliner: {
          data: "",
          type: ""
        },
        trunkCarpeting: {
          data: "",
          type: ""
        },
        spareTire: {
          data: "",
          type: ""
        },
        tools: {
          data: "",
          type: ""
        },
        jack: {
          data: "",
          type: ""
        },
        floorPan: {
          data: "",
          type: ""
        },
        headLights: {
          data: "",
          type: ""
        },
        turnSignals: {
          data: "",
          type: ""
        },
        tailLights: {
          data: "",
          type: ""
        },
        electricWindows: {
          data: "",
          type: ""
        },
        brakeLights: {
          data: "",
          type: ""
        },
        electricSeats: {
          data: "",
          type: ""
        },
        parkingLights: {
          data: "",
          type: ""
        },
        oilLeaks: {
          data: "",
          type: ""
        },
        exhaustLeaks: {
          data: "",
          type: ""
        },
        exhaustSmoke: {
          data: "",
          type: ""
        }
      },
      ratings: ratings,

      dialingCode: this.getDialingCode
    };
  },

  methods: {
    onSubmit(direction) {
      const formData = {
        vehicleInterior: this.vehicleInterior
      };
      globalAxios
        .patch("/vehicle_inspection_reports/" + this.jobId, formData)
        .then(res => {
          if (direction == "next") {
            this.$emit("interiorReportPage", false);
            this.$emit("roadTestReportPage", true);
            this.$emit("interiorReportPageDone", true);
          }
        })
        .catch(error => console.log(error.response));
    },

    onChangePicture(partOfVehicle, inspectionSubSegment) {
      const picture = event.target.result;
      if (picture) {
        //Split the picture to extract the base64 and the contentType
        const base64PictureOnly = picture.split(",", 2)[1];
        const contentType = picture
          .split(",", 2)[0]
          .split(";")[0]
          .split(":")[1];

        //convert the base64 to byteCharacters
        const byteCharacters = atob(base64PictureOnly);

        //Convert the byteCharacters to byteNumbers
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
          byteNumbers[i] = byteCharacters.charCodeAt(i);
        }

        //Convert the byte numbers to unit 8 array
        const byteArray = new Uint8Array(byteNumbers);

        //Convert the unit 8 array to blob
        const blob = new Blob([byteArray], { type: contentType });

        let formData = new FormData();
        formData.append("fileData", blob, partOfVehicle);
        formData.append("inspectionSubSegment", inspectionSubSegment);
        formData.append("inspectionSegment", "interior");
        formData.append("picturesArray", "vehicleInteriorPictures");

        globalAxios
          .post(
            "/vehicle_inspection_reports/pictures/interior/" +
              inspectionSubSegment +
              "/" +
              partOfVehicle +
              "/" +
              this.jobId,
            formData
          )
          .then(res => {
            console.log(this.vehicleInterior);
            this.vehicleInterior = res.data.vehicleInterior;
          })
          .catch(error => console.log(error.response));
      } else {
        throw new Error();
      }
    },

    onRemovePicture(partOfVehicle, inspectionSubSegment) {
      globalAxios
        .delete(
          "/vehicle_inspection_reports/pictures/interior/" +
            inspectionSubSegment +
            "/" +
            partOfVehicle +
            "/" +
            this.jobId
        )
        .then(res => {
          console.log(res.data.vehicleInterior);
          this.vehicleInterior = res.data.vehicleInterior;
        })
        .catch(error => console.log(error.response));
    },

    effectActiveColor(event) {
      const color = [];
      this.ratings.forEach(item => {
        if (item.condition == event) {
          color.push(item.color);
        }
      });
      this.color = color[0];
      return color[0];
    }
  },

  mounted() {
    const jobId = this.$route.params.jobId;
    //Gets the report from mongodb
    globalAxios
      .get("/vehicle_inspection_reports/" + jobId)
      .then(res => {
        console.log(res.data);
        this.vehicleInterior = res.data.vehicleInterior;
      })
      .catch(error => console.log(error));

    //Gets the vehicle interior pictures
    globalAxios
      .get("/vehicle_inspection_reports/interior-pictures/" + jobId)
      .then(res => {
        const resData = res.data;
        resData.forEach(item => {
          if (item.fileName == "interior-look") {
            this.pictures.interiorLook.data =
              "data:" + item.contentType + ";base64," + item.base64Data;
            this.pictures.interiorLook.type = item.contentType;
          }
          if (item.fileName == "air-conditioner") {
            this.pictures.airConditionerCoolingPerformance.data =
              "data:" + item.contentType + ";base64," + item.base64Data;
            this.pictures.airConditionerCoolingPerformance.type =
              item.contentType;
          }
          if (item.fileName == "heater-operation") {
            this.pictures.heaterOperation.data =
              "data:" + item.contentType + ";base64," + item.base64Data;
            this.pictures.heaterOperation.type = item.contentType;
          }
          if (item.fileName == "hood-release") {
            this.pictures.hoodRelease.data =
              "data:" + item.contentType + ";base64," + item.base64Data;
            this.pictures.hoodRelease.type = item.contentType;
          }
          if (item.fileName == "cigarette-lighter") {
            this.pictures.cigaretteLighter.data =
              "data:" + item.contentType + ";base64," + item.base64Data;
            this.pictures.cigaretteLighter.type = item.contentType;
          }
          if (item.fileName == "head-rests") {
            this.pictures.headRests.data =
              "data:" + item.contentType + ";base64," + item.base64Data;
            this.pictures.headRests.type = item.contentType;
          }
          if (item.fileName == "door-panels") {
            this.pictures.doorPanels.data =
              "data:" + item.contentType + ";base64," + item.base64Data;
            this.pictures.doorPanels.type = item.contentType;
          }
          if (item.fileName == "dash-pad") {
            this.pictures.dashPad.data =
              "data:" + item.contentType + ";base64," + item.base64Data;
            this.pictures.dashPad.type = item.contentType;
          }
          if (item.fileName == "vanity-mirrors") {
            this.pictures.vanityMirrors.data =
              "data:" + item.contentType + ";base64," + item.base64Data;
            this.pictures.vanityMirrors.type = item.contentType;
          }
          if (item.fileName == "speedometer") {
            this.pictures.speedometer.data =
              "data:" + item.contentType + ";base64," + item.base64Data;
            this.pictures.speedometer.type = item.contentType;
          }
          if (item.fileName == "tachometer") {
            this.pictures.tachometer.data =
              "data:" + item.contentType + ";base64," + item.base64Data;
            this.pictures.tachometer.type = item.contentType;
          }
          if (item.fileName == "temperature") {
            this.pictures.temperature.data =
              "data:" + item.contentType + ";base64," + item.base64Data;
            this.pictures.temperature.type = item.contentType;
          }
          if (item.fileName == "oil-pressure") {
            this.pictures.oilPressure.data =
              "data:" + item.contentType + ";base64," + item.base64Data;
            this.pictures.oilPressure.type = item.contentType;
          }
          if (item.fileName == "ammeter") {
            this.pictures.ammeter.data =
              "data:" + item.contentType + ";base64," + item.base64Data;
            this.pictures.ammeter.type = item.contentType;
          }
          if (item.fileName == "radio") {
            this.pictures.radio.data =
              "data:" + item.contentType + ";base64," + item.base64Data;
            this.pictures.radio.type = item.contentType;
          }
          if (item.fileName == "radio") {
            this.pictures.radio.data =
              "data:" + item.contentType + ";base64," + item.base64Data;
            this.pictures.radio.type = item.contentType;
          }
          if (item.fileName == "tape-player") {
            this.pictures.tapePlayer.data =
              "data:" + item.contentType + ";base64," + item.base64Data;
            this.pictures.tapePlayer.type = item.contentType;
          }
          if (item.fileName == "cd-player") {
            this.pictures.cdPlayer.data =
              "data:" + item.contentType + ";base64," + item.base64Data;
            this.pictures.cdPlayer.type = item.contentType;
          }
          if (item.fileName == "front-seats") {
            this.pictures.frontSeats.data =
              "data:" + item.contentType + ";base64," + item.base64Data;
            this.pictures.frontSeats.type = item.contentType;
          }
          if (item.fileName == "rear-seats") {
            this.pictures.rearSeats.data =
              "data:" + item.contentType + ";base64," + item.base64Data;
            this.pictures.rearSeats.type = item.contentType;
          }
          if (item.fileName == "front-carpeting") {
            this.pictures.frontCarpeting.data =
              "data:" + item.contentType + ";base64," + item.base64Data;
            this.pictures.frontCarpeting.type = item.contentType;
          }
          if (item.fileName == "rear-carpeting") {
            this.pictures.rearCarpeting.data =
              "data:" + item.contentType + ";base64," + item.base64Data;
            this.pictures.rearCarpeting.type = item.contentType;
          }
          if (item.fileName == "headliner") {
            this.pictures.headliner.data =
              "data:" + item.contentType + ";base64," + item.base64Data;
            this.pictures.headliner.type = item.contentType;
          }
          if (item.fileName == "trunk-carpeting") {
            this.pictures.trunkCarpeting.data =
              "data:" + item.contentType + ";base64," + item.base64Data;
            this.pictures.trunkCarpeting.type = item.contentType;
          }
          if (item.fileName == "tools") {
            this.pictures.tools.data =
              "data:" + item.contentType + ";base64," + item.base64Data;
            this.pictures.tools.type = item.contentType;
          }
          if (item.fileName == "spare-tire") {
            this.pictures.spareTire.data =
              "data:" + item.contentType + ";base64," + item.base64Data;
            this.pictures.spareTire.type = item.contentType;
          }
          if (item.fileName == "jack") {
            this.pictures.jack.data =
              "data:" + item.contentType + ";base64," + item.base64Data;
            this.pictures.jack.type = item.contentType;
          }
          if (item.fileName == "floor-pan") {
            this.pictures.floorPan.data =
              "data:" + item.contentType + ";base64," + item.base64Data;
            this.pictures.floorPan.type = item.contentType;
          }
          if (item.fileName == "head-lights") {
            this.pictures.headLights.data =
              "data:" + item.contentType + ";base64," + item.base64Data;
            this.pictures.headLights.type = item.contentType;
          }
          if (item.fileName == "turn-signals") {
            this.pictures.turnSignals.data =
              "data:" + item.contentType + ";base64," + item.base64Data;
            this.pictures.turnSignals.type = item.contentType;
          }
          if (item.fileName == "tail-lights") {
            this.pictures.tailLights.data =
              "data:" + item.contentType + ";base64," + item.base64Data;
            this.pictures.tailLights.type = item.contentType;
          }
          if (item.fileName == "electric-windows") {
            this.pictures.electricWindows.data =
              "data:" + item.contentType + ";base64," + item.base64Data;
            this.pictures.electricWindows.type = item.contentType;
          }
          if (item.fileName == "brake-lights") {
            this.pictures.brakeLights.data =
              "data:" + item.contentType + ";base64," + item.base64Data;
            this.pictures.brakeLights.type = item.contentType;
          }
          if (item.fileName == "electric-seats") {
            this.pictures.electricSeats.data =
              "data:" + item.contentType + ";base64," + item.base64Data;
            this.pictures.electricSeats.type = item.contentType;
          }
          if (item.fileName == "parking-lights") {
            this.pictures.parkingLights.data =
              "data:" + item.contentType + ";base64," + item.base64Data;
            this.pictures.parkingLights.type = item.contentType;
          }
          if (item.fileName == "oil-leaks") {
            this.pictures.oilLeaks.data =
              "data:" + item.contentType + ";base64," + item.base64Data;
            this.pictures.oilLeaks.type = item.contentType;
          }
          if (item.fileName == "exhaust-leaks") {
            this.pictures.exhaustLeaks.data =
              "data:" + item.contentType + ";base64," + item.base64Data;
            this.pictures.exhaustLeaks.type = item.contentType;
          }
          if (item.fileName == "exhaust-smoke") {
            this.pictures.exhaustSmoke.data =
              "data:" + item.contentType + ";base64," + item.base64Data;
            this.pictures.exhaustSmoke.type = item.contentType;
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
  background-color: lightblue;
  display: inline-block;
  font-family: sans-serif, Arial, Helvetica;
  width: 100%;
}

.container-content {
  float: left;
  font-size: 12px;
  background-color: white;
  width: 100%;
  display: inline-block;
}

select,
textarea {
  width: 100%;
  padding: 10px;
  margin-top: 8px;
  border: 1px solid #ccc;
  border-radius: 3px;
  outline: none;
  background-color: rgb(232, 240, 254);
}

select:focus,
textarea:focus {
  outline: none;
  border: 1px solid #a842a7;
  background-color: #eee;
}

.btn-container {
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  align-items: center;
}

.comments {
  display: flex;
  flex: 1;
  cursor: pointer;
}

.comments i {
  font-size: 35px;
  margin-left: 10px;
}

.comments span {
  font-size: 13px;
  margin: 6px;
  display: block;
}

.next-btn,
.save-btn {
  font-size: 13px;
  width: 70px;
  border-radius: 20px;
  font-weight: bold;
  height: 40px;
  outline: none;
  text-align: center;
  box-sizing: border-box;
  cursor: pointer;
  display: block;
}

.next-btn {
  margin-left: 20px;
  margin-right: 10px;
  color: white;
  background-color: black;
}

.save-btn {
  color: black;
  background-color: white;
}

.save-btn:hover {
  color: white;
  background-color: black;
}

.next-btn:hover {
  color: black;
  background-color: white;
}

/* Clear floats after the columns */
.row::after {
  content: "";
  clear: both;
  display: table;
}

.column {
  padding: 10px;
  float: left;
  width: 33%;
}

/* For mobile phones: */
@media only screen and (max-width: 650px) {
  .column {
    padding: 10px 0px;
    width: 100%;
  }
}
</style>