<template>
  <div>
    <button @click="reduce">-</button>
    <strong>{{$store.state.counter}}</strong>
    <button @click="add">+</button>
  </div>
</template>

<script>
  export default {
    methods:{
      reduce(){
        this.$store.commit('REDUCE_COUNTER')
      },
      add(){
        this.$store.commit('ADD_COUNTER')
      }
    },
  }
</script>

<style scoped>
    button{
    background-color: #00a1d6;
    width: 60px;
    height: 40px;
    border-radius: 4px ;
    font-size: 26px;
  }
</style>