<template>
<el-dialog
 class="specailDialog"
  title="提示"
  :visible.sync="dialogVisible"
     width="60%"
 >
    <basicPage/>
     <template slot="title">

      <div class="header_title">
        <div class="title_font"><span class="title1" >资产建账</span><span class=" el-icon-s-platform" style="
color: #2B57FF;margin-left:18px;"></span><span class="title3" style="
font-size: 12px;
font-family: PingFangSC-Regular, PingFang SC;
font-weight: 400;
color: #2B57FF;margin-left:3px;cursor: pointer;" @click="toAllocation" >收摊成本分摊</span></div>
        <!-- <div class="rightBtn">
            <i class=""></i>
        </div> -->
      </div>

    </template>

      <span slot="footer" class="dialog-footer">
    <el-button size="small" @click="dialogVisible = false">取消返回</el-button>
    <el-button size="small" type="primary" @click="dialogVisible = false">确认建账</el-button>
  </span>

  <allocation ref="allocation"/>
</el-dialog>
</template>

<script>
// 基本信息组件
import basicPage from "./basicPage";
// 收摊成本分摊
import allocation from './allocationDialog'
export default {
    data(){
        return{
            dialogVisible: false
        }
    },
    components:{
      basicPage,
      allocation
    },
    methods:{
      toAllocation(){
        this.$refs.allocation.dialogVisible = true
      }
      //    handleClose(done) {
      //   this.$confirm('确认关闭？')
      //     .then(_ => {
      //       done();
      //     })
      //     .catch(_ => {});
      // }

    }
}
</script>

<style scoped lang="scss">

//  .specailDialog /deep/ .el-dialog__header {
// .header_title{   
//     font-size: 16px;
//     font-family: PingFangSC-Medium, PingFang SC;
//     font-weight: 500;
//     color: #333333;
//     .title_font{
//           .title1, .title3 {
//             font-size: 12px;
//             background: #2B57FF;
//     }
//     }
// }
// }

</style>