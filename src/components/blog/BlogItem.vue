<template>
  <div class="block-post__item-wrapper">
    <div class="block-post__item">
      <div class="post-item__image">
        <img
          :src="require('../../assets/images/' + BlogPostItem_data.images)"
          alt="png"
        />
      </div>
      <div class="post-item__inf">
        <h3 class="post-item__title">{{ BlogPostItem_data.title }}</h3>
        <div class="post-item__blk">
          <Calendar />
          <h4 class="data__name">{{ BlogPostItem_data.data }}</h4>
          <Document />
          <h4 class="dev__name">{{ BlogPostItem_data.dev }}</h4>
        </div>
        <p class="post-item__text">
          {{ BlogPostItem_data.text }}
        </p>
      </div>
    </div>
    <div class="block-post__item">
      <div class="post-item__inf">
        <h3 class="post-item__title">{{ BlogPostItem_data.title }}</h3>
        <div class="post-item__blk">
          <Calendar />
          <h4 class="data__name">{{ BlogPostItem_data.data }}</h4>
          <Document />
          <h4 class="dev__name">{{ BlogPostItem_data.dev }}</h4>
        </div>
        <p class="post-item__text">
          {{ BlogPostItem_data.text }}
        </p>
      </div>
      <div class="post-item__image">
        <img
          :src="require('../../assets/images/' + BlogPostItem_data.images)"
          alt="png"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Document from '../svgs/Document';
import Calendar from '../svgs/Calendar';

export default {
  name: 'BlogItemOne',
  components: {
    Document,
    Calendar,
  },
  props: {
    BlogPostItem_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style lang="scss">
.block-post__item {
  display: flex;
  height: 400px;
}
.post-item__image {
  width: 570px;
  height: 400px;
}
.post-item__inf {
  padding: 75px;
}
.post-item__title {
  width: 280px;
  height: 23px;
  font-family: 'Open Sans';
  font-size: 25px;
  font-weight: 600;
  line-height: 0.88;
  letter-spacing: 1.25px;
  text-align: center;
  color: #212121;
  margin-bottom: 28px;
  transition: all 0.8s ease;
  cursor: pointer;
  &:hover {
    color: #00897b;
  }
}
.post-item__blk {
  display: flex;
  margin-bottom: 28px;
}
.data__name {
  width: 99px;
  height: 20px;
  font-family: 'Open Sans';
  font-size: 17px;
  font-weight: 600;
  line-height: 1.29;
  letter-spacing: 0.85px;
  color: #212121;
  margin: 0 60px 0 13px;
}
.dev__name {
  width: 118px;
  font-family: 'Open Sans';
  font-size: 17px;
  font-weight: 600;
  line-height: 1.29;
  letter-spacing: 0.85px;
  color: #212121;
  margin: 0 60px 0 13px;
}
.post-item__text {
  width: 448px;
  font-family: 'Open Sans';
  font-size: 15px;
  line-height: 1.47;
  letter-spacing: 0.75px;
  text-align: left;
  color: #212121;
}
</style>
