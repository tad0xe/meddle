<template>
  <div>
    <div class="body">
      <div
        :style="{width: width + 'px', height: height + 'px', 'border-width': borderWidth + 'px'}"
        class="loader"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    width: {
      default: 12,
      type: Number
    },
    height: {
      default: 12,
      type: Number
    },
    borderWidth: {
      default: 1.8,
      type: Number
    }
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.body {
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  cursor: not-allowed;
  display: flex;
}

.loader {
  border: solid #ccc;
  border-top-color: #ccc;
  border-bottom-color: grey;
  border-radius: 50%;
  -webkit-animation: spin 0.8s linear infinite; /* Safari */
  animation: spin 0.8s linear infinite;
  display: block;
}

@-webkit-keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>