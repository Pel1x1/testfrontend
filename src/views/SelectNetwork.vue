<template>
  <div class="main-container">
    <RouterLink class="back" to="/"></RouterLink>
    <div class="arrow"></div>
    <span class="select-network-1">Select network</span>
    <div class="rectangle">
      <div class="vector"></div>
      <span class="search-crypto">Search crypto</span>
    </div>
    <div class="flex-row">
      <span class="zero">0</span>
      <div class="picture-bnb"></div>
      <span class="bnb-smart-chain">BNB Smart Chain</span><span class="dollar">$ 0.00</span>
    </div>
    <div class="flex-row-dc">
      <span class="zero-2">0</span>
      <div class="picture-bnb-3"></div>
      <span class="bnb-smart-chain-4">BNB Smart Chain</span><span class="zero-dollars">$ 0.00</span>
    </div>
    <div class="flex-row-ee">
      <span class="number-0">0</span>
      <div class="picture-bnb-5"></div>
      <span class="bnb-smart-chain-6">BNB Smart Chain</span><span class="zero-dollars-7">$ 0.00</span>
    </div>
    <div class="flex-row-c">
      <span class="span-0-a">0</span>
      <div class="picture-bnb-b"></div>
      <span class="bnb-smart-chain-c">BNB Smart Chain</span><span class="dollar-d">$ 0.00</span>
    </div>
  </div>
</template>

<script setup>
import { inject } from 'vue';

const globalInt = inject('globalInt');
globalInt.value += 1;

</script>

<style src="../assets/select_network.css"></style>
