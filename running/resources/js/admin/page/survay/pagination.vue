<template>
  <div class="custom-pagination">
    <button @click="previousPage" :disabled="currentPage === 1">Previous</button>
    <div
      v-for="page in displayedPages"
      :key="page"
      @click="goToPage(page)"
      :class="{ active: page === currentPage }"
      id="itemsPagination"
    >
      {{ page }}
    </div>
    <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
  </div>
</template>

<script>
export default {
  props: {
    currentPage: Number,
    totalPages: Number,
    maxPagesToShow: {
      type: Number,
      default: 5, // Number of pages to show between Previous and Next
    },
  },
  computed: {
    displayedPages() {
      const totalPages = this.totalPages;
      const currentPage = this.currentPage;
      const maxPagesToShow = this.maxPagesToShow;
      const half = Math.floor(maxPagesToShow / 2);

      let startPage = currentPage - half;
      if (startPage <= 0) {
        startPage = 1;
      }
      let endPage = startPage + maxPagesToShow - 1;
      if (endPage > totalPages) {
        endPage = totalPages;
        startPage = Math.max(endPage - maxPagesToShow + 1, 1);
      }

      const pages = [];
      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }

      return pages;
    },
  },
  methods: {
    previousPage() {
      if (this.currentPage > 1) {
        this.$emit("page-changed", this.currentPage - 1);
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.$emit("page-changed", this.currentPage + 1);
      }
    },
    goToPage(page) {
      this.$emit("page-changed", page);
    },
  },
};
</script>

<style scoped>
.custom-pagination {
  display: flex;
  justify-content: left;
  align-items: left;
  margin-top: 20px;
}

button {
  margin: 0 10px;
  cursor: pointer;
  padding: 5px 10px;
  border: 1px solid #ccc;
  background-color: #f0f0f0;
  border-radius: 4px;
}

button:disabled {
  cursor: not-allowed;
  background-color: #ccc;
}

#itemsPagination {
  padding: 5px 15px;
  background: #ddd;
  border: 1px solid rgba(0, 0, 0, 0.1);
  margin: 0px 2px;
  border-radius: 5px;
}
</style>
