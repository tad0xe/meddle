<template>
  <div>
    <form>
      Personal Information
      <p>Please enter information about yourself</p>
  <div class="row">
    <div class="col-sm-6">
    <div class="d-flex">
         <div class="background-image"></div>
         <div class="margin-left-6">
           <button class="margin-top-18 border-0 border-radius-6 padding-6 grey">Choose Upload</button>
          <br>
          <button class="margin-left-2 padding-5 border-0 background-0">No file chosen</button>
         </div>
    </div>
    </div>
   
   
   <div class="col-sm-6">
<div class="row margin-left-18 flex-column-sm ">
 <div class="row ">
        <div class="col-sm-6 md-12">
          <label>First Name:</label>
          <input type="text" class="input form-control" name="firstName" />
        </div>
        <div class="col-sm-6 ">
          <label>Last Name:</label>
           <input type="text" class="input form-control" name="firstName" />
        </div>
      </div>
      
 <div class="row ">
        <div class="col-sm-6  ">
          <label>Country:</label>
           <select class="form-control input">
            <option>Select</option>
            <option></option>
          </select>
        </div>
        <div class="col-sm-6 ">
          <label>State:</label>
              <select class="form-control input">
            <option>Select</option>
            <option></option>
          </select>
        </div>
      </div>
      
 <div class="row">
        <div class="col-sm-6  ">
          <label>City:</label>
          <input type="text" class="form-control input" name="firstName" />
        </div>
        <div class="col-sm-6">
          <label>street:</label>
           <input type="text" class="form-control input " name="firstName" />
        </div>
      </div>
         <div class="col-sm-6  ">
          <label>Phone Number:</label>
           <input type="text" class="input form-control" name="firstName" />
        </div>
</div>
</div>
  </div>
      <div class="d-flex justify-content-end">
      <button class="bg-green white padding-14 margin-right-10 border-0 border-radius-6 " type="button" @click="handleNavigation('professional-details')">
        Next Step   >
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
