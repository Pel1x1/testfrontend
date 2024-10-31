<template>
  <div class="main-container">
        Тут НИХУЯ НЕТУ
  </div>
</template>

<script setup>
import { inject } from 'vue';

const globalInt = inject('globalInt');
globalInt.value += 1;

</script>

<style src="../assets/menustyles.css"></style>