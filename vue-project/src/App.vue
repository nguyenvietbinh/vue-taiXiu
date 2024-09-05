
<template>
    <div class="backGround">
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
    <Animation v-if="AnimationIsOn"/>
    <DogAnimation v-if="DogAnimationIsON"/>
</template>


<script>
    import Taixiu from './taiXiu.vue';
    import BauCua from './bauCua.vue';
    import BlackJack from './blackJack.vue';
    import xocDia from './xocDia.vue';
    import Baccarat from './Baccarat.vue';
    import Roulette from './Roulette.vue';
    import Animation from './Animation.vue';
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
                AnimationIsOn: false,
                DogAnimationIsON: true,
                logo: null,
            }
        },
        methods: {
            receiveDataFromTaiXiu(data) {
                this.taiXiuIsOn = data
                this.AnimationIsOn = true
                this.DogAnimationIsON = true
            },
            receiveDataFromBauCua(data) {
                this.bauCuaIsOn = data
                this.AnimationIsOn = true
                this.DogAnimationIsON = true
            },
            receiveDataFromBlackJack(data) {
                this.BlackJackIsOn = data
                this.AnimationIsOn = true
                this.DogAnimationIsON = true
            },
            receiveDataFromXocDia(data) {
                this.xocDiaIsOn = data
                this.AnimationIsOn = true
                this.DogAnimationIsON = true
            },
            receiveDataFromBaccarat(data) {
                this.BaccaratIsOn = data
                this.AnimationIsOn = true
                this.DogAnimationIsON = true
            },
            receiveDataFromRoulette(data) {
                this.RouletteIsOn = data
                this.AnimationIsOn = true
                this.DogAnimationIsON = true
            },
            logoClick() {
                this.AnimationIsOn = false
                this.DogAnimationIsON = false
            }
        },
        components: {
            Taixiu,
            BauCua,
            BlackJack,
            xocDia,
            Baccarat,
            Roulette,
            Animation,
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
        background-color: rgb(157, 29, 29);
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
        background-color: rgb(255, 0, 0);
        border: 2px, black, solid;
        border-radius: 5px;
        position: absolute;
        top: 50px;
        font-size: 70px;
        text-align: center;
    }
    .logoTaiXiu:hover,.logoBauCua:hover, .logoBlackJack:hover, .logoXocDia:hover, .logoBaccarat:hover, .logoRoulette:hover {
        border: 3px, black, solid;
        border-radius: 5px;
        background-color: rgb(244, 0, 0);
    }
</style>
