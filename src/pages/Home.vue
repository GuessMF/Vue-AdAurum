<script setup>
import Sidebar from '../components/Sidebar.vue';
import Content from '../components/Content.vue';
</script>

<template>
  <div class="wrapper row">
    <Sidebar />
    <Content />
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  gap: 30px;
}
</style>
