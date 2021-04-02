<template>
  <div>
    <div class="modal-backdrop" @click="close">
      <div class="modal" @click.stop>
        <div class="modal-header">
          <div class="modal-header-text">{{$t('modals.editVehicleInfo.title')}}</div>
          <div class="btn-close" @click="close()">
            <i class="fa fa-close"></i>
          </div>
        </div>
        <div class="modal-body">
          <form class="modal-content" @submit.prevent="onSubmit()">
            <div class="column" :class="{invalid:  $v.VIN.$error}">
              <label>{{$t('modals.editVehicleInfo.VIN')}} *</label>
              <input
                placeholder="Enter Vehicle Identification Number (VIN)"
                type="text"
                v-model="VIN"
              />
              <transition name="shake">
                <span
                  v-if="!$v.VIN.required && $v.VIN.$error"
                >{{$t('modals.editVehicleInfo.vinIsRequired')}}</span>
              </transition>
            </div>
            <div>
              <button type="submit" class="send-btn">{{$t('buttons.save')}}</button>
            </div>
          </form>
        </div>
        <footer class="modal-footer"></footer>
      </div>
    </div>
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";
import axios from "axios";
export default {
  props: {
    oldVIN: ""
  },
  data: function() {
    return {
      VIN: ""
    };
  },
  validations: {
    VIN: {
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

      const vehicleData = {
        vehicleInfo: {
          VIN: this.VIN
        }
      };
      axios
        .patch(
          `/orders/changeOrderInfo/vehicleInfo/${this.$route.params.orderId}`,
          vehicleData
        )
        .then(res => {
          this.$emit("saved");
          this.close();
        })
        .catch(error => {
          console.log(error.response);
        });
    }
  },
  mounted() {
    this.VIN = this.oldVIN;
  }
};
</script>
