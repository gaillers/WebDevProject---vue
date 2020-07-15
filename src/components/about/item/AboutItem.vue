<template>
  <div class="about-wrapper__item">
     <img class="item-about__images" :src=" require('../../../assets/images/' +  InfoItem_data.images)" alt="img">
     <h3 class="item-about__title">{{ InfoItem_data.title }}</h3>
     <p class="item-about__text">{{ InfoItem_data.text }}</p>
  </div>
</template>

<script>

export default {
 name:'AboutItem',
 props:{
  InfoItem_data: {
     type: Object,
     default(){
        return{

        }
     }
  }
 },
}
</script>

<style lang="scss" scoped>
.about-wrapper__item{
   width: 260px;
   height: 210px;
}
.item-about__images{
   display: flex;
   margin: 0 auto;
   margin-bottom: 40px;
}
.item-about__title{
  width: 260px;
  height: 19px;
  font-family: 'OpenSans';
  font-size: 20px;
  font-weight: 600;
  line-height: 1.1;
  letter-spacing: 1px;
  text-align: center;
  color: #212121;
  margin-bottom: 26px;
}
.item-about__text {
  width: 254px;
  height: 60px;
  font-family: 'OpenSans';
  font-size: 15px;
  line-height: 1.47;
  letter-spacing: 0.75px;
  text-align: center;
  color: #212121;
  margin: 0 auto;
}
</style>