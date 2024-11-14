<script setup>
import { RouterLink } from "vue-router";
import { ref, onMounted, onBeforeUnmount } from "vue";
import CryptoList from '../assets/components/CryptoList.vue';
import { inject } from 'vue';

const isMenuVisible = ref(false);
const selected = ref('Wallet');
const transitionName = ref('slide-left');
const lastUpdated = ref(null);

function toggleMenu() {
    isMenuVisible.value = !isMenuVisible.value;
}

function handleClick(option) {
    if (selected.value !== option) {
        transitionName.value = option === 'Contest' ? 'slide-left' : 'slide-right';
        selected.value = option;
    }
}

function handleMenuClick(option) {
    isMenuVisible.value = false;
}

function handleClickOutside(event) {
    const menuElement = document.querySelector('.popup-menu');
    const buttonElement = event.target.closest('.icon');

    if (isMenuVisible.value && menuElement && !menuElement.contains(event.target) && !buttonElement) {
        isMenuVisible.value = false;
    }
}

onMounted(() => {
    document.addEventListener('click', handleClickOutside);
});

onBeforeUnmount(() => {
    document.removeEventListener('click', handleClickOutside);
});

</script>

<script>
export default {
  data() {
    return {
      mnemonic: '',
      address: '',
      privateKey: '',
      accountId: '',
      balance: '',
    };
  },
  mounted() {
    const walletData = this.getWalletData();
    this.mnemonic = walletData.mnemonic;
    this.address = walletData.address;
    this.privateKey = walletData.privateKey;
    this.accountId = walletData.accountId;
    this.balance = walletData.balance;
  },
  methods: {
    getWalletData() {
      const mnemonic = localStorage.getItem('mnemonic');
      const address = localStorage.getItem('address');
      const privateKey = localStorage.getItem('privatekey'); 
      const accountId = localStorage.getItem('accountId'); 
      const balance = localStorage.getItem('balance'); 
      return { mnemonic, address, privateKey, accountId, balance };
    },
    formatAddress(address) {
      if (!address || address.length < 8) return address; // Проверка на корректность адреса
      return `${address.slice(0, 5)}...${address.slice(-3)}`; // Форматирование адреса
    },
    copyAddress() {
      navigator.clipboard.writeText(this.address).then(() => {
      }).catch(err => {
        console.error('Ошибка при копировании: ', err);
      });
    },
  }
};
</script>


<template>
  <div class="main-container">
    <div class="flex-row-ba">
      <div class="switcher">
        <div class="option" :class="{ selected: selected === 'Contest' }" @click="handleClick('Contest')">Contest</div>
        <div class="option" :class="{ selected: selected === 'Wallet' }" @click="handleClick('Wallet')"> Wallet </div>
      </div>
      <div class="regroup">
        <RouterLink to="notifications_page"><button class="btn-notifications"></button></RouterLink>
        <button class="btn-search"></button>
      </div>
      <button class="icon" @click="toggleMenu"></button>
    </div>
    <div v-if="isMenuVisible" class="popup-menu">
        <ul>
            <RouterLink to="settings_page">
            <li @click="handleMenuClick('настройки')">
                <img class="icon_menu" src="../assets/images/settings.png"  /> Settings
            </li>
        </RouterLink>
        <RouterLink to="dapp_connection">
            <li @click="handleMenuClick('подключение Dapp')">
                <img class="icon_menu" src="../assets/images/dapp.png" /> Connect Dapp
            </li>
        </RouterLink>
        <RouterLink to="history_page">
            <li @click="handleMenuClick('история')">
                <img class="icon_menu" src="../assets/images/history.png" /> History
            </li>
        </RouterLink>
        <RouterLink to="manual_page">
            <li @click="handleMenuClick('инструкция')">
                <img class="icon_menu" src="../assets/images/manual.png"  /> Manual
            </li>
        </RouterLink>
        </ul>
    </div>
    
    <transition :name="transitionName">
      <div v-if="selected === 'Contest'" key="contest" class="page contest">
        <h1 class="contestpagetext">Contest Page</h1>
      </div>

      <div v-else-if="selected === 'Wallet'" key="wallet" class="page wallet">
        <div class="rectangle-2">
          <div class="flex-column">
            <span class="comma">{{balance.slice(0, 6)}}</span>
            <div class="wallet-c-account">
              <span class="wallet-c">Wallet evm </span><span class="empty"> </span><span class="account"> {{ formatAddress(accountId) }} </span>
            </div>
            <button class="btn-copy" @click="copyAddress"></button>
          </div>
          <div class="image"></div>
          <span class="dollar">$</span>
        </div>

        <div class="flex-row">
          <RouterLink class="rectangle-3" to="select_network">
            <div class="ellipse"></div>
            <span class="receive">Receive</span>
            <div class="icon-4"></div>
          </RouterLink>
          

          <RouterLink class="rectangle-5" to="select_crypto_to_send">
            <div class="ellipse-6"></div>
            <span class="send">Send</span>
            <div class="icon-7"></div>
          </RouterLink>

          <RouterLink class="rectangle-8" to="swap">
            <div class="ellipse-9"></div>
            <span class="swap">Swap</span>
            <div class="vector"></div>
          </RouterLink>
        </div>
        <CryptoList />
      </div>
    </transition>
  </div>
