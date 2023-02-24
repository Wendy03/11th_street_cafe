import Toast from '@/utils/Toast';
import axios from 'axios';
import { defineStore } from 'pinia';
import statusStore from '../statusStore';

const status = statusStore();

const { VITE_API, VITE_PATH } = import.meta.env;

export default defineStore('cart', {
  state: () => ({
    cart: {},
    coupon_code: '',
  }),
  actions: {
    getCarts() {
      status.isLoading = true;
      axios
        .get(`${VITE_API}/api/${VITE_PATH}/cart`)
        .then((res) => {
          const { data } = res.data;
          status.isLoading = false;
          this.cart = data;
        })
        .catch((err) => {
          status.isLoading = false;
          const errMessage = err.response?.data?.message || '資料錯誤';
          Toast.fire({
            title: `${errMessage}`,
            icon: 'error',
          });
        });
    },
    addToCart(id, qty = 1) {
      status.loadingItem = id;
      const cart = {
        product_id: id,
        qty,
      };
      axios
        .post(`${VITE_API}/api/${VITE_PATH}/cart`, { data: cart })
        .then((res) => {
          const { message } = res.data;
          status.loadingItem = '';
          Toast.fire({
            title: `${message}`,
            icon: 'success',
          });
          this.getCarts();
        })
        .catch((err) => {
          status.loadingItem = '';
          const errMessage = err.response?.data?.message || '資料錯誤';
          Toast.fire({
            title: `${errMessage}`,
            icon: 'error',
          });
        });
    },
    updateCart(item, qty) {
      const cart = {
        product_id: item.product_id,
        qty,
      };
      status.loadingItem = item.id;
      axios
        .put(`${VITE_API}/api/${VITE_PATH}/cart/${item.id}`, { data: cart })
        .then((res) => {
          const { message } = res.data;
          status.loadingItem = '';
          Toast.fire({
            title: `${message}`,
            icon: 'success',
          });
          this.getCarts();
        })
        .catch((err) => {
          status.loadingItem = '';
          const errMessage = err.response?.data?.message || '資料錯誤';
          Toast.fire({
            title: `${errMessage}`,
            icon: 'error',
          });
        });
    },
    removeCartItem(id) {
      status.loadingItem = id;
      axios
        .delete(`${VITE_API}/api/${VITE_PATH}/cart/${id}`)
        .then((res) => {
          const { message } = res.data;
          status.loadingItem = '';
          Toast.fire({
            title: `${message}`,
            icon: 'success',
          });
          this.getCarts();
        })
        .catch((err) => {
          status.loadingItem = '';
          const errMessage = err.response?.data?.message || '資料錯誤';
          Toast.fire({
            title: `${errMessage}`,
            icon: 'error',
          });
        });
    },
    deleteAllCarts() {
      status.isProcessing = true;
      axios
        .delete(`${VITE_API}/api/${VITE_PATH}/carts`)
        .then((res) => {
          const { message } = res.data;
          status.isProcessing = false;
          Toast.fire({
            title: `${message}`,
            icon: 'success',
          });
          this.getCarts();
        })
        .catch((err) => {
          const errMessage = err.response?.data?.message || '資料錯誤';
          status.isProcessing = false;
          Toast.fire({
            title: `${errMessage}`,
            icon: 'error',
          });
        });
    },
    addCouponCode(couponCode) {
      this.coupon_code = couponCode;
      const coupon = {
        code: this.coupon_code,
      };
      status.isProcessing = true;
      axios
        .post(`${VITE_API}/api/${VITE_PATH}/coupon`, { data: coupon })
        .then((res) => {
          status.isProcessing = false;
          const { message } = res.data;
          Toast.fire({
            title: `${message}`,
            icon: 'success',
          });
          this.getCarts();
          this.coupon_code = '';
        })
        .catch((err) => {
          const errMessage = err.response?.data?.message || '資料錯誤';
          status.isProcessing = false;
          Toast.fire({
            title: `${errMessage}`,
            icon: 'error',
          });
        });
    },
  },
});
