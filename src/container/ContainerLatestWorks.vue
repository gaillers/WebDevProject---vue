<template>
  <section class="works">
    <div class="works__container">
      <ArticleTitle title="Latest Works" />
      <ArticleText
        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
      />
      <div class="btn-nav__btn-wrapper">
        <Button :all="true" btnText="all"/>
        <Button :btnNav="true" btnText="web design"/>
        <Button :btnNav="true" btnText="ui/ux design"/>
        <Button :btnNav="true" btnText="mockups"/>
      </div>
      <WorksCatalog/>
      <Button :view="true" btnText="view all"/>
    </div>
  </section>
</template>

<script>
import ArticleTitle from '../components/section/ArticleTitle';
import ArticleText from '../components/section/ArticleText';
import Button from '../components/Button'
import WorksCatalog from '../components/works/WorksCatalog'


export default {
  name: 'ContainerLatestWorks',
  components: {
    ArticleTitle,
    ArticleText,
    Button,
    WorksCatalog,
    
  },
};
</script>

<style lang="scss">
.works {
  display: flex;
  justify-content: center;
  width: 1920px;
  height: 1616px;
}
.works__container {
  width: 1170px;
  height: 1367px;
  padding-top: 125px;
  text-align: center;
}
.btn-nav__btn-wrapper {
  width: 700px;
  margin: 0 auto;
  padding-top: 125px;
  margin-bottom: 125px;
}
</style>
