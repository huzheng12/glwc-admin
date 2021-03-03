<template>
  <div>
    <el-dialog
      class="feedback_dialog"
      title="新建服务商"
      :visible.sync="dialogVisible"
      :modal-append-to-body="false"
      append-to-body
      :before-close="shut"
      width="85%"
      top="5px"
    >
    <!-- 服务商引入申请表 -->
      <div class="subclass">
        <div class="labelTitel">
          <div>服务商引入申请表</div>
          <span class="svg-container">
            <svg-icon icon-class="user" />
            编辑
          </span>
        </div>
        <div class="introduce">
          <!-- <el-row>
            <el-col :span="12">
              <span class="labelKey">申请时间</span>
              <span class="labelVal">2021年10月30日</span>
            </el-col>
            <el-col :span="12">
              <span class="labelKey">服务商引入编号</span>
              <span class="labelVal">39403005995</span>
            </el-col>
          </el-row> -->
          <table class="labelTable" cellspacing="0" cellpadding="0">
            <tr>
              <td>申请时间</td>
              <td>{{this.introduce.sqsj}}</td>
              <td>服务商引入编号</td>
              <td>{{this.introduce.yrid}}</td>
            </tr>
            <tr>
              <td>申请单位</td>
              <td colspan="3">{{this.introduce.sqdw}}</td>
            </tr>
            <tr>
              <td>申请时间</td>
              <td colspan="3">{{this.introduce.sqsj}}</td>
            </tr>
            <tr>
              <td>申请单位意见</td>
              <td colspan="3">{{this.introduce.dwyj}}</td>
            </tr>
            <tr>
              <td>总裁意见（如需）</td>
              <td colspan="3">{{this.introduce.zcys}}</td>
            </tr>
          </table>
        </div>
      </div>
      <!-- 新建服务商详情 -->
      <div class="subclass">
        <div class="labelTitel">
          <div>新建服务商详情</div>
          <span class="svg-container">
            <svg-icon icon-class="user" />
            编辑
          </span>
        </div>
        <div class="particulars">
          <el-form :inline="true" :model="formInline" class="particulars-form">
            <el-form-item label="服务商名称：">
              <el-input
                v-model="formInline.fwsmc"
                placeholder="请输入"
              ></el-input>
            </el-form-item>
            <el-form-item label="服务类型：">
              <el-input
                v-model="formInline.fwlx"
                placeholder="请输入"
              ></el-input>
            </el-form-item>
            <el-form-item label="所属团队：">
              <el-input
                v-model="formInline.sstd"
                placeholder="请输入"
              ></el-input>
            </el-form-item>
            <el-form-item label="法人代表：">
              <el-input
                v-model="formInline.frdb"
                placeholder="请输入"
              ></el-input>
            </el-form-item>
            <el-form-item label="统一社会信用代码：">
              <el-input
                v-model="formInline.xydm"
                placeholder="请输入"
              ></el-input>
            </el-form-item>
            <el-form-item label="用途：">
              <el-input v-model="formInline.yt" placeholder="请输入"></el-input>
            </el-form-item>
            <el-form-item label="授权类型：">
              <el-input
                v-model="formInline.sqlx"
                placeholder="请输入"
              ></el-input>
            </el-form-item>
            <el-form-item label="授权内容：">
              <el-input
                v-model="formInline.sqnr"
                placeholder="请输入"
              ></el-input>
            </el-form-item>
            <el-form-item label="授权期间：">
              <el-input
                v-model="formInline.sqqj"
                placeholder="请输入"
              ></el-input>
            </el-form-item>

            <el-form-item label="计划付费方式：">
              <el-input
                v-model="formInline.fffs"
                placeholder="请输入"
              ></el-input>
            </el-form-item>
          </el-form>
        </div>
      </div>
<!-- 服务商引入原因 -->
      <div class="subclass">
        <div class="labelTitel">
          <div>服务商引入原因</div>
        </div>
        <div class="cause">
          <el-input
            type="textarea"
            :rows="10"
            placeholder="请输入内容"
            v-model="textarea"
          >
          </el-input>
          <div class="causeBut">
            <el-button type="primary">生成服务商信息</el-button>
          </div>
        </div>
      </div>
