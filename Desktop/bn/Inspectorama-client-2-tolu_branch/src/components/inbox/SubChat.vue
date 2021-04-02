<template>
  <div>
    <form class="container" @submit.prevent="sendMessage">
      <div class="container-chat-box" ref="chatBoxContainer">
        <div v-if="!areMessages" class="start-conversation">
          <div class="start-conversation-content">
            <i class="fa fa-comments"></i>
            <h1>{{$t('subChat.startConversation')}}</h1>
          </div>
        </div>
        <div v-for="(chat, index) in allMessages" :key="index">
          <div class="date" style="clear: right" v-if="index == 0">
            <span>{{ chat.createdAt | showOnlyDate}}</span>
          </div>
          <div
            class="date"
            style="clear: right"
            v-if="(allMessages[index-1] !== undefined) && 
            getDayMonthYear(allMessages[index].createdAt) !== getDayMonthYear(allMessages[index-1].createdAt)"
          >
            <span>{{ chat.createdAt | showOnlyDate}}</span>
          </div>
          <div class="receiver" v-if="chat.meta.userId != userId">
            <div class="profile-picture">
              <div class="user-profile" v-if="!chat.meta.avatar">
                <span>{{chat.meta.initials}}</span>
              </div>
              <div v-if="chat.meta.avatar">
                <img :src="chat.meta.avatar" class="avatar" />
              </div>
            </div>
            <div class="name-message-group">
              <div class="fullname-role">
                <span>{{chat.meta.firstName}} {{chat.meta.lastName}} ({{chat.meta.role | toCapitalizeFirstLetter}})</span>
              </div>
              <div class="message-box">
                <div>
                  <span
                    class="download-file"
                    v-if="chat.attachment"
                    @click="downloadFile(chat.attachment.fileName, chat.attachment.fileUrl)"
                  >
                    <i class="fa fa-download"></i>
                    {{chat.attachment.fileName}}
                  </span>
                  <div>{{chat.messageBody}}</div>
                </div>
                <div class="time-ago float-left">
                  <span>{{chat.createdAt | showOnlyTime}}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="sender" v-if="chat.meta.userId == userId">
            <div class="name-message-group">
              <div class="message-box">
                <div>
                  <span
                    class="download-file"
                    v-if="chat.attachment"
                    @click="downloadFile(chat.attachment.fileName, chat.attachment.fileUrl)"
                  >
                    <i class="fa fa-download"></i>
                    {{chat.attachment.fileName}}
                  </span>
                  <div>{{chat.messageBody}}</div>
                </div>
                <div class="time-ago float-right">
                  <span>{{chat.createdAt | showOnlyTime}}</span>
                </div>
              </div>
              <br />
              <div
                class="mark-as-unread float-right"
                v-if="activeSummary.lastRead == null || chat.createdAt > activeSummary.lastRead"
              >
                <span>{{$t('subChat.unread')}}</span>
              </div>
              <div class="mark-as-read float-right" v-else>
                <span>{{$t('subChat.read')}}</span>
              </div>
            </div>
            <div class="profile-picture">
              <div class="user-profile" v-if="!chat.meta.avatar">
                <span>{{chat.meta.initials}}</span>
              </div>
              <div v-if="chat.meta.avatar">
                <img :src="chat.meta.avatar" class="avatar" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="emoji-picker" ref="emojiPicker" v-show="isEmojiPickerOpen">
        <picker
          :showPreview="false"
          :style="{ height: '300px' , width: '100%'}"
          @select="addEmoji"
        />
      </div>
      <div class="footer">
        <div class="chat-input-box">
          <div
            @click.stop="isEmojiPickerOpen = !isEmojiPickerOpen , stopFunction = true"
            :class="{blue: isEmojiPickerOpen}"
            class="fa-grin-box"
          >
            <i class="far fa-grin"></i>
          </div>
          <div class="input-msg">
            <div v-if="selectedFile">
              <i class="fa fa-check-circle"></i>
              {{selectedFile.name}} {{filesizeToMB}}MB
            </div>
            <div class="textarea-container">
              <resizable-textarea>
                <textarea
                  rows="1"
                  ref="textarea"
                  v-model.trim="message"
                  :placeholder="$t('subChat.typeMessageHere')"
                ></textarea>
              </resizable-textarea>
            </div>
          </div>
          <div class="fa-paperclip-box">
            <input type="file" ref="attachment" @change="attachFile()" hidden />
            <i class="fa fa-paperclip" @click="$refs.attachment.click()"></i>
          </div>
        </div>
        <div class="send-btn-container">
          <button
            type="submit"
            class="send-btn"
            :disabled="!message"
            :class="{invalid: !message}"
          >{{$t('buttons.send')}}</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations, mapGetters } from "vuex";
