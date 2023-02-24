<template>
  <div class="container my-12">
    <VueLoading v-model:active="isLoading"></VueLoading>
    <div class="row flex-row-reverse justify-content-center py-7">
      <OrderDetail/>
      <OrderForm/>
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