</template>

<style scoped>

input,
select,
textarea,
button {
  display: inline-block;
  outline: 0;
  border: none;
  border-radius: 5px;
  text-align: center;
  text-decoration: none;
  transition: background-color 0.3s, transform 0.1s;
  cursor: pointer;
}

.contest{
  position: relative;
  width: calc(430 * var(--rpx));
  height: 2000px;
  margin: 0 auto;
  background: #000000;
  overflow: hidden;
}

button:active {
  transform: scale(0.98);
}
.main-container {
  position: relative;
  width: calc(430 * var(--rpx));
 
  margin: 0 auto;
  background: #000000;
  overflow: hidden;
}

.slide-left-enter-active, .slide-left-leave-active {
  transition: transform 0.6s ease;
}
.slide-left-enter, .slide-left-leave-to {
  transform: translateX(100%);
}

.slide-right-enter-active, .slide-right-leave-active {
  transition: transform 0.6s ease;
}
.slide-right-enter, .slide-right-leave-to {
  transform: translateX(-100%);
}

.main-container {
  overflow: hidden;
}

.option.selected {
  background-color: #545454;
  color: #ffffff;
}
.contestpagetext{
  font-family: Montserrat, var(--default-font-family);
  position: relative;
  color: #fffdfd;
  font-size: calc(35 * var(--rpx));
  font-weight: 500;
  display: block;
  line-height: calc(38 * var(--rpx));
  
}

.flex-row-ba {
  position: relative;
  width: calc(386.166748046875 * var(--rpx));
  height: calc(30 * var(--rpx));
  margin: calc(51 * var(--rpx)) 0 0 calc(24.833251953125 * var(--rpx));
  z-index: 92;
}

.switcher {
  display: flex;
  position: absolute;
  background-color: #404040;
  padding: 0; 
  justify-content: space-between;
  width: calc(119 * var(--rpx) * 1.5); 
  height: calc(22 * var(--rpx) * 1.5); 
  top: 11px;
  left: calc(90 * var(--rpx) );
  border-radius: calc(12 * var(--rpx) * 1.5); 
}

.option {
  flex: 1;
  text-align: center;
  cursor: pointer;
  color: #959595;
  font-family: Montserrat, var(--default-font-family);
  transition: background-color 0.3s, color 0.2s;
  font-size: calc(10 * var(--rpx) * 1.5); 
  font-weight: 400;
  line-height: calc(22 * var(--rpx) * 1.5); 
  border-radius: calc(12 * var(--rpx) * 1.5);

}
.option.selected {
  background-color: #545454;
  color: #ffffff;
  border-radius: calc(12 * var(--rpx) * 1.5);
}

.regroup {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  width: 15.8%;
  height: 100%;
  top: 0;
  left: 84.2%;
  z-index: 91;
}
.btn-notifications {
  flex-shrink: 0;
  position: relative;
  width: calc(22 * var(--rpx));
  height: calc(25 * var(--rpx));
  background: url(../assets/images/b25d95f4-bf45-4c48-b297-9ac5b8c690de.png) no-repeat center;
  background-size: 100% 100%;
  z-index: 91;
}

