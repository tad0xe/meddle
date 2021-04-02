<template>
  <div>
    <div style="position: relative">
      <div class="container">
        <div class="container-header">{{$t("invitationToBookInspection.header")}}</div>
        <div class="container-content">
          <h3>{{$t("invitationToBookInspection.title1")}}</h3> 
          <p>{{$t("invitationToBookInspection.body1")}}</p>
          <br />
          <div class="row">
            <div class="column1">
              <label style="margin-right:10px;">
                <b>{{$t("invitationToBookInspection.body2")}}</b>
              </label>
              <select @change="showGetStartedButton()" v-model.trim="selectedInspectionType">
                <option value selected disabled hidden>{{$t("generic.selectOne")}}</option>
                <option value="vehicle">{{$t("generic.vehicleInspection")}}</option>
                <option value="home">{{$t("generic.homeInspection")}}</option>
              </select>
              <div v-if="isGetStartedButtonVisible">
                <button
                  class="primary-btn"
                  @click="onClickGetStarted()"
                >{{$t("buttons.getStarted")}}</button>
              </div>
            </div>
          </div>
          <br />
          <div>
            <h3>{{$t("invitationToBookInspection.title2")}}</h3>
            <div style="overflow-x:auto;" v-if="invitations.length">
              <table>
                <tr>
                  <th>{{$t("invitationToBookInspection.table.nameOfInvitee")}}</th>
                  <th>{{$t("invitationToBookInspection.table.inviteeEmail")}}</th>
                  <th>{{$t("invitationToBookInspection.table.PropertyDescription")}}</th>
                  <th>{{$t("generic.status")}}</th>
                </tr>
                <tr
                  v-for="(invitation, index) in invitations"
                  :key="index"
                  @click="onClickInvitation(invitation)"
                >
                  <td>{{invitation.buyerInfo.firstName}} {{invitation.buyerInfo.lastName}}</td>
                  <td>{{invitation.buyerInfo.email}}</td>
                  <td>
                    <div
                      v-if="invitation.inspectionType == 'home'"
                    >{{invitation.propertyDetails.typeOfHome}} with {{invitation.propertyDetails.noOfBedrooms}}</div>
                    <div v-if="invitation.inspectionType == 'vehicle'">
                      {{invitation.propertyDetails.vehicleType}} - {{invitation.propertyDetails.vehicleBrand}}
                      {{invitation.propertyDetails.vehicleModel}} {{invitation.propertyDetails.vehicleYear | showOnlyYear}}
                      {{invitation.propertyDetails.VIN}}
                    </div>
                  </td>
                  <td>{{invitation.invitationStatus}}</td>
                </tr>
              </table>
            </div>
            <div v-if="!invitations.length">
              <p>{{$t("invitationToBookInspection.noInvitations")}}</p>
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
import { translateValue } from "../../../utility.js";
export default {
  components: {},
  props: ["containerLeftHeight"],
  data() {
    return {
      translateValue,
      isGetStartedButtonVisible: false,
      selectedInspectionType: "",
      invitations: []
    };
  },
  computed: {
    user() {
      return this.$store.getters.generalUserProfile;
    }
  },
  methods: {
    showGetStartedButton() {
      this.isGetStartedButtonVisible = true;
    },
    onClickGetStarted() {
      this.$router.push(
        `/${this.$i18n.locale}/services/invite-buyer-to-book-inspection/${this.selectedInspectionType}`
      );
    },

    onClickInvitation(invitation) {
      this.$router.push(
        `/${this.$i18n.locale}/services/edit/invite-buyer-to-book-inspection/${invitation.inspectionType}/${invitation._id}`
      );
    }
  },

  created() {
    axios.get("/order_invitation/get_all_invitations").then(res => {
      this.invitations = res.data;
    });
  }
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
  cursor: pointer;
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