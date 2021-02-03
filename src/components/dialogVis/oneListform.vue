<template>
  <el-dialog
    :class="`${classType ? 'flex_form' : ''}`"
    :title="title"
    :visible.sync="visible"
    :width="width"
  >
    <el-form
      class="form-box"
      label-position="right"
      :size="size"
      inline
      :model="searchData"
      :rules="rules"
      ref="searchForm"
      :label-width="labelWidth"
    >
      <el-form-item
        v-for="item in searchForm"
        :label="item.label"
        :key="item.prop"
        :prop="item.prop"
      >
        <!-- 输入框 -->
        <el-input
          v-if="item.type === 'Input'"
          v-model="searchData[item.prop]"
          :placeholder="item.placeholder"
        ></el-input>
        <!-- 多文本框 -->
        <el-input
          v-if="item.type === 'Textarea'"
          type="textarea"
          :rows="item.rows || 4"
          :maxlength="item.maxlength"
          :show-word-limit="!!item.maxlength"
          :placeholder="item.placeholder"
          v-model="searchData[item.prop]"
        >
        </el-input>
        <!-- 密码框 -->
        <el-input
          v-if="item.type === 'password'"
          disabled
          v-model="searchData[item.prop]"
          :placeholder="item.placeholder"
          auto-complete="off"
        >
          <template slot="append">
            <span @click="item.onClick">{{ item.name }}</span>
          </template>
        </el-input>

        <!-- 下拉框 -->
        <!-- $forceUpdate() 下拉刷新,修复数据改变下拉框不变的bug -->
        <el-select
          style="width: 100%"
          v-if="item.type === 'Select'"
          v-model="searchData[item.prop]"
          @visible-change="$forceUpdate()"
        >
          <el-option
            v-for="op in item.options"
            :label="op.label"
            :value="op.value"
            :key="op.value"
            >{{ op.label }}</el-option
          >
        </el-select>

        <!-- 单选 -->
        <el-radio-group
          v-if="item.type === 'Radio'"
          v-model="searchData[item.prop]"
        >
          <el-radio
            v-for="ra in item.radios"
            :label="ra.value"
            :key="ra.value"
            >{{ ra.label }}</el-radio
          >
        </el-radio-group>

        <!-- 组合单选按钮 -->
        <el-radio-group
          v-if="item.type === 'RadioRadio'"
          v-model="searchData[item.prop]"
        >
          <el-radio-button
            v-for="ra in item.radios"
            :label="ra.value"
            :key="ra.value"
            >{{ ra.label }}</el-radio-button
          >
        </el-radio-group>

        <!-- 复选框 -->
        <el-checkbox-group
          v-if="item.type === 'Checkbox'"
          v-model="searchData[item.prop]"
        >
          <el-checkbox
            v-for="ch in item.checkboxs"
            :label="ch.value"
            :key="ch.value"
            >{{ ch.label }}</el-checkbox
          >
        </el-checkbox-group>

        <!-- 日期 -->
        <el-date-picker
          v-if="item.type === 'Date'"
          v-model="searchData[item.prop]"
          value-format="yyyy-MM-dd"
          :placeholder="item.placeholder"
        ></el-date-picker>

        <!-- 时间 -->
        <el-time-select
          v-if="item.type === 'Time'"
          v-model="searchData[item.prop]"
        ></el-time-select>

        <!-- 日期时间 -->
        <el-date-picker
          v-if="item.type === 'DateTime'"
          type="datetime"
          v-model="searchData[item.prop]"
          :placeholder="item.placeholder"
          value-format="yyyy-MM-dd hh:mm:ss"
          :disabled="item.disable && item.disable(searchData[item.prop])"
        ></el-date-picker>

        <!-- 起止时间 -->
        <el-date-picker
          v-if="item.type === 'Daterange'"
          v-model="searchData[item.prop]"
          type="daterange"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          value-format="yyyy-MM-dd"
        ></el-date-picker>

        <!-- 滑块 -->
        <el-slider
          v-if="item.type === 'Slider'"
          v-model="searchData[item.prop]"
        ></el-slider>

        <!-- 开关 -->
        <el-switch
          v-if="item.type === 'Switch'"
          v-model="searchData[item.prop]"
        ></el-switch>
        <!-- 三级联动 cascader -->
        <el-cascader
          v-if="item.type === 'cascader'"
          :options="item.props.options"
          v-model="searchData[item.prop]"
          :placeholder="item.props.placeholder || '请选择'"
          :disabled="item.props.disabled || false"
          style="width: 100%"
          :props="item.props.defaultParams"
        ></el-cascader>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="visible = false">取 消</el-button>
      <el-button type="primary" @click="sublime">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  props: {
    isHandle: {
      type: Boolean,
      default: true,
    },
    labelWidth: {
      type: String,
      default: "120px",
    },
    title: {
      type: String,
      default: "",
    },
    width: {
      type: String,
      default: "40%",
    },
    classType: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: "medium",
    },
    searchForm: {
      type: Array,
      default: () => [],
    },
    searchHandle: {
      type: Array,
      default: () => [],
    },
    searchData: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      visible: false,
    };
  },
  computed: {
    /** 解析表单的正则验证***/
    rules() {
      let rules = this.searchForm.reduce((map, i) => {
        console.log(map, i);
        if (i.rules) {
          map[i.prop] = i.rules;
        }
        return map;
      }, {});
      return rules;
    },
  },
  mounted() {},
  methods: {
    // 验证表单
    sublime() {
      // 父组件的点击事件
      this.$refs["searchForm"].validate((valid) => {
        if (valid) {
          this.$emit("sublime", valid);
        } else {
          return false;
        }
      });
    },
    // 重置表单
    reset() {
      this.$refs["searchForm"].resetFields();
    },
  },
};
</script>

<style lang="scss" >
.form-box {
  .el-form-item__content {
    width: 100%;
  }
  .el-form-item {
    display: flex;
  }
}
.flex_form .el-dialog {
  min-width: 900px;
  .form-box {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: wrap;
    .el-form-item {
      display: flex;
      width: 48%;
    }
  }
}
</style>