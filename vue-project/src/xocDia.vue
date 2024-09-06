<template>
    <div class="XDbackGround">
        <div class="sotien">{{ state.soTien }}</div>
        <div class="inputsFrame">
            <div style="left: 0%; top: 0%" class="inputFrame" id="chan">
                <input id="chanInput" type="text" class="input" maxlength="6" placeholder="Chẵn">
            </div>
            <div style="left: 0%; bottom: 0%;" class="inputFrame" id="le">
                <input id="leInput" type="text" class="input" maxlength="6" placeholder="Lẻ">
            </div>
            <div style="left: 300px; top: 0%;" class="inputFrame" id="baSap">
                <input id="baSapInput" type="text" class="input" maxlength="6" placeholder="Ba Sấp">
            </div>
            <div style="left: 300px; bottom: 0%;" class="inputFrame" id="baNgua">
                <input id="baNguaInput " type="text" class="input" maxlength="6" placeholder="Ba Ngửa">
            </div>
            <div style="right: 0%; top: 0%;" class="inputFrame" id="bonSap">
                <input id="bonSapInput" type="text" class="input" maxlength="6" placeholder="Bốn Sấp">
            </div>
            <div style="right: 0%; bottom: 0%;" class="inputFrame" id="bonNgua">
                <input id="bonNguaInput" type="text" class="input" maxlength="6" placeholder="Bốn Ngửa">
            </div>
        </div>
        <div @click="xoc" class="xoc">XÓC</div>
        <div style="display: none;" class="batDia">
            <img class="dia" src="./image/dia.png" alt="">

            <img id="xu" class="do" src="./image/Do.png" alt="">
            <img id="xu" class="trang" src="./image/Trang.png" alt="">
            <img id="xu" class="do" src="./image/Do.png" alt="">
            <img id="xu" class="trang" src="./image/Trang.png" alt="">
            <img id="xu" class="do" src="./image/Do.png" alt="">
            <img id="xu" class="trang" src="./image/Trang.png" alt="">
            <img id="xu" class="do" src="./image/Do.png" alt="">
            <img id="xu" class="trang" src="./image/Trang.png" alt="">

            <img @mousemove="batMousemove" @mousedown="batMousedown" @mouseup="removeBat" class="bat" src="./image/bat.png" alt="">
        </div>
        <button style="display: none;" @click="playagain" class="playagain">PlayAgain</button>
        <div @click="sendData" class="out"><==</div>
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


<style scoped>
    .XDbackGround {
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
    .inputsFrame {
        height: 200px;
        width: 900px;
        border: 3px;
        border-style: solid;
        border-color: black;
        border-radius: 5px;
        position: absolute;
        left: calc(50% - 460px);
        top: 170px;
    }
    .inputFrame {
        width: 300px;
        height: 100px;
        border: 1px;
        background-color: rgb(198, 72, 72);
        border-style: solid;
        border-color: black;
        position: absolute;
    }
    .input {
        position: absolute;
        height: 42px;
        width: 140px;
        background-color: rgb(215, 215, 215);
        color: black;
        font-size: large;
        border: 1px solid black;
        border-radius: 2px;
        cursor: pointer;
        text-align: center;
        left: calc(50% - 70px);
        top: calc(50% - 21px);

    }
    .xoc {
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
        left: calc(50% - 80px);
        cursor: pointer;
        top: 400px;
    }
    .batDia {
        position: absolute;
        top: calc(50% - 250px);
        left: calc(50% - 250px);
    }
    .dia {
        display: block;
        width: 500px;
        height: 500px;
        position: absolute;
        left: 0px;
        top: 0px;
    }
    .bat {
        display: block;
        width: 420px;
        height: 420px;
        position: absolute;
        top: 40px;
        left: 40px;
        -webkit-user-drag: none;
    }
    #xu {
        display: none;
        position: absolute
    }
    .playagain {
        display: none;
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
        top: 50px;
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
        cursor: pointer;
    }
    .out:hover, .xoc:hover, .playagain:hover {
        border: 6px rgb(255, 26, 26) solid;
        background-color: rgb(255, 109, 109);
    }
</style>