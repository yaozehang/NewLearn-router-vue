<template>
  <div id="app">
    <div>
      <ul>
        <li><router-link to="/home">首页</router-link></li>
        <li><router-link to="/about/666">详情页</router-link></li>
        <li><router-link to="/login">登录页</router-link></li>
      </ul>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
