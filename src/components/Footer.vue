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
  <footer class="footer">
    <div class="wrapper row">
      <router-link :to="targetRoute"
        ><img src="../assets/images/logo__footer.webp" alt=""
      /></router-link>

      <ul class="footer__list row centered">
        <li class="footer__item row centered">
          <router-link :to="targetRoute" class="footer__link row centered">
            <p>Политика конфиденциальности</p></router-link
          >
        </li>
        <li class="footer__item row centered">
          <img src="../assets/icons/mail-to.svg" alt="" />
          <router-link :to="targetRoute" class="footer__link row centered">
            <p>pinkchicken@adaurum.ru</p>
          </router-link>
        </li>

        <li class="footer__item row centered">
          <img src="../assets/icons/global.svg" alt="" />
          <p class="pink">RU</p>
          <p>EN</p>
          <p>TUR</p>
        </li>

        <li class="footer__item row centered">
          <router-link :to="targetRoute" class="footer__link row centered tg"
            ><img src="../assets/icons/tg_icon.svg" alt=""
          /></router-link>
          <router-link :to="targetRoute" class="footer__link row centered wa"
            ><img src="../assets/icons/wa_icon.svg" alt=""
          /></router-link>
        </li>
      </ul>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  .wrapper {
    justify-content: space-between;
    padding-top: 28px;
    padding-bottom: 28px;
  }
  &__list {
    gap: 65px;
  }
  &__item {
    gap: 12px;
  }
  &__link {
    font-weight: 15px;
    line-height: 145%;
    letter-spacing: 0%;
  }
}
</style>
