<template>
  <div>
    <div class="container">
      <form @submit.prevent="onSubmit()">
        <div class="section">
          <p>The air conditioner cannot be operated when the outside air temperature is below 65 degree Fahrenheit; operating the airconditioner below 65 degrees can damage the system. The inspector is not equipped to inspect nor required to inspect concealed portions of evaporator and condensing coils. The inspector is not required to inspect humidifiers and de-humidifiers; even if comments are made, these items are not to be considered inspected</p>
        </div>
        <div class="section">
          <div v-for="(airCon, index) in coolingSystem.airConditioners" :key="index">
            <div class="flexbox">
              <div class="tittle">
                <h2>Air Conditioning</h2>
              </div>
              <div class="column1">
                <label>Type:</label>
                <select required v-model="airCon.type" @blur="onSubmit()">
                  <option value selected disabled hidden>Select Type</option>
                  <option value="Wood">Central air conditioning</option>
                </select>
              </div>
              <div class="flex">
                <div class="flex-grow">
                  <div class="column">
                    <label>Size:</label>
                    <div class="input-container">
                      <div class="input-container-left">
                        <input
                          type="text"
                          placeholder="Enter Size"
                          v-model="airCon.size.value"
                          @blur="onSubmit()"
                        />
                      </div>
                      <div class="input-container-right">
                        <select required v-model="airCon.size.unit" @blur="onSubmit()">
                          <option value selected disabled hidden>Select</option>
                          <option value="Font">cm</option>
                          <option value="Font">mm</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="textarea">
                  <label>
                    <br />
                  </label>
                  <label>
                    <br />
                  </label>
                </div>
                <div class="photo-container">
                  <div v-for="(pictureInput, index) in coolingSystemPhotos" :key="index">
                    <div
                      v-if="pictureInput.inspectionSubSegment == 'mainView' && pictureInput.id == airCon.id"
                    >
                      <picture-input
                        @change="onChangePicture(pictureInput.fileName, pictureInput.inspectionSubSegment, airCon.id)"
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
                        pictureInput.fileName, pictureInput.fileUrl, pictureInput.inspectionSubSegment, airCon.id
                        )"
                      >Remove</button>
                    </div>
                  </div>
                  <button type="button" @click="onAddNewPictureModal('mainView', airCon.id)">Add New</button>
                </div>
              </div>
              <div class="column1">
                <label>Electrical ratings:</label>
                <select required v-model="airCon.electricalRatings" @blur="onSubmit()">
                  <option value selected disabled hidden>Select Rating</option>
                  <option value="Wood">110V</option>
                </select>
              </div>
              <div class="column1">
                <label>Capacity:</label>
                <div class="input-container">
                  <div class="input-container-left">
                    <input
                      type="text"
                      placeholder="Enter Capacity"
                      v-model="airCon.capacity.value"
                      @blur="onSubmit()"
                    />
                  </div>
                  <div class="input-container-right">
                    <select required v-model="airCon.capacity.unit" @blur="onSubmit()">
                      <option value selected disabled hidden>Select</option>
                      <option value="Font">BTU</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex">
              <div class="flex-grow">
                <div class="column">
                  <label>
                    <br />
                  </label>
                  <label>System</label>
                </div>
                <div class="column">
                  <label>
                    <h5>Conditions:</h5>
                  </label>
                  <select
                    required
                    v-model="airCon.system.condition"
                    :style="{'background-color': effectConditionActiveColor(airCon.system.condition)}"
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
                <label>Comment for system:</label>
                <textarea rows="8" v-model="airCon.system.comment" @blur="onSubmit()"></textarea>
              </div>
              <div class="photo-container">
                <div v-for="(pictureInput, index) in coolingSystemPhotos" :key="index">
                  <div
                    v-if="pictureInput.inspectionSubSegment == 'system' && pictureInput.id == airCon.id"
                  >
                    <picture-input
                      @change="onChangePicture(pictureInput.fileName, pictureInput.inspectionSubSegment, airCon.id)"
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
                        pictureInput.fileName, pictureInput.fileUrl, pictureInput.inspectionSubSegment, airCon.id
                        )"
                    >Remove</button>
                  </div>
                </div>
                <button type="button" @click="onAddNewPictureModal('system', airCon.id)">Add New</button>
              </div>
            </div>

            <div class="flex">
              <div class="flex-grow">
                <div class="column">
                  <label>
                    <br />
                  </label>
                  <label>Condensation System</label>
                </div>
                <div class="column">
                  <label>
                    <br />
                  </label>
                  <select
                    required
                    v-model="airCon.condensationSystem.condition"
                    :style="{'background-color': effectConditionActiveColor(airCon.condensationSystem.condition)}"
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
                <textarea rows="8" v-model="airCon.condensationSystem.comment" @blur="onSubmit()"></textarea>
              </div>
              <div class="photo-container">
                <div v-for="(pictureInput, index) in coolingSystemPhotos" :key="index">
                  <div
                    v-if="pictureInput.inspectionSubSegment == 'condensationSystem' && pictureInput.id == airCon.id"
                  >
                    <picture-input
                      @change="onChangePicture(pictureInput.fileName, pictureInput.inspectionSubSegment, airCon.id)"
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
                        pictureInput.fileName, pictureInput.fileUrl, pictureInput.inspectionSubSegment, airCon.id
                        )"
                    >Remove</button>
                  </div>
                </div>
                <button
                  type="button"
                  @click="onAddNewPictureModal('condensationSystem', airCon.id)"
                >Add New</button>
              </div>
            </div>

            <div class="flex">
              <div class="flex-grow">
                <div class="column">
                  <label>
                    <br />
                  </label>
                  <label>Refrigerant Lines</label>
                </div>
                <div class="column">
                  <label>
                    <br />
                  </label>
                  <select
                    required
                    v-model="airCon.refrigerantLines.condition"
                    :style="{'background-color': effectConditionActiveColor(airCon.refrigerantLines.condition)}"
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
                <textarea rows="8" v-model="airCon.refrigerantLines.comment" @blur="onSubmit()"></textarea>
              </div>
              <div class="photo-container">
                <div v-for="(pictureInput, index) in coolingSystemPhotos" :key="index">
                  <div
                    v-if="pictureInput.inspectionSubSegment == 'refrigerantLines' && pictureInput.id == airCon.id"
                  >
                    <picture-input
                      @change="onChangePicture(pictureInput.fileName, pictureInput.inspectionSubSegment, airCon.id)"
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
                        pictureInput.fileName, pictureInput.fileUrl, pictureInput.inspectionSubSegment, airCon.id
                        )"
                    >Remove</button>
                  </div>
                </div>
                <button
                  type="button"
                  @click="onAddNewPictureModal('refrigerantLines', airCon.id)"
                >Add New</button>
              </div>
            </div>
            <div class="flex">
              <div class="flex-grow">
                <div class="column">
                  <label>
                    <br />
                  </label>
                  <label>Controls</label>
                </div>
                <div class="column">
                  <label>
                    <br />
                  </label>
                  <select
                    required
                    v-model="airCon.controls.condition"
                    :style="{'background-color': effectConditionActiveColor(airCon.controls.condition)}"
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
                <textarea rows="8" v-model="airCon.controls.comment" @blur="onSubmit()"></textarea>
              </div>
              <div class="photo-container">
                <div v-for="(pictureInput, index) in coolingSystemPhotos" :key="index">
                  <div
                    v-if="pictureInput.inspectionSubSegment == 'controls' && pictureInput.id == airCon.id"
                  >
                    <picture-input
                      @change="onChangePicture(pictureInput.fileName, pictureInput.inspectionSubSegment, airCon.id)"
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
                        pictureInput.fileName, pictureInput.fileUrl, pictureInput.inspectionSubSegment, airCon.id
                        )"
                    >Remove</button>
                  </div>
                </div>
                <button type="button" @click="onAddNewPictureModal('controls', airCon.id)">Add New</button>
              </div>
            </div>
            <div class="flex">
              <div class="flex-grow">
                <div class="column">
                  <label>
                    <br />
                  </label>
                  <label>Ductwork/ Distribution</label>
                </div>
                <div class="column">
                  <label>
                    <br />
                  </label>
                  <select
                    required
                    v-model="airCon.ductworkDistribution.condition"
                    :style="{'background-color': effectConditionActiveColor(airCon.ductworkDistribution.condition)}"
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
                <label>Comment for ductwork / distribution:</label>
                <textarea rows="8" v-model="airCon.ductworkDistribution.comment" @blur="onSubmit()"></textarea>
              </div>
              <div class="photo-container">
                <div v-for="(pictureInput, index) in coolingSystemPhotos" :key="index">
                  <div
                    v-if="pictureInput.inspectionSubSegment == 'ductworkDistribution' && pictureInput.id == airCon.id"
                  >
                    <picture-input
                      @change="onChangePicture(pictureInput.fileName, pictureInput.inspectionSubSegment, airCon.id)"
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
                        pictureInput.fileName, pictureInput.fileUrl, pictureInput.inspectionSubSegment, airCon.id
                        )"
                    >Remove</button>
                  </div>
                </div>
                <button
                  type="button"
                  @click="onAddNewPictureModal('ductworkDistribution', airCon.id)"
                >Add New</button>
              </div>
            </div>
            <div v-if="coolingSystem.airConditioners.length > 1">
              <button
                type="button"
                @click="onDeleteCoolingSystem(airCon.id)"
              >Delete Air Conditioner {{index+1}}</button>
            </div>
          </div>
          <div>
            <button type="button" @click="addNewCoolingSystem()">Add New Cooling System</button>
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
      coolingSystem: {
        airConditioners: [
          {
            id: this.generateRandomNum(),
            type: "",
            size: {
              value: "",
              unit: ""
            },
            electricalRatings: "",
            capacity: {
              value: "",
              unit: ""
            },
            system: {
              condition: "",
              comment: ""
            },
            condensationSystem: {
              condition: "",
              comment: ""
            },
            refrigerantLines: {
              condition: "",
              comment: ""
            },
            controls: {
              condition: "",
              comment: ""
            },
            ductworkDistribution: {
              condition: "",
              comment: ""
            }
          }
        ]
      },
      typesOfAirConditioner: [
        "window air conditioner",
        "Air source heat pump",
        "Central air conditioner",
        "Ductless air conditioner",
        "Portable air conditioner"
      ],
      copyOfInitialAirconditioner: "", //This is for a template when adding to this.coolingSystem.airConditioners array
      airConditionerSubSegments: [
        "mainView",
        "system",
        "condensationSystem",
        "refrigerantLines",
        "controls",
        "ductworkDistribution"
      ],
      minNumOfPicObj: 2,
      coolingSystemPhotos: []
    };
  },

  methods: {
    //To initialize the this.coolingSystemPhotos
    populateInitialPhotosArray() {
      const populatedArray = [];
      this.airConditionerSubSegments.forEach(item => {
        for (let i = 0; i < this.minNumOfPicObj; i++) {
          const pictureObj = this.createPictureInputObj(item);
          pictureObj.id = this.copyOfInitialAirconditioner.id;
          populatedArray.push(pictureObj);
        }
      });
      this.coolingSystemPhotos = populatedArray;
      console.log(this.coolingSystemPhotos);
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

    addNewCoolingSystem() {
      this.copyOfInitialAirconditioner.id = this.generateRandomNum();

      for (let i = 0; i < this.minNumOfPicObj; i++) {
        for (let element of this.airConditionerSubSegments) {
          const pictureObj = this.createPictureInputObj(element);
          pictureObj.id = this.copyOfInitialAirconditioner.id;
          this.coolingSystemPhotos.push(pictureObj);
        }
      }
      this.coolingSystem.airConditioners.push(
        JSON.parse(JSON.stringify(this.copyOfInitialAirconditioner))
      );
      this.onSubmit();
    },

    onSubmit() {
      const formData = {
        coolingSystem: this.coolingSystem
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
        //So that this.coolingSystem.airConditioners array will be saved first
        this.onSubmit();
      }
      const picture = event.target.result;
      const blob = base64ToBlob(picture);

      let formData = new FormData();
      formData.append("fileData", blob, fileName);
      formData.append("id", id);
      axios
        .post(
          `/home_inspection_reports/pictures/coolingSystem/${inspectionSubSegment}/${this.jobId}`,
          formData
        )
        .then(res => {
          console.log(res.data.photosInfoArray);
          console.log(this.coolingSystem);
          //Note: this.coolingSystem.coolingSystemPhotosInfo is not initialized in the data instance
          this.coolingSystem.coolingSystemPhotosInfo = res.data.photosInfoArray;
          const updatedArray = this.coolingSystemPhotos.map(item => {
            if (item.fileName == fileName) {
              item.dataUrl = picture;
              item.contentType = blob.type;
              item.fileUrl = res.data.fileUrl;
            }
            return item;
          });
          this.coolingSystemPhotos = updatedArray;
        })
        .catch(error => console.log(error));
    },

    onRemovePictureModal(fileName, fileUrl, inspectionSubSegment, id) {
      const removePictureModal = () => {
        let newPhotoArray = [];
        this.coolingSystemPhotos.forEach(item => {
          if (fileName !== item.fileName) {
            newPhotoArray.push(item);
          }
        });
        this.coolingSystemPhotos = newPhotoArray;

        //Check the number of modals left for that particular inspectionSubSegment
        //If less than the this.minNumOfPicObj then add new one
        const arrayOfSpecificModalsLeft = [];
        this.coolingSystemPhotos.forEach(element => {
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
          this.coolingSystemPhotos.push(newPicObj);
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
          `/home_inspection_reports/deletePictures/coolingSystem/${inspectionSubSegment}/${fileName}/${this.jobId}`,
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
      this.coolingSystemPhotos.push(newPictureObject);
    },

    //Deletes the cooling system from this.coolingSystemPhotos array and its picture modals
    onDeleteCoolingSystem(id) {
      //first delete all its picture modals
      const array = [];
      this.coolingSystemPhotos.forEach(item => {
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
      //Then remove the specific cooling system from the array
      this.coolingSystem.airConditioners.splice(item => {
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
    this.copyOfInitialAirconditioner = JSON.parse(
      JSON.stringify(this.coolingSystem.airConditioners[0])
    );
    //To populate the coolingSystemPhotos array
    this.populateInitialPhotosArray();

    //Populate this.coolingSystem json with data from backend
    axios
      .get(`/home_inspection_reports/${jobId}`)
      .then(res => {
        console.log(res.data.coolingSystem);
        if (res.data.coolingSystem.airConditioners.length) {
          this.coolingSystem = res.data.coolingSystem;
        }
        console.log(this.coolingSystem);
      })
      .catch(error => {
        console.log(error.response);
      });

    //Get the pictures from backend
    axios
      .get(`/home_inspection_reports/coolingSystem/${jobId}`)
      .then(res => {
        console.log(res.data);
        //modifies the response data before stting to this.coolingSystemPhotos array
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

        this.coolingSystemPhotos = modifiedData;
        console.log(this.coolingSystemPhotos);

        //Create an array of the unique cooling system ids
        const idsOfCoolingSystemsPresent = this.coolingSystem.airConditioners.map(
          item => {
            return item.id;
          }
        );
        console.log(idsOfCoolingSystemsPresent);
        //Loop thru the ids array and this.coolingSystemPhotos to count the no. of pic objects present for each cooling system
        idsOfCoolingSystemsPresent.forEach(id => {
          this.airConditionerSubSegments.forEach(subSegment => {
            let count = 0;
            this.coolingSystemPhotos.forEach(element => {
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
                this.coolingSystemPhotos.push(picObj);
              }
            }
          });
        });
        console.log(this.coolingSystemPhotos);
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

.input-container {
  font-size: 13px;
  border-radius: 3px;
  margin-top: 4px;
  border: 1px solid #ccc;
  display: flex;
  background-color: rgb(232, 240, 254);
}

.input-container input[type="text"],
.input-container select {
  margin: 0px;
  border-radius: 0px;
  border: none;
  background-color: transparent;
}

.input-container-left {
  border-right: 1px solid #ccc;
  width: 60%;
}

.input-container-right {
  width: 40%;
}

.input-container-left:focus-within {
  background-color: #eee;
}

.input-container-right:focus-within {
  background-color: #eee;
}

.input-container:focus-within {
  outline: none;
  border: 1px solid #a842a7;
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