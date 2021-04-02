<template>
  <div>
    <div class="container">
      <form @submit.prevent="onSubmit()">
        <div class="section">
          <p>
            Water quality or hazardous materials (lead) testing is available from local testing labs, and not included in this inspection. All underground piping related to water supply, waste, or sprinkler use are excluded from this inspection. Leakage or corrosion in underground piping cannot be detected by a visual inspection, nor can the presence of mineral build-up that may gradually restrict their inner diameter and reduce water volume.
            <span
              class="link"
            >Read more</span>
          </p>
        </div>
        <div class="section">
          <div class="flexbox">
            <div class="tittle">
              <h2>Main Line</h2>
            </div>
          </div>
          <div class="column1">
            <label>Location:</label>
            <input
              type="text"
              placeholder="Enter location"
              v-model="plumbingSystem.mainLine.location"
              @blur="onSubmit()"
            />
          </div>
          <div class="column1">
            <label>Material:</label>
            <select required v-model="plumbingSystem.mainLine.material" @blur="onSubmit()">
              <option value selected disabled hidden>Select Material</option>
              <option value="Rigid Copper">Rigid Copper</option>
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
                      placeholder="Enter size"
                      v-model="plumbingSystem.mainLine.size.value"
                      @blur="onSubmit()"
                    />
                  </div>
                  <div class="input-container-right">
                    <select required v-model="plumbingSystem.mainLine.size.unit" @blur="onSubmit()">
                      <option value selected disabled hidden>Select</option>
                      <option value="Font">cm</option>
                      <option value="Font">mm</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="column">
                <label>Condition:</label>
                <select
                  required
                  v-model="plumbingSystem.mainLine.condition"
                  :style="{'background-color': effectConditionActiveColor(plumbingSystem.mainLine.condition)}"
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
            <div class="textarea" plumbingSystem.mainLine.comment>
              <label>Comment:</label>
              <textarea rows="8" @blur="onSubmit()"></textarea>
            </div>
            <div class="photo-container">
              <div v-for="(pictureInput, index) in plumbingSystemPhotos" :key="index">
                <div v-if="pictureInput.inspectionSubSegment == 'mainLine'">
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
              <button type="button" @click="onAddNewPictureModal('mainLine')">Add New</button>
            </div>
          </div>
        </div>

        <div class="section">
          <div class="flexbox">
            <div class="tittle">
              <h2>Supply Lines</h2>
            </div>
          </div>
          <div class="column1">
            <label>Location:</label>
            <input
              type="text"
              placeholder="Enter location"
              v-model="plumbingSystem.supplyLines.location"
              @blur="onSubmit()"
            />
          </div>
          <div class="column1">
            <label>Material:</label>
            <select required v-model="plumbingSystem.supplyLines.material" @blur="onSubmit()">
              <option value selected disabled hidden>Select Material</option>
              <option value="Rigid Copper">Rigid Copper</option>
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
                      placeholder="Enter size"
                      v-model="plumbingSystem.supplyLines.size.value"
                      @blur="onSubmit()"
                    />
                  </div>
                  <div class="input-container-right">
                    <select
                      required
                      v-model="plumbingSystem.supplyLines.size.unit"
                      @blur="onSubmit()"
                    >
                      <option value selected disabled hidden>Select</option>
                      <option value="Font">cm</option>
                      <option value="Font">mm</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="column">
                <label>Condition:</label>
                <select
                  required
                  v-model="plumbingSystem.supplyLines.condition"
                  :style="{'background-color': effectConditionActiveColor(plumbingSystem.supplyLines.condition)}"
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
              <div v-for="(pictureInput, index) in plumbingSystemPhotos" :key="index">
                <div v-if="pictureInput.inspectionSubSegment == 'supplyLines'">
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
              <button type="button" @click="onAddNewPictureModal('supplyLines')">Add New</button>
            </div>
          </div>
        </div>

        <div class="section">
          <div class="flexbox">
            <div class="tittle">
              <h2>Waste Lines</h2>
            </div>
          </div>
          <div class="column1">
            <label>Location:</label>
            <input
              type="text"
              placeholder="Enter location"
              v-model="plumbingSystem.wasteLines.location"
              @blur="onSubmit()"
            />
          </div>
          <div class="column1">
            <label>Material:</label>
            <select required v-model="plumbingSystem.wasteLines.material" @blur="onSubmit()">
              <option value selected disabled hidden>Select Material</option>
              <option value="Rigid Copper">Rigid Copper</option>
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
                      placeholder="Enter size"
                      v-model="plumbingSystem.wasteLines.size.value"
                      @blur="onSubmit()"
                    />
                  </div>
                  <div class="input-container-right">
                    <select required v-model="plumbingSystem.wasteLines.unit" @blur="onSubmit()">
                      <option value selected disabled hidden>Select</option>
                      <option value="Font">cm</option>
                      <option value="Font">mm</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="column">
                <label>
                  <small>Condition of waste lines:</small>
                </label>
                <select
                  required
                  v-model="plumbingSystem.wasteLines.condition"
                  :style="{'background-color': effectConditionActiveColor(plumbingSystem.wasteLines.condition)}"
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
              <textarea rows="8" v-model="plumbingSystem.wasteLines.comment" @blur="onSubmit()"></textarea>
            </div>
            <div class="photo-container">
              <div v-for="(pictureInput, index) in plumbingSystemPhotos" :key="index">
                <div v-if="pictureInput.inspectionSubSegment == 'wasteLines'">
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
              <button type="button" @click="onAddNewPictureModal('wasteLines')">Add New</button>
            </div>
          </div>
        </div>

        <div class="section">
          <div class="flexbox">
            <div class="tittle">
              <h2>Outside Hose, Faucets and Hookup</h2>
            </div>
          </div>

          <div class="flex">
            <div class="flex-grow">
              <div class="column">
                <label>Condition</label>
                <select
                  required
                  v-model="plumbingSystem.outsideHoseFaucetsHookup.condition"
                  :style="{'background-color': effectConditionActiveColor(plumbingSystem.outsideHoseFaucetsHookup.condition)}"
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
                v-model="plumbingSystem.outsideHoseFaucetsHookup.comment"
                @blur="onSubmit()"
              ></textarea>
            </div>
            <div class="photo-container">
              <div v-for="(pictureInput, index) in plumbingSystemPhotos" :key="index">
                <div v-if="pictureInput.inspectionSubSegment == 'outsideHoseFaucetsHookup'">
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
                @click="onAddNewPictureModal('outsideHoseFaucetsHookup')"
              >Add New</button>
            </div>
          </div>
        </div>
        <div class="section">
          <div class="flexbox">
            <div class="tittle">
              <h2>Water Heater</h2>
            </div>
          </div>
          <div v-for="(heater, index) in plumbingSystem.waterHeaters" :key="index">
            <div class="flex">
              <div class="flex-grow">
                <div class="column" v-if="plumbingSystem.waterHeaters.length > 1">
                  <label>#:{{index+1}}</label>
                </div>
                <div class="column">
                  <label>Type:</label>
                  <select required v-model="heater.type" @blur="onSubmit()">
                    <option value selected disabled hidden>Select Water Heater Type</option>
                    <option v-for="(type, index) in typesOfWaterHeaters" :key="index">{{type}}</option>
                  </select>
                </div>
                <div class="column">
                  <label>Power source:</label>
                  <select required v-model="heater.powerSource" @blur="onSubmit()">
                    <option value selected disabled hidden>Select Power Source</option>
                    <option value="gas">Gas</option>
                  </select>
                </div>
                <div class="column">
                  <label>Capacity:</label>
                  <div class="input-container">
                    <div class="input-container-left">
                      <input
                        type="text"
                        placeholder="Enter Capacity"
                        v-model="heater.capacity.value"
                        @blur="onSubmit()"
                      />
                    </div>
                    <div class="input-container-right">
                      <select required v-model="heater.capacity.unit" @blur="onSubmit()">
                        <option value selected disabled hidden>Select</option>
                        <option value="BTU">BTU</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="column1">
                  <label>Location of power source:</label>
                  <input
                    type="text"
                    placeholder="Enter location"
                    v-model="heater.locationOfPowerSource"
                    @blur="onSubmit()"
                  />
                </div>
              </div>
            </div>
            <div class="flex">
              <div class="flex-grow">
                <div class="column">
                  <label>
                    <br />
                  </label>
                  <label>Combustion air</label>
                </div>
                <div class="column">
                  <label>Condition:</label>
                  <select
                    required
                    v-model="heater.combustionAir.condition"
                    :style="{'background-color': effectConditionActiveColor(heater.combustionAir.condition)}"
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
                <label>Comment for combustion air:</label>
                <textarea rows="8" v-model="heater.combustionAir.comment" @blur="onSubmit()"></textarea>
              </div>
              <div class="photo-container">
                <div v-for="(pictureInput, index) in plumbingSystemPhotos" :key="index">
                  <div
                    v-if="pictureInput.inspectionSubSegment == 'combustionAir' && pictureInput.id == heater.id"
                  >
                    <picture-input
                      @change="onChangePicture(pictureInput.fileName, pictureInput.inspectionSubSegment, pictureInput.id, pictureInput.subType)"
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
                        pictureInput.fileName, pictureInput.fileUrl, pictureInput.inspectionSubSegment, heater.id
                        )"
                    >Remove</button>
                  </div>
                </div>
                <button
                  type="button"
                  @click="onAddNewPictureModal('combustionAir', heater.id)"
                >Add New</button>
              </div>
            </div>
            <div class="flex">
              <div class="flex-grow">
                <div class="column">
                  <label>
                    <br />
                  </label>
                  <label>Flue</label>
                </div>
                <div class="column">
                  <label>Condition:</label>
                  <select
                    required
                    v-model="heater.flue.condition"
                    :style="{'background-color': effectConditionActiveColor(heater.flue.condition)}"
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
                <textarea rows="8" v-model="heater.flue.comment" @blur="onSubmit()"></textarea>
              </div>
              <div class="photo-container">
                <div v-for="(pictureInput, index) in plumbingSystemPhotos" :key="index">
                  <div
                    v-if="pictureInput.inspectionSubSegment == 'flue' && pictureInput.id == heater.id"
                  >
                    <picture-input
                      @change="onChangePicture(pictureInput.fileName, pictureInput.inspectionSubSegment, pictureInput.id, pictureInput.subType)"
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
                        pictureInput.fileName, pictureInput.fileUrl, pictureInput.inspectionSubSegment, heater.id
                        )"
                    >Remove</button>
                  </div>
                </div>
                <button type="button" @click="onAddNewPictureModal('flue', heater.id)">Add New</button>
              </div>
            </div>
            <div class="flex">
              <div class="flex-grow">
                <div class="column">
                  <label>
                    <br />
                  </label>
                  <label>Relief Valve</label>
                </div>
                <div class="column">
                  <label>Condition:</label>
                  <select
                    required
                    v-model="heater.reliefValve.condition"
                    :style="{'background-color': effectConditionActiveColor(heater.reliefValve.condition)}"
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
                <textarea rows="8" v-model="heater.reliefValve.comment" @blur="onSubmit()"></textarea>
              </div>
              <div class="photo-container">
                <div v-for="(pictureInput, index) in plumbingSystemPhotos" :key="index">
                  <div
                    v-if="pictureInput.inspectionSubSegment == 'reliefValve' && pictureInput.id == heater.id"
                  >
                    <picture-input
                      @change="onChangePicture(pictureInput.fileName, pictureInput.inspectionSubSegment, pictureInput.id, pictureInput.subType)"
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
                        pictureInput.fileName, pictureInput.fileUrl, pictureInput.inspectionSubSegment, heater.id
                        )"
                    >Remove</button>
                  </div>
                </div>
                <button
                  type="button"
                  @click="onAddNewPictureModal('reliefValve', heater.id)"
                >Add New</button>
              </div>
            </div>
            <div class="column" v-if="plumbingSystem.waterHeaters.length > 1">
              <label>
                <h5>
                  <br />
                </h5>
              </label>
              <button
                type="button"
                class="addnew-btn"
                @click="onDeleteWaterHeater(heater.id)"
              >Delete Heater {{index+1}}</button>
            </div>
          </div>
          <div class="column">
            <label>
              <h5>
                <br />
              </h5>
            </label>
            <button type="button" @click="addNewWaterHeater()" class="addnew-btn">Add New</button>
          </div>
        </div>

        <div class="section">
          <div>
            <h2>Fuel System</h2>
          </div>
          <div class="flex">
            <div class="flex-grow">
              <div class="column">
                <label>
                  <br />
                </label>
                <label>Gas Meter/Tank</label>
              </div>
              <div class="column">
                <label>Condition:</label>
                <select
                  required
                  v-model="plumbingSystem.fuelSystem.gasMeterOrTank.condition"
                  @blur="onSubmit()"
                >
                  <option value selected disabled hidden>Select Condition</option>
                  <option value="SER">SER</option>
                </select>
              </div>
            </div>
            <div class="textarea">
              <label>Comment for Gas Meter / Tank</label>
              <textarea
                rows="8"
                v-model="plumbingSystem.fuelSystem.gasMeterOrTank.comment"
                @blur="onSubmit()"
              ></textarea>
            </div>
            <div class="photo-container">
              <div v-for="(pictureInput, index) in plumbingSystemPhotos" :key="index">
                <div v-if="pictureInput.inspectionSubSegment == 'fuelSystem'">
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
              <button type="button" @click="onAddNewPictureModal('fuelSystem')">Add New</button>
            </div>
          </div>
          <h3>NB: See Interior, Kitchen, and Bathrooms section of report for information about plumbing and fixtures in those areas.</h3>
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
      plumbingSystem: {
        mainLine: {
          location: "",
          material: "",
          size: {
            value: "",
            unit: ""
          },
          condition: "",
          comment: ""
        },
        supplyLines: {
          location: "",
          material: "",
          size: {
            value: "",
            unit: ""
          },
          condition: "",
          comment: ""
        },
        wasteLines: {
          location: "",
          material: "",
          size: {
            value: "",
            unit: ""
          },
          condition: "",
          comment: ""
        },
        outsideHoseFaucetsHookup: {
          condition: "",
          comment: ""
        },
        waterHeaters: [
          {
            id: this.generateRandomNum(),
            type: "",
            powerSource: "",
            capacity: {
              value: "",
              unit: ""
            },
            locationOfPowerSource: "",
            combustionAir: {
              condition: "",
              comment: ""
            },
            flue: {
              condition: "",
              comment: ""
            },
            reliefValve: {
              condition: "",
              comment: ""
            }
          }
        ],
        fuelSystem: {
          gasMeterOrTank: {
            condition: "",
            comment: ""
          }
        }
      },
      typesOfWaterHeaters: [
        "Conventional Storage Tank Water Heater",
        "Tankless Water Heater",
        "Heat Pump/Hybrid Water Heater",
        "Solar Powered Water Heater",
        "Condensing Water Heater"
      ],
      copyOfInitialWaterHeater: "", //This is for a template when adding to this.plumbingSystem.waterHeaters
      arrayOfWaterHeaterSubSegments: ["combustionAir", "flue", "reliefValve"],
      arrayOfStandardSubSegments: [
        "mainLine",
        "supplyLines",
        "wasteLines",
        "outsideHoseFaucetsHookup",
        "fuelSystem",
        "combustionAir",
        "flue",
        "reliefValve"
      ],
      minNumOfPicObj: 2,
      plumbingSystemPhotos: []
    };
  },

  methods: {
    //To initialize the this.plumbingSystemPhotos
    populateInitialPhotosArray() {
      const populatedArray = [];
      this.arrayOfStandardSubSegments.forEach(item => {
        for (let i = 0; i < this.minNumOfPicObj; i++) {
          const pictureObj = this.createPictureInputObj(item);
          //For the arrayOfWaterHeaterSubSegments
          for (let element of this.arrayOfWaterHeaterSubSegments) {
            if (item == element) {
              pictureObj.id = this.copyOfInitialWaterHeater.id;
              pictureObj.subType = "waterHeater";
              // pictureObj.fileName = this.generateFileName(
              //   pictureObj.inspectionSubSegment
              // );
            }
          }
          populatedArray.push(pictureObj);
        }
      });
      this.plumbingSystemPhotos = populatedArray;
    },

    addNewWaterHeater() {
      this.copyOfInitialWaterHeater.id = this.generateRandomNum();

      for (let i = 0; i < this.minNumOfPicObj; i++) {
        for (let element of this.arrayOfWaterHeaterSubSegments) {
          const pictureObj = this.createPictureInputObj(element);
          pictureObj.id = this.copyOfInitialWaterHeater.id;
          pictureObj.subType = "waterHeater";
          pictureObj.fileName = this.generateFileName(
            pictureObj.inspectionSubSegment
          );
          this.plumbingSystemPhotos.push(pictureObj);
        }
      }
      this.plumbingSystem.waterHeaters.push(
        JSON.parse(JSON.stringify(this.copyOfInitialWaterHeater))
      );
      this.onSubmit();
    },

    onSubmit() {
      const formData = {
        plumbingSystem: this.plumbingSystem
      };
      axios
        .patch(`/home_inspection_reports/${this.jobId}`, formData)
        .then(res => {
          console.log(res);
        })
        .catch(error => {
          console.log(error.response);
        });
    },

    onChangePicture(fileName, inspectionSubSegment, itemId, subType) {
      if (itemId) {
        //So that this.plumbingSystem.waterHeaters array will be saved first for the water heater itemId to be saved with it
        this.onSubmit();
      }
      const picture = event.target.result;
      const blob = base64ToBlob(picture);

      let formData = new FormData();
      formData.append("fileData", blob, fileName);
      if (itemId) {
        formData.append("id", itemId);
      }
      if (subType) {
        formData.append("subType", subType);
      }

      axios
        .post(
          `/home_inspection_reports/pictures/plumbingSystem/${inspectionSubSegment}/${this.jobId}`,
          formData
        )
        .then(res => {
          console.log(res.data);
          //Note: this.plumbingSystem.plumbingSystemhotosInfo is not initialized in the data instance
          this.plumbingSystem.plumbingSystemPhotosInfo =
            res.data.photosInfoArray;
          const updatedArray = this.plumbingSystemPhotos.map(item => {
            if (item.fileName == fileName) {
              item.dataUrl = picture;
              item.contentType = blob.type;
              item.fileUrl = res.data.fileUrl;
            }
            return item;
          });
          this.plumbingSystemPhotos = updatedArray;
        })
        .catch(error => console.log(error));
    },

    onRemovePictureModal(fileName, fileUrl, inspectionSubSegment, heaterId) {
      const removePictureModal = () => {
        let newPhotoArray = [];
        this.plumbingSystemPhotos.forEach(item => {
          if (fileName !== item.fileName) {
            newPhotoArray.push(item);
          }
        });
        this.plumbingSystemPhotos = newPhotoArray;

        //Check the number of modals left for that particular inspectionSubSegment
        //If less than the this.minNumOfPicObj then add new one
        const arrayOfSpecificModalsLeft = [];
        this.plumbingSystemPhotos.forEach(element => {
          if (heaterId) {
            //For water heater subsegments
            if (
              element.inspectionSubSegment == inspectionSubSegment &&
              element.id == heaterId
            ) {
              arrayOfSpecificModalsLeft.push(element);
            }
          } else {
            //For non water heater subsegments
            if (element.inspectionSubSegment == inspectionSubSegment) {
              arrayOfSpecificModalsLeft.push(element);
            }
          }
        });
        if (arrayOfSpecificModalsLeft.length < this.minNumOfPicObj) {
          let newPicObj = this.createPictureInputObj(inspectionSubSegment);
          if (heaterId) {
            newPicObj.id = heaterId;
            newPicObj.subType = "waterHeater";
          }
          this.plumbingSystemPhotos.push(newPicObj);
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
          `/home_inspection_reports/deletePictures/plumbingSystem/${inspectionSubSegment}/${fileName}/${this.jobId}`,
          { data: formData }
        )
        .then(res => {
          removePictureModal();
        })
        .catch(error => console.log(error.response));
    },

    onAddNewPictureModal(inspectionSubSegment, id) {
      const newPictureObject = this.createPictureInputObj(inspectionSubSegment);
      if (this.arrayOfWaterHeaterSubSegments.includes(inspectionSubSegment)) {
        newPictureObject.id = id;
        newPictureObject.subType = "waterHeater";
      }
      this.plumbingSystemPhotos.push(newPictureObject);
    },

    //Deletes the water heater item from this.plumbingSystem.waterHeaters array and its picture modals
    onDeleteWaterHeater(heaterId) {
      //first delete all its picture modals
      const array = [];
      this.plumbingSystemPhotos.forEach(item => {
        if (item.id == heaterId) {
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
      //Then remove the specific water heater from the array
      this.plumbingSystem.waterHeaters.splice(item => {
        item.id == heaterId;
      }, 1);
      //Then save
      this.onSubmit();
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
    this.copyOfInitialWaterHeater = JSON.parse(
      JSON.stringify(this.plumbingSystem.waterHeaters[0])
    );

    //To populate the plumbingPhotos array
    this.populateInitialPhotosArray();

    //Populate this.plumbingSystem json with data from backend
    axios
      .get(`/home_inspection_reports/${jobId}`)
      .then(res => {
        this.plumbingSystem = res.data.plumbingSystem;
      })
      .catch(error => {
        console.log(error.response);
      });

    //Get the pictures from backend
    axios
      .get(`/home_inspection_reports/plumbingSystem/${jobId}`)
      .then(res => {
        //modifies the response data before stting to this.plumbingSystemPhotos array
        const modifiedData = res.data.map(item => {
          const modifiedItem = {
            ...pictureInputData,
            fileName: item.fileName,
            inspectionSubSegment: item.inspectionSubSegment,
            fileUrl: item.fileUrl,
            dataUrl: item.dataUrl,
            id: item.subDetails.id,
            subType: item.subDetails.subType,
            contentType: item.contentType
          };
          return modifiedItem;
        });

        this.plumbingSystemPhotos = modifiedData;

        //Create an array of the inspectionSubSegments present in this.plumbingSystemPhotos array
        const arrayOfSubSegmentsPresent = this.plumbingSystemPhotos.map(
          item => {
            return item.inspectionSubSegment;
          }
        );
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
        console.log(compressedArrayOfSubSegmentsPresent);

        //Check if this.plumbingSystemPhotos is missing any object with a subSegment in this.arrayOfStandardSubSegments
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

        //Fill up the plumbingSystemPhotos array with the missing picture objs
        compressedArrayOfSubSegmentsPresent.forEach(item => {
          if (item.number < this.minNumOfPicObj) {
            let diff = this.minNumOfPicObj - item.number;
            for (let i = 0; i < diff; i++) {
              const picObj = this.createPictureInputObj(item.subSegment);
              //Only pushes in when there is a missing picture object
              this.plumbingSystemPhotos.push(picObj);
            }
          }
        });

        //Create an array of the unique water heater ids
        const idsOfWaterHeatersPresent = this.plumbingSystem.waterHeaters.map(
          item => {
            return item.id;
          }
        );
        //Loop thru the ids array and this.plumbingSystemPhotos to count the no. of pic objects present for each water heater
        idsOfWaterHeatersPresent.forEach(id => {
          this.arrayOfWaterHeaterSubSegments.forEach(subSegment => {
            let count = 0;
            this.plumbingSystemPhotos.forEach(element => {
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
                picObj.subType = "waterHeater";
                this.plumbingSystemPhotos.push(picObj);
              }
            }
          });
        });
      })
      .catch(error => {
        console.log(error.response);
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

  .column1,
  .column,
  .textarea {
    padding: 0px;
    width: 100%;
  }
}
</style> 