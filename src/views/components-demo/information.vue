<template>
  <e-point :point="point">
    <div class="point-content">
      <div v-for="(item, index) in point" :key="index">
        <div class="title-h3">{{ item.text }}</div>
        <component :is="item.component" />
      </div>
    </div>
  </e-point>
</template>

<script>
import ePoint from "@/components/AnchorPoint";
import aaB from "./a";
export default {
  props: {},
  components: { ePoint, aaB },
  mounted() {
    console.log(this.$route.params.id);
  },
  data() {
    return {
      active: 0, // 当前激活的导航索引
      point: [
        { text: "基本信息", component: "aaB" },
        { text: "尽调信息" },
        { text: "担保方式" },
        { text: "诉讼情况" },
        { text: "债券估值" },
        { text: "文件管理" },
      ],
    };
  },
};
</script>

<style scoped>
</style>