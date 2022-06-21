<template>
  <div class="cookiePolicyBox">
    <div>
      <a class="cookiePolicyLink" href="https://oton.technology/OtonTechnology_CookiesPolicy.pdf" target="_blank">
        Политика файлов cookie
      </a>
    </div>
    <div class="buttonsBox">
      <button class="button acceptBtn" @click="click">Принять</button>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'cookiePolicyContainer',
  components: {
  },
  emits: ['click'],
  methods: {
    click(e) {
      this.$emit('click', e);
    },
  },
});
</script>

<style lang="stylus" scoped>
.cookiePolicyBox {
  width: 280px;
  background: linear-gradient(169.71deg, #DBE3FF 7.71%, rgba(255, 255, 255, 0.85) 74.23%);
  box-shadow: 0px 14px 29px rgba(10, 58, 220, 0.15);
  backdrop-filter: blur(10px);
  border-radius: 2px;
  position: fixed;
  bottom: -1000px;
  left: 50%;
  margin-left: -160px;
  padding: 20px;
  transition: .7s;
  @media screen and (min-width: 445px) {
    width: 310px;
    margin-left: -175px;
  }
}
.button {
  width: 130px;
  height: 40px;
  border: none;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25);
  border-radius: 2px;
  cursor: pointer;
  font-size: 12px;
  @media screen and (min-width: 445px) {
    width: 140px;
    font-size: 14px;
  }
}
.acceptBtn {
  background: radial-gradient(511.96% 511.96% at 46.34% -242.39%, #0A3ADC 42.19%, #00CBFF 100%);
  color: #fff;
  font-size: 12px;
  &:hover {
    background: radial-gradient(511.96% 511.96% at 46.34% -242.39%, #0A3ADC 0%, #00CBFF 100%);
  }
  &:active {
    background: radial-gradient(311.6% 311.71% at 46.34% -242.39%, #0A3ADC 0%, #00CBFF 100%);
  }
  @media screen and (min-width: 445px) {
    font-size: 14px;
  }
}
.buttonsBox {
  margin-top: 20px;
}
.cookiePolicyLink {
  text-decoration: none;
  font-size: 14px;
  color: #0A3ADC;
  border-bottom: #0A3ADC 1px solid;
  transition: all .5s;
  &:hover {
    background: linear-gradient(180.1deg, #0A3ADC 0.09%, #00CBFF 99.91%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    border-bottom: #00CBFF 1px solid;
  }
  &:active {
    background: linear-gradient(180.1deg, #00CBFF 0.09%, #00FFFF 99.91%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    border-bottom: #00FFFF 1px solid;
  }
  @media screen and (min-width: 445px) {
    font-size: 16px;
  }
}
.isConfirmCookie {
  opacity: 0;
  transition: translateY(0);
}
</style>
