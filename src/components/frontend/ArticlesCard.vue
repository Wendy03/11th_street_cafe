<template>
  <div class="row justify-content-center py-5">
    <div class="col-lg-8">
      <template v-for="article in articles" :key="article.id">
        <div v-if="article.isPublic" class="card mb-3">
          <div class="row g-0">
            <div class="col-md-4">
              <img
                :src="article.imageUrl"
                class="img-fluid rounded-start h-md-100"
                :alt="article.title"
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">{{ article.title }}</h5>
                <div class="card-text">
                  <div v-html="article.description"></div>
                </div>
                <div class="text-end mt-3">
                  <RouterLink
                    :to="`/article/${article.id}`"
                    v-if="article.isPublic"
                  >
                    READ MORE
                  </RouterLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import articlesStore from '@/stores/frontend/articlesStore';
import statusStore from '@/stores/statusStore';
import { mapActions, mapState } from 'pinia';
import { RouterLink } from 'vue-router';

export default {
  data() {
    return {};
  },
  components: { RouterLink },
  methods: {
    ...mapActions(articlesStore, ['getArticles']),
  },
  computed: {
    ...mapState(articlesStore, ['articles']),
    ...mapState(statusStore, ['isLoading', 'isProcessing']),
  },
  mounted() {
    this.getArticles();
  },
};
</script>
