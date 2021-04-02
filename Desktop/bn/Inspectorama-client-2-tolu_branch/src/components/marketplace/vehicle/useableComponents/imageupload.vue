<template>
  <div class="margin-left-md-40">
          <label>Upload Pictures</label>
    <div class="image-upload">

      
      <div
        class="drop"
        :class="getClasses"
        @dragover.prevent="dragOver"
        @dragleave.prevent="dragLeave"
        @drop.prevent="drop($event)"
      >
        <div class="upload-text">
          <i class="fa fa-image"></i>
          <div>
            <label class="font-size-12">Drop your image here, or </label>
            <label class="upload-my-file font-size-12" for="uploadmyfile">
              browse
            </label>
          </div>
        </div>
        <input
          type="file"
          id="uploadmyfile"
          :accept="'image/*'"
          multiple
          @change="requestUploadFile"
        />
      </div>
    </div>
    <div class="img-container">
      <div class="image" v-for="(img, index) in imageSources" :key="index">
        <img :src="img" />
        <!-- <i class="fas fa-times-circle" @click="removeImage(img)"></i> -->
        <i class="fa fa-close" @click="removeImage(img)"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ImageUpload",
  components: {},
  data() {
    return {
      isDragging: false,
      imageSources: [],
      imgFiles: [],
    };
  },
  computed: {
    getClasses() {
      return { isDragging: this.isDragging };
    },
  },
  methods: {
    dragOver() {
      this.isDragging = true;
    },
    dragLeave() {
      this.isDragging = false;
    },
    async drop(e) {
      let files = [...e.dataTransfer.files];
      let images = files.filter((file) => file.type.indexOf("image/") >= 0);
      let promises = [];
      let rawImg = [];
      images.forEach((file) => {
        promises.push(this.getBase64(file));
      });
      images.forEach((file) => {
        rawImg.push(file);
      });
      let sources = await Promise.all(promises);
      let sour = await Promise.all(rawImg);
      console.log(this.imgFiles.concat(sour));
      this.imageSources = this.imageSources.concat(sources);
      this.isDragging = false;
      this.imgFiles = this.imgFiles.concat(sour);
      // this.onUpload();
    },
    requestUploadFile() {
      var src = this.$el.querySelector("#uploadmyfile");
      this.drop({ dataTransfer: src });
    },
    getBase64(file) {
      const reader = new FileReader();
      return new Promise((resolve) => {
        reader.onload = (ev) => {
          resolve(ev.target.result);
        };
        reader.readAsDataURL(file);
      });
    },
    removeImage(img) {
      const index = this.imageSources.indexOf(img);
      this.imageSources.splice(index, 1);
    },
    onUpload() {
      // console.log(this.imageSources, 'image source')
      this.$emit("clicked", this.imageSources);
    },
  },
  watch: {
    imageSources() {
      // console.log(this.imageSources, 'image source watcher')
      this.$emit("clicked", this.imgFiles);
    },
    deep: true,
  },
};
</script>

<style lang="scss" scoped>
label {
  margin-top: -10px;
  font-size: 15px;
}

.image-upload {
  padding: 10px;
  flex-direction: column;
  width: 100%;
  display: flex;
}
.drop {
  padding: 20px 10px;
  margin-top: 20px;
  margin-bottom: 20px;
  width: 100%;
  border: 1.5px dashed;
}
.isDragging {
  background-color: #999;
  border-color: #fff;
}

.img-container {
  display: flex;
  flex-wrap: wrap;
  .image {
    margin: 10px;
    position: relative;
    display: table;
    img {
      width: 100%;
      max-width: 150px;
      width: 115px;
      height: 90px;
    }
    .fa-close {
      right: 0;
      top: 0;
      color: white;
      width: 17px;
      height: 17px;
      font-size: 12px;
      border-radius: 50%;
      border: none;
      background: red;
      align-items: center;
      justify-content: center;
      display: flex;
      position: absolute;
    }
  }
}

#uploadmyfile {
  display: none;
}

.upload-my-file {
  text-decoration: underline;
  color: blue;
  cursor: pointer;
}

.upload-text {
  align-items: center;
  flex-direction: column;
  display: flex;
  width: 100%;
  i {
    font-size: 45px;
    color: green;
    margin-bottom: 10px;
  }
  label {
    display: inline;
  }
}

@media (min-width: 620px) {
  label {
    margin-top: 50px;
  }
  .image-upload {
    flex-direction: row;
    max-width: 900px;
  }
  .drop {
    max-width: 400px;
  }
}
</style>
