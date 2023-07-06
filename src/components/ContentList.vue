<template>
<div>
  <h5 @click="$router.push('/detail/0')">
<!--    <router-link to="/detail/0" :블로그글="블로그글">-->
    {{ 블로그글[0].title }}
<!--    </router-link>-->
    </h5>
  <p>{{ 블로그글[0].date }}</p>
</div>
  <div>
    <h5 @click="$router.push('/detail/1')">
<!--    <router-link to="/detail/1" :블로그글="블로그글">-->
        {{ 블로그글[1].title }}
<!--      </router-link>-->
    </h5>
    <p>{{ 블로그글[1].date }}</p>
  </div>
  <div>
    <h5 @click="$router.push('/detail/2')">
<!--      <router-link to="/detail/2" :블로그글="블로그글">-->
        {{ 블로그글[2].title }}
<!--      </router-link>-->
    </h5>
    <p>{{ 블로그글[2].date }}</p>
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