<!-- 工商信息 -->
      <div class="subclass">
        <div class="labelTitel">
          <div>工商信息</div>
        </div>
        <div class="IndustryMsg">
          <table class="labelTable" cellspacing="0" cellpadding="0">
            <tr>
              <td>企业名称</td>
              <td>{{this.IndustryMsg.qymc}}</td>
              <td>曾用名</td>
              <td>{{this.IndustryMsg.zym}}</td>
              <td>主体类型</td>
              <td>{{this.IndustryMsg.ztlx}}</td>
            </tr>
            <tr>
              <td>企业类型</td>
              <td>{{this.IndustryMsg.qylx}}</td>
              <td>法定代表人</td>
              <td>{{this.IndustryMsg.fddbr}}</td>
              <td>统一社会信用代码</td>
              <td>{{this.IndustryMsg.xydm}}</td>
            </tr>
            <tr>
              <td>注册资本</td>
              <td>{{this.IndustryMsg.zczb}}</td>
              <td>实收资本</td>
              <td>{{this.IndustryMsg.sszb}}</td>
              <td>成立日期</td>
              <td>{{this.IndustryMsg.clrq}}</td>
            </tr>
            <tr>
              <td>邮箱</td>
              <td>{{this.IndustryMsg.yx}}</td>
              <td>许可经营项目</td>
              <td>{{this.IndustryMsg.jyxm}}</td>
              <td>经营期限</td>
              <td>{{this.IndustryMsg.jyqx}}</td>
            </tr>
            <tr>
              <td>登记机关</td>
              <td>{{this.IndustryMsg.djjg}}</td>
              <td>公司地址</td>
              <td>{{this.IndustryMsg.gsdz}}</td>
              <td>经营状态</td>
              <td>{{this.IndustryMsg.jyzt}}</td>
            </tr>
            <tr>
              <td>国民经济代码名称</td>
              <td>{{this.IndustryMsg.dmmc}}</td>
              <td>所在省份</td>
              <td>{{this.IndustryMsg.szsf}}</td>
              <td>所在城市</td>
              <td>{{this.IndustryMsg.szcs}}</td>
            </tr>
            <tr>
              <td>所在区县</td>
              <td>{{this.IndustryMsg.szqx}}</td>
              <td>注册地址行政编号</td>
              <td>{{this.IndustryMsg.xzbm}}</td>
              <td>核准日期</td>
              <td>{{this.IndustryMsg.hzrq}}</td>
            </tr>
          </table>
        </div>
      </div>
      <!-- 服务商权益人 -->
      <div class="subclass">
        <div class="labelTitel">
          <div>服务商权益人</div>
          <span class="svg-container">
            <svg-icon icon-class="user" />
            添加
          </span>
        </div>
        <el-table 
        :data="equityInvestorData.data" 
        style="width: 100%"
        >
          <el-table-column
            v-for="(item, i) in equityInvestorData.column"
            :key="i"
            :prop="item.prop"
            :label="item.label"
            align="center"
            show-overflow-tooltip
          >
          </el-table-column>
        </el-table>
      </div>
      <!-- 服务商主要管理人员 -->
      <div class="subclass">
        <div class="labelTitel">
          <div>服务商主要管理人员</div>
          <span class="svg-container">
            <svg-icon icon-class="user" />
            添加
          </span>
        </div>
        <el-table 
        :data="managerData.data" 
        style="width: 100%"
        >
         <el-table-column label="序号" type="index" align="center">
        </el-table-column>
          <el-table-column
            v-for="(item, i) in managerData.column"
            :key="i"
            :prop="item.prop"
            :label="item.label"
            align="center"
            show-overflow-tooltip
          >
          </el-table-column>
        </el-table>
      </div>
      <!-- 司法信息 -->
      <div class="subclass">
        <div class="labelTitel">
          <div>司法信息</div>
       
        </div>
        <div class="labelTitel">
          <span style="color:#000">综合被执行人</span>
          <span class="svg-container">
            <svg-icon icon-class="user" />
            添加
          </span>
        </div>
        <el-table 
        :data="operationalData.data" 
        style="width: 100%"
        >
          <el-table-column
            v-for="(item, i) in operationalData.column"
            :key="i"
            :prop="item.prop"
            :label="item.label"
            align="center"
            show-overflow-tooltip
          >
          </el-table-column>
        </el-table>
      </div>
  <!-- 失信被执行人 -->
      <div class="subclass">
        <div class="labelTitel">
          <span style="color:#000">失信被执行人</span>
          <span class="svg-container">
            <svg-icon icon-class="user" />
            编辑
          </span>
        </div>
        <div class="executor">
          <table class="labelTable" cellspacing="0" cellpadding="0">
            <tr>
              <td>主体名称</td>
              <td>{{this.executor.ztmc}}</td>
              <td>案号</td>
              <td>{{this.executor.ah}}</td>
              <td>案件状态</td>
              <td>{{this.executor.ajzt}}</td>
            </tr>
            <tr>
              <td>年龄</td>
              <td>{{this.executor.nl}}</td>
              <td>性别</td>
              <td>{{this.executor.xb}}</td>
              <td>法定代表人或负责人姓名</td>
              <td>{{this.executor.fzrxm}}</td>
            </tr>
            <tr>
              <td>执行法院</td>
              <td>{{this.executor.zxfy}}</td>
              <td>省份</td>
              <td>{{this.executor.sf}}</td>
              <td>类型</td>
              <td>{{this.executor.lx}}</td>
            </tr>
            <tr>
              <td>执行依据文号</td>
              <td>{{this.executor.yjwh}}</td>
              <td>立案时间</td>
              <td>{{this.executor.lasj}}</td>
              <td>做出执行依据单位</td>
              <td>{{this.executor.yjdw}}</td>
            </tr>
            <tr>
              <td>生效法律文书确定的义务</td>
              <td>{{this.executor.qdyw}}</td>
              <td>被执行人的履行状况</td>
              <td>{{this.executor.lxzk}}</td>
              <td>已履行</td>
              <td>{{this.executor.ylx}}</td>
            </tr>
            <tr>
              <td>未履行</td>
              <td>{{this.executor.wlx}}</td>
              <td>失信类型</td>
              <td>{{this.executor.sxlx}}</td>
              <td>发布日期</td>
              <td>{{this.executor.fbrq}}</td>
            </tr>
          </table>
        </div>
      </div>
  <!-- 裁判文书 -->
      <div class="subclass">
        <div class="labelTitel">
          <span style="color:#000">裁判文书</span>
          <span class="svg-container">
            <svg-icon icon-class="user" />
            添加
          </span>
        </div>
        <el-table 
        :data="judgementData.data" 
        style="width: 100%"
        >
          <el-table-column
            v-for="(item, i) in judgementData.column"
            :key="i"
            :prop="item.prop"
            :label="item.label"
            align="center"
            show-overflow-tooltip
          >
          </el-table-column>
        </el-table>
      </div>
  <!-- 开庭公告 -->
      <div class="subclass">
        <div class="labelTitel">
          <span style="color:#000">开庭公告</span>
          <span class="svg-container">
            <svg-icon icon-class="user" />
            添加
          </span>
        </div>
        <el-table 
        :data="afficheData.data" 
        style="width: 100%"
        >
          <el-table-column
            v-for="(item, i) in afficheData.column"
            :key="i"
            :prop="item.prop"
            :label="item.label"
            align="center"
            show-overflow-tooltip
          >
          <template scope="scope" v-if="item.prop=='nr'">
            <span style="color: #2B57FF;    cursor: pointer;" @click="particulars(scope.row)">查看详情</span>
          </template>
          </el-table-column>
        </el-table>
      </div>

        <span slot="footer" class="dialog-footer">
          <el-button @click="shut">保存草稿</el-button>
          <el-button type="primary" @click="shut">发起审批</el-button>
        </span>
   
    </el-dialog>
    <!-- 开庭公告详情 -->
    <el-dialog
      class="feedback_dialog"
      title="开庭公告详情"
      :visible.sync="particularsShow"
      :modal-append-to-body="false"
      append-to-body
    >
          <table class="labelTable" cellspacing="0" cellpadding="0">
            <tr>
              <td>原告</td>
              <td>{{this.affiche.yg}}</td>
            </tr>
            <tr>
              <td>被告</td>
              <td>{{this.affiche.bg}}</td>
            </tr>
            <tr>
              <td>案由</td>
              <td>{{this.affiche.ay}}</td>
            </tr>
            <tr>
              <td>公告内容</td>
              <td>{{this.affiche.ggnr}}</td>
            </tr>
          </table>

    </el-dialog>
        
  </div>
