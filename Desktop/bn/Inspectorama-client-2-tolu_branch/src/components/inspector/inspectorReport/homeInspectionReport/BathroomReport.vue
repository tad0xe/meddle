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
        <div v-for="(restroom, index) in bathroom.bathrooms" :key="index">
          <div class="section">
            <div class="flexbox">
              <div class="tittle">
                <h2 v-if="index == 0">Main Bathroom</h2>
                <h2 v-if="index > 0">Bathroom {{index+1}}</h2>
              </div>
            </div>
            <div class="flex">
              <div class="flex-grow">
                <div class="column">
                  <label>
                    <br />
                  </label>
                  <label>Bathroom sinks and faucets</label>
                </div>
                <div class="column">
                  <label>
                    <h5>Conditions:</h5>
                  </label>
                  <select
                    required
                    v-model="restroom.bathroomSinksAndFaucets.condition"
                    :style="{'background-color': effectConditionActiveColor(restroom.bathroomSinksAndFaucets.condition)}"
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
                  v-model="restroom.bathroomSinksAndFaucets.comment"
                  @blur="onSubmit()"
                ></textarea>
              </div>
              <div class="photo-container">
                <div v-for="(pictureInput, index) in bathroomPhotos" :key="index">
                  <div
                    v-if="pictureInput.inspectionSubSegment == 'bathroomSinksAndFaucets' && pictureInput.id == restroom.id"
                  >
                    <picture-input
                      @change="onChangePicture(pictureInput.fileName, pictureInput.inspectionSubSegment, restroom.id)"
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
                        pictureInput.fileName, pictureInput.fileUrl, pictureInput.inspectionSubSegment, restroom.id
                        )"
                    >Remove</button>
                  </div>
                </div>
                <button
                  type="button"
                  @click="onAddNewPictureModal('bathroomSinksAndFaucets', restroom.id)"
                >Add New</button>
              </div>
            </div>

            <div class="flex">
              <div class="flex-grow">
                <div class="column">
                  <label>
                    <br />
                  </label>
                  <label>Toilet</label>
                </div>
                <div class="column">
                  <label>
                    <br />
                  </label>
                  <select
                    required
                    v-model="restroom.toilet.condition"
                    :style="{'background-color': effectConditionActiveColor(restroom.toilet.condition)}"
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
                <textarea rows="8" v-model="restroom.toilet.comment" @blur="onSubmit()"></textarea>
              </div>
              <div class="photo-container">
                <div v-for="(pictureInput, index) in bathroomPhotos" :key="index">
                  <div
                    v-if="pictureInput.inspectionSubSegment == 'toilet' && pictureInput.id == restroom.id"
                  >
                    <picture-input
                      @change="onChangePicture(pictureInput.fileName, pictureInput.inspectionSubSegment, restroom.id)"
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
                        pictureInput.fileName, pictureInput.fileUrl, pictureInput.inspectionSubSegment, restroom.id
                        )"
                    >Remove</button>
                  </div>
                </div>
                <button type="button" @click="onAddNewPictureModal('toilet', restroom.id)">Add New</button>
              </div>
            </div>

            <div class="flex">
              <div class="flex-grow">
                <div class="column">
                  <label>
                    <br />
                  </label>
                  <label>Bathtub/Shower Fixtures</label>
                </div>
                <div class="column">
                  <label>
                    <br />
                  </label>
                  <select
                    required
                    v-model="restroom.bathtubShowerFixtures.condition"
                    :style="{'background-color': effectConditionActiveColor(restroom.bathtubShowerFixtures.condition)}"
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
                  v-model="restroom.bathtubShowerFixtures.comment"
                  @blur="onSubmit()"
                ></textarea>
              </div>
              <div class="photo-container">
                <div v-for="(pictureInput, index) in bathroomPhotos" :key="index">
                  <div
                    v-if="pictureInput.inspectionSubSegment == 'bathtubShowerFixtures' && pictureInput.id == restroom.id"
                  >
                    <picture-input
                      @change="onChangePicture(pictureInput.fileName, pictureInput.inspectionSubSegment, restroom.id)"
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
                        pictureInput.fileName, pictureInput.fileUrl, pictureInput.inspectionSubSegment, restroom.id
                        )"
                    >Remove</button>
                  </div>
                </div>
                <button
                  type="button"
                  @click="onAddNewPictureModal('bathtubShowerFixtures', restroom.id)"
                >Add New</button>
              </div>
            </div>
            <div class="flex">
              <div class="flex-grow">
                <div class="column">
                  <label>
                    <br />
                  </label>
                  <label>Bathtub/Shower Wall</label>
                </div>
                <div class="column">
                  <label>
                    <br />
                  </label>
                  <select
                    required
                    v-model="restroom.bathtubShowerWall.condition"
                    :style="{'background-color': effectConditionActiveColor(restroom.bathtubShowerWall.condition)}"
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
                <textarea rows="8" v-model="restroom.bathtubShowerWall.comment" @blur="onSubmit()"></textarea>
              </div>
              <div class="photo-container">
                <div v-for="(pictureInput, index) in bathroomPhotos" :key="index">
                  <div
                    v-if="pictureInput.inspectionSubSegment == 'bathtubShowerWall' && pictureInput.id == restroom.id"
                  >
                    <picture-input
                      @change="onChangePicture(pictureInput.fileName, pictureInput.inspectionSubSegment, restroom.id)"
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
                        pictureInput.fileName, pictureInput.fileUrl, pictureInput.inspectionSubSegment, restroom.id
                        )"
                    >Remove</button>
                  </div>
                </div>
                <button
                  type="button"
                  @click="onAddNewPictureModal('bathtubShowerWall', restroom.id)"
                >Add New</button>
              </div>
            </div>
            <div class="flex">
              <div class="flex-grow">
                <div class="column">
                  <label>
                    <br />
                  </label>
                  <label>Switches and Fixtures</label>
                </div>
                <div class="column">
                  <label>
                    <br />
                  </label>
                  <select
                    required
                    v-model="restroom.switchesAndFixtures.condition"
                    :style="{'background-color': effectConditionActiveColor(restroom.switchesAndFixtures.condition)}"
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
                  v-model="restroom.switchesAndFixtures.comment"
                  @blur="onSubmit()"
                ></textarea>
              </div>
              <div class="photo-container">
                <div v-for="(pictureInput, index) in bathroomPhotos" :key="index">
                  <div
                    v-if="pictureInput.inspectionSubSegment == 'switchesAndFixtures' && pictureInput.id == restroom.id"
                  >
                    <picture-input
                      @change="onChangePicture(pictureInput.fileName, pictureInput.inspectionSubSegment, restroom.id)"
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
                        pictureInput.fileName, pictureInput.fileUrl, pictureInput.inspectionSubSegment, restroom.id
                        )"
                    >Remove</button>
                  </div>
                </div>
                <button
                  type="button"
                  @click="onAddNewPictureModal('switchesAndFixtures', restroom.id)"
                >Add New</button>
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
                  <label>
                    <br />
                  </label>
                  <select
                    required
                    v-model="restroom.electricalOutlets.condition"
                    :style="{'background-color': effectConditionActiveColor(restroom.electricalOutlets.condition)}"
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
                <textarea rows="8" v-model="restroom.electricalOutlets.comment" @blur="onSubmit()"></textarea>
              </div>
              <div class="photo-container">
                <div v-for="(pictureInput, index) in bathroomPhotos" :key="index">
                  <div
                    v-if="pictureInput.inspectionSubSegment == 'electricalOutlets' && pictureInput.id == restroom.id"
                  >
                    <picture-input
                      @change="onChangePicture(pictureInput.fileName, pictureInput.inspectionSubSegment, restroom.id)"
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
                        pictureInput.fileName, pictureInput.fileUrl, pictureInput.inspectionSubSegment, restroom.id
                        )"
                    >Remove</button>
                  </div>
                </div>
                <button
                  type="button"
                  @click="onAddNewPictureModal('electricalOutlets', restroom.id)"
                >Add New</button>
              </div>
            </div>
            <div class="flex">
              <div class="flex-grow">
                <div class="column">
                  <label>
                    <br />
                  </label>
                  <label>Ventilation</label>
                </div>
                <div class="column">
                  <label>
                    <br />
                  </label>
                  <select
                    required
                    v-model="restroom.ventilation.condition"
                    :style="{'background-color': effectConditionActiveColor(restroom.ventilation.condition)}"
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
                <textarea rows="8" v-model="restroom.ventilation.comment" @blur="onSubmit()"></textarea>
              </div>
              <div class="photo-container">
                <div v-for="(pictureInput, index) in bathroomPhotos" :key="index">
                  <div
                    v-if="pictureInput.inspectionSubSegment == 'ventilation' && pictureInput.id == restroom.id"
                  >
                    <picture-input
                      @change="onChangePicture(pictureInput.fileName, pictureInput.inspectionSubSegment, restroom.id)"
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
                        pictureInput.fileName, pictureInput.fileUrl, pictureInput.inspectionSubSegment, restroom.id
                        )"
                    >Remove</button>
                  </div>
                </div>
                <button
                  type="button"
                  @click="onAddNewPictureModal('ventilation', restroom.id)"
                >Add New</button>
              </div>
            </div>
          </div>
          <div v-if="index > 0">
            <button type="button" @click="onDeleteBathroom(restroom.id)">Delete Bathroom {{index+1}}</button>
          </div>
        </div>
        <div>
          <button type="button" @click="addNewBathroom()">Add New Bathroom</button>
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
      bathroom: {
        bathrooms: [
          {
            id: this.generateRandomNum(),
            bathroomSinksAndFaucets: {
              condition: "",
              comment: ""
            },
            toilet: {
              condition: "",
              comment: ""
            },
            bathtubShowerFixtures: {
              condition: "",
              comment: ""
            },
            bathtubShowerWall: {
              condition: "",
              comment: ""
            },
            switchesAndFixtures: {
              condition: "",
              comment: ""
            },
            electricalOutlets: {
              condition: "",
              comment: ""
            },
            ventilation: {
              condition: "",
              comment: ""
            }
          }
        ]
      },
      copyOfInitialBathroom: "", //This is for a template when adding to this.bathroom.bathrooms array
      bathroomSubSegments: [
        "bathroomSinksAndFaucets",
        "toilet",
        "bathtubShowerFixtures",
        "bathtubShowerWall",
        "switchesAndFixtures",
        "electricalOutlets",
        "ventilation"
      ],
      minNumOfPicObj: 2,
      bathroomPhotos: []
    };
  },

  methods: {
    //To initialize the this.bathroomPhotos
    populateInitialPhotosArray() {
      const populatedArray = [];
      this.bathroomSubSegments.forEach(item => {
        for (let i = 0; i < this.minNumOfPicObj; i++) {
          const pictureObj = this.createPictureInputObj(item);
          pictureObj.id = this.copyOfInitialBathroom.id;
          populatedArray.push(pictureObj);
        }
      });
      this.bathroomPhotos = populatedArray;
      console.log(this.bathroomPhotos);
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

    addNewBathroom() {
      this.copyOfInitialBathroom.id = this.generateRandomNum();

      for (let i = 0; i < this.minNumOfPicObj; i++) {
        for (let element of this.bathroomSubSegments) {
          const pictureObj = this.createPictureInputObj(element);
          pictureObj.id = this.copyOfInitialBathroom.id;
          this.bathroomPhotos.push(pictureObj);
        }
      }
      this.bathroom.bathrooms.push(
        JSON.parse(JSON.stringify(this.copyOfInitialBathroom))
      );
      this.onSubmit();
    },

    onSubmit() {
      const formData = {
        bathroom: this.bathroom
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

    onChangePicture(fileName, inspectionSubSegment, id) {
      if (id) {
        //So that this.bathroom.bathrooms array will be saved first
        this.onSubmit();
      }
      const picture = event.target.result;
      const blob = base64ToBlob(picture);

      let formData = new FormData();
      formData.append("fileData", blob, fileName);
      formData.append("id", id);
      axios
        .post(
          `/home_inspection_reports/pictures/bathroom/${inspectionSubSegment}/${this.jobId}`,
          formData
        )
        .then(res => {
          console.log(res.data);
          console.log(this.bathroom);
          //Note: this.bathroom.bathroomPhotosInfo is not initialized in the data instance
          this.bathroom.bathroomPhotosInfo = res.data.photosInfoArray;
          const updatedArray = this.bathroomPhotos.map(item => {
            if (item.fileName == fileName) {
              item.dataUrl = picture;
              item.contentType = blob.type;
              item.fileUrl = res.data.fileUrl;
            }
            return item;
          });
          this.bathroomPhotos = updatedArray;
        })
        .catch(error => console.log(error));
    },

    onRemovePictureModal(fileName, fileUrl, inspectionSubSegment, id) {
      const removePictureModal = () => {
        let newPhotoArray = [];
        this.bathroomPhotos.forEach(item => {
          if (fileName !== item.fileName) {
            newPhotoArray.push(item);
          }
        });
        this.bathroomPhotos = newPhotoArray;

        //Check the number of modals left for that particular inspectionSubSegment
        //If less than the this.minNumOfPicObj then add new one
        const arrayOfSpecificModalsLeft = [];
        this.bathroomPhotos.forEach(element => {
          if (
            element.inspectionSubSegment == inspectionSubSegment &&
            element.id == id
          ) {
            arrayOfSpecificModalsLeft.push(element);
          }
        });
        if (arrayOfSpecificModalsLeft.length < this.minNumOfPicObj) {
          const newPicObj = this.createPictureInputObj(inspectionSubSegment);
          newPicObj.id = id;
          this.bathroomPhotos.push(newPicObj);
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
          `/home_inspection_reports/deletePictures/bathroom/${inspectionSubSegment}/${fileName}/${this.jobId}`,
          { data: formData }
        )
        .then(res => {
          removePictureModal();
        })
        .catch(error => console.log(error.response));
    },

    onAddNewPictureModal(inspectionSubSegment, id) {
      const newPictureObject = this.createPictureInputObj(inspectionSubSegment);
      newPictureObject.id = id;
      this.bathroomPhotos.push(newPictureObject);
    },

    //Deletes the bathroom from this.bathroomPhotos array and its picture modals
    onDeleteBathroom(id) {
      //first delete all its picture modals
      const array = [];
      this.bathroomPhotos.forEach(item => {
        if (item.id == id) {
          array.push(item);
        }
      });
      //Then use all the fileUrls to delete the picture info from the backend
      array.forEach(element => {
        this.onRemovePictureModal(
          element.fileName,
          element.fileUrl,
          element.inspectionSubSegment
        );
      });
      //Then remove the specific bathroom from the array
      this.bathroom.bathrooms.splice(item => {
        item.id == id;
      }, 1);
      //Then save
      this.onSubmit();
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

    //Stringified and parsed to prevent the subsequent copies from being reactive duplicates of the original
    this.copyOfInitialBathroom = JSON.parse(
      JSON.stringify(this.bathroom.bathrooms[0])
    );
    //To populate the bathroomPhotos array
    this.populateInitialPhotosArray();

    //Populate this.bathroom json with data from backend
    axios
      .get(`/home_inspection_reports/${jobId}`)
      .then(res => {
        console.log(res.data.bathroom);
        if (res.data.bathroom.bathrooms.length) {
          this.bathroom = res.data.bathroom;
        }
      })
      .catch(error => {
        console.log(error);
      });

    //Get the pictures from backend
    axios
      .get(`/home_inspection_reports/bathroom/${jobId}`)
      .then(res => {
        console.log(res.data);
        //modifies the response data before stting to this.bathroomPhotos array
        const modifiedData = res.data.map(item => {
          const modifiedItem = {
            ...pictureInputData,
            fileName: item.fileName,
            inspectionSubSegment: item.inspectionSubSegment,
            fileUrl: item.fileUrl,
            dataUrl: item.dataUrl,
            id: item.subDetails.id,
            contentType: item.contentType
          };
          return modifiedItem;
        });

        this.bathroomPhotos = modifiedData;

        //Create an array of the unique bathroom ids
        const idsOfBathroomsPresent = this.bathroom.bathrooms.map(item => {
          return item.id;
        });
        console.log(idsOfBathroomsPresent);
        //Loop thru the ids array and this.bathroomPhotos to count the no. of pic objects present for each bathroom
        idsOfBathroomsPresent.forEach(id => {
          this.bathroomSubSegments.forEach(subSegment => {
            let count = 0;
            this.bathroomPhotos.forEach(element => {
              if (
                element.id == id &&
                element.inspectionSubSegment == subSegment
              ) {
                count++;
              }
            });
            //If less than the minimum then push in more
            if (count < this.minNumOfPicObj) {
              let diff = this.minNumOfPicObj - count;
              for (let i = 0; i < diff; i++) {
                const picObj = this.createPictureInputObj(subSegment);
                picObj.id = id;
                this.bathroomPhotos.push(picObj);
              }
            }
          });
        });
      })
      .catch(error => {
        console.log(error);
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