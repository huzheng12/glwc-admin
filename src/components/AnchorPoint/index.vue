<template>
  <div class="warp">
    <!-- 导航区域 -->
    <ul class="navs">
      <div v-for="(item, index) in point" :key="index" @click="clickTop(index)">
        <template>
          <div :class="{ active: active === index, text: true }">
            {{ item.text }}
          </div>
          <el-divider
            v-if="index !== point.length - 1"
            class="fen"
            direction="vertical"
          ></el-divider>
        </template>
      </div>
    </ul>
    <!-- 内容区域 -->
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    point: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  data() {
    return {
      active: 0, // 当前激活的导航索引
    };
  },
  mounted() {
    // 监听滚动事件
    document
      .querySelector(".point-content")
      .addEventListener("scroll", this.onScroll);
  },
  destroy() {
    // 必须移除监听器，不然当该vue组件被销毁了，监听器还在就会出错
    document
      .querySelector(".point-content")
      .removeEventListener("scroll", this.onScroll);
  },
  methods: {
    clickTop(key) {
      this.active = key;
      const navContents = document.querySelectorAll(".point-content >div");
      // 所有锚点元素的 offsetTop
      navContents.forEach((item, index) => {
        if (index === key) {
          document.querySelector(".point-content").scrollTop =
            item.offsetTop - 64;
        }
      });
    },
    // 滚动监听器
    onScroll() {
      // 获取所有锚点元素
      const navContents = document.querySelectorAll(".point-content >div");
      // 所有锚点元素的 offsetTop
      const offsetTopArr = [];
      navContents.forEach((item) => {
        offsetTopArr.push(item.offsetTop - 64);
      });
      // 获取当前文档流的 scrollTop
      const scrollTop =
        document.querySelectorAll(".point-content")[0].scrollTop ||
        document.body.scrollTop;
      // 定义当前点亮的导航下标
      let navIndex = 0;
      for (let n = 0; n < offsetTopArr.length; n++) {
        // 如果 scrollTop 大于等于第 n 个元素的 offsetTop 则说明 n-1 的内容已经完全不可见
        // 那么此时导航索引就应该是 n 了
        if (scrollTop >= offsetTopArr[n]) {
          navIndex = n;
        }
      }
      // 把下标赋值给 vue 的 data
      this.active = navIndex;
    },
  },
};
</script>

<style scoped  lang='scss'>
.warp {
  display: flex;
  height: calc(100vh - 50px);
  overflow: hidden;
  flex-direction: column;

  .navs {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    padding: 0 20px;
    height: 64px;
    line-height: 64px;
    border-bottom: 1px solid #e9e9e9;
    margin: 0;
    align-items: center;
  }
  /* 内容区的样式 */
  .point-content {
    background-color: white;
    width: 100%;
    overflow-y: auto;
  }
  .point-content > div {
    width: 100%;
    padding: 0 20px;
    overflow: hidden;
  }

  .point-content > div:last-child {
    min-height: calc(100vh - 114px);
  }
  /* 导航栏的样式 */

  .navs li {
    padding: 0 20px;
    line-height: 1.6;
    font-size: 24px;
  }
  /* 当导航被点亮后改变颜色 */
  .navs .active {
    color: #2b57ff;
    /* background-color: #e2e2e2; */
    border-bottom: 2px solid #2b57ff;
    line-height: 64px;
    font-weight: 500;
  }
  .fen {
    margin: 0 20px;
  }
  .text {
    display: inline-block;
    font-size: 14px;
    color: #666;
    cursor: pointer;
    border-bottom: 2px solid transparent;
  }

  .title-h3 {
    color: #222222;
    font-weight: 500;
    border-left: 3px solid #2b57ff;
    padding-left: 6px;
    margin-bottom: 15px;
    margin-top: 30px;
  }

  .title-h3:first-child {
    margin-top: 24px;
  }
}
</style>