<template>
  <div class="contact-info__item">
    <div class="item__block">
      <div class="br__svg"><Location /></div>
      <p class="item__information-name">
        Nobinagar savar,Dhaka Bangladesh
      </p>
    </div>
    <div class="item__block">
      <div class="br__svg"><Phone /></div>
      <p class="item__information-name">
        +8801743331996 +8801928737807
      </p>
    </div>
    <div class="item__block">
      <div class="br__svg"><Emaill /></div>
      <p class="item__information-name">
        quickmasud@gmail.com quickmasud@yahoo.com
      </p>
    </div>
  </div>
</template>

<script>
import Location from '../svgs/Location';
import Phone from '../svgs/Phone';
import Emaill from '../svgs/Emaill';
export default {
  name: 'ContactInfo',
  components: {
    Location,
    Phone,
    Emaill,
  },
};
</script>

<style lang="scss">
.contact-info__item {
  display: flex;
  justify-content: space-between;
  width: 958px;
  margin: 0 auto;
  margin-bottom: 80px;
}
.item__block {
  width: 270px;
}
.br__svg {
  width: 105px;
  height: 105px;
  background-color: #3949ab;
  border-radius: 50%;
  margin: 0 auto;
  margin-bottom: 40px;
  .location {
    padding: 25px;
  }
  .phone {
    padding: 26px;
  }
  .emaill {
    padding: 26px;
  }
}
.item__information-name {
  font-family: 'Open Sans';
  font-size: 20px;
  font-weight: 600;
  line-height: 1.4;
  letter-spacing: 1px;
  text-align: center;
  color: #ffffff;
}
</style>
