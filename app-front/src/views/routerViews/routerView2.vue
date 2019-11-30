<template>
  <div class="">
    <h1>this view is routerView2 </h1>
    <div>
        测试动态路由效果
        <input type="text" v-model="input">
    </div>
  </div>
</template>
<script>
export default {
  name: 'routerView2',
  components: {
    
  },
  data(){
    return{
        input:''
    }
  },
  methods:{
    
  },
  mounted(){   
  }
}
</script>