.btn-search {
  flex-shrink: 0;
  position: relative;
  width: calc(25 * var(--rpx));
  height: calc(25 * var(--rpx));
  background: url(../assets/images/8a6a7f49-9f55-4d84-8732-d345193678a6.png)
    no-repeat center;
  background-size: 100% 100%;
  z-index: 2;
}

.icon {
  position: absolute;
  width: calc(25.333251953125 * var(--rpx));
  height: calc(19.5 * var(--rpx));
  top: calc(2.75 * var(--rpx));
  left: calc(-1 * var(--rpx));
  background: url(../assets/images/a2c7080a-df4c-45c7-b32f-b6156e386d5c.png)
    no-repeat center;
  background-size: 100% 100%;
  z-index: 1;
}

.popup-menu {
  position: relative; 
  background-color: #1e1e1e;
  color: #ffffff;
  border: none;
  z-index: 1000;
  text-align: left;
  width: calc(392 * var(--rpx));
  margin: calc(29 * var(--rpx)) 0 0 calc(19 * var(--rpx));
  border-radius: calc(34 * var(--rpx));
}

.popup-menu ul {
  list-style-type: none;
  padding: 0;
}

.popup-menu li {
  display: flex; 
  align-items: center; 
  padding-left: calc(10 * var(--rpx));
  cursor: pointer;
}

.popup-menu li:active {
  background-color: #424242;
  transform: scale(0.98);
}

.popup-menu a {
  font-family: Montserrat, var(--default-font-family);
  text-decoration: none; 
  padding: calc(10 * var(--rpx));
  margin-left:calc(10 * var(--rpx));
  font-size: calc(18 * var(--rpx));
  color: inherit; 
}

.popup-menu li .icon_menu {
  width: calc(20 * var(--rpx));
  height: calc(20 * var(--rpx));
  margin-right: calc(15 * var(--rpx)); 
  margin-left: calc(15 * var(--rpx)); 
}



.rectangle-2 {
  position: relative;
  width: calc(392 * var(--rpx));
  height: calc(120 * var(--rpx));
  margin: calc(29 * var(--rpx)) 0 0 calc(19 * var(--rpx));
  background: #1e1e1e;
  z-index: 6;
  border-radius: calc(34 * var(--rpx));
}
.flex-column {
  position: absolute;
  width: 46.17%;
  height: 49.17%;
  top: 25%;
  left: 13.81%;
  font-size: 0px;
  z-index: 10;
}
.comma {
  display: block;
  position: relative;
  height: calc(38 * var(--rpx));
  margin: calc(21 * var(--rpx)) 0 0 0;
  color: #ffffff;
  font-family: Montserrat, var(--default-font-family);
  font-size: calc(35 * var(--rpx));
  font-weight: 500;
  line-height: calc(38 * var(--rpx));
  text-align: left;
  white-space: nowrap;
  letter-spacing: calc(5.25 * var(--rpx));
  z-index: 9;
}
.wallet-c-account {
  position: absolute;
  width: calc(145.99234008789062 * var(--rpx));
  height: calc(18 * var(--rpx));
  top: 0;
  left: 0;
  font-family: Montserrat, var(--default-font-family);
  font-size: calc(15 * var(--rpx));
  font-weight: 700;
  line-height: calc(18 * var(--rpx));
  text-align: left;
  text-overflow: initial;
  white-space: nowrap;
  z-index: 7;
}
.wallet-c {
  position: relative;
  color: #ffffff;
  font-family: Montserrat, var(--default-font-family);
  font-size: calc(15 * var(--rpx));
  font-weight: 600;
  line-height: calc(18.28499984741211 * var(--rpx));
  text-align: left;
}
.empty {
  position: relative;
  color: #000000;
  font-family: Montserrat, var(--default-font-family);
  font-size: calc(15 * var(--rpx));
  font-weight: 600;
  line-height: calc(18.28499984741211 * var(--rpx));
  text-align: left;
}
.account {
  position: relative;
  color: #6d6d6d;
  font-family: Montserrat, var(--default-font-family);
  font-size: calc(15 * var(--rpx));
  font-weight: 600;
  line-height: calc(18.28499984741211 * var(--rpx));
  text-align: left;
  left: calc(5 * var(--rpx));
}
.btn-copy {
  position: absolute;
  width: calc(15 * var(--rpx));
  height: calc(15 * var(--rpx));
  top: 5.08%;
  left: 90.54%;
  background: url(../assets/images/e92445fd-06c6-49c2-bdac-1d6b07a370f0.png)
    no-repeat center;
  background-size: 100% 100%;
  z-index: 10;
}
.image {
  position: absolute;
  top: calc(31 * var(--rpx));
  right: calc(351 * var(--rpx));
  bottom: calc(73 * var(--rpx));
  left: calc(25 * var(--rpx));
  background: url(../assets/images/c6a0e762-c820-4bfe-ba66-4afb95805561.png)
    no-repeat center;
  background-size: cover;
  z-index: 86;
  overflow: hidden;
  border-radius: calc(100 * var(--rpx));
}
.dollar {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  position: absolute;
  height: calc(18 * var(--rpx));
  top: calc(66 * var(--rpx));
  left: calc(42.540771484375 * var(--rpx));
  color: #fffdfd;
  font-family: Montserrat, var(--default-font-family);
  font-size: calc(20 * var(--rpx));
  font-weight: 500;
  line-height: calc(18 * var(--rpx));
  text-align: left;
  white-space: nowrap;
  z-index: 8;
}
.flex-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  width: calc(392 * var(--rpx));
  height: calc(57.871826171875 * var(--rpx));
  margin: calc(34.5640869140625 * var(--rpx)) 0 0 calc(19 * var(--rpx));
  z-index: 83;
}
.rectangle-3 {
  flex-shrink: 0;
  position: relative;
  width: calc(124 * var(--rpx));
  height: calc(57.4359130859375 * var(--rpx));
  background: #1e1e1e;
  z-index: 75;
  border-radius: calc(12 * var(--rpx));
}
.rectangle-3:hover {
  background-color: #272727;
}

