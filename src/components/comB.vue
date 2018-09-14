<template>
  <div>
    <h2>小计:{{total}}</h2>
  </div>
</template>

<script>
  export default {
    props: {
      counter: {
        type: Number,
      },
      price:{
        type:Number
      }
    },
    computed: {
      total() {
        return this.counter * this.price 
      }
    },
  }
</script>

<style scoped>

</style>