<template>
  <img :src="pic" class="pic"  alt="A cute dog"></img>
</template>

<script>
import pic from '../public/dog.png';

export default {
  name: "DogShow",
  setup() {
    return {
      pic
    };
  },
};
</script>

<style scoped>
.pic {
  flex: 1; 
  height: calc(100% - 30rem); 
  object-fit: contain; 
  display: block;  
  animation: jump-rotate 1s steps(2) infinite;
}

@keyframes jump-rotate {
  0%   { transform: rotate(-5deg); }
  100%  { transform: rotate(10deg); }
}
</style>