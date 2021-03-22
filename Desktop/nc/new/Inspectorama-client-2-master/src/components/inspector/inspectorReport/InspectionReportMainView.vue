<template>
  <div>
    <div class="container">
      <!-- <div class="container-header">
        <vehicle-inspector-sub-header></vehicle-inspector-sub-header>
      </div> -->
      <div class="container-left">
        <div class="top-title">
          <h3>
            {{$t('inspectionReportMainView.jobId')}}
            <span>:&nbsp;{{ sequenceId }}</span>
          </h3>
        </div>
        <div class="messageReport-header">
          <div
            :class="{'active-message-report': isMessagesVisible , 'u-dotted': !isMessagesVisible}"
            @click="showMessages"
          >
            <span>
              <strong>{{$t('inspectionReportMainView.messages')}}</strong>
            </span>
          </div>
          <div
            :class="{'active-message-report': isReportDivVisible , 'u-dotted': !isReportDivVisible}"
            @click="showReport"
          >
            <span>
              <strong>{{$t('inspectionReportMainView.report')}}</strong>
            </span>
          </div>
        </div>
        <div v-show="isMessagesVisible"> 
          <center>
            <subChat :activeSummary="displayedSummary" @currentOrderId="checkIfCurrentOrder"></subChat>
          </center>
        </div>
        <div v-if="isReportDivVisible">
          <VehicleInspectorReportAll v-if="typeOfInspector == 'Vehicle'"></VehicleInspectorReportAll>
          <HomeInspectorReportAll v-if="typeOfInspector == 'Home'"></HomeInspectorReportAll>
        </div>
      </div>
      <div class="container-right">
        <InspectionReportSummary :jobId="jobId" :typeOfInspector="typeOfInspector"></InspectionReportSummary>
      </div>
    </div>
  </div>
</template>

<script>
import globalAxios from "axios";
// import VehicleInspectorSubHeader from "./vehicleInspectionReport/VehicleInspectorSubHeader.vue";
import InspectionReportSummary from "./InspectionReportSummary.vue";
import SubChat from "../../inbox/SubChat.vue";
import VehicleInspectorReportAll from "./vehicleInspectionReport/VehicleInspectorReportAll.vue";
import HomeInspectorReportAll from "./homeInspectionReport/HomeInspectorReportAll.vue";

export default {
  components: {
    // VehicleInspectorSubHeader,
    SubChat,
    VehicleInspectorReportAll,
    InspectionReportSummary,
    HomeInspectorReportAll
  },
  data() {
    return {
      jobId: this.$route.params.jobId,
      userId: localStorage.getItem("userId"),
      displayedSummary: {},
      isReportDivVisible: false,
      isMessagesVisible: true,
      sequenceId: null
    };
  },

  computed: {
    typeOfInspector() {
      return this.$store.getters.typeOfInspector;
    }
  },
  methods: {
    showMessages() {
      this.isReportDivVisible = false;
      this.isMessagesVisible = true;
      this.displayedSummary = {
        orderId: this.jobId
      };
    },

    showReport() {
      this.isMessagesVisible = false;
      this.isReportDivVisible = true;
    },

    checkIfCurrentOrder(value) {
      if (value != this.jobId) {
        this.$router.push("/inspector/inspector-jobs");
      }
    }
  },

  created() {
    const jobId = this.$route.params.jobId;
    this.jobId = jobId;
    globalAxios
      .get(`orders/my_jobs/${jobId}`)
      .then(res => {
        this.sequenceId = res.data.sequenceId
        this.$nextTick(() => {
          this.showMessages();
        });
      })
      .catch(error => console.log(error));
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.container {
  background-color: lightblue;
  display: table;
  font-family: sans-serif, Arial, Helvetica;
  width: 100%;
}

.container-left {
  float: left;
  margin-top: 5%;
  margin-left: 4%;
  width: 60%;
  font-size: 12px;
  background-color: white;
  margin-bottom: 50px;
  display: inline-block;
  border: 1px solid #b6b1b1;
}

.top-title {
  font-size: 15px;
  padding: 15px;
}

.messageReport-header {
  padding: 25px;
  color: #808080;
  border-top: 1px solid #b6b1b1;
  border-bottom: 1px solid #b6b1b1;
  display: flex;
  justify-content: center;
}

.active-message-report {
  padding-top: 10px;
  padding-bottom: 10px;
  text-align: center;
  width: 70px;
  display: block;
  color: white;
  background-color: black;
  cursor: pointer;
}

.u-dotted {
  color: black;
  cursor: pointer;
  padding-top: 10px;
  padding-bottom: 10px;
  text-align: center;
  width: 70px;
  display: block;
  color: black;
  background-color: white;
  cursor: pointer;
}

.u-dotted span {
  border-bottom: 1px dotted black;
}

/* For tablets: */
@media only screen and (max-width: 820px) {
  .container {
    background-color: white;
    padding: 5px;
  }

  .container-left {
    margin: 0px;
    width: 100%;
  }

  .container-right {
    display: none;
  }

  .container-header {
    display: none;
  }

  .messageReport-header {
    padding: 20px;
  }

  .top-title {
    font-size: 14px;
    padding: 5px 10px;
  }
}

/* For mobile phones: */
@media only screen and (max-width: 520px) {
  .messageReport-header {
    padding: 10px;
  }

  .top-title {
    font-size: 13px;
  }
}
</style>