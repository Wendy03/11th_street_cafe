<template>
  <div class="bg-secondary text-dark py-12 overflow-hidden">
    <div class="container my-5">
      <h2 class="text-dark text-center mb-lg-12 mb-5">精選商品</h2>
      <div
        class="row mb-md-9 mb-4"
        data-aos="fade-left"
        data-aos-once="true"
        data-aos-duration="900"
      >
        <div class="col-md-7">
          <RouterLink to="/product/-NLihoUv9jvcoEhDnM4C">
            <img
              src="https://images.unsplash.com/photo-1607681034540-2c46cc71896d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&h=400&q=80"
              alt="耶加雪菲"
              class="img-fluid shadow rounded"
            />
          </RouterLink>
        </div>
        <div class="col-md-5 m-auto">
          <RouterLink to="/product/-NLihoUv9jvcoEhDnM4C">
            <h4 class="mt-4 text-center text-dark fw-bolder">耶加雪菲</h4>
          </RouterLink>
          <p>
            選自衣索比亞的耶家雪菲，孔加（Konga）的G1日曬豆，除了耶加雪菲特有的花香，尾韻帶有微醺蘭姆酒香。
          </p>
        </div>
      </div>
      <div
        class="row flex-row-reverse justify-content-between mb-md-9 mb-4"
        data-aos="fade-right"
        data-aos-once="true"
        data-aos-duration="900"
      >
        <div class="col-md-7">
          <RouterLink to="/product/-NLzhQESIKMUAxu9fUcE">
            <img
              src="https://images.unsplash.com/photo-1613336027296-0964f455a0d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&h=400&q=80"
              alt="哥倫比亞"
              class="img-fluid shadow rounded"
            />
          </RouterLink>
        </div>
        <div class="col-md-5 m-auto">
          <RouterLink to="/product/-NLzhQESIKMUAxu9fUcE">
            <h4 class="mt-4 text-center text-dark fw-bolder">哥倫比亞</h4>
          </RouterLink>
          <p>
            來自哥倫比亞娜玲瓏（Narino）產區，海拔2,100公尺，聞得到稀有的花香味，入口時散發出熱帶水果與可可交織的濃郁口感，還帶有一點柑橘香
          </p>
        </div>
      </div>
      <div
        class="row"
        data-aos="fade-left"
        data-aos-once="true"
        data-aos-duration="900"
      >
        <div class="col-md-7">
          <RouterLink to="/product/-NLzh79SLXVzt3EaM3ij">
            <img
              src="https://images.unsplash.com/photo-1525088553748-01d6e210e00b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=870&h=400&q=80"
              alt="夏威夷可娜"
              class="img-fluid shadow rounded"
            />
          </RouterLink>
        </div>
        <div class="col-md-5 m-auto">
          <RouterLink to="/product/-NLzh79SLXVzt3EaM3ij">
            <h4 class="mt-4 text-center text-dark fw-bolder">夏威夷可娜</h4>
          </RouterLink>
          <p>
            獅門莊園Lion Gates Farms，以養分豐富的火山土壤及陽光、雨量、
            溫度皆適宜的夏威夷天氣下，所栽培出的精品可娜。
          </p>
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
