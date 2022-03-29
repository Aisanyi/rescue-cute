<!--
 * @Author: Aisanyi
 * @Date: 2022-03-25 10:01:36
 * @LastEditors: Aisanyi
 * @LastEditTime: 2022-03-29 08:38:57
 * @Description: 培养
-->
<script setup lang="ts">
import { ref } from 'vue'
import player from '../config/player'

const name = ref(player.getNmae())
const hp = ref(player.getHp())
const aggressivity = ref(player.getAggressivity())
const exp = ref(player.getExp())
const level = ref(player.getLevel())
const defense = ref(player.getDefense())
const message = ref<Element>()
let timeout: NodeJS.Timeout
let isEXP = ref(false)

const getExp = () => {
  isEXP.value = true
  const randomexp = Math.floor(Math.random() * 10 + 1)
  exp.value = player.addExp(randomexp)
  createmsg(`【${name.value}】获得${randomexp}点经验`)
  timeout = setTimeout(getExp, 5000)
}
const stopExp = () => {
  clearTimeout(timeout)
  isEXP.value = false
}

const levelUp = () => {
  const lv = player.leveup()
  if (lv) {
    getData()
    createmsg(`【${name.value}】升级了`)
  }
}

const createmsg = (msg: string) => {
  const p = document.createElement('p')
  p.innerText = msg
  message.value?.appendChild(p)
  message.value!.scrollTop = message.value?.scrollHeight!
}

const getData = () => {
  hp.value = player.getHp()
  aggressivity.value = player.getAggressivity()
  exp.value = player.getExp()
  level.value = player.getLevel()
  defense.value = player.getDefense()
}
</script>

<template>
  <div class="cultivate">
    <div class="info">
      <div class="name">
        姓名: <span>{{ name }}</span>
      </div>
      <div class="level">
        等级: <span>{{ level }}</span> <em @click="levelUp">升级</em>
      </div>
      <div class="hp">
        HP: <span>{{ hp }}</span>
      </div>
      <div class="aggressivity">
        攻击力：<span>{{ aggressivity }}</span>
      </div>
      <div class="defense">
        防御力：<span>{{ defense }}</span>
      </div>
      <div class="exp">
        经验: <span>{{ exp }}</span>
      </div>
    </div>
    <img src="../assets/images/xiulian.svg" alt="" class="player" />
    <button @click="getExp" v-if="!isEXP">开始修炼</button>
    <button @click="stopExp" v-else>停止修炼</button>
    <div class="message" ref="message"></div>
  </div>
</template>

<style lang="scss" scoped>
.cultivate {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(241, 238, 238);
  flex-direction: column;

  .info {
    position: absolute;
    left: 10px;
    top: 10px;
    width: 200px;
    padding: 5px 10px;
    background-color: #eee;
    border: 1px solid #e3e3e3;
    box-shadow: 0 0 10px 3px #e3e3e3;
    border-radius: 5px;
    span {
      font-weight: 700;
    }
    em {
      display: inline;
      font-style: normal;
      font-size: 12px;
      border: 1px solid #333;
      padding: 0 10px;
      margin-left: 10px;
      cursor: pointer;
    }
    div {
      border-bottom: 1px solid #bbb;
      line-height: 28px;
      font-size: 12px;
      &:last-child {
        border: 0;
      }
    }
  }
  .player {
    width: 200px;
  }
  .message {
    position: absolute;
    left: 10px;
    bottom: 10px;
    border: 1px solid #e3e3e3;
    box-shadow: 0 0 10px 3px #e3e3e3;
    width: 200px;
    height: 200px;
    overflow: auto;
    :deep(p) {
      font-size: 12px;
      line-height: 20px;
    }
  }
}
</style>
