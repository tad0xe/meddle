<template>
  <div>
    <div class="modal-backdrop" @click="close">
      <div class="modal" @click.stop>
        <div class="modal-header">
          <div class="modal-header-text">{{$t('editQuoteHomeDescription.title')}}</div>
          <div class="btn-close" @click="close()">
            <i class="fa fa-close"></i>
          </div>
        </div>
        <div class="modal-body">
          <form class="modal-content" @submit.prevent="onSubmit()">
            <div class="column" :class="{invalid: $v.typeOfHome.$error}">
              <label>Type of Home *</label>
              <select v-model="typeOfHome" required>
                <option
                  :value="null"
                  disabled
                  selected
                  hidden
                >{{$t('homeInspection.form.placeholder.typeOfHome')}}</option>
                <option
                  v-for="(typeOfHomeObj, index) in typeOfHomeOptions"
                  :value="typeOfHomeObj.value"
                  :key="index"
                >{{typeOfHomeObj.type}}</option>
                <!-- <option value="Apartment Block">Apartment block</option>
                <option value="Block of Flats ">Block of flats</option>
                <option value="Bungalow">Bungalow</option>
                <option value="Condominium">Condominium</option>
                <option value="Duplex">Duplex</option>
                <option value="House ">House</option>
                <option value="Townhouse">Townhouse</option>
                <option value="Condominium">Condominium</option>
                <option value="Unit ">Unit</option>
                <option value="Villa">Villa</option>
                <option value="Orphanage">Orphanage</option>-->
              </select>
              <transition name="shake">
                <span
                  v-if="!$v.typeOfHome.required && $v.typeOfHome.$error"
                >Type of home is required.</span>
              </transition>
            </div>
            <div class="column" :class="{invalid: $v.numberOfRooms.$error}">
              <label>Number of Bedrooms *</label>
              <select v-model="numberOfRooms" required>
                <option :value="null" disabled selected hidden>Number of bedrooms</option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
              <transition name="shake">
                <span
                  v-if="!$v.numberOfRooms.required && $v.numberOfRooms.$error"
                >No. of bedrooms is required.</span>
              </transition>
            </div>
            <div>
              <button type="submit" @click.prevent="onSubmit()" class="send-btn">Save</button>
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
import { transformObjectToValueTypeArray } from "../../../utility";
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
      typeOfHomeOptions: transformObjectToValueTypeArray(
        this.$t("homeInspection.form.typeOfHomeOptions")
      ),
      typeOfHome: null,
      numberOfRooms: null,
      country: null
    };
  },
  validations: {
    typeOfHome: {
      required
    },
    numberOfRooms: {
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

      const homeDescData = {
        typeOfHome: this.typeOfHome,
        numberOfRooms: this.numberOfRooms,
        country: this.country
      };

      axios
        .patch(
          `/quotes/home_description/${this.$route.params.quoteId}`,
          homeDescData
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
  computed: {},
  mounted() {
    this.typeOfHome = this.orderQuote.inspectedItemInfo.typeOfHome;
    this.numberOfRooms = this.orderQuote.inspectedItemInfo.numberOfRooms;
    this.country = this.orderQuote.country;
  }
};
</script>
