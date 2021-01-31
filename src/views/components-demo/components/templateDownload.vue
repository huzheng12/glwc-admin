<template>
  <el-dialog
   class="templateDownload"
  :title="titleName"
  :visible.sync="dialogVisible"
  width="30%"
 >
  <div  class="tempDialog">
    <div class="font">{{bannerName}}</div>
    <img src="@/assets/img/fileImg.png" alt="">
  </div>
</el-dialog>


</template>

<style lang="scss" scoped>
.templateDownload{
  .tempDialog{
    width: 396px;
    height: 114px;
    background: #FFFFFF;
    border-radius: 2px;
    border: 1px dashed #2B57FF;
    margin: 0 auto;
    text-align: center;
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
    props:{
       titleName: {
      type: String,
      required: true
    },
    bannerName:{
        type: String,
      required: true
    }
    },
    methods:{
    
    }

}
</script>