<template>
  <div class="services-wrapper__item">
    <img class="item-services__images" :src=" require('../../../assets/images/' +  CatalogItem_data.images)" alt="png">
    <h3 class="item-services__title">{{ CatalogItem_data.title }}</h3>
    <p class="item-services__text">{{ CatalogItem_data.text }}</p>
    <ButtonReadMore btnServ="read more"/>
  </div>
</template>

<script>
import ButtonReadMore from '../ButtonReadMore'

export default {
 name:'ServicesItem',
 components: {
  ButtonReadMore
 },
 props: {
  CatalogItem_data: {
   type: Object,
   default(){
      return{

      }
   }
  }
 }
}
</script>

<style lang="scss" scoped>
 .services-wrapper__item {
  width: 370px;
  height: 438px;
  background-color: #ffffff;
 }
 .item-services__images{
   display: flex;
   padding-top: 45px;
   margin: 0 auto;
   margin-bottom: 40px;
 }
 .item-services__title{
   font-family: 'OpenSans';
   font-size: 20px;
   font-weight: 600;
   line-height: 1.1;
   letter-spacing: 1px;
   text-align: center;
   color: #212121;
   margin: 0 auto;
   margin-bottom: 26px;
 }
 .item-services__text{
  width: 271px;
  font-family: 'OpenSans';
  font-size: 15px;
  line-height: 1.67;
  letter-spacing: 0.75px;
  text-align: center;
  color: #212121;
  margin: 0 auto;
  margin-bottom: 45px;
 }
</style>