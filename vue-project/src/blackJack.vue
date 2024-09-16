<template>
    <div class="bg-[#9D1D1D] w-full h-full absolute left-0 top-0 font-mono">
        <div class="sotien m-2 select-none absolute top-0 right-0 inline-block bg-[#d9342e] h-[50px] w-auto text-[30px] px-2 border-black border-[2px] border-solid rounded-[4px] font-mono">{{ state.soTien }},0$</div>
        <div style="top: 10%;left: calc(50% - 602px);" class="botBar h-[200px] w-[1200px] bg-[#9D1D1D] border-[2px] border-white border-solid rounded-[5px] absolute">
            <div style="left: 38px;" class="frame select-none bg-[#5B1717] h-[160px] w-[120px] border-[2px] border-white border-solid rounded-[5px] text-center text-[100px] absolute top-[18px]" id="botBar-frame1"></div>
            <div style="left: 238px;" class="frame select-none bg-[#5B1717] h-[160px] w-[120px] border-[2px] border-white border-solid rounded-[5px] text-center text-[100px] absolute top-[18px]" id="botBar-frame2"></div>
            <div style="left: 438px;" class="frame select-none bg-[#5B1717] h-[160px] w-[120px] border-[2px] border-white border-solid rounded-[5px] text-center text-[100px] absolute top-[18px]" id="botBar-frame3"></div>
            <div style="left: 638px;" class="frame select-none bg-[#5B1717] h-[160px] w-[120px] border-[2px] border-white border-solid rounded-[5px] text-center text-[100px] absolute top-[18px]" id="botBar-frame4"></div>
            <div style="left: 838px;" class="frame select-none bg-[#5B1717] h-[160px] w-[120px] border-[2px] border-white border-solid rounded-[5px] text-center text-[100px] absolute top-[18px]" id="botBar-frame5"></div>
            <div style="left: 1038px;" class="frame select-none bg-[#5B1717] h-[160px] w-[120px] border-[2px] border-white border-solid rounded-[5px] text-center text-[100px] absolute top-[18px]" id="botBar-frame6"></div>
        </div>
        <div style="bottom: 10%;left: calc(50% - 602px);" class="playerBar h-[200px] w-[1200px] bg-[#9D1D1D] border-[2px] border-white border-solid rounded-[5px] absolute">
            <div style="left: 38px;" class="frame select-none bg-[#5B1717] h-[160px] w-[120px] border-[2px] border-white border-solid rounded-[5px] text-center text-[100px] absolute top-[18px]" id="playerBar-frame1"></div>
            <div style="left: 238px;" class="frame select-none bg-[#5B1717] h-[160px] w-[120px] border-[2px] border-white border-solid rounded-[5px] text-center text-[100px] absolute top-[18px]" id="playerBar-frame2"></div>
            <div style="left: 438px;" class="frame select-none bg-[#5B1717] h-[160px] w-[120px] border-[2px] border-white border-solid rounded-[5px] text-center text-[100px] absolute top-[18px]" id="playerBar-frame3"></div>
            <div style="left: 638px;" class="frame select-none bg-[#5B1717] h-[160px] w-[120px] border-[2px] border-white border-solid rounded-[5px] text-center text-[100px] absolute top-[18px]" id="playerBar-frame4"></div>
            <div style="left: 838px;" class="frame select-none bg-[#5B1717] h-[160px] w-[120px] border-[2px] border-white border-solid rounded-[5px] text-center text-[100px] absolute top-[18px]" id="playerBar-frame5"></div>
            <div style="left: 1038px;" class="frame select-none bg-[#5B1717] h-[160px] w-[120px] border-[2px] border-white border-solid rounded-[5px] text-center text-[100px] absolute top-[18px]" id="playerBar-frame6"></div>
        </div>
        <input style="position: absolute; top: calc(50% - 27px); left: calc(50% - 147px);" type="text" class="input select-none bg-[#ffb2ba] border-[2px] border-solid border-[#d9342e] p-[20px] text-center text-[20px] h-[70px] rounded-md absolute transition-all hover:translate-y-[-2px]" maxlength="6" placeholder='nhaptiencuoc'>
        <div style="left: calc(50% - 105px); top: 0%" @click="chiaBai" class="chiaBai cursor-pointer m-2 select-none absolute inline-block bg-[#d9342e] h-[50px] w-auto text-[30px] px-9 border-black border-[2px] border-solid rounded-[4px] hover:translate-y-[-3px] hover:bg-black hover:text-[#d9342e] transition-all">Chia Bài</div>
        <div @click="hit" style="top: calc(50% - 30px); left: calc(50% - 602px); display: none;" class="hit cursor-pointer m-2 select-none absolute inline-block bg-[#d9342e] h-[50px] w-auto text-[30px] px-9 border-black border-[2px] border-solid rounded-[4px] hover:translate-y-[-3px] hover:bg-black hover:text-[#d9342e] transition-all">HIT</div>
        <div @click="stand" style="top: calc(50% - 30px); left: calc(50% - 442px); display: none;" class="stand cursor-pointer m-2 select-none absolute inline-block bg-[#d9342e] h-[50px] w-auto text-[30px] px-9 border-black border-[2px] border-solid rounded-[4px] hover:translate-y-[-3px] hover:bg-black hover:text-[#d9342e] transition-all">STAND</div>
        <img @click="sendData" src="./image/backHome.png" alt="" class="out m-2 h-[50px] w-auto p-1 cursor-pointer bg-[#9D1D1D] border-black border-[0px] border-solid rounded-[50%] hover:border-[3px] hover:translate-y-[4px] transition-all">
        <div @click="playAgain" style="display: none; left: calc(50% - 80px); top: calc(50% - 30px)" class="lose cursor-pointer m-2 select-none absolute inline-block bg-[#d9342e] h-[50px] w-[150px] text-center text-[30px] px-9 border-black border-[2px] border-solid rounded-[4px] hover:translate-y-[-5px] hover:bg-black hover:text-[#d9342e] transition-all">lose</div>
        <div @click="playAgain" style="display: none; left: calc(50% - 80px); top: calc(50% - 30px)" class="win cursor-pointer m-2 select-none absolute inline-block bg-[#d9342e] h-[50px] w-[150px] text-center text-[30px] px-9 border-black border-[2px] border-solid rounded-[4px] hover:translate-y-[-5px] hover:bg-black hover:text-[#d9342e] transition-all">win</div>
        <div @click="playAgain" style="display: none; left: calc(50% - 80px); top: calc(50% - 30px)" class="draw cursor-pointer m-2 select-none absolute inline-block bg-[#d9342e] h-[50px] w-[150px] text-center text-[30px] px-9 border-black border-[2px] border-solid rounded-[4px] hover:translate-y-[-5px] hover:bg-black hover:text-[#d9342e] transition-all">draw</div>
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
                cardsDisplay: null,
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
            this.cardsDisplay = document.querySelectorAll('.frame')
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
                this.displayCard(Math.floor(Math.random() * 52), this.cardsDisplay[0])
            },
            sendData() {
                this.$emit('send-data-fromBlackJack', false)
                this.playerBlindCards = 6
                this.botBlindCards = 6
                for (let i of this.cardsDisplay) {
                    i.style.backgroundColor = 'rgb(91, 23, 23)'
                    i.innerHTML = ''
                }
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
                    this.displayCard(this.cards[6 - this.botBlindCards], this.cardsDisplay[6 - this.botBlindCards])
                    this.botBlindCards --
                    this.displayCard(this.cards[12-this.playerBlindCards], this.cardsDisplay[12-this.playerBlindCards])
                    this.playerBlindCards -- 
                    this.displayCard(this.cards[12 - this.playerBlindCards], this.cardsDisplay[12 - this.playerBlindCards])
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
                    this.displayCard(this.cards[12 - this.playerBlindCards], this.cardsDisplay[12 - this.playerBlindCards])
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
                this.hitButton.style.display = 'none'
                this.standButton.style.display = 'none'
                this.displayCard(this.cards[6 - this.botBlindCards], this.cardsDisplay[6 - this.botBlindCards])
                this.botPoit = this.calculatePoint(this.cards.slice(0, (6 - this.botBlindCards) + 1))
                this.botBlindCards --
                while ((this.botPoit < this.playerPoint) && (this.botBlindCards > 0) && (this.botPoit !== 0)) {
                    this.displayCard(this.cards[6 - this.botBlindCards], this.cardsDisplay[6 - this.botBlindCards]);
                    this.botPoit = this.calculatePoint(this.cards.slice(0, (6 - this.botBlindCards) + 1));
                    this.botBlindCards--;
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
                for (let i of this.cardsDisplay) {
                    i.style.backgroundColor = 'rgb(91, 23, 23)'
                    i.innerHTML = ''
                }
            }
        }
    }


</script>