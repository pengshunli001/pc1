<template>
  <div class="treeTable" @click="checkfater">
    <zk-table
      ref="table"
      sum-text="sum"
      index-text="#"
      :data="elTree"
      :columns="columns"
      :show-header="true"
      :show-index="false"
      :selection-type="true"
      empty-text=" "
      :border="true"
      :expand-type="false"
      @checkbox-click="checkTable"
    >
      <template slot="likes" slot-scope="scope">
        <i
          class="el-icon-success"
          style="color: green"
          v-if="scope.row.cat_deleted == true"
        ></i>
        <i
          class="el-icon-error"
          style="color: green"
          v-if="scope.row.cat_deleted == false"
           
        ></i>
      </template>
      
      <template slot="level" slot-scope="scope">
        <el-tag type="success" v-if="scope.row.cat_level == 0" effect="dark"
          >一级</el-tag
        >
        <el-tag type="danger" v-if="scope.row.cat_level == 1" effect="dark"
          >二级</el-tag
        >
        <el-tag type="warning" v-if="scope.row.cat_level == 2" effect="dark"
          >三级</el-tag
        >
      </template>
      <template v-if="scope.row.cat_level" slot="opreate" slot-scope="scope">
        <el-button type="primary" size="small" @click="submit(scope.row)"
          >提交</el-button
        >
        <el-button
          type="primary"
          size="small"
          @click="handleEdit(scope.$index, scope.row)"
          >编辑</el-button
        >
        <el-button type="danger" size="small">删除</el-button>
      </template>
    </zk-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      props: {
        stripe: false,
        border: true,
        showHeader: true,
        showSummary: false,
        showRowHover: true,
        showIndex: false,
        treeType: true,
        isFold: true,
        expandType: false,
        selectionType: false,
        dataLength: [],
      },
      elTree: [
        {
          cat_id: 1,
          cat_name: '大家电',
          zongjia: 1100000,

          children: [
            {
              cat_id: 3,
              cat_name: '电视',

              children: [
                {
                  cat_id: 6,
                  cat_name: '电视总类',
                  cat_pid: 2,

                  children: [
                    {
                      cat_id: 7,
                      cat_name: '曲面电视',
                      cat_level: 2,
                      cat_deleted: true,
                      suoshuxitong1: '安卓1',
                      suoshuxitong: '安卓',
                      sushuchanpin: 'vivoe',
                      suoshuyingy: 'QQ',
                      shangpintiaomu: 'QQvip',
                      yongtu: '加速升级',
                      quyu: '深圳',
                      time: '2020-12-14',
                      yongtu1: 'jfjjf',
                      shuliang: '2',
                      danjia: '$5',
                      zongjia: '10',
                      zhuangtai: '使用中',
                      beizhu: 'jfjfjjfjfjfjjfjfjfj',
                    },
                    {
                      cat_id: 8,
                      cat_name: '曲面电视',
                      cat_pid: 2,
                      cat_level: 2,
                      cat_deleted: true,
                      suoshuxitong1: '安卓1',
                      suoshuxitong: '安卓',
                      sushuchanpin: 'vivoe',
                      suoshuyingy: 'QQ',
                      shangpintiaomu: 'QQvip',
                      yongtu: '加速升级',
                      quyu: '深圳',
                      time: '2020-12-14',
                      yongtu1: 'jfjjf',
                      shuliang: '2',
                      danjia: '$5',
                      zongjia: '10',
                      zhuangtai: '使用中',
                      beizhu: 'jfjfjjfjfjfjjfjfjfj',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          cat_id: 1,
          cat_name: '大家电',

          children: [
            {
              cat_id: 3,
              cat_name: '电视',

              children: [
                {
                  cat_id: 6,
                  cat_name: '电视总类',
                  cat_pid: 2,
                  children: [
                    {
                      cat_id: 7,
                      cat_name: '曲面电视',
                      cat_level: 2,
                      cat_deleted: true,
                      suoshuxitong1: '安卓1',
                      suoshuxitong: '安卓',
                      sushuchanpin: 'vivoe',
                      suoshuyingy: 'QQ',
                      shangpintiaomu: 'QQvip',
                      yongtu: '加速升级',
                      quyu: '深圳',
                      time: '2020-12-14',
                      yongtu1: 'jfjjf',
                      shuliang: '2',
                      danjia: '$5',
                      zongjia: '10',
                      zhuangtai: '使用中',
                      beizhu: 'jfjfjjfjfjfjjfjfjfj',
                    },
                    {
                      cat_id: 8,
                      cat_name: '曲面电视',
                      cat_pid: 2,
                      cat_level: 2,
                      cat_deleted: true,
                      suoshuxitong1: '安卓1',
                      suoshuxitong: '安卓',
                      sushuchanpin: 'vivoe',
                      suoshuyingy: 'QQ',
                      shangpintiaomu: 'QQvip',
                      yongtu: '加速升级',
                      quyu: '深圳',
                      time: '2020-12-14',
                      yongtu1: 'jfjjf',
                      shuliang: '2',
                      danjia: '$5',
                      zongjia: '10',
                      zhuangtai: '使用中',
                      beizhu: 'jfjfjjfjfjfjjfjfjfj',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
      columns: [
        {
          label: '项目',
          prop: 'cat_name',
          width: 200,
        },
        {
          label: '所属子产品',
          prop: 'cat_deleted',
          type: 'template',
          template: 'likes',
        },
        {
          label: '所属系统',
          prop: 'suoshuxitong',
        },
        {
          label: '所属子产品',
          prop: 'sushuchanpin',
        },
        {
          label: '所属系统1',
          prop: 'suoshuxitong1',
        },
        {
          label: '所属应用',
          prop: 'suoshuyingy',
        },
        {
          label: '商品条目',
          prop: 'shangpintiaomu',
        },
        {
          label: '用途',
          prop: 'yongtu',
        },
        {
          label: '区域',
          prop: 'quyu',
        },
        {
          label: '使用时间',
          prop: 'time',
        },
        {
          label: '用途1',
          prop: 'yongtu1',
        },
        {
          label: '数量',
          prop: 'shuliang',
        },
        {
          label: '单价',
          prop: 'danjia',
        },
        {
          label: '总价',
          prop: 'zongjia',
        },
        {
          label: '状态',
          prop: 'zhuangtai',
        },
        {
          label: '备注',
          prop: 'beizhu',
        },
        {
          label: '操作',
          type: 'template',
          template: 'opreate',
          width: 300,
        },
      ],
    }
  },
  mounted() {},
  methods: {
    handleEdit(index, row) {
     
      row.edit = true
    },
    submit(data) {
      console.log(data)
    },
    checkTable(event) {
      console.log('111', this.$refs['table'].getCheckedProp().length)
      console.log(
        "this.$refs['table'].getCheckedProp():",
        this.$refs['table'].getCheckedProp('cat_name')
      )
      console.log('elTree：', this.elTree)
      if (this.$refs['table'].getCheckedProp().length > 0) {
        this.$store.commit('count/setShowEditBtn', true)
      } else {
        this.$store.commit('count/setShowEditBtn', false)
      }
    },
    checkfater() {
      setTimeout(() => {
        this.checkTable()
      }, 100)
    },
  },
}
</script>
<style lang='less' scoped>
.treeTable {
  flex: 1;
  height: 3000px;
  .zk-table--tree-icon zk-icon zk-icon-plus-square-o:after {
    color: red;
  }
}
</style>