<template>
  <div>
    <div><el-button @click="dialogVisible = true">add</el-button></div>
    <el-table
    :data="tableData"
    stripe
    style="width: 100%">
    <el-table-column
      prop="name"
      label="姓名">
    </el-table-column>
    <el-table-column
      prop="gender"
      label="性别">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址">
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-dialog
    title="添加"
    :visible.sync="dialogVisible"
    width="30%">
    <div>
      name:<el-input v-model="formData.name"></el-input><br>
      gender:<el-input v-model="formData.gender"></el-input><br>
      address:<el-input v-model="formData.address"></el-input><br>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="addNew">确 定</el-button>
    </span>
  </el-dialog>
  </div>
</template>

<script>
import axios from 'axios'
import { getList, add } from '../common/js/interface.js'

export default {
  name: 'test',
  props: { },
  components: { },
  data () {
    return {
      tableData: [],
      dialogVisible: false,
      formData: {}
    }
  },
  mounted () {
    this.getInfo()
  },
  methods: {
    getInfo () {
     getList()
        .then(data => {
          console.log(data.data)
          this.tableData = data.result
        })
    },
    addNew () {
      add(this.formData)
        .then(data => {
          this.dialogVisible = false
          this.getInfo()
        })
    },
    handleEdit (i, obj) {
      console.log(i, obj)
      this.$confirm('待开发', '提示')
    },
    handleDelete (i, obj) {
      console.log(i, obj)
      this.$confirm('待开发', '提示')
    }
  }
}
</script>

<style lang="less" scoped>

</style>
