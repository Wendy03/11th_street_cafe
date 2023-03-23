<template>
  <div class="col-md-6">
    <div v-if="cart.carts?.length">
      <div class="d-flex">
        <div class="text-dark active me-2">
          購物車
          <i class="bi bi-caret-right"></i>
        </div>
        <div class="text-gray me-2">
          訂單資訊
          <i class="bi bi-caret-right"></i>
        </div>
        <div class="text-gray">結帳</div>
      </div>
      <div class="d-flex justify-content-between mb-5">
        <h2 class="mt-2 text-brown font-weight-bold">購物車</h2>
        <a href="#" class="fs-3" @click.prevent="deleteAllCarts">
          <i class="bi bi-x-lg text-dark"></i>
        </a>
      </div>
      <div
        v-for="item in cart.carts"
        :key="item.id"
        class="d-flex mt-4 bg-light"
      >
        <div
          style="
            width: 130px;
            max-height: 130px;
            background-size: cover;
            background-position: center;
          "
          class="rounded-0"
          :style="{ backgroundImage: `url(${item.product.imageUrl})` }"
        ></div>
        <div class="w-100 p-3 position-relative">
          <a
            href="#"
            @click.prevent="removeCartItem(item.id)"
            class="position-absolute"
            style="top: 16px; right: 16px"
            ><i class="bi bi-x-lg text-dark"></i
          ></a>
          <p class="mb-0 fw-bold">{{ item.product.title }}</p>
          <p class="d-md-block d-none mb-1 text-muted" style="font-size: 14px">
            {{ item.product.description }}
          </p>
          <div
            class="d-flex flex-md-row flex-column
            justify-content-md-between align-items-md-center w-100"
          >
            <div class="input-group align-items-center">
              <div class="input-group-prepend pe-1">
                <button
                  type="button"
                  class="btn btn-primary btn-sm"
                  @click.prevent="updateCart(item, item.qty - 1)"
                  :disabled="isProcessing || item.qty === 1"
                >
                  <i class="bi bi-dash-lg"></i>
                </button>
              </div>
              <input
                type="text"
                class="form-control form-control-sm border-0
                text-center my-auto shadow-none bg-secondary px-0"
                placeholder=""
                aria-label="Example text with button addon"
                aria-describedby="button-addon1"
                readonly
                :value="item.qty"
              />
              <div class="input-group-append ps-1">
                <button
                  type="button"
                  class="btn btn-primary btn-sm"
                  @click.prevent="updateCart(item, item.qty + 1)"
                  :disabled="isProcessing || item.qty === 5"
                >
                  <i class="bi bi-plus"></i>
                </button>
              </div>
            </div>
            <p class="mb-0 text-end ms-md-6">NT${{ item.total }}</p>
          </div>
        </div>
      </div>
      <table class="table mt-4 text-muted">
        <tbody>
          <tr>
            <th scope="row" class="border-0 px-0 pt-0 font-weight-normal">
              小計
            </th>
            <td class="text-end border-0 px-0 pt-0">NT${{ cart.total }}</td>
          </tr>
        </tbody>
      </table>
      <div class="d-flex justify-content-between mt-4">
        <p class="mb-0 h4 fw-bold">總計</p>
        <p class="mb-0 h4 fw-bold">NT${{ cart.final_total }}</p>
      </div>
      <div
        class="d-flex mt-4 justify-content-between align-items-md-center align-items-end w-100"
      >
        <RouterLink to="/products" class="text-dark mt-5 h5">
          <i class="bi bi-caret-left-fill"></i>
          繼續購物
        </RouterLink>
        <RouterLink
          to="/order"
          class="btn btn-dark btn-block mt-4 rounded-0 py-3"
          >確認訂單
        </RouterLink>
      </div>
    </div>
    <div v-else>
      <h2 class="mt-5 fs-2">購物車目前是空的，快來挑選商品吧！</h2>
      <RouterLink class="btn btn-dark mt-3 text-end" to="/products">
        <i class="bi bi-cart"></i>
        選購去
      </RouterLink>
    </div>
  </div>
  <div v-if="!cart.carts?.length" class="mt-5">
    <HomeCategory />
  </div>
</template>

<script>
import HomeCategory from '@/components/frontend/HomeCategory.vue';
import cartStore from '@/stores/frontend/cartStore';
import statusStore from '@/stores/statusStore';
import { mapActions, mapState } from 'pinia';
import { RouterLink } from 'vue-router';

export default {
  data() {
    return {};
  },
  components: { RouterLink, HomeCategory },
  methods: {
    ...mapActions(cartStore, [
      'getCarts',
      'updateCart',
      'removeCartItem',
      'deleteAllCarts',
    ]),
  },
  computed: {
    ...mapState(cartStore, ['cart']),
    ...mapState(statusStore, ['isProcessing']),
  },
  mounted() {
    this.getCarts();
  },
};
</script>
