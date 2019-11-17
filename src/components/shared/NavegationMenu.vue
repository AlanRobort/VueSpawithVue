<template>
<el-menu default-active="0">
    <template v-for="item, i in items">
        <el-submenu :index="i.toString()" v-if="item.children !== undefined">
            <template slot="title">
                <i :class="'fa fa-' + item.icon"></i>
                <span>{{ item.text }}</span>
            </template>
            <el-menu-item-group title="Opciones">
                <el-menu-item v-for="child, c in item.children" :index="(i.toString() + c)" @click="redirect(child.path)">
                    <i :class="'fa fa-' + child.icon"></i> <span>{{ child.text }}</span>
                </el-menu-item>
            </el-menu-item-group>    
        </el-submenu>
        <el-menu-item index="2" v-if="item.children === undefined" @click="redirect(item.path)">
            <i :class="'fa fa-' + item.icon"></i>
            <span>{{ item.text }}</span>
        </el-menu-item>
    </template>
</el-menu>
</template>

<script>
export default {
  name: "NavegationMenu",
  data: () => ({
    items: [
      { icon: "dashboard", text: "Dashboard", path: "/" },
      {
        icon: "user",
        text: "User",
        children: [
          { icon: "plus", text: "add", path: "/students/add" },
          { icon: "list", text: "StudentIndex", path: "/students/" },
          { icon: "user", text: "Login", path: "/students/Login" },
        ]
      },
      {
        icon: "star",
        text: "数据统计",
        children: [
          { icon: "list", text: "折线图", path: "/students/Barchart" },
          { icon: "list", text: "柱状图", path: "/students/Histogram" },
          { icon: "list", text: "饼图", path: "/students/Piechart" }
        ]
      },
      {
        icon: "wrench",
        text: "手机数据呈现",
        children: [
          { icon: "list", text: "手机视频呈现", path: "/configuration/opcion1" },
          { icon: "list", text: "无人机呈现", path: "/configuration/opcion2" }
        ]
      }
    ]
  }),
  methods: {
    redirect(path) {
      if(path === undefined) return;
      this.$router.push(path);
    },
   ClinetInfoAddress(){
      
      let self = this;
      self.loading=true;
      self.$store.state.services.StudentService
            .GetClinetAddress()          
    }
  }
};
</script>