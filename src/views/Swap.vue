<template>
  <div class="main-container">
    <RouterLink class="back" to="/">
      <div class="arrow"></div>
    </RouterLink>
    <span class="swap">Swap</span>
    <div class="rectangle">
      <div class="flex-row-bc">
        <span class="balance">Balance: 0</span><span class="send">Send </span>
      </div>
      <div class="flex-row-eb">
        <div class="picture-eth-png"></div>
        <span class="eth">ETH</span><span class="zero">0</span>
      </div>
    </div>
    <div class="rectangle-1">
      <div class="flex-row-bc">
        <span class="send">Receive </span>
      </div>
      <div class="flex-row-eb" @click="goToCryptoList">
        <!-- Отображаем иконку и название выбранной криптовалюты -->
        <img class="picture-png" v-if="selectedCryptoImage" :src="selectedCryptoImage" alt="">
        <span class="eth1">{{ selectedCrypto ? selectedCrypto : 'Select' }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { inject, ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const globalInt = inject('globalInt');
globalInt.value += 1;

const selectedCrypto = ref(null);
const selectedCryptoImage = ref(null); // Новая переменная для хранения URL иконки
const router = useRouter();

// Получаем данные из параметров запроса при монтировании компонента
onMounted(() => {
  const query = new URLSearchParams(window.location.search);
  if (query.has('selectedCrypto')) {
    selectedCrypto.value = query.get('selectedCrypto');
  }
  
  if (query.has('imageUrl')) { // Проверяем наличие URL иконки
    selectedCryptoImage.value = query.get('imageUrl');
  }
});

function goToCryptoList() {
  router.push({ path: '/cryptos' });
}
</script>

<style src="../assets/swap.css"></style>