<template>
 <div class="basicPage">
     <div class="basicPage_header">
         <div class="oneDiv">
             <div class="left">
                 <div class="title">资产包编号</div>
                 <div class="content">1234567</div>
             </div>

             <div class="center">
                 <div class="title">资产包名称</div>
                  <div class="content">1234567</div>
             </div>

             <div class="right">
                    <div class="title">资产性质</div>
                  <div class="content">传统不良找券产包</div>
             </div>

         </div>
           <div class="oneDiv">
             <div class="left">
                 <div class="title BTop" >出让方</div>
                 <div class="content BTop" >1234567</div>
             </div>

             <div class="center">
                 <div class="title BTop" >出让方简称</div>
                  <div class="content BTop" >1234567</div>
             </div>

             <div class="right">
                    <div class="title BTop" >城市</div>
                  <div class="content BTop" >传统不良找券产包</div>
             </div>

         </div>

           <div class="oneDiv">
             <div class="left">
                 <div class="title BTop" >债权户数</div>
                 <div class="content BTop" >1234567</div>
             </div>

             <div class="center">
                 <div class="title BTop" >责任人</div>
                  <div class="content BTop" >1234567</div>
             </div>

             <div class="right">
                    <div class="title BTop" >基准数</div>
                  <div class="content BTop" >传统不良找券产包</div>
             </div>

         </div>

     </div>


 </div>
</template>

<script>
export default {};
</script>

<style  lang="scss" scoped>
.bBotton{
    border-bottom:none;
}
.BTop{
    border-top:none!important;
}
.basicPage_header{
    .oneDiv{
        width: 100%;
        display: flex;
        height: 48px;
        border-left: 1px solid  #E7EAEB;
        .title{
            width: 146px;
                background: #fafafa;
                box-sizing: border-box;
                padding-left:16px;
                padding-top: 14px;
                font-size: 14px;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: #666666;
                border-right: 1px solid #E7EAEB;
                border-top: 1px solid #E7EAEB;
                border-bottom: 1px solid #E7EAEB;
                // border-bottom: none;
                // border-right: none;
        }
        .content{ 
            border-top: none;
            font-size: 14px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #222222;
            width: calc(100% - 146px);
            box-sizing: border-box;
            padding-top: 14px;
            padding-left: 15px;
            border: 1px solid #E7EAEB;
            border-left: none;
            // border-right: none;
            

        }
        .left{
            flex: 1;
            display: flex;
            .title{
               
            }
        }
        .center{
            flex: 1;
            display: flex;
        }
        .right{
             flex: 1;
            display: flex;
        }
    }
}
</style>