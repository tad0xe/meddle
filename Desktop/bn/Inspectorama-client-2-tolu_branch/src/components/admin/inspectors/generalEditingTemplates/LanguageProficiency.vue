<template>
  <div>
    <div class="container">
      <div class="error" v-if="error">{{error}}</div>
      <div class="container-header">Languages</div>
      <form @submit.prevent="onSubmit">
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
              <label for="languages">Languages: *</label>
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
                <option value disabled hidden selected>Select Profiiency</option>
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
              <br />
              <button
                type="button"
                class="delete-btn"
                @click="deleteLanguage(index), profiiencyTypeOnClick(), languageTypeOnClick()"
              >
                <i class="fa fa-close"></i>
                <span>&nbsp;Delete</span>
              </button>
            </div>
          </div>
          <br />
          <hr />
          <br />
        </div>
        <div v-if="languageProficiency.length < 5">
          <button type="button" class="add-btn" @click="addLanguage">
            <i class="fa fa-plus"></i>
            <span>&nbsp;Add New</span>
          </button>
          <br />
          <br />
          <hr />
        </div>
        <div class="float-right">
          <button class="save-next-btn" @click.prevent="onSubmit('next')">
            <i class="fa fa-check-circle"></i>
            <span>&nbsp;Save and Next</span>
          </button>
          <button class="save-exit-btn" @click.prevent="onSubmit('exit')">
            <i class="fa fa-check-circle"></i>
            <span>&nbsp;Save and Exit</span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { mapState, mapActions, mapMutations, mapGetters } from "vuex";
import { required } from "vuelidate/lib/validators";
export default {
  data() {
    return {
      currentPage: "",
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
      ],
      error: ""
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
    onSubmit(action) {
      if (action == "next" || action == null) {
        this.$v.$touch();
        if (this.$v.$invalid) {
          return;
        }
      }

      const languageProficiencyData = {
        languageProficiency: this.languageProficiency
      };
      const inspectorId = localStorage.getItem("openedInspectorId");
      axios
        .patch(
          `/inspector_users_admin/update/${inspectorId}`,
          languageProficiencyData
        )
        .then(res => {
          if (action == "next") {
            this.$emit("afterSaving");
          }
          if (action == "exit") {
            this.storeOkMessage(
              "The inspector's language information has been updated"
            );
            this.$router.push("/inspectors");
          }
        })
        .catch(error => {
          console.log(error);
          this.error = error.response.data;
        });
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
    },

    ...mapMutations("adminStore", ["storeOkMessage"])
  },

  created() {
    const inspectorId = localStorage.getItem("openedInspectorId");
    axios
      .get(`/inspector_users_admin/${inspectorId}`)
      .then(res => {
        this.languageProficiency = res.data.languageProficiency;
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>
<style scoped>
* {
  box-sizing: border-box;
}

.container {
  font-family: sans-serif, Arial, Helvetica;
  background-color: white;
  width: 100%;
  display: inline-block;
}

.container-header {
  padding-bottom: 20px;
  font-size: 22px;
  color: darkblue;
  font-weight: bold;
}

hr {
  margin-left: -10px;
  margin-right: -10px;
}

.error {
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 14px;
  color: red;
}

label {
  font-size: 14px;
  display: block;
  width: 100%;
}

select {
  width: 100%;
  padding: 8px 5px;
  margin-top: 6px;
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

input:focus {
  outline: none;
  border: 1px solid #a842a7;
  background-color: #eee;
}

.invalid select {
  border: 1px solid red;
}

.invalid label {
  color: red;
}

.invalid span {
  color: red;
  font-size: 12px;
}

.row::after {
  content: "";
  clear: both;
  display: table;
}

.column {
  float: left;
  width: 200px;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-right: 20px;
}

.add-btn,
.delete-btn {
  font-size: 14px;
  font-weight: bold;
  padding: 4px 8px;
  color: white;
  cursor: pointer;
  outline: none;
  border: solid;
  border-radius: 5px;
}

.delete-btn {
  background-color: red;
  border-color: orangered darkred darkred orangered;
  opacity: 0.8;
}

.delete-btn:active {
  border-color: darkred orangered orangered darkred;
  opacity: 0.8;
}

.add-btn {
  background-color: darkblue;
  border-color: blue darkblue darkblue blue;
  opacity: 0.85;
}

.add-btn:active {
  opacity: 0.85;
  border-color: darkblue blue blue darkblue;
}

.add-btn:hover,
.delete-btn:hover {
  opacity: 1;
}

.float-right {
  float: right;
}

.save-exit-btn,
.save-next-btn {
  font-size: 18px;
  font-weight: bold;
  padding: 8px 14px;
  margin-top: 45px;
  margin-bottom: 40px;
  background-color: #ea7601;
  color: white;
  cursor: pointer;
  outline: none;
  border-radius: 5px;
  border: solid;
  border-color: #ed6502 #a04300 #a04300 #ed6502;
  opacity: 0.9;
}

.save-next-btn {
  margin-right: 20px;
}

.save-exit-btn:hover,
.save-next-btn:hover {
  opacity: 1;
}

.save-exit-btn:active,
.save-next-btn:active {
  opacity: 0.95;
  border-color: #a04300 #ed6502 #ed6502 #a04300;
}
</style>

