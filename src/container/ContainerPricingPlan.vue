<template>
  <section class="pricing">
    <div class="pricing__container">
      <ArticleTitle title="Pricing Plan" />
      <ArticleText
        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
      />
      <PricingCatalogBuy/>
    </div>
  </section>
</template>

<script>
import ArticleTitle from '../components/section/ArticleTitle';
import ArticleText from '../components/section/ArticleText';
import PricingCatalogBuy from '../components/pricing/PricingCatalogBuy'

export default {
  name: 'ContainerPricingPlan',
  components: {
    ArticleTitle,
    ArticleText,
    PricingCatalogBuy,
  },
};
</script>

<style lang="scss">
.pricing {
  display: flex;
  justify-content: center;
  width: 1920px;
  height: 1142px;
  background-color: #f0f1f1
}
.pricing__container {
  width: 1170px;
  height: 892px;
  text-align: center;
  padding-top: 125px;
  margin-bottom: 125px;
}
</style>
