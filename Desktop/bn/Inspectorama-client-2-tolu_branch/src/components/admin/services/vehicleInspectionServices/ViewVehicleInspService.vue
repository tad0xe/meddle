<template>
  <div>
    <div class="body">
      <div class="container">
        <div class="container-header">Vehicle Inspection Service in Oslo, Norway</div>
        <div>
          <hr />
          <table>
            <tr>
              <td>
                <strong>Service ID:</strong>
              </td>
              <td>001</td>
            </tr>
            <tr>
              <td>
                <strong>Name:</strong>
              </td>
              <td>Vehicle Inspection</td>
            </tr>
            <tr>
              <td>
                <strong>Type:</strong>
              </td>
              <td>Vehicle Inspection</td>
            </tr>
            <tr>
              <td>
                <strong>City:</strong>
              </td>
              <td>Oslo</td>
            </tr>
            <tr>
              <td>
                <strong>Country:</strong>
              </td>
              <td>Norway</td>
            </tr>
            <tr>
              <td>
                <strong>Price:</strong>
              </td>
              <td>120</td>
            </tr>
            <tr>
              <td>
                <strong>Currency:</strong>
              </td>
              <td>USD</td>
            </tr>
            <tr>
              <td>
                <strong>Status:</strong>
              </td>
              <td>Active</td>
            </tr>
            <tr>
              <td>
                <strong>Service Created on:</strong>
              </td>
              <td>2nd Dec 2017</td>
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
  background-color: white;
  font-size: 18px;
  padding: 50px;
  width: 100%;
  justify-content: center;
  display: flex;
}

.container {
  padding: 20px;
  box-shadow: 2px 2px 20px 1px;
  width: 480px;
  border-radius: 10px;
  background-color: white;
  border: 1px solid #b6b1b1;
  display: inline-block;
}

.container-header {
  font-size: 21px;
  padding-top: 10px;
  padding-bottom: 15px;
  font-weight: bold;
  color: darkblue;
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
</style>