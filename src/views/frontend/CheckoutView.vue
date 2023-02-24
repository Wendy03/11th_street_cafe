<template>
  <div class="container my-12">
    <div class="row py-7">
      <div class="col-md-6">
        <h2>訂單完成</h2>
        <div class="mt-4">
          <h5>感謝訂購</h5>
          <p class="ml-2">訂單完成預計1~2天出貨</p>
          <div
            style="
              height: 300px;
              background-size: cover;
              background-position: center;
              background-image: url('https://images.unsplash.com/photo-1495774856032-8b90bbb32b32?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80');
            "
          ></div>
        </div>
      </div>
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
