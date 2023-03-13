<template>
  <div class="container py-6">
    <h2 class="mb-6 text-center">咖啡專欄</h2>
    <ArticlesCard />
  </div>
</template>

<script>
import ArticlesCard from '@/components/frontend/ArticlesCard.vue';

export default {
  data() {
    return {};
  },
  components: { ArticlesCard },
};
</script>
