/*
 * @Author: Aisanyi
 * @Date: 2022-03-24 14:53:43
 * @LastEditors: Aisanyi
 * @LastEditTime: 2022-03-25 09:44:10
 * @Description: 入口文件
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')
