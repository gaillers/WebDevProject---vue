<template>
  <div>
    <Header/>
    <ContainerMain/>
    <ContainerAbout/>
    <ContainerServices/>
  </div>
</template>

<script>
import Header from '../components/header/Header'
import ContainerMain from '../container/ContainerMain'
import ContainerAbout from '../container/ContainerAbout'
import ContainerServices from '../container/ContainerServices'

export default {
 name: 'Home',
 components: {
    Header,
    ContainerMain,
    ContainerAbout,
    ContainerServices,
 }
}
</script>

<style>

</style>