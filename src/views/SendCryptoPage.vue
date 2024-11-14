<template>
  <div class="main-container">
    <div class="flex-row-ef">
      <div class="group"></div>
      <RouterLink class="back" to="/select_crypto_to_send"></RouterLink>
    </div>
    <span class="receiving-address">Receiving address</span>
    <span class="enter-wallet-name">Enter wallet</span>
    <input v-model="inputText" placeholder='Input wallet address' class="inline-address"></input>
    <button class="rectangle" @click="pasteFromClipboard">
      <span class="paste">Paste</span>
      <div class="vector"></div>
    </button>
    <div class="line"></div>
    <div class="flex-row-a">
      <div class="regroup">
        <img :src="imageUrl" alt="coin" class="picture-eth">
        <span class="eth">{{currency}}</span>
      </div>
      <span class="text-5">{{balancecrypto}}</span>
    </div>
    <button class="Button-2"><span class="text-6">Send</span></button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currency: this.$route.query.currency,
      balancecrypto: this.$route.query.balancecrypto,
      imageUrl: this.$route.query.imageUrl,
      fullText: '',
      inputText: ''
    };
  },
  computed: {
    displayText: {
      get() {
        return this.formatText(this.fullText);
      },
      set(value) {
        this.fullText = value;
        this.inputText = this.formatText(value);
      }
    }
  },
  methods: {
    async pasteFromClipboard() {
      try {
        const text = await navigator.clipboard.readText();
        this.fullText = text; // Сохраняем полный текст
        console.log(this.fullText);
        this.inputText = this.formatText(text); // Обновляем отображаемый текст
      } catch (err) {
        console.error('Не удалось получить текст из буфера обмена: ', err);
      }
    },
    formatText(text) {
      const maxLength = 25;
      if (text.length > maxLength) {
        const start = text.substring(0, 25);
        const end = text.substring(text.length - 3);
        return `${start}...${end}`;
      }
      return text;
    }
  }
}

</script>



<style scoped>


.flex-row-ef {
  position: relative;
  width: calc(366 * var(--rpx));
  height: calc(27 * var(--rpx));
  margin: calc(27 * var(--rpx)) 0 0 calc(30 * var(--rpx));
  z-index: 13;
}

.group {
  position: absolute;
  width: 8.74%;
  height: 100%;
  top: 0;
  left: 91.26%;
  background: url(../assets/images/12fb4a84-8dc9-459a-8ca6-8d1fb43e8aa1.png)
    no-repeat center;
  background-size: 100% 100%;
  z-index: 3;
}
.back {
  position: absolute;
  width: calc(10 * var(--rpx));
  height: calc(20 * var(--rpx));
  left: calc(1 * var(--rpx));
  background: url(../assets/images/80c6e76d-d2e0-4f0a-bb6e-2865912be671.png) no-repeat center;
  background-size: 100% 100%;
  z-index: 1;
}
.receiving-address {
  display: block;
  position: relative;
  height: calc(33 * var(--rpx));
  margin: calc(16 * var(--rpx)) 0 0 calc(30 * var(--rpx));
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
.enter-wallet-name {
  display: block;
  position: relative;
  height: calc(26 * var(--rpx));
  margin: calc(5 * var(--rpx)) 0 0 calc(30 * var(--rpx));
  color: #6d6d6d;
  font-family: Montserrat, var(--default-font-family);
  font-size: calc(15 * var(--rpx));
  font-weight: 700;
  line-height: calc(26 * var(--rpx));
  text-align: left;
  white-space: nowrap;
  z-index: 2;
}
.rectangle {
  position: relative;
  width: calc(93 * var(--rpx));
  height: calc(33 * var(--rpx));
  margin: calc(15 * var(--rpx)) 0 0 calc(297 * var(--rpx));
  cursor: pointer;
  background: #1e1e1e;
  border: none;
  z-index: 5;
  border-radius: calc(34 * var(--rpx));
}


.inline-address {
    position: relative;
    top: calc(49 * var(--rpx));
    left: calc(30 * var(--rpx));
    width: calc(250 * var(--rpx));
    height: calc(33 * var(--rpx));
    cursor: pointer;
    background: #1e1e1e;
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
}


.rectangle:active {
  background-color: #424242;
  transform: scale(0.98);
}
.paste {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  position: absolute;
  height: calc(17 * var(--rpx));
  top: calc(8 * var(--rpx));
  left: calc(34 * var(--rpx));
  color: #ffffff;
  font-family: Montserrat, var(--default-font-family);
  font-size: calc(14 * var(--rpx));
  font-weight: 700;
  line-height: calc(17 * var(--rpx));
  text-align: left;
  white-space: nowrap;
  z-index: 9;
}
.vector {
  position: absolute;
  width: 13.98%;
  height: 39.39%;
  top: 30.3%;
  left: 18.28%;
  background: url(../assets/images/c4cefaf4-8e39-4fe5-9730-6820b5441533.png)
    no-repeat center;
  background-size: 100% 100%;
  z-index: 8;
}
.line {
  position: relative;
  width: calc(360 * var(--rpx));
  height: calc(3 * var(--rpx));
  margin: calc(13.5 * var(--rpx)) 0 0 calc(29.99951171875 * var(--rpx));
  background: #1E1E1E;
  z-index: 4;
}
.flex-row-a {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  width: calc(360 * var(--rpx));
  height: calc(30 * var(--rpx));
  margin: calc(12.5 * var(--rpx)) 0 0 calc(30 * var(--rpx));
  z-index: 12;
}
.regroup {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
  position: relative;
  width: calc(82 * var(--rpx));
  height: calc(30 * var(--rpx));
  z-index: 11;
}
.picture-eth {
  flex-shrink: 0;
  position: relative;
  width: calc(30 * var(--rpx));
  height: calc(30 * var(--rpx));
  z-index: 10;
  overflow: hidden;
  border-radius: calc(17 * var(--rpx));
}
.eth {
  flex-shrink: 0;
  position: relative;
  height: calc(24 * var(--rpx));
  color: #ffffff;
  font-family: Montserrat, var(--default-font-family);
  font-size: calc(20 * var(--rpx));
  font-weight: 600;
  line-height: calc(24 * var(--rpx));
  text-align: left;
  white-space: nowrap;
  z-index: 11;
}
.text-5 {
  flex-shrink: 0;
  position: relative;
  height: calc(24 * var(--rpx));
  color: #ffffff;
  font-family: Montserrat, var(--default-font-family);
  font-size: calc(20 * var(--rpx));
  font-weight: 600;
  line-height: calc(24 * var(--rpx));
  text-align: left;
  white-space: nowrap;
  z-index: 12;
}
.Button-2 {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: calc(360 * var(--rpx));
  height: calc(55 * var(--rpx));
  margin: calc(40 * var(--rpx)) 0 0 calc(30 * var(--rpx));
  cursor: pointer;
  background: #1e1e1e;
  border: none;
  z-index: 7;
  border-radius: calc(34 * var(--rpx));
}
.text-6 {
  flex-shrink: 0;
  position: relative;
  height: calc(33 * var(--rpx));
  color: #ffffff;
  font-family: Montserrat, var(--default-font-family);
  font-size: calc(24 * var(--rpx));
  font-weight: 700;
  line-height: calc(33 * var(--rpx));
  text-align: left;
  white-space: nowrap;
  z-index: 7;
}
</style>
