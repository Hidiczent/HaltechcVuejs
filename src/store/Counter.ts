// src/stores/counter.ts
import { defineStore } from 'pinia';

interface CounterState {
  count: number; // set state 
}

export const useCounterStore = defineStore('counter', { // create store using definestore
  state: (): CounterState => ({
    count: 0, // set default state 
  }),
  //  set acction for state 
  actions: {
    increment() {
      this.count++; // 
    },
    decrement() {
      this.count--;
    },
  },
});
