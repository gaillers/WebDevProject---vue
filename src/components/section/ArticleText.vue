<template>
  <p :class="className" class="text">{{ text }}</p>
</template>

<script>
export default {
  name: 'ArticleText',
  props: {
    text: String,
    
    white: {
      text: String,
      default: false,
    },
  },
  computed: {
    className() {
      return {
        text__white: this.white,
      };
    },
  },
};
</script>

<style lang="scss">
.text {
  width: 621px;
  font-family: 'Open Sans';
  font-size: 15px;
  line-height: 1.47;
  letter-spacing: 0.75px;
  text-align: center;
  color: #212121;
  margin: 0 auto;
  margin-bottom: 125px;
  &__white {
    width: 621px;
    font-family: 'Open Sans';
    font-size: 15px;
    line-height: 1.47;
    letter-spacing: 0.75px;
    text-align: center;
    color: #fff;
    margin: 0 auto;
    margin-bottom: 125px;
  }
}
</style>
