<template>
<div>
  <div class="columns is-centered">
    <div class="column">
      <img
        src="../../public/img/helpButton.png"
        class="topButton mx-4"
        :class="iOS ? 'mt-4' : 'mt-5'"
        @click="$router.push('/help')"
      >
      <img 
        src="../../public/img/settings.png"
        class="topButton mr-5"
        :class="iOS ? 'mt-4' : 'mt-5'"
        @click="$router.push('/settings')"
      >
    </div>
  </div>
  <div class="columns is-centered mt-6">
    <div class="column">
      <calculator :page="page" />
    </div>
  </div>
  <bottomNav @changePage="changePage($event)" />
</div>
</template>

<script>
import calculator from '@/components/Calculator.vue'
import bottomNav from "@/components/BottomNav.vue"

export default {
  name: 'Home',
  components: {
    calculator,
    bottomNav
  },
  data () {
    return {
      page: ''
    }
  },
  created () {
    this.page = 'send'
  },
  computed: {
    iOS () {
      return this.$store.state.iOS
    }
  },
  methods: {
    changePage(page) {
      this.page = page
    }
  }
}
</script>
