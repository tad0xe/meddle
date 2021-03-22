<template>
  <div>
    <div class="container">
      <div class="container-left">
        <div class="container-left-header">Post Information</div>
        <div
          class="category-tab"
          :class="{active: isPostInformation}"
          @click="isPostInformation=true, isAdvancedOptions=false"
        >Post Information</div>
        <div
          class="category-tab"
          :class="{active: isAdvancedOptions}"
          @click="isAdvancedOptions=true, isPostInformation=false"
        >Advanced Options</div>
      </div>
      <div class="container-right">
        <div class="container-right-header">
          <div class="container-right-header-text">Create New Post</div>
          <div class="form-button">
            <button type="submit" class="save-btn" @click.prevent="onSubmit()">
              <i class="fa fa-check-circle"></i>
              <span>&nbsp;Save</span>
            </button>
            <button type="submit" class="save-edit-btn" @click.prevent="onSubmit('edit')">
              <i class="fa fa-check-circle"></i>
              <span>&nbsp;Save and continue Edit</span>
            </button>
          </div>
        </div>
        <hr />
        <div class="container-right-content">
          <form @submit.prevent="onSubmit()">
            <table>
              <tr :class="{invalid: $v.title.$error}">
                <td>
                  <label>Title</label>
                </td>
                <td>
                  <input placeholder="Enter Title" v-model="title" required />
                  <span v-if="!$v.title.required && $v.title.$error">Title is required.</span>
                </td>
              </tr>
              <tr :class="{invalid: $v.selectedCategories.$error}">
                <td>
                  <label>Categories</label>
                </td>
                <td>
                  <div v-for="(selectedCategory, index) in selectedCategories" :key="index">
                    <span class="selectedCategory">{{selectedCategory}}</span>
                    <span class="delete-btn">
                      <i class="fa fa-close" @click="onRemoveCategory(index), categoryOnClick()"></i>
                    </span>
                  </div>
                  <select @change="categoryOnClick()" v-model="selectedCategory" required>
                    <option value selected hidden disabled>Select Category</option>
                    <option
                      :disabled="isCategoryAlreadySelected(category)"
                      v-for="(category, index) in categories"
                      :key="index"
                    >{{category}}</option>
                  </select>
                  <button
                    type="button"
                    class="addnewcategory-btn"
                    @click="onAddNewCategory()"
                    :disabled="!selectedCategory"
                  >
                    <i class="fa fa-plus"></i>&nbsp;Add Category
                  </button>
                  <span
                    v-if="$v.selectedCategories.$error && !selectedCategory"
                  >Please select and add at least one category.</span>
                  <span
                    v-if="$v.selectedCategories.$error && selectedCategory"
                  >Please click on add category.</span>
                </td>
              </tr>
              <tr :class="{invalid: $v.status.$error}">
                <td>
                  <label>Status</label>
                </td>
                <td>
                  <select v-model="status" required>
                    <option value selected hidden disabled>Select Status</option>
                    <option value="enabled">Enabled</option>
                    <option value="disabled">Disabled</option>
                    <option value="hidden">Hidden</option>
                  </select>
                  <span v-if="!$v.status.required && $v.status.$error">Status is required.</span>
                </td>
              </tr>
              <tr>
                <td>
                  <label>Picture</label>
                </td>
                <td>
                  <div class="pictureinput">
                    <picture-input
                      @change="onChangePicture()"
                      @remove="onRemovePicture()"
                      :crop="false"
                      width="400"
                      height="400"
                      margin="0"
                      accept="image/jpeg, image/jpg, image/png"
                      size="0.5"
                      buttonClass="btn"
                      :zIndex="0"
                      :removable="true"
                      :customStrings="{
        upload: '<h1>Bummer!</h1>',
        drag: 'Drag and drop or click to upload'
      }"
                    ></picture-input>
                  </div>
                </td>
              </tr>
              <tr :class="{invalid: $v.body.$error}">
                <td>
                  <label>Body</label>
                </td>
                <td>
                  <span v-if="!$v.body.required && $v.body.$error">Body is required.</span>
                  <button
                    type="button"
                    v-if="isEditorVisible"
                    @click="isEditorVisible=!isEditorVisible"
                  >Show Html</button>
                  <button
                    type="button"
                    v-if="!isEditorVisible"
                    @click="isEditorVisible=!isEditorVisible"
                  >Show Editor</button>
                  <editor
                    v-model="body"
                    ref="body"
                    @blur="getHtml"
                    :options="editorOptions"
                    height="300px"
                    mode="wysiwyg"
                    v-show="isEditorVisible"
                    required
                  />
                  <div>
                    <textarea rows="8" v-model="htmlOfBody" v-show="!isEditorVisible" required></textarea>
                  </div>
                </td>
              </tr>
            </table>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { required } from "vuelidate/lib/validators";
import PictureInput from "vue-picture-input";
import { base64ToBlob } from "../../../../utility";
import "tui-editor/dist/tui-editor.css";
import "tui-editor/dist/tui-editor-contents.css";
import "codemirror/lib/codemirror.css";
import { Editor } from "@toast-ui/vue-editor";

