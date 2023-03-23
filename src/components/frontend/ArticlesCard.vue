<template>
  <div class="row justify-content-center py-3">
    <div class="col-lg-8">
      <template v-for="article in articles" :key="article.id">
        <div v-if="article.isPublic" class="card mb-6">
          <div class="row g-0">
            <div class="col-md-4">
              <img
                :src="article.imageUrl"
                class="img-fluid rounded-start h-md-100"
                :alt="article.title"
              />
            </div>
            <div class="col-md-8">
              <RouterLink
                class="text-dark"
                :to="`/article/${article.id}`"
                v-if="article.isPublic"
              >
                <div
                  class="card-body d-flex flex-column justify-content-between h-100"
                >
                  <h5 class="card-title text-dark">{{ article.title }}</h5>
                  <div class="card-text fw-normal">
                    <div v-html="article.description"></div>
                  </div>
                  <div class="text-end mt-md-0 mt-5">READ MORE</div>
                </div>
              </RouterLink>
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
