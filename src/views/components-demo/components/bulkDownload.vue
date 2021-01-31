<template>
  <el-dialog
   class="templateDownload"
  title="批量下载"
  :visible.sync="dialogVisible"
  width="25%"
 >
  <div  class="tempDialog">
      <div class="leftTempDialog">
          <div class="leftName">选中下载</div>
          <img  src="@/assets/img/fileImg.png" alt="">
      </div>
      <div class="rightTempDialog">
             <div class="rightName">全量下载</div>
          <img src="@/assets/img/fileImg.png" alt="">
      </div>
  </div>
</el-dialog>


</template>

<style lang="scss" scoped>
.templateDownload{
  .tempDialog{
    overflow: hidden;
    .leftTempDialog{
       width: 191px;
        height: 114px;
        background: #FFFFFF;
        border-radius: 2px;
        border: 1px solid #EFEFEF;
        float: left;
        margin-left: 21px;
        .leftName{
        font-size: 14px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 900;
        color: #222222;
        text-align: center;
        margin: 16px 0;
        }
        img{
            margin-left: 70px;
        }
    }
    .rightTempDialog{
            width: 191px;
            height: 114px;
            background: #FFFFFF;
            border-radius: 2px;
            border: 1px dashed #2B57FF;
            float: left;
            margin-left: 13px;
         .rightName{
            font-size: 14px;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 900;
            color: #222222;
            text-align: center;
            margin: 16px 0;
            
        }
         img{
            margin-left: 70px;
        }
    }

    .font{
      font-size: 14px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 900;
      color: #222222;
      margin-top: 16px;
      margin-bottom: 11px;
      
    }
    img{
      width: 43px;
      height: 42px;
      cursor: pointer;
    }
  }
}
</style>

<script>
export default{
    data(){
        return{
             dialogVisible: false
        }
    },
    methods:{
    
    }

}
</script>