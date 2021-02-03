<template>
  <el-dialog :title="title" :visible.sync="visible" :width="width">
    <el-form
      :model="dataObj"
      ref="ruleForm"
      label-position="right"
      :label-width="labelWidth"
   
    >
      <el-row :gutter="40" v-for="(item, index) in rowData" :key="index">
        <el-col :span="12">
          <el-form-item :label="item.left.label">
            <el-input
              :disabled="item.left.disabled"
              v-if="item.left.type === 'Input'"
              v-model="dataObj[item.left.prop]"
            ></el-input>
            <el-date-picker
              style="width: 100%"
              :disabled="item.left.disabled"
              v-if="item.left.type === 'Picker'"
              v-model="dataObj[item.left.prop]"
              type="date"
              placeholder="选择日期"
            >
            </el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item :label="item.right.label">
            <el-input
              :disabled="item.right.disabled"
              v-if="item.right.type === 'Input'"
              v-model="dataObj[item.right.prop]"
            ></el-input>

            <el-date-picker
              style="width: 100%"
              :disabled="item.left.disabled"
              v-if="item.right.type === 'Picker'"
              v-model="dataObj[item.right.prop]"
              type="date"
              placeholder="选择日期"
            >
            </el-date-picker>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="visible = false">取 消</el-button>
      <el-button type="primary" @click="submit">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  props: {
    width: {
      type: String,
      default: () => {
        return "60%";
      },
    },
    title: {
      type: String,
      default: () => {
        return "提示";
      },
    },
    labelWidth: {
      type: String,
      default: () => {
        return "90px";
      },
    },
    rowData: {
      type: Array,
      default: () => {
        return [];
      },
    },
    dataObj: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  data() {
    return {
      visible: false,
    };
  },
  // computed: {
  //   /** 解析表单的正则验证***/
  //   rules() {
  //     let rules = this.searchForm.reduce((map, i) => {
  //       if (i.rules) {
  //         map[i.prop] = i.rules;
  //       }
  //       return map;
  //     }, {});
  //     return rules;
  //   },
  // },
  mounted() {
    this.rowData.map((item) => {
      if (!item.left.type) {
        item.left.type = "Input";
      }
      if (!item.right.type) {
        item.right.type = "Input";
      }
    });
  },
  methods: {
    submit() {
      this.$emit("submit");
    },
  },
};
</script>

<style>
</style>