export default {
  components: {
    PictureInput,
    editor: Editor
  },
  data() {
    return {
      isPostInformation: true,
      isAdvancedOptions: false,
      mainPhoto: "",
      title: "",
      status: "",
      body: "",
      htmlOfBody: "",
      isEditorVisible: true,
      editorOptions: {
        hideModeSwitch: true
      },
      categories: [
        "How To",
        "Press",
        "Inspector",
        "Home Inspector",
        "Vehicle Inspector"
      ],
      selectedCategory: "",
      selectedCategories: [],
      categoryHolder: []
    };
  },
  validations: {
    title: {
      required
    },
    status: {
      required
    },
    selectedCategories: {
      required,
      $each: {
        required
      }
    },
    body: {
      required
    }
  },
  methods: {
    categoryOnClick() {
      this.categoryHolder = [];
      this.selectedCategories.forEach(item => {
        this.categoryHolder.push(item);
      });
    },
    isCategoryAlreadySelected(category) {
      let item1;
      this.selectedCategories.forEach(item => {
        if (item == category) {
          item1 = item;
        }
      });
      return item1 == category;
    },
    onSubmit(direction) {
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }
      const blogPostData = {
        title: this.title,
        status: this.status,
        body: this.htmlOfBody,
        categories: this.selectedCategories
      };
      const fd = new FormData();
      if (this.mainPhoto) {
        fd.append("photo", this.mainPhoto, "mainPhoto");
      }

      // fd.append("blogPostData", blogPostData);
      for (const key in blogPostData) {
        fd.append(key, blogPostData[key]);
        fd.set("categories", JSON.stringify(blogPostData.categories));
      }
      axios
        .post("/blog_posts/createPost", fd)
        .then(res => {
          if (direction == "edit") {
            this.$router.replace(`/blog/edit-blog-post/${res.data._id}`);
          } else {
            this.$router.replace("/blog/blog-posts");
          }
        })
        .then(error => {
          console.log(error.response);
        });
    },
    onChangePicture() {
      const picture = event.target.result;
      const blob = base64ToBlob(picture);
      this.mainPhoto = blob;
    },
    onAddNewCategory() {
      this.selectedCategories.push(this.selectedCategory);
      this.selectedCategory = "";
    },
    onRemoveCategory(index) {
      this.selectedCategories.splice(index, 1);
    },
    getHtml() {
      this.htmlOfBody = this.$refs.body.invoke("getHtml");
    }
  },
  computed: {}
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.container {
  font-family: sans-serif, Arial, Helvetica;
  background-color: lightcyan;
  font-size: 15px;
  padding: 40px 20px;
  width: 100%;
  display: flex;
}

.container-left {
  padding: 10px 0px;
  margin-right: 20px;
  width: 320px;
  min-width: 300px;
  height: 550px;
  border-radius: 5px;
  border: 1px solid #e6e6e6;
  background-color: #fafafa;
  display: inline-table;
}

.container-left-header {
  color: darkblue;
  padding: 10px 20px;
  font-size: 22px;
  font-weight: bold;
  border-bottom: 1px solid #b6b1b1;
}

.container-right {
  padding: 10px 10px;
  width: 65%;
  border-radius: 5px;
  border: 1px solid #e6e6e6;
  background-color: #fafafa;
  display: inline-table;
}

.container-right-header {
  padding: 10px;
  padding-bottom: 14px;
  display: flex;
}

.container-right-header-text {
  font-size: 22px;
  font-weight: bold;
  color: #eb5e00;
  flex: 1;
}

.container-right-content {
  padding: 10px 20px;
}

.selectedCategory {
  font-size: 13px;
}

.category-tab {
  padding: 15px 20px;
  font-size: 17px;
  border-bottom: 1px solid #b6b1b1;
}

.category-tab:hover {
  background-color: #dddd;
}

.active,
.active:hover {
  font-weight: bold;
  background-color: lightblue;
}

td {
  padding-top: 10px;
  padding-bottom: 10px;
  text-align: left;
  vertical-align: top;
}

td label {
  width: 120px;
  display: block;
}

input {
  width: 274px;
}

textarea {
  width: 600px;
}

input,
textarea,
select {
  padding: 3px 6px;
  font-size: 12px;
  border-width: 1px;
  border-style: solid;
  outline: none;
  border-color: #aaa #c8c8c8 #c8c8c8 #aaa;
  background-color: white;
}

select {
  padding: 2px;
}

option:disabled {
  color: #b6b1b1;
}

select:invalid {
  color: #777777;
}

option {
  color: black;
}

input:focus,
textarea:focus,
select:focus {
  outline: none;
  border: 1px solid #a842a7;
  background-color: rgb(244, 246, 250);
}

.invalid input,
.invalid textarea,
.invalid select {
  border: 1px solid red;
}

.invalid label {
  color: red;
}

.invalid span {
  color: red;
  font-size: 12px;
  display: block;
}

.pictureinput {
  width: 250px;
}

.delete-btn {
  font-size: 16px;
  font-weight: bold;
  margin-top: 6px;
  color: red;
  cursor: pointer;
  outline: none;
  opacity: 0.7;
}

.delete-btn:hover {
  opacity: 1;
  color: red;
}

.delete-btn:active {
  opacity: 0.7;
}

.save-btn,
.save-edit-btn,
.addnewcategory-btn {
  font-size: 13px;
  font-weight: bold;
  padding: 2px 7px;
  background-color: #ea7601;
  color: white;
  cursor: pointer;
  outline: none;
  border-radius: 3px;
  border: solid;
  border-color: #ed6502 #a04300 #a04300 #ed6502;
  opacity: 0.9;
}

.save-btn {
  margin-right: 5px;
}

.save-btn:hover,
.save-edit-btn:hover,
.addnewcategory-btn:hover {
  opacity: 1;
}

.save-btn:active,
.save-edit-btn:active,
.addnewcategory-btn:active {
  opacity: 0.95;
  border-color: #a04300 #ed6502 #ed6502 #a04300;
}

.addnewcategory-btn[disabled] {
  border-color: #ddd #dddd #dddd #ddd;
  background-color: #ccc;
  cursor: not-allowed;
}
</style>