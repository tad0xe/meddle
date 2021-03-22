<template>
  <div>
    <div class="body">
      <div class="container">
        <div class="container-header">
          <strong>
            <span>{{$t('myJobs.title')}}</span>
          </strong>
        </div>
        <div class="container-sub-header">
          <span>{{$t('generic.page')}}</span>&nbsp;
          <i
            class="fas fa-angle-left"
            :class="{disable:pageNumber < 2}"
            @click="pageNumber--"
          ></i>
          <span>{{pageNumber}}</span>
          <i
            class="fas fa-angle-right"
            :class="{disable:pageNumber >= numberOfPages}"
            @click="pageNumber++"
          ></i>&nbsp;
          <span>{{$t('generic.of')}}</span>&nbsp;
          <span>{{numberOfPages}}&nbsp;{{$t('generic.pages')}}</span>
          &nbsp;|&nbsp;{{$t('generic.view')}}
          &nbsp;
          <select @change="setLimit()">
            <option>10</option>
            <option>20</option>
          </select>&nbsp;
          <span>{{$t('generic.perPage')}}</span>
          | {{$tc('myJobs.totalJobsFound', matchCount, {count: matchCount})}}
        </div>
        <div class="container-content">
          <table>
            <tr>
              <th class="job-id">
                {{$t('generic.jobId')}}
                <div>
                  <input @keyup.enter="onFilterByJobId()" />
                </div>
              </th>
              <th class="status">
                {{$t('generic.status')}}
                <div>
                  <select @change="onGetJobs()" v-model="jobStatus">
                    <option></option>
                    <option value="Pending">{{$t('generic.pending')}}</option>
                    <option value="Processing">{{$t('generic.processing')}}</option>
                    <option value="Canceled">{{$t('generic.canceled')}}</option>
                    <option value="Overdue">{{$t('generic.overdue')}}</option>
                    <option value="Completed">{{$t('generic.completed')}}</option>
                  </select>
                </div>
              </th>
              <th @click="onSortByCreatedDate()">
                <span>{{$t('generic.dateCreated')}}</span>
                <i class="fas fa-angle-down" v-if="sortByCreatedAt == 1"></i>
                <i class="fas fa-angle-up" v-if="sortByCreatedAt == -1"></i>
              </th>
              <th>{{$t('generic.description')}}</th>
              <th>{{$t('generic.location')}}</th>
              <th>{{$t('generic.inspectionDate')}}</th>
              <th></th>
            </tr>
            <tr v-for="(job, index) in allJobs" :key="index" @click="navigateToJobDetails(job)">
              <td>{{job.sequenceId}}</td>
              <td>{{translateValue(job.orderStatus, $t("dbDictionary.orderStatus"))}}</td>
              <td>{{job.createdAt | formatDate}}</td>
              <td>
                <div v-if="job.inspectionType == 'vehicle'">
                  {{job.quotation.inspectedItemInfo.vehicleBrand}} {{job.quotation.inspectedItemInfo.vehicleModel}}
                  {{job.quotation.inspectedItemInfo.vehicleYear | showOnlyYear}}{{job.inspectedItemInfo.vehicleInfo.VIN}}
                </div>
                <div v-if="job.inspectionType == 'home'">
                 {{translateValue(job.quotation.inspectedItemInfo.typeOfHome, $t('homeInspection.form.typeOfHomeOptions'))}} 
                  {{$t(
                  'generic.withNoOfRooms',
                  job.quotation.inspectedItemInfo.numberOfRooms,
                  {count: job.quotation.inspectedItemInfo.numberOfRooms}
                  )}}
                </div>
              </td>
              <td>
                <div v-if="job.inspectionType == 'vehicle'">
                  {{job.inspectedItemInfo.vehicleLocation}},
                  {{job.quotation.city}}
                  {{job.quotation.state}}, {{job.quotation.country}} {{job.quotation.zipCode}}
                </div>
                <div v-if="job.inspectionType == 'home'">
                  {{job.inspectedItemInfo.homeLocation}},
                  {{job.quotation.city}}
                  {{job.quotation.state}}, {{job.quotation.country}} {{job.quotation.zipCode}}
                </div>
              </td>
              <td>{{job.quotation.inspectionDateTime | formatDate}}</td>
              <td class="seedetails">
                <div class="see-details">
                  <span>{{$t('buttons.details')}}</span>
                </div>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { translateValue } from "../../../utility";

