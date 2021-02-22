<template>
<el-dialog
 class="specailDialog"
  title="提示"
  :visible.sync="dialogVisible"
     width="60%"
  :before-close="handleClose">
  <span>这是一段信息</span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>

     <template slot="title">

      <div class="header_title">
        <div class="title_font"><span class="title1">资产建账</span><span class=" el-icon-s-platform"></span><span class="title3">收摊成本分摊</span></div>
        <div class="rightBtn">
            <i class=""></i>
        </div>
      </div>

    </template>
</el-dialog>
</template>

<script>
export default {
    data(){
        return{
            dialogVisible: false
        }
    },
    methods:{
         handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }

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