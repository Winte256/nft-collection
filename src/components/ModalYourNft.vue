<template>
  <div class="yourNftContainer">
    <h1 class="yourNftContainer__title">Ваши NFT:</h1>
    <img class="footer__ellipse" src="@/assets/footer-ellipse.png" alt="footer ellipse">
    <div class="instructionBox">
      <h2 class="instructionBox__title">Чтобы добавить NFT в ваш кошелек Metamask:</h2>
      <div class="instructionBox__info">
        <div
          v-for="(item, i) in instructions"
          :key="i"
          class="instructionBox__list"
        >
          <div>{{ i + 1 + '.' }}</div>
          <div class="listText">{{ item }}</div>
        </div>
        Идентификатор для второго NFT:  {ID}
        Идентификатор для третьего NFT: {ID}
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'yourNft',
  components: {
  },
  setup() {
    const instructions = [
      'Откройте мобильное приложение Метамаск.',
      'Убедитесь, что вы находитесь в кошельке с тем адресом, на который получали NFT.',
      'Перейдите на вкладку «Невзаимозаменяемые токены».',
      'Прокрутите экран вниз и нажмите «ДОБАВИТЬ невзаимозаменяемые токены».',
      'Укажите адрес.',
      'Укажите Идентификатор: {ID}',
      'Нажмите «Добавить».',
      'Дождитесь загрузки изображения.',
      `Для загрузки остальных токенов повторите шаги инструкции
        с 1 по 8, введя уникальные идентификаторы для каждого NFT:`,
    ];
    return {
      instructions,
    };
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
  top: calc(50% + 1000px);
  margin-top: -263px;
  left: 50%;
  margin-left: -175px;
  transition: .5s;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  &__title {
    font-family: 'Lab Grotesque', Arial, sans-serif;
    font-size: 20px;
    line-height: 24px;
    margin: 20px 0 0 0;
  }
}
.instructionBox {
  position: relative;
  top: -80px;
  padding-left: 15px;
  &__title {
    font-size: 20px;
    color: #fff;
    margin: 0 0 50px 0;
  }
  &__info {
    text-align: left;
    font-size: 13px;
    line-height: 18px;
  }
  &__list {
    display: flex;
  }
}
.listText {
  margin-left: 5px;
}
</style>
