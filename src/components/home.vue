<template>
  <div>
    <h1>首页</h1>
    <router-link :to="{path: '/login',query:{useinfo:'name is yao'}}">跳转</router-link>
    <button @click="handleGetData">获得简单请求数据</button>
    <button @click="getJsonp">获得JSONP数据</button>
    <button @click="getNoSimple">获得非简单请求数据</button>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name:"home",
    methods: {
      handleGetData() {
        axios.get('http://localhost:3000/getMsg').then(res => {
          console.log(res)
        }).catch(err => {
          console.log('err',err)
        })
      },
      getJsonp(){
        let script = document.createElement('script');
        script.src = 'http://localhost:3000/getJsonp?callback=getData'
        document.body.appendChild(script)
      },
      getNoSimple(){
        axios.post('http://localhost:3000/noSimple',{username:'yao'}).then(res => {
          console.log(res)
        })
      }
    },
  }
</script>

<style scoped>

</style>