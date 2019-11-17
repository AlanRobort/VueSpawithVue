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
      bar:{
        BarCounts:[],
        BarTimes:[]
      }
    };
  },
  methods: {
    drawBar(id) {
      let self = this;
      //echarts.init
      self.charts = echarts.init(document.getElementById(id));

      self.charts.setOption({
       xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [1,1,1,3,5,2,1,4,2,1],
        type: 'line',
        smooth: true
    }]
      });
    }
  },
  //调用
  mounted() {
    this.$nextTick(function() {
      this.drawBar("main");
    });
  }
};
</script>

