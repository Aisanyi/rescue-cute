<!--
 * @Author: Aisanyi
 * @Date: 2022-03-24 17:17:25
 * @LastEditors: Aisanyi
 * @LastEditTime: 2022-03-25 10:24:06
 * @Description: 开始页面
-->
<script setup lang="ts">
import { useRouter } from 'vue-router'

const roueter = useRouter()
const goGame = () => {
  roueter.push('/cultivate')
}
</script>

<template>
  <div class="box">
    <img src="@/assets/images/logo.png" alt="" />
    <div class="title"></div>
    <p>有一天，你收到一封来自你好朋友郭可爱的求救信，然后你踏上了旅途...</p>
    <button @click="goGame">开始拯救之旅</button>
  </div>
</template>

<style scoped lang="scss">
.box {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-image: linear-gradient(45deg, rgba(61, 57, 57, 0.4), rgba(0, 0, 0, 0.4));

  img {
    width: 100px;
  }

  .title {
    font-size: 50px;
    background: linear-gradient(45deg, rgba(27, 2, 2, 0.4), rgba(46, 43, 43, 0.4));
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }
  p {
    margin: 30px 0 40px;
    font-size: 12px;
    color: #eee;
  }
}
</style>
