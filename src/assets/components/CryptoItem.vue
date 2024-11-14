<template>
<div class="main-container">
  <div class="flex-row-e" @click="goToInfoCryptoPage">
    <span class="cryptoId">{{ currency }}</span>
    <span class="dot">{{ dollarValue }}</span>
    <img :src="imageUrl" alt="coin" class="picture-coin">
    <span class="dollar-a">${{ price }}</span>
    <span :style="{ color: getColor(percentageChange) }" class="percentage">{{ formatPercentage(percentageChange) }}</span> 
    <span class="dollar-b">${{ formatTotalValueOnCrypto(dollarValue, price) }}</span>
  </div>
</div>
</template>

<script>
export default {
  props: {
    currency: String,
    price: String,
    dollarValue: String,
    percentageChange: String,
    totalValue: String,
    imageUrl: String
  },
  methods: {
    goToInfoCryptoPage() {
      this.$router.push({ path: '/info_crypto_page', query: { 
        currency: this.currency, 
        price: this.price, 
        dollarValue: this.dollarValue, 
        percentageChange: this.percentageChange,
        totalValue: this.totalValue 
      }});
    },
    getColor(percentage) {
      const num = parseFloat(percentage);
      return num >= 0 ? '#26de5b' : '#b81b1b';
    },
    formatPercentage(percentage) {
      const num = parseFloat(percentage);
      return (num >= 0 ? '+' : '') + num.toFixed(2) + '%';
    }, 
    formatTotalValueOnCrypto(dollarValue, price){
      const num1 = parseFloat(dollarValue);
      const num2 = parseFloat(price);
      return (num1 * num2).toFixed(2);
    } 
  }
};
</script>

<style scoped>
.main-container{
    background: #000000;
}

.cryptoId {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  position: absolute;
  height: calc(20 * var(--rpx));
  top: 0;
  left: calc(39 * var(--rpx));
  color: #ffffff;
  font-family: Montserrat, var(--default-font-family);
  font-size: calc(16 * var(--rpx));
  font-weight: 600;
  line-height: calc(19.503999710083008 * var(--rpx));
  text-align: left;
  white-space: nowrap;
  z-index: 13;
}

.flex-row-e {
  position: relative;
  width: calc(375 * var(--rpx));
  height: calc(32 * var(--rpx));
  margin: calc(34.5640869140625 * var(--rpx)) 0 0 calc(34 * var(--rpx));
  z-index: 17;
}

.dot {
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

.picture-coin {
  position: absolute;
  top: calc(1 * var(--rpx));
  right: calc(345 * var(--rpx));
  bottom: calc(1 * var(--rpx));
  left: 0;
  background-size: cover;
  z-index: 12;
  overflow: hidden;
  border-radius: calc(17 * var(--rpx));
  width: calc(30 * var(--rpx));
  height: calc(30 * var(--rpx));
}

.dollar-a {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  position: absolute;
  height: calc(12 * var(--rpx));
  top: calc(20 * var(--rpx));
  left: calc(39 * var(--rpx));
  color: #545454;
  font-family: Montserrat, var(--default-font-family);
  font-size: calc(10 * var(--rpx));
  font-weight: 600;
  line-height: calc(12 * var(--rpx));
  text-align: left;
  white-space: nowrap;
  z-index: 15;
}

.percentage {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  position: absolute;
  height: calc(12 * var(--rpx));
  top: calc(20 * var(--rpx));
  left: calc(92 * var(--rpx));
  color: #26de5b;
  font-family: Montserrat, var(--default-font-family);
  font-size: calc(10 * var(--rpx));
  font-weight: 600;
  line-height: calc(12 * var(--rpx));
  text-align: left;
  white-space: nowrap;
  z-index: 17;
}

.dollar-b {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  position: absolute;
  height: calc(12 * var(--rpx));
  top: calc(20 * var(--rpx));
  left: calc(301 * var(--rpx));
  color: #545454;
  font-family: Montserrat, var(--default-font-family);
  font-size: calc(10 * var(--rpx));
  font-weight: 600;
  line-height: calc(12 * var(--rpx));
  text-align: left;
  white-space: nowrap;
  z-index: 16;
}
</style>