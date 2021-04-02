<template>
  <div>
    <div class="container">
      <form @submit.prevent="onSubmit()">
        <div class="section">
          <p>
            We are not electricians and in accordance with the standards of practice we only test a representative number of switches and outlets and do not perform load-calculations to determine if the supply meets the demand. However, every electrical deficiency or recommended upgrade should be regarded as a latent hazard that should be serviced as soon as possible, along with evaluation and certification of the entire system as safe by a licensed contractor.
            <span
              class="link"
            >Read more</span>
          </p>
        </div>

        <div class="section">
          <div class="flexbox">
            <div class="tittle">
              <h2>Doors</h2>
            </div>
          </div>
          <div class="flex">
            <div class="flex-grow">
              <div class="column">
                <label>
                  <br />
                </label>
                <label>Main entry door</label>
              </div>
              <div class="column">
                <label>
                  <h5>Condition:</h5>
                </label>
                <select
                  required
                  v-model="interior.doors.mainEntry.condition"
                  :style="{'background-color': effectConditionActiveColor(interior.doors.mainEntry.condition)}"
                  @blur="onSubmit()"
                >
                  <option value selected disabled hidden>Select Condition</option>
                  <option
                    v-for="item in conditions"
                    :key="item.condition"
                    :style="{'background-color':item.color}"
                  >{{item.condition}}</option>
                </select>
              </div>
            </div>
            <div class="textarea">
              <label>Comments:</label>
              <textarea rows="8" v-model="interior.doors.mainEntry.comment" @blur="onSubmit()"></textarea>
            </div>
            <div class="photo-container">
              <div v-for="(pictureInput, index) in interiorPhotos" :key="index">
                <div v-if="pictureInput.inspectionSubSegment == 'mainEntry'">
                  <picture-input
                    @change="onChangePicture(pictureInput.fileName, pictureInput.inspectionSubSegment)"
                    :crop="pictureInput.crop"
                    :width="pictureInput.width"
                    :height="pictureInput.height"
                    :margin="pictureInput.margin"
                    :size="pictureInput.size"
                    :accept="pictureInput.accept"
                    :zIndex="pictureInput.zIndex"
                    :buttonClass="pictureInput.buttonClass"
                    :removable="pictureInput.removable"
                    :prefill="pictureInput.dataUrl"
                    :prefillOptions="{mediaType: pictureInput.contentType }"
                    :hideChangeButton="pictureInput.hideChangeButton"
                    :customStrings="pictureInput.customStrings"
                  ></picture-input>
                  <button
                    type="button"
                    @click="onRemovePictureModal(
                        pictureInput.fileName, pictureInput.fileUrl, pictureInput.inspectionSubSegment
                        )"
                  >Remove</button>
                </div>
              </div>
              <button type="button" @click="onAddNewPictureModal('mainEntry')">Add New</button>
            </div>
          </div>
          <div class="flex">
            <div class="flex-grow">
              <div class="column">
                <label>
                  <br />
                </label>
                <label>Other exterior doors</label>
              </div>
              <div class="column">
                <label>
                  <br />
                </label>
                <select
                  required
                  v-model="interior.doors.otherExteriorDoors.condition"
                  :style="{'background-color': effectConditionActiveColor(interior.doors.otherExteriorDoors.condition)}"
                  @blur="onSubmit()"
                >
                  <option value selected disabled hidden>Select Condition</option>
                  <option
                    v-for="item in conditions"
                    :key="item.condition"
                    :style="{'background-color':item.color}"
                  >{{item.condition}}</option>
                </select>
              </div>
            </div>
            <div class="textarea">
              <label>
                <br />
              </label>
              <textarea
                rows="8"
                v-model="interior.doors.otherExteriorDoors.comment"
                @blur="onSubmit()"
              ></textarea>
            </div>
            <div class="photo-container">
              <div v-for="(pictureInput, index) in interiorPhotos" :key="index">
                <div v-if="pictureInput.inspectionSubSegment == 'otherExteriorDoors'">
                  <picture-input
                    @change="onChangePicture(pictureInput.fileName, pictureInput.inspectionSubSegment)"
                    :crop="pictureInput.crop"
                    :width="pictureInput.width"
                    :height="pictureInput.height"
                    :margin="pictureInput.margin"
                    :size="pictureInput.size"
                    :accept="pictureInput.accept"
                    :zIndex="pictureInput.zIndex"
                    :buttonClass="pictureInput.buttonClass"
                    :removable="pictureInput.removable"
                    :prefill="pictureInput.dataUrl"
                    :prefillOptions="{mediaType: pictureInput.contentType }"
                    :hideChangeButton="pictureInput.hideChangeButton"
                    :customStrings="pictureInput.customStrings"
                  ></picture-input>
                  <button
                    type="button"
                    @click="onRemovePictureModal(
                        pictureInput.fileName, pictureInput.fileUrl, pictureInput.inspectionSubSegment
                        )"
                  >Remove</button>
                </div>
              </div>
              <button type="button" @click="onAddNewPictureModal('otherExteriorDoors')">Add New</button>
            </div>
          </div>

          <div class="flex">
            <div class="flex-grow">
              <div class="column">
                <label>
                  <br />
                </label>
                <label>Overall interior doors</label>
              </div>
              <div class="column">
                <label>
                  <br />
                </label>
                <select
                  required
                  v-model="interior.doors.overallInteriorDoors.condition"
                  :style="{'background-color': effectConditionActiveColor(interior.doors.overallInteriorDoors.condition)}"
                  @blur="onSubmit()"
                >
                  <option value selected disabled hidden>Select Condition</option>
                  <option
                    v-for="item in conditions"
                    :key="item.condition"
                    :style="{'background-color':item.color}"
                  >{{item.condition}}</option>
                </select>
              </div>
            </div>
            <div class="textarea">
              <label>
                <br />
              </label>
              <textarea
                rows="8"
                v-model="interior.doors.overallInteriorDoors.comment"
                @blur="onSubmit()"
              ></textarea>
            </div>
            <div class="photo-container">
              <div v-for="(pictureInput, index) in interiorPhotos" :key="index">
                <div v-if="pictureInput.inspectionSubSegment == 'overallInteriorDoors'">
                  <picture-input
                    @change="onChangePicture(pictureInput.fileName, pictureInput.inspectionSubSegment)"
                    :crop="pictureInput.crop"
                    :width="pictureInput.width"
                    :height="pictureInput.height"
                    :margin="pictureInput.margin"
                    :size="pictureInput.size"
                    :accept="pictureInput.accept"
                    :zIndex="pictureInput.zIndex"
                    :buttonClass="pictureInput.buttonClass"
                    :removable="pictureInput.removable"
                    :prefill="pictureInput.dataUrl"
                    :prefillOptions="{mediaType: pictureInput.contentType }"
                    :hideChangeButton="pictureInput.hideChangeButton"
                    :customStrings="pictureInput.customStrings"
                  ></picture-input>
                  <button
                    type="button"
                    @click="onRemovePictureModal(
                        pictureInput.fileName, pictureInput.fileUrl, pictureInput.inspectionSubSegment
                        )"
                  >Remove</button>
                </div>
              </div>
              <button type="button" @click="onAddNewPictureModal('overallInteriorDoors')">Add New</button>
            </div>
          </div>
        </div>

        <div class="section">
          <div class="flexbox">
            <div class="tittle">
              <h2>Windows</h2>
            </div>
          </div>

          <div class="flex">
            <div class="flex-grow">
              <div class="column">
                <label>General Type</label>
                <input type="text" v-model="interior.windows.generalType" @blur="onSubmit()" />
              </div>
              <div class="column">
                <label>Condition:</label>
                <select
                  required
                  v-model="interior.windows.condition"
                  :style="{'background-color': effectConditionActiveColor(interior.windows.condition)}"
                  @blur="onSubmit()"
                >
                  <option value selected disabled hidden>Select Condition</option>
                  <option
                    v-for="item in conditions"
                    :key="item.condition"
                    :style="{'background-color':item.color}"
                  >{{item.condition}}</option>
                </select>
              </div>
            </div>
            <div class="textarea">
              <label>Comment:</label>
              <textarea rows="8" v-model="interior.windows.comment" @blur="onSubmit()"></textarea>
            </div>
            <div class="photo-container">
              <div v-for="(pictureInput, index) in interiorPhotos" :key="index">
                <div v-if="pictureInput.inspectionSubSegment == 'windows'">
                  <picture-input
                    @change="onChangePicture(pictureInput.fileName, pictureInput.inspectionSubSegment)"
                    :crop="pictureInput.crop"
                    :width="pictureInput.width"
                    :height="pictureInput.height"
                    :margin="pictureInput.margin"
                    :size="pictureInput.size"
                    :accept="pictureInput.accept"
                    :zIndex="pictureInput.zIndex"
                    :buttonClass="pictureInput.buttonClass"
                    :removable="pictureInput.removable"
                    :prefill="pictureInput.dataUrl"
                    :prefillOptions="{mediaType: pictureInput.contentType }"
                    :hideChangeButton="pictureInput.hideChangeButton"
                    :customStrings="pictureInput.customStrings"
                  ></picture-input>
                  <button
                    type="button"
                    @click="onRemovePictureModal(
                        pictureInput.fileName, pictureInput.fileUrl, pictureInput.inspectionSubSegment
                        )"
                  >Remove</button>
                </div>
              </div>

              <button type="button" @click="onAddNewPictureModal('windows')">Add New</button>
            </div>
          </div>
        </div>
        <div class="section">
          <div class="flexbox">
            <div class="tittle">
              <h2>Wall</h2>
            </div>
          </div>
          <div class="flex">
            <div class="flex-grow">
              <div class="column">
                <label>General Material:</label>
                <input type="text" v-model="interior.wall.generalType" @blur="onSubmit()" />
              </div>
              <div class="column">
                <label>Condition:</label>
                <select
                  required
                  v-model="interior.wall.condition"
                  :style="{'background-color': effectConditionActiveColor(interior.wall.condition)}"
                  @blur="onSubmit()"
                >
                  <option value selected disabled hidden>Select Condition</option>
                  <option
                    v-for="item in conditions"
                    :key="item.condition"
                    :style="{'background-color':item.color}"
                  >{{item.condition}}</option>
                </select>
              </div>
            </div>
            <div class="textarea">
              <label>Comment:</label>
              <textarea rows="8" v-model="interior.wall.comment" @blur="onSubmit()"></textarea>
            </div>
            <div class="photo-container">
              <div v-for="(pictureInput, index) in interiorPhotos" :key="index">
                <div v-if="pictureInput.inspectionSubSegment == 'wall'">
                  <picture-input
                    @change="onChangePicture(pictureInput.fileName, pictureInput.inspectionSubSegment)"
                    :crop="pictureInput.crop"
                    :width="pictureInput.width"
                    :height="pictureInput.height"
                    :margin="pictureInput.margin"
                    :size="pictureInput.size"
                    :accept="pictureInput.accept"
                    :zIndex="pictureInput.zIndex"
                    :buttonClass="pictureInput.buttonClass"
                    :removable="pictureInput.removable"
                    :prefill="pictureInput.dataUrl"
                    :prefillOptions="{mediaType: pictureInput.contentType }"
                    :hideChangeButton="pictureInput.hideChangeButton"
                    :customStrings="pictureInput.customStrings"
                  ></picture-input>
                  <button
                    type="button"
                    @click="onRemovePictureModal(
                        pictureInput.fileName, pictureInput.fileUrl, pictureInput.inspectionSubSegment
                        )"
                  >Remove</button>
                </div>
              </div>
              <button type="button" @click="onAddNewPictureModal('wall')">Add New</button>
            </div>
          </div>
        </div>
        <div class="section">
          <div class="flexbox">
            <div class="tittle">
              <h2>Ceilings</h2>
            </div>
          </div>

          <div class="flex">
            <div class="flex-grow">
              <div class="column">
                <label>General Type</label>
                <input type="text" v-model="interior.ceilings.generalType" @blur="onSubmit()" />
              </div>
              <div class="column">
                <label>Condition:</label>
                <select
                  required
                  v-model="interior.ceilings.condition"
                  :style="{'background-color': effectConditionActiveColor(interior.ceilings.condition)}"
                  @blur="onSubmit()"
                >
                  <option value selected disabled hidden>Select Condition</option>
                  <option
                    v-for="item in conditions"
                    :key="item.condition"
                    :style="{'background-color':item.color}"
                  >{{item.condition}}</option>
                </select>
              </div>
            </div>
            <div class="textarea">
              <label>Comment:</label>
              <textarea rows="8" v-model="interior.ceilings.comment" @blur="onSubmit()"></textarea>
            </div>
            <div class="photo-container">
              <div v-for="(pictureInput, index) in interiorPhotos" :key="index">
                <div v-if="pictureInput.inspectionSubSegment == 'ceilings'">
                  <picture-input
                    @change="onChangePicture(pictureInput.fileName, pictureInput.inspectionSubSegment)"
                    :crop="pictureInput.crop"
                    :width="pictureInput.width"
                    :height="pictureInput.height"
                    :margin="pictureInput.margin"
                    :size="pictureInput.size"
                    :accept="pictureInput.accept"
                    :zIndex="pictureInput.zIndex"
                    :buttonClass="pictureInput.buttonClass"
                    :removable="pictureInput.removable"
                    :prefill="pictureInput.dataUrl"
                    :prefillOptions="{mediaType: pictureInput.contentType }"
                    :hideChangeButton="pictureInput.hideChangeButton"
                    :customStrings="pictureInput.customStrings"
                  ></picture-input>
                  <button
                    type="button"
                    @click="onRemovePictureModal(
                        pictureInput.fileName, pictureInput.fileUrl, pictureInput.inspectionSubSegment
                        )"
                  >Remove</button>
                </div>
              </div>
              <button type="button" @click="onAddNewPictureModal('ceilings')">Add New</button>
            </div>
          </div>
        </div>
        <div class="section">
          <div class="flexbox">
            <div class="tittle">
              <h2>Floors</h2>
            </div>
          </div>

          <div class="flex">
            <div class="flex-grow">
              <div class="column">
                <label>Material:</label>
                <input type="text" v-model="interior.floors.material" @blur="onSubmit()" />
              </div>
              <div class="column">
                <label>Condition:</label>
                <select
                  required
                  v-model="interior.floors.condition"
                  :style="{'background-color': effectConditionActiveColor(interior.floors.condition)}"
                  @blur="onSubmit()"
                >
                  <option value selected disabled hidden>Select Condition</option>
                  <option
                    v-for="item in conditions"
                    :key="item.condition"
                    :style="{'background-color':item.color}"
                  >{{item.condition}}</option>
                </select>
              </div>
            </div>
            <div class="textarea">
              <label>Comment:</label>
              <textarea rows="8" v-model="interior.floors.comment" @blur="onSubmit()"></textarea>
            </div>
            <div class="photo-container">
              <div v-for="(pictureInput, index) in interiorPhotos" :key="index">
                <div v-if="pictureInput.inspectionSubSegment == 'floors'">
                  <picture-input
                    @change="onChangePicture(pictureInput.fileName, pictureInput.inspectionSubSegment)"
                    :crop="pictureInput.crop"
                    :width="pictureInput.width"
                    :height="pictureInput.height"
                    :margin="pictureInput.margin"
                    :size="pictureInput.size"
                    :accept="pictureInput.accept"
                    :zIndex="pictureInput.zIndex"
                    :buttonClass="pictureInput.buttonClass"
                    :removable="pictureInput.removable"
                    :prefill="pictureInput.dataUrl"
                    :prefillOptions="{mediaType: pictureInput.contentType }"
                    :hideChangeButton="pictureInput.hideChangeButton"
                    :customStrings="pictureInput.customStrings"
                  ></picture-input>
                  <button
                    type="button"
                    @click="onRemovePictureModal(
                        pictureInput.fileName, pictureInput.fileUrl, pictureInput.inspectionSubSegment
                        )"
                  >Remove</button>
                </div>
              </div>
              <button type="button" @click="onAddNewPictureModal('floors')">Add New</button>
            </div>
          </div>
        </div>
        <div class="section">
          <div class="flexbox">
            <div class="tittle">
              <h2>Closets</h2>
            </div>
          </div>
          <div class="flex">
            <div class="flex-grow">
              <div class="column">
                <label>Condition:</label>
                <select
                  required
                  v-model="interior.closets.condition"
                  :style="{'background-color': effectConditionActiveColor(interior.closets.condition)}"
                  @blur="onSubmit()"
                >
                  <option value selected disabled hidden>Select Condition</option>
                  <option
                    v-for="item in conditions"
                    :key="item.condition"
                    :style="{'background-color':item.color}"
                  >{{item.condition}}</option>
                </select>
              </div>
            </div>
            <div class="textarea">
              <label>Comment:</label>
              <textarea rows="8" v-model="interior.closets.comment" @blur="onSubmit()"></textarea>
            </div>
            <div class="photo-container">
              <div v-for="(pictureInput, index) in interiorPhotos" :key="index">
                <div v-if="pictureInput.inspectionSubSegment == 'closets'">
                  <picture-input
                    @change="onChangePicture(pictureInput.fileName, pictureInput.inspectionSubSegment)"
                    :crop="pictureInput.crop"
                    :width="pictureInput.width"
                    :height="pictureInput.height"
                    :margin="pictureInput.margin"
                    :size="pictureInput.size"
                    :accept="pictureInput.accept"
                    :zIndex="pictureInput.zIndex"
                    :buttonClass="pictureInput.buttonClass"
                    :removable="pictureInput.removable"
                    :prefill="pictureInput.dataUrl"
                    :prefillOptions="{mediaType: pictureInput.contentType }"
                    :hideChangeButton="pictureInput.hideChangeButton"
                    :customStrings="pictureInput.customStrings"
                  ></picture-input>
                  <button
                    type="button"
                    @click="onRemovePictureModal(
                        pictureInput.fileName, pictureInput.fileUrl, pictureInput.inspectionSubSegment
                        )"
                  >Remove</button>
                </div>
              </div>
              <button type="button" @click="onAddNewPictureModal('closets')">Add New</button>
            </div>
          </div>
        </div>

        <div class="section">
          <div class="flexbox">
            <div class="tittle">
              <h2>Stairs & Handrails</h2>
            </div>
          </div>

          <div class="flex">
            <div class="flex-grow">
              <div class="column">
                <label>Condition:</label>
                <select
                  required
                  v-model="interior.stairsAndHandrails.condition"
                  :style="{'background-color': effectConditionActiveColor(interior.stairsAndHandrails.condition)}"
                  @blur="onSubmit()"
                >
                  <option value selected disabled hidden>Select Condition</option>
                  <option
                    v-for="item in conditions"
                    :key="item.condition"
                    :style="{'background-color':item.color}"
                  >{{item.condition}}</option>
                </select>
              </div>
            </div>
            <div class="textarea">
              <label>Comment:</label>
              <textarea rows="8" v-model="interior.stairsAndHandrails.comment" @blur="onSubmit()"></textarea>
            </div>
            <div class="photo-container">
              <div v-for="(pictureInput, index) in interiorPhotos" :key="index">
                <div v-if="pictureInput.inspectionSubSegment == 'stairsAndHandrails'">
                  <picture-input
                    @change="onChangePicture(pictureInput.fileName, pictureInput.inspectionSubSegment)"
                    :crop="pictureInput.crop"
                    :width="pictureInput.width"
                    :height="pictureInput.height"
                    :margin="pictureInput.margin"
                    :size="pictureInput.size"
                    :accept="pictureInput.accept"
                    :zIndex="pictureInput.zIndex"
                    :buttonClass="pictureInput.buttonClass"
                    :removable="pictureInput.removable"
                    :prefill="pictureInput.dataUrl"
                    :prefillOptions="{mediaType: pictureInput.contentType }"
                    :hideChangeButton="pictureInput.hideChangeButton"
                    :customStrings="pictureInput.customStrings"
                  ></picture-input>
                  <button
                    type="button"
                    @click="onRemovePictureModal(
                        pictureInput.fileName, pictureInput.fileUrl, pictureInput.inspectionSubSegment
                        )"
                  >Remove</button>
                </div>
              </div>
              <button type="button" @click="onAddNewPictureModal('stairsAndHandrails')">Add New</button>
            </div>
          </div>
        </div>
        <div class="section">
          <div class="flexbox">
            <div class="tittle">
              <h2>Fire Place</h2>
            </div>
          </div>
          <div class="column1">
            <label>Type:</label>
            <input type="text" v-model="interior.firePlace.type" @blur="onSubmit()" />
          </div>

          <div class="flex">
            <div class="flex-grow">
              <div class="column">
                <label>Fuel Type</label>
                <input type="text" v-model="interior.firePlace.fuelType" @blur="onSubmit()" />
              </div>
              <div class="column">
                <label>Condition:</label>
                <select
                  required
                  v-model="interior.firePlace.condition"
                  :style="{'background-color': effectConditionActiveColor(interior.firePlace.condition)}"
                  @blur="onSubmit()"
                >
                  <option value selected disabled hidden>Select Condition</option>
                  <option
                    v-for="item in conditions"
                    :key="item.condition"
                    :style="{'background-color':item.color}"
                  >{{item.condition}}</option>
                </select>
              </div>
            </div>
            <div class="textarea">
              <label>Comment:</label>
              <textarea rows="8" v-model="interior.firePlace.comment" @blur="onSubmit()"></textarea>
            </div>
            <div class="photo-container">
              <div v-for="(pictureInput, index) in interiorPhotos" :key="index">
                <div v-if="pictureInput.inspectionSubSegment == 'firePlace'">
                  <picture-input
                    @change="onChangePicture(pictureInput.fileName, pictureInput.inspectionSubSegment)"
                    :crop="pictureInput.crop"
                    :width="pictureInput.width"
                    :height="pictureInput.height"
                    :margin="pictureInput.margin"
                    :size="pictureInput.size"
                    :accept="pictureInput.accept"
                    :zIndex="pictureInput.zIndex"
                    :buttonClass="pictureInput.buttonClass"
                    :removable="pictureInput.removable"
                    :prefill="pictureInput.dataUrl"
                    :prefillOptions="{mediaType: pictureInput.contentType }"
                    :hideChangeButton="pictureInput.hideChangeButton"
                    :customStrings="pictureInput.customStrings"
                  ></picture-input>
                  <button
                    type="button"
                    @click="onRemovePictureModal(
                        pictureInput.fileName, pictureInput.fileUrl, pictureInput.inspectionSubSegment
                        )"
                  >Remove</button>
                </div>
              </div>
              <button type="button" @click="onAddNewPictureModal('firePlace')">Add New</button>
            </div>
          </div>
        </div>
        <div class="section">
          <div class="flexbox">
            <div class="tittle">
              <h2>Smoke or Fire Detector</h2>
            </div>
          </div>
          <div class="flex">
            <div class="flex-grow">
              <div class="column">
                <label>Condition:</label>
                <select
                  required
                  v-model="interior.smokeFireDetector.condition"
                  :style="{'background-color': effectConditionActiveColor(interior.smokeFireDetector.condition)}"
                  @blur="onSubmit()"
                >
                  <option value selected disabled hidden>Select Condition</option>
                  <option
                    v-for="item in conditions"
                    :key="item.condition"
                    :style="{'background-color':item.color}"
                  >{{item.condition}}</option>
                </select>
              </div>
            </div>
            <div class="textarea">
              <label>Comment:</label>
              <textarea rows="8" v-model="interior.smokeFireDetector.comment" @blur="onSubmit()"></textarea>
            </div>
            <div class="photo-container">
              <div v-for="(pictureInput, index) in interiorPhotos" :key="index">
                <div v-if="pictureInput.inspectionSubSegment == 'smokeFireDetector'">
                  <picture-input
                    @change="onChangePicture(pictureInput.fileName, pictureInput.inspectionSubSegment)"
                    :crop="pictureInput.crop"
                    :width="pictureInput.width"
                    :height="pictureInput.height"
                    :margin="pictureInput.margin"
                    :size="pictureInput.size"
                    :accept="pictureInput.accept"
                    :zIndex="pictureInput.zIndex"
                    :buttonClass="pictureInput.buttonClass"
                    :removable="pictureInput.removable"
                    :prefill="pictureInput.dataUrl"
                    :prefillOptions="{mediaType: pictureInput.contentType }"
                    :hideChangeButton="pictureInput.hideChangeButton"
                    :customStrings="pictureInput.customStrings"
                  ></picture-input>
                  <button
                    type="button"
                    @click="onRemovePictureModal(
                        pictureInput.fileName, pictureInput.fileUrl, pictureInput.inspectionSubSegment
                        )"
                  >Remove</button>
                </div>
              </div>
              <button type="button" @click="onAddNewPictureModal('smokeFireDetector')">Add New</button>
            </div>
          </div>
        </div>

        <div class="section">
          <div class="flexbox">
            <div class="tittle">
              <h2>Carbon Monoxide Detector</h2>
            </div>
          </div>

          <div class="flex">
            <div class="flex-grow">
              <div class="column">
                <label>Condition:</label>
                <select
                  required
                  v-model="interior.carbonMonoxideDetector.condition"
                  :style="{'background-color': effectConditionActiveColor(interior.carbonMonoxideDetector.condition)}"
                  @blur="onSubmit()"
                >
                  <option value selected disabled hidden>Select Condition</option>
                  <option
                    v-for="item in conditions"
                    :key="item.condition"
                    :style="{'background-color':item.color}"
                  >{{item.condition}}</option>
                </select>
              </div>
            </div>
            <div class="textarea">
              <label>Comment:</label>
              <textarea
                rows="8"
                v-model="interior.carbonMonoxideDetector.comment"
                @blur="onSubmit()"
              ></textarea>
            </div>
            <div class="photo-container">
              <div v-for="(pictureInput, index) in interiorPhotos" :key="index">
                <div v-if="pictureInput.inspectionSubSegment == 'carbonMonoxideDetector'">
                  <picture-input
                    @change="onChangePicture(pictureInput.fileName, pictureInput.inspectionSubSegment)"
                    :crop="pictureInput.crop"
                    :width="pictureInput.width"
                    :height="pictureInput.height"
                    :margin="pictureInput.margin"
                    :size="pictureInput.size"
                    :accept="pictureInput.accept"
                    :zIndex="pictureInput.zIndex"
                    :buttonClass="pictureInput.buttonClass"
                    :removable="pictureInput.removable"
                    :prefill="pictureInput.dataUrl"
                    :prefillOptions="{mediaType: pictureInput.contentType }"
                    :hideChangeButton="pictureInput.hideChangeButton"
                    :customStrings="pictureInput.customStrings"
                  ></picture-input>
                  <button
                    type="button"
                    @click="onRemovePictureModal(
                        pictureInput.fileName, pictureInput.fileUrl, pictureInput.inspectionSubSegment
                        )"
                  >Remove</button>
                </div>
              </div>
              <button type="button" @click="onAddNewPictureModal('carbonMonoxideDetector')">Add New</button>
            </div>
          </div>
        </div>

        <div class="section">
          <div class="flexbox">
            <div class="tittle">
              <h2>Laundry</h2>
            </div>
          </div>
          <div class="column1">
            <label>Location:</label>
            <input type="text" v-model="interior.laundry.location" @blur="onSubmit()" />
          </div>

          <div class="flex">
            <div class="flex-grow">
              <div class="column">
                <label>
                  <br />
                </label>
                <label>Hose bibs/ Hook-ups/sinks faucets</label>
              </div>
              <div class="column">
                <label>Condition:</label>
                <select
                  required
                  v-model="interior.laundry.faucets.condition"
                  :style="{'background-color': effectConditionActiveColor(interior.laundry.faucets.condition)}"
                  @blur="onSubmit()"
                >
                  <option value selected disabled hidden>Select Condition</option>
                  <option
                    v-for="item in conditions"
                    :key="item.condition"
                    :style="{'background-color':item.color}"
                  >{{item.condition}}</option>
                </select>
              </div>
            </div>
            <div class="textarea">
              <label>Comment:</label>
              <textarea rows="8" v-model="interior.laundry.faucets.comment" @blur="onSubmit()"></textarea>
            </div>
            <div class="photo-container">
              <div v-for="(pictureInput, index) in interiorPhotos" :key="index">
                <div v-if="pictureInput.inspectionSubSegment == 'faucet'">
                  <picture-input
                    @change="onChangePicture(pictureInput.fileName, pictureInput.inspectionSubSegment)"
                    :crop="pictureInput.crop"
                    :width="pictureInput.width"
                    :height="pictureInput.height"
                    :margin="pictureInput.margin"
                    :size="pictureInput.size"
                    :accept="pictureInput.accept"
                    :zIndex="pictureInput.zIndex"
                    :buttonClass="pictureInput.buttonClass"
                    :removable="pictureInput.removable"
                    :prefill="pictureInput.dataUrl"
                    :prefillOptions="{mediaType: pictureInput.contentType }"
                    :hideChangeButton="pictureInput.hideChangeButton"
                    :customStrings="pictureInput.customStrings"
                  ></picture-input>
                  <button
                    type="button"
                    @click="onRemovePictureModal(
                        pictureInput.fileName, pictureInput.fileUrl, pictureInput.inspectionSubSegment
                        )"
                  >Remove</button>
                </div>
              </div>
              <button type="button" @click="onAddNewPictureModal('faucet')">Add New</button>
            </div>
          </div>
          <div class="flex">
            <div class="flex-grow">
              <div class="column">
                <label>
                  <br />
                </label>
                <label>Dryer vent</label>
              </div>
              <div class="column">
                <label>Condition:</label>
                <select
                  required
                  v-model="interior.laundry.dryerVent.condition"
                  :style="{'background-color': effectConditionActiveColor(interior.laundry.dryerVent.condition)}"
                  @blur="onSubmit()"
                >
                  <option value selected disabled hidden>Select Condition</option>
                  <option
                    v-for="item in conditions"
                    :key="item.condition"
                    :style="{'background-color':item.color}"
                  >{{item.condition}}</option>
                </select>
              </div>
            </div>
            <div class="textarea">
              <label>Comment:</label>
              <textarea rows="8" v-model="interior.laundry.dryerVent.condition" @blur="onSubmit()"></textarea>
            </div>
            <div class="photo-container">
              <div v-for="(pictureInput, index) in interiorPhotos" :key="index">
                <div v-if="pictureInput.inspectionSubSegment == 'dryerVent'">
                  <picture-input
                    @change="onChangePicture(pictureInput.fileName, pictureInput.inspectionSubSegment)"
                    :crop="pictureInput.crop"
                    :width="pictureInput.width"
                    :height="pictureInput.height"
                    :margin="pictureInput.margin"
                    :size="pictureInput.size"
                    :accept="pictureInput.accept"
                    :zIndex="pictureInput.zIndex"
                    :buttonClass="pictureInput.buttonClass"
                    :removable="pictureInput.removable"
                    :prefill="pictureInput.dataUrl"
                    :prefillOptions="{mediaType: pictureInput.contentType }"
                    :hideChangeButton="pictureInput.hideChangeButton"
                    :customStrings="pictureInput.customStrings"
                  ></picture-input>
                  <button
                    type="button"
                    @click="onRemovePictureModal(
                        pictureInput.fileName, pictureInput.fileUrl, pictureInput.inspectionSubSegment
                        )"
                  >Remove</button>
                </div>
              </div>

              <button type="button" @click="onAddNewPictureModal('dryerVent')">Add New</button>
            </div>
          </div>
          <div class="flex">
            <div class="flex-grow">
              <div class="column">
                <label>
                  <br />
                </label>
                <label>Electrical outlet</label>
              </div>
              <div class="column">
                <label>Condition:</label>
                <select
                  required
                  v-model="interior.laundry.electricalOutlet.condition"
                  :style="{'background-color': effectConditionActiveColor(interior.laundry.electricalOutlet.condition)}"
                  @blur="onSubmit()"
                >
                  <option value selected disabled hidden>Select Condition</option>
                  <option
                    v-for="item in conditions"
                    :key="item.condition"
                    :style="{'background-color':item.color}"
                  >{{item.condition}}</option>
                </select>
              </div>
            </div>
            <div class="textarea">
              <label>Comment:</label>
              <textarea
                rows="8"
                v-model="interior.laundry.electricalOutlet.comment"
                @blur="onSubmit()"
              ></textarea>
            </div>
            <div class="photo-container">
              <div v-for="(pictureInput, index) in interiorPhotos" :key="index">
                <div v-if="pictureInput.inspectionSubSegment == 'electricalOutlet'">
                  <picture-input
                    @change="onChangePicture(pictureInput.fileName, pictureInput.inspectionSubSegment)"
                    :crop="pictureInput.crop"
                    :width="pictureInput.width"
                    :height="pictureInput.height"
                    :margin="pictureInput.margin"
                    :size="pictureInput.size"
                    :accept="pictureInput.accept"
                    :zIndex="pictureInput.zIndex"
                    :buttonClass="pictureInput.buttonClass"
                    :removable="pictureInput.removable"
                    :prefill="pictureInput.dataUrl"
                    :prefillOptions="{mediaType: pictureInput.contentType }"
                    :hideChangeButton="pictureInput.hideChangeButton"
                    :customStrings="pictureInput.customStrings"
                  ></picture-input>
                  <button
                    type="button"
                    @click="onRemovePictureModal(
                        pictureInput.fileName, pictureInput.fileUrl, pictureInput.inspectionSubSegment
                        )"
                  >Remove</button>
                </div>
              </div>
              <button type="button" @click="onAddNewPictureModal('electricalOutlet')">Add New</button>
            </div>
          </div>
        </div>

        <div class="btn-container">
          <div class="comments">
            <button type="submit" @click.prevent="onSubmit()" class="back-btn">Back</button>
          </div>
          <div>
            <button type="submit" @click.prevent="onSubmit()" class="save-btn">Save</button>
          </div>
          <div>
            <button type="submit" @click.prevent="submitAndToNext()" class="next-btn">Next</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import conditions from "../../../../mockData/ratings/homeInspectionConditions";
