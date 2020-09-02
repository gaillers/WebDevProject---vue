<template>
  <header class="header">
    <div class="wrapper">
      <Logo />
      <Navbar />
      <Search />
    </div>
  </header>
</template>

<script>
import Logo from './nav/Logo';
import Navbar from './nav/Navbar';
import Search from './nav/svg/Search';

export default {
  name: 'Header',
  components: {
    Logo,
    Navbar,
    Search,
  },
};
</script>

<style lang="scss">
.header {
  display: flex;
  justify-content: center;
  width: 1920px;
  height: 120px;
  background-color: #ffffff;
  align-items: center;
}
.wrapper {
  display: flex;
  justify-content: space-between;
  width: 1400px;
  align-items: center;
}
</style>
