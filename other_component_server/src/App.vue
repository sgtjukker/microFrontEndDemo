<template>
  <div class="otherApp">
    <p>
        This is a test page on the OTHER micro Frontend Server
    </p>
    <p>
      Below is a span of the mFE components in this project:
    </p>
    <NewComponent/>
</div>
</template>

<script setup lang="ts">
import NewComponent from "./components/NewComponent.vue"
</script>

<style scoped>
  .consumingApp{
    border-radius: 5px;
    border: 2px dashed #0f0;
    background-color: rgba(0,0,255,0.2);
  }
  .externalApp{
    border-radius: 5px;
    border: 2px dashed #00f;
  }
  .infoText{
    font-style: italic;
  }
</style>
