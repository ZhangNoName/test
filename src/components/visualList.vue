<template>
<div style="display:flex">
    <div id="tableContain" class="contain" ref="contain"  @scroll="scrollListener">
        <div class="table1" ref="table1"></div>
            <el-table
            ref="showTable"
            class="showTable"
            :data="tableData"
            height="850px"
            border
            style="width: 750px">
                <el-table-column
                prop="index"
                label="序号"
                width="180">
                </el-table-column>
                <el-table-column
                prop="date"
                label="日期"
                width="180">
                </el-table-column>
                <el-table-column
                prop="name"
                label="姓名"
                width="180">
                </el-table-column>
                <el-table-column
                prop="address"
                label="地址">
                </el-table-column>
            </el-table>
    </div>
    <div  id="labelContain" class="contain" style="margin-left:20px" ref="labelContain" @scroll="scrollListener">
        <div class="table1" ref="label1"></div>
        <div class="showTable" ref="showLable">
            <data-label :url="url" :year="item.num" v-for="item in labelData" :key="item.num"></data-label>
        </div>
    
    </div>
    </div>
</template>

<script>
import dataLabel from "./dataLabel";
export default {
  components: { dataLabel },
    data(){
        return {
            rowNum:20,
            tableData:[{
                index:1,
                date:"周一",
                name:"zxy",
                address:"cdut"
            }],
            list:[],
            rowHeight:40,
            labelHeight:100,
            labelData:[{num:0,url:"https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"}],

            strat:0,
            end:20,
            labelNum:10,
            url:"https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
            showList:[],
            //url:"../../static/image/5.png",
        }
    },
    created(){
        for(var i=0;i<1000;i++){
            this.list.push({
                index:i,
                date:"周一",
                name:"zxy",
                address:"cdut"});
            this.showList.push({num:i,url:this.url});      
        }
        //计算滚动容器高度
         console.log(this.list);   
         console.log(this.showList); 

    },
    mounted(){
            this.$refs.contain.style.height = this.rowHeight * this.rowNum + 'px';
            //计算总的数据需要的高度，构造滚动条高度
            this.$refs.table1.style.height = this.rowHeight * this.list.length + 'px';

            this.$refs.labelContain.style.height = this.labelHeight * this.labelNum + 'px';
            this.$refs.label1.style.height = this.labelHeight * this.showList.length + 'px';
            

            this.$refs.contain.addEventListener("scroll",this.scrollListener);
            this.$refs.labelContain.addEventListener("scroll",this.scrollListener);
    },
    methods:{          
            scrollListener(e){       
                //console.log(e);                                                            
                //获取滚动高度
                let scrollTop = e.target.scrollTop;
                //开始的数组索引
                
                
                //绝对定位对相对定位的偏移量
                //this.$refs.showTable.style.top = this.start * this.rowHeight + 'px';
                
                // console.log(e.target);
                // console.log(e.target.id);
                if(e.target.id=="tableContain"){
                    this.start = Math.floor(scrollTop / this.rowHeight);
                    //结束索引
                    this.end = this.start + this.rowNum;
                    this.tableData=this.list.slice(this.start, this.end);
                    this.$refs.showTable.style.top = this.start * this.labelHeight + 'px';
                }else if(e.target.id=="labelContain"){
                    this.start = Math.floor(scrollTop / this.labelHeight);
                    //结束索引
                    this.end = this.start + this.labelNum;
                    this.labelData=this.showList.slice(this.start, this.end);
                    //绝对定位对相对定位的偏移量
                    this.$refs.showLable.style.top = this.start * this.labelHeight + 'px';
                    //console.log(this.labelData);
                    
                }
                console.log("show:  "+this.start+" "+this.end);
                
            }

    }
    
}

</script>

<style>
.contain{
    overflow: auto;
    position: relative;
    height:900px;
    width:800px;
    border: 1px solid #c1c1c1;
}
.table1{
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    z-index: -1; 
}
.el-table__row{
    height:40px;
}
.showTable{
    left: 0;
    right: 0;
    top: 0;
    position: absolute;
}
</style>