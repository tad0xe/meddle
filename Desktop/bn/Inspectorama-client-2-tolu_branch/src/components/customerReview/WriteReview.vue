<template>
  <div class="body">
    <h1>Leave Feedback</h1>
    <p>Please leave feedback and rate John Davidson for the vehicle inspection job for Order ID 4145</p>
    <form @submit.prevent="onSubmit">
      <div>
        <label>
          <strong>Was the inspection report delivered on time?</strong>
        </label>
        <div>
          <input type="radio" value="true" v-model="customerFeedback.wasReportDeliveredOnTime" />
          <label>Yes</label>
          <input type="radio" value="false" v-model="customerFeedback.wasReportDeliveredOnTime" />
          <label>No</label>
        </div>
      </div>
      <table>
        <tr>
          <td>Communication</td>
          <td class="star_rating">
            <star-rating :star-size="20" :padding="5" v-model="customerFeedback.communication"></star-rating>
          </td>
        </tr>
        <tr>
          <td>Expertise</td>
          <td class="star_rating">
            <star-rating :star-size="20" :padding="5" v-model="customerFeedback.expertise"></star-rating>
          </td>
        </tr>
        <tr>
          <td>Professionalism</td>
          <td class="star_rating">
            <star-rating :star-size="20" :padding="5" v-model="customerFeedback.professionalism"></star-rating>
          </td>
        </tr>
        <tr>
          <td>Report Clarity</td>
          <td class="star_rating">
            <star-rating :star-size="20" :padding="5" v-model="customerFeedback.reportClarity"></star-rating>
          </td>
        </tr>
      </table>
      <br />
      <div>
        <label>
          <strong>Will you recommend John Davidson to another customer?</strong>
        </label>
        <div>
          <input type="radio" value="true" v-model="customerFeedback.willRecommendInspector" />
          <label>Yes</label>
          <input type="radio" value="false" v-model="customerFeedback.willRecommendInspector" />
          <label>No</label>
        </div>
      </div>
      <br />
      <div>
        <div>
          <strong>Did John Davidson do a great job?</strong>
          <br />
          <p>Please write a quick review about John Davidson and the inspection job he did for you</p>
        </div>
        <div>
          <strong>Comment:</strong>
          <br />
          <textarea rows="6" v-model="customerFeedback.comment"></textarea>
        </div>
      </div>
      <div>
        <label>
          <strong>Tip(bonus)</strong>
        </label>
        <br />
        <br />
        <div>
          <input type="checkbox" v-model="customerFeedback.tipping.isTipping" />
          <span>
            I will like to leave a
            <strong>$</strong>
            <input type="text" v-model="customerFeedback.tipping.value" /> tip (bonus) for John Davidson
          </span>
          <span>
            <small>&nbsp;&nbsp;&nbsp;&nbsp;&#9679;&nbsp;&nbsp;card you used for your last transaction will be debited</small>
          </span>
        </div>
      </div>
      <center>
        <button type="submit" class="submit-btn">Submit</button>
      </center>
    </form>
  </div>
</template>

<script>
import StarRating from "vue-star-rating";
import axios from "axios";
export default {
  components: {
    StarRating
  },
  data() {
    return {
      customerFeedback: {
        wasReportDeliveredOnTime: null,
        communication: null,
        expertise: null,
        professionalism: null,
        reportClarity: null,
        overallRating: null,
        willRecommendInspector: null,
        comment: "",
        tipping: {
          isTipping: false,
          value: 5
        },
        isFeedbackSubmitted: null
      }
    };
  },
  methods: {
    onSubmit() {
      const overallRating =
        (this.customerFeedback.communication +
          this.customerFeedback.expertise +
          this.customerFeedback.professionalism +
          this.customerFeedback.reportClarity) /
        4;
        this.customerFeedback.overallRating = overallRating
      const customerFeedbackData = {
        customerFeedback: this.customerFeedback
      };
      axios
        .post(
          `/customer_reviews/Vehicle/5d76b3a555a429643a53ccbe/5d9e0ef829fc3e09d4561ec9`,
          customerFeedbackData
        )
        .then(res => {
        })
        .catch(error => {
          console.log(error.response);
        });
    }
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.body {
  font-family: sans-serif, Arial, Helvetica;
  background-color: #f1ffff;
  font-size: 15px;
  padding-top: 50px;
  padding-bottom: 50px;
  padding-left: 200px;
  padding-right: 200px;
  width: 100%;
  display: inline-block;
}

h1 {
  font-size: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
  color: darkblue;
}

p {
  font-size: 15px;
  padding-top: 10px;
  padding-bottom: 10px;
}

form {
  width: 100%;
  background-color: white;
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 20px 10px;
  display: inline-block;
}

table {
  text-align: left;
  font-weight: bold;
}

td {
  padding-top: 5px;
  padding-bottom: 5px;
}

.star_rating {
  padding-left: 20px;
}

input[type="radio"] {
  margin-left: 10px;
  margin-top: 15px;
  margin-bottom: 10px;
}

input[type="text"] {
  width: 50px;
  padding: 3px 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
  outline: none;
  background-color: #f1f1f1;
}

textarea {
  width: 100%;
  margin-top: 10px;
  margin-bottom: 20px;
}

.submit-btn {
  background-color: #2bc4e2;
  color: white;
  width: 200px;
  padding: 10px;
  margin-top: 20px;
  margin-bottom: 10px;
  outline: none;
  border: none;
  cursor: pointer;
  font-size: 18px;
  text-align: center;
  box-sizing: border-box;
  border-radius: 25px;
}

.submit-btn:hover {
  background-color: #07b9dd;
}

/* For desktop: */
@media screen and (max-width: 980px) {
  .body {
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 20px;
    padding-right: 20px;
  }
}

/* For mobile phones: */
@media only screen and (max-width: 530px) {
  .body {
    padding: 10px;
  }
}

/* For small mobile phones: */
@media only screen and (max-width: 328px) {
  .body {
    padding: 10px 5px;
  }

  form {
    padding: 15px 5px;
  }
}
</style>
