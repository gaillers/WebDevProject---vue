<template>
  <div id="app">
   <Home/>
  </div>
</template>

<script>
import Home from '@/views/Home'


export default {
  name: 'App',
  components: {
   Home,
  }
}
</script>

<style lang="scss">
body,
p,
h1,
h2,
h3,
ul[class],
ol[class],
li {
  margin: 0;
}
ul[class],
ol[class],
li {
  padding: 0;
  list-style-type: none;
}
</style>
