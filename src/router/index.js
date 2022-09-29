import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BlogManager from "@/views/BlogManager";
import AddBlog from "@/views/AddBlog";
import EditBlog from "@/views/EditBlog";
import ViewBlog from "@/views/ViewBlog";
// import PageNotFound from "@/views/PageNotFound";
import Login from "@/views/Login";
import store from "@/store";

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
  // {
  //   path: '**',
  //   name: 'PageNotFound',
  //   component: PageNotFound
  // },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/logout',
    name: 'logout',
    beforeEnter (to, from, next) {
      store.dispatch('logout').then(() => {
        if (this.$store.state.auth.status.loggedIn) {
          return next('/');
        }
        location.reload();
      }).catch(reason => {
        console.log(reason)
      })
    }
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
