<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  data() {
    return {

    }
  },
  components: {
    AppHeader,
    AppFooter,
  }
}
</script>

<template>
  <AppHeader />
  <router-view>
  </router-view>
  <AppFooter />
</template>

<style lang="scss">
@use "bootstrap/scss/bootstrap" as *;
@use './assets/styles/generall.scss' as *;
</style>