.rectangle-3:active {
  background-color: #424242;
  transform: scale(0.98);
}

.ellipse {
  position: absolute;
  width: calc(44 * var(--rpx));
  height: calc(44.18147277832031 * var(--rpx));
  top: calc(6.4359130859375 * var(--rpx));
  left: calc(7 * var(--rpx));
  background: url(../assets/images/bd58203a-9153-40a8-9bd6-3bc7f009a967.png)
    no-repeat center;
  background-size: cover;
  z-index: 76;
}
.receive {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  position: absolute;
  height: calc(18 * var(--rpx));
  top: calc(19.4359130859375 * var(--rpx));
  left: calc(57 * var(--rpx));
  color: #ffffff;
  font-family: Montserrat, var(--default-font-family);
  font-size: calc(15 * var(--rpx));
  font-weight: 600;
  line-height: calc(18 * var(--rpx));
  text-align: left;
  white-space: nowrap;
  z-index: 77;
}
.icon-4 {
  position: absolute;
  width: 10.48%;
  height: 31.34%;
  top: 34.71%;
  left: 18.15%;
  background: url(../assets/images/afaeddd3-7e79-4bc4-80be-bd53d6928a64.png)
    no-repeat center;
  background-size: 100% 100%;
  z-index: 90;
}
.rectangle-5 {
  flex-shrink: 0;
  position: relative;
  width: calc(124 * var(--rpx));
  height: calc(57.4359130859375 * var(--rpx));
  background: #1e1e1e;
  z-index: 79;
  border-radius: calc(12 * var(--rpx));
}
.rectangle-5:hover {
  background-color: #272727;
}

.rectangle-5:active {
  background-color: #424242;
  transform: scale(0.98);
}


