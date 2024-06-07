<script setup>
import {computed} from 'vue';
import {useRoute, useRouter} from 'vue-router';
import {ref} from 'vue';
const route = useRoute();
const router = useRouter();

const fileUpload = () => {
  document.getElementById('file-upload').click();
};

const imagesUpload = () => {
  document.getElementById('img-upload').click();
};
const isFocused = ref(false);

const handleFocus = () => {
  isFocused.value = true;
};

const handleBlur = () => {
  isFocused.value = false;
};
const isModalVisible = ref(false);
const toggleModal = () => {
  isModalVisible.value = !isModalVisible.value;
};

const targetRoute = computed(() => {
  return '/main';
});

const isMainRoute = computed(() => route.path === '/');

const messages = ref([
  {
    id: 1,
    text: 'Lörem ipsum suparad pepött då satsig och soskap metrosocial. Sapongar trenåvis i hypol innan visiskap, heterovybelt. Besav ditugen stenosade om exopagt.',
    time: '20:43',
    name: 'Jim',
    sender: 'admin',
  },
  {
    id: 2,
    text: 'Lörem ipsum suparad pepött då satsig och soskap metrosocial. Sapongar trenåvis i hypol innan visiskap, heterovybelt. Besav ditugen stenosade om exopagt. ',
    time: '20:55',
    name: '',
    sender: 'user',
  },
]);

const newMessageText = ref('');

const sendMessage = async () => {
  if (newMessageText.value.trim()) {
    messages.value.push({
      id: messages.value.length + 1,
      text: newMessageText.value,
      time: new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      }),
      sender: 'user',
    });
    newMessageText.value = '';
  }
};
</script>

<template>
  <main class="main">
    <div class="main__header row">
      <h2 class="main__title">Личный помощник</h2>
      <ul class="main__list row centered">
        <li><p class="text">Jim Davidson</p></li>
        <li><a>Jim Davidson@adaurum.ru</a></li>
        <li>
          <button class="main__more-btn row centered" @click="toggleModal">
            <img src="../assets/icons/bullet-btn.svg" alt="" />
          </button>
        </li>
        <div class="main__modal col" v-if="isModalVisible">
          <a href=""><p class="text">Обратная связь о работе сервиса</p></a>
          <a href=""><p class="text">Сменить помощника</p></a>
        </div>
      </ul>
    </div>

    <div class="main__chat col">
      <div v-if="isMainRoute" class="main__preview col centered">
        <img src="../assets/images/admin.webp" alt="" />
        <p class="text">
          Это чат с администратором. Ты можешь с ним пообщаться по любому
          вопросу о нашем сервисе и узнать о ходе работы
        </p>
      </div>
      <template v-else>
        <div class="main__chatroom col centered">
          <div class="main__view-box">
            <span class="main__date">Сегодня, 20:43</span>
            <article
              v-for="message in messages"
              :key="message.id"
              :class="[
                'main__message',
                'row',
                {user: message.sender === 'user'},
              ]"
            >
              <img
                v-if="message.sender === 'admin'"
                src="../assets/images/user_1.webp"
                alt=""
              />
              <div class="main__text-box">
                <p class="text">{{ message.text }}</p>
                <div class="main__message-time row">
                  <p v-if="message.sender === 'admin'" class="text">Jim</p>
                  <span>{{ message.time }}</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </template>

      <div :class="['main__textarea', {focused: isFocused}]">
        <textarea
          v-model="newMessageText"
          name=""
          id=""
          placeholder="Введите сообщение для администратора"
          @focus="handleFocus"
          @blur="handleBlur"
        ></textarea>
        <ul class="main__btns row">
          <li class="main__download-btn">
            <input type="file" id="file-upload" />
            <button @click="fileUpload">
              <img src="../assets/icons/folder-add.svg" alt="" />
            </button>
          </li>
          <li class="main__download-btn">
            <input type="file" id="img-upload" accept="image/*" />
            <button @click="imagesUpload">
              <img src="../assets/icons/gallery.svg" alt="" />
            </button>
          </li>
          <li class="main__send-btn col centered">
            <button class="col centered pink-bg" @click="sendMessage">
              <img src="../assets/icons/send.svg" alt="" />
            </button>
            <p>Enter</p>
          </li>
        </ul>

        <ul class="main__orders-btns row">
          <li>
            <router-link :to="targetRoute"
              ><button class="main__order-btn pink-bg">
                Заказать медиаплан
              </button></router-link
            >
          </li>
          <li>
            <router-link :to="targetRoute">
              <button class="main__order-btn blue-bg">
                Заказать отчет
              </button></router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
@import '../assets/style/var';

