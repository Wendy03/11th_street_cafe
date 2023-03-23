<template>
  <div class="container py-6">
    <div class="d-flex">
      <div class="text-gray active me-2">
        購物車
        <i class="bi bi-caret-right"></i>
      </div>
      <div class="text-gray me-2">
        訂單資訊
        <i class="bi bi-caret-right"></i>
      </div>
      <div class="text-dark">結帳</div>
    </div>
    <div class="row py-4">
      <CheckoutCard />
    </div>
  </div>
</template>

<script>
import CheckoutCard from '@/components/frontend/CheckoutCard.vue';
import cartStore from '@/stores/frontend/cartStore';
import { mapActions, mapState } from 'pinia';

export default {
  data() {
    return {};
  },
  components: { CheckoutCard },
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
