<template>
  <div class="modal-backdrop" @click="close">
    <div class="modal" @click.stop>
      <div class="modal__header">
        <div class="modal__header__content">Warning!</div>
        <div class="btn-close-upper" @click="close()">x</div>
      </div>
      <div class="modal-body">
        <form class="modal-content">
          <p>
            Are you sure you want to make this change? This change will lead to the suspension of your profile
            pending a review by us.
          </p>
          <div>
            <button type="button" class="cancel-btn" @click="close()">Cancel</button>
          </div>
          <div>
            <button type="button" class="submit-btn" @click="clickYes()">Yes</button>
          </div>
        </form>
      </div>
      <footer class="modal-footer"></footer>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: {
    editType: null
  },
  data: function() {
    return {};
  },
  methods: {
    close() {
      this.$emit("close");
    },
    clickYes() {
      this.$emit("clickYes", this.editType);
      this.close();
    }
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

.modal__header {
  display: flex;
  align-items: center;
}

.modal__header__content {
  flex: 1;
  font-size: 20px;
  color: darkred;
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
  margin-top: 5px;
  margin-bottom: 5px;
  color: red;
}

.modal-footer {
  border-top: 1.5px solid #eeeeee;
  justify-content: flex-end;
  font-size: 13px;
}

.modal-body {
  font-size: 13px;
  padding-bottom: 10px;
}

.cancel-btn,
.submit-btn {
  background-color: #2bc4e2;
  color: white;
  padding: 10px 20px;
  margin: 8px 0;
  outline: none;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
  border-radius: 40px;
  box-sizing: border-box;
  font-size: 16px;
}

.cancel-btn:hover {
  background-color: red;
}

.submit-btn:hover {
  /* background-color: #07b9dd; */
  background-color: green;
}

/* For mobile: */
@media only screen and (max-width: 380px) {
  .modal-backdrop {
    padding: 5px;
  }

  .modal__header__content {
    font-size: 19px;
  }

  .modal {
    padding: 5px;
    border-radius: 5px;
    width: 100%;
  }
}
</style>

