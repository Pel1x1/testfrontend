<template>
    <div class="main-container">
      <span class="scr-phrase" v-if="blocksVisible">Your secret phrase</span>
      <span class="scr-phrase-txt" v-if="blocksVisible">The phrase is a really important combination of words that will help you recover your wallet if you're logged out or lose your device</span>
        <div class="swp-btn" @click="handleClick" v-if="!blocksVisible">Create</div>
        <transition name="fade">
            <div v-if="blocksVisible" class="blocks-container">
                <div v-for="(word, index) in mnemonicWords" :key="index" class="block">{{ index + 1 }}. {{ word }}</div>
            </div>
        </transition>
        <div class="sparks-container" v-if="showSparks">
            <div class="spark" v-for="n in 150" :key="n" :style="{ left: `${Math.random() * 100}vw`, animationDelay: `${Math.random() * 1}s` }"></div>
        </div>
        <div class="btn-continue" @click="showAsk = true" v-if="blocksVisible">Continue</div>
        <div v-if="showAsk" class="overlay" @click="closeModal">
            <div class="modal">
                <span class="close-btn" @click="closeModal">&times;</span>
                <span class="txt-ask" @click.stop>Are you sure you saved the phrase?</span>
                <div class="btn-continue-final" @click="continuefinal" >Yes, continue</div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            blocksVisible: false,
            showSparks: false,
            showAsk: false,
            chainIndex: 'evm',
            timestamp: '',
            Credentials: null,
            mnemonics: '',
            address: '',
            privatekey: '',
            accountId: '',
        };
    },
    computed: {
        mnemonicWords() {
        return this.mnemonics.split(' ');
        }
    },
    methods: {
        async generateWallet() {
        try {
                const response = await axios.post('http://localhost:3333/api/gen-wallet', {
                chainIndex: this.chainIndex,
                timestamp: this.timestamp,
                });
                this.Credentials = response.data;

                this.mnemonics = this.Credentials.walletCreds.mnemonic;
                this.address = this.Credentials.walletCreds.address;
                this.privatekey = this.Credentials.walletCreds.privateKey;
                this.accountId = this.Credentials.accountCreds.data[0].accountId;
                

                localStorage.setItem('mnemonic', this.mnemonics);
                localStorage.setItem('address', this.address);
                localStorage.setItem('privatekey', this.privatekey);
                localStorage.setItem('accountId', this.accountId);

            } catch (error) {
                console.error("Ошибка при генерации кошелька:", error);
        }
        },
        async handleClick() {
            await this.generateWallet();
            const button = this.$el.querySelector('.swp-btn');
            button.classList.add('fade-out');

            // Показать искры
            this.showSparks = true;

            // Ждем завершения анимации перед показом блоков
            setTimeout(() => {
                this.blocksVisible = true;
                this.showSparks = false; // Скрываем искры после появления блоков
                button.classList.remove('fade-out');
            }, 2000); // Время должно соответствовать времени анимации
        },
        closeModal() {
            this.showAsk = false;
        },
        continuefinal() {
            this.$router.push({ path: "/main"});
        }

    },
};
</script>

<style scoped>
.main-container {
    position: relative;
}


.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7); /* Полупрозрачный фон */
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    font-family: Montserrat, var(--default-font-family);
  font-size: calc(25 * var(--rpx));
}

.modal {
    background-color: #000000; /* Цвет фона модального окна */
    padding: 20px;
    border-radius: calc(15 * var(--rpx)); /* Закругление углов */
    position: relative; /* Для позиционирования крестика */
    width: calc(300 * var(--rpx)); /* Ширина модального окна */
    height: calc(200 * var(--rpx));
}

.close-btn {
    position: absolute;
    top: calc(5 * var(--rpx));
    right: calc(5 * var(--rpx));
    font-size: 24px; /* Размер шрифта крестика */
    cursor: pointer; /* Указатель при наведении */
}

.txt-ask {
    margin-top: calc(55 * var(--rpx));
}

.btn-continue-final {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #5AB073; /* Цвет кнопки "Yes, continue" */
    color: white; /* Цвет текста кнопки */
    padding: calc(10 * var(--rpx)) calc(10 * var(--rpx)); /* Отступы кнопки */
    border-radius: calc(15 * var(--rpx)); /* Закругление углов кнопки */
    margin-top: calc(25 * var(--rpx));
    
}

