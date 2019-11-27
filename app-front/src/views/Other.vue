<template>
  <div class="about">
    <h1>This is vuex testing</h1>
    <div>这是通过computed生成的count={{ count }}</div>
    <div>这是通过computed生成的localCount={{ localCount }}</div>
    <div>这是通过computed生成的{{ countPlusLocalState }}</div>

    <div>这个是直接读取的 {{$store.state.count}}</div>
    <div>test</div>
    
    <button type="button" @click="$store.commit('initCount')">初始化count</button>

    <button type="button" @click="$store.commit('increment',10)">count+10</button>

    <button type="button" @click="initCount()">初始化count</button>

    <button type="button" @click="increment(2)">Count加2</button>
  </div>
</template>

<script>
import { mapState,mapGetters,mapMutations } from 'vuex'
export default {
  name: 'other', 
  components: {
    
  },
  computed:{
    // count(){
    //   return this.$store.state.count
    // },
    ...mapState({
      // 箭头函数可使代码更简练
      count: state => state.count,
      localCount: state => state.localCount,

      // 为了能够使用 `this` 获取局部状态，必须使用常规函数
      countPlusLocalState (state) {
        return state.count + this.localCount
      }
    }),
    ...mapGetters([
      'doneTodosCount',
      'getTodoById',
    ])
  },
  methods:{
    ...mapMutations([
      'increment', // 将 `this.increment()` 映射为 `this.$store.commit('increment')`

      // `mapMutations` 也支持载荷：
      'initCount' // 将 `this.initCount(amount)` 映射为 `this.$store.commit('initCount', amount)`
    ]),
  },
  mounted(){
    // console.log(this.$store.commit('initCount'))
    this.$store.commit('increment',10)
    // this.$store.dispatch('increment')
    console.log(this.$store.getters.doneTodos)
    console.log('getTodoById')
    console.log(this.$store.getters.getTodoById(2))
    console.log(this.getTodoById(3))
    console.log(this.$store)
  }
}
</script>