<template>
  <div class="bg-primary">
    <div class="container">
      <div class="row justify-content-center py-11">
        <img
          src="https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
          alt="11th Street Cafes"
          class="img-fluid rounded-circle px-0"
          style="width: 170px; height: 170px; object-fit: cover"
        />
        <div class="col-md-4 ms-md-5">
          <h3 style="font-family: 'Neuton', serif" class="mt-md-0 mt-3 fst-italic fw-bolder">
            11<span class="fs-5">th</span> Street Cafe
          </h3>
          <p class="text-secondary">
            “從原產地的一株咖啡樹，到烘焙成一粒粒金黃咖啡豆；堅持採購並且烘焙最高品質的咖啡，這是我們一直努力的基本原則。”
          </p>
          <RouterLink to="/about" class="btn btn-light"> 關於我們 </RouterLink>
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
