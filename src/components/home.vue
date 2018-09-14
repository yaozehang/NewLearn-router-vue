<template>
  <div>
    <h1>首页</h1>
    <!-- <router-link :to="{path: '/login',query:{useinfo:'name is yao'}}">跳转</router-link>
    <button @click="handleGetData">获得简单请求数据</button>
    <button @click="getJsonp">获得JSONP数据</button>
    <button @click="getNoSimple">post非简单请求数据</button>
    <button @click="getGet">Vue代理跨域</button> -->
    <div class="counter">
      <h2>单价:{{price}}</h2>
      <comA :counter=counter @reduce="reduce" @add="add"></comA>
      <comB :price=price :counter=counter></comB>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import comA from './comA'
  import comB from './comB'

  export default {
    name:"home",
    components:{
      comA,
      comB
    },
    data() {
      return {
        counter: 0,
        price:20
      }
    },
    methods: {
      handleGetData() {
        axios.get('http://localhost:3001/getMsg',{
          withCredentials: true
        }).then(res => {
          console.log(res)
        }).catch(err => {
          console.log('err',err)
        })
      },
      getJsonp(){
        let script = document.createElement('script');
        script.src = 'http://localhost:3001/getJsonp?callback=getData'
        document.body.appendChild(script)
      },
      getNoSimple(){
        axios.post('http://localhost:3001/noSimple',{username:'yao'},{withCredentials: true}).then(res => {
          console.log(res)
        })
      },
      getGet(){
        axios.get('/api/demo').then(res => {
          console.log(res)
        })
      },
      reduce(){
        this.counter--
      },
      add(){
        this.counter++
      }
    },
  }
</script>

<style scoped>
  .counter{
    display: flex;
    border: 1px solid #0ff;
  }
</style>