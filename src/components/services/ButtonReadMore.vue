<template>
  <button class="btn-services">
    <span>
      {{ btnServ }}
    </span>
  </button>
</template>

<script>

export default {
  name: 'ButtonReadMore',
  props: {
    btnServ: {
      type: String,
      default: 'Error',
    },
  },
};
</script>

<style lang="scss">
.btn-services {
  width: 150px;
  height: 56px;
  border: solid 2px #212121;
  background: none;
  margin: 0 29.5% 0 30%;
  cursor: pointer;
  & span {
   width: 121px;
   height: 14px;
   font-family: 'OpenSans';
   font-size: 15px;
   font-weight: 500;
   letter-spacing: 1px;
   text-transform: uppercase;
   color: #212121; 
  }
}
</style>
