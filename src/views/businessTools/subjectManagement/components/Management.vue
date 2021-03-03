<template>
  <div class="container">
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
      <!-- 授权情况 -->
      <div class="subclass">
        <div class="labelTitel">
          <div>授权情况</div>
          <span class="svg-container">
            <svg-icon icon-class="user" />
            编辑
          </span>
        </div>
        <el-table 
        :data="accreditData.data" 
        style="width: 100%"
        >
          <el-table-column
            v-for="(item, i) in accreditData.column"
            :key="i"
            :prop="item.prop"
            :label="item.label"
            
            show-overflow-tooltip
          >
           <template scope="scope" v-if="item.prop=='sqlx'">
            <span :style="{'color': scope.row.sqlx=='特殊授权'?'#D12A2A':'#000'}" >{{scope.row.sqlx}}</span>
          </template>
          </el-table-column>
        </el-table>
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
         <el-table-column label="序号" type="index" >
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
            
            show-overflow-tooltip
          >
          <template scope="scope" v-if="item.prop=='nr'">
            <span style="color: #2B57FF;    cursor: pointer;" @click="particulars(scope.row)">查看详情</span>
          </template>
          </el-table-column>
        </el-table>
      </div>
  <!-- 服务商关联的项目 -->
      <div class="subclass">
        <div class="labelTitel">
          <div>服务商关联的项目</div>
          <span class="svg-container">
            <svg-icon icon-class="user" />
            添加
          </span>
        </div>
        <el-table 
        :data="relevanceData.data" 
        style="width: 100%"
        >
          <el-table-column
            v-for="(item, i) in relevanceData.column"
            :key="i"
            :prop="item.prop"
            :label="item.label"
            align="center"
            show-overflow-tooltip
          >
          <template scope="scope" v-if="item.prop=='xmmc'||item.prop=='fyxq'">
            <span style="color:#2B57FF" @click="lookItem(item.prop,scope.row)">{{item.prop=='xmmc'?scope.row.xmmc:'查看详情'}}</span>
          </template>
          </el-table-column>
        </el-table>
      </div>
  <!-- 附件管理 -->
      <div class="subclass">
        <div class="labelTitel">
          <div>附件管理</div>
          <span>
          <span class="svg-container">
            <svg-icon icon-class="user" />
            上传
          </span>
          <span class="svg-container">
            <svg-icon icon-class="user" />
            下载
          </span>
          </span>
        </div>
        <el-checkbox-group v-model="checkList">
        <el-table 
        :data="enclosureData.data" 
        style="width: 100%"
        >
          <el-table-column
            v-for="(item, i) in enclosureData.column"
            :key="i"
            :prop="item.prop"
            :label="item.label"
            
            show-overflow-tooltip
          >
          <template scope="scope" v-if="item.prop=='wjbh'||item.prop=='wjm'">
            <div v-if="item.prop=='wjbh'">
                <el-checkbox :label="scope.row.wjbh"></el-checkbox>
            </div>
            <div v-else>
                <span class="svg-container">
            <svg-icon icon-class="user" />
            {{scope.row.wjm}}
          </span>
            </div>
          </template>
          </el-table-column>
        </el-table>
         </el-checkbox-group>
      </div>

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
  name: "Management",
  data() {
    return {
    
   
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

      
      accreditData: {
        column: [
          {
            label: "授权状态",
            prop: "sqzt",
          },
          {
            label: "授权类型",
            prop: "sqlx",
          },
          {
            label: "授权内容",
            prop: "sqnr",
          },
          {
            label: "授权期间",
            prop: "sqqj",
          },
       
        ],
        data: [
          {
            sqzt: "已授权",
            sqlx: "特殊授权",
            sqnr: "内容",
            sqqj: "2020年3月20日"
          },
          {
            sqzt: "已授权",
            sqlx: "普通授权",
            sqnr: "内容",
            sqqj: "2020年3月20日"
          }
        ],
      },
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
      },
      relevanceData: {
        column: [
         
          {
            label: "项目编号",
            prop: "xmbh",
          },
          {
            label: "项目名称",
            prop: "xmmc",
          },
          {
            label: "所属资产包",
            prop: "sszcb",
          },
          {
            label: "债权银行",
            prop: "zqyh",
          },
          {
            label: "城市",
            prop: "cs",
          },
          {
            label: "债权估值",
            prop: "zqgz",
          },
          {
            label: "用途",
            prop: "yt",
          },
         
          {
            label: "服务内容说明",
            prop: "fwnrsm",
          },
          {
            label: "累计费用",
            prop: "ljfy",
          },
         
          {
            label: "更新时间",
            prop: "gxsj",
          },
         
          {
            label: "费用详情",
            prop: "fyxq",
          },
         
         
        ],
        data: [
          {
            xmbh: "12344567",
            xmmc: "上海平安证券有限公司",
            sszcb: "东方1号",
            zqyh: "中国建设银行",
            cs: "上海",
            zqgz: "50000.00",
            yt: "诉讼",
            fwnrsm: "字段",
            ljfy: "50000.00",
            gxsj: "2020/10/30",
            fyxq: "",
          }
          
        ],
      },
      enclosureData:{
        column: [
         
          {
            label: "全部文件",
            prop: "qbwj",
          },
          {
            label: "文件编号",
            prop: "wjbh",
          },
          {
            label: "文件名",
            prop: "wjm",
          },
          {
            label: "修改时间",
            prop: "xgsj",
          }
         
         
        ],
        data: [
          {
            qbwj: "公司文件",
            wjbh: "总第38349期",
            wjm: "111",
            xgsj: "2020/10/30",
         
          },
          {
            qbwj: "项目文件",
            wjbh: "总第329期",
            wjm: "2",
            xgsj: "2020/10/30",
         
          },
          {
            qbwj: "其他文件",
            wjbh: "总第9期",
            wjm: "3",
            xgsj: "2020/10/30",
         
          }
        
          
        ],
      },
      checkList: []
    };
  },
  methods: {
    shut() {
      this.$emit("shutDialog");
    },
    particulars(row){
      console.log(row)
      this.particularsShow=true
    },
    lookItem(item,row){
        console.log(item,row)
    }
  },
};
</script>

<style lang="scss" scoped>
.container{
    padding: 20px;
    font-size: 14px;
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
    border-left: 3px solid #2b57ff;
  }
   span {
    color: #2b57ff;
  }
}

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
      color: #222222;
    }
    td:nth-child(2n + 1) {
      color: #666666;
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