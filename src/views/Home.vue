<template>
  <div>
    <Header/>
    <ContainerMain/>
    <ContainerAbout/>
    <ContainerServices/>
    <ContainerLatestWorks/>
  </div>
</template>

<script>
import Header from '../components/header/Header'
import ContainerMain from '../container/ContainerMain'
import ContainerAbout from '../container/ContainerAbout'
import ContainerServices from '../container/ContainerServices'
import ContainerLatestWorks from '../container/ContainerLatestWorks'

export default {
 name: 'Home',
 components: {
    Header,
    ContainerMain,
    ContainerAbout,
    ContainerServices,
    ContainerLatestWorks,
 }
}
</script>

<style>

</style>