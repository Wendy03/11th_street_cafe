<template>
  <div
    class="modal fade"
    id="couponModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="modal"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header bg-black text-white">
          <h5 class="modal-title" id="exampleModalLabel">
            <span>{{ isNew ? '新增優惠卷' : '編輯優惠卷' }}</span>
          </h5>
          <button
            type="button"
            class="btn-close btn-close-white"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <VForm
          ref="form"
          v-slot="{ errors }"
          @submit="$emit('update-coupon', tempCoupon)"
        >
          <div class="modal-body">
            <div class="mb-3">
              <label for="title">標題</label>
              <VField
                name="標題"
                type="text"
                class="form-control"
                id="title"
                v-model="tempCoupon.title"
                :class="{ 'is-invalid': errors['標題'] }"
                rules="required"
                placeholder="請輸入標題"
              />
              <ErrorMessage name="標題" class="invalid-feedback" />
            </div>
            <div class="mb-3">
              <label for="coupon_code">優惠碼</label>
              <VField
                name="優惠碼"
                type="text"
                class="form-control"
                id="coupon_code"
                v-model="tempCoupon.code"
                :class="{ 'is-invalid': errors['優惠碼'] }"
                rules="required"
                placeholder="請輸入優惠碼"
              />
              <ErrorMessage name="優惠碼" class="invalid-feedback" />
            </div>
            <div class="mb-3">
              <label for="due_date">到期日</label>
              <input
                type="date"
                class="form-control"
                id="due_date"
                v-model="due_date"
              />
            </div>
            <div class="mb-3">
              <label for="price">折扣百分比</label>
              <VField
                name="折扣百分比"
                type="number"
                class="form-control"
                id="price"
                min="0"
                max="100"
                v-model.number="tempCoupon.percent"
                :class="{ 'is-invalid': errors['折扣百分比'] }"
                rules="required|min_value:0|max_value:100|numeric|integer"
                placeholder="請輸入折扣百分比"
              />
              <ErrorMessage name="折扣百分比" class="invalid-feedback" />
            </div>
            <div class="mb-3">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  :true-value="1"
                  :false-value="0"
                  v-model="tempCoupon.is_enabled"
                  id="is_enabled"
                />
                <label class="form-check-label" for="is_enabled">
                  是否啟用
                </label>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-gray" data-bs-dismiss="modal">
              Close
            </button>
            <button type="submit" class="btn btn-dark" :disabled="isProcessing">
              <span
                class="spinner-grow spinner-grow-sm"
                role="status"
                aria-hidden="true"
                v-if="isProcessing"
              ></span>
              {{ isNew ? '新增優惠卷' : '更新優惠券' }}
            </button>
          </div>
        </VForm>
      </div>
    </div>
  </div>
</template>

<script>
import modalMixin from '@/mixins/modalMixin';

export default {
  props: {
    coupon: {
      type: Object,
      default() {
        return {};
      },
    },
    isNew: {
      type: Boolean,
      default: false,
    },
    isProcessing: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      modal: {},
      tempCoupon: {},
      due_date: '',
    };
  },
  mixins: [modalMixin],
  watch: {
    coupon() {
      this.tempCoupon = this.coupon;
      const dateAndTime = new Date(this.tempCoupon.due_date * 1000)
        .toISOString()
        .split('T');
      [this.due_date] = dateAndTime;
    },
    due_date() {
      this.tempCoupon.due_date = Math.floor(new Date(this.due_date) / 1000);
    },
  },
  methods: {},
};
</script>
