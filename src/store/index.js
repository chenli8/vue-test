import Vue from "vue";
import Vuex from "vuex";
import state from "./state";
import getter from "./getter";
import mutations from "./mutations";
import actions from "./actions";


Vue.use(Vuex)

export default new Vuex.Store({
  state, //存放数据
  getter, //获取数据
  mutations, //修改数据
  actions //处理数据
});
