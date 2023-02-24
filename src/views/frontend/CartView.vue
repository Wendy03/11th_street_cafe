<template>
  <div class="container my-5">
    <div class="row justify-content-center py-5">
      <CartList />
    </div>
  </div>
</template>

<script>
import CartList from '@/components/frontend/CartList.vue';

export default {
  data() {
    return {};
  },
  components: { CartList },
};
</script>
