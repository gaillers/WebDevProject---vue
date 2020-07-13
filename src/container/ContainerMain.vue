<template>
  <section class="main">
   <div class="main__container">
     <TitleMain/>
     <TextMain/>
     <ArticleTitle titles="about us"/>
   </div>
  </section>
</template>

<script>
import TitleMain from '../components/main/TitleMain'
import TextMain from '../components/main/TextMain'
import ArticleTitle from '../components/ArticleTitle'

export default {
 name: 'ContainerMain',
 components: {
  TitleMain,
  TextMain,
  ArticleTitle
 }
};
</script>

<style lang="scss">
.main {
  display: flex;
  justify-content: center;
  width: 1920px;
  height: 835px;
  background: url('../assets/images/header_image_rectangle.png') no-repeat;
  background-position: center;
}
.main__container{
  width: 830px;
  height: 430px;
}
</style>
