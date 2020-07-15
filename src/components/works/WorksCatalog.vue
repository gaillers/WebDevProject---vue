<template>
  <div class="works-catalog__wrapper-item">
    <WorksItem
      v-for="WorksItem in WorksItems"
      :key="WorksItem.article"
      :WorksItem_data="WorksItem"
    />
  </div>
</template>

<script>
import WorksItem from '../works/item/WorksItem';
export default {
  name: 'WorksCatalog',
  components: {
    WorksItem,
  },
  data() {
    return {
      WorksItems: [
        {
          images: 'clock_lt_works.png',
          article: 'I1',
        },
        {
          images: 'eat_lt_works.png',
          article: 'I2',
        },
        {
          images: 'shot_lt_works.png',
          article: 'I3',
        },
        {
          images: 'mischief_lt_works.png',
          article: 'I4',
        },
        {
          images: 'wine_lt_works.png',
          article: 'I5',
        },
        {
          images: 'abag_lt_works.png',
          article: 'I6',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.works-catalog__wrapper-item {
 display: grid;
 grid-template-columns: 1.05fr 1.05fr 0.05fr;
 grid-column-gap: 30px;
 grid-row-gap: 30px;
 width: 1170px;
 height: 770px;
 margin-bottom: 125px;
}
</style>
