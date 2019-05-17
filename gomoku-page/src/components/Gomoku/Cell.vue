<template>
  <div :class="this.colorClass"></div>
</template>

<script>
export default {
  props: ["color"],
  computed: {
    colorClass: function() {
      return ["white", "first", "second"][this.color];
    }
  }
};
</script>

<style lang="scss" scoped>
.first {
  background-color: var(--first-color);
}

.second {
  background-color: var(--second-color);
}

.white {
  background-color: white;
}
</style>
