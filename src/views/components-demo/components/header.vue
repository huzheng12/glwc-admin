<template>
  <div class="flex">
    <div class="left">
      <div v-for="(item, i) in inputData" :key="i" class="box">
        <el-input
          size="small"
          v-if="item.type === 'Input'"
          v-model="searchData[item.prop]"
          :placeholder="item.placeholder"
          :suffix-icon="item.prefixIcon"
          @input="item.onInput"
          :style="{
            width: item.width,
          }"
        ></el-input>

        <el-date-picker
          size="small"
          v-if="item.type === 'datePicker'"
          v-model="searchData[item.prop]"
          @input="item.onInput"
          value-format="yyyy-MM-dd"
          type="date"
          :placeholder="item.placeholder"
          :style="{
            width: item.width,
          }"
        >
        </el-date-picker>
      </div>
    </div>
    <div class="right">
      <div
        class="li"
        v-for="(item, i) in rightBut"
        :style="{ color: item.color }"
        :key="i"
        @click="Submit(item)"
      >
        <i
          v-if="item.alicon"
          :class="{ iconfont: true, [item.alicon]: true }"
        ></i>
        <i v-else :class="{ [item.icon]: true }"></i>
        <span style="margin-left: 5px">{{ item.text }}</span>
        <el-divider v-if="item.vertical" direction="vertical"></el-divider>
        <div v-else class="vertical"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "headerBox",
  props: {
    inputData: {
      type: Array,
      default: () => {
        return [];
      },
    },
    searchData: {
      type: Object,
      default: () => {
        return {};
      },
    },
    rightBut: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  methods: {
    Submit(key) {
      this.$emit("emitChoosse", key.type);
    },
  },
};
</script>

<style scoped lang="scss">
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
      // color: #2b57ff;

      cursor: pointer;
      .vertical {
        display: inline-block;
        background: transparent;
        width: 14px;
      }
    }
  }
}
</style>