<template>
    <v-container>
        <v-row>
            <v-col cols="8">
                <v-card>
                    <v-card-title>Trippy</v-card-title>
                    <v-card-text>
                        Trippy is an open-source song and playlist manager for
                        Audio Trip. You can get the source and contribute
                        <a
                            href="https://github.com/raftario/Trippy"
                            target="_blank"
                            >on GitHub</a
                        >.
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="4">
                <v-card>
                    <v-list>
                        <v-subheader>Contributors</v-subheader>
                        <v-list-item
                            v-for="contributor in contributors"
                            :key="contributor.name"
                            link
                            :to="contributor.link"
                            target="_blank"
                        >
                            <v-list-item-content>
                                <v-list-item-title>{{
                                    contributor.name
                                }}</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class About extends Vue {
    contributors = [
        { name: "Raphaël Thériault", link: "https://github.com/raftario" },
    ];
}
</script>
