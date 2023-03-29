<script>
   export default {
    name: "OgettoCard",
    data() {
        return {

        }
    },
    props: {
        card: Object,
    },
}
</script>

<template>
    <div class="card">
        <img :src="card.card_images[0].image_url" alt="yu-gi-oh carta">
        <div id="card-specs">
            <strong>{{ card.name }}</strong>
            <hr>
            <div>{{ card.frameType }}</div>
            <hr>
            <div>{{ card.race }}</div>
            <hr>
            <em>{{ card.card_prices[0].amazon_price }}$</em>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .card {
        width: calc(100% / 5 - 10px / 5 * 4);
        margin-bottom: 10px;
        border: 2px solid black;
        text-align: center;
        background-color: rgb(209, 203, 203);
        img {
            width: 100%;
        }
        // #card-specs {
        // }
    }
</style>