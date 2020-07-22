<template>
  <div
    class="works-wrapper__item"
    @click="bgOn = !bgOn"
    :class="{ active: bgOn }"
  >
    <img
      class="item-about__images"
      :src="require('../../../assets/images/' + WorksItem_data.images)"
      alt="img"
    />
    <div class="bg">
      <h4 class="bg__title">{{ WorksItem_data.name }}</h4>
      <p class="bg__text">{{ WorksItem_data.tech }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WorksItem',
  props: {
    WorksItem_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      bgOn: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.works-wrapper__item {
  position: relative;
  width: 370px;
  height: 370px;
  z-index: 1;
  transition: all 0.6s ease 0s;
  cursor: pointer;
  &:hover {
    transform: scale(1.04);
    box-shadow: 0px 3px 25px 0 #00000059;
  }
  &.active {
    .bg {
      visibility: visible;
      opacity: 1;
    }
  }
}
.bg {
  position: absolute;
  width: 370px;
  height: 370px;
  background-color: rgba(0, 0, 0, 0.7);
  top: 0%;
  z-index: 2;
  opacity: 0;
  visibility: hidden;
  transition: all 0.6s ease 0s;
}
.bg__title {
  font-family: 'Open Sans';
  font-size: 20px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.1;
  letter-spacing: 1px;
  text-align: center;
  color: #ffffff;
  margin: 0 auto;
  padding-top: 150px;
  padding-bottom: 5px;
}
.bg__text {
  font-family: 'Open Sans';
  font-size: 15px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.47;
  letter-spacing: 0.75px;
  text-align: center;
  color: #ffffff;
}
</style>
