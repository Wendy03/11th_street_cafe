<template>
  <div>
    <VueLoading v-model:active="isLoading" />
    <div class="text-end mt-4">
      <button
        class="btn btn-dark"
        type="button"
        :disabled="isProcessing"
        @click="openModal('new')"
      >
        建立新的優惠券
      </button>
    </div>
    <div class="table-responsive-lg">
      <table class="table mt-4">
        <thead>
          <tr>
            <th>名稱</th>
            <th>折扣百分比</th>
            <th>到期日</th>
            <th>是否啟用</th>
            <th>編輯</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="coupon in coupons" :key="coupon.id">
            <td>{{ coupon.title }}</td>
            <td>{{ coupon.percent }}%</td>
            <td>{{ $filters.date(coupon.due_date) }}</td>
            <td>
              <span v-if="coupon.is_enabled === 1" class="text-success"
                >啟用</span
              >
              <span v-else class="text-muted">未啟用</span>
            </td>
            <td>
              <div class="btn-group">
                <button
                  type="button"
                  class="btn btn-outline-primary btn-sm"
                  @click="openModal('edit', coupon)"
                >
                  編輯
                </button>
                <button
                  type="button"
                  class="btn btn-outline-danger btn-sm"
                  @click="openModal('del', coupon)"
                >
                  刪除
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <AdminPagination :pages="pagination" @change-page="getCoupons" />
      <CouponModal
        ref="couponModal"
        :coupon="tempCoupon"
        :is-new="isNew"
        :is-processing="isProcessing"
        @update-coupon="updateCoupon"
      />
      <DelCouponModal
        ref="delCouponModal"
        :coupon="tempCoupon"
        :is-processing="isProcessing"
        @del-coupon="delCoupon"
      />
    </div>
  </div>
</template>

<script>
import AdminPagination from '@/components/backend/AdminPagination.vue';
import CouponModal from '@/components/backend/CouponModal.vue';
import Toast from '@/utils/Toast';
import DelCouponModal from '../../components/backend/DelCouponModal.vue';

const { VITE_API, VITE_PATH } = import.meta.env;

export default {
  data() {
    return {
      coupons: [],
      tempCoupon: {},
      couponDate: '',
      pagination: {},
      isNew: false,
      isLoading: false,
      isProcessing: false,
    };
  },
  components: { AdminPagination, CouponModal, DelCouponModal },
  methods: {
    getCoupons(page = 1) {
      this.isLoading = true;
      this.$http
        .get(`${VITE_API}/api/${VITE_PATH}/admin/coupons?page=${page}`)
        .then((res) => {
          const { coupons, pagination } = res.data;
          this.isLoading = false;
          this.coupons = coupons;
          this.pagination = pagination;
        })
        .catch((err) => {
          const errMessage = err.response?.data?.message || '資料錯誤，稍後在試';
          this.isLoading = false;
          Toast.fire({
            title: `${errMessage}`,
            icon: 'error',
          });
        });
    },
    openModal(type, item) {
      if (type === 'new') {
        this.isNew = true;
        this.tempCoupon = {
          due_date: new Date().getTime() / 1000,
          is_enabled: 0,
        };
        this.$refs.couponModal.showModal();
      } else if (type === 'edit') {
        this.isNew = false;
        this.tempCoupon = { ...item };
        this.$refs.couponModal.showModal();
      } else if (type === 'del') {
        this.tempCoupon = { ...item };
        this.$refs.delCouponModal.showModal();
      }
    },
    updateCoupon(tempCoupon) {
      let data = tempCoupon;
      let httpMethod = 'post';
      let url = `${VITE_API}/api/${VITE_PATH}/admin/coupon`;
      if (!this.isNew) {
        httpMethod = 'put';
        url = `${VITE_API}/api/${VITE_PATH}/admin/coupon/${this.tempCoupon.id}`;
        data = this.tempCoupon;
      }
      this.isProcessing = true;
      this.$http[httpMethod](url, { data })
        .then((res) => {
          Toast.fire({
            title: `${res.data.message}`,
            icon: 'success',
          });
          this.isProcessing = false;
          this.$refs.couponModal.hideModal();
          this.getCoupons();
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
    delCoupon() {
      this.isProcessing = true;
      this.$http
        .delete(
          `${VITE_API}/api/${VITE_PATH}/admin/coupon/${this.tempCoupon.id}`,
        )
        .then((res) => {
          Toast.fire({
            title: `${res.data.message}`,
            icon: 'success',
          });
          this.isProcessing = false;
          this.$refs.delCouponModal.hideModal();
          this.getCoupons();
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
    this.getCoupons();
  },
};
</script>
