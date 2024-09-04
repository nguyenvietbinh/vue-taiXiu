<template>
    <div @mousemove="handleMouseMove" class="betTable">
        <img @click="handleClick" class="rouletteBetTableImage" src="./rouletteImage/rouletteBetTable.png" alt="">
        <div @mouseup="" style="top: 51px; left: 68px;" class="oneToEightteenBlock"></div>
        <div style="top: 51px; left: 385px;" class="nineteenToThirtysixBlock"></div>
        <div style="left: 68px;" class="oneToTwelveBlock"></div>
        <div style="left: 279px;" class="TwelveToTwentyfourBlock"></div>
        <div style="left: 490px;" class="TwentyfourToThirtysixBlock"></div>
        <div style="left: 68px;" class="even"></div>
        <div style="left: 227px;" class="red"></div>
        <div style="left: 386px;" class="black"></div>
        <div style="left: 544px;" class="odd"></div>
        <div style="top: 221px;" class="zero"></div>
        <div style="top: 119px;" class="zeroZero"></div>
        <div id="oneNumberBlock">1</div>
        <div id="oneNumberBlock">2</div>
        <div id="oneNumberBlock">3</div>
        <div id="oneNumberBlock">4</div>
        <div id="oneNumberBlock">5</div>
        <div id="oneNumberBlock">6</div>
        <div id="oneNumberBlock">7</div>
        <div id="oneNumberBlock"></div>
        <div id="oneNumberBlock"></div>
        <div id="oneNumberBlock"></div>
        <div id="oneNumberBlock"></div>
        <div id="oneNumberBlock"></div>
        <div id="oneNumberBlock"></div>
        <div id="oneNumberBlock"></div>
        <div id="oneNumberBlock"></div>
        <div id="oneNumberBlock"></div>
        <div id="oneNumberBlock"></div>
        <div id="oneNumberBlock"></div>
        <div id="oneNumberBlock"></div>
        <div id="oneNumberBlock"></div>
        <div id="oneNumberBlock"></div>
        <div id="oneNumberBlock"></div>
        <div id="oneNumberBlock"></div>
        <div id="oneNumberBlock"></div>
        <div id="oneNumberBlock"></div>
        <div id="oneNumberBlock"></div>
        <div id="oneNumberBlock"></div>
        <div id="oneNumberBlock"></div>
        <div id="oneNumberBlock"></div>
        <div id="oneNumberBlock"></div>
        <div id="oneNumberBlock"></div>
        <div id="oneNumberBlock"></div>
        <div id="oneNumberBlock"></div>
        <div id="oneNumberBlock"></div>
        <div id="oneNumberBlock"></div>
        <div id="oneNumberBlock"></div>
        <div id="oneNumberBlock"></div>
        <div id="oneNumberBlock"></div>
        <div id="oneNumberBlock"></div>
    </div>
    <div @mousedown="handleMouseDown" @mousemove="handleMouseMove" @mouseup="handleMouseUp" class="fiveChip">5</div>
    <div @mousedown="handleMouseDown" @mousemove="handleMouseMove" @mouseup="handleMouseUp" class="tenChip">10</div>
    <div @mousedown="handleMouseDown" @mousemove="handleMouseMove" @mouseup="handleMouseUp" class="twentyChip">20</div>
    <div @mousedown="handleMouseDown" @mousemove="handleMouseMove" @mouseup="handleMouseUp" class="fiftyChip">50</div>
    <div @mousedown="handleMouseDown" @mousemove="handleMouseMove" @mouseup="handleMouseUp" class="hundredChip">100</div>
</template>

