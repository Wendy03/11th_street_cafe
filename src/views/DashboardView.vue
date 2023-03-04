<template>
  <AdminNavbar/>
  <div class="container py-3">
    <AdminTabs/>
    <router-view v-if="isAuth"></router-view>
  </div>
</template>

<script>
import AdminNavbar from '@/components/backend/AdminNavbar.vue';
import AdminTabs from '@/components/backend/AdminTabs.vue';
import Toast from '@/utils/Toast';

const { VITE_API } = import.meta.env;

export default {
  data() {
    return {
      isAuth: false,
    };
  },
  components: { AdminNavbar, AdminTabs },
  methods: {
    checkAdmin() {
      const token = document.cookie.replace(
        /(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,
        '$1',
      );
      if (token) {
        this.$http.defaults.headers.common.Authorization = token;
        this.$http
          .post(`${VITE_API}/api/user/check`)
          .then(() => {
            this.isAuth = true;
          })
          .catch((err) => {
            const errMessage = err.data?.message || '沒有權限，請登入';
            this.isProcessing = false;
            Toast.fire({
              title: `${errMessage}`,
              icon: 'error',
            });
          });
      } else {
        Toast.fire({
          title: '請先登入',
          icon: 'error',
        });
        this.$router.push('/login');
      }
    },
  },
  mounted() {
    this.checkAdmin();
  },
};
</script>
