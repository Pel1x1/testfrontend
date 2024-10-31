<template>
  <div class="main-container">
    <div class="arrow"></div>
    <span class="select-crypt-receive">Select crypto to receive</span>
    <div class="rectangle">
      <div class="vector"></div>
      <span class="search-crypto">Search crypto</span>
    </div>
    <div class="flex-row">
      <span class="eth">ETH</span><span class="amount">0.393039</span>
      <div class="picture-eth"></div>
      <span class="price">$2,784.59</span><span class="plus-zero-six-three-percent">+0.63%</span><span
        class="text-7">$273,093</span>
    </div>
    <div class="flex-row-1">
      <span class="usdt">USDT</span><span class="fifty-point-six-seven-nine-seven">50.6797</span>
      <div class="picture-png"></div>
      <span class="text-a">$1.0037</span><span class="plus-zero-six-three-percent-2">+0.63%</span><span
        class="text-c">$61,768</span>
    </div>
    <div class="flex-row-3">
      <span class="seven-point-two-three-eight">7.238</span>
      <div class="regroup">
        <div class="usdc-picture"></div>
        <span class="usdc">USDC</span>
      </div>
    </div>
    <div class="flex-row-a">
      <span class="dollar-amount">$69.45</span>
      <div class="regroup-4">
        <span class="dollar-amount-5">$0.9995</span><span class="percentage-change">-0.02%</span>
      </div>
    </div>
    <div class="flex-row-a-6">
      <span class="eth-7">ETH</span><span class="eth-amount">0.393039</span>
      <div class="picture-eth-8"></div>
      <span class="dollar-amount-9">$2,784.59</span><span class="percentage-change-a">+0.63%</span><span
        class="total-amount">$273,093</span>
    </div>
    <div class="flex-row-b">
      <span class="number-7238">7.238</span>
      <div class="regroup-c">
        <div class="picture-usdc"></div>
        <span class="usdc-d">USDC</span>
      </div>
    </div>
    <div class="flex-row-e">
      <span class="dollar-amount-f">$69.45</span>
      <div class="regroup-10">
        <span class="dollar-text">$0.9995</span><span class="negative-percent">-0.02%</span>
      </div>
    </div>
    <div class="flex-row-11">
      <span class="eth-text">ETH</span><span class="dot-text">0.393039</span>
      <div class="eth-picture"></div>
      <span class="dollar-amount-12">$2,784.59</span><span class="positive-percent">+0.63%</span><span
        class="dollar-amount-13">$273,093</span>
    </div>
  </div>
</template>

<script setup>
import { inject } from 'vue';

const globalInt = inject('globalInt');
globalInt.value += 1;

</script>

<style src="../assets/select_crypto_to_receive.css"></style>
