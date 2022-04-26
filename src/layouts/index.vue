<script lang="ts">
import { defineComponent } from "vue"
import BaseHeader from "./BaseHeader.vue"
import BaseSide from "./BaseSide.vue"
import type { RouteLocation } from 'vue-router';
export default defineComponent({
  name: 'Layout',
  components: { BaseHeader, BaseSide },
  setup() {

  }
});
</script>

<template>
  <div>
        <el-container style="height: 500px; border: 1px solid #eee">
       <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <BaseSide></BaseSide>
      </el-aside>
      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <BaseHeader></BaseHeader>
        </el-header>
        <el-main>
          <router-view />
        </el-main>
        <el-footer>
          111111111
        </el-footer>
      </el-container>
    </el-container>
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
