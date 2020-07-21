<template>
  <nav class="nav">
    <ul class="nav__item">
      <li
        class="nav__link"
        @click="darkMode = !darkMode"
        :class="{ '': darkMode }"
        v-for="nav in navs"
        :key="nav.id"
      >
        <a href="#">{{ nav.name }}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',

  data: function() {
    return {
      navs: [
        {
          name: 'Home',
        },
        {
          name: 'About us',
        },
        {
          name: 'Servicing',
        },
        {
          name: 'Portfolio',
        },
        {
          name: 'Blog',
        },
        {
          name: 'Contact Us',
        },
      ],
      darkMode: false,
    };
  },

  methods: {},
};
</script>

<style lang="scss">
.nav {
  max-width: 655px;
  width: 100%;
  margin: 0px 30px 0 336px;
}
.nav__item {
  display: flex;
  justify-content: space-between;
}
.nav__link {
  font-family: 'Open Sans';
  font-size: 20px;
  font-weight: 600;
  margin: 0;
  & a {
    text-decoration: none;
    text-transform: capitalize;
    color: #212121;
  }
  &::after {
    position: relative;
    bottom: 0;
    background-color: #212121;
    display: block;
    content: '';
    height: 2px;
    width: 0%;
    transition: all 0.6s ease 0s;
  }
  &:hover {
    &::after {
      position: relative;
      bottom: 0;
      background-color: #212121;
      display: block;
      content: '';
      height: 2px;
      width: 100%;
    }
  }
  &:active {
    &::after {
      position: relative;
      bottom: 0;
      background-color: #212121;
      display: block;
      content: '';
      height: 2px;
      width: 100%;
    }
  }
}
</style>
