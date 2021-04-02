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
              <h2>Access Point</h2>
            </div>
            <div class="column1">
              <label>Location of Scope/Entrance:</label>
              <input
                type="text"
                v-model="sewerScope.accessPoint.locationOfEntrance"
                @blur="onSubmit()"
              />
            </div>
          </div>
          <div class="flex">
            <div class="flex-grow">
              <div class="column">
                <label>
                  <br />
                </label>
                <label>Clean Out</label>
              </div>
              <div class="column">
                <label>
                  <h5>Condition:</h5>
                </label>
                <select
                  required
                  v-model="sewerScope.accessPoint.cleanOut.condition"
                  :style="{'background-color': effectConditionActiveColor(sewerScope.accessPoint.cleanOut.condition)}"
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
                v-model="sewerScope.accessPoint.cleanOut.comment"
                @blur="onSubmit()"
              ></textarea>
            </div>
            <div class="photo-container">
              <div v-for="(pictureInput, index) in sewerScopePhotos" :key="index">
                <div v-if="pictureInput.inspectionSubSegment == 'cleanOut'">
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
              <button type="button" @click="onAddNewPictureModal('cleanOut')">Add New</button>
            </div>
          </div>
        </div>
        <div class="section">
          <div class="flexbox">
            <div class="tittle">
              <h2>Main Sewer Line/Pipe Material</h2>
            </div>
          </div>

          <div class="flex">
            <div class="flex-grow">
              <div class="column">
                <label>
                  <br />
                </label>
                <label>Underfloor interior line/pipe</label>
              </div>
              <div class="column">
                <label>material:</label>
                <input
                  type="text"
                  v-model="sewerScope.mainSewerLineMaterials.underfloorInteriorLine.material"
                  @blur="onSubmit()"
                />
              </div>
            </div>
            <div class="textarea">
              <label>Comment:</label>
              <textarea
                rows="8"
                v-model="sewerScope.mainSewerLineMaterials.underfloorInteriorLine.comment"
                @blur="onSubmit()"
              ></textarea>
            </div>
            <div class="photo-container">
              <div v-for="(pictureInput, index) in sewerScopePhotos" :key="index">
                <div v-if="pictureInput.inspectionSubSegment == 'underfloorInteriorLine'">
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
              <button type="button" @click="onAddNewPictureModal('underfloorInteriorLine')">Add New</button>
            </div>
          </div>
          <div class="flexbox"></div>

          <div class="flex">
            <div class="flex-grow">
              <div class="column">
                <label>
                  <br />
                </label>
                <label>Underground interior line/pipe</label>
              </div>
              <div class="column">
                <label>material:</label>
                <input
                  type="text"
                  v-model="sewerScope.mainSewerLineMaterials.undergroundInteriorLine.material"
                  @blur="onSubmit()"
                />
              </div>
            </div>
            <div class="textarea">
              <label>Comment:</label>
              <textarea
                rows="8"
                v-model="sewerScope.mainSewerLineMaterials.undergroundInteriorLine.comment"
                @blur="onSubmit()"
              ></textarea>
            </div>
            <div class="photo-container">
              <div v-for="(pictureInput, index) in sewerScopePhotos" :key="index">
                <div v-if="pictureInput.inspectionSubSegment == 'undergroundExteriorLine'">
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
              <button type="button" @click="onAddNewPictureModal('undergroundExteriorLine')">Add New</button>
            </div>
          </div>
          <div class="flexbox"></div>
          <div class="flexbox"></div>
        </div>
        <div class="section">
          <div class="flexbox">
            <div class="tittle">
              <h2>Main Sewer Line/Pipe</h2>
            </div>
          </div>
          <div class="flex">
            <div class="flex-grow">
              <div class="column">
                <label>Length of main line/ pipe:</label>
                <input type="text" v-model="sewerScope.mainSewerLine.length" @blur="onSubmit()" />
              </div>
              <div class="column">
                <label>Condition:</label>
                <select
                  required
                  v-model="sewerScope.mainSewerLine.condition"
                  :style="{'background-color': effectConditionActiveColor(sewerScope.mainSewerLine.condition)}"
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
              <textarea rows="8" v-model="sewerScope.mainSewerLine.comment" @blur="onSubmit()"></textarea>
            </div>
            <div class="photo-container">
              <div v-for="(pictureInput, index) in sewerScopePhotos" :key="index">
                <div v-if="pictureInput.inspectionSubSegment == 'mainSewerLine'">
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
              <button type="button" @click="onAddNewPictureModal('mainSewerLine')">Add New</button>
            </div>
          </div>
        </div>

        <div class="section">
          <div class="flexbox">
            <div class="tittle">
              <h2>Sewer Line/ Pipe Video</h2>
            </div>
          </div>
          <div class="flex">
            <div class="flex-grow">
              <div class="photo-container"></div>
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
      sewerScope: {
        accessPoint: {
          locationOfEntrance: "",
          cleanOut: {
            condition: "",
            comment: ""
          }
        },
        mainSewerLineMaterials: {
          underfloorInteriorLine: {
            material: "",
            comment: ""
          },
          undergroundInteriorLine: {
            material: "",
            comment: ""
          }
        },
        mainSewerLine: {
          length: "",
          condition: "",
          comment: ""
        },
        sewerLineVideo: ""
      },
      sewerScopeSubSegments: [
        "cleanOut",
        "underfloorInteriorLine",
        "undergroundExteriorLine",
        "mainSewerLine"
      ],
      minNumOfPicObj: 2,
      sewerScopePhotos: []
    };
  },

  methods: {
    //To initialize the this.sewerScopePhotos
    populateInitialPhotosArray() {
      const populatedArray = [];
      this.sewerScopeSubSegments.forEach(item => {
        for (let i = 0; i < this.minNumOfPicObj; i++) {
          const pictureObj = this.createPictureInputObj(item);
          populatedArray.push(pictureObj);
        }
      });
      this.sewerScopePhotos = populatedArray;
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
        sewerScope: this.sewerScope
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
          `/home_inspection_reports/pictures/sewerScope/${inspectionSubSegment}/${this.jobId}`,
          formData
        )
        .then(res => {
          console.log(res.data);
          console.log(this.sewerScope);
          //Note: this.sewerScope.sewerScopePhotosInfo is not initialized in the data instance
          this.sewerScope.sewerScopePhotosInfo = res.data.photosInfoArray;
          const updatedArray = this.sewerScopePhotos.map(item => {
            if (item.fileName == fileName) {
              item.dataUrl = picture;
              item.contentType = blob.type;
              item.fileUrl = res.data.fileUrl;
            }
            return item;
          });
          this.sewerScopePhotos = updatedArray;
        })
        .catch(error => console.log(error));
    },

    onRemovePictureModal(fileName, fileUrl, inspectionSubSegment) {
      const removePictureModal = () => {
        let newPhotoArray = [];
        this.sewerScopePhotos.forEach(item => {
          if (fileName !== item.fileName) {
            newPhotoArray.push(item);
          }
        });
        this.sewerScopePhotos = newPhotoArray;

        //Check the number of modals left for that particular inspectionSubSegment
        //If less than the this.minNumOfPicObj then add new one
        const arrayOfSpecificModalsLeft = [];
        this.sewerScopePhotos.forEach(element => {
          if (element.inspectionSubSegment == inspectionSubSegment) {
            arrayOfSpecificModalsLeft.push(element);
          }
        });
        if (arrayOfSpecificModalsLeft.length < this.minNumOfPicObj) {
          const newPicObj = this.createPictureInputObj(inspectionSubSegment);
          this.sewerScopePhotos.push(newPicObj);
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
          `/home_inspection_reports/deletePictures/sewerScope/${inspectionSubSegment}/${fileName}/${this.jobId}`,
          { data: formData }
        )
        .then(res => {
          removePictureModal();
        })
        .catch(error => console.log(error.response));
    },

    onAddNewPictureModal(inspectionSubSegment) {
      const newPictureObject = this.createPictureInputObj(inspectionSubSegment);
      this.sewerScopePhotos.push(newPictureObject);
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

    //To populate the sewerScopePhotos array
    this.populateInitialPhotosArray();

    //Populate this.sewerScope json with data from backend
    axios
      .get(`/home_inspection_reports/${jobId}`)
      .then(res => {
        console.log(res.data.sewerScope);
        if (res.data.sewerScope) {
          this.sewerScope = res.data.sewerScope;
        }
      })
      .catch(error => {
        console.log(error.response);
      });

    //Get the pictures from backend
    axios.get(`/home_inspection_reports/sewerScope/${jobId}`).then(res => {
      console.log(res.data);
      //modifies the response data before stting to this.sewerScopePhotos array
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

      this.sewerScopePhotos = modifiedData;
      console.log(this.sewerScopePhotos);

      //Create an array of the inspectionSubSegments present in this.sewerScopePhotos array
      const sewerScopeSubSegments = this.sewerScopePhotos.map(item => {
        return item.inspectionSubSegment;
      });
      const objOfSubSegmentsPresent = sewerScopeSubSegments.reduce((obj, b) => {
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
      console.log(compressedArrayOfSubSegmentsPresent);

      //Check if this.sewerScopePhotos is missing any object with a subSegment in this.sewerScopeSubSegments
      const missing = this.sewerScopeSubSegments.filter(
        element => !sewerScopeSubSegments.includes(element)
      );
      //Insert the missing inspectionSubSegment into compressedArrayOfSubSegmentsPresent
      missing.forEach(item => {
        const obj = {};
        obj.subSegment = item;
        obj.number = 0;
        compressedArrayOfSubSegmentsPresent.push(obj);
      });

      //Fill up the sewerScopePhotos array with the missing picture objs
      compressedArrayOfSubSegmentsPresent.forEach(item => {
        if (item.number < this.minNumOfPicObj) {
          let diff = this.minNumOfPicObj - item.number;
          for (let i = 0; i < diff; i++) {
            const picObj = this.createPictureInputObj(item.subSegment);
            //Only pushes in when there is a missing picture object
            this.sewerScopePhotos.push(picObj);
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