export default {
  data() {
    return {
      allJobs: [],
      activeJob: "",
      pageNumber: 1,
      limit: 10,
      skip: 0,
      jobStatus: "",
      sortByCreatedAt: -1,
      matchCount: "",
      filteredJobId: "",
      translateValue
    };
  },
  watch: {
    pageNumber() {
      this.skip = (this.pageNumber - 1) * this.limit;
      this.onGetJobs();
    }
  },
  computed: {
    typeOfInspector() {
      return this.$store.getters.typeOfInspector;
    },
    numberOfPages() {
      return Math.ceil(this.matchCount / this.limit);
    }
  },
  methods: {
    onFilterByJobId() {
      this.pageNumber = 1;
      //  this.filteredJobId = event.target.value;
      const sequenceId = event.target.value;
      const filteredJobIdArray = [];
      this.allJobs.forEach(item => {
        if (item.sequenceId == sequenceId) {
          filteredJobIdArray.push(item._id);
        }
      });
      if (filteredJobIdArray.length) {
        this.filteredJobId = filteredJobIdArray[0];
        if (this.filteredJobId) {
          this.onGetJobs();
        }
      } else {
        this.filteredJobId = "";
        this.onGetJobs();
      }
    },

    setLimit() {
      this.limit = event.target.value;
      this.onGetJobs();
    },

    onSortByCreatedDate() {
      this.sortByCreatedAt = -this.sortByCreatedAt;
      this.onGetJobs();
    },

    onGetJobs() {
      axios
        .get(
          `/orders/my_jobs/?sortByCreatedAt=${this.sortByCreatedAt}&skip=${this.skip}&limit=${this.limit}
          &jobStatus=${this.jobStatus}&jobId=${this.filteredJobId}`
        )
        .then(res => {
          this.allJobs = res.data.jobs;
          this.matchCount = res.data.matchCount;
        })
        .catch(error => console.log(error.response));
    },

    navigateToJobDetails(job) {
      this.$router.push(
        `/${this.$i18n.locale}/inspector/inspector-report/${job._id}`
      );
    }
  },
  created() {
    this.onGetJobs();
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.body {
  font-family: sans-serif;
}

.container {
  padding: 50px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.02);
  display: inline-block;
}
.container-header {
  width: 100%;
  padding-left: 22px;
  height: 70px;
  font-size: 20px;
  font-weight: bold;
  color: #212259;
  background-color: white;
  border: 1.6px solid #ddd;
  align-items: center;
  display: flex;
}

.container-sub-header {
  font-size: 12px;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 2px;
  padding-right: 2px;
  border-left: 1.6px solid #ddd;
  border-right: 1.6px solid #ddd;
}

.container-content {
  overflow-x: auto;
  width: 100%;
  font-size: 12px;
  display: inline-block;
}

table {
  font-size: 12px;
  width: 100%;
  text-align: left;
  border: 2px solid #ddd;
  border-collapse: collapse;
}

th {
  padding: 12px 10px;
  border: 1px solid #ddd;
  background-color: azure;
  border-collapse: collapse;
}

td {
  padding: 18px 10px;
  border: 1px solid #ddd;
  border-collapse: collapse;
}

.seedetails {
  padding: 0px 10px;
}

input,
select {
  font-size: 12px;
  outline: none;
  border: 1px solid #ddd;
  width: 100%;
}

.container-sub-header select {
  width: 48px;
}

.job-id {
  width: 80px;
}

.status {
  width: 110px;
  min-width: 105px;
}

tr {
  cursor: pointer;
}

tr:nth-child(even) {
  /* background-color: #eee; */
  background-color: #f2f2f2;
}

tr:nth-child(odd) {
  background-color: #fff;
}

tr:hover {
  background-color: #fcf5dd;
}

.see-details {
  font-size: 11px;
  width: 98px;
  height: 32px;
  color: white;
  cursor: pointer;
  border: 2px solid #ed6502;
  background-color: #ed6502;
  border-radius: 20px;
  position: relative;
}

.see-details span {
  top: 50%;
  left: 50%;
  text-align: center;
  transform: translate(-50%, -50%);
  position: absolute;
}

.see-details:hover {
  font-weight: bold;
  color: #ed6502;
  background-color: white;
}

.disable {
  pointer-events: none;
}

@media only screen and (max-width: 940px) {
  .container {
    padding: 20px 5px;
  }

  .container-header {
    font-size: 19px;
  }

  .container-content {
    font-size: 11px;
  }

  @media only screen and (max-width: 600px) {
    .container {
      padding-top: 10px;
    }
  }
}
</style>
