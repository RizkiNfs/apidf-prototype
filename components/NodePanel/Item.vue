<script setup lang="ts">
import type { Node } from '@/composables/editor'
import { Icon } from '@iconify/vue'

const props = defineProps<{ node: Node, parentNode?: Node }>()

const { setSelectedNode } = useFileEditor()

const showToolbar = ref(false)

const visibleToolbarType = [
  'view',
  'list',
  'page'
]

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
      @click.stop="setSelectedNode(node, parentNode)" 
      class="flex-1"
    >
      <span class="line-clamp-1 text-left">
        {{ props.node.type==='text' ? props.node.children : props.node.type }}
      </span>
    </button>
    <node-panel-toolbar
      v-if="showToolbar && visibleToolbarType.includes(props.node.type)"
      :selected-node="node"
    />
  </div>
</template>


