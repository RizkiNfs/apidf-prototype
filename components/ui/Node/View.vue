<script setup lang="ts">

const props = defineProps<{
  node: ViewNode
  parentNode?: Node
  data?: unknown
}>()

const { selectedNode } = useFileEditor()

</script>

<template>
  <div 
    @click.stop="selectedNode = props.node"
    :style="(props.node.style as any)"
    class="hover:outline-2 hover:outline cursor-pointer items-stretch"
  >
    <template
      v-for="(item) of props.node.children"
      :key="item.id"
    >
      <ui-node
        :node="item"
        :data="props.data"
      />
    </template>
  </div>
</template>