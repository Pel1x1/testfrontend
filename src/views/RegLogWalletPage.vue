<template>
    <div class="main-container">
        <div class="rectangle">
            <div class="swp-btn" @click="goToCreate" >Create account</div>
            <div class="swp-btn2" @click="goToImport" >Import account</div>
        </div>
    </div>
</template>

<script>
export default {
  methods: {
    goToCreate() {
        this.$router.push({ name: "registerwallet"});
    },
    goToImport() {
        this.$router.push({ name: "importwallet" });
    },
  }
};
</script>


<style scoped>
.swp-btn {
  display: flex;
  align-items: center; /* Вертикальное центрирование */
  justify-content: center; /* Горизонтальное центрирование */
  flex-shrink: 0;
  position: absolute;
  height: calc(50 * var(--rpx));
  width: calc(175 * var(--rpx));
  top: calc(150 * var(--rpx));
  left: calc(25 * var(--rpx));
  color: #ffffff;
  font-family: Montserrat, var(--default-font-family);
  font-size: calc(23 * var(--rpx));
  font-weight: 500;
  line-height: calc(25 * var(--rpx));
  white-space: nowrap;
  z-index: 4;
  background: #212121;
  border-radius: calc(12 * var(--rpx));
}

.swp-btn:hover {
  background-color: #272727;
}

.swp-btn:active {
  background-color: #424242;
  transform: scale(0.98);
}

.swp-btn2 {
  display: flex;
  align-items: center; /* Вертикальное центрирование */
  justify-content: center; /* Горизонтальное центрирование */
  flex-shrink: 0;
  position: absolute;
  height: calc(50 * var(--rpx));
  width: calc(175 * var(--rpx));
  top: calc(150 * var(--rpx));
  right: calc(25 * var(--rpx));
  color: #ffffff;
  font-family: Montserrat, var(--default-font-family);
  font-size: calc(23 * var(--rpx));
  font-weight: 500;
  line-height: calc(25 * var(--rpx));
  white-space: nowrap;
  z-index: 4;
  background: #212121;
  border-radius: calc(12 * var(--rpx));
}

.swp-btn2:hover {
  background-color: #272727;
}

.swp-btn2:active {
  background-color: #424242;
  transform: scale(0.98);
}

</style>