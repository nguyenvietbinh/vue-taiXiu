<template>
    <div class="RObackGround">
        <div @click="sendData" class="out"><==</div>
        <div class="sotien">{{ state.soTien }}</div>
        <BetTable/>
        <Wheel/>
    </div>
    
</template>


<script>
import { state } from './dataStore';
import BetTable from './rouletteComponents/betTable.vue';
import Wheel from './rouletteComponents/wheel.vue';
    export default {
        setup() {
            return {
                state,
            }
        },
        data() {
            return {

            }
        },
        methods: {
            sendData() {
                this.$emit('send-data-fromRoulette', false)
            }
        },
        components: {
            BetTable,
            Wheel
        }
    }
</script>


<style scoped>
    .RObackGround {
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
</style>