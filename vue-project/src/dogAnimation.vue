<template>
    <div style="left: 165px;" class="leftEye">
        <div class="leftDot"></div>
    </div>
    <div style="left: 207px;" class="rightEye">
        <div class="rightDot"></div>
    </div>
    <img @click="handleClick" src="./image/dog.png" alt="" class="dog">
</template>

<script>
import { onMounted, onUnmounted } from 'vue';

    export default {
        setup() {
            const calculatePos = (xA, yA, xO, yO, OB) => {
                let AA_, OA, BB_, OA_, OB_, xB, yB
                AA_ = yO - yA
                OA = Math.sqrt(((xA - xO) ** 2) + ((yA - yO) ** 2))
                BB_ = (OB * AA_)/OA
                yB = yO - BB_
                OA_ = xA - xO
                OB_ = (OA_ * OB)/OA
                xB = xO + OB_
                return [xB, yB]
            }
            const handleMouseMove = () => {
                mouseX = event.clientX
                mouseY = event.clientY
            }
            let mouseX, mouseY, leftEye, rightEye, leftDot, rightDot
            let leftEyeX, leftEyeY
            onMounted(() => {
                leftEye = document.querySelector('.leftEye')
                rightEye = document.querySelector('.rightEye')
                leftEyeX = parseInt(window.getComputedStyle(leftEye).left)
                leftDot = document.querySelector('.leftDot')
                rightDot = document.querySelector('.rightDot')
                console.log(leftEyeX)
                window.addEventListener('mousemove', handleMouseMove)
            })
            onUnmounted(() => {
                window.removeEventListener('mousemove', handleMouseMove)
            })
        },
        data() {
            return {

            }
        },
        methods: {
            handleClick() {
                console.log(event.clientX, event.clientY)
            }
        }
    }
</script>

<style scoped>
    .dog {
        display: block;
        height: 400px;
        width: auto;
        position: absolute;
        bottom: 0px;
    }
    .leftEye, .rightEye {
        display: block;
        background-color: aliceblue;
        height: 35px;
        width: 35px;
        border: 1px black solid;
        border-radius: 50%;
        position: absolute;
        top: 419px;
    }
    .leftDot, .rightDot {
        display: block;
        background-color: black;
        height: 10px;
        width: 10px;
        border: 0px black solid;
        border-radius: 50%;
        position: absolute;
        top: 12px;
        left: 12px;
    }
</style>