import { base64ToBlob } from "../../../../utility";
import PictureInput from "vue-picture-input";
import pictureInputData from "../../../../mockData/pictureInputData";
import axios from "axios";
export default {
  components: {
    PictureInput
  },
  data() {
    return {
      jobId: this.$route.params.jobId,
      conditions: conditions,
      pictureInputData: pictureInputData,
      interior: {
        doors: {
          mainEntry: {
            condition: "",
            comment: ""
          },
          otherExteriorDoors: {
            condition: "",
            comment: ""
          },
          overallInteriorDoors: {
            condition: "",
            comment: ""
          }
        },
        windows: {
          generalType: "",
          condition: "",
          comment: ""
        },
        wall: {
          generalType: "",
          condition: "",
          comment: ""
        },
        ceilings: {
          generalType: "",
          condition: "",
          comment: ""
        },
        floors: {
          material: "",
          condition: "",
          comment: ""
        },
        closets: {
          condition: "",
          comment: ""
        },
        stairsAndHandrails: {
          condition: "",
          comment: ""
        },
        firePlace: {
          type: "",
          fuelType: "",
          condition: "",
          comment: ""
        },
        smokeFireDetector: {
          condition: "",
          comment: ""
        },
        carbonMonoxideDetector: {
          condition: "",
          comment: ""
        },
        laundry: {
          location: "",
          faucets: {
            condition: "",
            comment: ""
          },
          dryerVent: {
            condition: "",
            comment: ""
          },
          electricalOutlet: {
            condition: "",
            comment: ""
          }
        }
      },
      interiorStandardSubSegments: [
        "mainEntry",
        "otherExteriorDoors",
        "overallInteriorDoors",
        "windows",
        "wall",
        "ceilings",
        "floors",
        "closets",
        "stairsAndHandrails",
        "firePlace",
        "smokeFireDetector",
        "carbonMonoxideDetector",
        "faucet",
        "dryerVent",
        "electricalOutlet"
      ],
      minNumOfPicObj: 2,
      interiorPhotos: []
    };
  },

  methods: {
    //To initialize the this.interiorPhotos
    populateInitialPhotosArray() {
      const populatedArray = [];
      this.interiorStandardSubSegments.forEach(item => {
        for (let i = 0; i < this.minNumOfPicObj; i++) {
          const pictureObj = this.createPictureInputObj(item);
          populatedArray.push(pictureObj);
        }
      });
      this.interiorPhotos = populatedArray;
    },

    createPictureInputObj(inspectionSubSegment) {
      const pictureInputObj = {
        ...pictureInputData,
        fileName: this.generateFileName(inspectionSubSegment),
        inspectionSubSegment,
        fileUrl: "",
        dataUrl: "",
        contentType: ""
      };
      return pictureInputObj;
    },

    onSubmit() {
      const formData = {
        interior: this.interior
      };
      console.log(formData);
      axios
        .patch(`/home_inspection_reports/${this.jobId}`, formData)
        .then(res => {})
        .catch(error => {
          console.log(error.response);
        });
    },

    onChangePicture(fileName, inspectionSubSegment) {
      const picture = event.target.result;
      const blob = base64ToBlob(picture);

      let formData = new FormData();
      formData.append("fileData", blob, fileName);
      axios
        .post(
          `/home_inspection_reports/pictures/interior/${inspectionSubSegment}/${this.jobId}`,
          formData
        )
        .then(res => {
          //Note: this.interior.interiorPhotosInfo is not initialized in the data instance
          this.interior.interiorPhotosInfo = res.data.photosInfoArray;
          const updatedArray = this.interiorPhotos.map(item => {
            if (item.fileName == fileName) {
              item.dataUrl = picture;
              item.contentType = blob.type;
              item.fileUrl = res.data.fileUrl;
            }
            return item;
          });
          this.interiorPhotos = updatedArray;
        })
        .catch(error => console.log(error));
    },

    onRemovePictureModal(fileName, fileUrl, inspectionSubSegment) {
      const removePictureModal = () => {
        let newPhotoArray = [];
        this.interiorPhotos.forEach(item => {
          if (fileName !== item.fileName) {
            newPhotoArray.push(item);
          }
        });
        this.interiorPhotos = newPhotoArray;

        //Check the number of modals left for that particular inspectionSubSegment
        //If less than the this.minNumOfPicObj then add new one
        const arrayOfSpecificModalsLeft = [];
        this.interiorPhotos.forEach(element => {
          if (element.inspectionSubSegment == inspectionSubSegment) {
            arrayOfSpecificModalsLeft.push(element);
          }
        });
        if (arrayOfSpecificModalsLeft.length < this.minNumOfPicObj) {
          const newPicObj = this.createPictureInputObj(inspectionSubSegment);
          this.interiorPhotos.push(newPicObj);
        }
      };
      const formData = {
        fileUrl
      };
      if (!fileUrl) {
        removePictureModal();
        return;
      }
      axios
        .delete(
          `/home_inspection_reports/deletePictures/interior/${inspectionSubSegment}/${fileName}/${this.jobId}`,
          { data: formData }
        )
        .then(res => {
          removePictureModal();
        })
        .catch(error => console.log(error.response));
    },

    onAddNewPictureModal(inspectionSubSegment) {
      const newPictureObject = this.createPictureInputObj(inspectionSubSegment);
      this.interiorPhotos.push(newPictureObject);
    },

    generateFileName(area) {
      return `${area}-${Math.floor(100000 + Math.random() * 900000)}`;
    },

    generateRandomNum() {
      return Math.floor(100000 + Math.random() * 900000);
    },

    effectConditionActiveColor(event) {
      const color = [];
      this.conditions.forEach(item => {
        if (item.condition == event) {
          color.push(item.color);
        }
      });
      this.color = color[0];
      return color[0];
    }
  },

  created() {
    const jobId = this.$route.params.jobId;
    const pictureInputData = this.pictureInputData;

    //To populate the interiorPhotos array
    this.populateInitialPhotosArray();

    //Populate this.interior json with data from backend
    axios
      .get(`/home_inspection_reports/${jobId}`)
      .then(res => {
        if (res.data.interior) {
          this.interior = res.data.interior;
        }
      })
      .catch(error => {
        console.log(error.response);
      });

    //Get the pictures from backend
    axios.get(`/home_inspection_reports/interior/${jobId}`).then(res => {
      //modifies the response data before stting to this.interiorPhotos array
      const modifiedData = res.data.map(item => {
        const modifiedItem = {
          ...pictureInputData,
          fileName: item.fileName,
          inspectionSubSegment: item.inspectionSubSegment,
          fileUrl: item.fileUrl,
          dataUrl: item.dataUrl,
          contentType: item.contentType
        };
        return modifiedItem;
      });

      this.interiorPhotos = modifiedData;

      //Create an array of the inspectionSubSegments present in this.interiorPhotos array
      const interiorSubSegments = this.interiorPhotos.map(item => {
        return item.inspectionSubSegment;
      });
      const objOfSubSegmentsPresent = interiorSubSegments.reduce((obj, b) => {
        obj[b] = ++obj[b] || 1;
        return obj;
      }, {});

      const compressedArrayOfSubSegmentsPresent = [];
      Object.keys(objOfSubSegmentsPresent).forEach(key => {
        const obj = {};
        obj.subSegment = key;
        obj.number = objOfSubSegmentsPresent[key];
        // obj[key] = objOfSubSegmentsPresent[key]
        compressedArrayOfSubSegmentsPresent.push(obj);
      });

      //Check if this.interiorPhotos is missing any object with a subSegment in this.interiorStandardSubSegments
      const missing = this.interiorStandardSubSegments.filter(
        element => !interiorSubSegments.includes(element)
      );
      //Insert the missing inspectionSubSegment into compressedArrayOfSubSegmentsPresent
      missing.forEach(item => {
        const obj = {};
        obj.subSegment = item;
        obj.number = 0;
        compressedArrayOfSubSegmentsPresent.push(obj);
      });

      //Fill up the interiorPhotos array with the missing picture objs
      compressedArrayOfSubSegmentsPresent.forEach(item => {
        if (item.number < this.minNumOfPicObj) {
          let diff = this.minNumOfPicObj - item.number;
          for (let i = 0; i < diff; i++) {
            const picObj = this.createPictureInputObj(item.subSegment);
            //Only pushes in when there is a missing picture object
            this.interiorPhotos.push(picObj);
          }
        }
      });
    });
  }
};
</script>


