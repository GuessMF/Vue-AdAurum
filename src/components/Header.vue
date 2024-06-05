<script setup>
// import { ref } from 'vue'

// defineProps({
//   msg: String,
// })
</script>

<template>
  <header>
    <router-link to="/">go to home</router-link>
    <router-link to="/main">go to main</router-link>
  </header>
</template>

<style scoped lang="scss">
header {
  background-color: red;
  h1 {
    color: blue;
  }
}
</style>
