<template>
  <div class="bg-primary">
    <div class="container">
      <div class="row justify-content-center py-11">
        <img
          src="https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
          alt="11th Street Cafe"
          class="img-fluid rounded-circle px-0"
          style="width: 170px; height: 170px; object-fit: cover"
        />
        <div class="col-md-4 ms-md-5">
          <h3
            style="font-family: 'Neuton', serif"
            class="mt-md-0 mt-3 fst-italic fw-bolder"
          >
            11<span class="fs-5">th</span> Street Cafe
          </h3>
          <p class="text-secondary">
            “從原產地的一株咖啡樹，到烘焙成一粒粒金黃咖啡豆；堅持採購並且烘焙最高品質的咖啡，這是我們一直努力的基本原則。”
          </p>
          <RouterLink to="/products" class="btn btn-light">
            查看商品
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
  <div class="container my-12">
    <div class="py-md-7 py-5">
      <h3 class="text-center mb-9 font-weight-bold">核心價值</h3>
      <div class="row">
        <div class="col-lg-4 mb-lg-0 mb-6">
          <div
            class="card border-0 mb-4 position-relative position-relative h-100"
          >
            <div
              style="
                height: 300px;
                background-size: cover;
                background-position: center;
                background-image: url('https://images.pexels.com/photos/3421647/pexels-photo-3421647.jpeg?cs=srgb&dl=pexels-gvphotodesign-3421647.jpg&fm=jpg');
              "
              class="rounded-0"
            ></div>
            <div class="card-body p-2">
              <h4 class="card-title font-weight-bold">品質</h4>
              <h6 class="card-subtitle mb-2 text-muted">手工挑豆的</h6>
              <div class="d-flex justify-content-between mt-3">
                <p class="card-text MT-3">
                  生豆常混入雜質及瑕疵豆， 烘焙之前，以人工挑除瑕疵豆，
                  將影響咖啡品質的不良豆挑除。
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 mb-lg-0 mb-6">
          <div
            class="card border-0 mb-4 position-relative position-relative h-100"
          >
            <div
              style="
                height: 300px;
                background-size: cover;
                background-position: center;
                background-image: url('https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
              "
              class="rounded-0"
            ></div>
            <div class="card-body p-2">
              <h4 class="card-title font-weight-bold">新鮮</h4>
              <h6 class="card-subtitle mb-2 text-muted">每天新鮮烘焙</h6>
              <div class="d-flex justify-content-between mt-3">
                <p class="card-text MT-3">
                  咖啡生豆經烘焙後 2 ~ 7 天味道和香氣會達到頂點。
                  新鮮烘焙的咖啡豆可以說是咖啡好喝的最大關鍵！
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div
            class="card border-0 mb-4 position-relative position-relative h-100"
          >
            <div
              style="
                height: 300px;
                background-size: cover;
                background-position: center;
                background-image: url('https://images.pexels.com/photos/1459339/pexels-photo-1459339.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
              "
              class="rounded-0"
            ></div>
            <div class="card-body p-2">
              <h4 class="card-title font-weight-bold">道德採購</h4>
              <h6 class="card-subtitle mb-2 text-muted">回饋當地</h6>
              <div class="d-flex justify-content-between mt-3">
                <p class="card-text MT-3">
                  與種植者合作，投資他們的社區，幫助他們過更好的生活，同時確保他們未來能源源不斷地向我們供應高品質的咖啡。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr />
    <div class="py-md-9 py-6">
      <div class="row">
        <div class="col-lg-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16452.417349836032!2d120.32529178750181!3d23.30272344048618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e85e7ac253331%3A0x30db98652bc42d9e!2z5paw54ef6LuK56uZ!5e0!3m2!1szh-TW!2stw!4v1677178339970!5m2!1szh-TW!2stw"
            width="100%"
            height="350"
            style="border: 0"
            allowfullscreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div class="col-lg-4 ms-lg-3">
          <div class="d-flex flex-column justify-content-center h-100">
            <div class="row justify-content-center">
              <div class="col-lg-10">
                <h3 class="font-weight-bold mt-7">聯絡我們</h3>
                <p class="text mt-5">
                  <i class="bi bi-telephone me-2"></i>電話: 06-1234567
                </p>
                <p class="text mt-2">
                  <i class="bi bi-geo-fill me-2"></i>地址:
                  順著咖啡香就可以找到我們
                </p>
                <p class="text mt-2">
                  <i class="bi bi-envelope-at me-2"></i>E-mail:
                  coffee_11@services.com
                </p>
              </div>
            </div>
          </div>
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
