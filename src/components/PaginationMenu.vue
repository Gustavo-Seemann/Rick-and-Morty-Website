<template>
  <div
    class="pagination"
  >
    <button
      @click="previousPage"
      :disabled="currentPage === 1"
      class="pagination-btn previous-btn"
    >
      <i class="bi bi-chevron-left" />
    </button>
    <div class="pagination-info">
      Página {{ props.currentPage }} de {{ props.totalPages }}
    </div>
    <button
      @click="nextPage"
      :disabled="currentPage === totalPages"
      class="pagination-btn next-btn"
    >
      <i class="bi bi-chevron-right" />
    </button>
  </div>
</template>


<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  currentPage: { type: Number, default: 0},
  totalPages: { type: Number, default: 0}
});

const emits = defineEmits(['next-page', 'previous-page']);

const nextPage = () => {
  emits('next-page');
};

const previousPage = () => {
  emits('previous-page');
};
</script>


<style scoped>
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.pagination-btn {
  padding: 8px;
  font-size: 16px;
  border: none;
  background-color: rgb(12, 187, 120);
  color: white;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.pagination-btn:hover {
  background-color: rgb(0, 160, 110);
}

.pagination-btn:disabled {
  background-color: rgb(211, 211, 211);
  cursor: not-allowed;
}

.pagination-info {
  margin: 0 10px;
  font-size: 16px;
  font-weight: bold;
}
</style>