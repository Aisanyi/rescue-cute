<!--
 * @Author: Aisanyi
 * @Date: 2022-03-24 14:53:43
 * @LastEditors: Aisanyi
 * @LastEditTime: 2022-03-25 11:14:17
 * @Description: app
-->
<script setup lang="ts">
</script>

<template>
  <main>
    <router-view></router-view>
  </main>
</template>

<style lang="scss">
* {
  margin: 0;
  border: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 14px;
}

#app,
body,
html {
  width: 100%;
  height: 100%;
  background-color: #eee;
  overflow: hidden;
}

#app {
  display: flex;
  justify-content: center;
  align-items: center;
  main {
    background-color: #fff;
    padding: 10px;
    border-radius: 5px;
    width: 800px;
    height: 500px;
    box-shadow: 0 0 17px 3px #aaa;
  }
}
button {
  padding: 5px 15px;
  background-color: #666;
  color: #fff;
  margin: 10px;
  border-radius: 3px;
  cursor: pointer;
}
</style>
