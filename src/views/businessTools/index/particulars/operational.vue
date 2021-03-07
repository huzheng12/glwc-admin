<template>
  <div class="basicPage">
    <div class="titleName">
      <!-- <div class="titleName-li" @click="projectss">
        <i class="el-icon-edit-outline elRight"></i>编辑
      </div> -->
    </div>
    <div class="subclass">
      <div class="labelTitel">
        <div>综合被执行人</div>
        <span class="svg-container">
          <svg-icon icon-class="user" />
          添加
        </span>
      </div>
      <Eltable :data="operationalData" :settings="zxrSettings" />
    </div>
    <!-- 失信被执行人 -->
    <div class="subclass">
      <div class="labelTitel">
        <div>失信被执行人</div>
        <span class="svg-container">
          <svg-icon icon-class="user" />
          编辑
        </span>
      </div>
      <div class="basicPage_header">
        <div class="oneDiv">
          <div class="left">
            <div class="title">主体名称</div>
            <div class="content">{{ executor.ztmc }}</div>
          </div>
          <div class="center">
            <div class="title">案号</div>
            <div class="content">{{ executor.ah }}</div>
          </div>
          <div class="right">
            <div class="title">案件状态</div>
            <div class="content">{{ executor.ajzt }}</div>
          </div>
        </div>

        <div class="oneDiv">
          <div class="left">
            <div class="title">年龄</div>
            <div class="content">{{ executor.nl }}</div>
          </div>
          <div class="center">
            <div class="title">性别</div>
            <div class="content">{{ executor.xb }}</div>
          </div>
          <div class="right">
            <div class="title">法定代表人或负责人姓名</div>
            <div class="content">{{ executor.fzrxm }}</div>
          </div>
        </div>
        <div class="oneDiv">
          <div class="left">
            <div class="title">执行法院</div>
            <div class="content">{{ executor.zxfy }}</div>
          </div>
          <div class="center">
            <div class="title">省份</div>
            <div class="content">{{ executor.lx }}</div>
          </div>
          <div class="right">
            <div class="title">类型</div>
            <div class="content">{{ executor.lx }}</div>
          </div>
        </div>

        <div class="oneDiv">
          <div class="left">
            <div class="title">执行依据文号</div>
            <div class="content">{{ executor.yjwh }}</div>
          </div>
          <div class="center">
            <div class="title">立案时间</div>
            <div class="content">{{ executor.lasj }}</div>
          </div>
          <div class="right">
            <div class="title">做出执行依据单位</div>
            <div class="content">{{ executor.yjdw }}</div>
          </div>
        </div>
        <div class="oneDiv">
          <div class="left">
            <div class="title">生效法律文书确定的义务</div>
            <div class="content">{{ executor.qdyw }}</div>
          </div>
          <div class="center">
            <div class="title">被执行人的履行状况</div>
            <div class="content">{{ executor.lxzk }}</div>
          </div>
          <div class="right">
            <div class="title">已履行</div>
            <div class="content">{{ executor.ylx }}</div>
          </div>
        </div>
        <div class="oneDiv">
          <div class="left">
            <div class="title">未履行</div>
            <div class="content">{{ executor.wlx }}</div>
          </div>
          <div class="center">
            <div class="title">失信类型</div>
            <div class="content">{{ executor.sxlx }}</div>
          </div>
          <div class="right">
            <div class="title">发布日期</div>
            <div class="content">{{ executor.fbrq }}</div>
          </div>
        </div>
      </div>
    </div>
    <!-- 裁判文书 -->
    <div class="subclass">
      <div class="labelTitel">
        <div style="color: #000">裁判文书</div>
        <span class="svg-container">
          <svg-icon icon-class="user" />
          添加
        </span>
      </div>
      <Eltable :data="judgementData" :settings="cpwsSettings" />
    </div>
    <!-- 开庭公告 -->
    <div class="subclass">
      <div class="labelTitel">
        <div>开庭公告</div>
        <span class="svg-container">
          <svg-icon icon-class="user" />
          添加
        </span>
      </div>

      <Eltable
        :data="afficheData"
        :settings="ktggSettings"
        @select="particulars"
      />
    </div>
    <el-dialog
      title="开庭公告详情"
      :visible.sync="announcement"
      width="30%"
      :modal-append-to-body="false"
      append-to-body
    >
      <div class="basicPage_header">
        <div class="oneDiv">
          <div class="left">
            <div class="title">原告</div>
            <div class="content">1</div>
          </div>
          
        </div>
        <div class="oneDiv">
          <div class="left">
            <div class="title">被告</div>
            <div class="content">1</div>
          </div>
         
        </div>
        <div class="oneDiv">
          <div class="left">
            <div class="title">案由</div>
            <div class="content">1</div>
          </div>
       
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { projects } from "@/api/projectManagement/index";
import Eltable from "@/components/table";