import resizableTextarea from "../../utility/resizableTextarea";
import socket from "../../socketio-client";
import axios from "axios";
import { base64ToBlob } from "../../utility";
import { Picker } from "emoji-mart-vue";
export default {
  components: {
    Picker,
    resizableTextarea
  },

  props: ["activeSummary"],
  data() {
    return {
      contain: this.$refs.chatBoxContainer,
      message: "",
      isEmojiPickerOpen: false,
      userId: localStorage.getItem("userId"),
      selectedFile: null,
      allMessages: [],
      areMessages: true
    };
  },
  watch: {
    contain(val) {
      this.scrollToEnd();
    },

    activeSummary() {
      this.initialValues();
      socket.emit("loadMessages", {
        orderId: this.activeSummary.orderId,
        userId: this.userId
      });
      socket.on("messages", data => {
        //Get ids of the participants
        const participantsIdsArr = data.participants.map(element => {
          return element.userId;
        });
        //Get participants' avatar array
        let participantsAvatarArray;
        axios
          .post("/users/avatasForMyMessages", participantsIdsArr)
          .then(res => {

            participantsAvatarArray = res.data;

            //To add initials and profile pictures of the participants
            const modifiedMessages = data.messages.map(item => {
              let initials =
                item.meta.firstName.toUpperCase().split("")[0] +
                item.meta.lastName.toUpperCase().split("")[0];

              item.meta["initials"] = initials;

              const avatarObj = participantsAvatarArray.filter(
                element => element.id == item.meta.userId
              )[0];
              item.meta["avatar"] = avatarObj.avatar;

              // Add the roles of the participants by extracting from the data.participants array
              const roleObj = data.participants.filter(
                element => element.userId == item.meta.userId
              )[0];
              item.meta["role"] = roleObj.role;

              //Add
              return item;
            });

            this.allMessages = modifiedMessages;
            if (this.allMessages.length == 0) {
              this.areMessages = false;
            } else {
              this.areMessages = true;
            }
            this.scrollToEnd();
          })
          .catch(error => {
            console.log(error);
          });

        //Get the order
        axios
          .get(`/messages/getOrder/${data.orderId}`)
          .then(res => {
            const order = res.data;
            this.$emit("currentOrder", order);

            this.scrollToEnd();
          })
          .catch(error => {
            console.log(error.response);
          });
        this.$emit("currentOrderId", data.orderId);
      });
    }
  },

  methods: {
    documentClick(e) {
      let el = this.$refs.emojiPicker;
      let target = e.target;
      if (el !== target && !el.contains(target)) {
        this.isEmojiPickerOpen = false;
      }
    },

    initialValues() {
      this.message = "";
      this.selectedFile = "";
      this.$refs.textarea.style.height = "auto";
      this.isEmojiPickerOpen = false;
    },

    async sendMessage(e) {
      // e.preventDefault();
      let selectedFileObj = {};
      const fd = new FormData();
      if (this.selectedFile) {
        fd.append("fileData", this.selectedFile, this.selectedFile.name);
        await axios
          .post(
            `/messages/fileUpload/${this.activeSummary.orderId}/${this.userId}`,
            fd
          )
          .then(res => {
            selectedFileObj.fileName = res.data.fileName;
            selectedFileObj.fileUrl = res.data.fileUrl;
          })
          .catch(error => {
            console.log(error.response);
          });
      }

      socket.emit("sendMessage", {
        orderId: this.activeSummary.orderId,
        message: this.message,
        selectedFileObj,
        userId: this.userId,
        firstName: this.generalUserProfile.firstName,
        lastName: this.generalUserProfile.lastName
      });
      this.initialValues();
      this.$emit("NewMessage", this.activeSummary.orderId);
      this.scrollToEnd();
    },

    getDayMonthYear(date) {
      const dayMonthYear =
        new Date(date).getDay() +
        new Date(date).getMonth() +
        new Date(date).getFullYear();
      return dayMonthYear;
    },

    scrollToEnd() {
      if (this.$refs.chatBoxContainer) {
        this.$nextTick(() => {
          this.$refs.chatBoxContainer.scrollTop = this.$refs.chatBoxContainer.scrollHeight;
        });
      }
    },

    attachFile() {
      const file = event.target.files[0];
      // console.log(file);
      this.selectedFile = file;
    },

    downloadFile(fileName, fileUrl) {
      axios
        .post(`/messages/downloadFile/${this.activeSummary.orderId}`, {
          fileUrl
        })
        .then(response => {
          const blob = base64ToBlob(response.data.dataUrl);
          const url = window.URL.createObjectURL(blob);
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", fileName); //or any other extension
          document.body.appendChild(link);
          link.click();
        })
        .catch(error => {
          console.log(error);
        });
    },

    addEmoji(emoji) {
      const textarea = this.$refs.textarea;
      const cursorPosition = textarea.selectionEnd;
      const start = this.message.substring(0, textarea.selectionStart);
      const end = this.message.substring(textarea.selectionStart);
      const text = start + emoji.native + end;
      this.message = text;
    },

    hideEmojiPicker() {
      this.isEmojiPickerOpen = false;
    },
    openEmojiPicker() {
      this.isEmojiPickerOpen = true;
    },

    onKeypress(event) {
      const key = event.key;
      if (key === " ") {
        if (!this.message) {
          event.preventDefault();
        }
      }

      if (key === "Enter") {
        event.preventDefault();
        if (this.message) {
          this.sendMessage();
        }
      }
    }
  },
  computed: {
    ...mapGetters(["generalUserProfile"]),

    filesizeToMB() {
      return Number((this.selectedFile.size / 1000000).toPrecision(3));
      // return this.selectedFile.size / 1000000
    }
  },
  created() {
    this.$nextTick(() => {
      document.addEventListener("click", this.documentClick);
    });
  },

  mounted() {
    this.$nextTick(() => {
      this.$el.addEventListener("keydown", this.onKeypress);
    });
  },

  beforeDestroy() {
    document.removeEventListener("click", this.documentClick);
  }
};
</script>
<style scoped>
* {
  box-sizing: border-box;
}

