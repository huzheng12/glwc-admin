<template>
  <div class="valuation">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span class="titles">一个标题</span>
      </div>
      <div class="firstChart">
        <div id="myChart"></div>
      </div>
    </el-card>
    <el-card class="box-card card2">
      <div slot="header" class="clearfix">
        <span class="titles">另一个标题</span>
        <!-- <el-button style="float: right; padding: 3px 0" type="text"
          >操作按钮</el-button
        > -->
        <i
          class="el-icon-edit"
          type="primary"
          style="
            color: #5c7efff;
            float: right;
            padding: 3px 0;
            color: #2b57ff;
            font-size: 12px;
          "
          >编辑</i
        >
      </div>
      <div class="secondChart">
        <div id="myChartGz"></div>
        <div class="myChartGz-botton">
          债券估值日期 <span class="text-data">2020年10月23日</span>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    this.drawLine();
    this.drawSencond();
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      let option = (option = {
        color: ["#2b57ff", "#2bcecc"],
        tooltip: {
          trigger: "item",
        },
        legend: {
          // ‘circle’, ‘rect’, ‘roundRect’, ‘triangle’, ‘diamond’, ‘pin’, ‘arrow’, 'none’
          // 'image://http://xxx.xxx.xxx/a/b.png'
          icon: "circle",
          orient: "vertical",
          left: 20,
          top: 20,
          textStyle: {
            fontSize: 13,
          },
        },
        tooltip: {
          position: function (point, params, dom, rect, size) {
            // 鼠标坐标和提示框位置的参考坐标系是：以外层div的左上角那一点为原点，x轴向右，y轴向下
            // 提示框位置
            var x = 0; // x坐标位置
            var y = 0; // y坐标位置

            // 当前鼠标位置
            var pointX = point[0];
            var pointY = point[1];

            // 外层div大小
            // var viewWidth = size.viewSize[0];
            // var viewHeight = size.viewSize[1];

            // 提示框大小
            var boxWidth = size.contentSize[0];
            var boxHeight = size.contentSize[1];

            // boxWidth > pointX 说明鼠标左边放不下提示框
            if (boxWidth > pointX) {
              x = 5; // 自己定个x坐标值，以防出屏
              y -= 15; // 防止点被覆盖住，可根据情况自行调节
            } else {
              // 左边放的下
              x = pointX - boxWidth - 15;
            }

            // boxHeight > pointY 说明鼠标上边放不下提示框
            if (boxHeight + 20 > pointY) {
              y = pointY + 15;
            } else if (boxHeight > pointY) {
              y = 5;
            } else {
              // 上边放得下
              y += pointY - boxHeight;
            }
            return [x, y];
          },
        },
        graphic: [
          //为环形图中间添加文字
          {
            type: "text",
            left: "center",
            top: "35%",
            style: {
              text: "3493049.34",
              textAlign: "center",
              fill: "#333333",
              fontSize: 20,
            },
          },
          {
            type: "text",
            left: "center",
            top: "47%",
            style: {
              text: "债券总额",
              textAlign: "center",
              fill: "#666666",
              fontSize: 14,
            },
          },
        ],
        series: [
          {
            name: "访问来源",
            type: "pie",
            // radius: ['40%', '70%'],
            radius: ["47%", "65%"],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 4,
              borderColor: "#fff",
              borderWidth: 3,
            },
            center: ["50%", "44%"],
            label: {
              show: false,
              position: "left",
            },
            emphasis: {
              label: {
                show: false,
                fontSize: "14",
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              {
                value: 232311.3,
                name: "利息余额 232311.3",
              },
              { value: 4334985.39, name: "本金金额 4334985.39" },
            ],
          },
        ],
      });
      // 绘制图表
      myChart.setOption(option);
    },
    drawSencond() {
      // 基于准备好的dom，初始化echarts实例

      let myChartgz = this.$echarts.init(document.getElementById("myChartGz"));

      let option = (option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        grid: {
          left: "-20px",
          right: "4%",
          bottom: "10%",
          top: "15%",
          containLabel: true,
        },
        splitLine: {
          show: false,
        },
        xAxis: {
          type: "value",
          boundaryGap: [0, 0.01],
          show: false,

          splitLine: {
            show: false,
          },
        },
        yAxis: {
          type: "category",
          axisLabel: {
            margin: 80,
            textStyle: {
              align: "left",
            },
          },
          data: ["最低估值", "最可能", "最高估值"],
          axisLine: {
            //y轴
            show: false,
          },
          axisTick: {
            //y轴刻度线
            show: false,
          },
          splitLine: {
            //网格线
            show: false,
          },
        },
        label: {
          show: true, //开启显示
          position: "insideLeft", //在上方显示
          textStyle: {
            //数值样式
            color: "aqua",
            fontSize: 15,
          },
        },

        series: [
          {
            name: "2012年",
            type: "bar",
            barWidth: "20",
            showBackground: true,
            backgroundStyle: {
              color: "red",
            },

            itemStyle: {
              normal: {
                color: function (params) {
                  var colorList = ["#8B66FF", "#2BCECC", "#2B57FF"];
                  return colorList[params.dataIndex];
                },
              },
            },
            data: [19325, 23438, 31000],
          },
        ],
      });
      myChartgz.setOption(option);
    },
  },
};
</script>

<style lang="scss">
.valuation {
  overflow: hidden;
  .box-card {
    .el-card__body {
      padding: 0;
    }
    height: 310px;
    width: 49%;
    float: left;
    .clearfix {
      .titles {
        font-size: 14px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 900;
        color: #222222;
      }
    }
    .firstChart {
      #myChart {
        width: 100%;
        height: 300px;
      }
    }
  }

  .card2 {
    margin-left: 2%;
    .secondChart {
      #myChartGz {
        width: 100%;
        height: 173px;
      }
      .myChartGz-botton {
        line-height: 80px;
        border-top: 1px solid rgba(151, 151, 151, 0.1);
        margin: 0 27px;
        font-size: 14px;
        .text-data {
          display: inline-block;
          margin-left: 15px;
        }
      }
    }
  }
}
</style>
