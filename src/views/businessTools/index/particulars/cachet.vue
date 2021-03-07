<template>
  <div class="basicPage">
  
    <div class="titleName">
      <div class="titleName-li" @click="projectss">
        <i class="el-icon-edit-outline elRight"></i>查看详情
      </div>
    </div>

    <div class="basicPage_header">
      <div class="oneDiv">
        <div class="left">
          <div class="title">公章是否外借中</div>
          <div class="content">{{ cachetMsg.sfwj }}</div>
        </div>
        <div class="center">
          <div class="title">当前出借责任人</div>
          <div class="content">{{ cachetMsg.zrr }}</div>
        </div>
        <div class="right">
          <div class="title">此次出借日期</div>
          <div class="content">{{ cachetMsg.jcsj }}</div>
        </div>
      </div>
      
    </div>
      <el-dialog
      title="公章出借记录"
      :visible.sync="variation"
      :modal-append-to-body="false"
      append-to-body
    >
    <div class="dialogTitle" @click="projectss">
        <i class="el-icon-edit-outline elRight"></i>添加
      </div>
      <Eltable
        :data="variationData"
        :settings="variationSettings"
      />
    </el-dialog>
  </div>
</template>

<script>
import Eltable from "@/components/table";
export default {
  components:{
    Eltable
  },
  data() {
    return {
      cachetMsg:{
        sfwj:'是',
        zrr:'吴思远',
        jcsj:'2020年3月20日',
     
      },
      variation:false,
        variationSettings:{isBorder:false},
       variationData: {
        column: [
        
          {
            label: "公章借出时间",
            prop: "jcsj",
          },
          {
            label: "公章借出责任人",
            prop: "jczrr",
          },
          {
            label: "公章借出原因",
            prop: "jcyy",
          },
          {
            label: "公章归还时间",
            prop: "ghsj",
          }
          
        ],
        data: [
          {
        
            jcsj: "2020-10-20",
            jczrr: "吴思远",
            jcyy: "12323",
            ghsj: "2020-10-20",
    
          },
        ],
      },
    };
  },
  methods: {
    projectss() {
     this.variation=true
    },
  },
};
</script>

<style  lang="scss" scoped>
@import "@/views/components-demo/components/scss/index.scss";
.dialogTitle{
  position: absolute;
  left: 120px;
  top: 26px;
  color: #2B57FF;
}
</style>