<template>
  <div>
    <div class="container">
      <form @submit.prevent="onSubmit()">
        <div class="section">
          <div class="row">
            <div class="column">
              <span>Note:</span>
              <p>Items not found in this report are beyond the scope of this inspection and should not be considered inspected at this time. Please read the entire report for important details. Inspected items may be generally rated as follows:</p>
            </div>
          </div>
          <div class="row">
            <div class="column">
              <span>Ratings Abbreviations:</span>
              <p>Items not found in this report are beyond the scope of this inspection and should not be onsidered inspected at this time. Please read the entire report for important details. Inspected items may be generally rated as follows:</p>
            </div>
          </div>
          <div class="row">
            <div class="column">
              <span>SER = Appears Serviceable:</span>
              <p>tem is functional and we did not observe conditions that would lead us to believe problems existed with this system or component. Some serviceable items may show wear and tear. Other conditions may be noted in the body of the report.</p>
            </div>
          </div>
          <div class="row">
            <div class="column">
              <span>MM = Marginal/Maintenance :</span>
              <p>Item warrants attention or monitoring, appears worn, or has a limited remaining useful life expectancy and may require replacement in the not too distant future. Further evaluation or servicing may be needed by a qualified licensed contractor or specialty tradesman dealing with that item or system.</p>
            </div>
          </div>
          <div class="row">
            <div class="column">
              <span>RR = Repair or Replace</span>
              <p>System, item, component, or unit is not functioning as intended, needs repair or replacement, and/or could not be operated/tested and/or inspected due to weather and/or existing site conditions. Further evaluation is needed by a qualified professional engineer, licensed contractor, or specialty tradesman dealing with that item or system.</p>
            </div>
          </div>
          <div class="row">
            <div class="column">
              <span>SAF = Safety Concern:</span>
              <p>Poses a risk of Injury or death. These items should be repaired or replaced before use.</p>
            </div>
          </div>
          <div class="row">
            <div class="column">
              <span>NI = Not Inspected</span>
              <p>Item warrants attention or monitoring, appears worn, or has a limited remaining useful life expectancy and may require replacement in the not too distant future. Further evaluation or servicing may be needed by a qualified licensed contractor or specialty tradesman dealing with that item or system.</p>
            </div>
          </div>
        </div>
        <div class="flex btn-container">
          <div class="comments">
            <i class="fa fa-comments"></i>
            <span>Comments</span>
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
export default {
  data() {
    return {};
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
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #b6b1b1;
  display: inline-block;
}

span {
  font-size: 13px;
  color: grey;
}

p {
  font-size: 14px;
  font-weight: bold;
}

.btn-container {
  padding-top: 20px;
  padding-bottom: 20px;
}

.flex {
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

.next-btn:hover {
  color: black;
  background-color: white;
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
  width: 100%;
}
</style>