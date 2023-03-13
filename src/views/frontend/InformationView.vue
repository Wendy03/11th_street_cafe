<template>
  <div class="container py-7">
    <div class="row justify-content-center">
      <div class="col-lg-8">
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
