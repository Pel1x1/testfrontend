<template>
  <div class="flex-row-e" @click="selectCrypto">
    <span class="eth">{{ currency }}</span>
    <span class="dot">{{ dollarValue }}</span>
    <img :src="imageUrl || '../images/question.png'" alt="coin" class="picture-eth">
    <span class="dollar-a">${{ price }}</span>
    <span :style="{ color: getColor(percentageChange) }" class="percentage"> {{ formatPercentage(percentageChange) }} </span> 
    <span class="dollar-b">${{ formatTotalValueOnCrypto(dollarValue, price) }}</span>
  </div>
</template>

<script>
export default {
  props: {
    currency: {
      type: String,
      required: true
    },
    price: {
      type: String,
      required: true
    },
    dollarValue: {
      type: String,
      required: true
    },
    percentageChange: {
      type: String,
      required: true
    },
    totalValue: {
      type: String,
      required: true
    },
    imageUrl: {
      type: String,
      required: true
    }
  },
  methods: {
    selectCrypto() {
      this.$router.push({ 
        path: '/swap', 
        query: { 
          selectedCrypto: this.currency, 
          imageUrl: this.imageUrl // Передаем URL иконки
        } 
      });
    },
    getColor(percentage) {
      const num = parseFloat(percentage);
      return num >= 0 ? '#26de5b' : '#b81b1b';
    },
    formatPercentage(percentage) {
      try {
        const num = parseFloat(percentage);
        return (num >= 0 ? '+' : '') + num.toFixed(2) + '%';
      } catch (error) {
        console.error("Ошибка форматирования процента:", error);
        return percentage; 
      }
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
/* CSS код */
</style>