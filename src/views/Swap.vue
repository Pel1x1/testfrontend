<template>
  <div class="main-container">
      <RouterLink class="back" to="/"></RouterLink>
    <div class="arrow"></div>
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
      <span class="receive">Receive</span>
      <div class="flex-row-da">
        <span class="select">Select</span><span class="zero-2">0</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="javascript"></script>

<style src="../assets/swap.css"></style>
