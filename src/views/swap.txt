<template>
  <div class="main-container">
    <RouterLink class="back" to="/">
    </RouterLink>
    <span class="swap">Swap</span>
    <div class="rectangle" @click="goToSelect('pay')">
      <div class="flex-row-bc">
        <span class="send">You pay</span><span class="balance" v-if="payCurrency">Balance: {{payCurrency.balance}}</span>
      </div>
      <div class="flex-row-eb" v-if="payCurrency">
        <img :src="payCurrency.icon" alt="" class="picture-coin" />
        <span class="cryptoId">{{ payCurrency.name }}</span>
        <span class="dollar-a">${{ payCurrency.price }}</span>
          <input 
        type="text" 
        v-model="inputText" 
        placeholder='Count' 
        class="inline-address" 
        @input="validateInput"
        @click.stop
      />
      <span class="swap_in_dollar">${{ (payCurrency.price * inputText).toFixed(5) }}</span>
      </div>
    </div>

    <div class="rectangle-1" @click="goToSelect('receive')">
      <div class="flex-row-bc">
        <span class="send">You receive </span>
      </div>
      <div class="flex-row-eb" v-if="receiveCurrency">
        <img :src="receiveCurrency.icon" alt="" class="picture-coin" />
        <span class="cryptoId">{{ receiveCurrency.name }}</span>
        <span class="dollar-a">${{ receiveCurrency.price }}</span>
        <span class="zero">{{ ((payCurrency.price * inputText) / receiveCurrency.price ).toFixed(5) }}</span>
      </div>
    </div>
    <div class="goSwap">
      <button 
          :class="{ 'button-disabled': !isSwapEnabled, 'button-enabled': isSwapEnabled }"
          @click="swapCurrencies"
          :disabled="!isSwapEnabled"
        >Swap</button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {

  data() {
    return {
      inputText: '',
      errorMessage: '',
    };
  },
  computed: {
    ...mapState(['payCurrency', 'receiveCurrency']),
    isSwapEnabled() {
      return this.payCurrency && this.receiveCurrency && this.inputText;
    },
  },
  methods: {
    validateInput() {
      // Удаляем все символы, кроме цифр, запятой и точки
      const regex = /^[0-9]*[.,]?[0-9]*$/;
      
      // Проверяем вводимый текст на соответствие регулярному выражению
      if (!this.inputText.match(regex)) {
        this.errorMessage = 'Введите только цифры и запятую или точку.';
        
        // Удаляем последний введенный символ
        this.inputText = this.inputText.slice(0, -1);
        return;
      }

      // Преобразуем введенное значение в число
      const inputValue = parseFloat(this.inputText.replace(',', '.'));

      // Проверяем, не превышает ли значение баланс
      if (inputValue > this.payCurrency.balance) {
        this.errorMessage = `Сумма не может превышать ${this.payCurrency.balance}.`;
        this.inputText = this.payCurrency.balance.toString(); // Устанавливаем максимальное значение
      } else {
        this.errorMessage = ''; 
      }
    },
    goToSelect(type) {
      this.$router.push({ name: "swap_select_crypto", params: { type } });
    },

    swapCurrencies() {
      if (this.isSwapEnabled) {
        this.$router.push({
          name: "confirm_swap_page",
          query: {
            payCurrency: JSON.stringify(this.payCurrency),
            receiveCurrency: JSON.stringify(this.receiveCurrency),
            amount: parseFloat(this.inputText)
          },
        });
      }
    },
  },
};
</script>

