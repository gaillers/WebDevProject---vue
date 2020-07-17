<template>
  <div class="team-slider">
    <TeamBlock
      v-for="sliderTeam in sliderTeam_data"
      :key="sliderTeam.id"
      :sliderTeamItem_data="sliderTeam"
    />
  </div>
</template>

<script>
import TeamBlock from '../slider/TeamBlock';

export default {
  name: 'TeamSliderBlock',
  components: {
    TeamBlock,
  },
  props: {
    sliderTeam_data: {
      type: Array,
      default: () => [],
    },
  },
  data(){
    return{
      currentSliderIndex: 0
    }
  },

};
</script>

<style lang="scss">
.team-slider {
  display: flex;
  overflow: hidden;
  justify-content: space-between;
  margin-bottom: 125px;
}
</style>
