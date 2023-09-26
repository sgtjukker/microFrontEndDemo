
<template>
  <div class="cuteCats">
    <img
      src="../../assets/ugly.jpg"
      alt="Official logo"
      style="max-width: 200px; width: 100%; height: 300px"
    />
    <img
      src="../../assets/ugly2.jpg"
      alt="Official logo"
      style="max-width: 200px; width: 100%; height: 300px; margin-left:20px"
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
.cuteCats {
  color: #888;
  font:500;
  display: flex;
  flex-direction: row;
}

.littleKitten {
  width: 200px;
}
</style>
