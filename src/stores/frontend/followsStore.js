import Toast from '@/utils/Toast';
import { defineStore } from 'pinia';

export default defineStore('follows', {
  state: () => ({
    followList: [],
    followIds: [],
    products: [],
  }),
  actions: {
    tempProducts(products) {
      this.products = products;
      this.getFollows();
    },
    getFollowIds() {
      this.followIds = JSON.parse(localStorage.getItem('followIds')) || [];
    },
    getFollows() {
      this.getFollowIds();
      this.followList = [];
      this.products.forEach((product) => {
        if (this.followIds.indexOf(product.id) > -1) {
          this.followList.push(product);
        }
      });
    },
    toggleFollow(id) {
      const followId = this.followIds.indexOf(id);
      if (followId === -1) {
        this.followIds.push(id);
        Toast.fire({
          title: '已加入追蹤',
          icon: 'success',
        });
      } else {
        this.followIds.splice(followId, 1);
        Toast.fire({
          title: '已取消追蹤',
          icon: 'success',
        });
      }
      localStorage.setItem('followIds', JSON.stringify(this.followIds));
      this.getFollows();
    },
  },
});
