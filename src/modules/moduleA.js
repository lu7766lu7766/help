// actions、mutations 以及 getters 依然注册在全局命名空间
// 官方建議使用命名空間type.js
// export const DONE_COUNT = 'todos/DONE_COUNT'
// export const FETCH_ALL = 'todos/FETCH_ALL'
// export const TOGGLE_DONE = 'todos/TOGGLE_DONE'
// import * as types from '../types'
// getters: {
//     [types.DONE_COUNT] (state) {
//       // ...
//     }
// }

export default {
    state: { count: 1 },
    mutations: {
        increment(state, amount=1) {
            // 改变 state
            state.count += amount;
        }
    },
    actions: {
        incrementAsync({ commit, state }, payload) {
            setTimeout(() => {
				commit('increment',payload.amount)
			}, 1000);
        }
    },
    getters: {
        doubleCount: (state, getters) => {
            return state.count * 2;
        }
    }
}