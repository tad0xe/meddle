<template>
  <div>
    <div class="container">
      <div class="container-left">
        <InspRegProgress :currentPage="currentPage"></InspRegProgress>
      </div>
      <div class="container-right">
        <form>
          <div class="text-spaced">
            <h2>
              {{$t('generic.weHaveToKnowYou')}}
              <br />
              <span>{{$t('generic.pleaseTakeOutTime')}}</span>
            </h2>
            <br />
            <h3>{{$t('languageProficiency.title')}}</h3>
            <p>
              <span>{{$t('languageProficiency.tellUsTheLanguages')}}</span>
            </p>
          </div>
          <br />
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
                <label for="languages">{{$t('languageProficiency.languages')}} *:</label>
                <select
                  @click="languageTypeOnClick()"
                  v-model="languageProficiency.language"
                  required
                >
                  <option value selected hidden disabled>{{$t('languageProficiency.selectLanguage')}}</option>
                  <option
                    :disabled="islanguageType(languageType.value)"
                    v-for="(languageType, index) in languageTypes"
                    :key="index"
                    :value="languageType.value"
                  >{{languageType.type}}</option>
                </select>
                <span
                  v-if="!$v.languageProficiency.$each[index].language.required && 
                        $v.languageProficiency.$each[index].language.$error"
                >{{$t('languageProficiency.validationError.languageRequired')}}</span>
              </div>
              <div
                class="column"
                :class="{invalid:  $v.languageProficiency.$each[index].proficiency.$error}"
              >
                <label for="languageProficiency.proficiency">{{$t('languageProficiency.proficiency')}}</label>
                <select v-model="languageProficiency.proficiency" required>
                  <option
                    value
                    disabled
                    hidden
                    selected
                  >{{$t('languageProficiency.selectProficiency')}}</option>
                  <option
                    v-for="(proficiencyType, index) in proficiencyTypes"
                    :key="index"
                    :value="proficiencyType.value"
                  >{{proficiencyType.type}}</option>
                </select>
                <span
                  v-if="!$v.languageProficiency.$each[index].proficiency.required && 
                        $v.languageProficiency.$each[index].proficiency.$error"
                >{{$t('languageProficiency.validationError.proficiencyRequired')}}</span>
              </div>
              <div v-if="(index + 1)> 1">
                <br />
                <br />
                <button
                  type="button"
                  class="delete-btn"
                  @click="deleteLanguage(index), languageTypeOnClick()"
                >{{$t('buttons.delete')}}</button>
              </div>
            </div>
            <br />
            <hr />
            <br />
          </div>
          <div v-if="languageProficiency.length < 5">
            <button type="button" class="add-btn" @click="addLanguage">{{$t('buttons.add')}}</button>
            <br />
            <br />
            <hr />
          </div>
          <br />
          <div class="flex">
            <div class="maximum">
              <button
                type="button"
                @click.prevent="onSave('back')"
                class="back-btn"
              >{{$t('buttons.back')}}</button>
            </div>
            <div>
              <button
                type="button"
                @click.prevent="onSave()"
                class="save-btn"
              >{{$t('buttons.save')}}</button>
            </div>
            <div>
              <button
                type="button"
                @click.prevent="onSave('next')"
                class="next-btn"
              >{{$t('buttons.next')}}</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import InspRegProgress from "./InspRegProgress.vue";
import { required } from "vuelidate/lib/validators";
import languageProficiencyTypes from "../../../mockData/languageProficiencyTypes";
import {transformObjectToValueTypeArray} from "../../../utility";

