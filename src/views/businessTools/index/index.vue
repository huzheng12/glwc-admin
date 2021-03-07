<template>
  <router-type>

<Header/>
    <div class="table-content">
      <el-checkbox
        :indeterminate="isIndeterminate"
        v-model="checkAll"
        @change="handleCheckAllChange"
        >全选</el-checkbox
      >
      <el-checkbox-group
        v-model="checkedCities"
        @change="handleCheckedCitiesChange"
      >
      <div class="checkboxList">

      <el-checkbox >
         
        </el-checkbox>
      <div class="list">
            <div class="list_tit" @click="routerParticulars(1,1)">
              <span>上海叶世荣有限公司</span>
              <span>存续</span>
              <span>授权中</span>
            </div>
            <div @click="facilitatorTxt=true">
                <el-form
              :inline="true"
              :model="formInline"
              class="demo-form-inline"
            >
              <el-form-item label="主体ID:">
                {{ formInline.ztid }}
              </el-form-item>
              <el-form-item label="主体类型:">
                <span>{{ formInline.ztlx }}</span>
              </el-form-item>
              <el-form-item label="法人代表:">
                <span class="blue">{{ formInline.frdb }}</span>
              </el-form-item>
              <el-form-item label="注册资本:">
                <span>{{ formInline.zczb }}</span>
              </el-form-item>
              <el-form-item label="所属团队:">
                <span class="blue">{{ formInline.sstd }}</span>
              </el-form-item>
              <el-form-item label="债权总额:">
                <span>{{ formInline.zqze }} </span>
              </el-form-item>
              <el-form-item label="用途:">
                <span>{{ formInline.yt }} </span>
              </el-form-item>
              <el-form-item label="审批状态:">
                <span class="blue">{{ formInline.spzt }}</span>
              </el-form-item>
              <el-form-item label="责任人:">
                <span class="blue">{{ formInline.zrr }} </span>
              </el-form-item>
              <el-form-item label="文档:">
                <span class="blue">{{ formInline.wd }} </span>
              </el-form-item>
            </el-form>
            </div>
            
          </div>
      </div>
      </el-checkbox-group>
      <pagination :tablePagination="tablePagination"></pagination>
    </div>
      <!-- 服务商文档 -->
    <el-dialog
      class="feedback_dialog"
      title="服务商文档"
      :visible.sync="facilitatorTxt"
      width="30%"
      :modal-append-to-body="false"
      append-to-body
    >
      <div class="fileTxt">
        <ul class="fileList">
          <li>
            <div>
              <span class="svg-container blue">
                <svg-icon icon-class="user" />
              </span>
              <span>主体gongs材料资料</span>
            </div>
            <input type="checkbox" />
          </li>
          <li>
            <div>
              <span class="svg-container blue">
                <svg-icon icon-class="user" />
              </span>
              <span>主体gongs材料资料</span>
            </div>
            <input type="checkbox" />
          </li>
        </ul>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="facilitatorTxt = false">取 消</el-button>
        <el-button type="primary" @click="facilitatorTxt = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </router-type>
</template>

<script>
import headerBox from "../../asset-accounting/components/header";
import pagination from "../../asset-accounting/components/pagination";
import Header from "./components/header";
// import Eltable from "@/components/table";
// import NewFacilitator from "./components/newFacilitator";


export default {
  components: {
    headerBox,
    pagination,
    Header,
    // Eltable,
    // NewFacilitator
  },
  data() {
    return {
      draught: false,
      dialogVisible: false,
      facilitatorTxt: false,
      batchDownload: false,
      batchUploading: false,
      tableList: [],
      
      formInline: {
        ztid: "234434343447067",
        ztlx: "子公司",
        frdb: "吴思远",
        zczb: "1000玩",
        sstd: "资产管理委员会",
        zqze: "1000万",
        yt: "诉讼",
        spzt: "审批通过",
        zrr: "吴思远",
        wd: "明细",
      },
    
  

      tablePagination: { current: 1, size: 10, total: 10 },

      checkAll: false,
      checkedCities: ['1','2'],

      isIndeterminate: true,
    };
  },
  mounted() {},

  methods: {
      //全选
    handleCheckAllChange(val) {
      console.log(val);
    },
    handleCheckedCitiesChange(value) {
      console.log(value);
    },
  routerParticulars(id,key){
    this.$router.push(`/businessTools/index/particulars/${id}/${key}`);
  }
   
  },
};
</script>

<style  lang="scss" scoped>

.table-content {
  padding: 0 20px;
  margin-top: 10px;
}
.demo-form-inline.el-form--inline .el-form-item {
  min-width: 200px;
  // border-right: 1px solid #eaeaea;
  font-size: 14px;
  color: #666666;
  ::v-deep.el-form-item__label {
    font-weight: 400;
  }
}
.checkboxList{
    display: flex;
    align-items: center;

    margin-right: 0;
}
.list {
  border: 1px solid #efefef;
  padding-left: 10px;
  margin: 10px 0 0 5px;
  cursor: pointer;
}

.list_tit {
  font-weight: 500;
  border-bottom: 1px solid #efefef;
  padding: 15px 0;
  margin-bottom: 10px;
  span:nth-child(1) {
    font-size: 16px;
    color: #222222;
  }
  span:nth-child(2) {
    width: 48px;
    height: 20px;
    line-height: 20px;
    text-align: center;
    display: inline-block;
    background: #e9eeff;
    border-radius: 3px;
    font-size: 12px;
    color: #2b57ff;
    margin: 0 8px;
  }
  span:nth-child(3) {
    display: inline-block;
    width: 48px;
    height: 20px;
    line-height: 20px;
    text-align: center;
    background: #fcefe8;
    border-radius: 3px;
    color: #e96722;
    font-size: 12px;
  }
}
.fileList li {
  height: 60px;
  padding: 0 10px;
  background: #ffffff;
  border-radius: 2px;
  border: 1px dotted #2b57ff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}
.blue{
  color: #2B57FF;
}
</style>