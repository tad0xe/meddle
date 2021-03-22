<template>
  <div>
    <div class="container">
      <div>
        <div class="error" v-if="error">{{error}}</div>
        <div class="okMessage" v-if="okMessage">{{okMessage}}</div>
      </div>
      <table>
        <tr>
          <th>User ID</th>
          <th>Role Name</th>
        </tr>
        <tr>
          <td>
            <strong>1</strong>
          </td>
          <td>Admin</td>
        </tr>
        <tr>
          <td>
            <strong>2</strong>
          </td>
          <td>Accountant</td>
        </tr>
        <tr>
          <td>
            <strong>3</strong>
          </td>
          <td>Marketer</td>
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
  padding: 50px 10px;
  width: 100%;
  display: inline-table;
}

.error {
  color: red;
  padding-bottom: 20px;
  font-size: 14px;
}

.okMessage {
  color: green;
  padding-bottom: 20px;
  font-size: 14px;
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
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 20px;
  padding-top: 20px;
}
</style>