<template>
  <div class="pricing-catalog__order-item">
     <PricingItemOrder
     v-for="PricingOrder in PricingOrders"
    :key="PricingOrder.article"
    :PricingOrder_data="PricingOrder"
     />
  </div>
</template>

<script>
import PricingItemOrder from '../pricing/orderItem/PricingItemOrder'

export default {
 name: 'PricingCatalogBuy',
 components: {
    PricingItemOrder,
 },
 data(){
    return{
       PricingOrders: [
          {
             name:'Free Traill',
             price: '00',
             per: 'per month',
             days: '14 free trial',
             project: '1 free project',
             back: 'PHP 5 enabled',
             suports: '24/7 Suports',
             article: 'P1', 
          },
          {
             name:'Basic',
             price: '50',
             per: 'per month',
             days: '30 days',
             project: '5 project',
             back: 'PHP 5 enabled',
             suports: '24/7 Suports',
             article: 'P2', 
          },
          {
             name:'Ultimates',
             price: '99',
             per: 'per month',
             days: '30 days',
             project: '10 project',
             back: 'PHP 5 enabled',
             suports: '24/7 Suports',
             article: 'P3', 
          },   
       ]
    }
 },
}
</script>

<style lang="scss" scoped>
.pricing-catalog__order-item{
   display: flex;
   justify-content: space-between;
   width: 1170px;
}

</style>