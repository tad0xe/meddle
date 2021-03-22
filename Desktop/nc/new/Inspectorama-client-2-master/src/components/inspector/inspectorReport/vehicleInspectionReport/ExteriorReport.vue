<template>
  <div>
    <div class="container">
      <div class="container-content">
        <form @submit.prevent="onSubmit()">
          <div class="row">
            <div class="column">
              <h2>{{$t('exteriorReport.body.title')}}</h2>
            </div>
          </div>
          <div class="row">
            <div class="column">
              {{$t('exteriorReport.body.front')}} *
              <br />
              <select
                :style="{'background-color': effectActiveColor(vehicleExterior.body.front.rating)}"
                v-model="vehicleExterior.body.front.rating"
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
              {{$t('exteriorReport.body.commentOnFront')}}:
              <br />
              <textarea rows="3" v-model="vehicleExterior.body.front.comment" @blur="onSubmit"></textarea>&nbsp;
            </div>
            <div class="column">
              <picture-input
                @change="onChangePicture('front','body')"
                @remove="onRemovePicture('front','body')"
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
                :prefill="pictures.front.data"
                :prefillOptions="{mediaType: pictures.front.type}"
              ></picture-input>
            </div>
          </div>
          <br />
          <div class="row">
            <div class="column">
              Rear*
              <br />
              <select
                :style="{'background-color': effectActiveColor(vehicleExterior.body.rear.rating)}"
                v-model="vehicleExterior.body.rear.rating"
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
              {{$t('exteriorReport.body.commentOnRear')}}:
              <br />
              <textarea rows="3" v-model="vehicleExterior.body.rear.comment" @blur="onSubmit"></textarea>&nbsp;
            </div>
            <div class="column">
              <picture-input
                @change="onChangePicture('rear','body')"
                @remove="onRemovePicture('rear','body')"
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
                :prefill="pictures.rear.data"
                :prefillOptions="{mediaType: pictures.rear.type}"
              ></picture-input>
            </div>
          </div>
          <br />
          <div class="row">
            <div class="column">
              {{$t('exteriorReport.body.hood')}} *
              <br />
              <select
                :style="{'background-color': effectActiveColor(vehicleExterior.body.hood.rating)}"
                v-model="vehicleExterior.body.hood.rating"
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
              {{$t('exteriorReport.body.commentOnHood')}}:
              <br />
              <textarea rows="3" v-model="vehicleExterior.body.hood.comment" @blur="onSubmit"></textarea>&nbsp;
            </div>
            <div class="column">
              <picture-input
                @change="onChangePicture('hood','body')"
                @remove="onRemovePicture('hood','body')"
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
                :prefill="this.pictures.hood.data"
                :prefillOptions="{mediaType: this.pictures.hood.type}"
              ></picture-input>
            </div>
          </div>
          <br />
          <div class="row">
            <div class="column">
              {{$t('exteriorReport.body.roof')}} *
              <br />
              <select
                :style="{'background-color': effectActiveColor(vehicleExterior.body.roof.rating)}"
                v-model="vehicleExterior.body.roof.rating"
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
              {{$t('exteriorReport.body.commentOnRoof')}}:
              <br />
              <textarea rows="3" v-model="vehicleExterior.body.roof.comment" @blur="onSubmit"></textarea>&nbsp;
            </div>
            <div class="column">
              <picture-input
                @change="onChangePicture('roof','body')"
                @remove="onRemovePicture('roof','body')"
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
                :prefill="this.pictures.roof.data"
                :prefillOptions="{mediaType: this.pictures.roof.type}"
              ></picture-input>
            </div>
          </div>
          <br />
          <div class="row">
            <div class="column">
              {{$t('exteriorReport.body.bumpers')}} *
              <br />
              <select
                :style="{'background-color': effectActiveColor(vehicleExterior.body.bumpers.rating)}"
                v-model="vehicleExterior.body.bumpers.rating"
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
              {{$t('exteriorReport.body.commentOnBumpers')}}:
              <br />
              <textarea rows="3" v-model="vehicleExterior.body.bumpers.comment" @blur="onSubmit"></textarea>&nbsp;
            </div>
            <div class="column">
              <picture-input
                @change="onChangePicture('bumpers','body')"
                @remove="onRemovePicture('bumpers','body')"
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
                :prefill="this.pictures.bumpers.data"
                :prefillOptions="{mediaType: this.pictures.bumpers.type}"
              ></picture-input>
            </div>
          </div>
          <br />
          <div class="row">
            <div class="column">
              {{$t('exteriorReport.body.trim')}} *
              <br />
              <select
                :style="{'background-color': effectActiveColor(vehicleExterior.body.trim.rating)}"
                v-model="vehicleExterior.body.trim.rating"
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
              {{$t('exteriorReport.body.commentOnTrim')}}:
              <br />
              <textarea rows="3" v-model="vehicleExterior.body.trim.comment" @blur="onSubmit"></textarea>&nbsp;
            </div>
            <div class="column">
              <picture-input
                @change="onChangePicture('trim','body')"
                @remove="onRemovePicture('trim','body')"
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
                :prefill="this.pictures.trim.data"
                :prefillOptions="{mediaType: this.pictures.trim.type}"
              ></picture-input>
            </div>
          </div>
          <br />
          <div class="row">
            <div class="column">
              {{$t('exteriorReport.body.leftFront')}} *
              <br />
              <select
                :style="{'background-color': effectActiveColor(vehicleExterior.body.leftFront.rating)}"
                v-model="vehicleExterior.body.leftFront.rating"
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
              {{$t('exteriorReport.body.commentOnLeftFront')}}:
              <br />
              <textarea rows="3" v-model="vehicleExterior.body.leftFront.comment" @blur="onSubmit"></textarea>&nbsp;
            </div>
            <div class="column">
              <picture-input
                @change="onChangePicture('left-front','body')"
                @remove="onRemovePicture('left-front','body')"
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
                :prefill="this.pictures.leftFront.data"
                :prefillOptions="{mediaType: this.pictures.leftFront.type}"
              ></picture-input>
            </div>
          </div>
          <br />
          <div class="row">
            <div class="column">
              {{$t('exteriorReport.body.rightFront')}} *
              <br />
              <select
                :style="{'background-color': effectActiveColor(vehicleExterior.body.rightFront.rating)}"
                v-model="vehicleExterior.body.rightFront.rating"
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
              {{$t('exteriorReport.body.commentOnRightFront')}}:
              <br />
              <textarea rows="3" v-model="vehicleExterior.body.rightFront.comment" @blur="onSubmit"></textarea>&nbsp;
            </div>
            <div class="column">
              <picture-input
                @change="onChangePicture('right-front','body')"
                @remove="onRemovePicture('right-front','body')"
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
                :prefill="this.pictures.rightFront.data"
                :prefillOptions="{mediaType: this.pictures.rightFront.type}"
              ></picture-input>
            </div>
          </div>
          <br />
          <div class="row">
            <div class="column">
              {{$t('exteriorReport.body.leftDoors')}} *
              <br />
              <select
                :style="{'background-color': effectActiveColor(vehicleExterior.body.leftDoors.rating)}"
                v-model="vehicleExterior.body.leftDoors.rating"
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
              {{$t('exteriorReport.body.commentOnLeftDoors')}}:
              <br />
              <textarea rows="3" v-model="vehicleExterior.body.leftDoors.comment" @blur="onSubmit"></textarea>&nbsp;
            </div>
            <div class="column">
              <picture-input
                @change="onChangePicture('left-doors','body')"
                @remove="onRemovePicture('left-doors','body')"
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
                :prefill="this.pictures.leftDoors.data"
                :prefillOptions="{mediaType: this.pictures.leftDoors.type}"
              ></picture-input>
            </div>
          </div>
          <br />
          <div class="row">
            <div class="column">
              {{$t('exteriorReport.body.rightDoors')}} *
              <br />
              <select
                :style="{'background-color': effectActiveColor(vehicleExterior.body.rightDoors.rating)}"
                v-model="vehicleExterior.body.rightDoors.rating"
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
              {{$t('exteriorReport.body.commentOnRightDoors')}}:
              <br />
              <textarea rows="3" v-model="vehicleExterior.body.rightDoors.comment" @blur="onSubmit"></textarea>&nbsp;
            </div>
            <div class="column">
              <picture-input
                @change="onChangePicture('right-doors','body')"
                @remove="onRemovePicture('right-doors','body')"
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
                :prefill="this.pictures.rightDoors.data"
                :prefillOptions="{mediaType: this.pictures.rightDoors.type}"
              ></picture-input>
            </div>
          </div>
          <br />
          <div class="row">
            <div class="column">
              {{$t('exteriorReport.body.leftRear')}} *
              <br />
              <select
                :style="{'background-color': effectActiveColor(vehicleExterior.body.leftRear.rating)}"
                v-model="vehicleExterior.body.leftRear.rating"
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
              {{$t('exteriorReport.body.commentOnLeftRear')}}:
              <br />
              <textarea rows="3" v-model="vehicleExterior.body.leftRear.comment" @blur="onSubmit"></textarea>&nbsp;
            </div>
            <div class="column">
              <picture-input
                @change="onChangePicture('left-rear','body')"
                @remove="onRemovePicture('left-rear','body')"
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
                :prefill="this.pictures.leftRear.data"
                :prefillOptions="{mediaType: this.pictures.leftRear.type}"
              ></picture-input>
            </div>
          </div>
          <br />
          <div class="row">
            <div class="column">
              {{$t('exteriorReport.body.rightRear')}} *
              <br />
              <select
                :style="{'background-color': effectActiveColor(vehicleExterior.body.rightRear.rating)}"
                v-model="vehicleExterior.body.rightRear.rating"
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
              {{$t('exteriorReport.body.commentOnRightRear')}}:
              <br />
              <textarea rows="3" v-model="vehicleExterior.body.rightRear.comment" @blur="onSubmit"></textarea>&nbsp;
            </div>
            <div class="column">
              <picture-input
                @change="onChangePicture('right-rear','body')"
                @remove="onRemovePicture('right-rear','body')"
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
                :prefill="this.pictures.rightRear.data"
                :prefillOptions="{mediaType: this.pictures.rightRear.type}"
              ></picture-input>
            </div>
          </div>
          <br />
          <br />
          <br />
          <hr />
          <br />
          <br />
          <div class="row">
            <div class="column">
              <h2>{{$t('exteriorReport.glass.title')}}</h2>
            </div>
          </div>
          <div class="row">
            <div class="column">
              {{$t('exteriorReport.glass.windshield')}} *
              <br />
              <select
                :style="{'background-color': effectActiveColor(vehicleExterior.glass.windshield.rating)}"
                v-model="vehicleExterior.glass.windshield.rating"
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
              {{$t('exteriorReport.glass.commentOnWindshield')}}:
              <br />
              <textarea
                rows="3"
                v-model="vehicleExterior.glass.windshield.comment"
                @blur="onSubmit"
              ></textarea>&nbsp;
            </div>
            <div class="column">
              <picture-input
                @change="onChangePicture('windshield','glass')"
                @remove="onRemovePicture('windshield','glass')"
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
                :prefill="this.pictures.windshield.data"
                :prefillOptions="{mediaType: this.pictures.windshield.type}"
              ></picture-input>
            </div>
          </div>
          <br />
          <div class="row">
            <div class="column">
              {{$t('exteriorReport.glass.rearWindow')}} *
              <br />
              <select
                :style="{'background-color': effectActiveColor(vehicleExterior.glass.rearWindow.rating)}"
                v-model="vehicleExterior.glass.rearWindow.rating"
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
              {{$t('exteriorReport.glass.commentOnRearWindow')}}:
              <br />
              <textarea
                rows="3"
                v-model="vehicleExterior.glass.rearWindow.comment"
                @blur="onSubmit"
              ></textarea>&nbsp;
            </div>
            <div class="column">
              <picture-input
                @change="onChangePicture('rear-window','glass')"
                @remove="onRemovePicture('rear-window','glass')"
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
                :prefill="this.pictures.rearWindow.data"
                :prefillOptions="{mediaType: this.pictures.rearWindow.type}"
              ></picture-input>
            </div>
          </div>
          <br />
          <div class="row">
            <div class="column">
              {{$t('exteriorReport.glass.leftFrontWindow')}} *
              <br />
              <select
                :style="{'background-color': effectActiveColor(vehicleExterior.glass.leftFrontWindow.rating)}"
                v-model="vehicleExterior.glass.leftFrontWindow.rating"
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
              {{$t('exteriorReport.glass.commentOnLeftFrontWindow')}}:
              <br />
              <textarea
                rows="3"
                v-model="vehicleExterior.glass.leftFrontWindow.rating"
                @blur="onSubmit"
              ></textarea>&nbsp;
            </div>
            <div class="column">
              <picture-input
                @change="onChangePicture('left-front-window','glass')"
                @remove="onRemovePicture('left-front-window','glass')"
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
                :prefill="this.pictures.leftFrontWindow.data"
                :prefillOptions="{mediaType: this.pictures.leftFrontWindow.type}"
              ></picture-input>
            </div>
          </div>
          <br />
          <div class="row">
            <div class="column">
              {{$t('exteriorReport.glass.rightFrontWindow')}} *
              <br />
              <select
                :style="{'background-color': effectActiveColor(vehicleExterior.glass.rightFrontWindow.rating)}"
                v-model="vehicleExterior.glass.rightFrontWindow.rating"
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
              {{$t('exteriorReport.glass.commentOnRightFrontWindow')}}:
              <br />
              <textarea
                rows="3"
                v-model="vehicleExterior.glass.rightFrontWindow.comment"
                @blur="onSubmit"
              ></textarea>&nbsp;
            </div>
            <div class="column">
              <picture-input
                @change="onChangePicture('right-front-window','glass')"
                @remove="onRemovePicture('right-front-window','glass')"
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
                :prefill="this.pictures.rightFrontWindow.data"
                :prefillOptions="{mediaType: this.pictures.rightFrontWindow.type}"
              ></picture-input>
            </div>
          </div>
          <br />
          <div class="row">
            <div class="column">
              {{$t('exteriorReport.glass.leftRearWindow')}} *
              <br />
              <select
                :style="{'background-color': effectActiveColor(vehicleExterior.glass.leftRearWindow.rating)}"
                v-model="vehicleExterior.glass.leftRearWindow.rating"
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
              {{$t('exteriorReport.glass.commentOnLeftRearWindow')}}:
              <br />
              <textarea
                rows="3"
                v-model="vehicleExterior.glass.leftRearWindow.comment"
                @blur="onSubmit"
              ></textarea>&nbsp;
            </div>
            <div class="column">
              <picture-input
                @change="onChangePicture('left-rear-window','glass')"
                @remove="onRemovePicture('left-rear-window','glass')"
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
                :prefill="this.pictures.leftRearWindow.data"
                :prefillOptions="{mediaType: this.pictures.leftRearWindow.type}"
              ></picture-input>
            </div>
          </div>
          <br />
          <div class="row">
            <div class="column">
              {{$t('exteriorReport.glass.rightRearWindow')}} *
              <br />
              <select
                :style="{'background-color': effectActiveColor(vehicleExterior.glass.rightRearWindow.rating)}"
                v-model="vehicleExterior.glass.rightRearWindow.rating"
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
              {{$t('exteriorReport.glass.commentOnRightRearWindow')}}:
              <br />
              <textarea
                rows="3"
                v-model="vehicleExterior.glass.rightRearWindow.comment"
                @blur="onSubmit"
              ></textarea>&nbsp;
            </div>
            <div class="column">
              <picture-input
                @change="onChangePicture('right-rear-window','glass')"
                @remove="onRemovePicture('right-rear-window','glass')"
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
                :prefill="this.pictures.rightRearWindow.data"
                :prefillOptions="{mediaType: this.pictures.rightRearWindow.type}"
              ></picture-input>
            </div>
          </div>
          <br />
          <br />
          <br />
          <hr />
          <br />
          <br />
          <div class="row">
            <div class="column">
              <h2>{{$t('exteriorReport.tiresAndWheels.title')}}</h2>
            </div>
          </div>
          <div class="row">
            <div class="column">
              {{$t('exteriorReport.tiresAndWheels.conditionOfTires')}} *
              <br />
              <select
                :style="{'background-color': effectActiveColor(vehicleExterior.tiresAndWheels.conditionOfTires.rating)}"
                v-model="vehicleExterior.tiresAndWheels.conditionOfTires.rating"
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
              {{$t('exteriorReport.tiresAndWheels.commentOnConditionOfTires')}}:
              <br />
              <textarea
                rows="3"
                v-model="vehicleExterior.tiresAndWheels.conditionOfTires.comment"
                @blur="onSubmit"
              ></textarea>&nbsp;
            </div>
            <div class="column">
              <picture-input
                @change="onChangePicture('tires','tires-wheels')"
                @remove="onRemovePicture('tires','tires-wheels')"
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
                :prefill="this.pictures.conditionOfTires.data"
                :prefillOptions="{mediaType: this.pictures.conditionOfTires.type}"
              ></picture-input>
            </div>
          </div>
          <br />
          <div class="row">
            <div class="column">
              {{$t('exteriorReport.tiresAndWheels.commentOnConditionOfWheels')}} *
              <br />
              <select
                :style="{'background-color': effectActiveColor(vehicleExterior.tiresAndWheels.conditionOfWheels.rating)}"
                v-model="vehicleExterior.tiresAndWheels.conditionOfWheels.rating"
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
              {{$t('exteriorReport.tiresAndWheels.commentOnConditionOfWheels')}}:
              <br />
              <textarea
                rows="3"
                v-model="vehicleExterior.tiresAndWheels.conditionOfWheels.comment"
                @blur="onSubmit"
              ></textarea>&nbsp;
            </div>
            <div class="column">
              <picture-input
                @change="onChangePicture('wheels','tires-wheels')"
                @remove="onRemovePicture('wheels','tires-wheels')"
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
                :prefill="this.pictures.conditionOfWheels.data"
                :prefillOptions="{mediaType: this.pictures.conditionOfWheels.type}"
              ></picture-input>
            </div>
          </div>
          <br />
          <br />
          <br />
          <hr />
          <br />
          <br />
          <div class="row">
            <div class="column">
              <h2>{{$t('exteriorReport.wipers.title')}}</h2>
            </div>
          </div>
          <div class="row">
            <div class="column">
              {{$t('exteriorReport.wipers.frontWipers')}} *
              <br />
              <select
                :style="{'background-color': effectActiveColor(vehicleExterior.wipers.frontWipers.rating)}"
                v-model="vehicleExterior.wipers.frontWipers.rating"
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
              {{$t('exteriorReport.wipers.commentOnFrontWipers')}}:
              <br />
              <textarea
                rows="3"
                v-model="vehicleExterior.wipers.frontWipers.comment"
                @blur="onSubmit"
              ></textarea>&nbsp;
            </div>
            <div class="column">
              <picture-input
                @change="onChangePicture('front-wipers','wipers')"
                @remove="onRemovePicture('front-wipers','wipers')"
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
                :prefill="this.pictures.frontWipers.data"
                :prefillOptions="{mediaType: this.pictures.frontWipers.type}"
              ></picture-input>
            </div>
          </div>
          <br />
          <div class="row">
            <div class="column">
              {{$t('exteriorReport.wipers.frontWiperBlade')}} *
              <br />
              <select
                :style="{'background-color': effectActiveColor(vehicleExterior.wipers.frontWiperBlades.rating)}"
                v-model="vehicleExterior.wipers.frontWiperBlades.rating"
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
              {{$t('exteriorReport.wipers.commentOnFrontWiperBlade')}}:
              <br />
              <textarea
                rows="3"
                v-model="vehicleExterior.wipers.frontWiperBlades.comment"
                @blur="onSubmit"
              ></textarea>&nbsp;
            </div>
            <div class="column">
              <picture-input
                @change="onChangePicture('front-wiper-blades','wipers')"
                @remove="onRemovePicture('front-wiper-blades','wipers')"
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
                :prefill="this.pictures.frontWiperBlades.data"
                :prefillOptions="{mediaType: this.pictures.frontWiperBlades.type}"
              ></picture-input>
            </div>
          </div>
          <br />
          <div class="row">
            <div class="column">
              {{$t('exteriorReport.wipers.rearWipers')}} *
              <br />
              <select
                :style="{'background-color': effectActiveColor(vehicleExterior.wipers.rearWipers.rating)}"
                v-model="vehicleExterior.wipers.rearWipers.rating"
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
              {{$t('exteriorReport.wipers.commentOnRearWipers')}}:
              <br />
              <textarea
                rows="3"
                v-model="vehicleExterior.wipers.rearWipers.comment"
                @blur="onSubmit"
              ></textarea>&nbsp;
            </div>
            <div class="column">
              <picture-input
                @change="onChangePicture('rear-wipers','wipers')"
                @remove="onRemovePicture('rear-wipers','wipers')"
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
                :prefill="this.pictures.rearWipers.data"
                :prefillOptions="{mediaType: this.pictures.rearWipers.type}"
              ></picture-input>
            </div>
          </div>
          <br />
          <div class="row">
            <div class="column">
              {{$t('exteriorReport.wipers.rearWiperBlade')}} *
              <br />
              <select
                :style="{'background-color': effectActiveColor(vehicleExterior.wipers.rearWiperBlades.rating)}"
                v-model="vehicleExterior.wipers.rearWiperBlades.rating"
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
              {{$t('exteriorReport.wipers.commentOnRearWiperBlade')}}:
              <br />
              <textarea
                rows="3"
                v-model="vehicleExterior.wipers.rearWiperBlades.comment"
                @blur="onSubmit"
              ></textarea>&nbsp;
            </div>
            <div class="column">
              <picture-input
                @change="onChangePicture('rear-wiper-blades','wipers')"
                @remove="onRemovePicture('rear-wiper-blades','wipers')"
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
                :prefill="this.pictures.rearWiperBlades.data"
                :prefillOptions="{mediaType: this.pictures.rearWiperBlades.type}"
              ></picture-input>
            </div>
          </div>
          <br />
          <div class="row">
            <div class="column">
              {{$t('exteriorReport.wipers.frontWindshieldWasher')}} *
              <br />
              <select
                :style="{'background-color': effectActiveColor(vehicleExterior.wipers.frontWindshieldWasher.rating)}"
                v-model="vehicleExterior.wipers.frontWindshieldWasher.rating"
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
              {{$t('exteriorReport.wipers.commentOnFrontWindshieldWasher')}}:
              <br />
              <textarea
                rows="3"
                v-model="vehicleExterior.wipers.frontWindshieldWasher.comment"
                @blur="onSubmit"
              ></textarea>&nbsp;
            </div>
            <div class="column">
              <picture-input
                @change="onChangePicture('front-windshield-washer','wipers')"
                @remove="onRemovePicture('front-windshield-washer','wipers')"
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
                :prefill="this.pictures.frontWindshieldWasher.data"
                :prefillOptions="{mediaType: this.pictures.frontWindshieldWasher.type}"
              ></picture-input>
            </div>
          </div>
          <br />
          <div class="row">
            <div class="column">
              {{$t('exteriorReport.wipers.rearWindshieldWasher')}} *
              <br />
              <select
                :style="{'background-color': effectActiveColor(vehicleExterior.wipers.rearWindshieldWasher.rating)}"
                v-model="vehicleExterior.wipers.rearWindshieldWasher.rating"
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
              {{$t('exteriorReport.wipers.commentOnRearWindshieldWasher')}}:
              <br />
              <textarea
                rows="3"
                v-model="vehicleExterior.wipers.rearWindshieldWasher.comment"
                @blur="onSubmit"
              ></textarea>&nbsp;
            </div>
            <div class="column">
              <picture-input
                @change="onChangePicture('rear-windshield-washer','wipers')"
                @remove="onRemovePicture('rear-windshield-washer','wipers')"
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
                :prefill="this.pictures.rearWindshieldWasher.data"
                :prefillOptions="{mediaType: this.pictures.rearWindshieldWasher.type}"
              ></picture-input>
            </div>
          </div>
          <br />
          <br />
          <br />
          <hr />
          <br />
          <br />
          <div class="btn-container">
            <div>
              <button
                type="submit"
                @click.prevent="onSubmit()"
                class="save-btn"
              >{{$t('buttons.save')}}</button>
            </div>
            <div>
              <button
                type="submit"
                @click.prevent="submitAndToNext()"
                class="next-btn"
              >{{$t('buttons.next')}}</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations, mapGetters } from "vuex";
