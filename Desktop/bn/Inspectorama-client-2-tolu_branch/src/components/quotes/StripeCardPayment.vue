<template>
  <div>
    <card
      class="stripe-card"
      :class="{ complete }"
      :stripe="stripeKey"
      :options="stripeOptions"
      @change="complete = $event.complete"
    />
    <div class="ssl">
      <small>This is a secure 128-SSL encrypted connection. We don’t store any sensitive data on our servers.</small>
    </div>
  </div>
</template>

<script>
import { Card, createToken } from "vue-stripe-elements-plus";
export default {
  components: { Card },
  props: {
    isOrderPlaced: false
  },
  watch: {
    isOrderPlaced() {
      if (this.isOrderPlaced == true) {
        this.createToken();
      }
    }
  },
  data() {
    return {
      stripeKey: process.env.VUE_APP_STRIPE_PUBLISHABLE_KEY,
      complete: false,
      stripeOptions: {
        // see https://stripe.com/docs/stripe.js#element-options for details
      }
    };
  },
  methods: {
    createToken() {
      // createToken returns a Promise which resolves in a result object with
      // either a token or an error key.
      // See https://stripe.com/docs/api#tokens for the token object.
      // See https://stripe.com/docs/api#errors for the error object.
      // More general https://stripe.com/docs/stripe.js#stripe-create-token.
      createToken().then(data => {
        this.$emit("successfulToken", data.token)
      });
    }
  },

  mounted() {},
  beforeDestroy() {
    //   card.destroy(this.$refs.card);
  }
};
</script>
<style scoped>
.stripe-card {
  width: 100%;
  border: 1px solid grey;
}
.stripe-card.complete {
  border-color: green;
}
.ssl {
  clear: left;
}
</style>