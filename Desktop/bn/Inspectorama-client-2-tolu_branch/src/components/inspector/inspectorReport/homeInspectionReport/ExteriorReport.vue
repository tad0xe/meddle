<template>
  <div>
    <div class="container">
      <form>
        <div class="section">
          <p>The inspector is not required to inspect or operate screens, storm windows, shutters, awnings, fences, outbuildings, or exterior accent lighting. The inspector is not required to inspect items, including window and door flashings, which are not visible or readily accessible from the ground</p>
        </div>
        <div class="section">
          <div>
            <h2>Exterior Wall</h2>
          </div>
          <div class="flex">
            <div class="flex-grow">
              <div class="column">
                <label>Covering Materials</label>
                <select
                  required
                  v-model="exterior.exteriorWall.coveringMaterials"
                  @blur="onSubmit()"
                >
                  <option value selected disabled hidden>Select Materials</option>
                  <option value>Covering Materials</option>
                </select>
              </div>
              <div class="column">
                <label>Condition</label>
                <select
                  required
                  :style="{'background-color': effectConditionActiveColor(exterior.exteriorWall.condition)}"
                  v-model="exterior.exteriorWall.condition"
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
              <textarea rows="8" v-model="exterior.exteriorWall.comment" @blur="onSubmit()"></textarea>
            </div>
            <div class="photo-container">
              <div v-for="(pictureInput, index) in exteriorPhotos" :key="index">
                <div v-if="pictureInput.inspectionSubSegment == 'exteriorWall'">
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
                    :hideChangeButton="pictureInput.hideChangeButton"
                    :prefill="pictureInput.dataUrl"
                    :prefillOptions="{mediaType: pictureInput.contentType }"
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
              <button type="button" @click="onAddNewPictureModal('exteriorWall')">Add New</button>
            </div>
          </div>
        </div>
        <div class="section">
          <div>
            <h2>Porch</h2>
          </div>
          <div class="flex">
            <div class="flex-grow">
              <div class="column">
                <label>Materials</label>
                <select required @blur="onSubmit()">
                  <option value selected disabled hidden>Select Materials</option>
                  <option value="Wood">Wood</option>
                </select>
              </div>
              <div class="column">
                <label>Location:</label>
                <select required @blur="onSubmit()">
                  <option value selected disabled hidden>Select Location</option>
                  <option value="Font">Font</option>
                </select>
              </div>
              <div class="column">
                <label>Condition:</label>
                <select
                  required
                  :style="{'background-color': effectConditionActiveColor(exterior.porch.condition)}"
                  v-model="exterior.porch.condition"
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
              <textarea rows="8" @blur="onSubmit()"></textarea>
            </div>
            <div class="photo-container">
              <div v-for="(pictureInput, index) in exteriorPhotos" :key="index">
                <div v-if="pictureInput.inspectionSubSegment == 'porch'">
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
                    :hideChangeButton="pictureInput.hideChangeButton"
                    :prefill="pictureInput.dataUrl"
                    :prefillOptions="{mediaType: pictureInput.contentType }"
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
              <button type="button" @click="onAddNewPictureModal('porch')">Add New</button>
            </div>
          </div>
        </div>
        <div class="section">
          <div>
            <h2>Patio</h2>
          </div>
          <div class="flex">
            <div class="flex-grow">
              <div class="column">
                <label>Materials</label>
                <select required @blur="onSubmit()">
                  <option value selected disabled hidden>Select Materials</option>
                  <option value="Wood">Wood</option>
                </select>
              </div>
              <div class="column">
                <label>Location:</label>
                <select required @blur="onSubmit()">
                  <option value selected disabled hidden>Select Location</option>
                  <option value="Font">Font</option>
                </select>
              </div>
              <div class="column">
                <label>Condition:</label>
                <select
                  required
                  :style="{'background-color': effectConditionActiveColor(exterior.patio.condition)}"
                  v-model="exterior.patio.condition"
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
              <textarea rows="8" @blur="onSubmit()"></textarea>
            </div>
            <div class="photo-container">
              <div v-for="(pictureInput, index) in exteriorPhotos" :key="index">
                <div v-if="pictureInput.inspectionSubSegment == 'patio'">
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
                    :hideChangeButton="pictureInput.hideChangeButton"
                    :prefill="pictureInput.dataUrl"
                    :prefillOptions="{mediaType: pictureInput.contentType }"
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
              <button type="button" @click="onAddNewPictureModal('patio')">Add New</button>
            </div>
          </div>
        </div>
        <div class="section">
          <div>
            <h2>Window Wells</h2>
          </div>
          <div class="flex">
            <div class="flex-grow">
              <div class="column">
                <label>Covering Materials:</label>
                <select required @blur="onSubmit()">
                  <option value selected disabled hidden>Select Materials</option>
                  <option value="Wood">Wood</option>
                </select>
              </div>
              <div class="column">
                <label>Condition:</label>
                <select
                  required
                  :style="{'background-color': effectConditionActiveColor(exterior.windowWells.condition)}"
                  v-model="exterior.windowWells.condition"
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
              <textarea rows="8" @blur="onSubmit()"></textarea>
            </div>
            <div class="photo-container">
              <div v-for="(pictureInput, index) in exteriorPhotos" :key="index">
                <div v-if="pictureInput.inspectionSubSegment == 'windowWells'">
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
                    :hideChangeButton="pictureInput.hideChangeButton"
                    :prefill="pictureInput.dataUrl"
                    :prefillOptions="{mediaType: pictureInput.contentType }"
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
              <button type="button" @click="onAddNewPictureModal('windowWells')">Add New</button>
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
      exterior: {
        exteriorWall: {
          coveringMaterials: "",
          condition: "",
          comment: ""
        },
        porch: {
          materials: "",
          condition: "",
          location: "",
          comment: ""
        },
        patio: {
          materials: "",
          condition: "",
          location: "",
          comment: ""
        },
        windowWells: {
          coveringMaterials: "",
          condition: "",
          comment: ""
        }
      },
      exteriorSubSegments: ["exteriorWall", "porch", "patio", "windowWells"],
      minNumOfPicObj: 2,
      exteriorPhotos: []
    };
  },

  methods: {
    //To initialize the this.exteriorPhotos
    populateInitialPhotosArray() {
      const populatedArray = [];
      this.exteriorSubSegments.forEach(item => {
        for (let i = 0; i < this.minNumOfPicObj; i++) {
          const pictureObj = this.createPictureInputObj(item);
          populatedArray.push(pictureObj);
        }
      });
      this.exteriorPhotos = populatedArray;
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
        exterior: this.exterior
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
          `/home_inspection_reports/pictures/exterior/${inspectionSubSegment}/${this.jobId}`,
          formData
        )
        .then(res => {
          console.log(res.data);
          console.log(this.exterior);
          //Note: this.exterior.exteriorPhotosInfo is not initialized in the data instance
          this.exterior.exteriorPhotosInfo =
            res.data.photosInfoArray;
          const updatedArray = this.exteriorPhotos.map(item => {
            if (item.fileName == fileName) {
              item.dataUrl = picture;
              item.contentType = blob.type;
              item.fileUrl = res.data.fileUrl;
            }
            return item;
          });
          this.exteriorPhotos = updatedArray;
        })
        .catch(error => console.log(error));
    },

    onRemovePictureModal(fileName, fileUrl, inspectionSubSegment) {
      const removePictureModal = () => {
        let newPhotoArray = [];
        this.exteriorPhotos.forEach(item => {
          if (fileName !== item.fileName) {
            newPhotoArray.push(item);
          }
        });
        this.exteriorPhotos = newPhotoArray;

        //Check the number of modals left for that particular inspectionSubSegment
        //If less than the this.minNumOfPicObj then add new one
        const arrayOfSpecificModalsLeft = [];
        this.exteriorPhotos.forEach(element => {
          if (element.inspectionSubSegment == inspectionSubSegment) {
            arrayOfSpecificModalsLeft.push(element);
          }
        });
        if (arrayOfSpecificModalsLeft.length < this.minNumOfPicObj) {
          const newPicObj = this.createPictureInputObj(inspectionSubSegment);
          this.exteriorPhotos.push(newPicObj);
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
          `/home_inspection_reports/deletePictures/exterior/${inspectionSubSegment}/${fileName}/${this.jobId}`,
          { data: formData }
        )
        .then(res => {
          removePictureModal();
        })
        .catch(error => console.log(error.response));
    },

    onAddNewPictureModal(inspectionSubSegment) {
      const newPictureObject = this.createPictureInputObj(inspectionSubSegment);
      this.exteriorPhotos.push(newPictureObject);
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

    //To populate the exteriorPhotos array
    this.populateInitialPhotosArray();

    //Populate this.exterior json with data from backend
    axios
      .get(`/home_inspection_reports/${jobId}`)
      .then(res => {
        console.log(res.data.exterior);
        if (res.data.exterior) {
          this.exterior = res.data.exterior;
        }
      })
      .catch(error => {
        console.log(error.response);
      });

    //Get the pictures from backend
    axios
      .get(`/home_inspection_reports/exterior/${jobId}`)
      .then(res => {
        console.log(res.data)
        //modifies the response data before stting to this.exteriorPhotos array
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

        this.exteriorPhotos = modifiedData;

        //Create an array of the inspectionSubSegments present in this.exteriorPhotos array
        const exteriorSubSegments = this.exteriorPhotos.map(
          item => {
            return item.inspectionSubSegment;
          }
        );
        const objOfSubSegmentsPresent = exteriorSubSegments.reduce(
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

        //Check if this.exteriorPhotos is missing any object with a subSegment in this.exteriorSubSegments
        const missing = this.exteriorSubSegments.filter(
          element => !exteriorSubSegments.includes(element)
        );
        //Insert the missing inspectionSubSegment into compressedArrayOfSubSegmentsPresent
        missing.forEach(item => {
          const obj = {};
          obj.subSegment = item;
          obj.number = 0;
          compressedArrayOfSubSegmentsPresent.push(obj);
        });

        //Fill up the exteriorPhotos array with the missing picture objs
        compressedArrayOfSubSegmentsPresent.forEach(item => {
          if (item.number < this.minNumOfPicObj) {
            let diff = this.minNumOfPicObj - item.number;
            for (let i = 0; i < diff; i++) {
              const picObj = this.createPictureInputObj(item.subSegment);
              //Only pushes in when there is a missing picture object
              this.exteriorPhotos.push(picObj);
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
  .textarea {
    padding: 0px;
    width: 100%;
  }
}
</style>