export default {
  components: {
    Eltable,
  },
  data() {
    return {
      zxrSettings: { isBorder: false },
      operationalData: {
        column: [
          {
            label: "序号",
            prop: "xh",
          },
          {
            label: "主题名称",
            prop: "ztmc",
            width: "140px",
          },
          {
            label: "案号",
            prop: "ah",
            width: "165px",
          },
          {
            label: "执行标的",
            prop: "zxbd",
          },

          {
            label: "立案时间",
            prop: "lasj",
          },
          {
            label: "执行状态",
            prop: "zxzt",
          },
          {
            label: "失信状态",
            prop: "sxzt",
          },
          {
            label: "法院",
            prop: "fy",
            width: "165px",
          },
        ],
        data: [
          {
            xh: "12344567",
            ztmc: "上海平安证券有限公司",
            ah: "（2018）沪02民初1183号",
            zxbd: "402910034",
            lasj: "2020-10-20",
            zxzt: "已结案",
            sxzt: "100%",
            fy: "上海市中级人民法院",
          },
          {
            xh: "12344567",
            ztmc: "上海平安证券有限公司",
            ah: "（2018）沪02民初1183号",
            zxbd: "402910034",
            lasj: "2020-10-20",
            zxzt: "已结案",
            sxzt: "100%",
            fy: "上海市中级人民法院",
          },
        ],
      },
      executor: {
        ztmc: "1",
        ah: "2",
        ajzt: "3",
        nl: "4",
        xb: "5",
        fzrxm: "6",
        zxfy: "7",
        sf: "8",
        lx: "9",
        yjwh: "0",
        lasj: "1",
        yjdw: "2",
        qdyw: "3",
        lxzk: "4",
        ylx: "5",
        wlx: "6",
        sxlx: "7",
        fbrq: "8",
      },
      cpwsSettings: { isBorder: false },
      judgementData: {
        column: [
          {
            label: "序号",
            prop: "xh",
          },
          {
            label: "主体立场",
            prop: "ztlc",
          },
          {
            label: "法院",
            prop: "fy",
          },
          {
            label: "案号",
            prop: "ah",
            width: "180px",
          },
          {
            label: "案由",
            prop: "ay",
          },

          {
            label: "裁判日期",
            prop: "cprq",
          },
          {
            label: "标题",
            prop: "bt",
          },
        ],
        data: [
          {
            xh: "12344567",
            ztlc: "上海平安证券有限公司",
            fy: "上海市中级人民法院",
            ah: "（2018）沪02民初1183号",
            ay: "案由",
            cprq: "2020-10-20",
            bt: "标题",
          },
          {
            xh: "12344567",
            ztlc: "上海平安证券有限公司",
            fy: "上海市中级人民法院",
            ah: "（2018）沪02民初1183号",
            ay: "案由",
            cprq: "2020-10-20",
            bt: "标题",
          },
        ],
      },
      ktggSettings: { isBorder: false },
      afficheData: {
        column: [
          {
            label: "序号",
            prop: "xh",
          },
          {
            label: "案号",
            prop: "ah",
          },
          {
            label: "开庭时间",
            prop: "ktsj",
          },
          {
            label: "当事人",
            prop: "dsr",
          },
          {
            label: "审理法院",
            prop: "slfy",
          },
          {
            label: "地区名称",
            prop: "dqmc",
          },
          {
            propSole: "action",
            label: "内容",
            prop: "nr",
            arr: [{ style: "color: #2B57FF;cursor: pointer;", name: "查看详情" }],
          },
        ],
        data: [
          {
            xh: "",
            ah: "",
            ktsj: "",
            dsr: "",
            slfy: "",
            dqmc: "",
            nr: "11",
          },
          {
            xh: "",
            ah: "",
            ktsj: "",
            dsr: "",
            slfy: "",
            dqmc: "",
            nr: "",
          },
        ],
      },
      announcement: false,
    };
  },
  methods: {
    projectss() {
      projects({
        packageId: "1",
        mode: "simple",
      });
    },
    particulars(e) {
      console.log(e);
      this.announcement = true;
    },
  },
};
</script>

<style  lang="scss" scoped>
@import "@/views/components-demo/components/scss/index.scss";
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
  }
  > span {
    font-size: 12px;
    color: #2b57ff;
  }
}
.subclass {
  margin-bottom: 30px;
}
</style>