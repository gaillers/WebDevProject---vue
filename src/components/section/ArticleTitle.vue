<template>
  <h2 class="title">{{ title }}</h2>
</template>

<script>
export default {
  props: {
    'title': String,
  },
};
</script>

<style lang="scss">
.title {
  height: 23px;
  font-family: 'Open Sans';
  font-size: 30px;
  font-weight: bold;
  line-height: 0.73;
  letter-spacing: 1.5px;
  text-align: center;
  color: #212121;
  margin: 0 auto;
  margin-bottom: 36px;
}
</style>
