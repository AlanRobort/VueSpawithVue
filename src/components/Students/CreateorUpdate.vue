<template>
  <div>
    <h2>{{PageTitle}}Student</h2>
    <el-form v-loading="loading" :model="form" :rules="rules" ref="ruleForm" >
      <el-form-item label="学生姓名" prop="name">
        <el-input v-model="form.name" ></el-input>
      </el-form-item>
      <el-form-item label="学生描述" prop="desc">
        <el-input v-model="form.desc"></el-input>
      </el-form-item>
      <el-form-item>
      <el-button type="primary" @click="save">生成</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "CreateorUpdate",
  data() {
    return {
      loading:false,
      form: {
        id: 0,
        name: null,
        desc: null
      }, 
      rules:{
   name:[
       { required: true, message: '请输入学生名称' },
       { min: 3, max: 5, message: '长度在 3 到 5 个字符' }
   ],
   desc:[
       { required: true, message: '请输入学生描述'},
       { min: 0, max: 100, message: '长度在 0 到 100 个字符' }
   ]
  },
    };
  },
 
  computed: {
    PageTitle() {
      return this.form.id === null ? "Update" : "Create";
    }
  },
  //在模板渲染html之前
  created() {
    //在模板渲染之前获取id
    let self = this;
    var id = self.$route.params.id;
    self.get(id);
    
  },
  methods: {
    get(id){
      if(id==undefined) return;
      let self = this;
      self.loading=true;
      self.$store.state.services.StudentService
            .getById(id)          
            .then(r=>{
             self.loading=false;
             self.form.id = r.data.id
             self.form.name = r.data.name
             self.form.desc = r.data.desc
            })
            .catch(r=>{
              self.$message(
                {
                  message:"未按要求输入内容",
                  type:"error"
                }
              )  
            });     
    },
    save() {
      let self = this;
      self.loading=true;
      self.$refs["ruleForm"].validate(valid=>{
        if(valid)
        {
          if(self.form.id>0){
            self.$store.state.services.StudentService
            .Update(self.form)          
            .then(r=>{
               this.$router.push('/students');
               self.loading=false;
            })
            .catch(r=>{
              self.$message(
                {
                  message:"未按要求输入内容",
                  type:"error"
                }
              )  
            });  

          }else{
            self.$store.state.services.StudentService
            .Add(self.form)          
            .then(r=>{
               this.$router.push('/students');
               self.loading=false;
            })
            .catch(r=>{
              self.$message(
                {
                  message:"未按要求输入内容",
                  type:"error"
                }
              )  
            });  
            }
             
        }

      });
    }
  }
};
</script>