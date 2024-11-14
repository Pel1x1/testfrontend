<template>
  <div class="chain-item" @click="goToSelectCrypto">
    <span class="name"> {{ chainId }}</span>
    <img :src="chainicon" alt="crypto icon" class="chainicon">
  </div>
</template>

<script>
export default {
  props: {
    chainId: String,
    amount: Number,
    chainicon: String,
  },
  methods: {
    goToSelectCrypto() {
      this.$router.push({ path: '/my_receive_adress', query: { 
        currency: this.chainId,
      }});
    },
  }
};
</script>

<style scoped>
.chain-item{
  position: relative;
  width: calc(375 * var(--rpx));
  height: calc(32 * var(--rpx));
  margin: calc(34.5640869140625 * var(--rpx)) 0 0 calc(34 * var(--rpx));
  z-index: 17;
}

.name {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  position: absolute;
  height: calc(20 * var(--rpx));
  top: calc(5 * var(--rpx));
  left: calc(50 * var(--rpx));
  color: #ffffff;
  font-family: Montserrat, var(--default-font-family);
  font-size: calc(18 * var(--rpx));
  font-weight: 600;
  line-height: calc(19.503999710083008 * var(--rpx));
  text-align: left;
  white-space: nowrap;
  z-index: 13;
}

.chainicon {
  position: absolute;
  top: calc(1 * var(--rpx));
  right: calc(345 * var(--rpx));
  bottom: calc(1 * var(--rpx));
  left: 0;
  background-size: cover;
  z-index: 12;
  overflow: hidden;
  border-radius: calc(17 * var(--rpx));
  width: calc(35 * var(--rpx));
  height: calc(35 * var(--rpx));
}

.amount {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  position: absolute;
  height: calc(20 * var(--rpx));
  top: 0;
  left: calc(301 * var(--rpx));
  color: #ffffff;
  font-family: Montserrat, var(--default-font-family);
  font-size: calc(16 * var(--rpx));
  font-weight: 600;
  line-height: calc(19.503999710083008 * var(--rpx));
  text-align: left;
  white-space: nowrap;
  z-index: 14;
}

</style>