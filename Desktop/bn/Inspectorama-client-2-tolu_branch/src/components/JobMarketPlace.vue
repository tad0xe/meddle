<template>
  <div>
    <gmap-map :center="inspectorLocation" :zoom="7" style="width:100%;  height: 400px;">
      <span v-for="(position, index) in positions" :key="index">
        <gmap-marker :position="position" @click="showSomething()"></gmap-marker>
      </span>
      <gmap-circle
        :center="inspectorLocation"
        :radius="100000"
        :visible="true"
        :options="{fillColor:'blue',fillOpacity:0.5,strokeOpacity: 0.5, strokeWeight: 2}"
      ></gmap-circle>
    </gmap-map>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      positions: [],
      inspectorLocation: {}
    };
  },
  methods: {
    showSomething() {
      console.log("clicked");
    }
  },
  created() {
    axios
      .get("/inspector_infos/getAvailableJobsNearMe")
      .then(res => {
        console.log(res.data);
        const jobSummary = res.data.availableJobsNearInspector.map(item => {
          return item.geoLocationOfJob;
        });
        this.positions = jobSummary;
        this.inspectorLocation = res.data.geoLocationOfInspector;
      })
      .catch(error => {
        console.log(error.response.data);
      });
  }
};
</script>
<style scoped>
</style>