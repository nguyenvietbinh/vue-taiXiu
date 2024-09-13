<template>
    <div class="bg-[#9D1D1D] w-full h-full absolute left-0 top-0">
        <img @click="sendData" src="./image/backHome.png" alt="" class="out m-2 h-[50px] w-auto p-1 cursor-pointer bg-[#9D1D1D] border-black border-[0px] border-solid rounded-[50%] hover:border-[3px] hover:translate-y-[4px] transition-all">
        <div class="sotien m-2 select-none absolute top-0 right-0 inline-block bg-[#d9342e] h-[50px] w-auto text-[30px] px-2 border-black border-[2px] border-solid rounded-[4px] font-mono">{{ state.soTien }}</div>
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