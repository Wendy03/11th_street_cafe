<template>
  <div>
    <VueLoading v-model:active="isLoading"></VueLoading>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link to="/articles">咖啡專欄</router-link>
        </li>
        <li class="breadcrumb-item active" aria-current="page">
          {{ article.title }}
        </li>
      </ol>
    </nav>
    <div class="row justify-content-center my-8">
      <article class="col-lg-8">
        <h2>{{ article.title }}</h2>
        <p>
          <small class="text-muted">{{
            $filters.date(article.create_at)
          }}</small>
          -
          <small class="text-muted">作者：{{ article.author }}</small>
        </p>
        <img :src="article.imageUrl" alt="" class="img-fluid mb-3" />
        <div v-html="article.content"></div>
      </article>
    </div>
  </div>
</template>

<script>
import Toast from '@/utils/Toast';

const { VITE_API, VITE_PATH } = import.meta.env;

export default {
  data() {
    return {
      article: {},
      isLoading: false,
    };
  },
  methods: {
    getArticle() {
      this.isLoading = true;
      const { id } = this.$route.params;
      this.$http
        .get(`${VITE_API}/api/${VITE_PATH}/article/${id}`)
        .then((res) => {
          this.isLoading = false;
          const { article } = res.data;
          this.article = article;
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
  },
  mounted() {
    this.getArticle();
  },
};
</script>