.container {
  font-family: sans-serif, Arial, Helvetica;
  background-color: rgba(0, 0, 0, 0.08);
  flex-direction: column;
  justify-content: space-between;
  display: flex;
  width: 100%;
  height: 515px;
}

.start-conversation {
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  display: flex;
  background-color: aliceblue;
}

.start-conversation-content {
  width: 100%;
  max-width: 245px;
  text-align: center;
}

.start-conversation i {
  color: #212259;
  font-size: 40px;
}

.start-conversation h1 {
  color: #212259;
  padding-top: 2px;
  padding-bottom: 10px;
  font-size: 23px;
}

.container-chat-box {
  flex: 1;
  overflow-y: scroll;
  display: block;
}

.receiver,
.sender {
  font-size: 14px;
  margin-top: 10px;
  margin-bottom: 30px;
  width: 100%;
  display: flex;
}

.receiver {
  padding-right: 50px;
  justify-content: flex-start;
}

.sender {
  padding-left: 50px;
  justify-content: flex-end;
}

.profile-picture {
  margin-left: 10px;
  margin-right: 10px;
  position: relative;
  display: inline-block;
}

.receiver .profile-picture {
  margin-top: 15px;
}

.avatar,
.user-profile {
  height: 50px;
  width: 50px;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  border: 1px solid #ccc;
  background: white;
  display: flex;
}

.user-profile {
  border: 1px solid #ccc;
}

