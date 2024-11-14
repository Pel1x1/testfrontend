
<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="main-container">
    <RouterLink class="back" to="select_network"></RouterLink>
    <span class="scan-qr-code">Your address on {{ currency }}</span>
    <div class="osa" @click="copyCurrency">
      <span class="find-qr-address">{{ address }}</span>
    </div>
    <div v-if="copied" class="notification">Copied</div>
  </div>
</template>



<script>
export default {
  data() {
    return {
      address: '',
      currency: this.$route.query.currency,
      copied: false,
    };
  },
  mounted() {
    this.address = localStorage.getItem('address');
  },
  methods: {
    copyCurrency() {
      navigator.clipboard.writeText(this.address).then(() => {
        this.showNotification();
      }).catch(err => {
        console.error('Ошибка при копировании: ', err);
      });
    },
    showNotification() {
      this.copied = true;
      setTimeout(() => {
        this.copied = false;
      }, 2000); // Уведомление исчезнет через 2 секунды
    }
  },
};
</script>

<style scoped>
.notification {
  position: fixed;
  top: calc(20 * var(--rpx));
  right: calc(20 * var(--rpx));
  background-color: #4caf50; /* Зеленый фон */
  font-family: Montserrat, var(--default-font-family);
  font-size: calc(13 * var(--rpx));
  color: white; /* Белый текст */
  padding: 10px;
  border-radius: calc(10 * var(--rpx));
  transition: opacity 0.5s ease;
}
.osa{
  background: #212121;
  border-radius: calc(12 * var(--rpx));
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

.scan-qr-code {
  display: block;
  position: relative;
  height: calc(30 * var(--rpx));
  margin: calc(39.99999998711053 * var(--rpx)) 0 0 calc(100 * var(--rpx));
  color: #ffffff;
  font-family: Montserrat, var(--default-font-family);
  font-size: calc(25 * var(--rpx));
  font-weight: 700;
  line-height: calc(30 * var(--rpx));
  text-align: left;
  white-space: nowrap;
  top: calc(10 * var(--rpx));
}
.find-qr-address {
  display: block;
  position: relative;
  height: calc(20 * var(--rpx));
  margin: calc(15 * var(--rpx)) 0 0 calc(55 * var(--rpx));
  color: #ffffff;
  font-family: Montserrat, var(--default-font-family);
  font-size: calc(16 * var(--rpx));
  font-weight: 500;
  line-height: calc(19.503999710083008 * var(--rpx));
  text-align: left;
  white-space: nowrap;
  z-index: 1;
}

</style>