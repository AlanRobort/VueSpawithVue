<template>
    <div class="login-wrap">
        <el-form :model="form" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm login-container">
            <h2 style="text-align: center;">用户登录</h2>
            <el-form-item label="用户名">
                <el-input v-model="form.username"></el-input>
            </el-form-item>

            <el-form-item label="密码">
                <el-input type="password" v-model="form.password"></el-input>
            </el-form-item>
            <el-form-item>
                <el-row>
                    <el-col :span="24">
                        <div class="grid-content bg-purple-dark">
                            <el-button type="primary" @click="doLogin" style="width: 100%;">提交</el-button>
                        </div>
                    </el-col>
                </el-row>
                <!-- <el-row>
                    <el-col :span="12">
                        <div class="grid-content bg-purple-dark">
                            <el-link type="success" @click="toReg">用户注册</el-link>
                        </div>
                    </el-col>
          <el-col :span="12">
              <div class="grid-content bg-purple-dark">
                  <el-link type="success">忘记密码</el-link>
              </div>
          </el-col>
                </el-row> -->
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "StudentLogin",
        data() {
            return {
                form: {
                    username: '',
                    password: ''
                },
                 rules:{
                username:[
                     { required: true, message: '请输入用户名' },
                    //  { min: 2, max: 6, message: '长度在 2 到 5 个字符' }         
                ],
                password:[
                        { required: true, message: '请输入密码' },
                    //  { min: 3, max: 5, message: '长度在 3 到 5 个字符' }      
                    
                ]
                }
            };
           
        },

        methods: {
            toReg() {
                
            },
            doLogin(model) {
                   let self = this;
      self.loading=true;
      self.$refs["ruleForm"].validate(valid=>{
        if(valid)
        {
            self.$store.state.services.StudentService
            .Login(self.form)          
            .then(r=>{
               this.$router.push('/students');
               
            })
            .catch(r=>{
              self.$message(
                {
                  message:"用户名或密码错误",
                  type:"error"
                }
              )  
            });               
        }
      });
 }
    }
}
</script>

<style scoped>
    .login-wrap {
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        padding-top: 10%;
       
    
        background-repeat: no-repeat;
        background-position: center right;
        background-size: 100%;
    }

    .login-container {
        border-radius: 10px;
        margin: 0px auto;
        width: 350px;
        padding: 30px 35px 15px 35px;
        background: #fff;
        border: 1px solid #eaeaea;
        text-align: left;
        box-shadow: 0 0 20px 2px rgba(0, 0, 0, 0.1);
    }

    .title {
        margin: 0px auto 40px auto;
        text-align: center;
        color: #505458;
    }
</style>