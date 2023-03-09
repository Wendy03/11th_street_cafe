<template>
  <div class="container my-5">
    <div class="row justify-content-center">
      <div class="my-5 col-lg-8">
        <InformationCard />
      </div>
    </div>
  </div>
</template>

<script>
import InformationCard from '@/components/frontend/InformationCard.vue';

export default {
  data() {
    return {};
  },
  components: { InformationCard },
};
</script>
