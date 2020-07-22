<template>
  <swiper
    class="swiper"
    ref="swiperComponent"
    :options="swiperOptions"
    @click-slide="onSwiperClickSlide"
    @set-translate="onSetTranslate"
  >
    <swiper-slide>
      <div class="team-slider">
        <TeamBlock
          v-for="sliderTeam in sliderTeam_data"
          :key="sliderTeam.id"
          :sliderTeamItem_data="sliderTeam"
        />
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
import TeamBlock from '../slider/TeamBlock';
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper';

export default {
  name: 'TeamSliderBlock',
  components: {
    TeamBlock,
    Swiper,
    SwiperSlide,
  },
  directives: {
    swiper: directive,
  },
  props: {
    sliderTeam_data: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      swiperOptions: {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 3,
        loop: true,
        loopFillGroupWithBlank: true,
        speed: 600,
        grabCursor: true,
        // Some Swiper option/callback...
      },
    };
  },
  methods: {
    onSetTranslate() {
      console.log('onSetTranslate');
    },
    onSwiperSlideChangeTransitionStart() {
      console.log('onSwiperSlideChangeTransitionStart');
    },
    onSwiperClickSlide(index, reallyIndex) {
      console.log('Swiper click slide!', reallyIndex);
    },
  },
  mounted() {
    console.log(
      'Swiper instances:',
      this.$refs.swiperComponent.$swiper,
      this.swiper
    );
  },
};
</script>

<style lang="scss">
.team-slider {
  display: flex;
  justify-content: space-between;
  margin-bottom: 125px;
}
</style>
