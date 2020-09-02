<template>
  <section class="about">
    <div class="about__container">
      <ArticleTitle title="About us" />
      <ArticleText
        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
      />
      <AboutBlock/>
    </div>
  </section>
</template>

<script>
import ArticleTitle from '../components/section/ArticleTitle';
import ArticleText from '../components/section/ArticleText';
import AboutBlock from '../components/about/AboutBlock'

export default {
  name: 'ContainerAbout',
  components: {
    ArticleTitle,
    ArticleText,
    AboutBlock

  },
};
</script>

<style lang="scss">
.about {
  display: flex;
  justify-content: center;
  width: 100%;
}
.about__container {
  width: 1115px;
  margin-bottom: 125px;
}
</style>
