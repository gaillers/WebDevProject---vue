<template>
  <div>
    <Header/>
    <ContainerMain/>
    <ContainerAbout/>
    <ContainerServices/>
    <ContainerLatestWorks/>
    <ContainerPricingPlan/>
  </div>
</template>

<script>
import Header from '../components/header/Header'
import ContainerMain from '../container/ContainerMain'
import ContainerAbout from '../container/ContainerAbout'
import ContainerServices from '../container/ContainerServices'
import ContainerLatestWorks from '../container/ContainerLatestWorks'
import ContainerPricingPlan from '../container/ContainerPricingPlan'

export default {
 name: 'Home',
 components: {
    Header,
    ContainerMain,
    ContainerAbout,
    ContainerServices,
    ContainerLatestWorks,
    ContainerPricingPlan,
 }
}
</script>

<style>

</style>