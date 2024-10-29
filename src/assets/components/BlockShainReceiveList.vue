<template>
  <div class="blockchain-list">
    <h2>Блокчейны</h2>
    <ul v-if="blockchains.length">
      <li v-for="blockchain in blockchains" :key="blockchain.name">
        <img :src="blockchain.icon" :alt="blockchain.name" />
        <span>{{ blockchain.name }}</span>
      </li>
    </ul>
    <p v-else>Загрузка данных...</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      blockchains: [],
    };
  },
  mounted() {
    this.fetchBlockchains();
  },
  methods: {
    async fetchBlockchains() {
      try {
        const response = await axios.get('https://api.example.com/blockchains'); // Замените на реальный URL API
        this.blockchains = response.data; // Предполагается, что данные приходят в нужном формате
      } catch (error) {
        console.error('Ошибка при получении данных:', error);
      }
    },
  },
};
</script>

<style scoped>
.blockchain-list {
  list-style-type: none;
}
.blockchain-list img {
  width: 24px;
  height: 24px;
  margin-right: 8px;
}
</style>