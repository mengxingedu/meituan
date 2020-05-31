<template>
  <div id="app">
    <keep-alive exclude='position'>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style>
  #app{
    background: #f0efed;
  }
</style>
