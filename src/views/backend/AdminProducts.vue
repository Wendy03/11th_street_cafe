<template>
  <div class="mt-2">
    <VueLoading v-model:active="isLoading" />
    <div>
      <div class="text-end mt-4">
        <button class="btn btn-dark" @click="openModal('new')">
          建立新的產品
        </button>
      </div>
      <div class="table-responsive-lg">
        <table class="table mt-4">
          <thead>
            <tr>
              <th width="120">分類</th>
              <th>產品名稱</th>
              <th width="120">原價</th>
              <th width="120">售價</th>
              <th width="100">是否啟用</th>
              <th width="120">編輯</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="product in products" :key="product.id">
              <td>{{ product.category }}</td>
              <td>{{ product.title }}</td>
              <td class="text-center">
                {{ $filters.currency(product.origin_price) }}
              </td>
              <td class="text-center">
                {{ $filters.currency(product.price) }}
              </td>
              <td>
                <span :class="{ 'text-success': product.is_enabled }">{{
                  product.is_enabled ? '啟用' : '未啟用'
                }}</span>
              </td>
              <td>
                <div class="btn-group">
                  <button
                    type="button"
                    class="btn btn-outline-primary btn-sm"
                    @click="openModal('edit', product)"
                  >
                    編輯
                  </button>
                  <button
                    type="button"
                    class="btn btn-outline-danger btn-sm"
                    @click="openModal('del', product)"
                  >
                    刪除
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <AdminPagination :pages="pagination" @change-page="getProducts" />
      <ProductModal
        ref="productModal"
        @update-product="updateProduct"
        :product="tempProduct"
        :is-processing="isProcessing"
        :is-new="isNew"
      />
      <DelProductModalVue
        ref="delProductModal"
        @del-product="delProduct"
        :is-processing="isProcessing"
        :product="tempProduct"
      />
    </div>
  </div>
</template>

<script>
import AdminPagination from '@/components/backend/AdminPagination.vue';
import DelProductModalVue from '@/components/backend/DelProductModal.vue';
import ProductModal from '@/components/backend/ProductModal.vue';
import Toast from '@/utils/Toast';

const { VITE_API, VITE_PATH } = import.meta.env;

export default {
  data() {
    return {
      products: [],
      tempProduct: {
        imagesUrl: [],
      },
      pagination: {},
      isNew: false,
      isLoading: false,
      isProcessing: false,
    };
  },
  components: { AdminPagination, ProductModal, DelProductModalVue },
  methods: {
    getProducts(page = 1) {
      this.isLoading = true;
      this.$http
        .get(`${VITE_API}/api/${VITE_PATH}/admin/products?page=${page}`)
        .then((res) => {
          const { products, pagination } = res.data;
          this.isLoading = false;
          this.products = products;
          this.pagination = pagination;
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
    openModal(type, item) {
      if (type === 'new') {
        this.isNew = true;
        this.tempProduct = {
          imagesUrl: [],
        };
        this.$refs.productModal.showModal();
      } else if (type === 'edit') {
        this.tempProduct = { ...item };
        this.isNew = false;
        this.$refs.productModal.showModal();
      } else if (type === 'del') {
        this.tempProduct = { ...item };
        this.$refs.delProductModal.showModal();
      }
    },
    updateProduct() {
      let httpMethod = 'post';
      let url = `${VITE_API}/api/${VITE_PATH}/admin/product`;
      if (!this.isNew) {
        httpMethod = 'put';
        url = `${VITE_API}/api/${VITE_PATH}/admin/product/${this.tempProduct.id}`;
      }
      this.isProcessing = true;
      this.loadingItem = '';
      this.$http[httpMethod](url, { data: this.tempProduct })
        .then((res) => {
          Toast.fire({
            title: `${res.data.message}`,
            icon: 'success',
          });
          this.isProcessing = false;
          this.$refs.productModal.hideModal();
          this.getProducts();
        })
        .catch((err) => {
          this.isProcessing = false;
          const errMessage = err.response?.data?.message || '資料錯誤';
          Toast.fire({
            title: `${errMessage}`,
            icon: 'error',
          });
        });
    },
    delProduct() {
      this.isProcessing = true;
      this.$http
        .delete(
          `${VITE_API}/api/${VITE_PATH}/admin/product/${this.tempProduct.id}`,
        )
        .then((res) => {
          Toast.fire({
            title: `${res.data.message}`,
            icon: 'success',
          });
          this.$refs.delProductModal.hideModal();
          this.isProcessing = false;
          this.getProducts();
        })
        .catch((err) => {
          this.isProcessing = false;
          const errMessage = err.response?.data?.message || '資料錯誤';
          Toast.fire({
            title: `${errMessage}`,
            icon: 'error',
          });
        });
    },
  },
  mounted() {
    this.getProducts();
  },
};
</script>
