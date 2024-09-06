<template>
    <div class="BAbackGround">
        <div @click="sendData" class="out"><==</div>
        <div class="sotien">{{ state.soTien }}</div>
        <div style="top: 10%;" class="botBar">
            <div style="left: 38px;" class="frame" id="botBar-frame1"></div>
            <div style="left: 238px;" class="frame" id="botBar-frame2"></div>
            <div style="left: 438px;" class="frame" id="botBar-frame3"></div>
            <div style="left: 638px;" class="frame" id="botBar-frame4"></div>
            <div style="left: 838px;" class="frame" id="botBar-frame5"></div>
            <div style="left: 1038px;" class="frame" id="botBar-frame6"></div>
        </div>
        <div style="bottom: 10%;" class="playerBar">
            <div style="left: 38px;" class="frame" id="playerBar-frame1"></div>
            <div style="left: 238px;" class="frame" id="playerBar-frame2"></div>
            <div style="left: 438px;" class="frame" id="playerBar-frame3"></div>
            <div style="left: 638px;" class="frame" id="playerBar-frame4"></div>
            <div style="left: 838px;" class="frame" id="playerBar-frame5"></div>
            <div style="left: 1038px;" class="frame" id="playerBar-frame6"></div>
        </div>
        <input style="left: calc(50% - 447px);" class="input" type="text" placeholder="Thắng">
        <input style="left: calc(50% - 150px);" class="input" type="text" placeholder="Hòa">
        <input style="left: calc(50% + 147px);" class="input" type="text" placeholder="Thua">
        <div style="left: calc(50% - 75px); top: 0%" @click="chiaBai" class="chiaBai">Chia Bài</div>
        <button style="display: none;" @click="playagain" class="playagain">PlayAgain</button>
    </div>
</template>


