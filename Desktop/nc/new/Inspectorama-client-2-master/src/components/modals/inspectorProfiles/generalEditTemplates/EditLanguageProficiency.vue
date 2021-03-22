<template>
  <div>
    <div class="modal-backdrop" @click="close">
      <div class="modal" @click.stop>
        <div class="modal__header">
          <div class="modal__header__content">Edit Language Profiency</div>
          <div class="btn-close-upper" @click="close()">x</div>
        </div>
        <div class="modal-body">
          <form @submit.prevent="onSubmit()">
            <div class="modal-content">
              <div v-for="(languageProficiency, index) in languageProficiency" :key="index">
                <div class="row">
                  <span :for="languageProficiency">
                    <strong>#{{ index + 1 }}</strong>
                  </span>
                  <br />
                  <div
                    class="column"
                    :class="{invalid:  $v.languageProficiency.$each[index].language.$error}"
                  >
                    <label for="languages">Languages *:</label>
                    <select
                      @click="languageTypeOnClick()"
                      data-placeholder="Choose a Language..."
                      v-model="languageProficiency.language"
                      required
                    >
                      <option value selected hidden disabled>Select a language</option>
                      <option
                        :disabled="islanguageType(languageType)"
                        v-for="(languageType, index) in languageTypes"
                        :key="index"
                      >{{languageType}}</option>
                    </select>
                    <span
                      v-if="!$v.languageProficiency.$each[index].language.required && 
                        $v.languageProficiency.$each[index].language.$error"
                    >Language is required.</span>
                  </div>
                  <div
                    class="column"
                    :class="{invalid:  $v.languageProficiency.$each[index].proficiency.$error}"
                  >
                    <label for="languageProficiency.proficiency">Proficiency</label>
                    <select
                      @click="profiiencyTypeOnClick()"
                      v-model="languageProficiency.proficiency"
                      required
                    >
                      <option value disabled hidden selected>Select profiiency</option>
                      <option
                        :disabled="isprofiiencyType(profiiencyType)"
                        v-for="(profiiencyType, index) in profiiencyTypes"
                        :key="index"
                      >{{profiiencyType}}</option>
                    </select>
                    <span
                      v-if="!$v.languageProficiency.$each[index].proficiency.required && 
                        $v.languageProficiency.$each[index].proficiency.$error"
                    >Proficiency is required.</span>
                  </div>
                  <div v-if="(index + 1)> 1">
                    <br />
                    <button
                      type="button"
                      class="delete-btn"
                      @click="deleteLanguage(index), profiiencyTypeOnClick(), languageTypeOnClick()"
                    >Delete</button>
                  </div>
                </div>
                <br />
                <hr />
                <br />
              </div>
              <div v-if="languageProficiency.length < 5">
                <button type="button" class="add-btn" @click="addLanguage">Add</button>
                <br />
                <br />
                <hr />
              </div>
            </div>
            <div>
              <button type="submit" @click.prevent="onSubmit()" class="signupbtn">Confirm</button>
            </div>
          </form>
        </div>
         <footer class="modal-footer"></footer>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { required } from "vuelidate/lib/validators";
