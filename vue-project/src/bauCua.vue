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
      <div @click="sendData" class="out"><==</div>
    </div>
</template>


<script>
import { state } from './store';
    export default {
        setup() {
            return {
                state
            }
        },
        methods: {
            sendData() {
                this.$emit('send-data-fromBauCua', false)
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
</style>