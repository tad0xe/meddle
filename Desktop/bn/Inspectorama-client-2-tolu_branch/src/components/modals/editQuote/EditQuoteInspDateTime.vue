<template>
  <div>
    <div class="modal-backdrop" @click="close">
      <div class="modal" @click.stop>
        <div class="modal-header">
          <div class="modal-header-text">{{$t('modals.editQuoteInspDateTime.title')}}</div>
          <div class="btn-close" @click="close()">
            <i class="fa fa-close"></i>
          </div>
        </div>
        <div class="modal-body">
          <form class="modal-content" @submit.prevent="onSubmit()">
            <div class="column" :class="{invalid: $v.inspectionDateTime.$error}">
              <label>{{inspectionDateTimeLabel}}</label>
              <Datepicker
                class="date-picker"
                v-model="inspectionDateTime"
                :lang="setDatepickerLang"
                type="datetime"
                :format="setInspectionDateTimeFormat"
                :minute-step="30"
                :time-picker-options="{ start: '06:00', step: '00:30', end: '17:00'}"
                :placeholder="inspectionDateTimeLabel"
                :disabled-date="(date)=>date < new Date(currentTimeInSelectedCity).setHours(0, 0, 0, 0)"
                :disabled-time="(time)=>time < currentTimeInSelectedCity"
              ></Datepicker>
              <transition name="shake">
                <span
                  v-if="!$v.inspectionDateTime.required && $v.inspectionDateTime.$error"
                >{{$t('vehicleInspection.form.validationError.dateTimeRequired')}}</span>
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
import { mapState, mapActions, mapMutations, mapGetters } from "vuex";
import { currentTimeInCity } from "../../../utility";
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
      inspectionDateTime: ""
    };
  },
  validations: {
    inspectionDateTime: {
      required
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

      const dateTimeData = {
        inspectionDateTime: this.inspectionDateTime
      };
      axios
        .patch(
          `/quotes/inspection_datetime/${this.$route.params.quoteId}`,
          dateTimeData
        )
        .then(res => {
          // this.$router.go();
          this.close();
          this.$emit("submitted");
        })
        .catch(error => {
          console.log(error.response.data);
        });
    }
  },
  computed: {
    showModels() {
      if (this.vehicleBrand == "Volkswagen") {
        return this.vehicleModels.volkswagen;
      }
      if (this.vehicleBrand == "Mercedes Benz") {
        return this.vehicleModels.mercedesBenz;
      }
      if (this.vehicleBrand == "Volvo") {
        return this.vehicleModels.volvo;
      }
      if (this.vehicleBrand == "BMW") {
        return this.vehicleModels.bmw;
      }
    },

    inspectionDateTimeLabel() {
      return `${this.$t("modals.editQuoteInspDateTime.label", {
        city: this.orderQuote.city
      })}`;
    },
    currentTimeInSelectedCity() {
      return currentTimeInCity(this.orderQuote.cityTimezone);
    },
    setInspectionDateTimeFormat() {
      return this.$t("datepicker.inspectionDateTimeFormat");
    },
    setDatepickerLang() {
      return {
        formatLocale: {
          months: this.$t("datepicker.months"),
          monthsShort: this.$t("datepicker.monthsShort"),
          weekdaysMin: this.$t("datepicker.weekdaysMin")
        }
      };
    }
  },
  created() {
    this.inspectionDateTime = this.orderQuote.inspectionDateTime;
  }
};
</script>

