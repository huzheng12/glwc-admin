<template>
  <div class="change-log">
    <div v-for="(item, index) in data" :key="index">
      <div
        class="box-li"
        v-if="moreFlg ? index < 3 : true"
        :style="{
          opacity: moreFlg && index !== 0 ? (index === 1 ? 0.6 : 0.3) : 1,
        }"
      >
        <div class="time">
          {{ item.time }}
        </div>
        <div class="name">
          {{ item.name }}
        </div>
        <div class="content name">
          {{ item.content }}
        </div>
      </div>
    </div>
    <div class="more" v-if="moreFlg" @click="moreFlg = false">
      展开详情 <i class="el-icon-arrow-down"></i>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      moreFlg: true,
      data: [
        {
          time: "2020-10-20 12:00:00",
          name: "吴思远",
          content: "修改抵押物估值为1293023.00元",
        },
        {
          time: "2020-10-20 12:00:00",
          name: "吴思远",
          content: "修改抵押物估值为1293023.00元",
        },
        {
          time: "2020-10-20 12:00:00",
          name: "吴思远",
          content: "修改抵押物估值为1293023.00元",
        },
        {
          time: "2020-10-20 12:00:00",
          name: "吴思远",
          content: "修改抵押物估值为1293023.00元",
        },
        {
          time: "2020-10-20 12:00:00",
          name: "吴思远",
          content: "修改抵押物估值为1293023.00元",
        },
        {
          time: "2020-10-20 12:00:00",
          name: "吴思远",
          content: "修改抵押物估值为1293023.00元",
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.change-log {
  .box-li {
    display: flex;
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #666666;
    line-height: 20px;
    margin-bottom: 10px;
    opacity: 1;

    .name {
      margin-left: 20px;
    }
  }
  .more {
    cursor: pointer;
    color: #2b57ff;
  }
}
</style>