.main {
  max-width: 875px;
  width: 100%;
  min-height: 700px;
  height: 100%;
  border-radius: 20px;
  padding: 28px;
  background-color: $white;
  &__header {
    justify-content: space-between;
    position: relative;
    flex-wrap: wrap;
  }
  &__list {
    gap: 10px;
    a {
      color: $gray;
    }
  }
  &__modal {
    position: absolute;
    bottom: -90px;
    right: 0;
    padding: 16px 30px;
    border-radius: 8px;
    background-color: $white;
    text-align: right;
    gap: 12px;
    p {
      transition: 0.3s ease color;

      &:hover {
        color: $pink;
      }
    }
  }
  &__more-btn {
    width: 40px;
    height: 40px;
    border-radius: 100%;
    background-color: $bg;
    margin-left: 16px;
  }
  &__preview {
    max-width: 470px;
    margin: 50px auto 0 auto;
    p {
      text-align: center;
    }
  }
  &__date {
    margin-bottom: 12px;
  }
  &__chatroom {
    margin-top: 50px;
    gap: 42px;
    max-height: 336px;
    overflow-y: auto;
    &::-webkit-scrollbar {
      width: 8px;
    }
    &::-webkit-scrollbar-track {
      background: #f0f0f0;
      border-radius: 10px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: $gray;
      border-radius: 10px;
      border: 2px solid #f0f0f0;
    }

    article:first-of-type {
      margin-top: -30px;
    }
  }
  &__view-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
    gap: 42px;
    width: 100%;
    max-height: 300px;
  }
  &__message {
    width: 100%;
    padding: 0 20px;
    gap: 13px;

    img {
      align-self: flex-start;
      width: 49px;
      height: 49px;
    }

    &.user {
      .main__text-box {
        margin-left: auto;
      }
      .main__message-time {
        left: unset;
        right: 0;
      }
    }
  }
  &__message-time {
    position: absolute;
    bottom: -30px;
    left: 0;
    align-items: center;
    gap: 8px;
  }
  &__text-box {
    padding: 16px 22px;
    background-color: $white;
    border-radius: 12px;
    max-width: 540px;
    position: relative;
  }
  &__chat {
    margin-top: 19px;
    background-color: #ebebeb;
    min-width: 100px;
    width: 100%;
    min-height: 586px;
    height: 100%;
    border-radius: 20px;
  }
  &__textarea {
    margin-top: auto;
    width: 100%;
    height: 100%;
    min-height: 144px;
    background-color: $white;
    border-radius: 20px;
    padding: 25px 20px 20px 20px;
    border: 2px #ebebeb solid;
    position: relative;
    &.focused {
      border: 2px $pink solid;
    }
    textarea {
      width: 90%;
      min-height: 80px;
      color: $black;
      font-size: 16px;
      font-weight: 600;
      resize: none;
      &::-webkit-scrollbar {
        width: 8px;
      }
      &::-webkit-scrollbar-track {
        background: #f0f0f0;
        border-radius: 10px;
      }
      &::-webkit-scrollbar-thumb {
        background-color: $gray;
        border-radius: 10px;
        border: 2px solid #f0f0f0;
      }
    }
  }
  &__orders-btns {
    position: absolute;
    top: -65px;
    left: 20px;
    gap: 12px;
  }
  &__order-btn {
    padding: 12px 22px;
    border-radius: 21px;
    font-weight: 600;
    color: $white;
    font-size: 16px;
  }
  &__btns {
    gap: 20px;
  }
  &__download-btn {
    width: 24px;
    height: 24px;
    img {
      width: 24px;
      height: 24px;
    }
    button {
      background: none;
    }
    input {
      display: none;
    }
  }
  &__send-btn {
    position: absolute;
    bottom: 12px;
    right: 20px;
    button {
      width: 50px;
      height: 50px;
      border-radius: 100%;
    }
  }
}

@media (max-width: 991px) {
  .main {
    max-width: unset;
    margin-bottom: 60px;
  }
}

@media (max-width: 750px) {
  .main {
    padding: 0;
    border-radius: 0;
    &__chat {
      border-radius: 0;
    }

    &__header {
      padding: 0 20px;
    }
    &__list {
      width: 100%;
      justify-content: flex-start;
      position: relative;
      height: 40px;
      li:last-child {
        position: absolute;
        margin-left: auto;
        top: -30px;
        right: 0;
      }
    }
  }
}

@media (max-width: 550px) {
  .main {
    &__send-btn {
      right: 16px;
      bottom: 10px;
      p {
        display: none;
      }
    }
    &__chatroom {
      max-height: 380px;
    }
    &__view-box {
      max-height: 355px;
    }
    &__chat {
      padding: 0 20px;
      padding-bottom: 37px;
      min-height: 750px;
    }
    &__orders-btns {
      left: unset;
      right: 36px;
      top: -115px;
      flex-direction: column-reverse;
      align-items: flex-end;
    }
  }
}
</style>
