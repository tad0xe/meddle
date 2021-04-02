<template>
  <div>
    <div class="body">
      <div class="container">
        <div class="container-body">
         <h1>Welcome to The Admin Home</h1>
        </div>
        <footer class="modal-footer"></footer>
      </div>
    </div>
  </div>
</template>

<script>
import {  mapGetters } from "vuex";

export default {
  data: function() {
    return {
    };
  },
  methods: {
  },
  computed: {
    ...mapGetters("adminStore", ["error"])
  },
  created() {
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.body {
  background-color: white;
  font-family: sans-serif, Arial, Helvetica;
  padding-top: 100px;
  padding-bottom: 100px;
  height: 700px;
  justify-content: center;
  display: flex;
}

.container {
  border-radius: 10px;
  background: #ffffff;
  box-shadow: 2px 2px 20px 1px;
  padding: 15px;
  width: 400px;
  display: inline-table;
}

.container-header {
  font-size: 21px;
  font-weight: bold;
  color: #ed6502;
  padding-top: 5px;
  padding-bottom: 5px;
}

.modal-footer {
  border-top: 1.5px solid #eeeeee;
  width: 100%;
  display: inline-block;
}

.input-text {
  padding-top: 10px;
  padding-bottom: 10px;
  width: 100%;
}

input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
  outline: none;
  background-color: rgb(232, 240, 254);
}

input:focus {
  outline: none;
  border: 1px solid #a842a7;
  background-color: #eee;
}

.invalid input {
  border: 1px solid red;
}

.invalid span {
  font-size: 12px;
  color: red;
}

.signin-btn {
  color: white;
  padding: 10px 15px;
  margin-top: 10px;
  width: 100%;
  outline: none;
  border: none;
  cursor: pointer;
  font-size: 17px;
  font-weight: bold;
  text-align: center;
  border-radius: 20px;
  background-color: #2bc4e2;
}

.signin-btn:hover {
  background-color: #07b9dd;
}

.error {
  font-size: 13px;
  padding-top: 5px;
  padding-bottom: 10px;
  color: red;
}

.link {
  font-size: 13px;
  float: right;
  cursor: pointer;
  color: dodgerblue;
}

.link:hover {
  color: blue;
}
</style>

