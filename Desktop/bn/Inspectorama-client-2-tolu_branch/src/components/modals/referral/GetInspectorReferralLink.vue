<template>
  <div>
    <div class="modal-backdrop" @click="close">
      <div class="modal" @click.stop>
        <div class="modal__header">
          <div class="btn-close-upper" @click="close()">x</div>
        </div>
        <div class="modal-body">
          <h3>{{$t('getInspectorReferralLink.copyLink')}}</h3>
          <p
            class="copy-success-message"
            v-if="copySuccess"
          >{{$t('getInspectorReferralLink.linkCopied')}}</p>
          <center>
            <input class="text-input" type="text" :value="referralLink" readonly />
          </center>
          <div>
            <center>
              <button
                type="button"
                class="copylink-btn"
                v-clipboard:copy="referralLink"
                v-clipboard:success="onCopy"
                v-clipboard:error="onError"
              >{{$t("buttons.copyLink")}}</button>
            </center>
          </div>
        </div>
        <footer class="modal-footer"></footer>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inspectorId: "",
      referralLink: "",
      copySuccess: false
    };
  },
  methods: {
    close() {
      this.$emit("close");
    },
    onCopy(e) {
      this.copySuccess = true;
      setTimeout(() => {
        this.copySuccess = false;
      }, 2000);
    },
    onError(e) {
    }
  },
  created() {
    this.inspectorId = localStorage.getItem("userId");
    this.referralLink = `www.inspectorama.com/inspector/?referrer=${this.inspectorId}`;
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
  color: black;
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
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  font-family: sans-serif, Arial, Helvetica;
  padding: 15px;
  width: 600px;
}

.modal-footer {
  border-top: 1.5px solid #eeeeee;
  justify-content: flex-end;
  font-size: 13px;
}

h3 {
  color: blue;
}

.modal-body {
  font-size: 13px;
  padding-bottom: 10px;
}

.btn-close-upper {
  float: right;
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

.text-input {
  padding: 7px;
  margin-top: 7px;
  margin-bottom: 7px;
  border-radius: 3px;
  outline: none;
  border: 1px solid #b6b1b1;
  width: 100%;
}

.copylink-btn {
  background-color: #2bc4e2;
  color: white;
  padding: 10px 20px;
  margin: 8px 0;
  border: none;
  outline: none;
  cursor: pointer;
  width: 250px;
  border-radius: 40px;
  font-size: 16px;
}

.copylink-btn:hover {
  background-color: #07b9dd;
}

.copy-success-message {
  color: green;
}

/* For mobile: */
@media only screen and (max-width: 620px) {
  .modal-backdrop {
    padding: 5px;
  }
  .modal {
    padding: 5px;
    border-radius: 5px;
    width: 100%;
  }
  @media only screen and (max-width: 380px) {
    .copylink-btn {
      width: 200px;
    }
  }
}
</style>

