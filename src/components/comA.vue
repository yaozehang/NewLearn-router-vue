<template>
  <div>
    <button @click="reduce">-</button>
    <strong>{{counter}}</strong>
    <button @click="add">+</button>
  </div>
</template>

<script>
  export default {
    props: {
      counter: {
        type: Number,
      },
    },
    methods: {
      reduce() {
        this.$emit('reduce')
      },
      add() {
        this.$emit('add')
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