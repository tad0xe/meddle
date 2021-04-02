<template>
  <div>
    <div class="container">
      <div class="container-header">Upload Documentation</div>
      <br />
      <hr />
      <br />
      <div class="container-content">
        <div>
          <div>
            <div>
              <strong>Vehicle Specialization:</strong>
            </div>
            <table>
              <tr
                v-for="(vehicleSpecialization, index) in vehicleSpecializations"
                :key="(index, vehicleSpecialization)"
              >
                <td class="td-index">{{index+1}}.</td>
                <td>
                  Documentation to prove specialization in
                  <b>{{vehicleSpecialization.vehicleType | toLowerCase}}s</b>
                  with
                  <b>{{vehicleSpecialization.yearsOfVehicleExp | toLowerCase}}</b> experience
                </td>
                <td>
                  <u class="link">Uploaded File</u>
                </td>
              </tr>
            </table>
          </div>
          <br />
          <hr />
          <br />
          <div>
            <div>
              <strong>Brand Specialization:</strong>
            </div>
            <table>
              <tr
                v-for=" (brandspecialization, index) in brandSpecializations"
                :key="(index, brandspecialization)"
              >
                <td class="td-index">{{index+1}}.</td>
                <td>
                  Documentation to prove specialization in
                  <b>{{brandspecialization.brandType}}</b>
                  with
                  <b>{{brandspecialization.yearsOfBrandExp | toLowerCase}}</b> experience
                </td>
                <td>
                  <u class="link">Uploaded File</u>
                </td>
              </tr>
            </table>
          </div>
          <br />
          <hr />
          <br />
          <div>
            <div>
              <strong>Professional Certificates:</strong>
            </div>
            <table>
              <tr v-for="(proCert, index) in proCerts" :key="(index, proCert)">
                <td class="td-index">{{index+1}}.</td>
                <td>
                  Certificate of
                  <b>{{proCert.certName}}</b>
                </td>
                <td>
                  <u class="link">Uploaded File</u>
                </td>
              </tr>
            </table>
          </div>
          <br />
          <hr />
          <br />
          <div>
            <div>
              <div>
                <strong>Education Certificates:</strong>
              </div>
            </div>
            <table>
              <tr v-for="(eduCert, index) in eduCerts" :key="(index, eduCert)">
                <td class="td-index">{{index+1}}.</td>
                <td>
                  <b>{{eduCert.educationType}}</b> certificate obtained from
                  <b>{{eduCert.nameOfInstitution}}</b>
                </td>
                <td>
                  <u class="link">Uploaded File</u>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { mapState, mapActions, mapMutations, mapGetters } from "vuex";
export default {
  components: {},
  data() {
    return {
      pageStatus: 95,
      vehicleSpecializations: [],
      brandSpecializations: [],
      proCerts: [],
      eduCerts: []
    };
  },

  methods: {
    onFileSelected(index, arrayObj) {
      const file = event.target.files[0];

      console.log(file);
      if (file) {
        console.log(file);
        const fileReader = new FileReader();
        fileReader.onload = fileLoadedEvent => {
          const base64File = fileLoadedEvent.target.result;
          console.log(base64File);

          arrayObj.uploadedDoc["fileData"] = base64File;
          arrayObj.uploadedDoc["fileName"] = file.name;

          console.log(arrayObj);
        };
        fileReader.readAsDataURL(file);
      }
    },

    onUploadFile(index, arrayObj, docType) {
      console.log(arrayObj);
      const fileUpdateData = {
        uploadedDoc: arrayObj.uploadedDoc,
        docId: arrayObj._id,
        docType
      };
      console.log(fileUpdateData);
      this.$store.dispatch(
        "vehicleInspector/storeInspectorUploadedDoc",
        fileUpdateData
      );
    },

    onSave() {
      const selectedFiles = {
        vehicleSpecializations: this.vehicleSpecializations,
        brandSpecializations: this.brandSpecializations,
        proCerts: this.proCerts,
        eduCerts: this.eduCerts
      };
    }
  },

  created() {
    const inspectorId = localStorage.getItem("openedInspectorId");
    axios
      .get(`/inspector_users_admin/${inspectorId}`)
      .then(res => {
        this.vehicleSpecializations =
          res.data.areaOfSpecialization.vehicleSpecializations;
        this.brandSpecializations =
          res.data.areaOfSpecialization.brandSpecializations;
        this.proCerts = res.data.proCerts;
        this.eduCerts = res.data.educations;
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
  font-family: sans-serif, Arial, Helvetica;
  width: 100%;
  display: inline-block;
}

.container-header {
  color: darkblue;
  font-size: 22px;
  font-weight: bold;
}

.td-index {
  vertical-align: top;
  padding-right: 10px;
}

table {
  text-align: left;
  font-size: 14px;
  border: 1px solid #ddd;
  border-collapse: collapse;
  width: 100%;
}

th {
  color: white;
  padding: 10px;
  background-color: grey;
  border-top: 1px solid grey;
  border-left: 1px solid grey;
  border-right: 1px solid grey;
  border-collapse: collapse;
}

td {
  padding: 10px;
  background-color: azure;
  border-bottom: 1px solid #ddd;
  border-collapse: collapse;
}

.link {
  float: right;
  cursor: pointer;
  color: blue;
}

.link:hover {
  color: rgb(10, 10, 214);
}
</style>