<script>
import { state } from './dataStore';
import { useMyFunction } from './functionsStore';
    export default {
        setup() {
            const { kiemTraTienCuoc } = useMyFunction()
            return{
                state,
                kiemTraTienCuoc,
            }
        },
        data() {
            return {
                cards: [],
                cardsDisplay: null,
                inputs: null,
                inputsValue: [],
                chiaBaiButton: null,
                outButton: null,
                playerBlindCards: 6,
                botBlindCards: 6,
                botPoint: null,
                playerPoint: null,
                ketQua: null,
                playagainButton: null,
            }
        },
        mounted() {
            this.cardsDisplay = document.querySelectorAll('.frame')
            this.inputs = document.querySelectorAll('.input')
            this.chiaBaiButton = document.querySelector('.chiaBai')
            this.outButton = document.querySelector('.out')
            this.playagainButton = document.querySelector('.playagain')
        },
        methods: {
            sendData() {
                this.$emit('send-data-fromBaccarat', false)
            },
            chiaBai() {
                this.inputsValue = []
                for (let i = 0; i < this.inputs.length; i ++) {
                    this.inputsValue.push(this.inputs[i].value)
                }
                if (this.kiemTraInputs(this.inputsValue, state.soTien)) {
                    this.botBlindCards = 6
                    this.playerBlindCards = 6
                    this.chiaBaiButton.style.display = 'none'
                    for (let i = 0; i < this.inputs.length; i ++) {
                        this.inputs[i].style.display = 'none'
                    }
                    this.outButton.style.display = 'none'
                    this.mixCards()
                    this.displayCard(this.cards[6 - this.botBlindCards], this.cardsDisplay[6 - this.botBlindCards])
                    this.botBlindCards --
                    this.displayCard(this.cards[6 - this.botBlindCards], this.cardsDisplay[6 - this.botBlindCards])
                    this.botBlindCards --
                    this.displayCard(this.cards[12-this.playerBlindCards], this.cardsDisplay[12-this.playerBlindCards])
                    this.playerBlindCards -- 
                    this.displayCard(this.cards[12 - this.playerBlindCards], this.cardsDisplay[12 - this.playerBlindCards])
                    this.playerBlindCards --
                    this.botPoint = this.calculatePoint(this.cards.slice(0, (6 - this.botBlindCards)))
                    this.playerPoint = this.calculatePoint(this.cards.slice(6, 8))
                    this.playagainButton.style.display = 'block'
                    this.tinhTien(this.kiemTraKetQua(this.botPoint, this.playerPoint), this.inputsValue)
                } else {
                    alert('nhập lại tiền cược!')
                }
            },
            mixCards() {
                let a
                this.cards = []
                while (this.cards.length < 52) {
                    a = Math.floor(Math.random() * 52)
                    if (!this.cards.includes(a)) {
                        this.cards.push(a)
                    }
                }
            },
            kiemTraInputs(arr, lim) {
                let total = 0
                for (let i in arr) {
                    if (arr[i] !== '') {
                        break
                    }
                    if (i == 2) {
                        if (arr[i] === '') {
                            return false
                        }
                    }
                }
                for (let i in arr) {
                    if (!this.kiemTraTienCuoc(arr[i], lim)) {
                        if (arr[i] === '') {
                            arr[i] = 0
                            continue
                        } else {
                            return false
                        }
                    } else {
                        arr[i] = parseInt(arr[i])
                        total += arr[i]
                    }
                }
                if (total > lim) {
                    return false
                }
                return true
            },
            displayCard(cardNumber, card) {
                let cardColor
                if (cardNumber%4 === 0) {
                    cardColor = 'red'
                } else if (cardNumber%4 === 1) {
                    cardColor = 'orange'
                } else if (cardNumber%4 === 2) {
                    cardColor = 'green'
                } else {
                    cardColor = 'black'
                }
                cardNumber = parseInt(cardNumber / 4) + 1
                if (cardNumber === 1) {
                    cardNumber = "A"
                } else if (cardNumber === 11) {
                    cardNumber = "J"
                } else if (cardNumber === 12) {
                    cardNumber = "Q"
                } else if (cardNumber === 13) {
                    cardNumber = "K"
                }
                card.innerHTML = cardNumber
                card.style.backgroundColor = 'white'
                card.style.color = cardColor
            },
            calculatePoint(points) {
                let point = 0
                for (let i in points) {
                    points[i] = parseInt(points[i] / 4) + 1
                }
                for (let i of points) {
                    if ((i === 11) || (i === 12) || (i === 13)) {
                        i = 0
                    }
                    point += i
                }
                if (point >= 10) {
                    point -= 10
                    return point
                } else {
                    return point
                }
            },
            kiemTraKetQua(bp, pp) {
                let a, ans
                if (((pp === 8) || (pp === 9)) || ((bp === 8) || (bp === 9))) {
                    ans = this.soSanh(bp, pp)
                    return ans
                }
                if (pp <= 5) {
                    this.displayCard(this.cards[12-this.playerBlindCards], this.cardsDisplay[12-this.playerBlindCards])
                    a = this.calculatePoint([this.cards[12-this.playerBlindCards]])
                    pp += a
                    ans = this.soSanh(bp, pp)
                    this.playerBlindCards -- 
                    if (bp <= 2) {
                        this.displayCard(this.cards[6 - this.botBlindCards], this.cardsDisplay[6 - this.botBlindCards])
                        bp += this.calculatePoint([this.cards[6 - this.botBlindCards]])
                        this.botBlindCards --
                        ans = this.soSanh(bp, pp)
                    } else if (bp === 3) {
                        if (a === 8) {
                            //do no thing
                        } else {
                            this.displayCard(this.cards[6 - this.botBlindCards], this.cardsDisplay[6 - this.botBlindCards])
                            bp += this.calculatePoint([this.cards[6 - this.botBlindCards]])
                            this.botBlindCards --
                            ans = this.soSanh(bp, pp)
                        }
                    } else if (bp === 4) {
                        if ((a === 1) || (a === 0) || (a === 8)) {
                            // do no thing
                        } else {
                            this.displayCard(this.cards[6 - this.botBlindCards], this.cardsDisplay[6 - this.botBlindCards])
                            bp += this.calculatePoint([this.cards[6 - this.botBlindCards]])
                            this.botBlindCards --
                            ans = this.soSanh(bp, pp)
                        }
                    } else if (bp === 5) {
                        if ((a === 4) || (a === 5) || (a === 6) || (a === 7)) {
                            this.displayCard(this.cards[6 - this.botBlindCards], this.cardsDisplay[6 - this.botBlindCards])
                            bp += this.calculatePoint([this.cards[6 - this.botBlindCards]])
                            this.botBlindCards --
                            ans = this.soSanh(bp, pp)
                        }
                    } else if (bp === 6) {
                        if ((a === 6) || (a === 7)) {
                            this.displayCard(this.cards[6 - this.botBlindCards], this.cardsDisplay[6 - this.botBlindCards])
                            bp += this.calculatePoint([this.cards[6 - this.botBlindCards]])
                            this.botBlindCards --
                            ans = this.soSanh(bp, pp)
                        }
                    } else if (bp === 7) {
                        ans = this.soSanh(bp, pp)
                    }
                } else {
                    if (bp <= 5) {
                        this.displayCard(this.cards[6 - this.botBlindCards], this.cardsDisplay[6 - this.botBlindCards])
                        bp += this.calculatePoint([this.cards[6 - this.botBlindCards]])
                        this.botBlindCards --
                    }
                    ans = this.soSanh(bp, pp)
                    return ans
                }
                return ans
            },
            soSanh(bp, pp) {
                if (bp >= 10) {
                    bp -= 10
                }
                if (pp >= 10) {
                    pp -= 10
                }
                console.log(bp, pp)
                if (bp > pp) {
                        return 2
                    } else if (bp === pp) {
                        return 1
                    } else {
                        return 0
                }
            },
            tinhTien(kq, inpval) {
                console.log(kq)
                for (let i in inpval) {
                    if (kq == i) {
                        if (kq === 1) {
                            state.soTien += inpval[i]*8
                        } else if (kq === 2) {
                            state.soTien += Math.floor(inpval[i]*0.95)
                        } else {
                            state.soTien += inpval[i]
                        }
                    } else {
                        state.soTien -= inpval[i]
                    }
                }
            },
            playagain() {
                this.playagainButton.style.display = 'none'
                for (let i of this.inputs) {
                    i.style.display = 'block'
                }
                for (let i of this.cardsDisplay) {
                    i.style.backgroundColor = 'rgb(91, 23, 23)'
                    i.innerHTML = ''
                }
                this.chiaBaiButton.style.display = 'block'
                this.outButton.style.display = 'block'
            }
        }
    }
