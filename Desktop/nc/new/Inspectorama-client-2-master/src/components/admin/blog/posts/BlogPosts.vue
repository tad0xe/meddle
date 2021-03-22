<template>
  <div>
    <div class="container">
      <div class="container-header">Blog Posts</div>
      <table>
        <tr>
          <th>S/N</th>
          <th>Blog ID</th>
          <th>Title</th>
          <th>Author</th>
          <th>Created At</th>
          <th>Updated At</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
        <tr v-for="(post, index) in posts" :key="index" @click="onClickPost(post._id)">
          <td>{{index+1}}</td>
          <td>{{post._id}}</td>
          <td>{{post.title}}</td>
          <td>{{post.author}}</td>
          <td>{{post.createdAt}}</td>
          <td>{{post.updatedAt}}</td>
          <td>{{post.status}}</td>
          <td></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      posts: {}
    };
  },

  methods: {
    onClickPost(postId) {
      this.$router.push(`/blog/edit-blog-post/${postId}`);
    }
  },
  computed: {},

  created() {
    axios
      .get("/blog_posts/getAllPosts")
      .then(res => {
        console.log(res.data);
        this.posts = res.data;
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
}

.container {
  background-color: white;
  font-family: sans-serif, Arial, Helvetica;
  padding: 50px 10px;
  display: block;
}

.container-header {
  font-size: 21px;
  padding-bottom: 20px;
  font-weight: bold;
}

/* .tabcontent {
  display: block;
}

.inline-input {
  margin-bottom: 5px;
} */

table {
  font-size: 12px;
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  border: 2px solid #ddd;
}

td {
  border-bottom: 1px solid #ddd;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 20px;
  padding-top: 20px;
}

/* .td {
  padding: 0px 10px;
} */

th {
  background-color: azure;
  border-collapse: collapse;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 20px;
  padding-top: 20px;
  border-bottom: 1px solid #ddd;
}

/* .see-candidates {
  font-size: 11px;
  width: 98px;
  height: 32px;
  color: white;
  cursor: pointer;
  border: 2px solid black;
  background-color: black;
  border-radius: 20px;
  position: relative;
}

.see-candidates span {
  top: 50%;
  left: 50%;
  text-align: center;
  transform: translate(-50%, -50%);
  position: absolute;
}

.see-candidates:hover {
  font-weight: bold;
  color: black;
  background-color: white;
}

.datepicker {
  margin-top: 17px;
  width: 280px;
  padding-right: 10px;
}
.float-right {
  margin-top: 5px;
  float: right;
}
.select-status {
  font-size: 13px;
}

.datepicker /deep/ input {
  width: 100%;
  font-size: 13px;
  padding: 8px;
  color: black;
  height: 34px;
  border: 1px solid #ccc;
  border-radius: 3px;
  background-clip: padding-box;
  outline: none;
  box-shadow: none;
  background-color: rgb(232, 240, 254);
  display: block;
}

select {
  width: 100%;
  font-size: 13px;
  padding: 5px 4px;
  margin-bottom: 0px;
  border: 1px solid #ccc;
  border-radius: 3px;
  outline: none;
  background-color: rgb(232, 240, 254);
}

select:focus,
.datepicker /deep/ input:focus {
  outline: none;
  border: 1px solid #a842a7;
  background-color: #eee;
} */
</style>