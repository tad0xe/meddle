<template>
  <div>
    <div class="container">
      <form @submit.prevent="onSubmit()">
        <div class="section">
          <p>
            The inspector can only readily open access panels provided by the manufacturer or installer for routine homeowner maintenance, and will not operate components when weather conditions or other circumstances apply that may cause equipment damage. The inspector does not light pilot lights or ignite or extinguish solid fuel fires, nor are safety devices tested by the inspector.
            <span
              class="link"
            >Read more</span>
          </p>
        </div>
        <div class="section">
          <div class="flexbox">
            <div class="tittle">
              <h2>Heating Equipment</h2>
            </div>
            <div class="radio-btn">
              <label>
                <input type="radio" @blur="onSubmit()" />
                <span>This sub-section is not applicable</span>
              </label>
            </div>
          </div>
          <div v-for="(heatingEquipment, index) in heatingSystem.heatingEquipments" :key="index">
            <div v-if="heatingSystem.heatingEquipments.length > 1">
              <span>Heating System {{index+1}}</span>
            </div>
            <div class="flex">
              <div class="flex-grow">
                <div class="column">
                  <label>Type</label>
                  <select required v-model="heatingEquipment.type" @blur="onSubmit()">
                    <option value selected disabled hidden>Select Type</option>
                    <option
                      v-for="(system, index) in typesOfHeatingEquipment"
                      :key="index"
                    >{{system}}</option>
                  </select>
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
                <div v-for="(pictureInput, index) in heatingSystemPhotos" :key="index">
                  <div
                    v-if="pictureInput.inspectionSubSegment == 'mainHeatingEquipment' && pictureInput.id == heatingEquipment.id"
                  >
                    <picture-input
                      @change="onChangePicture(pictureInput.fileName, pictureInput.inspectionSubSegment, heatingEquipment.id)"
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
                        pictureInput.fileName, pictureInput.fileUrl, pictureInput.inspectionSubSegment, heatingEquipment.id
                        )"
                    >Remove</button>
                  </div>
                </div>
                <button
                  type="button"
                  @click="onAddNewPictureModal('mainHeatingEquipment', heatingEquipment.id)"
                >Add New</button>
              </div>
            </div>
            <div class="column1">
              <label>Location</label>
              <input type="text" v-model="heatingEquipment.location" @blur="onSubmit()" />
            </div>

            <div class="flex">
              <div class="flex-grow">
                <div class="column">
                  <label>Fuel source:</label>
                  <select required v-model="heatingEquipment.fuelSource" @blur="onSubmit()">
                    <option value selected disabled hidden>Select source</option>
                    <option value="Font">Propane</option>
                  </select>
                </div>

                <div class="column">
                  <label>
                    <br />
                    <br />
                  </label>
                  <input type="checkbox" @blur="onSubmit()" />&nbsp;Not applicable
                </div>
              </div>
            </div>
            <div class="column1">
              <label>Fuel Source Capacity:</label>
              <div class="input-container">
                <div class="input-container-left">
                  <input
                    type="text"
                    placeholder="Enter Capacity"
                    v-model="heatingEquipment.fuelSourceCapacity.value"
                    @blur="onSubmit()"
                  />
                </div>
                <div class="input-container-right">
                  <select
                    required
                    v-model="heatingEquipment.fuelSourceCapacity.unit"
                    @blur="onSubmit()"
                  >
                    <option value selected disabled hidden>Select</option>
                    <option value="Font">BTU</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="flex">
              <div class="flex-grow">
                <div class="column">
                  <label>
                    <br />
                  </label>
                  <label>Burners/ Heat Exchangers</label>
                </div>
                <div class="column">
                  <label>
                    <h5>Condition:</h5>
                  </label>
                  <select
                    required
                    v-model="heatingEquipment.burnerOrHeatExchanger.condition"
                    :style="{'background-color': effectConditionActiveColor(heatingEquipment.burnerOrHeatExchanger.condition)}"
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
                  v-model="heatingEquipment.burnerOrHeatExchanger.comment"
                  @blur="onSubmit()"
                ></textarea>
              </div>
              <div class="photo-container">
                <div v-for="(pictureInput, index) in heatingSystemPhotos" :key="index">
                  <div
                    v-if="pictureInput.inspectionSubSegment == 'burnerOrHeatExchanger' && pictureInput.id == heatingEquipment.id"
                  >
                    <picture-input
                      @change="onChangePicture(pictureInput.fileName, pictureInput.inspectionSubSegment, heatingEquipment.id)"
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
                        pictureInput.fileName, pictureInput.fileUrl, pictureInput.inspectionSubSegment, heatingEquipment.id
                        )"
                    >Remove</button>
                  </div>
                </div>
                <button
                  type="button"
                  @click="onAddNewPictureModal('burnerOrHeatExchanger', heatingEquipment.id)"
                >Add New</button>
              </div>
            </div>

            <div class="flex">
              <div class="flex-grow">
                <div class="column">
                  <label>
                    <br />
                  </label>
                  <label>Pump/ Blower Fan</label>
                </div>
                <div class="column">
                  <label>
                    <h5>Condition</h5>
                  </label>
                  <select
                    required
                    v-model="heatingEquipment.pumpOrBlowerFan.condition"
                    :style="{'background-color': effectConditionActiveColor(heatingEquipment.pumpOrBlowerFan.condition)}"
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
                  v-model="heatingEquipment.pumpOrBlowerFan.comment"
                  @blur="onSubmit()"
                ></textarea>
              </div>
              <div class="photo-container">
                <div v-for="(pictureInput, index) in heatingSystemPhotos" :key="index">
                  <div
                    v-if="pictureInput.inspectionSubSegment == 'pumpOrBlowerFan' && pictureInput.id == heatingEquipment.id"
                  >
                    <picture-input
                      @change="onChangePicture(pictureInput.fileName, pictureInput.inspectionSubSegment, heatingEquipment.id)"
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
                        pictureInput.fileName, pictureInput.fileUrl, pictureInput.inspectionSubSegment, heatingEquipment.id
                      )"
                    >Remove</button>
                  </div>
                </div>
                <button
                  type="button"
                  @click="onAddNewPictureModal('pumpOrBlowerFan', heatingEquipment.id)"
                >Add New</button>
              </div>
            </div>

            <div class="flex">
              <div class="flex-grow">
                <div class="column">
                  <label>
                    <br />
                  </label>
                  <label>Combustion Air</label>
                </div>
                <div class="column">
                  <label>
                    <h5>Condition</h5>
                  </label>
                  <select
                    required
                    v-model="heatingEquipment.combustionAir.condition"
                    :style="{'background-color': effectConditionActiveColor(heatingEquipment.combustionAir.condition)}"
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
                  v-model="heatingEquipment.combustionAir.comment"
                  @blur="onSubmit()"
                ></textarea>
              </div>
              <div class="photo-container">
                <div v-for="(pictureInput, index) in heatingSystemPhotos" :key="index">
                  <div
                    v-if="pictureInput.inspectionSubSegment == 'combustionAir' && pictureInput.id == heatingEquipment.id"
                  >
                    <picture-input
                      @change="onChangePicture(pictureInput.fileName, pictureInput.inspectionSubSegment, heatingEquipment.id)"
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
                        pictureInput.fileName, pictureInput.fileUrl, pictureInput.inspectionSubSegment, heatingEquipment.id
                      )"
                    >Remove</button>
                  </div>
                </div>
                <button
                  type="button"
                  @click="onAddNewPictureModal('combustionAir', heatingEquipment.id)"
                >Add New</button>
              </div>
            </div>
            <div class="flex">
              <div class="flex-grow">
                <div class="column">
                  <label>
                    <br />
                  </label>
                  <label>Flues</label>
                </div>
                <div class="column">
                  <label>
                    <h5>Condition</h5>
                  </label>
                  <select
                    required
                    v-model="heatingEquipment.flue.condition"
                    :style="{'background-color': effectConditionActiveColor(heatingEquipment.flue.condition)}"
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
                <label>Comment for:</label>
                <textarea rows="8" v-model="heatingEquipment.flue.comment" @blur="onSubmit()"></textarea>
              </div>
              <div class="photo-container">
                <div v-for="(pictureInput, index) in heatingSystemPhotos" :key="index">
                  <div
                    v-if="pictureInput.inspectionSubSegment == 'flue' && pictureInput.id == heatingEquipment.id"
                  >
                    <picture-input
                      @change="onChangePicture(pictureInput.fileName, pictureInput.inspectionSubSegment, heatingEquipment.id)"
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
                        pictureInput.fileName, pictureInput.fileUrl, pictureInput.inspectionSubSegment, heatingEquipment.id
                        )"
                    >Remove</button>
                  </div>
                </div>
                <button
                  type="button"
                  @click="onAddNewPictureModal('flue', heatingEquipment.id)"
                >Add New</button>
              </div>
            </div>

            <div class="flex">
              <div class="flex-grow">
                <div class="column">
                  <label>
                    <br />
                  </label>
                  <label>Vents, Plenum</label>
                </div>
                <div class="column">
                  <label>
                    <h5>Condition</h5>
                  </label>
                  <select
                    required
                    v-model="heatingEquipment.ventsAndPlenum.condition"
                    :style="{'background-color': effectConditionActiveColor(heatingEquipment.ventsAndPlenum.condition)}"
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
                  v-model="heatingEquipment.ventsAndPlenum.comment"
                  @blur="onSubmit()"
                ></textarea>
              </div>
              <div class="photo-container">
                <div v-for="(pictureInput, index) in heatingSystemPhotos" :key="index">
                  <div
                    v-if="pictureInput.inspectionSubSegment == 'ventsAndPlenum' && pictureInput.id == heatingEquipment.id"
                  >
                    <picture-input
                      @change="onChangePicture(pictureInput.fileName, pictureInput.inspectionSubSegment, heatingEquipment.id)"
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
                        pictureInput.fileName, pictureInput.fileUrl, pictureInput.inspectionSubSegment, heatingEquipment.id
                        )"
                    >Remove</button>
                  </div>
                </div>
                <button
                  type="button"
                  @click="onAddNewPictureModal('ventsAndPlenum', heatingEquipment.id)"
                >Add New</button>
              </div>
            </div>
            <div class="flex">
              <div class="flex-grow">
                <div class="column">
                  <label>
                    <br />
                  </label>
                  <label>Air Filters</label>
                </div>
                <div class="column">
                  <label>
                    <h5>Condition</h5>
                  </label>
                  <select
                    required
                    v-model="heatingEquipment.airFilters.condition"
                    :style="{'background-color': effectConditionActiveColor(heatingEquipment.airFilters.condition)}"
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
                <textarea rows="8" v-model="heatingEquipment.airFilters.comment" @blur="onSubmit()"></textarea>
              </div>
              <div class="photo-container">
                <div v-for="(pictureInput, index) in heatingSystemPhotos" :key="index">
                  <div
                    v-if="pictureInput.inspectionSubSegment == 'airFilters' && pictureInput.id == heatingEquipment.id"
                  >
                    <picture-input
                      @change="onChangePicture(pictureInput.fileName, pictureInput.inspectionSubSegment, heatingEquipment.id)"
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
                        pictureInput.fileName, pictureInput.fileUrl, pictureInput.inspectionSubSegment, heatingEquipment.id
                        )"
                    >Remove</button>
                  </div>
                </div>
                <button
                  type="button"
                  @click="onAddNewPictureModal('airFilters', heatingEquipment.id)"
                >Add New</button>
              </div>
            </div>

            <div class="flex">
              <div class="flex-grow">
                <div class="column">
                  <label>
                    <br />
                  </label>
                  <label>Thermostat Location</label>
                </div>
                <div class="column">
                  <label>
                    <h5>Thermostat location:</h5>
                  </label>
                  <input type="text" size="20px" @blur="onSubmit()" />
                </div>
                <div class="column"></div>
              </div>
            </div>
            <div class="flex">
              <div class="flex-grow">
                <div class="column">
                  <label>
                    <br />
                  </label>
                  <label>Thermostat</label>
                </div>
                <div class="column">
                  <label>
                    <h5>Condition</h5>
                  </label>
                  <select
                    required
                    v-model="heatingEquipment.thermostatLocation.condition"
                    :style="{'background-color': effectConditionActiveColor(heatingEquipment.thermostatLocation.condition)}"
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
                  v-model="heatingEquipment.thermostatLocation.comment"
                  @blur="onSubmit()"
                ></textarea>
              </div>
              <div class="photo-container">
                <div v-for="(pictureInput, index) in heatingSystemPhotos" :key="index">
                  <div
                    v-if="pictureInput.inspectionSubSegment == 'thermostatLocation' && pictureInput.id == heatingEquipment.id"
                  >
                    <picture-input
                      @change="onChangePicture(pictureInput.fileName, pictureInput.inspectionSubSegment, heatingEquipment.id)"
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
                        pictureInput.fileName, pictureInput.fileUrl, pictureInput.inspectionSubSegment, heatingEquipment.id
                        )"
                    >Remove</button>
                  </div>
                </div>
                <button
                  type="button"
                  @click="onAddNewPictureModal('thermostatLocation', heatingEquipment.id)"
                >Add New</button>
              </div>
            </div>
            <div class="flex">
              <div class="flex-grow">
                <div class="column">
                  <label>
                    <br />
                  </label>
                  <label>Fuel Control</label>
                </div>
                <div class="column">
                  <label>
                    <h5>Condition</h5>
                  </label>
                  <select
                    required
                    v-model="heatingEquipment.fuelControl.condition"
                    :style="{'background-color': effectConditionActiveColor(heatingEquipment.fuelControl.condition)}"
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
                  v-model="heatingEquipment.fuelControl.comment"
                  @blur="onSubmit()"
                ></textarea>
              </div>
              <div class="photo-container">
                <div v-for="(pictureInput, index) in heatingSystemPhotos" :key="index">
                  <div
                    v-if="pictureInput.inspectionSubSegment == 'fuelControl' && pictureInput.id == heatingEquipment.id"
                  >
                    <picture-input
                      @change="onChangePicture(pictureInput.fileName, pictureInput.inspectionSubSegment, heatingEquipment.id)"
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
                        pictureInput.fileName, pictureInput.fileUrl, pictureInput.inspectionSubSegment, heatingEquipment.id
                        )"
                    >Remove</button>
                  </div>
                </div>
                <button
                  type="button"
                  @click="onAddNewPictureModal('fuelControl', heatingEquipment.id)"
                >Add New</button>
              </div>
            </div>
            <div class="flex">
              <div class="flex-grow">
                <div class="column">
                  <label>
                    <br />
                  </label>
                  <label>Main House Flue</label>
                </div>
                <div class="column">
                  <label>
                    <h5>Condition</h5>
                  </label>
                  <select
                    required
                    v-model="heatingEquipment.mainHouseFlue.condition"
                    :style="{'background-color': effectConditionActiveColor(heatingEquipment.mainHouseFlue.condition)}"
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
                  v-model="heatingEquipment.mainHouseFlue.comment"
                  @blur="onSubmit()"
                ></textarea>
              </div>
              <div class="photo-container">
                <div v-for="(pictureInput, index) in heatingSystemPhotos" :key="index">
                  <div
                    v-if="pictureInput.inspectionSubSegment == 'mainHouseFlue' && pictureInput.id == heatingEquipment.id"
                  >
                    <picture-input
                      @change="onChangePicture(pictureInput.fileName, pictureInput.inspectionSubSegment, heatingEquipment.id)"
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
                        pictureInput.fileName, pictureInput.fileUrl, pictureInput.inspectionSubSegment, heatingEquipment.id
                        )"
                    >Remove</button>
                  </div>
                </div>
                <button
                  type="button"
                  @click="onAddNewPictureModal('mainHouseFlue', heatingEquipment.id)"
                >Add New</button>
              </div>
            </div>
            <div v-if="heatingSystem.heatingEquipments.length > 1">
              <button
                type="button"
                @click="onDeleteHeatingSystem(heatingEquipment.id)"
              >Delete Heating System {{index+1}}</button>
            </div>
          </div>
          <div>
            <button type="button" @click="addNewHeatingSystem()">Add New Heater System</button>
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
      heatingSystem: {
        heatingEquipments: [
          {
            id: this.generateRandomNum(),
            type: "",
            location: "",
            fuelSource: "",
            fuelSourceCapacity: {
              value: "",
              unit: ""
            },
            burnerOrHeatExchanger: {
              condition: "",
              comment: ""
            },
            pumpOrBlowerFan: {
              condition: "",
              comment: ""
            },
            combustionAir: {
              condition: "",
              comment: ""
            },
            flue: {
              condition: "",
              comment: ""
            },
            ventsAndPlenum: {
              condition: "",
              comment: ""
            },
            airFilters: {
              condition: "",
              comment: ""
            },
            thermostatLocation: "",
            thermostat: {
              condition: "",
              comment: ""
            },
            fuelControl: {
              condition: "",
              comment: ""
            },
            mainHouseFlue: {
              condition: "",
              comment: ""
            }
          }
        ]
      },
      typesOfHeatingEquipment: [
        "Furnace",
        "Boiler",
        "Heat pump",
        "Gas-Fired Space Heater",
        "Unvented Gas-Fired Heater",
        "Electric Space Heaters",
        "Wood-Burning and Pellet Stoves",
        "Fireplaces",
        "Combined heat and power",
        "Ductless, Mini-Split, Multi-Split",
        "Radiant floor heat",
        "Solar heating"
      ],
      copyOfInitialHeatingEquipment: "", //This is for a template when adding to this.heatingSystem.heatingEquipments
      heatingEquipmentSubSegments: [
        "mainHeatingEquipment",
        "burnerOrHeatExchanger",
        "pumpOrBlowerFan",
        "combustionAir",
        "flue",
        "ventsAndPlenum",
        "airFilters",
        "thermostatLocation",
        "fuelControl",
        "mainHouseFlue"
      ],
      minNumOfPicObj: 2,
      heatingSystemPhotos: []
    };
  },

  methods: {
    //To initialize the this.heatingSystemPhotos
    populateInitialPhotosArray() {
      const populatedArray = [];
      this.heatingEquipmentSubSegments.forEach(item => {
        for (let i = 0; i < this.minNumOfPicObj; i++) {
          const pictureObj = this.createPictureInputObj(item);
          pictureObj.id = this.copyOfInitialHeatingEquipment.id;
          populatedArray.push(pictureObj);
        }
      });
      this.heatingSystemPhotos = populatedArray;
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

    addNewHeatingSystem() {
      this.copyOfInitialHeatingEquipment.id = this.generateRandomNum();

      for (let i = 0; i < this.minNumOfPicObj; i++) {
        for (let element of this.heatingEquipmentSubSegments) {
          const pictureObj = this.createPictureInputObj(element);
          pictureObj.id = this.copyOfInitialHeatingEquipment.id;
          this.heatingSystemPhotos.push(pictureObj);
        }
      }
      this.heatingSystem.heatingEquipments.push(
        JSON.parse(JSON.stringify(this.copyOfInitialHeatingEquipment))
      );
      this.onSubmit();
    },

    onSubmit() {
      const formData = {
        heatingSystem: this.heatingSystem
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

    onChangePicture(fileName, inspectionSubSegment, id) {
      if (id) {
        //So that this.heatingSystem.heatingEquipments array will be saved first
        this.onSubmit();
      }
      const picture = event.target.result;
      const blob = base64ToBlob(picture);

      let formData = new FormData();
      formData.append("fileData", blob, fileName);
      formData.append("id", id);
      axios
        .post(
          `/home_inspection_reports/pictures/heatingSystem/${inspectionSubSegment}/${this.jobId}`,
          formData
        )
        .then(res => {
          console.log(res.data);
          console.log(this.heatingSystem);
          //Note: this.heatingSystem.heatingSystemPhotosInfo is not initialized in the data instance
          this.heatingSystem.heatingSystemPhotosInfo = res.data.photosInfoArray;
          const updatedArray = this.heatingSystemPhotos.map(item => {
            if (item.fileName == fileName) {
              item.dataUrl = picture;
              item.contentType = blob.type;
              item.fileUrl = res.data.fileUrl;
            }
            return item;
          });
          this.heatingSystemPhotos = updatedArray;
        })
        .catch(error => console.log(error));
    },

    onRemovePictureModal(fileName, fileUrl, inspectionSubSegment, id) {
      const removePictureModal = () => {
        let newPhotoArray = [];
        this.heatingSystemPhotos.forEach(item => {
          if (fileName !== item.fileName) {
            newPhotoArray.push(item);
          }
        });
        this.heatingSystemPhotos = newPhotoArray;

        //Check the number of modals left for that particular inspectionSubSegment
        //If less than the this.minNumOfPicObj then add new one
        const arrayOfSpecificModalsLeft = [];
        this.heatingSystemPhotos.forEach(element => {
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
          this.heatingSystemPhotos.push(newPicObj);
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
          `/home_inspection_reports/deletePictures/heatingSystem/${inspectionSubSegment}/${fileName}/${this.jobId}`,
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
      this.heatingSystemPhotos.push(newPictureObject);
    },

    //Deletes the heating system from this.heatingSystemPhotos array and its picture modals
    onDeleteHeatingSystem(id) {
      //first delete all its picture modals
      const array = [];
      this.heatingSystemPhotos.forEach(item => {
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
      //Then remove the specific heating system from the array
      this.heatingSystem.heatingEquipments.splice(item => {
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
    this.copyOfInitialHeatingEquipment = JSON.parse(
      JSON.stringify(this.heatingSystem.heatingEquipments[0])
    );
    //To populate the heatingSystemPhotos array
    this.populateInitialPhotosArray();

    //Populate this.heatingSystem json with data from backend
    axios
      .get(`/home_inspection_reports/${jobId}`)
      .then(res => {
        if (res.data.heatingSystem.heatingEquipments.length) {
          this.heatingSystem = res.data.heatingSystem;
        }
      })
      .catch(error => {
        console.log(error.response);
      });

    //Get the pictures from backend
    axios
      .get(`/home_inspection_reports/heatingSystem/${jobId}`)
      .then(res => {
        console.log(res.data);
        //modifies the response data before stting to this.heatingSystemPhotos array
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

        this.heatingSystemPhotos = modifiedData;

        //Create an array of the unique heater system ids
        const idsOfHeatingSystemsPresent = this.heatingSystem.heatingEquipments.map(
          item => {
            return item.id;
          }
        );
        //Loop thru the ids array and this.heatingSystemPhotos to count the no. of pic objects present for each heating system
        idsOfHeatingSystemsPresent.forEach(id => {
          this.heatingEquipmentSubSegments.forEach(subSegment => {
            let count = 0;
            this.heatingSystemPhotos.forEach(element => {
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
                this.heatingSystemPhotos.push(picObj);
              }
            }
          });
        });
        console.log(this.heatingSystemPhotos);
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
.tittle {
  flex: 1;
}
.flexbox {
  display: flex;
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