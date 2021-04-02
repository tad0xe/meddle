<template>
  <div>
    <div class="modal-backdrop" @click="close">
      <div class="modal" @click.stop>
        <div class="modal-header">
          <div class="modal-header-text">{{$t("generic.warning")}}!</div>
          <div class="btn-close" @click="close()">
            <i class="fa fa-close"></i>
          </div>
        </div>
        <div class="modal-body">
          <form class="modal-content">
            <p>{{$t("genericWarningModal.body", {typeOfAction, documentDescription})}}</p>
            <div>
              <button
                type="button"
                class="send-btn"
                @click.prevent="onClickDelete()"
              >{{typeOfAction | toCapitalizeFirstLetter}}</button>
              <button
                type="button"
                class="delete-btn"
                @click.prevent="close()"
              >{{$t("buttons.cancel")}}</button>
            </div>
          </form>
        </div>
        <footer class="modal-footer"></footer>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    documentDescription: "",
    typeOfAction: ""
  },
  data() {
    return {};
  },
  methods: {
    close() {
      this.$emit("close");
    },
    onClickDelete() {
      this.$emit("sureGoAhead");
    }
  }
};
</script>
