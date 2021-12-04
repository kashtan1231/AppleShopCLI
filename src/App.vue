<template>
    <component :is='layout'>
      <router-view />
    </component>
</template>

<script>
import HeaderLayout from './layouts/HeaderLayout.vue'

export default {
  computed: {
    layout () {
      return (this.$route.meta.layout) + '-layout'
    }
  },
  components: {
    HeaderLayout
  }
}
</script>

<style>

@import '/assets/index.css';

</style>
