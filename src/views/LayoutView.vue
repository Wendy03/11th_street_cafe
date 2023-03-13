<template>
  <NavBar />
  <main class="flex-shrink-0">
    <div class="main-container">
      <RouterView />
    </div>
  </main>
  <GoTop />
  <FooterCard />
</template>

<script>
import FooterCard from '@/components/frontend/FooterCard.vue';
import GoTop from '@/components/frontend/GoTop.vue';
import NavBar from '@/components/frontend/NavBar.vue';
import { RouterView } from 'vue-router';

export default {
  data() {
    return {};
  },
  components: {
    RouterView,
    NavBar,
    FooterCard,
    GoTop,
  },
};
</script>
