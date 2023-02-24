<template>
  <NavBar />
  <div class="ec-container">
    <router-view></router-view>
  </div>
  <div
    class="position-fixed end-0 bottom-0 scroll-top-btn pe-3 pb-3"
    v-if="isShowed"
  >
    <button
      type="button"
      class="btn btn-secondary shadow btn-sm"
      @click="scrollToTop"
    >
      <i class="bi bi-arrow-up-circle-fill"></i>
    </button>
  </div>
  <FooterCard />
</template>

<script>
import FooterCard from '@/components/frontend/FooterCard.vue';
import NavBar from '@/components/frontend/NavBar.vue';

export default {
  data() {
    return {
      isShowed: false,
    };
  },
  components: { NavBar, FooterCard },
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    },
    handleScroll() {
      const rootElement = document.documentElement;
      const scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
      if (rootElement.scrollTop / scrollTotal > 0.1) {
        this.isShowed = true;
      } else {
        this.isShowed = false;
      }
    },
  },
  mounted() {
    document.addEventListener('scroll', this.handleScroll);
  },
  unmounted() {
    document.removeEventListener('scroll', this.handleScroll);
  },
};
</script>
