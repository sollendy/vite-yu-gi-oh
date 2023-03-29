<script>
    import {store} from "../store.js";
    import axios from "axios";
    import AppSearch from "./AppSearch.vue";
    import OggettoCard from "./OggettoCard.vue"
    export default {
        name: "AppMain",
        data() {
            return {
                store,
            }
        },
        components: {
            AppSearch,
            OggettoCard,
        },
        created() {
            axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=50&offset=0').then((res)=>{
                this.store.yugiCards = res.data.data;
                console.log(res.data.data);
                console.log(this.store.yugiCards[0])
            });
        },
        methods: {
            cercaCarta() {
                let apiValore = this.store.APIcall
                if(this.store.nomeCarta != "") {
                    apiValore += `fname=${this.store.nomeCarta}`;
                    console.log(apiValore)
                }
                axios.get(apiValore).then((res) => {
                    this.store.yugiCards = res.data.data
                });
            }
        }
    }
</script>

<template>
    <div class="barra-ricerca">
        <AppSearch @ricerca="cercaCarta()"></AppSearch>
    </div>
  <div id="lista-carte">
    <OggettoCard v-for="carta in store.yugiCards" :card="carta"></OggettoCard>
  </div>
</template>

<style lang="scss" scoped>
    #lista-carte {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        // border: 1px solid black;
    }
</style>