<template>
  <div>
    <p id="text" class="mt-5">
        <b>
            {{ $t('text.settings.text') }}
        </b>
    </p>

    <div class="mt-5">
        <span>
          <input type="number" v-model="percent" class="input smallInput mr-4">
          <input type="number" v-model="base" class="input smallInput">
        </span>
        <br>
        <button @click="changeFees('us')" class="button countryButton">US</button> 
        <button @click="changeFees('europe')" class="button countryButton">EU</button>
        <button @click="changeFees('us')" class="button countryButton">UK</button>
        <button @click="changeFees('us')" class="button countryButton">CAN</button>
        <button @click="changeFees('india')" class="button countryButton">IND</button>
        <button @click="changeFees('mexico')" class="button countryButton">MEX</button>
        <br>
        <h3 class="mt-6">
          <select
            v-model="$i18n.locale"
            id="language"
            v-bind="selectedLanguage"
          >
            <option
              v-for="(lang, i) in langs" :key="`Lang${i}`"
              :value="lang"
            >
                {{ lang }}
            </option>
          </select>
        </h3> 
        
        <button class="button" id="save" @click="save()">
          <b>
            {{ $t('text.settings.save') }}
          </b>
        </button>
        <br><br>
        <button id="reset" @click="changeFees('europe')">
          <b>
            {{ $t('text.settings.reset') }}
          </b>
        </button>
        <br>
        <a
          class="button"
          id="rate"
          :href="appStoreLink"
        >
          <b>
            {{ $t('text.settings.rate') }}
          </b>
        </a>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      percent: 2.49,
      base: 0.35,
      langs: ['English', 'German'],
      selectedLanguage: ''
    }
  },
  created () {
    this.base = localStorage.getItem("base")
    this.percent = localStorage.getItem("percent")

    if(this.base==null){
      this.base = 0.35
    }
    if(isNaN(this.base)){
      this.base = 0.35
    }
    if(this.percent==null){
      this.percent = 2.49
    }  
    if(isNaN(this.percent)){
      this.percent = 2.49
    }
  },
  computed: {
    language () {
      return this.$i18n.locale
    },
    iOS () {
      return this.$store.state.iOS
    },
    appStoreLink () {
      if (this.iOS) return 'https://apps.apple.com/de/app/fee-calculator-for-paypal-fees/id1603306343'
      return 'https://play.google.com/store/apps/details?id=app.netlify.paypal_fee_calculator.twa'
    }
  },
  watch: {
    language () {
      localStorage.setItem('language', this.language)
    }
  },
  methods: {
    changeFees (country) {
      switch (country) {
        case 'europe':
          localStorage.setItem('percent', 2.49)
          localStorage.setItem('base', 0.35)
          this.percent = 2.49
          this.base = 0.35
          break
        case 'us':
          localStorage.setItem('percent', 2.5)
          localStorage.setItem('base', 3)
          this.percent = 2.9
          this.base = 0.3
          break
        case 'india':
          localStorage.setItem('percent', 2.9)
          localStorage.setItem('base', 0.3)
          this.percent = 2.5
          this.base = 3
          break
        case 'mexico':
          localStorage.setItem('percent', 3.95)
          localStorage.setItem('base', 4)
          this.percent = 3.95
          this.base = 4
          break
      }
    },
    save () {
      localStorage.setItem('percent', this.percent)
      localStorage.setItem('base', this.base)
      this.$router.push('/')
    }
  }
}
</script>

<style>
  .smallInput {
    width: 5rem !important;
  }
  .button{
    margin-top: 10vw;
    font-size: large;
  }
  #reset{
    width: 11.5rem;
    margin-top: 2rem;
  }
  #language {
    width: 7rem;
    height: 1.8rem;
    font-size: large;
  }
  #save {
    width: 8rem;
  }
  
</style>