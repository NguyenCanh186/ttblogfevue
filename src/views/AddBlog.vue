<template>
  <div>
    <div class="container mt-3">
      <div class="row">
        <div class="col">
          <p class="h3 text-success fw-bold">Add new blog</p>
        </div>
      </div>
    </div>
    <div class="container mt-3">
      <div class="row">
        <div class="col-md-3">
          <form id="form-blog">
            <div class="mb-2">
              <input v-model="blog.title" type="text" name="title" class="form-control" placeholder="Title">
            </div>
            <div class="mb-2">
              <input type="file" name="files" multiple class="form-control"  placeholder="Cover">
            </div>
            <div class="mb-2">
              <input v-model="blog.content" name="content" type="text" class="form-control" placeholder="Content">
            </div>
            <div class="mb-2">
              <select v-model="blog.category" class="form-control" name="category">
                <option value="">Select Category</option>
                <option :value="cate.id" v-for="cate of category" :key="cate.id">{{cate.name}}</option>
              </select>
            </div>
            <div class="mb-2">
              <button class="btn btn-success" @click.prevent="sendForm">Create</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import {BlogService} from "@/services/BlogService";

export default {
  name: "AddBlog",
  data : function (){
    return {
      blog : {
        title: '',
        files: [],
        category: '',
        content: '',
      },
      category: []
    }
  },
  created : async function(){
    try {
      let response = await BlogService.getCate()
      this.category = response.data;
    }
    catch (error){
      console.log(error)
    }
  },
  methods: {
    sendForm() {

          let form = document.querySelector('#form-blog');

          console.log(form);
          let response = BlogService.createBlog(form);
          if (response) {
            return this.$router.push('/')
          }
          else {
            return this.$router.push('/blogs/add')
          }
    }
  }
}
</script>

<style scoped>

</style>
