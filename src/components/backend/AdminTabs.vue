<template>
  <div class="mt-5">
    <ul class="nav nav-tabs">
      <li class="nav-item">
        <RouterLink to="/admin/products" class="nav-link">
          產品管理
        </RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink to="/admin/orders" class="nav-link"> 訂單管理 </RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink to="/admin/coupons" class="nav-link">
          優惠卷管理
        </RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink to="/admin/articles" class="nav-link">
          文章管理
        </RouterLink>
      </li>
    </ul>
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
