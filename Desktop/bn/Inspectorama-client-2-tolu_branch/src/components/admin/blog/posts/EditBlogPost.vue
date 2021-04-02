<template>
  <div>
    <div class="body">
      <div class="container">
        <div class="container-header">
          <div class="container-header-text">Edit Post</div>
          <div class="form-button">
            <button type="submit" class="save-btn" @click.prevent="onSave()">
              <i class="fa fa-check-circle"></i>
              <span>&nbsp;Save</span>
            </button>
            <button type="submit" class="save-edit-btn" @click="onDeletePost()">
              <i class="fa fa-close"></i>
              <span>&nbsp;Delete</span>
            </button>
          </div>
        </div>
        <hr />
        <div class="container-content">
          <form>
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
                      @change="onChangePicture"
                      @remove="onRemovePicture"
                      :crop="false"
                      width="400"
                      height="400"
                      margin="0"
                      accept="image/jpeg, image/jpg, image/png"
                      size="0.5"
                      buttonClass="btn"
                      :zIndex="0"
                      :removable="true"
                      :prefill="this.mainPhotoDataUrlObj.dataUrl"
                      :prefillOptions="{mediaType: this.mainPhotoDataUrlObj.contentType}"
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
                    :html="initialHtml"
                    ref="body"
                    @change="getHtml"
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
      postId: this.$route.params.postId,
      mainPhoto: "",
      mainPhotoFileKey: "",
      mainPhotoDataUrlObj: {},
      title: "",
      status: "",
      body: "",
      htmlOfBody: "",
      initialHtml: "",
      editorOptions: {
        hideModeSwitch: true,
        // previewStyle: 'tab'
      },
      isEditorVisible: true,
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
    onSave() {
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
        //To ensure that the categories array is not turned to a single string
        fd.set("categories", JSON.stringify(blogPostData.categories));
      }
      axios
        .patch(`/blog_posts/editPost/${this.postId}`, fd)
        .then(res => {
          console.log(res.data);
        })
        .then(error => {
          console.log(error);
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
    onDeletePost() {
      axios
        .delete(`/blog_posts/deletePost/${this.postId}`)
        .then(res => {
          this.$router.replace("/blog/blog-posts");
        })
        .catch(error => {
          console.log(error.response);
        });
    },
    getHtml() {
      this.htmlOfBody = this.$refs.body.invoke("getHtml");
    }
  },
  computed: {},

  created() {
    axios
      .get(`/blog_posts/getPost/${this.postId}`)
      .then(res => {
        this.title = res.data.title;
        this.initialHtml = res.data.body;
        this.selectedCategories = res.data.categories;
        this.status = res.data.status;
        this.mainPhotoFileKey = res.data.mainPhotoFileKey;
        if (res.data.mainPhotoDataUrlObj) {
          this.mainPhotoDataUrlObj = res.data.mainPhotoDataUrlObj;
        }
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

.body {
  font-family: sans-serif, Arial, Helvetica;
  background-color: lightcyan;
  font-size: 15px;
  padding: 40px 20px;
  width: 100%;
  justify-content: center;
  display: flex;
}

.container {
  padding: 10px 10px;
  width: 65%;
  border-radius: 5px;
  border: 1px solid #e6e6e6;
  background-color: #fafafa;
  display: inline-table;
}

.container-header {
  padding: 10px;
  padding-bottom: 14px;
  display: flex;
}

.container-header-text {
  font-size: 22px;
  font-weight: bold;
  color: #eb5e00;
  flex: 1;
}

.container-content {
  padding: 10px 20px;
}

.selectedCategory {
  font-size: 13px;
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