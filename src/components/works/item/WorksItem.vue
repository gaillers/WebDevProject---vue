<template>
  <div class="works-wrapper__item">
     <img class="item-about__images" :src=" require('../../../assets/images/' + WorksItem_data.images)" alt="img">
  </div>
</template>

<script>
export default {
 name: 'WorksItem',
 props:{
    WorksItem_data:{
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
.works-wrapper__item{
 width: 370px;
 height: 370px;
}

</style>