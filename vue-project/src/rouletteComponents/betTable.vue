<template>
    <div @mousemove="handleMouseMove" class="betTable h-[500px] w-[792px] fixed top-[65px] left-[600px]">
        <img @click="handleClick" class="rouletteBetTableImage h-full w-full absolute top-0 left-0" src="./rouletteImage/rouletteBetTable.png" alt="">
        <div style="top: 221px;" class="zero betBlock bg-white h-[99px] w-[40px] absolute left-[25px] opacity-0 transition-opacity duration-[0.2s]"></div>
        <div class="oneNumberBlock betBlock w-[50px] h-[65px] bg-white absolute opacity-0 transition-opacity duration-[0.2s]"></div>
        <div class="oneNumberBlock betBlock w-[50px] h-[65px] bg-white absolute opacity-0 transition-opacity duration-[0.2s]"></div>
        <div class="oneNumberBlock betBlock w-[50px] h-[65px] bg-white absolute opacity-0 transition-opacity duration-[0.2s]"></div>
        <div class="oneNumberBlock betBlock w-[50px] h-[65px] bg-white absolute opacity-0 transition-opacity duration-[0.2s]"></div>
        <div class="oneNumberBlock betBlock w-[50px] h-[65px] bg-white absolute opacity-0 transition-opacity duration-[0.2s]"></div>
        <div class="oneNumberBlock betBlock w-[50px] h-[65px] bg-white absolute opacity-0 transition-opacity duration-[0.2s]"></div>
        <div class="oneNumberBlock betBlock w-[50px] h-[65px] bg-white absolute opacity-0 transition-opacity duration-[0.2s]"></div>
        <div class="oneNumberBlock betBlock w-[50px] h-[65px] bg-white absolute opacity-0 transition-opacity duration-[0.2s]"></div>
        <div class="oneNumberBlock betBlock w-[50px] h-[65px] bg-white absolute opacity-0 transition-opacity duration-[0.2s]"></div>
        <div class="oneNumberBlock betBlock w-[50px] h-[65px] bg-white absolute opacity-0 transition-opacity duration-[0.2s]"></div>
        <div class="oneNumberBlock betBlock w-[50px] h-[65px] bg-white absolute opacity-0 transition-opacity duration-[0.2s]"></div>
        <div class="oneNumberBlock betBlock w-[50px] h-[65px] bg-white absolute opacity-0 transition-opacity duration-[0.2s]"></div>
        <div class="oneNumberBlock betBlock w-[50px] h-[65px] bg-white absolute opacity-0 transition-opacity duration-[0.2s]"></div>
        <div class="oneNumberBlock betBlock w-[50px] h-[65px] bg-white absolute opacity-0 transition-opacity duration-[0.2s]"></div>
        <div class="oneNumberBlock betBlock w-[50px] h-[65px] bg-white absolute opacity-0 transition-opacity duration-[0.2s]"></div>
        <div class="oneNumberBlock betBlock w-[50px] h-[65px] bg-white absolute opacity-0 transition-opacity duration-[0.2s]"></div>
        <div class="oneNumberBlock betBlock w-[50px] h-[65px] bg-white absolute opacity-0 transition-opacity duration-[0.2s]"></div>
        <div class="oneNumberBlock betBlock w-[50px] h-[65px] bg-white absolute opacity-0 transition-opacity duration-[0.2s]"></div>
        <div class="oneNumberBlock betBlock w-[50px] h-[65px] bg-white absolute opacity-0 transition-opacity duration-[0.2s]"></div>
        <div class="oneNumberBlock betBlock w-[50px] h-[65px] bg-white absolute opacity-0 transition-opacity duration-[0.2s]"></div>
        <div class="oneNumberBlock betBlock w-[50px] h-[65px] bg-white absolute opacity-0 transition-opacity duration-[0.2s]"></div>
        <div class="oneNumberBlock betBlock w-[50px] h-[65px] bg-white absolute opacity-0 transition-opacity duration-[0.2s]"></div>
        <div class="oneNumberBlock betBlock w-[50px] h-[65px] bg-white absolute opacity-0 transition-opacity duration-[0.2s]"></div>
        <div class="oneNumberBlock betBlock w-[50px] h-[65px] bg-white absolute opacity-0 transition-opacity duration-[0.2s]"></div>
        <div class="oneNumberBlock betBlock w-[50px] h-[65px] bg-white absolute opacity-0 transition-opacity duration-[0.2s]"></div>
        <div class="oneNumberBlock betBlock w-[50px] h-[65px] bg-white absolute opacity-0 transition-opacity duration-[0.2s]"></div>
        <div class="oneNumberBlock betBlock w-[50px] h-[65px] bg-white absolute opacity-0 transition-opacity duration-[0.2s]"></div>
        <div class="oneNumberBlock betBlock w-[50px] h-[65px] bg-white absolute opacity-0 transition-opacity duration-[0.2s]"></div>
        <div class="oneNumberBlock betBlock w-[50px] h-[65px] bg-white absolute opacity-0 transition-opacity duration-[0.2s]"></div>
        <div class="oneNumberBlock betBlock w-[50px] h-[65px] bg-white absolute opacity-0 transition-opacity duration-[0.2s]"></div>
        <div class="oneNumberBlock betBlock w-[50px] h-[65px] bg-white absolute opacity-0 transition-opacity duration-[0.2s]"></div>
        <div class="oneNumberBlock betBlock w-[50px] h-[65px] bg-white absolute opacity-0 transition-opacity duration-[0.2s]"></div>
        <div class="oneNumberBlock betBlock w-[50px] h-[65px] bg-white absolute opacity-0 transition-opacity duration-[0.2s]"></div>
        <div class="oneNumberBlock betBlock w-[50px] h-[65px] bg-white absolute opacity-0 transition-opacity duration-[0.2s]"></div>
        <div class="oneNumberBlock betBlock w-[50px] h-[65px] bg-white absolute opacity-0 transition-opacity duration-[0.2s]"></div>
        <div class="oneNumberBlock betBlock w-[50px] h-[65px] bg-white absolute opacity-0 transition-opacity duration-[0.2s]"></div>
        <div class="oneNumberBlock betBlock w-[50px] h-[65px] bg-white absolute opacity-0 transition-opacity duration-[0.2s]"></div>
        <div class="oneNumberBlock betBlock w-[50px] h-[65px] bg-white absolute opacity-0 transition-opacity duration-[0.2s]"></div>
        <div class="oneNumberBlock betBlock w-[50px] h-[65px] bg-white absolute opacity-0 transition-opacity duration-[0.2s]"></div>
        <div style="top: 51px; left: 68px;" class="oneToEightteenBlock betBlock absolute bg-white h-[64px] w-[314px] opacity-0 transition-opacity duration-[0.2s]"></div>
        <div style="top: 51px; left: 385px;" class="nineteenToThirtysixBlock betBlock absolute bg-white h-[64px] w-[314px] opacity-0 transition-opacity duration-[0.2s]"></div>
        <div style="left: 68px;" class="oneToTwelveBlock betBlock bg-white h-[65px] w-[208px] absolute top-[323px] opacity-0 transition-opacity duration-[0.2s]"></div>
        <div style="left: 279px;" class="TwelveToTwentyfourBlock betBlock bg-white h-[65px] w-[208px] absolute top-[323px] opacity-0 transition-opacity duration-[0.2s]"></div>
        <div style="left: 490px;" class="TwentyfourToThirtysixBlock betBlock bg-white h-[65px] w-[208px] absolute top-[323px] opacity-0 transition-opacity duration-[0.2s]"></div>
        <div style="left: 68px;" class="even betBlock bg-white h-[64px] w-[155px] absolute top-[392px] opacity-0 transition-opacity duration-[0.2s]"></div>
        <div style="left: 227px;" class="red betBlock bg-white h-[64px] w-[155px] absolute top-[392px] opacity-0 transition-opacity duration-[0.2s]"></div>
        <div style="left: 386px;" class="black betBlock bg-white h-[64px] w-[155px] absolute top-[392px] opacity-0 transition-opacity duration-[0.2s]"></div>
        <div style="left: 544px;" class="odd betBlock bg-white h-[64px] w-[155px] absolute top-[392px] opacity-0 transition-opacity duration-[0.2s]"></div>
        <div style="top: 119px;" class="zeroZero betBlock bg-white h-[99px] w-[40px] absolute left-[25px] opacity-0 transition-opacity duration-[0.2s]"></div>
    </div>
    <div @mousedown="handleMouseDown" @mousemove="handleMouseMove" @mouseup="handleMouseUp" class="fiveChip text-[13px] h-[20px] w-[20px] rounded-[50%] boder-[1px] border-black border-solid absolute top-[535px] text-center select-none bg-[aliceblue] left-[800px]">5</div>
    <div @mousedown="handleMouseDown" @mousemove="handleMouseMove" @mouseup="handleMouseUp" class="tenChip text-[13px] h-[20px] w-[20px] rounded-[50%] boder-[1px] border-black border-solid absolute top-[535px] text-center select-none bg-[yellow] left-[850px]">10</div>
    <div @mousedown="handleMouseDown" @mousemove="handleMouseMove" @mouseup="handleMouseUp" class="twentyChip text-[13px] h-[20px] w-[20px] rounded-[50%] boder-[1px] border-black border-solid absolute top-[535px] text-center select-none bg-[#00A6FF] left-[900px]">20</div>
    <div @mousedown="handleMouseDown" @mousemove="handleMouseMove" @mouseup="handleMouseUp" class="fiftyChip text-[13px] h-[20px] w-[20px] rounded-[50%] boder-[1px] border-black border-solid absolute top-[535px] text-center select-none bg-[#FF00AA] left-[950px]">50</div>
    <div @mousedown="handleMouseDown" @mousemove="handleMouseMove" @mouseup="handleMouseUp" class="hundredChip text-[13px] h-[20px] w-[20px] rounded-[50%] boder-[1px] border-black border-solid absolute top-[535px] text-center select-none bg-[#00C54B] left-[1000px]">100</div>
