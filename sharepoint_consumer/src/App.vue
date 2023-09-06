<template>
  <div class="consumingApp">
    <p>
      <b>
        SHAREPOINT
      </b>
    </p>
    <p>
        This is a FTT Micro Frontend Test
    </p>
    <p class="infoText">FTT component from module federation should be below</p>
    <div class="externalApp">
      <div>
      <FTT/>
    </div>
    <div>
      <Counter />
    </div>
    <div>
      <CatView/>
    </div>
    </div>
    <p  class="infoText">FTT component from module federation should be above</p>
</div>
</template>

<script setup lang="ts">
import FTT from "remote/FTT"
import Counter from "remote/Counter"
import CatView from "otherRemote/NewComponent"

</script>

<style scoped>
  .consumingApp{
    background-color: #701131;
    border-radius: 5px;
    border: 2px solid #f00;
  }
  .externalApp{
    border-radius: 5px;
    border: 2px dashed #F49E88;
    display:flex;
    flex-direction: row;
  }
  .externalApp div {
    margin-right: 40px;
  }
  .infoText{
    font-style: italic;
    color: aliceblue;
  }
</style>
