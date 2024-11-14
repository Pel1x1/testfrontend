<template>
  <div class="main_container">
  <div class="main_div">
    <p class="name_crypto">{{ currency }}</p>
    <p>Цена: {{ price }}</p>
    <p>Стоимость в долларах: {{ dollarValue }}</p>
    <p>Изменение в процентах: {{ percentageChange }}</p>
    <p>Общая стоимость: {{ totalValue }}</p>    
  </div>
  </div>
</template>

<script>
export default {
  computed: {
    currency() {
      return this.$route.query.currency;
    },
    price() {
      return this.$route.query.price;
    },
    dollarValue() {
      return this.$route.query.dollarValue;
    },
    percentageChange() {
      return this.$route.query.percentageChange;
    },
    totalValue() {
      return this.$route.query.totalValue;
    }
  }
};
</script>

<style scoped>
.name_crypto{
  font-size: calc(35 * var(--rpx));
  font-family: Montserrat, var(--default-font-family);
}
</style>