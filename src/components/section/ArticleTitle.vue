<template>
  <h2 :class="className" class="title">{{ title }}</h2>
</template>

<script>
export default {
  name: 'ArticleTitle',
  props: {
    title: String,
    
    white: {
      title: String,
      default: false,
    }
  },
  computed: {
    className() {
      return {
        title__white: this.white,
      };
    },
  },
};
</script>

<style lang="scss">
.title {
  font-family: 'Open Sans';
  font-size: 30px;
  font-weight: bold;
  line-height: 0.73;
  letter-spacing: 1.5px;
  text-align: center;
  color: #212121;
  margin: 0 auto;
  margin-bottom: 36px;
  &__white {
    font-family: 'Open Sans';
    font-size: 30px;
    font-weight: bold;
    line-height: 0.73;
    letter-spacing: 1.5px;
    text-align: center;
    color: #fff;
    margin: 0 auto;
    margin-bottom: 36px;
  }
}
</style>
