<template>
  <div class="blog__block-post">
    <BlogItem
      v-for="BlogPostBlock in BlogPostBlocks"
      :key="BlogPostBlock.article"
      :BlogPostItem_data="BlogPostBlock"
    />
  </div>
</template>

<script>
import BlogItem from '../blog/BlogItem';

export default {
  name: 'BlogPost',
  components: {
    BlogItem,
  },
  data() {
    return {
      BlogPostBlocks: [
        {
          images: 'seo_blog.png',
          title: 'SEO Quis Vestibulum',
          data: '14.07.2017',
          dev: 'Development',
          text:
            ' Dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...',
          article: 'P1',
        },
        {
          images: 'keydata_blog.png',
          title: 'SEO Quis Vestibulum',
          data: '25.07.2017',
          dev: 'Development',
          text:
            ' Dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...',
          article: 'P2',
        },
        {
          images: 'laptab_blog.png',
          title: 'SEO Quis Vestibulum',
          data: '02.08.2017',
          dev: 'Development',
          text:
            ' Dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...',
          article: 'P3',
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.blog__block-post {
  width: 1170px;
  text-align: center;
  margin-bottom: 125px;
}
</style>
