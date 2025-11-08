import { defineStore } from 'pinia';

export const useCounterStore = defineStore('store', {
  state: () => ({
    count: 0
  }),
  actions: {
    increment() {
      this.count++;
    }
  }
});
