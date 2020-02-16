<template>
    <v-app>
        <v-navigation-drawer v-model="drawer" app clipped>
            <v-list color="transparent">
                <v-list-item
                    v-for="item in items"
                    :key="item.name"
                    link
                    :to="item.path"
                    :disabled="!item.enabled"
                >
                    <v-list-item-icon>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>{{ item.name }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar app dark src="./assets/appbar-gradient.png" clipped-left>
            <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
            <v-toolbar-title>
                Trippy
            </v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn icon>
                <v-icon @click="$vuetify.theme.dark = !$vuetify.theme.dark">
                    {{
                        $vuetify.theme.dark
                            ? "mdi-brightness-2"
                            : "mdi-brightness-6"
                    }}
                </v-icon>
            </v-btn>
        </v-app-bar>

        <v-content>
            <v-fade-transition mode="out-in">
                <router-view></router-view>
            </v-fade-transition>
        </v-content>
    </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { views } from "@/router";

@Component
export default class App extends Vue {
    drawer = null;
    items = views.filter((v) => v.name != "Home");
}
</script>
