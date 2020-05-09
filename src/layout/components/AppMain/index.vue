<template>
  <div>
    <router-view :key="key"></router-view>
  </div>
</template>

<script>
  export default {
    computed: {
      key() {
        return this.$route.path
      }
    }
  }
</script>

<style scoped>

</style>