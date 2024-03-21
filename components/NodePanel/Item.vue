<script setup lang="ts">
import type { Node } from '@/composables/editor'
import { Icon } from '@iconify/vue'

const props = defineProps<{ node: Node }>()

const { selectedNode } = useFileEditor()

const showToolbar = ref(false)


</script>


<template>
  <div 
    class="flex gap-x-1" 
    @mouseenter.stop="showToolbar=true" 
    @mouseleave.stop="showToolbar=false"
  >
    <div class="w-4 flex-center">
      <button v-if="showToolbar">
        <Icon icon="icon-park-outline:drag" />
      </button>
    </div>
    <button
      @click.stop="selectedNode = node" 
      class="flex-1"
    >
      <span class="line-clamp-1 text-left">
        {{ props.node.type==='text' ? props.node.children : props.node.type }}
      </span>
    </button>
    <node-panel-toolbar
      v-if="props.node.type !== 'text' && showToolbar"
      :selected-node="node"
    />
  </div>
</template>


