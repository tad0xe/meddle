<template>
  <div>
    <div class="column">
      <label>{{$t("paymentOptions.label")}}</label>
      <select v-model="payOption" @change="onChangePayOption">
        <option value="card">{{$t("paymentOptions.payByCard")}}</option>
        <option value="invoice">{{$t("paymentOptions.payByInvoice")}}</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  components: {},

  data() {
    return {
      payOption: ""
    };
  },
  methods: {
    onChangePayOption(e) {
      this.payOption = e.target.value;
      this.$emit("onSelectPayOption", this.payOption);
    }
  }
};
</script>

<style scoped>
.column {
  width: 100%;
  display: inline-block;
}

label {
  font-size: 13px;
  display: inline-block;
}

select {
  font-size: 13px;
  padding: 9px;
  margin-top: 5px;
  border-radius: 3px;
  font-weight: bold;
  outline: none;
  width: 100%;
  border: 1px solid #ccc;
  background-color: aliceblue;
}

select {
  padding: 8px 5px;
}

select:invalid {
  color: #777777;
  font-weight: lighter;
}

option {
  color: black;
}

select:focus {
  border: 1px solid #212259;
  background-color: rgb(232, 240, 254);
}
</style>
