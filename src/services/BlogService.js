import axios from "axios"
export class BlogService{
    static serverURL = `http://localhost:8080`


    static getAllBlog(){
        let dataURL = `${this.serverURL}/blogs/list`
        return axios.get(dataURL)
    }

    static getBlog(blogId){
        let dataURL = `${this.serverURL}/blogs/${blogId}`
        return axios.get(dataURL)
    }

    static createBlog(blog){
        let blogForm = new FormData(blog)
        let dataURL = `${this.serverURL}/blogs/create`
        return axios.post(dataURL, blogForm)
    }

    static updateBlog(blog, blogId){
        let blogForm = new FormData(blog)
        let dataURL = `${this.serverURL}/blogs/edit/${blogId}`
        return axios.put(dataURL, blogForm)
    }
    static deleteBlog(blogId){
        let dataURL = `${this.serverURL}/blogs/delete/${blogId}`
        return axios.delete(dataURL)
    }

    static getCate(){
        let dataURL = `${this.serverURL}/blogs/cate`
        return axios.get(dataURL)
    }
}
