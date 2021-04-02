<template>
  <div>
    <div class="container">
      <form @submit.prevent="onSubmit()">
        <div class="section">
          <p>
            We are not electricians and in accordance with the standards of practice we only test a representative number of switches and outlets and do not perform load-calculations to determine if the supply meets the demand. However, every electrical deficiency or recommended upgrade should be regarded as a latent hazard that should be serviced as soon as possible, along with evaluation and certification of the entire system as safe by a licensed contractor.
            <span class="link">Read more</span>
          </p>
        </div>

        <div class="section">
          <div class="flexbox">
            <div class="tittle">
              <h2>Attach relevant documentation and videos</h2>
            </div>
          </div>

          <div class="flex">
            <div class="photo-container">
              <picture-input
                :crop="pictureInput.crop"
                :width="pictureInput.width"
                :height="pictureInput.height"
                :margin="pictureInput.margin"
                :size="pictureInput.size"
                :accept="pictureInput.accept"
                :zIndex="pictureInput.zIndex"
                :buttonClass="pictureInput.buttonClass"
                :removable="pictureInput.removable"
                :hideChangeButton="pictureInput.hideChangeButton"
                :customStrings="pictureInput.customStrings"
              ></picture-input>
            </div>
            <div class="flex-grow">
              <div class="column">
                <label>
                  <br />
                </label>
                <input type="text" placeholder="Enter document name or description" />
              </div>
            </div>

            <div class="textarea">
              <label>
                <br />
                <br />
              </label>
              <input type="checkbox" />&nbsp;Add New
            </div>
          </div>
        </div>

        <div class="section">
          <div class="flexbox">
            <div class="tittle">
              <h2>Upload Videos</h2>
            </div>
          </div>
          <div class="flex">
            <div class="photo-container">
              <picture-input
                :crop="pictureInput.crop"
                :width="pictureInput.width"
                :height="pictureInput.height"
                :margin="pictureInput.margin"
                :size="pictureInput.size"
                :accept="pictureInput.accept"
                :zIndex="pictureInput.zIndex"
                :buttonClass="pictureInput.buttonClass"
                :removable="pictureInput.removable"
                :hideChangeButton="pictureInput.hideChangeButton"
                :customStrings="pictureInput.customStrings"
              ></picture-input>
            </div>
            <div class="flex-grow">
              <div class="column">
                <label>
                  <br />
                </label>
                <input type="text" placeholder="Enter document name or description" />
              </div>
            </div>

            <div class="textarea">
              <label>
                <br />
                <br />
              </label>
              <input type="checkbox" />&nbsp;Add New
            </div>
          </div>
        </div>

        <div class="btn-container">
          <div class="comments">
            <button type="submit" @click.prevent="onSubmit()" class="back-btn">Back</button>
          </div>
          <div>
            <button type="submit" @click.prevent="onSubmit()" class="save-btn">Save</button>
          </div>
          <div>
            <button type="submit" @click.prevent="submitAndToNext()" class="next-btn">Next</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import PictureInput from "vue-picture-input";
export default {
  components: {
    PictureInput
  },
  data() {
    return {
      pictureInput: {
        crop: false,
        width: "210",
        height: "220",
        margin: "0",
        size: "0.3",
        zIndex: 0,
        buttonClass: "btn",
        removable: true,
        hideChangeButton: true,
        customStrings: {
          upload: "<h1>Bummer!</h1>",
          drag:
            "Drag and drop photo or click to upload. <br><br> Max. 300KB. <br> PNG or JPG only.",
          remove: "Remove"
        }
      }
    };
  },

  methods: {}
};
</script>


<style scoped>
* {
  box-sizing: border-box;
}

.container {
  background-color: white;
  display: inline-block;
  font-family: sans-serif, Arial, Helvetica;
  width: 100%;
}

.section {
  width: 100%;
  padding-top: 30px;
  padding-bottom: 30px;
  border-bottom: 1px solid #b6b1b1;
  display: inline-block;
}
.link {
  cursor: pointer;
  color: dodgerblue;
  font-weight: bold;
}

.link:hover {
  color: blue;
}
.flex {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.flex-grow {
  display: flex;
  flex-direction: row;
  flex: 1;
}
.column1 {
  margin-top: 10px;
  margin-bottom: 10px;
  padding-right: 10px;
  width: 40%;
}

/* Clear floats after the columns */
.row::after {
  content: "";
  clear: both;
  display: table;
}

.column {
  margin-top: 10px;
  margin-bottom: 10px;
  padding-right: 10px;
  width: 100%;
}

label {
  font-size: 13px;
  display: block;
}

.textarea {
  width: 30%;
  margin-top: 10px;
  margin-bottom: 10px;
  padding-right: 10px;
}

.photo-container {
  margin-top: 25px;
  margin-bottom: 10px;
  color: purple;
  width: 30%;
  display: inline-block;
}

input[type="text"],
select,
textarea {
  font-size: 13px;
  width: 100%;
  padding: 9px;
  margin-top: 4px;
  border: 1px solid #ccc;
  border-radius: 3px;
  outline: none;
  /* background-color: #f1f1f1; */
  background-color: rgb(232, 240, 254);
}

select {
  padding: 8px 5px;
}

select:invalid {
  color: #777777;
}

option {
  color: black;
}

input:focus,
select:focus,
textarea:focus {
  outline: none;
  border: 1px solid #a842a7;
  background-color: #eee;
}

.btn-container {
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
}

.comments {
  display: flex;
  flex: 1;
  cursor: pointer;
}

.comments i {
  font-size: 35px;
}

.comments span {
  font-size: 13px;
  margin: 6px;
  display: block;
}

.next-btn,
.save-btn {
  font-size: 13px;
  width: 70px;
  border-radius: 20px;
  font-weight: bold;
  height: 40px;
  outline: none;
  text-align: center;
  box-sizing: border-box;
  cursor: pointer;
  display: block;
}

.back-btn {
  font-size: 13px;
  width: 70px;
  border-radius: 20px;
  font-weight: bold;
  height: 40px;
  outline: none;
  text-align: center;
  box-sizing: border-box;
  cursor: pointer;
  display: block;
}

.addnew-btn {
  font-size: 13px;
  width: 100px;
  border-radius: 20px;
  font-weight: bold;
  height: 40px;
  outline: none;
  text-align: center;
  box-sizing: border-box;
  cursor: pointer;
  display: block;
}
.next-btn {
  margin-left: 20px;
  color: white;
  background-color: black;
}

.save-btn {
  color: black;
  background-color: white;
}

.save-btn:hover {
  color: white;
  background-color: black;
}

.back-btn {
  color: black;
  background-color: white;
}

.back-btn:hover {
  color: white;
  background-color: black;
}

.addnew-btn {
  color: black;
  background-color: white;
}

.addnew-btn:hover {
  color: white;
  background-color: black;
}

.next-btn:hover {
  color: black;
  background-color: white;
}

/* For mobile phones: */
@media only screen and (max-width: 1250px) {
  .flex-grow {
    flex-direction: column;
  }
}

/* For mobile phones: */
@media only screen and (max-width: 520px) {
  .flex {
    flex-direction: column;
  }

  .column,
  .textarea {
    padding: 0px;
    width: 100%;
  }
}
</style>