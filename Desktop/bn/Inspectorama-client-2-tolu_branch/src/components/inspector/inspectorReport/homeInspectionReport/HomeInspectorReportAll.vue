<template>
  <div>
    <div class="container">
      <div class="row">
        <div
          class="step"
          :class="{active: generalInformationReportPage , done: generalInformationReportPageDone}"
        >
          <div class="step-text">
            <small>
              <small>Step 1</small>
            </small>
            <br />
            <strong>
              General Information
              <span v-if="generalInformationReportPageDone">- Done</span>
            </strong>
          </div>
          <div @click="generalInformationReportPage=!generalInformationReportPage">
            <i v-if="generalInformationReportPage" class="fa fa-arrow-circle-o-up"></i>
            <i v-else-if="!generalInformationReportPage" class="fa fa-arrow-circle-o-down"></i>
          </div>
        </div>
        <div class="content" v-if="generalInformationReportPage">
          <general-information-report
            @generalInformationReportPage="generalInformationReportPage=$event"
            @aboutRatedItemsReportPage="aboutRatedItemsReportPage=$event"
            @generalInformationReportPageDone="generalInformationReportPageDone=$event"
          ></general-information-report>
        </div>
      </div>
      <div class="row">
        <div
          class="step"
          :class="{active: aboutRatedItemsReportPage , done: aboutRatedItemsReportPageDone}"
        >
          <div class="step-text">
            <small>
              <small>Step 2</small>
            </small>
            <br />
            <strong>
              About Rated Items
              <span v-if="aboutRatedItemsReportPageDone">- Done</span>
            </strong>
          </div>
          <div @click="aboutRatedItemsReportPage=!aboutRatedItemsReportPage">
            <i v-if="aboutRatedItemsReportPage" class="fa fa-arrow-circle-o-up"></i>
            <i v-else-if="!aboutRatedItemsReportPage" class="fa fa-arrow-circle-o-down"></i>
          </div>
        </div>
        <div class="content" v-if="aboutRatedItemsReportPage">
          <about-rated-items-report
            @aboutRatedItemsReportPage="aboutRatedItemsReportPage=$event"
            @reportLimitationsReportPage="reportLimitationsReportPage=$event"
            @aboutRatedItemsReportPageDone="aboutRatedItemsReportPageDone=$event"
          ></about-rated-items-report>
        </div>
      </div>
      <div class="row">
        <div
          class="step"
          :class="{active: reportLimitationsReportPage , done: reportLimitationsReportPageDone}"
        >
          <div class="step-text">
            <small>
              <small>Step 3</small>
            </small>
            <br />
            <strong>
              Report Limitations
              <span v-if="reportLimitationsReportPageDone">- Done</span>
            </strong>
          </div>
          <div @click="reportLimitationsReportPage=!reportLimitationsReportPage">
            <i v-if="reportLimitationsReportPage" class="fa fa-arrow-circle-o-up"></i>
            <i v-else-if="!reportLimitationsReportPage" class="fa fa-arrow-circle-o-down"></i>
          </div>
        </div>
        <div class="content" v-if="reportLimitationsReportPage">
          <report-limitations-report
            @reportLimitationsReportPage="reportLimitationsReportPage=$event"
            @exteriorReportPage="exteriorReportPage=$event"
            @reportLimitationsReportPageDone="reportLimitationsReportPageDone=$event"
          ></report-limitations-report>
        </div>
      </div>
      <div class="row">
        <div class="step" :class="{active: exteriorReportPage , done: exteriorReportPageDone}">
          <div class="step-text">
            <small>
              <small>Step 4</small>
            </small>
            <br />
            <strong>
              Exterior
              <span v-if="exteriorReportPageDone">- Done</span>
            </strong>
          </div>
          <div @click="exteriorReportPage=!exteriorReportPage">
            <i v-if="exteriorReportPage" class="fa fa-arrow-circle-o-up"></i>
            <i v-else-if="!exteriorReportPage" class="fa fa-arrow-circle-o-down"></i>
          </div>
        </div>
        <div class="content" v-if="exteriorReportPage">
          <exterior-report
            @exteriorReportPage="exteriorReportPage=$event"
            @foundationCrawlspaceAndBasementPage="foundationCrawlspaceAndBasementPage=$event"
            @exteriorReportPageDone="exteriorReportPageDone=$event"
          ></exterior-report>
        </div>
      </div>
      <div class="row">
        <div
          class="step"
          :class="{active: foundationCrawlspaceAndBasementPage , done: foundationCrawlspaceAndBasementPageDone}"
        >
          <div class="step-text">
            <small>
              <small>Step 5</small>
            </small>
            <br />
            <strong>
              Foundation, crawlspace and basement
              <span
                v-if="foundationCrawlspaceAndBasementPageDone"
              >- Done</span>
            </strong>
          </div>
          <div @click="foundationCrawlspaceAndBasementPage=!foundationCrawlspaceAndBasementPage">
            <i v-if="foundationCrawlspaceAndBasementPage" class="fa fa-arrow-circle-o-up"></i>
            <i v-else-if="!foundationCrawlspaceAndBasementPage" class="fa fa-arrow-circle-o-down"></i>
          </div>
        </div>
        <div class="content" v-if="foundationCrawlspaceAndBasementPage">
          <foundation-crawlspace-and-basement
            @foundationCrawlspaceAndBasementPage="foundationCrawlspaceAndBasementPage=$event"
            @foundationCrawlspaceAndBasementPageDone="foundationCrawlspaceAndBasementPageDone=$event"
          ></foundation-crawlspace-and-basement>
        </div>
      </div>
      <div class="row">
        <div
          class="step"
          :class="{active: roofingSystemReportPage , done: roofingSystemReportPageDone}"
        >
          <div class="step-text">
            <small>
              <small>Step 6</small>
            </small>
            <br />
            <strong>
              Roofing System
              <span v-if="roofingSystemReportPageDone">- Done</span>
            </strong>
          </div>
          <span @click="roofingSystemReportPage=!roofingSystemReportPage">
            <i v-if="roofingSystemReportPage" class="fa fa-arrow-circle-o-up"></i>
            <i v-else-if="!roofingSystemReportPage" class="fa fa-arrow-circle-o-down"></i>
          </span>
        </div>
        <div class="content" v-if="roofingSystemReportPage">
          <roofing-system-report
            @roofingSystemReportPage="roofingSystemReportPage=$event"
            @roofingSystemReportPageDone="roofingSystemReportPageDone=$event"
          ></roofing-system-report>
        </div>
      </div>
      <div class="row">
        <div
          class="step"
          :class="{active: plumbingSystemReportPage , done: plumbingSystemReportPageDone}"
        >
          <div class="step-text">
            <small>
              <small>Step 7</small>
            </small>
            <br />
            <strong>
              Plumbing system
              <span v-if="plumbingSystemReportPageDone">- Done</span>
            </strong>
          </div>
          <span @click="plumbingSystemReportPage=!plumbingSystemReportPage">
            <i v-if="plumbingSystemReportPage" class="fa fa-arrow-circle-o-up"></i>
            <i v-else-if="!plumbingSystemReportPage" class="fa fa-arrow-circle-o-down"></i>
          </span>
        </div>
        <div class="content" v-if="plumbingSystemReportPage">
          <plumbing-system-report
            @plumbingSystemReportPage="plumbingSystemReportPage=$event"
            @heatingSystemReportPage="heatingSystemReportPage=$event"
            @plumbingSystemReportPageDone="plumbingSystemReportPageDone=$event"
          ></plumbing-system-report>
        </div>
      </div>
      <div class="row">
        <div
          class="step"
          :class="{active: heatingSystemReportPage , done: heatingSystemReportPageDone}"
        >
          <div class="step-text">
            <small>
              <small>Step 8</small>
            </small>
            <br />
            <strong>
              Heating system
              <span v-if="heatingSystemReportPageDone">- Done</span>
            </strong>
          </div>
          <span @click="heatingSystemReportPage=!heatingSystemReportPage">
            <i v-if="heatingSystemReportPage" class="fa fa-arrow-circle-o-up"></i>
            <i v-else-if="!heatingSystemReportPage" class="fa fa-arrow-circle-o-down"></i>
          </span>
        </div>
        <div class="content" v-if="heatingSystemReportPage">
          <heating-system-report
            @heatingSystemReportPage="heatingSystemReportPage=$event"
            @coolingSystemReportPage="coolingSystemReportPage=$event"
            @heatingSystemReportPageDone="heatingSystemReportPageDone=$event"
          ></heating-system-report>
        </div>
      </div>
      <div class="row">
        <div
          class="step"
          :class="{active: coolingSystemReportPage , done: coolingSystemReportPageDone}"
        >
          <div class="step-text">
            <small>
              <small>Step 9</small>
            </small>
            <br />
            <strong>
              Cooling system
              <span v-if="coolingSystemReportPageDone">- Done</span>
            </strong>
          </div>
          <span @click="coolingSystemReportPage=!coolingSystemReportPage">
            <i v-if="coolingSystemReportPage" class="fa fa-arrow-circle-o-up"></i>
            <i v-else-if="!coolingSystemReportPage" class="fa fa-arrow-circle-o-down"></i>
          </span>
        </div>
        <div class="content" v-if="coolingSystemReportPage">
          <cooling-system-report
            @coolingSystemReportPage="coolingSystemReportPage=$event"
            @electricalSystemReportPage="electricalSystemReportPage=$event"
            @coolingSystemReportPageDone="coolingSystemReportPageDone=$event"
          ></cooling-system-report>
        </div>
      </div>
      <div class="row">
        <div
          class="step"
          :class="{active: electricalSystemReportPage , done: electricalSystemReportPageDone}"
        >
          <div class="step-text">
            <small>
              <small>Step 10</small>
            </small>
            <br />
            <strong>
              Electrical System
              <span v-if="electricalSystemReportPageDone">- Done</span>
            </strong>
          </div>
          <span @click="electricalSystemReportPage=!electricalSystemReportPage">
            <i v-if="electricalSystemReportPage" class="fa fa-arrow-circle-o-up"></i>
            <i v-else-if="!electricalSystemReportPage" class="fa fa-arrow-circle-o-down"></i>
          </span>
        </div>
        <div class="content" v-if="electricalSystemReportPage">
          <electrical-system-report
            @electricalSystemReportPage="electricalSystemReportPage=$event"
            @interiorReportPage="interiorReportPage=$event"
            @electricalSystemReportPageDone="electricalSystemReportPageDone=$event"
          ></electrical-system-report>
        </div>
      </div>
      <div class="row">
        <div class="step" :class="{active: interiorReportPage , done: interiorReportPageDone}">
          <div class="step-text">
            <small>
              <small>Step 11</small>
            </small>
            <br />
            <strong>
              Interior
              <span v-if="interiorReportPageDone">- Done</span>
            </strong>
          </div>
          <span @click="interiorReportPage=!interiorReportPage">
            <i v-if="interiorReportPage" class="fa fa-arrow-circle-o-up"></i>
            <i v-else-if="!interiorReportPage" class="fa fa-arrow-circle-o-down"></i>
          </span>
        </div>
        <div class="content" v-if="interiorReportPage">
          <interior-report
            @interiorReportPage="interiorReportPage=$event"
            @kitchenAppliancesReportPage="kitchenAppliancesReportPage=$event"
            @interiorReportPageDone="interiorReportPageDone=$event"
          ></interior-report>
        </div>
      </div>
      <div class="row">
        <div
          class="step"
          :class="{active: kitchenAppliancesReportPage , done: kitchenAppliancesReportPageDone}"
        >
          <div class="step-text">
            <small>
              <small>Step 12</small>
            </small>
            <br />
            <strong>
              Kitchen-Appliances
              <span v-if="kitchenAppliancesReportPageDone">- Done</span>
            </strong>
          </div>
          <span @click="kitchenAppliancesReportPage=!kitchenAppliancesReportPage">
            <i v-if="kitchenAppliancesReportPage" class="fa fa-arrow-circle-o-up"></i>
            <i v-else-if="!kitchenAppliancesReportPage" class="fa fa-arrow-circle-o-down"></i>
          </span>
        </div>
        <div class="content" v-if="kitchenAppliancesReportPage">
          <kitchen-appliances-report
            @kitchenAppliancesReportPage="kitchenAppliancesReportPage=$event"
            @bathroomReportPage="bathroomReportPage=$event"
            @kitchenAppliancesReportPageDone="kitchenAppliancesReportPageDone=$event"
          ></kitchen-appliances-report>
        </div>
      </div>
      <div class="row">
        <div class="step" :class="{active: bathroomReportPage , done: bathroomReportPageDone}">
          <div class="step-text">
            <small>
              <small>Step 13</small>
            </small>
            <br />
            <strong>
              Bathroom
              <span v-if="bathroomReportPageDone">- Done</span>
            </strong>
          </div>
          <span @click="bathroomReportPage=!bathroomReportPage">
            <i v-if="bathroomReportPage" class="fa fa-arrow-circle-o-up"></i>
            <i v-else-if="!bathroomReportPage" class="fa fa-arrow-circle-o-down"></i>
          </span>
        </div>
        <div class="content" v-if="bathroomReportPage">
          <bathroom-report
            @bathroomReportPage="bathroomReportPage=$event"
            @sewerScopeReportPage="sewerScopeReportPage=$event"
            @bathroomReportPageDone="bathroomReportPageDone=$event"
          ></bathroom-report>
        </div>
      </div>
      <div class="row">
        <div class="step" :class="{active: sewerScopeReportPage , done: sewerScopeReportPageDone}">
          <div class="step-text">
            <small>
              <small>Step 14</small>
            </small>
            <br />
            <strong>
              Sewer Scope
              <span v-if="sewerScopeReportPageDone">- Done</span>
            </strong>
          </div>
          <span @click="sewerScopeReportPage=!sewerScopeReportPage">
            <i v-if="sewerScopeReportPage" class="fa fa-arrow-circle-o-up"></i>
            <i v-else-if="!sewerScopeReportPage" class="fa fa-arrow-circle-o-down"></i>
          </span>
        </div>
        <div class="content" v-if="sewerScopeReportPage">
          <sewer-scope-report
            @sewerScopeReportPage="sewerScopeReportPage=$event"
            @attachmentsReportPage="attachmentsReportPage=$event"
            @sewerScopeReportPageDone="sewerScopeReportPageDone=$event"
          ></sewer-scope-report>
        </div>
      </div>
      <div class="row">
        <div
          class="step"
          :class="{active: attachmentsReportPage , done: attachmentsReportPageDone}"
        >
          <div class="step-text">
            <small>
              <small>Step 15</small>
            </small>
            <br />
            <strong>
              Attachments
              <span v-if="attachmentsReportPageDone">- Done</span>
            </strong>
          </div>
          <div @click="attachmentsReportPage=!attachmentsReportPage">
            <i v-if="attachmentsReportPage" class="fa fa-arrow-circle-o-up"></i>
            <i v-else-if="!attachmentsReportPage" class="fa fa-arrow-circle-o-down"></i>
          </div>
        </div>
        <div class="content" v-if="attachmentsReportPage">
          <attachments-report
            @attachmentsReportPage="attachmentsReportPage=$event"
            @attachmentsReportPageDone="attachmentsReportPageDone=$event"
          ></attachments-report>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import GeneralInformationReport from "./GeneralInformationReport.vue";
