import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        clothingList: [
            { name: 123, class: '上衣' },
            { name: 12, class: '裤子' },
        ],
    },
    mutations: {
        addclothing(state, v) {
            state.clothingList.push(v)
        },
    },
    actions: {},
})

export default store
