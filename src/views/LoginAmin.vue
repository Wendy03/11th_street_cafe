<template>
  <div class="mt-5">
    <div class="row justify-content-center">
      <h1 class="h3 mb-3 font-weight-normal text-center">請先登入</h1>
      <LoginForm />
    </div>
    <p class="mt-5 mb-3 text-muted text-center">&copy; 2021~∞ - 六角學院</p>
  </div>
</template>

<script>
import LoginForm from '@/components/backend/LoginForm.vue';

export default {
  data() {
    return {};
  },
  components: { LoginForm },
};
</script>
