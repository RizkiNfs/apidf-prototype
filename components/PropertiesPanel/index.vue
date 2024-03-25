<script setup lang="ts">

import { useEventListener } from '@vueuse/core'

const { selectedNode, deleteSelectedNode } = useFileEditor()

useEventListener('keyup', (e) => {
  if(e.key === 'Delete') {
    deleteSelectedNode()
  }
})


</script>

<template>
  <div class="overflow-auto">
    <properties-panel-view v-if="selectedNode.type==='view' || selectedNode.type==='page'" />
    <properties-panel-text v-if="selectedNode.type==='text'" />
    <properties-panel-image v-if="selectedNode.type==='image'" />
    <properties-panel-list v-if="selectedNode.type==='list'" />
  </div>
</template>