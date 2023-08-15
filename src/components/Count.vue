<template>
    <div class="count">
        <h1>11</h1>
    <ul>
        <li
         v-for="item in user" 
         :key="item.id">{{ item.name }} - {{ item.age }} - {{ item.sex }}</li>
    </ul>
    <h3 v-for="i in screen" :key="i.id">{{ i.name }}</h3>
    </div>
</template>
<script>
  import { mapActions, mapGetters, mapMutations, mapState } from 'vuex';
  export default {
    name: 'count',
  props: {
    msg: String
  },
  data() {
    return {};
  },
  methods:{
  },
computed:{
    ...mapState("dataList",["user"]),
    ...mapGetters("dataList",["screen"])
},
mounted() {
    console.log(this.$store.state);
},
  }
</script>
<style>
  .count ul li{
    list-style: none;
  }
</style>