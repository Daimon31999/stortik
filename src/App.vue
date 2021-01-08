<template>
  <div id="app" class="font-balsamiq">
    <Header />
    <!-- <Body /> -->
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header.vue'
// import Body from './components/Body.vue'

export default {
  name: 'App',
  components: {
    Header,
    // Body,
  },
  methods: {
    updateScroll() {
      // this.scrollPosition = window.scrollY
      this.$store.dispatch('setScrollPosition', { y: window.scrollY })
    },
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll)
  },
}
</script>

<style></style>
