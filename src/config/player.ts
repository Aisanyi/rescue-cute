/*
 * @Author: Aisanyi
 * @Date: 2022-03-25 10:11:45
 * @LastEditors: Aisanyi
 * @LastEditTime: 2022-03-25 17:24:18
 * @Description: 玩家
 */

const leveExpMap: Record<number, number> = {
  1: 50,
  2: 500,
  3: 5000,
  4: 50000,
  5: 500000,
  6: 5000000,
  7: 50000000,
}

class Player {
  #name = '狗康'
  #hp = 10
  #aggressivity = 1
  #defense = 1
  #leve = 1
  #exp = 1
  

  /**
   * 掉血
   * @returns 信息
   */
  bloodLoss(aggressivity: number) {
    this.#hp -= aggressivity - this.#defense
    if(this.#hp <= 0) this.#hp = 0
    return this.#hp
  }

  leveup() {
    if(leveExpMap[this.#leve] > this.#exp) return false
    this.#exp -= leveExpMap[this.#leve]
    this.#leve += 1
    return this.#leve
  }

  addExp(exp: number) {
    this.#exp += exp
    return this.#exp
  }

  /**
   * 获取攻击力
   * @returns 攻击力
   */
  getAggressivity() {
    return this.#aggressivity  + this.#leve * 3
  }

  /**
   * 获取血量
   * @returns 血量
   */
  getHp() {
    return this.#hp + this.#leve * 3
  }
  /**
   * 获取防御力
   * @returns 防御力
   */
  getDefense() {
    return this.#aggressivity + this.#leve * 2
  }
  /**
   * 获取等级
   * @returns 等级
   */
   getLevel() {
    return this.#leve
  }
  /**
   * 获取经验值
   * @returns 经验值
   */
   getExp() {
    return this.#exp
  }
  /**
   * 获取名字
   * @returns 名字
   */
  getNmae() {
    return this.#name
  }

}

const player =  new Player()


export default player
