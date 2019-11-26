<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  methods:{
    init(){
      console.log('test')
    },
    getData(){
      // var url="http://localhost:3000"
      // this.$ajax.get('http://localhost:3000/users').then(function (response) {
      //   console.log(response);
      // }).catch(function (error) { 
      //   console.log(error); 
      // })
      this.$ajax.get('/users').then((response)=>{
        console.log(response)
      }).catch((response)=>{
        console.log(response);
      })
      
    }
  },
  mounted(){
    this.init()
    this.getData()    
  }
}
</script>
