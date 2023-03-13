<template>
  <div class="container py-6">
    <VueLoading v-model:active="isLoading" />
    <div class="row">
      <ProductCategory />
      <ProductList />
    </div>
  </div>
</template>

<script>
import ProductCategory from '@/components/frontend/ProductCategory.vue';
import ProductList from '@/components/frontend/ProductList.vue';
import statusStore from '@/stores/statusStore';
import { mapState } from 'pinia';

export default {
  data() {
    return {};
  },
  components: { ProductCategory, ProductList },
  computed: {
    ...mapState(statusStore, ['isLoading']),
  },
};
</script>
