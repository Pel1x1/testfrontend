<template>
  <div class="transaction-item">
    <span class="cryptoId">{{ cryptoId }} </span><span class="cryptoId2">{{ tag }} </span>
    <span class="dollar-a">Your: {{ fromAddress }}</span>
    <img :src="icon" alt="crypto icon" class="picture-coin">
    <span class="dollar-b">Else: {{ toAddress }}</span>
    <span :class="{ loss: isLoss, gain: !isLoss }">{{ formatAmount(amount) }}</span>
    <span class="dot">{{ formatDate(timestamp) }}</span>
  </div>
</template>

<script>
export default {
  props: {
    icon: String,
    cryptoId: String,
    fromAddress: String,
    toAddress: String,
    amount: Number,
    timestamp: String,
    isLoss: Boolean,
    tag: String,
  },

  methods: {
    formatAmount(amount) {
        return (this.isLoss ? '-' : '+') + Math.abs(amount).toFixed(2); 
    },
    formatDate(dateString) {
    // Преобразуем строку в объект Date
    const date = new Date(dateString);

    // Получаем компоненты даты
    const day = String(date.getUTCDate()).padStart(2, '0'); // День
    const month = String(date.getUTCMonth() + 1).padStart(2, '0'); // Месяц (0-11, поэтому +1)
    const year = date.getUTCFullYear(); // Год
    const hours = String(date.getUTCHours()).padStart(2, '0'); // Часы
    const minutes = String(date.getUTCMinutes()).padStart(2, '0'); // Минуты

    // Формируем строку в нужном формате
    return `${day}.${month}.${year} ${hours}:${minutes}`;
    
    }
  }
};
</script>

<style scoped>
.transaction-item{
  position: relative;
  width: calc(375 * var(--rpx));
  height: calc(32 * var(--rpx));
  margin: calc(34.5640869140625 * var(--rpx)) 0 0 calc(34 * var(--rpx));
  z-index: 17;
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
.cryptoId2 {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  position: absolute;
  height: calc(20 * var(--rpx));
  top: 0;
  left: calc(150 * var(--rpx));
  color: #B91C1C;
  font-family: Montserrat, var(--default-font-family);
  font-size: calc(12 * var(--rpx));
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
  left: calc(254 * var(--rpx));
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

.loss {
display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  position: absolute;
  height: calc(12 * var(--rpx));
  top: calc(20 * var(--rpx));
  left: calc(150 * var(--rpx));
  font-family: Montserrat, var(--default-font-family);
  font-size: calc(10 * var(--rpx));
  font-weight: 600;
  line-height: calc(12 * var(--rpx));
  text-align: left;
  white-space: nowrap;
  z-index: 17;
  color: #b81b1b; /* Красный цвет для потерь */
}

.gain {
display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  position: absolute;
  height: calc(12 * var(--rpx));
  top: calc(20 * var(--rpx));
  left: calc(150 * var(--rpx));
  font-family: Montserrat, var(--default-font-family);
  font-size: calc(10 * var(--rpx));
  font-weight: 600;
  line-height: calc(12 * var(--rpx));
  text-align: left;
  white-space: nowrap;
  z-index: 17;
  color: #26de5b; /* Зеленый цвет для прибыли */
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