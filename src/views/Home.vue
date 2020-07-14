<template>
  <div>
    <Header/>
    <ContainerMain/>
    <ContainerAbout/>
  </div>
</template>

<script>
import Header from '../components/header/Header'
import ContainerMain from '../container/ContainerMain'
import ContainerAbout from '../container/ContainerAbout'

export default {
 name: 'Home',
 components: {
    Header,
    ContainerMain,
    ContainerAbout,
 }
}
</script>

<style>

</style>