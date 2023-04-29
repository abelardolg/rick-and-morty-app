import { createStore } from "vuex";
import rickAndMorty from "@/modules/rickAndMorty/store/rickAndMorty";

const store = createStore({
    modules: {
        rickAndMorty
    }
});

export default store;