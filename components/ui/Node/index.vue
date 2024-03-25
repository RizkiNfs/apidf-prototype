<script setup lang="ts">
import type { Node } from '@/composables/editor'

const props = defineProps<{ 
  node: Node, 
  parentNode?: Node, 
  data?: unknown 
}>()

const selectedNode = useSelectedNode()


</script>

<template>
  <ui-node-view
    v-if="props.node.type === 'view'"
    :node="props.node"
    :data="data"
    :class="selectedNode?.id === props.node.id && 'outline'"
  />
  <ui-node-text
    v-if="props.node.type === 'text'"
    :node="props.node"
    :data="props.data"
    :class="selectedNode?.id === props.node.id && 'outline'"
  />
  <ui-node-image
    v-if="props.node.type === 'image'"
    :node="(props.node as ImageNode)"
    :data="data"
    :class="selectedNode?.id === props.node.id && 'outline'"
  />
  <ui-node-list
    v-if="props.node.type === 'list'"
    :node="(props.node as ListNode)"
    :data="data"
    :class="selectedNode?.id === props.node.id && 'outline'"
  />
</template>