<style scoped>
.swap_in_dollar{
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    position: absolute;
    height: calc(15 * var(--rpx));
    top: calc(20 * var(--rpx));
    left: calc(252 * var(--rpx));
    color: #545454;
    font-family: Montserrat, var(--default-font-family);
    font-size: calc(10 * var(--rpx));
    font-weight: 600;
    line-height: calc(19.503999710083008 * var(--rpx));
    text-align: left;
    white-space: nowrap;
    z-index: 10;
    overflow: hidden;
}
.dollar-a {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  position: absolute;
  height: calc(12 * var(--rpx));
  top: calc(24.5 * var(--rpx));
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

.inline-address {
    position: relative;
    width: calc(75 * var(--rpx));
    cursor: pointer;
    background: #212121;
    border-radius: calc(10 * var(--rpx));
    resize: none;
    font-size: calc(14 * var(--rpx));
    border-width: 0px;
    overflow-wrap: break-word;
    text-align: left, center;
    line-height: calc(33 * var(--rpx));
    padding: 0; /* Убрать отступы */
    border: none; /* Убрать границу */
    color: #ffffff;
    padding-left: calc(5 * var(--rpx));

    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    position: absolute;
    height: calc(20 * var(--rpx));
    top: calc(0 * var(--rpx));
    left: calc(246.5 * var(--rpx));
    color: #ffffff;
    font-family: Montserrat, var(--default-font-family);
    font-size: calc(16 * var(--rpx));
    font-weight: 600;
    line-height: calc(19.503999710083008 * var(--rpx));
    text-align: left;
    white-space: nowrap;
    z-index: 10;
    overflow: hidden;
}

.button-enabled {
  background-color: #4D9D44; /* Зеленый цвет для активной кнопки */
  color: #ffffff;
}

.button-disabled {
  background-color: #212121; /* Серый цвет для неактивной кнопки */
  color: #666; /* Более светлый цвет текста */
}

button {
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  width: calc(115 * var(--rpx));
  height: calc(57 * var(--rpx));
  border-radius: calc(12 * var(--rpx));
  font-family: Montserrat, var(--default-font-family);
  font-size: calc(30 * var(--rpx));
}
.goSwap {
  display: flex; 
  justify-content: center;
  margin-top: calc(33 * var(--rpx)); 
}

.flex-row-ebx {
  flex-shrink: 0;
  position: relative;
  width: calc(124 * var(--rpx));
  height: calc(57.4359130859375 * var(--rpx));
  background: #1e1e1e;
  z-index: 79;
  border-radius: calc(12 * var(--rpx));
}
.flex-row-ebx:hover {
  background-color: #272727;
}
.flex-row-ebx:active {
  background-color: #424242;
  transform: scale(0.98);
}

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
  top: calc(10 * var(--rpx));
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
}
.rectangle {
  position: relative;
  width: calc(380 * var(--rpx));
  height: calc(100 * var(--rpx));
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
.balance {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  height: calc(25 * var(--rpx));
  top: 0;
  left: calc(251 * var(--rpx));
  color: #717171;
  font-family: Montserrat, var(--default-font-family);
  font-size: calc(15 * var(--rpx));
  font-weight: 500;
  line-height: calc(25 * var(--rpx));
  text-align: left;
  white-space: nowrap;
  z-index: 7;
}
.send {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  height: calc(25 * var(--rpx));
  top: calc(0 * var(--rpx));
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
.flex-row-eb {
  position: relative;
  width: calc(330 * var(--rpx));
  height: calc(25 * var(--rpx));
  margin: calc(2 * var(--rpx)) 0 0 calc(20 * var(--rpx));
  z-index: 10;
}
.picture-eth-png {
  position: absolute;
  top: 0;
  right: calc(305 * var(--rpx));
  bottom: 0;
  left: 0;
  background: url(../assets/images/df512e4c-ccce-4542-96a8-e590a4aa3a04.png)
    no-repeat center;
  background-size: cover;
  z-index: 8;
  overflow: hidden;
  border-radius: calc(17 * var(--rpx));
}
.picture-png {
  top: 0;
  width: calc(20 * var(--rpx));
  height: calc(20 * var(--rpx));
  right: calc(305 * var(--rpx));
  bottom: 0;
  left: 0;
  z-index: 8;
  overflow: hidden;
  border-radius: calc(17 * var(--rpx));
}

.eth {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  position: absolute;
  height: calc(20 * var(--rpx));
  top: calc(3 * var(--rpx));
  left: calc(30 * var(--rpx));
  color: #ffffff;
  font-family: Montserrat, var(--default-font-family);
  font-size: calc(16 * var(--rpx));
  font-weight: 600;
  line-height: calc(19.503999710083008 * var(--rpx));
  text-align: left;
  white-space: nowrap;
  z-index: 9;
}
.eth1 {
  color: #ffffff;
  font-family: Montserrat, var(--default-font-family);
  font-size: calc(16 * var(--rpx));
}
.zero {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  position: absolute;
  height: calc(20 * var(--rpx));
  top: calc(3 * var(--rpx));
  left: calc(253 * var(--rpx));
  color: #ffffff;
  font-family: Montserrat, var(--default-font-family);
  font-size: calc(16 * var(--rpx));
  font-weight: 600;
  line-height: calc(19.503999710083008 * var(--rpx));
  text-align: left;
  white-space: nowrap;
  z-index: 10;
}
.rectangle-1 {
  position: relative;
  width: calc(380 * var(--rpx));
  height: calc(100 * var(--rpx));
  margin: calc(33 * var(--rpx)) 0 0 calc(25 * var(--rpx));
  background: #212121;
  z-index: 3;
  overflow:hidden;

  border-radius: calc(12 * var(--rpx) * 1.5); 

}
.receive {
  display: flex;
  position: absolute;
  height: calc(30 * var(--rpx));
  margin: calc(13 * var(--rpx)) 0 0 calc(20 * var(--rpx));
  color: #717171;
  font-family: Montserrat, var(--default-font-family);
  font-size: calc(15 * var(--rpx));
  font-weight: 500;
  line-height: calc(30 * var(--rpx));
  text-align: left;
  white-space: nowrap;
  z-index: 5;



  align-items: center;
  justify-content: flex-start;
  
  height: calc(30 * var(--rpx));
  top: calc(3 * var(--rpx));
  left: 0;
  color: #717171;
  font-family: Montserrat, var(--default-font-family);
  font-size: calc(15 * var(--rpx));
  font-weight: 500;
  line-height: calc(30 * var(--rpx));
  text-align: left;
  white-space: nowrap;
  z-index: 4;
}
.flex-row-da {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  width: calc(329 * var(--rpx));
  height: calc(30 * var(--rpx));
  margin: calc(7 * var(--rpx)) 0 0 calc(21 * var(--rpx));
  z-index: 11;


  position: relative;
  width: calc(330 * var(--rpx));
  height: calc(25 * var(--rpx));
  margin: calc(2 * var(--rpx)) 0 0 calc(20 * var(--rpx));
  z-index: 11;
}
.select {
  flex-shrink: 0;
  position: relative;
  height: calc(30 * var(--rpx));
  color: #ffffff;
  font-family: Montserrat, var(--default-font-family);
  font-size: calc(16 * var(--rpx));
  font-weight: 500;
  line-height: calc(30 * var(--rpx));
  text-align: left;
  white-space: nowrap;
  z-index: 6;
}
.zero-2 {
  flex-shrink: 0;
  position: relative;
  height: calc(20 * var(--rpx));
  color: #ffffff;
  font-family: Montserrat, var(--default-font-family);
  font-size: calc(16 * var(--rpx));
  font-weight: 600;
  line-height: calc(19.503999710083008 * var(--rpx));
  text-align: left;
  white-space: nowrap;
  z-index: 11;
}

</style>