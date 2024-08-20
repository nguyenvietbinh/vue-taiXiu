<template>
    <div class="backGround">
      <div @click="kiemTraTienCuoc(tienCuoc, soTien); clickTai(tienCuocHopLe)" class="tai">T</div>
      <div @click="kiemTraTienCuoc(tienCuoc, soTien); clickXiu(tienCuocHopLe)" class="xiu">X</div>
      <div class="sotien">{{ sharedData }}</div>
      <input @keyup="handleInput($event.target.value)" type="text" class="input" maxlength="6" placeholder='nhaptiencuoc'>
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
      <div @click="sendData" class="out"><==</div>
    </div>
  </template>


<script>
import { useStore } from 'vuex';
import { computed } from 'vue';
    export default {
        setup() {
            const store = useStore();
            const sharedData = computed(() => store.getters.getSharedData);
            return { sharedData };
        },
        data() {
            return {
                soTien: null,
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
                display: false,
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
                        alert('bạn nhập sai tiền cược, mời nhập lại')
                        this.tienCuocHopLe = false
                        return this.tienCuocHopLe
                    } else {
                        this.tienCuoc = input
                        this.tienCuocHopLe = true
                        return this.tienCuocHopLe
                    }
                } else {
                    if (input === 'all in') {
                        this.tienCuoc = this.soTien
                        this.tienCuocHopLe = true
                        return this.tienCuocHopLe
                    }
                    alert('bạn nhập sai tiền cược, mời nhập lại')
                    input = ''
                    this.tienCuocHopLe = false
                    return this.tienCuocHopLe
                }
            },
            clickTai(tienCuocHopLe) {
                if(tienCuocHopLe) {
                    console.log(this.taiXiuMessage)
                    this.tienCuoc = parseInt(this.tienCuoc)
                    this.hienThiSucSac()
                    if (this.ketQua[3] >= 11) {
                        this.soTien = this.soTien + this.tienCuoc
                        this.soTien --
                    } else {
                        this.soTien = this.soTien - this.tienCuoc
                    }
                    this.$store.commit('updateData', this.soTienData)
                }
            },
            clickXiu() {
                if(this.tienCuocHopLe) {
                    this.tienCuoc = parseInt(this.tienCuoc)
                    this.hienThiSucSac()
                    if (this.ketQua[3] <= 10) {
                        this.soTien = this.soTien + this.tienCuoc
                        this.soTien --
                    } else {
                        this.soTien = this.soTien - this.tienCuoc
                    }
                    this.$store.commit('updateData', this.soTienData)
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
                this.$emit('send-data', this.display)
            }
        },
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
    .tai {
    display: block;
    background-color: red;
    width: 150px;
    height: 150px;
    border: 5px black solid;
    border-radius: 5px;
    position: absolute;
    top: 30%;
    left: calc(50% - 490px);
    font-size: 140px;
    text-align: center;
    user-select: none;

    }
    .xiu {
    display: block;
    background-color: red;
    width: 150px;
    height: 150px;
    border: 5px black solid;
    border-radius: 5px;
    position: absolute;
    top: 30%;
    left: calc(50% + 340px);
    font-size: 140px;
    text-align: center;
    user-select: none;

    }
    .tai:hover {
    font-size: 150px;
    border: 8px black solid;
    }
    .xiu:hover {
    font-size: 150px;
    border: 8px black solid;
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
    top: calc(30% + 300px);
    left: calc(50% - 147px);
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
</style>