export default {
  components: {
    InspRegProgress
  },
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
      proficiencyTypes: languageProficiencyTypes(),
      languageTypes: transformObjectToValueTypeArray(this.$t("languageProficiency.languageTypes"))
    };
  },

  computed: {
    typeOfInspector() {
      return this.$store.getters.typeOfInspector;
    }
  },

  watch: {
    "$i18n.locale"(to, fro) {
      this.proficiencyTypes = languageProficiencyTypes(this.$i18n.locale);
      this.languageTypes = transformObjectToValueTypeArray(this.$t("languageProficiency.languageTypes"))
    }
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

    onSave(direction) {
      if (direction == "next" || direction == null) {
        this.$v.$touch();
        if (this.$v.$invalid) {
          return;
        }
      }

      const langProfiencyData = {
        languageProficiency: this.languageProficiency
      };
      axios
        .patch("/inspector_infos/me", langProfiencyData)
        .then(res => {
          if (direction == "next") {
            if (this.typeOfInspector == "vehicle") {
              this.$router.push(
                `/${this.$i18n.locale}/inspector/upload-documentaion`
              );
            } else if (this.typeOfInspector == "home") {
              this.$router.push(`/${this.$i18n.locale}/inspector/references`);
            }
          }

          if (direction == "back") {
            this.$router.push(`/${this.$i18n.locale}/inspector/education`);
          }
        })
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

  beforeRouteLeave: function(to, from, next) {
    this.currentPage = null;
    next();
  },

  created() {
    this.currentPage = "languageProficiency";
    axios
      .get("/inspector_infos/me")
      .then(res => {
        if (
          res.data.languageProficiency[0] !== null &&
          res.data.languageProficiency[0] !== undefined
        ) {
          this.languageProficiency = res.data.languageProficiency;
        }
      })
      .catch(error => console.log(error));
  }
};
</script>
<style scoped>
* {
  box-sizing: border-box;
}

.container {
  font-family: sans-serif, Arial, Helvetica;
  background-color: lightblue;
  padding: 50px;
  width: 100%;
  display: flex;
}

.container-left {
  width: auto;
  display: inline-block;
}

.container-right {
  background-color: white;
  padding: 30px;
  padding-bottom: 40px;
  margin-left: 50px;
  max-width: 750px;
  border-radius: 10px;
  border: 1px solid #b6b1b1;
  display: inline-block;
}

label {
  font-size: 14px;
  display: block;
  width: 100%;
}

.add-btn,
.delete-btn {
  font-size: 13px;
  width: 80px;
  color: black;
  outline: none;
  border-radius: 20px;
  font-weight: bold;
  background-color: white;
  height: 30px;
  text-align: center;
  box-sizing: border-box;
  cursor: pointer;
  opacity: 0.9;
}
.add-btn:hover {
  opacity: 1;
  color: blue;
}

.delete-btn:hover {
  opacity: 1;
  color: red;
}

.flex {
  display: flex;
}

.maximum {
  flex: 1;
}

.back-btn,
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
  opacity: 0.9;
  display: block;
}

.back-btn {
  color: white;
  background-color: black;
}

.next-btn {
  margin-left: 20px;
  color: white;
  background-color: black;
}

.save-btn {
  float: right;
  color: black;
  background-color: white;
}

.save-btn:hover {
  opacity: 1;
  color: white;
  background-color: black;
}

.back-btn:hover {
  opacity: 1;
  color: black;
  background-color: white;
}

.next-btn:hover {
  opacity: 1;
  color: black;
  background-color: white;
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

.text-spaced {
  font-size: 18px;
}

.text-spaced span {
  font-weight: lighter;
  font-size: 14px;
}

/* Clear floats after the columns */
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

/* For tablets: */
@media screen and (max-width: 980px) {
  .container {
    padding: 20px;
  }

  .container-right {
    margin-left: 20px;
  }

  @media only screen and (max-width: 820px) {
    .container {
      padding: 5px;
      background-color: white;
    }

    .container-right {
      margin: 0px;
      width: 100%;
      border-radius: 0px;
    }

    .container-left {
      display: none;
    }
  }
}

/* For mobile: */
@media only screen and (max-width: 620px) {
  .container-right {
    padding: 10px;
    padding-bottom: 20px;
  }

  @media only screen and (max-width: 520px) {
    .column {
      margin-right: 0px;
      width: 100%;
    }
  }
}
</style>
