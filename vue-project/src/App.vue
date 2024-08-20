
<template>
    <div class="backGround">
        <div class="logoTaiXiu" style="left: 10%;" @click="taiXiuIsOn = true">TX</div>
        <div class="logoBauCua" style="left: 20%;" @click="bauCuaIsOn = true">BC</div>
    </div>
    <Taixiu v-if="taiXiuIsOn" @send-data="receiveDataFromTaiXiu"/>
    <BauCua v-if="bauCuaIsOn"/>
</template>


<script>
    import Taixiu from './taiXiu.vue'
    import BauCua from './bauCua.vue'
    export default {
        data() {
            return {
                taiXiuIsOn: false,
                bauCuaIsOn: false,
            }
        },
        methods: {
            receiveDataFromTaiXiu(data) {
                this.taiXiuIsOn = data
            }
        },
        components: {
            Taixiu,
            BauCua
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
    .logoTaiXiu,.logoBauCua {
        user-select: none;
        display: block;
        height: 100px;
        width: 100px;
        background-color: rgb(255, 0, 0);
        border: 2px, black, solid;
        border-radius: 5px;
        position: absolute;
        top: 50px;
        font-size: 70px;
        text-align: center;
    }
    .logoTaiXiu:hover,.logoBauCua:hover {
        border: 3px, black, solid;
        border-radius: 5px;
        background-color: rgb(244, 0, 0);
    }
</style>
