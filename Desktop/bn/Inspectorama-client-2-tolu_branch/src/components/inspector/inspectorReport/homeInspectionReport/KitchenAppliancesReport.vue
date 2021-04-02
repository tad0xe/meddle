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
              <h2>Kitchen Sink</h2>
            </div>
          </div>
          <div class="flex">
            <div class="flex-grow">
              <div class="column">
                <label>
                  <br />
                </label>
                <label>Fixtures and drains</label>
              </div>
              <div class="column">
                <label>
                  <h5>Condition:</h5>
                </label>
                <select
                  required
                  v-model="kitchenAppliances.kitchenSink.fixturesAndDrains.condition"
                  :style="{'background-color': effectConditionActiveColor(kitchenAppliances.kitchenSink.fixturesAndDrains.condition)}"
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
                v-model="kitchenAppliances.kitchenSink.fixturesAndDrains.comment"
                @blur="onSubmit()"
              ></textarea>
            </div>
            <div class="photo-container">
              <div v-for="(pictureInput, index) in kitchenAppliancesPhotos" :key="index">
                <div v-if="pictureInput.inspectionSubSegment == 'fixturesAndDrains'">
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
              <button type="button" @click="onAddNewPictureModal('fixturesAndDrains')">Add New</button>
            </div>
          </div>
        </div>

        <div class="section">
          <div class="flexbox">
            <div class="tittle">
              <h2>Range/Cooktop/Oven</h2>
            </div>
          </div>

          <div class="flex">
            <div class="flex-grow">
              <div class="column">
                <label>Type</label>
                <input
                  type="text"
                  v-model="kitchenAppliances.rangeCooktopOven.type"
                  @blur="onSubmit()"
                />
              </div>
              <div class="column">
                <label>Condition:</label>
                <select
                  required
                  v-model="kitchenAppliances.rangeCooktopOven.condition"
                  :style="{'background-color': effectConditionActiveColor(kitchenAppliances.rangeCooktopOven.condition)}"
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
                v-model="kitchenAppliances.rangeCooktopOven.comment"
                @blur="onSubmit()"
              ></textarea>
            </div>
            <div class="photo-container">
              <div v-for="(pictureInput, index) in kitchenAppliancesPhotos" :key="index">
                <div v-if="pictureInput.inspectionSubSegment == 'rangeCooktopOven'">
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
              <button type="button" @click="onAddNewPictureModal('rangeCooktopOven')">Add New</button>
            </div>
          </div>
        </div>

        <div class="section">
          <div class="flexbox">
            <div class="tittle">
              <h2>Exhaust/Ventilation</h2>
            </div>
          </div>

          <div class="flex">
            <div class="flex-grow">
              <div class="column">
                <label>Type:</label>
                <input
                  type="text"
                  v-model="kitchenAppliances.exhaustVentilation.type"
                  @blur="onSubmit()"
                />
              </div>
              <div class="column">
                <label>Condition:</label>
                <select
                  required
                  v-model="kitchenAppliances.exhaustVentilation.condition"
                  :style="{'background-color': effectConditionActiveColor(kitchenAppliances.exhaustVentilation.condition)}"
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
                v-model="kitchenAppliances.exhaustVentilation.comment"
                @blur="onSubmit()"
              ></textarea>
            </div>
            <div class="photo-container">
              <div v-for="(pictureInput, index) in kitchenAppliancesPhotos" :key="index">
                <div v-if="pictureInput.inspectionSubSegment == 'exhaustVentilation'">
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
              <button type="button" @click="onAddNewPictureModal('exhaustVentilation')">Add New</button>
            </div>
          </div>
        </div>
        <div class="section">
          <div class="flexbox">
            <div class="tittle">
              <h2>Dishwasher</h2>
            </div>
          </div>

          <div class="flex">
            <div class="flex-grow">
              <div class="column">
                <label>Dishwasher drain type:</label>
                <input
                  type="text"
                  v-model="kitchenAppliances.dishwasher.drainType"
                  @blur="onSubmit()"
                />
              </div>
              <div class="column">
                <label>Condition:</label>
                <select
                  required
                  v-model="kitchenAppliances.dishwasher.condition"
                  :style="{'background-color': effectConditionActiveColor(kitchenAppliances.dishwasher.condition)}"
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
              <textarea rows="8" v-model="kitchenAppliances.dishwasher.comment" @blur="onSubmit()"></textarea>
            </div>
            <div class="photo-container">
              <div v-for="(pictureInput, index) in kitchenAppliancesPhotos" :key="index">
                <div v-if="pictureInput.inspectionSubSegment == 'dishwasher'">
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
              <button type="button" @click="onAddNewPictureModal('dishwasher')">Add New</button>
            </div>
          </div>
        </div>
        <div class="section">
          <div class="flexbox">
            <div class="tittle">
              <h2>Disposal</h2>
            </div>
          </div>
          <div class="flex">
            <div class="flex-grow">
              <div class="column">
                <label>Condition:</label>
                <select
                  required
                  v-model="kitchenAppliances.disposal.condition"
                  :style="{'background-color': effectConditionActiveColor(kitchenAppliances.disposal.condition)}"
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
              <textarea rows="8" v-model="kitchenAppliances.disposal.comment" @blur="onSubmit()"></textarea>
            </div>
            <div class="photo-container">
              <div v-for="(pictureInput, index) in kitchenAppliancesPhotos" :key="index">
                <div v-if="pictureInput.inspectionSubSegment == 'disposal'">
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
              <button type="button" @click="onAddNewPictureModal('disposal')">Add New</button>
            </div>
          </div>
        </div>

        <div class="section">
          <div class="flexbox">
            <div class="tittle">
              <h2>Microwave</h2>
            </div>
          </div>
          <div class="flex">
            <div class="flex-grow">
              <div class="column">
                <label>Condition:</label>
                <select
                  required
                  v-model="kitchenAppliances.microwave.condition"
                  :style="{'background-color': effectConditionActiveColor(kitchenAppliances.microwave.condition)}"
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
              <textarea rows="8" @blur="onSubmit()"></textarea>
            </div>
            <div class="photo-container">
              <div v-for="(pictureInput, index) in kitchenAppliancesPhotos" :key="index">
                <div v-if="pictureInput.inspectionSubSegment == 'microwave'">
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
              <button type="button" @click="onAddNewPictureModal('microwave')">Add New</button>
            </div>
          </div>
        </div>

        <div class="section">
          <div class="flexbox">
            <div class="tittle">
              <h2>Kitchen Interior</h2>
            </div>
          </div>

          <div class="flex">
            <div class="flex-grow">
              <div class="column">
                <label>
                  <br />
                </label>
                <label>Cabinets</label>
              </div>
              <div class="column">
                <label>Conditions:</label>
                <select
                  required
                  v-model="kitchenAppliances.kitchenInterior.cabinets.condition"
                  :style="{'background-color': effectConditionActiveColor(kitchenAppliances.kitchenInterior.cabinets.condition)}"
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
              <textarea
                rows="8"
                v-model="kitchenAppliances.kitchenInterior.cabinets.comment"
                @blur="onSubmit()"
              ></textarea>
            </div>
            <div class="photo-container">
              <div v-for="(pictureInput, index) in kitchenAppliancesPhotos" :key="index">
                <div v-if="pictureInput.inspectionSubSegment == 'cabinets'">
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
              <button type="button" @click="onAddNewPictureModal('cabinets')">Add New</button>
            </div>
          </div>
          <div class="flex">
            <div class="flex-grow">
              <div class="column">
                <label>
                  <br />
                </label>
                <label>Counters</label>
              </div>
              <div class="column">
                <label>Conditions:</label>
                <select
                  required
                  v-model="kitchenAppliances.kitchenInterior.counters.condition"
                  :style="{'background-color': effectConditionActiveColor(kitchenAppliances.kitchenInterior.counters.condition)}"
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
              <label></label>
              <textarea
                rows="8"
                v-model="kitchenAppliances.kitchenInterior.counters.comment"
                @blur="onSubmit()"
              ></textarea>
            </div>
            <div class="photo-container">
              <div v-for="(pictureInput, index) in kitchenAppliancesPhotos" :key="index">
                <div v-if="pictureInput.inspectionSubSegment == 'counters'">
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
              <button type="button" @click="onAddNewPictureModal('counters')">Add New</button>
            </div>
          </div>
        </div>
        <div class="section">
          <div class="flexbox">
            <div class="tittle">
              <h2>Kitchen Electrical</h2>
            </div>
          </div>

          <div class="flex">
            <div class="flex-grow">
              <div class="column">
                <label>
                  <br />
                </label>
                <label>Switches & Fixtures</label>
              </div>
              <div class="column">
                <label>Conditions:</label>
                <select
                  required
                  v-model="kitchenAppliances.kitchenElectrical.switchesAndFixtures.condition"
                  :style="{'background-color': effectConditionActiveColor(kitchenAppliances.kitchenElectrical.switchesAndFixtures.condition)}"
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
              <textarea
                rows="8"
                v-model="kitchenAppliances.kitchenElectrical.switchesAndFixtures.comment"
                @blur="onSubmit()"
              ></textarea>
            </div>
            <div class="photo-container">
              <div v-for="(pictureInput, index) in kitchenAppliancesPhotos" :key="index">
                <div v-if="pictureInput.inspectionSubSegment == 'switchesAndFixtures'">
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
              <button type="button" @click="onAddNewPictureModal('switchesAndFixtures')">Add New</button>
            </div>
          </div>
          <div class="flex">
            <div class="flex-grow">
              <div class="column">
                <label>
                  <br />
                </label>
                <label>Electrical Outlets</label>
              </div>
              <div class="column">
                <label></label>
                <select
                  required
                  v-model="kitchenAppliances.kitchenElectrical.electricalOutlets.condition"
                  :style="{'background-color': effectConditionActiveColor(kitchenAppliances.kitchenElectrical.electricalOutlets.condition)}"
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
              <label></label>
              <textarea
                rows="8"
                v-model="kitchenAppliances.kitchenElectrical.electricalOutlets.comment"
                @blur="onSubmit()"
              ></textarea>
            </div>
            <div class="photo-container">
              <div v-for="(pictureInput, index) in kitchenAppliancesPhotos" :key="index">
                <div v-if="pictureInput.inspectionSubSegment == 'electricalOutlets'">
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
              <button type="button" @click="onAddNewPictureModal('electricalOutlets')">Add New</button>
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
      kitchenAppliances: {
        kitchenSink: {
          fixturesAndDrains: {
            condition: "",
            comment: ""
          }
        },
        rangeCooktopOven: {
          type: "",
          condition: "",
          comment: ""
        },
        exhaustVentilation: {
          type: "",
          condition: "",
          comment: ""
        },
        dishwasher: {
          drainType: "",
          condition: "",
          comment: ""
        },
        disposal: {
          condition: "",
          comment: ""
        },
        microwave: {
          condition: "",
          comment: ""
        },
        kitchenInterior: {
          cabinets: {
            condition: "",
            comment: ""
          },
          counters: {
            condition: "",
            comment: ""
          }
        },
        kitchenElectrical: {
          switchesAndFixtures: {
            condition: "",
            comment: ""
          },
          electricalOutlets: {
            condition: "",
            comment: ""
          }
        }
      },
      kitchenStandardSubSegments: [
        "fixturesAndDrains",
        "rangeCooktopOven",
        "exhaustVentilation",
        "dishwasher",
        "disposal",
        "microwave",
        "cabinets",
        "counters",
        "switchesAndFixtures",
        "electricalOutlets"
      ],
      minNumOfPicObj: 2,
      kitchenAppliancesPhotos: []
    };
  },

  methods: {
    //To initialize the this.kitchenAppliancesPhotos
    populateInitialPhotosArray() {
      const populatedArray = [];
      this.kitchenStandardSubSegments.forEach(item => {
        for (let i = 0; i < this.minNumOfPicObj; i++) {
          const pictureObj = this.createPictureInputObj(item);
          populatedArray.push(pictureObj);
        }
      });
      this.kitchenAppliancesPhotos = populatedArray;
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
        kitchenAppliances: this.kitchenAppliances
      };
      console.log(formData);
      axios
        .patch(`/home_inspection_reports/${this.jobId}`, formData)
        .then(res => {
          console.log(res);
        })
        .catch(error => {
          console.log(error.response);
        });
    },

    onChangePicture(fileName, inspectionSubSegment) {
      console.log(fileName, inspectionSubSegment);
      const picture = event.target.result;
      const blob = base64ToBlob(picture);

      let formData = new FormData();
      formData.append("fileData", blob, fileName);
      axios
        .post(
          `/home_inspection_reports/pictures/kitchenAppliances/${inspectionSubSegment}/${this.jobId}`,
          formData
        )
        .then(res => {
          console.log(res.data);
          console.log(this.kitchenAppliances);
          //Note: this.kitchenAppliances.kitchenAppliancesPhotosInfo is not initialized in the data instance
          this.kitchenAppliances.kitchenAppliancesPhotosInfo =
            res.data.photosInfoArray;
          const updatedArray = this.kitchenAppliancesPhotos.map(item => {
            if (item.fileName == fileName) {
              item.dataUrl = picture;
              item.contentType = blob.type;
              item.fileUrl = res.data.fileUrl;
            }
            return item;
          });
          this.kitchenAppliancesPhotos = updatedArray;
        })
        .catch(error => console.log(error));
    },

    onRemovePictureModal(fileName, fileUrl, inspectionSubSegment) {
      const removePictureModal = () => {
        let newPhotoArray = [];
        this.kitchenAppliancesPhotos.forEach(item => {
          if (fileName !== item.fileName) {
            newPhotoArray.push(item);
          }
        });
        this.kitchenAppliancesPhotos = newPhotoArray;

        //Check the number of modals left for that particular inspectionSubSegment
        //If less than the this.minNumOfPicObj then add new one
        const arrayOfSpecificModalsLeft = [];
        this.kitchenAppliancesPhotos.forEach(element => {
          if (element.inspectionSubSegment == inspectionSubSegment) {
            arrayOfSpecificModalsLeft.push(element);
          }
        });
        if (arrayOfSpecificModalsLeft.length < this.minNumOfPicObj) {
          const newPicObj = this.createPictureInputObj(inspectionSubSegment);
          this.kitchenAppliancesPhotos.push(newPicObj);
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
          `/home_inspection_reports/deletePictures/kitchenAppliances/${inspectionSubSegment}/${fileName}/${this.jobId}`,
          { data: formData }
        )
        .then(res => {
          removePictureModal();
        })
        .catch(error => console.log(error.response));
    },

    onAddNewPictureModal(inspectionSubSegment) {
      const newPictureObject = this.createPictureInputObj(inspectionSubSegment);
      this.kitchenAppliancesPhotos.push(newPictureObject);
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

    //To populate the kitchenAppliancesPhotos array
    this.populateInitialPhotosArray();

    //Populate this.kitchenAppliances json with data from backend
    axios
      .get(`/home_inspection_reports/${jobId}`)
      .then(res => {
        console.log(res.data.kitchenAppliances);
        if (res.data.kitchenAppliances) {
          this.kitchenAppliances = res.data.kitchenAppliances;
        }
      })
      .catch(error => {
        console.log(error.response);
      });

    //Get the pictures from backend
    axios
      .get(`/home_inspection_reports/kitchenAppliances/${jobId}`)
      .then(res => {
        //modifies the response data before stting to this.kitchenAppliancesPhotos array
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

        this.kitchenAppliancesPhotos = modifiedData;

        //Create an array of the inspectionSubSegments present in this.kitchenAppliancesPhotos array
        const kitchenAppliancesSubSegments = this.kitchenAppliancesPhotos.map(
          item => {
            return item.inspectionSubSegment;
          }
        );
        const objOfSubSegmentsPresent = kitchenAppliancesSubSegments.reduce(
          (obj, b) => {
            obj[b] = ++obj[b] || 1;
            return obj;
          },
          {}
        );

        const compressedArrayOfSubSegmentsPresent = [];
        Object.keys(objOfSubSegmentsPresent).forEach(key => {
          const obj = {};
          obj.subSegment = key;
          obj.number = objOfSubSegmentsPresent[key];
          // obj[key] = objOfSubSegmentsPresent[key]
          compressedArrayOfSubSegmentsPresent.push(obj);
        });
        console.log(compressedArrayOfSubSegmentsPresent);

        //Check if this.kitchenAppliancesPhotos is missing any object with a subSegment in this.kitchenStandardSubSegments
        const missing = this.kitchenStandardSubSegments.filter(
          element => !kitchenAppliancesSubSegments.includes(element)
        );
        //Insert the missing inspectionSubSegment into compressedArrayOfSubSegmentsPresent
        missing.forEach(item => {
          const obj = {};
          obj.subSegment = item;
          obj.number = 0;
          compressedArrayOfSubSegmentsPresent.push(obj);
        });

        //Fill up the kitchenAppliancesPhotos array with the missing picture objs
        compressedArrayOfSubSegmentsPresent.forEach(item => {
          if (item.number < this.minNumOfPicObj) {
            let diff = this.minNumOfPicObj - item.number;
            for (let i = 0; i < diff; i++) {
              const picObj = this.createPictureInputObj(item.subSegment);
              //Only pushes in when there is a missing picture object
              this.kitchenAppliancesPhotos.push(picObj);
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