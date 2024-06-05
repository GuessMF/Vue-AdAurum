<script setup>
import HelloWorld from './components/HelloWorld.vue';
import Header from './components/Header.vue';
</script>

<template>
  <!-- <div>
    <Header></Header>
  </div>
  <HelloWorld msg="Vite + Vue" /> -->

  <Header />

  <router-view></router-view>
</template>

<style scoped lang="scss">
#app {
  background-color: red;
  color: white;
  font-size: 100px;
  text-align: center;
}
</style>
