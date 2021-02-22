<template>
  <div class="basicPage">
    <div class="titleName">
      <div class="titleName-li">
        <i class="el-icon-edit-outline elRight"></i>详情
      </div>
      <div class="titleName-li">
        <i class="el-icon-edit-outline elRight"></i>编辑
      </div>
    </div>

    <div class="basicPage_header">
      <div class="oneDiv">
        <div class="left">
          <div class="title">融资编号</div>
          <div class="content">{{rzfaData.rzbh}}</div>
        </div>

        <div class="center">
          <div class="title">融资主体</div>
          <div class="content">{{rzfaData.rzzt}}</div>
        </div>

        <div class="right">
          <div class="title">收益权主体</div>
          <div class="content">{{rzfaData.syqzt}}</div>
        </div>
      </div>
      <div class="oneDiv">
        <div class="left">
          <div class="title BTop">交易类型</div>
          <div class="content BTop">{{rzfaData.jylx}}</div>
        </div>

        <div class="center">
          <div class="title BTop">收购类型</div>
          <div class="content BTop">{{rzfaData.sglx}}</div>
        </div>

        <div class="right">
          <div class="title BTop">保证金金额</div>
          <div class="content BTop">{{rzfaData.bzjje}}</div>
        </div>
      </div>

      <div class="oneDiv">
        <div class="left">
          <div class="title BTop">资金来源</div>
          <div class="content BTop">{{rzfaData.zjly}}</div>
        </div>

        <div class="center">
          <div class="title BTop">融资成本</div>
          <div class="content BTop">{{rzfaData.rzcb}}</div>
        </div>

        <div class="right">
          <div class="title BTop">再投资收益权</div>
          <div class="content BTop">{{rzfaData.ztzsyq}}</div>
        </div>
      </div>
        <div class="oneDiv">
        <div class="left">
          <div class="title BTop">预计交易时间</div>
          <div class="content BTop">{{rzfaData.yjjysj}}</div>
        </div>

        <div class="center">
          <div class="title BTop">交互安排</div>
          <div class="content BTop">{{rzfaData.jhap}}</div>
        </div>

        <div class="right">
          <div class="title BTop">回收安排</div>
          <div class="content BTop">{{rzfaData.hsap}}</div>
        </div>
      </div>
          <div class="oneDiv">
        <div class="left">
          <div class="title BTop">服务商</div>
          <div class="content BTop">{{rzfaData.fws}}</div>
        </div>

        <div class="center">
          <div class="title BTop">其他合作方</div>
          <div class="content BTop">{{rzfaData.qthzf}}</div>
        </div>
        <div class="center">
          <div class="title BTop"></div>
          <div class="content BTop"></div>
        </div>

        <!-- <div class="right">
          <div class="title BTop">回收安排</div>
          <div class="content BTop">传统不良找券产包</div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        rzfaData:{
            rzbh:"12345",
            rzzt:"C2",
            syqzt:"L1",
            jylx:"线上拍卖",
            sglx:"自由资金",
            bzjje:"5000",
            zjly:"自由资金",
            rzcb:"6%",
            ztzsyq:"20%",
            yjjysj:"2020年",
            jhap:"支付宝",
            hsap:"完成收购",
            fws:"服务商",
            qthzf:"支付宝"
        }
    };
  },
};
</script>

<style lang="scss" scoped>
@import "./scss/index.scss";
</style>