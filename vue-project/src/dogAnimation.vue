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
            const changeNumber = (x) => {
                if (x < 0) {
                    return Math.abs(x)
                }
                return 0
            }
            const calculatePos = (xA, yA, xO, yO, OB) => {
                let AA_, OA, BB_, OA_, OB_, xB, yB
                AA_ = yO - yA
                OA = Math.sqrt(((xA - xO) ** 2) + ((yA - yO) ** 2))
                BB_ = (OB * AA_)/OA
                yB = yO + changeNumber(BB_)
                OA_ = xA - xO
                OB_ = (OA_ * OB)/OA
                xB = xO + OB_
                return [xB, yB]
            }
            const handleMouseMove = () => {
                mouseX = event.clientX
                mouseY = event.clientY
                leftDot.style.left = `${calculatePos(mouseX, mouseY, leftDotX, leftDotY, 12)[0] - leftEyeX - 5}px`
                leftDot.style.top = `${calculatePos(mouseX, mouseY, leftDotX, leftDotY, 12)[1] - leftEyeY - 5}px`
                rightDot.style.left = `${calculatePos(mouseX, mouseY, rightDotX, rightDotY, 12)[0] - rightEyeX - 5}px`
                rightDot.style.top = `${calculatePos(mouseX, mouseY, rightDotX, rightDotY, 12)[1] - rightEyeY - 5}px`
            }
            let mouseX, mouseY, leftEye, rightEye, leftDot, rightDot
            let leftEyeX, leftEyeY, leftDotX, leftDotY
            let rightEyeX, rightEyeY, rightDotX, rightDotY
            onMounted(() => {
                leftEye = document.querySelector('.leftEye')
                rightEye = document.querySelector('.rightEye')
                leftEyeX = parseInt(window.getComputedStyle(leftEye).left)
                leftEyeY = parseInt(window.getComputedStyle(leftEye).top)
                rightEyeX = parseInt(window.getComputedStyle(rightEye).left)
                rightEyeY = parseInt(window.getComputedStyle(rightEye).top)
                leftDot = document.querySelector('.leftDot')
                rightDot = document.querySelector('.rightDot')
                leftDotX = parseInt(window.getComputedStyle(leftDot).left) + 5 + leftEyeX
                leftDotY = parseInt(window.getComputedStyle(leftDot).top) + 5 + leftEyeY
                rightDotX = parseInt(window.getComputedStyle(rightDot).left) + 5 + rightEyeX
                rightDotY = parseInt(window.getComputedStyle(rightDot).top) + 5 + rightEyeY
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
        -webkit-user-drag: none;
    }
    .leftEye, .rightEye {
        display: block;
        background-color: aliceblue;
        height: 36px;
        width: 36px;
        border: 0px black solid;
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
        top: 13px;
        left: 13px;
    }
</style>