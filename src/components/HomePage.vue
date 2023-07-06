<template>
  <div>
    <h5 class="container mt-4">Vue 개발자의 블로그입니다</h5>
    <p>-vue로 만들었음-</p>
  </div>
</template>

<script>
export default{
  name: "ContentList",
  props: {
    블로그글: Array
  }
}
</script>

<style>

</style>