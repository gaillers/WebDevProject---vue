<template>
  <div class="about-block__wrapper-item">
   <AboutItem
    v-for="InfoItem in InfoItems"
    :key="InfoItem.article"
    :InfoItem_data="InfoItem"
    />
  </div>
</template>

<script>
import AboutItem from '../about/item/AboutItem'

export default {
 name: 'AboutBlock',
 data(){
   return{
    InfoItems:[
      {
        images:"internet.png",
        title: "Awesome Icons",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor",
        article:"T1",
      },
      {
        images:"transfer.png",
        title: "One Page",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor",
        article:"T2",
      },
      {
        images:"head.png",
        title: "Fully Responsive",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor",
        article:"T3",
      }
    ]
   }
 },
 
 components: {
   AboutItem,
 }
};
</script>

<style lang="scss" scoped>
.about-block__wrapper-item {
  display: flex;
  justify-content: space-between;
  width: 1060px;
  height: 200px;
  padding-top: 125px;
  margin: 0 auto;
}
</style>
