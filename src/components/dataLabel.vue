<template>
<div  class="label">
    <div class="left">
        <img :src="url" alt="未加载" class="image" >
    </div>
    <div class="right">
        <div class="top"> 
            <p class="data">{{name}}</p>
            <p class="year">{{year}}</p>
            <img src="../../static/image/male.png" class="sex"></img>
            <p class="address">{{address}}</p>
        </div>
        <div class="segmentation"></div>
        <div class="bottom">
        <p class="intro">{{introduction}}</p>
        </div>
    </div>
</div>
</template>
<script>
export default {
    props:{
        url:{
            type:String,
            default:()=>{
                return " "
            }
        },
        year:{
            type:Number,
            default:()=>{
                return 0
            }

        },
        introduction:{
            type:String,
            default:()=>{
                return "hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world";
            }
        },
        name:{
            type:String,
            default:()=>{
                return "姓名";
            }
        },
        address:{
            type:String,
            default:()=>{
                return "省份/市"
            }
        }

    },
    data(){
        return{
            
        }
    },
    
    created(){
        //console.log(this.url);

    },
    methods:{

    }
    
}
</script>

<style>
.label{
    margin-bottom: 9px;
    width:500px;
    display:flex;
}
.left{
    display: inline;
    float: left;
    width: 100px;
    height: 101px;
    margin-right: 20px;
}
.image{
    height: 100px;
    width: 100px;
    /* 图片在p中垂直居中 */
    vertical-align: middle;
    border-radius: 100%;

}
.segmentation{
    /* 分割线 */
    height: 1px;
    /* border: 1px solid #909399; */
    background-color: #909399;
}
.right{
    width:300px;
    height: 101px;
}
.top{
    height: 50px;
    width:300px;
    text-align: left;
    display: flex;
    display: -webkit-flex;
    align-items: center;

}
.bottom{
    height: 50px;
    width: 300px;
}
.data{
    line-height: 50px;
    height: 50px;
    width: 100px;
    display: inline-block;
    text-align: left;

}
.year{
    margin-right: 25px;

}
.sex{
    width: 25px;
    height: 25px;
    vertical-align: center;
    
}
.address{
    margin-left: 25px;
}
.intro{
    height: 50px;
    text-overflow: ellipsis;
    overflow: hidden;
    /* 限制显示两行，溢出隐藏 */
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
}

</style>