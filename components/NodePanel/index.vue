<script setup lang="ts">
import type { Node } from '@/composables/editor'

import Draggable from 'vuedraggable'

const props = defineProps<{ nodes: Node[], parentNode?: Node }>()


</script>


<template>
  <Draggable item-key="id" class="pl-2" :list="props.nodes" :group="{ name: 'g1' }">
    <template #item="{element: node}: {element: Node}">
      <div :id="node.id" :key="node.id">
        <node-panel-item :node="node" :parent-node="props.parentNode" />
        <node-panel
          v-if="Array.isArray(node.children) && node.children.length >= 0"
          :key="node.id"
          :nodes="node.children"
          :parent-node="node"
        />
      </div>
    </template>
  </Draggable>
</template>


