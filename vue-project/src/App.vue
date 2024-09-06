
<template>
    <div v-if="homePageIsOn" class="backGround">
        <div id="logo" class="logoTaiXiu" style="left: 10%;" @click="taiXiuIsOn = true; logoClick()">TX</div>
        <div id="logo" class="logoBauCua" style="left: 20%;" @click="bauCuaIsOn = true; logoClick()">BC</div>
        <div id="logo" class="logoBlackJack" style="left: 30%;" @click="BlackJackIsOn = true; logoClick()">BJ</div>
        <div id="logo" class="logoXocDia" style="left: 40%;" @click="xocDiaIsOn = true; logoClick()">XD</div>
        <div id="logo" class="logoBaccarat" style="left: 50%;" @click="BaccaratIsOn = true; logoClick()">BA</div>
        <div id="logo" class="logoRoulette" style="left: 60%;" @click="RouletteIsOn = true; logoClick()">RO</div>
    </div>
    <Taixiu v-if="taiXiuIsOn" @send-data-fromTaiXiu="receiveDataFromTaiXiu"/>
    <BauCua v-if="bauCuaIsOn" @send-data-fromBauCua="receiveDataFromBauCua"/>
    <BlackJack v-if="BlackJackIsOn" @send-data-fromBlackJack="receiveDataFromBlackJack"/>  
    <xocDia v-if="xocDiaIsOn" @send-data-fromXocDia="receiveDataFromXocDia"/>
    <Baccarat v-if="BaccaratIsOn" @send-data-fromBaccarat="receiveDataFromBaccarat"/>
    <Roulette v-if="RouletteIsOn" @send-data-fromRoulette="receiveDataFromRoulette"/>
    <DogAnimation v-if="DogAnimationIsON"/>
</template>


<script>
    import Taixiu from './taiXiu.vue';
    import BauCua from './bauCua.vue';
    import BlackJack from './blackJack.vue';
    import xocDia from './xocDia.vue';
    import Baccarat from './Baccarat.vue';
    import Roulette from './Roulette.vue';
    import DogAnimation from './dogAnimation.vue'
    export default {
        data() {
            return {
                taiXiuIsOn: false,
                bauCuaIsOn: false,
                BlackJackIsOn: false,
                xocDiaIsOn: false,
                BaccaratIsOn: false,
                RouletteIsOn: false,
                DogAnimationIsON: true,
                logo: null,
                homePageIsOn: true,
            }
        },
        methods: {
            receiveDataFromTaiXiu(data) {
                this.taiXiuIsOn = data
                this.DogAnimationIsON = true
                this.homePageIsOn = true
            },
            receiveDataFromBauCua(data) {
                this.bauCuaIsOn = data
                this.DogAnimationIsON = true
                this.homePageIsOn = true
            },
            receiveDataFromBlackJack(data) {
                this.BlackJackIsOn = data
                this.DogAnimationIsON = true
                this.homePageIsOn = true
            },
            receiveDataFromXocDia(data) {
                this.xocDiaIsOn = data
                this.DogAnimationIsON = true
                this.homePageIsOn = true
            },
            receiveDataFromBaccarat(data) {
                this.BaccaratIsOn = data
                this.DogAnimationIsON = true
                this.homePageIsOn = true
            },
            receiveDataFromRoulette(data) {
                this.RouletteIsOn = data
                this.DogAnimationIsON = true
                this.homePageIsOn = true
            },
            logoClick() {
                this.DogAnimationIsON = false
                this.homePageIsOn = false
            }
        },
        components: {
            Taixiu,
            BauCua,
            BlackJack,
            xocDia,
            Baccarat,
            Roulette,
            DogAnimation,
        }, 
        mounted() {
            this.logo = document.querySelectorAll('#logo')
        }
    }
</script>

<style scoped>
    .backGround {
        display: block;
        background-color: #f9f9f9;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0px;
        left: 0px;
    }
    .logoTaiXiu,.logoBauCua, .logoBlackJack, .logoXocDia, .logoBaccarat, .logoRoulette {
        cursor: pointer;
        user-select: none;
        display: block;
        height: 100px;
        width: 100px;
        background-color: #f9f9f9;
        border: 0px, black, solid;
        border-radius: 5px;
        position: absolute;
        top: 50px;
        font-size: 70px;
        text-align: center;
    }
    .logoTaiXiu:hover,.logoBauCua:hover, .logoBlackJack:hover, .logoXocDia:hover, .logoBaccarat:hover, .logoRoulette:hover {
        border: 0px, black, solid;
        border-radius: 5px;
        box-shadow: 12px 12px 12px rgba(0, 0, 0, 0.1),
        -10px -10px 10px white
    }
</style>
