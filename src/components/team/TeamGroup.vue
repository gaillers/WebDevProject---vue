<template>
  <div class="team-group__item">
    <TeamSliderBlock
    :sliderTeam_data="sliderTeam"
    />
    <TeamBlockDots/>
  </div>
</template>

<script>
import TeamSliderBlock from '../team/slider/TeamSliderBlock'
import TeamBlockDots from '../team/slider/TeamBlockDots'

export default {
 name: 'TeamGroup',
 components:{
    TeamSliderBlock,
    TeamBlockDots,
 },
 data () {
   return {
     sliderTeam:[
       {
         images: 'john_doe.png',
         name: 'john doe',
         position: 'general manager',
         id: 'G1'
       },
       {
         images: 'alexa_biru.png',
         name: 'alexa biru',
         position: 'office director',
         id: 'G2'
       },
       {
         images: 'ronobir_sing.png',
         name: 'ronobir sing',
         position: 'admin',
         id: 'G3'
       },
     ]
   }
 }
}
</script>

<style lang="scss" scoped>
 .team-group__item{
    width: 1170px;
    height: 626px;
    padding-top: 125px;
 }
</style>