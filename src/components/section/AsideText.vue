<template>
  <p class="text-aside">{{ asideText }}</p>
</template>

<script>
export default {
  props: {
    asideText: String,
  },
};
</script>

<style lang="scss">
.text-aside {
  width: 254px;
  height: 60px;
  font-family: 'OpenSans';
  font-size: 15px;
  line-height: 1.47;
  letter-spacing: 0.75px;
  text-align: center;
  color: #212121;
  margin: 0 auto;
}
</style>