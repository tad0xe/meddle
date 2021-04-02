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
          <th>Username</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Status</th>
        </tr>
        <tr v-for="user in adminUsers" :key="user._id" @click="onClickUser(user)">
          <td>
            <strong>{{user._id}}</strong>
          </td>
          <td>{{user.username}}</td>
          <td>{{user.firstName}}</td>
          <td>{{user.lastName}}</td>
          <td>{{user.email}}</td>
          <td>{{user.isActive}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapState, mapActions, mapMutations, mapGetters } from "vuex";
export default {
  data() {
    return {
      adminUsers: "",
      id: ""
    };
  },
  methods: {
    onClickUser(user) {
      localStorage.setItem("openedUserId", user._id);
      this.id = user._id;
      this.$router.push(`/edit-admin-user/${this.id}`);
    },
    ...mapMutations("adminStore", ["storeOkMessage"]),
    ...mapMutations("adminStore", ["clearOkMessage"])
  },

  computed: {
    ...mapGetters("adminStore", ["error"]),
    ...mapGetters("adminStore", ["okMessage"])
  },

  created() {
    axios
      .get("/admin_users")
      .then(res => {
        this.adminUsers = res.data;
      })
      .catch(error => {
        console.log(error);
      });
  },
  beforeRouteLeave: (to, from, next) => {
    this.clearOkMessage;
    next();
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