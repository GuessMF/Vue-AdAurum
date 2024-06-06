<script setup>
import HelloWorld from './components/HelloWorld.vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Sidebar from './components/Sidebar.vue';
</script>

<template>
  <!-- <div>
    <Header></Header>
  </div>
  <HelloWorld msg="Vite + Vue" /> -->
  <!-- rfrfr -->
  <Header />

  <router-view></router-view>

  <Footer />
</template>

<style scoped>
/* #app {

} */
/* // .wrapper {
//   max-width: 1200px;
//   margin: 0 auto;
// }

// #app {
//   color: white;
//   font-size: 100px;
//   text-align: center;
//   min-height: 100svh;
//   max-width: 1200px;
//   margin: 0 auto;
// } */
</style>