export default {
  data() {
    return {
      languageSelectedItems: [],
      proficiencySelectedItems: [],
      languageProficiency: [
        {
          language: "",
          proficiency: ""
        }
      ],
      profiiencyTypes: [
        "Beginner",
        "Elementary",
        "Intermediate",
        "Advanced",
        "Native"
      ],
      languageTypes: [
        "Afrikanns",
        "Albanian",
        "Arabic",
        "Armenian",
        "Basque",
        "Bengali",
        "Bulgarian",
        "Catalan",
        "Cambodian",
        "Chinese (Mandarin)",
        "Croation",
        "Czech",
        "Danish",
        "Dutch",
        "English",
        "Estonian",
        "Fiji",
        "Finnish",
        "French",
        "Georgian",
        "German",
        "Greek",
        "Gujarati",
        "Hebrew",
        "Hindi",
        "Hungarian",
        "Icelandic",
        "Indonesian",
        "Irish",
        "Italian",
        "Japanese",
        "Javanese",
        "Korean",
        "Latin",
        "Latvian",
        "Lithuanian",
        "Macedonian",
        "Malay",
        "Malayalam",
        "Maltese",
        "Maori",
        "Marathi",
        "Mongolian",
        "Nepali",
        "Norwegian",
        "Persian",
        "Polish",
        "Portuguese",
        "Punjabi",
        "Quechua",
        "Romanian",
        "Russian",
        "Samoan",
        "Serbian",
        "Slovak",
        "Slovenian",
        "Spanish",
        "Swahili",
        "Swedish",
        "Tamil",
        "Tatar",
        "Telugu",
        "Thai",
        "Tibetan",
        "Tonga",
        "Turkish",
        "Ukranian",
        "Urdu",
        "Uzbek",
        "Vietnamese",
        "Welsh",
        "Xhosa"
      ]
    };
  },
  validations: {
    languageProficiency: {
      $each: {
        language: {
          required
        },
        proficiency: {
          required
        }
      }
    }
  },
  methods: {
    languageTypeOnClick() {
      this.languageSelectedItems = [];

      this.languageProficiency.forEach(item => {
        this.languageSelectedItems.push(item.language);
      });
    },

    islanguageType(languageType) {
      let item1;
      this.languageSelectedItems.forEach(item => {
        if (item == languageType) {
          item1 = item;
        }
      });
      return item1 == languageType;
    },

    profiiencyTypeOnClick() {
      this.proficiencySelectedItems = [];

      this.languageProficiency.forEach(item => {
        this.proficiencySelectedItems.push(item.proficiency);
      });
    },

    isprofiiencyType(profiiencyType) {
      let item1;
      this.proficiencySelectedItems.forEach(item => {
        if (item == profiiencyType) {
          item1 = item;
        }
      });
      return item1 == profiiencyType;
    },

    close() {
      this.$emit("close");
    },

    onSubmit() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }

      console.log(this.languageProficiency.length);
      const formData = {
        languageProficiency: this.languageProficiency
      };
      this.$emit("confirm", formData);
    },

    addLanguage() {
      const newLanguage = {
        language: "",
        proficiency: ""
      };
      this.languageProficiency.push(newLanguage);
      if (this.languageProficiency.length >= 6) {
        this.deleteLanguage(5);
      }
    },
    deleteLanguage(index) {
      this.languageProficiency.splice(index, 1);
      if (index === 0 && this.languageProficiency.length === 0) {
        this.addLanguage();
      }
    }
  },

  created() {
    this.$store.dispatch("fetchInspectorInfo").then(res => {
      this.languageProficiency = res.languageProficiency;
    });
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal {
  background: #ffffff;
  box-shadow: 2px 2px 20px 1px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  font-family: sans-serif, Arial, Helvetica;
  padding: 15px;
  width: 360px;
}

.modal-content {
  width: 100%;
  max-height: 420px;
  overflow-y: auto;
  display: inline-block;
}

.modal__header {
  display: flex;
  align-items: center;
}

.modal__header__content {
  flex: 1;
  font-size: 20px;
  font-weight: bold;
}

.btn-close-upper {
  font-weight: bold;
  border: 1.5px solid;
  cursor: pointer;
  height: 20px;
  width: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn-close-upper:hover {
  color: red;
}

p {
  margin-top: 5px;
  margin-bottom: 5px;
  color: darkblue;
}

.modal-body {
  font-size: 13px;
  padding-top: 10px;
  padding-bottom: 10px;
}

.modal-footer {
  border-top: 1.5px solid #eeeeee;
  justify-content: flex-end;
  font-size: 13px;
}

.add-btn,
.delete-btn {
  font-size: 13px;
  width: 55px;
  color: black;
  outline: none;
  border-radius: 5px;
  font-weight: bold;
  background-color: white;
  padding-top: 2px;
  padding-bottom: 2px;
  text-align: center;
  cursor: pointer;
}
.add-btn:hover {
  color: green;
}

.delete-btn:hover {
  color: red;
}

.signupbtn {
  background-color: #2bc4e2;
  color: white;
  padding: 10px 20px;
  margin: 8px 0;
  margin-top: 20px;
  outline: none;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
  border-radius: 40px;
  box-sizing: border-box;
  font-size: 16px;
}

.signupbtn:hover {
  background-color: #07b9dd;
}

select {
  width: 100%;
  padding: 6px 3px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
  outline: none;
  background-color: rgb(232, 240, 254);
}

select:invalid {
  color: #777777;
}

option {
  color: black;
}

option:disabled {
  color: #b6b1b1;
}

select:focus {
  border: 1px solid #a842a7;
  background-color: #eee;
}

.column {
  margin-top: 5px;
  margin-bottom: 5px;
  width: 100%;
  display: inline-block;
}

.invalid select {
  border: 1px solid red;
}

label {
  font-size: 13px;
}

.invalid label {
  color: red;
}

.invalid span {
  color: red;
  font-size: 11px;
}

/* For mobile: */
@media only screen and (max-width: 380px) {
  .modal-backdrop {
    padding: 5px;
  }
  .modal {
    padding: 5px;
    border-radius: 5px;
    width: 100%;
  }
}
</style>