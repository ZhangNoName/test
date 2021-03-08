<template>
<div>
  <el-carousel :interval="4000" type="card" height="200px">
    <el-carousel-item v-for="item in imgList" :key="item.name">
      <img style="width:100%;height:100%;" :src="item.src"/>
    </el-carousel-item>
  </el-carousel>
  <el-container>
      <el-aside width="50%">
            <label>设备情况：
            <el-progress :percentage="onlineNum.divice" :color="colors" format="设备情况"></el-progress></label>
            <label>测试计划情况：</label>
            <el-progress :percentage="onlineNum.test" :color="colors"></el-progress>
            <label>在线测试专家：</label>
            <el-progress :percentage="onlineNum.professor" :color="colors"></el-progress>
      </el-aside>
      <el-main></el-main>
  </el-container>
</div>
</template>

<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>

<script>
export default {
    data(){
        return{
            imgList:[
                {
                    name:"chun",
                    src:"../../static/image/chun.jpg"
                },
                {
                    name:"xia",
                    src:"../../static/image/xia.jpg"
                },
                {
                    name:"qiu",
                    src:"../../static/image/qiu.jpg"
                },
                {
                    name:"dong",
                    src:"../../static/image/dong.jpg"
                },
            ],
            onlineNum:{
                divice:"59",
                test:"31",
                professor:86,
            },
            colors: [
          {color: '#f56c6c', percentage: 20},
          {color: '#e6a23c', percentage: 40},
          {color: '#5cb87a', percentage: 60},
          {color: '#1989fa', percentage: 80},
          {color: '#6f7ad3', percentage: 100}
        ]
        }
    }
    
}
</script>