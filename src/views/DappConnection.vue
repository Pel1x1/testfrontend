<template>
  <div class="main-container">
    <RouterLink class="back" to="/">
    </RouterLink>
    <div class="rectangle">
      <span class="tmp-text">In development</span>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.main-container{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  
}

.tmp-text{
  font-family: Montserrat, var(--default-font-family);
  font-size: calc(23 * var(--rpx));
  color: #ffffff;
  position: absolute;
}

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

.rectangle {
  flex-shrink: 0;
  position: relative;
  top: calc(100 * var(--rpx));
  width: calc(200 * var(--rpx));
  height: calc(80 * var(--rpx));
  background: url('https://i.giphy.com/U3qYN8S0j3bpK.webp') no-repeat center center; /* Устанавливаем GIF как фон */
  background-size: cover; /* Заполняем весь элемент, сохраняя пропорции */
  z-index: 79;
  border-radius: calc(20 * var(--rpx));
  display: flex;
  align-items: center; 
  justify-content: center;
}
</style>