import AboutRatedItemsReport from "./AboutRatedItemsReport.vue";
import ReportLimitationsReport from "./ReportLimitationsReport.vue";
import ExteriorReport from "./ExteriorReport.vue";
import FoundationCrawlspaceAndBasement from "./FoundationCrawlspaceAndBasement.vue";
import RoofingSystemReport from "./RoofingSystemReport.vue";
import PlumbingSystemReport from "./PlumbingSystemReport.vue";
import HeatingSystemReport from "./HeatingSystemReport.vue";
import CoolingSystemReport from "./CoolingSystemReport.vue";
import ElectricalSystemReport from "./ElectricalSystemReport.vue";
import InteriorReport from "./InteriorReport.vue";
import KitchenAppliancesReport from "./KitchenAppliancesReport.vue";
import BathroomReport from "./BathroomReport.vue";
import SewerScopeReport from "./SewerScopeReport.vue";
import AttachmentsReport from "./AttachmentsReport.vue";

export default {
  components: {
    GeneralInformationReport,
    AboutRatedItemsReport,
    ReportLimitationsReport,
    ExteriorReport,
    FoundationCrawlspaceAndBasement,
    RoofingSystemReport,
    PlumbingSystemReport,
    HeatingSystemReport,
    CoolingSystemReport,
    ElectricalSystemReport,
    InteriorReport,
    KitchenAppliancesReport,
    BathroomReport,
    SewerScopeReport,
    AttachmentsReport
  },
  data() {
    return {
      jobId: this.$route.params.jobId,
      userId: localStorage.getItem("userId"),
      generalInformationReportPage: true,
      aboutRatedItemsReportPage: false,
      reportLimitationsReportPage: false,
      exteriorReportPage: false,
      foundationCrawlspaceAndBasementPage: false,
      roofingSystemReportPage: false,
      plumbingSystemReportPage: false,
      heatingSystemReportPage: false,
      coolingSystemReportPage: false,
      electricalSystemReportPage: false,
      interiorReportPage: false,
      kitchenAppliancesReportPage: false,
      bathroomReportPage: false,
      sewerScopeReportPage: false,
      attachmentsReportPage: false,
      generalInformationReportPageDone: false,
      aboutRatedItemsReportPageDone: false,
      reportLimitationsReportPageDone: false,
      exteriorReportPageDone: false,
      foundationCrawlspaceAndBasementPageDone: false,
      roofingSystemReportPageDone: false,
      plumbingSystemReportPageDone: false,
      heatingSystemReportPageDone: false,
      coolingSystemReportPageDone: false,
      electricalSystemReportPageDone: false,
      interiorReportPagePageDone: false,
      kitchenAppliancesReportPageDone: false,
      bathroomReportPageDone: false,
      sewerScopeReportPageDone: false,
      attachmentsReportPageDone: false
    };
  },

  methods: {},

  created() {
    const jobId = this.$route.params.jobId;
    this.jobId = jobId;
    axios
      .get("/vehicle_inspection_reports/" + jobId)
      .then(res => {
        this.vehicleexteriorReportPage = res.data.vehicleexteriorReportPage;
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
  display: inline-block;
  font-family: sans-serif, Arial, Helvetica;
  width: 100%;
  background-color: white;
  padding-bottom: 100px;
}

.content {
  padding-left: 30px;
  padding-right: 30px;
  border-bottom: 1px solid #b6b1b1;
}

.step {
  padding: 10px;
  padding-left: 30px;
  padding-right: 15px;
  font-size: 19px;
  width: 100%;
  display: flex;
  align-items: center;
  color: #808080;
  border-bottom: 1px solid #b6b1b1;
}

.step-text {
  flex: 1;
}

.step i {
  padding-right: 15px;
  font-size: 23px;
}

.done {
  background-color: #f1f1f1;
  font-weight: lighter;
}

.active {
  background-color: #f1f1f1;
}

.active strong {
  color: black;
}

.active span {
  color: black;
}

.active-step strong,
.fa-arrow-circle-o-up {
  color: black;
}

/* Clear floats after the columns */
.row::after {
  content: "";
  clear: both;
  display: table;
}

/* For tablets: */
@media only screen and (max-width: 820px) {
  .step {
    padding: 10px;
    padding-left: 20px;
    font-size: 17px;
  }

  .step i {
    padding: 10px;
    font-size: 22px;
  }
}

/* For mobile phones: */
@media only screen and (max-width: 520px) {
  .container {
    padding-bottom: 50px;
  }

  .content {
    padding-left: 10px;
    padding-right: 10px;
  }

  .step {
    padding: 10px;
    /* padding-left: 15px; */
    font-size: 16px;
  }

  .step i {
    padding: 10px;
    font-size: 20px;
  }
}
</style>