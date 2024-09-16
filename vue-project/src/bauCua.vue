<template>
    <div class="bg-[#9D1D1D] w-full h-full absolute left-0 top-0">
        <div class="sotien m-2 select-none absolute top-0 right-0 inline-block bg-[#d9342e] h-[50px] w-auto text-[30px] px-2 border-black border-[2px] border-solid rounded-[4px] font-mono">{{ state.soTien }},0$</div>
        <div style="left: calc(50% - 160px); top: calc(50% - 200px);" class="circle bg-[#691F1F] border-[#FF4F4F] border-solid border-[10px] rounded-[50%] h-[300px] w-[300px] absolute">
          <div style="top: calc(30% - 32px); left: calc(50% - 32px);" class="sucsac1 h-[60px] w-[60px] bg-[#3B0D0D] border-[4px] border-solid border-[#3B0D0D] rounded-[10%] absolute">
              <div style="left: calc(25% - 7px);" class="cham h-[14px] w-[14px] bg-black rounded-[50%] hidden absolute top-[3px]" id="cham1_ss1"></div>
              <div style="left: calc(25% - 7px);" class="cham h-[14px] w-[14px] bg-black rounded-[50%] hidden absolute top-[19px]" id="cham2_ss1"></div>
              <div style="left: calc(25% - 7px);" class="cham h-[14px] w-[14px] bg-black rounded-[50%] hidden absolute bottom-[3px]" id="cham3_ss1"></div>
              <div style="right: calc(25% - 7px);" class="cham h-[14px] w-[14px] bg-black rounded-[50%] hidden absolute top-[3px]" id="cham4_ss1"></div>
              <div style="right: calc(25% - 7px);" class="cham h-[14px] w-[14px] bg-black rounded-[50%] hidden absolute top-[19px]" id="cham5_ss1"></div>
              <div style="right: calc(25% - 7px);" class="cham h-[14px] w-[14px] bg-black rounded-[50%] hidden absolute bottom-[3px]" id="cham6_ss1"></div>
              <div style="left: calc(50% - 7px); top: calc(50% - 7px);" class="cham h-[14px] w-[14px] bg-black rounded-[50%] hidden absolute" id="cham7_ss1"></div>
          </div>
          <div style="left: calc(30% - 32px); bottom: calc(35% - 32px);" class="sucsac2 h-[60px] w-[60px] bg-[#3B0D0D] border-[4px] border-solid border-[#3B0D0D] rounded-[10%] absolute">
              <div style="left: calc(25% - 7px);" class="cham h-[14px] w-[14px] bg-black rounded-[50%] hidden absolute top-[3px]" id="cham1_ss2"></div>
              <div style="left: calc(25% - 7px);" class="cham h-[14px] w-[14px] bg-black rounded-[50%] hidden absolute top-[19px]" id="cham2_ss2"></div>
              <div style="left: calc(25% - 7px);" class="cham h-[14px] w-[14px] bg-black rounded-[50%] hidden absolute bottom-[3px]" id="cham3_ss2"></div>
              <div style="right: calc(25% - 7px);" class="cham h-[14px] w-[14px] bg-black rounded-[50%] hidden absolute top-[3px]" id="cham4_ss2"></div>
              <div style="right: calc(25% - 7px);" class="cham h-[14px] w-[14px] bg-black rounded-[50%] hidden absolute top-[19px]" id="cham5_ss2"></div>
              <div style="right: calc(25% - 7px);" class="cham h-[14px] w-[14px] bg-black rounded-[50%] hidden absolute bottom-[3px]" id="cham6_ss2"></div>
              <div style="left: calc(50% - 7px); top: calc(50% - 7px);" class="cham h-[14px] w-[14px] bg-black rounded-[50%] hidden absolute" id="cham7_ss2"></div>
          </div>
          <div style="right: calc(30% - 32px); bottom: calc(35% - 32px);" class="sucsac3 h-[60px] w-[60px] bg-[#3B0D0D] border-[4px] border-solid border-[#3B0D0D] rounded-[10%] absolute">
              <div style="left: calc(25% - 7px);" class="cham h-[14px] w-[14px] bg-black rounded-[50%] hidden absolute top-[3px]" id="cham1_ss3"></div>
              <div style="left: calc(25% - 7px);" class="cham h-[14px] w-[14px] bg-black rounded-[50%] hidden absolute top-[19px]" id="cham2_ss3"></div>
              <div style="left: calc(25% - 7px);" class="cham h-[14px] w-[14px] bg-black rounded-[50%] hidden absolute bottom-[3px]" id="cham3_ss3"></div>
              <div style="right: calc(25% - 7px);" class="cham h-[14px] w-[14px] bg-black rounded-[50%] hidden absolute top-[3px]" id="cham4_ss3"></div>
              <div style="right: calc(25% - 7px);" class="cham h-[14px] w-[14px] bg-black rounded-[50%] hidden absolute top-[19px]" id="cham5_ss3"></div>
              <div style="right: calc(25% - 7px);" class="cham h-[14px] w-[14px] bg-black rounded-[50%] hidden absolute bottom-[3px]" id="cham6_ss3"></div>
              <div style="left: calc(50% - 7px); top: calc(50% - 7px);" class="cham h-[14px] w-[14px] bg-black rounded-[50%] hidden absolute" id="cham7_ss3"></div>
          </div>
      </div>
      <input  maxlength="6" style="left: calc(50% - 500px); top: calc(40% - 160px);" type="text" id="1-input" class="input select-none bg-[#ffb2ba] border-[2px] border-solid border-[#d9342e] p-[20px] text-center text-[20px] h-[70px] rounded-md absolute transition-all hover:translate-y-[-3px]" placeholder="cược vào 1">
      <input  maxlength="6" style="left: calc(50% - 500px); top: calc(40% - 60px)" type="text" id="2-input" class="input select-none bg-[#ffb2ba] border-[2px] border-solid border-[#d9342e] p-[20px] text-center text-[20px] h-[70px] rounded-md absolute transition-all hover:translate-y-[-3px]" placeholder="cược vào 2">
      <input  maxlength="6" style="left: calc(50% - 500px); top: calc(40% + 40px)" type="text" id="3-input" class="input select-none bg-[#ffb2ba] border-[2px] border-solid border-[#d9342e] p-[20px] text-center text-[20px] h-[70px] rounded-md absolute transition-all hover:translate-y-[-3px]" placeholder="cược vào 3">
      <input  maxlength="6" style="right: calc(50% - 500px); top: calc(40% - 160px);" type="text" id="4-input" class="input select-none bg-[#ffb2ba] border-[2px] border-solid border-[#d9342e] p-[20px] text-center text-[20px] h-[70px] rounded-md absolute transition-all hover:translate-y-[-3px]" placeholder="cược vào 4">
      <input  maxlength="6" style="right: calc(50% - 500px); top: calc(40% - 60px)" type="text" id="5-input" class="input select-none bg-[#ffb2ba] border-[2px] border-solid border-[#d9342e] p-[20px] text-center text-[20px] h-[70px] rounded-md absolute transition-all hover:translate-y-[-3px]" placeholder="cược vào 5">
      <input  maxlength="6" style="right: calc(50% - 500px); top: calc(40% + 40px)" type="text" id="6-input" class="input select-none bg-[#ffb2ba] border-[2px] border-solid border-[#d9342e] p-[20px] text-center text-[20px] h-[70px] rounded-md absolute transition-all hover:translate-y-[-3px]" placeholder="cược vào 6">
      <div @click="xoayXucSac" style="left: calc(50% - 80px); top: calc(50% + 200px);" class="xoay select-none absolute inline-block bg-[#d9342e] h-[50px] w-auto text-[30px] px-9 border-black border-[2px] border-solid rounded-[4px] hover:translate-y-[-5px] hover:bg-black hover:text-[#d9342e] transition-all">Xoay</div>
      <img @click="sendData" src="./image/backHome.png" alt="" class="out m-2 h-[50px] w-auto p-1 cursor-pointer bg-[#9D1D1D] border-black border-[0px] border-solid rounded-[50%] hover:border-[3px] hover:translate-y-[4px] transition-all">
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