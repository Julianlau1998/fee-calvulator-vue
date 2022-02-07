<template>
  <div class="topnav">
      <h2 class="is-size-2" :class="iOS ? 'mt-6' : ''">
        {{ $t('text.calculator.title') }}
      </h2>
    </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  computed: {
    iOS () {
      return this.$store.state.iOS
    }
  }
}
</script>