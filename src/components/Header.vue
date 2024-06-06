<script setup>
// import { ref } from 'vue'

// defineProps({
//   msg: String,
// })

import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const targetRoute = computed(() => {
  return route.path === "/main" ? "/" : "/main";
});
</script>

<template>
  <header class="">
    <div class="wrapper row">
      <router-link :to="targetRoute"
        ><img src="../assets/images/logo__header.webp" alt=""
      /></router-link>
      <nav class="menu">
        <ul class="menu__list row centered">
          <li class="menu__item row centered">
            <router-link
              :to="targetRoute"
              class="menu__link row centered pink-bg"
              ><img src="../assets/icons/convert-card.svg" alt="" />
            </router-link>
            <h6>5%</h6>
          </li>
          <li class="menu__item row centered">
            <router-link
              :to="targetRoute"
              class="menu__link row centered pink-bg"
              ><img src="../assets/icons/user.svg" alt="" />
            </router-link>
            <h6>Username@adaurum.ru</h6>
          </li>
          <li class="menu__item row centered">
            <router-link
              :to="targetRoute"
              href=""
              class="menu__link row centered white-bg"
              ><img src="../assets/icons/settings.svg" alt=""
            /></router-link>
          </li>
          <li class="menu__item">
            <router-link
              :to="targetRoute"
              href=""
              class="menu__link row centered white-bg"
              ><img src="../assets/icons/login.svg" alt=""
            /></router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped lang="scss">
@import "../assets/style/var";
header {
  border: black 1px solid;

  .wrapper {
    justify-content: space-between;
    padding-top: 33px;
    padding-bottom: 33px;
  }
  .menu {
    &__list {
      gap: 26px;
    }
    &__item {
      gap: 8px;
    }
    &__link {
      width: 40px;
      height: 40px;
      border-radius: 100%;
    }
  }
}
</style>