</template>
<script>
import { onMounted } from 'vue'
import { state } from '@/dataStore';
    export default {
        setup() {
            const height = 65
            const width = 50
            const top = 119
            const left = 68
            onMounted(() => {
                const oneNumberBlock = document.querySelectorAll('.oneNumberBlock')
                if (oneNumberBlock) {
                    oneNumberBlock.forEach((item, i) => {
                        let a = (i - (i % 3))/3
                        if (i % 3 === 2) {
                            item.style.top = `${top}px`
                        } else if (i % 3 === 1) {
                            item.style.top = `${top + 64 + 4}px`
                        } else {
                            item.style.top = `${top + (64 + 4)*2}px`
                        }
                        if (i < 3) {
                            item.style.left = `${left}px`
                        }
                        item.style.left = `${left + (width + 3)*a}px`
                    })
                }
            })
        },
        data() {
            return {
                fiveChip: null,
                tenChip: null,
                twentyChip: null,
                fiftyChip: null,
                hundredChip: null,
                chipList: [],
                fiveChipIsOn: false,
                tenChipIsOn: false,
                twentyChipIsOn: false,
                fiftyChipIsOn: false,
                hundredChipIsOn: false,
                chipIsOnList: [],
                mouseX: 0,
                mouseY: 0,
                newMouseX: 0,
                newMouseY: 0,
                betBlocks: null,
                lstOfMoney: [5, 10, 20, 50, 100]
            }
        },
        mounted() {
            this.fiveChip = document.querySelector('.fiveChip')
            this.tenChip = document.querySelector('.tenChip')
            this.twentyChip = document.querySelector('.twentyChip')
            this.fiftyChip = document.querySelector('.fiftyChip')
            this.hundredChip = document.querySelector('.hundredChip')
            this.chipList = [this.fiveChip, this.tenChip, this.twentyChip, this.fiftyChip, this.hundredChip]
            this.chipIsOnList = [this.fiveChipIsOn, this.tenChipIsOn, this.twentyChipIsOn, this.fiftyChipIsOn, this.hundredChipIsOn]
            this.betBlocks = document.querySelectorAll('.betBlock')
        },
        methods: {
            handleClick() {
                console.log(event.clientX, event.clientY)
            },
            isInBetBlock(x, y) {
                console.log(x, y)
                if ((y <= 100) || (y >= 535)) {
                    return false
                } else if ((x <= 615) || (x >= 1360)) {
                    return false
                } else if ((x <= 653) || (x >= 1308)) {
                    if ((y <= 169) || (y >= 397)) {
                        return false
                    }
                }
                return true
            },
            handleMouseUp() {
                for (let i in this.chipIsOnList) {
                    if (this.chipIsOnList[i]) {
                        this.betBlocks.forEach((item, index) => {
                            if (this.positionIsInSquare(this.mouseX, this.mouseY, parseInt(window.getComputedStyle(item).left) + 600, parseInt(window.getComputedStyle(item).top) + 65, parseInt(window.getComputedStyle(item).height), parseInt(window.getComputedStyle(item).width))) {
                                item.style.opacity = '0.5'
                                this.chipIsOnList[i] = false
                                state.soTien -= this.lstOfMoney[i]
                            }
                        })
                        if (this.chipIsOnList[i]) {
                            this.chipList[i].style.left = `${800 + (parseInt(i)*50)}px`
                            this.chipList[i].style.top = '535px'
                            this.chipIsOnList[i] = false
                        }
                    }
                }
            },
            handleMouseMove() {
                this.mouseX = event.clientX
                this.mouseY = event.clientY
                for (let i in this.chipIsOnList) {
                    if (this.chipIsOnList[i]) {
                        this.chipList[i].style.left = `${this.mouseX - 10}px`
                        this.chipList[i].style.top = `${this.mouseY - 10}px`
                        this.betBlocks.forEach((item, index) => {
                            if (this.positionIsInSquare(this.mouseX, this.mouseY, parseInt(window.getComputedStyle(item).left) + 600, parseInt(window.getComputedStyle(item).top) + 65, parseInt(window.getComputedStyle(item).height), parseInt(window.getComputedStyle(item).width))) {
                                item.style.opacity = '0.5'
                            } else {
                                item.style.opacity = '0'
                            }
                        })
                        if (!this.positionIsInSquare(this.mouseX, this.mouseY, 600, 65, 500, 792)) {
                            this.chipList[i].style.left = `${800 + (parseInt(i)*50)}px`
                            this.chipList[i].style.top = '535px'
                            this.chipIsOnList[i] = false
                        }
                    }
                }
            },
            positionIsInSquare(Px, Py, SQx, SQy, h, w) {
                if ((Px >= SQx) && (Px <= (SQx + w))) {
                    if ((Py > SQy) && (Py <= (SQy + h))) {
                        return true
                    }
                    return false
                }
                return false
            },
            handleMouseDown() {
                this.mouseX = event.clientX
                this.mouseY = event.clientY
                let object = event.target
                for (let i in this.chipList) {
                    if (object === this.chipList[i]) {
                        this.chipIsOnList[i] = true
                        object.style.left = `${this.mouseX - 10}px`
                        object.style.top = `${this.mouseY - 10}px`
                    }
                }
            }
        },
    }
</script>