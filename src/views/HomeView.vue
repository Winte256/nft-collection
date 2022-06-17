<template>
  <div class="home">
    <NotificationContainer msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import NotificationContainer from '@/components/NotificationContainer.vue';

export default {
  name: 'HomeView',
  components: {
    NotificationContainer,
  },
};
</script>
