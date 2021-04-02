<template>
  <div>
    <div class="modal-backdrop" @click="close">
      <div class="modal" @click.stop>
        <div class="modal-header">
          <div class="modal-header-text">{{$t('modals.editQuoteVehicleDescription.title')}}</div>
          <div class="btn-close" @click="close()">
            <i class="fa fa-close"></i>
          </div>
        </div>
        <div class="modal-body">
          <form class="modal-content" @submit.prevent="onSubmit()">
            <div class="column" :class="{invalid: $v.typeOfVehicle.$error}">
              <label>{{$t('vehicleInspection.form.typeOfVehicle')}}</label>
              <select v-model="typeOfVehicle" required>
                <option
                  value
                  selected
                  disabled
                  hidden
                >{{$t('vehicleInspection.form.placeholder.typeOfVehicle')}}</option>
                <option
                  v-for="(vehicleType, index) in vehicleTypes"
                  :key="index"
                  :value="vehicleType.value"
                >{{vehicleType.type}}</option>
              </select>
              <transition name="shake">
                <span
                  v-if="!$v.typeOfVehicle.required && $v.typeOfVehicle.$error"
                >{{$t('vehicleInspection.form.validationError.vehicleTypeRequired')}}</span>
              </transition>
            </div>
            <div class="column" :class="{invalid: $v.vehicleBrand.$error}">
              <label>{{$t('vehicleInspection.form.vehicleBrand')}}</label>
              <select v-model="vehicleBrand" required>
                <option
                  value
                  selected
                  disabled
                  hidden
                >{{$t('vehicleInspection.form.placeholder.vehicleBrand')}}</option>
                <option v-for="(brand, index) in vehicleBrands" :key="index">{{brand.make}}</option>
              </select>
              <transition name="shake">
                <span
                  v-if="!$v.vehicleBrand.required && $v.vehicleBrand.$error"
                >{{$t('vehicleInspection.form.validationError.vehicleBrandRequired')}}</span>
              </transition>
            </div>
            <div class="column" :class="{invalid: $v.vehicleModel.$error}">
              <label>{{$t('vehicleInspection.form.vehicleModel')}}</label>
              <!-- <select  v-model="vehicleModel" required>
                <option value disabled selected hidden>Select Vehicle Model</option>
                <option v-for="(model, index) in showModels" :key="index">{{model}}</option>
              </select>-->
              <input
                type="text"
                v-model.trim="vehicleModel"
                name="VehicleModel"
                :placeholder="$t('vehicleInspection.form.placeholder.vehicleBrand')"
              />
              <transition name="shake">
                <span
                  v-if="!$v.vehicleModel.required && $v.vehicleModel.$error"
                >{{$t('vehicleInspection.form.validationError.vehicleModelRequired')}}</span>
              </transition>
            </div>
            <div class="column" :class="{invalid: $v.vehicleYear.$error}">
              <label>{{$t('vehicleInspection.form.vehicleYear')}}</label>
              <Datepicker
                class="date-picker"
                v-model="vehicleYear"
                lang="en"
                type="year"
                format="YYYY"
                :placeholder="$t('vehicleInspection.form.placeholder.vehicleYear')"
                :disabled-date="(date)=>date > Date.now()"
              ></Datepicker>
              <transition name="shake">
                <span
                  v-if="!$v.vehicleYear.required && $v.vehicleYear.$error"
                >{{$t('vehicleInspection.form.validationError.vehicleYearRequired')}}</span>
              </transition>
            </div>
            <div>
              <button
                type="submit"
                @click.prevent="onSubmit()"
                class="send-btn"
              >{{$t('buttons.save')}}</button>
            </div>
          </form>
        </div>
        <footer class="modal-footer"></footer>
      </div>
    </div>
  </div>
</template>

<script>
import Datepicker from "vue2-datepicker";
import { required } from "vuelidate/lib/validators";
import vehicleBrands from "../../../mockData/vehicleBrands";
import vehicleTypes from "../../../mockData/vehicleTypes";
import { mapState, mapActions, mapMutations, mapGetters } from "vuex";
import axios from "axios";
export default {
  components: {
    Datepicker
  },
  props: {
    orderQuote: ""
  },
  data() {
    return {
      typeOfVehicle: "",
      vehicleBrand: "",
      vehicleModel: "", 
      vehicleYear: "",
      vehicleTypes: vehicleTypes(this.$i18n.locale),
      vehicleBrands: []
    };
  },
  validations: {
    // typeOfVehicle: {
    //   required
    // },
    typeOfVehicle: {
      required
    },
    vehicleBrand: {
      required
    },
    vehicleModel: {
      required
    },
    vehicleYear: {
      required
    }
  },
  watch: {
    "$i18n.locale"(to, fro) {
      this.vehicleTypes = vehicleTypes(this.$i18n.locale);
    }
  },
  methods: {
    close() {
      this.$emit("close");
    },
    onSubmit() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }

      const vehicleDescData = {
        typeOfVehicle: this.typeOfVehicle,
        vehicleBrand: this.vehicleBrand,
        vehicleModel: this.vehicleModel,
        vehicleYear: this.vehicleYear
      };

      axios
        .patch(
          `/quotes/vehicle_description/${this.$route.params.quoteId}`,
          vehicleDescData
        )
        .then(res => {
          // this.$router.go();
          this.close();
          this.$emit("submitted");
        })
        .catch(error => {});
    }
  },
  mounted() {
    //sets the local vehicleBrands to the imported mock data
    this.vehicleBrands = vehicleBrands;
    this.typeOfVehicle = this.orderQuote.inspectedItemInfo.typeOfVehicle;
    this.vehicleBrand = this.orderQuote.inspectedItemInfo.vehicleBrand;
    this.vehicleModel = this.orderQuote.inspectedItemInfo.vehicleModel;
    this.vehicleYear = this.orderQuote.inspectedItemInfo.vehicleYear;
  }
};
</script>
