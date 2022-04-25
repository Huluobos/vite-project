
<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

export default defineComponent({
  name: "HomeView",
  components: {
    HelloWorld,
  },
});
</script>

<template>
  <div>
    test
    <HelloWorld :msg="'msg父传子'"></HelloWorld>
      <el-button type="warning" round>Warning</el-button>
  </div>
</template>
<style scoped> 

</style>