<template>
  <div class="col-6">
    <form id="form" class="form-signin" @submit.prevent="login">
      <div class="form-floating mb-3">
        <input
          type="email"
          class="form-control"
          id="username"
          placeholder="name@example.com"
          v-model="user.username"
          required
          autofocus
        />
        <label for="username">Email address</label>
      </div>
      <div class="form-floating">
        <input
          type="password"
          class="form-control"
          id="password"
          v-model="user.password"
          placeholder="Password"
          required
        />
        <label for="password">Password</label>
      </div>
      <button
        class="btn btn-lg btn-primary w-100 mt-3"
        type="submit"
        :disabled="isProcessing"
      >
        登入
      </button>
    </form>
  </div>
</template>

<script>
import Toast from '../../utils/Toast';

const { VITE_API } = import.meta.env;

export default {
  data() {
    return {
      user: {
        username: '',
        password: '',
      },
      isProcessing: false,
    };
  },
  methods: {
    login() {
      this.isProcessing = true;
      this.$http
        .post(`${VITE_API}/admin/signin`, this.user)
        .then((res) => {
          if (res.data.success) {
            const { token, expired, message } = res.data;
            document.cookie = `hexToken=${token}; expires=${expired}; path=/`;
            this.$router.push('/admin/products');
            Toast.fire({
              title: `${message}`,
              icon: 'success',
            });
          }
        })
        .catch((err) => {
          const errMessage = err.data?.message || '登入失敗';
          this.isProcessing = false;
          Toast.fire({
            title: `${errMessage}`,
            icon: 'error',
          });
        });
    },
  },
};
</script>
