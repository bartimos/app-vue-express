<template>
  <div class="">
    <h1>this view is testing router 动态路由 </h1>
    <div id="nav">
        <!-- <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> | -->
        <router-link to="/routerTest/routerView1">routerView1</router-link> |
        <router-link to="/routerTest/routerView2">routerView2</router-link> 
    </div>
    <div>
        测试一个弹性盒子
        <div class="flex-container">
            <div class="flex-menu">
                <h3>选择的标题</h3>    
                <div v-for="(routerUrl,index) in routerList" :key="index">
                    <router-link :to="routerUrl">routerView{{index+1}}</router-link> 
                </div>    
                <!-- <div>
                    <router-link to="/routerTest/routerView1">routerView1</router-link> 
                </div>  
                <div>
                    <router-link to="/routerTest/routerView2">routerView2</router-link>     
                </div>       -->
            </div>
            <div class="flex-content">
                <div>

                </div>
                <h3>动态展示的内容</h3>  
                <div>
                    这是router渲染的区域
                    <keep-alive>
                        <router-view></router-view>
                    </keep-alive>
                    <!-- <transition name="fade">
                        <keep-alive>
                            <router-view></router-view>
                        </keep-alive>
                    </transition>     -->
                </div>
            </div>

        </div>
    </div>

  </div>
</template>
<script>
export default {
  name: 'routerTest',
  components: {
    
  },
  data(){
    return {
      routerList:['/routerTest/routerView1','/routerTest/routerView2']
    }
  },
  methods:{
    
  },
  mounted(){   
  }
}
</script>

<style lang="scss">
.flex-container {
    display: -webkit-flex;
    display: flex;
    width: 100%;
    height: 800px;
    background-color: lightgrey;
}
 
.flex-item {
    background-color: cornflowerblue;
    width: 20%;
    // height: 100px;
    margin: 10px;
}
.flex-menu {
    background-color: cornflowerblue;
    margin: 10px;
    width: 25%;
}
.flex-content {
    padding: 2vh 2vw;
    text-align: left;
    background-color: cornflowerblue;
    margin: 10px;
    width: 75%;
    // height: 50%;
    // min-height: 10%
}
</style>

