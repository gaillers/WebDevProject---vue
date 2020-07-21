<template>
  <div class="pricing-order__item">
    <div class="order__rate">
      <h3 class="order__name">{{ PricingOrder_data.name }}</h3>
      <div class="order__price">
        <span class="curr">$</span>
        <p class="pr">{{ PricingOrder_data.price }}</p>
        <span class="month">{{ PricingOrder_data.per }}</span>
      </div>
    </div>
    <div class="order__info">
      <p class="days">{{ PricingOrder_data.days }}</p>
      <p class="project">{{ PricingOrder_data.project }}</p>
      <p class="back">{{ PricingOrder_data.back }}</p>
      <p class="suports">{{ PricingOrder_data.suports }}</p>
      <Button :order="true" btnText="order now" />
    </div>
  </div>
</template>

<script>
import Button from '../../section/Button';

export default {
  name: 'PricingItemOrder',
  components: {
    Button,
  },
  props: {
    PricingOrder_data: {
      type: Object,
      default() {
        return {
           
        };
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.pricing-order__item {
  width: 370px;
  height: 667px;
  background-color: #ffffff;
  transition: all 0.6s ease 0s;
  &:hover {
    box-shadow: 0px 3px 25px 0 #00000059;
    transform: scale(1.04);
  }
}
.order__rate {
  width: 370px;
  height: 209px;
  background: url('../../../assets/images/Rectangle.png');
}
.order__name {
  padding-top: 48px;
  font-family: 'OpenSans';
  font-size: 25px;
  font-weight: normal;
  line-height: 0.88;
  letter-spacing: 1.25px;
  text-align: center;
  color: #ffffff;
}
.order__price {
  display: flex;
  padding-top: 25px;
  justify-content: center;
  align-items: center;
  & span.curr {
    font-family: 'Open Sans';
    font-size: 25px;
    color: #ffffff;
    margin-top: -10px;
    margin-right: 5px;
  }
  & p.pr {
    width: 56px;
    height: 53px;
    font-family: 'Open Sans';
    font-size: 50px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: 2.5px;
    text-align: center;
    color: #ffffff;
  }
  & span.month {
    height: 17px;
    font-family: 'Open Sans';
    font-size: 17px;
    line-height: 1.29;
    letter-spacing: 0.85px;
    text-align: center;
    color: #ffffff;
    padding-top: 17px;
    padding-left: 10px;
  }
}
.order__info {
  padding-top: 35px;
  & p {
    font-family: 'Open Sans';
    font-size: 17px;
    line-height: 1.29;
    letter-spacing: 0.85px;
    text-align: center;
    text-transform: capitalize;
    color: #212121;
    margin-bottom: 35px;
    &::after {
      position: relative;
      display: block;
      content: '';
      height: 1px;
      width: 178px;
      opacity: 0.3;
      background-color: #000;
      margin: 0 auto;
      margin-top: 15px;
    }
  }
}
</style>
