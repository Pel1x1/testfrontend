<template>
  <div>
    <BlockItem
      v-for="(chain, index) in chains"
      :key="chain.id"
      :chainId="chain.chainId"
      :amount="chain.amount"
      :chainicon="chain.icon || '../images/question.png'"
    />
  </div>
</template>

<script>
import BlockItem from "./BlockChainRItem.vue"

export default {
  components: {
    BlockItem
  },
  data() {
    return {
      chains: this.getTestChains()
    };
  },
  methods: {
    getTestChains() {
      return [
        {
          icon: 'https://cryptologos.cc/logos/bnb-bnb-logo.png',
          chainId: 'BNB',
          amount: 0.5, //Баланс по блокчейну
        },
        {
          icon: 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
          chainId: 'Ethereum',
          amount: 1, //Баланс по блокчейну
        },
        {
          icon: 'https://cryptologos.cc/logos/polygon-matic-logo.png',
          chainId: 'Polygon',
          amount: 10, //Баланс по блокчейну
        },
        {
          icon: 'https://cryptologos.cc/logos/avalanche-avax-logo.png',
          chainId: 'Avalanche ',
          amount: 100, //Баланс по блокчейну
        },
        {
          icon: 'https://cryptologos.cc/logos/fantom-ftm-logo.png',
          chainId: 'Fantom',
          amount: 100, //Баланс по блокчейну
        },
        {
          icon: 'https://cryptologos.cc/logos/arbitrum-arb-logo.png',
          chainId: 'Arbitrum',
          amount: 100, //Баланс по блокчейну
        },
        {
          icon: 'https://cryptologos.cc/logos/optimism-ethereum-op-logo.png',
          chainId: 'Optimism',
          amount: 100, //Баланс по блокчейну
        },
        {
          icon: 'https://cryptologos.cc/logos/harmony-one-logo.png',
          chainId: 'Harmony',
          amount: 100, //Баланс по блокчейну
        },
        {
          icon: 'https://cryptologos.cc/logos/cronos-cro-logo.png',
          chainId: 'Cronos',
          amount: 100, //Баланс по блокчейну
        },
      ];
    }
  }
}
</script>

<style scoped>

</style>