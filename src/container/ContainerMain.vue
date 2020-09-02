<template>
  <section class="main">
    <div class="main__container">
      <TitleMain />
      <TextMain />
      <Button :border="true" btnText="our sirvices" />
      <Button :default="true" btnText="hire is now" />
      <ArrowDown />
    </div>
  </section>
</template>

<script>
import TitleMain from '../components/main/TitleMain';
import TextMain from '../components/main/TextMain';
import Button from '../components/section/Button';
import ArrowDown from '../components/svgs/ArrowDown';

export default {
  name: 'ContainerMain',
  components: {
    TitleMain,
    TextMain,
    Button,
    ArrowDown,
  },
};
</script>

<style lang="scss">
.main {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 835px;
  background: url('../assets/images/header_image_rectangle.png') no-repeat;
  background-position: center;
  margin-bottom: 125px;
}
.main__container {
  width: 837px;
  height: 430px;
}
</style>
