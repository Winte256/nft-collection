<template>
  <div class="notificationContainer">
    <div class="logoBox">
      <img class="logo" src="@/assets/logo.svg" alt="logo" />
    </div>
    <div class="mainBox">
      <h1 class="mainBox__title">
        Поздравляем!<br />
        Вы выиграли коллекционный<br />NFT OTON
      </h1>
      <div class="mainBox__imgContainer">
        <img class="mainBox__preview" src="@/assets/nft-preview.png" alt="nft-preview" />
        <img class="mainBox__ellipse" src="@/assets/ellipse-bg.svg" alt="ellipse" />
      </div>
    </div>
    <InputContainer
      @click="openAddressNft"
      @setValue="updateAddress"
    />
    <FooterContainer />
    <cookiePolicyContainer
      class="isOpenCookiePolicy"
      v-if="!isCookieAccepted"
      @click="confirmCookiePolicy"
    />
    <ModalNotFound :class="{ isOpenModalNotFound: fetchState === 'FULFILLED' && !isAddressNft }" />
    <ModalYourNft :class="{ isOpenYourNft: isAddressNft && fetchState === 'FULFILLED' }" />
    <div
      :class="{ yourNftBg: fetchState === 'FULFILLED' }"
      @click="closeModal"
      @keydown="closeModal"
    ></div>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import Cookies from 'js-cookie';
import getAcceptCookie from '@/utils/getAcceptCookie';
import {
  defineComponent, reactive, ref, computed,
} from 'vue';
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
    const store = useStore();
    const formData = reactive({
      address: '',
    });

    const fetchState = computed(() => store.state.addressBalance.fetchState);

    const addressNft = computed(() => store.getters['addressBalance/data']);
    const filteredArray = computed(() => addressNft.value.filter((element) => element.address === '0x6C75b803965a58D707B0696330fb37dD136a27E1'));

    const isAddressNft = computed(() => filteredArray.value[0] !== undefined);

    const isCookieAccepted = ref(getAcceptCookie());

    const closeModal = () => {
      store.commit('addressBalance/CLEAR');
    };

    const updateAddress = (data) => {
      formData.address = data || '';
    };

    const confirmCookiePolicy = () => {
      Cookies.set('accept-cookies', true, { expires: 30 });
      isCookieAccepted.value = true;
    };

    const openAddressNft = () => {
      store.dispatch('addressBalance/fetch', formData.address);
    };

    return {
      formData,
      confirmCookiePolicy,
      isCookieAccepted,
      openAddressNft,
      updateAddress,
      addressNft,
      filteredArray,
      isAddressNft,
      closeModal,
      fetchState,
    };
  },
});
</script>

<style lang="stylus" scoped>
.notificationContainer {
  width: 95vw;
  min-height: 100vh;
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
    font-size: 18px;
    line-height: 24px;
    @media screen and (min-width: 445px) {
      font-size: 20px;
    }
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
  width: 100px;
  height: 40px;
}
.yourNftBg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  opacity: 0.6;
  background: #425df3;
  z-index: 1;
}

.isOpenModalNotFound, .isOpenYourNft, .isOpenCookiePolicy {
  opacity: 1;
  transform: translateY(-1000px);
  transition: .3s;
}
</style>
