<template>
    <v-container> </v-container>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Home extends Vue {
    mounted() {
        this.$router.replace("/songs");
    }
}
</script>
