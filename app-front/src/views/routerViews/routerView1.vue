<template>
  <div class="">
    <h1>this view is routerView1 </h1>
    <div>
      测试动态路由效果
      <input type="text" v-model="input">
    </div>
    <div>
      <h2>动画效果</h2>
      <div id="demo">
        <button v-on:click="show = !show">
            Toggle
        </button>
        <transition name="transitionName">
            <p v-if="show">hello</p>
        </transition>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'routerView1',
  components: {
    
  },
  data(){
    return{
      input:'',
      show: true

    }
  },
  methods:{
    
  },
  mounted(){   
  }
}
</script>

<style lang="scss">
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

