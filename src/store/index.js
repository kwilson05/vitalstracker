import { createStore, createLogger } from "vuex";
import vitals from "./modules/vitals";

const debug = process.env.NODE_ENV !== "production";

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    vitals,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : [],
});
