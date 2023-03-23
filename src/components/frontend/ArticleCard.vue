<template>
  <div>
    <VueLoading v-model:active="isLoading" />
    <div class="row justify-content-center">
      <div class="col-lg-8">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <RouterLink to="/articles">咖啡專欄</RouterLink>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              {{ article.title }}
            </li>
          </ol>
        </nav>
        <h2 class="mt-5">{{ article.title }}</h2>
        <article class="py-5">
          <p>
            <small class="text-muted">
              {{ $filters.date(article.create_at) }}
            </small>
            -
            <small class="text-muted">作者：{{ article.author }}</small>
          </p>
          <img :src="article.imageUrl" alt="" class="img-fluid mb-3" />
          <div v-html="article.content"></div>
        </article>
        <div
          v-if="articleIndex !== undefined"
          class="d-flex flex-lg-row flex-column justify-content-lg-between py-7"
        >
          <template v-if="articleIndex - 1 >= 0">
            <a
              href="#"
              class="btn btn-link btn-primary text-dark"
              @click.prevent="changeArticle(articleIndex - 1)"
            >
              上一篇：
              {{ articles[articleIndex - 1].title }}
            </a>
          </template>
          <template v-if="articleIndex + 1 < articles.length">
            <a
              href="#"
              class="btn btn-link btn-primary text-dark"
              @click.prevent="changeArticle(articleIndex + 1)"
            >
              下一篇：
              {{ articles[articleIndex + 1].title }}
            </a>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import articlesStore from '@/stores/frontend/articlesStore';
import Toast from '@/utils/Toast';
import { mapActions, mapState } from 'pinia';
import { RouterLink } from 'vue-router';

const { VITE_API, VITE_PATH } = import.meta.env;

export default {
  data() {
    return {
      article: {},
      isLoading: false,
      articleIndex: 0,
    };
  },
  components: { RouterLink },
  methods: {
    ...mapActions(articlesStore, ['getArticles']),
    getArticle() {
      this.isLoading = true;
      const { id } = this.$route.params;
      this.$http
        .get(`${VITE_API}/api/${VITE_PATH}/article/${id}`)
        .then((res) => {
          this.isLoading = false;
          const { article } = res.data;
          this.article = article;
          this.articleIndex = this.articles.filter((item) => item.id === id)[0].num - 1;
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
    changeArticle(index) {
      this.$router.push(`/article/${this.articles[index].id}`);
      setTimeout(() => {
        this.getArticle();
      });
    },
  },
  computed: {
    ...mapState(articlesStore, ['articles']),
  },
  mounted() {
    this.getArticle();
    this.getArticles();
  },
};
</script>
