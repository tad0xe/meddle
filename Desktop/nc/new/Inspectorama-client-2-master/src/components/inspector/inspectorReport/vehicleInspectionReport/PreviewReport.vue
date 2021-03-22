<template>
  <div class="container">
    <div class="container-header">
      <vehicle-inspector-sub-header></vehicle-inspector-sub-header>
    </div>
    <div class="container-left">
      <div class="top-title">
        <h3>
          My Jobs
          <span>>&nbsp;{{ ID }}</span>
        </h3>
      </div>
      <center class="messageReport-header">
        <span class="u-dotted">
          <strong>Messages</strong>
        </span>
        <span class="active-message">
          <strong>Report</strong>
        </span>
      </center>
      <form @submit.prevent="onSubmit()">
        <div class="row">
          <div class="step1 active-step">
            <a>
              <strong>Vehicle Description</strong>
            </a>
            <i class="fa fa-arrow-circle-o-up"></i>
          </div>
        </div>
        <div class="previewReport-content">
          <div class="row">
            <div class="left">
              Customer Name:
              <strong>&nbsp;Joseph Parker</strong>
            </div>
            <div class="right">
              Order ID:
              <strong>&nbsp;856454</strong>
            </div>
          </div>
          <br>
          <div class="row">
            <div class="left">
              Full VIN:
              <strong>&nbsp;SHSRD78504U229993</strong>
            </div>
            <div class="right">
              Mileage:
              <strong>&nbsp;87.324</strong>
            </div>
          </div>
          <br>
          <div class="row">
            <div class="left">
              Transmission Type:
              <strong>&nbsp;Automatic</strong>
            </div>
            <div class="right">
              Vehicle brand:
              <strong>&nbsp;BMW</strong>
            </div>
          </div>
          <br>
          <div class="row">
            <div class="left">
              Model:
              <strong>&nbsp;X5 M</strong>
            </div>
            <div class="right">
              Year:
              <strong>&nbsp;2012</strong>
            </div>
          </div>
          <br>
          <div class="row">
            <div class="left">
              Engine Cylinders:
              <strong>&nbsp;DOHC L4</strong>
            </div>
            <div class="right">
              Engine Liters:
              <strong>&nbsp;2.4</strong>
            </div>
          </div>
          <br>
          <div class="row">
            <div class="left">
              Engine Type:
              <strong>&nbsp;Gas</strong>
            </div>
          </div>
          <br>
          <div class="row">
            <div class="comments">
              <i class="fa fa-comments"></i>
              <a>
                <small>Comments</small>
              </a>
            </div>
          </div>
        </div>
      </form>
      <div class="step2">
        <a>
          <strong>Exteriors</strong>
        </a>
        <i class="fa fa-arrow-circle-o-down"></i>
      </div>
      <div class="row">
        <div class="step3">
          <a>
            <strong>Interior</strong>
          </a>
          <i class="fa fa-arrow-circle-o-down"></i>
        </div>
      </div>
      <div class="row">
        <div class="step4">
          <a>
            <strong>Road Test</strong>
          </a>
          <i class="fa fa-arrow-circle-o-down"></i>
        </div>
      </div>
      <div class="row">
        <div class="step5">
          <a>
            <strong>Additional Inspection Points</strong>
          </a>
          <i class="fa fa-arrow-circle-o-down"></i>
        </div>
      </div>
      <div class="row">
        <div class="step6">
          <a>
            <strong>More Photos and Videos</strong>
          </a>
          <i class="fa fa-arrow-circle-o-down"></i>
        </div>
      </div>
      <br>
      <div class="row">
        <div class="footer">
          <button type="submit" class="back-btn">Back</button>
          <i class="fa fa-print">
            <br>
            <span>Print Report</span>
          </i>
          <i class="fa fa-file-pdf-o">
            <br>
            <span>Download Report</span>
          </i>
          <button type="submit" class="sendReport-btn">Send Report</button>
        </div>
      </div>
    </div>
    <div class="container-right">
      <vehicle-insp-report-status></vehicle-insp-report-status>
    </div>
  </div>
</template>


<script>
import VehicleInspectorSubHeader from "./VehicleInspectorSubHeader.vue";
import VehicleInspReportStatus from "./VehicleInspReportStatus.vue";

export default {
  data: function() {
    return {
      ID: "ID 1"
    };
  },

  components: {
    VehicleInspectorSubHeader,
    VehicleInspReportStatus
  }
};
</script>


