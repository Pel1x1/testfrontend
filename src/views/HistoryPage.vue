<script setup>
import HistoryList from '../assets/components/HistoryList.vue';
</script>

<template>
  <div class="main-container">
    <RouterLink class="back" to="/">
    </RouterLink>
    <span class="swap">History</span>
    <HistoryList></HistoryList>
  </div>
</template>

<style scoped>

.back {
  position: absolute;
  width: calc(10 * var(--rpx));
  height: calc(20 * var(--rpx));
  top: calc(10 * var(--rpx));
  left: calc(30.5 * var(--rpx));
  background: url(../assets/images/80c6e76d-d2e0-4f0a-bb6e-2865912be671.png) no-repeat center;
  background-size: 100% 100%;
  z-index: 1;
}
.swap {
  display: block;
  position: relative;
  height: calc(33 * var(--rpx));
  margin: calc(29.999999987110527 * var(--rpx)) 0 0 calc(30 * var(--rpx));
  color: #ffffff;
  font-family: Montserrat, var(--default-font-family);
  font-size: calc(25 * var(--rpx));
  font-weight: 700;
  line-height: calc(32.63999938964844 * var(--rpx));
  text-align: left;
  white-space: nowrap;
  z-index: 1;
}

</style>