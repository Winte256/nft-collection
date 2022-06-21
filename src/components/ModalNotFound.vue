<template>
  <div class="notFoundContainer">
    <h1 class="notFoundContainer__title">NFT не найден </h1>
    <img src="@/assets/notFound-i.png" alt="notFound">
    <p class="notFoundContainer__firstText">Что-то пошло не так.</p>
    <p class="notFoundContainer__secondText">
      Попробуйте перезагрузить страницу и снова проверить наличие NFT  в вашем кошельке.
      При возникновении трудностей обратитесь в службу
      технической поддержки OTON по адресу<br>
      <a href="https://support@oton.org/" class="support" target="_blank">support@oton.org</a>
    </p>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NotFound',
  components: {
  },
});
</script>

<style lang="stylus" scoped>
.notFoundContainer {
  width: 310px;
  background: linear-gradient(169.71deg, #DBE3FF 7.71%, rgba(255, 255, 255, 0.85) 74.23%);
  box-shadow: 0px 4px 25px rgba(0, 16, 68, 0.5);
  backdrop-filter: blur(20px);
  border-radius: 2px;
  padding: 20px 20px 40px 20px;
  position: fixed;
  top: calc(50% + 1000px);
  margin-top: -194px;
  left: 50%;
  margin-left: -175px;
  transition: .5s;
  opacity: 0;
  z-index: 2;
  &__title {
    font-family: 'Lab Grotesque', Arial, sans-serif;
    font-size: 18px;
    line-height: 24px;
    margin: 20px 0 0 0;
  }
  &__firstText {
    margin: 0;
    position: relative;
    top: -15px;
    font-size: 13px;
  }
  &__secondText {
    margin: 10px 0 0 0;
    font-size: 13px;
  }
  @media screen and (min-width: 445px) {
    &__title {
      font-size: 20px;
    }
    &__firstText {
      font-size: 15px;
    }
    &__secondText {
      font-size: 15px;
    }
  }
}
.support {
  text-decoration: none;
  cursor: pointer;
  color: #0A3ADC;
  border-bottom: #0A3ADC 1px solid;
}
</style>
