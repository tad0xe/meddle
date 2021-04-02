<template>
  <div>
    <div class="modal-backdrop" @click="close">
      <div class="modal" @click.stop>
        <div class="modal-header">
          <div class="modal-header-text">Edit Vehicle Information</div>
          <div class="btn-close" @click="close()">
            <i class="fa fa-close"></i>
          </div>
        </div>
        <div class="modal-body">
          <form class="modal-content" @submit.prevent="onSubmit()">
            <div class="column" :class="{invalid:  $v.VIN.$error}">
              <label>Vehicle Identification Number (VIN):</label>
              <input type="text" v-model="VIN" />
              <transition name="shake">
                <span
                  v-if="!$v.VIN.required && $v.VIN.$error"
                >Vehicle Identification Number (VIN) is required.</span>
              </transition>
            </div>
            <div>
              <button type="submit" class="send-btn">Save</button>
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
export default {
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
      console.log(vehicleData);
      this.$store.dispatch("orders/updateOrderInfo", vehicleData);
    }
  }
};
</script>