.receiver .message-box,
.sender .message-box {
  font-size: 15px;
  padding: 10px;
  width: 100%;
  max-width: 350px;
  color: black;
  position: relative;
  text-align: left;
  word-break: break-all;
  display: inline-block;
}

.receiver .message-box {
  /* background-color: rgb(222, 229, 231);  */
  background-color: white;
  border-top-right-radius: 5px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}

.receiver .message-box:after {
  right: 100%;
  top: 0px;
  border: solid transparent;
  border-color: white transparent transparent transparent;
  content: " ";
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none;
  border-right-color: white;
  border-width: 6px;
}

.sender .message-box {
  background-color: rgb(203, 241, 203);
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}

.sender .message-box:after {
  left: 100%;
  top: 0px;
  border: solid transparent;
  border-color: rgb(203, 241, 203) transparent transparent transparent;
  content: " ";
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none;
  border-left-color: rgb(203, 241, 203);
  border-width: 6px;
}

.fullname-role {
  font-size: 12px;
  padding-bottom: 5px;
  font-weight: bold;
}

.mark-as-unread,
.mark-as-read {
  margin-top: 5px;
  font-size: 13px;
  color: grey;
}

.receiver .time-ago,
.sender .time-ago {
  font-size: 12px;
  margin-top: 5px;
  margin-bottom: -5px;
  margin-right: -5px;
}

.float-right {
  float: right;
}

.float-left {
  float: left;
}

.date {
  margin-top: 10px;
  text-align: center;
  font-size: 13px;
  color: grey;
}

.time-ago {
  font-size: 12px;
  margin-right: 10px;
  color: grey;
}

.footer {
  padding-left: 40px;
  padding-right: 40px;
  width: 100%;
  display: flex;
  background-color: rgb(232, 240, 254);
}

.chat-input-box {
  display: flex;
  padding-top: 10px;
  padding-bottom: 10px;
  flex: 1;
}

.fa-grin-box,
.fa-paperclip-box {
  font-size: 22px;
  margin-bottom: 6px;
  text-align: center;
  color: grey;
  align-self: flex-end;
  cursor: pointer;
}

.fa-paperclip-box i:hover,
.fa-grin-box:hover {
  color: blue;
}

.fa-grin-box {
  margin-right: 18px;
}

.fa-paperclip-box {
  margin-left: 15px;
}

.blue {
  cursor: pointer;
  color: blue;
}

.textarea-container {
  max-height: 112px;
  height: auto;
  border-radius: 20px;
  overflow-x: hidden;
  overflow-y: auto;
}

textarea {
  float: left;
  width: 100%;
  padding: 12px 13px;
  font-size: 15px;
  outline: none;
  border: none;
  resize: none;
  background-color: white;
  overflow: hidden;
}

.input-msg {
  flex: 1;
}

.send-btn-container {
  align-self: flex-end;
}

.send-btn {
  color: white;
  background-color: #07c;
  padding: 7px;
  font-weight: bold;
  margin-left: 15px;
  margin-bottom: 15px;
  outline: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
  text-align: center;
  border-radius: 5px;
  border: 1px solid #07c;
}

.invalid {
  background-color: white;
  color: #07c;
}

.download-file {
  cursor: pointer;
  color: green;
}

/* width */
::-webkit-scrollbar,
.emoji-picker ::-webkit-scrollbar {
  width: 5px;
}

.footer ::-webkit-scrollbar {
  width: 3px;
}

/* Track */
::-webkit-scrollbar-track,
.emoji-picker ::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb,
.emoji-picker ::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover,
.emoji-picker ::-webkit-scrollbar-thumb:hover {
  background: #555;
}

@media screen and (max-width: 480px) {
  .footer {
    padding-left: 8px;
    padding-right: 8px;
  }

  .fa-grin-box {
    margin-right: 8px;
  }

  .fa-paperclip-box {
    margin-left: 8px;
  }

  .send-btn {
    margin-left: 8px;
    margin-bottom: 8px;
  }

  textarea {
    padding: 12px 10px;
    font-size: 14px;
  }

  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    font-size: 13px;
  }
  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    font-size: 13px;
  }
  ::-ms-input-placeholder {
    /* Microsoft Edge */
    font-size: 13px;
  }
}
</style>