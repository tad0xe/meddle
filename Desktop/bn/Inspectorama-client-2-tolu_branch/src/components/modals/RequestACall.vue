<template>
  <div>
    <div class="modal-backdrop" @click="close">
      <div class="modal" @click.stop>
        <div class="modal-header">
          <div class="modal-header-text">{{$t("requestACall.header")}}</div>
          <div class="btn-close" @click="close()">
            <i class="fa fa-close"></i>
          </div>
        </div>
        <div class="modal-body">
          <form class="modal-content">
            <div class="column" :class="{invalid: $v.fullName.$error}">
              <label>{{$t("requestACall.fullName")}} *</label>
              <input
                class="text-input"
                type="text"
                :placeholder="$t('requestACall.placeholder.fullName')"
                required
                v-model="fullName"
              />
              <transition name="shake">
                <span
                  v-if="!$v.fullName.required && $v.fullName.$error"
                >{{$t("requestACall.validationError.fullNameRequired")}}</span>
              </transition>
            </div>
            <div class="column">
              <div :class="{invalid:  $v.dialingCode.$error || $v.phoneNumber.$error}">
                <label>{{$t("requestACall.phoneNumber")}} *</label>
              </div>
              <div class="flex">
                <div class="dialing-code">
                  <select v-model="dialingCode" required>
                    <option value selected disabled hidden>- - - - -</option>
                    <option
                      v-for="(code, index) in getAbridgedDialingCodeList()"
                      :key="index"
                      :value="code"
                    >{{code}}</option>
                  </select>
                </div>
                <div class="phone-number">
                  <input
                    class="text-input"
                    type="text"
                    :placeholder="$t('requestACall.placeholder.phoneNumber')"
                    required
                    v-model="phoneNumber"
                  />
                </div>
              </div>
              <transition name="shake">
                <span
                  v-if="!$v.dialingCode.required && $v.dialingCode.$error || !$v.phoneNumber.required && $v.phoneNumber.$error"
                >{{$t("requestACall.validationError.phoneNumberRequired")}}</span>
              </transition>
            </div>
            <div class="column" :class="{invalid: $v.category.$error}">
              <label>{{$t("requestACall.category")}} *</label>
              <select v-model="category" required>
                <option value selected disabled hidden>{{$t("requestACall.placeholder.category")}}</option>
                <option value="vehicle">{{$t("dbDictionary.typeOfInspection.vehicle")}}</option>
                <option value="home">{{$t("dbDictionary.typeOfInspection.home")}}</option>
              </select>
              <transition name="shake">
                <span
                  v-if="!$v.category.required && $v.category.$error"
                >{{$t("requestACall.validationError.categoryRequired")}}</span>
              </transition>
            </div>
            <div>
              <button type="submit" class="send-btn" @click.prevent="onSubmit()">{{$t("buttons.sendRequest")}}</button>
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
import { getAbridgedDialingCodeList } from "../../utility";
import dialingCodesList from "../../mockData/dialingCodesList";
import axios from "axios";
export default {
  data: function() {
    return {
      getAbridgedDialingCodeList,
      fullName: "",
      dialingCode: "",
      phoneNumber: "",
      category: ""
    };
  },
  validations() {
    return {
      fullName: {
        required
      },
      dialingCode: {
        required
      },
      phoneNumber: {
        required
      },
      category: {
        required
      }
    };
  },
  components: {},
  methods: {
    close() {
      this.$emit("close");
    },

    onSubmit() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }

      const formData = {
        fullName: this.fullName,
        fullPhoneNumber: this.dialingCode + this.phoneNumber,
        category: this.category
      };

      axios.post("/users/create_call_request", formData).then(res => {
        this.close();
        this.$notify({
          group: "general",
          text: "Your request has been received. We will call you shortly"
        });
      });
    }
  },
  mounted() {
    const country = localStorage.getItem("country");
    this.dialingCode = dialingCodesList.find(
      item => item.country == country
    ).code;
  }
};
</script>

