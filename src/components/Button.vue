<template>
  <button
   :class="className"
   class="btn-main">
    <span>
      {{ btnText }}
    </span>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    btnText: {
      type: String,
      default: 'None Text',
    },
    border: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    className() {
      return {
        'btn-main__border': this.border,
      };
    },
  },
  method: {},
};
</script>

<style lang="scss">
.btn-main {
  width: 220px;
  height: 70px;
  background-color: #00897b;
  border: none;
  cursor: pointer;
  margin-right: 21.5%;
  & span {
    width: 128px;
    height: 14px;
    font-family: 'Roboto';
    font-size: 20px;
    font-weight: bold;
    letter-spacing: 1px;
    color: #ffffff;
    text-transform: uppercase;
  }
  &__border {
    width: 220px;
    height: 70px;
    background: none;
    border: solid 3px #f8f8f8;
    margin: 0 25px 0 22.4%;
    & span {
      width: 128px;
      height: 14px;
      font-family: 'Roboto';
      font-size: 20px;
      font-weight: bold;
      letter-spacing: 1px;
      color: #ffffff;
      text-transform: uppercase;
    }
  }
}
</style>