.ellipse-6 {
  position: absolute;
  width: calc(44 * var(--rpx));
  height: calc(44.18147277832031 * var(--rpx));
  top: calc(6.4359130859375 * var(--rpx));
  left: calc(7 * var(--rpx));
  background: url(../assets/images/d69169d8-a839-411c-9023-7468cb44fae3.png)
    no-repeat center;
  background-size: cover;
  z-index: 80;
}
.send {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  position: absolute;
  height: calc(18 * var(--rpx));
  top: calc(19 * var(--rpx));
  left: calc(57 * var(--rpx));
  color: #ffffff;
  font-family: Montserrat, var(--default-font-family);
  font-size: calc(15 * var(--rpx));
  font-weight: 600;
  line-height: calc(18 * var(--rpx));
  text-align: left;
  white-space: nowrap;
  z-index: 81;
}
.icon-7 {
  position: absolute;
  width: 10.48%;
  height: 31.34%;
  top: 33.95%;
  left: 18.15%;
  background: url(../assets/images/c419593d-64fe-490f-9d0d-97bcfe9478d4.png)
    no-repeat center;
  background-size: 100% 100%;
  z-index: 89;
}
.rectangle-8 {
  flex-shrink: 0;
  position: relative;
  width: calc(124 * var(--rpx));
  height: calc(57.4359130859375 * var(--rpx));
  background: #1e1e1e;
  z-index: 83;
  border-radius: calc(12 * var(--rpx));
}
.rectangle-8:hover {
  background-color: #272727;
}

.rectangle-8:active {
  background-color: #424242;
  transform: scale(0.98);
}

.ellipse-9 {
  position: absolute;
  width: calc(44 * var(--rpx));
  height: calc(44 * var(--rpx));
  top: calc(6.4359130859375 * var(--rpx));
  left: calc(7 * var(--rpx));
  background: url(../assets/images/7fc67986-6224-44b2-88f0-c40ce407f2e5.png)
    no-repeat center;
  background-size: cover;
  z-index: 84;
}
.swap {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  position: absolute;
  height: calc(18 * var(--rpx));
  top: calc(19 * var(--rpx));
  left: calc(57 * var(--rpx));
  color: #ffffff;
  font-family: Montserrat, var(--default-font-family);
  font-size: calc(15 * var(--rpx));
  font-weight: 600;
  line-height: calc(18 * var(--rpx));
  text-align: left;
  white-space: nowrap;
  z-index: 85;
}
.vector {
  position: absolute;
  width: calc(22 * var(--rpx));
  height: calc(19 * var(--rpx));
  top: calc(19 * var(--rpx));
  left: calc(17 * var(--rpx));
  background: url(../assets/images/5b9a320b-cc12-4a1f-b46b-f56c835967ad.png)
    no-repeat center;
  background-size: 100% 100%;
  z-index: 88;
}
.flex-row-e {
  position: relative;
  width: calc(375 * var(--rpx));
  height: calc(32 * var(--rpx));
  margin: calc(34.5640869140625 * var(--rpx)) 0 0 calc(34 * var(--rpx));
  z-index: 17;
}


