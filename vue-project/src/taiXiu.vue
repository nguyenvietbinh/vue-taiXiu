<template>
    <div class="bg-[#9D1D1D] w-full h-full absolute top-0 left-0">
      <div @click="kiemTraTienCuoc(tienCuoc, state.soTien); clickTai(tienCuocHopLe)" style="left: calc(50% - 490px);" class="tai inline-block bg-red-600 w-[150px] h-[150px] border-[2px] border-black border-solid rounded-[5px] absolute top-[30%] text-[100px] font-serif text-center select-none hover:translate-y-[-10px] hover:border-[5px] transition-all">T</div>
      <div @click="kiemTraTienCuoc(tienCuoc, state.soTien); clickXiu(tienCuocHopLe)" style="left: calc(50% + 340px);" class="xiu inline-block bg-red-600 w-[150px] h-[150px] border-[2px] border-black border-solid rounded-[5px] absolute top-[30%] text-[100px] font-serif text-center select-none hover:translate-y-[-10px] hover:border-[5px] transition-all">X</div>
      <div class="sotien select-none absolute top-0 right-0 inline-block bg-[#d9342e] h-[50px] w-auto text-[30px] px-2 border-black border-[2px] border-solid rounded-[4px] font-mono">{{ state.soTien }}</div>
      <input @keyup="handleInput($event.target.value)" type="text" style="left: calc(50% - 147px); top: calc(30% + 300px);" class="input select-none bg-[#ffb2ba] border-[2px] border-solid border-[#d9342e] p-[20px] text-center text-[20px] h-[60px] rounded-md absolute transition-all hover:translate-y-[-3px]" maxlength="6" placeholder='nhaptiencuoc'>
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
      <img @click="sendData" src="./image/backHome.png" alt="" style="-webkit-user-drag: none;" class="out m-2 h-[50px] w-auto p-1 cursor-pointer bg-[#9D1D1D] border-black border-[0px] border-solid rounded-[50%] hover:border-[3px] hover:translate-y-[4px] transition-all">
    </div>
  </template>



<script>
import { state } from './dataStore';
    export default {
        setup() {
            return{
                state
            }
        },
        data() {
            return {
                tienCuoc: null,
                tienCuocHopLe: false,
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
            }
        },
        mounted() {
            this.sucsac1 = document.querySelector('.sucsac1')
            this.sucsac2 = document.querySelector('.sucsac2')
            this.sucsac3 = document.querySelector('.sucsac3')
            this.chamsElement = document.getElementsByClassName('cham')
        },
        methods: {
            handleInput(input) {
                this.tienCuoc = input
            },
            kiemTraTienCuoc(input, lim) {
                if (!isNaN(input)) {
                    parseInt(input)
                    if ((input <= 0) || (input > lim)) {
                        this.tienCuocHopLe = false
                        return this.tienCuocHopLe
                    } else {
                        this.tienCuoc = input
                        this.tienCuocHopLe = true
                        return this.tienCuocHopLe
                    }
                } else {
                    input = ''
                    this.tienCuocHopLe = false
                    return this.tienCuocHopLe
                }
            },
            clickTai(tienCuocHopLe) {
                if(tienCuocHopLe) {
                    this.tienCuoc = parseInt(this.tienCuoc)
                    this.hienThiSucSac()
                    if (this.ketQua[3] >= 11) {
                        state.soTien = state.soTien + this.tienCuoc
                        state.soTien --
                    } else {
                        state.soTien = state.soTien - this.tienCuoc
                    }
                } else {
                    alert('bạn nhập sai tiền cược, mời nhập lại')
                }
            },
            clickXiu() {
                if(this.tienCuocHopLe) {
                    this.tienCuoc = parseInt(this.tienCuoc)
                    this.hienThiSucSac()
                    if (this.ketQua[3] <= 10) {
                        state.soTien = state.soTien + this.tienCuoc
                        state.soTien --
                    } else {
                        state.soTien = state.soTien - this.tienCuoc
                    }
                } else {
                    alert('bạn nhập sai tiền cược, mời nhập lại')
                }
            },
            hienThiSucSac() {
                for (let i of this.chamsElement) {
                    i.style.display = 'none'
                }
                this.sucsac1.style.backgroundColor = 'white'
                this.sucsac2.style.backgroundColor = 'white'
                this.sucsac3.style.backgroundColor = 'white'
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
                return [a, b, c, d]
            },
            sendData() {
                this.$emit('send-data-fromTaiXiu', false)
            }
        },
    }
</script>