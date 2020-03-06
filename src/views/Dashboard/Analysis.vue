<template>
  <div>
    <a-card title="分析图表" style="margin-top:20px">
      <Chart :option="chartOption" style="height:400px" />
    </a-card>
  </div>
</template>

<script>
import Chart from "../../components/Chart";
import request from "../../utils/request";
export default {
  data() {
    return {
      chartOption: {}
    };
  },
  components: {
    Chart
  },
  mounted() {
    this.getChartData();
    this.interval = setInterval(() => {
      this.getChartData();
      // this.chartOption.series[0].data = this.chartOption.series[0].data.map(
      //   () => random(100)
      // );
      // this.chartOption = { ...this.chartOption };
    }, 3000);
  },
  methods: {
    getChartData() {
      request({
        url: "/api/dashboard/chart",
        method: "GET",
        params: { id: 1 }
      }).then(res => {
        this.chartOption = {
          title: {
            text: ""
          },
          tooltip: {},
          xAxis: {
            data: ["iphone", "小米", "华为", "oppo", "一加", "三星"]
          },
          yAxis: {},
          series: [
            {
              name: "销量",
              type: "line",
              data: res.data
            }
          ]
        };
      });
    }
  },
  beforeDestroy() {
    clearInterval(this.interval);
  }
};
</script>

<style></style>
