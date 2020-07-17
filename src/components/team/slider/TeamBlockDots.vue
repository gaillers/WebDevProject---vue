<template>
  <div class="wrapper-dots">
    <div class="dots active"></div>
    <div class="dots"></div>
    <div class="dots"></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.wrapper-dots {
  width: 66px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
}
.dots.active {
  width: 15px;
  height: 15px;
  background-color: #3949ab;
  cursor: pointer;
}
.dots {
  width: 15px;
  height: 15px;
  background-color: #00897b;
  border-radius: 50%;
  cursor: pointer;
}
</style>
