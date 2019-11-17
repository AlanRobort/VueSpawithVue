import Vue from 'vue'
import Router from 'vue-router'

import Default from '@/components/Default'
import ExampleIndex from '@/components/example/Index'
import ExampleView from '@/components/example/View'

import studentIndex from '@/components/Students/Index'
import CreateorUpdate from '@/components/Students/CreateorUpdate'
import StudentLogin from '@/components/Students/Login'
import Barchart from '@/components/Students/Barchart'
import Piechart from '@/components/Students/Piechart'
import Histogram from '@/components/Students/Histogram'

Vue.use(Router)

const routes = [
  { path: '/', name: 'Default', component: Default },
  { path: '/example', name: 'ExampleIndex', component: ExampleIndex },
  { path: '/example/:id', name: 'ExampleView', component: ExampleView },
  { path: '/students/', name: 'studentIndex', component: studentIndex },
  { path: '/students/add', name: 'StudentCreate', component: CreateorUpdate },
  { path: '/students/:id/edit', name: 'Studentedit', component: CreateorUpdate },
  { path: '/students/Login', name: 'StudentLogin', component: StudentLogin },
  { path: '/students/Barchart', name: 'Barchart', component: Barchart },
  { path: '/students/Piechart', name: 'Piechart', component: Piechart },
  { path: '/students/Histogram', name: 'Histogram', component: Histogram }
]

export default new Router({
  routes
})
