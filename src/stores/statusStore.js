import { defineStore } from 'pinia';

export default defineStore('loadingStore', {
  state: () => ({
    loadingItem: '',
    isProcessing: false,
    isLoading: false,
  }),
});
