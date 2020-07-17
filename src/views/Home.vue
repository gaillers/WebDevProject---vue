<template>
  <div>
    <Header/>
    <ContainerMain/>
    <ContainerAbout/>
    <ContainerServices/>
    <ContainerLatestWorks/>
    <ContainerPricingPlan/>
    <ContainerTeam/>
    <ContainerBlog/>
  </div>
</template>

<script>
import Header from '../components/header/Header'
import ContainerMain from '../container/ContainerMain'
import ContainerAbout from '../container/ContainerAbout'
import ContainerServices from '../container/ContainerServices'
import ContainerLatestWorks from '../container/ContainerLatestWorks'
import ContainerPricingPlan from '../container/ContainerPricingPlan'
import ContainerTeam from '../container/ContainerTeam'
import ContainerBlog from '../container/ContainerBlog'

export default {
 name: 'Home',
 components: {
    Header,
    ContainerMain,
    ContainerAbout,
    ContainerServices,
    ContainerLatestWorks,
    ContainerPricingPlan,
    ContainerTeam,
    ContainerBlog,
 }
}
</script>

<style>

</style>