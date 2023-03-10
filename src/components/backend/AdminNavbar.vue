<template>
  <div>
    <nav class="navbar navbar-expand navbar-dark bg-black px-3">
      <RouterLink to="/" class="navbar-brand fs-1 logo">11 街咖啡</RouterLink>
      <div class="ms-auto">
        <button
          type="button"
          class="btn btn-secondary btn-sm rounded"
          @click.prevent="logout"
        >
          登出
        </button>
      </div>
    </nav>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
  data() {
    return {};
  },
  components: { RouterLink },
  methods: {
    logout() {
      document.cookie = 'hexToken=; expires=; path=/';
      this.$router.push('/');
    },
  },
};
</script>
