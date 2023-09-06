<template>
  <div class="consumingApp">
    <div class="headerText">
        CONSID mFE Demo
    </div>
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
  .headerText{
    font-weight: bold;
    font-size: 5em;
    color:white;
    text-align: center;
    text-shadow: 2px 2px 4px #000000;
    
  }
  .consumingApp{
    text-align: center;
    /* background-color: #701131;
    border-radius: 5px; */
    /* height: 99%;
    width: 100%; */
  }
  .externalApp{
    border-radius: 5px;
    /* background-color: #F49E88; */
    background-color: rgba(24,24,24,0.5);
    border: 2px dashed #F49E88;
    display:flex;
    flex-direction: row;
    padding: 20px;
    justify-content: center;
  }
  .externalApp div {
    margin-right: 40px;
  }
  .infoText{
    font-style: italic;
    color: aliceblue;
  }
</style>
