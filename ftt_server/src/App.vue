<template>
  <div class="consumingApp">
    <p>
        This is a test page on the micro Frontend Server
    </p>
    <p>
      Below is a span of the mFE components in this project:
    </p>
    <FTT/>
    <Counter />
</div>
</template>

<script setup lang="ts">
import FTT from "./components/FTT.vue"
import Counter from "./components/Counter.vue"
</script>

<style scoped>
  .consumingApp{
    border-radius: 5px;
    border: 2px dashed #0f0;
    background-color: rgba(0,255,0,0.2);
  }
  .externalApp{
    border-radius: 5px;
    border: 2px dashed #00f;
  }
  .infoText{
    font-style: italic;
  }
</style>
