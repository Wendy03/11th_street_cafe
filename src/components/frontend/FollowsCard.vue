<template>
  <VueLoading v-model:active="isLoading" />
  <div v-if="followList.length">
    <div class="row justify-content-center">
      <div class="col-lg-10">
        <h3 class="mt-5">追蹤清單</h3>
        <div class="table-responsive-lg mt-5">
          <table class="table table-hover">
            <thead>
              <tr>
                <th scope="col">品名</th>
                <th scope="col">分類</th>
                <th scope="col">價格</th>
                <th scope="col">購買</th>
                <th scope="col">取消</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in followList" :key="item.id">
                <td style="white-space: nowrap" class="align-middle">
                  <RouterLink :to="`/product/${item.id}`">
                    <p class="text-dark align-middle mb-0">
                      <strong>{{ item.title }}</strong>
                    </p>
                  </RouterLink>
                </td>
                <td class="align-middle">
                  {{ item.category }}
                </td>
                <td class="align-middle">
                  {{ $filters.currency(item.price) }}
                </td>
                <td>
                  <button
                    type="button"
                    class="btn btn-outline-dark btn-sm border-0"
                    @click.prevent="addToCart(item.id)"
                    :disabled="isProcessing"
                  >
                    <span
                      class="spinner-grow spinner-grow-sm"
                      role="status"
                      aria-hidden="true"
                      v-if="loadingItem === item.id"
                    ></span>
                    <i v-else class="bi bi-bag-plus fs-5"></i>
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    class="btn btn-outline-dark btn-sm border-0"
                    @click.prevent="toggleFollow(item.id)"
                  >
                    <i class="bi bi-x fs-5"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <div class="row justify-content-center py-6">
      <div class="col-md-8">
        <h2 class="mb-3 fs-4">目前的追蹤清單是空的，請選擇您喜歡的商品</h2>
        <RouterLink to="/products" class="btn btn-dark mt-3 text-end">
          <i class="bi bi-cart mb-md-7 mt-3"></i>
          查看商品
        </RouterLink>
      </div>
    </div>
    <HomeCategory />
  </div>
</template>

<script>
import cartStore from '@/stores/frontend/cartStore';
import followsStore from '@/stores/frontend/followsStore';
import productsStore from '@/stores/frontend/productsStore';
import statusStore from '@/stores/statusStore';
import { mapActions, mapState } from 'pinia';
import { RouterLink } from 'vue-router';
import HomeCategory from './HomeCategory.vue';

export default {
  data() {
    return {};
  },
  components: { RouterLink, HomeCategory },
  methods: {
    ...mapActions(productsStore, ['getProducts']),
    ...mapActions(followsStore, ['getFollows', 'toggleFollow']),
    ...mapActions(cartStore, ['addToCart']),
  },
  computed: {
    ...mapState(followsStore, ['followIds', 'followList']),
    ...mapState(statusStore, ['isLoading', 'isProcessing', 'loadingItem']),
  },
  mounted() {
    this.getProducts();
  },
};
</script>
