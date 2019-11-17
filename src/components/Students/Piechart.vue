<template>
  <!--为echarts准备一个具备大小的容器dom-->
  <div id="main" style="width: 600px;height: 400px;"></div>
</template>
<script>
import echarts from "echarts";

export default {
  name: "Piechart",
  data() {
    return {
      charts: "",
      option: ["直接访问", "邮件营销", "联盟广告", "视频广告", "搜索引擎"],
      optiondata: [
        { value: 335, name: "直接访问" },
        { value: 310, name: "邮件营销" },
        { value: 234, name: "联盟广告" },
        { value: 135, name: "视频广告" },
        { value: 1548, name: "搜索引擎" }
      ]
    };
  },
  methods: {
    drawPie(id) {
      let self = this;
      //echarts.init
      self.charts = echarts.init(document.getElementById(id));
      
      self.charts.setOption({
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          x: "left",
          data: self.option
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["50%", "70%"],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: "center"
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: "50",
                  fontWeight: "bold"
                }
              }
            },           
            data: self.optiondata
          }
        ]
      });
    }
  },
  //调用
  mounted () {
      this.$nextTick(function(){
          this.drawPie('main')

      })
  }
};
</script>

