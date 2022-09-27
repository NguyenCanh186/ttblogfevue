import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BlogManager from "@/views/BlogManager";
import AddBlog from "@/views/AddBlog";
import EditBlog from "@/views/EditBlog";
import ViewBlog from "@/views/ViewBlog";
import PageNotFound from "@/views/PageNotFound";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    redirect : "/blogs",
    component: HomeView
  },
  {
    path: '/blogs',
    name: 'BlogManager',
    component: BlogManager
  },
  {
    path: '/blogs/edit/:blogId',
    name: 'EditBlog',
    component: EditBlog
  },
  {
    path: '/blogs/add',
    name: 'AddBlog',
    component: AddBlog
  },
  {
    path: '/blogs/view/:blogId',
    name: 'ViewBlog',
    component: ViewBlog
  },
  {
    path: '**',
    name: 'PageNotFound',
    component: PageNotFound
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
