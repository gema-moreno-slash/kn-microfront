<template>
  <div class="mainCont">
  <div v-if="isDisplay.show" class="msg">{{ isDisplay.msg }}</div>
  <img 
    @click="showMsg"
    :src="pic"
    class="pic"
    alt="A cute dog"
  />
</div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';
import pic from '../public/dog.png';

const orqUrl = 'http://localhost:3013';

export default {
  name: "DogShow",
  setup() {
    const isDisplay = ref({show: false, msg: ''});

    const showMsg = () => {
      isDisplay.value = {show: true, msg: 'Guau!'};
      window.parent.postMessage('Guau!', 'http://localhost:3013');
      setTimeout(() => isDisplay.value = {show: false, msg: ''}, 1000);
    };

    onMounted(() => {
      window.addEventListener('message', (event) => {
        if(event.origin === orqUrl) {
          isDisplay.value = {show: true, msg: `He escuchado: "${event.data}"`};
          setTimeout(() => isDisplay.value = {show: false, msg: ''}, 1000);
        }
      });
    });

    onUnmounted(() => {
      window.removeEventListener('message');
    });

    return {
      pic,
      isDisplay,
      showMsg
    };
  },
};
</script>

<style scoped>
.mainCont {
  position: relative;
  display: contents;
}

.msg {
  position: absolute;
  z-index: 10;
  font-size: 5vw;
  background-color: rgb(255,218,185);
  padding: 2vw;
  border-radius: 2vw;
}

.pic {
  flex: 1; 
  height: calc(100% - 30rem); 
  object-fit: contain; 
  display: block;  
  animation: jump-rotate 1s steps(2) infinite;
}

.pic:hover {
  cursor: pointer;
}

@keyframes jump-rotate {
  0%   { transform: rotate(-5deg); }
  100%  { transform: rotate(10deg); }
}
</style>