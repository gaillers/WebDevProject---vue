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
    <ContainerContactUs/>
    <Footer/>
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
import ContainerContactUs from '../container/ContainerContactUs'
import Footer from '../components/footer/Footer'

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
    ContainerContactUs,
    Footer,
 }
}
</script>

<style>

</style>