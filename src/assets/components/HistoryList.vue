<template>
  <div>
    <HistoryItem
      v-for="(transaction, index) in transactions"
      :key="transaction.id"
      :icon="transaction.icon"
      :cryptoId="transaction.cryptoId"
      :fromAddress="transaction.fromAddress"
      :toAddress="transaction.toAddress"
      :amount="transaction.amount"
      :timestamp="transaction.timestamp"
      :isLoss="transaction.isLoss"
      :tag="transaction.tag"
    />
  </div>
</template>

<script>
import HistoryItem from './HistoryItem.vue';
import axios from 'axios';

export default {
  components: {
    HistoryItem
  },
  async mounted() {
    await this.getTestTransactions();
  },
  data() {
    return {
      transactions: [],
      accountId: '',
    };
  },
  methods: {
    async getTestTransactions() {
      this.accountId = localStorage.getItem('accountId'); 
      if (!this.accountId) {
        console.error('accountId отсутствует в Local Storage');
        return;
      }

      try {
        const response = await axios.post('http://localhost:3333/api/get-history-by-account', { accountId1: this.accountId });
        
        const transactionList = response.data.data[0].transactionList;

        // Преобразование данных для компонента HistoryItem
        this.transactions = transactionList.map(transaction => ({
          id: transaction.txHash,
          icon: '', // Здесь можно указать иконку, если она доступна
          cryptoId: this.formatCryptoId(transaction.symbol), // Используем форматированное значение symbol
          fromAddress: this.formatAddress(transaction.from[0].address), // Форматируем адрес отправителя
          toAddress: this.formatAddress(transaction.to[0].address), // Форматируем адрес получателя
          amount: transaction.amount,
          timestamp: new Date(parseInt(transaction.txTime)).toISOString(),
          isLoss: false, // Определите логику для isLoss, если необходимо
          tag: transaction.tag || ' ' // Добавляем тег или значение по умолчанию
        }));

        console.log('Транзакции успешно загружены:', this.transactions);
      } catch (error) {
        console.error('Ошибка при получении истории транзакций:', error);
      }
    },
    formatAddress(address) {
      if (!address || address.length < 8) return address; // Проверка на корректность адреса
      return `${address.slice(0, 5)}...${address.slice(-3)}`; // Форматирование адреса
    },
    formatCryptoId(symbol) {
      if (!symbol || symbol.length <= 10) return symbol; // Если длина <= 10, возвращаем как есть
      return `${symbol.slice(0, 10)}...`; // Сокращаем до первых 10 символов и добавляем многоточие
    },
    
  }
};
</script>