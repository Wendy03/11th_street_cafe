<template>
  <div>
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item" :class="{ disabled: pages.current_page === 1 }">
          <a
            class="page-link"
            href="#"
            aria-label="Previous"
            @click.prevent="$emit('changePage', pages.current_page - 1)"
          >
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li
          v-for="page in pages.total_pages"
          :key="page + 'page'"
          class="page-item"
          :class="{ active: page === pages.current_page }"
        >
          <span class="page-link" v-if="page === pages.current_page">{{
            page
          }}</span>
          <a
            class="page-link"
            href="#"
            v-else
            @click.prevent="$emit('change-page', page)"
            >{{ page }}</a
          >
        </li>
        <li
          class="page-item"
          :class="{ disabled: pages.current_page === pages.total_pages }"
        >
          <a
            class="page-link"
            href="#"
            aria-label="Next"
            @click.prevent="$emit('change-page', pages.current_page + 1)"
          >
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ['pages'],
};
</script>
