<template>
  <div>
    <!--header-->
    <app-header></app-header>

    <!--main-->
    <app-main></app-main>

    <!--footer-->
    <app-footer></app-footer>

  </div>
</template>

<script>
  import {AppHeader, AppMain, AppFooter} from './components'

  export default {
    components: {
      AppHeader,
      AppMain,
      AppFooter
    }
  }
</script>

<style scoped>

</style>