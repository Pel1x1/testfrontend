<template>
  <div class="main-container">
    
    <ul>
      <li v-for="currency in currencies" :key="currency.name" @click="selectCurrency(currency)">
        <div class="flex-row-e">
          <span class="cryptoId">{{ currency.name }}</span>
          <span class="dot">{{ currency.balance }}</span>
          <img :src="currency.icon" alt="coin" class="picture-coin" />
          <span class="dollar-a">${{ currency.price }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>


<script>
export default {
  data() {
    return {
      currencies: [
        {
            name: 'BTC',
            price: '68875.52',
            icon: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png', 
            balance: '1',
            blockchain: 'Bitcoin'
        },
        {
            icon: 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
            name: 'ETH',
            price: '4825.67',
            balance: '2',
            blockchain: 'Ethereum'
        },
        {
            icon: 'https://cryptologos.cc/logos/binancecoin-bnb-logo.png',
            name: 'BNB',
            price: '645.12',
            balance: '5',
            blockchain: 'Binance Smart Chain'
        },
        {
            icon: 'https://cryptologos.cc/logos/ripple-xrp-logo.png', 
            name: 'XRP',
            price: '1.25',
            balance: '100',
            blockchain: 'Ripple'
        },
        {
            icon: 'https://cryptologos.cc/logos/cardano-ada-logo.png', 
            name: 'ADA',
            price: '1.75',
            balance: '50',
            blockchain: 'Cardano'
        },
        {
            icon: 'https://cryptologos.cc/logos/dogecoin-doge-logo.png',
            name: 'DOGE',
            price: '0.30',
            balance: '2000',
            blockchain: 'Dogecoin'
        },
      ],
    };
  },
  methods: {
    selectCurrency(currency) {
      const { type } = this.$route.params;
      if (type === 'pay') {
        this.$store.dispatch('selectPayCurrency', currency);
      } else if (type === 'receive') {
        this.$store.dispatch('selectReceiveCurrency', currency);
      }
      this.$router.push({ path: '/swap' });
    },
  },
};
</script>

<style scoped>
.flex-row-e {
  position: relative;
  width: calc(375 * var(--rpx));
  height: calc(32 * var(--rpx));
  left: calc(-5 * var(--rpx));;
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
</style>