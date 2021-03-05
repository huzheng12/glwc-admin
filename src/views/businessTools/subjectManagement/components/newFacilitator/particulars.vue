<template>
  <div class="basicPage">
    <div class="titleName">
      <div class="titleName-li" @click="projectss">
        <i class="el-icon-edit-outline elRight"></i>编辑
      </div>
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
</template>

<script>
import { projects } from "@/api/projectManagement/index";
export default {
  data() {
    return {
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