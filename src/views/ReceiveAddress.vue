<template>
  <div class="main-container">
    <span class="receiving-address">Receiving address</span><span class="enter-wallet-name">Enter wallet name or Ens
      domain name </span><button class="rectangle">
      <span class="paste">Paste</span>
      <div class="vector"></div>
    </button>
    <div class="line"></div>
    <div class="group"></div>
    <div class="arrow"></div>
  </div>
</template>

<script setup>
import { inject } from 'vue';

const globalInt = inject('globalInt');
globalInt.value += 1;

</script>

<style src="../assets/receive_address.css"></style>
