<template>
  <div class="services-wrapper__item">
    <img
      class="item-services__images"
      :src="require('../../../assets/images/' + CatalogItem_data.images)"
      alt="png"
    />
    <h3 class="item-services__title">{{ CatalogItem_data.title }}</h3>
    <p class="item-services__text">{{ CatalogItem_data.text }}</p>
    <Button :readMore="true" btnText="read more" />
  </div>
</template>

<script>
import Button from '../../section/Button';

export default {
  name: 'ServicesItem',
  components: {
    Button,
  },
  props: {
    CatalogItem_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.services-wrapper__item {
  width: 370px;
  height: 438px;
  background-color: #ffffff;
  transition: all 0.6s ease 0s;
  &:hover {
    transform: scale(1.04);
    box-shadow: 0px 3px 25px 0 #00000059;
    
  }
}
.item-services__images {
  display: flex;
  padding-top: 45px;
  margin: 0 auto;
  margin-bottom: 40px;
}
.item-services__title {
  font-family: 'Open Sans';
  font-size: 20px;
  font-weight: 600;
  line-height: 1.1;
  letter-spacing: 1px;
  text-align: center;
  color: #212121;
  margin: 0 auto;
  margin-bottom: 26px;
  transition: all 0.6s ease 0s;
}
.item-services__text {
  width: 271px;
  font-family: 'Open Sans';
  font-size: 15px;
  line-height: 1.67;
  letter-spacing: 0.75px;
  text-align: center;
  color: #212121;
  margin: 0 auto;
  margin-bottom: 45px;
  transition: all 0.6s ease 0s;
}
</style>
