<template>
    <div style="left: calc(50% - 120px);" class="leftEye">
        <div class="leftDot"></div>
    </div>
    <div style="left: calc(50% + 20px);" class="rightEye">
        <div class="rightDot"></div>
    </div>
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
            const handleMouseMove = (event) => {
                mouseX = event.clientX
                mouseY = event.clientY
                leftDotY = calculatePos(mouseX, mouseY, leftCenterX, leftCenterY, 25)[1] - 15 - leftEyeY
                leftDotX = calculatePos(mouseX, mouseY, leftCenterX, leftCenterY, 25)[0] - 15 - leftEyeX
                rightDotX = calculatePos(mouseX, mouseY, rightCenterX, rightCenterY, 25)[0] - 15 - rightEyeX
                rightDotY = calculatePos(mouseX, mouseY, rightCenterX, rightCenterY, 25)[1] - 15 - rightEyeY
                leftDot.style.top = `${leftDotY}px`
                leftDot.style.left = `${leftDotX}px`
                rightDot.style.left = `${rightDotX}px`
                rightDot.style.top = `${rightDotY}px`
            }
            let mouseX, mouseY, leftEyeX, leftEyeY, leftCenterX, leftCenterY, leftDot, leftDotX, leftDotY,
                rightEyeX, rightEyeY, rightCenterX, rightCenterY, rightDot, rightDotX, rightDotY
            onMounted(() => {
                let leftEye = document.querySelector('.leftEye')
                let rightEye = document.querySelector('.rightEye')
                rightDot = document.querySelector('.rightDot')
                leftDot = document.querySelector('.leftDot')
                leftEyeX = parseInt(window.getComputedStyle(leftEye).left)
                leftEyeY = parseInt(window.getComputedStyle(leftEye).top)
                rightEyeX = parseInt(window.getComputedStyle(rightEye).left)
                rightEyeY = parseInt(window.getComputedStyle(rightEye).top)
                leftCenterX = leftEyeX + 50
                leftCenterY = leftEyeY + 50
                rightCenterX = rightEyeX + 50
                rightCenterY = rightEyeY + 50
                window.addEventListener('mousemove', handleMouseMove)
            
            })
            onUnmounted(() => {
                window.removeEventListener('mousemove', handleMouseMove)
            })
        }
    }
</script>


<style scoped>
    .leftEye, .rightEye {
        display: block;
        background-color: rgb(157, 29, 29);
        height: 100px;
        width: 100px;
        border: 3px black solid;
        border-radius: 50%;
        position: absolute;
        top: 300px;
    }
    .leftDot, .rightDot {
        display: block;
        background-color: black;
        height: 30px;
        width: 30px;
        border: 0px black solid;
        border-radius: 50%;
        position: absolute;
        top: calc(50% - 15px);
        left: calc(50% - 15px);
    }
</style>