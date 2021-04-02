<template>
  <div>
    <div class="header">
      <ul>
        <li>
          <router-link to="/inspector/inspector-job/all-jobs" class="active">My Jobs</router-link>
        </li>
        <li>
          <router-link to="/inspector/vehicle-inspector-calendar">Calendar</router-link>
        </li>
        <li>
          <a href="#">Transactions</a>
        </li>
        <li>
          <router-link to="/all-notifications"> Notifications</router-link>
        </li>
        <li>
          <a href="#">Settings</a>
        </li>
        <li>
          <router-link to="/inspector/inspector-profile/vehicle-inspector-profile">My Profile</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>


<script>
export default {};
</script>


<style scoped>
.header {
  font-size: 16px;
  display: block;
  width: 100%;
  float: left;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}

li {
  float: left;
  border-right: 1px solid #bbb;
}

li:last-child {
  border-right: none;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover:not(.active) {
  background-color: #111;
}

.active {
  background-color: #4caf50;
}
</style>