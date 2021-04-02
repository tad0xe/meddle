<template>
  <div class="body">
    <div class="container">
      <div class="container-left">
        <InspRegProgress></InspRegProgress>
      </div>
      <div class="container-right">
        <form class="container-content">
          <div class="text-spaced">
            <h2>We have to know you better before you can start working with us</h2>
            <p>
              <small>Please feel free and fill in the relevant information</small>
            </p>
            <br />
            <p>
              <strong>Personal Information</strong>
            </p>
          </div>
          <br />
          <div class="row">
            <p>
              <big>Availability</big>
            </p>
            <p>
              <small>Let us know when you can be available for work</small>
            </p>
          </div>
          <vue-timepicker :minute-interval="30" v-model="testTime" @change="onTestTime(testTime)"></vue-timepicker>
          <br />
          <div class="table-row">
            <div class="col-3 col-s-4">Day:</div>
            <div class="col-3 col-s-4">From:</div>
            <div class="col-3 col-s-4">To:</div>
          </div>
          <br />
          <div class="table-content">
            <div class="col-3 col-s-4">
              <br />
              <p>Monday</p>
            </div>
            <div class="col-3 col-s-4">
              <div class="label-input">
                <timeselector
                  :value="prefill.monday.start"
                  :disabled="monday.isNotWorking"
                  :displayFormat="'HH mm'"
                  :interval="{h:1, m:30}"
                  returnFormat="HH:mm MON START"
                  @formatedTime="formatedTime"
                  @cleared="clearTime('monday', 'start', '00:00 MON START')"
                ></timeselector>
              </div>
            </div>
            <div class="col-3 col-s-4">
              <div class="label-input">
                <timeselector
                  :value="prefill.monday.end"
                  :disabled="monday.isNotWorking"
                  :displayFormat="'HH mm'"
                  :interval="{h:1, m:30}"
                  returnFormat="HH:mm MON END"
                  @formatedTime="formatedTime"
                  @cleared="clearTime('monday', 'end', '00:00 MON END')"
                ></timeselector>
              </div>
            </div>
            <br />
            <div>
              <label class="label-input col-3 col-s-12">
                <input type="checkbox" v-model="monday.isNotWorking" /> I don't work on Monday
              </label>
            </div>
          </div>
          <hr />
          <div class="table-content">
            <div class="col-3 col-s-4">
              <br />
              <p>Tuesday</p>
            </div>
            <div class="col-3 col-s-4">
              <div class="label-input">
                <timeselector
                  :value="prefill.tuesday.start"
                  :disabled="tuesday.isNotWorking"
                  :displayFormat="'HH mm'"
                  :interval="{h:1, m:30}"
                  returnFormat="HH:mm TUE START"
                  @formatedTime="formatedTime"
                  @cleared="clearTime('tuesday', 'start','00:00 TUE START' )"
                ></timeselector>
              </div>
            </div>
            <div class="col-3 col-s-4">
              <div class="label-input">
                <timeselector
                  :value="prefill.tuesday.end"
                  :disabled="tuesday.isNotWorking"
                  :displayFormat="'HH mm'"
                  :interval="{h:1, m:30}"
                  returnFormat="HH:mm TUE END"
                  @formatedTime="formatedTime"
                  @cleared="clearTime('tuesday', 'end', '00:00 TUE END')"
                ></timeselector>
              </div>
            </div>
            <br />
            <div>
              <label class="label-input col-3 col-s-12">
                <input type="checkbox" v-model="tuesday.isNotWorking" /> I don't work on Tuesday
              </label>
            </div>
          </div>
          <hr />
          <div class="table-content">
            <div class="col-3 col-s-4">
              <br />
              <p>Wednesday</p>
            </div>
            <div class="col-3 col-s-4">
              <div class="label-input">
                <timeselector
                  :value="prefill.wednesday.start"
                  :disabled="wednesday.isNotWorking"
                  :displayFormat="'HH mm'"
                  :interval="{h:1, m:30}"
                  returnFormat="HH:mm WED START"
                  @formatedTime="formatedTime"
                  @cleared="clearTime('wednesday', 'start', '00:00 WED START')"
                ></timeselector>
              </div>
            </div>
            <div class="col-3 col-s-4">
              <div class="label-input">
                <timeselector
                  :value="prefill.wednesday.end"
                  :disabled="wednesday.isNotWorking"
                  :displayFormat="'HH mm'"
                  :interval="{h:1, m:30}"
                  returnFormat="HH:mm WED END"
                  @formatedTime="formatedTime"
                  @cleared="clearTime('wednesday', 'end', '00:00 WED END')"
                ></timeselector>
              </div>
            </div>
            <br />
            <div>
              <label class="label-input col-3 col-s-12">
                <input type="checkbox" v-model="wednesday.isNotWorking" /> I don't work on Wednesday
              </label>
            </div>
          </div>
          <hr />
          <div class="table-content">
            <div class="col-3 col-s-4">
              <br />
              <p>Thursday</p>
            </div>
            <div class="col-3 col-s-4">
              <div class="label-input">
                <timeselector
                  :value="prefill.thursday.start"
                  :disabled="thursday.isNotWorking"
                  :displayFormat="'HH mm'"
                  :interval="{h:1, m:30}"
                  returnFormat="HH:mm TURS START"
                  @formatedTime="formatedTime"
                  @cleared="clearTime('thursday', 'start', '00:00 TURS START')"
                ></timeselector>
              </div>
            </div>
            <div class="col-3 col-s-4">
              <div class="label-input">
                <!-- TURS is deliberately spelt that way -->
                <timeselector
                  :value="prefill.thursday.end"
                  :disabled="thursday.isNotWorking"
                  :displayFormat="'HH mm'"
                  :interval="{h:1, m:30}"
                  returnFormat="HH:mm TURS END"
                  @formatedTime="formatedTime"
                  @cleared="clearTime('thursday', 'end', '00:00 TURS END')"
                ></timeselector>
              </div>
            </div>
            <br />
            <div>
              <label class="label-input col-3 col-s-12">
                <input type="checkbox" v-model="thursday.isNotWorking" /> I don't work on Thursday
              </label>
            </div>
          </div>
          <hr />
          <div class="table-content">
            <div class="col-3 col-s-4">
              <br />
              <p>Friday</p>
            </div>
            <div class="col-3 col-s-4">
              <div class="label-input">
                <timeselector
                  :value="prefill.friday.start"
                  :disabled="friday.isNotWorking"
                  :displayFormat="'HH mm'"
                  :interval="{h:1, m:30}"
                  returnFormat="HH:mm FRI START"
                  @formatedTime="formatedTime"
                  @cleared="clearTime('friday', 'start', '00:00 FRI START')"
                ></timeselector>
              </div>
            </div>
            <div class="col-3 col-s-4">
              <div class="label-input">
                <timeselector
                  :value="prefill.friday.end"
                  :disabled="friday.isNotWorking"
                  :displayFormat="'HH mm'"
                  :interval="{h:1, m:30}"
                  returnFormat="HH:mm FRI END"
                  @formatedTime="formatedTime"
                  @cleared="clearTime('friday', 'end', '00:00 FRI END')"
                ></timeselector>
              </div>
            </div>
            <br />
            <div>
              <label class="label-input col-3 col-s-12">
                <input type="checkbox" v-model="friday.isNotWorking" /> I don't work on Friday
              </label>
            </div>
          </div>
          <hr />
          <div class="table-content">
            <div class="col-3 col-s-4">
              <br />
              <p>Saturday</p>
            </div>
            <div class="col-3 col-s-4">
              <div class="label-input">
                <timeselector
                  :value="prefill.saturday.start"
                  :disabled="saturday.isNotWorking"
                  :displayFormat="'HH mm'"
                  :interval="{h:1, m:30}"
                  returnFormat="HH:mm SAT START"
                  @formatedTime="formatedTime"
                  @cleared="clearTime('saturday', 'start', '00:00 SAT START')"
                ></timeselector>
              </div>
            </div>
            <div class="col-3 col-s-4">
              <div class="label-input">
                <timeselector
                  :value="prefill.saturday.end"
                  :disabled="saturday.isNotWorking"
                  :displayFormat="'HH mm'"
                  :interval="{h:1, m:30}"
                  returnFormat="HH:mm SAT END"
                  @formatedTime="formatedTime"
                  @cleared="clearTime('saturday', 'end', '00:00 SAT END')"
                ></timeselector>
              </div>
            </div>
            <br />
            <div>
              <label class="label-input col-3 col-s-12">
                <input type="checkbox" v-model="saturday.isNotWorking" /> I don't work on Saturday
              </label>
            </div>
          </div>
          <hr />
          <div class="table-content">
            <div class="col-3 col-s-4">
              <br />
              <p>Sunday</p>
            </div>
            <div class="col-3 col-s-4">
              <div class="label-input">
                <timeselector
                  :value="prefill.sunday.start"
                  :disabled="sunday.isNotWorking"
                  :displayFormat="'HH mm'"
                  :interval="{h:1, m:30}"
                  returnFormat="HH:mm SUN START"
                  @formatedTime="formatedTime"
                  @cleared="clearTime('sunday', 'start', '00:00 SUN START')"
                  :required="true"
                ></timeselector>
              </div>
            </div>
            <div class="col-3 col-s-4">
              <div class="label-input">
                <timeselector
                  :value="prefill.sunday.end"
                  :disabled="sunday.isNotWorking"
                  :displayFormat="'HH mm'"
                  :interval="{h:1, m:30}"
                  returnFormat="HH:mm SUN END"
                  @formatedTime="formatedTime"
                  @cleared="clearTime('sunday', 'end', '00:00 SUN END')"
                  :required="true"
                ></timeselector>
              </div>
            </div>
            <br />
            <div>
              <label class="label-input col-3 col-s-12">
                <input type="checkbox" v-model="sunday.isNotWorking" /> I don't work on monday
              </label>
            </div>
          </div>
          <hr />
          <br />
          <div>
            <span>
              <button type="button" class="back-btn" @click.prevent="onSubmit('back')">Back</button>
            </span>
            <span>
              <button type="button" class="back-btn" @click.prevent="onSubmit">Save</button>
            </span>
            <span>
              <button type="submit" class="next-btn" @click.prevent="onSubmit('next')">Next</button>
            </span>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import InspRegProgress from "./InspRegProgress.vue";
