<template>
  <form class="form" @submit.prevent="sendEmail">
    <input
      class="form-control__name"
      placeholder="Your NAME"
      type="name"
      id="name"
      name="name"
      tabindex="1"
      required
      v-model="name"
    />

    <input
      class="form-control__email"
      placeholder="Your Email"
      type="email"
      id="email"
      name="email"
      tabindex="2"
      required
      v-model="email"
    />

    <textarea
      class="form-control__massage"
      placeholder="Write Massage"
      rows="4"
      cols="50"
      type="massage"
      id="massage"
      name="massage"
      tabindex="3"
      required
      v-model="massage"
    ></textarea>
    <input class="send" type="submit" value="Send" />
    <SendDate v-if="showPopup" :onCglose="onClose"/>
  </form>
</template>

<script>
import SendDate from '../feedback/SendDate';

export default {
  name: 'Form',
  components: {
    SendDate,
  },
  data() {
    return {
      name: '',
      email: '',
      massage: '',
      showPopup: false,
      
    };
  },
  props: {},
  methods: {
    sendEmail () {
      this.showPopup = true;
    },
    onClose () {
      this.showPopup = false;
    }
  },
};
</script>

<style lang="scss" scoped>
.form {
  width: 1030px;
}
.form-label {
  width: 117px;
  height: 14px;
  opacity: 0.8;
  font-family: 'Open Sans';
  font-size: 20px;
  font-weight: 600;
  line-height: 1.4;
  letter-spacing: 1px;
  text-align: left;
  color: #212121cc;
}
.form-control {
  &__massage {
    max-width: 969px;
    width: 100%;
    height: 323px;
    padding: 30px;
    border-radius: 10px;
    background-color: #ffffff;
    font-family: 'Open Sans';
    font-size: 20px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.4;
    letter-spacing: 1px;
    text-align: left;
    outline: none;
    margin-bottom: 30px;
    resize: none;
  }
  &__email {
    font-family: 'Open Sans';
    font-size: 20px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.4;
    letter-spacing: 1px;
    text-align: left;
    width: 470px;
    padding-left: 30px;
    height: 84px;
    border-radius: 10px;
    background-color: #ffffff;
    border-style: none none solid none;
    box-shadow: none;
    outline: none;
    margin-bottom: 30px;
  }
  &__name {
    font-family: 'Open Sans';
    font-size: 20px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.4;
    letter-spacing: 1px;
    text-align: left;
    width: 470px;
    padding-left: 30px;
    height: 84px;
    border-radius: 10px;
    background-color: #ffffff;
    border-style: none none solid none;
    box-shadow: none;
    outline: none;
    margin-right: 30px;
    margin-bottom: 30px;
  }
}
.send {
  width: 220px;
  height: 70px;
  border-radius: 10px;
  background-color: #ffffff;
  border: none;
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: bold;
  line-height: 1.1;
  letter-spacing: 1px;
  text-align: center;
  color: #212121;
  text-transform: uppercase;
  position: absolute;
  left: 65.3%;
  transition: all 0.6s ease 0s;
  cursor: pointer;
  &:hover {
    background: #00897b;
    color: #fff;
  }
}
</style>
