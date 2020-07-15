<template>
  <section class="services">
    <div class="services__container">
      <ArticleTitle title="Our Services" />
      <ArticleText
        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
      />
      <ServicesCatalog/>
    </div>
  </section>
</template>

<script>
import ArticleTitle from '../components/section/ArticleTitle';
import ArticleText from '../components/section/ArticleText';
import ServicesCatalog from '../components/services/ServicesCatalog'
export default {
  name: 'ContainerServices',
  components: {
    ArticleTitle,
    ArticleText,
    ServicesCatalog,
  },
};
</script>

<style lang="scss">
.services {
  display: flex;
  justify-content: center;
  width: 1920px;
  height: 1380px;
  background-color: #e4fdf9;
}
.services__container {
  width: 1170px;
  height: 1130px;
  padding-top: 125px;
  margin-bottom: 125px;
}
</style>
