<template>
  <div class="bg-secondary py-12">
    <div class="container my-5">
      <h2 class="text-center text-dark mb-lg-10 mb-5">咖啡風味</h2>
      <div class="row">
        <div
          class="col-lg-4 my-4"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="800"
        >
          <div class="card border-0 mb-4 h-100 card--hover">
            <a href="#" @click.prevent="toCategory('淺焙咖啡')">
              <div
                style="
                  height: 300px;
                  background-size: cover;
                  background-position: center;
                  background-image: url('https://images.pexels.com/photos/942768/pexels-photo-942768.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
                "
                class="rounded-0"
              ></div>
              <div class="card-body p-0">
                <h4 class="mb-0 mt-4 text-dark text-center">淺焙咖啡</h4>
                <div class="d-flex justify-content-center mt-3">
                  <p class="card-text text-muted mb-0 w-75">
                    也稱為「淺度烘焙」或「城市烘焙」，烘焙過程中咖啡豆表面的油脂還未完全釋放出來，
                    咖啡豆顏色呈現淺棕色，口感帶有明顯的果酸味和較高的咖啡因含量。淺焙的咖啡豆風味清新，
                    帶有一些果香和花香，且帶有較高的酸度和較低的苦度。這種烘焙程度通常適合用在單品咖啡上，
                    能夠保留咖啡豆的原味和風味。
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div
          class="col-lg-4 my-4"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="1500"
        >
          <div class="card border-0 mb-4 h-100 card--hover">
            <a href="#" @click.prevent="toCategory('中焙咖啡')">
              <div
                style="
                  height: 300px;
                  background-size: cover;
                  background-position: center;
                  background-image: url('https://images.pexels.com/photos/2478347/pexels-photo-2478347.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
                "
                class="rounded-0"
              ></div>
              <div class="card-body p-0">
                <h4 class="mb-0 mt-4 text-dark text-center">中焙咖啡</h4>
                <div class="d-flex justify-content-center mt-3">
                  <p class="card-text text-muted mb-0 w-75">
                    也稱為「中度烘焙」或「市場烘焙」，咖啡豆表面的油脂已經開始釋放出來，
                    咖啡豆顏色呈現深棕色，口感帶有較強的甜味和較低的咖啡因含量。中焙的咖啡豆口感圓潤，
                    帶有一些焦糖香和巧克力香，酸度和苦度相對較平衡。這種烘焙程度適合用在單品咖啡和混合咖啡上，能夠保留咖啡豆的風味和增加一些深度和口感。
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div
          class="col-lg-4 my-4"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="2000"
        >
          <div class="card border-0 mb-4 h-100 card--hover">
            <a href="#" @click.prevent="toCategory('深焙咖啡')">
              <div
                style="
                  height: 300px;
                  background-size: cover;
                  background-position: center;
                  background-image: url('https://images.unsplash.com/photo-1523063308874-cecc260a3171?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80');
                "
                class="rounded-0"
              ></div>
              <div class="card-body p-0">
                <h4 class="mb-0 mt-4 text-dark text-center">深焙咖啡</h4>
                <div class="d-flex justify-content-center mt-3">
                  <p class="card-text text-muted mb-0 w-75">
                    也稱為「深度烘焙」或「法式烘焙」，咖啡豆表面的油脂完全釋放出來，
                    咖啡豆顏色呈現深黑色，口感帶有較低的酸度和苦度、較低的咖啡因含量。
                    深焙的咖啡豆口感濃郁，帶有烤焦的味道和苦巧克力香，酸度和果香幾乎消失了。
                    這種烘焙程度通常適合用在混合咖啡和特別混合咖啡上，能夠增加口感的深度和濃郁度。
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import productsStore from '@/stores/frontend/productsStore';

const store = productsStore();

export default {
  data() {
    return {};
  },
  methods: {
    toCategory(Name) {
      store.changeCategory(Name);
      this.$router.push('/products');
    },
  },
};
</script>
