<template>
  <div>
    <TableTest :col="thead" :data="dataList" :select="select">
      <template v-slot:optation="slotData">
        <div style="display:flex">
          <el-button type="danger" @click="cancel(slotData.data)">删除</el-button>
          <el-button type="success">提交</el-button>
          <el-button type="primary">查看</el-button>
        </div>
      </template>
    </TableTest>
  </div>
</template>
<script>
import TableTest from '../components/table/tableTest'
export default {
  data() {
    return {
      thead: [
        {
          label: '日期',
          prop: 'data',
        },
        {
          label: '类型',
          prop: 'type',
          type: 'function',
          callback: (row, prop) => {
            //将prop字段传出来
            const data = this.parking.filter((item) => {
              return item.value == row[prop]
            })
            if (data && data.length > 0) {
              return data[0].label
            }
          },
        },
        {
          label: '地址',
          prop: 'address',
          type: 'function',
          callback: (row, prop) => {
            //换行
            const address = row[prop]
            let addressInfo = ''
            if (address) {
              let split = address.split(',')
              addressInfo += split[0]
              if (split[1]) {
                addressInfo += `<br/>${split[1]}`
              }
            }
            return addressInfo
          },
        },
        {
          label: '开关',
          prop: 'switch',
          type: 'switch',
        },
        {
          label: '操作',
          prop: 'oprataion',
          type: 'slot',
          name: 'optation',
        },
      ],
      select: true,
      dataList: [
        {
          data: '2018/2/12',
          type: 1,
          address: '广东省深圳市福田区,894520',
          switch: true,
          id: 1,
        },
        {
          data: '2018/2/12',
          type: 2,
          address: '广东省深圳市福田区,5230',
          switch: false,
          id: 2,
        },
        {
          data: '2018/2/12',
          type: 1,
          address: '广东省深圳市福田区,2250',
          switch: true,
          id: 3,
        },
      ],
      parking: [
        {
          label: '室内',
          value: 1,
        },
        { label: '室外', value: 2 },
      ],
    }
  },
  mounted() {},
  components: {
    TableTest,
  },
  methods: {
    cancel(data) {
      const id = data.id
      for (var i = 0; i < this.dataList.length; i++) {
        console.log(this.dataList)
        if (this.dataList[i].id == id) {
          this.dataList.splice(i, 1)
        }
      }
      console.log('data', id)
    },
  },
}
</script>
<style scoped>
</style>