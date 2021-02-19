<template>
  <div>
    <form class="modal">
      <div class="d-flex align-items-center">
        <h1 class="flex-grow-1 font-size-24">Forgot Password</h1>
        <div class="modal-close-icon" @click="handleClose">
          <i class="fa fa-close"></i>
        </div>
      </div>
      <br />
      <div class="d-flex white align-items-center border-radius-10 border-1 border-color-grey">
        <i
          class="fa fa-user border-right-1 grey border-top-left-radius-10 border-bottom-left-radius-10 font-size-22 padding-top-10 padding-bottom-10 padding-left-18 padding-right-16"
        ></i>
        <div class="flex-grow-1 text-center">
          <input
            class="input  font-size-16 border-0 focus-none"
            type="text"
            placeholder="E-mail Address"
          />
        </div>
      </div>
      <br />
      <div class="d-flex justify-content-center padding-top-20 padding-bottom-20">
        <button
          class="btn bg-black white font-size-16 padding-8 width-250 border-radius-10"
          type="submit"
        >
          Reset Password
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  methods: {
    handleClose() {
      this.$emit('close');
    },
  },
};
</script>

<style scoped></style>
