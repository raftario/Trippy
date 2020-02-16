<template>
    <v-container>Settings {{ hello() }}</v-container>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import { hello } from "trippy-native";

@Component
export default class Settings extends Vue {
    hello() {
        return hello();
    }
}
</script>
