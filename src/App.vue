<template>
    <component :is='layout'>
      <router-view />
    </component>
</template>

<script>
import HeaderLayout from './layouts/HeaderLayout.vue'

export default {
  mounted() {
    setTimeout(() => {
      console.log(this.$route.meta.layout)
    }, 2000)
    
  },
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
