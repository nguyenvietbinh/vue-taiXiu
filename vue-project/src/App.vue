
<template>
    <div v-if="homePageIsOn" class="backGround font-serif bg-[#f9f9f9] w-full h-full absolute">
        <div @mouseout="handleMouseOut" @mousemove="handleMouseMove" id="logo"  class="logoBauCua hover:shadow-bs rounded-[10px] hover:translate-y-[10px] cursor-pointer select-none h-[100px] w-[100px] absolute top-[50px] text-center text-[70px] left-[20%] transition-all duration-[0.4s]" @click="bauCuaIsOn = true; logoClick()">BC</div>
        <div @mouseout="handleMouseOut" @mousemove="handleMouseMove" id="logo" class="logoTaiXiu hover:shadow-bs rounded-[10px] hover:translate-y-[10px] cursor-pointer select-none h-[100px] w-[100px] absolute top-[50px] text-center text-[70px] left-[10%] transition-all duration-[0.4s]" @click="taiXiuIsOn = true; logoClick()">TX</div>
        <div @mouseout="handleMouseOut" @mousemove="handleMouseMove" id="logo" class="logoBlackJack hover:shadow-bs rounded-[10px] hover:translate-y-[10px] cursor-pointer select-none h-[100px] w-[100px] absolute top-[50px] text-center text-[70px] left-[30%] transition-all duration-[0.4s]" @click="BlackJackIsOn = true; logoClick()">BJ</div>
        <div @mouseout="handleMouseOut" @mousemove="handleMouseMove" id="logo" class="logoXocDia hover:shadow-bs rounded-[10px] hover:translate-y-[10px] cursor-pointer select-none h-[100px] w-[100px] absolute top-[50px] text-center text-[70px] left-[40%] transition-all duration-[0.4s]" @click="xocDiaIsOn = true; logoClick()">XD</div>
        <div @mouseout="handleMouseOut" @mousemove="handleMouseMove" id="logo" class="logoBaccarat hover:shadow-bs rounded-[10px] hover:translate-y-[10px] cursor-pointer select-none h-[100px] w-[100px] absolute top-[50px] text-center text-[70px] left-[50%] transition-all duration-[0.4s]" @click="BaccaratIsOn = true; logoClick()">BA</div>
        <div @mouseout="handleMouseOut" @mousemove="handleMouseMove" id="logo" class="logoRoulette hover:shadow-bs rounded-[10px] hover:translate-y-[10px] cursor-pointer select-none h-[100px] w-[100px] absolute top-[50px] text-center text-[70px] left-[60%] transition-all duration-[0.4s]" @click="RouletteIsOn = true; logoClick()">RO</div>
        <div class="logoName transition-transform p-1 text-[#f9f9f9] bg-black m-1 rounded-[5px] font-sans opacity-[0.7] absolute hidden">Bầu Cua</div>
        <div class="logoName transition-transform p-1 text-[#f9f9f9] bg-black m-1 rounded-[5px] font-sans opacity-[0.7] absolute hidden">Tài Xỉu</div>
        <div class="logoName transition-transform p-1 text-[#f9f9f9] bg-black m-1 rounded-[5px] font-sans opacity-[0.7] absolute hidden">Blackjack</div>
        <div class="logoName transition-transform p-1 text-[#f9f9f9] bg-black m-1 rounded-[5px] font-sans opacity-[0.7] absolute hidden">Xóc Đĩa</div>
        <div class="logoName transition-transform p-1 text-[#f9f9f9] bg-black m-1 rounded-[5px] font-sans opacity-[0.7] absolute hidden">Baccarat</div>
        <div class="logoName transition-transform p-1 text-[#f9f9f9] bg-black m-1 rounded-[5px] font-sans opacity-[0.7] absolute hidden">Roulette</div>
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
                logoName: null,
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
                this.logoName.forEach(element => {
                    element.style.display = 'none'
                });
            },
            handleMouseMove() {
                this.logo = document.querySelectorAll('#logo')
                this.logo.forEach((item, index) => {
                    if (item === event.target) {
                        this.logoName[index].style.display = 'inline-block'
                        this.logoName[index].style.left = `${event.clientX + 20}px`
                        this.logoName[index].style.top = `${event.clientY + 20}px`
                    }
                });
            },
            handleMouseOut() {
                this.logo.forEach((item, index) => {
                    if (item === event.target) {
                        this.logoName[index].style.display = 'none'
                    }
                })
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
            this.logoName = document.querySelectorAll('.logoName')
        }
    }
</script>