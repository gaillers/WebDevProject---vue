<template>
  <div class="team-item__wrapper-block">
    <div class="team-item__block">
      <img
        class="team__images"
        :src="require('../../../assets/images/' + sliderTeamItem_data.images)"
        alt="png"
      />
      <h3 class="team__name">john doe</h3>
      <p class="team__position">general manager</p>
      <div class="team__social">
        <div class="social__facebook">
          <Facebook />
        </div>
        <div class="social__twitter">
          <Twitter />
        </div>
        <div class="social__chat">
          <Chat />
        </div>
        <div class="social__dribbble">
          <Dribbble />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Facebook from '../../svgs/social/Facebook';
import Twitter from '../../svgs/social/Twitter';
import Chat from '../../svgs/social/Chat';
import Dribbble from '../../svgs/social/Dribbble';

export default {
  name: 'TeamBlock',
  components: {
    Facebook,
    Twitter,
    Chat,
    Dribbble,
  },
  props: {
    sliderTeamItem_data: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style lang="scss" scoped>
.team-item__wrapper-block {
  margin-right: 30px;
  max-width: 370px;
  height: 486px;
}
.team-item__block {
  width: 370px;
  height: 486px;
}
.team__images {
  width: 370px;
  height: 320px;
  border-radius: 10px;
  margin-bottom: 35px;
}
.team__name {
  height: 19px;
  font-family: 'Open Sans';
  font-size: 20px;
  font-weight: 600;
  line-height: 1.1;
  letter-spacing: 1px;
  text-align: center;
  text-transform: capitalize;
  color: #212121;
  margin-bottom: 12px;
}
.team__position {
  height: 16px;
  font-family: 'Open Sans';
  font-size: 15px;
  line-height: 1.47;
  letter-spacing: 0.75px;
  text-align: center;
  text-transform: capitalize;
  color: #212121;
  margin-bottom: 30px;
}
.team__social {
  display: grid;
  grid-template-columns: repeat(4, 0fr);
  grid-column-gap: 30px;
  align-items: center;
  width: 290px;
  margin: 0 auto;
}

.social__facebook{
  width: 50px;
  height: 50px;
  border-radius: 10px;
  background-color: #f0f1f1;
  cursor: pointer;
  transition: all 0.6s ease 0s;
  .facebook {
    padding: 11px;
    transition: all 0.6s ease 0s;
  }
  &:hover{
    background-color: #3949ab;
    .facebook{
      fill: #fff;
    }
  }
}
.social__twitter{
  width: 50px;
  height: 50px;
  border-radius: 10px;
  background-color: #f0f1f1;
  cursor: pointer;
  transition: all 0.6s ease 0s;
  .twitter {
    padding: 12px;
    transition: all 0.6s ease 0s;
  }
  &:hover{
   background-color: #08a0e9;
   .twitter{
     fill:#fff;
   }
  }
}
.social__chat{
  width: 50px;
  height: 50px;
  border-radius: 10px;
  background-color: #f0f1f1;
  cursor: pointer;
  transition: all 0.6s ease 0s;
  .chat {
    padding: 11px;
    transition: all 0.6s ease 0s;
  }
  &:hover{
    background-color: #ffae00;
    .chat{
     fill: #fff;
    }
  }
}
.social__dribbble {
  width: 50px;
  height: 50px;
  border-radius: 10px;
  background-color: #f0f1f1;
  cursor: pointer;
  transition: all 0.6s ease 0s;
  .dribbble {
    padding: 12px;
     transition: all 0.6s ease 0s;
  }
  &:hover{
    background-color: #ea4c89;
    .dribbble{
      fill:#fff;
    }
  }
}
</style>
