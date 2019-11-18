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
      bar: {
        UserCount: [],
        dateTime: []
      }
    };
  },
  created () {
    let self = this;
    self.getClientTimes()
  },
  watch:
  {

    bar:{
      handler(newdata,olddata)
      {
       this.drawBar("main"),
       this.bar = newdata;
       console.log("监控数据变化"+newdata)
      },
      deep: true
    }
  },
  methods: {
    refresh(){
      this.$store.state.services.StudentService.GetBardata()
      .then(r=>{
         this.bar.UserCount=[];
            this.bar.dateTime=[];
        //for(let i = 0;i<5;i++)
        //{
          // console.log("qing qiu");
           r.data.forEach(element => {   
             
         // setTimeout(r => {
            
            this.bar.UserCount.push(element.count);
            this.bar.dateTime.push(element.dateTime);
           // console.log(element);
         // }, 1000*i);
            });
       // }
      })
    },
    getClientTimes() {
      let self = this;
      //self.loading = true;
      console.log("11111111")
      self.$store.state.services.StudentService.GetBardata()
        //r后台获取的值
        .then(r => {
          //console.log("r的数据"+r.data)
         
                /*for(var i=0;i<r.length;i++){
                    bar.count.push(r.data[i].count);
                }
                for(var i=0;i<r.length;i++){
                    dateTime.push(r.data[i].dateTime);
                }*/
                r.data.forEach(element => {
                  this.bar.UserCount.push(element.count);
                  this.bar.dateTime.push(element.dateTime);
                  console.log(element);
                });
                this.drawBar("main");
          
          //self.loading = false;
          // self.bar.count = r.data.count;
          
          // self.bar.dateTime = r.data.dateTime
        })
        .catch(r => {
          self.$message({
            message: "发生错误",
            type: "error"
          });
        });
    },
    drawBar(id) {
      let self = this;
      //echarts.init
      self.charts = echarts.init(document.getElementById(id));

      self.charts.setOption({
        xAxis: {
          type: "category",
          data: this.bar.dateTime
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            data: this.bar.UserCount,
            type: "line",
            smooth: true
          }
        ]
      });
    }
  },
  //调用
  mounted() {
    this.$nextTick(function() {
      console.log(this.bar.UserCount);
      this.drawBar("main");
    });
    setInterval(()=>{this.refresh();},1000);  
    
  }
};
</script>

