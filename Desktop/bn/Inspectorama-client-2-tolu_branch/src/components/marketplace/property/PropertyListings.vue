<template>
  <div
    class="row bg-xlighter-blue padding-top-20 padding-bottom-20 padding-left-0 padding-left-sm-10 padding-left-lg-40 padding-right-0 padding-right-sm-10 padding-right-lg-40"
  >
    <div class="col-3 d-flex-hidden-lg">
      <div class="max-width-350">
        <Filters />
      </div>
    </div>
    <div class="col-9 stretch-full-lg padding-left-0 padding-left-lg-28">
      <i
        class="fa fa-reorder font-size-30 d-block-display-lg margin-left-10 margin-bottom-10 cursor-pointer"
        @click="handleShowFIlter"
      ></i>

      <div class="row">
        <div
          class="col-sm-6"
          @click="handleNavigateToProperty"
          v-for="(item, index) in items"
          :key="index"
        >
          <SearchItem />
        </div>
      </div>
    </div>
    <modal
      class="padding-top-10 padding-bottom-10 d-block-display-lg"
      name="property-filters"
      width="300"
      height="auto"
      shiftX="0"
      :clickToClose="true"
      :adaptive="true"
      :scrollable="true"
    >
      <Filters />
    </modal>
  </div>
</template>

<script>
import { mapState } from "vuex";
import SearchItem from "./useableComponents/SearchItem";
import Filters from "./useableComponents/Filters";
export default {
  components: {
    SearchItem,
    Filters,
  },
  data() {
    return {
      items: [],
    };
  },
  computed: {
    ...mapState({
      currentScreenWidth: (state) => state.utilities.currentScreenWidth,
    }),
  },
  methods: {
    handleShowFIlter() {
      this.$modal.show("property-filters");
    },
    handleNavigateToProperty(){
      this.$router.push(`/${this.$i18n.locale}/market-place/view-property/:id`)
    }
  },
  created() {
    const newArr = [];
    for (let i = 0; i < 20; i++) {
      newArr.push(i);
    }
    this.items = newArr;
  },
};
</script>

<style scoped></style>
