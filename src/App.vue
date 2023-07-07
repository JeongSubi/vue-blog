<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Vuelog</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">
              <router-link to="/">
              Home
              </router-link>
            </a>
             <br/>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <router-link to="/list">
                Contents
              </router-link>
            </a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li>
                <hr class="dropdown-divider">
              </li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled">Disabled</a>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>

  <div class="mt-4">
    <router-view :블로그글="블로그글"></router-view>
  </div>
</template>

<script>
// import ContentList from './components/ContentList.vue';
import blog from './assets/blog.js'

export default {
  name: 'App',
  data() {
    return {
      블로그글: blog
    }
  },
  // beforeRouteEnter(to, from){
  //   // Vue 컴포넌트 안에서도 navigation guard 쓸 수 있음
  //   // lifecycle hook쓰는 위치에다가 쓰면 된다.
  //   // 목적지인 to, 출발지인 from을 의미한다.
  //   // 특정 페이지로 접속했을 때 ajax 요청하고 그럴 일이 있으면 여기다가 쓰면된다.
  // },
  // beforeRouteUpdate(){
  //   // Vue 컴포넌트 안에서도 navigation guard 쓸 수 있음
  // },
  components: {
    // ContentList: ContentList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
