// 引入模块不要大写如node_modules里面需找,坑
import Vue from "vue";
import Vuex from "vuex";

import * as actions from "./actions"
import * as getters from "./getters"
import mutations from "./mutations"
import state from "./state"
// 调试工具,状态
import createLogger from "vuex/dist/logger" 

Vue.use(Vuex)

// 调试工具,
const debug = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
	actions,
	getters,
	mutations,
	state,
	strict:debug,
	plugins:debug ? [createLogger()] : []
})
