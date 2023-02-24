import Toast from '@/utils/Toast';
import axios from 'axios';
import { defineStore } from 'pinia';
import statusStore from '../statusStore';

const status = statusStore();

const { VITE_API, VITE_PATH } = import.meta.env;

export default defineStore('articles', {
  state: () => ({
    articles: [],
  }),
  actions: {
    getArticles() {
      status.isLoading = true;
      axios
        .get(`${VITE_API}/api/${VITE_PATH}/articles`)
        .then((res) => {
          status.isLoading = false;
          const { articles } = res.data;
          this.articles = articles;
        })
        .catch((err) => {
          status.isLoading = false;
          const errMessage = err.data?.message || '資料取得失敗，稍後在試';
          Toast.fire({
            title: `${errMessage}`,
            icon: 'error',
          });
        });
    },
  },
});
