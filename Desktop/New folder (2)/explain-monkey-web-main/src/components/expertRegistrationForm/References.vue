<template>
  <div>
    <form>
      References
      <p>Please enter information about your refrees</p>
      <br />
      <br />
       <div class="row">
        <div class="col-sm-6">
          <label>Refree First Name</label>
          <input type="text" class="form-control" name="firstName" />
        </div>
        <div class="col-sm-6">
          <label>Refree Last Name</label>
           <input type="text" class="form-control" name="firstName" />
        </div>
      </div>
      <br>
      <br>
        <div class="row">
        <div class="col-md-6">
          <label>Refree Company name</label>
          <input type="text" class="form-control" name="firstName" />
        </div>
        <div class="col-md-6">
          <label>Refree Relationship with expert</label>
           <input type="text" class="form-control" name="firstName" />
        </div>
      </div>
      <br>
      <br>
        <div class="row">
        <div class="col-sm-6">
          <label>Refree Email address</label>
          <input type="text" class="form-control" name="firstName" />
        </div>
      </div>
      <br>
  <div class="d-flex padding-top-20 ">
      <div class="plus"></div>
    <p class="padding-left-10">Add Refree</p>
      </div>
      <br />
      <br />
      <div class="d-flex justify-content-end">
      <button class="green bg-white padding-10 margin-right-10 border-0 border-radius-6" type="button" @click="handleNavigation('professional-details')">
        Previous Step
      </button>
      <button class="white bg-green padding-10 margin-right-10 border-0 border-radius-6" type="button" @click="handleNavigation('activation')">
        Next Step
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
