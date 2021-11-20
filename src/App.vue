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
      page: ''
    }
  },
  created () {
    this.page = 'send'
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
