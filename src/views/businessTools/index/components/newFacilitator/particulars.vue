<template>
  <div class="basicPage">
    <div class="titleName">
      <div class="titleName-li" @click="projectss">
        <i class="el-icon-edit-outline elRight"></i>编辑
      </div>
    </div>

    <div class="particulars">
          <el-form :inline="true" :model="formInline" class="particulars-form">
            <el-form-item label="主体名称：">
              <el-input
                v-model="formInline.ztmc"
                placeholder="请输入"
              ></el-input>
            </el-form-item>
            <el-form-item label="主体类型：">
              <el-input
                v-model="formInline.ztlx"
                placeholder="请输入"
              ></el-input>
            </el-form-item>
            <el-form-item label="企业类型：">
              <el-input
                v-model="formInline.qylx"
                placeholder="请输入"
              ></el-input>
            </el-form-item>
            <el-form-item label="法人代表：">
              <el-input
                v-model="formInline.frdb"
                placeholder="请输入"
              ></el-input>
            </el-form-item>
            <el-form-item label="注册资本：">
              <el-input
                v-model="formInline.zczb"
                placeholder="请输入"
              ></el-input>
            </el-form-item>
            <el-form-item label="公司地址：">
              <el-input
                v-model="formInline.sqlx"
                placeholder="请输入"
              ></el-input>
            </el-form-item>
            <el-form-item label="用途：">
              <el-input v-model="formInline.yt" placeholder="请输入"></el-input>
            </el-form-item>
            <el-form-item label="拟持有资产包：">
              <el-input
                v-model="formInline.cyzcb"
                placeholder="请输入"
              ></el-input>
            </el-form-item>
            <el-form-item >
             <span style="color: #2B57FF; cursor: pointer">详情</span>
            </el-form-item>
         
          </el-form>
        </div>
  </div>
</template>

<script>
import { projects } from "@/api/projectManagement/index";
export default {
  data() {
    return {
        formInline: {
        ztmc: "",
        ztlx: "",
        qylx: "",
        frdb: "",
        zczb: "",
        gsdz: "",
        yt: "",
        cyzcb: ""
      },
    };
  },
  methods: {
    projectss() {
      projects({
        packageId: "1",
        mode: "simple",
      });
    },
  },
};
</script>

<style  lang="scss" scoped>
@import "@/views/components-demo/components/scss/index.scss";
.particulars {
  ::v-deep.el-form-item__label {
    min-width: 138px;
  }
}

</style>