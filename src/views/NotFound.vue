<template>
  <div class="container m-5">
    <h1 class="mb-5">404 Page Not Found</h1>
    <RouterLink to="/">回到首頁</RouterLink>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
  data() {
    return {};
  },
  components: { RouterLink },
};
</script>
