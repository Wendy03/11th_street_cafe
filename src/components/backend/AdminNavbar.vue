<template>
  <div>
    <nav class="navbar navbar-expand navbar-dark bg-dark px-3">
      <router-link to="/" class="navbar-brand fs-1 logo">11 街咖啡</router-link>
      <div class="ms-auto">
        <button
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
export default {
  data() {
    return {};
  },
  methods: {
    logout() {
      document.cookie = 'hexToken=; expires=; path=/';
      this.$router.push('/');
    },
  },
};
</script>
