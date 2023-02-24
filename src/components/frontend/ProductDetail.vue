<template>
  <VueLoading v-model:active="isLoading"></VueLoading>
  <div v-if="product.imageUrl">
    <nav aria-label="breadcrumb mt-5">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link to="/products">全部商品</router-link>
        </li>
        <li class="breadcrumb-item active" aria-current="page">
          {{ product.title }}
        </li>
      </ol>
    </nav>
    <h2 class="mb-3">{{ product.title }}</h2>
    <div class="row">
      <div class="col-sm-5">
        <div
          class="position-absolute heart-icon mt-1"
          style="cursor: pointer"
          @click.prevent="toggleFollow(product.id)"
        >
          <i
            class="bi bi-heart text-danger shadow-sm p-1 bg-body rounded rounded-circle"
            v-if="followIds.indexOf(product.id) === -1"
          ></i>
          <i
            class="bi bi-heart-fill text-danger shadow-sm p-1 bg-body rounded rounded-circle"
            v-else
          ></i>
        </div>
        <div
          style="
            min-height: 50vh;
            background-size: cover;
            background-position: center;
          "
          :style="{ backgroundImage: `url(${product.imageUrl})` }"
        ></div>
        <template
          v-for="(img, index) in product.imagesUrl"
          :key="index + 'img'"
        >
          <div class="row" v-if="img">
            <div class="col-3">
              <img
                :src="img"
                :alt="index + 'img'"
                class="card-image mt-2 w-100"
              />
            </div>
          </div>
        </template>
      </div>
      <div class="col-sm-7">
        <span class="badge bg-primary rounded-pill mb-2">{{
          product.category
        }}</span>
        <p>商品描述：{{ product.description }}</p>
        <p v-if="product.content">商品內容：{{ product.content }}</p>
        <template v-if="product.category !== '周邊商品'">
          <ul>
            <li>產地：{{ product.country }}</li>
            <li>產區：{{ product.area }}</li>
            <li>處理方法：{{ product.production }}</li>
            <li>熟豆重量：227g ± 2g</li>
            <li>保存期限：30 天</li>
          </ul>
        </template>
        <div class="h5">
          {{ $filters.currency(product.price) }} 元 / {{ product.unit }}
        </div>
        <div class="input-group mt-5 w-75">
          <select class="form-select" name="qty" v-model.number="qty">
            <option :value="num" v-for="num in 5" :key="num + 'num'">
              {{ num }}
            </option>
          </select>
          <button
            type="button"
            class="btn btn-primary"
            @click="addToCart(product.id, qty)"
          >
            <span
              v-if="product.id === loadingItem"
              class="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            ></span>
            加入購物車
          </button>
        </div>
      </div>
    </div>
  </div>
  <hr />
  <template v-if="relativeProduct.length">
    <h3 class="mt-7">相關商品</h3>
    <div>
      <swiper
        :slidesPerView="1"
        :spaceBetween="10"
        :pagination="{
          clickable: true,
        }"
        allowTouchMove: true
        :breakpoints="{
          425: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide v-for="item in relativeProduct" :key="item.id">
          <div class="card h-100">
            <div
              style="
                min-height: 200px;
                background-size: cover;
                background-position: center;
                cursor: pointer;
              "
              :style="{ backgroundImage: `url(${item.imageUrl})` }"
              @click.prevent="toggleId(item.id)"
            ></div>
            <div class="card-body">
              <h6 class="card-title">
                {{ item.title }}
              </h6>
              <div class="text-right pr-2">{{ item.price }} 元</div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </template>
</template>

<script>
import cartStore from '@/stores/frontend/cartStore';
import followsStore from '@/stores/frontend/followsStore';
import productsStore from '@/stores/frontend/productsStore';
import statusStore from '@/stores/statusStore';
import Toast from '@/utils/Toast';
import { mapActions, mapState } from 'pinia';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';
import 'swiper/css/pagination';

const { VITE_API, VITE_PATH } = import.meta.env;

export default {
  data() {
    return {
      id: '',
      modules: [Pagination],
      product: {},
      relativeProduct: [],
      qty: 1,
      isProcessing: false,
      isLoading: false,
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  methods: {
    ...mapActions(productsStore, ['getProducts']),
    ...mapActions(cartStore, ['addToCart']),
    ...mapActions(followsStore, ['getFollows', 'toggleFollow']),
    getProduct() {
      this.isLoading = true;
      this.$http
        .get(`${VITE_API}/api/${VITE_PATH}/product/${this.id}`)
        .then((res) => {
          this.isLoading = false;
          const { product } = res.data;
          this.product = product;
          this.getRelative();
        })
        .catch((err) => {
          const errMessage = err.response?.data?.message || '資料錯誤';
          this.isLoading = false;
          Toast.fire({
            title: `${errMessage}`,
            icon: 'error',
          });
        });
    },
    getRelative() {
      const { category, id } = this.product;
      this.relativeProduct = this.products.filter(
        (item) => item.category === category && item.id !== id,
      );
    },
    toggleId(id) {
      this.$router.push(`/product/${id}`);
      this.id = id;
      this.getProduct();
    },
  },
  computed: {
    ...mapState(statusStore, ['loadingItem']),
    ...mapState(productsStore, ['products']),
    ...mapState(followsStore, ['followIds']),
  },
  created() {
    const { id } = this.$route.params;
    this.id = id;
    this.getProducts();
  },
  mounted() {
    this.getProduct();
  },
};
</script>
