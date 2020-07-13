<template>
  <nav class="nav">
    <ul class="nav__item">
      <li class="nav__link" v-for="nav in navs" :key="nav.id">
        <a href="#">{{ nav }}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data: function() {
    return {
      navs: ['home', 'about', 'servicing', 'portfolio', 'blog', 'contact us'],
    };
  },
};
</script>

<style lang="scss">
.nav {
  width: 655px;
  margin: 0px 30px 0 572px;
}
.nav__item {
  display: flex;
  justify-content: space-between;
}
.nav__link {
  font-family: 'OpenSans';
  font-size: 20px;
  font-weight: 600;
  margin: 0;
  & a {
    text-decoration: none;
    text-transform: capitalize;
    color: #212121;
  }
}
</style>
