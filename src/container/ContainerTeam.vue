<template>
  <section class="team">
    <div class="team__container">
      <ArticleTitle title="Our Team Member" />
      <ArticleText
        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
      />
      <TeamGroup/>
    </div>
  </section>
</template>

<script>
import ArticleTitle from '../components/section/ArticleTitle';
import ArticleText from '../components/section/ArticleText';
import TeamGroup from '../components/team/TeamGroup'

export default {
  name: 'ContainerTeam',
  components: {
    ArticleTitle,
    ArticleText,
    TeamGroup,
  },
};
</script>

<style lang="scss">
.team {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 1095px;
}
.team__container {
  width: 1170px;
  height: 847px;
  padding-top: 125px;
  margin-bottom: 125px;
}
</style>
