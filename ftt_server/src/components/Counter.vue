
<template>
  <div class="text">
    <span>I like to press the button</span>
    <p>
      <input type="button" value="Add" :on:click="Add">
    </p>
    <p>
        {{ counter }}
    </p>
  </div>
</template>


<script lang="ts">
//import { Observable } from 'windowed-observable';

// const observable = new Observable('messages');
// observable.subscribe(handleNewMessage);

export default {
  
  methods: {
    Add() {
      this.counter++;
    }
  },
  data() {
    var counter = 0;
    return {
      counter
    }
  }
}
</script>


<style scoped>
.text {
  color: #888;
  font:500
}
</style>
