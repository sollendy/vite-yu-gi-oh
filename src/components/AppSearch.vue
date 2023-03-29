<script>
import { store } from '../store';
    export default {
        name: "AppSearch",
        data() {
            return {
                store,
            }
        },
    }
</script>

<template>
    <div id="cerca-cont">
        <input v-model="nomeCarta" @keyup.enter="$emit('ricerca')" type="text" placeholder="quale carta cerchi?">
        <button @click="$emit('ricerca')">cerca</button>
        <hr>
    </div>
</template>

<style lang="scss">
    #cerca-cont {
        padding: 5px;
        input {
            margin-right: 5px;
        }
    }
</style>