.flex-row-ec {
  position: relative;
  width: calc(365 * var(--rpx));
  height: calc(32 * var(--rpx));
  margin: calc(25 * var(--rpx)) 0 0 calc(34 * var(--rpx));
  z-index: 38;
}
.usdt {
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
  z-index: 33;
}
.text-11 {
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
  z-index: 34;
}
.img-8 {
  position: absolute;
  top: calc(1 * var(--rpx));
  right: calc(335 * var(--rpx));
  bottom: calc(1 * var(--rpx));
  left: 0;
  background: url(../assets/images/54c87e30-e60d-49ba-a698-1d0115b0254a.png)
    no-repeat center;
  background-size: cover;
  z-index: 38;
  overflow: hidden;
  border-radius: calc(17 * var(--rpx));
}
.text-12 {
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
  z-index: 35;
}
.text-13 {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  position: absolute;
  height: calc(12 * var(--rpx));
  top: calc(20 * var(--rpx));
  left: calc(82 * var(--rpx));
  color: #26de5b;
  font-family: Montserrat, var(--default-font-family);
  font-size: calc(10 * var(--rpx));
  font-weight: 600;
  line-height: calc(12 * var(--rpx));
  text-align: left;
  white-space: nowrap;
  z-index: 37;
}
.text-14 {
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
  z-index: 36;
}
.section-5 {
  position: relative;
  width: calc(344 * var(--rpx));
  height: calc(30 * var(--rpx));
  margin: calc(25 * var(--rpx)) 0 0 calc(34 * var(--rpx));
  z-index: 59;
}
.text-15 {
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
  z-index: 55;
}
.box-2 {
  position: absolute;
  top: 0;
  right: calc(257 * var(--rpx));
  bottom: 0;
  left: 0;
  z-index: 59;
}
.pic-6 {
  position: absolute;
  top: 0;
  right: calc(57 * var(--rpx));
  bottom: 0;
  left: 0;
  background: url(../assets/images/2a9f2919-0f98-4bdd-816f-f3a863c68c63.png)
    no-repeat center;
  background-size: cover;
  z-index: 59;
  overflow: hidden;
  border-radius: calc(17 * var(--rpx));
}
.text-16 {
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
  z-index: 54;
}
.box-3 {
  position: relative;
  width: calc(296 * var(--rpx));
  height: calc(12 * var(--rpx));
  margin: calc(-10 * var(--rpx)) 0 0 calc(73 * var(--rpx));
  z-index: 58;
}
.text-17 {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  position: absolute;
  height: calc(12 * var(--rpx));
  top: 0;
  left: calc(262 * var(--rpx));
  color: #545454;
  font-family: Montserrat, var(--default-font-family);
  font-size: calc(10 * var(--rpx));
  font-weight: 600;
  line-height: calc(12 * var(--rpx));
  text-align: left;
  white-space: nowrap;
  z-index: 57;
}
.section-6 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  width: calc(80 * var(--rpx));
  height: calc(12 * var(--rpx));
  top: 0;
  left: 0;
  z-index: 58;
}
.text-18 {
  flex-shrink: 0;
  position: relative;
  height: calc(12 * var(--rpx));
  color: #545454;
  font-family: Montserrat, var(--default-font-family);
  font-size: calc(10 * var(--rpx));
  font-weight: 600;
  line-height: calc(12 * var(--rpx));
  text-align: left;
  white-space: nowrap;
  z-index: 56;
}
.text-19 {
  flex-shrink: 0;
  position: relative;
  height: calc(12 * var(--rpx));
  color: #b81b1b;
  font-family: Montserrat, var(--default-font-family);
  font-size: calc(10 * var(--rpx));
  font-weight: 600;
  line-height: calc(12 * var(--rpx));
  text-align: left;
  white-space: nowrap;
  z-index: 58;
}
.box-4 {
  position: relative;
  width: calc(375 * var(--rpx));
  height: calc(32 * var(--rpx));
  margin: calc(25 * var(--rpx)) 0 0 calc(34 * var(--rpx));
  z-index: 24;
}
.text-1a {
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
  z-index: 20;
}
.text-1b {
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
  z-index: 21;
}
.pic-7 {
  position: absolute;
  top: calc(1 * var(--rpx));
  right: calc(345 * var(--rpx));
  bottom: calc(1 * var(--rpx));
  left: 0;
  background: url(../assets/images/225d9fa8-0ce2-4dc0-bebb-a9a8d6e4aea5.png)
    no-repeat center;
  background-size: cover;
  z-index: 19;
  overflow: hidden;
  border-radius: calc(17 * var(--rpx));
}
.text-1c {
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
  z-index: 22;
}
.text-1d {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  position: absolute;
  height: calc(12 * var(--rpx));
  top: calc(20 * var(--rpx));
  left: calc(92 * var(--rpx));
  color: #26de5b;
  font-family: Montserrat, var(--default-font-family);
  font-size: calc(10 * var(--rpx));
  font-weight: 600;
  line-height: calc(12 * var(--rpx));
  text-align: left;
  white-space: nowrap;
  z-index: 24;
}
.flex-row-b {
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
  z-index: 23;
}
.div {
  position: relative;
  width: calc(365 * var(--rpx));
  height: calc(32 * var(--rpx));
  margin: calc(25 * var(--rpx)) 0 0 calc(34 * var(--rpx));
  z-index: 45;
}
.usdt-c {
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
  z-index: 40;
}
.dot-d {
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
  z-index: 41;
}
.picture-type-png {
  position: absolute;
  top: calc(1 * var(--rpx));
  right: calc(335 * var(--rpx));
  bottom: calc(1 * var(--rpx));
  left: 0;
  background: url(../assets/images/04ecfc03-987e-4539-9ed1-16a0e3872d01.png)
    no-repeat center;
  background-size: cover;
  z-index: 45;
  overflow: hidden;
  border-radius: calc(17 * var(--rpx));
}
.dollar-e {
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
  z-index: 42;
}
.plus-percent {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  position: absolute;
  height: calc(12 * var(--rpx));
  top: calc(20 * var(--rpx));
  left: calc(82 * var(--rpx));
  color: #26de5b;
  font-family: Montserrat, var(--default-font-family);
  font-size: calc(10 * var(--rpx));
  font-weight: 600;
  line-height: calc(12 * var(--rpx));
  text-align: left;
  white-space: nowrap;
  z-index: 44;
}
.flex-row-d {
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
  z-index: 43;
}
.dot-f {
  position: relative;
  width: calc(344 * var(--rpx));
  height: calc(30 * var(--rpx));
  margin: calc(25 * var(--rpx)) 0 0 calc(34 * var(--rpx));
  z-index: 66;
}
.regroup-10 {
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
  z-index: 62;
}
.regroup-11 {
  position: absolute;
  top: 0;
  right: calc(257 * var(--rpx));
  bottom: 0;
  left: 0;
  z-index: 66;
}
.picture-usdc {
  position: absolute;
  top: 0;
  right: calc(57 * var(--rpx));
  bottom: 0;
  left: 0;
  background: url(../assets/images/370891f9-4915-4c81-a17a-96d772cd6c6f.png)
    no-repeat center;
  background-size: cover;
  z-index: 66;
  overflow: hidden;
  border-radius: calc(17 * var(--rpx));
}
.usdc {
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
  z-index: 61;
}
.flex-row-eaa {
  position: relative;
  width: calc(296 * var(--rpx));
  height: calc(12 * var(--rpx));
  margin: calc(-10 * var(--rpx)) 0 0 calc(73 * var(--rpx));
  z-index: 65;
}
.dollar-12 {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  position: absolute;
  height: calc(12 * var(--rpx));
  top: 0;
  left: calc(262 * var(--rpx));
  color: #545454;
  font-family: Montserrat, var(--default-font-family);
  font-size: calc(10 * var(--rpx));
  font-weight: 600;
  line-height: calc(12 * var(--rpx));
  text-align: left;
  white-space: nowrap;
  z-index: 64;
}
.regroup-13 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  width: calc(80 * var(--rpx));
  height: calc(12 * var(--rpx));
  top: 0;
  left: 0;
  z-index: 65;
}
.dollar-14 {
  flex-shrink: 0;
  position: relative;
  height: calc(12 * var(--rpx));
  color: #545454;
  font-family: Montserrat, var(--default-font-family);
  font-size: calc(10 * var(--rpx));
  font-weight: 600;
  line-height: calc(12 * var(--rpx));
  text-align: left;
  white-space: nowrap;
  z-index: 63;
}
.minus-percent {
  flex-shrink: 0;
  position: relative;
  height: calc(12 * var(--rpx));
  color: #b81b1b;
  font-family: Montserrat, var(--default-font-family);
  font-size: calc(10 * var(--rpx));
  font-weight: 600;
  line-height: calc(12 * var(--rpx));
  text-align: left;
  white-space: nowrap;
  z-index: 65;
}
.flex-row-15 {
  position: relative;
  width: calc(375 * var(--rpx));
  height: calc(32 * var(--rpx));
  margin: calc(25 * var(--rpx)) 0 0 calc(34 * var(--rpx));
  z-index: 31;
}
.eth-16 {
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
  z-index: 27;
}
.dot-17 {
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
  z-index: 28;
}
.picture-eth-18 {
  position: absolute;
  top: calc(1 * var(--rpx));
  right: calc(345 * var(--rpx));
  bottom: calc(1 * var(--rpx));
  left: 0;
  background: url(../assets/images/bff5a11e-069f-41ea-8ee4-33541da86a50.png)
    no-repeat center;
  background-size: cover;
  z-index: 26;
  overflow: hidden;
  border-radius: calc(17 * var(--rpx));
}
.dollar-sign {
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
  z-index: 29;
}
.percentage-up {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  position: absolute;
  height: calc(12 * var(--rpx));
  top: calc(20 * var(--rpx));
  left: calc(92 * var(--rpx));
  color: #26de5b;
  font-family: Montserrat, var(--default-font-family);
  font-size: calc(10 * var(--rpx));
  font-weight: 600;
  line-height: calc(12 * var(--rpx));
  text-align: left;
  white-space: nowrap;
  z-index: 31;
}
.dollar-amount {
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
  z-index: 30;
}
.flex-row-a {
  position: relative;
  width: calc(365 * var(--rpx));
  height: calc(32 * var(--rpx));
  margin: calc(25 * var(--rpx)) 0 0 calc(34 * var(--rpx));
  z-index: 52;
}
.usdt-19 {
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
  z-index: 47;
}
.usdt-amount {
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
  z-index: 48;
}
.picture-type {
  position: absolute;
  top: calc(1 * var(--rpx));
  right: calc(335 * var(--rpx));
  bottom: calc(1 * var(--rpx));
  left: 0;
  background: url(../assets/images/911a9753-1bdc-4363-84e6-e24f5f5b55e1.png)
    no-repeat center;
  background-size: cover;
  z-index: 52;
  overflow: hidden;
  border-radius: calc(17 * var(--rpx));
}
.dollar-sign-1a {
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
  z-index: 49;
}
.percentage-up-1b {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  position: absolute;
  height: calc(12 * var(--rpx));
  top: calc(20 * var(--rpx));
  left: calc(82 * var(--rpx));
  color: #26de5b;
  font-family: Montserrat, var(--default-font-family);
  font-size: calc(10 * var(--rpx));
  font-weight: 600;
  line-height: calc(12 * var(--rpx));
  text-align: left;
  white-space: nowrap;
  z-index: 51;
}
.dollar-amount-1c {
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
  z-index: 50;
}
.flex-row-c {
  position: relative;
  width: calc(344 * var(--rpx));
  height: calc(30 * var(--rpx));
  margin: calc(25 * var(--rpx)) 0 0 calc(34 * var(--rpx));
  z-index: 73;
}
.number-amount {
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
  z-index: 69;
}
.regroup-1d {
  position: absolute;
  top: 0;
  right: calc(257 * var(--rpx));
  bottom: 0;
  left: 0;
  z-index: 73;
}
.picture-usdc-1e {
  position: absolute;
  top: 0;
  right: calc(57 * var(--rpx));
  bottom: 0;
  left: 0;
  background: url(../assets/images/c604dc69-0d09-4cd1-b108-362b21e8357b.png)
    no-repeat center;
  background-size: cover;
  z-index: 73;
  overflow: hidden;
  border-radius: calc(17 * var(--rpx));
}
.usdc-1f {
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
  z-index: 68;
}
.flex-row-c-20 {
  position: relative;
  width: calc(296 * var(--rpx));
  height: calc(12 * var(--rpx));
  margin: calc(-10 * var(--rpx)) 0 0 calc(73 * var(--rpx));
  z-index: 72;
}
.dollar-amount-21 {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  position: absolute;
  height: calc(12 * var(--rpx));
  top: 0;
  left: calc(262 * var(--rpx));
  color: #545454;
  font-family: Montserrat, var(--default-font-family);
  font-size: calc(10 * var(--rpx));
  font-weight: 600;
  line-height: calc(12 * var(--rpx));
  text-align: left;
  white-space: nowrap;
  z-index: 71;
}
.regroup-22 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  width: calc(80 * var(--rpx));
  height: calc(12 * var(--rpx));
  top: 0;
  left: 0;
  z-index: 72;
}
.dollar-sign-23 {
  flex-shrink: 0;
  position: relative;
  height: calc(12 * var(--rpx));
  color: #545454;
  font-family: Montserrat, var(--default-font-family);
  font-size: calc(10 * var(--rpx));
  font-weight: 600;
  line-height: calc(12 * var(--rpx));
  text-align: left;
  white-space: nowrap;
  z-index: 70;
}
.percentage-down {
  flex-shrink: 0;
  position: relative;
  height: calc(12 * var(--rpx));
  color: #b81b1b;
  font-family: Montserrat, var(--default-font-family);
  font-size: calc(10 * var(--rpx));
  font-weight: 600;
  line-height: calc(12 * var(--rpx));
  text-align: left;
  white-space: nowrap;
  z-index: 72;
}

</style>
