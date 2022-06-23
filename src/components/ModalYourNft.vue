<template>
  <div class="yourNftContainer">
    <h1 class="yourNftContainer__title">Ваши NFT:</h1>
    <div class="yourNftContainer__imgBox" v-for="(elem, i) in filteredArray" :key="i">
      <img
        class="yourNftContainer__img"
        :src="
          require(`@/assets/nft/nft-chain10k_${
            (elem && (+elem.id < 10 ? '0' + String(elem.id) : elem.id))|| '01'
          }.jpg`)
        "
        alt="123"
      />
    </div>
    <img class="ellipse" src="@/assets/footer-ellipse.png" alt="footer ellipse">
    <div class="instructionBox">
      <h2 class="instructionBox__title">Чтобы добавить NFT в ваш кошелек Metamask:</h2>
      <div class="instructionBox__info">
        <div
          v-for="(item, i) in instructions"
          :key="i"
          class="instructionBox__list"
        >
          <div>{{ i + 1 + '.' }}</div>
          <div v-html="item" class="listText"></div>
        </div>
        <div class="idForNft" v-for="(elem, i) in filteredArray" :key="i">
          {{ i === 0 ? null : `&bull; Идентификатор для ${i+1} NFT: ` }}
          <b>{{ i === 0 ? null : elem && elem.id }}</b>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { defineComponent, computed } from 'vue';

export default defineComponent({
  name: 'yourNft',
  components: {
  },
  setup() {
    const store = useStore();

    const addressNft = computed(() => store.getters['addressBalance/data']);
    const filteredArray = computed(() => addressNft.value.filter((element) => element.address === '0x6C75b803965a58D707B0696330fb37dD136a27E1'));

    const instructions = computed(() => [
      'Откройте мобильное приложение Метамаск.',
      'Убедитесь, что вы находитесь в кошельке с тем адресом, на который получали NFT.',
      'Перейдите на вкладку «Невзаимозаменяемые токены».',
      'Прокрутите экран вниз и нажмите «ДОБАВИТЬ невзаимозаменяемые токены».',
      'Укажите адрес: <b>0x6C75b803965a58D707B0696330fb37dD136a27E1</b>',
      `Укажите Идентификатор: <b>${filteredArray.value[0] && filteredArray.value[0].id}</b>`,
      'Нажмите «Добавить».',
      'Дождитесь загрузки изображения.',
      `Для загрузки остальных токенов повторите шаги инструкции
        с 1 по 8, введя уникальные идентификаторы для каждого NFT:`,
    ]);

    return {
      instructions,
      filteredArray,
    };
  },
});
</script>

<style lang="stylus" scoped>
.yourNftContainer {
  width: 310px;
  height: 526px;
  overflow: scroll;
  overflow-x: hidden;
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
    font-size: 18px;
    line-height: 24px;
    margin: 20px 0 10px; 0;
    @media screen and (min-width: 445px) {
      font-size: 20px;
    }
  }
  &__imgBox {
    filter: drop-shadow(0px 4px 25px rgba(10, 58, 220, 0.5));
    backdrop-filter: blur(20px);
    border-radius: 2px;
    padding-top: 20px;
  }
  &__img {
    width: 310px;
    height: 310px;
  }
}
.instructionBox {
  position: relative;
  margin-top: -140px;
  padding-left: 15px;
  &__title {
    font-size: 18px;
    color: #fff;
    margin: 0 0 50px 0;
    @media screen and (min-width: 445px) {
      font-size: 20px;
    }
  }
  &__info {
    text-align: left;
    font-size: 11px;
    line-height: 18px;
    @media screen and (min-width: 445px) {
      font-size: 13px;
    }
  }
  &__list {
    display: flex;
  }
}
.listText {
  margin-left: 5px;
}
.ellipse {
  pointer-events: none;
  position: relative;
  top: -60px;
  z-index: -1;
}
.idForNft {
  margin-left: 15px;
}
</style>
