<template>
  <div class="works-catalog__wrapper-item">
    <WorksItem
      v-for="item in WorksItems"
      :key="item.id"
      :item="item"
      :WorksActive="WorksActive"
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
          id: '1',
          images: 'clock_lt_works.png',
          name: 'Hand Watch',
          tech: 'ui/ux design',
          active: false,
        },
        {
          id: '2',
          images: 'eat_lt_works.png',
          name: 'HELIO III',
          tech: 'Web Design',
          active: false,
        },
        {
          id: '3',
          images: 'shot_lt_works.png',
          name: 'Frank +Oak',
          tech: 'Web Design',
          active: false,
        },
        {
          id: '4',
          images: 'mischief_lt_works.png',
          name: 'Hand Watch',
          tech: 'Mockup',
          active: false,
        },
        {
          id: '5',
          images: 'wine_lt_works.png',
          name: 'Wine',
          tech: 'Mockup',
          active: false,
        },
        {
          id: '6',
          images: 'abag_lt_works.png',
          name: 'The Kitchens',
          tech: 'Mockup',
          active: false,
        },
      ],
    };
  },
  methods: {
    WorksActive(id) {
      const filterItems = this.WorksItems.filter((item) => {
        if (item.id === id) {
          return (item.active = !item.active);
        } else {
          item.active = false;
        }
        return item;
      });
      return filterItems;
    },
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
  margin-bottom: 125px;
}
</style>
