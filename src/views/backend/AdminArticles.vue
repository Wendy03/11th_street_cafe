<template>
  <div>
    <VueLoading v-model:active="isLoading" />
    <div class="text-end mt-4">
      <button
        class="btn btn-dark"
        type="button"
        :disabled="isProcessing"
        @click="openModal('new')"
      >
        建立新文章
      </button>
    </div>
    <div class="table-responsive-lg">
      <table class="table mt-4">
        <thead>
          <tr>
            <th style="width: 200px">標題</th>
            <th style="width: 200px">作者</th>
            <th>描述</th>
            <th style="width: 100px">建立時間</th>
            <th style="width: 100px">是否公開</th>
            <th style="width: 120px">編輯</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="article in articles" :key="article.id">
            <td>{{ article.title }}</td>
            <td>{{ article.author }}</td>
            <td>{{ article.description }}</td>
            <td>{{ $filters.date(article.create_at) }}</td>
            <td>
              <span v-if="article.isPublic">已上架</span>
              <span v-else>未上架</span>
            </td>
            <td>
              <div class="btn-group">
                <button
                  class="btn btn-outline-primary btn-sm"
                  type="button"
                  :disabled="isProcessing"
                  @click="getArticle(article.id)"
                >
                  編輯
                </button>
                <button
                  class="btn btn-outline-danger btn-sm"
                  type="button"
                  @click="openModal('del', article)"
                >
                  刪除
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <AdminPagination :pages="pagination" @change-page="getArticles" />
    <ArticleModal
      ref="articleModal"
      :article="tempArticle"
      :is-new="isNew"
      :is-processing="isProcessing"
      @update-article="updateArticle"
    />
    <DelArticleModal
      ref="delArticleModal"
      :article="tempArticle"
      :is-processing="isProcessing"
      @del-article="delArticle"
    />
  </div>
</template>

<script>
import AdminPagination from '@/components/backend/AdminPagination.vue';
import ArticleModal from '@/components/backend/ArticleModal.vue';
import Toast from '@/utils/Toast';
import DelArticleModal from '../../components/backend/DelArticleModal.vue';

const { VITE_API, VITE_PATH } = import.meta.env;

export default {
  data() {
    return {
      articles: [],
      tempArticle: {},
      pagination: {},
      isNew: false,
      isLoading: false,
      isProcessing: false,
    };
  },
  components: { AdminPagination, ArticleModal, DelArticleModal },
  methods: {
    getArticles(page = 1) {
      this.isLoading = true;
      this.$http
        .get(`${VITE_API}/api/${VITE_PATH}/admin/articles?page=${page}`)
        .then((res) => {
          const { articles, pagination } = res.data;
          this.isLoading = false;
          this.articles = articles;
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
    getArticle(id) {
      const api = `${VITE_API}/api/${VITE_PATH}/admin/article/${id}`;
      this.isLoading = true;
      this.$http
        .get(api)
        .then((res) => {
          this.isLoading = false;
          if (res.data.success) {
            this.openModal('edit', res.data.article);
            this.isNew = false;
          }
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
        this.tempArticle = {
          isPublic: false,
          create_at: new Date().getTime() / 1000,
          tag: [],
        };
        this.$refs.articleModal.showModal();
      } else if (type === 'edit') {
        this.tempArticle = { ...item };
        this.isNew = false;
        this.$refs.articleModal.showModal();
      } else if (type === 'del') {
        this.tempArticle = { ...item };
        this.$refs.delArticleModal.showModal();
      }
    },
    updateArticle(article) {
      this.tempArticle = { ...article };
      let httpMethod = 'post';
      let url = `${VITE_API}/api/${VITE_PATH}/admin/article`;
      if (!this.isNew) {
        httpMethod = 'put';
        url = `${VITE_API}/api/${VITE_PATH}/admin/article/${this.tempArticle.id}`;
      }
      this.isProcessing = true;
      this.$http[httpMethod](url, { data: this.tempArticle })
        .then((res) => {
          Toast.fire({
            title: `${res.data.message}`,
            icon: 'success',
          });
          this.isProcessing = false;
          this.$refs.articleModal.hideModal();
          this.getArticles();
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
    delArticle() {
      this.isProcessing = true;
      this.$http
        .delete(
          `${VITE_API}/api/${VITE_PATH}/admin/article/${this.tempArticle.id}`,
        )
        .then((res) => {
          Toast.fire({
            title: `${res.data.message}`,
            icon: 'success',
          });
          this.$refs.delArticleModal.hideModal();
          this.isProcessing = false;
          this.getArticles();
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
    this.getArticles();
  },
};
</script>
