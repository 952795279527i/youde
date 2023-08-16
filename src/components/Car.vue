<template>
    <div class="carlist">
        <!-- <h3>这是车？</h3>
        <ul>
            <li 
              v-for="item in user"
              :key="item.id"
            >{{ item.name }} - {{ item.sex }}</li>
        </ul> -->
    </div>
</template>

<script>
// import { mapState } from 'vuex';
export default {
    name: 'carlist',
    data() {
        return {
        };
    },
    mounted() {
        this.$bus.$on("List",this.user)
    },
    methods: {
        List(){
        }
    },
    computed:{
        ...mapState("cardata",["user"])
    }
};
</script>

<style scoped>

</style>