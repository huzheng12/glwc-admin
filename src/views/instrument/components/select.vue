<template>
  <div>
    <div class="headertitle">
      <el-select v-model="selectVal" filterable clearable :placeholder="placeholder">
        <el-option
          v-for="item in selectData"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </div>
  </div>
</template>
<script>
export default {
  name: "Select",
  props: {
    selectData: {
      type: Array,
      default() {
        return [];
      },
    },
    selectVal:{
        type:String,
        default:''
    },
    placeholder:{
        type:String,
        default:'请选择'
    }
  },
  data() {
    return {
    
    };
  },
};
</script>

<style lang="scss" scoped>
</style>