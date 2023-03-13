<template>
  <div class="container my-12">
    <div class="pt-4">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item text-gray">購物車</li>
          <li class="breadcrumb-item text-gray">訂單資訊</li>
          <li class="breadcrumb-item text-dark active" aria-current="page">
            結帳
          </li>
        </ol>
      </nav>
    </div>
    <div class="row py-7">
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
