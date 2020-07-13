<template>
  <h2 class="section-main__title">{{ titles }}</h2>
</template>

<script>
export default {
  props: {
    'titles': String,
  },
};
</script>

<style lang="scss">
.section-main__title {
  font-family: 'OpenSans';
  font-size: 30px;
  font-weight: bold;
  line-height: 0.73;
  letter-spacing: 1.5px;
  text-align: center;
  color: #212121;
}
</style>
