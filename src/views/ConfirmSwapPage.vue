<template>
  <div class="main-container">
    <RouterLink class="back" to="/swap">
    </RouterLink>
    <span class="swap">Confirm swap</span>

    <div class="rectangle" v-if="payCurrency, receiveCurrency">
      <div class="flex-row-bc">
        <span class="you-pay">You pay</span> <span class="you-get">You get</span>
      </div>
      <div class="flex-row-eb">
        <img :src="payCurrency.icon" alt="coin" class="picture-coin" /> <img :src="receiveCurrency.icon" alt="coin" class="picture-coin2" />
        <span class="cryptoId">{{ payCurrency.name }}</span>   <span class="cryptoId2">{{ receiveCurrency.name }}</span>
        <span class="dollar-a">${{ payCurrency.price }}</span>   <span class="dollar-a2">${{ receiveCurrency.price }}</span>
        <span class="amount">{{amount}}</span> <span class="amount2">{{ ((payCurrency.price * this.amount) / receiveCurrency.price )}}</span>
      </div>
    </div>

    <div class="rectangle-1" v-if="receiveCurrency">
      <div class="flex-row-bc">
        <div class="swp-btn" @click="swapcrypto" >Swap</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      payCurrency: null,
      receiveCurrency: null,
      amount: null,
    };
  },
  created() {
    // Получаем данные из query-параметров
    if (this.$route.query.payCurrency) {
      this.payCurrency = JSON.parse(this.$route.query.payCurrency);
    }
    if (this.$route.query.receiveCurrency) {
      this.receiveCurrency = JSON.parse(this.$route.query.receiveCurrency);
    }
    if (this.$route.query.amount) {
      this.amount = JSON.parse(this.$route.query.amount);
    }
  },
  methods: {
    swapcrypto() {
        alert(`Обмениваем ${this.payCurrency.name} на ${this.receiveCurrency.name}`);
    }
  }
};
</script>

<style scoped>

.cryptoId {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  position: absolute;
  height: calc(20 * var(--rpx));
  top: 0;
  left: calc(40 * var(--rpx));
  color: #ffffff;
  font-family: Montserrat, var(--default-font-family);
  font-size: calc(16 * var(--rpx));
  font-weight: 600;
  line-height: calc(19 * var(--rpx));
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
  right: calc(40 * var(--rpx));
  color: #ffffff;
  font-family: Montserrat, var(--default-font-family);
  font-size: calc(16 * var(--rpx));
  font-weight: 600;
  line-height: calc(19 * var(--rpx));
  text-align: right;
  white-space: nowrap;
  z-index: 13;
}

.amount{
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  position: absolute;
  height: calc(20 * var(--rpx));
  top: calc(35 * var(--rpx));;
  left: calc(40 * var(--rpx));
  color: #ffffff;
  font-family: Montserrat, var(--default-font-family);
  font-size: calc(16 * var(--rpx));
  font-weight: 600;
  line-height: calc(19 * var(--rpx));
  text-align: left;
  white-space: nowrap;
  z-index: 13;

}
.amount2{
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  position: absolute;
  height: calc(20 * var(--rpx));
  top: calc(35 * var(--rpx));;
  right: calc(40 * var(--rpx));
  color: #ffffff;
  font-family: Montserrat, var(--default-font-family);
  font-size: calc(16 * var(--rpx));
  font-weight: 600;
  line-height: calc(19 * var(--rpx));
  text-align: right;
  white-space: nowrap;
  z-index: 13;

}

.dollar-a {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  position: absolute;
  height: calc(12 * var(--rpx));
  top: calc(20 * var(--rpx));
  left: calc(40 * var(--rpx));
  color: #545454;
  font-family: Montserrat, var(--default-font-family);
  font-size: calc(10 * var(--rpx));
  font-weight: 600;
  line-height: calc(12 * var(--rpx));
  text-align: left;
  white-space: nowrap;
  z-index: 15;
}
.dollar-a2 {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  position: absolute;
  height: calc(12 * var(--rpx));
  top: calc(20 * var(--rpx));
  right: calc(40 * var(--rpx));
  color: #545454;
  font-family: Montserrat, var(--default-font-family);
  font-size: calc(10 * var(--rpx));
  font-weight: 600;
  line-height: calc(12 * var(--rpx));
  text-align: right;
  white-space: nowrap;
  z-index: 15;
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
.picture-coin2 {
  position: absolute;
  top: calc(1 * var(--rpx));
  right: 0;
  bottom: calc(1 * var(--rpx));
  background-size: cover;
  z-index: 12;
  overflow: hidden;
  border-radius: calc(17 * var(--rpx));
  width: calc(30 * var(--rpx));
  height: calc(30 * var(--rpx));
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
  top: calc(10 * var(--rpx));
}
.rectangle {
  position: relative;
  width: calc(380 * var(--rpx));
  height: calc(115 * var(--rpx));
  margin: calc(33 * var(--rpx)) 0 0 calc(25 * var(--rpx));
  background: #212121;
  z-index: 2;
  overflow: visible auto;
  border-radius: calc(12 * var(--rpx) * 1.5); 

}
.flex-row-bc {
  position: relative;
  width: calc(330 * var(--rpx));
  height: calc(33 * var(--rpx));
  margin: calc(10 * var(--rpx)) 0 0 calc(20 * var(--rpx));
  z-index: 7;
}

.you-pay {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  height: calc(25 * var(--rpx));
  top: 0;
  left: 0;
  color: #717171;
  font-family: Montserrat, var(--default-font-family);
  font-size: calc(15 * var(--rpx));
  font-weight: 500;
  line-height: calc(25 * var(--rpx));
  text-align: left;
  white-space: nowrap;
  z-index: 4;
}
.you-get {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  height: calc(25 * var(--rpx));
  top: 0;
  right: 0;
  color: #717171;
  font-family: Montserrat, var(--default-font-family);
  font-size: calc(15 * var(--rpx));
  font-weight: 500;
  line-height: calc(25 * var(--rpx));
  text-align: right;
  white-space: nowrap;
  z-index: 7;
}

.swp-btn {
  display: flex;
  align-items: center; /* Вертикальное центрирование */
  justify-content: center; /* Горизонтальное центрирование */
  flex-shrink: 0;
  position: absolute;
  height: calc(50 * var(--rpx));
  width: calc(150 * var(--rpx));
  top: calc(33 * var(--rpx));
  left: calc(115 * var(--rpx));
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

.flex-row-eb {
  position: relative;
  width: calc(330 * var(--rpx));
  height: calc(25 * var(--rpx));
  margin: calc(2 * var(--rpx)) 0 0 calc(20 * var(--rpx));
  z-index: 10;
}
</style>