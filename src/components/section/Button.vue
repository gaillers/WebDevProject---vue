<template>
  <button :class="className" class="btn-main">
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
    default: {
      type: Boolean,
      default: false,
    },
    border: {
      type: Boolean,
      default: false,
    },
    white: {
      type: Boolean,
      default: false,
    },
    readMore: {
      type: Boolean,
      default: false,
    },
    all: {
      type: Boolean,
      default: false,
    },
    btnNav: {
      type: Boolean,
      default: false,
    },
    view: {
      type: Boolean,
      default: false,
    },
    order: {
      type: Boolean,
      default: false,
    },
    moreView: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    className() {
      return {
        'btn-main__default': this.default,
        'btn-main__border': this.border,
        'btn-main__white': this.white,
        'btn-main__readMore': this.readMore,
        'btn-main__all': this.all,
        'btn-main__btnNav': this.btnNav,
        'btn-main__view': this.view,
        'btn-main__order': this.order,
        'btn-main__moreView': this.moreView,
      };
    },
  },
  method: {},
};
</script>

<style lang="scss">
.btn-main {
  // Main Button
  &__default {
    width: 220px;
    height: 70px;
    background-color: #00897b;
    border: none;
    cursor: pointer;
    margin-right: 21.5%;
    transition: all 0.6s ease 0s;
    & span {
      width: 128px;
      height: 14px;
      font-family: 'Roboto';
      font-size: 20px;
      font-weight: bold;
      letter-spacing: 1px;
      color: #ffffff;
      text-transform: uppercase;
      transition: all 0.6s ease 0s;
    }
    &:hover {
      background-color: #fff;
      border: #fff;
      & span {
        color: #000;
      }
    }
  }
  &__border {
    width: 220px;
    height: 70px;
    background: none;
    border: solid 3px #f8f8f8;
    margin: 0 25px 0 22.4%;
    transition: all 0.6s ease 0s;
    cursor: pointer;
    & span {
      width: 128px;
      height: 14px;
      font-family: 'Roboto';
      font-size: 20px;
      font-weight: bold;
      letter-spacing: 1px;
      color: #ffffff;
      text-transform: uppercase;
      transition: all 0.6s ease 0s;
    }
    &:hover {
      background: #000;
      border: solid 3px #000;
      & span {
        color: #fff;
      }
    }
  }
  &__white {
    // Send Button
    width: 220px;
    height: 70px;
    background-color: #fff;
    border-radius: 10px;
    cursor: pointer;
    margin-right: 21.5%;
    & span {
      width: 128px;
      height: 14px;
      font-family: 'Roboto';
      font-size: 20px;
      font-weight: bold;
      letter-spacing: 1px;
      color: #000;
      text-transform: uppercase;
    }
  }
  &__readMore {
    // Services
    width: 150px;
    height: 56px;
    border: solid 2px #212121;
    background: none;
    margin: 0 29.5% 0 30%;
    transition: all 0.6s ease 0s;
    cursor: pointer;
    margin-bottom: 43px;
    & span {
      width: 121px;
      height: 14px;
      font-family: 'Open Sans';
      font-size: 15px;
      font-weight: 600;
      letter-spacing: 1px;
      text-transform: uppercase;
      color: #212121;
      transition: all 0.6s ease 0s;
    }
    &:hover {
      background: #212121;
      & span {
        color: #fff;
      }
    }
  }
  &__all {
    // Works Button Nav
    width: 100px;
    height: 55px;
    border: solid 2px #00897b;
    background: none;
    cursor: pointer;
    margin-right: 20px;
    transition: all 0.6s ease 0s;
    & span {
      width: 37px;
      height: 14px;
      font-family: 'Open Sans';
      font-size: 20px;
      font-weight: 600;
      line-height: 1.1;
      letter-spacing: 1px;
      text-transform: uppercase;
      color: #212121;
      transition: all 0.6s ease 0s;
    }
    &:hover {
      border: solid 2px #00897b;
      background: #00897b;
      & span {
        color: #fff;
      }
    }
    &.active {
      border: solid 2px #00897b;
      background: #00897b;
      & span {
        color: #fff;
      }
    }
  }
  &__btnNav {
    width: 180px;
    height: 55px;
    border: solid 2px #00897b;
    background: none;
    cursor: pointer;
    margin-right: 20px;
    transition: all 0.6s ease 0s;
    &:last-child {
      margin-right: 0px;
    }
    & span {
      width: 130px;
      height: 14px;
      font-family: 'Open Sans';
      font-size: 20px;
      font-weight: 600;
      line-height: 1.1;
      letter-spacing: 1px;
      text-transform: uppercase;
      color: #212121;
      transition: all 0.6s ease 0s;
    }
    &:hover {
      border: solid 2px #00897b;
      background: #00897b;
      & span {
        color: #fff;
      }
    }
    &.active {
      border: solid 2px #00897b;
      background: #00897b;
      & span {
        color: #fff;
      }
    }
  }
  &__view {
    width: 220px;
    height: 70px;
    background-color: #00897b;
    border: none;
    cursor: pointer;
    margin-right: 0px;
    transition: all 0.6s ease 0s;
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
    &:hover {
      background-color: #212121;
      & span {
        color: #fff;
      }
    }
  }
  &__order {
    width: 180px;
    height: 60px;
    border: solid 2px #000000;
    background: none;
    margin-right: 0px;
    margin-top: 15px;
    cursor: pointer;
    transition: all 0.6s ease 0s;
    & span {
      width: 114px;
      height: 15px;
      font-family: 'Open Sans';
      font-size: 20px;
      font-weight: 600;
      letter-spacing: 1px;
      text-align: center;
      color: #212121;
      text-transform: uppercase;
      cursor: pointer;
      transition: all 0.6s ease 0s;
    }
    &:hover {
      background: #212121;
      & span {
        color: #fff;
      }
    }
  }
  &__moreView {
    width: 220px;
    height: 70px;
    background-color: #00897b;
    border: none;
    cursor: pointer;
    margin-right: 0px;
    transition: all 0.6s ease 0s;
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
    &:hover {
      background-color: #212121;
      & span {
        color: #fff;
      }
    }
  }
}
</style>
