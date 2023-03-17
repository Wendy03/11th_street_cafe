<template>
  <VueLoading v-model:active="isLoading" />
  <div v-if="product.imageUrl">
    <div class="row justify-content-center">
      <div class="col-lg-10">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <RouterLink to="/products">全部商品</RouterLink>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              {{ product.title }}
            </li>
          </ol>
        </nav>
        <h2 class="my-4">{{ product.title }}</h2>
        <div class="row pb-6">
          <div class="col-sm-6">
            <div
              class="position-absolute heart-icon mt-1 ps-1"
              style="cursor: pointer"
              @click.prevent="toggleFollow(product.id)"
            >
              <i
                class="bi bi-heart text-danger shadow-sm p-1 bg-secondary"
                v-if="followIds.indexOf(product.id) === -1"
              ></i>
              <i
                class="bi bi-heart-fill text-danger shadow-sm p-1 bg-secondary"
                v-else
              ></i>
            </div>
            <div
              style="
                min-height: 350px;
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
          <div class="col-sm-6">
            <div class="d-flex flex-column justify-content-between h-100">
              <div>
                <span
                  class="badge bg-primary rounded-pill fw-normal mt-md-0 mt-5"
                >
                  {{ product.category }}
                </span>
              </div>
              <p class="mt-mb-0 mt-3">
                {{ product.category === '周邊商品' ? '' : '咖啡風味：'
                }}{{ product.description }}
              </p>
              <div v-if="product.content">
                【 商品說明 】<br />
                <p class="ms-2" v-html="product.content"></p>
              </div>
              <template v-if="product.category !== '周邊商品'">
                <ul>
                  <li>產地：{{ product.country }}</li>
                  <li>產區：{{ product.area }}</li>
                  <li>處理方法：{{ product.production }}</li>
                  <li>熟豆重量：227g ± 2g</li>
                  <li>保存期限：30 天</li>
                </ul>
              </template>
              <div class="text-end fw-bolder">
                <p class="fs-5">
                  NT$ {{ $filters.currency(product.price) }} 元 /
                  {{ product.unit }}
                </p>
              </div>
              <div class="input-group">
                <select class="form-select" name="qty" v-model.number="qty">
                  <option :value="num" v-for="num in 5" :key="num + 'num'">
                    {{ num }}
                  </option>
                </select>
                <button
                  type="button"
                  class="btn btn-dark"
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
        <div class="py-6">
          <InformationCard />
        </div>
        <hr />
        <template v-if="relativeProduct.length">
          <div class="py-6">
            <h3 class="mb-5">相關商品</h3>
            <div class="row mb-5">
              <div
                v-for="item in relativeProduct"
                :key="item.id"
                class="col-lg-3 col-md-6 mb-0 mb-2"
              >
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
                    <div class="text-end pr-2">NT$ {{ item.price }} 元</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import InformationCard from '@/components/frontend/InformationCard.vue';
import cartStore from '@/stores/frontend/cartStore';
import followsStore from '@/stores/frontend/followsStore';
import productsStore from '@/stores/frontend/productsStore';
import statusStore from '@/stores/statusStore';
import Toast from '@/utils/Toast';
import { mapActions, mapState } from 'pinia';
import { RouterLink } from 'vue-router';

const { VITE_API, VITE_PATH } = import.meta.env;

export default {
  data() {
    return {
      id: '',
      product: {},
      relativeProduct: [],
      qty: 1,
      isProcessing: false,
      isLoading: false,
    };
  },
  components: { RouterLink, InformationCard },
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
