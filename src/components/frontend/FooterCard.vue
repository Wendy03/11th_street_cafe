<template>
  <div class="footer bg-black mt-auto">
    <div class="container">
      <div class="text-white py-4">
        <div class="d-flex justify-content-center">
          <ul class="d-flex list-unstyled mb-0">
            <li class="nav-item me-2">
              <RouterLink to="/products" class="nav-link text-light">
                商品列表
              </RouterLink>
            </li>
            <li class="nav-item me-2">
              <RouterLink to="/about" class="nav-link text-light">
                關於我們
              </RouterLink>
            </li>
            <li class="nav-item me-2">
              <RouterLink to="/information" class="nav-link text-light">
                常見問題
              </RouterLink>
            </li>
          </ul>
        </div>
        <div class="d-flex justify-content-center">
          <p class="mb-0 text-center me-2">
            <small>無商業用途，僅供學習使用</small>
          </p>
          <RouterLink to="/login" class="nav-link text-light">
            <i class="bi bi-gear-fill"></i>
          </RouterLink>
        </div>
      </div>
    </div>
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
