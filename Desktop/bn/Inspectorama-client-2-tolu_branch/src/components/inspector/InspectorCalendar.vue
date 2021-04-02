<template>
  <div>
    <div class="body">
      <div class="container">
        <div class="container-left">
          <Calendar
            class="calendar-picker"
            @onDateClick="onDateClick"
            :events="events"
            :startDate="startDate"
            :endDate="endDate"
          ></Calendar>
        </div>
        <form v-if="isInspector" class="container-right" :class="{backdrop: activeState}">
          <div v-if="!activeState" class="angle right-angle" @click="activeState=!activeState">
            <i class="fa fa-angle-left"></i>
          </div>
          <transition name="slide">
            <div class="container-content-right" v-if="activeState">
              <div class="angle" @click="activeState=!activeState">
                <i v-if="activeState" class="fa fa-angle-right"></i>
              </div>
              <div class="container-inner-content-right">
                <p class="okMessage" v-if="okMessage">{{okMessage}}</p>
                <p class="errorMessage" v-if="errorMessage">{{errorMessage}}</p>
                <div class="label-and-datepicker">
                  <span>{{$t('inspectorCalendar.startDate')}}</span>
                  <Datepicker
                    class="date-picker"
                    lang="en"
                    type="date"
                    format="YYYY MMM DD"
                    placeholder="Start"
                    :disabled-date="(date)=>date < Date.now()"
                    v-model="startDate"
                  ></Datepicker>
                </div>
                <div class="label-and-datepicker">
                  <span>{{$t('inspectorCalendar.endDate')}}</span>
                  <Datepicker
                    class="date-picker"
                    lang="en"
                    type="date"
                    format="YYYY MMM DD"
                    placeholder="End"
                    :disabled-date="(date)=>date < Date.now()"
                    v-model="endDate"
                  ></Datepicker>
                </div>
                <div class="availability-assembly">
                  <p>{{$t('inspectorCalendar.availabilty')}}</p>
                  <div>
                    <label>
                      <input class="input-block" type="radio" value="false" v-model="isBlock" />
                      <span>{{$t('inspectorCalendar.available')}} </span>
                    </label>
                  </div>
                  <div>
                    <label>
                      <input class="input-block" type="radio" value="true" v-model="isBlock" />
                      <span>{{$t('inspectorCalendar.block')}}</span>
                    </label>
                  </div>
                </div>
                <div class="btn-container">
                  <button class="cancel-btn" @click.prevent="onCancel()">{{$t('buttons.cancel')}}</button>
                  <button
                    type="button"
                    class="save-btn"
                    :disabled="!startDate && !endDate"
                    @click.prevent="onSubmit()"
                  >{{$t('buttons.saveChanges')}}</button>
                </div>
              </div>
            </div>
          </transition>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Datepicker from "vue2-datepicker";
