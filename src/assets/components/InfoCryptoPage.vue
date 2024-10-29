<template>
  <div class="main_div">
    <h1>Информация о криптовалюте</h1>
    <p>Валюта: {{ currency }}</p>
    <p>Цена: {{ price }}</p>
    <p>Стоимость в долларах: {{ dollarValue }}</p>
    <p>Изменение в процентах: {{ percentageChange }}</p>
    <p>Общая стоимость: {{ totalValue }}</p>    
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
:root {
  --default-font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Ubuntu, "Helvetica Neue", Helvetica, Arial, "PingFang SC",
    "Hiragino Sans GB", "Microsoft Yahei UI", "Microsoft Yahei",
    "Source Han Sans CN", sans-serif;
  --rpx: 100vw / 430;
}
.main_div {
  position: relative;
  width: calc(430 * var(--rpx));
  margin: 0 auto;
  left: 0;
  background: #000000;
  overflow: hidden;
  color: #ffffff;
}

</style>