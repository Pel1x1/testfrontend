<template>
  <div>
    <div>
      <SelectCryptoSitem
        v-for="(crypto, index) in cryptos"
        :key="crypto.id"
        :currency="crypto.name"
        :price="crypto.current_price"
        :totalValue="crypto.balancecrypto"
        :imageUrl="crypto.icon || '../images/question.png'"
      />
    </div>
  </div>
</template>

<script>
import SelectCryptoSitem from './SelectCryptoSItem.vue';

export default {
  components: {
    SelectCryptoSitem
  },
  data() {
    return {
      cryptos: this.getTestCryptos(),
    };
  },
  methods: {
    getTestCryptos() {
      return [
        {
            icon: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png', // Иконка Bitcoin
            name: 'BTC',
            current_price: '68875.52',
            balancecrypto: '1',
            blockchain: 'Bitcoin'
        },
        {
            icon: 'https://cryptologos.cc/logos/ethereum-eth-logo.png', // Иконка Ethereum
            name: 'ETH',
            current_price: '4825.67',
            balancecrypto: '2',
            blockchain: 'Ethereum'
        },
        {
            icon: 'https://cryptologos.cc/logos/binancecoin-bnb-logo.png', // Иконка Binance Coin
            name: 'BNB',
            current_price: '645.12',
            balancecrypto: '5',
            blockchain: 'Binance Smart Chain'
        },
        {
            icon: 'https://cryptologos.cc/logos/ripple-xrp-logo.png', // Иконка Ripple
            name: 'XRP',
            current_price: '1.25',
            balancecrypto: '100',
            blockchain: 'Ripple'
        },
        {
            icon: 'https://cryptologos.cc/logos/cardano-ada-logo.png', // Иконка Cardano
            name: 'ADA',
            current_price: '1.75',
            balancecrypto: '50',
            blockchain: 'Cardano'
        },
        {
            icon: 'https://cryptologos.cc/logos/dogecoin-doge-logo.png', // Иконка Dogecoin
            name: 'DOGE',
            current_price: '0.30',
            balancecrypto: '2000',
            blockchain: 'Dogecoin'
        },
        {
            icon: 'https://cryptologos.cc/logos/polkadot-dot-logo.png', // Иконка Polkadot
            name: 'DOT',
            current_price: '27.50',
            balancecrypto: '10',
            blockchain: 'Polkadot'
        },
        {
            icon: 'https://cryptologos.cc/logos/litecoin-ltc-logo.png', // Иконка Litecoin
            name: 'LTC',
            current_price: '190.45',
            balancecrypto: '3',
            blockchain: 'Litecoin'
        },
        {
            icon: 'https://cryptologos.cc/logos/chainlink-link-logo.png', // Иконка Chainlink
            name: 'LINK',
            current_price: '30.12',
            balancecrypto: '15',
            blockchain: 'Ethereum'
        },
        {
            icon: 'https://cryptologos.cc/logos/stellar-xlm-logo.png', // Иконка Stellar
            name: 'XLM',
            current_price: '0.40',
            balancecrypto: '250',
            blockchain: 'Stellar'
        },
        {
            icon: 'https://cryptologos.cc/logos/bitcoin-cash-bch-logo.png', // Иконка Bitcoin Cash
            name: 'BCH',
            current_price: '600.00',
            balancecrypto: '0.5',
            blockchain: 'Bitcoin Cash'
        },
        {
            icon: 'https://cryptologos.cc/logos/uniswap-uni-logo.png', // Иконка Uniswap
            name: 'UNI',
            current_price: '25.00',
            balancecrypto: '20',
            blockchain: 'Ethereum'
        },
        {
            icon: 'https://cryptologos.cc/logos/solana-sol-logo.png', // Иконка Solana
            name: 'SOL',
            current_price: '150.00',
            balancecrypto: '10',
            blockchain: 'Solana'
        },
        {
            icon: 'https://cryptologos.cc/logos/tezos-xtz-logo.png', // Иконка Tezos
            name: 'XTZ',
            current_price: '4.50',
            balancecrypto: '30.00',
            blockchain:'Tezos'
        },
        {
            icon:'https://cryptologos.cc/logos/vechain-vet-logo.png',//Иконка VeChain
            name:'VET' ,
            current_price:'0.15' ,
            balancecrypto:'1000' ,
            blockchain:'VeChain' 
        },
        {
            icon:'https://cryptologos.cc/logos/tron-trx-logo.png',//Иконка Tron
            name:'TRX' ,
            current_price:'0.08' ,
            balancecrypto:'5000' ,
            blockchain:'Tron' 
        },
        {
            icon:'https://cryptologos.cc/logos/algorand-algo-logo.png',//Иконка Algorand
            name:'ALGO' ,
            current_price:'1.20' ,
            balancecrypto:'200' ,
            blockchain:'Algorand' 
        },
        {
            icon:'https://cryptologos.cc/logos/monero-xmr-logo.png',//Иконка Monero
            name:'XMR' ,
            current_price:'250.00' ,
            balancecrypto:'2' ,
            blockchain:'Monero' 
        },
        {
            icon:'https://cryptologos.cc/logos/neo-neo-logo.png',//Иконка NEO
            name:'NEO' ,
            current_price:'45.00' ,
            balancecrypto:'10' ,
            blockchain:'NEO' 
        }
      ];
    }
  }
};

</script>