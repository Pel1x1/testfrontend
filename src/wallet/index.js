import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';

Vue.use(Vuex);

// Инициализация vuex-persist
const vuexLocal = new VuexPersistence({
  storage: window.localStorage, // Используем localStorage
});

const store = new Vuex.Store({
  state: {
    user: null,
    posts: [],
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setPosts(state, posts) {
      state.posts = posts;
    },
  },
  actions: {
    async fetchPosts({ commit }) {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        commit('setPosts', response.data); // Сохраняем полученные посты в состоянии
      } catch (error) {
        console.error('Ошибка при получении постов:', error);
      }
    },
  },
  plugins: [vuexLocal.plugin], // Подключаем плагин
});

// Восстанавливаем состояние из localStorage при загрузке приложения
store.dispatch('fetchPosts');

export default store;