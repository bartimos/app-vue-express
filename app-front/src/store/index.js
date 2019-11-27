import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count:1,
    localCount:2,
    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false },
      { id: 3, text: '...', done: true },
      { id: 4, text: '...', done: false },
      { id: 5, text: '...', done: true },
      { id: 6, text: '...', done: false }
    ]
  },
  getters:{
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    },
    // getter 的方法可以传入getters
    doneTodosCount: (state, getters) => {
      return getters.doneTodos.length
    },
    getTodoById: (state) => (id) => {
      return state.todos.find(todo => todo.id === id)
    }
  },
  // 每个 mutation 都有一个字符串的 事件类型 (type) 和 一个 回调函数 (handler)。
  // 要唤醒一个 mutation handler，你需要以相应的 type 调用 store.commit 方法 
  mutations: {
    increment (state, obj) {
      state.count += obj
    },
    initCount (state) {
      state.count = 0
    }
  },
  actions: {
    //Action 函数接受一个与 store 实例具有相同方法和属性的 context 对象，因此你可以调用 context.commit 提交一个 mutation，
    increment (context) {
      context.commit('increment')
    },
    // 简化代码
    // increment ({ commit }) {
    //   commit('increment')
    // }
    incrementAsync ({ commit }) {
      setTimeout(() => {
        commit('increment',10)
      }, 5000)
    }
  },
  modules: {
  }
})
