<template>
  <div class="col-lg-6">
    <h3 class="mb-3">客戶資訊</h3>
    <v-form ref="form" v-slot="{ errors }" @submit="createOrder">
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <v-field
          id="email"
          name="email"
          type="email"
          class="form-control"
          :class="{ 'is-invalid': errors['email'] }"
          placeholder="請輸入 Email"
          rules="email|required"
          v-model="form.user.email"
        ></v-field>
        <error-message name="email" class="invalid-feedback"></error-message>
      </div>

      <div class="mb-3">
        <label for="name" class="form-label">收件人姓名</label>
        <v-field
          id="name"
          name="姓名"
          type="text"
          class="form-control"
          :class="{ 'is-invalid': errors['姓名'] }"
          placeholder="請輸入姓名"
          rules="required"
          v-model="form.user.name"
        ></v-field>
        <error-message name="姓名" class="invalid-feedback"></error-message>
      </div>

      <div class="mb-3">
        <label for="tel" class="form-label">收件人電話</label>
        <v-field
          id="tel"
          name="電話"
          type="tel"
          class="form-control"
          :class="{ 'is-invalid': errors['電話'] }"
          placeholder="請輸入電話"
          rules="required|min:8|max:10|numeric"
          v-model="form.user.tel"
        ></v-field>
        <error-message name="電話" class="invalid-feedback"></error-message>
      </div>

      <div class="mb-3">
        <label for="address" class="form-label">收件人地址</label>
        <v-field
          id="address"
          name="地址"
          type="text"
          class="form-control"
          :class="{ 'is-invalid': errors['地址'] }"
          placeholder="請輸入地址"
          rules="required"
          v-model="form.user.address"
        ></v-field>
        <error-message name="地址" class="invalid-feedback"></error-message>
      </div>

      <div class="mb-3">
        <label for="message" class="form-label">留言</label>
        <textarea
          id="message"
          class="form-control"
          cols="30"
          rows="10"
          v-model="form.message"
        ></textarea>
      </div>
      <div
        class="d-flex mt-4 justify-content-between align-items-md-center align-items-end w-100"
      >
        <div>
          <router-link to="/cart" class="text-dark mt-6"
            ><i class="fas fa-chevron-left me-2"></i>回購物車</router-link
          >
        </div>
        <div class="text-end">
          <button
            type="submit"
            class="btn btn-primary"
            :disabled="isProcessing"
          >
            送出訂單
          </button>
        </div>
      </div>
    </v-form>
  </div>
</template>

<script>
import Toast from '@/utils/Toast';

const { VITE_API, VITE_PATH } = import.meta.env;

export default {
  data() {
    return {
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
        },
        message: '',
      },
      isProcessing: false,
    };
  },
  methods: {
    createOrder() {
      this.isProcessing = true;
      const order = this.form;
      this.$http
        .post(`${VITE_API}/api/${VITE_PATH}/order`, { data: order })
        .then((res) => {
          const { message, orderId } = res.data;
          this.isProcessing = false;
          this.$refs.form.resetForm();
          Toast.fire({
            title: `${message}`,
            icon: 'success',
          });
          this.$router.push(`/checkout/${orderId}`);
        })
        .catch(() => {
          this.isProcessing = false;
          Toast.fire({
            title: '無法新增資料，稍後再試',
            icon: 'error',
          });
        });
    },
  },
};
</script>
