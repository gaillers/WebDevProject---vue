<template>
  <section class="blog">
    <div class="blog__container">
      <ArticleTitle title="Blog" />
      <ArticleText
        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
      />
      <BlogPost />
      <Button :moreView="true" btnText="more view" />
    </div>
  </section>
</template>

<script>
import ArticleTitle from '../components/section/ArticleTitle';
import ArticleText from '../components/section/ArticleText';
import BlogPost from '../components/blog/BlogPost';
import Button from '../components/section/Button'

export default {
  name: 'ContainerBlog',
  components: {
    ArticleTitle,
    ArticleText,
    BlogPost,
    Button,
  },
};
</script>

<style lang="scss">
.blog {
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: #e4fdf9;
}
.blog__container {
  width: 1170px;
  padding-top: 125px;
  margin-bottom: 125px;
  text-align: center;
}
</style>
