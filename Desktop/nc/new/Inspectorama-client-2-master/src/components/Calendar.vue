<template>
  <div class="calendar">
    <div class="calendar">
      <div class="header">
        <a class="arrow" @click="movePreviousYear">&laquo;</a>
        <a class="arrow" @click="movePreviousMonth">&lsaquo;</a>
        <span class="title" @click="moveThisMonth">{{ header.label }}</span>
        <a class="arrow" @click="moveNextMonth">&rsaquo;</a>
        <a class="arrow" @click="moveNextYear">&raquo;</a>
      </div>
      <div class="weekdays">
        <div class="weekday" v-for="(weekday, index) in weekdays" :key="index">{{ weekday.label }}</div>
      </div>
      <div class="week" v-for="(week, index) in weeks" :key="index">
        <div
          class="day"
          :class="{today: day.isToday, blocked: day.isBlocked, 
          activeDate:day.number != 0 && (day.isActiveDate || day.isWithinSelectedRange),
          pastDate: day.isPastDate}"
          v-for="(day, index) in week"
          :key="index"
          @click="onPickDate(day)"
        >{{ day.label }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import i18n from "../i18n";

//https://medium.com/@nathanreyes/building-an-extendable-calendar-in-vue-js-part-1-8fb26c04819

// Calendar data
const _daysInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
let _weekdayLabels;
let _monthLabels;
const _weekdayLength = 3;
const _weekdayCasing = "title";
const _monthLength = 0;
const _monthCasing = "title";

// Helper function for label transformation
const _transformLabel = (label, length, casing) => {
  label = length <= 0 ? label : label.substring(0, length);
  if (casing.toLowerCase() === "lower") return label.toLowerCase();
  if (casing.toLowerCase() === "upper") return label.toUpperCase();
  return label;
};

// Today's data
const _today = new Date();
const _todayComps = {
  year: _today.getFullYear(),
  month: _today.getMonth() + 1,
  day: _today.getDate()
};
export default {
  props: {
    events: "",
    startDate: "",
    endDate: ""
  },
  data() {
    return {
      today: new Date(),
      month: new Date().getMonth() + 1,
      year: new Date().getFullYear()
    };
  },

  watch: {
    $route(to, from) {
      _weekdayLabels = this.$i18n.t("calendar.weekDays");
      _monthLabels = this.$i18n.t("calendar.months");
      this.$router.go()
    }
  },

  computed: {
    // Our component exposes month as 1-based, but sometimes we need 0-based
    monthIndex() {
      return this.month - 1;
    },
    // State referenced by header (no dependencies yet...)
    months() {
      return _monthLabels.map((ml, i) => ({
        label: _transformLabel(ml, _monthLength, _monthCasing),
        number: i + 1
      }));
    },
    // State for weekday header (no dependencies yet...)
    weekdays() {
      return _weekdayLabels.map((wl, i) => {
        return {
          label: _transformLabel(wl, _weekdayLength, _weekdayCasing),
          number: i + 1
        };
      });
    },
    // State for calendar header
    header() {
      const month = this.months[this.monthIndex];
      return {
        month,
        year: this.year.toString(),
        shortYear: this.year.toString().substring(2, 4),
        label: month.label + " " + this.year
      };
    },
    // Returns number for first weekday (1-7), starting from Sunday
    firstWeekdayInMonth() {
      return new Date(this.year, this.monthIndex, 1).getDay() + 1;
    },
    // Returns number of days in the current month
    daysInMonth() {
      // Check for February in a leap year
      const isFebruary = this.month === 2;
      const isLeapYear =
        (this.year % 4 == 0 && this.year % 100 != 0) || this.year % 400 == 0;
      if (isFebruary && isLeapYear) return 29;
      // ...Just a normal month
      return _daysInMonths[this.monthIndex];
    },
    weeks() {
      const weeks = [];
      let monthStarted = false,
        monthEnded = false;
      let monthDay = 0;
      // Cycle through each week of the month, up to 6 total
      for (let w = 1; w <= 6 && !monthEnded; w++) {
        // Cycle through each weekday
        const week = [];
        for (let d = 1; d <= 7; d++) {
          // We need to know when to start counting actual month days
          if (!monthStarted && d >= this.firstWeekdayInMonth) {
            // Initialize day counter
            monthDay = 1;
            // ...and flag we're tracking actual month days
            monthStarted = true;
            // Still in the middle of the month (hasn't ended yet)
          } else if (monthStarted && !monthEnded) {
            // Increment the day counter
            monthDay += 1;
          }
          // Append day info for the current week
          // Note: this might or might not be an actual month day
          //  We don't know how the UI wants to display various days,
          //  so we'll supply all the data we can

          //Calculate each date
          const date = new Date(this.year, this.month - 1, monthDay);

          //Populate with blocked days
          let isBlocked = false;
          const blocked = [];
          this.events.forEach(item => {
            if (date >= item.start && date <= item.end) {
              blocked.push(item);
            }
          });
          if (blocked.length) {
            isBlocked = true;
          }

          //Ative date
          let isActiveDate = false;
          if (this.startDate) {
            if (date.getTime() == this.startDate.getTime()) {
              isActiveDate = true;
            }
          }

          //Chek if date is within the selected range
          let isWithinSelectedRange = false;
          if (this.startDate && this.endDate) {
            if (
              date.getTime() >= this.startDate.getTime() &&
              date.getTime() <= this.endDate.getTime()
            ) {
              isWithinSelectedRange = true;
            }
          }

          //Check if date is passed
          let isPastDate = true;
          //Without milliseconds and hours
          const todaysDate = new Date(
            _todayComps.year,
            _todayComps.month - 1,
            _todayComps.day
          );
          if (date.getTime() >= todaysDate.getTime()) {
            isPastDate = false;
          }

          week.push({
            label: monthDay ? monthDay.toString() : "",
            number: monthDay,
            weekdayNumber: d,
            weekNumber: w,
            beforeMonth: !monthStarted,
            afterMonth: monthEnded,
            inMonth: monthStarted && !monthEnded,
            isToday:
              monthDay === _todayComps.day &&
              this.month === _todayComps.month &&
              this.year === _todayComps.year,
            isFirstDay: monthDay === 1,
            isLastDay: monthDay === this.daysInMonth,
            year: this.year,
            month: this.month,
            date,
            isBlocked,
            isActiveDate,
            isWithinSelectedRange,
            isPastDate
          });

          // Trigger end of month on the last day
          if (monthStarted && !monthEnded && monthDay >= this.daysInMonth) {
            monthDay = 0;
            monthEnded = true;
          }
        }
        // Append week info for the month
        weeks.push(week);
      }
      return weeks;
    }
  },
  methods: {
    moveThisMonth() {
      this.month = _todayComps.month;
      this.year = _todayComps.year;
    },
    moveNextMonth() {
      if (this.month < 12) {
        this.month++;
      } else {
        this.month = 1;
        this.year++;
      }
    },
    movePreviousMonth() {
      if (this.month > 1) {
        this.month--;
      } else {
        this.month = 12;
        this.year--;
      }
    },
    moveNextYear() {
      this.year++;
    },
    movePreviousYear() {
      this.year--;
    },
    onPickDate(content) {
      this.$emit("onDateClick", content.date);
    }
  },
  created() {
    _weekdayLabels = this.$i18n.t("calendar.weekDays");
    _monthLabels = this.$i18n.t("calendar.months");
  }
};
</script>

<style lang="sass" scoped>
@import '../scss/calendar.sass'

</style>