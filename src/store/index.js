import Vuex from 'vuex';

export default new Vuex.Store({
  state: {
    payCurrency: null,
    receiveCurrency: null,
  },
  mutations: {
    setPayCurrency(state, currencyData) {
      state.payCurrency = currencyData;
    },
    setReceiveCurrency(state, currencyData) {
      state.receiveCurrency = currencyData;
    },
  },
  actions: {
    selectPayCurrency({ commit }, currencyData) {
      commit('setPayCurrency', currencyData);
    },
    selectReceiveCurrency({ commit }, currencyData) {
      commit('setReceiveCurrency', currencyData);
    },
  },
});