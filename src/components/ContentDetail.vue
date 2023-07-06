<template>

  <div>
    <h4>상세페이지</h4><br/>
    <h5>{{ 블로그글[$route.params.id].title }}</h5>

    <p>작성일: {{ 블로그글[$route.params.id].date }}</p>
    <p>조회수: {{ 블로그글[$route.params.id].number }}</p>
    <p>{{ 블로그글[$route.params.id].content }}</p>

    <router-view></router-view>
  </div>
</template>

<script>
export default{
  name: "ContentDetail",
  props: {
    블로그글: Array
  }
}
</script>

<style>

</style>