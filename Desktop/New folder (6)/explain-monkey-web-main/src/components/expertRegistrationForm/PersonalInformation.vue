<template>
  <div>
    <form >
      <h4>Personal Information</h4>
      <p>Please enter information about yourself</p>
      <div class="row">
        <div class="col-sm-3">
          <div class="d-flex row">
            <div class="col-sm-6 margin-left-16 exp-reg-background-image"></div>
            <div class="col-sm-6 margin-left-6">
              <button
                class="margin-top-6 border-0 border-radius-6 padding-6 grey"
              >
                Choose Upload
              </button>
              <br />
              <button class="margin-left-2 padding-5 border-0 bg-white">
                No file chosen
              </button>
            </div>
          </div>
        </div>
        <div class="col-sm-9 row">
          <div class="row">
            <div class="col-sm-6">
              <label>First Name:</label>
              <input type="text" class="form-control" name="firstName" />
            </div>
            <div class="col-sm-6">
              <label>Last Name:</label>
              <input type="text" class="form-control" name="lastName" />
            </div>
          </div>

          <div class="row">
            <div class="col-sm-6">
              <label>Country:</label>
              <select class="form-control">
                <option>Select</option>
                <option></option>
              </select>
            </div>
            <div class="col-sm-6">
              <label>State:</label>
              <select class="form-control">
                <option>Select</option>
                <option></option>
              </select>
            </div>
          </div>

          <div class="row">
            <div class="col-sm-6">
              <label>City:</label>
              <input type="text" class="form-control" name="city" />
            </div>
            <div class="col-sm-6">
              <label>street:</label>
              <input type="text" class="form-control" name="street" />
            </div>
          </div>
          <div class="col-sm-6">
            <label>Phone Number:</label>
            <input type="text" class="form-control" name="tel" />
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-end">
        <button
          class="bg-green white padding-14 margin-right-10 border-0 border-radius-6"
          type="button"
          @click="handleNavigation('professional-details')"
        >
          Next Step >
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
