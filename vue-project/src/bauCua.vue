<template>
    <div class="backGround">
        <div class="sotien">{{ state.soTien }}</div>
        <div class="circle">
          <div class="sucsac1">
              <div class="cham" id="cham1_ss1"></div>
              <div class="cham" id="cham2_ss1"></div>
              <div class="cham" id="cham3_ss1"></div>
              <div class="cham" id="cham4_ss1"></div>
              <div class="cham" id="cham5_ss1"></div>
              <div class="cham" id="cham6_ss1"></div>
              <div class="cham" id="cham7_ss1"></div>
          </div>
          <div class="sucsac2">
              <div class="cham" id="cham1_ss2"></div>
              <div class="cham" id="cham2_ss2"></div>
              <div class="cham" id="cham3_ss2"></div>
              <div class="cham" id="cham4_ss2"></div>
              <div class="cham" id="cham5_ss2"></div>
              <div class="cham" id="cham6_ss2"></div>
              <div class="cham" id="cham7_ss2"></div>
          </div>
          <div class="sucsac3">
              <div class="cham" id="cham1_ss3"></div>
              <div class="cham" id="cham2_ss3"></div>
              <div class="cham" id="cham3_ss3"></div>
              <div class="cham" id="cham4_ss3"></div>
              <div class="cham" id="cham5_ss3"></div>
              <div class="cham" id="cham6_ss3"></div>
              <div class="cham" id="cham7_ss3"></div>
          </div>
      </div>
      <input  maxlength="6" style="left: calc(50% - 500px); top: calc(40% - 160px);" type="text" id="1-input" class="input" placeholder="cược vào 1">
      <input  maxlength="6" style="left: calc(50% - 500px); top: calc(40% - 60px)" type="text" id="2-input" class="input" placeholder="cược vào 2">
      <input  maxlength="6" style="left: calc(50% - 500px); top: calc(40% + 40px)" type="text" id="3-input" class="input" placeholder="cược vào 3">
      <input  maxlength="6" style="right: calc(50% - 500px); top: calc(40% - 160px);" type="text" id="4-input" class="input" placeholder="cược vào 4">
      <input  maxlength="6" style="right: calc(50% - 500px); top: calc(40% - 60px)" type="text" id="5-input" class="input" placeholder="cược vào 5">
      <input  maxlength="6" style="right: calc(50% - 500px); top: calc(40% + 40px)" type="text" id="6-input" class="input" placeholder="cược vào 6">
      <div @click="xoayXucSac" class="xoay">Xoay</div>
      <div @click="sendData" class="out"><==</div>
    </div>
</template>


