<script setup>
import { RouterLink } from "vue-router";
import { ref, onMounted, onBeforeUnmount } from "vue"; // Импортируем необходимые функции
import CryptoList from '../assets/components/CryptoList.vue';
import { inject } from 'vue';

const isMenuVisible = ref(false);
const selected = ref('Wallet');
const transitionName = ref('slide-left');
const lastUpdated = ref(null); // Добавляем переменную для времени последнего обновления

function toggleMenu() {
    isMenuVisible.value = !isMenuVisible.value;
}

function handleClick(option) {
    if (selected.value !== option) {
        transitionName.value = option === 'Contest' ? 'slide-left' : 'slide-right';
        selected.value = option;
    }
}

function handleMenuClick(option) {
    isMenuVisible.value = false; // Закрываем меню после выбора
}

function handleClickOutside(event) {
    const menuElement = document.querySelector('.popup-menu'); // Получаем элемент меню
    const buttonElement = event.target.closest('.icon');

    if (isMenuVisible.value && menuElement && !menuElement.contains(event.target) && !buttonElement) {
        isMenuVisible.value = false;
    }
}



onMounted(() => {
    document.addEventListener('click', handleClickOutside);
    const globalInt = inject('globalInt');
    if (globalInt.value === 1){
      globalInt.value -= 1;
      window.location.reload();}
});

onBeforeUnmount(() => {
    document.removeEventListener('click', handleClickOutside);
});
</script>

<template>
  <div class="main-container">
    <div class="flex-row-ba">
      <div class="switcher">
        <div class="option" :class="{ selected: selected === 'Contest' }" @click="handleClick('Contest')">Contest</div>
        <div class="option" :class="{ selected: selected === 'Wallet' }" @click="handleClick('Wallet')"> Wallet </div>
      </div>
      <div class="regroup">
        <RouterLink to="notifications_page"><button class="btn-notifications"></button></RouterLink>
        <button class="btn-search"></button>
      </div>
      <button class="icon" @click="toggleMenu"></button>
    </div>
    <div v-if="isMenuVisible" class="popup-menu">
        <ul>
            <RouterLink to="settings_page">
            <li @click="handleMenuClick('настройки')">
                <img class="icon_menu" src="../assets/images/01abcae0-0b19-4b1e-91a2-b2f570a797ca copy copy.png"  /> Settings
            </li>
        </RouterLink>
        <RouterLink to="dapp_connection">
            <li @click="handleMenuClick('подключение Dapp')">
                <img class="icon_menu" src="../assets/images/01abcae0-0b19-4b1e-91a2-b2f570a797ca copy copy.png" /> Connect Dapp
            </li>
        </RouterLink>
        <RouterLink to="history_page">
            <li @click="handleMenuClick('история')">
                <img class="icon_menu" src="../assets/images/01abcae0-0b19-4b1e-91a2-b2f570a797ca copy copy.png" /> History
            </li>
        </RouterLink>
        <RouterLink to="manual_page">
            <li @click="handleMenuClick('инструкция')">
                <img class="icon_menu" src="../assets/images/01abcae0-0b19-4b1e-91a2-b2f570a797ca copy copy.png"  /> Manual
            </li>
        </RouterLink>
        </ul>
    </div>
    
    <transition :name="transitionName">
      <div v-if="selected === 'Contest'" key="contest" class="page contest">
        <h1 class="contestpagetext">Страница Contest</h1>
        <p>Здесь будет контент для конкурса.</p>
      </div>

      <div v-else-if="selected === 'Wallet'" key="wallet" class="page wallet">
        <div class="rectangle-2">
          <div class="flex-column">
            <span class="comma">783,930</span>
            <div class="wallet-c-account">
              <span class="wallet-c">Wallet C </span><span class="empty"> </span><span class="account">Account </span>
            </div>
            <button class="btn-copy"></button>
          </div>
          <div class="image"></div>
          <span class="dollar">$</span>
        </div>

        <div class="flex-row">
          <RouterLink class="rectangle-3" to="select_network">
            <div class="ellipse"></div>
            <span class="receive">Receive</span>
            <div class="icon-4"></div>
          </RouterLink>

          <RouterLink class="rectangle-5" to="select_crypto_to_send">
            <div class="ellipse-6"></div>
            <span class="send">Send</span>
            <div class="icon-7"></div>
          </RouterLink>

          <RouterLink class="rectangle-8" to="swap">
            <div class="ellipse-9"></div>
            <span class="swap">Swap</span>
            <div class="vector"></div>
          </RouterLink>
        </div>
        <router-view :key="$route.fullPath"></router-view>

        <CryptoList />
      </div>
    </transition>
  </div>
</template>

<style src="../assets/main.css"></style>
