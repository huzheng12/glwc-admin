<template>
  <div class="basicPage">
    <div class="titleLeft">
      <div>变更</div>
      <div class="titleName-li" @click="projectss">
        <i class="el-icon-edit-outline elRight"></i>查看变更审批状态
      </div>
    </div>
    <div class="titleName">
      <div class="titleName-li" @click="sponsor">
        <i class="el-icon-edit-outline elRight"></i>发起变更
      </div>
      <div class="titleName-li" @click="recordChange">
        <i class="el-icon-edit-outline elRight"></i>查看变更记录
      </div>
      <div class="titleName-li" @click="projectss">
        <i class="el-icon-edit-outline elRight"></i>编辑
      </div>
    </div>

    <div class="basicPage_header">
      <div class="oneDiv">
        <div class="left">
          <div class="title">企业名称</div>
          <div class="content">{{ IndustryMsg.qymc }}</div>
        </div>
        <div class="center">
          <div class="title">曾用名</div>
          <div class="content">{{ IndustryMsg.zym }}</div>
        </div>
        <div class="right">
          <div class="title">主体类型</div>
          <div class="content">{{ IndustryMsg.ztlx }}</div>
        </div>
      </div>
      <div class="oneDiv">
        <div class="left">
          <div class="title">企业类型</div>
          <div class="content">{{ IndustryMsg.qylx }}</div>
        </div>
        <div class="center">
          <div class="title">法定代表人</div>
          <div class="content">{{ IndustryMsg.fddbr }}</div>
        </div>
        <div class="right">
          <div class="title">统一社会信用代码</div>
          <div class="content">{{ IndustryMsg.xydm }}</div>
        </div>
      </div>
      <div class="oneDiv">
        <div class="left">
          <div class="title">注册资本</div>
          <div class="content">{{ IndustryMsg.zczb }}</div>
        </div>
        <div class="center">
          <div class="title">实收资本</div>
          <div class="content">{{ IndustryMsg.sszb }}</div>
        </div>
        <div class="right">
          <div class="title">成立日期</div>
          <div class="content">{{ IndustryMsg.clrq }}</div>
        </div>
      </div>
      <div class="oneDiv">
        <div class="left">
          <div class="title">邮箱</div>
          <div class="content">{{ IndustryMsg.yx }}</div>
        </div>
        <div class="center">
          <div class="title">许可经营项目</div>
          <div class="content">{{ IndustryMsg.jyxm }}</div>
        </div>
        <div class="right">
          <div class="title">经营期限</div>
          <div class="content">{{ IndustryMsg.jyqx }}</div>
        </div>
      </div>
      <div class="oneDiv">
        <div class="left">
          <div class="title">登记机关</div>
          <div class="content">{{ IndustryMsg.djjg }}</div>
        </div>
        <div class="center">
          <div class="title">公司地址</div>
          <div class="content">{{ IndustryMsg.gsdz }}</div>
        </div>
        <div class="right">
          <div class="title">经营状态</div>
          <div class="content">{{ IndustryMsg.jyzt }}</div>
        </div>
      </div>
      <div class="oneDiv">
        <div class="left">
          <div class="title">国民经济代码名称</div>
          <div class="content">{{ IndustryMsg.dmmc }}</div>
        </div>
        <div class="center">
          <div class="title">所在省份</div>
          <div class="content">{{ IndustryMsg.szsf }}</div>
        </div>
        <div class="right">
          <div class="title">所在城市</div>
          <div class="content">{{ IndustryMsg.szcs }}</div>
        </div>
      </div>
      <div class="oneDiv">
        <div class="left">
          <div class="title">所在区县</div>
          <div class="content">{{ IndustryMsg.szqx }}</div>
        </div>
        <div class="center">
          <div class="title">注册地址行政编号</div>
          <div class="content">{{ IndustryMsg.xzbm }}</div>
        </div>
        <div class="right">
          <div class="title">核准日期</div>
          <div class="content">{{ IndustryMsg.hzrq }}</div>
        </div>
      </div>
      <div class="oneDiv">
        <div class="left">
          <div class="title">注销日期</div>
          <div class="content">{{ IndustryMsg.zxrq }}</div>
        </div>
        <div class="center">
          <div class="title">吊销日期</div>
          <div class="content">{{ IndustryMsg.dxrq }}</div>
        </div>
        <div class="right">
          <div class="title"></div>
          <div class="content"></div>
        </div>
      </div>
    </div>
    <!-- 发起变更 -->
    <el-dialog
      title="发起变更"
      :visible.sync="alteration"
      :modal-append-to-body="false"
      append-to-body
    >
      <!-- 主体工商信息变更申请 -->
      <div class="subclass">
        <div class="labelTitel">
          <div>主体工商信息变更申请</div>
          <span class="svg-container">
            <svg-icon icon-class="user" />
            编辑
          </span>
        </div>
        <div class="basicPage">
          <div class="basicPage_header">
            <div class="oneDiv">
              <div class="left">
                <div class="title">申请日期</div>
                <div class="content">{{ basicData.sqrq }}</div>
              </div>

              <div class="center">
                <div class="title">主体成立编号</div>
                <div class="content">{{ basicData.ztclbh }}</div>
              </div>
            </div>
            <div class="oneDiv">
              <div class="left">
                <div class="title BTop">申请单位</div>
                <div class="content BTop">{{ basicData.sqdw }}</div>
              </div>
            </div>
            <div class="oneDiv">
              <div class="left">
                <div class="title BTop">申请单位意见</div>
                <div class="content BTop">{{ basicData.dwyj }}</div>
              </div>
            </div>
            <div class="oneDiv">
              <div class="left">
                <div class="title BTop">总裁意见(如需)</div>
                <div class="content BTop">{{ basicData.zcyj }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 变更详情 -->
      <div class="subclass">
        <div class="labelTitel">
          <div>变更详情</div>
          <span>
            <span class="svg-container">
              <svg-icon icon-class="user" />
              添加
            </span>
            <span class="svg-container" style="color: red">
              <svg-icon icon-class="user" />
              删除
            </span>
          </span>
        </div>
        <el-table
          :data="table.data"
          style="width: 100%; border: 1px solid #e7eaeb"
        >
          <el-table-column
            v-for="(item, i) in table.column"
            :key="i"
            :prop="item.prop"
            :label="item.label"
            align="center"
            show-overflow-tooltip
          >
          </el-table-column>
        </el-table>
      </div>
      <div style="padding: 0 20px 10px 0; text-align: right">
        <el-button @click="alteration = false">保存草稿</el-button>
        <el-button type="primary" @click="alteration = false"
          >发起审批</el-button
        >
      </div>
    </el-dialog>
    <!-- 查看变更记录 -->
    <el-dialog
      title="人事变动"
      :visible.sync="record"
      :modal-append-to-body="false"
      append-to-body
    >
      <div class="dialogTitle" @click="projectss">
        <i class="el-icon-edit-outline elRight"></i>添加
      </div>
      <Eltable :data="recordData" :settings="recordSettings" />
    </el-dialog>
  </div>
</template>

<script>
import Eltable from "@/components/table";
export default {
  components: {
    Eltable,
  },
  data() {
    return {
      IndustryMsg: {
        qymc: "1",
        zym: "2",
        ztlx: "3",
        qylx: "4",
        fddbr: "5",
        xydm: "6",
        zczb: "7",
        sszb: "8",
        clrq: "9",
        yx: "0",
        jyxm: "1",
        jyqx: "2",
        djjg: "3",
        gsdz: "4",
        jyzt: "5",
        dmmc: "6",
        szsf: "7",
        szcs: "8",
        szqx: "9",
        xzbm: "0",
        hzrq: "1",
        zxrq: "2",
        dxrq: "3",
      },
      alteration: false,
      basicData: {
        sqrq: "1234567",
        ztclbh: "1234567",
        sqdw: "传统不良找券资产包",
        dwyj: "中国建设银行上海市分行",
        zcyj: "中国建设银行上海市分行备份",
      },
      table: {
        column: [
          {
            label: "序号",
            prop: "xh",
          },
          {
            label: "变更类型",
            prop: "bglb",
          },
          {
            label: "变更项目/人员",
            prop: "bgxm",
          },
          {
            label: "变更后",
            prop: "bgh",
          },
          {
            label: "变更原因",
            prop: "bgyy",
          },
          {
            label: "变更日期",
            prop: "bgrq",
          },
        ],
        data: [
          {
            xh: "222",
            bglb: "基本工商信息",
            bgxm: "企业法人",
            bgh: "2020-10-20",
            bgyy: "111",
            bgrq: "2020-10-20",
          },
        ],
      },
      record: false,
      recordSettings: {
        isBorder: false,
      },
      recordData: {
        column: [
          {
            label: "序号",
            prop: "xh",
            width:'60px'
          },
          {
            label: "变更日期",
            prop: "bgrq",
          },
          {
            label: "变更项目",
            prop: "bgxm",
          },
          {
            label: "变更前",
            prop: "bgq",
          },
          {
            label: "变更后",
            prop: "bgh",
          },
        ],
        data: [
          {
            xh: "是",
            bgrq: "2020-10-20",
            bgxm: "平安资产管理有限公司",
            bgq: "查看变动记录",
            bgh: "企业法人",
          },
        ],
      },
    };
  },
  methods: {
    projectss() {},
    sponsor() {
      this.alteration = true;
    },
    recordChange() {
      this.record = true;
    },
  },
};
</script>

<style  lang="scss" scoped>
@import "@/views/components-demo/components/scss/index.scss";
.titleLeft {
  display: flex;
  position: absolute;
  top: -35px;
  left: 82px;
  font-size: 12px;
  font-weight: 400;
  color: #2b57ff;
  align-items: center;
  height: 28px;
  cursor: pointer;
  div:nth-child(1) {
    width: 48px;
    height: 20px;
    line-height: 20px;
    text-align: center;
    background: #fcefe8;
    border-radius: 3px;
    margin-right: 28px;
    color: #e96722;
  }
}
.labelTitel {
  font-weight: 500;
  color: #222222;
  font-size: 14px;
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;
  > div {
    padding-left: 5px;
    font-size: 14px;
    font-weight: 600;
    color: #222222;
    border-left: 2px solid #2b57ff;
  }
  > span {
    font-size: 12px;
    color: #2b57ff;
    cursor: pointer;
  }
}
.subclass {
  margin-bottom: 30px;
}
.dialogTitle{
  position: absolute;
  left: 120px;
  top: 26px;
  color: #2B57FF;
}
</style>