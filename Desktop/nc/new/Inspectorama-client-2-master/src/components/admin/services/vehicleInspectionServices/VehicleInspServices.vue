<template>
  <div>
    <div class="container">
      <table>  
        <tr>
          <th>User ID</th>
          <th>Name</th>
          <th>Type</th>
          <th>City</th>
          <th>Country</th> 
          <th>Price</th>
          <th>Currency</th>
          <th>Status</th>
        </tr>
        <tr>
          <td>
            <strong>1</strong>
          </td>
          <td>Vehicle Inspection Service</td>
          <td>Vehicle Inspection</td>
          <td>Oslo</td>
          <td>Norway</td>
          <td>1000</td>
          <td>NOK</td>
          <td>Active</td>
        </tr>
        <tr>
          <td>
            <strong>2</strong>
          </td>
          <td>Vehicle Inspection Service</td>
          <td>Vehicle Inspection</td>
          <td>New York</td>
          <td>United States</td>
          <td>120</td>
          <td>USD</td>
          <td>Inactive</td>
        </tr>
      </table>
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

.container {
  font-family: sans-serif, Arial, Helvetica;
  font-size: 15px;
  padding: 40px 10px;
  width: 100%;
  display: inline-table;
} 

table {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  border: 2px solid #ddd;
}

th {
  color: white;
  background-color: #343a40;
  border-collapse: collapse;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 20px;
  padding-top: 20px;
  border: 2px solid #343a40;
}

td {
  background-color: azure;
  border-bottom: 1px solid #ddd;
  border-collapse: collapse;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 20px;
  padding-top: 20px;
}
</style>