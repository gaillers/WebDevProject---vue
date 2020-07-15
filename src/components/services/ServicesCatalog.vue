<template>
  <div class="services-catalog__wrapper-item">
    <ServicesItem 
    v-for="CatalogItem in CatalogItems"
    :key="CatalogItem.article"
    :CatalogItem_data="CatalogItem"
    />
  </div>
</template>

<script>
import ServicesItem from '../services/item/ServicesItem';

export default {
  name: 'ServicesCatalog',
  components: {
    ServicesItem,
  },
  data() {
    return {
      CatalogItems: [
        {
          images: 'smartphone.png',
          title: 'Research',
          text: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum iti atque corrupti quos.',
          article: 'C1',
        },
        {
          images: 'smartphone.png',
          title: 'Portfolio',
          text: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum iti atque corrupti quos.',
          article: 'C2',
        },
        {
          images: 'smartphone.png',
          title: 'Support',
          text: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum iti atque corrupti quos.',
          article: 'C3',
        },
        {
          images: 'smartphone.png',
          title: 'Documentation',
          text: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum iti atque corrupti quos.',
          article: 'C4',
        },
        {
          images: 'smartphone.png',
          title: 'Development',
          text: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum iti atque corrupti quos.',
          article: 'C5',
        },
        {
          images: 'smartphone.png',
          title: 'Design',
          text: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum iti atque corrupti quos.',
          article: 'C6',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.services-catalog__wrapper-item {
 display: grid;
 grid-template-columns: 1.05fr 1.05fr 0.05fr;
 grid-column-gap: 30px;
 grid-row-gap: 30px;
 width: 1170px;
 height: 906px;
 padding-top: 125px;
}
</style>
