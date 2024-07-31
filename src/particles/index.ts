import {App} from "vue";
import createParticles from "@tsparticles/vue3";
import {loadSlim} from "@tsparticles/slim";
import {loadAbsorbersPlugin} from "@tsparticles/plugin-absorbers";

export default {
    install(app: App) {
        createParticles(app, {
            init: async (engine: any) => {
                await loadSlim(engine);
                await loadAbsorbersPlugin(engine);
            },
        })
    },
}
