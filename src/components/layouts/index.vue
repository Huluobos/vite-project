<script lang="ts">
import { defineComponent } from "vue"
import BaseHeader from "./BaseHeader.vue"
import BaseSide from "./BaseSide.vue"
  import type { RouteLocation } from 'vue-router';
export default defineComponent({
    name: 'Layout',
    components: { BaseHeader,BaseSide },
    setup(){

    }
  });
</script>

<template>
  <div>
    <div>
     <BaseHeader></BaseHeader>
     <BaseSide></BaseSide>
    </div>
   
    <div class="code">
      <router-view />
    </div>
   
  </div>
</template>

<style scoped>
.code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