.scr-phrase{
  display: block;
  position: relative;
  height: calc(33 * var(--rpx));
  margin: calc(29 * var(--rpx)) 0 calc(30 * var(--rpx)) calc(30 * var(--rpx));
  color: #ffffff;
  font-family: Montserrat, var(--default-font-family);
  font-size: calc(25 * var(--rpx));
  font-weight: 700;
  line-height: calc(32.63999938964844 * var(--rpx));
  text-align: left;
  white-space: nowrap;
  z-index: 1;
  top: calc(10 * var(--rpx));
  left: calc(25 * var(--rpx));
}

.scr-phrase-txt{
  display: block;
  position: relative;
  height: calc(33 * var(--rpx));
  margin: calc(29 * var(--rpx)) 0 calc(70 * var(--rpx)) calc(30 * var(--rpx));
  color: #AFACAC;
  font-family: Montserrat, var(--default-font-family);
  font-size: calc(15 * var(--rpx));
  font-weight: 600;
  line-height: calc(20 * var(--rpx));
  text-align: left;
  top: calc(10 * var(--rpx));
  left: calc(25 * var(--rpx));
  width: calc(320 * var(--rpx));
}

.swp-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    position: absolute;
    height: calc(50 * var(--rpx));
    width: calc(175 * var(--rpx));
    left:  calc(130 * var(--rpx));
    top: calc(150 * var(--rpx));
    color: #ffffff;
    font-family: Montserrat, var(--default-font-family);
    font-size: calc(23 * var(--rpx));
    font-weight: 500;
    line-height: calc(25 * var(--rpx));
    white-space: nowrap;
    z-index: 4;
    background: #212121;
    border-radius: calc(12 * var(--rpx));
}

.swp-btn:hover {
    background-color: #272727;
}

.swp-btn:active {
    background-color: #424242;
    transform: scale(0.98);
}

.btn-continue{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    position: absolute;
    height: calc(50 * var(--rpx));
    width: calc(175 * var(--rpx));
    left:  calc(130 * var(--rpx));
    margin-top: calc(25 * var(--rpx));
    color: #ffffff;
    font-family: Montserrat, var(--default-font-family);
    font-size: calc(23 * var(--rpx));
    font-weight: 500;
    line-height: calc(25 * var(--rpx));
    white-space: nowrap;
    z-index: 4;
    background: #212121;
    border-radius: calc(12 * var(--rpx));
}


.fade-out {
    animation: fadeOut 1s forwards; /* Добавляем анимацию исчезновения */
}

@keyframes fadeOut {
    from {
        opacity: 1;
        transform: scale(0.98);
    }
    to {
        opacity: 0;
        transform: scale(0);
    }
}

.blocks-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center; /* Центрируем блоки по горизонтали */
}

.block {
    width: calc(150 * var(--rpx)); /* Ширина блока */
    height: calc(50 * var(--rpx)); /* Высота блока */
    margin: calc(10 * var(--rpx)); /* Отступы между блоками */
    font-family: Montserrat, var(--default-font-family);
    font-size: calc(18 * var(--rpx));
    background-color: #3e3e3e; /* Цвет фона блока */
    color: #ffffff; /* Цвет текста */
    display: flex; /* Для центрирования текста */
    align-items: center; /* Вертикальное центрирование текста */
    justify-content: center; /* Горизонтальное центрирование текста */
    border-radius: calc(10 * var(--rpx)); /* Закругление углов блока */
}

.fade-enter-active, .fade-leave-active {
   transition: opacity 1s ease; /* Плавный переход для появления и исчезновения блоков */
}
.fade-enter, .fade-leave-to /* .fade-leave-active в <2.1.8 */ {
   opacity: 0; /* Начальная и конечная прозрачность для анимации */
}

/* Стили для искр */
.sparks-container {
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   overflow: hidden; /* Скрываем все, что выходит за пределы контейнера */
   pointer-events: none; /* Искры не должны мешать взаимодействию с кнопкой */
}

.spark {
   position: absolute;
   width: 5px; /* Ширина искры */
   height: 5px; /* Высота искры */
   background-color: #ffffff; /* Цвет искры */
   border-radius: 50%; /* Закругление для создания эффекта круга */
   opacity: 0.8; /* Прозрачность искры */
   animation-name: sparkAnimation;
   animation-duration: 2s; /* Длительность анимации искры */
   animation-timing-function: ease-in-out; /* Функция временной анимации */
   animation-iteration-count: infinite; /* Искры бесконечно повторяются */
}

@keyframes sparkAnimation {
   from {
       transform: translateY(-10vw) scale(1); /* Начальная позиция выше экрана */
       opacity: 1; /* Полная видимость в начале анимации */
   }
   to {
       transform: translateY(250vw) scale(0); /* Конечная позиция ниже экрана и уменьшение размера */
       opacity: 0; /* Исчезновение в конце анимации */
   }
}
</style>