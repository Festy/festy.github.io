<template>
  <div class="sidebar">
      <router-link to="/">Home</router-link>
      <router-link to="/projects">Projects</router-link>
      <router-link to="/resume">Resume</router-link>
      <router-link to="/dev-blog">Dev Blog</router-link>
      <router-link to="/travel-blog">Travel Blog</router-link>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../vars.scss";
a {
  text-decoration: none;
  margin-left: 20px;
}

.sidebar {
      padding: 30px;

  a {
    &.router-link-exact-active {
      color: $color_green;
    }
     &:hover{
      color: $color_green;
    }
  }

}
</style>
