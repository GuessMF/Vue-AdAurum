<script setup></script>

<template>
  <footer class="footer">
    <div class="wrapper row">
      <div class="footer__left row">
        <a><img src="../assets/images/logo__footer.webp" alt="" /></a>
        <router-link :to="targetRoute" class="footer__link row centered">
          <p>Политика конфиденциальности</p></router-link
        >
      </div>

      <ul class="footer__list row centered">
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
          <a class="footer__link row centered tg"
            ><img src="../assets/icons/tg_icon.svg" alt=""
          /></a>
          <a class="footer__link row centered wa"
            ><img src="../assets/icons/wa_icon.svg" alt=""
          /></a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<style scoped lang="scss">
@import '../assets/style/var';
.footer {
  margin-top: auto;
  background-color: $footer-bg;
  .wrapper {
    justify-content: space-between;
    padding-top: 28px;
    padding-bottom: 28px;
    flex-wrap: wrap;
  }
  &__left {
    align-items: center;
    gap: 65px;
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

@media (max-width: 1200px) {
  .footer {
    &__left {
      gap: 15px;
    }
    &__list {
      gap: 30px;
      justify-content: flex-end;
      flex-direction: row-reverse;
    }
  }
}
@media (max-width: 1080px) {
  .footer {
    .wrapper {
      flex-direction: column;
      gap: 30px;
    }
  }

  .footer {
    &__list {
      width: 100%;
    }
  }
}

@media (max-width: 750px) {
  .footer {
    background-color: $white;
    padding: 40px 20px;
  }
}

@media (max-width: 550px) {
  .footer {
    .wrapper {
      padding: 0;
      gap: 20px;
    }
    &__left {
      flex-direction: column;
      align-items: flex-start;
      gap: 20px;
    }
    &__list {
      flex-direction: column;
      align-items: flex-start;
      gap: 20px;
    }
  }
}
</style>
