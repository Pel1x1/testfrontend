<template>
<div class="main-container">
  <div class="flex-row-e" @click="goToInfoCryptoPage">
    <span class="eth">{{ currency }}</span>
    <span class="dot">{{ dollarValue }}</span>
    <img :src="imageUrl" alt="coin" class="picture-eth">
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
</style>