<script setup></script>

<template>
  <header class="">
    <div class="wrapper row">
      <a><img src="../assets/images/logo__header.webp" alt="" /></a>
      <nav class="menu row">
        <ul class="menu__list row centered">
          <li class="menu__item row centered">
            <a class="menu__link row centered pink-bg"
              ><img src="../assets/icons/convert-card.svg" alt="" />
            </a>
            <h6>5%</h6>
          </li>
          <li class="menu__item row centered">
            <a class="menu__link row centered pink-bg"
              ><img src="../assets/icons/user.svg" alt="" />
            </a>
            <h6>Username@adaurum.ru</h6>
          </li>
        </ul>
        <ul class="menu__list row centered">
          <li class="menu__item row centered">
            <a class="menu__link row centered white-bg"
              ><img src="../assets/icons/settings.svg" alt=""
            /></a>
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
@import '../assets/style/var';
header {
  .wrapper {
    justify-content: space-between;
    padding-top: 33px;
    padding-bottom: 33px;
    flex-wrap: wrap;
    gap: 10px;
  }
  .menu {
    gap: 26px;
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

@media (max-width: 991px) {
  header {
    .menu {
      &__list {
        gap: 20px;
      }
    }
  }
}

@media (max-width: 991px) {
  header {
    .menu {
      &__list {
        gap: 20px;
      }
    }
  }
}

@media (max-width: 750px) {
  header {
    .wrapper {
      gap: 20px;
      padding: 28px 20px 20px 20px;
    }

    .menu__list:last-child {
      .menu__link {
        background-color: $bg;
      }
    }
  }
}
@media (max-width: 550px) {
  header {
    .wrapper {
      gap: 20px;
      padding: 28px 20px 20px 20px;
    }
    .menu {
      width: 100%;
      &__link {
      }
      .menu__list:first-child {
        flex-direction: column-reverse;
        align-items: flex-start;
        gap: 4px;
        .menu__link {
          display: none;
        }
      }
      .menu__list:last-child {
        margin-left: auto;
      }
    }
  }
}
</style>
