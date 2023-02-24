<template>
  <div class="col-md-6">
    <form @submit.prevent="payOrder">
      <div class="card rounded-0 py-4 mb-3">
        <div class="card-header border-bottom-0 bg-white px-4 py-0">
          <h2>訂單資訊</h2>
        </div>
        <div class="card-body px-4 py-0">
          <ul class="list-group list-group-flush">
            <li
              v-for="item in order.products"
              :key="item.id"
              class="list-group-item px-0"
            >
              <div class="d-flex mt-2">
                <img
                  :src="item.product?.imageUrl"
                  :alt="item.product?.title"
                  class="me-2"
                  style="width: 60px; height: 60px; object-fit: cover"
                />
                <div class="w-100 d-flex flex-column">
                  <div class="d-flex justify-content-between fw-bold">
                    <h5>{{ item.product?.title }}</h5>
                    <p class="mb-0">x{{ item.qty }}</p>
                  </div>
                  <div class="d-flex justify-content-between mt-auto">
                    <p class="text-muted mb-0">
                      <small>
                        NT${{ $filters.currency(item.product?.price) }}
                      </small>
                    </p>
                    <p class="mb-0">
                      NT${{ $filters.currency(item.product?.price) }}
                    </p>
                  </div>
                </div>
              </div>
            </li>
            <li class="list-group-item px-0 pb-0">
              <table class="table text-muted">
                <tbody>
                  <tr>
                    <th
                      scope="row"
                      class="border-0 px-0 pt-0 font-weight-normal"
                    >
                      Payment
                    </th>
                    <td class="text-end border-0 px-0 pt-0">ApplePay</td>
                  </tr>
                </tbody>
              </table>
              <div class="d-flex justify-content-between mt-2">
                <p class="mb-0 h4 fw-bold">總計</p>
                <p class="mb-0 h4 fw-bold">
                  NT${{ $filters.currency(order.total) }}
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="card rounded-0 py-4">
        <table class="table">
          <tbody>
            <tr>
              <th width="100">Email</th>
              <td>{{ order.user.email }}</td>
            </tr>
            <tr>
              <th>姓名</th>
              <td>{{ order.user.name }}</td>
            </tr>
            <tr>
              <th>收件人電話</th>
              <td>{{ order.user.tel }}</td>
            </tr>
            <tr>
              <th>收件人地址</th>
              <td>{{ order.user.address }}</td>
            </tr>
            <tr>
              <th>付款狀態</th>
              <td>
                <span :class="{ 'text-success': order.is_paid }">
                  {{ order.is_paid ? '付款完成' : '尚未付款' }}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="text-end mt-4" v-if="order.is_paid === false">
        <button type="submit" class="btn btn-primary">確認付款去</button>
      </div>
    </form>
    <div v-if="order.is_paid" class="text-end">
      <router-link to="/" class="btn btn-outline-dark me-2 rounded-0 my-4">
        回首頁
      </router-link>
    </div>
  </div>
</template>

<script>
import Toast from '@/utils/Toast';

const { VITE_API, VITE_PATH } = import.meta.env;
export default {
  data() {
    return {
      order: {
        products: [],
        user: {},
      },
      orderId: '',
      isLoading: false,
      isProcessing: false,
    };
  },
  methods: {
    getOrder() {
      this.isLoading = true;
      this.$http
        .get(`${VITE_API}/api/${VITE_PATH}/order/${this.orderId}`)
        .then((res) => {
          this.isLoading = false;
          const { order } = res.data;
          this.order = order;
        })
        .catch((err) => {
          const errMessage = err.response?.data?.message || '資料錯誤';
          this.isLoading = false;
          Toast.fire({
            title: `${errMessage}`,
            icon: 'error',
          });
        });
    },
    payOrder() {
      this.isLoading = true;
      this.$http
        .post(`${VITE_API}/api/${VITE_PATH}/pay/${this.orderId}`)
        .then(() => {
          this.isLoading = false;
          this.getOrder();
          Toast.fire({
            title: '付款成功',
            icon: 'success',
          });
        })
        .catch((err) => {
          const errMessage = err.response?.data?.message || '資料錯誤';
          this.isLoading = false;
          Toast.fire({
            title: `${errMessage}`,
            icon: 'error',
          });
        });
    },
  },
  mounted() {
    this.orderId = this.$route.params.orderId;
    this.getOrder();
  },
};
</script>
