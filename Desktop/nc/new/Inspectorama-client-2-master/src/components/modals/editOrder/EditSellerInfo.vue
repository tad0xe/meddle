<template>
  <div>
    <div class="modal-backdrop" @click="close">
      <div class="modal" @click.stop>
        <div class="modal-header"> 
          <div class="modal-header-text">{{$t('modals.editSellerInfo.title')}}</div>
          <div class="btn-close" @click="close()"> 
            <i class="fa fa-close"></i>
          </div>
        </div>
        <div class="modal-body">
          <form class="modal-content" @submit.prevent="onSubmit()">
            <div class="column" :class="{invalid:  $v.sellerFirstName.$error}">
              <label>{{$t('modals.editSellerInfo.sellerFirstName')}}:</label>
              <input
                type="text"
                v-model="sellerFirstName"
                :placeholder="$t('modals.editSellerInfo.sellerFirstName')"
              />
              <transition name="shake">
                <span
                  v-if="!$v.sellerFirstName.required && $v.sellerFirstName.$error"
                >{{$t('modals.editSellerInfo.validationError.sellerFirstNameRequired')}}</span>
              </transition>
            </div>
            <div class="column" :class="{invalid:  $v.sellerLastName.$error}">
              <label>{{$t('modals.editSellerInfo.sellerLastName')}}:</label>
              <input
                type="text"
                v-model="sellerLastName"
                :placeholder="$t('modals.editSellerInfo.sellerLastName')"
              />
              <transition name="shake">
                <span
                  v-if="!$v.sellerLastName.required && $v.sellerLastName.$error"
                >{{$t('modals.editSellerInfo.validationError.sellerLastNameRequired')}}</span>
              </transition>
            </div>
            <div class="column" :class="{invalid:  $v.sellerEmailId.$error}">
              <label>{{$t('modals.editSellerInfo.sellerEmail')}}:</label>
              <input
                type="email"
                v-model="sellerEmailId"
                :placeholder="$t('modals.editSellerInfo.sellerEmail')"
              />
              <transition name="shake">
                <span
                  v-if="!$v.sellerEmailId.email"
                >{{$t('modals.editSellerInfo.validationError.invalidEmail')}}</span>
                <span
                  v-if="!$v.sellerEmailId.required && $v.sellerEmailId.$error"
                >{{$t('modals.editSellerInfo.validationError.sellerEmailRequired')}}</span>
              </transition>
            </div>
            <div class="column">
              <div
                :class="{invalid:  $v.sellerMobileNum.countryCode.$error || $v.sellerMobileNum.phoneNumber.$error}"
              >
                <label>{{$t('modals.editSellerInfo.sellerMobileNum')}}:</label>
              </div>
              <div class="flex">
                <div
                  class="dialing-code"
                  :class="{invalid:  $v.sellerMobileNum.countryCode.$error}"
                >
                  <input
                    type="text"
                    v-model="sellerMobileNum.countryCode"
                    :placeholder="$t('modals.editSellerInfo.intCode')"
                  />
                </div>
                <div
                  class="phone-number"
                  :class="{invalid:  $v.sellerMobileNum.phoneNumber.$error}"
                >
                  <input
                    type="number"
                    v-model="sellerMobileNum.phoneNumber"
                    :placeholder="$t('modals.editSellerInfo.sellerMobileNum')"
                  />
                </div>
              </div>
              <transition name="shake">
                <span
                  v-if="!$v.sellerMobileNum.countryCode.required && $v.sellerMobileNum.countryCode.$error || !$v.sellerMobileNum.phoneNumber.required && $v.sellerMobileNum.phoneNumber.$error"
                >{{$t('modals.editSellerInfo.validationError.sellerMobilenumRequired')}}</span>
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
import { required, email } from "vuelidate/lib/validators";
import axios from "axios";
export default {
  props: {
    sellerInfo: {}
  },
  data() {
    return {
      isSellerInfo: true,
      sellerFirstName: "",
      sellerLastName: "",
      sellerEmailId: "",
      sellerMobileNum: {
        countryCode: "",
        phoneNumber: ""
      }
    };
  },
  validations() {
    return {
      sellerFirstName: {
        required
      },
      sellerLastName: {
        required
      },
      sellerEmailId: {
        required,
        email
      },
      sellerMobileNum: {
        countryCode: {
          required
        },
        phoneNumber: {
          required
        }
      }
    };
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

      const sellerData = {
        sellerInfo: {
          isSellerInfo: true,
          sellerFirstName: this.sellerFirstName,
          sellerLastName: this.sellerLastName,
          sellerEmailId: this.sellerEmailId,
          sellerMobileNum: this.sellerMobileNum
        }
      };
      // this.$store.dispatch("orders/updateOrderInfo", sellerData);

      axios
        .patch(
          `/orders/changeOrderInfo/sellerInfo/${this.$route.params.orderId}`,
          sellerData
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
    this.sellerFirstName = this.sellerInfo.sellerFirstName;
    this.sellerLastName = this.sellerInfo.sellerLastName;
    this.sellerEmailId = this.sellerInfo.sellerEmailId;
    this.sellerMobileNum.countryCode = this.sellerInfo.sellerMobileNum.countryCode;
    this.sellerMobileNum.phoneNumber = this.sellerInfo.sellerMobileNum.phoneNumber;
  }
};
</script>





