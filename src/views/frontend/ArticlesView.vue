<template>
  <div class="container my-13">
    <h2 class="pt-5 text-center">咖啡專欄</h2>
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
