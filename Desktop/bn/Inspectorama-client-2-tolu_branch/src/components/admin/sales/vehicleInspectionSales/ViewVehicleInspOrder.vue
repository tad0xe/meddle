<template>
  <div>
    <div class="body">
      <div class="container">
        <div class="container-left">
          <div class="category-tab" :class="{active: true}">Order Summary</div>
          <div class="category-tab" :class="{active: false}">Customer Information</div>
          <div class="category-tab" :class="{active: false}">Seller Information</div>
          <div class="category-tab" :class="{active: false}">Quotation</div>
          <div class="category-tab" :class="{active: false}">Matched Inspectors</div>
          <div class="category-tab" :class="{active: false}">Interested Inspectors</div>
          <div class="category-tab" :class="{active: false}">Interested Inspectors</div>
        </div>
        <div class="container-right">
          <div class="container-right-header">Order Information</div>
          <hr />
          <table>
            <tr>
              <td>
                <strong>Order Status:</strong>
              </td>
              <td>Pending</td>
            </tr>
            <tr>
              <td>
                <strong>First Name:</strong>
              </td>
              <td>John</td>
            </tr>
            <tr>
              <td>
                <strong>Last Name:</strong>
              </td>
              <td>Dean</td>
            </tr>
            <tr>
              <td>
                <strong>Inspection Address:</strong>
              </td>
              <td>No 1, Aikhionbare street, Benin City, Edo State</td>
            </tr>
            <tr>
              <td>
                <strong>Accept Inspector:</strong>
              </td>
              <td>Emmanuel Ogah</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.body {
  font-family: sans-serif, Arial, Helvetica;
  background-color: lightcyan;
  padding: 50px;
  height: 650px;
  width: 100%;
  display: inline-block;
}

.container {
  background-color: white;
  border-radius: 5px;
  border: 1px solid #b6b1b1;
  display: inline-flex;
}

.container-left {
  width: 320px;
  border-right: 1px solid #b6b1b1;
  display: inline-block;
}

.container-right {
  padding: 10px 25px;
  width: 800px;
  display: inline-block;
}

.container-right-header {
  padding-top: 20px;
  padding-bottom: 20px;
  font-size: 22px;
  font-weight: bold;
}

hr {
  margin-left: -5px;
  margin-right: -5px;
}

table {
  padding-top: 10px;
}

td strong {
  padding-right: 5px;
}

td {
  text-align: left;
  padding-top: 10px;
  padding-bottom: 10px;
}

.category-tab {
  padding: 15px 25px;
  font-size: 17px;
  border-bottom: 1px solid #b6b1b1;
  display: block;
}

.category-tab:last-child {
  border-bottom: none;
}

.category-tab:hover {
  background-color: #dddd;
}

.active,
.active:hover {
  font-weight: bold;
  background-color: lightblue;
}
</style>