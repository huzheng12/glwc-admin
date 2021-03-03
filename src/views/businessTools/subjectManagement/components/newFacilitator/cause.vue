<template>
  <div class="basicPage">
    <div class="titleName">
      <div class="titleName-li" @click="projectss">
        <i class="el-icon-edit-outline elRight"></i>编辑
      </div>
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
</template>

<script>
import { projects } from "@/api/projectManagement/index";
export default {
  data() {
    return {
      textarea:''
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
.causeBut {
  text-align: center;
  margin-top: 23px;
}
</style>