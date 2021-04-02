<template>
  <div>
    <div class="body" style="position: relative">
      <div
        class="no-messages"
        v-if="!isThereMessage && isPageLoaded"
      >{{$t('inboxMainView.noMessages')}}</div>
      <div v-if="!isPageLoaded">
        <LoadingPage style="left:0; right:0; top:0; bottom:0; position:absolute;"></LoadingPage>
      </div>
      <div class="container" v-if="isThereMessage && isPageLoaded">
        <div class="container-left" :class="{desktop: !isActive}">
          <div class="container-left-header">
            <div class="select-btn">
              <select @change="onFilterMessages()" v-model="filterParameter">
                <option>{{$t('inboxMainView.allConversations')}}</option>
                <option>{{$t('inboxMainView.unread')}}</option>
                <option>{{$t('inboxMainView.starred')}}</option>
              </select>
            </div>
            <div class="search-icon">
              <i class="fas fa-search"></i>
            </div>
          </div>
          <div class="container-left-content">
            <div
              v-for="(messageSummary, index) in allMySummarizedMessages"
              :key="index"
              class="message-tab"
              @click="onSelectActive(index, messageSummary), isActive=!isActive"
              :class="{active: activeIndex === index}"
            >
              <div
                class="star-icon mobile"
                :style="[messageSummary.isStarred == true? { color: 'yellow' }: { color: 'grey' }]"
                @click="onStarConversation(index, messageSummary)"
              >
                <i class="fa fa-star" style="color: yellow"></i>
              </div>
              <div class="envelope-icon mobile" @click="onClickEnvelope(index, messageSummary)">
                <span v-if="messageSummary.markedUnread == true">
                  <i class="far fa-envelope"></i>
                </span>
                <span v-if="messageSummary.markedUnread == false">
                  <i class="far fa-envelope-open"></i>
                </span>
              </div>
              <div class="profile-picture">
                <div class="user-profile" v-if="!messageSummary.avatar">
                  <span>{{messageSummary.initials}}</span>
                </div>
                <div v-if="messageSummary.avatar">
                  <img :src="messageSummary.avatar" class="avatar" />
                </div>
                <div class="online-user" v-if="false"></div>
                <div class="offline-user" v-if="true"></div>
              </div>
              <div class="name-message-group">
                <div
                  class="full-name"
                  :style="[messageSummary.markedUnread == true? { 'font-weight': 'bold' }:{ 'font-weight': null }]"
                >{{messageSummary.fullName}}</div>
                <div class="flex float-right">
                  <div class="time-ago">{{messageSummary.lastSeen | toGetRelativeTime}}</div>
                  <div
                    class="star-icon desktop"
                    :style="[messageSummary.isStarred == true? { color: 'yellow' }: { color: 'grey' }]"
                    @click="onStarConversation(index, messageSummary)"
                  >
                    <i class="fa fa-star"></i>
                  </div>
                  <div
                    class="envelope-icon desktop"
                    @click="onClickEnvelope(index, messageSummary)"
                  >
                    <span v-if="messageSummary.markedUnread == true">
                      <i class="far fa-envelope"></i>
                    </span>
                    <span v-if="messageSummary.markedUnread == false">
                      <i class="far fa-envelope-open"></i>
                    </span>
                  </div>
                </div>
                <div class="last-message">
                  <span>{{messageSummary.summarizedLastMessage}}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="main-container" :class="{mobile: !isActive}">
          <div class="main-container-header" v-if="isNewChatLoaded">
            <div class="angle-left" @click="isActive=!isActive">
              <i class="fa fa-angle-left"></i>
            </div>
            <div class="max" v-if="activeParticipantsOnlineStatus">
              <div v-for="(participant, index) in activeParticipantsOnlineStatus" :key="index">
                <div v-if="participant.userId == displayedSummary.mainParticipantId && index < 1">
                  <div class="inline">
                    <div class="online-user" v-if="participant.isOnline"></div>
                    <div class="offline-user" v-if="!participant.isOnline"></div>
                    <div class="full-name">
                      <span>{{displayedSummary.fullName}}</span>
                    </div>
                  </div>
                  <div class="time-ago">
                    <span>
                      <span>
                        <span>
                          <span v-if="!participant.isOnline">
                            {{$t('inboxMainView.lastSeen')}}
                            {{participant.lastSeen | toGetRelativeTime}}
                          </span>
                          <span v-if="participant.isOnline">{{$t('inboxMainView.online')}}</span>
                        </span>
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="fa-ellipsis">
              <i class="fas fa-ellipsis-h"></i>
            </div>
          </div>
          <div class="flex">
            <div class="container-center" style="position: relative">
              <div v-show="!isNewChatLoaded && isConversationSelected">
                <LoadingPage style="left:0; right:0; top:0; bottom:0; position:absolute;"></LoadingPage>
              </div>
              <div class="select-conversation" v-show="!isConversationSelected">
                <div class="select-conversation-content">
                  <i class="fa fa-comments"></i>
                  <h1>{{$t('inboxMainView.selectConversation')}}</h1>
                  <p>{{$t('inboxMainView.selectConversationBody')}}</p>
                </div>
              </div>
              <div v-show="isConversationSelected && isNewChatLoaded">
                <subChat
                  :activeSummary="displayedSummary"
                  @currentOrder="setCurrentOrder"
                  @NewMessage="updateInitializedChats"
                ></subChat>
              </div>
            </div>
            <div class="container-right" style="position: relative">
              <div v-show="!isNewChatLoaded && isConversationSelected">
                <LoadingPage style="left:0; right:0; top:0; bottom:0; position:absolute;"></LoadingPage>
              </div>
              <div class="select-conversation" v-show="!isConversationSelected">
                <div class="select-conversation-content">
                  <i class="fa fa-comments"></i>
                  <h1>{{$t('inboxMainView.selectConversation')}}</h1>
                  <p>{{$t('inboxMainView.selectConversationBody')}}</p>
                </div>
              </div>
              <div
                class="container-right-content"
                v-if="currentOrder"
                v-show="isConversationSelected && isNewChatLoaded"
              >
                <center>
                  <div class="profile-picture">
                    <div v-if="displayedSummary.avatar">
                      <img class="avatar" :src="displayedSummary.avatar" />
                    </div>
                    <div
                      class="initials"
                      v-if="!displayedSummary.avatar"
                    >{{displayedSummary.initials}}</div>
                  </div>
                  <div class="full-name">{{displayedSummary.fullName}}</div>
                </center>
                <div class="profile-summary">
                  <div class="profile-summary-header">{{$t('inboxMainView.orderInfo')}}</div>
                  <table>
                    <tr>
                      <td class="spaced">{{$t('inboxMainView.type')}}</td>
                      <td>
                        <strong>{{currentOrder.inspectionType}} {{$t('generic.inspection')}}</strong>
                      </td>
                    </tr>
                    <tr>
                      <td class="spaced">{{$t('generic.orderId')}}</td>
                      <td>
                        <strong>{{currentOrder.sequenceId}}</strong>
                      </td>
                    </tr>
                    <tr>
                      <td class="spaced">{{$t('generic.orderStatus')}}</td>
                      <td>
                        <strong>{{currentOrder.orderStatus}}</strong>
                      </td>
                    </tr>
                  </table>
                </div>
                <div class="profile-summary">
                  <div class="profile-summary-header">{{$t('inboxMainView.inspectedItem')}}</div>
                  <table v-if="currentOrder.inspectionType == 'home'">
                    <tr>
                      <td class="spaced">{{$t('generic.address')}}</td>
                      <td>
                        <strong>
                          {{currentOrder.inspectedItemInfo.homeLocation}}, {{currentOrder.quotation.city}},
                          {{currentOrder.quotation.country}} {{currentOrder.quotation.zipCode}}
                        </strong>
                      </td>
                    </tr>
                    <tr>
                      <td class="spaced">{{$t('generic.description')}}</td>
                      <td>
                        <strong>
                          {{currentOrder.quotation.inspectedItemInfo.typeOfHome}}
                          {{$t(
                          'generic.withNoOfRooms',
                          currentOrder.quotation.inspectedItemInfo.numberOfRooms,
                          {count: currentOrder.quotation.inspectedItemInfo.numberOfRooms}
                          )}}
                        </strong>
                      </td>
                    </tr>
                  </table>
                  <table v-if="currentOrder.inspectionType == 'vehicle'">
                    <tr>
                      <td class="spaced">{{$t('generic.address')}}</td>
                      <td>
                        <strong>
                          {{currentOrder.inspectedItemInfo.vehicleLocation}}, {{currentOrder.quotation.city}},
                          {{currentOrder.quotation.country}} {{currentOrder.quotation.zipCode}}
                        </strong>
                      </td>
                    </tr>
                    <tr>
                      <td class="spaced">{{$t('generic.description')}}</td>
                      <td>
                        <strong>
                          {{currentOrder.quotation.inspectedItemInfo.vehicleYear | showOnlyYear}}
                          {{currentOrder.quotation.inspectedItemInfo.vehicleModel}}
                          {{currentOrder.quotation.inspectedItemInfo.vehicleBrand}}
                          {{currentOrder.quotation.inspectedItemInfo.typeOfVehicle}}
                        </strong>
                      </td>
                    </tr>
                  </table>
                  <table>
                    <tr>
                      <td class="spaced">{{$t('generic.inspectionTime')}}</td>
                      <td>
                        <strong>{{currentOrder.quotation.inspectionDateTime | showDateAndTime}}</strong>
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LoadingPage from "../loadingComponents/LoadingPage.vue";
import socket from "../../socketio-client";
import SubChat from "./SubChat.vue";
import axios from "axios";
export default {
  components: {
    SubChat,
    LoadingPage
  },

  data() {
    return {
      userId: localStorage.getItem("userId"),
      isActive: true,
      activeIndex: null,
      allMySummarizedMessages: [],
      initialAllMySummarizedMessages: [],
      displayedSummary: {},
      currentOrder: "",
      activeParticipantsOnlineStatus: [],
      filterParameter: "All Conversations",
      isConversationSelected: false,
      isNewChatLoaded: false,
      isThereMessage: false,
      isPageLoaded: false
    };
  },
  computed: {},
  methods: {
    onSelectActive(index, messageSummary) {
      this.isConversationSelected = true;
      if (this.activeIndex == index) {
        this.isNewChatLoaded = true;
      } else {
        this.isNewChatLoaded = false;
      }
      this.activeIndex = index;
      messageSummary.markedUnread = true;
      this.onClickEnvelope(index, messageSummary);
      this.displayedSummary = messageSummary;

      this.getParticipantsOnlineStatus(messageSummary.orderId);

      //Send a Make as Unread request
      if (messageSummary.unread == true) {
        axios
          .patch(
            `/messages/${messageSummary.orderId}/${this.userId}/${messageSummary.isStarred}`
          )
          .then(res => {})
          .catch(error => {
            console.log(error.response);
          });
      }
    },

    onStarConversation(index, messageSummary) {
      event.stopPropagation();
      //Change the isStarred to true or false in the state before sending the request to the server
      messageSummary.isStarred = !messageSummary.isStarred;

      //Send a starring request
      axios
        .patch(
          `/messages/isStarred/${messageSummary.orderId}/${this.userId}/${messageSummary.isStarred}`
        )
        .then(res => {})
        .catch(error => {
          console.log(error.response);
        });
    },

    onClickEnvelope(index, messageSummary) {
      event.stopPropagation();
      //Change the markedUnread to true or false in the state before sending the request to the server
      messageSummary.markedUnread = !messageSummary.markedUnread;

      //Send a markedUnread request
      axios
        .patch(
          `/messages/markedUnread/${messageSummary.orderId}/${this.userId}/${messageSummary.markedUnread}`
        )
        .then(res => {})
        .catch(error => {
          console.log(error.response);
        });
    },

    onFilterMessages() {
      let newAllMySummarizedMessages = [];

      if (this.filterParameter == "All Conversations") {
        this.initializeChats();
      } else if (this.filterParameter == "Unread") {
        this.initialAllMySummarizedMessages.forEach(item => {
          if (item.markedUnread == true) {
            newAllMySummarizedMessages.push(item);
          }
        });
      } else if (this.filterParameter == "Starred") {
        this.initialAllMySummarizedMessages.forEach(item => {
          if (item.isStarred == true) {
            newAllMySummarizedMessages.push(item);
          }
        });
      }
      this.allMySummarizedMessages = newAllMySummarizedMessages;
      this.onSelectActive(0, this.allMySummarizedMessages[0]);
    },

    initializeChats(activeOrderId) {
      socket.emit("loadAllMySummarizedMessages", {
        userId: this.userId
      });
      socket.on("allMySummarizedMessages", data => {
        if (data.length != 0) {
          this.isThereMessage = true;
        }
        this.isPageLoaded = true;
        this.allMySummarizedMessages = data;
        this.initialAllMySummarizedMessages = data;
        if (activeOrderId) {
          this.allMySummarizedMessages.forEach(item => {
            if (item.orderId == activeOrderId) {
              this.activeIndex = this.allMySummarizedMessages.indexOf(item);
            }
          });
        }
      });
    },

    setCurrentOrder(order) {
      this.currentOrder = order;
      this.isNewChatLoaded = true;
    },

    updateInitializedChats(activeOrderId) {
      this.initializeChats(activeOrderId);
    },

    getParticipantsOnlineStatus(orderId) {
      socket.emit("getParticipantsOnlineStatus", { orderId });
      socket.on("participantsOnlineStatus", data => {
        this.activeParticipantsOnlineStatus = data;
      });
    }
  },

  mounted() {
    this.initializeChats();
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.body {
  font-family: sans-serif, Arial, Helvetica;
  padding: 50px;
  background-color: lightblue;
  height: 100%;
  min-height: 370px;
  display: block;
  width: 100%;
  position: relative;
}

.no-messages {
  background-color: white;
  top: 50%;
  left: 50%;
  color: #212259;
  padding: 40px 25px;
  border-radius: 15px;
  transform: translate(-50%, -50%);
  position: absolute;
  border: 1px solid #ccc;
}

.no-messages:after {
  content: "";
  display: block;
  position: absolute;
  top: 100%;
  left: 30px;
  transform: rotate(90deg);
  width: 0;
  height: 0;
  border-style: solid;
  border-top-width: 30px;
  border-bottom-width: 1px;
  border-left-width: 32px;
  border-right-width: 0px;
  border-color: transparent transparent transparent white;
  filter: drop-shadow(2px 0 0 #ccc) drop-shadow(0 1px 0 #ccc);
}

.select-conversation {
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  display: flex;
  background-color: aliceblue;
}

.select-conversation-content {
  width: 100%;
  max-width: 245px;
  text-align: center;
}

.select-conversation i {
  color: #212259;
  font-size: 40px;
}

.select-conversation h1 {
  color: #212259;
  padding-top: 2px;
  padding-bottom: 10px;
  font-size: 23px;
}

.select-conversation p {
  font-size: 13px;
}

.mobile {
  display: none;
}

.desktop {
  display: inline-block;
}

.container {
  display: flex;
  width: 100%;
}

.container-left {
  background-color: white;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  border-left: 1px solid #ccc;
  float: left;
  width: 28%;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  min-width: 300px;
  display: block;
}

.container-left-header,
.main-container-header {
  height: 70px;
}

.container-left-header {
  padding-left: 10px;
  padding-right: 10px;
  width: 100%;
  border-bottom: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
}

.container-center,
.container-left-content {
  height: 515px;
}

.container-center {
  background-color: white;
}

.container-left-content {
  overflow-y: scroll;
  display: block;
}

.main-container {
  background-color: white;
  float: left;
  width: 72%;
  border: 1px solid #ddd;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  display: inline-block;
}

.main-container-header {
  padding-left: 10px;
  padding-right: 10px;
  width: 100%;
  border-bottom: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
}

.inline {
  margin-bottom: 5px;
  display: flex;
  align-items: center;
}

.container-center {
  float: left;
  width: 65%;
  border-right: 1px solid #ccc;
}

.container-right {
  float: left;
  width: 35%;
  min-width: 260px;
  display: inline-block;
}

.container-right-header {
  padding: 10px;
  border-bottom: 1px solid #ccc;
  width: 100%;
  display: inline-block;
}

.container-right-content {
  padding: 10px;
  width: 100%;
  display: inline-block;
}

.select-btn {
  flex: 1;
}

select {
  width: 70%;
  padding: 5px;
  border-radius: 3px;
  border: none;
  outline: none;
  border: 1px solid #ccc;
  background-color: #f1f1f1;
  cursor: pointer;
}

.search-icon {
  color: #0095ff;
  flex: 0;
  cursor: pointer;
}

.search-icon:hover {
  color: #07c;
}

.message-tab {
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 10px;
  width: 100%;
  background-color: white;
  border-bottom: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.unread {
  background-color: lightgreen;
}
.read {
  background-color: white;
}

.active {
  background-color: rgb(223, 237, 241);
}

.avatar,
.user-profile {
  height: 50px;
  width: 50px;
}

.avatar,
.user-profile,
.initials {
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  display: flex;
}

.initials {
  font-size: 25px;
}

.user-profile,
.initials {
  border: 1px solid #ccc;
}

.profile-picture {
  margin-left: 10px;
  margin-right: 10px;
  position: relative;
  display: inline-block;
}

.container-right-content .avatar,
.initials {
  height: 120px;
  width: 120px;
}

.online-user,
.offline-user {
  top: 73%;
  left: 73%;
  width: 11px;
  height: 11px;
  border-radius: 50%;
  border: 1px solid white;
  position: absolute;
}

.online-user {
  background-color: green;
}

.offline-user {
  background-color: rgb(168, 168, 168);
}

.name-message-group {
  display: inline-block;
  width: 100%;
}

.full-name {
  font-size: 14px;
  margin-right: 10px;
  float: left;
}

.message-tab .full-name {
  margin-bottom: 5px;
}

.max .full-name {
  font-size: 16px;
}

.container-right-content .full-name {
  margin-top: 10px;
  color: #ea7601;
  font-weight: bold;
  font-size: 19px;
  float: none;
  margin-right: 0px;
}

.last-message {
  font-size: 13px;
  margin-top: 5px;
  display: inline-block;
  width: 100%;
}

.flex {
  display: flex;
}

.float-right {
  float: right;
}

.float-left {
  float: left;
}

.time-ago {
  font-size: 12px;
  margin-right: 10px;
  color: grey;
}

.yellow {
  color: yellow;
}

.grey {
  color: #ddd;
}

.star-icon {
  font-size: 14px;
}

.envelope-icon {
  font-size: 14px;
}

.link {
  font-size: 13px;
  cursor: pointer;
  color: dodgerblue;
}

.link:hover {
  color: blue;
}

.profile-summary {
  font-size: 13px;
  margin-top: 10px;
  padding-top: 10px;
  border-top: 1px solid #ccc;
}

table {
  width: 100%;
}

.spaced {
  width: 100px;
}

.profile-summary-header {
  font-size: 16px;
  color: #212259;
  padding-bottom: 5px;
  font-weight: bold;
  text-align: center;
}

td {
  text-align: left;
  padding-top: 5px;
  padding-bottom: 5px;
}

.container-right-content .float-right span {
  font-weight: bold;
}

.angle-left {
  display: none;
}

.fa-ellipsis {
  font-size: 18px;
  cursor: pointer;
  margin-left: 5px;
  color: grey;
  display: block;
}

.fa-ellipsis:hover {
  color: brown;
}

.max {
  flex: 1;
}

.max .time-ago {
  margin-top: 0px;
  text-align: left;
}

.max .online-user,
.max .offline-user {
  float: left;
  position: static;
  margin-right: 5px;
}

/* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}

@media only screen and (max-width: 1100px) {
  .container-right {
    display: none;
  }

  .container-center {
    width: 100%;
  }

  @media only screen and (max-width: 840px) {
    .body {
      padding: 20px;
    }

    .container-left {
      min-width: 280px;
    }
  }
}

@media only screen and (max-width: 680px) {
  .main-container {
    width: 100%;
    border-radius: 5px;
    display: none;
  }

  .container-center {
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  .message-tab {
    padding-left: 10px;
    padding-right: 5px;
  }

  .envelope-icon {
    font-size: 18px;
  }

  .container-left {
    border-radius: 5px;
    max-width: 100%;
    min-width: 100%;
    border: 1px solid #ccc;
  }

  .angle-left {
    font-size: 26px;
    cursor: pointer;
    color: #0095ff;
    display: block;
  }

  .angle-left:hover {
    color: #07c;
  }

  .inline {
    justify-content: center;
  }

  .max .full-name {
    margin-right: 0px;
  }

  .max .time-ago {
    text-align: center;
  }

  .desktop {
    display: none;
  }

  .mobile {
    display: inline-block;
  }

  @media only screen and (max-width: 540px) {
    .body {
      background-color: white;
      padding: 5px;
    }
  }
}
</style>