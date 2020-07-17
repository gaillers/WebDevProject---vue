<template>
  <p class="text">{{ text }}</p>
</template>

<script>
export default {
  props: {
    'text': String,
  },
};
</script>

<style lang="scss">
.text {
  width: 621px;
  height: 38px;
  font-family: 'Open Sans';
  font-size: 15px;
  line-height: 1.47;
  letter-spacing: 0.75px;
  text-align: center;
  color: #212121;
  margin: 0 auto;
}
</style>
