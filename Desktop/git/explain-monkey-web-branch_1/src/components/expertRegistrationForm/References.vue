<template>
  <div>
    <form>
      <br />

      <h4>References</h4>
      <p>Please enter information about your refrees</p>
      <br />
      <br />
      <div class="row padding-4">
        <div class="col-sm-4">
          <label>Refree First Name</label>
          <input type="text" class="form-control" name="firstName" />
        </div>
        <div class="col-sm-4">
          <label>Refree Last Name</label>
          <input type="text" class="form-control" name="firstName" />
        </div>
        <div class="col-sm-4 hidden-sm"></div>
      </div>

      <div class="row padding-4">
        <div class="col-sm-4">
          <label>Refree Company name</label>
          <input type="text" class="form-control" name="firstName" />
        </div>
        <div class="col-sm-4">
          <label>Refree Relationship with expert</label>
          <input type="text" class="form-control" name="firstName" />
        </div>
        <div class="col-sm-4 hidden-sm"></div>
      </div>

      <div class="row padding-4">
        <div class="col-sm-4">
          <label>Refree Email address</label>
          <input type="text" class="form-control" name="firstName" />
        </div>
      </div>
      <br />
      <div class="d-flex padding-top-20">
        <div class="plus"></div>
        <p class="padding-left-10">Add Refree</p>
      </div>
      <br />
      <br />
      <div class="d-flex justify-content-end padding-bottom-100">
        <button
          class="green d-flex bg-white border-color-green outline-0 padding-10 margin-right-10 border-0 border-radius-6"
          type="button"
          @click="handleNavigation('professional-details')"
        >
          <div class="arrow-left"></div>
          <span class="padding-top-4 padding-left-4">Previous Step</span>
        </button>
        <button
          class="white bg-green padding-10 margin-right-10 d-flex border-0 border-radius-6"
          type="button"
          @click="handleNavigation('activation')"
        >
          <span class="padding-top-4 padding-left-8">Next Step</span>
          <div class="arrow-right"></div>
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  components: {},
  props: ['handleNavigation'],
  methods: {},
};
</script>

<style scoped></style>