import socket from "../../socketio-client";
import axios from "axios";
import Calendar from "../Calendar.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    Datepicker,
    Calendar
  },
  data() {
    return {
      activeState: false,
      startDate: "",
      endDate: "",
      title: "blocked",
      background: true,
      class: "lunch",
      isBlock: true,
      currentEvent: "",
      events: [],
      errorMessage: "",
      okMessage: ""
    };
  },
  computed: {
    ...mapGetters(["isInspector"])
  },
  methods: {
    windowResize() {
      if (window.innerWidth <= 760) {
        this.activeState = false;
      } else {
        this.activeState = true;
      }
    },

    onSubmit(event) {
      this.clearErrorAndOkMessages();
      const blockedPeriodData = {
        startDate: this.startDate,
        endDate: this.endDate,
        title: this.title,
        background: this.background
      };

      if (blockedPeriodData.startDate > blockedPeriodData.endDate) {
        this.errorMessage = "The end date must be after the start date";
        return;
      } else {
        axios
          .patch(
            `/inspector_infos/me/blocked_period/${this.isBlock}`,
            blockedPeriodData
          )
          .then(res => {
            this.loadBlockedPeriods();
            this.startDate = null;
            this.endDate = null;
            this.okMessage = res.data;
            setTimeout(() => {
              this.okMessage = null;
              if (window.innerWidth <= 760) {
                this.activeState = false;
              }
            }, 2000);
          })
          .catch(error => {
            console.log(error.response);
            this.errorMessage = error.response.data;
          });
      }
    },

    onCancel() {
      this.startDate = "";
      this.endDate = "";
      this.clearErrorAndOkMessages();
      if (window.innerWidth <= 760) {
        this.activeState = false;
      }
    },

    clearErrorAndOkMessages() {
      this.errorMessage = "";
      this.okMessage = "";
    },

    onDateClick(date) {
      this.startDate = date;
      this.activeState = true;
    },

    loadBlockedPeriods() {
      socket.emit("loadBlockedPeriodsInfo", {
        inspectorId: localStorage.getItem("userId")
      });

      socket.on("blockedPeriods", data => {
        const events = data.map(item => {
          item.startDate = new Date(item.startDate);
          item.endDate = new Date(item.endDate);
          return item;
        });

        const modifiedEvents = data.map(item => {
          let newItem = {};
          newItem.start = item.startDate;
          newItem.end = item.endDate;
          newItem.title = "blocked";
          newItem.rendering = "background";
          return newItem;
        });
        this.events = modifiedEvents;
      });
    }
  },

  mounted() {
    this.loadBlockedPeriods();
  },
  created() {
    this.windowResize();
    window.addEventListener("resize", this.windowResize);
  },

  beforeDestroy() {
    window.removeEventListener("resize", this.windowResize);
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.body {
  font-family: sans-serif, Arial, Helvetica;
}

.container {
  padding: 50px;
  background-color: aliceblue;
  width: 100%;
  justify-content: center;
  display: flex;
}

.container-left {
  border-radius: 5px;
  margin-right: 50px;
  width: 500px;
  background-color: white;
  display: inline-table;
}

.container-right {
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  background-color: white;
  font-size: 14px;
  width: 280px;
  min-width: 250px;
  display: block;
}

.container-content-right {
  min-width: 250px;
}

.date-picker {
  width: 100%;
}

.date-picker /deep/ input {
  width: 100%;
  margin-top: 4px;
  color: black;
  border: 1px solid #ccc;
  border-radius: 3px;
  background-clip: padding-box;
  outline: none;
  box-shadow: none;
  background-color: rgb(232, 240, 254);
  display: block;
}

.label-and-datepicker {
  padding-top: 15px;
  width: 100%;
  float: left;
}

.availability-assembly {
  padding-top: 15px;
  padding-bottom: 10px;
  width: 100%;
  display: inline-block;
}

label {
  cursor: pointer;
}

.input-block {
  margin-top: 10px;
  cursor: pointer;
}

.btn-container {
  display: flex;
}

.cancel-btn,
.save-btn {
  padding-top: 8px;
  padding-bottom: 8px;
  outline: none;
  text-align: center;
  border-radius: 5px;
  cursor: pointer;
  opacity: 0.9;
}

.cancel-btn {
  color: black;
  background-color: white;
  border: solid 1px black;
  margin-right: 5px;
  opacity: 1;
  width: 100%;
}

.save-btn:hover {
  opacity: 1;
}

.save-btn {
  color: white;
  background-color: orangered;
  border: solid 1px orangered;
  margin-left: 5px;
  width: 100%;
  min-width: 110px;
}

.cancel-btn:hover {
  color: darkred;
  border: solid 1px darkred;
}

.errorMessage {
  color: red;
}

.okMessage {
  color: green;
}

.angle,
.right-angle {
  display: none;
}

@media only screen and (max-width: 920px) {
  .container {
    padding: 20px;
  }

  .container-left {
    margin-right: 20px;
  }
}

@media only screen and (max-width: 760px) {
  .body {
    padding: 5px;
  }

  .container {
    padding: 50px 10px;
    border-radius: 5px;
    border: 1px solid #b6b1b1;
  }

  .container-left {
    margin-right: 0px;
    z-index: 1;
  }

  .container-right {
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    padding: 0px;
    border-radius: 0px;
    min-width: 100%;
    height: 100%;
    overflow: hidden;
    position: absolute;
    border: none;
    background-color: transparent;
  }

  .backdrop {
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 2;
  }

  .container-content-right {
    top: 20px;
    right: 0px;
    min-width: auto;
    position: absolute;
    z-index: 2;
  }

  .container-inner-content-right {
    padding: 5px 10px;
    padding-bottom: 30px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    width: 280px;
    background-color: white;
  }

  .angle {
    display: block;
    cursor: pointer;
  }

  .angle i {
    padding: 2px 6px;
    margin: 2px 5px;
    float: left;
    font-size: 22px;
    color: orangered;
  }

  .right-angle {
    float: none;
    top: 20px;
    right: 5px;
    position: absolute;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    background-color: white;
    border: 1px solid #b6b1b1;
    display: block;
    z-index: 1;
  }

  .angle i:hover {
    color: darkred;
  }

  .slide-enter {
    opacity: 0;
  }

  .slide-enter-active {
    animation: slide-in 0.3s ease-out forwards;
  }

  .slide-leave-active {
    animation: slide-out 0.3s ease-out forwards;
  }

  @keyframes slide-in {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  }

  @keyframes slide-out {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(100%);
    }
  }
}
</style>