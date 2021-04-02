<template>
  <div>
    <div class="container">
      <form @submit.prevent="onSubmit()">
        <div class="section">
          <p>
            Although not required to, we generally attempt to evaluate various roof types by walking on their surfaces; certain roofing materials are prone to damage if walked on; for this reason we indicate the method used to evaluate the roof surface. Every roof will wear differently relative to its age, number of layers, quality of material, method of application, exposure to weather conditions, and the regularity of its maintenance.
            <span
              class="link"
            >Read more</span>
          </p>
        </div>
        <div class="section">
          <div>
            <h2>Main Roof</h2>
          </div>
          <div class="flex">
            <div class="flex-grow">
              <div class="column">
                <label>Style:</label>
                <select required @blur="onSubmit()">
                  <option value selected disabled hidden>Select Style</option>
                  <option value>Hip</option>
                </select>
                <br />
                <br />
                <label>Materials:</label>
                <select required @blur="onSubmit()">
                  <option value selected disabled hidden>Select Materials</option>
                  <option value>Metal</option>
                </select>
              </div>
              <div class="column">
                <label>Condition</label>
                <select required @blur="onSubmit()">
                  <option value selected disabled hidden>Select Condition</option>
                  <option value="SER">SER</option>
                </select>
              </div>
            </div>
            <div class="textarea">
              <label>Comment:</label>
              <textarea rows="8" @blur="onSubmit()"></textarea>
            </div>
            <div class="photo-container">
              <div v-for="(pictureInput, index) in roofingSystemPhotos" :key="index">
                <div v-if="pictureInput.inspectionSubSegment == 'mainRoof'">
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
              <button type="button" @click="onAddNewPictureModal('mainRoof')">Add New</button>
            </div>
          </div>
        </div>
        <div class="section">
          <div>
            <p>In regard to evaluating the type and amount of insulation on the attic floor, we use only generic terms and approximate measurements, and do not sample or test the material for specific identification. Also, we do not disturb or move any portion of it, and it may well obscure water pipes, electrical conduits, junction boxes, exhaust fans, and other components.</p>
          </div>
        </div>

        <div class="section">
          <div class="flexbox">
            <div class="tittle">
              <h2>Attic</h2>
            </div>
          </div>
          <div class="column1">
            <label>Access:</label>
            <input type="text" placeholder="Enter from where the attic is accessed" @blur="onSubmit()"/>
          </div>
          <div class="column1">
            <label>Roof/attic framing:</label>
            <select required @blur="onSubmit()">
              <option value selected disabled hidden>Select Framing</option>
              <option value="Wood">Basic Framing</option>
            </select>
          </div>
          <div class="flex">
            <div class="flex-grow">
              <div class="column">
                <label>Framing</label>
              </div>
              <div class="column">
                <label>Condition:</label>
                <select required @blur="onSubmit()">
                  <option value selected disabled hidden>Select Condition</option>
                  <option value="Font">SER</option>
                </select>
              </div>
            </div>
            <div class="textarea">
              <label>Comment:</label>
              <textarea rows="8" @blur="onSubmit()"></textarea>
            </div>
            <div class="photo-container">
              <div v-for="(pictureInput, index) in roofingSystemPhotos" :key="index">
                <div v-if="pictureInput.inspectionSubSegment == 'atticFraming'">
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
              <button type="button" @click="onAddNewPictureModal('atticFraming')">Add New</button>
            </div>
          </div>
          <div class="flex">
            <div class="flex-grow">
              <div class="column">
                <label>Ventilation</label>
              </div>
              <div class="column">
                <label>Condition:</label>
                <select required @blur="onSubmit()">
                  <option value selected disabled hidden>Select Condition</option>
                  <option value="Font">SER</option>
                </select>
              </div>
            </div>
            <div class="textarea">
              <label>Comment:</label>
              <textarea rows="8" @blur="onSubmit()"></textarea>
            </div>
            <div class="photo-container">
              <div v-for="(pictureInput, index) in roofingSystemPhotos" :key="index">
                <div v-if="pictureInput.inspectionSubSegment == 'atticVentilation'">
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
              <button type="button" @click="onAddNewPictureModal('atticVentilation')">Add New</button>
            </div>
          </div>
        </div>
        <div class="section">
          <div class="flexbox">
            <div class="tittle">
              <h2>Insulation</h2>
            </div>
          </div>
          <div class="column1">
            <label>Insulation material:</label>
            <select required @blur="onSubmit()">
              <option value selected disabled hidden>Select Materials</option>
              <option value="daylightBasement">Fibreglass</option>
            </select>
          </div>
          <div class="flex">
            <div class="flex-grow">
              <div class="column">
                <label>Depth:</label>
                <div class="input-container">
                  <div class="input-container-left">
                    <input type="text" placeholder="Enter Depth" @blur="onSubmit()"/>
                  </div>
                  <div class="input-container-right">
                    <select required @blur="onSubmit()">
                      <option value selected disabled hidden>Select</option>
                      <option value="Font">cm</option>
                      <option value="Font">mm</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="column">
                <label>Condition:</label>
                <select required @blur="onSubmit()">
                  <option value selected disabled hidden>Select Condition</option>
                  <option value="Font">Font</option>
                </select>
              </div>
            </div>
            <div class="textarea">
              <label>Comment:</label>
              <textarea rows="8" @blur="onSubmit()"></textarea>
            </div>
            <div class="photo-container">
              <div v-for="(pictureInput, index) in roofingSystemPhotos" :key="index">
                <div v-if="pictureInput.inspectionSubSegment == 'insulation'">
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
              <button type="button" @click="onAddNewPictureModal('insulation')">Add New</button>
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
      roofingSystem: {
        mainRoof: {
          style: "",
          materials: "",
          condition: "",
          comment: ""
        },
        attic: {
          access: "",
          roofAtticFramingType: "",
          framing: {
            condition: "",
            comment: ""
          },
          ventilation: {
            condition: "",
            comment: ""
          }
        },
        insulation: {
          insulationMaterial: "",
          depth: {
            value: "",
            unit: ""
          },
          condition: "",
          comment: ""
        }
      },
      arrayOfStandardSubSegments: [
        "mainRoof",
        "atticFraming",
        "atticVentilation",
        "insulation"
      ],
      minNumOfPicObj: 2,
      roofingSystemPhotos: [] //this array is populated in the created life cycle
    };
  },

  methods: {
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
        roofingSystem: this.roofingSystem
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
    effectConditionActiveColor(event) {
      const color = [];
      this.conditions.forEach(item => {
        if (item.condition == event) {
          color.push(item.color);
        }
      });
      this.color = color[0];
      return color[0];
    },

    generateFileName(area) {
      return `${area}-${Math.floor(100000 + Math.random() * 900000)}`;
    },

    onChangePicture(fileName, inspectionSubSegment) {
      const picture = event.target.result;
      const blob = base64ToBlob(picture);

      let formData = new FormData();
      formData.append("fileData", blob, fileName);

      axios
        .post(
          `/home_inspection_reports/pictures/roofingSystem/${inspectionSubSegment}/${this.jobId}`,
          formData
        )
        .then(res => {
          this.roofingSystem.roofingSystemPhotosInfo = res.data.photosInfoArray
          const updatedArray = this.roofingSystemPhotos.map(item => {
            if (item.fileName == fileName) {
              item.dataUrl = picture;
              item.contentType = blob.type;
              item.fileUrl = res.data.fileUrl;
              console.log(item);
            }
            return item;
          });
          this.roofingSystemPhotos = updatedArray;
        })
        .catch(error => console.log(error.response));
    },

    onAddNewPictureModal(inspectionSubSegment) {
      const newPictureObject = this.createPictureInputObj(inspectionSubSegment);
      this.roofingSystemPhotos.push(newPictureObject);
    },

    onRemovePictureModal(fileName, fileUrl, inspectionSubSegment) {
      const removePictureModal = () => {
        let newPhotoArray = [];
        this.roofingSystemPhotos.forEach(item => {
          if (fileName !== item.fileName) {
            newPhotoArray.push(item);
          }
        });
        this.roofingSystemPhotos = newPhotoArray;

        //Check the number of modals left for that particular inspectionSubSegment
        //If less than the this.minNumOfPicObj then add new one
        const arrayOfSpecificModalsLeft = [];
        this.roofingSystemPhotos.forEach(element => {
          if (element.inspectionSubSegment == inspectionSubSegment) {
            arrayOfSpecificModalsLeft.push(element);
          }
        });
        if (arrayOfSpecificModalsLeft.length < this.minNumOfPicObj) {
          this.roofingSystemPhotos.push(
            this.createPictureInputObj(inspectionSubSegment)
          );
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
          `/home_inspection_reports/deletePictures/roofingSystem/${inspectionSubSegment}/${fileName}/${this.jobId}`,
          { data: formData }
        )
        .then(res => {
          removePictureModal();
        })
        .catch(error => console.log(error.response));
    }
  },
  created() {
    const jobId = this.$route.params.jobId;
    const pictureInputData = this.pictureInputData;
    axios
      .get(`/home_inspection_reports/roofingSystem/${jobId}`)
      .then(res => {
        //modifies the response data before pushing into this.roofingSystemPhotos array
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

        this.roofingSystemPhotos = modifiedData;

        //Create an array of the inspectionSubSegments present in this.roofingSystemPhotos array
        const arrayOfSubSegmentsPresent = this.roofingSystemPhotos.map(item => {
          return item.inspectionSubSegment;
        });

        const objOfSubSegmentsPresent = arrayOfSubSegmentsPresent.reduce(
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

        //Check if this.roofingSystemPhotos is missing any object with a subSegment in this.arrayOfStandardSubSegments
        const missing = this.arrayOfStandardSubSegments.filter(
          element => !arrayOfSubSegmentsPresent.includes(element)
        );
        //Insert the missing inspectionSubSegment into compressedArrayOfSubSegmentsPresent
        missing.forEach(item => {
          const obj = {};
          obj.subSegment = item;
          obj.number = 0;
          compressedArrayOfSubSegmentsPresent.push(obj);
        });

        //Populate the roofingSystemPhotos array
        compressedArrayOfSubSegmentsPresent.forEach(item => {
          if (item.number < this.minNumOfPicObj) {
            let diff = this.minNumOfPicObj - item.number;
            for (let i = 0; i < diff; i++) {
              this.roofingSystemPhotos.push(
                this.createPictureInputObj(item.subSegment)
              );
            }
          }
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

.back-btn {
  color: black;
  background-color: white;
}

.back-btn:hover {
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