<style scoped>
textarea {
  width: 100%;
}

.top-title {
  font-size: 15px;
  padding: 10px;
}

.top-title span {
  font-weight: lighter;
}

.container-left .comments .fa,
.fa-comments {
  font-size: 30px;
  padding-left: 10px;
  width: auto;
  float: left;
}
.container-left .comments a {
  font-size: 13px;
  padding-top: 13px;
  width: auto;
  float: left;
  display: inline-block;
}

.container {
  background-color: lightblue;
  display: inline-block;
  font-family: sans-serif, Arial, Helvetica;
  width: 100%;
}

.container-left {
  float: left;
  font-size: 12px;
  background-color: white;
  margin-bottom: 50px;
  display: inline-block;
  border: 1px solid #b6b1b1;
}

.messageReport-header {
  padding: 25px;
  color: #808080;
  border-top: 1px solid #b6b1b1;
}

.active-message {
  padding: 10px;
  margin-left: 10px;
  margin-right: 10px;
  width: 70px;
  display: inline-table;
  color: white;
  background-color: black;
}

.u-dotted {
  border-bottom: 1px dotted black;
  color: black;
}

.previewReport-content {
  padding: 20px;
  padding-right: 0px;
  font-size: 14px;
  border-top: 1px solid #b6b1b1;
}

.previewReport-content .left {
  float: left;
  width: 60%;
}

.previewReport-content .right {
  float: left;
  width: 40%;
  padding-left: 10px;
}

.step1,
.step2,
.step3,
.step4,
.step5,
.step6 {
  padding: 10px;
  padding-left: 20px;
  font-size: 18px;
  width: 100%;
  display: inline-table;
  color: #808080;
  border-top: 1px solid #b6b1b1;
}

.step6 {
  border-bottom: 1px solid #b6b1b1;
}

.step1,
.step2,
.step3,
.step4,
.step5,
.step6,
a {
  float: left;
  padding-top: 12px;
}

.step1 .step2 .step3 .step4 .step5 .step6 .fa,
.fa-arrow-circle-o-up,
.fa-arrow-circle-o-down {
  float: right;
  padding: 10px;
  text-align: center;
  font-size: 22px;
  width: auto;
}

.done-step {
  background-color: #f1f1f1;
  font-weight: lighter;
}

.active-step {
  background-color: #f1f1f1;
}

.active-step strong,
.fa-arrow-circle-o-up {
  color: black;
}

.footer {
  padding: 20px;
  padding-bottom: 10px;
  width: 100%;
  display: inline-block;
}

.back-btn,
.sendReport-btn {
  font-size: 13px;
  border-radius: 20px;
  font-weight: bold;
  height: 40px;
  text-align: center;
  box-sizing: border-box;
  cursor: pointer;
  opacity: 0.9;
}

.back-btn {
  float: left;
  width: 70px;
  margin-right: 20px;
  color: black;
  background-color: white;
}

.sendReport-btn {
  float: right;
  width: 120px;
  color: white;
  background-color: black;
}

.container-left .footer .fa,
.fa-print,
.fa-file-pdf-o {
  float: left;
  font-size: 50px;
  margin-left: 20px;
  line-height: 25px;
  text-align: center;
}

.container-left .footer span {
  font-size: 14px;
}

select {
  padding: 8px;
  margin: 8px 0px 22px 0px;
  border: none;
  width: 100%;
  background: #f1f1f1;
  box-sizing: border-box;
}

* {
  box-sizing: border-box;
}

/* Clear floats after the columns */
.row::after {
  content: "";
  clear: both;
  display: table;
}

@media only screen and (max-width: 680px) {
  .column {
    padding: 0px;
    float: left;
    width: 100%;
  }

  .container-right {
    display: none;
  }

  .container-left {
    padding: 0px;
    margin: 0px;
    width: 100%;
  }

  .container {
    padding: 0px;
    margin: 0px;
  }

  .container-header {
    display: none;
  }

  .previewReport-content .left {
    padding-left: 20px;
  }
}

@media screen and (min-width: 680px) {
  .column {
    padding: 0px 10px;
    float: left;
    width: 50%;
  }

  .container-header {
    display: block;
  }

  .container-right {
    display: block;
  }

  .container-left {
    margin-top: 5%;
    margin-left: 4%;
    width: 60%;
  }

  .previewReport-content .left {
    padding-left: 50px;
  }
}
</style>