import globalAxios from "axios";
import PictureInput from "vue-picture-input";
import ratings from "../../../../mockData/ratings";
export default {
  components: {
    PictureInput
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
          drag: this.$t("exteriorReport.dragAndDrop"),
          remove: this.$t("buttons.remove")
        }
      },
      vehicleExterior: {
        body: {
          front: {
            rating: "",
            comment: ""
          },
          rear: {
            rating: "",
            comment: ""
          },
          hood: {
            rating: "",
            comment: ""
          },
          roof: {
            rating: "",
            comment: ""
          },
          bumpers: {
            rating: "",
            comment: ""
          },
          trim: {
            rating: "",
            comment: ""
          },
          leftFront: {
            rating: "",
            comment: ""
          },
          rightFront: {
            rating: "",
            comment: ""
          },
          leftDoors: {
            rating: "",
            comment: ""
          },
          rightDoors: {
            rating: "",
            comment: ""
          },
          leftRear: {
            rating: "",
            comment: ""
          },
          rightRear: {
            rating: "",
            comment: ""
          }
        },
        glass: {
          windshield: {
            rating: "",
            comment: ""
          },
          rearWindow: {
            rating: "",
            comment: ""
          },
          leftFrontWindow: {
            rating: "",
            comment: ""
          },
          rightFrontWindow: {
            rating: "",
            comment: ""
          },
          leftRearWindow: {
            rating: "",
            comment: ""
          },
          rightRearWindow: {
            rating: "",
            comment: ""
          }
        },
        tiresAndWheels: {
          conditionOfTires: {
            rating: "",
            comment: ""
          },
          conditionOfWheels: {
            rating: "",
            comment: ""
          }
        },
        wipers: {
          frontWipers: {
            rating: "",
            comment: ""
          },
          frontWiperBlades: {
            rating: "",
            comment: ""
          },
          rearWipers: {
            rating: "",
            comment: ""
          },
          rearWiperBlades: {
            rating: "",
            comment: ""
          },
          frontWindshieldWasher: {
            rating: "",
            comment: ""
          },
          rearWindshieldWasher: {
            rating: "",
            comment: ""
          }
        }
      },
      bodyPictures: [
        {
          data: null,
          type: null,
          fileName: null,
          partOfVehicle: null
        }
      ],
      glassPictures: [
        {
          data: null,
          type: null,
          fileName: null,
          partOfVehicle: null
        }
      ],
      tiresPictures: [
        {
          data: null,
          type: null,
          fileName: null,
          partOfVehicle: null
        }
      ],
      wipersPictures: [
        {
          data: null,
          type: null,
          fileName: null,
          partOfVehicle: null
        }
      ],
      pictures: {
        front: {
          data: "",
          type: ""
        },
        rear: {
          data: "",
          type: ""
        },
        hood: {
          data: "",
          type: ""
        },
        roof: {
          data: "",
          type: ""
        },
        bumpers: {
          data: "",
          type: ""
        },
        trim: {
          data: "",
          type: ""
        },
        leftFront: {
          data: "",
          type: ""
        },
        rightFront: {
          data: "",
          type: ""
        },
        leftDoors: {
          data: "",
          type: ""
        },
        rightDoors: {
          data: "",
          type: ""
        },
        leftRear: {
          data: "",
          type: ""
        },
        rightRear: {
          data: "",
          type: ""
        },
        windshield: {
          data: "",
          type: ""
        },
        rearWindow: {
          data: "",
          type: ""
        },
        leftFrontWindow: {
          data: "",
          type: ""
        },
        rightFrontWindow: {
          data: "",
          type: ""
        },
        leftRearWindow: {
          data: "",
          type: ""
        },
        rightRearWindow: {
          data: "",
          type: ""
        },
        conditionOfTires: {
          data: "",
          type: ""
        },
        conditionOfWheels: {
          data: "",
          type: ""
        },
        frontWipers: {
          data: "",
          type: ""
        },
        frontWiperBlades: {
          data: "",
          type: ""
        },
        rearWipers: {
          data: "",
          type: ""
        },
        rearWiperBlades: {
          data: "",
          type: ""
        },
        frontWindshieldWasher: {
          data: "",
          type: ""
        },
        rearWindshieldWasher: {
          data: "",
          type: ""
        }
      },
      ratings: ratings
    };
  },

  methods: {
    onSubmit(direction) {
      const formData = {
        vehicleExterior: this.vehicleExterior
      };
      globalAxios
        .patch("/vehicle_inspection_reports/" + this.jobId, formData)
        .then(res => {
          console.log(res);
          if (direction == "next") {
            this.$emit("exteriorReportPage", false);
            this.$emit("interiorReportPage", true);
            this.$emit("exteriorReportPageDone", true);
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
        formData.append("inspectionSegment", "exterior");
        formData.append("picturesArray", "vehicleExteriorPictures");

        globalAxios
          .post(
            "/vehicle_inspection_reports/pictures/exterior/" +
              inspectionSubSegment +
              "/" +
              partOfVehicle +
              "/" +
              this.jobId,
            formData
          )
          .then(res => {
            this.vehicleExterior = res.data.vehicleExterior;
          })
          .catch(error => console.log(error.response));
      } else {
        throw new Error();
      }
    },

    onRemovePicture(partOfVehicle, inspectionSubSegment) {
      globalAxios
        .delete(
          "/vehicle_inspection_reports/pictures/exterior/" +
            inspectionSubSegment +
            "/" +
            partOfVehicle +
            "/" +
            this.jobId
        )
        .then(res => {
          this.vehicleExterior = res.data.vehicleExterior;
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
      return color[0];
    }
  },

  computed: {},

  mounted() {
    const jobId = this.$route.params.jobId;
    globalAxios
      .get("/vehicle_inspection_reports/" + jobId)
      .then(res => {
        this.vehicleExterior = res.data.vehicleExterior;
      })
      .catch(error => console.log(error));

    globalAxios
      .get("/vehicle_inspection_reports/exterior-pictures/" + jobId)
      .then(res => {
        const resData = res.data;
        resData.forEach(item => {
          if (item.fileName == "front") {
            this.pictures.front.data =
              "data:" + item.contentType + ";base64," + item.base64Data;
            this.pictures.front.type = item.contentType;
          }
          if (item.fileName == "rear") {
            this.pictures.rear.data =
              "data:" + item.contentType + ";base64," + item.base64Data;
            this.pictures.rear.type = item.contentType;
          }
          if (item.fileName == "hood") {
            this.pictures.hood.data =
              "data:" + item.contentType + ";base64," + item.base64Data;
            this.pictures.hood.type = item.contentType;
          }
          if (item.fileName == "roof") {
            this.pictures.roof.data =
              "data:" + item.contentType + ";base64," + item.base64Data;
            this.pictures.roof.type = item.contentType;
          }
          if (item.fileName == "bumpers") {
            this.pictures.bumpers.data =
              "data:" + item.contentType + ";base64," + item.base64Data;
            this.pictures.bumpers.type = item.contentType;
          }
          if (item.fileName == "trim") {
            this.pictures.trim.data =
              "data:" + item.contentType + ";base64," + item.base64Data;
            this.pictures.trim.type = item.contentType;
          }
          if (item.fileName == "left-front") {
            this.pictures.leftFront.data =
              "data:" + item.contentType + ";base64," + item.base64Data;
            this.pictures.leftFront.type = item.contentType;
          }
          if (item.fileName == "right-front") {
            this.pictures.rightFront.data =
              "data:" + item.contentType + ";base64," + item.base64Data;
            this.pictures.rightFront.type = item.contentType;
          }
          if (item.fileName == "left-doors") {
            this.pictures.leftDoors.data =
              "data:" + item.contentType + ";base64," + item.base64Data;
            this.pictures.leftDoors.type = item.contentType;
          }
          if (item.fileName == "right-doors") {
            this.pictures.rightDoors.data =
              "data:" + item.contentType + ";base64," + item.base64Data;
            this.pictures.rightDoors.type = item.contentType;
          }
          if (item.fileName == "left-rear") {
            this.pictures.leftRear.data =
              "data:" + item.contentType + ";base64," + item.base64Data;
            this.pictures.leftRear.type = item.contentType;
          }
          if (item.fileName == "right-rear") {
            this.pictures.rightRear.data =
              "data:" + item.contentType + ";base64," + item.base64Data;
            this.pictures.rightRear.type = item.contentType;
          }
          if (item.fileName == "windshield") {
            this.pictures.windshield.data =
              "data:" + item.contentType + ";base64," + item.base64Data;
            this.pictures.windshield.type = item.contentType;
          }
          if (item.fileName == "rear-window") {
            this.pictures.rearWindow.data =
              "data:" + item.contentType + ";base64," + item.base64Data;
            this.pictures.rearWindow.type = item.contentType;
          }
          if (item.fileName == "left-front-window") {
            this.pictures.leftFrontWindow.data =
              "data:" + item.contentType + ";base64," + item.base64Data;
            this.pictures.leftFrontWindow.type = item.contentType;
          }
          if (item.fileName == "right-front-window") {
            this.pictures.rightFrontWindow.data =
              "data:" + item.contentType + ";base64," + item.base64Data;
            this.pictures.rightFrontWindow.type = item.contentType;
          }
          if (item.fileName == "left-rear-window") {
            this.pictures.leftRearWindow.data =
              "data:" + item.contentType + ";base64," + item.base64Data;
            this.pictures.leftRearWindow.type = item.contentType;
          }
          if (item.fileName == "right-rear-window") {
            this.pictures.rightRearWindow.data =
              "data:" + item.contentType + ";base64," + item.base64Data;
            this.pictures.rightRearWindow.type = item.contentType;
          }
          if (item.fileName == "tires") {
            this.pictures.conditionOfTires.data =
              "data:" + item.contentType + ";base64," + item.base64Data;
            this.pictures.conditionOfTires.type = item.contentType;
          }
          if (item.fileName == "wheels") {
            this.pictures.conditionOfWheels.data =
              "data:" + item.contentType + ";base64," + item.base64Data;
            this.pictures.conditionOfWheels.type = item.contentType;
          }
          if (item.fileName == "front-wipers") {
            this.pictures.frontWipers.data =
              "data:" + item.contentType + ";base64," + item.base64Data;
            this.pictures.frontWipers.type = item.contentType;
          }
          if (item.fileName == "front-wiper-blades") {
            this.pictures.frontWiperBlades.data =
              "data:" + item.contentType + ";base64," + item.base64Data;
            this.pictures.frontWiperBlades.type = item.contentType;
          }
          if (item.fileName == "rear-wipers") {
            this.pictures.rearWipers.data =
              "data:" + item.contentType + ";base64," + item.base64Data;
            this.pictures.rearWipers.type = item.contentType;
          }
          if (item.fileName == "rear-wiper-blades") {
            this.pictures.rearWiperBlades.data =
              "data:" + item.contentType + ";base64," + item.base64Data;
            this.pictures.rearWiperBlades.type = item.contentType;
          }
          if (item.fileName == "front-windshield-washer") {
            this.pictures.frontWindshieldWasher.data =
              "data:" + item.contentType + ";base64," + item.base64Data;
            this.pictures.frontWindshieldWasher.type = item.contentType;
          }
          if (item.fileName == "rear-windshield-washer") {
            this.pictures.rearWindshieldWasher.data =
              "data:" + item.contentType + ";base64," + item.base64Data;
            this.pictures.rearWindshieldWasher.type = item.contentType;
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
  margin: 8px 0 22px 0;
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

.active_red {
  background-color: red;
}
.active_blue {
  background-color: blue;
}
.active_green {
  background-color: green;
}
.active_orange {
  background-color: orange;
}
.active_grey {
  background-color: grey;
}
.active_pink {
  background-color: pink;
}

/* For mobile phones: */
@media only screen and (max-width: 650px) {
  .column {
    padding: 0px;
    width: 100%;
  }
}
</style>
