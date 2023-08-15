<template>
  <div class="hello">
    <h1>当前求和{{  sum }}</h1>
    <h3>当前和的积{{  bigSum }}</h3>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="jia(n)">+</button>
    <button @click="reduce(n)">-</button>
    <button @click="OddEvent(n)">奇数加偶数减</button>
    <button @click="waitadd(n)">等一等再加</button>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex';

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      n:1
    };
  },
  computed:{
    // sum(){
    //   return this.$store.state.sum
    // },
    bigSum(){
      return this.$store.getters.bigSum
    },
    ...mapState({sum:"sum"}),
    ...mapGetters({bigSum:"bigSum"})
  },
  methods:{
    ...mapActions({
      OddEvent:"OddEvent",
      waitadd:"waitadd",
    }),
    ...mapMutations({
      jia:"JIA",
      reduce:"REDUCE",
    })
    // jia(){
    //   this.$store.commit('JIA',this.n)
    // },
    // reduce(){
    //   this.$store.commit('REDUCE',this.n)
    // },
    // OddEvent(){
    //   this.$store.dispatch('OddEvent',this.n)
    // },
    // waitadd(){
    //   this.$store.dispatch('waitadd',this.n)
    // }
  }
}
</script>
<style scoped>
</style>
