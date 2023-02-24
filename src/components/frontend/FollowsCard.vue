<template>
  <VueLoading v-model:active="isLoading"></VueLoading>
  <div class="p-7">
    <div v-if="followList.length">
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <h3 class="mt-5">追蹤商品</h3>
          <div class="table-responsive mt-5">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">品名</th>
                  <th scope="col">分類</th>
                  <th scope="col">價格</th>
                  <th scope="col">購物車</th>
                  <th scope="col">取消</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in followList" :key="item.id">
                  <td style="white-space: nowrap">
                    <router-link :to="`/product/${item.id}`">
                      <p class="text-dark align-middle">
                        <strong>{{ item.title }}</strong>
                      </p>
                    </router-link>
                  </td>
                  <td class="align-middle">{{ item.category }}</td>
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
                      <i
                        class="fas fa-spinner fa-spin"
                        v-if="loadingItem === item.id"
                      >
                      </i>
                      <i v-else class="bi bi-bag-plus fs-5"></i>
                    </button>
                  </td>
                  <td>
                    <button
                      href="#"
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
      <div class="d-flex justify-content-center py-7">
        <h2 class="mb-3 fs-4">目前的追蹤清單是空的，請選擇您喜歡的商品</h2>
        <router-link to="/products" class="text-dark mt-5 mt-3 h5">
          <i class="bi bi-cart mt-3"></i>
          查看商品
        </router-link>
      </div>
      <HomeCategory />
    </div>
  </div>
</template>

<script>
import cartStore from '@/stores/frontend/cartStore';
import followsStore from '@/stores/frontend/followsStore';
import productsStore from '@/stores/frontend/productsStore';
import statusStore from '@/stores/statusStore';
import { mapActions, mapState } from 'pinia';
import HomeCategory from './HomeCategory.vue';

export default {
  data() {
    return {};
  },
  components: { HomeCategory },
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
