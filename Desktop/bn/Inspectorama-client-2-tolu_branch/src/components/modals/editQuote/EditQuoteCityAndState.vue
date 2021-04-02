<template>
  <div>
    <div class="modal-backdrop" @click="close">
      <div class="modal" @click.stop>
        <div class="modal-header">
          <div class="modal-header-text">{{$t('modals.editQuoteCityAndState.title')}}</div>
          <div class="btn-close" @click="close()">
            <i class="fa fa-close"></i>
          </div>
        </div>
        <div class="modal-body">
          <form class="modal-content" @submit.prevent="onSubmit()">
            <div class="row">
              <transition name="shake">
                <div v-if="locationError" style="color: red; font-size: 12px">{{locationError}}</div>
              </transition>
              <div class="column" :class="{invalid: $v.zipCode.$error}">
                <label>{{zipOrPostCode}}</label>
                <input type="text" :placeholder="zipOrPostCode" v-model.trim="zipCode" />
                <transition name="shake">
                  <span
                    v-if="!$v.zipCode.required && $v.zipCode.$error"
                  >{{$t('vehicleInspection.form.validationError.zipCodeRequired')}}</span>
                </transition>
              </div>
              <div v-if="!locationError" style="font-size: 13px">
                <span>{{country}}</span>,
                <span>{{state}}</span>,
                <span>{{city}}</span>
              </div>
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
import countriesPresentIn from "../../../mockData/countriesPresentIn";
import { required } from "vuelidate/lib/validators";
import { mapState, mapActions, mapMutations, mapGetters } from "vuex";
import axios from "axios";
export default {
  props: {
    orderQuote: {}
  },
  data() {
    return {
      countriesPresentIn: countriesPresentIn,
      state: null,
      city: null,
      country: null,
      zipCode: null,
      cityTimeZoneId: null,
      geoCoordinates: null,
      locationError: ""
    };
  },

  watch: {
    zipCode(val) {
      this.getLocationDetails();
    }
  },

  validations: {
    zipCode: {
      required
    }
  },
  methods: {
    close() {
      this.$emit("close");
    },

    getLocationDetails() {
      if (this.country && this.zipCode) {
        axios
          .post("/quotes/get_location_details", {
            country: this.country,
            zipCode: this.zipCode
          })
          .then(location => {
            this.locationError = "";
            this.city = location.data.city;
            this.state = location.data.state;
            this.cityTimeZoneId = location.data.timeZoneId;
            this.geoCoordinates = location.data.geoCoordinates;
          })
          .catch(error => {
            this.locationError = error.response.data;
          });
      }
    },

    onSubmit() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }

      const inspectionData = {
        state: this.state,
        city: this.city,
        zipCode: this.zipCode,
        cityTimezone: this.cityTimeZoneId,
        geoCoordinates: this.geoCoordinates
      };

      axios
        .patch(
          `/quotes/inspected_item_location/${this.$route.params.quoteId}`,
          inspectionData
        )
        .then(res => {
          this.$emit("submitted");
          this.close();
        })
        .catch(error => {
          console.log(error.response.data);
        });
    }
  },
  computed: {
    zipOrPostCode() {
      if (this.country == "United States") {
        return `${this.$t("vehicleInspection.form.zipCode")}`;
      } else {
        return `${this.$t("vehicleInspection.form.postCode")}`;
      }
    }
  },
  mounted() {
    this.country = this.orderQuote.country;
    this.city = this.orderQuote.city;
    this.state = this.orderQuote.state;
    this.zipCode = this.orderQuote.zipCode;
    this.cityTimeZoneId = this.orderQuote.cityTimeZoneId;
    this.geoCoordinates = this.orderQuote.geoCoordinates;

    const selectedCountry = [];
    this.countriesPresentIn.forEach(item => {
      if (item.country == this.country) {
        selectedCountry.push(item);
        return;
      }
    });
  }
};
</script>

