<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

  --base-color: #30b6db;
  --triad-color1: #e14879;
  --triad-color2: #11748f;
  --triad-color3: #a89d14;
  --first-color: var(--triad-color3);
  --second-color: var(--triad-color1);
}
</style>