</script>


<style scoped>
.BAbackGround {
    display: block;
    background-color: rgb(157, 29, 29);
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    }
    .sotien {
    font-size: 45px;
    text-align: center;
    user-select: none;
    display: block;
    height: 50px;
    width: 150px;
    background-color: rgb(250, 177, 177);
    border: 5px;
    margin: 0%; 
    border-style: solid;
    border-color: rgb(255, 79, 79);
    border-radius: 5px;
    position: absolute;
    right: 0%;
    top: 0%;
    }
    .out{
        font-size: 45px;
        text-align: center;
        user-select: none;
        display: block;
        height: 50px;
        width: 150px;
        background-color: rgb(250, 177, 177);
        border: 5px;
        margin: 0%; 
        border-style: solid;
        border-color: rgb(255, 79, 79);
        border-radius: 5px;
        position: absolute;
        left: 0%;
        top: 0%;
    }
    .out:hover, .chiaBai:hover, .playagain:hover{
        border: 6px rgb(255, 26, 26) solid;
        background-color: rgb(255, 109, 109);
    }
    .botBar, .playerBar {
        display: block;
        height: 200px;
        width: 1200px;
        background-color: rgb(157, 29, 29);
        border: 2px white solid;
        border-radius: 5px;
        position: absolute;
        left: calc(50% - 602px);
    }
    .frame {
        user-select: none;
        display: block;
        background-color: rgb(91, 23, 23);
        height: 160px;
        width: 120px;
        border: 2px white solid;
        border-radius: 5px;
        text-align: center;
        font-size: 120px;
        position: absolute;
        top: 18px;
    }
    .input {
    user-select: none;
    font-size: 40px;
    background-color: #ffb2ba; /* Màu nền cho cửa sổ input */
    border: 2px solid #d9342e; /* Màu đỏ cho viền */
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
    height: 50px;
    width: 250px;
    position: absolute;
    top: calc(50% - 27px);
    }
    .input:hover {
        border: 3px solid black;
    }
    .playagain {
        font-size: 20px;
        text-align: center;
        user-select: none;
        display: block;
        height: 50px;
        width: 150px;
        background-color: rgb(250, 177, 177);
        border: 5px;
        margin: 0%; 
        border-style: solid;
        border-color: rgb(255, 79, 79);
        border-radius: 5px;
        position: absolute;
        left: calc(50% - 80px);
        cursor: pointer;
        top: calc(50% - 30px)
    }
    .chiaBai {
        font-size: 35px;
        text-align: center;
        user-select: none;
        display: block;
        height: 50px;
        width: 150px;
        background-color: rgb(250, 177, 177);
        border: 5px;
        margin: 0%; 
        border-style: solid;
        border-color: rgb(255, 79, 79);
        border-radius: 5px;
        position: absolute;
    }
</style>