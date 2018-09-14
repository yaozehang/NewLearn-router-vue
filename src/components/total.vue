<template>
  <div> 
    <h2>总计:{{total}}</h2>
  </div>
</template>

<script>
  export default {
    computed:{
      total(){
        return this.$store.state.price * this.$store.state.counter
      }
    }
  }
</script>

<style scoped>

</style>