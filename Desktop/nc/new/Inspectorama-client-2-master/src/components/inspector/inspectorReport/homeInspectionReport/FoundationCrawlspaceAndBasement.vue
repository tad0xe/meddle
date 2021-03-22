<template>
  <div>
    <div class="container">
      <form @submit.prevent="onSubmit()">
        <div class="section">
          <p>
            All structures are dependent on the soil beneath them for support, but soils are not uniform. Some that appear to be firm and solid can become unstable during
            seismic activity or may expand with the influx of water, moving structures with relative easy and fracturing slabs and other hard surfaces.
            <span
              class="link"
            >Read more</span>
          </p>
        </div>
        <div class="section">
          <div class="flexbox">
            <div class="tittle">
              <h2>Foundation</h2>
            </div>
            <div class="radio-btn">
              <label>
                <input type="radio" @blur="onSubmit()" />
                <span>This sub-section is not applicable</span>
              </label>
            </div>
          </div>
          <div class="flex">
            <div class="flex-grow">
              <div class="column">
                <label>Materials:</label>
                <select
                  required
                  v-model="foundationCrawlspaceBasement.foundation.materials"
                  @blur="onSubmit()"
                >
                  <option value selected disabled hidden>Select Materials</option>
                  <option value>Wood</option>
                </select>
              </div>
              <div class="column">
                <label>Condition:</label>
                <select
                  required
                  v-model="foundationCrawlspaceBasement.foundation.condition"
                  :style="{'background-color': effectConditionActiveColor(foundationCrawlspaceBasement.foundation.condition)}"
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
              <label>Comment: *</label>
              <textarea
                rows="8"
                v-model="foundationCrawlspaceBasement.foundation.comment"
                @blur="onSubmit()"
              ></textarea>
            </div>
            <div class="photo-container">
              <div v-for="(pictureInput, index) in foundationCrawlspaceBasementPhotos" :key="index">
                <div v-if="pictureInput.inspectionSubSegment == 'foundation'">
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
                    @click="onRemovePictureModal(pictureInput.fileName, pictureInput.fileUrl, pictureInput.inspectionSubSegment)"
                  >Remove</button>
                </div>
              </div>
              <button type="button" @click="onAddNewPictureModal('foundation')">Add New</button>
            </div>
          </div>
        </div>
        <div class="section">
          <div class="flexbox">
            <div class="tittle">
              <h2>Crawlspace</h2>
            </div>
            <div class="radio-btn">
              <label>
                <input type="radio" @blur="onSubmit()" />
                <span>This sub-section is not applicable</span>
              </label>
            </div>
          </div>
          <div class="flex">
            <div class="flex-grow">
              <div class="column">
                <label>Location</label>
                <select
                  required
                  v-model="foundationCrawlspaceBasement.crawlspace.location"
                  @blur="onSubmit()"
                >
                  <option value selected disabled hidden>Select Location</option>
                  <option value="Wood">Wood</option>
                </select>
              </div>
              <div class="column">
                <label>Condition:</label>
                <select
                  required
                  v-model="foundationCrawlspaceBasement.crawlspace.condition"
                  :style="{'background-color': effectConditionActiveColor(foundationCrawlspaceBasement.crawlspace.condition)}"
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
              <label>Comment: *</label>
              <textarea
                rows="8"
                v-model="foundationCrawlspaceBasement.crawlspace.comment"
                @blur="onSubmit()"
              ></textarea>
            </div>
            <div class="photo-container">
              <div v-for="(pictureInput, index) in foundationCrawlspaceBasementPhotos" :key="index">
                <div v-if="pictureInput.inspectionSubSegment == 'crawlspace'">
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
                    @click="onRemovePictureModal(pictureInput.fileName, pictureInput.fileUrl, pictureInput.inspectionSubSegment)"
                  >Remove</button>
                </div>
              </div>
              <button type="button" @click="onAddNewPictureModal('crawlspace')">Add New</button>
            </div>
          </div>
        </div>
        <div class="section">
          <div class="flexbox">
            <div class="tittle">
              <h2>Basement</h2>
            </div>
            <div class="radio-btn">
              <label>
                <input type="radio" @blur="onSubmit()" />
                <span>This sub-section is not applicable</span>
              </label>
            </div>
          </div>
          <div class="column1">
            <label>Type</label>
            <select
              required
              v-model="foundationCrawlspaceBasement.basement.type"
              @blur="onSubmit()"
            >
              <option value selected disabled hidden>Select Type</option>
              <option value="daylightBasement">Daylight basement</option>
            </select>
          </div>
          <div class="flex">
            <div class="flex-grow">
              <div class="column">
                <span>Foundation Wall</span>
              </div>
              <div class="column">
                <label>Condition:</label>
                <select
                  required
                  v-model="foundationCrawlspaceBasement.basement.foundationWall.condition"
                  :style="{'background-color': effectConditionActiveColor(foundationCrawlspaceBasement.basement.foundationWall.condition)}"
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
              <label>Comment: *</label>
              <textarea
                rows="8"
                v-model="foundationCrawlspaceBasement.basement.foundationWall.comment"
                @blur="onSubmit()"
              ></textarea>
            </div>
            <div class="photo-container">
              <div v-for="(pictureInput, index) in foundationCrawlspaceBasementPhotos" :key="index">
                <div v-if="pictureInput.inspectionSubSegment == 'basementFoundationWall'">
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
                    @click="onRemovePictureModal(pictureInput.fileName, pictureInput.fileUrl, pictureInput.inspectionSubSegment)"
                  >Remove</button>
                </div>
              </div>
              <button type="button" @click="onAddNewPictureModal('basementFoundationWall')">Add New</button>
            </div>
          </div>
          <div class="flex">
            <div class="flex-grow">
              <div class="column">
                <span>Beams/Underwall</span>
              </div>
              <div class="column">
                <label>Condition:</label>
                <select
                  required
                  v-model="foundationCrawlspaceBasement.basement.beamsOrUnderwall.condition"
                  :style="{'background-color': effectConditionActiveColor(foundationCrawlspaceBasement.basement.beamsOrUnderwall.condition)}"
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
              <label>Comment: *</label>
              <textarea
                rows="8"
                v-model="foundationCrawlspaceBasement.basement.beamsOrUnderwall.comment"
                @blur="onSubmit()"
              ></textarea>
            </div>
            <div class="photo-container">
              <div v-for="(pictureInput, index) in foundationCrawlspaceBasementPhotos" :key="index">
                <div v-if="pictureInput.inspectionSubSegment == 'basementBeamsOrUnderwall'">
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
                    @click="onRemovePictureModal(pictureInput.fileName, pictureInput.fileUrl, pictureInput.inspectionSubSegment)"
                  >Remove</button>
                </div>
              </div>
              <button
                type="button"
                @click="onAddNewPictureModal('basementBeamsOrUnderwall')"
              >Add New</button>
            </div>
          </div>
          <div class="flex">
            <div class="flex-grow">
              <div class="column">
                <span>Posts and Pier</span>
              </div>
              <div class="column">
                <label>Condition:</label>
                <select
                  required
                  v-model="foundationCrawlspaceBasement.basement.postsAndPier.condition"
                  :style="{'background-color': effectConditionActiveColor(foundationCrawlspaceBasement.basement.postsAndPier.condition)}"
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
              <label>Comment: *</label>
              <textarea
                rows="8"
                v-model="foundationCrawlspaceBasement.basement.postsAndPier.comment"
                @blur="onSubmit()"
              ></textarea>
            </div>
            <div class="photo-container">
              <div v-for="(pictureInput, index) in foundationCrawlspaceBasementPhotos" :key="index">
                <div v-if="pictureInput.inspectionSubSegment == 'basementPostsAndPier'">
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
                    @click="onRemovePictureModal(pictureInput.fileName, pictureInput.fileUrl, pictureInput.inspectionSubSegment)"
                  >Remove</button>
                </div>
              </div>
              <button type="button" @click="onAddNewPictureModal('basementPostsAndPier')">Add New</button>
            </div>
          </div>
          <div class="flex">
            <div class="flex-grow">
              <div class="column">
                <span>Stairs and Railing</span>
              </div>
              <div class="column">
                <label>Condition:</label>
                <select
                  required
                  v-model="foundationCrawlspaceBasement.basement.stairsAndRailing.condition"
                  :style="{'background-color': effectConditionActiveColor(foundationCrawlspaceBasement.basement.stairsAndRailing.condition)}"
                  @blur="onSubmit()"
                >
                  <option value selected disabled hidden>Select Stairs & Railing</option>
                  <option
                    v-for="item in conditions"
                    :key="item.condition"
                    :style="{'background-color':item.color}"
                  >{{item.condition}}</option>
                </select>
              </div>
            </div>
            <div class="textarea">
              <label>Comment: *</label>
              <textarea
                rows="8"
                v-model="foundationCrawlspaceBasement.basement.stairsAndRailing.comment"
                @blur="onSubmit()"
              ></textarea>
            </div>
            <div class="photo-container">
              <div v-for="(pictureInput, index) in foundationCrawlspaceBasementPhotos" :key="index">
                <div v-if="pictureInput.inspectionSubSegment == 'basementStairsAndRailing'">
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
                    @click="onRemovePictureModal(pictureInput.fileName, pictureInput.fileUrl, pictureInput.inspectionSubSegment)"
                  >Remove</button>
                </div>
              </div>
              <button
                type="button"
                @click="onAddNewPictureModal('basementStairsAndRailing')"
              >Add New</button>
            </div>
          </div>
          <div class="flex">
            <div class="flex-grow">
              <div class="column">
                <span>Window</span>
              </div>
              <div class="column">
                <label>Condition:</label>
                <select
                  required
                  v-model="foundationCrawlspaceBasement.basement.window.condition"
                  :style="{'background-color': effectConditionActiveColor(foundationCrawlspaceBasement.basement.window.condition)}"
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
              <label>Comment: *</label>
              <textarea
                rows="8"
                v-model="foundationCrawlspaceBasement.basement.window.comment"
                @blur="onSubmit()"
              ></textarea>
            </div>
            <div class="photo-container">
              <div v-for="(pictureInput, index) in foundationCrawlspaceBasementPhotos" :key="index">
                <div v-if="pictureInput.inspectionSubSegment == 'basementWindow'">
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
                    @click="onRemovePictureModal(pictureInput.fileName, pictureInput.fileUrl, pictureInput.inspectionSubSegment)"
                  >Remove</button>
                </div>
              </div>
              <button type="button" @click="onAddNewPictureModal('basementWindow')">Add New</button>
            </div>
          </div>
          <div class="flex">
            <div class="flex-grow">
              <div class="column">
                <span>Floor</span>
              </div>
              <div class="column">
                <label>Condition:</label>
                <select
                  required
                  v-model="foundationCrawlspaceBasement.basement.floor.condition"
                  :style="{'background-color': effectConditionActiveColor(foundationCrawlspaceBasement.basement.floor.condition)}"
                  @blur="onSubmit()"
                >
                  <option value selected disabled hidden>Select Floor Condition</option>
                  <option
                    v-for="item in conditions"
                    :key="item.condition"
                    :style="{'background-color':item.color}"
                  >{{item.condition}}</option>
                </select>
              </div>
            </div>
            <div class="textarea">
              <label>Comment: *</label>
              <textarea
                rows="8"
                v-model="foundationCrawlspaceBasement.basement.floor.comment"
                @blur="onSubmit()"
              ></textarea>
            </div>
            <div class="photo-container">
              <div v-for="(pictureInput, index) in foundationCrawlspaceBasementPhotos" :key="index">
                <div v-if="pictureInput.inspectionSubSegment == 'basementFloor'">
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
                    @click="onRemovePictureModal(pictureInput.fileName, pictureInput.fileUrl, pictureInput.inspectionSubSegment)"
                  >Remove</button>
                </div>
              </div>
              <button type="button" @click="onAddNewPictureModal('basementFloor')">Add New</button>
            </div>
          </div>
          <div class="flex">
            <div class="flex-grow">
              <div class="column">
                <span>Sump Pump/Pit</span>
              </div>
              <div class="column">
                <label>Condition:</label>
                <select
                  required
                  v-model="foundationCrawlspaceBasement.basement.sumpPumpOrPit.condition"
                  :style="{'background-color': effectConditionActiveColor(foundationCrawlspaceBasement.basement.sumpPumpOrPit.condition)}"
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
              <label>Comment: *</label>
              <textarea
                rows="8"
                foundationCrawlspaceBasement.basement.sumpPumpOrPit.comment
                @blur="onSubmit()"
              ></textarea>
            </div>
            <div class="photo-container">
              <div v-for="(pictureInput, index) in foundationCrawlspaceBasementPhotos" :key="index">
                <div v-if="pictureInput.inspectionSubSegment == 'basementSumpPumpOrPit'">
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
                    @click="onRemovePictureModal(pictureInput.fileName, pictureInput.fileUrl, pictureInput.inspectionSubSegment)"
                  >Remove</button>
                </div>
              </div>
              <button type="button" @click="onAddNewPictureModal('basementSumpPumpOrPit')">Add New</button>
            </div>
          </div>
        </div>
        <div class="btn-container">
          <div class="comments">
            <i class="fa fa-comments"></i>
            <span>Comments</span>
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
      foundationCrawlspaceBasement: {
        foundation: {
          materials: "",
          condition: "",
          comment: ""
        },
        crawlspace: {
          location: "",
          condition: "",
          comment: ""
        },
        basement: {
          type: "",
          foundationWall: {
            condition: "",
            comment: ""
          },
          beamsOrUnderwall: {
            condition: "",
            comment: ""
          },
          postsAndPier: {
            condition: "",
            comment: ""
          },
          stairsAndRailing: {
            condition: "",
            comment: ""
          },
          window: {
            condition: "",
            comment: ""
          },
          floor: {
            condition: "",
            comment: ""
          },
          sumpPumpOrPit: {
            condition: "",
            comment: ""
          }
        }
      },
      foundationCrawlspaceBasementSubSegments: [
        "foundation",
        "crawlspace",
        "basementFoundationWall",
        "basementBeamsOrUnderwall",
        "basementPostsAndPier",
        "basementStairsAndRailing",
        "basementWindow",
        "basementFloor",
        "basementSumpPumpOrPit"
      ],
      minNumOfPicObj: 2,
      foundationCrawlspaceBasementPhotos: []
    };
  },

  methods: {
    //To initialize the this.foundationCrawlspaceBasementPhotos
    populateInitialPhotosArray() {
      const populatedArray = [];
      this.foundationCrawlspaceBasementSubSegments.forEach(item => {
        for (let i = 0; i < this.minNumOfPicObj; i++) {
          const pictureObj = this.createPictureInputObj(item);
          populatedArray.push(pictureObj);
        }
      });
      this.foundationCrawlspaceBasementPhotos = populatedArray;
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
        foundationCrawlspaceBasement: this.foundationCrawlspaceBasement
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
          `/home_inspection_reports/pictures/foundationCrawlspaceBasement/${inspectionSubSegment}/${this.jobId}`,
          formData
        )
        .then(res => {
          console.log(res.data);
          console.log(this.foundationCrawlspaceBasement);
          //Note: this.foundationCrawlspaceBasement.foundationCrawlspaceBasementPhotosInfo is not initialized in the data instance
          this.foundationCrawlspaceBasement.foundationCrawlspaceBasementPhotosInfo =
            res.data.photosInfoArray;
          const updatedArray = this.foundationCrawlspaceBasementPhotos.map(
            item => {
              if (item.fileName == fileName) {
                item.dataUrl = picture;
                item.contentType = blob.type;
                item.fileUrl = res.data.fileUrl;
              }
              return item;
            }
          );
          this.foundationCrawlspaceBasementPhotos = updatedArray;
        })
        .catch(error => console.log(error));
    },

    onRemovePictureModal(fileName, fileUrl, inspectionSubSegment) {
      const removePictureModal = () => {
        let newPhotoArray = [];
        this.foundationCrawlspaceBasementPhotos.forEach(item => {
          if (fileName !== item.fileName) {
            newPhotoArray.push(item);
          }
        });
        this.foundationCrawlspaceBasementPhotos = newPhotoArray;

        //Check the number of modals left for that particular inspectionSubSegment
        //If less than the this.minNumOfPicObj then add new one
        const arrayOfSpecificModalsLeft = [];
        this.foundationCrawlspaceBasementPhotos.forEach(element => {
          if (element.inspectionSubSegment == inspectionSubSegment) {
            arrayOfSpecificModalsLeft.push(element);
          }
        });
        if (arrayOfSpecificModalsLeft.length < this.minNumOfPicObj) {
          const newPicObj = this.createPictureInputObj(inspectionSubSegment);
          this.foundationCrawlspaceBasementPhotos.push(newPicObj);
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
          `/home_inspection_reports/deletePictures/foundationCrawlspaceBasement/${inspectionSubSegment}/${fileName}/${this.jobId}`,
          { data: formData }
        )
        .then(res => {
          removePictureModal();
        })
        .catch(error => console.log(error.response));
    },

    onAddNewPictureModal(inspectionSubSegment) {
      const newPictureObject = this.createPictureInputObj(inspectionSubSegment);
      this.foundationCrawlspaceBasementPhotos.push(newPictureObject);
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

    //To populate the foundationCrawlspaceBasementPhotos array
    this.populateInitialPhotosArray();

    //Populate this.foundationCrawlspaceBasement json with data from backend
    axios
      .get(`/home_inspection_reports/${jobId}`)
      .then(res => {
        console.log(res.data.foundationCrawlspaceBasement);
        if (res.data.foundationCrawlspaceBasement) {
          this.foundationCrawlspaceBasement =
            res.data.foundationCrawlspaceBasement;
        }
      })
      .catch(error => {
        console.log(error.response);
      });

    //Get the pictures from backend
    axios
      .get(`/home_inspection_reports/foundationCrawlspaceBasement/${jobId}`)
      .then(res => {
        console.log(res.data);
        //modifies the response data before stting to this.foundationCrawlspaceBasementPhotos array
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

        this.foundationCrawlspaceBasementPhotos = modifiedData;

        //Create an array of the inspectionSubSegments present in this.foundationCrawlspaceBasementPhotos array
        const foundationCrawlspaceBasementSubSegments = this.foundationCrawlspaceBasementPhotos.map(
          item => {
            return item.inspectionSubSegment;
          }
        );
        const objOfSubSegmentsPresent = foundationCrawlspaceBasementSubSegments.reduce(
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

        //Check if this.foundationCrawlspaceBasementPhotos is missing any object with a subSegment in this.foundationCrawlspaceBasementSubSegments
        const missing = this.foundationCrawlspaceBasementSubSegments.filter(
          element => !foundationCrawlspaceBasementSubSegments.includes(element)
        );
        //Insert the missing inspectionSubSegment into compressedArrayOfSubSegmentsPresent
        missing.forEach(item => {
          const obj = {};
          obj.subSegment = item;
          obj.number = 0;
          compressedArrayOfSubSegmentsPresent.push(obj);
        });

        //Fill up the foundationCrawlspaceBasementPhotos array with the missing picture objs
        compressedArrayOfSubSegmentsPresent.forEach(item => {
          if (item.number < this.minNumOfPicObj) {
            let diff = this.minNumOfPicObj - item.number;
            for (let i = 0; i < diff; i++) {
              const picObj = this.createPictureInputObj(item.subSegment);
              //Only pushes in when there is a missing picture object
              this.foundationCrawlspaceBasementPhotos.push(picObj);
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

.flexbox {
  display: flex;
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

.tittle {
  flex: 1;
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

label .column span {
  font-size: 14px;
  display: block;
}

.column span {
  margin-top: 20px;
}

.column1 {
  margin-top: 10px;
  margin-bottom: 10px;
  padding-right: 10px;
  width: 40%;
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

.radio-btn label {
  cursor: pointer;
  margin-left: 10px;
  color: darkblue;
  display: block;
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
  .column1,
  .textarea {
    padding: 0px;
    width: 100%;
  }
}
</style>