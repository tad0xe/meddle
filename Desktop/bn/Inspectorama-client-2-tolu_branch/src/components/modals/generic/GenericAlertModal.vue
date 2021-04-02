<template>
  <div class="modal-backdrop" @click="close">
    <div class="modal" @click.stop>
      <div class="modal-header">
        <div class="moda-header-content">{{$t("generic.Alert")}}</div>
        <div class="btn-close-upper" @click="close()">x</div>
      </div>
      <div class="modal-body">
        <form class="modal-content">
          <p>{{currentAlertMessage}}</p>
          <div>
            <button type="button" class="cancel-btn" @click.prevent="close()">OK</button>
          </div>
        </form>
      </div>
      <footer class="modal-footer"></footer>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    currentAlertMessage: ""
  },
  data() {
    return {};
  },
  methods: {
    close() {
      this.$emit("close");
    },
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal {
  background: #ffffff;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  font-family: sans-serif, Arial, Helvetica;
  padding: 15px;
  width: 360px;
}

.modal-header {
  display: flex;
  align-items: center;
}

.moda-header-content {
  flex: 1;
  font-size: 21px;
  font-weight: bold;
}

.btn-close-upper {
  font-weight: bold;
  border: 1.5px solid;
  cursor: pointer;
  height: 20px;
  width: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn-close-upper:hover {
  color: red;
}

p {
  margin-top: 8px;
  margin-bottom: 8px;
  font-size: 15px;
  color: red;
}

.modal-footer {
  border-top: 1.5px solid #eeeeee;
}

.modal-body {
  padding-bottom: 10px;
}

.cancel-btn,
.delete-btn {
  color: white;
  padding: 10px 20px;
  margin: 8px 0;
  outline: none;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
  border-radius: 20px;
  font-size: 16px;
}

.cancel-btn {
  background-color: #2bc4e2;
}
.delete-btn {
  opacity: 0.75;
  background-color: red;
}

.cancel-btn:hover,
.delete-btn:hover {
  opacity: 1;
}
</style>


