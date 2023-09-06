
<template>
  <div class="text">
    <img
      src="../../assets/ugly.jpg"
      alt="Official logo"
      style="max-width: 200px; width: 100%; height: 300px"
    />
  </div>
</template>


<script lang="ts">

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

.littleKitten {
  width: 200px;
}
</style>
