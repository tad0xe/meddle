<template>
  <div>
    <div class="pagination-container">
      <div class="pagination-container__content">
        <div class="arrow-btn" @click.prevent="onClickPrevious">
          <i class="far fa-arrow-alt-circle-left"></i>
          <span style="padding: 0px 10px">PREVIOUS</span>
        </div>
        <div class="pagination-text">
          <span
            v-for="(page, index) in currentPages"
            :key="index"
            @click="onClickPageNumber(index)"
            :class="{ active: selectedPageNumber == index + 1 }"
            >{{ index + 1 }}</span
          >
        </div>
        <div class="arrow-btn" @click.prevent="onClickNext">
          <span style="padding: 0px 10px">NEXT</span>
          <i class="far fa-arrow-alt-circle-right"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["allItemCount", "limit", "firstVisiblePaginations"],

  data() {
    return {
      currentFirstVisiblePaginations: this.firstVisiblePaginations,
      currentLimit: this.limit,
      currentPages: [],
      selectedPageNumber: 1,
    };
  },

  methods: {
    getNumOfPages(noOfItems) {
      return Math.ceil(noOfItems / this.currentLimit);
    },

    setVisiblePaginations() {
      const numberedPages = [];

      const numOfPages = this.getNumOfPages(this.allItemCount);

      if (numOfPages > 5) {
        for (
          let i = this.currentFirstVisiblePaginations;
          i <= this.currentFirstVisiblePaginations + 4;
          i++
        ) {
          // To ensure only 5 paginations are visible at a time
          numberedPages.push(i);
        }
        this.currentPages = numberedPages;
      } else {
        for (let i = 1; i <= numOfPages; i++) {
          // To ensure only the number of pages appear
          numberedPages.push(i);
        }
        this.currentPages = numberedPages;
      }
    },

    onClickNext() {
      this.$emit("increaseSkip");
      if (this.selectedPageNumber < this.currentPages.length) {
        this.selectedPageNumber++;
      }
      this.setVisiblePaginations();
    },

    onClickPrevious() {
      this.$emit("decreaseSkip");
      const newPageNumber = this.selectedPageNumber - 1
      if (newPageNumber > 0) {
        this.selectedPageNumber = newPageNumber
      }
      this.setVisiblePaginations();
    },

    onClickPageNumber(index) {
      this.selectedPageNumber = index + 1;
      this.$emit("setSkip", index * this.currentLimit);
    },
  },

  mounted() {
    this.setVisiblePaginations();
  },
};
</script>

<style lang="scss" scoped>
.pagination-container {
  margin: 20px 0px;
  justify-content: center;
  width: 100%;
  display: flex;
  color: #292b5f;
}

.pagination-container__content {
  padding: 18px 15px;
  align-items: center;
  justify-content: space-between;
  border-radius: 20px;
  background-color: white;
  max-width: 900px;
  width: 100%;
  display: flex;
  border: 1px solid rgba(0, 0, 0, 0.125);
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
}

.arrow-btn {
  display: flex;
  align-items: center;
  cursor: pointer;
  i {
    font-size: 22px;
  }
  span {
    font-size: 12px;
  }
}
.pagination-text {
  display: flex;
  align-items: center;
  span {
    margin-left: 6px;
    margin-right: 6px;
    font-size: 13px;
    cursor: pointer;
  }
  .active {
    width: 20px;
    height: 20px;
    color: white;
    background-color: #292b5f;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    display: flex;
  }
}
</style>
