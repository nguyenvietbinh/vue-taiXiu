<template>
    <div class="backGround">
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
        <input type="text" class="input" maxlength="6" placeholder='nhaptiencuoc'>
        <div style="left: calc(50% - 75px); top: 0%" @click="chiaBai" class="chiaBai">Chia Bài</div>
        <div @click="hit" style="top: calc(50% - 30px); left: calc(50% - 602px); display: none;" class="hit">HIT</div>
        <div @click="stand" style="top: calc(50% - 30px); left: calc(50% - 442px); display: none;" class="stand">STAND</div>
        <div @click="sendData" class="out"><==</div>
        <div @click="playAgain" style="display: none;" class="lose">lose</div>
        <div @click="playAgain" style="display: none;" class="win">win</div>
        <div @click="playAgain" style="display: none;" class="draw">draw</div>
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
                tienCuoc: 0,
                cards: [],
                cardsDIsplay: null,
                input: null,
                chiaBaiButton: null,
                outButton: null,
                hitButton: null,
                standButton: null,
                playerNumberOfCard: null,
                botNumberOfCard: null,
                playerPoint: null,
                botPoit: null,
                playerBlindCards: 6,
                botBlindCards: 6,
                win: null,
                lose: null,
                draw: null,
            }
        },
        mounted() {
            this.cardsDIsplay = document.querySelectorAll('.frame')
            this.input = document.querySelector('.input')
            this.chiaBaiButton = document.querySelector('.chiaBai')
            this.outButton = document.querySelector('.out')
            this.hitButton = document.querySelector('.hit')
            this.standButton = document.querySelector('.stand')
            this.win = document.querySelector('.win')
            this.lose = document.querySelector('.lose')
            this.draw = document.querySelector('.draw')
        },
        methods: {
            test() {
                this.displayCard(Math.floor(Math.random() * 52), this.cardsDIsplay[0])
            },
            sendData() {
                this.$emit('send-data-fromBlackJack', false)
            },
            chiaBai() {
                if (!this.kiemTraTienCuoc(this.input.value, state.soTien)) {
                    alert('nhập lại tiền cược!')
                } else {
                    this.tienCuoc = parseInt(this.input.value )
                    this.chiaBaiButton.style.display = 'none'
                    this.input.style.display = 'none'
                    this.outButton.style.display = 'none'
                    this.hitButton.style.display = 'block'
                    this.standButton.style.display = 'block'
                    this.mixCards()
                    this.displayCard(this.cards[6 - this.botBlindCards], this.cardsDIsplay[6 - this.botBlindCards])
                    this.botBlindCards --
                    this.displayCard(this.cards[12-this.playerBlindCards], this.cardsDIsplay[12-this.playerBlindCards])
                    this.playerBlindCards -- 
                    this.displayCard(this.cards[12 - this.playerBlindCards], this.cardsDIsplay[12 - this.playerBlindCards])
                    this.playerBlindCards --
                    this.playerPoint = this.calculatePoint(this.cards.slice(6, 8))
                    if (this.playerPoint === 21) {
                        this.hitButton.style.display = 'none'
                        this.standButton.style.display = 'none'
                        this.win.style.display = 'block'
                        state.soTien += this.tienCuoc
                    }
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
            hit() {
                if (this.playerBlindCards > 0) {
                    this.displayCard(this.cards[12 - this.playerBlindCards], this.cardsDIsplay[12 - this.playerBlindCards])
                    this.playerPoint = this.calculatePoint(this.cards.slice(6, (12 - this.playerBlindCards) + 1))
                    this.playerBlindCards --
                    if (this.playerPoint === 0) {
                        this.hitButton.style.display = 'none'
                        this.standButton.style.display = 'none'
                        this.lose.style.display = 'block'
                        state.soTien -= this.tienCuoc
                    }
                }
            },
            stand() {
                console.log(this.playerPoint)
                this.hitButton.style.display = 'none'
                this.standButton.style.display = 'none'
                this.displayCard(this.cards[6 - this.botBlindCards], this.cardsDIsplay[6 - this.botBlindCards])
                this.botPoit = this.calculatePoint(this.cards.slice(0, (6 - this.botBlindCards) + 1))
                this.botBlindCards --
                while ((this.botPoit < this.playerPoint) && (this.botBlindCards > 0) && (this.botPoit !== 0)) {
                    this.displayCard(this.cards[6 - this.botBlindCards], this.cardsDIsplay[6 - this.botBlindCards])
                    this.botPoit = this.calculatePoint(this.cards.slice(0, (6 - this.botBlindCards) + 1))
                    this.botBlindCards --
                }
                if (this.botPoit === 0) {
                    this.win.style.display = 'block'
                    state.soTien += this.tienCuoc
                } else if (this.botPoit > this.playerPoint) {
                    this.lose.style.display = 'block'
                    state.soTien -= this.tienCuoc
                } else if (this.botPoit === this.playerPoint) {
                    this.draw.style.display = 'block'
                }
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
                let bigestPoint = 0, numberOfA = 0, lstPoint = [], filteredLstPoint = []
                for (let i in points) {
                    points[i] = parseInt(points[i] / 4) + 1
                }
                for (let i in points) {
                    if (points[i] === 1) {
                        bigestPoint ++
                        numberOfA ++
                    } else if ((points[i] === 11) || (points[i] === 12) || (points[i] === 13)) {
                        bigestPoint += 10
                    } else {
                        bigestPoint += points[i]
                    }
                }
                lstPoint.push(bigestPoint)
                for (let i = 0; i < numberOfA; i ++) {
                    bigestPoint += 10
                    lstPoint.push(bigestPoint)
                }
                filteredLstPoint = lstPoint.filter(number => number <= 21)
                if (filteredLstPoint.length === 0) {
                    return 0
                }
                return Math.max(...filteredLstPoint )
            },
            playAgain() {
                this.input.style.display = 'block'
                this.chiaBaiButton.style.display = 'block'
                this.outButton.style.display = 'block'
                this.win.style.display = 'none'
                this.lose.style.display = 'none'
                this.draw.style.display = 'none'
                this.playerBlindCards = 6
                this.botBlindCards = 6
                for (let i in this.cardsDIsplay) {
                    this.cardsDIsplay[i].style.backgroundColor = 'rgb(91, 23, 23)'
                    this.cardsDIsplay[i].innerHTML = ''
                }
            }
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
    .out {
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
    .out:hover {
        border: 6px rgb(255, 26, 26) solid;
        background-color: rgb(255, 109, 109);
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
    left: calc(50% - 147px);
    }
    .input:hover {
        border: 3px solid black;
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
    .chiaBai:hover, .hit:hover, .stand:hover, .win:hover, .lose:hover, .drow:hover {
        border: 6px rgb(255, 26, 26) solid;
        background-color: rgb(255, 109, 109);
    }
    .hit, .stand {
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
    .win, .lose, .draw {
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
        top: calc(50% - 30px);
        left: calc(50% - 80px);
    }
</style>