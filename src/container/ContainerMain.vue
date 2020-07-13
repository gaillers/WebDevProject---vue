<template>
  <section class="main">
    <div class="main__container">
      <TitleMain />
      <TextMain />
      <Button 
      :border="true" 
      btnText="our sirvices" 
      />
      <Button 
      btnText="hire is now" 
      />
    </div>
  </section>
</template>

<script>
import TitleMain from '../components/main/TitleMain';
import TextMain from '../components/main/TextMain';
import Button from '../components/Button';

export default {
  name: 'ContainerMain',
  components: {
    TitleMain,
    TextMain,
    Button,
  },
};
</script>

<style lang="scss">
.main {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1920px;
  height: 835px;
  background: url('../assets/images/header_image_rectangle.png') no-repeat;
  background-position: center;
}
.main__container {
  width: 830px;
  height: 430px;
}
</style>
