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
        placeholder="请输入内容"
        v-model="textarea"
        maxlength="200"
        rows='10'
        show-word-limit
      >
      </el-input>
      <div class="causeBut"></div>
    </div>
  </div>
</template>

<script>
import { projects } from "@/api/projectManagement/index";
export default {
  data() {
    return {
      textarea: "",
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