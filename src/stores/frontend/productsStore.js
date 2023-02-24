import Toast from '@/utils/Toast';
import axios from 'axios';
import { defineStore } from 'pinia';
import statusStore from '../statusStore';
import followsStore from './followsStore';

const status = statusStore();
const follow = followsStore();

const { VITE_API, VITE_PATH } = import.meta.env;

export default defineStore('products', {
  state: () => ({
    products: [],
    categories: ['全部商品', '淺焙咖啡', '中焙咖啡', '深焙咖啡', '周邊商品'],
    filterCategory: '全部商品',
  }),
  actions: {
    getProducts() {
      status.isLoading = true;
      axios
        .get(`${VITE_API}/api/${VITE_PATH}/products/all`)
        .then((res) => {
          status.isLoading = false;
          const { products } = res.data;
          this.products = products;
          follow.tempProducts(this.products);
        })
        .catch((err) => {
          status.isLoading = false;
          const errMessage = err.response?.data?.message || '資料取得失敗，稍後在試';
          Toast.fire({
            title: `${errMessage}`,
            icon: 'error',
          });
        });
    },
    changeCategory(item) {
      this.filterCategory = item;
    },
  },
  getters: {
    filterProducts: (state) => {
      const currentCategory = state.products.filter((product) => (state.filterCategory === '全部商品'
        ? state.products
        : product.category === state.filterCategory));
      return currentCategory;
    },
  },
});
