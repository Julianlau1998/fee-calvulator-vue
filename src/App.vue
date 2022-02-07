<template>
  <div id="app">
    <navbar />
    <router-view/>
  </div>
</template>

<script>
import navbar from "@/components/Navbar.vue" 
export default {
  components: { navbar },
  data () {
    return {
      page: '',
      iOS: false
    }
  },
  created () {
    this.page = 'send'
    this.iOS = [
      'iPad Simulator',
      'iPhone Simulator',
      'iPod Simulator',
      'iPad',
      'iPhone',
      'iPod'
    ].includes(navigator.platform) || (navigator.userAgent.includes("Mac") && "ontouchend" in document)
    this.$store.state.iOS = this.iOS
  },
  methods: {
    changePage(page) {
      this.page = page
    }
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #e6e9ec;
}
</style>
