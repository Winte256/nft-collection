<template>
  <footer class="footer">
    <img class="footer__ellipse" src="@/assets/footer-ellipse.png" alt="footer ellipse">
    <div class="linksContainer">
      <div class="supportLinkbox">
        Поддержка:<br>
        <a class="link supportLink" href="https://support@oton.org/" target="_blank">support@oton.org</a>
      </div>
      <div class="hr" />
      <div class="tgLinkBox">
        <a class="link" href="https://t.me/otonecosystembot" target="_blank">
          <div class="tgIconBox">
            <img class="tgIcon" src="@/assets/tg-icon.svg" alt="telegram icon">
            <img class="tgHoverIcon" src="@/assets/tg-hover-icon.svg" alt="telegram icon">
            <img class="tgPressIcon" src="@/assets/tg-press-icon.svg" alt="telegram icon">
          </div>
        </a>
        <div>
          <a class="link" href="https://t.me/otonecosystembot" target="_blank">OTON Ecosystem Bot</a>
        </div>
      </div>
      <div class="hr" />
      <div class="termsOfUseBox">
        <a class="link" href="https://oton.technology/OtonTechnology_PrivacyPolicy.pdf" target="_blank">Политика конфиденциальности</a><br>
        <a class="link termsOfUseLink" href="https://oton.technology/OtonTechnology_TermsAndConditions.pdf" target="_blank">Условия использования</a>
      </div>
    </div>
  </footer>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FooterContainer',
  components: {
  },
});
</script>

<style lang="stylus" scoped>
.footer {
  background: #0A3ADC;
  position: absolute;
  max-height: 236px;
  bottom: 0;
  &__ellipse {
    pointer-events: none;
    position: relative;
    top: -80px;
    width: 100%;
  }
  @media screen and (min-width: 428px) {
    &__ellipse {
      top: -100px;
    }
  }
}
.linksContainer {
  position: relative;
  top: -150px;
  color: #fff;
  font-weight: 300;
  font-size: 14px;
  @media screen and (min-width: 445px) {
    top: -200px;
    font-size: 16px;
  }
}
.link {
  text-decoration: none;
  color: #00CBFF;
  cursor: pointer;
  &:hover {
    background: linear-gradient(180.1deg, #00CBFF 0.09%, #00FFFF 99.91%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
  &:active {
    background: linear-gradient(180.1deg, #00FFFF 0.09%, #00FFFF 99.91%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
}
.supportLink {
  position: relative;
  top: 3px;
}
.supportLinkbox {
  margin-bottom: 24px;
}
.tgLinkBox {
  margin: 15px 0 16px 0;
}
.termsOfUseBox {
  margin-top: 17px;
}
.hr {
  width: 250px;
  height: 1px;
  background: #00CBFF;
  margin: 0 auto;
  @media screen and (min-width: 428px) {
    width: 310px;
  }
}
.tgIconBox {
  display: inline-block;
  position: relative;
  cursor: pointer;
  &:hover .tgHoverIcon,
  &:active .tgPressIcon {
    opacity: 1;
  }
}
.tgHoverIcon,
.tgPressIcon {
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 38px;
  height: 38px;
}
.tgIcon {
  &:hover,
  &:active {
    opacity: 0;
  }
}
.termsOfUseLink {
  position: relative;
  top: 5px;
}
</style>
