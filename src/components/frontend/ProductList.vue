<template>
  <div class="col-lg-10 col-md-9 my-5">
    <div class="row">
      <div
        class="col-lg-4 col-md-6 mb-3 mb-4"
        v-for="product in filterProducts"
        :key="product.id"
      >
        <div class="card border-0 shadow-sm h-100">
          <router-link :to="`/product/${product.id}`">
            <div
              style="
                height: 170px;
                background-size: cover;
                background-position: center;
              "
              :style="{ backgroundImage: `url(${product.imageUrl})` }"
            ></div>
          </router-link>
          <div
            class="position-absolute heart-icon mt-1"
            style="cursor: pointer"
            @click.prevent="toggleFollow(product.id)"
          >
            <i
              class="bi bi-heart text-danger shadow-sm p-1 bg-body rounded rounded-circle"
              v-if="followIds.indexOf(product.id) === -1"
            ></i>
            <i
              class="bi bi-heart-fill text-danger shadow-sm p-1 bg-body rounded rounded-circle"
              v-else
            ></i>
          </div>
          <div class="card-body">
            <span class="badge bg-primary float-right ml-2">
              {{ product.category }}
            </span>
            <h5 class="card-title">
              <a href="#" class="text-dark">{{ product.title }}</a>
            </h5>
            <p class="card-text">{{ product.description }}</p>
            <div class="text-right pr-2">
              {{ $filters.currency(product.price) }} 元
            </div>
          </div>
          <div class="card-footer d-grid gap-2 border-top-0">
            <button
              type="button"
              class="btn btn-primary"
              :disabled="isProcessing"
              @click="addToCart(product.id)"
            >
              <span
                v-if="product.id === loadingItem"
                class="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              ></span>
              加到購物車
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import cartStore from '@/stores/frontend/cartStore';
import followsStore from '@/stores/frontend/followsStore';
import productsStore from '@/stores/frontend/productsStore';
import statusStore from '@/stores/statusStore';
import { mapActions, mapState } from 'pinia';

export default {
  data() {
    return {};
  },
  methods: {
    ...mapActions(productsStore, ['getProducts']),
    ...mapActions(followsStore, ['getFollows', 'toggleFollow']),
    ...mapActions(cartStore, ['addToCart']),
  },
  computed: {
    ...mapState(productsStore, ['products', 'filterProducts']),
    ...mapState(followsStore, ['followIds']),
    ...mapState(statusStore, ['isLoading', 'loadingItem', 'isProcessing']),
  },
  mounted() {
    this.getProducts();
  },
};
</script>
