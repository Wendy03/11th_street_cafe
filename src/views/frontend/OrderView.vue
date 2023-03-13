<template>
  <div class="container my-12">
    <VueLoading v-model:active="isLoading" />
    <div class="row justify-content-center pt-4">
      <div class="col-lg-10">
        <nav aria-label="breadcrumb mb-5">
          <ol class="breadcrumb">
            <li class="breadcrumb-item text-gray">購物車</li>
            <li class="breadcrumb-item text-dark active" aria-current="page">
              訂單資訊
            </li>
            <li class="breadcrumb-item text-gray">結帳</li>
          </ol>
        </nav>
      </div>
    </div>
    <div class="row flex-row-reverse justify-content-center py-7">
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
