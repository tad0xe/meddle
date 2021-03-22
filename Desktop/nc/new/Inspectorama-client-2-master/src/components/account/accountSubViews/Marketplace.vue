<template>
  <div>
    <div style="position: relative">
      <div class="container">
        <div class="container-header">Marketplace</div>
        <div class="container-content">
          <h3>List your property for sale</h3>
          <p>
            Do you want to sell your used vehicle or existing home? With a few
            steps, we will have your for-sale property listed. We have a huge
            market reach for you.
          </p>
          <br />
          <div class="row">
            <div class="column1">
              <label style="margin-right: 10px">
                <b>Choose the listing type</b>
              </label>
              <select
                @change="showGetStartedButton()"
                v-model.trim="selectedInspectionType"
              >
                <option value selected disabled hidden>
                  {{ $t("generic.selectOne") }}
                </option>
                <option value="vehicle">{{ $t("generic.vehicle") }}</option>
                <option value="home">{{ $t("generic.home") }}</option>
              </select>
              <div v-if="isGetStartedButtonVisible">
                <button class="primary-btn" @click="onClickGetStarted()">
                  {{ $t("buttons.getStarted") }}
                </button>
              </div>
            </div>
          </div>
          <br />
          <div>
            <h3>My Listed Property</h3>
            <div style="overflow-x: auto" v-if="listings.length">
              <table>
                <tr>
                  <th>Headline</th>
                  <th>VIN</th>
                  <th>Description</th>
                  <th>Availability</th>
                  <th>Date Posted</th>
                  <th></th>
                </tr>
                <tr v-for="(listing, index) in listings" :key="index">
                  <td>{{ listing.headline }}</td>
                  <td>{{ listing.vehicleSpecifications.vin }}</td>
                  <td>{{ listing.description }}</td>
                  <td>{{ listing.isPropertyStillAvailable }}</td>
                  <td>{{ listing.createdAt | showDateAndTime }}</td>
                  <td>
                    <div class="flex">
                      <button
                        type="button"
                        class="edit-btn"
                        @click.prevent="onClickListing(listing)"
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        class="delete-btn"
                        @click.prevent="OnDeleteVehicle(listing._id)"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              </table>
            </div>
            <div v-if="!listings.length">
              <p>There are no listings</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { required, email } from "vuelidate/lib/validators";
import axios from "axios";
import moment from "moment";
import { translateValue } from "../../../utility.js";
export default {
  components: {},
  props: ["containerLeftHeight"],
  data() {
    return {
      translateValue,
      isGetStartedButtonVisible: false,
      selectedInspectionType: "",
      listings: [],
    };
  },
  computed: {
    user() {
      return this.$store.getters.generalUserProfile;
    },
  },
  methods: {
    showGetStartedButton() {
      this.isGetStartedButtonVisible = true;
    },
    onClickGetStarted() {
      this.$router.push(
        `/${this.$i18n.locale}/market-place/create-${this.selectedInspectionType}-listing`
      );
    },

    onClickListing(listing) {
      this.$router.push(
        `/${this.$i18n.locale}/market-place/edit-vehicle-listing/${listing._id}`
      );
    },

    OnDeleteVehicle(vehicleId) {
      const r = confirm(
        "Are you sure you want to delete this vehicle listing?"
      );
      if (r == true) {
        this.$store
          .dispatch("DELETE_VEHICLE", { vehicleId })
          .then((res) => {
            this.getAllMyListedVehicles();
          })
          .catch((err) => {});
      }
    },

    getAllMyListedVehicles() {
      this.$store.dispatch("GET_ALL_MY_VEHICLES").then((res) => {
        this.listings = res.listings;
      });
      // axios.get("/vehicle_listing/get-all-listings").then((res) => {
      //   this.listings = res.data.listings;
      // });
    },
  },

  created() {
    this.getAllMyListedVehicles();
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.container {
  font-family: sans-serif, Arial, Helvetica;
  font-size: 14px;
  padding-bottom: 30px;
  border-radius: 5px;
  border: 1px solid #b6b1b1;
  background-color: white;
  width: 100%;
  display: inline-block;
}

.container-header {
  font-size: 26px;
  font-weight: bold;
  padding: 20px 30px;
  color: #212259;
  border-bottom: 1px solid #ccc;
}

.container-header,
.container-content {
  padding: 20px 30px;
}

select {
  padding: 6px 5px;
  margin-top: 5px;
  border-radius: 3px;
  font-weight: bold;
  outline: none;
  border: 1px solid #ccc;
  background-color: aliceblue;
}

option {
  color: black;
}

select:focus {
  border: 1px solid #212259;
  background-color: rgb(232, 240, 254);
}

h3 {
  font-size: 18px;
  margin-bottom: 10px;
}

table {
  width: 100%;
  text-align: left;
  border-collapse: collapse;
  border: 1px solid #ddd;
}

/* .get-started-btn {
  color: white;
  margin-top: 5px;
  margin-bottom: 10px;
  padding: 10px 20px;
  outline: none;
  border: none;
  cursor: pointer;
  font-size: 18px;
  text-align: center;
  box-sizing: border-box;
  border-radius: 5px;
  opacity: 0.97;
  background-color: rgb(2, 167, 240);
}

.get-started-btn:hover {
  opacity: 1;
} */

th {
  padding: 10px;
  border-left: 1px solid #ddd;
  border-right: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  border-collapse: collapse;
  background-color: #f2f2f2;
}

td {
  padding: 10px;
  border-left: 1px solid #ddd;
  border-right: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  background-color: #f1ffff;
  /* cursor: pointer; */
}

@media only screen and (max-width: 840px) {
  .container-header {
    font-size: 22px;
  }
  .container-header,
  .container-content {
    padding: 20px;
  }

  h3 {
    font-size: 17px;
  }
}

/* For mobile phones: */
@media only screen and (max-width: 540px) {
  .container {
    border-radius: 3px;
    padding-bottom: 20px;
  }
  .container-header {
    padding: 20px 5px;
    font-size: 18px;
  }
  .container-content {
    padding: 20px 5px;
  }
}
</style>
