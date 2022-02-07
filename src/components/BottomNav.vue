<template>
  <div id="bottomNav">
      <p class='link noselect'>
      <span
        @click="changePage('send')"
        class="marginRight marginBottom nevElement"
        ref="send"
      >
          {{ $t('text.bottomNav.send') }}
      </span>
      <span
        @click="changePage('receive')"
        class="marginLeft marginBottom nevElement"
        ref="receive"
      >
        {{ $t('text.bottomNav.receive') }}
      </span>
      </p>
  </div>
</template>

<script>
export default {
    name: 'bottomNav',
    data () {
        return {
            iOS: false
        }
    },
    methods: {
        changePage (page) {
            this.$emit('changePage', page)
            if (page === 'send') {
                this.$refs.send.style.opacity = 1
                this.$refs.receive.style.opacity = 0.5
            } else {
                this.$refs.send.style.opacity = 0.5
                this.$refs.receive.style.opacity = 1
            }
        }
    },
    created () {
        this.iOS = [
                'iPad Simulator',
                'iPhone Simulator',
                'iPod Simulator',
                'iPad',
                'iPhone',
                'iPod'
            ].includes(navigator.platform) || (navigator.userAgent.includes("Mac") && "ontouchend" in document)
    },
    mounted () {
        this.$refs.send.style.opacity = 1
        this.$refs.receive.style.opacity = 0.5
    }
}
</script>

<style>
</style>