</template>
<script>
export default {
  props: {
    dialogVisible: {
      type: Boolean,
      default: false,
    },
  },
  name: "NewFacilitator",
  data() {
    return {
      introduce:{
        sqrq:'',
        yrid:'',
        sqdw:'',
        dwyj:'',
        zcyj:''
      },
      formInline: {
        fwsmc: "",
        fwlx: "",
        sstd: "",
        frdb: "",
        xxdm: "",
        yt: "",
        sqlx: "",
        sqnr: "",
        sqqj: "",
        fffs: ""
      },
      IndustryMsg:{
        qymc:'1',
        zym:'2',
        ztlx:'3',
        qylx:'4',
        fddbr:'5',
        xydm:'6',
        zczb:'7',
        sszb:'8',
        clrq:'9',
        yx:'0',
        jyxm:'1',
        jyqx:'2',
        djjg:'3',
        gsdz:'4',
        jyzt:'5',
        dmmc:'6',
        szsf:'7',
        szcs:'8',
        szqx:'9',
        xzbm:'0',
        hzrq:'1',
      },
      executor:{
        ztmc:'1',
        ah:'2',
        ajzt:'3',
        nl:'4',
        xb:'5',
        fzrxm:'6',
        zxfy:'7',
        sf:'8',
        lx:'9',
        yjwh:'0',
        lasj:'1',
        yjdw:'2',
        qdyw:'3',
        lxzk:'4',
        ylx:'5',
        wlx:'6',
        sxlx:'7',
        fbrq:'8',
      },
      textarea: "",
      equityInvestorData: {
        column: [
          {
            label: "权益人ID",
            prop: "qyrid",
          },
          {
            label: "权益人名称",
            prop: "qyrmc",
          },
          {
            label: "国别",
            prop: "gb",
          },
          {
            label: "股东类型",
            prop: "gdlx",
          },
          {
            label: "出资日期",
            prop: "czrq",
          },
          {
            label: "出资方式",
            prop: "czfs",
          },
          {
            label: "出资比例",
            prop: "czbl",
          },
          {
            label: "认缴出资额",
            prop: "rjcze",
          },
        ],
        data: [
          {
            qyrid: "40380340934",
            qyrmc: "平安资产管理有限公司",
            gb: "中国",
            gdlx: "企业法人",
            czrq: "2020-10-20",
            czfs: "货币",
            czbl: "50%",
            rjcze: "30000.00",
          },
        ],
      },
      managerData: {
        column: [
         
          {
            label: "姓名",
            prop: "xm",
          },
          {
            label: "职务",
            prop: "zw",
          },
         
        ],
        data: [
          {
            xm: "吴思远",
            zw: "产品总监"
        
          },
          {
            xm: "吴思远",
            zw: "产品总监"
        
          }
        ],
      },
      operationalData: {
        column: [
         
          {
            label: "序号",
            prop: "xh",
          },
          {
            label: "主题名称",
            prop: "ztmc",
          },
          {
            label: "案号",
            prop: "ah",
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
      judgementData: {
        column: [
         
          {
            label: "序号",
            prop: "xh",
          },
          {
            label: "主题立场",
            prop: "ztlc",
          },
          {
            label: "法院",
            prop: "fy",
          },
          {
            label: "案号",
            prop: "ah",
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
          }
        
          
        ],
      },
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
            label: "内容",
            prop: "nr",
          }
         
         
        ],
        data: [
          {
            xh: "",
            ah: "",
            ktsj: "",
            dsr: "",
            slfy: "",
            dqmc: "",
            nr: ""
          },
          {
            xh: "",
            ah: "",
            ktsj: "",
            dsr: "",
            slfy: "",
            dqmc: "",
            nr: ""
          }
        
          
        ],
      },
      particularsShow:false,
      affiche:{
        yg:'',
        bg:'',
        ay:'',
        ggnr:''
      }
    };
  },
  methods: {
    shut() {
      this.$emit("shutDialog");
    },
    particulars(row){
      console.log(row)
      this.particularsShow=true
    }
  },
};
</script>

