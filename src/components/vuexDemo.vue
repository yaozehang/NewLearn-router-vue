<template>
  <div class="counter">
    <h2>单价:{{$store.state.price}}</h2>
    <counter></counter>
    <total></total>
    {{$store.getters.totals}}
    <input type="text" v-model="counte">
    <button @click="handleCounter">一键加价</button>
    <br>
    <button @click="handleAsync">一键加价,缓一下 </button>
  </div>
</template>

<script>
  import counter from './counter'
  import total from './total'

  export default {
    components:{
      counter,
      total
    },
    data() {
      return {
        counte: ""
      }
    },
    methods: {
      handleCounter() {
        this.$store.commit('COUNTER',this.counte)
      },
      handleAsync() {
        this.$store.dispatch('handleAsyncAction',this.counte)
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