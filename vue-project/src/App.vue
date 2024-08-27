
<template>
    <div class="backGround">
        <div class="logoTaiXiu" style="left: 10%;" @click="taiXiuIsOn = true">TX</div>
        <div class="logoBauCua" style="left: 20%;" @click="bauCuaIsOn = true">BC</div>
        <div class="logoBlackJack" style="left: 30%;" @click="BlackJackIsOn = true">BJ</div>
        <div class="logoXocDia" style="left: 40%;" @click="xocDiaIsOn = true">XD</div>
    </div>
    <Taixiu v-if="taiXiuIsOn" @send-data-fromTaiXiu="receiveDataFromTaiXiu"/>
    <BauCua v-if="bauCuaIsOn" @send-data-fromBauCua="receiveDataFromBauCua"/>
    <BlackJack v-if="BlackJackIsOn" @send-data-fromBlackJack="receiveDataFromBlackJack"/>
    <xocDia v-if="xocDiaIsOn" @send-data-fromXocDia="receiveDataFromXocDia"/>
</template>


<script>
    import Taixiu from './taiXiu.vue';
    import BauCua from './bauCua.vue';
    import BlackJack from './blackJack.vue';
    import xocDia from './xocDia.vue'
    export default {
        data() {
            return {
                taiXiuIsOn: false,
                bauCuaIsOn: false,
                BlackJackIsOn: false,
                xocDiaIsOn: false,
            }
        },
        methods: {
            receiveDataFromTaiXiu(data) {
                this.taiXiuIsOn = data
            },
            receiveDataFromBauCua(data) {
                this.bauCuaIsOn = data
            },
            receiveDataFromBlackJack(data) {
                this.BlackJackIsOn = data
            },
            receiveDataFromXocDia(data) {
                this.xocDiaIsOn = data
            }
        },
        components: {
            Taixiu,
            BauCua,
            BlackJack,
            xocDia,
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
    .logoTaiXiu,.logoBauCua, .logoBlackJack, .logoXocDia {
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
    .logoTaiXiu:hover,.logoBauCua:hover, .logoBlackJack:hover, .logoXocDia:hover {
        border: 3px, black, solid;
        border-radius: 5px;
        background-color: rgb(244, 0, 0);
    }
</style>
