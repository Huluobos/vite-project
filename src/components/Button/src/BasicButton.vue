<template>
  <el-button v-bind="getBindValue" :class="getButtonClass">
    <template #default="data">
      <!-- <Icon :icon="preIcon" v-if="preIcon" :size="iconSize" /> -->
      <slot v-bind="data || {}"></slot>
      <!-- <Icon :icon="postIcon" v-if="postIcon" :size="iconSize" /> -->
    </template>
  </el-button>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  export default defineComponent({
    name: 'AButton',
    inheritAttrs: false,
  });
</script>
<script lang="ts" setup>
  import { computed } from 'vue';
  // import Icon from '@/components/Icon/src/Icon.vue';
  import { buttonProps } from './props';

  const props = defineProps(buttonProps);
  // get component class
  const getButtonClass = computed(() => {
    const { color, disabled } = props;
    return [
      {
        [`ant-btn-${color}`]: !!color,
        [`is-disabled`]: disabled,
      },
    ];
  });

  // get inherit binding value
  const getBindValue = computed(() => ({ ...props }));
</script>
