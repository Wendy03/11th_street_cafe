<template>
  <div class="container py-5">
    <VueLoading v-model:active="isLoading" />
    <div class="row justify-content-center">
      <div class="col-lg-10">
        <div class="d-flex">
          <div class="text-gray active me-2">
            購物車
            <i class="bi bi-caret-right"></i>
          </div>
          <div class="text-dark me-2">
            訂單資訊
            <i class="bi bi-caret-right"></i>
          </div>
          <div class="text-gray">結帳</div>
        </div>
      </div>
    </div>
    <div class="row flex-row-reverse justify-content-center py-4">
      <OrderDetail />
      <OrderForm />
    </div>
  </div>
</template>

<script>
import OrderDetail from '@/components/frontend/OrderDetail.vue';
import OrderForm from '@/components/frontend/OrderForm.vue';
import statusStore from '@/stores/statusStore';
import { mapState } from 'pinia';

export default {
  data() {
    return {};
  },
  components: { OrderForm, OrderDetail },
  computed: {
    ...mapState(statusStore, ['isLoading']),
  },
};
</script>
