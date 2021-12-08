<template>
  <div class="is-flex-center">
    <div class="field pt-5 pb-5" ref="calculator">
    <h2 v-if="page==='send'" class="is-size-3" id="send">
        {{ $t('text.calculator.send') }}
    </h2>
    <h2 v-else class="is-size-3" id="send">
        {{ $t('text.calculator.receive') }}
    </h2>
    <div class="control">
        <input
            v-model="amount"
            @click="focus()"
            class="input is-small mt-3 mb-4 is-input"
            type="number"
            placeholder="0"
        >
    </div>
    <p class="solutionParagraph mb-3 mt-2">
        <span v-if="page==='send'" class="is-size-4">
            {{ $t('text.calculator.fees') }}:
        </span>
        <span v-else class="is-size-4">
            {{ $t('text.calculator.sent') }}:
        </span>
        <span class="is-size-4">
            {{ isNaN(fees) ? 0 : fees }}<span v-if="$i18n.locale==='German'">€</span>
        </span> 
        <br />
        <span v-if="page==='send'" class="is-size-4">
            {{ $t('text.calculator.rest') }}:
        </span> 
        <span v-else class="is-size-4">
            {{ $t('text.calculator.fees') }}:
        </span> 
        <span class="is-size-4">
          {{ isNaN(rest) ? 0 : rest }}<span v-if="$i18n.locale==='German'">€</span>
        </span> 
    </p>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        page: {
            required: true,
            type: String
        }
    },
    data () {
        return {
            amount: null,
            base: 0.35,
            percent: 0.0249
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

        this.percent = this.percent/100
        this.percent = Math.round(this.percent*10000)/10000
        this.percent = parseFloat(this.percent)
        this.base = parseFloat(this.base)
    },
    computed: {
        fees () {
            if (this.amount != null) {
                if (this.page == 'send') {
                    const solution = (parseFloat(this.amount) * this.percent) + this.base
                    return this.amount > 0.35 ? Math.round(solution * 100) / 100 : 0
                } else {
                    const solution = (((parseFloat(this.amount) + this.base)) / (100 - (this.percent * 100)) * 100)
                    return  Math.round(solution * 100) / 100
                }
            }
            return 0
        },
        rest () {
            if (this.amount != null && this.amount !== 0) {
                if (this.page == 'send') {
                    const rest = parseFloat(this.amount)-this.fees
                    return Math.round(rest*100)/100
                } else { 
                    const rest = this.fees - parseFloat(this.amount)
                    return Math.round(rest*100)/100
                }
            }
            return 0
        }
    },
    methods: {
        focus() {
            this.$refs.calculator.style.opacity = '-3rem'
        }
    }
}
</script>

<style>

</style>