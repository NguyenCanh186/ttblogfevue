<template>
<div class="container mt-3">
  <div class="row">
    <div class="col">
      <p class="h3 text-success fw-bold">Blog manager
      <router-link to="/blogs/add" class="btn btn-success btn sm"><i class="fa fa-plus-circle"></i>New blog</router-link>
      </p>
      <form>
        <div class="row">
          <div class="col-md-4">
            <input type="text" class="form-control" placeholder="Search name">
          </div>
          <div class="col">
            <input type="submit" class="btn btn-outline-dark">
          </div>
        </div>

      </form>
    </div>
  </div>
  <div class="container">
    <table>
      <tr>
        <th>#</th>
        <th>Title</th>
        <th>Cover</th>
        <th>Category</th>
        <th>Content</th>
        <th colspan="2">Action</th>
      </tr>
      <tr v-for="(blog, i) in blogs" :key="blog">
        <td>{{i + 1}}</td>
        <td>{{blog.title}}</td>
        <td><img v-for="image in blog.covers" :key="image" :src="`${'http://localhost:8080/image/' + image.name}`" width="100px"></td>
        <td>{{blog.category.name}}</td>
        <td>{{blog.content}}</td>

        <td><router-link :to="`/blogs/edit/${blog.id}`" class="btn btn-warning"><i class="fa fa-pen"></i></router-link></td>
        <td><button class="btn btn-danger" @click="deleteBlog(blog.id)"><i class="fa fa-trash "></i></button></td>
      </tr>
    </table>
  </div>
<!--  <pre>{{blogs}}</pre>-->
</div>
</template>

<script>
import {BlogService} from "@/services/BlogService";

export default {
  name: "BlogManager",
  data: function (){
    return{
      blogs: [],
      errorMessage : null
    }
  },
  created : async function (){
    try {
        let response = await BlogService.getAllBlog();
        this.blogs = response.data;
    }
    catch (error){
        this.errorMessage = error;
    }
  },
  methods : {
    deleteBlog : async function (blogId){
      try {
        let response = await BlogService.deleteBlog(blogId);
        if (response){
          let response = await BlogService.getAllBlog();
          this.blogs = response.data;
        }
      } catch (error){
        this.errorMessage(error)
      }
    }
  }
}
</script>

<style scoped>

</style>
