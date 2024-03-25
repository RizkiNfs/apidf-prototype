<script setup lang="ts">
import type { ImageNode } from '@/composables/editor'

const props = defineProps<{ 
  node: ImageNode
  parentNode?: Node
  data?: unknown
}>()

const { selectedNode } = useFileEditor()


</script>

<template>
  <img
    @click.stop="selectedNode = props.node"
    :src="props.node.src"
    :style="(props.node.style as any)" 
    class="hover:outline-2 hover:outline cursor-pointer"
  >
  </img>
</template>