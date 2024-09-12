<template>
    <div class="bg-[#9D1D1D] w-full h-full absolute left-0 top-0 font-mono">
        <img @click="sendData" src="./image/backHome.png" alt="" class="out m-2 h-[50px] w-auto p-1 cursor-pointer bg-[#9D1D1D] border-black border-[0px] border-solid rounded-[50%] hover:border-[3px] hover:translate-y-[4px] transition-all">
        <div class="sotien select-none absolute top-0 right-0 inline-block bg-[#d9342e] h-[50px] w-auto text-[30px] px-2 border-black border-[2px] border-solid rounded-[4px] font-mono">{{ state.soTien }}</div>
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
        <input style="left: calc(50% - 447px); top: calc(50% - 27px);" class="input select-none bg-[#ffb2ba] border-[2px] border-solid border-[#d9342e] p-[20px] text-center text-[20px] h-[70px] rounded-md absolute transition-all hover:translate-y-[-3px]" type="text" placeholder="Thắng">
        <input style="left: calc(50% - 150px); top: calc(50% - 27px);" class="input select-none bg-[#ffb2ba] border-[2px] border-solid border-[#d9342e] p-[20px] text-center text-[20px] h-[70px] rounded-md absolute transition-all hover:translate-y-[-3px]" type="text" placeholder="Hòa">
        <input style="left: calc(50% + 147px); top: calc(50% - 27px);" class="input select-none bg-[#ffb2ba] border-[2px] border-solid border-[#d9342e] p-[20px] text-center text-[20px] h-[70px] rounded-md absolute transition-all hover:translate-y-[-3px]" type="text" placeholder="Thua">
        <div style="left: calc(50% - 105px); top: 0%" @click="chiaBai" class="chiaBai cursor-pointer m-2 select-none absolute inline-block bg-[#d9342e] h-[50px] w-auto text-[30px] px-9 border-black border-[2px] border-solid rounded-[4px] hover:translate-y-[-5px] hover:bg-black hover:text-[#d9342e] transition-all">Chia Bài</div>
        <div @click="playagain" style="display: none; left: calc(50% - 80px); top: calc(50% - 30px)" class="playagain cursor-pointer m-2 select-none absolute inline-block bg-[#d9342e] h-[50px] w-[150px] text-center text-[30px] border-black border-[2px] border-solid rounded-[4px] hover:translate-y-[-5px] hover:bg-black hover:text-[#d9342e] transition-all">playagain</div>
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