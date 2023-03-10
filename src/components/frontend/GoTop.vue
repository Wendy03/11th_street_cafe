<template>
  <div
    class="position-fixed end-0 bottom-0 scroll-top-btn pe-3 pb-4"
    v-if="isShowed"
  >
    <button
      type="button"
      class="btn btn-secondary shadow btn"
      @click="scrollToTop"
    >
      <i class="bi bi-arrow-up-circle-fill fs-4 text-dark"></i>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShowed: false,
    };
  },
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
