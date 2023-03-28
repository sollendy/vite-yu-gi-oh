<script>
    import {store} from "../store.js";
    import axios from "axios";
    import OggettoCard from "./oggettoCard.vue"
    export default {
        name: "AppMain",
        data() {
            return {
                store,
            }
        },
        components: {
            OggettoCard,
        },
        created() {
            axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=50&offset=0').then((res)=>{
                this.store.yugiCards = res.data.name;
                console.log(res.data.name);
            });
        }
    }

</script>

<template>
  <div id="lista-carte">
    <OggettoCard v-for="carta in store.yugiCards">
        <img :src="carta.card_images.image_urls" alt="">
    </OggettoCard>
  </div>
</template>

<style lang="scss" scoped>

</style>