<script>
import { onMounted } from 'vue'
    export default {
        setup() {
            const height = 65
            const width = 50
            const top = 119
            const left = 68
            onMounted(() => {
                const oneNumberBlock = document.querySelectorAll('#oneNumberBlock')
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
                        this.chipIsOnList[i] = false
                        if (!this.isInBetBlock(this.mouseX, this.mouseY)) {
                            this.chipList[i].style.left = `${800 + (parseInt(i)*50)}px`
                            this.chipList[i].style.top = '535px'
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
                        if ((this.mouseX <= 600) || (this.mouseX >= 1392)) {
                            this.chipIsOnList[i] = false
                            this.chipList[i].style.left = `${800 + (parseInt(i)*50)}px`
                            this.chipList[i].style.top = '535px'
                        } else if ((this.mouseY <= 65) || (this.mouseY >= 565)) {
                            this.chipIsOnList[i] = false
                            this.chipList[i].style.left = `${800 + (parseInt(i)*50)}px`
                            this.chipList[i].style.top = '535px'
                        }
                    }
                }
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

<style scoped>
    .betTable {
        height: 500px;
        width: 792px;
        position: fixed;
        left: 600px;
        top: 65px;
    }
    .rouletteBetTableImage {
        -webkit-user-drag: none;
        position: absolute;
        height: 500px;
        width: 792px;
        top: 0px;
        left: 0px;
        user-select: none;
    }
    .oneToEightteenBlock, .nineteenToThirtysixBlock {
        display: block;
        position: absolute;
        background-color: white;
        height: 64px;
        width: 314px;
        opacity: 0;
        transition: opacity 0.2s;
    }
    .oneToEightteenBlock:hover, .nineteenToThirtysixBlock:hover, .oneToTwelveBlock:hover, .TwelveToTwentyfourBlock:hover, .TwentyfourToThirtysixBlock:hover, .even:hover, .red:hover, .black:hover, .odd:hover, #oneNumberBlock:hover, .zero:hover, .zeroZero:hover {
        opacity: 0.5;
    }
    .oneToTwelveBlock, .TwelveToTwentyfourBlock, .TwentyfourToThirtysixBlock {
        display: block;
        background-color: white;
        height: 65px;
        width: 208px;
        position: absolute;
        top: 323px;
        opacity: 0;
        transition: opacity 0.2s;
    }
    .even, .red, .black, .odd {
        display: block;
        background-color: white;
        height: 64px;
        width: 155px;
        position: absolute;
        top: 392px;
        opacity: 0;
        transition: opacity 0.2s;
    }
    .zero, .zeroZero {
        display: block;
        background-color: white;
        height: 99px;
        width: 40px;
        position: absolute;
        left: 25px;
        opacity: 0;
        transition: opacity 0.2s;
    }
    #oneNumberBlock {
        display: block;
        width: 50px;
        height: 65px;
        background-color: white;
        position: absolute;
        opacity: 0;
        transition: opacity 0.2s;
    }
    .chipBar {
        position: absolute;
        bottom: 10px;
    }
    .fiveChip {
        display: block;
        background-color: aliceblue;
        height: 20px;
        width: 20px;
        border: 1px black solid;
        border-radius: 50%;
        position: absolute;
        left: 800px;
        top: 535px;
        text-align: center;
        user-select: none;
    }
    .tenChip {
        display: block;
        background-color: yellow;
        height: 20px;
        width: 20px;
        border: 1px black solid;
        border-radius: 50%;
        position: absolute;
        left: 850px;
        top: 535px;
        text-align: center;
        user-select: none;
    }
    .twentyChip {
        display: block;
        background-color: rgb(0, 166, 255);
        height: 20px;
        width: 20px;
        border: 1px black solid;
        border-radius: 50%;
        position: absolute;
        left: 900px;
        top: 535px;
        text-align: center;
        user-select: none;
    }
    .fiftyChip {
        display: block;
        background-color: rgb(255, 0, 170);
        height: 20px;
        width: 20px;
        border: 1px black solid;
        border-radius: 50%;
        position: absolute;
        left: 950px;
        top: 535px;
        text-align: center;
        user-select: none;
    }
    .hundredChip {
        font-size: 14px;
        display: block;
        background-color: rgb(0, 197, 75);
        height: 20px;
        width: 20px;
        border: 1px black solid;
        border-radius: 50%;
        position: absolute;
        left: 1000px;
        top: 535px;
        text-align: center;
        user-select: none;
    }
</style>