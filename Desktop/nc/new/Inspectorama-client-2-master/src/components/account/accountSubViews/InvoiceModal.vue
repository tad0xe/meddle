<template>
  <div>
    <div class="modal-backdrop" @click="close">
      <div class="modal" @click.stop>
        <div class="modal__header">
          <div @click="createPDF()">
            <i class="fa fa-print" style="font-size:24px"></i>
          </div>
          <div>
            <div class="btn-close-upper" @click="close()">x</div>
          </div>
        </div>
        <div class="modal-body" ref="content">
          <div >
            <center>
              <h1>Invoice</h1>
            </center>
          </div>
          <h3>Zigma Inspection Services AS</h3>
          <div ref="ourAddress">
            <span>Klems gate 34</span>
            <br />
            <span>Kongsberg, 3616</span>
            <br />
            <span>Norway</span>
            <br />
          </div>
          <br />
          <br />
          <div ref="customerAddress">
            <span><h4>Customer:</h4></span>
            <span>{{userInfo.firstName}} {{userInfo.lastName}}</span>
            <br />
            <span>{{userInfo.contactInfo.addressLine1}}</span>
            <br />
            <span>{{userInfo.contactInfo.addressLine2}}</span>
            <br />
            <span>{{userInfo.contactInfo.city}}</span>
            <br />
            <span>{{userInfo.contactInfo.state}} {{userInfo.contactInfo.zipCode}}</span>
            <br />
            <span>{{userInfo.contactInfo.country}}</span>
            <br />
          </div>
          <table ref="invoiceTable">
            <tr>
              <th>OrderId</th>
              <th>Order Date</th>
              <th>Service Description</th>
              <th>Price</th>
            </tr>
            <tr>
              <td>{{selectedHistory._id}}</td>
              <td>{{selectedHistory.createdAt | showOnlyDate}}</td>
              <td>
                <div v-if="selectedHistory.quotation.typeOfInspection == 'Home'">
                  {{selectedHistory.quotation.typeOfInspection}} inspection - {{selectedHistory.quotation.inspectedItemInfo.typeOfHome}} with
                  {{selectedHistory.quotation.inspectedItemInfo.numberOfRooms}} rooms
                </div>
                <div v-if="selectedHistory.quotation.typeOfInspection == 'Vehicle'">
                  {{selectedHistory.quotation.typeOfInspection}} inspection - {{selectedHistory.quotation.inspectedItemInfo.vehicleBrand}}
                  {{selectedHistory.quotation.inspectedItemInfo.vehicleModel}} {{selectedHistory.quotation.inspectedItemInfo.vehicleYear | showOnlyYear}}
                  {{selectedHistory.quotation.inspectedItemInfo.typeOfVehicle}}
                </div>
              </td>
              <td>{{selectedHistory.quotation.price.value}} {{selectedHistory.quotation.price.currency}}</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import jsPDF from "jspdf";
import axios from "axios";
import html2canvas from "html2canvas";
export default {
  props: {
    selectedHistory: "",
    userInfo: ""
  },
  data() {
    return {};
  },
  watch: {
    selectedHistory(val) {}
  },
  methods: {
    close() {
      this.$emit("close");
    },

    createPDF() {
      let pdfName = "test";
      var doc = new jsPDF();
      // const contentHtml = this.$refs.customerAddress.innerHTML;
      // doc.fromHTML(contentHtml, 15, 15);

      // var canvasElement = document.createElement("canvas");
      html2canvas(this.$refs.content).then(canvas => {
        const img = canvas.toDataURL("image/jpeg");
        doc.addImage(img, "JPEG", 20, 20, 170, 100);
        doc.save(`invoice-${this.selectedHistory._id}.pdf`);
      });

      // doc.text("Inspectorama", 10, 10);
      // doc.text("Klems Gate, 34", 10, 20);
      // doc.text("Kongsberg, 3614", 10, 30);
      // doc.text("Norway", 10, 40);

      // doc.text("Invoice date:", 150, 50);
      // doc.text("Order ID:", 150, 60);
      // doc.text("Invoice #:", 150, 70);

      // doc.text("To:", 10, 80);
      // doc.text("Joseph Parker", 10, 90);
      // doc.text("Scoundrel Avenue, 36", 10, 100);
      // doc.text("New York, NY, 3456", 10, 110);
      // doc.text("United States", 10, 120);

      // doc.save("sample.pdf");
      // doc.autoPrint(); // <<--------------------- !!
      // doc.output("dataurlnewwindow");
    }
  },

  created() {
    axios
      .get("/users/me")
      .then(res => {
        console.log(res.data);
        this.userInfo = res.data;
      })
      .catch(error => {
        console.log(error.response);
      });
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
  color: black;
}

.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
}

.modal {
  background: #ffffff;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  font-family: sans-serif, Arial, Helvetica;
  padding: 15px;
  width: auto;
}

.modal__header {
}

.modal__header__content {
  font-size: 14px;
  float: left;
}

.modal__header__content u {
  cursor: pointer;
}

.modal-footer {
  border-top: 1.5px solid #eeeeee;
  justify-content: flex-end;
  font-size: 13px;
}

.modal-body {
  position: relative;
  font-size: 13px;
  padding-top: 10px;
  padding-bottom: 10px;
}

.btn-close {
  border: none;
  font-size: 20px;
  cursor: pointer;
  font-weight: bold;
  color: #4aae9b;
  background: transparent;
}

.btn-close-upper {
  float: right;
  font-weight: bold;
  border: 1.5px solid;
  cursor: pointer;
  padding-left: 3px;
  padding-right: 3px;
}

.text-input {
  padding: 7px;
  margin-top: 7px;
  margin-bottom: 7px;
  width: 100%;
}

.signupbtn {
  background-color: #2bc4e2;
  color: white;
  padding: 10px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
  border-radius: 40px;
  box-sizing: border-box;
  font-size: 16px;
}

.link {
  color: dodgerblue;
}

.fpw {
  float: right;
}

.fpw:hover {
  text-decoration-line: underline;
  cursor: pointer;
}
.cursor-pointer {
  cursor: pointer;
}

table {
  width: auto;
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 14px;
  text-align: left;
  border-collapse: collapse;
  border: 1px solid #ddd;
}

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
}
</style>

