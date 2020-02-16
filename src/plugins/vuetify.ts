import "@mdi/font/css/materialdesignicons.css";
import Vue from "vue";
import Vuetify from "vuetify/lib";
import colors from "vuetify/lib/util/colors";

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: colors.purple.darken1,
                secondary: colors.orange.darken1,
            },
            dark: {
                primary: colors.purple.lighten1,
                secondary: colors.orange.lighten1,
            },
        },
    },
});
