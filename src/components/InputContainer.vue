<template>
  <label for="walletNum">
    <p class="labelForWalletNum">
      Для того, чтобы посмотреть NFT введите<br>номер своего кошелька Metamask
    </p>
    <div class="inputBox">
      <input
        v-model="inputValue"
        id="walletNum"
        class="walletNumInput"
        type="text"
        placeholder="Номер кошелька Metamask"
        name="walletNum"
      >
      <div class="iconBox" @click="click" @keyDown="click">
        <img class="icon search" src="@/assets/search-icon.png" alt="search">
        <img class="icon searchHover" src="@/assets/search-hover-icon.png" alt="search if hover">
        <img class="icon searchPress" src="@/assets/search-press-icon.png" alt="search if press" />
      </div>
    </div>
    <div class="inputInfo">
      Нажимая на кнопку, вы даете согласие на обработку персональных <br> данных и соглашаетесь с
      <a href="https://oton.technology/OtonTechnology_PrivacyPolicy.pdf" target="_blank">
        политикой конфиденциальности
      </a>
    </div>
  </label>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'InputContainer',
  components: { },
  data() {
    return {
      inputValue: '',
    };
  },
  emits: ['click', 'onChange'],
  methods: {
    click(e) {
      this.$emit('click', e);
    },
  },
  watch: {
    inputValue(value) {
      this.$emit('setValue', value);
    },
  },
});
</script>

<style lang="stylus" scoped>
.inputBox {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  left: 10px;
  top: -10px;
}
.labelForWalletNum {
  font-size: 13px;
  padding: 0;
  margin: 23px 0 0 0;
  @media screen and (min-width: 445px) {
    font-size: 15px;
  }
}
.walletNumInput {
  width: 233px;
  height: 36px;
  padding: 0 10px;
  border: #0A3ADC 1px solid;
  border-radius: 2px;
  font-size: 14px;
  &::-webkit-input-placeholder {
    color: rgba(0, 0, 0, 0.5);
  }
  @media screen and (min-width: 445px) {
    font-size: 16px;
  }
}
.inputInfo {
  font-size: 9.5px;
  color: rgba(0, 0, 0, 0.5);
  line-height: 16px;
  position: relative;
  top: -20px;
}
.iconBox {
  position: relative;
  top: 6px;
  transition: 0.5s;
  &:hover {
    cursor: pointer;
  }
  &:hover .searchHover,
  &:active .searchPress  {
    opacity: 1;
  }
  &:hover .search,
  &:active .search {
    opacity: 0;
  }
}

.searchHover,
.searchPress {
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  transition: 0.5s;
}
.searchPress {
  top: 20px;
  left: 15px;
}
.search {
  transition: 0.5s;
}
</style>
