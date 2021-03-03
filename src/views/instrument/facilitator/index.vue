<template>
  <div>
    <div class="container">
      <div class="headertitle">
        <Select
          :selectData="options"
          :selectVal="value"
          :placeholder="placeholder"
        />
        <Select
          :selectData="options"
          :selectVal="value"
          :placeholder="placeholder"
        />
        <Select
          :selectData="options"
          :selectVal="value"
          :placeholder="placeholder"
        />
        <Select
          :selectData="options"
          :selectVal="value"
          :placeholder="placeholder"
        />
        <Select
          :selectData="options"
          :selectVal="value"
          :placeholder="placeholder"
        />
        <el-button type="primary">查询</el-button>
        <div class="labelTitle" @click="active">
          <span class="svg-container">
            <svg-icon icon-class="user" />
          </span>
          <span @click="draught = true">查看草稿</span>
        </div>
        <div class="labelTitle" @click="active">
          <span class="svg-container">
            <svg-icon icon-class="user" />
          </span>
          <span @click="dialogVisible = true">新建服务器</span>
        </div>
        <div class="labelTitle" @click="active">
          <span class="svg-container">
            <svg-icon icon-class="user" />
          </span>
          <span @click="facilitatorTxt = true">删除服务器</span>
        </div>
        <div class="labelTitle" @click="active">
          <span class="svg-container">
            <svg-icon icon-class="user" />
          </span>
          <span @click="batchDownload = true">批量下载</span>
        </div>
        <div class="labelTitle" @click="active">
          <span class="svg-container">
            <svg-icon icon-class="user" />
          </span>
          <span @click="batchUploading = true">批量上传</span>
        </div>
      </div>
      <div class="content">
        <div class="list">
          <div class="list_tit">
            <span>上海叶世荣有限公司</span>
            <span>存续</span>
            <span>授权中</span>
          </div>
          <el-row class="details">
            <el-col :span="5">
              <span>服务商ID：</span>
              <span>234434343447067</span>
            </el-col>
            <el-col :span="4">
              <span>服务类型：</span>
              <span>子公司</span>
            </el-col>
            <el-col :span="4">
              <span>法人代表：</span>
              <span class="blue">吴思远</span>
            </el-col>
            <el-col :span="4">
              <span>注册资本：</span>
              <span>1000玩</span>
            </el-col>
            <el-col :span="5">
              <span>所属团队：</span>
              <span class="blue">资产管理委员会</span>
            </el-col>
          </el-row>
          <el-row class="details">
            <el-col :span="5">
              <span>用途：</span>
              <span>诉讼</span>
            </el-col>
            <el-col :span="4">
              <span>审批状态：</span>
              <span class="blue">审批通过</span>
            </el-col>
            <el-col :span="4">
              <span>责任人：</span>
              <span class="blue">吴思远</span>
            </el-col>
            <el-col :span="4">
              <span>文档：</span>
              <span class="blue">明细</span>
            </el-col>
          </el-row>
        </div>
      </div>
      <div class="paging">
        <el-pagination
          background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :page-sizes="[10, 20, 30, 40]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="100"
        >
        </el-pagination>
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
    <!-- 查看草稿 -->
    <el-dialog
      class="feedback_dialog"
      title="查看草稿"
      :visible.sync="draught"
      :modal-append-to-body="false"
      append-to-body
    >
      <el-table :data="tableData" style="width: 100%">
        <el-table-column label="序号" type="index" align="center">
        </el-table-column>
        <el-table-column prop="name" label="草稿类型" align="center">
        </el-table-column>
        <el-table-column prop="date" label="修改时间" align="center">
        </el-table-column>
      </el-table>

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
import Select from "../components/select";
import NewFacilitator from "./newFacilitator";
export default {
  name: "Facilitator",
  components: {
    Select,
    NewFacilitator,
  },
  data() {
    return {
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
      value: "",
      placeholder: "请选择",
      batchDownload: false,
      batchUploading: false,
      facilitatorTxt: false,
      draught: false,
      tableData: [
        {
          date: "2016-05-02",
          name: "新建服务商",
        },
        {
          date: "2016-05-04",
          name: "新建服务商",
        },
      ],
      dialogVisible: false,
    };
  },
  mounted() {},
  methods: {
    active() {
      //   console.log($('.labelTitle'))
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    shutDialog() {
      this.dialogVisible = false;
    },
  },
};
</script>
<style>
.feedback_dialog .el-dialog__body {
  border-top: 1px solid #f0f0f0;
}
</style>

<style lang="scss" scoped>
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.container {
  height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
}
.headertitle {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 16px;
  border-bottom: 1px solid #e9e9e9;
}
::v-deep .el-select {
  width: 110px;
  height: 32px;
}
.labelTitle {
  font-weight: 400;
  font-size: 14px;
}
.labelTitle:hover {
  cursor: pointer;
  color: #2b57ff;
}
.content {
  padding: 10px 16px;
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: auto;
}
.list {
  flex: 1;
  border: 1px solid #efefef;
}
.list_tit {
  font-weight: 500;
  border-bottom: 1px solid #efefef;
  padding: 15px 0;
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
::v-deep.el-col {
  text-align: center;
  border-right: 1px solid #eaeaea;
  margin: 10px 0;
}
.details {
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
}
.blue {
  color: #2b57ff;
}
.paging {
  display: flex;
  justify-content: flex-end;
  padding-right: 10px;
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
</style>