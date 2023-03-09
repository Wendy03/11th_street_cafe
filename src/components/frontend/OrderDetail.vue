<template>
  <div class="col-lg-4">
    <div class="border p-4 mb-4 bg-light">
      <div v-for="item in cart.carts" :key="item.id" class="d-flex mb-2">
        <div
          style="
            width: 55px;
            max-height: 48px;
            background-size: cover;
            background-position: center;
          "
          class="rounded-0 me-3"
          :style="{ backgroundImage: `url(${item.product.imageUrl})` }"
        ></div>
        <div class="w-100">
          <div class="d-flex justify-content-between">
            <p class="mb-0 fw-bold">{{ item.product.title }}</p>
            <p class="mb-0">NT$ {{ item.product.price }}</p>
          </div>
          <p class="mb-0 fw-bold">x {{ item.qty }}</p>
        </div>
      </div>
      <table class="table mt-4 border-top border-bottom text-muted">
        <tbody>
          <tr>
            <th scope="row" class="border-0 px-0 pt-4 font-weight-normal">
              小計
            </th>
            <td class="text-end border-0 px-0 pt-4">NT${{ cart.total }}</td>
          </tr>
          <tr>
            <th scope="row" class="border-0 px-0 pt-0 pb-4 font-weight-normal">
              付款方式
            </th>
            <td class="text-end border-0 px-0 pt-0 pb-4">ApplePay</td>
          </tr>
        </tbody>
      </table>
      <div class="input-group mb-3 input-group-sm">
        <input
          type="text"
          class="form-control"
          v-model="coupon_code"
          placeholder="請輸入優惠碼"
        />
        <div class="input-group-append">
          <button
            class="btn btn-outline-primary"
            type="button"
            @click="addCouponCode(coupon_code)"
          >
            套用優惠碼
          </button>
        </div>
      </div>
      <div class="d-flex justify-content-between mt-4">
        <p class="mb-0 h4 fw-bold">總計</p>
        <p class="mb-0 h4 fw-bold">NT${{ cart.final_total }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import cartStore from '@/stores/frontend/cartStore';
import { mapActions, mapState, mapWritableState } from 'pinia';

export default {
  data() {
    return {};
  },
  methods: {
    ...mapActions(cartStore, ['getCarts', 'addCouponCode']),
  },
  computed: {
    ...mapState(cartStore, ['cart']),
    ...mapWritableState(cartStore, ['coupon_code']),
  },
  mounted() {
    this.getCarts();
  },
};
</script>
