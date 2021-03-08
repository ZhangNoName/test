<template>
  <el-container>
  <el-aside width="200px">
    <div class="photo" style="margin-top:100px">
    <el-avatar shape="square" :size="100"  :src="userPhotoUrl"></el-avatar>
    </div >
    <div class="message">
    <span displapy="block">姓名：{{userName}}</span>
    </div>
    <div class="message">
    <span>账号：{{userId}}</span>
    </div>
    </el-aside>
  <el-container>
    <el-header>
      <el-menu
        :default-active="this.$route.path"
        router
        class="el-menu-demo"
        mode="horizontal"
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        width="100%">
        <el-menu-item index="/components/userMangager">用户管理</el-menu-item>
        <el-menu-item index="/components/deviceMangager">设备管理</el-menu-item>
        <el-menu-item index="/components/testMangager">测试管理</el-menu-item>
        <el-menu-item><a href="https://www.ele.me" target="_blank">点餐订饭</a></el-menu-item>
</el-menu>
</el-header>
    <el-main>
      <router-view></router-view>
      </el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</el-container>
<!-- <el-submenu index="/deviceMangager">
          <template slot="title">设备管理</template>
          <el-menu-item index="2-1">技术研发部</el-menu-item>
          <el-menu-item index="2-2">市场部</el-menu-item>
          <el-menu-item index="2-3">财务部</el-menu-item>
          <el-menu-item index="2-4">宣传部</el-menu-item>
          <el-menu-item index="2-5">人力资源部</el-menu-item>        
        </el-submenu>
        <el-submenu index="/testMangager"> -->
          <!-- <template slot="title" >测试管理</template>
          <el-menu-item index="3-1">产品1测试</el-menu-item>
          <el-menu-item index="3-2">产品2测试</el-menu-item>
          <el-submenu index="3-3">
            <template slot="title">产品3测试</template>
            <el-menu-item index="3-3-1">员工1</el-menu-item>
            <el-menu-item index="3-3-2">员工2</el-menu-item>
          </el-submenu>      
        </el-submenu> -->
</template>

<style>
*{
  margin: 0;
  padding: 0;
}
html,body,#app,.el-container{
        height: 100%;
    }
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
    padding: 0;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    position: relative;
    height: 100%;
    overflow: hidden;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  .photo {
    margin: 50px,auto ;
  }
  .message{
    text-align: center;
    line-height: 50px;
    margin: 20px,auto;
    height: 50px;
  }
  span{
    margin: 20px,auto;
    display:inline-block;
  }
</style>

<script>
export default{
  data(){
    return{
      userName:"用户1",
      userId:"1234679",
      userPhotoUrl:"../../static/image/1.jpg",     
    }
  },
  methods:{
    //实现路由的局部刷新
    reloadRouter(path) {
      this.$router.replace({
        path: "/redirect",
        query: {
          nextPath: path
        }
      });
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }


}

</script>