<script>
import { state } from './dataStore';
import { useMyFunction } from './functionsStore';
    export default {
        setup() {
            const { kiemTraTienCuoc } = useMyFunction()
            return {
                state,
                kiemTraTienCuoc,
            }
        },
        mounted() {
            this.inputs = document.querySelectorAll('.input')
            this.sucsac1 = document.querySelector('.sucsac1')
            this.sucsac2 = document.querySelector('.sucsac2')
            this.sucsac3 = document.querySelector('.sucsac3')
            this.chamsElement = document.getElementsByClassName('cham')
            this.sucsacs = [this.sucsac1, this.sucsac2, this.sucsac3]
        },
        data () {
            return {
                inputs: null,
                inputsValue: [],
                sucsac1: null,
                sucsac2: null,
                sucsac3: null,
                chamsElement: null,
                casesInSucSac1: [
                    [],
                    [6],
                    [1, 4],
                    [0, 6, 5],
                    [0, 2, 3, 5],
                    [0, 2, 3, 5, 6],
                    [0, 1, 2, 3, 4, 5],
                ],
                ketQua: null,
                sucsacs: null,
            }
        },
        methods: {
            sendData() {
                this.$emit('send-data-fromBauCua', false)
            },
            xoayXucSac() {
                this.inputsValue = []
                for (let i = 0; i < this.inputs.length; i ++) {
                    this.inputsValue.push(this.inputs[i].value)
                }
                if (!this.kiemTraInputs(this.inputsValue, state.soTien)) {
                    alert('nhập lại tiền cược!')
                } else {
                    this.hienThiSucSac()
                    this.tinhTien(this.inputsValue, this.ketQua)
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
            hienThiSucSac() {
                for (let i of this.chamsElement) {
                    i.style.display = 'none'
                }
                for (let t in this.sucsacs) {
                    this.sucsacs[t].style.backgroundColor = 'white'
                }
                this.hienThiCacCham()
            }, 
            hienThiCacCham() {
                this.ketQua = this.getThreeRandomNumber()
                for (let i = 0; i < 3; i++) {
                    for (let t of this.casesInSucSac1[this.ketQua[i]]) {
                        if (i === 0) {
                            this.chamsElement[t].style.display = 'block'
                        }
                        if (i === 1) {
                            this.chamsElement[t + 7].style.display = 'block'
                        }
                        if (i === 2) {
                            this.chamsElement[t + 14].style.display = 'block'
                        }
                    }
                }
            },
            getThreeRandomNumber() {
                let a, b, c, d
                a = Math.floor(Math.random() * 6) + 1
                b = Math.floor(Math.random() * 6) + 1
                c = Math.floor(Math.random() * 6) + 1
                d = a + b + c
                return [a, b, c]
            },
            tinhTien(inp, kq) {
                for (let i in inp) {
                    if (inp[i] == 0) {
                        continue
                    } else {
                        if (this.inArrCheck(kq, parseInt(i) + 1)) {
                            for (let j in kq) {
                                if (kq[j] === (parseInt(i) + 1)) {
                                    state.soTien += inp[i]
                                    this.sucsacs[j].style.backgroundColor = 'red'
                                }
                            }
                        } else {
                            state.soTien -= inp[i]
                        }
                    }
                }
            },
            inArrCheck(arr, a) {
                for (let i of arr) {
                    if (i === a) {
                        return true
                    }
                }
                return false
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
.circle {
    display: block;
    background-color: rgb(105, 31, 31);
    border: 10px;
    border-style: solid;
    border-color: rgb(255, 79, 79);
    border-radius: 50%;
    height: 300px;
    width: 300px;
    position: absolute; 
    left: calc(50% - 160px);
    top: calc(40% - 160px);
    }
    .sucsac1 {
    display: block;
    height: 60px;
    width: 60px;
    background-color: rgb(59, 13, 13);
    border: 4px;
    border-style: solid;
    border-color: rgb(59, 13, 13);
    border-radius: 10%;
    position: absolute;
    left: calc(50% - 32px);
    top: calc(30% - 32px);
    }
    .sucsac2 {
    display: block;
    height: 60px;
    width: 60px;
    background-color: rgb(59, 13, 13);
    border: 4px;
    border-style: solid;
    border-color: rgb(59, 13, 13);
    border-radius: 10%;
    position: absolute;
    left: calc(30% - 32px);
    bottom: calc(35% - 32px);
    }
    .sucsac3 {
    display: block;
    height: 60px;
    width: 60px;
    background-color: rgb(59, 13, 13);
    border: 4px;
    border-style: solid;
    border-color: rgb(59, 13, 13);
    border-radius: 10%;
    position: absolute;
    right: calc(30% - 32px);
    bottom: calc(35% - 32px);
    }
    .cham {
    display: none;
    height: 14px;
    width: 14px;
    border: 0px;
    border-style: solid;
    border-radius: 50%;
    background-color: black;
    }
    #cham1_ss1, #cham1_ss2, #cham1_ss3 {
    position: absolute;
    left: calc(25% - 7px);
    top: 3px;
    }
    #cham2_ss1, #cham2_ss2, #cham2_ss3 {
    position: absolute;
    left: calc(25% - 7px);
    top: 23px;
    }
    #cham3_ss1, #cham3_ss2, #cham3_ss3 {
    position: absolute;
    left: calc(25% - 7px);
    bottom: 3px;
    }
    #cham4_ss1, #cham4_ss2, #cham4_ss3 {
    position: absolute;
    right: calc(25% - 7px);
    top: 3px;
    }
    #cham5_ss1, #cham5_ss2, #cham5_ss3 {
    position: absolute;
    right: calc(25% - 7px);
    top: 23px;
    }
    #cham6_ss1, #cham6_ss2, #cham6_ss3 {
    position: absolute;
    right: calc(25% - 7px);
    bottom: 3px;
    }
    #cham7_ss1, #cham7_ss2, #cham7_ss3 {
    position: absolute;
    left: calc(50% - 7px);
    top: calc(50% - 7px);
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
    }
    .input:hover {
        border: 3px solid black;
    }
    .xoay {
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
        top: calc(50% + 200px);
        left: calc(50% - 80px);
    }
    .xoay:hover {
        border: 6px rgb(255, 26, 26) solid;
        background-color: rgb(255, 109, 109);
    }
</style>