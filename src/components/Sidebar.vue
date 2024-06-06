<script setup>
import { computed } from "vue";
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const accordions = ref([{ isOpen: false }, { isOpen: false }]);

const toggleAccordion = (index) => {
  accordions.value[index].isOpen = !accordions.value[index].isOpen;
};

const isMainRoute = computed(() => route.path === "/main");
</script>

<template>
  <aside class="sidebar col">
    <h2 class="sidebar__title">Файлы</h2>
    <img v-if="isMainRoute" src="./../assets/images/files.webp" alt="" />
    <h4 v-if="isMainRoute" class="sidebar__subtitle">
      Закажи у личного помощника медиаплан. Он появится в этом разделе
    </h4>

    <template v-else>
      <button
        :class="['accordeon', 'row', { opened: accordions[0].isOpen }]"
        @click="toggleAccordion(0)"
      >
        <h6>Медиапланы</h6>
        <img
          :class="['accordeon__arrow', { opened: accordions[0].isOpen }]"
          src="../assets/icons/arrow.svg"
          alt=""
        />
        <ul
          :class="['accordeon__list', 'col', { opened: accordions[0].isOpen }]"
        >
          <li class="accordeon__item row">
            <img src="../assets/icons/xml.svg" alt="" />
            <p>Companyname 11/23</p>
            <button class="medium-gray-bg">
              <img src="../assets/icons/refresh.svg" alt="" />
            </button>
          </li>
          <li class="accordeon__info row">
            <img src="../assets/icons/subtract.svg" alt="" />
            <p class="info-text">Медиаплан в процессе составления</p>
          </li>
          <li class="accordeon__item row">
            <img src="../assets/icons/xml.svg" alt="" />
            <p>Companyname 11/23</p>
            <button class="pink-light-bg">
              <img src="../assets/icons/download.svg" alt="" />
            </button>
          </li>
          <li class="accordeon__item row">
            <img src="../assets/icons/xml.svg" alt="" />
            <p>Companyname 11/23</p>
            <button class="pink-light-bg">
              <img src="../assets/icons/download.svg" alt="" />
            </button>
          </li>
          <li class="accordeon__item row">
            <img src="../assets/icons/xml.svg" alt="" />
            <p>Companyname 11/23</p>
            <button class="pink-light-bg">
              <img src="../assets/icons/download.svg" alt="" />
            </button>
          </li>
          <li class="accordeon__more row">
            <button class="accordeon__show-more">Показать еще</button>
          </li>
        </ul>
      </button>

      <button
        :class="['accordeon', 'row', { opened: accordions[1].isOpen }]"
        @click="toggleAccordion(1)"
      >
        <h6>Отчеты</h6>
        <img
          :class="['accordeon__arrow', { opened: accordions[1].isOpen }]"
          src="../assets/icons/arrow.svg"
          alt=""
        />
        <ul
          :class="['accordeon__list', 'col', { opened: accordions[1].isOpen }]"
        >
          <li class="accordeon__item row">
            <img src="../assets/icons/xml.svg" alt="" />
            <p>Companyname 11/23</p>
            <button class="medium-gray-bg">
              <img src="../assets/icons/refresh.svg" alt="" />
            </button>
          </li>
          <li class="accordeon__info row">
            <img src="../assets/icons/subtract.svg" alt="" />
            <p class="info-text">Отчет формируется</p>
          </li>
          <li class="accordeon__item row">
            <img src="../assets/icons/xml.svg" alt="" />
            <p>Companyname 11/23</p>
            <button class="pink-light-bg">
              <img src="../assets/icons/download.svg" alt="" />
            </button>
          </li>
          <li class="accordeon__item row">
            <img src="../assets/icons/xml.svg" alt="" />
            <p>Companyname 11/23</p>
            <button class="pink-light-bg">
              <img src="../assets/icons/download.svg" alt="" />
            </button>
          </li>
        </ul>
      </button>
    </template>
  </aside>
</template>

<style scoped lang="scss">
// @import "../assets/style/var";
@import "../assets/style/var";
.accordeon {
  justify-content: space-between;
  flex-wrap: wrap;
  background: none;
  margin-bottom: 30px;

  &__list {
    width: 100%;
    gap: 8px;
    max-height: 0;
    overflow: hidden;
    transition: 0.3s max-height ease;
    &.opened {
      max-height: 500px;
    }
  }
  &__item {
    align-items: center;
    background-color: $bg;
    border-radius: 4px;
    &:first-child {
      margin-top: 20px;
    }
    padding-left: 8px;
    img {
      width: 24px;
      height: 24px;
    }
    p {
      padding: 8px;
    }
    button {
      margin-left: auto;
      height: 42px;
      width: 42px;
      border-radius: 4px;
    }
  }
  &__arrow {
    transition: 0.3s ease transform;
    transform: rotate(180deg);
    &.opened {
      transform: rotate(0deg);
    }
  }
  &__info {
    align-items: center;
    gap: 5px;
    margin-bottom: 6px;
  }
  &__more {
  }
  &__show-more {
    margin-left: auto;
    background: none;
    color: $pink;
    font-size: 15px;
    padding: 12px 0;
  }
}
</style>
