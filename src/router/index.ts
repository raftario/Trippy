import About from "../views/About.vue";
import Home from "../views/Home.vue";
import Settings from "../views/Settings.vue";
import Songs from "../views/Songs.vue";
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/songs",
        name: "Songs",
        component: Songs,
        icon: "mdi-library-music",
        enabled: true,
    },
    {
        path: "/playlists",
        name: "Playlists",
        component: Songs,
        icon: "mdi-playlist-music",
        enabled: false,
    },
    {
        path: "/settings",
        name: "Settings",
        component: Settings,
        icon: "mdi-settings",
        enabled: true,
    },
    {
        path: "/about",
        name: "About",
        component: About,
        icon: "mdi-help-circle",
        enabled: true,
    },
];

const router = new VueRouter({
    routes,
});

export default router;
export const views = routes;
