import Axios from 'axios'
import exampleService from '../services/ExampleService'
import StudentService from '../services/StudentService'

// Axios Configuration
Axios.defaults.headers.common.Accept = 'application/json'

let apiUrl = 'http://localhost:8888/api/'

export default {
   exampleService: new exampleService(Axios),
    StudentService: new StudentService(Axios,apiUrl)
    
    
}