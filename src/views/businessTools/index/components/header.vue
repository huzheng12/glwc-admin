<template>
  <div>
    <div class="flex">
      <div class="left">
       <div class="headertitle">
      <el-select v-model="search.value1" filterable clearable placeholder="主体ID" size="small" >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </div>
        <div class="headertitle">
      <el-select v-model="search.value2" filterable clearable placeholder="主体名称" size="small" >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </div>
        <div class="headertitle">
      <el-select v-model="search.value3" filterable clearable placeholder="主体类型" size="small" >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </div>
    <div class="headertitle">
        <el-date-picker
          size="small"
          v-model="search.rq"
          type="date"
          placeholder="成立时间"
          class="timeInt"
        >
        </el-date-picker>
    </div>
        <div class="headertitle">
      <el-select v-model="search.value4" filterable clearable placeholder="审批状态" size="small" >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </div>
        <el-button type="primary" size="small">查询</el-button>
      </div>
      <div class="right">
        <div
          class="li"
          v-for="(item, i) in rightBut"
          :style="{ color: item.color }"
          :key="i"
          @click="emitChoosse(item.type)"
        >
          <i :class="item.icon"></i>
          <span style="margin-left: 5px">{{ item.text }}</span>

          <el-divider v-if="item.vertical" direction="vertical"></el-divider>
          <div v-else class="vertical"></div>
        </div>
      </div>
    </div>
    <!-- 批量下载 -->
    <el-dialog
      class="feedback_dialog"
      title="批量下载"
      :visible.sync="batchDownload"
      width="30%"
      :modal-append-to-body="false"
      append-to-body
    >
      <div class="download">
        <div>服务信息下载</div>
        <div>
          <span class="svg-container">
            <svg-icon icon-class="user" />
          </span>
        </div>
      </div>
    </el-dialog>
    <!-- 批量上传 -->
    <el-dialog
      class="feedback_dialog"
      title="批量上传"
      :visible.sync="batchUploading"
      width="30%"
      :modal-append-to-body="false"
      append-to-body
    >
      <div class="download">
        <div>服务信息上传</div>
        <div>
          <span class="svg-container">
            <svg-icon icon-class="user" />
          </span>
        </div>
      </div>
    </el-dialog>
  
    <!-- 查看草稿 -->
    <el-dialog
      class="feedback_dialog"
      title="查看草稿"
      :visible.sync="draught"
      :modal-append-to-body="false"
      append-to-body
    >
      <Eltable
    
        :data="tableData"
        :settings="tableSettings"
        @select='select'
      >
  
      </Eltable>
      <span slot="footer" class="dialog-footer">
        <el-button @click="draught = false">取 消</el-button>
        <el-button type="primary" @click="draught = false">确 定</el-button>
      </span>
    </el-dialog>
     <!-- 新建服务商 -->
    <NewFacilitator :dialogVisible="dialogVisible" @shutDialog="shutDialog" />
  </div>
</template>
<script>
import Eltable from "@/components/table";
import NewFacilitator from "./newFacilitator";
export default {
  name: "Header",

  components: {
NewFacilitator,
    Eltable,
 
  },
  props: {
   
  },
 
  data() {
    return {
    search: {
        value1: "",
        value2: "",
        value3: "",
        rq: "",
        value4: "",
      },
      options: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
        {
          value: "选项3",
          label: "蚵仔煎",
        },
        {
          value: "选项4",
          label: "龙须面",
        },
        {
          value: "选项5",
          label: "北京烤鸭",
        },
      ],
      draught: false,
      dialogVisible: false,
      batchDownload: false,
      batchUploading: false,
      tableList: [],
      
      formInline: {
        fwsid: "234434343447067",
        fwlx: "子公司",
        frdb: "吴思远",
        zczb: "1000玩",
        sstd: "资产管理委员会",
        yt: "诉讼",
        spzt: "审批通过",
        zrr: "吴思远",
        wd: "明细",
      },
      tableSettings: {
         isIndex:true, //序号
        textIndex:'序号',
        isBorder:false
        },
      tableData: {
        column: [
    
          {
            propSole:'action',
    prop: "name",
    label: "草稿类型",
    // width:'120px',
    fixed: true ,
    arr: [{ style: "color:#2B57FF",original:'name'}]
  },
             { prop: "date", label: "修改时间", fixed: true },
        ],
        data: [
          {
            date: "2016-05-02",
            name: "新建主体",
          },
          {
            date: "2016-05-04",
            name: "工商信息变更",
          },
        ],
      },
      titleName: "",
      bannerName: "",


      rightBut: [
        {
          type: "1",
          text: "批量上传",
          icon: "el-icon-upload2",
        },
        {
          type: "2",
          text: "批量下载",
          icon: "el-icon-folder-add",
        },
        {
          type: "3",
          text: "删除主体",
          icon: "el-icon-document-delete",
        },
        {
          type: "4",
          text: "新建主体",
          icon: "el-icon-c-scale-to-original",
          color: "#2B57FF",
        },

        {
          type: "5",
          text: "查看草稿",
          icon: "el-icon-upload2",
        },
      ],

      multipleSelection: [],
      checkAll: false,
      checkedCities: ['1','2'],

      isIndeterminate: true,
    };
 
    
  },
  methods: {
     emitChoosse(val) {
      console.log("val", val);

      switch (val) {
        case "5":
          this.draught = true;
          break;
        case "4":
          this.dialogVisible = true;
          break;
        case "3":
          console.log('删除')
          break;
        case "2":
          this.batchDownload = true;
          break;
        case "1":
          this.batchUploading = true;
          break;

        default:
          break;
      }
    },
 

     // 新建供应商关闭
     shutDialog() {
      this.dialogVisible = false;
    },
      select(e) {
      console.log(e)
      this.dialogVisible = true;
    }
   
  },
};
</script>

<style lang="scss" scoped>
.headertitle{
  width: 100px;
  margin-right: 10px;
}
.timeInt {
  width: 100px;
  ::v-deep .el-input__inner{
  padding-right: 0;
  }
}
.flex {
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  height: 64px;
  border-bottom: 1px solid #e9e9e9;
  .left {
    display: flex;
    align-items: center;
    .box {
      margin-right: 14px;
    }
  }
  .right {
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    .li {
      font-size: 14px;
      color: #222222;

      cursor: pointer;
      .vertical {
        display: inline-block;
        background: transparent;
        width: 14px;
      }
    }
  }
}

.blue {
  color: #2b57ff;
}
.download {
  height: 114px;
  background: #ffffff;
  border-radius: 2px;
  border: 1px dotted #2b57ff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #222222;
  font-size: 14px;
  font-weight: 500;
  div:nth-child(2) {
    width: 34px;
    height: 40px;
    font-size: 34px;
    background: #666666;
    margin-top: 10px;
  }
}
</style>