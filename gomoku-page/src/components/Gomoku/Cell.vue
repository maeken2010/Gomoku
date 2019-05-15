<template>
  <div :class="this.colorClass"></div>
</template>

<script>
export default {
  props: ["color"],
  computed: {
    colorClass: function() {
      return ["white", "red", "blue"][this.color];
    }
  }
};
</script>

<style scoped>
.red {
  background-color: red;
}

.blue {
  background-color: blue;
}

.white {
  background-color: white;
}
</style>
