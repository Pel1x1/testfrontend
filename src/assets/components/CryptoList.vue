<template>
  <div>
    <CryptoItem
      v-for="(crypto, index) in cryptos"
      :key="crypto.id"
      :currency="getShortName(crypto.id)"
      :price="`${crypto.current_price.toFixed(2)}`"
      :dollarValue="`${1.1}`"
      :percentageChange="(crypto.price_change_percentage_24h || 0).toFixed(2) + '%'"
      :totalValue="`$${1.1}`"
      :imageUrl="crypto.image || '../images/question.png'"
    />
  </div>
</template>

<script>
import axios from 'axios';
import CryptoItem from './CryptoItem.vue';

const cryptoSymbols = {
  bitcoin: 'BTC',
  ethereum: 'ETH',
  binancecoin: 'BNB',
  ripple: 'XRP',
  cardano: 'ADA',
  dogecoin: 'DOGE',
  polkadot: 'DOT',
  litecoin: 'LTC',
  chainlink: 'LINK',
  stellar: 'XLM'
};

export default {
  components: {
    CryptoItem
  },
  data() {
    return {
      cryptos: []
    };
  },
  async mounted() {
    await this.fetchCryptoData();
    this.startPriceUpdates();
  },
  methods: {
    async fetchCryptoData() {
  try {
        const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
        params: {
            vs_currency: 'usd',
            order: 'market_cap_desc',
            per_page: 10,
            page: 1,
            sparkline: false
        }
        });
        console.log(response.data); // Проверяем данные
        this.cryptos = response.data;
        } catch (error) {
            console.error("Ошибка при загрузке данных о криптовалютах:", error);
        }
    },
    getShortName(fullName) {
      return cryptoSymbols[fullName] || fullName.toUpperCase(); 
    },
    startPriceUpdates() {
      setInterval(() => {
        this.fetchCryptoData();
      }, 60000);
    }
  }
};
</script>

<style scoped>
/* CSS код  */
</style>