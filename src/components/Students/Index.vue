<template>
<div>
<h2>Students.Index</h2>
    <el-table  v-loading="loading" :data="data" style="width: 100%">
      <el-table-column prop="id" label="id" width="180" sortable></el-table-column>
      <el-table-column prop="name" label="姓名" width="180" sortable>
         <template slot-scope="scope"> 
        {{scope.row.name}}
         </template>
      </el-table-column> 
      <el-table-column prop="desc" label="描述" sortable></el-table-column>
      <el-table-column align="right" >
        <template slot-scope="scope" >
          <el-button @click="$router.push(`/students/${scope.row.id}/edit`)">编辑</el-button>
          <el-button type="danger" @click="Delete(scope.row.id)">删除</el-button>
        </template> 
      </el-table-column>
    </el-table>
</div>
</template>

<script>
export default {
  name: "StudentIndex",
  data() {
    return{
      data:[],
      loading:false
    };
   
  },
  //在模板渲染html之前
  created() {
    let self = this;
    
    self.getAll();
  },
  methods: {
   getAll(){
     let self = this;
     self.loading = true;
        self.$store.state.services.StudentService
      .getAll()
      //r后台获取的值
      .then(r=>{
        self.loading=false;
          self.data=r.data ;
      }).catch(r=>{
        self.$message({
          message:"发生错误",
          type:"error"
        });
      });
   },
   Delete(id){
     let self = this;
     self.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(r => {
           _Remove();
      }).catch(r=>{
        self.$message({
          message:"发生错误+1",
          type:"error"
        });
      });
        
       

    // function _Remove()
    // {
      
    //   //self.loading= true;
    //   self.$store.state.services.StudentService
    //   .Remove(id)
       
    //   .then(r=>{
    //     self.loading=false;
    //     self.getAll();
    //   }).catch(r=>{
    //     self.$message({
    //       message:"发生错误+1",
    //       type:"error"
    //     });
    //   });
    // }

     function _Remove(){
            self.$store.state.services.StudentService
              .Remove(id)
       
            .then(r=>{
        self.loading=false;
        self.getAll();          
        });
     }
   }
  }
};
</script>