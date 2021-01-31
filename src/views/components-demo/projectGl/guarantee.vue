<template>
  <div class="guarantee">
    <div class="guarantee-box-tabs">
      <div class="tabs-box">
        <div
          v-for="(item, index) in tabHeader"
          :key="index"
          :class="{ tabsHeaderLeft: true, tabsActive: tabsActive === index }"
          @click="clickActive(index)"
        >
          {{ item.title }}
        </div>
      </div>
      <div class="but-icon">
        <div class="titleName">
          <div class="titleName-li">
            <i class="el-icon-edit-outline elRight"></i>添加
          </div>
          <div class="titleName-li">
            <i class="el-icon-edit-outline elRight"></i>编辑
          </div>
          <div class="titleName-li redDel">
            <i class="el-icon-edit-outline elRight"></i>删除
          </div>
        </div>
      </div>
    </div>
    <el-table
      class="guarantee-table"
      :data="tableData"
      style="width: 100%; border: 1px solid #e7eaeb"
    >
      <el-table-column prop="date" label="名称" width="180"> </el-table-column>
      <el-table-column prop="name" sortable label="担保责任最高限额">
      </el-table-column>
      <el-table-column prop="address" sortable label="保证估值">
      </el-table-column>
      <el-table-column prop="address" sortable label="时效管理">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabsActive: 0,
      tabHeader: [
        {
          title: "全部",
        },
        {
          title: "保证人",
        },
        {
          title: "抵押物",
        },
        {
          title: "质押物",
        },
        {
          title: "其他保证",
        },
      ],
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
    };
  },
  methods: {
    clickActive(i) {
      console.log(i);
      this.tabsActive = i;
    },
  },
};
</script>

<style  lang="scss" scoped>
.guarantee {
  .guarantee-box-tabs {
    display: flex;
    justify-content: space-between;
    .tabs-box {
      display: flex;
    }
    .tabsHeaderLeft {
      width: 84px;
      height: 46px;
      border-radius: 2px 2px 0px 0px;
      border: 1px solid #e7eaeb;
      margin-right: 6px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #999999;
      line-height: 46px;
      text-align: center;
      cursor: pointer;
    }
    .tabsActive {
      background: rgba(43, 87, 255, 0.05);
      color: #2b57ff;
      border-bottom: 0;
    }
    .titleName {
      position: inherit;
      display: flex;
      font-size: 12px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #2b57ff;
      align-items: center;
      height: 28px;
      cursor: pointer;
      .titleName-li {
        display: inline-block;
        margin-left: 13px;
      }
      .elRight {
        padding-right: 5px;
      }
    }
  }
}
.guarantee-table table thead tr th {
  background: rgba(43, 87, 255, 0.05);
}
</style>