<template>
  <div class="fixed-top">
    <div id="nav">
      <nav class="navbar navbar-expand-lg bg-black navbar-dark">
        <div class="container px-md-0 px-3 position-relative py-2">
          <div class="d-flex flex-row justify-content-between w-100">
            <div>
              <RouterLink to="/" class="navbar-brand fs-1 logo">
                11 街咖啡
              </RouterLink>
            </div>
            <ul class="navbar-nav flex-row">
              <li class="nav-item ms-md-2 order-lg-2 order-1">
                <RouterLink to="/cart" class="nav-link px-2 py-lg-2">
                  <i class="bi bi-bag-fill text-secondary"></i>
                  <span
                    v-if="cart.carts?.length"
                    class="badge badge-pill rounded-pill bg-danger"
                    style="transform: translateX(-7px) translateY(-9px)"
                    >{{ cart.carts?.length }}</span
                  >
                </RouterLink>
              </li>
              <li class="nav-item order-lg-1 order-2">
                <button
                  class="navbar-toggler mb-4"
                  type="button"
                  @click="toggleNavCollapse"
                >
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div
                  class="collapse navbar-collapse"
                  id="navbarSupportedContent"
                  ref="collapse"
                >
                  <ul class="navbar-nav mb-2 mb-lg-0">
                    <li class="nav-item">
                      <RouterLink
                        to="/products"
                        class="nav-link text-secondary py-lg-2 py-4"
                        @click="closeNavCollapse"
                      >
                        商品列表
                      </RouterLink>
                    </li>
                    <li class="nav-item">
                      <RouterLink
                        to="/articles"
                        class="nav-link text-secondary py-lg-2 py-4"
                        @click="closeNavCollapse"
                      >
                        咖啡專欄
                      </RouterLink>
                    </li>
                    <li class="nav-item">
                      <RouterLink
                        to="/follows"
                        class="nav-link text-secondary py-lg-2 py-4"
                        @click="closeNavCollapse"
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
import Collapse from 'bootstrap/js/dist/collapse';
import { mapActions, mapState } from 'pinia';
import { RouterLink } from 'vue-router';

export default {
  data() {
    return {
      collapse: {},
    };
  },
  components: { RouterLink },
  methods: {
    ...mapActions(cartStore, ['getCarts']),
    toggleNavCollapse() {
      this.collapse.toggle();
    },
    closeNavCollapse() {
      this.collapse.hide();
    },
  },
  computed: {
    ...mapState(cartStore, ['cart']),
  },
  mounted() {
    this.getCarts();
    this.collapse = new Collapse(this.$refs.collapse, {
      toggle: false,
    });
  },
};
</script>

<style scoped>
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