<style lang="scss" scoped>
.labelTitel {
  font-weight: 500;
  color: #222222;
  font-size: 14px;
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;
  > div {
    padding-left: 5px;
    border-left: 3px solid #2b57ff;
  }
  > span {
    color: #2b57ff;
  }
}
// .introduce {
//   width: 100%;
//   height: 195px;
//   border-radius: 2px;
//   border: 1px solid #e7eaeb;
//   line-height: 48px;
//   .labelKey {
//     display: inline-block;
//     width: 190px;
//     background: #fafafa;
//     border: 1px solid #e7eaeb;
//     padding-left: 16px;
//   }
//   .labelVal {
//     display: inline-block;
//     width: calc(100% - 190px);
//     border: 1px solid #e7eaeb;
//     padding-left: 16px;
//   }
// }
.labelTable {
  width: 100%;
  border-radius: 2px;

  tr,
  td {
    border: 1px solid #e7eaeb;
    height: 48px;
  }
  tr {
    td {
      padding-left: 16px;
      min-width: 139px;
    }
    td:nth-child(2n + 1) {
      background: #fafafa;
    }
  }
}

.particulars {
  ::v-deep.el-form-item__label {
    min-width: 138px;
  }
}

.subclass {
  margin-bottom: 30px;
}
.causeBut {
  text-align: center;
  margin-top: 23px;
}
</style>