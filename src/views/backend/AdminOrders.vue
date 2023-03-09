<template>
  <div>
    <VueLoading v-model:active="isLoading" />
    <div class="table-responsive-lg">
      <table class="table mt-4">
        <thead>
          <tr>
            <th>購買時間</th>
            <th>Email</th>
            <th>購買款項</th>
            <th>應付金額</th>
            <th>是否付款</th>
            <th>編輯</th>
          </tr>
        </thead>
        <tbody>
          <template v-for="order in orders" :key="order.id">
            <tr v-if="orders.length" :class="{ 'text-gray': !order.is_paid }">
              <td>{{ $filters.date(order.create_at) }}</td>
              <td>
                <span v-text="order.user.email" v-if="order.user"></span>
              </td>
              <td>
                <ul class="list-unstyled">
                  <li v-for="item in order.products" :key="item.id">
                    {{ item.product.title }} 數量：{{ item.qty }}
                    {{ item.product.unit }}
                  </li>
                </ul>
              </td>
              <td class="text-right">{{ $filters.currency(order.total) }}</td>
              <td>
                <div class="form-check form-switch">
                  <input
                    :id="order.id"
                    v-model="order.is_paid"
                    type="checkbox"
                    role="switch"
                    class="form-check-input"
                    @change="updateOrder(order)"
                  />
                  <label class="form-check-label" :for="order.id">
                    <span
                      v-if="order.is_paid"
                      :class="{
                        'text-success': order.is_paid,
                        'font-weight-bold': order.is_paid,
                      }"
                      >{{ order.is_paid ? '已付款' : '尚未付款' }}</span
                    >
                  </label>
                </div>
              </td>
              <td>
                <div class="btn-group">
                  <button
                    class="btn btn-outline-primary btn-sm"
                    type="button"
                    @click="openModal('edit', order)"
                  >
                    檢視
                  </button>
                  <button
                    class="btn btn-outline-danger btn-sm"
                    @click="openModal('del', order)"
                    type="button"
                  >
                    刪除
                  </button>
                </div>
              </td>
            </tr>
          </template>
        </tbody>
      </table>
    </div>
    <AdminPagination :pages="pagination" @change-page="getOrders" />
    <OrderModal
      ref="orderModal"
      @update-order="updateOrder"
      :order="tempOrder"
      :is-processing="isProcessing"
    />
    <DelOrderModal
      ref="delOrderModal"
      @del-order="delOrder"
      :is-processing="isProcessing"
      :order="tempOrder"
    />
  </div>
</template>

<script>
import AdminPagination from '@/components/backend/AdminPagination.vue';
import DelOrderModal from '@/components/backend/DelOrderModal.vue';
import OrderModal from '@/components/backend/OrderModal.vue';
import Toast from '@/utils/Toast';

const { VITE_API, VITE_PATH } = import.meta.env;

export default {
  data() {
    return {
      orders: [],
      tempOrder: {},
      pagination: {},
      isLoading: false,
      isProcessing: false,
    };
  },
  components: { AdminPagination, OrderModal, DelOrderModal },
  methods: {
    getOrders(page = 1) {
      this.isLoading = true;
      this.$http
        .get(`${VITE_API}/api/${VITE_PATH}/admin/orders?page=${page}`)
        .then((res) => {
          const { orders, pagination } = res.data;
          this.isLoading = false;
          this.orders = orders;
          this.pagination = pagination;
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
    openModal(type, item) {
      if (type === 'edit') {
        this.tempOrder = { ...item };
        this.$refs.orderModal.showModal();
      } else if (type === 'del') {
        this.tempOrder = { ...item };
        this.$refs.delOrderModal.showModal();
      }
    },
    updateOrder(item) {
      const paid = {
        is_paid: item.is_paid,
      };
      this.isProcessing = true;
      this.$http
        .put(`${VITE_API}/api/${VITE_PATH}/admin/order/${item.id}`, {
          data: paid,
        })
        .then((res) => {
          Toast.fire({
            title: `${res.data.message}`,
            icon: 'success',
          });
          this.$refs.orderModal.hideModal();
          this.isProcessing = false;
          this.getOrders();
        })
        .catch((err) => {
          this.isProcessing = false;
          const errMessage = err.response?.data?.message || '資料錯誤';
          Toast.fire({
            title: `${errMessage}`,
            icon: 'error',
          });
        });
    },
    delOrder() {
      this.isProcessing = true;
      this.$http
        .delete(`${VITE_API}/api/${VITE_PATH}/admin/order/${this.tempOrder.id}`)
        .then((res) => {
          Toast.fire({
            title: `${res.data.message}`,
            icon: 'success',
          });
          this.$refs.delOrderModal.hideModal();
          this.isProcessing = false;
          this.getOrders();
        })
        .catch((err) => {
          this.isProcessing = false;
          const errMessage = err.response?.data?.message || '資料錯誤';
          Toast.fire({
            title: `${errMessage}`,
            icon: 'error',
          });
        });
    },
  },
  mounted() {
    this.getOrders();
  },
};
</script>
