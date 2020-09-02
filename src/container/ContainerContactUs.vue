<template>
  <section class="contact">
    <div class="contact__container">
      <ArticleTitle :white="true" title="Contact Us" />
      <ArticleText
        :white="true"
        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
      />
      <ContactInfo/>
       <Form/>
       
    </div>
  </section>
</template>

<script>
import ArticleTitle from '../components/section/ArticleTitle';
import ArticleText from '../components/section/ArticleText';
import ContactInfo from '../components/contact/ContactInfo'
import Form from '../components/contact/feedback/Form'


export default {
  name: 'ContainerContactUs',
  components: {
    ArticleTitle,
    ArticleText,
    ContactInfo,
    Form,
  },
};
</script>

<style lang="scss">
.contact {
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  background: url(/img/contact_bg.0c9c08b9.png);
  background-position: center;
  background-size: 100%;
}
.contact__container {
  width: 1030px;
  height: 1232px;
  padding-top: 125px;
  margin-bottom: 125px;
}
</style>

