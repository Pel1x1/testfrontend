<template>
  <div class="main-container">
    <div class="arrow"></div>
    <span class="scan-qr-code">Scan QR Code</span
    ><span class="find-qr-address">Find QR that contains address</span>
    <div class="flex-row-d">
      <div class="vector"></div>
      <div class="rectangle">
        <div class="vector-1"></div>
        <div class="vector-2"></div>
      </div>
      <div class="vector-3"></div>
    </div>
  </div>
</template>

<script setup>
import { inject } from 'vue';

const globalInt = inject('globalInt');
globalInt.value += 1;

</script>

<style src="../assets/scan_qr.css"></style>
