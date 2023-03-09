<template>
  <div class="fixed-top">
    <div id="nav">
      <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
        <div class="container px-md-0 px-3 position-relative py-2">
          <div class="d-flex flex-row justify-content-between w-100">
            <div>
              <RouterLink to="/" class="navbar-brand fs-1 logo">
                11 街咖啡
              </RouterLink>
            </div>
            <ul class="navbar-nav flex-row">
              <li class="nav-item ms-md-2 order-lg-2 order-1">
                <RouterLink to="/cart" class="nav-link px-2">
                  <i class="bi bi-bag-fill text-secondary"></i>
                  <span
                    v-if="cart.carts?.length"
                    class="badge badge-pill rounded-pill bg-primary text-dark"
                    >{{ cart.carts?.length }}</span
                  >
                </RouterLink>
              </li>
              <li class="nav-item order-lg-1 order-2">
                <button
                  class="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div
                  class="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul class="navbar-nav mb-2 mb-lg-0">
                    <li class="nav-item">
                      <RouterLink
                        to="/products"
                        class="nav-link text-secondary px-lg-2"
                      >
                        商品列表
                      </RouterLink>
                    </li>
                    <li class="nav-item">
                      <RouterLink
                        to="/articles"
                        class="nav-link text-secondary px-lg-2"
                        href="#"
                      >
                        咖啡專欄
                      </RouterLink>
                    </li>
                    <li class="nav-item">
                      <RouterLink
                        to="/follows"
                        class="nav-link text-secondary px-lg-2"
                        href="#"
                      >
                        追蹤清單
                      </RouterLink>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import cartStore from '@/stores/frontend/cartStore';
import { mapActions, mapState } from 'pinia';
import { RouterLink } from 'vue-router';

export default {
  data() {
    return {};
  },
  components: { RouterLink },
  methods: {
    ...mapActions(cartStore, ['getCarts']),
  },
  computed: {
    ...mapState(cartStore, ['cart']),
  },
  mounted() {
    this.getCarts();
  },
};
</script>

<style>
@media (max-width: 768px) {
  .nav-link.active {
    background-color: #c1966c;
  }
}

@media screen and (min-width: 769px) {
  .nav-link.active {
    border-bottom: solid#FFFFFF 3px;
  }
}
</style>
