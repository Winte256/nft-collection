<template>
  <div class="yourNftContainer">
    <h1 class="yourNftContainer__title">Ваши NFT:</h1>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'yourNft',
  components: {
  },
});
</script>

<style lang="stylus" scoped>
.yourNftContainer {
  width: 310px;
  height: 526px;
  overflow: scroll;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  background: linear-gradient(169.71deg, #DBE3FF 7.71%, rgba(255, 255, 255, 0.85) 74.23%);
  box-shadow: 0px 4px 25px rgba(0, 16, 68, 0.5);
  backdrop-filter: blur(20px);
  border-radius: 2px;
  padding: 20px 20px 40px 20px;
  position: fixed;
  top: 50%;
  margin-top: -263px;
  left: 50%;
  margin-left: -175px;
  z-index: 2;
  &__title {
    font-family: 'Lab Grotesque', Arial, sans-serif;
    font-size: 20px;
    line-height: 24px;
    margin: 20px 0 0 0;
  }
}
</style>
