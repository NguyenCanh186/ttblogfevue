import axios from "axios"
import authHeader from "@/services/auth-header";
export class BlogService{
    static serverURL = `http://localhost:8080`


    static getAllBlog(){
        let dataURL = `${this.serverURL}/blogs/list`
        return axios.get(dataURL, { headers: authHeader() })
    }

    static getBlog(blogId){
        let dataURL = `${this.serverURL}/blogs/${blogId}`
        return axios.get(dataURL, { headers: authHeader() })
    }

    static createBlog(blog){
        let blogForm = new FormData(blog)
        let dataURL = `${this.serverURL}/blogs/create`
        return axios.post(dataURL, blogForm, { headers: authHeader() })
    }

    static updateBlog(blog, blogId){
        let blogForm = new FormData(blog)
        let dataURL = `${this.serverURL}/blogs/edit/${blogId}`
        return axios.put(dataURL, blogForm, { headers: authHeader() })
    }
    static deleteBlog(blogId){
        let dataURL = `${this.serverURL}/blogs/delete/${blogId}`
        return axios.delete(dataURL, { headers: authHeader() })
    }

    static getCate(){
        let dataURL = `${this.serverURL}/blogs/cate`
        return axios.get(dataURL, { headers: authHeader() })
    }
}
