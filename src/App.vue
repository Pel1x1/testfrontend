<script setup>
import { RouterView } from "vue-router";
import { provide, ref } from 'vue';

const globalInt = ref(0);
provide('globalInt', globalInt);

</script>

<template>
    <RouterView/>
</template>

<style>
:root {
  --default-font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Ubuntu, "Helvetica Neue", Helvetica, Arial, "PingFang SC",
    "Hiragino Sans GB", "Microsoft Yahei UI", "Microsoft Yahei",
    "Source Han Sans CN", sans-serif;
    --rpx: 100dvw / 430;
}

html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
}

.main-container {
  overflow: hidden;
  max-width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  background: #000000;
  max-height: 100%;
  height: calc(1000 * var(--rpx));
}


</style>
