<template>
  <div class="notificationContainer">
    <div class="logoBox">
      <img class="logo" src="@/assets/logo.svg" alt="logo">
    </div>
    <div class="mainBox">
      <h1 class="mainBox__title">Поздравляем!<br> Вы выиграли коллекционный<br>NFT OTON</h1>
      <div class="mainBox__imgContainer">
        <img class="mainBox__preview" src="@/assets/nft-preview.png" alt="nft-preview">
        <img class="mainBox__ellipse" src="@/assets/ellipse-bg.svg" alt="ellipse">
      </div>
    </div>
    <InputContainer @click="formData.isOpenYourNft = !formData.isOpenYourNft" />
    <FooterContainer />
    <cookiePolicyContainer :class="{isOpenCookiePolicy: false}" />
    <ModalNotFound :class="{isOpenModalNotFound: formData.isOpenYourNft}" />
    <ModalYourNft :class="{isOpenYourNft: false}" />
    <div
      :class="{yourNftBg: formData.isOpenYourNft}"
      @click="formData.isOpenYourNft = false"
      @keydown="formData.isOpenYourNft = false"
    ></div>
  </div>
</template>

<script>
import { defineComponent, reactive } from 'vue';
import InputContainer from './InputContainer.vue';
import FooterContainer from './FooterContainer.vue';
import cookiePolicyContainer from './cookiePolicyContainer.vue';
import ModalNotFound from './ModalNotFound.vue';
import ModalYourNft from './ModalYourNft.vue';

export default defineComponent({
  name: 'NotificationContainer',
  components: {
    InputContainer,
    FooterContainer,
    cookiePolicyContainer,
    ModalNotFound,
    ModalYourNft,
  },
  setup() {
    const formData = reactive({
      isOpenYourNft: false,
    });
    return {
      formData,
    };
  },
});
</script>

<style lang="stylus" scoped>
.notificationContainer {
  width: 300px;
  height: 983px;
  position: relative;
  padding-top: 20px;
  overflow: hidden;
  box-shadow: 0px 4px 25px rgba(0, 16, 68, 0.5);
  @media screen and (min-width: 445px) {
    width: 428px;
  }
}
.mainBox {
  &__title {
    font-family: 'Lab Grotesque', Arial, sans-serif;
    font-size: 20px;
    line-height: 24px;
  }
  &__ellipse {
    width: auto;
    height: auto;
    position: absolute;
    top: 0;
    right: 0;
    z-index: -1;
  }
}
.logo {
  width 100px;
  height 40px;
}
.yourNftBg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  opacity: .6;
  background: #425df3;
  z-index: 1;
}
.isOpenModalNotFound,
.isOpenYourNft,
.isOpenCookiePolicy {
  opacity: 1;
  transform: translateY(-1000px);
}
</style>
