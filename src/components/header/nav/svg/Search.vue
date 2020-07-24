<template>
  <div class="search">
    <input
      class="search__inp"
      type="text"
      placeholder="Search"
      :class="{ open: searchOn }"
    />
    <svg
      @click="searchOn = !searchOn, searchAct = !searchAct"
      :class="{ 'active': searchAct}"
      class="search__svg"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 56.966 56.966"
    >
      <path
        d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23
	s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92
	c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17
	s-17-7.626-17-17S14.61,6,23.984,6z"
      />
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'Search',

  data() {
    return {
      searchOn: false,
      searchAct: false,
    };
  },
  method: {

  },
  computed: {

  },
};

</script>

<style lang="scss">
.search {
  max-width: 202px;
  position: relative;
  display: flex;
  
}
.search__inp {
  display: none;
  margin-right: 10px;
  &.open {
    display: block;
  }
}
.search__svg {
  width: 19px;
  height: 19px;
  fill: #000;
  cursor: pointer;
  margin-top: 1px;
  transition: all 0.6s ease 0s;
  &:hover{
    fill:#00897b;
  }
  &.active{
    fill:#00897b;
  }
  
}
</style>
