<template>
  <div class="subscribe d-flex flex-column justify-content-center">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div>
            <h2 class="text-light fs-md-2 fs-4 mb-6">
              訂閱獲取優惠卷 & 最新商品
            </h2>
            <div class="input-group">
              <input
                type="email"
                v-model="email"
                class="form-control"
                placeholder="請輸入 Email"
                aria-label="請輸入 Email"
                aria-describedby="subscribe"
              />
              <button
                class="btn btn-secondary"
                type="button"
                id="subscribe"
                @click="subscription"
              >
                訂閱
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Toast from '@/utils/Toast';
import Swal from 'sweetalert2';

export default {
  data() {
    return {
      email: '',
    };
  },
  methods: {
    subscription() {
      const mailFormat = /^\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
      if (this.email.search(mailFormat) !== -1) {
        Swal.fire({
          icon: 'success',
          title: '感謝訂閱',
          text: '優惠碼: follow11',
        });
      } else {
        Toast.fire({
          title: 'E-mail未填寫或格式錯誤',
          icon: 'error',
        });
      }
      this.email = '';
    },
  },
};
</script>
