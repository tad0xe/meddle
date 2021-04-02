<template>
  <div>
    <div class="container">
      <form @submit.prevent="onSubmit()">
        <div class="section">
          <p>This report is intended only as a general guide to help the client make his own evaluation of the overall condition of the property, and is not intended to reflect the value of the premises, nor make any representation as to the advisability of purchase. The report expresses the personal opinions of the inspector, based upon his visual impressions of the conditions that existed at the time and date of the inspection only. The inspection and report are not intended to be technically exhaustive, or to imply that every component was inspected, or that every possible defect was discovered. No disassembly of equipment, opening of walls, moving of furniture, appliances or stored items, or excavation was performed. All components and conditions which by the nature of their location are concealed, camouflaged or difficult to inspect are excluded from the report. The inspection is performed in compliance with the current version of the International Residential Standards of Practice (InterNACHI), a copy of which is available at the following websites:</p>

          <p>www.cbhi.biz. / www.nachi.org.</p>

          <p>Systems and conditions which are not within the scope of the inspection include, but are not limited to: formaldehyde, lead paint, asbestos, mold or methamphetamine contamination, toxic or flammable materials, and other environmental hazards; pest infestation, playground equipment, efficiency measurement of insulation or heating and cooling equipment, internal or underground drainage or plumbing, any systems which are shut down or otherwise secured; water wells (water</p>

          <p>quality and quantity) zoning ordinances; intercoms; security systems; heat sensors; cosmetics or building code conformity. Any general comments about these systems and conditions are informational only and do not represent an inspection.</p>

          <p>The inspection report should not be construed as a compliance inspection of any governmental or non governmental</p>

          <p>codes or regulations. The report is not intended to be a warranty or guarantee of the present or future adequacy or performance of the structure, its systems, or their component parts. This report does not constitute any express or implied warranty of merchantability or fitness for use regarding the condition of the property and it should not be relied upon as such. Any opinions expressed regarding adequacy, capacity, or expected life of components are general</p>

          <p>estimates based on information about similar components and occasional wide variations are to be expected between such estimates and actual experience.</p>

          <p>We certify that our inspectors have no interest, present or contemplated, in this property or its improvement and no involvement with trades people or benefits derived from any sales or improvements. To the best of our knowledge and belief, all statements and information in this report are true and correct.</p>

          <p>An earnest effort was made on your behalf to discover all visible defects, however, in the event of an oversight, maximum liability must be limited to the fee paid. Should any disagreement or dispute arise as a result of this inspection or report, it shall be decided by arbitration and shall be submitted for binding, non-appealable arbitration to the American Arbitration Association in accordance with its Construction Industry Arbitration Rules then obtaining, unless the parties mutually agree otherwise. In the event of a claim, the Client will allow the Inspection Company to inspect the claim prior to any repairs or waive the right to make the claim. Client agrees not to disturb or repair or have repaired anything which may constitute evidence relating to the complaint, except in the case of an emergency.</p>
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

p {
  margin-top: 15px;
  margin-bottom: 15px;
  font-size: 13px;
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
</style>