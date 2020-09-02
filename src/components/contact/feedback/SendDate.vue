<template>
  <div class="send__date">
    <div class="date__obj">
      <div class="date__block">
        <div class="obj__name">
          <label for="name" type="name" id="name" name="name">Name</label>
          <input class="name-i" type="text" />
        </div>
        <div class="obj__email">
          <label for="email" type="email" id="email" name="email">Email</label>
          <input class="email-i" type="text" />
        </div>
        <div class="obj__massage">
          <label for="massage" type="massage" id="massage" name="massage">Massage</label>
          <input  class="massage-i" type="text" />
        </div>
        <div class="close__send-date" @click="onClose" >х</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SendDate',
  components: {},
  props: ['onClose'],
  data() {
    return {
      
    };
  },
  methods: {
   
  },
};
</script>

<style lang="scss" scoped>
.send__date {
  position: fixed;
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}
.date__block {
  position: relative;
  padding: 100px;
}
.date__obj {
  background: #fff;
  width: 1030px;
  height: 608px;
  margin-top: 9%;
  margin-left: 23.3%;
  border-radius: 1%;
  & input {
    font-family: 'Open Sans';
    font-size: 17px;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.4;
    letter-spacing: 1px;
    text-align: left;
    border: none;
  }
  & label {
    font-family: 'Open Sans';
    font-size: 17px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.4;
    letter-spacing: 1px;
    text-align: left;
  }
}
.obj__name,
.obj__email,
.obj__massage {
  position: relative;
  &::after {
    position: absolute;
    content: '';
    width: 830px;
    height: 1px;
    background: #000;
    top: 30px;
  }
}
.name-i,
.email-i,
.massage-i {
  max-width: 830px;
  width: 100%;
  font-family: 'Opan Sans';
  margin-top: 30px;
  margin-bottom: 60px;
  line-height: 1.4;
  letter-spacing: 1px;
}
.close__send-date {
  position: absolute;
  left: 94%;
  top: 5%;
  font-size: 30px;
  font-family: 'Open Sans';
  font-weight: 600;
  cursor: pointer;
}
</style>
