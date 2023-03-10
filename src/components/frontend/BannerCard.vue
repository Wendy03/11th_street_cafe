<template>
  <div class="banner">
    <div class="banner-img d-flex align-items-center">
      <div class="container d-flex flex-column">
        <h2 class="text-white ms-lg-5 mb-5 fs-1 lh-lg fw-bolder">
          來自世界各地的豆子<br />為您帶來一杯獨一無二的咖啡
        </h2>
        <div>
          <RouterLink to="/products" class="btn btn-primary ms-5 fs-5">
            訂購去
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
