<template>
  <div id="app">
    <div id="nav">
      <TopMenu />
    </div>
    <router-view/>
  </div>
</template>

<script lang="ts">
import TopMenu from '@/components/TopMenu.vue'
export default {
  components: {
    TopMenu
  }
}
</script>

<style lang="scss">
@import "vars.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $color_font_default;

  a {
    color: $color_font_default;
  }
}

#nav {
  display: flex;
  justify-content: center;
}
</style>
