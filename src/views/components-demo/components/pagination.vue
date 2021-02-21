<template>
  <el-pagination
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
    :current-page="tablePagination.current"
    :page-sizes="[10, 20, 30, 40]"
    :page-size="tablePagination.size"
    layout="total, sizes, prev, pager, next, jumper"
    :total="tablePagination.total"
  >
  </el-pagination>
</template>

<script>
export default {
  props: {
    tablePagination: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  data() {
    return {
      currentPage: 1,
    };
  },
  methods: {
    handleSizeChange(val) {
      this.$emit("tableFun", "current", val);
    },
    handleCurrentChange(val) {
      this.$emit("tableFun", "size", val);
    },
  },
};
</script>

<style>
</style>