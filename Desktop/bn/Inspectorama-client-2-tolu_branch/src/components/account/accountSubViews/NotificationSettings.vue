<template>
  <div>
    <div class="container">
      <div class="container-header">{{$t('notificationSettings.title')}}</div>
      <div class="container-content">
        <table>
          <tr>
            <th>{{$t('notificationSettings.pushNotifications')}}</th>
            <th>{{$t('notificationSettings.text')}}</th>
            <th class="align-left">{{$t('notificationSettings.email.title')}}</th>
          </tr>
          <tr>
            <td>
              <input type="checkbox" v-model="notificationSettings.messages.push" />
            </td>
            <td>
              <input type="checkbox" v-model="notificationSettings.messages.text" />
            </td>
            <td class="align-left">
              <label class="flex">
                <input type="checkbox" v-model="notificationSettings.messages.email" />
                <span>{{$t('notificationSettings.email.messages')}}</span>
              </label>
            </td>
          </tr>
          <tr>
            <td>
              <input type="checkbox" v-model="notificationSettings.reminders.push" />
            </td>
            <td>
              <input type="checkbox" v-model="notificationSettings.reminders.text" />
            </td>
            <td class="align-left">
              <label class="flex">
                <input type="checkbox" v-model="notificationSettings.reminders.email" />
                <span>{{$t('notificationSettings.email.reminders')}}</span>
              </label>
            </td>
          </tr>
          <tr>
            <td>
              <input type="checkbox" v-model="notificationSettings.promotion.push" />
            </td>
            <td>
              <input type="checkbox" v-model="notificationSettings.promotion.text" />
            </td>
            <td class="align-left">
              <label class="flex">
                <input type="checkbox" v-model="notificationSettings.promotion.email" />
                <span>{{$t('notificationSettings.email.promotion')}}</span>
              </label>
            </td>
          </tr>
          <tr>
            <td>
              <input type="checkbox" v-model="notificationSettings.policy.push" />
            </td>
            <td>
              <input type="checkbox" v-model="notificationSettings.policy.text" />
            </td>
            <td class="align-left">
              <label class="flex">
                <input type="checkbox" v-model="notificationSettings.policy.email" />
                <span>{{$t('notificationSettings.email.policy')}}</span>
              </label>
            </td>
          </tr>
          <tr>
            <td>
              <input type="checkbox" v-model="notificationSettings.support.push" />
            </td>
            <td>
              <input type="checkbox" v-model="notificationSettings.support.text" />
            </td>
            <td class="align-left">
              <label class="flex">
                <input type="checkbox" v-model="notificationSettings.support.email" />
                <span>{{$t('notificationSettings.email.accountSupport')}}</span>
              </label>
            </td>
          </tr>
        </table>
      </div>
      <div class="container-footer">
        <button type="submit" class="primary-btn" @click.prevent="onSubmit">{{$t('buttons.saveSettings')}}</button>
        <span @click="onUnsubscribeFromAll">
          <u>{{$t('buttons.unsubscribeFromAll')}}</u>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      notificationSettings: {
        messages: {},
        reminders: {},
        promotion: {},
        policy: {},
        support: {}
      }
    };
  },

  computed: {
    user() {
      return this.$store.getters.generalUserProfile;
    }
  },

  methods: {
    onSubmit() {
      const notificationSettingsData = {
        notificationSettings: this.notificationSettings
      };
      axios
        .patch("/users/me", notificationSettingsData)
        .then(res => {
          this.$notify({
            group: "general",
            text: "Your notification settings have been saved"
          });
        })
        .catch(error => {
          console.log(error.response);
        });
    },

    onUnsubscribeFromAll() {
      this.notificationSettings.messages.email = false;
      this.notificationSettings.messages.text = false;
      this.notificationSettings.messages.push = false;
      this.notificationSettings.reminders.email = false;
      this.notificationSettings.reminders.text = false;
      this.notificationSettings.reminders.push = false;
      this.notificationSettings.promotion.email = false;
      this.notificationSettings.promotion.text = false;
      this.notificationSettings.promotion.push = false;
      this.notificationSettings.policy.email = false;
      this.notificationSettings.policy.text = false;
      this.notificationSettings.policy.push = false;
      this.notificationSettings.support.email = false;
      this.notificationSettings.support.text = false;
      this.notificationSettings.support.push = false;
      this.onSubmit();
    }
  },

  created() {
    axios.get("/users/me").then(res => {
      this.notificationSettings = res.data.notificationSettings;
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
  border-radius: 5px;
  border: 1px solid #b6b1b1;
  width: 100%;
  background-color: white;
  display: inline-block;
}

.container-header {
  padding: 25px 30px;
  font-weight: bold;
  color: #212259;
  border-bottom: 1px solid #ccc;
  font-size: 24px;
}

.container-footer {
  padding: 25px 30px;
  border-top: 1px solid #ccc;
}

.container-content {
  font-size: 13px;
  padding: 25px 30px;
}

.container-footer span {
  color: orangered;
  float: right;
  cursor: pointer;
  line-height: 60px;
}

.container-footer span:hover {
  color: darkred;
}

.save-btn {
  background-color: #2bc4e2;
  color: white;
  max-width: 70%;
  padding: 12px 20px;
  outline: none;
  border: none;
  cursor: pointer;
  font-size: 18px;
  text-align: center;
  box-sizing: border-box;
  border-radius: 5px;
  margin: 10px 0px;
}

.save-btn:hover {
  background-color: #07b9dd;
}

.save-btn[disabled],
.save-btn[disabled]:hover {
  border: 1px solid #2bc4e2;
  border-radius: 5px;
  background-color: white;
  color: #2bc4e2;
  cursor: not-allowed;
}

table {
  width: auto;
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 14px;
  text-align: center;
  border-collapse: collapse;
  border: 1px solid #ddd;
}

th {
  padding: 10px;
  border-left: 1px solid #ddd;
  border-right: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  border-collapse: collapse;
  background-color: #f2f2f2;
}

td {
  padding: 10px;
  border-left: 1px solid #ddd;
  border-right: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  background-color: #f1ffff;
}

.align-left {
  text-align: left;
}

.flex {
  display: flex;
  align-items: center;
}

.flex span {
  margin-left: 5px;
}

/* For tablets: */
@media only screen and (max-width: 820px) {
  .container-header {
    padding: 20px;
    font-size: 22px;
  }

  .container-footer {
    padding: 20px;
  }

  .container-content {
    padding: 20px;
    padding-bottom: 40px;
    margin: 0px;
    width: 100%;
    border-radius: 0px;
  }
}

/* For mobile phones: */
@media only screen and (max-width: 540px) {
  .container {
    border-radius: 0px;
  }

  .container-header {
    padding: 20px 5px;
    font-size: 18px;
  }

  .container-footer {
    padding: 10px;
  }

  .container-content {
    padding: 10px;
    padding-bottom: 40px;
    margin: 0px;
    width: 100%;
    border-radius: 0px;
  }

  .container-content {
    padding: 20px 5px;
  }

  .column1,
  .column2 {
    padding: 0px;
    width: 100%;
  }
}
</style>