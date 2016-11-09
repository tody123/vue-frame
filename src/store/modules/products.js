/**
 * @author walid
 * @description searchGroup 模块
 * @date 2016/11/09
 */

import * as types from '../mutation-types'

// initial state
const state = {
  all: []
}

// mutations
const mutations = {
  [types.RECEIVE_PRODUCTS] (state, {
    products
  }) {
    state.all = products
  },

  [types.ADD_TO_CART] (state, {
    id
  }) {
    state.all.find(p => p.id === id).inventory--
  }
}

export default {
  state,
  mutations
}
