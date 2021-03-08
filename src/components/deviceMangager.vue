<template>
  <el-table
    :data="tableData"
    stripe
    style="width: 100%">
    <el-table-column
      prop="name"
      label="设备名称"
      width="180">
    </el-table-column>
    <el-table-column
      prop="num"
      label="设备台数"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="操作">
      <template slot-scope="scope">
          <el-button type="primary" icon="el-icon-edit" circle></el-button>
          <el-button type="danger" icon="el-icon-delete" circle></el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          name: '手机',
          num:'5'
        }, {
          name: '电脑',
          address: '8'
        }, {
          name: '平板',
          num:'10'
        }]
      }
    }
  }
</script>