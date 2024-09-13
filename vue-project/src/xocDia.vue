<template>
    <div class="bg-[#9D1D1D] w-full h-full absolute left-0 top-0">
        <div class="sotien m-2 select-none absolute top-0 right-0 inline-block bg-[#d9342e] h-[50px] w-auto text-[30px] px-2 border-black border-[2px] border-solid rounded-[4px] font-mono">{{ state.soTien }}</div>
        <div style="left: calc(50% - 460px);" class="inputsFrame h-[200px] w-[900px] border-[3px] border-solid border-black rounded-[5px] absolute top-[170px]">
            <div style="left: 0%; top: 0%" class="inputFrame w-[300px] h-[100px] border-[1px] bg-[#C64848] border-solid border-black absolute" id="chan">
                <input id="chanInput" type="text" style="left: calc(50% - 70px); top: calc(50% - 21px);" class="input select-none bg-[#ffb2ba] border-[2px] border-solid border-[#d9342e] p-[20px] text-center text-[20px] h-[42px] w-[140px] rounded-md absolute transition-all hover:translate-y-[-3px]" maxlength="6" placeholder="Chẵn">
            </div>
            <div style="left: 0%; bottom: 0%;" class="inputFrame w-[300px] h-[100px] border-[1px] bg-[#C64848] border-solid border-black absolute" id="le">
                <input id="leInput" type="text" style="left: calc(50% - 70px); top: calc(50% - 21px);" class="input select-none bg-[#ffb2ba] border-[2px] border-solid border-[#d9342e] p-[20px] text-center text-[20px] h-[42px] w-[140px] rounded-md absolute transition-all hover:translate-y-[-3px]" maxlength="6" placeholder="Lẻ">
            </div>
            <div style="left: 300px; top: 0%;" class="inputFrame w-[300px] h-[100px] border-[1px] bg-[#C64848] border-solid border-black absolute" id="baSap">
                <input id="baSapInput" type="text" style="left: calc(50% - 70px); top: calc(50% - 21px);" class="input select-none bg-[#ffb2ba] border-[2px] border-solid border-[#d9342e] p-[20px] text-center text-[20px] h-[42px] w-[140px] rounded-md absolute transition-all hover:translate-y-[-3px]" maxlength="6" placeholder="Ba Sấp">
            </div>
            <div style="left: 300px; bottom: 0%;" class="inputFrame w-[300px] h-[100px] border-[1px] bg-[#C64848] border-solid border-black absolute" id="baNgua">
                <input id="baNguaInput " type="text" style="left: calc(50% - 70px); top: calc(50% - 21px);" class="input select-none bg-[#ffb2ba] border-[2px] border-solid border-[#d9342e] p-[20px] text-center text-[20px] h-[42px] w-[140px] rounded-md absolute transition-all hover:translate-y-[-3px]" maxlength="6" placeholder="Ba Ngửa">
            </div>
            <div style="right: 0%; top: 0%;" class="inputFrame w-[300px] h-[100px] border-[1px] bg-[#C64848] border-solid border-black absolute" id="bonSap">
                <input id="bonSapInput" type="text" style="left: calc(50% - 70px); top: calc(50% - 21px);" class="input select-none bg-[#ffb2ba] border-[2px] border-solid border-[#d9342e] p-[20px] text-center text-[20px] h-[42px] w-[140px] rounded-md absolute transition-all hover:translate-y-[-3px]" maxlength="6" placeholder="Bốn Sấp">
            </div>
            <div style="right: 0%; bottom: 0%;" class="inputFrame w-[300px] h-[100px] border-[1px] bg-[#C64848] border-solid border-black absolute" id="bonNgua">
                <input id="bonNguaInput" type="text" style="left: calc(50% - 70px); top: calc(50% - 21px);" class="input select-none bg-[#ffb2ba] border-[2px] border-solid border-[#d9342e] p-[20px] text-center text-[20px] h-[42px] w-[140px] rounded-md absolute transition-all hover:translate-y-[-3px]" maxlength="6" placeholder="Bốn Ngửa">
            </div>
        </div>
        <div @click="xoc" style="left: calc(50% - 80px);" class="xoc top-[400px] cursor-pointer m-2 select-none absolute inline-block bg-[#d9342e] h-[50px] w-[150px] text-center text-[30px] px-9 border-black border-[2px] border-solid rounded-[4px] hover:translate-y-[-5px] hover:bg-black hover:text-[#d9342e] transition-all">XÓC</div>
        <div style="display: none; top: calc(50% - 250px); left: calc(50% - 250px);" class="batDia absolute h-[500px] w-[500px]">
            <img class="dia w-[500px] h-[500px] absolute top-0 left-0" src="./image/dia.png" alt="">

            <img id="xu" class="do absolute hidden" src="./image/Do.png" alt="">
            <img id="xu" class="trang absolute hidden" src="./image/Trang.png" alt="">
            <img id="xu" class="do absolute hidden" src="./image/Do.png" alt="">
            <img id="xu" class="trang absolute hidden" src="./image/Trang.png" alt="">
            <img id="xu" class="do absolute hidden" src="./image/Do.png" alt="">
            <img id="xu" class="trang absolute hidden" src="./image/Trang.png" alt="">
            <img id="xu" class="do absolute hidden" src="./image/Do.png" alt="">
            <img id="xu" class="trang absolute hidden" src="./image/Trang.png" alt="">

            <img @mousemove="batMousemove" @mousedown="batMousedown" @mouseup="removeBat" style="-webkit-user-drag: none;"class="bat w-[420px] h-[420px] absolute top-[40px] left-[40px]" src="./image/bat.png" alt="">
        </div>
        <button style="display: none; left: calc(50% - 80px)" @click="playagain" class="playagain top-[50px] cursor-pointer m-2 select-none absolute inline-block bg-[#d9342e] h-[50px] w-[150px] text-center text-[30px] border-black border-[2px] border-solid rounded-[4px] hover:translate-y-[-5px] hover:bg-black hover:text-[#d9342e] transition-all">PlayAgain</button>
        <img @click="sendData" src="./image/backHome.png" alt="" class="out m-2 h-[50px] w-auto p-1 cursor-pointer bg-[#9D1D1D] border-black border-[0px] border-solid rounded-[50%] hover:border-[3px] hover:translate-y-[4px] transition-all">
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
                inputs: null,
                out: null,
                inputValue: [],
                inputsFrame: null,
                xocElement: null,
                batDia: null,
                cacDongXu: null,
                batElement: null,
                ketQua: [],
                playagainButton: null,
                batHolding: false,
                mouseX: 0,
                mouseY: 0,
                newMouseX: 0,
                newMouseY: 0,
            }
        },
        mounted() {
            this.inputs = document.querySelectorAll('.input'),
            this.out = document.querySelector('.out'),
            this.inputsFrame = document.querySelector('.inputsFrame')
            this.xocElement = document.querySelector('.xoc')
            this.batDia = document.querySelector('.batDia')
            this.cacDongXu = document.querySelectorAll('#xu')
            this.batElement = document.querySelector('.bat')
            this.playagainButton = document.querySelector('.playagain')
        },
        methods: {
            test() {
                console.log(this.getFourRandomNumber())
            },
            sendData() {
                this.$emit('send-data-fromXocDia', false)
            }, 
            xoc() {
                this.inputValue = []
                this.ketQua = this.getFourRandomNumber()
                for (let i of this.inputs) {
                    this.inputValue.push(i.value)
                }
                if (this.kiemTraInputs(this.inputValue, state.soTien)) {
                    this.inputsFrame.style.display = 'none'
                    this.out.style.display = 'none'
                    this.xocElement.style.display = 'none'
                    this.batDia.style.display = 'block'
                    console.log(this.ketQua)
                    this.hienThiCacDongXu(this.ketQua)
                } else {
                    alert('nhap lai tien cuoc')
                }
            },
            getFourRandomNumber() {
                let a, lst = []
                while (lst.length < 4) {
                    a = Math.floor(Math.random() * 8)
                    if (!lst.includes(a)) {
                        lst.push(a)
                    }
                }
                return lst
            },
            getRandomInRange(a, b) {
                return Math.floor(Math.random() * (b - a + 1)) + a
            },
            getRandomPos() {
                let x = this.getRandomInRange(0, 320)
                let EF = 2*Math.floor(Math.sqrt(x * (320 - x)))
                let y = this.getRandomInRange(0, EF)
                y = Math.floor((320 - EF)/2 + y)

                x = x + 89 - 17
                y = y + 89 - 22
                return [x, y]
            },
            hienThiCacDongXu(arr) {
                for (let i of arr) {
                    let pos = this.getRandomPos()
                    this.cacDongXu[i].style.display = 'block'
                    this.cacDongXu[i].style.left = `${pos[0]}px`
                    this.cacDongXu[i].style.top = `${pos[1]}px`
                    let gocNgauNhien = this.getRandomInRange(0, 360)
                    this.cacDongXu[i].style.transform = `rotate(${gocNgauNhien}deg)`
                }
            },
            removeBat() {
                this.batHolding = false
                this.batElement.style.display = 'none'
                this.playagainButton.style.display = 'block'
                this.tinhTien(this.ketQua, this.inputValue)
            },
            batMousemove() {
                if (this.batHolding) {
                    let khoangCachX, khoangCachY
                    this.newMouseX = event.clientX
                    this.newMouseY = event.clientY
                    khoangCachX = this.newMouseX - this.mouseX
                    khoangCachY = this.newMouseY - this.mouseY
                    this.batElement.style.transform = `translate(${khoangCachX}px, ${khoangCachY}px)`
                }
            },
            batMousedown() {
                this.mouseX = event.clientX
                this.mouseY = event.clientY
                if (event.button === 0) {
                    this.batHolding = true
                }
            },
            tinhTien(ketQuaArr, inputArr) {
                let total = 0
                for (let i in ketQuaArr) {
                    ketQuaArr[i] = ketQuaArr[i]%2
                    total += ketQuaArr[i]
                }
                for (let i in inputArr) {
                    if (inputArr[i] === 0) {
                        continue
                    } else {
                        if (i == 0) {
                            if (total % 2 === 0) {
                                state.soTien += inputArr[i] - 1
                            } else {
                                state.soTien -= inputArr[i]
                            }
                        } else if (i == 1) {
                            if (total % 2 !== 0) {
                                state.soTien += inputArr[i] - 1
                            } else {
                                state.soTien -= inputArr[i]
                            }
                        } else if (i == 2) {
                            if (total === 1) {
                                state.soTien += Math.floor(inputArr[i] * 2.6) - 1
                            } else {
                                state.soTien -= inputArr[i]
                            }
                        } else if (i == 3) {
                            if (total === 3) {
                                state.soTien += Math.floor(inputArr[i] * 2.6) - 1
                            } else {
                                state.soTien -= inputArr[i]
                            }
                        } else if (i == 4) {
                            if (total === 0) {
                                state.soTien += inputArr[i] * 12 - 1
                            } else {
                                state.soTien -= inputArr[i]
                            }
                        } else if (i == 5) {
                            if (total === 4) {
                                state.soTien += inputArr[i] * 12 - 1
                            } else {
                                state.soTien -= inputArr[i]
                            }
                        }
                    }
                }
            },
            kiemTraInputs(arr, lim) {
                let total = 0
                for (let i in arr) {
                    if (arr[i] !== '') {
                        break
                    }
                    if (i == 5) {
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
            playagain() {
                this.batElement.style.transform = `translate(0px, 0px)`
                this.batDia.style.display = 'none'
                this.playagainButton.style.display = 'none'
                this.inputsFrame.style.display = 'block'
                this.xocElement.style.display = 'block'
                this.out.style.display = 'block'
                this.batElement.style.display = 'block'
                for (let i of this.cacDongXu) {
                    i.style.display = 'none'
                }
            }
        }
    }
</script>

