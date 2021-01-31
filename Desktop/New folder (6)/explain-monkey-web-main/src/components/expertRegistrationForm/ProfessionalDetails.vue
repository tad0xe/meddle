<template>
  <div>
    <form>
      <br>
      <br>
     <h4> Professional Details</h4>
      <br />
      Please enter information about your profession
      <br />
      <br />
    
      <div class="row">
        <div class="col-sm-6">
          <label>Category:</label>
          <select class="form-control">
            <option>Select</option>
            <option></option>
          </select>
        </div>
        <div class="col-sm-6">
          <label>Overall Years of Experience</label>
          <select class="form-control">
            <option>Select</option>
            <option></option>
          </select>
        </div>
      </div>
      <div class="row margin-top-20">
        <div class="col-sm-6">
          <label>Area of Specialization</label>
          <select class="form-control">
            <option>Select</option>
          </select>
        </div>
        <div class="col-sm-6">
          <label>Years of Specialization Experience</label>
          <select class="form-control">
            <option>Select</option>
            <option></option>
          </select>
        </div>
      </div>
      <br />
      <div class="d-flex">
        <div class="plus"></div>
        <p class="padding-left-10">Add another profession</p>
      </div>
      <br />
      <br />
      <h4>Educational Background</h4>
      <br />
      <div class="row">
        <div class="col-md-4">
          <label>Name of Institution</label>
          <input type="text" class="form-control" name="firstName" />
        </div>
        <div class="col-md-4">
          <label>Education Type</label>
          <input type="text" class="form-control" name="firstName" />
        </div>

        <div class="col-md-4">
          <label>Year of Graduation</label>
          <select class="form-control">
            <option>Select</option>
            <option></option>
          </select>
        </div>
      </div>
      <div class="d-flex padding-top-20">
        <div class="plus"></div>
        <p class="padding-left-10">Add another Education background</p>
      </div>
      <br />
      <br />
      <div class="d-flex justify-content-end">
        <button
          class="green bg-white padding-10 border-color-green margin-right-10 border-0 border-radius-6"
          type="button"
          @click="handleNavigation('personal-information')"
        >
           <        Previous Step
        </button>
        <button
          class="white bg-green padding-10 margin-right-10 border-0 border-radius-6"
          type="button"
          @click="handleNavigation('references')"
        >
          Next Step    >
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  components: {},
  props: ["handleNavigation"],
  methods: {},
};
</script>

<style scoped></style>
