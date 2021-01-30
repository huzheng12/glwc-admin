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
        <i class="el-icon-edit"  type="primary" style="color:#5c7efff;float: right; padding: 3px 0;color:#2B57FF;">编辑</i>
      </div>
      <div class="secondChart">
        <div id="myChartGz"></div>
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
          trigger: "item"
        },
        legend: {
          orient: "vertical",
          left: 20,
          top: 20
        },

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
              borderWidth: 3
            },
            center: ["50%", "44%"],
            label: {
              show: false,
              position: "left"
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "14",
                fontWeight: "bold"
              }
            },
            labelLine: {
              show: false
            },
            data: [
              { value: 232311.3, name: "利息余额" },
              { value: 4334985.39, name: "本金金额" }
            ]
          }
        ]
      });
      // 绘制图表
      myChart.setOption(option);
    },
    drawSencond() {
      // 基于准备好的dom，初始化echarts实例

      let myChartgz = this.$echarts.init(document.getElementById("myChartGz"));

      let option = (option = {
        // title: {
        //   text: "世界人口总量",
        //   subtext: "数据来自网络"
        // },
           color: ["##8B66FF","#2b57ff", "#2bcecc"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          }
        },
        // legend: {
        //   data: ["2011年", "2012年"]
        // },
        //  center: ["50%", "4%"],
        grid: {
          left: "3%",
          right: "4%",
          bottom: "20%",
          containLabel: true
        },
        splitLine:{
            show:false
        },
        xAxis: {
          type: "value",
          boundaryGap: [0, 0.01]
        },
        yAxis: {
          type: "category",
          data: ["最低估值", "最可能", "最高估值"]
        },
        series: [
          {
            name: "2012年",
            type: "bar",
            data: [19325, 23438, 31000]
          }
        ],
         visualMap: {
        orient: 'horizontal',
        left: 'center',
        min: 10,
        max: 100,
        text: ['High Score', 'Low Score'],
        // Map the score column to color
        dimension: 0,
        inRange: {
            color: ['#65B581', '#FFCE34', '#FD665F']
        }
    },
      });
      myChartgz.setOption(option);
    }
  }
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
    width: 48%;
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
        height: 300px;
      }
    }
  }
}
</style>
