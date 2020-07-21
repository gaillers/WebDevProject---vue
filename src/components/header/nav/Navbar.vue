<template>
  <nav class="nav">
    <ul class="nav__item">
      <li
        class="nav__link"
        @click="setActive(i)"
        :class="['nav__link',{ active: i == active} ]"
        v-for="(nav, i) in navs"
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
          id: 'N1',
        },
        {
          name: 'About us',
          id: 'N2',
        },
        {
          name: 'Servicing',
          id: 'N3',
        },
        {
          name: 'Portfolio',
          id: 'N4',
        },
        {
          name: 'Blog',
          id: 'N5',
        },
        {
          name: 'Contact Us',
          id: 'N6',
        },
      ],
      active: localStorage.getItem('active') || null,
    };
  },

  methods: {
    setActive(nav) {
      this.active = nav;
      localStorage.setItem('active', nav);
    },
  },
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
  &.active {
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
