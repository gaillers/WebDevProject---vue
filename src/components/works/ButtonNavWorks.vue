<template>
  <button :class="className" class="btn-nav">
    <span>
      {{ btnNavText }}
    </span>
  </button>
</template>

<script>
export default {
  name: 'ButtonNavWorks',
  props: {
    btnNavText: {
      type: String,
      default: 'Error',
    },
    small: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    className() {
      return {
        'btn-nav__small': this.small,
      };
    },
  },
  components: {},
};
</script>

<style lang="scss">
.btn-nav {
  width: 180px;
  height: 55px;
  border: solid 2px #00897b;
  background: none;
  cursor: pointer;
  margin-right: 20px;
  &:last-child{
     margin-right: 0px;
  }
  & span {
    width: 130px;
    height: 14px;
    font-family: 'OpenSans';
    font-size: 20px;
    font-weight: 600;
    line-height: 1.1;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #212121;
  }
  &__small {
    width: 100px;
    height: 55px;
    background-color: #00897b;
    border: none;
    cursor: pointer;
    & span {
      width: 37px;
      height: 14px;
      font-family: 'OpenSans';
      font-size: 20px;
      font-weight: 600;
      line-height: 1.1;
      letter-spacing: 1px;
      text-transform: uppercase;
      color: #ffffff;
    }
  }
}
</style>