<style scoped>
* {
  box-sizing: border-box;
}

.container {
  background-color: white;
  display: inline-block;
  font-family: sans-serif, Arial, Helvetica;
  width: 100%;
}

.section {
  width: 100%;
  padding-top: 30px;
  padding-bottom: 30px;
  border-bottom: 1px solid #b6b1b1;
  display: inline-block;
}
.link {
  cursor: pointer;
  color: dodgerblue;
  font-weight: bold;
}

.link:hover {
  color: blue;
}
.flex {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.flex-grow {
  display: flex;
  flex-direction: row;
  flex: 1;
}
.column1 {
  margin-top: 10px;
  margin-bottom: 10px;
  padding-right: 10px;
  width: 40%;
}

/* Clear floats after the columns */
.row::after {
  content: "";
  clear: both;
  display: table;
}

.column {
  margin-top: 10px;
  margin-bottom: 10px;
  padding-right: 10px;
  width: 100%;
}

label {
  font-size: 13px;
  display: block;
}

.textarea {
  width: 30%;
  margin-top: 10px;
  margin-bottom: 10px;
  padding-right: 10px;
}

.photo-container {
  margin-top: 25px;
  margin-bottom: 10px;
  color: purple;
  width: 30%;
  display: inline-block;
}

input[type="text"],
select,
textarea {
  font-size: 13px;
  width: 100%;
  padding: 9px;
  margin-top: 4px;
  border: 1px solid #ccc;
  border-radius: 3px;
  outline: none;
  /* background-color: #f1f1f1; */
  background-color: rgb(232, 240, 254);
}

select {
  padding: 8px 5px;
}

select:invalid {
  color: #777777;
}

option {
  color: black;
}

input:focus,
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
}

.comments {
  display: flex;
  flex: 1;
  cursor: pointer;
}

.comments i {
  font-size: 35px;
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

.back-btn {
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

.addnew-btn {
  font-size: 13px;
  width: 100px;
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

.back-btn {
  color: black;
  background-color: white;
}

.back-btn:hover {
  color: white;
  background-color: black;
}

.addnew-btn {
  color: black;
  background-color: white;
}

.addnew-btn:hover {
  color: white;
  background-color: black;
}

.next-btn:hover {
  color: black;
  background-color: white;
}

/* For mobile phones: */
@media only screen and (max-width: 1250px) {
  .flex-grow {
    flex-direction: column;
  }
}

/* For mobile phones: */
@media only screen and (max-width: 520px) {
  .flex {
    flex-direction: column;
  }

  .column,
  .textarea {
    padding: 0px;
    width: 100%;
  }
}
</style>