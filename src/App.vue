<template>
  <div id="app">
    <div id="nav">
      <Sidebar />
    </div>
    <router-view/>
  </div>
</template>

<script lang="ts">
import Sidebar from '@/components/Sidebar.vue'
export default {
  components: {
    Sidebar
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
}
</style>
