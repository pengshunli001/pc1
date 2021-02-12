<template>
  <div class="wrap">
  
    <div style="margin-top: 20px" v-if="fieldTree.id && tableOptions.length">
      <mul-table
        :options="tableOptions"
        :data="tableData"
        :operate="true"
        :tableMaxHeight="maxHeight"
        :cellStyle="cellStyle"
      >
        <template slot="tijiao" slot-scope="scope">
          <div>{{ fillState[scope.row.deptName] }}</div>
        </template>
        <template slot="depts" slot-scope="scope">
          <div>{{ scope.row.deptName }}</div>
          <span>{{ scope.row.userName }}</span>
        </template>
        <template slot="edit" slot-scope="scope">
          <div v-if="showEditSet(scope)">
            <el-input
              class="edit-input"
              style="width: 100%; text-align: center"
              :min="0"
              placeholder="点击即可编辑"
              v-model="scope.row[scope.prop]"
            ></el-input>
          </div>
          <div v-else>{{ scope.row[scope.prop || '-'] }}</div>
        </template>
        <template slot="operate" slot-scope="scope">
          <el-button
            type="text"
            :disabled="scope.row.dataState !== 3"
            @click="backClick(scope.row)"
            >退回</el-button
          >
        </template>
      </mul-table>
      <div
        v-if="
          tableData[0].remark &&
          role == 1 &&
          (tableData[0].dataState == 4 || tableData[0].dataState == 2)
        "
        style="margin: 20px; color: red"
      >
        退回意见：{{ tableData[0].remark }}
      </div>
    </div>
  </div>
</template>
<script>
import mulTable from '../components/table/tableRender'
export default {
  name: 'good',
  data() {
    return {
      fieldTree: {
        id: 1,
      },
      tableOptions: [
        {
          label: '提交情况',
          width: 90,
          slot: 'tijiao',
          fixed: true,
        },
        {
          label: '填报单位',
          width: 180,
          slot: 'depts',
          fixed: true,
        },
      ],
      tableData: [
        {
          remark: '',
        },
      ],
      role: 2,
      useState: 1,
      maxHeight: 500,
      cellStyle: '',
    }
  },
  components: {
    mulTable,
  },
  mounted(){
    
  }
}
</script>
<style lang='less' scoped>
.wrap{
  transform: translateX(6.25rem)translateY(50px)
  scaleX() scaleY() rotateX(30deg) rotateY()
  skew()
  skewX() 
  skewY()

}
</style>