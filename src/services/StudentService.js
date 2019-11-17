import { runInThisContext } from "vm";

class StudentService {
    axios
    baseUrl
    UserLoginUrl
    ClientInfoUrl
    
    //类似构造函数
    constructor(axios,apiUrl) {
        this.axios = axios
        //apiurl
        //localhost:5000/api/student
        this.baseUrl = `${apiUrl}student`
        //this.baseUrl='${apiUrl}student'
        //localhost:5000/api/Login
        this.UserLoginUrl = `${apiUrl}Login`
        //ClinetInfo
        this.ClientInfo =`${apiUrl}ClientInfo`
    }

    getById(id) {
        let self = this;
        return self.axios.get(`${self.baseUrl}/${id}`);
    }

    getAll() {
        let self = this;
        return self.axios.get(`${self.baseUrl}`);
    }

    Add(model) {
        let self = this;
        return self.axios.post(`${self.baseUrl}`,model);
    }

    Update(model) {
        let self = this;
        return self.axios.put(`${self.baseUrl}`,model);
    }

    Remove(id) {
        let self = this;
        return self.axios.delete(`${self.baseUrl}/${id}`);
    }

    Login(model)
    {
        let self = this;
        return self.axios.post(`${self.UserLoginUrl}`,model);
    }

    GetClinetAddress()
    {   
        let self= this;
        return self.axios.post(`${self.ClientInfoUrl}`);
    }
}

export default StudentService