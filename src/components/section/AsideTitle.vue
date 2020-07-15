<template>
  <h3 class="title-aside">{{ asideTitle }}</h3>
</template>

<script>
export default {
  props: {
    asideTitle: String,
  },
};
</script>

<style lang="scss">
.title-aside {
  width: 260px;
  height: 19px;
  font-family: 'OpenSans';
  font-size: 20px;
  font-weight: 600;
  line-height: 1.1;
  letter-spacing: 1px;
  text-align: center;
  color: #212121;
  margin-bottom: 26px;
}
</style>
