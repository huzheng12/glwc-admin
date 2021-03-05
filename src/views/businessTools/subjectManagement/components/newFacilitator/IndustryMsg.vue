<template>
  <div class="basicPage">
    <div class="titleName">
      <div class="titleName-li" @click="projectss">
        <i class="el-icon-edit-outline elRight"></i>编辑
      </div>
    </div>

    <div class="basicPage_header">
      <div class="oneDiv">
        <div class="left">
          <div class="title">企业名称</div>
          <div class="content">{{ IndustryMsg.qymc }}</div>
        </div>
        <div class="center">
          <div class="title">曾用名</div>
          <div class="content">{{ IndustryMsg.zym }}</div>
        </div>
        <div class="right">
          <div class="title">主体类型</div>
          <div class="content">{{ IndustryMsg.ztlx }}</div>
        </div>
      </div>
      <div class="oneDiv">
        <div class="left">
          <div class="title">企业类型</div>
          <div class="content">{{ IndustryMsg.qylx }}</div>
        </div>
        <div class="center">
          <div class="title">法定代表人</div>
          <div class="content">{{ IndustryMsg.fddbr }}</div>
        </div>
        <div class="right">
          <div class="title">统一社会信用代码</div>
          <div class="content">{{ IndustryMsg.xydm }}</div>
        </div>
      </div>
      <div class="oneDiv">
        <div class="left">
          <div class="title">注册资本</div>
          <div class="content">{{ IndustryMsg.zczb }}</div>
        </div>
        <div class="center">
          <div class="title">实收资本</div>
          <div class="content">{{ IndustryMsg.sszb }}</div>
        </div>
        <div class="right">
          <div class="title">成立日期</div>
          <div class="content">{{ IndustryMsg.clrq }}</div>
        </div>
      </div>
      <div class="oneDiv">
        <div class="left">
          <div class="title">邮箱</div>
          <div class="content">{{ IndustryMsg.yx }}</div>
        </div>
        <div class="center">
          <div class="title">许可经营项目</div>
          <div class="content">{{ IndustryMsg.jyxm }}</div>
        </div>
        <div class="right">
          <div class="title">经营期限</div>
          <div class="content">{{ IndustryMsg.jyqx }}</div>
        </div>
      </div>
      <div class="oneDiv">
        <div class="left">
          <div class="title">登记机关</div>
          <div class="content">{{ IndustryMsg.djjg }}</div>
        </div>
        <div class="center">
          <div class="title">公司地址</div>
          <div class="content">{{ IndustryMsg.gsdz }}</div>
        </div>
        <div class="right">
          <div class="title">经营状态</div>
          <div class="content">{{ IndustryMsg.jyzt }}</div>
        </div>
      </div>
      <div class="oneDiv">
        <div class="left">
          <div class="title">登记机关</div>
          <div class="content">{{ IndustryMsg.dmmc }}</div>
        </div>
        <div class="center">
          <div class="title">公司地址</div>
          <div class="content">{{ IndustryMsg.szsf }}</div>
        </div>
        <div class="right">
          <div class="title">经营状态</div>
          <div class="content">{{ IndustryMsg.szcs }}</div>
        </div>
      </div>
      <div class="oneDiv">
        <div class="left">
          <div class="title">所在区县</div>
          <div class="content">{{ IndustryMsg.szqx }}</div>
        </div>
        <div class="center">
          <div class="title">注册地址行政编号</div>
          <div class="content">{{ IndustryMsg.xzbm }}</div>
        </div>
        <div class="right">
          <div class="title">核准日期</div>
          <div class="content">{{ IndustryMsg.hzrq }}</div>
        </div>
      </div>


    </div>
  </div>
</template>

<script>
import { projects } from "@/api/projectManagement/index";
export default {
  data() {
    return {
      IndustryMsg:{
        qymc:'1',
        zym:'2',
        ztlx:'3',
        qylx:'4',
        fddbr:'5',
        xydm:'6',
        zczb:'7',
        sszb:'8',
        clrq:'9',
        yx:'0',
        jyxm:'1',
        jyqx:'2',
        djjg:'3',
        gsdz:'4',
        jyzt:'5',
        dmmc:'6',
        szsf:'7',
        szcs:'8',
        szqx:'9',
        xzbm:'0',
        hzrq:'1',
      }
    };
  },
  methods: {
    projectss() {
      projects({
        packageId: "1",
        mode: "simple",
      });
    },
  },
};
</script>

<style  lang="scss" scoped>
@import "@/views/components-demo/components/scss/index.scss";
</style>