import Timeselector from "vue-timeselector";
import moment from "moment";
import { config } from "bluebird";
export default {
  components: {
    InspRegProgress,
    Timeselector,
  },

  data() {
    return {
      testTime: "",
      monday: {
        date: "",
        start: "",
        end: "",
        isNotWorking: false,
        weekNumber: "",
        color: "",
        jobsBooked: []
      },
      tuesday: {
        date: "",
        start: "",
        end: "",
        isNotWorking: false,
        weekNumber: "",
        color: "",
        jobsBooked: []
      },
      wednesday: {
        date: "",
        start: "",
        end: "",
        isNotWorking: false,
        weekNumber: "",
        color: "",
        jobsBooked: []
      },
      thursday: {
        date: "",
        start: "",
        end: "",
        isNotWorking: false,
        weekNumber: "",
        color: "",
        jobsBooked: []
      },
      friday: {
        date: "",
        start: "",
        end: "",
        isNotWorking: false,
        weekNumber: "",
        color: "",
        jobsBooked: []
      },
      saturday: {
        date: "",
        start: "",
        end: "",
        isNotWorking: false,
        weekNumber: "",
        color: "",
        jobsBooked: []
      },
      sunday: {
        date: "",
        start: "",
        end: "",
        isNotWorking: false,
        weekNumber: "",
        color: "",
        jobsBooked: []
      },
      prefill: {
        monday: {
          start: "",
          end: ""
        },
        tuesday: {
          start: "",
          end: ""
        },
        wednesday: {
          start: "",
          end: ""
        },
        thursday: {
          start: "",
          end: ""
        },
        friday: {
          start: "",
          end: ""
        },
        saturday: {
          start: "",
          end: ""
        },
        sunday: {
          start: "",
          end: ""
        }
      }
    };
  },
  watch: {
    "monday.isNotWorking"(val) {
      if (val == true) {
        this.monday.start = null;
        this.monday.end = null;
        this.prefill.monday.start = null;
        this.prefill.monday.end = null;

        //Sets the start and end times to 00:00
        this.formatedTime("00:00 MON START");
        this.formatedTime("00:00 MON END");
      }
    },

    "tuesday.isNotWorking"(val) {
      if (val == true) {
        this.tuesday.start = null;
        this.tuesday.end = null;
        this.prefill.tuesday.start = null;
        this.prefill.tuesday.end = null;

        //Sets the start and end times to 00:00
        this.formatedTime("00:00 TUE START");
        this.formatedTime("00:00 TUE END");
      }
    },

    "wednesday.isNotWorking"(val) {
      if (val == true) {
        this.wednesday.start = null;
        this.wednesday.end = null;
        this.prefill.wednesday.start = null;
        this.prefill.wednesday.end = null;

        //Sets the start and end times to 00:00
        this.formatedTime("00:00 WED START");
        this.formatedTime("00:00 WED END");
      }
    },

    "thursday.isNotWorking"(val) {
      if (val == true) {
        this.thursday.start = null;
        this.thursday.end = null;
        this.prefill.thursday.start = null;
        this.prefill.thursday.end = null;

        //Sets the start and end times to 00:00
        this.formatedTime("00:00 TURS START");
        this.formatedTime("00:00 TURS END");
      }
    },
    "friday.isNotWorking"(val) {
      if (val == true) {
        this.friday.start = null;
        this.friday.end = null;
        this.prefill.friday.start = null;
        this.prefill.friday.end = null;

        //Sets the start and end times to 00:00
        this.formatedTime("00:00 FRI START");
        this.formatedTime("00:00 FRI END");
      }
    },
    "saturday.isNotWorking"(val) {
      if (val == true) {
        this.saturday.start = null;
        this.saturday.end = null;
        this.prefill.saturday.start = null;
        this.prefill.saturday.end = null;

        //Sets the start and end times to 00:00
        this.formatedTime("00:00 SAT START");
        this.formatedTime("00:00 SAT END");
      }
    },

    "sunday.isNotWorking"(val) {
      if (val == true) {
        this.sunday.start = null;
        this.sunday.end = null;
        this.prefill.sunday.start = null;
        this.prefill.sunday.end = null;

        //Sets the start and end times to 00:00
        this.formatedTime("00:00 SUN START");
        this.formatedTime("00:00 SUN END");
      }
    }
  },
  methods: {
    onTestTime(time) {
      console.log(time);
    },
    formatedTime(event) {
      console.log(event);
      const split = event.split(" ");
      console.log(split);

      const today = new Date();
      const weekNumber = moment(today, "MM-DD-YYYY").week();
      console.log(weekNumber);

      const millisecondsSinceToday =
        moment(today, "MM-DD-YYYY").hour() * 3.6e6 +
        moment(today, "MM-DD-YYYY").minute() * 60000 +
        moment(today, "MM-DD-YYYY").second() * 1000;

      console.log(millisecondsSinceToday);

      // console.log( moment("Wed Jul 10 2019 00:00:00 GMT+0200 (Central European Summer Time)", "MM-DD-YYYY").day())

      const millisecondsBeforeToday =
        new Date().getTime() - millisecondsSinceToday;

      console.log(new Date().getTime());
      console.log(new Date(millisecondsBeforeToday));

      const todaysDay = moment(today, "MM-DD-YYYY").day();
      console.log(todaysDay);

      //sets Monday times
      if (split[1] == "MON") {
        this.monday.weekNumber = weekNumber;

        if (todaysDay != 0) {
          //When current day is not Sunday
          const millisecondsBeforeThatDay =
            millisecondsBeforeToday + (1 - todaysDay) * 8.64e7;
          this.monday.date = new Date(millisecondsBeforeThatDay);
          console.log(this.monday.date);

          if (split[2] == "START") {
            //Set start time
            let timeSplit = split[0].split(":");
            console.log(timeSplit);

            let startDateTime = new Date(
              millisecondsBeforeThatDay +
                timeSplit[0] * 3.6e6 +
                timeSplit[1] * 60000
            );
            console.log(startDateTime);
            this.monday.start = startDateTime;
            console.log(this.monday.start);
          } else {
            //Set end time
            let timeSplit = split[0].split(":");
            console.log(timeSplit);

            let endDateTime = new Date(
              millisecondsBeforeThatDay +
                timeSplit[0] * 3.6e6 +
                timeSplit[1] * 60000
            );
            console.log(endDateTime);
            this.monday.end = endDateTime;
            console.log(this.monday.end);
          }
        } else {
          //When current day is Sunday
          const millisecondsBeforeThatDay =
            millisecondsBeforeToday - (todaysDay + 6) * 8.64e7;
          this.monday.date = new Date(millisecondsBeforeThatDay);
          console.log(this.monday.date);

          if (split[2] == "START") {
            //Set start time
            let timeSplit = split[0].split(":");
            console.log(timeSplit);

            let startDateTime = new Date(
              millisecondsBeforeThatDay +
                timeSplit[0] * 3.6e6 +
                timeSplit[1] * 60000
            );
            console.log(startDateTime);
            this.monday.start = startDateTime;
            console.log(this.monday.start);
          } else {
            //Set end time
            let timeSplit = split[0].split(":");
            console.log(timeSplit);

            let endDateTime = new Date(
              millisecondsBeforeThatDay +
                timeSplit[0] * 3.6e6 +
                timeSplit[1] * 60000
            );
            console.log(endDateTime);
            this.monday.end = endDateTime;
            console.log(this.monday.end);
          }
        }
      }

      //sets Tuesday times
      if (split[1] == "TUE") {
        this.tuesday.weekNumber = weekNumber;

        if (todaysDay != 0) {
          //When current day is not Sunday
          const millisecondsBeforeThatDay =
            millisecondsBeforeToday + (2 - todaysDay) * 8.64e7;
          this.tuesday.date = new Date(millisecondsBeforeThatDay);
          console.log(this.tuesday.date);

          if (split[2] == "START") {
            //Set start time
            let timeSplit = split[0].split(":");
            console.log(timeSplit);

            let startDateTime = new Date(
              millisecondsBeforeThatDay +
                timeSplit[0] * 3.6e6 +
                timeSplit[1] * 60000
            );
            console.log(startDateTime);
            this.tuesday.start = startDateTime;
            console.log(this.tuesday.start);
          } else {
            //Set end time
            let timeSplit = split[0].split(":");
            console.log(timeSplit);

            let endDateTime = new Date(
              millisecondsBeforeThatDay +
                timeSplit[0] * 3.6e6 +
                timeSplit[1] * 60000
            );
            console.log(endDateTime);
            this.tuesday.end = endDateTime;
            console.log(this.tuesday.end);
          }
        } else {
          //When current day is Sunday
          const millisecondsBeforeThatDay =
            millisecondsBeforeToday - (todaysDay + 5) * 8.64e7;
          this.tuesday.date = new Date(millisecondsBeforeThatDay);
          console.log(this.tuesday.date);

          if (split[2] == "START") {
            //Set start time
            let timeSplit = split[0].split(":");
            console.log(timeSplit);

            let startDateTime = new Date(
              millisecondsBeforeThatDay +
                timeSplit[0] * 3.6e6 +
                timeSplit[1] * 60000
            );
            console.log(startDateTime);
            this.tuesday.start = startDateTime;
            console.log(this.tuesday.start);
          } else {
            //Set end time
            let timeSplit = split[0].split(":");
            console.log(timeSplit);

            let endDateTime = new Date(
              millisecondsBeforeThatDay +
                timeSplit[0] * 3.6e6 +
                timeSplit[1] * 60000
            );
            console.log(endDateTime);
            this.tuesday.end = endDateTime;
            console.log(this.tuesday.end);
          }
        }
      }

      //sets Wednesday times
      if (split[1] == "WED") {
        this.wednesday.weekNumber = weekNumber;

        if (todaysDay != 0) {
          //When current day is not Sunday
          const millisecondsBeforeThatDay =
            millisecondsBeforeToday + (3 - todaysDay) * 8.64e7;
          this.wednesday.date = new Date(millisecondsBeforeThatDay);
          console.log(this.wednesday.date);

          if (split[2] == "START") {
            //Set start time
            let timeSplit = split[0].split(":");
            console.log(timeSplit);

            let startDateTime = new Date(
              millisecondsBeforeThatDay +
                timeSplit[0] * 3.6e6 +
                timeSplit[1] * 60000
            );
            console.log(startDateTime);
            this.wednesday.start = startDateTime;
            console.log(this.wednesday.start);
          } else {
            //Set end time
            let timeSplit = split[0].split(":");
            console.log(timeSplit);

            let endDateTime = new Date(
              millisecondsBeforeThatDay +
                timeSplit[0] * 3.6e6 +
                timeSplit[1] * 60000
            );
            console.log(endDateTime);
            this.wednesday.end = endDateTime;
            console.log(this.wednesday.end);
          }
        } else {
          //When current day is Sunday
          const millisecondsBeforeThatDay =
            millisecondsBeforeToday - (todaysDay + 4) * 8.64e7;
          this.wednesday.date = new Date(millisecondsBeforeThatDay);
          console.log(this.wednesday.date);

          if (split[2] == "START") {
            //Set start time
            let timeSplit = split[0].split(":");
            console.log(timeSplit);

            let startDateTime = new Date(
              millisecondsBeforeThatDay +
                timeSplit[0] * 3.6e6 +
                timeSplit[1] * 60000
            );
            console.log(startDateTime);
            this.wednesday.start = startDateTime;
            console.log(this.wednesday.start);
          } else {
            //Set end time
            let timeSplit = split[0].split(":");
            console.log(timeSplit);

            let endDateTime = new Date(
              millisecondsBeforeThatDay +
                timeSplit[0] * 3.6e6 +
                timeSplit[1] * 60000
            );
            console.log(endDateTime);
            this.wednesday.end = endDateTime;
            console.log(this.wednesday.end);
          }
        }
      }

      //sets Thursday times
      if (split[1] == "TURS") {
        this.thursday.weekNumber = weekNumber;

        if (todaysDay != 0) {
          //When current day is not Sunday
          const millisecondsBeforeThatDay =
            millisecondsBeforeToday + (4 - todaysDay) * 8.64e7;
          this.thursday.date = new Date(millisecondsBeforeThatDay);
          console.log(this.thursday.date);

          if (split[2] == "START") {
            //Set start time
            let timeSplit = split[0].split(":");
            console.log(timeSplit);

            let startDateTime = new Date(
              millisecondsBeforeThatDay +
                timeSplit[0] * 3.6e6 +
                timeSplit[1] * 60000
            );
            console.log(startDateTime);
            this.thursday.start = startDateTime;
            console.log(this.thursday.start);
          } else {
            //Set end time
            let timeSplit = split[0].split(":");
            console.log(timeSplit);

            let endDateTime = new Date(
              millisecondsBeforeThatDay +
                timeSplit[0] * 3.6e6 +
                timeSplit[1] * 60000
            );
            console.log(endDateTime);
            this.thursday.end = endDateTime;
            console.log(this.thursday.end);
          }
        } else {
          //When current day is Sunday
          const millisecondsBeforeThatDay =
            millisecondsBeforeToday - (todaysDay + 3) * 8.64e7;
          this.thursday.date = new Date(millisecondsBeforeThatDay);
          console.log(this.thursday.date);

          if (split[2] == "START") {
            //Set start time
            let timeSplit = split[0].split(":");
            console.log(timeSplit);

            let startDateTime = new Date(
              millisecondsBeforeThatDay +
                timeSplit[0] * 3.6e6 +
                timeSplit[1] * 60000
            );
            console.log(startDateTime);
            this.thursday.start = startDateTime;
            console.log(this.thursday.start);
          } else {
            //Set end time
            let timeSplit = split[0].split(":");
            console.log(timeSplit);

            let endDateTime = new Date(
              millisecondsBeforeThatDay +
                timeSplit[0] * 3.6e6 +
                timeSplit[1] * 60000
            );
            console.log(endDateTime);
            this.thursday.end = endDateTime;
            console.log(this.thursday.end);
          }
        }
      }

      //sets Friday times
      if (split[1] == "FRI") {
        this.friday.weekNumber = weekNumber;

        if (todaysDay != 0) {
          //When current day is not Sunday
          const millisecondsBeforeThatDay =
            millisecondsBeforeToday + (5 - todaysDay) * 8.64e7;
          this.friday.date = new Date(millisecondsBeforeThatDay);
          console.log(this.friday.date);

          if (split[2] == "START") {
            //Set start time
            let timeSplit = split[0].split(":");
            console.log(timeSplit);

            let startDateTime = new Date(
              millisecondsBeforeThatDay +
                timeSplit[0] * 3.6e6 +
                timeSplit[1] * 60000
            );
            console.log(startDateTime);
            this.friday.start = startDateTime;
            console.log(this.friday.start);
          } else {
            //Set end time
            let timeSplit = split[0].split(":");
            console.log(timeSplit);

            let endDateTime = new Date(
              millisecondsBeforeThatDay +
                timeSplit[0] * 3.6e6 +
                timeSplit[1] * 60000
            );
            console.log(endDateTime);
            this.friday.end = endDateTime;
            console.log(this.friday.end);
          }
        } else {
          //When current day is Sunday
          const millisecondsBeforeThatDay =
            millisecondsBeforeToday - (todaysDay + 2) * 8.64e7;
          this.friday.date = new Date(millisecondsBeforeThatDay);
          console.log(this.friday.date);

          if (split[2] == "START") {
            //Set start time
            let timeSplit = split[0].split(":");
            console.log(timeSplit);

            let startDateTime = new Date(
              millisecondsBeforeThatDay +
                timeSplit[0] * 3.6e6 +
                timeSplit[1] * 60000
            );
            console.log(startDateTime);
            this.friday.start = startDateTime;
            console.log(this.friday.start);
          } else {
            //Set end time
            let timeSplit = split[0].split(":");
            console.log(timeSplit);

            let endDateTime = new Date(
              millisecondsBeforeThatDay +
                timeSplit[0] * 3.6e6 +
                timeSplit[1] * 60000
            );
            console.log(endDateTime);
            this.friday.end = endDateTime;
            console.log(this.friday.end);
          }
        }
      }

      //sets Saturday times
      if (split[1] == "SAT") {
        this.saturday.weekNumber = weekNumber;

        if (todaysDay != 0) {
          //When current day is not Sunday
          const millisecondsBeforeThatDay =
            millisecondsBeforeToday + (6 - todaysDay) * 8.64e7;
          this.saturday.date = new Date(millisecondsBeforeThatDay);
          console.log(this.saturday.date);

          if (split[2] == "START") {
            //Set start time
            let timeSplit = split[0].split(":");
            console.log(timeSplit);

            let startDateTime = new Date(
              millisecondsBeforeThatDay +
                timeSplit[0] * 3.6e6 +
                timeSplit[1] * 60000
            );
            console.log(startDateTime);
            this.saturday.start = startDateTime;
            console.log(this.saturday.start);
          } else {
            //Set end time
            let timeSplit = split[0].split(":");
            console.log(timeSplit);

            let endDateTime = new Date(
              millisecondsBeforeThatDay +
                timeSplit[0] * 3.6e6 +
                timeSplit[1] * 60000
            );
            console.log(endDateTime);
            this.saturday.end = endDateTime;
            console.log(this.saturday.end);
          }
        } else {
          //When current day is Sunday
          const millisecondsBeforeThatDay =
            millisecondsBeforeToday - (todaysDay + 1) * 8.64e7;
          this.saturday.date = new Date(millisecondsBeforeThatDay);
          console.log(this.saturday.date);

          if (split[2] == "START") {
            //Set start time
            let timeSplit = split[0].split(":");
            console.log(timeSplit);

            let startDateTime = new Date(
              millisecondsBeforeThatDay +
                timeSplit[0] * 3.6e6 +
                timeSplit[1] * 60000
            );
            console.log(startDateTime);
            this.saturday.start = startDateTime;
            console.log(this.saturday.start);
          } else {
            //Set end time
            let timeSplit = split[0].split(":");
            console.log(timeSplit);

            let endDateTime = new Date(
              millisecondsBeforeThatDay +
                timeSplit[0] * 3.6e6 +
                timeSplit[1] * 60000
            );
            console.log(endDateTime);
            this.saturday.end = endDateTime;
            console.log(this.saturday.end);
          }
        }
      }

      //sets Sunday times
      if (split[1] == "SUN") {
        this.sunday.weekNumber = weekNumber;

        if (todaysDay != 0) {
          //When current day is not Sunday
          const millisecondsBeforeThatDay =
            millisecondsBeforeToday + (7 - todaysDay) * 8.64e7;
          this.sunday.date = new Date(millisecondsBeforeThatDay);
          console.log(this.sunday.date);

          if (split[2] == "START") {
            //Set start time
            let timeSplit = split[0].split(":");
            console.log(timeSplit);

            let startDateTime = new Date(
              millisecondsBeforeThatDay +
                timeSplit[0] * 3.6e6 +
                timeSplit[1] * 60000
            );
            console.log(startDateTime);
            this.sunday.start = startDateTime;
            console.log(this.sunday.start);
          } else {
            //Set end time
            let timeSplit = split[0].split(":");
            console.log(timeSplit);

            let endDateTime = new Date(
              millisecondsBeforeThatDay +
                timeSplit[0] * 3.6e6 +
                timeSplit[1] * 60000
            );
            console.log(endDateTime);
            this.sunday.end = endDateTime;
            console.log(this.sunday.end);
          }
        } else {
          //When current day is Sunday
          const millisecondsBeforeThatDay =
            millisecondsBeforeToday - todaysDay * 8.64e7;
          this.sunday.date = new Date(millisecondsBeforeThatDay);
          console.log(this.sunday.date);

          if (split[2] == "START") {
            //Set start time
            let timeSplit = split[0].split(":");
            console.log(timeSplit);

            let startDateTime = new Date(
              millisecondsBeforeThatDay +
                timeSplit[0] * 3.6e6 +
                timeSplit[1] * 60000
            );
            console.log(startDateTime);
            this.sunday.start = startDateTime;
            console.log(this.sunday.start);
          } else {
            //Set end time
            let timeSplit = split[0].split(":");
            console.log(timeSplit);

            let endDateTime = new Date(
              millisecondsBeforeThatDay +
                timeSplit[0] * 3.6e6 +
                timeSplit[1] * 60000
            );
            console.log(endDateTime);
            this.sunday.end = endDateTime;
            console.log(this.sunday.end);
          }
        }
      }
    },

    clearTime(day, period, time) {
      console.log(time);
      //Clear Monday times
      if (day == "monday" && period == "start") {
        this.monday.start = null;

        //Run the formatedTime method
        this.formatedTime(time);

        console.log(day, period);
      }
      if (day == "monday" && period == "end") {
        this.monday.end = null;
        console.log(day, period);

        //Run the formatedTime method
        this.formatedTime(time);
      }

      //Clear Tuesday times
      if (day == "tuesday" && period == "start") {
        this.tuesday.start = null;
        console.log(day, period);

        //Run the formatedTime method
        this.formatedTime(time);
      }
      if (day == "tuesday" && period == "end") {
        this.tuesday.end = null;
        console.log(day, period);

        //Run the formatedTime method
        this.formatedTime(time);
      }

      //Clear Wednesday times
      if (day == "wednesday" && period == "start") {
        this.wednesday.start = null;
        console.log(day, period);

        //Run the formatedTime method
        this.formatedTime(time);
      }
      if (day == "wednesday" && period == "end") {
        this.wednesday.end = null;
        console.log(day, period);

        //Run the formatedTime method
        this.formatedTime(time);
      }

      //Clear Thursday times
      if (day == "thursday" && period == "start") {
        this.thursday.start = null;
        console.log(day, period);

        //Run the formatedTime method
        this.formatedTime(time);
      }
      if (day == "thursday" && period == "end") {
        this.thursday.end = null;
        console.log(day, period);

        //Run the formatedTime method
        this.formatedTime(time);
      }

      //Clear Friday times
      if (day == "friday" && period == "start") {
        this.friday.start = null;
        console.log(day, period);

        //Run the formatedTime method
        this.formatedTime(time);
      }
      if (day == "friday" && period == "end") {
        this.friday.end = null;
        console.log(day, period);

        //Run the formatedTime method
        this.formatedTime(time);
      }

      //Clear Saturday times
      if (day == "saturday" && period == "start") {
        this.saturday.start = null;
        console.log(day, period);

        //Run the formatedTime method
        this.formatedTime(time);
      }
      if (day == "saturday" && period == "end") {
        this.saturday.end = null;
        console.log(day, period);

        //Run the formatedTime method
        this.formatedTime(time);
      }

      //Clear Sunday times
      if (day == "sunday" && period == "start") {
        this.sunday.start = null;
        console.log(day, period);

        //Run the formatedTime method
        this.formatedTime(time);
      }
      if (day == "sunday" && period == "end") {
        this.sunday.end = null;
        console.log(day, period);

        //Run the formatedTime method
        this.formatedTime(time);
      }
    },

    onSubmit(action) {
      const weekArray = [
        this.monday,
        this.tuesday,
        this.wednesday,
        this.thursday,
        this.friday,
        this.saturday,
        this.sunday
      ];
      console.log(weekArray);

      const calendarArray = [];
      for (let i = 0; i < 100; i++) {
        weekArray.forEach(item => {
          let date = new Date(Date.parse(item.date) + i * 7 * 8.64e7);
          let weekNumber = moment(date, "MM-DD-YYYY").week();
          let newItem = {
            date,
            weekNumber,
            color: item.color,
            end: item.end,
            start: item.start,
            isNotWorking: item.isNotWorking,
            jobsBooked: item.jobsBooked
          };
          calendarArray.push(newItem);
        });
      }
      console.log(calendarArray);

      const inspectorAvailabilityData = {
        calendar: calendarArray,
        action
      };

      this.$store.dispatch(
        "vehicleInspector/storeInspectorCalendar",
        inspectorAvailabilityData
      );
    }
  },

  created() {
    axios
      .get("/inspector_infos/me")
      .then(res => {
        const availability = res.data.calendar;
        this.prefill.monday.start = new Date(availability[0].start);
        this.prefill.monday.end = new Date(availability[0].end);
        this.prefill.tuesday.start = new Date(availability[1].start);
        this.prefill.tuesday.end = new Date(availability[1].end);
        this.prefill.wednesday.start = new Date(availability[2].start);
        this.prefill.wednesday.end = new Date(availability[2].end);
        this.prefill.thursday.start = new Date(availability[3].start);
        this.prefill.thursday.end = new Date(availability[3].end);
        this.prefill.friday.start = new Date(availability[4].start);
        this.prefill.friday.end = new Date(availability[4].end);
        this.prefill.saturday.start = new Date(availability[5].start);
        this.prefill.saturday.end = new Date(availability[5].end);
        this.prefill.sunday.start = new Date(availability[6].start);
        this.prefill.sunday.end = new Date(availability[6].end);

        this.monday.start = new Date(availability[0].start);
        this.monday.end = new Date(availability[0].end);
        this.tuesday.start = new Date(availability[1].start);
        this.tuesday.end = new Date(availability[1].end);
        this.wednesday.start = new Date(availability[2].start);
        this.wednesday.end = new Date(availability[2].end);
        this.thursday.start = new Date(availability[3].start);
        this.thursday.end = new Date(availability[3].end);
        this.friday.start = new Date(availability[4].start);
        this.friday.end = new Date(availability[4].end);
        this.saturday.start = new Date(availability[5].start);
        this.saturday.end = new Date(availability[5].end);
        this.sunday.start = new Date(availability[6].start);
        this.sunday.end = new Date(availability[6].end);

        this.monday.isNotWorking = availability[0].isNotWorking;
        this.tuesday.isNotWorking = availability[1].isNotWorking;
        this.wednesday.isNotWorking = availability[2].isNotWorking;
        this.thursday.isNotWorking = availability[3].isNotWorking;
        this.friday.isNotWorking = availability[4].isNotWorking;
        this.saturday.isNotWorking = availability[5].isNotWorking;
        this.sunday.isNotWorking = availability[6].isNotWorking;
      })
      .catch(error => console.log(error));
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.body {
  font-family: sans-serif, Arial, Helvetica;
  margin: 50px;
}
.container {
  background-color: lightblue;
  display: inline-block;
}

.container-right {
  background-color: white;
  float: left;
  margin-left: 50px;
  margin-right: 0px;
  margin-top: 50px;
  margin-bottom: 50px;
  width: 63%;
}

.container-left {
  background-color: white;
  float: left;
  margin-right: 0px;
  margin-left: 50px;
  margin-top: 50px;
  width: 25%;
  padding-left: 20px;
  border-radius: 10px;
}

.back-btn {
  padding: 0px;
  font-size: 13px;
  width: 70px;
  color: black;
  border-radius: 20px;
  font-weight: bold;
  background-color: white;
  height: 40px;
  margin-top: 0px;
  text-align: center;
  box-sizing: border-box;
  cursor: pointer;
  opacity: 0.9;
}

.next-btn {
  float: right;
  margin-left: 0px;
  padding: 0px;
  font-size: 13px;
  width: 70px;
  color: white;
  margin-left: 20px;
  border-radius: 20px;
  font-weight: bold;
  background-color: black;
  height: 40px;
  margin-top: 0px;
  text-align: center;
  box-sizing: border-box;
  cursor: pointer;
  opacity: 0.9;
}
.back-btn:hover {
  opacity: 1;
  color: white;
  background-color: black;
}

.next-btn:hover {
  opacity: 1;
  color: black;
  background-color: white;
}

select {
  padding: 8px;
  margin: 8px 0px 22px 0px;
  border: none;
  width: 100%;
  background: #f1f1f1;
  box-sizing: border-box;
}

.fa,
.fa-times-rectangle-o {
  padding-left: 100px;
}

.circle {
  padding: 25%;
  border-radius: 50%;
  margin: 8px 0 10px 0;
  width: 100%;
  display: inline-block;
  border: 2px solid #f1f1f1;
  box-sizing: border-box;
  text-align: center;
}

.status-bar {
  font-size: 20px;
  background-color: white;
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  padding-top: 10px;
  box-sizing: border-box;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.table-row {
  height: 30px;
  padding-top: 5px;
  box-sizing: border-box;
  background-color: #f1f1f1;
}

.label-input {
  display: table-row;
  box-sizing: border-box;
}

.text-spaced {
  font-size: 20px;
  box-sizing: border-box;
}

hr {
  border: 1px solid #f1f1f1;
  margin-bottom: 5px;
  width: 100%;
  clear: left;
}

[class*="col-"] {
  float: left;
  padding: 0px;
}

/* For mobile phones: */
@media only screen and (max-width: 600px) {
  .col-s-1 {
    width: 8.33%;
  }

  .col-s-2 {
    width: 16.66%;
  }

  .col-s-3 {
    width: 25%;
  }

  .col-s-4 {
    width: 33.33%;
  }

  .col-s-5 {
    width: 41.66%;
  }

  .col-s-6 {
    width: 50%;
  }

  .col-s-7 {
    width: 58.33%;
  }

  .col-s-8 {
    width: 66.66%;
  }

  .col-s-9 {
    width: 75%;
  }

  .col-s-10 {
    width: 83.33%;
  }

  .col-s-11 {
    width: 91.66%;
  }

  .col-s-12 {
    width: 100%;
  }

  .container-right {
    left: 0%;
    margin: 0px;
  }

  .container-content {
    margin-left: 10px;
    margin-right: 10px;
  }

  .label-input {
    font-size: 11px;
    padding-left: 0px;
    padding-right: 0px;
  }

  .status-bar {
    padding-left: 10px;
    display: table-row;
  }

  .table-row {
    font-size: 14px;
    padding-left: 5px;
  }

  .table-content {
    font-size: 15px;
    padding-left: 5px;
  }
}

/* For tablets: */
@media only screen and (min-width: 600px) {
  .col-1 {
    width: 8.33%;
  }

  .col-2 {
    width: 16.66%;
  }

  .col-3 {
    width: 25%;
  }

  .col-4 {
    width: 33.33%;
  }

  .col-5 {
    width: 41.66%;
  }

  .col-6 {
    width: 50%;
  }

  .col-7 {
    width: 58.33%;
  }

  .col-8 {
    width: 66.66%;
  }

  .col-9 {
    width: 75%;
  }

  .col-10 {
    width: 83.33%;
  }

  .col-11 {
    width: 91.66%;
  }

  .col-12 {
    width: 100%;
  }

  .container-right {
    width: 100%;
    left: 0%;
  }

  .container-content {
    margin-left: 20px;
    margin-right: 15px;
  }

  .label-input {
    font-size: 12px;
    padding-left: 0px;
    padding-right: 15px;
  }

  .status-bar {
    padding-left: 20px;
    display: table-row;
  }

  .table-row {
    font-size: 14px;
    padding-left: 5px;
  }

  .table-content {
    font-size: 15px;
    padding-left: 5px;
  }
}

/* For desktop: */
@media only screen and (min-width: 768px) {
  .container-left {
    display: table-row;
  }

  .container-right {
    width: 60%;
    left: 35%;
  }

  .container-content {
    margin-left: 15px;
    margin-right: 10px;
  }

  .label-input {
    font-size: 12px;
    padding-left: 0px;
    padding-right: 10px;
  }

  .status-bar {
    display: none;
  }

  .table-row {
    font-size: 15px;
    padding-left: 10px;
  }

  .table-content {
    font-size: 16px;
    padding-left: 10px;
  }
}

/* Large devices (laptops/desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  .container-content {
    margin-left: 70px;
    margin-right: 60px;
  }

  .label-input {
    font-size: 13px;
    padding-left: 0px;
    padding-right: 20px;
  }

  .table-row {
    font-size: 15px;
    padding-left: 20px;
  }

  .table-content {
    font-size: 16px;
    padding-left: 20px;
  }
}
</style>

